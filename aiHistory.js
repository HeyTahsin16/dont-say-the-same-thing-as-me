const fs = require("fs");
const path = require("path");

const DATA_DIR   = path.join(__dirname, "data");
const HIST_FILE  = path.join(DATA_DIR, "ai_history.json");

// Max number of past answers to remember per question before cycling back.
// e.g. if a question has 5 valid answers and cap is 3, after 3 uses the oldest
// drops off and the AI can say the first answer again — keeps it fresh but not
// totally predictable.
const MAX_PER_QUESTION = 4;

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// { questionId: ["Red", "Blue", "Green"] }  — ordered oldest to newest
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
 * Get the list of answers the AI has previously given for a question.
 * Returns an array the prompt can use as "avoid these".
 */
function getPreviousAnswers(questionId) {
  const history = loadHistory();
  return history[questionId] || [];
}

/**
 * Record that the AI gave `answer` for `questionId` this session.
 * Keeps only the last MAX_PER_QUESTION answers (rolling window).
 */
function recordAnswer(questionId, answer) {
  if (!answer || answer === "???") return;

  const history = loadHistory();
  const existing = history[questionId] || [];

  // Skip if we already have this exact answer recorded (case-insensitive)
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
