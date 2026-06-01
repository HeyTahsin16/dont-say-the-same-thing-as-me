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
async function judgeRound({ question, exampleAnswers, playerAnswers, previousAiAnswers = [], category = "", forcedAiAnswer = null }) {
  if (!genAI) throw new Error("Gemini not initialized");

  const model = genAI.getGenerativeModel({ model: activeModel });

  const playerSection = Object.entries(playerAnswers)
    .map(([id, ans]) => `  - Player "${id}": "${ans}"`)
    .join("\n");

  // If previousAiAnswers is empty (either none yet, or exhaustion detected by aiHistory),
  // don't show an avoid section at all — let AI pick freely.
  const avoidSection = previousAiAnswers.length > 0
    ? `\n== ANSWERS YOU HAVE ALREADY USED FOR THIS QUESTION — DO NOT REPEAT THESE ==\n[${previousAiAnswers.join(", ")}]\nThis question belongs to the "${category}" category, meaning it has roughly ${{"40+":40,"20-40":30,"10-20":15,"5-10":7,"1-5":3,"1-3":2}[category]??10} possible valid answers. You have used ${previousAiAnswers.length} so far — there are still plenty of fresh ones. Pick the next most well-known answer that is NOT in the list above.\n`
    : "";

  // If a forced answer is provided, we override Job 1 entirely — the answer is already decided.
  const forcedSection = forcedAiAnswer
    ? `\n== YOUR ANSWER IS ALREADY DECIDED ==\nYour answer this round is: "${forcedAiAnswer}". Do NOT change it. Your only job is Rule 2 — judging player validity.\n`
    : "";

  const prompt = `You are the AI host of "Don't Say The Same Thing As Me" — a Discord game inspired by bradyyourtutor on YouTube.

== YOUR TWO JOBS THIS ROUND ==
1. Pick YOUR answer to the question (most common/obvious one, varying from past answers)
2. Judge each player's answer independently

== QUESTION ==
"${question}"

== EXAMPLE VALID ANSWERS (scope/style reference only — many more exist) ==
[${exampleAnswers.join(", ")}]
${avoidSection}${forcedSection}
== PLAYER ANSWERS ==
${playerSection || "  (no players answered)"}

== RULE 1 — PICKING YOUR ANSWER ==
- Choose the ONE answer most people would blurt out first without thinking
- Work through answers from most to least obvious over time: "name a color" → Red, then Blue, then Green, then Yellow etc.
- Give EXACTLY one word or short phrase. No slashes, no "or", no alternatives.
- If the most obvious answer is in your already-used list above, pick the NEXT most recognizable one that is not listed.
- Never make up answers — only pick real, correct answers to the question.

== RULE 2 — JUDGING: IS THE ANSWER VALID? ==
For each player, decide ONLY: is their answer a real, correct answer to this question?
- PASS (valid: true) if: it's a genuine, correct answer to the question
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
