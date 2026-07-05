const { EmbedBuilder, Colors } = require("discord.js");

const { endImageGame, ROUND_DURATION_MS, TRANSITION_MS } = require("./imageGameState");
const { getSet, checkImageAnswer, getRandomImageQuestion, getImageUrl } = require("./imageSets");
const { recordWin } = require("./leaderboard");

// ─── EMBEDS ────────────────────────────────────────────────────────────────────

function questionEmbed(game, question, set) {
  const scoreboard = game.getScoreboard();
  const scoreLines = scoreboard.length > 0
    ? scoreboard.map((p, i) => `${i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i+1}.`} **${p.username}** — ${p.points} pts`).join("\n")
    : "_No points yet — be the first to answer!_";

  return new EmbedBuilder()
    .setColor(Colors.Blue)
    .setTitle(set.prompt)
    .setDescription(
      `⏱️ **60 seconds** to answer — type your guess in the channel!\n` +
      `Anyone can join at any time. First to **${set.winScore} points** wins!\n\n` +
      `**📊 Scoreboard:**\n${scoreLines}`
    )
    .setImage(getImageUrl(set, question))
    .setFooter({ text: `Category: ${set.name} • Round ${game.usedQuestionIds.size}` })
    .setTimestamp();
}

function correctEmbed(game, username, answer, displayName, points, winScore) {
  return new EmbedBuilder()
    .setColor(Colors.Green)
    .setTitle("✅ Correct!")
    .setDescription(
      `**${username}** got it! The answer was **${displayName}**.\n` +
      `They now have **${points}/${winScore}** points.\n\n` +
      `Next question in a moment…`
    )
    .setTimestamp();
}

function winnerEmbed(winner, points, soloGame) {
  return new EmbedBuilder()
    .setColor(soloGame ? Colors.Grey : Colors.Gold)
    .setTitle(soloGame ? "🎮 Image Round — Solo Run" : "🏆 Winner!")
    .setDescription(
      soloGame
        ? `**${winner.username}** was the only participant. No leaderboard point awarded.`
        : `🎉 **${winner.username}** reached **${points} points** first — they win!`
    )
    .setFooter({ text: "Use /startimage to play again • /leaderboard for rankings" })
    .setTimestamp();
}

function timeoutEmbed(game) {
  const scoreboard = game.getScoreboard();
  const topScore   = scoreboard.length > 0 ? scoreboard[0].points : 0;

  if (topScore === 0) {
    return new EmbedBuilder()
      .setColor(Colors.DarkRed)
      .setTitle("⏰ Time's Up — No Winner!")
      .setDescription("Nobody scored any points. Better luck next time!")
      .setFooter({ text: `Use /startimage to play again` })
      .setTimestamp();
  }

  const winners = scoreboard.filter(p => p.points === topScore);
  const isTie   = winners.length > 1;

  const scoreLines = scoreboard.map((p, i) =>
    `${i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i+1}.`} **${p.username}** — ${p.points} pts`
  ).join("\n");

  return new EmbedBuilder()
    .setColor(isTie ? Colors.Orange : Colors.Gold)
    .setTitle(isTie ? "🤝 Time's Up — It's a Tie!" : "⏰ Time's Up!")
    .setDescription(
      isTie
        ? `**${winners.map(w => w.username).join(" and ")}** tied with **${topScore} points** each!\n\n**Final scores:**\n${scoreLines}`
        : `**${winners[0].username}** wins with **${topScore} points**!\n\n**Final scores:**\n${scoreLines}`
    )
    .setFooter({ text: "Use /startimage to play again • /leaderboard for rankings" })
    .setTimestamp();
}

// ─── GAME LOOP ─────────────────────────────────────────────────────────────────

async function startImageRound(game, channel) {
  if (!game.isActive()) return;

  const set = getSet(game.setId);
  if (!set) {
    await channel.send("⚠️ Unknown question set!");
    endImageGame(channel.id);
    return;
  }

  let question = getRandomImageQuestion(set, game.usedQuestionIds);

  // If all questions used, reset the pool and start over
  if (!question) {
    game.usedQuestionIds.clear();
    question = getRandomImageQuestion(set, game.usedQuestionIds);
  }

  if (!question) {
    await channel.send("⚠️ No questions available!");
    endImageGame(channel.id);
    return;
  }

  game.usedQuestionIds.add(question.id);
  game.currentQuestion = question;
  game.phase = "question";

  await channel.send({ embeds: [questionEmbed(game, question, set)] });

  // 60-second timeout — if nobody answers, declare winner from scores
  game.roundTimer = setTimeout(async () => {
    await resolveTimeout(game, channel);
  }, ROUND_DURATION_MS);
}

async function resolveTimeout(game, channel) {
  if (game.phase !== "question") return;
  game.phase = "ended";

  clearTimeout(game.roundTimer);

  const scoreboard = game.getScoreboard();
  const topScore   = scoreboard.length > 0 ? scoreboard[0].points : 0;

  // Send the final scoreboard
  await channel.send({ embeds: [timeoutEmbed(game)] });

  // Award leaderboard win: only if ≥2 players participated, scores > 0, no tie, winner exists
  if (game.peakPlayerCount >= 2 && topScore > 0) {
    const topPlayers = scoreboard.filter(p => p.points === topScore);
    if (topPlayers.length === 1) {
      recordWin(topPlayers[0].id, topPlayers[0].username);
    }
    // Ties don't award a win
  }

  endImageGame(channel.id);
}

// ─── MESSAGE HANDLER ───────────────────────────────────────────────────────────

async function handleImageMessage(message, game) {
  if (game.phase !== "question") return;

  const userId   = message.author.id;
  const username = message.author.username;
  const content  = message.content.trim();
  if (!content) return;

  // Register player on first message (anyone who types joins)
  game.addOrUpdatePlayer(userId, username);

  const question = game.currentQuestion;
  const set      = getSet(game.setId);
  if (!question || !set) return;

  // Check answer
  if (!checkImageAnswer(question, content)) {
    await message.react("❌");
    return;
  }

  // ── Correct answer! ────────────────────────────────────────────────────────
  // Lock phase immediately to prevent duplicate points from concurrent messages
  game.phase = "transitioning";
  clearTimeout(game.roundTimer);

  game.addPoint(userId);
  const playerPoints = game.players.get(userId).points;

  await message.react("✅");
  await message.channel.send({ embeds: [correctEmbed(game, username, content, question.displayName, playerPoints, set.winScore)] });

  // Check win condition — first to winScore points
  if (playerPoints >= set.winScore) {
    const solo = game.peakPlayerCount < 2;
    if (!solo) recordWin(userId, username);
    await message.channel.send({ embeds: [winnerEmbed({ id: userId, username }, playerPoints, solo)] });
    endImageGame(message.channelId);
    return;
  }

  // Next question after transition pause
  game.resultTimer = setTimeout(async () => {
    await startImageRound(game, message.channel);
  }, TRANSITION_MS);
}

module.exports = { startImageRound, handleImageMessage };
