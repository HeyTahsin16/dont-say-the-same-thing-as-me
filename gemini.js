const { GoogleGenerativeAI } = require("@google/generative-ai");

let genAI = null;

const AVAILABLE_MODELS = [
  "gemini-1.5-flash",
  "gemini-1.5-flash-8b",
  "gemini-1.5-pro",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
  "gemini-2.5-flash-preview-05-20",
];

let activeModel = process.env.GEMINI_MODEL || "gemini-1.5-flash";

function initGemini(apiKey) {
  genAI = new GoogleGenerativeAI(apiKey);
  console.log(`🤖  Gemini model: ${activeModel}`);
}

function setModel(modelName) {
  activeModel = modelName;
  console.log(`🔄  Gemini model switched to: ${activeModel}`);
}

function getModel() { return activeModel; }
function getAvailableModels() { return AVAILABLE_MODELS; }

// ─── LOCAL MATCH CHECK ─────────────────────────────────────────────────────────
// Do NOT trust Gemini to detect whether a player's answer matches the AI's answer.
// We do this ourselves in code — it's just string comparison after normalization.
// Gemini's only job is: (1) pick its answer, (2) decide if each player answer is
// a VALID answer to the question at all. Match detection is 100% local.

function normalize(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, "")   // strip punctuation
    .replace(/\s+/g, " ")           // collapse spaces
    .trim();
}

// Returns true if two answers refer to the same thing.
// Checks: exact match, one contains the other, or they share all significant words.
function answersMatch(a, b) {
  const na = normalize(a);
  const nb = normalize(b);

  if (!na || !nb) return false;

  // Exact match after normalization
  if (na === nb) return true;

  // One is fully contained in the other (e.g. "the mitochondria" vs "mitochondria")
  if (na.includes(nb) || nb.includes(na)) return true;

  // All significant words (>2 chars) of one appear in the other
  const wordsA = na.split(" ").filter(w => w.length > 2);
  const wordsB = new Set(nb.split(" ").filter(w => w.length > 2));
  if (wordsA.length > 0 && wordsA.every(w => wordsB.has(w))) return true;

  return false;
}

// ─── JUDGE ROUND ───────────────────────────────────────────────────────────────
async function judgeRound({ question, exampleAnswers, playerAnswers }) {
  if (!genAI) throw new Error("Gemini not initialized");

  const model = genAI.getGenerativeModel({ model: activeModel });

  const playerSection = Object.entries(playerAnswers)
    .map(([id, ans]) => `  - Player "${id}": "${ans}"`)
    .join("\n");

  // NOTE: We deliberately do NOT ask Gemini to detect AI-answer matches.
  // We only ask it to: (1) pick its answer, (2) decide if each player answer
  // is a valid, correct answer to the question (ignoring whether it matches AI).
  const prompt = `You are the AI host of "Don't Say The Same Thing As Me" — a Discord game inspired by bradyyourtutor on YouTube.

== YOUR TWO JOBS ==
1. Pick YOUR answer to the question
2. Decide if each player's answer is a valid, correct answer to the question

== QUESTION ==
"${question}"

== EXAMPLE VALID ANSWERS (for reference) ==
[${exampleAnswers.join(", ")}]

== PLAYER ANSWERS ==
${playerSection || "  (no players answered)"}

== JOB 1 — YOUR ANSWER ==
Pick the single most common, obvious, gut-reaction answer. But try becoming more unpredictable by shuffling between 5 most obvious answers if there are more than 5 answers of the asked question.
- "name a color" → "Red"
- "name a sport" → "Football"
- "name a planet" → "Earth"
Give EXACTLY one answer. No slashes, no lists, no alternatives.

== JOB 2 — VALIDITY JUDGING (NOT match detection) ==
For each player, decide ONLY: is their answer a real, correct answer to this question?
- PASS (valid: true) if: it's a genuine, correct answer to the question (even if it's the same as yours — you handle matching separately)
- FAIL (valid: false) if: gibberish, nonsense, random letters, factually wrong, or completely off-topic
- Fix obvious typos silently (e.g. "photosyntesis" → "photosynthesis" still passes)
- Do NOT eliminate based on whether it matches your answer — that is handled elsewhere

== RESPONSE FORMAT ==
Respond ONLY with raw JSON. No markdown, no backticks:
{
  "aiAnswer": "<your single answer>",
  "judgements": {
    "<playerId>": {
      "valid": true or false,
      "reason": "<one short sentence>",
      "corrected": "<corrected spelling if typo fixed, else null>"
    }
  }
}`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();
    const clean = text.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim();
    const parsed = JSON.parse(clean);

    const aiAnswer = parsed.aiAnswer || "???";
    const rawJudgements = parsed.judgements || {};

    // Now apply match detection ourselves — Gemini has no say in this
    const judgements = {};
    for (const [playerId, j] of Object.entries(rawJudgements)) {
      const playerAns = playerAnswers[playerId] || "";
      const isMatch = j.valid && answersMatch(playerAns, aiAnswer);

      judgements[playerId] = {
        pass: j.valid && !isMatch,
        reason: isMatch
          ? `Your answer "${playerAns}" matches the AI's answer "${aiAnswer}"`
          : (j.reason || (j.valid ? "Valid answer" : "Invalid answer")),
        corrected: j.corrected || null,
        matchesAI: isMatch,
      };

      if (isMatch) {
        console.log(`[match] "${playerAns}" matched AI answer "${aiAnswer}" for player ${playerId}`);
      }
    }

    return { aiAnswer, judgements };
  } catch (err) {
    console.error("Gemini judge error:", err.message);
    const fallback = {};
    for (const id of Object.keys(playerAnswers)) {
      fallback[id] = { pass: true, reason: "AI unavailable — passed by default", corrected: null, matchesAI: false };
    }
    return { aiAnswer: "???", judgements: fallback };
  }
}

async function isGibberish(answer, question, exampleAnswers) {
  if (!genAI) return false;
  const model = genAI.getGenerativeModel({ model: activeModel });

  const prompt = `Question: "${question}"
Example valid answers: [${exampleAnswers.join(", ")}]
Player's answer: "${answer}"

Is this answer pure gibberish (random letters, nonsense, completely off-topic)? Answer only "yes" or "no".`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text().trim().toLowerCase().startsWith("yes");
  } catch {
    return false;
  }
}

module.exports = { initGemini, setModel, getModel, getAvailableModels, judgeRound, isGibberish };
