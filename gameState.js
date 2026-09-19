// In-memory game state per channel
const games = new Map(); // channelId -> GameState

const ROUND_ONE_DURATION_MS = 60_000;  // 60 seconds for round 1 (joining round)
const ROUND_DURATION_MS     = 30_000;  // 30 seconds for all subsequent rounds
const RESULT_DURATION_MS    = 10_000;  // 10 seconds to show results

class GameState {
  constructor(channelId, guildId, startedBy) {
    this.channelId  = channelId;
    this.guildId    = guildId;
    this.startedBy  = startedBy;
    this.phase      = "waiting"; // waiting | answering | judging | result | ended
    this.round      = 0;
    this.currentQuestion = null;
    this.currentCategory = null;

    // playerId -> { username, answer: string|null, active: boolean }
    this.players = new Map();

    // playerId -> [{ round, answer, pass, reason }]
    this.history = new Map();

    this.aiAnswer          = null;
    this.roundAnswers      = new Map(); // playerId -> answer
    this.eliminatedThisRound = [];
    this.survivorsThisRound  = [];

    this.roundTimer  = null;
    this.resultTimer = null;

    this.usedQuestionIds = new Set();
    this.skipVotes       = new Set();
    this.skipUsedRounds  = new Set();

    // ── Player cap (optional) ────────────────────────────────────────────────
    // If set via /startgame players: option, round 1 ends early once this
    // many players have answered instead of waiting the full 60 seconds.
    this.expectedPlayers = null;

    // ── Dynamic difficulty tracking ──────────────────────────────────────────
    // How many rounds to stay on the current category before re-evaluating.
    // Randomised between 10-15 each time a category is (re)locked in — see
    // enterCategory() in questions.js, which also builds categoryQueue below.
    this.roundsOnCurrentCategory = 0;   // how many rounds we've been on this cat
    this.categoryLockRounds       = 0;  // how many rounds to stay (10-15)

    // Ascending-difficulty (1→10) list of questions queued up for the
    // current category visit, plus which slot is next. Built fresh by
    // questions.js's enterCategory()/resolveCategory() every time the
    // category changes (or re-locks into itself); consumed one-by-one by
    // getNextQueuedQuestion(). See questions.js for the full picture.
    this.categoryQueue      = [];
    this.categoryQueueIndex = 0;
  }

  addPlayer(userId, username) {
    if (!this.players.has(userId)) {
      this.players.set(userId, { username, answer: null, active: true });
      this.history.set(userId, []);
      // Track the highest number of players who ever joined this game
      this.peakPlayerCount = (this.peakPlayerCount || 0) + 1;
    }
  }

  getActivePlayers() {
    return [...this.players.entries()]
      .filter(([, p]) => p.active)
      .map(([id, p]) => ({ id, ...p }));
  }

  recordAnswer(userId, answer) {
    if (!this.roundAnswers.has(userId)) {
      if (!this.players.has(userId)) return false;
    }
    this.roundAnswers.set(userId, answer);
    return true;
  }

  eliminatePlayer(userId) {
    if (this.players.has(userId)) {
      this.players.get(userId).active = false;
    }
  }

  isActive() {
    return this.phase !== "ended";
  }
}

function createGame(channelId, guildId, startedBy) {
  const game = new GameState(channelId, guildId, startedBy);
  games.set(channelId, game);
  return game;
}

function getGame(channelId) {
  return games.get(channelId) || null;
}

function endGame(channelId) {
  const game = games.get(channelId);
  if (game) {
    clearTimeout(game.roundTimer);
    clearTimeout(game.resultTimer);
    game.phase = "ended";
    games.delete(channelId);
  }
}

module.exports = {
  createGame, getGame, endGame,
  ROUND_ONE_DURATION_MS, ROUND_DURATION_MS, RESULT_DURATION_MS,
};
