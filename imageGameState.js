const games = new Map(); // channelId -> ImageGameState

const ROUND_DURATION_MS  = 60_000; // 60s to answer each question
const TRANSITION_MS      = 4_000;  // 4s pause between rounds

class ImageGameState {
  constructor(channelId, guildId, startedBy, setId) {
    this.channelId   = channelId;
    this.guildId     = guildId;
    this.startedBy   = startedBy;
    this.setId       = setId;

    this.phase = "waiting"; // waiting | question | transitioning | ended

    // userId -> { username, points }
    this.players = new Map();

    this.currentQuestion = null;
    this.usedQuestionIds = new Set();

    this.roundTimer  = null;
    this.resultTimer = null;

    // For leaderboard protection — need ≥2 unique participants for win to count
    this.peakPlayerCount = 0;
  }

  addOrUpdatePlayer(userId, username) {
    if (!this.players.has(userId)) {
      this.players.set(userId, { username, points: 0 });
      this.peakPlayerCount++;
    } else {
      this.players.get(userId).username = username;
    }
  }

  addPoint(userId) {
    const p = this.players.get(userId);
    if (p) p.points++;
  }

  getScoreboard() {
    return [...this.players.entries()]
      .map(([id, p]) => ({ id, ...p }))
      .sort((a, b) => b.points - a.points);
  }

  isActive() {
    return this.phase !== "ended";
  }
}

function createImageGame(channelId, guildId, startedBy, setId) {
  const game = new ImageGameState(channelId, guildId, startedBy, setId);
  games.set(channelId, game);
  return game;
}

function getImageGame(channelId) {
  return games.get(channelId) || null;
}

function endImageGame(channelId) {
  const game = games.get(channelId);
  if (game) {
    clearTimeout(game.roundTimer);
    clearTimeout(game.resultTimer);
    game.phase = "ended";
    games.delete(channelId);
  }
}

module.exports = {
  createImageGame, getImageGame, endImageGame,
  ROUND_DURATION_MS, TRANSITION_MS,
};
