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

// ─── EMBEDS ────────────────────────────────────────────────────────────────────

function questionEmbed(game, question) {
  const isFirst   = game.roundNumber === 1;
  const timerSecs = (isFirst ? SPEED_JOIN_DURATION_MS : SPEED_ROUND_DURATION_MS) / 1000;
  const players   = game.getActivePlayers();

  return {
    embeds: [
      new EmbedBuilder()
        .setColor(isFirst ? Colors.Purple : Colors.Blue)
        .setTitle(`⚡ Speed Round — Round ${game.roundNumber}`)
        .setDescription(
          `**${question.question}**\n\n` +
          `⏱️ **${timerSecs} seconds** — type your answer!\n` +
          (isFirst
            ? `Anyone who types becomes a player.\n\n`
            : `👥 **Players:** ${players.map(p => p.username).join(", ")}\n\n`) +
          (isFirst && players.length > 0
            ? `📝 **Joined so far:** ${players.map(p => p.username).join(", ")}`
            : ``)
        )
        .setFooter({ text: isFirst ? "Type anything to join • Correct answer wins the round bonus" : `Round ${game.roundNumber}` })
        .setTimestamp(),
    ],
    components: game.roundNumber > 1 ? [
      new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("speed_skip")
          .setLabel("⏭️ Skip Question")
          .setStyle(ButtonStyle.Secondary)
      )
    ] : [],
  };
}

function resultEmbed(game, question, winner, orderedAnswers) {
  const players = game.getActivePlayers();

  // Build answer list in submission order
  const answerLines = orderedAnswers.map(({ username, answer, correct, skip }) => {
    if (skip)    return `🏆 **${username}**: \`${answer}\` *(winner)*`;
    if (correct) return `✅ **${username}**: \`${answer}\` *(correct but already won)*`;
    return        `❌ **${username}**: \`${answer}\``;
  });

  // Players who didn't answer
  const answeredIds = new Set(orderedAnswers.map(a => a.userId));
  const noAnswer    = players.filter(p => !answeredIds.has(p.id));
  for (const p of noAnswer) answerLines.push(`⬛ **${p.username}**: *(no answer)*`);

  return new EmbedBuilder()
    .setColor(winner ? Colors.Green : Colors.Orange)
    .setTitle(`📊 Round ${game.roundNumber} Results`)
    .setDescription(
      `**Question:** ${question.question}\n` +
      `**Correct answer:** \`${question.answer}\`\n\n` +
      (winner ? `🏆 **${winner.username}** wins this round!\n\n` : `⏰ Nobody answered correctly!\n\n`) +
      answerLines.join("\n")
    )
    .setFooter({ text: players.length > 0 ? `${players.length} player(s) still in • Next round in 8s` : "Game over!" })
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
      await game.questionMessage.edit({
        components: [new ActionRowBuilder().addComponents(btn)],
      });
    }
  } catch { /* ignore */ }
}

// ─── GAME LOOP ─────────────────────────────────────────────────────────────────

async function startRound(game, channel) {
  const active = game.getActivePlayers();

  // Win conditions (only check from round 2+, round 1 is joining)
  if (game.roundNumber >= 1) {
    if (active.length === 0) {
      await channel.send({ embeds: [drawEmbed()] });
      endSpeedGame(channel.id);
      return;
    }
    if (active.length === 1 && game.roundNumber > 1) {
      const winner = active[0];
      const solo   = game.peakPlayerCount < 2;
      if (!solo) recordWin(winner.id, winner.username);
      await channel.send({ embeds: [winnerEmbed(winner, solo)] });
      endSpeedGame(channel.id);
      return;
    }
  }

  const question = getRandomSpeedQuestion(game.usedQuestionIds);
  if (!question) {
    await channel.send("⚠️ Ran out of questions!");
    endSpeedGame(channel.id);
    return;
  }

  game.usedQuestionIds.add(question.id);
  game.currentQuestion = question;
  game.roundAnswers    = new Map(); // userId -> { answer, timestamp } in insertion order
  game.roundNumber++;
  game.phase      = "answering";
  game.skipVotes.clear();

  const duration = game.roundNumber === 1 ? SPEED_JOIN_DURATION_MS : SPEED_ROUND_DURATION_MS;

  game.questionMessage = await channel.send(questionEmbed(game, question));

  game.roundTimer = setTimeout(async () => {
    await resolveRound(game, channel);
  }, duration);
}

async function resolveRound(game, channel) {
  if (game.phase !== "answering") return;
  game.phase = "result";

  clearTimeout(game.roundTimer);
  await disableSkipButton(game);

  const question  = game.currentQuestion;
  const isFirst   = game.roundNumber === 1;

  // Round 1: register all players who typed anything
  // (already registered in handleSpeedMessage, nothing extra needed)

  const active = game.getActivePlayers();

  // Not enough players joined
  if (isFirst && active.length < 2) {
    await channel.send({
      embeds: [
        new EmbedBuilder()
          .setColor(Colors.Red)
          .setTitle("❌ Not Enough Players")
          .setDescription(
            active.length === 0
              ? "Nobody joined! Use `/startspeed` to try again."
              : "Only 1 player joined — need at least 2!"
          ),
      ],
    });
    endSpeedGame(channel.id);
    return;
  }

  // Walk answers in submission order (Map preserves insertion order)
  // Find the first correct answer = round winner
  let roundWinner = null;
  const orderedAnswers = [];

  for (const [userId, { answer }] of game.roundAnswers) {
    const player  = game.players.get(userId);
    if (!player)  continue;
    const correct = checkAnswer(question, answer);
    if (correct && !roundWinner) {
      roundWinner = { id: userId, username: player.username };
      orderedAnswers.push({ userId, username: player.username, answer, correct: true, skip: true });
    } else {
      orderedAnswers.push({ userId, username: player.username, answer, correct, skip: false });
    }
  }

  await channel.send({ embeds: [resultEmbed(game, question, roundWinner, orderedAnswers)] });

  // Eliminate players who got it wrong OR didn't answer at all
  // (but NOT on round 1 — round 1 is joining only, no eliminations)
  if (!isFirst) {
    const answeredCorrectly = new Set(
      orderedAnswers.filter(a => a.correct).map(a => a.userId)
    );
    for (const p of active) {
      if (!answeredCorrectly.has(p.id)) {
        game.eliminatePlayer(p.id);
      }
    }
  }

  const remaining = game.getActivePlayers();

  // End game checks
  if (!isFirst) {
    if (remaining.length === 0) {
      game.resultTimer = setTimeout(async () => {
        await channel.send({ embeds: [drawEmbed()] });
        endSpeedGame(channel.id);
      }, SPEED_RESULT_DURATION_MS);
      return;
    }
    if (remaining.length === 1) {
      game.resultTimer = setTimeout(async () => {
        const solo = game.peakPlayerCount < 2;
        if (!solo) recordWin(remaining[0].id, remaining[0].username);
        await channel.send({ embeds: [winnerEmbed(remaining[0], solo)] });
        endSpeedGame(channel.id);
      }, SPEED_RESULT_DURATION_MS);
      return;
    }
  }

  // Continue
  game.resultTimer = setTimeout(async () => {
    await startRound(game, channel);
  }, SPEED_RESULT_DURATION_MS);
}

// ─── MESSAGE HANDLER ───────────────────────────────────────────────────────────

async function handleSpeedMessage(message, game) {
  if (game.phase !== "answering") return;

  const userId   = message.author.id;
  const username = message.author.username;
  const content  = message.content.trim();
  if (!content) return;

  // Round 1: anyone who types joins
  if (game.roundNumber === 0 || game.roundNumber === 1) {
    if (!game.players.has(userId)) {
      game.addPlayer(userId, username);
      // Update embed with new player
      try {
        await game.questionMessage.edit(questionEmbed(game, game.currentQuestion));
      } catch { /* ignore */ }
    }
  }

  const player = game.players.get(userId);
  if (!player || !player.active) return;

  // Only first answer counts per round
  if (game.roundAnswers.has(userId)) return;

  game.roundAnswers.set(userId, { answer: content, timestamp: Date.now() });
  await message.react("📝");

  // Early end: expected player count reached on round 1
  if (game.roundNumber === 1 && game.expectedPlayers !== null) {
    if (game.players.size >= game.expectedPlayers) {
      clearTimeout(game.roundTimer);
      await message.channel.send(`⚡ All **${game.expectedPlayers}** players joined — resolving!`);
      await resolveRound(game, message.channel);
    }
  }

  // Early end on round 2+: all active players have answered
  if (game.roundNumber > 1) {
    const active    = game.getActivePlayers();
    const answered  = active.filter(p => game.roundAnswers.has(p.id));
    if (answered.length >= active.length) {
      clearTimeout(game.roundTimer);
      await resolveRound(game, message.channel);
    }
  }
}

// ─── SKIP HANDLER ──────────────────────────────────────────────────────────────

async function handleSpeedSkip(interaction, game) {
  if (game.phase !== "answering" || game.roundNumber <= 1) {
    return interaction.reply({ content: "Can't skip right now.", flags: 64 });
  }

  const userId  = interaction.user.id;
  const active  = game.getActivePlayers();

  if (!active.some(p => p.id === userId)) {
    return interaction.reply({ content: "❌ Only active players can vote to skip.", flags: 64 });
  }
  if (game.skipUsedRounds.has(game.roundNumber)) {
    return interaction.reply({ content: "❌ Skip already used this round.", flags: 64 });
  }
  if (game.skipVotes.has(userId)) {
    return interaction.reply({ content: "You already voted to skip!", flags: 64 });
  }

  game.skipVotes.add(userId);
  const needed  = Math.ceil(active.length / 2);
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
      await interaction.channel.send("⚠️ No replacement question.");
      await resolveRound(game, interaction.channel);
      return;
    }

    game.usedQuestionIds.add(newQ.id);
    game.currentQuestion = newQ;
    game.roundAnswers    = new Map();
    game.skipVotes.clear();
    game.phase = "answering";

    await interaction.channel.send({
      embeds: [new EmbedBuilder().setColor(Colors.Orange).setTitle("⏭️ Question Skipped!").setDescription("New question incoming!").setTimestamp()],
    });

    setTimeout(async () => {
      game.questionMessage = await interaction.channel.send(questionEmbed(game, newQ));
      game.roundTimer = setTimeout(async () => {
        await resolveRound(game, interaction.channel);
      }, SPEED_ROUND_DURATION_MS);
    }, 2000);
  }
}

module.exports = { startRound, handleSpeedMessage, handleSpeedSkip };
