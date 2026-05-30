// In-memory game state per channel
const games = new Map(); // channelId -> GameState

const ROUND_DURATION_MS = 60_000;   // 60 seconds for answering
const RESULT_DURATION_MS = 10_000;  // 10 seconds to show results

class GameState {
  constructor(channelId, guildId, startedBy) {
    this.channelId = channelId;
    this.guildId = guildId;
    this.startedBy = startedBy;
    this.phase = "waiting";       // waiting | answering | judging | result | ended
    this.round = 0;
    this.currentQuestion = null;
    this.currentCategory = null;

    // playerId -> { username, answer: string|null, active: boolean }
    this.players = new Map();

    // playerId -> [{ round, answer, pass, reason }]
    this.history = new Map();

    this.aiAnswer = null;
    this.roundAnswers = new Map(); // playerId -> answer (collected during round)
    this.eliminatedThisRound = [];
    this.survivorsThisRound = [];

    this.roundTimer = null;
    this.resultTimer = null;

    this.usedQuestionIds = new Set();
  }

  addPlayer(userId, username) {
    if (!this.players.has(userId)) {
      this.players.set(userId, { username, answer: null, active: true });
      this.history.set(userId, []);
    }
  }

  getActivePlayers() {
    return [...this.players.entries()]
      .filter(([, p]) => p.active)
      .map(([id, p]) => ({ id, ...p }));
  }

  recordAnswer(userId, answer) {
    if (!this.roundAnswers.has(userId)) {
      // First time answering in this round — register them if new
      if (!this.players.has(userId)) return false; // not a registered player
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

module.exports = { createGame, getGame, endGame, ROUND_DURATION_MS, RESULT_DURATION_MS };
