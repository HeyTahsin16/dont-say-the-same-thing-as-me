require("dotenv").config();

const {
  Client,
  GatewayIntentBits,
  Events,
  REST,
  Routes,
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Colors,
} = require("discord.js");

const { initGemini, judgeRound, setModel, getModel, getAvailableModels } = require("./gemini");
const { createGame, getGame, endGame, ROUND_ONE_DURATION_MS, ROUND_DURATION_MS, RESULT_DURATION_MS } = require("./gameState");
const { getQuestionByCategory, resolveCategory } = require("./questions");
const { recordWin, getTopPlayers } = require("./leaderboard");

// ─── ENV CHECKS ────────────────────────────────────────────────────────────────
const TOKEN = process.env.DISCORD_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GEMINI_KEY = process.env.GEMINI_API_KEY;
const OWNER_ID = process.env.DISCORD_OWNER_ID; // optional — only this user can /setmodel

if (!TOKEN || !CLIENT_ID || !GEMINI_KEY) {
  console.error("❌  Missing env vars. Check your .env file.");
  process.exit(1);
}

initGemini(GEMINI_KEY);

// ─── SLASH COMMANDS ────────────────────────────────────────────────────────────
const commands = [
  new SlashCommandBuilder()
    .setName("startgame")
    .setDescription("Start a new round of the word minigame in this channel.")
    .addIntegerOption(opt =>
      opt
        .setName("players")
        .setDescription("Expected number of players — round 1 ends early once everyone answers (optional)")
        .setMinValue(2)
        .setMaxValue(100)
        .setRequired(false)
    ),

  new SlashCommandBuilder()
    .setName("endgame")
    .setDescription("Force-end the current game (host/mod only)."),

  new SlashCommandBuilder()
    .setName("leaderboard")
    .setDescription("Show the all-time winners leaderboard."),

  new SlashCommandBuilder()
    .setName("setmodel")
    .setDescription("Switch the Gemini model (owner only). Useful when hitting rate limits.")
    .addStringOption(opt =>
      opt
        .setName("model")
        .setDescription("Gemini model name to switch to")
        .setRequired(true)
        .addChoices(
          { name: "gemini-1.5-flash (default, fast)", value: "gemini-1.5-flash" },
          { name: "gemini-1.5-flash-8b (lightest)", value: "gemini-1.5-flash-8b" },
          { name: "gemini-1.5-pro (smarter, lower limit)", value: "gemini-1.5-pro" },
          { name: "gemini-2.0-flash (newest fast)", value: "gemini-2.0-flash" },
          { name: "gemini-2.0-flash-lite (lightest 2.0)", value: "gemini-2.0-flash-lite" },
          { name: "gemini-2.5-flash-preview (best quality)", value: "gemini-2.5-flash-preview-05-20" },
        )
    ),

  new SlashCommandBuilder()
    .setName("help")
    .setDescription("How to play the minigame."),
].map(c => c.toJSON());

// ─── REGISTER COMMANDS ─────────────────────────────────────────────────────────
async function registerCommands() {
  const rest = new REST({ version: "10" }).setToken(TOKEN);
  try {
    console.log("Registering slash commands…");
    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
    console.log("✅  Slash commands registered globally.");
  } catch (err) {
    console.error("Failed to register commands:", err);
  }
}

// ─── CLIENT ────────────────────────────────────────────────────────────────────
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// ─── EMBED HELPERS ─────────────────────────────────────────────────────────────
function questionEmbed(game, question, roundNum, timerSecs) {
  const activePlayers = game.getActivePlayers();
  const isFirstRound = roundNum === 1;
  const embed = new EmbedBuilder()
    .setColor(Colors.Blue)
    .setTitle(`🎮 Round ${roundNum} — Category: **${question.category}** answers`)
    .setDescription(
      `**Question:** ${question.question}\n\n` +
      `⏱️ **You have ${timerSecs} seconds to type your answer in this channel!**\n` +
      (isFirstRound ? `Anyone who answers joins the game.\n\n` : `Just send a message — no command needed.\n\n`) +
      `👥 Players still in: **${activePlayers.map(p => p.username).join(", ") || "none"}**`
    )
    .setFooter({ text: `Round ends in ${timerSecs}s • ${activePlayers.length} player(s) active` })
    .setTimestamp();

  // No skip button in round 1 — players haven't joined yet
  if (isFirstRound) {
    return { embeds: [embed], components: [] };
  }

  const skipButton = new ButtonBuilder()
    .setCustomId("skip_question")
    .setLabel("⏭️ Skip Question")
    .setStyle(ButtonStyle.Secondary);

  const row = new ActionRowBuilder().addComponents(skipButton);
  return { embeds: [embed], components: [row] };
}

function sanitize(str, fallback = "—") {
  if (!str || typeof str !== "string") return fallback;
  const trimmed = str.trim();
  return trimmed.length === 0 ? fallback : trimmed.slice(0, 1024);
}

function sanitizeName(str, fallback = "Unknown") {
  if (!str || typeof str !== "string") return fallback;
  const trimmed = str.trim();
  return trimmed.length === 0 ? fallback : trimmed.slice(0, 256);
}

function resultEmbed(game, question, aiAnswer, judgements, roundNum) {
  const fields = [];

  for (const [playerId, j] of Object.entries(judgements)) {
    const player = game.players.get(playerId);
    const name = sanitizeName(player?.username || playerId);
    const rawAnswer = game.roundAnswers.get(playerId) || "";
    const answer = sanitize(rawAnswer, "*(no answer)*");
    const corrected = j.corrected ? ` *(fixed: ${sanitize(j.corrected)})*` : "";
    const reason = sanitize(j.reason, "No reason given");

    let status;
    if (j.pass) {
      status = "✅ SAFE";
    } else if (j.matchesAI) {
      status = "💀 MATCHED AI";
    } else if (j.duplicateOf) {
      status = `🔁 DUPLICATE of ${sanitizeName(j.duplicateOf)}`;
    } else {
      status = "❌ ELIMINATED";
    }

    fields.push({
      name: sanitizeName(`${status} — ${name}`),
      value: sanitize(`Answer: **${answer}**${corrected}\n_${reason}_`),
      inline: false,
    });
  }

  // Players who didn't answer at all (round 2+)
  for (const p of game.getActivePlayers()) {
    if (!game.roundAnswers.has(p.id) && judgements && !judgements[p.id]) {
      fields.push({
        name: sanitizeName(`❌ ELIMINATED — ${p.username}`),
        value: "Gave no answer this round.",
        inline: false,
      });
    }
  }

  const survivors = game.getActivePlayers();

  return new EmbedBuilder()
    .setColor(Colors.Gold)
    .setTitle(`📊 Round ${roundNum} Results`)
    .setDescription(
      `**Question:** ${question.question}\n` +
      `🤖 **AI's Answer:** \`${sanitize(aiAnswer, "???")}\`\n\n` +
      (survivors.length > 0
        ? `**Still standing:** ${survivors.map(p => p.username).join(", ")}`
        : "**Nobody survived this round!**")
    )
    .addFields(fields.length ? fields : [{ name: "No answers recorded", value: "—" }])
    .setFooter({ text: `Next round starts in 10 seconds • Round was ${game.round === 1 ? "60" : "30"}s` })
    .setTimestamp();
}

function winnerEmbed(winner, soloGame = false) {
  return new EmbedBuilder()
    .setColor(soloGame ? Colors.Grey : Colors.Green)
    .setTitle(soloGame ? "🎮 Game Over — Solo Run" : "🏆 We Have a Winner!")
    .setDescription(
      soloGame
        ? `**${winner.username}** was the only player — no win counted on the leaderboard.\nPlay with at least 2 people for it to count!`
        : `Congratulations **${winner.username}**! You are the last one standing!`
    )
    .setFooter({ text: "Use /startgame to play again • /leaderboard for rankings" })
    .setTimestamp();
}

function drawEmbed() {
  return new EmbedBuilder()
    .setColor(Colors.Red)
    .setTitle("💀 Everyone's Out!")
    .setDescription("No winner this round — everyone was eliminated at the same time. Better luck next game!")
    .setFooter({ text: "Use /startgame to try again" })
    .setTimestamp();
}

// ─── GAME LOOP ─────────────────────────────────────────────────────────────────
async function startRound(game, channel) {
  // Round 1: no players yet (they join by answering), skip survivor checks
  if (game.round > 0) {
    const activePlayers = game.getActivePlayers();

    if (activePlayers.length === 0) {
      await channel.send({ embeds: [drawEmbed()] });
      endGame(channel.id);
      return;
    }

    if (activePlayers.length === 1) {
      const winner = activePlayers[0];
      if ((game.peakPlayerCount || 0) >= 2) {
        recordWin(winner.id, winner.username);
      }
      await channel.send({ embeds: [winnerEmbed(winner, (game.peakPlayerCount || 0) < 2)] });
      endGame(channel.id);
      return;
    }
  }

  game.round++;
  game.phase = "answering";
  game.roundAnswers.clear();
  game.eliminatedThisRound = [];
  game.survivorsThisRound = [];

  // ── Dynamic category ────────────────────────────────────────────────────
  // resolveCategory looks at active player count + how long we've been on the
  // current difficulty, and decides whether to stay, step up, or step back.
  const activeCount = game.getActivePlayers().length;
  const category = resolveCategory(game, activeCount);

  // Pick a question not used before in this category
  let question = null;
  let tries = 0;
  do {
    question = getQuestionByCategory(category);
    tries++;
    if (tries > 20) break;
  } while (question && game.usedQuestionIds.has(question.id));

  if (!question) {
    await channel.send("⚠️ Ran out of questions for this category! Game over.");
    endGame(channel.id);
    return;
  }

  game.usedQuestionIds.add(question.id);
  game.currentQuestion = question;
  game.skipVotes.clear();

  // ── Round timer: 60s for round 1 (joining), 30s for all others ──────────
  const roundDuration = game.round === 1 ? ROUND_ONE_DURATION_MS : ROUND_DURATION_MS;
  const timerSecs = roundDuration / 1000;

  game.questionMessage = await channel.send(questionEmbed(game, question, game.round, timerSecs));

  game.roundTimer = setTimeout(async () => {
    await resolveRound(game, channel);
  }, roundDuration);
}

// Disable the skip button on the question message so it can't be clicked after round ends
async function disableSkipButton(game) {
  try {
    if (game.questionMessage) {
      const disabledButton = new ButtonBuilder()
        .setCustomId("skip_question")
        .setLabel("⏭️ Skip Question")
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(true);
      const row = new ActionRowBuilder().addComponents(disabledButton);
      await game.questionMessage.edit({ components: [row] });
    }
  } catch { /* message may have been deleted — ignore */ }
}

// Skip the current question — pick a new one without judging
async function skipRound(game, channel) {
  if (game.phase !== "answering") return;
  game.phase = "judging"; // block further input

  clearTimeout(game.roundTimer);
  await disableSkipButton(game);

  const activePlayers = game.getActivePlayers();

  // Pick a replacement question from the same category (not used before)
  let newQuestion = null;
  let tries = 0;
  do {
    newQuestion = getQuestionByCategory(game.currentCategory);
    tries++;
    if (tries > 20) break;
  } while (newQuestion && game.usedQuestionIds.has(newQuestion.id));

  if (!newQuestion) {
    await channel.send("⚠️ No replacement question available — ending round normally.");
    await resolveRound(game, channel);
    return;
  }

  game.usedQuestionIds.add(newQuestion.id);
  game.currentQuestion = newQuestion;
  game.skipVotes.clear();
  game.roundAnswers.clear();

  const skipCount = activePlayers.length; // everyone effectively voted
  await channel.send({
    embeds: [
      new EmbedBuilder()
        .setColor(Colors.Orange)
        .setTitle("⏭️ Question Skipped!")
        .setDescription(`Majority voted to skip. Here's a new question!`)
        .setTimestamp(),
    ],
  });

  // Small pause then send new question
  setTimeout(async () => {
    game.phase = "answering";
    game.skipVotes.clear();

    const roundDuration = game.round === 1 ? ROUND_ONE_DURATION_MS : ROUND_DURATION_MS;
    const timerSecs = roundDuration / 1000;

    game.questionMessage = await channel.send(questionEmbed(game, newQuestion, game.round, timerSecs));

    game.roundTimer = setTimeout(async () => {
      await resolveRound(game, channel);
    }, roundDuration);
  }, 2000);
}

async function resolveRound(game, channel) {
  if (game.phase !== "answering") return;
  game.phase = "judging";

  clearTimeout(game.roundTimer);
  await disableSkipButton(game);

  const question = game.currentQuestion;
  const activeBefore = game.getActivePlayers();

  // Collect answers only from active players
  const playerAnswers = {};
  for (const p of activeBefore) {
    const ans = game.roundAnswers.get(p.id);
    if (ans) playerAnswers[p.id] = ans;
  }

  // Detect players who submitted identical answers to each other
  // Group by normalised answer → anyone sharing an answer with another player is a duplicate
  const duplicateJudgements = {}; // playerId -> judgement for duplicate collisions
  const answerGroups = new Map(); // normalisedAnswer -> [playerId, ...]
  for (const [pid, ans] of Object.entries(playerAnswers)) {
    const key = ans.trim().toLowerCase();
    if (!answerGroups.has(key)) answerGroups.set(key, []);
    answerGroups.get(key).push(pid);
  }
  for (const [, group] of answerGroups) {
    if (group.length > 1) {
      // All players in this group collided with each other — eliminate them all
      for (let i = 0; i < group.length; i++) {
        const othersNames = group
          .filter((_, j) => j !== i)
          .map(id => game.players.get(id)?.username || id)
          .join(", ");
        duplicateJudgements[group[i]] = {
          pass: false,
          reason: `Same answer as ${othersNames} — both eliminated`,
          corrected: null,
          matchesAI: false,
          duplicateOf: othersNames,
        };
        // Remove from playerAnswers so Gemini doesn't re-judge them
        delete playerAnswers[group[i]];
      }
    }
  }

  // Players who are active but gave no answer (round 2+ → eliminate)
  const noAnswerPlayers = activeBefore.filter(p => !game.roundAnswers.has(p.id));

  // Call Gemini
  await channel.send("⏱️ Time's up! The AI is judging your answers…");

  let aiAnswer = "???";
  let judgements = {};

  if (Object.keys(playerAnswers).length > 0) {
    try {
      const result = await judgeRound({
        question: question.question,
        exampleAnswers: question.exampleAnswers,
        playerAnswers,
      });
      aiAnswer = result.aiAnswer;
      judgements = result.judgements;
    } catch (err) {
      console.error("judgeRound error:", err);
    }
  }

  // Merge Gemini judgements with pre-determined duplicate eliminations
  judgements = { ...judgements, ...duplicateJudgements };

  // Apply all judgements
  for (const [playerId, j] of Object.entries(judgements)) {
    if (!j.pass) {
      game.eliminatePlayer(playerId);
    }
  }

  // Eliminate no-answer players (but only from round 2 onwards — round 1 they're just "joining")
  for (const p of noAnswerPlayers) {
    if (game.round > 1) {
      game.eliminatePlayer(p.id);
      judgements[p.id] = { pass: false, reason: "No answer given", corrected: null, matchesAI: false };
    }
    // Round 1: players who didn't answer aren't counted as participants
    // (they never typed anything so they never "joined")
  }

  // Send result embed
  game.phase = "result";
  try {
    await channel.send({ embeds: [resultEmbed(game, question, aiAnswer, judgements, game.round)] });
  } catch (embedErr) {
    console.error("Result embed error:", embedErr.message);
    // Fallback plain text summary so the game can still continue
    const lines = Object.entries(judgements).map(([pid, j]) => {
      const p = game.players.get(pid);
      const uname = p?.username || pid;
      const ans = game.roundAnswers.get(pid) || "(no answer)";
      const status = j.pass ? "✅ SAFE" : j.matchesAI ? "💀 MATCHED AI" : "❌ OUT";
      return `${status} **${uname}**: ${ans}`;
    });
    await channel.send(
      `📊 **Round ${game.round} Results**\n🤖 AI Answer: \`${aiAnswer || "???"}\`\n\n` +
      (lines.join("\n") || "No answers.") +
      `\n\nStill in: ${game.getActivePlayers().map(p => p.username).join(", ") || "Nobody"}`
    ).catch(() => {});
  }

  // Check win condition
  const survivors = game.getActivePlayers();

  if (survivors.length === 0) {
    game.resultTimer = setTimeout(async () => {
      await channel.send({ embeds: [drawEmbed()] });
      endGame(channel.id);
    }, RESULT_DURATION_MS);
    return;
  }

  if (survivors.length === 1) {
    const winner = survivors[0];
    const soloGame = (game.peakPlayerCount || 0) < 2;
    if (!soloGame) {
      recordWin(winner.id, winner.username);
    }
    game.resultTimer = setTimeout(async () => {
      await channel.send({ embeds: [winnerEmbed(winner, soloGame)] });
      endGame(channel.id);
    }, RESULT_DURATION_MS);
    return;
  }

  // Continue to next round
  game.resultTimer = setTimeout(async () => {
    await startRound(game, channel);
  }, RESULT_DURATION_MS);
}

// ─── MESSAGE HANDLER (answer collection) ───────────────────────────────────────
client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;

  const game = getGame(message.channelId);
  if (!game || game.phase !== "answering") return;

  const userId = message.author.id;
  const username = message.author.username;
  const content = message.content.trim();

  if (!content) return;

  // Round 1: anyone who types joins
  if (game.round === 1 && !game.players.has(userId)) {
    game.addPlayer(userId, username);
  }

  // Only active players can answer
  const player = game.players.get(userId);
  if (!player || !player.active) return;

  // Record answer (first answer wins, duplicates are flagged)
  if (!game.roundAnswers.has(userId)) {
    // Check if another active player already submitted the same answer (case-insensitive)
    const normalised = content.trim().toLowerCase();
    const duplicate = [...game.roundAnswers.entries()].find(([otherId, otherAns]) => {
      if (otherId === userId) return false;
      return otherAns.trim().toLowerCase() === normalised;
    });

    if (duplicate) {
      const [dupId] = duplicate;
      const dupPlayer = game.players.get(dupId);
      const dupName = dupPlayer?.username || "someone";
      try {
        await message.reply(
          `⚠️ **Duplicate answer!** **${dupName}** already said \`${content}\`. ` +
          `You have until the round ends to send a **different** answer!`
        );
        await message.react("⚠️");
      } catch { /* ignore */ }
      // Don't record — let them try again
      return;
    }

    game.roundAnswers.set(userId, content);
    try {
      await message.react("📝");
    } catch { /* ignore react errors */ }

    // ── Early round skip ────────────────────────────────────────────────────
    // Round 1: skip if expectedPlayers is set and that many have now answered
    // Round 2+: skip as soon as ALL active players have answered
    const answered = game.roundAnswers.size;

    if (game.round === 1 && game.expectedPlayers !== null) {
      if (answered >= game.expectedPlayers) {
        clearTimeout(game.roundTimer);
        await message.channel.send(`⚡ All **${game.expectedPlayers}** players answered — starting early!`);
        await resolveRound(game, message.channel);
      }
    } else if (game.round > 1) {
      const activePlayers = game.getActivePlayers();
      if (answered >= activePlayers.length) {
        clearTimeout(game.roundTimer);
        await message.channel.send(`⚡ Everyone answered — moving on!`);
        await resolveRound(game, message.channel);
      }
    }
  }
});

// ─── BUTTON HANDLER (skip votes) ───────────────────────────────────────────────
client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isButton()) return;
  if (interaction.customId !== "skip_question") return;

  const game = getGame(interaction.channelId);
  if (!game || game.phase !== "answering") {
    return interaction.reply({ content: "No active round to skip.", ephemeral: true });
  }

  const userId = interaction.user.id;
  const activePlayers = game.getActivePlayers();

  // Must be an active player — eliminated players and non-participants cannot vote
  const isActivePlayer = activePlayers.some(p => p.id === userId);
  if (!isActivePlayer) {
    return interaction.reply({
      content: "❌ Only active players still in the game can vote to skip.",
      ephemeral: true,
    });
  }

  // Only one skip allowed per round
  if (game.skipUsedRounds.has(game.round)) {
    return interaction.reply({
      content: "❌ Skip already used this round — only one skip per round is allowed.",
      ephemeral: true,
    });
  }

  if (game.skipVotes.has(userId)) {
    return interaction.reply({ content: "You already voted to skip!", ephemeral: true });
  }

  game.skipVotes.add(userId);

  const needed = Math.ceil(activePlayers.length / 2);
  const current = game.skipVotes.size;
  const remaining = needed - current;

  await interaction.reply({
    content: `⏭️ **${interaction.user.username}** voted to skip! (${current}/${needed} needed${remaining > 0 ? ` — ${remaining} more` : ""})`,
  });

  if (current >= needed) {
    game.skipUsedRounds.add(game.round);
    await skipRound(game, interaction.channel);
  }
});

// ─── INTERACTION HANDLER ───────────────────────────────────────────────────────
client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName, channelId, user, channel } = interaction;

  // ── /startgame ──
  if (commandName === "startgame") {
    const existing = getGame(channelId);
    if (existing && existing.isActive()) {
      return interaction.reply({
        content: "⚠️ A game is already running in this channel! Use `/endgame` to stop it first.",
        ephemeral: true,
      });
    }

    const game = createGame(channelId, interaction.guildId, user.id);
    const expectedPlayers = interaction.options.getInteger("players") ?? null;
    game.expectedPlayers = expectedPlayers;

    const playerNote = expectedPlayers
      ? `⚡ Game set for **${expectedPlayers} players** — round 1 ends as soon as all ${expectedPlayers} answer!\n\n`
      : "";

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(Colors.Purple)
          .setTitle("🎮 Don't Say The Same Thing As Me!")
          .setDescription(
            "Inspired by **bradyyourtutor** on YouTube!\n\n" +
            "**How to play:**\n" +
            "• A question appears — type your answer directly in this channel\n" +
            "• The AI host secretly picks the most **obvious** answer\n" +
            "• If your answer **matches the AI** → **eliminated** 💀\n" +
            "• If your answer **matches another player** → **both eliminated** 🔁\n" +
            "• If your answer is **wrong or gibberish** → **eliminated** ❌\n" +
            "• If you **don't answer** (round 2+) → **eliminated** 🚫\n" +
            "• Anyone who types in round 1 joins — last one standing wins! 🏆\n\n" +
            "⚠️ **The AI picks the most common answer — don't go with your first instinct!**\n\n" +
            playerNote +
            "The first question launches in **5 seconds…**"
          )
          .setFooter({ text: "Type your answer when the question appears!" }),
      ],
    });

    setTimeout(async () => {
      await startRound(game, channel);
    }, 5000);
  }

  // ── /endgame ──
  else if (commandName === "endgame") {
    const game = getGame(channelId);
    if (!game) {
      return interaction.reply({ content: "❌ No game is running right now.", ephemeral: true });
    }
    // Only the starter or someone with Manage Messages can force-end
    const member = interaction.member;
    const canEnd =
      game.startedBy === user.id ||
      member?.permissions?.has("ManageMessages");

    if (!canEnd) {
      return interaction.reply({
        content: "❌ Only the game starter or a moderator can force-end the game.",
        ephemeral: true,
      });
    }

    endGame(channelId);
    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(Colors.Red)
          .setTitle("🛑 Game Ended")
          .setDescription(`Game force-ended by ${user.username}.`),
      ],
    });
  }

  // ── /leaderboard ──
  else if (commandName === "leaderboard") {
    const top = getTopPlayers(10);

    if (top.length === 0) {
      return interaction.reply({ content: "📋 No games have been won yet!", ephemeral: false });
    }

    const medals = ["🥇", "🥈", "🥉"];
    const rows = top.map((p, i) => {
      const medal = medals[i] || `**${i + 1}.**`;
      return `${medal} **${p.username}** — ${p.wins} win${p.wins !== 1 ? "s" : ""}`;
    });

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(Colors.Gold)
          .setTitle("🏆 All-Time Leaderboard")
          .setDescription(rows.join("\n"))
          .setFooter({ text: "Play more games to climb the ranks!" }),
      ],
    });
  }

  // ── /setmodel ──
  else if (commandName === "setmodel") {
    // Restrict to owner if DISCORD_OWNER_ID is set, otherwise allow anyone with Manage Guild
    const member = interaction.member;
    const isOwner = OWNER_ID ? user.id === OWNER_ID : member?.permissions?.has("ManageGuild");

    if (!isOwner) {
      return interaction.reply({
        content: "❌ Only the bot owner can change the Gemini model.",
        ephemeral: true,
      });
    }

    const chosen = interaction.options.getString("model");
    setModel(chosen);

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(Colors.Teal)
          .setTitle("🔄 Gemini Model Updated")
          .setDescription(`Now using **\`${chosen}\`** for all future rounds.`)
          .addFields({
            name: "💡 Tip",
            value:
              "If you switched because of a rate limit error, the new model takes effect immediately — no restart needed. Any game currently in progress will use the new model from the next round onwards.",
          })
          .setFooter({ text: `Changed by ${user.username}` }),
      ],
    });
  }

  // ── /help ──
  else if (commandName === "help") {
    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor(Colors.Blurple)
          .setTitle("🎮 Don't Say The Same Thing As Me — How to Play")
          .setDescription("Inspired by **bradyyourtutor** on YouTube (\"Don't Say The Same Thing As Me\" series).")
          .addFields(
            {
              name: "The Core Idea",
              value:
                "The AI host secretly picks the **most obvious/common** answer to each question. Your goal is to give a **valid answer that the AI didn't pick**. Think creatively — don't go with your gut!",
            },
            {
              name: "Starting a Game",
              value: "Use `/startgame` in any channel. The first question will appear shortly.",
            },
            {
              name: "Answering",
              value:
                "Just **type your answer** in the channel when the question is shown. You have **60 seconds**. The 📝 reaction confirms your answer was recorded. Only your first message counts.",
            },
            {
              name: "Elimination Rules",
              value:
                "• Your answer **matches the AI's answer** → eliminated 💀\n" +
                "• Your answer **matches another player's answer** → both eliminated 🔁\n" +
                "• Your answer is **wrong or off-topic** → eliminated ❌\n" +
                "• Your answer is **gibberish** → eliminated ❌\n" +
                "• You **don't answer** (round 2+) → eliminated 🚫",
            },
            {
              name: "Typos & Ambiguous Answers",
              value:
                "The AI host fixes minor typos automatically. Synonyms and close equivalents are judged fairly — if it clearly means the same thing as a valid answer, it counts.",
            },
            {
              name: "Round Progression",
              value:
                "Each round uses a harder category (fewer valid answers). Rounds go:\n`40+` → `20-40` → `10-20` → `5-10` → `1-5` → `1-3`\nThe fewer options there are, the harder it is to avoid the AI!",
            },
            {
              name: "Winning",
              value: "Last player standing wins and gets a point on the `/leaderboard`!",
            },
            {
              name: "Commands",
              value:
                "`/startgame` — Start a new game\n`/endgame` — Force-end (starter or mod only)\n`/leaderboard` — See top winners\n`/setmodel` — Switch Gemini model (owner only)\n`/help` — This message",
            }
          ),
      ],
      ephemeral: true,
    });
  }
});

// ─── READY ─────────────────────────────────────────────────────────────────────
client.once(Events.ClientReady, (c) => {
  console.log(`✅  Logged in as ${c.user.tag}`);
  console.log(`🤖  Bot is ready! Invite link: https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&permissions=277025459200&scope=bot%20applications.commands`);
});

// ─── LAUNCH ────────────────────────────────────────────────────────────────────
(async () => {
  await registerCommands();
  await client.login(TOKEN);
})();
