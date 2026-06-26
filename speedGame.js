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
  const joined = [...game.players.values()].map(p => p.username);
  return {
    embeds: [
      new EmbedBuilder()
        .setColor(Colors.Purple)
        .setTitle("⚡ Speed Round — Joining Phase")
        .setDescription(
          `**Question:** ${question.question}\n\n` +
          `📝 **Type any answer to join the game!** You have **${timerSecs} seconds**.\n` +
          `First person to type the correct answer also gets a ⭐ bonus!\n\n` +
          `👥 **Players joined:** ${joined.length > 0 ? joined.join(", ") : "none yet"}`
        )
        .setFooter({ text: `${timerSecs}s to join • Anyone who types becomes a player` })
        .setTimestamp(),
    ],
    components: [],
  };
}

function competitiveEmbed(game, question) {
  const eligible  = game.getEligiblePlayers();
  const winners   = [...game.phaseWinners.values()].map(w => w.username);
  const timerSecs = SPEED_ROUND_DURATION_MS / 1000;
  const is2p      = game.getActivePlayers().length === 2;

  const embed = new EmbedBuilder()
    .setColor(Colors.Blue)
    .setTitle(`⚡ Speed Round — Phase ${game.phaseNumber}, Round ${game.phaseRound}`)
    .setDescription(
      `**${question.question}**\n\n` +
      `⏱️ **${timerSecs} seconds** — first correct answer wins the round!\n\n` +
      (winners.length > 0 && !is2p ? `🏆 **Won this phase:** ${winners.join(", ")}\n` : ``) +
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
      (firstCorrect ? `⭐ **First correct answer:** ${firstCorrect.username}\n\n` : ``) +
      `**Players in this game (${players.length}):** ${players.map(p => p.username).join(", ")}\n\n` +
      `First competitive round starts in 8 seconds!`
    )
    .setTimestamp();
}

function roundResultEmbed(game, question, winner, timedOut) {
  const is2p = game.getActivePlayers().length === 2;
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

  const standingsValue = is2p
    ? (winner ? `🏆 **${winner.username}** wins the game!` : "No winner this round — next question soon…")
    : ([...game.phaseWinners.values()].map(w => `🏆 ${w.username} (round ${w.wonRound === 0 ? "joining" : w.wonRound})`).join("\n") || "No winners yet");

  return new EmbedBuilder()
    .setColor(winner ? Colors.Green : Colors.Orange)
    .setTitle(`📊 Round ${game.phaseRound} Result — Phase ${game.phaseNumber}`)
    .setDescription(desc)
    .addFields({ name: is2p ? "Result" : "Phase standings", value: standingsValue })
    .setFooter({ text: is2p ? (winner ? "Game over!" : "No winner this round…") : "Next round in 8 seconds…" })
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
      `(couldn't win a single round this phase)\n\n` +
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
    .setTitle("💀 No Winner!")
    .setDescription("Nobody could answer — game over with no winner.")
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

async function declareWinner(game, channel, winner) {
  const soloGame = game.peakPlayerCount < 2;
  if (!soloGame) recordWin(winner.id, winner.username);
  await channel.send({ embeds: [winnerEmbed(winner, soloGame)] });
  endSpeedGame(channel.id);
}

// ─── JOINING ROUND ─────────────────────────────────────────────────────────────

async function startJoiningRound(game, channel) {
  const question = getRandomSpeedQuestion(game.usedQuestionIds);
  if (!question) {
    await channel.send("⚠️ No questions available!");
    endSpeedGame(channel.id);
    return;
  }

  game.usedQuestionIds.add(question.id);
  game.currentQuestion = question;
  game.roundAnswers.clear();
  game.roundWinner     = null;
  game.phase           = "joining";
  game.roundNumber     = 0;
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
  await disableSkipButton(game);

  const question     = game.currentQuestion;
  const firstCorrect = game.roundWinner
    ? { id: game.roundWinner, username: game.players.get(game.roundWinner)?.username }
    : null;

  if (game.players.size < 2) {
    await channel.send({
      embeds: [
        new EmbedBuilder()
          .setColor(Colors.Red)
          .setTitle("❌ Not Enough Players")
          .setDescription(
            game.players.size === 0
              ? "Nobody joined! Use `/startspeed` to try again."
              : "Only 1 player joined — need at least 2!"
          ),
      ],
    });
    endSpeedGame(channel.id);
    return;
  }

  await channel.send({ embeds: [joinResultEmbed(game, question, firstCorrect)] });

  // NOTE: joining round winner is stored in game.joiningWinner (NOT phaseWinners)
  // so they still compete in competitive rounds. The ⭐ is purely cosmetic recognition.
  game.joiningWinner = firstCorrect?.id || null;

  game.resultTimer = setTimeout(async () => {
    await startCompetitiveRound(game, channel);
  }, SPEED_RESULT_DURATION_MS);
}

// ─── COMPETITIVE ROUNDS ────────────────────────────────────────────────────────

async function startCompetitiveRound(game, channel) {
  const active   = game.getActivePlayers();
  const eligible = game.getEligiblePlayers();

  // Overall win/draw check (after phase eliminations)
  if (active.length === 0) {
    await channel.send({ embeds: [drawEmbed()] });
    endSpeedGame(channel.id);
    return;
  }
  if (active.length === 1) {
    await declareWinner(game, channel, active[0]);
    return;
  }

  // Phase complete: nobody left to compete
  if (eligible.length === 0) {
    await resolvePhase(game, channel);
    return;
  }

  const question = getRandomSpeedQuestion(game.usedQuestionIds);
  if (!question) {
    await channel.send("⚠️ Ran out of questions!");
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

  const active = game.getActivePlayers();

  // ── 2-PLAYER SPECIAL CASE ────────────────────────────────────────────────
  // With exactly 2 players, ignore phase system entirely.
  // Winner = first correct answer. No winner = next round. Simple.
  if (active.length === 2) {
    await channel.send({ embeds: [roundResultEmbed(game, question, winner, timedOut)] });

    if (winner) {
      // One player answered correctly — they win the whole game
      game.resultTimer = setTimeout(async () => {
        await declareWinner(game, channel, winner);
      }, SPEED_RESULT_DURATION_MS);
    } else {
      // Nobody answered — continue to next round
      game.resultTimer = setTimeout(async () => {
        await startCompetitiveRound(game, channel);
      }, SPEED_RESULT_DURATION_MS);
    }
    return;
  }

  // ── 3+ PLAYERS: PHASE SYSTEM ─────────────────────────────────────────────
  if (winner) {
    game.phaseWinners.set(winner.id, { username: winner.username, wonRound: game.phaseRound });
  }

  await channel.send({ embeds: [roundResultEmbed(game, question, winner, timedOut)] });

  const eligible = game.getEligiblePlayers();

  // Phase ends when only 1 eligible player remains — they're the loser
  // But only after everyone has had at least one round (phaseRound >= active.length - phaseWinners + 1)
  // Simplified: phase ends when eligible === 1 AND phaseRound >= (active.length - 1)
  const minRoundsForPhase = active.length - 1;
  const phaseCanEnd = game.phaseRound >= minRoundsForPhase;

  if ((eligible.length === 1 && phaseCanEnd) || eligible.length === 0) {
    game.resultTimer = setTimeout(() => resolvePhase(game, channel), SPEED_RESULT_DURATION_MS);
    return;
  }

  game.resultTimer = setTimeout(() => startCompetitiveRound(game, channel), SPEED_RESULT_DURATION_MS);
}

async function resolvePhase(game, channel) {
  const active = game.getActivePlayers();
  const losers = active.filter(p => !game.phaseWinners.has(p.id));

  for (const loser of losers) game.eliminatePlayer(loser.id);

  await channel.send({ embeds: [phaseEndEmbed(game, losers.length > 0 ? losers : active)] });

  const remaining = game.getActivePlayers();

  game.resultTimer = setTimeout(async () => {
    if (remaining.length === 0) {
      await channel.send({ embeds: [drawEmbed()] });
      endSpeedGame(channel.id);
    } else if (remaining.length === 1) {
      await declareWinner(game, channel, remaining[0]);
    } else {
      game.startNewPhase();
      await channel.send(`🔄 **Phase ${game.phaseNumber} begins!** ${remaining.map(p => p.username).join(", ")} are still in.`);
      await startCompetitiveRound(game, channel);
    }
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
    const isNew = !game.players.has(userId);
    game.addPlayer(userId, username);

    const correct = !game.roundWinner && checkAnswer(game.currentQuestion, content);

    if (correct) {
      game.roundWinner = userId;
      await message.react("⭐");
      await message.channel.send(`⭐ **${username}** answered correctly first in the joining round!`);
    } else {
      await message.react(isNew ? "📝" : "💬");
    }

    // Update embed with latest player list
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

  const player = game.players.get(userId);
  if (!player || !player.active) return;

  // In 3+ player mode, phase winners sit out. In 2-player mode, everyone competes.
  const active = game.getActivePlayers();
  if (active.length > 2 && game.phaseWinners.has(userId)) return;

  if (game.roundAnswers.has(userId)) return;

  game.roundAnswers.set(userId, { answer: content, timestamp: Date.now() });

  const correct = checkAnswer(game.currentQuestion, content);

  if (correct && !game.roundWinner) {
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
    return interaction.reply({ content: "❌ Only active competing players can vote to skip.", flags: 64 });
  }
  if (game.skipUsedRounds.has(game.roundNumber)) {
    return interaction.reply({ content: "❌ Skip already used this round.", flags: 64 });
  }
  if (game.skipVotes.has(userId)) {
    return interaction.reply({ content: "You already voted to skip!", flags: 64 });
  }

  game.skipVotes.add(userId);
  const needed = Math.ceil(eligible.length / 2);
  const current = game.skipVotes.size;
  const left    = needed - current;

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
