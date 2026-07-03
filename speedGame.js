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

// ═══════════════════════════════════════════════════════════════════════════
// GAME DESIGN (1:1 with bradyyourtutor's "Last Person Standing")
// ═══════════════════════════════════════════════════════════════════════════
// 1. Lobby: players type "join" to enter.
// 2. PHASE starts. Every player is "eligible" (hasn't won a round yet this phase).
// 3. Each ROUND: a question is asked. Every eligible player can answer.
//    - First CORRECT answer (by timestamp) wins the round.
//    - The winner becomes "safe" for the rest of this phase (can't answer again).
//    - Everyone else just... continues. Wrong answers don't eliminate anyone
//      mid-phase — only NOT WINNING A SINGLE ROUND across the whole phase does.
// 4. Phase continues until only ONE eligible player remains (hasn't won any
//    round yet). That player is ELIMINATED. Phase over.
// 5. New phase starts with the survivors. Repeat from step 2.
// 6. Last player standing (or last to be the sole non-eliminated) wins the game.
// ═══════════════════════════════════════════════════════════════════════════

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
  const eligible = game.getEligiblePlayers();
  const safe     = [...game.phaseWinners.values()].map(w => w.username);
  const timerSecs = SPEED_ROUND_DURATION_MS / 1000;

  const embed = new EmbedBuilder()
    .setColor(Colors.Blue)
    .setTitle(`⚡ Phase ${game.phaseNumber} — Round ${game.phaseRound}`)
    .setDescription(
      `**${question.question}**\n\n` +
      `⏱️ **${timerSecs} seconds** — first correct answer wins the round!\n\n` +
      (safe.length > 0 ? `🛡️ **Already safe this phase:** ${safe.join(", ")}\n` : ``) +
      `👤 **Still need to win a round:** ${eligible.map(p => p.username).join(", ") || "nobody"}`
    )
    .setFooter({ text: `Overall round ${game.roundNumber}` })
    .setTimestamp();

  const btn = new ButtonBuilder()
    .setCustomId("speed_skip")
    .setLabel("⏭️ Skip Question")
    .setStyle(ButtonStyle.Secondary);

  return { embeds: [embed], components: [new ActionRowBuilder().addComponents(btn)] };
}

function roundResultEmbed(game, question, winner, attempts) {
  const lines = attempts.map(({ username, answer, isWinner }) =>
    isWinner
      ? `🏆 **${username}**: \`${answer}\` *(first correct — safe for this phase!)*`
      : `💬 **${username}**: \`${answer}\``
  );

  const eligible = game.getEligiblePlayers();
  const answeredIds = new Set(attempts.map(a => a.userId));
  for (const p of eligible) {
    if (!answeredIds.has(p.id)) lines.push(`⬛ **${p.username}**: *(no answer)*`);
  }

  return new EmbedBuilder()
    .setColor(winner ? Colors.Green : Colors.Orange)
    .setTitle(`📊 Round ${game.phaseRound} Result — Phase ${game.phaseNumber}`)
    .setDescription(
      `**Question:** ${question.question}\n` +
      `**Correct answer:** \`${question.answer}\`\n\n` +
      (winner ? `🏆 **${winner.username}** wins this round and is safe for the rest of the phase!\n\n` : `⏰ Nobody got it right — round carries no winner.\n\n`) +
      (lines.length > 0 ? lines.join("\n") : "_No answers submitted._")
    )
    .addFields({
      name: "🛡️ Safe this phase",
      value: [...game.phaseWinners.values()].map(w => w.username).join(", ") || "Nobody yet",
    })
    .setFooter({ text: game.getEligiblePlayers().length <= 1 ? "Wrapping up…" : "Next round in 8 seconds…" })
    .setTimestamp();
}

function phaseEndEmbed(game, eliminated) {
  const remaining = game.getActivePlayers();
  return new EmbedBuilder()
    .setColor(Colors.Red)
    .setTitle(`💀 Phase ${game.phaseNumber} Complete!`)
    .setDescription(
      `**${eliminated.username}** never won a single round this phase — **eliminated!**\n\n` +
      `**Still standing:** ${remaining.map(p => p.username).join(", ") || "Nobody"}`
    )
    .setFooter({ text: remaining.length > 1 ? `Phase ${game.phaseNumber + 1} starting soon…` : "" })
    .setTimestamp();
}

function winnerEmbed(winner, soloGame) {
  return new EmbedBuilder()
    .setColor(soloGame ? Colors.Grey : Colors.Gold)
    .setTitle(soloGame ? "🎮 Speed Round — Solo Run" : "🏆 Last One Standing!")
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
    .setDescription("Everyone was eliminated at the same time — no winner this game.")
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
  const solo = game.peakPlayerCount < 2;
  if (!solo) recordWin(winner.id, winner.username);
  await channel.send({ embeds: [winnerEmbed(winner, solo)] });
  endSpeedGame(channel.id);
}

// ─── LOBBY ─────────────────────────────────────────────────────────────────────

async function startRound(game, channel) {
  game.phase = "lobby";
  game.lobbyMessage = await channel.send({ embeds: [lobbyEmbed(game)] });

  game.roundTimer = setTimeout(async () => {
    await resolveLobby(game, channel);
  }, SPEED_JOIN_DURATION_MS);
}

async function resolveLobby(game, channel) {
  if (game.phase !== "lobby") return;
  game.phase = "result";
  clearTimeout(game.roundTimer);
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
              : "Only 1 player joined — need at least 2!"
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
          `Phase 1 begins in **8 seconds…**`
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
  const active   = game.getActivePlayers();
  const eligible = game.getEligiblePlayers();

  // Overall game win check
  if (active.length === 0) {
    await channel.send({ embeds: [drawEmbed()] });
    endSpeedGame(channel.id);
    return;
  }
  if (active.length === 1) {
    await declareWinner(game, channel, active[0]);
    return;
  }

  // Phase complete: everyone already won a round this phase (rare edge case)
  if (eligible.length === 0) {
    await resolvePhaseComplete(game, channel);
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
  game.phaseRound++;
  game.roundNumber++;
  game.phase = "answering";
  game.skipVotes.clear();

  game.questionMessage = await channel.send(questionEmbed(game, question));

  game.roundTimer = setTimeout(async () => {
    await resolveQuestion(game, channel, true);
  }, SPEED_ROUND_DURATION_MS);
}

async function resolveQuestion(game, channel, timedOut = false) {
  if (game.phase !== "answering") return;
  game.phase = "result";

  clearTimeout(game.roundTimer);
  await disableSkipButton(game);

  const question = game.currentQuestion;

  // Walk answers in submission order — first correct = round winner
  let winner = null;
  const attempts = [];

  for (const [userId, { answer }] of game.roundAnswers) {
    const player = game.players.get(userId);
    if (!player) continue;
    const correct = checkAnswer(question, answer);
    const isWinner = correct && !winner;
    if (isWinner) winner = { id: userId, username: player.username };
    attempts.push({ userId, username: player.username, answer, isWinner });
  }

  // Winner becomes safe for the rest of the phase
  if (winner) {
    game.phaseWinners.set(winner.id, { username: winner.username, wonRound: game.phaseRound });
  }

  await channel.send({ embeds: [roundResultEmbed(game, question, winner, attempts)] });

  const active   = game.getActivePlayers();
  const eligible = game.getEligiblePlayers();

  // ── Overall win check (must come before phase check) ─────────────────────
  if (active.length === 0) {
    game.resultTimer = setTimeout(async () => {
      await channel.send({ embeds: [drawEmbed()] });
      endSpeedGame(channel.id);
    }, SPEED_RESULT_DURATION_MS);
    return;
  }

  // ── Phase complete: only 1 or 0 eligible players remain ──────────────────
  if (eligible.length <= 1) {
    const loser = eligible[0] || null;
    if (loser) game.eliminatePlayer(loser.id);

    const remaining = game.getActivePlayers();

    if (loser) {
      await channel.send({ embeds: [phaseEndEmbed(game, loser)] });
    }

    // Use a plain sleep so resultTimer can't be overwritten
    await new Promise(res => setTimeout(res, SPEED_RESULT_DURATION_MS));

    if (!game.isActive()) return; // game was force-ended during the wait

    if (remaining.length === 0) {
      await channel.send({ embeds: [drawEmbed()] });
      endSpeedGame(channel.id);
    } else if (remaining.length === 1) {
      await declareWinner(game, channel, remaining[0]);
    } else {
      game.startNewPhase();
      await channel.send(`🔄 **Phase ${game.phaseNumber} begins!** ${remaining.map(p => p.username).join(", ")} are still in.`);
      await startQuestion(game, channel);
    }
    return;
  }

  // Still more eligible players — continue this phase
  game.resultTimer = setTimeout(() => startQuestion(game, channel), SPEED_RESULT_DURATION_MS);
}

async function resolvePhaseComplete(game, channel) {
  const active   = game.getActivePlayers();
  const eligible = game.getEligiblePlayers(); // the ones who never won this phase

  if (eligible.length === 0) {
    // Everyone won at least one round (extremely rare) — no elimination, new phase
    await channel.send("🔄 Everyone won a round this phase — no elimination! Starting a fresh phase.");
    game.startNewPhase();
    await startQuestion(game, channel);
    return;
  }

  // Exactly one player never won — they're eliminated
  const eliminated = eligible[0];
  game.eliminatePlayer(eliminated.id);

  await channel.send({ embeds: [phaseEndEmbed(game, eliminated)] });

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
        await message.react("👍");
        return;
      }
      if (game.expectedPlayers !== null && game.players.size >= game.expectedPlayers) {
        await message.reply({ content: "❌ Lobby is full!" }).catch(() => {});
        return;
      }

      game.addPlayer(userId, username);
      await message.react("✅");

      try { await game.lobbyMessage.edit({ embeds: [lobbyEmbed(game)] }); } catch { /* ignore */ }

      if (game.expectedPlayers !== null && game.players.size >= game.expectedPlayers) {
        clearTimeout(game.roundTimer);
        await message.channel.send(`⚡ All **${game.expectedPlayers}** players joined — starting!`);
        await resolveLobby(game, message.channel);
      }
    }
    return;
  }

  // ── ANSWERING ─────────────────────────────────────────────────────────────
  if (game.phase !== "answering") return;

  const player = game.players.get(userId);
  if (!player || !player.active) return;

  // Players who already won this phase are "safe" and don't compete anymore
  if (game.phaseWinners.has(userId)) return;

  // Only first attempt per round counts
  if (game.roundAnswers.has(userId)) return;

  game.roundAnswers.set(userId, { answer: content, timestamp: Date.now() });

  const correct = checkAnswer(game.currentQuestion, content);

  if (correct && !hasWinnerThisRound(game)) {
    // First correct answer — resolve immediately
    await message.react("✅");
    await message.channel.send(`✅ **${username}** got it first! Safe for this phase!`);
    clearTimeout(game.roundTimer);
    await resolveQuestion(game, message.channel, false);
  } else if (correct) {
    await message.react("🥈");
  } else {
    await message.react("💬");
  }

  // Early resolve: all eligible players have now answered
  if (game.phase === "answering") {
    const eligible  = game.getEligiblePlayers();
    const answered  = eligible.filter(p => game.roundAnswers.has(p.id));
    if (answered.length >= eligible.length && eligible.length > 0) {
      clearTimeout(game.roundTimer);
      await resolveQuestion(game, message.channel, false);
    }
  }
}

// Check if anyone has already submitted a correct answer this round
function hasWinnerThisRound(game) {
  for (const [, { answer }] of game.roundAnswers) {
    if (checkAnswer(game.currentQuestion, answer)) return true;
  }
  return false;
}

// ─── SKIP HANDLER ──────────────────────────────────────────────────────────────

async function handleSpeedSkip(interaction, game) {
  if (game.phase !== "answering") {
    return interaction.reply({ content: "Can't skip right now.", flags: 64 });
  }

  const userId   = interaction.user.id;
  const eligible = game.getEligiblePlayers();

  if (!eligible.some(p => p.id === userId)) {
    return interaction.reply({ content: "❌ Only players still trying to win a round can vote to skip.", flags: 64 });
  }
  if (game.skipUsedRounds.has(game.roundNumber)) {
    return interaction.reply({ content: "❌ Skip already used this round.", flags: 64 });
  }
  if (game.skipVotes.has(userId)) {
    return interaction.reply({ content: "You already voted to skip!", flags: 64 });
  }

  game.skipVotes.add(userId);
  const needed  = Math.ceil(eligible.length / 2);
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
      await resolveQuestion(game, interaction.channel, true);
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
        await resolveQuestion(game, interaction.channel, true);
      }, SPEED_ROUND_DURATION_MS);
    }, 2000);
  }
}

module.exports = { startRound, handleSpeedMessage, handleSpeedSkip };
