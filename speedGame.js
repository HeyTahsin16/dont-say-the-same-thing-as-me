const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Colors,
} = require("discord.js");

const {
  endSpeedGame,
  SPEED_JOIN_DURATION_MS,
  SPEED_ROUND_DURATION_MS,
  SPEED_RESULT_DURATION_MS,
} = require("./speedGameState");
const { getRandomSpeedQuestion, checkAnswer } = require("./speedQuestions");
const { recordWin } = require("./leaderboard");

// ─── EMBED HELPERS ─────────────────────────────────────────────────────────────

function joiningEmbed(game, question, timerSecs) {
  return {
    embeds: [
      new EmbedBuilder()
        .setColor(Colors.Purple)
        .setTitle("⚡ Speed Round — Joining Phase")
        .setDescription(
          `**Question:** ${question.question}\n\n` +
          `📝 **Type any answer to join the game!** You have **${timerSecs} seconds**.\n` +
          `The first person to type the correct answer also scores a bonus point for this round.\n\n` +
          `👥 **Players joined so far:** ${game.players.size > 0 ? [...game.players.values()].map(p => p.username).join(", ") : "none yet"}`
        )
        .setFooter({ text: `${timerSecs}s to join • Anyone who types becomes a player` })
        .setTimestamp(),
    ],
    components: [],
  };
}

function competitiveEmbed(game, question) {
  const eligible = game.getEligiblePlayers();
  const winners  = [...game.phaseWinners.values()].map(w => w.username);
  const timerSecs = SPEED_ROUND_DURATION_MS / 1000;

  const embed = new EmbedBuilder()
    .setColor(Colors.Blue)
    .setTitle(`⚡ Speed Round — Phase ${game.phaseNumber}, Round ${game.phaseRound}`)
    .setDescription(
      `**${question.question}**\n\n` +
      `⏱️ **${timerSecs} seconds** — first correct answer wins the round!\n\n` +
      (winners.length > 0 ? `🏆 **Won this phase:** ${winners.join(", ")}\n` : ``) +
      `👥 **Competing:** ${eligible.map(p => p.username).join(", ") || "nobody"}`
    )
    .setFooter({ text: `Round ${game.phaseRound} • Phase ${game.phaseNumber}` })
    .setTimestamp();

  const btn = new ButtonBuilder()
    .setCustomId("speed_skip")
    .setLabel("⏭️ Skip Question")
    .setStyle(ButtonStyle.Secondary);

  return { embeds: [embed], components: [new ActionRowBuilder().addComponents(btn)] };
}

function joinResultEmbed(game, question, firstCorrect) {
  const players = [...game.players.values()];
  return new EmbedBuilder()
    .setColor(Colors.Green)
    .setTitle("✅ Joining Phase Over!")
    .setDescription(
      `**Answer:** \`${question.answer}\`\n\n` +
      (firstCorrect ? `🏅 **First correct answer:** ${firstCorrect.username}\n\n` : ``) +
      `**Players in this game (${players.length}):** ${players.map(p => p.username).join(", ")}\n\n` +
      `First competitive round starts in 8 seconds!`
    )
    .setTimestamp();
}

function roundResultEmbed(game, question, winner, timedOut) {
  let desc;
  if (timedOut && !winner) {
    desc = `⏰ **Nobody answered in time!**\n\n**Correct answer:** \`${question.answer}\``;
  } else if (winner) {
    const given = game.roundAnswers.get(winner.id)?.answer || question.answer;
    desc =
      `✅ **${winner.username}** answered first!\n` +
      `Answer: \`${given}\`\n\n` +
      `**Correct answer:** \`${question.answer}\``;
  } else {
    desc = `No one answered.\n\n**Correct answer:** \`${question.answer}\``;
  }

  const standings = [...game.phaseWinners.values()]
    .map(w => `🏆 ${w.username} (round ${w.wonRound})`)
    .join("\n") || "No winners yet this phase";

  return new EmbedBuilder()
    .setColor(winner ? Colors.Green : Colors.Orange)
    .setTitle(`📊 Round ${game.phaseRound} Result — Phase ${game.phaseNumber}`)
    .setDescription(desc)
    .addFields({ name: "Phase standings", value: standings })
    .setFooter({ text: "Next round in 8 seconds…" })
    .setTimestamp();
}

function phaseEndEmbed(game, losers) {
  const remaining = game.getActivePlayers();
  const names = losers.map(l => l.username).join(", ");
  return new EmbedBuilder()
    .setColor(Colors.Red)
    .setTitle(`💀 Phase ${game.phaseNumber} Complete!`)
    .setDescription(
      `**Eliminated:** ${names}\n` +
      `(${losers.length > 1 ? "they" : "they"} couldn't win a single round this phase)\n\n` +
      `**Still standing:** ${remaining.map(p => p.username).join(", ") || "Nobody"}`
    )
    .setFooter({ text: remaining.length > 1 ? `Phase ${game.phaseNumber + 1} starting soon…` : "" })
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
    .setDescription("No one could answer — game over with no winner.")
    .setFooter({ text: "Use /startspeed to try again" })
    .setTimestamp();
}

// ─── HELPERS ───────────────────────────────────────────────────────────────────

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

function checkWinCondition(game) {
  const active = game.getActivePlayers();
  if (active.length === 0) return "draw";
  if (active.length === 1) return "winner";
  return null;
}

// ─── JOINING ROUND ─────────────────────────────────────────────────────────────
// Round 1 only: collects players, no elimination, no phase winner declared.
// Anyone who types any message becomes a player.
// If someone answers correctly first, they get a flag but it doesn't end the round.
// Round ends when: timer expires OR expected player count reached.

async function startJoiningRound(game, channel) {
  const question = getRandomSpeedQuestion(game.usedQuestionIds);
  if (!question) {
    await channel.send("⚠️ No questions available! Game over.");
    endSpeedGame(channel.id);
    return;
  }

  game.usedQuestionIds.add(question.id);
  game.currentQuestion  = question;
  game.roundAnswers.clear();
  game.roundWinner      = null; // first correct answer in joining round (bonus only)
  game.phase            = "joining";
  game.roundNumber      = 1;
  game.skipVotes.clear();

  const timerSecs = SPEED_JOIN_DURATION_MS / 1000;
  game.questionMessage = await channel.send(joiningEmbed(game, question, timerSecs));

  game.roundTimer = setTimeout(async () => {
    await resolveJoiningRound(game, channel);
  }, SPEED_JOIN_DURATION_MS);
}

async function resolveJoiningRound(game, channel) {
  if (game.phase !== "joining") return;
  game.phase = "result";

  clearTimeout(game.roundTimer);
  // Disable skip button (no skip in joining round but just in case)
  await disableSkipButton(game);

  const question    = game.currentQuestion;
  const firstCorrect = game.roundWinner
    ? { id: game.roundWinner, username: game.players.get(game.roundWinner)?.username }
    : null;

  // Need at least 2 players to play
  const playerCount = game.players.size;
  if (playerCount < 2) {
    await channel.send({
      embeds: [
        new EmbedBuilder()
          .setColor(Colors.Red)
          .setTitle("❌ Not Enough Players")
          .setDescription(
            playerCount === 0
              ? "Nobody joined! Use `/startspeed` to try again."
              : "Only 1 player joined — need at least 2 to play!"
          ),
      ],
    });
    endSpeedGame(channel.id);
    return;
  }

  await channel.send({ embeds: [joinResultEmbed(game, question, firstCorrect)] });

  // If someone answered correctly in the joining round, count it as their phase win
  // so they sit out the first competitive round (fair — they already proved themselves)
  if (firstCorrect) {
    game.phaseWinners.set(firstCorrect.id, { username: firstCorrect.username, wonRound: 0 });
  }

  // Start phase 1 competitive rounds after 8 seconds
  game.resultTimer = setTimeout(async () => {
    await startCompetitiveRound(game, channel);
  }, SPEED_RESULT_DURATION_MS);
}

// ─── COMPETITIVE ROUNDS ────────────────────────────────────────────────────────

async function startCompetitiveRound(game, channel) {
  const active   = game.getActivePlayers();
  const eligible = game.getEligiblePlayers();

  // Win/draw check
  const condition = checkWinCondition(game);
  if (condition === "winner") {
    const winner   = active[0];
    const soloGame = game.peakPlayerCount < 2;
    if (!soloGame) recordWin(winner.id, winner.username);
    await channel.send({ embeds: [winnerEmbed(winner, soloGame)] });
    endSpeedGame(channel.id);
    return;
  }
  if (condition === "draw") {
    await channel.send({ embeds: [drawEmbed()] });
    endSpeedGame(channel.id);
    return;
  }

  // Phase complete: all but one have won a round
  if (eligible.length === 0) {
    await resolvePhase(game, channel);
    return;
  }

  // Pick question
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
  game.phase         = "answering";
  game.phaseRound++;
  game.roundNumber++;
  game.skipVotes.clear();

  game.questionMessage = await channel.send(competitiveEmbed(game, question));

  game.roundTimer = setTimeout(async () => {
    await resolveCompetitiveRound(game, channel, true);
  }, SPEED_ROUND_DURATION_MS);
}

async function resolveCompetitiveRound(game, channel, timedOut = false) {
  if (game.phase !== "answering") return;
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

  const eligible = game.getEligiblePlayers();
  const active   = game.getActivePlayers();

  // Phase ends when only 1 eligible remains (the loser) BUT only after
  // every player has had at least one competitive round to answer.
  // Minimum competitive rounds needed = number of active players - number of joining-round winners
  // Simplified: we need at least (active.length - phaseWinners.size) competitive rounds played,
  // which equals the number of players who started with no phase win.
  // Easiest check: phaseRound must be >= eligible players at phase start (before any competitive rounds).
  // We track this as: every non-joining-winner must have had a round.
  // Since joining winners are stored with wonRound:0, the first competitive round is phaseRound:1.
  // So minimum competitive rounds = active.length - joiningWinnerCount.
  const joiningWinners = [...game.phaseWinners.values()].filter(w => w.wonRound === 0).length;
  const minRoundsNeeded = active.length - joiningWinners;
  const enoughRoundsPlayed = game.phaseRound >= minRoundsNeeded;

  if (eligible.length === 1 && active.length > 1 && enoughRoundsPlayed) {
    game.resultTimer = setTimeout(() => resolvePhase(game, channel), SPEED_RESULT_DURATION_MS);
    return;
  }

  // Phase ends if nobody is eligible (all won — everyone had a round)
  if (eligible.length === 0) {
    game.resultTimer = setTimeout(() => resolvePhase(game, channel), SPEED_RESULT_DURATION_MS);
    return;
  }

  // Continue to next round
  game.resultTimer = setTimeout(() => startCompetitiveRound(game, channel), SPEED_RESULT_DURATION_MS);
}

async function resolvePhase(game, channel) {
  const active = game.getActivePlayers();
  const losers = active.filter(p => !game.phaseWinners.has(p.id));

  // Eliminate all losers
  for (const loser of losers) game.eliminatePlayer(loser.id);

  await channel.send({ embeds: [phaseEndEmbed(game, losers.length > 0 ? losers : active)] });

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

  // Next phase
  game.startNewPhase();
  game.resultTimer = setTimeout(async () => {
    await channel.send(`🔄 **Phase ${game.phaseNumber} begins!** ${remaining.map(p => p.username).join(", ")} are still in.`);
    await startCompetitiveRound(game, channel);
  }, SPEED_RESULT_DURATION_MS);
}

// ─── MESSAGE HANDLER ───────────────────────────────────────────────────────────

async function handleSpeedMessage(message, game) {
  const userId   = message.author.id;
  const username = message.author.username;
  const content  = message.content.trim();
  if (!content) return;

  // ── JOINING ROUND ────────────────────────────────────────────────────────
  if (game.phase === "joining") {
    // Register player
    const isNew = !game.players.has(userId);
    game.addPlayer(userId, username);

    // Check correctness — but never end the round early because of this
    if (!game.roundWinner) {
      const correct = checkAnswer(game.currentQuestion, content);
      if (correct) {
        game.roundWinner = userId;
        await message.react("⭐");
        await message.channel.send(`⭐ **${username}** answered correctly first in the joining round!`);
      } else {
        await message.react(isNew ? "📝" : "❌");
      }
    } else {
      await message.react(isNew ? "📝" : "💬");
    }

    // Update join count on embed — edit with fresh player list
    try {
      const timerSecs = SPEED_JOIN_DURATION_MS / 1000;
      if (game.questionMessage) {
        await game.questionMessage.edit(joiningEmbed(game, game.currentQuestion, timerSecs));
      }
    } catch { /* ignore */ }

    // Early end if expected player count reached
    if (game.expectedPlayers !== null && game.players.size >= game.expectedPlayers) {
      clearTimeout(game.roundTimer);
      await message.channel.send(`⚡ All **${game.expectedPlayers}** players joined — moving on!`);
      await resolveJoiningRound(game, message.channel);
    }
    return;
  }

  // ── COMPETITIVE ROUND ────────────────────────────────────────────────────
  if (game.phase !== "answering") return;

  // Must be an active registered player
  const player = game.players.get(userId);
  if (!player || !player.active) return;

  // Phase winners sit out
  if (game.phaseWinners.has(userId)) return;

  // Already attempted
  if (game.roundAnswers.has(userId)) return;

  game.roundAnswers.set(userId, { answer: content, timestamp: Date.now() });

  const correct = checkAnswer(game.currentQuestion, content);

  if (correct && !game.roundWinner) {
    // Winner — end round immediately
    game.roundWinner = userId;
    clearTimeout(game.roundTimer);
    await message.react("✅");
    await message.channel.send(`✅ **${username}** got it first!`);
    await resolveCompetitiveRound(game, message.channel, false);
  } else if (correct && game.roundWinner) {
    await message.react("🥈");
  } else {
    await message.react("❌");
  }
}

// ─── SKIP HANDLER ──────────────────────────────────────────────────────────────

async function handleSpeedSkip(interaction, game) {
  if (game.phase !== "answering") {
    return interaction.reply({ content: "No active round to skip.", flags: 64 });
  }

  const userId   = interaction.user.id;
  const eligible = game.getEligiblePlayers();
  if (!eligible.some(p => p.id === userId)) {
    return interaction.reply({ content: "❌ Only active eligible players can vote to skip.", flags: 64 });
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
  const left      = needed - current;

  await interaction.reply({
    content: `⏭️ **${interaction.user.username}** voted to skip! (${current}/${needed}${left > 0 ? ` — ${left} more` : ""})`,
  });

  if (current >= needed) {
    game.skipUsedRounds.add(game.roundNumber);
    clearTimeout(game.roundTimer);
    await disableSkipButton(game);

    const newQ = getRandomSpeedQuestion(game.usedQuestionIds);
    if (!newQ) {
      await interaction.channel.send("⚠️ No replacement question available.");
      await resolveCompetitiveRound(game, interaction.channel, true);
      return;
    }

    game.usedQuestionIds.add(newQ.id);
    game.currentQuestion = newQ;
    game.roundAnswers.clear();
    game.roundWinner = null;
    game.skipVotes.clear();
    game.phase = "answering";

    await interaction.channel.send({
      embeds: [new EmbedBuilder().setColor(Colors.Orange).setTitle("⏭️ Question Skipped!").setDescription("New question incoming!").setTimestamp()],
    });

    setTimeout(async () => {
      game.questionMessage = await interaction.channel.send(competitiveEmbed(game, newQ));
      game.roundTimer = setTimeout(async () => {
        await resolveCompetitiveRound(game, interaction.channel, true);
      }, SPEED_ROUND_DURATION_MS);
    }, 2000);
  }
}

module.exports = {
  startJoiningRound,
  handleSpeedMessage,
  handleSpeedSkip,
};
