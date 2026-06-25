// In-memory speed game state per channel
const games = new Map();

const SPEED_ROUND_DURATION_MS  = 30_000;  // 30s per question
const SPEED_RESULT_DURATION_MS = 8_000;   // 8s to show results before next round

class SpeedGameState {
  constructor(channelId, guildId, startedBy, expectedPlayers) {
    this.channelId      = channelId;
    this.guildId        = guildId;
    this.startedBy      = startedBy;
    this.expectedPlayers = expectedPlayers ?? null; // optional player cap

    // phase: waiting | joining | answering | result | phase_result | ended
    this.phase = "waiting";

    // All players who have ever joined: userId -> { username, active: bool }
    this.players = new Map();

    // Current phase tracking
    // A "phase" = one cycle where eliminated players are determined
    this.phaseNumber   = 1;
    this.roundNumber   = 0;   // overall round counter (for display)
    this.phaseRound    = 0;   // round within this phase

    // Within a phase, track who has already WON a round (cannot answer)
    // playerId -> { username, wonRound: number }
    this.phaseWinners = new Map();

    // The player who was eliminated this phase (last one without a win)
    this.eliminated = null;

    // Current question
    this.currentQuestion  = null;
    this.usedQuestionIds  = new Set();

    // Who answered this round and when: playerId -> { answer, timestamp }
    this.roundAnswers = new Map();

    // The winner of this round (first correct answerer)
    this.roundWinner = null;

    // Question message (for disabling skip button)
    this.questionMessage = null;

    // Skip votes
    this.skipVotes      = new Set();
    this.skipUsedRounds = new Set();

    // Peak player count for leaderboard protection
    this.peakPlayerCount = 0;

    // Timers
    this.roundTimer  = null;
    this.resultTimer = null;
  }

  addPlayer(userId, username) {
    if (!this.players.has(userId)) {
      this.players.set(userId, { username, active: true });
      this.peakPlayerCount++;
    }
  }

  getActivePlayers() {
    return [...this.players.entries()]
      .filter(([, p]) => p.active)
      .map(([id, p]) => ({ id, ...p }));
  }

  // Players who can answer this round = active AND haven't won a round this phase
  getEligiblePlayers() {
    return this.getActivePlayers().filter(p => !this.phaseWinners.has(p.id));
  }

  eliminatePlayer(userId) {
    if (this.players.has(userId)) {
      this.players.get(userId).active = false;
    }
  }

  // Start a new phase: clear phase winners, bump phase number
  startNewPhase() {
    this.phaseNumber++;
    this.phaseWinners.clear();
    this.phaseRound = 0;
    this.eliminated = null;
  }

  isActive() {
    return this.phase !== "ended";
  }
}

function createSpeedGame(channelId, guildId, startedBy, expectedPlayers) {
  const game = new SpeedGameState(channelId, guildId, startedBy, expectedPlayers);
  games.set(channelId, game);
  return game;
}

function getSpeedGame(channelId) {
  return games.get(channelId) || null;
}

function endSpeedGame(channelId) {
  const game = games.get(channelId);
  if (game) {
    clearTimeout(game.roundTimer);
    clearTimeout(game.resultTimer);
    game.phase = "ended";
    games.delete(channelId);
  }
}

module.exports = {
  createSpeedGame, getSpeedGame, endSpeedGame,
  SPEED_ROUND_DURATION_MS, SPEED_RESULT_DURATION_MS,
};
