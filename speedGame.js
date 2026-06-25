const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Colors,
} = require("discord.js");

const { createSpeedGame, getSpeedGame, endSpeedGame, SPEED_ROUND_DURATION_MS, SPEED_RESULT_DURATION_MS } = require("./speedGameState");
const { getRandomSpeedQuestion, checkAnswer } = require("./speedQuestions");
const { recordWin } = require("./leaderboard");

// ─── EMBED HELPERS ─────────────────────────────────────────────────────────────

function questionEmbed(game, question) {
  const eligible   = game.getEligiblePlayers();
  const winners    = [...game.phaseWinners.values()].map(w => w.username);
  const timerSecs  = SPEED_ROUND_DURATION_MS / 1000;
  const isJoining  = game.phase === "joining";

  const embed = new EmbedBuilder()
    .setColor(Colors.Blue)
    .setTitle(`⚡ Speed Round — Phase ${game.phaseNumber}, Round ${game.phaseRound}`)
    .setDescription(
      `**${question.question}**\n\n` +
      `⏱️ **${timerSecs} seconds** — type your answer in this channel!\n` +
      (isJoining ? `Anyone who types becomes a player.\n\n` : `\n`) +
      (winners.length > 0 ? `🏆 **Already won this phase:** ${winners.join(", ")}\n` : ``) +
      `👥 **Still competing:** ${eligible.map(p => p.username).join(", ") || "everyone"}`
    )
    .setFooter({ text: `Round ${game.roundNumber} overall • Phase ${game.phaseNumber}` })
    .setTimestamp();

  // Skip button only from round 2 onward
  if (game.phaseRound > 1 || game.phaseNumber > 1) {
    const btn = new ButtonBuilder()
      .setCustomId("speed_skip")
      .setLabel("⏭️ Skip Question")
      .setStyle(ButtonStyle.Secondary);
    return { embeds: [embed], components: [new ActionRowBuilder().addComponents(btn)] };
  }

  return { embeds: [embed], components: [] };
}

function roundResultEmbed(game, question, winner, timedOut) {
  const active = game.getActivePlayers();
  let desc;

  if (timedOut && !winner) {
    desc = `⏰ **Nobody answered in time!**\n\n**Correct answer:** \`${question.answer}\``;
  } else if (winner) {
    desc =
      `✅ **${winner.username}** answered first!\n` +
      `Answer: \`${game.roundAnswers.get(winner.id)?.answer || question.answer}\`\n\n` +
      `**Correct answer:** \`${question.answer}\``;
  } else {
    desc = `No one answered.\n\n**Correct answer:** \`${question.answer}\``;
  }

  return new EmbedBuilder()
    .setColor(winner ? Colors.Green : Colors.Orange)
    .setTitle(`📊 Round ${game.phaseRound} Result — Phase ${game.phaseNumber}`)
    .setDescription(desc)
    .addFields({
      name: "Phase standings",
      value:
        [...game.phaseWinners.values()].map(w => `🏆 ${w.username} (won round ${w.wonRound})`).join("\n") ||
        "No winners yet this phase",
    })
    .setFooter({ text: "Next round in 8 seconds…" })
    .setTimestamp();
}

function phaseEndEmbed(game, eliminated) {
  const remaining = game.getActivePlayers();
  return new EmbedBuilder()
    .setColor(Colors.Red)
    .setTitle(`💀 Phase ${game.phaseNumber} Complete — ${eliminated.username} Eliminated!`)
    .setDescription(
      `**${eliminated.username}** couldn't win a single round this phase and is out.\n\n` +
      `**Still standing:** ${remaining.map(p => p.username).join(", ") || "Nobody"}`
    )
    .setFooter({ text: remaining.length > 1 ? "Starting Phase " + (game.phaseNumber) + " now…" : "" })
    .setTimestamp();
}

function winnerEmbed(winner, soloGame) {
  return new EmbedBuilder()
    .setColor(soloGame ? Colors.Grey : Colors.Gold)
    .setTitle(soloGame ? "🎮 Speed Round — Solo Run" : "🏆 Speed Round Winner!")
    .setDescription(
      soloGame
        ? `**${winner.username}** was the only player. No leaderboard point awarded.`
        : `🎉 Congratulations **${winner.username}**! You outlasted everyone!`
    )
    .setFooter({ text: "Use /startspeed to play again • /leaderboard for rankings" })
    .setTimestamp();
}

function drawEmbed() {
  return new EmbedBuilder()
    .setColor(Colors.DarkRed)
    .setTitle("💀 Everyone's Out!")
    .setDescription("No one could answer the last question — game over with no winner.")
    .setFooter({ text: "Use /startspeed to try again" })
    .setTimestamp();
}

// ─── DISABLE SKIP BUTTON ───────────────────────────────────────────────────────
async function disableSkipButton(game) {
  try {
    if (game.questionMessage) {
      const btn = new ButtonBuilder()
        .setCustomId("speed_skip")
        .setLabel("⏭️ Skip Question")
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(true);
      await game.questionMessage.edit({ components: [new ActionRowBuilder().addComponents(btn)] });
    }
  } catch { /* ignore */ }
}

// ─── MAIN GAME LOOP ────────────────────────────────────────────────────────────

async function startSpeedRound(game, channel) {
  const active   = game.getActivePlayers();
  const eligible = game.getEligiblePlayers();

  // ── Win condition: 1 player left ──────────────────────────────────────────
  if (active.length <= 1) {
    if (active.length === 1) {
      const winner   = active[0];
      const soloGame = game.peakPlayerCount < 2;
      if (!soloGame) recordWin(winner.id, winner.username);
      await channel.send({ embeds: [winnerEmbed(winner, soloGame)] });
    } else {
      await channel.send({ embeds: [drawEmbed()] });
    }
    endSpeedGame(channel.id);
    return;
  }

  // ── Phase complete check: all eligible done, find who didn't win ──────────
  // All active players have won a round this phase → find the one without a win
  if (eligible.length === 0 && active.length > 0) {
    // Should never happen — phase resolves before this — but safety check
    await resolvePhase(game, channel);
    return;
  }

  // ── Pick question ─────────────────────────────────────────────────────────
  const question = getRandomSpeedQuestion(game.usedQuestionIds);
  if (!question) {
    await channel.send("⚠️ Ran out of questions! Game over.");
    endSpeedGame(channel.id);
    return;
  }

  game.usedQuestionIds.add(question.id);
  game.currentQuestion = question;
  game.roundAnswers.clear();
  game.roundWinner   = null;
  game.phase         = game.phaseRound === 0 ? "joining" : "answering";
  game.phaseRound++;
  game.roundNumber++;
  game.skipVotes.clear();

  game.questionMessage = await channel.send(questionEmbed(game, question));

  game.roundTimer = setTimeout(async () => {
    await resolveSpeedRound(game, channel, true);
  }, SPEED_ROUND_DURATION_MS);
}

async function resolveSpeedRound(game, channel, timedOut = false) {
  if (game.phase !== "answering" && game.phase !== "joining") return;
  game.phase = "result";

  clearTimeout(game.roundTimer);
  await disableSkipButton(game);

  const question = game.currentQuestion;
  const winner   = game.roundWinner
    ? { id: game.roundWinner, username: game.players.get(game.roundWinner)?.username || game.roundWinner }
    : null;

  // Record phase winner
  if (winner) {
    game.phaseWinners.set(winner.id, { username: winner.username, wonRound: game.phaseRound });
  }

  await channel.send({ embeds: [roundResultEmbed(game, question, winner, timedOut)] });

  // ── Check if phase is over ────────────────────────────────────────────────
  // Phase ends when (active players - 1) have all won a round
  // The one player who hasn't won is eliminated
  const active   = game.getActivePlayers();
  const eligible = game.getEligiblePlayers();

  // If only 1 active player couldn't win (and everyone else has), phase is done
  if (eligible.length === 1 && active.length > 1) {
    game.resultTimer = setTimeout(async () => {
      await resolvePhase(game, channel);
    }, SPEED_RESULT_DURATION_MS);
    return;
  }

  // If nobody could win this round (timed out, no winner) and there's only 1 eligible left
  // after previous rounds — also resolve phase
  if (eligible.length === 0) {
    game.resultTimer = setTimeout(async () => {
      await resolvePhase(game, channel);
    }, SPEED_RESULT_DURATION_MS);
    return;
  }

  // Continue phase
  game.resultTimer = setTimeout(async () => {
    await startSpeedRound(game, channel);
  }, SPEED_RESULT_DURATION_MS);
}

async function resolvePhase(game, channel) {
  // Find who didn't win a round this phase
  const active   = game.getActivePlayers();
  const losers   = active.filter(p => !game.phaseWinners.has(p.id));

  if (losers.length === 0) {
    // Everyone won a round — extremely rare, restart phase with no elimination
    game.startNewPhase();
    await channel.send("🔄 Everyone won a round this phase — starting a new phase with no elimination!");
    await startSpeedRound(game, channel);
    return;
  }

  // If multiple didn't win (e.g. nobody answered all round), eliminate all of them
  for (const loser of losers) {
    game.eliminatePlayer(loser.id);
  }

  const loserNames = losers.map(l => l.username).join(", ");
  await channel.send({ embeds: [phaseEndEmbed(game, losers[0])] });

  const remaining = game.getActivePlayers();

  if (remaining.length <= 1) {
    game.resultTimer = setTimeout(async () => {
      if (remaining.length === 1) {
        const soloGame = game.peakPlayerCount < 2;
        if (!soloGame) recordWin(remaining[0].id, remaining[0].username);
        await channel.send({ embeds: [winnerEmbed(remaining[0], soloGame)] });
      } else {
        await channel.send({ embeds: [drawEmbed()] });
      }
      endSpeedGame(channel.id);
    }, SPEED_RESULT_DURATION_MS);
    return;
  }

  // Start next phase
  game.startNewPhase();
  game.resultTimer = setTimeout(async () => {
    await channel.send(`🔄 **Phase ${game.phaseNumber} begins!** ${remaining.map(p => p.username).join(", ")} are still in.`);
    await startSpeedRound(game, channel);
  }, SPEED_RESULT_DURATION_MS);
}

// ─── HANDLE PLAYER MESSAGES ────────────────────────────────────────────────────

async function handleSpeedMessage(message, game) {
  if (game.phase !== "answering" && game.phase !== "joining") return;

  const userId   = message.author.id;
  const username = message.author.username;
  const content  = message.content.trim();
  if (!content) return;

  // Phase 1 round 1 (joining): anyone who types joins
  if (game.phase === "joining" && !game.players.has(userId)) {
    game.addPlayer(userId, username);
  }

  // Must be an active player
  const player = game.players.get(userId);
  if (!player || !player.active) return;

  // Phase winners can't answer this phase
  if (game.phaseWinners.has(userId)) return;

  // Already answered this round
  if (game.roundAnswers.has(userId)) return;

  // Record the attempt
  game.roundAnswers.set(userId, { answer: content, timestamp: Date.now() });

  // Check correctness
  const correct = checkAnswer(game.currentQuestion, content);

  if (correct && !game.roundWinner) {
    // First correct answer — this player wins the round
    game.roundWinner = userId;
    clearTimeout(game.roundTimer);
    await message.react("✅");
    await message.channel.send(`✅ **${username}** got it first!`);
    await resolveSpeedRound(game, message.channel, false);
  } else if (correct && game.roundWinner) {
    // Correct but too late
    await message.react("🥈");
  } else {
    // Wrong answer
    await message.react("❌");
  }

  // Early start for joining round: if expectedPlayers set and reached
  if (game.phase === "joining" && game.expectedPlayers !== null) {
    if (game.players.size >= game.expectedPlayers) {
      clearTimeout(game.roundTimer);
      await message.channel.send(`⚡ All **${game.expectedPlayers}** players joined — starting!`);
      await resolveSpeedRound(game, message.channel, false);
    }
  }
}

// ─── HANDLE SKIP BUTTON ────────────────────────────────────────────────────────

async function handleSpeedSkip(interaction, game) {
  if (game.phase !== "answering") {
    return interaction.reply({ content: "No active round to skip.", flags: 64 });
  }

  const userId       = interaction.user.id;
  const eligible     = game.getEligiblePlayers();
  const isEligible   = eligible.some(p => p.id === userId);

  if (!isEligible) {
    return interaction.reply({ content: "❌ Only active players who haven't won this phase can vote to skip.", flags: 64 });
  }

  if (game.skipUsedRounds.has(game.roundNumber)) {
    return interaction.reply({ content: "❌ Skip already used this round.", flags: 64 });
  }

  if (game.skipVotes.has(userId)) {
    return interaction.reply({ content: "You already voted to skip!", flags: 64 });
  }

  game.skipVotes.add(userId);
  const needed    = Math.ceil(eligible.length / 2);
  const current   = game.skipVotes.size;
  const remaining = needed - current;

  await interaction.reply({
    content: `⏭️ **${interaction.user.username}** voted to skip! (${current}/${needed}${remaining > 0 ? ` — ${remaining} more needed` : ""})`,
  });

  if (current >= needed) {
    game.skipUsedRounds.add(game.roundNumber);
    clearTimeout(game.roundTimer);
    await disableSkipButton(game);

    // Pick replacement question
    const newQ = getRandomSpeedQuestion(game.usedQuestionIds);
    if (!newQ) {
      await interaction.channel.send("⚠️ No replacement question available.");
      await resolveSpeedRound(game, interaction.channel, true);
      return;
    }

    game.usedQuestionIds.add(newQ.id);
    game.currentQuestion = newQ;
    game.roundAnswers.clear();
    game.roundWinner = null;
    game.skipVotes.clear();
    game.phase = "answering";

    await interaction.channel.send({ embeds: [new EmbedBuilder().setColor(Colors.Orange).setTitle("⏭️ Question Skipped!").setDescription("Here's a new question!").setTimestamp()] });

    setTimeout(async () => {
      game.questionMessage = await interaction.channel.send(questionEmbed(game, newQ));
      game.roundTimer = setTimeout(async () => {
        await resolveSpeedRound(game, interaction.channel, true);
      }, SPEED_ROUND_DURATION_MS);
    }, 2000);
  }
}

module.exports = {
  startSpeedRound,
  resolveSpeedRound,
  resolvePhase,
  handleSpeedMessage,
  handleSpeedSkip,
  // embeds needed by index.js for the /startspeed reply
  winnerEmbed,
  drawEmbed,
};
