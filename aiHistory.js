const fs = require("fs");
const path = require("path");

const DATA_DIR  = path.join(__dirname, "data");
const HIST_FILE = path.join(DATA_DIR, "ai_history.json");

// How many past answers to remember per question.
// Rolling window — oldest drops off when cap is exceeded.
const MAX_PER_QUESTION = 50;

// The category answer-count thresholds — mirrors what's in questions.js.
// When the number of blocked answers is close to the total possible answers
// for that category, we allow the AI to reuse answers rather than get stuck.
const CATEGORY_ANSWER_COUNTS = {
  "40+":   40,
  "20-40": 30,
  "10-20": 15,
  "5-10":  7,
  "1-5":   3,
  "1-3":   2,
};

// Safety margin: if fewer than this many "fresh" answers remain, stop enforcing the block list.
const MIN_FRESH_REMAINING = 3;

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function loadHistory() {
  if (!fs.existsSync(HIST_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(HIST_FILE, "utf8"));
  } catch {
    return {};
  }
}

function saveHistory(data) {
  fs.writeFileSync(HIST_FILE, JSON.stringify(data, null, 2));
}

/**
 * Get the previous answers to pass to Gemini.
 * If the question's category is nearly exhausted (blocked answers ≥ total - MIN_FRESH_REMAINING),
 * returns an empty array so the AI picks freely rather than getting confused.
 *
 * @param {string} questionId
 * @param {string} category  — e.g. "40+", "5-10"
 * @returns {string[]}
 */
function getPreviousAnswers(questionId, category) {
  const history = loadHistory();
  const blocked = history[questionId] || [];

  if (blocked.length === 0) return [];

  // Estimate how many total answers this question category has
  const totalEstimate = CATEGORY_ANSWER_COUNTS[category] ?? 10;
  const freshRemaining = totalEstimate - blocked.length;

  if (freshRemaining < MIN_FRESH_REMAINING) {
    // Too close to exhaustion — let the AI pick freely (it'll cycle naturally)
    return [];
  }

  return blocked;
}

/**
 * Record that the AI gave `answer` for `questionId`.
 * Rolling window of MAX_PER_QUESTION entries.
 */
function recordAnswer(questionId, answer) {
  if (!answer || answer === "???") return;

  const history = loadHistory();
  const existing = history[questionId] || [];

  // Skip duplicates (case-insensitive)
  const already = existing.some(a => a.toLowerCase() === answer.toLowerCase());
  if (already) return;

  existing.push(answer);

  // Rolling cap — drop the oldest when over the limit
  if (existing.length > MAX_PER_QUESTION) {
    existing.shift();
  }

  history[questionId] = existing;
  saveHistory(history);
}

module.exports = { getPreviousAnswers, recordAnswer };
