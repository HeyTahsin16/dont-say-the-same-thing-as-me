const { GoogleGenerativeAI } = require("@google/generative-ai");

let genAI = null;

// Available free Gemini models (as of mid-2025)
const AVAILABLE_MODELS = [
  "gemini-1.5-flash",
  "gemini-1.5-flash-8b",
  "gemini-1.5-pro",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite",
  "gemini-2.5-flash-preview-05-20",
];

// Active model — set from env on startup, changeable at runtime via /setmodel
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

// ─── SANITY CHECK ──────────────────────────────────────────────────────────────
// After Gemini responds, run a local check to catch obvious wrong match verdicts.
// If Gemini says "matchesAI: true" but the player's answer and AI's answer share
// zero significant words, override it to pass: true (player survives).
function sanityCheckJudgements(aiAnswer, playerAnswers, judgements) {
  const aiWords = new Set(
    aiAnswer.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter(w => w.length > 2)
  );

  for (const [playerId, j] of Object.entries(judgements)) {
    if (!j.matchesAI) continue; // only re-check alleged AI matches

    const playerAns = (playerAnswers[playerId] || "").toLowerCase().replace(/[^a-z0-9\s]/g, "");
    const playerWords = playerAns.split(/\s+/).filter(w => w.length > 2);

    // Check if any word from the player's answer appears in the AI answer or vice versa
    const hasOverlap = playerWords.some(w => aiWords.has(w)) ||
      [...aiWords].some(w => playerAns.includes(w));

    if (!hasOverlap) {
      // No lexical overlap at all — very unlikely to be a real match
      console.warn(`[sanity] Overriding false match: AI="${aiAnswer}" Player="${playerAnswers[playerId]}" — no word overlap`);
      judgements[playerId] = {
        ...j,
        pass: true,
        matchesAI: false,
        reason: `Valid answer (AI said "${aiAnswer}", yours is different)`,
      };
    }
  }

  return judgements;
}

// ─── JUDGE ROUND ───────────────────────────────────────────────────────────────
async function judgeRound({ question, exampleAnswers, playerAnswers }) {
  if (!genAI) throw new Error("Gemini not initialized");

  const model = genAI.getGenerativeModel({ model: activeModel });

  const playerSection = Object.entries(playerAnswers)
    .map(([id, ans]) => `  - Player "${id}": "${ans}"`)
    .join("\n");

  const prompt = `You are the AI host of "Don't Say The Same Thing As Me" — a Discord game inspired by bradyyourtutor on YouTube.

== YOUR TWO JOBS THIS ROUND ==
1. Pick YOUR answer to the question (always the single most common/obvious one)
2. Judge each player's answer independently

== QUESTION ==
"${question}"

== EXAMPLE VALID ANSWERS (scope reference) ==
[${exampleAnswers.join(", ")}]

== PLAYER ANSWERS ==
${playerSection || "  (no players answered)"}

== RULE 1 — PICKING YOUR ANSWER ==
- Choose the ONE answer that most people would blurt out first without thinking
- Example: "name a color" → you say "Red", not "Blue" or "Green" or anything else
- Example: "name a sport" → you say "Football" (soccer globally) or "Soccer" (US), NOT "Cricket" or "Tennis"
- Give EXACTLY one word or short phrase. No slashes, no "or", no alternatives.

== RULE 2 — JUDGING: IS THE ANSWER VALID? ==
First decide if the player's answer is a real, correct answer to the question at all.
- VALID: the answer is a real example of what the question asks for
- INVALID (eliminated, matchesAI: false): gibberish, nonsense, wrong category, factually incorrect

== RULE 3 — JUDGING: DOES IT MATCH YOUR ANSWER? ==
ONLY apply this if the answer passed Rule 2.
A MATCH means the player said THE SAME SPECIFIC THING as you — not just the same category.
- "Rock" vs "Pop" → NOT a match. Both are music genres but they are DIFFERENT genres.
- "Cricket" vs "Football" → NOT a match. Both are sports but they are DIFFERENT sports.
- "Soccer" vs "Football" → MATCH. These are the same sport with different regional names.
- "Colour" vs "Color" → MATCH. Same word, different spelling.
- "The mitochondria" vs "Mitochondria" → MATCH. Same thing.
- If in doubt whether two things are truly the same, lean toward NOT a match (pass: true).

== RESPONSE FORMAT ==
Respond ONLY with raw JSON. No markdown, no backticks, no explanation:
{
  "aiAnswer": "<your single answer>",
  "judgements": {
    "<playerId>": {
      "pass": true or false,
      "reason": "<one short sentence explaining why>",
      "corrected": "<spelling-corrected version if you fixed a typo, else null>",
      "matchesAI": true or false
    }
  }
}`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();
    const clean = text.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim();
    const parsed = JSON.parse(clean);

    const aiAnswer = parsed.aiAnswer || "???";
    let judgements = parsed.judgements || {};

    // Run local sanity check to catch obvious false match verdicts
    judgements = sanityCheckJudgements(aiAnswer, playerAnswers, judgements);

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
