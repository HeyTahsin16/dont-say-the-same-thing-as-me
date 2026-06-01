const fs   = require("fs");
const path = require("path");

const DATA_DIR   = path.join(__dirname, "data");
const HIST_FILE  = path.join(DATA_DIR, "player_history.json");

// How many times a player must give the same answer to the same question
// before the trap is armed.
const REPEAT_THRESHOLD = 2;

// After the threshold is crossed, the trap fires on a random session between
// TRAP_MIN and TRAP_MAX inclusive — so campers can't predict exactly when.
const TRAP_MIN = 3;
const TRAP_MAX = 5;

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Schema:
// {
//   "<userId>": {
//     "<questionId>": {
//       "<normalisedAnswer>": {
//         count: number,    // total times they've used this answer for this question
//         trapAt: number,   // the count at which the trap fires (null until threshold crossed)
//       }
//     }
//   }
// }

function load() {
  if (!fs.existsSync(HIST_FILE)) return {};
  try { return JSON.parse(fs.readFileSync(HIST_FILE, "utf8")); }
  catch { return {}; }
}

function save(data) {
  fs.writeFileSync(HIST_FILE, JSON.stringify(data, null, 2));
}

function norm(str) {
  return str.toLowerCase().trim().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();
}

/**
 * Record a player's answer for a question AFTER the round resolves.
 * Only call this for players who passed (survived) the round — no point
 * tracking eliminated players' camping habits.
 */
function recordPlayerAnswer(userId, questionId, answer) {
  if (!answer || !userId || !questionId) return;

  const data = load();
  const key  = norm(answer);

  if (!data[userId])               data[userId]             = {};
  if (!data[userId][questionId])   data[userId][questionId] = {};
  if (!data[userId][questionId][key]) data[userId][questionId][key] = { count: 0, trapAt: null };

  const entry = data[userId][questionId][key];
  entry.count++;

  // Arm the trap once threshold is crossed — pick a random fire point
  if (entry.count >= REPEAT_THRESHOLD && entry.trapAt === null) {
    const offset = TRAP_MIN + Math.floor(Math.random() * (TRAP_MAX - TRAP_MIN + 1));
    entry.trapAt = offset; // fire when count reaches this value
  }

  data[userId][questionId][key] = entry;
  save(data);
}

/**
 * Before judging, check if any player should be trapped this round.
 * Returns an array of { userId, answer } for players whose trap fires.
 * There can be multiple (if two campers both spam the same answer, they
 * both get trapped — but the collision is handled separately).
 *
 * @param {{ [userId]: string }} playerAnswers  — map of userId -> raw answer
 * @param {string} questionId
 * @returns {{ userId: string, answer: string }[]}
 */
function getTrappedPlayers(playerAnswers, questionId) {
  const data = load();
  const trapped = [];

  for (const [userId, answer] of Object.entries(playerAnswers)) {
    if (!answer) continue;
    const key   = norm(answer);
    const entry = data?.[userId]?.[questionId]?.[key];
    if (!entry) continue;

    if (entry.trapAt !== null && entry.count >= entry.trapAt) {
      trapped.push({ userId, answer });
    }
  }

  return trapped;
}

/**
 * Reset a player's trap after it fires so the cycle restarts.
 * They'll get caught again after another REPEAT_THRESHOLD uses.
 */
function resetTrap(userId, questionId, answer) {
  if (!answer || !userId || !questionId) return;

  const data = load();
  const key  = norm(answer);

  if (data?.[userId]?.[questionId]?.[key]) {
    data[userId][questionId][key].trapAt = null;
    save(data);
  }
}

module.exports = { recordPlayerAnswer, getTrappedPlayers, resetTrap };
