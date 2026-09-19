// Tracks which regular-game questions have been served across ALL past
// sessions (not just the current game), so a brand new game doesn't reopen
// a question an earlier session already asked. Session-local "never repeat
// within this one game" is still handled entirely by game.usedQuestionIds
// in gameState.js/questions.js — this module is what makes that memory
// survive past a single game ending.
const fs = require("fs");
const path = require("path");

const DATA_DIR  = path.join(__dirname, "data");
const HIST_FILE = path.join(DATA_DIR, "question_history.json");

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function load() {
  if (!fs.existsSync(HIST_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(HIST_FILE, "utf8"));
  } catch {
    return {};
  }
}

function save(data) {
  fs.writeFileSync(HIST_FILE, JSON.stringify(data, null, 2));
}

/**
 * Every question id ever served in a *past* session, mapped to when it was
 * last used (epoch ms). Returned as a Map, ready to hand straight to
 * questions.js. Empty on a fresh install or a corrupted/missing file — the
 * bot should never fail to start a game just because this history is gone.
 */
function getGlobalHistory() {
  return new Map(Object.entries(load()));
}

/**
 * Record that `questionId` was just served, right now, in the current
 * session. Call this at the exact same moment the id is added to
 * game.usedQuestionIds, so a crash mid-game doesn't lose what's already
 * been asked.
 */
function recordQuestionUsed(questionId) {
  const data = load();
  data[questionId] = Date.now();
  save(data);
}

module.exports = { getGlobalHistory, recordQuestionUsed };
