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

function lobbyEmbed(game) {
  const joined    = [...game.players.values()].map(p => p.username);
  const timerSecs = SPEED_JOIN_DURATION_MS / 1000;

  return new EmbedBuilder()
    .setColor(Colors.Purple)
    .setTitle("⚡ Speed Round — Lobby")
    .setDescription(
      `Type **\`join\`** to enter the game! You have **${timerSecs} seconds**.\n\n` +
      `👥 **Players joined (${joined.length}):** ${joined.length > 0 ? joined.join(", ") : "none yet"}`
    )
    .setFooter({ text: "First question starts after the lobby closes" })
    .setTimestamp();
}

function questionEmbed(game, question) {
  const players   = game.getActivePlayers();
  const timerSecs = SPEED_ROUND_DURATION_MS / 1000;

  return {
    embeds: [
      new EmbedBuilder()
        .setColor(Colors.Blue)
        .setTitle(`⚡ Speed Round — Round ${game.roundNumber}`)
        .setDescription(
          `**${question.question}**\n\n` +
          `⏱️ **${timerSecs} seconds** — type your answer!\n\n` +
          `👥 **Players:** ${players.map(p => p.username).join(", ")}`
        )
        .setFooter({ text: `Round ${game.roundNumber} • First correct answer wins the round` })
        .setTimestamp(),
    ],
    components: [
      new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setCustomId("speed_skip")
          .setLabel("⏭️ Skip Question")
          .setStyle(ButtonStyle.Secondary)
      ),
    ],
  };
}

function resultEmbed(game, question, winner, orderedAnswers) {
  const players = game.getActivePlayers();

  const answerLines = orderedAnswers.map(({ username, answer, correct, isWinner }) => {
    if (isWinner) return `🏆 **${username}**: \`${answer}\` *(first correct — wins round)*`;
    if (correct)  return `✅ **${username}**: \`${answer}\` *(correct but too late)*`;
    return              `❌ **${username}**: \`${answer}\``;
  });

  const answeredIds = new Set(orderedAnswers.map(a => a.userId));
  const active      = game.getActivePlayers();
  for (const p of active) {
    if (!answeredIds.has(p.id)) answerLines.push(`⬛ **${p.username}**: *(no answer)*`);
  }

  return new EmbedBuilder()
    .setColor(winner ? Colors.Green : Colors.Orange)
    .setTitle(`📊 Round ${game.roundNumber} Results`)
    .setDescription(
      `**Question:** ${question.question}\n` +
      `**Correct answer:** \`${question.answer}\`\n\n` +
      (winner ? `🏆 **${winner.username}** wins this round!\n\n` : `⏰ Nobody answered correctly!\n\n`) +
      answerLines.join("\n")
    )
    .setFooter({ text: players.length > 0 ? `${players.length} player(s) remaining • Next round in 8s` : "Game over!" })
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

async function declareWinner(game, channel, winner) {
  const solo = game.peakPlayerCount < 2;
  if (!solo) recordWin(winner.id, winner.username);
  await channel.send({ embeds: [winnerEmbed(winner, solo)] });
  endSpeedGame(channel.id);
}

// ─── LOBBY ─────────────────────────────────────────────────────────────────────

async function startRound(game, channel) {
  // Phase: lobby — collect players via "join"
  game.phase = "lobby";
  game.roundNumber = 0;

  game.lobbyMessage = await channel.send({ embeds: [lobbyEmbed(game)] });

  game.roundTimer = setTimeout(async () => {
    await resolveLobby(game, channel);
  }, SPEED_JOIN_DURATION_MS);
}

async function resolveLobby(game, channel) {
  if (game.phase !== "lobby") return;
  game.phase = "result";
  clearTimeout(game.roundTimer);

  // Disable lobby message editing
  game.lobbyMessage = null;

  const players = [...game.players.values()];

  if (players.length < 2) {
    await channel.send({
      embeds: [
        new EmbedBuilder()
          .setColor(Colors.Red)
          .setTitle("❌ Not Enough Players")
          .setDescription(
            players.length === 0
              ? "Nobody joined! Use `/startspeed` to try again."
              : "Only 1 player joined — need at least 2 to play!"
          ),
      ],
    });
    endSpeedGame(channel.id);
    return;
  }

  await channel.send({
    embeds: [
      new EmbedBuilder()
        .setColor(Colors.Green)
        .setTitle("✅ Lobby Closed!")
        .setDescription(
          `**${players.length} players** locked in: ${players.map(p => p.username).join(", ")}\n\n` +
          `First question in **8 seconds…**`
        )
        .setTimestamp(),
    ],
  });

  game.resultTimer = setTimeout(async () => {
    await startQuestion(game, channel);
  }, SPEED_RESULT_DURATION_MS);
}

// ─── QUESTION ROUNDS ───────────────────────────────────────────────────────────

async function startQuestion(game, channel) {
  const active = game.getActivePlayers();

  if (active.length === 0) {
    await channel.send({ embeds: [drawEmbed()] });
    endSpeedGame(channel.id);
    return;
  }
  if (active.length === 1) {
    await declareWinner(game, channel, active[0]);
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
  game.roundAnswers    = new Map();
  game.roundNumber++;
  game.phase           = "answering";
  game.skipVotes.clear();

  game.questionMessage = await channel.send(questionEmbed(game, question));

  game.roundTimer = setTimeout(async () => {
    await resolveQuestion(game, channel);
  }, SPEED_ROUND_DURATION_MS);
}

async function resolveQuestion(game, channel) {
  if (game.phase !== "answering") return;
  game.phase = "result";

  clearTimeout(game.roundTimer);
  await disableSkipButton(game);

  const question = game.currentQuestion;
  const active   = game.getActivePlayers();

  // Walk answers in submission order — first correct = winner
  let roundWinner      = null;
  const orderedAnswers = [];

  for (const [userId, { answer }] of game.roundAnswers) {
    const player  = game.players.get(userId);
    if (!player)  continue;
    const correct = checkAnswer(question, answer);
    if (correct && !roundWinner) {
      roundWinner = { id: userId, username: player.username };
      orderedAnswers.push({ userId, username: player.username, answer, correct: true, isWinner: true });
    } else {
      orderedAnswers.push({ userId, username: player.username, answer, correct, isWinner: false });
    }
  }

  await channel.send({ embeds: [resultEmbed(game, question, roundWinner, orderedAnswers)] });

  // Eliminate everyone except the round winner
  // Late correct answers don't save you — only first correct counts
  for (const p of active) {
    if (!roundWinner || p.id !== roundWinner.id) {
      game.eliminatePlayer(p.id);
    }
  }

  const remaining = game.getActivePlayers();

  game.resultTimer = setTimeout(async () => {
    if (remaining.length === 0) {
      await channel.send({ embeds: [drawEmbed()] });
      endSpeedGame(channel.id);
    } else if (remaining.length === 1) {
      await declareWinner(game, channel, remaining[0]);
    } else {
      await startQuestion(game, channel);
    }
  }, SPEED_RESULT_DURATION_MS);
}

// ─── MESSAGE HANDLER ───────────────────────────────────────────────────────────

async function handleSpeedMessage(message, game) {
  const userId   = message.author.id;
  const username = message.author.username;
  const content  = message.content.trim();
  if (!content) return;

  // ── LOBBY: only "join" registers a player ─────────────────────────────────
  if (game.phase === "lobby") {
    if (content.toLowerCase() === "join") {
      if (game.players.has(userId)) {
        await message.react("👍"); // already joined
        return;
      }

      // Check expected player cap
      if (game.expectedPlayers !== null && game.players.size >= game.expectedPlayers) {
        await message.reply({ content: "❌ Lobby is full!", flags: 64 }).catch(() => {});
        return;
      }

      game.addPlayer(userId, username);
      await message.react("✅");

      // Update lobby embed
      try {
        await game.lobbyMessage.edit({ embeds: [lobbyEmbed(game)] });
      } catch { /* ignore */ }

      // Start early if expected player count reached
      if (game.expectedPlayers !== null && game.players.size >= game.expectedPlayers) {
        clearTimeout(game.roundTimer);
        await message.channel.send(`⚡ All **${game.expectedPlayers}** players joined — starting!`);
        await resolveLobby(game, message.channel);
      }
    }
    return; // ignore everything else during lobby
  }

  // ── ANSWERING ─────────────────────────────────────────────────────────────
  if (game.phase !== "answering") return;

  const player = game.players.get(userId);
  if (!player || !player.active) return;

  // Only first answer per round counts
  if (game.roundAnswers.has(userId)) return;

  game.roundAnswers.set(userId, { answer: content, timestamp: Date.now() });
  await message.react("📝");

  // Early resolve: all active players have answered
  const active   = game.getActivePlayers();
  const answered = active.filter(p => game.roundAnswers.has(p.id));
  if (answered.length >= active.length) {
    clearTimeout(game.roundTimer);
    await resolveQuestion(game, message.channel);
  }
}

// ─── SKIP HANDLER ──────────────────────────────────────────────────────────────

async function handleSpeedSkip(interaction, game) {
  if (game.phase !== "answering") {
    return interaction.reply({ content: "Can't skip right now.", flags: 64 });
  }

  const userId = interaction.user.id;
  const active = game.getActivePlayers();

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
      await resolveQuestion(game, interaction.channel);
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
        await resolveQuestion(game, interaction.channel);
      }, SPEED_ROUND_DURATION_MS);
    }, 2000);
  }
}

module.exports = { startRound, handleSpeedMessage, handleSpeedSkip };
