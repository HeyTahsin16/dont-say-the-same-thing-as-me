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

function getModel() {
  return activeModel;
}

function getAvailableModels() {
  return AVAILABLE_MODELS;
}

/**
 * Ask Gemini to:
 * 1. Pick an answer for the question (AI's answer for the round)
 * 2. Judge all player answers
 *
 * Returns:
 * {
 *   aiAnswer: string,
 *   judgements: { [playerId]: { pass: bool, reason: string, corrected: string|null } }
 * }
 */
async function judgeRound({ question, exampleAnswers, playerAnswers }) {
  if (!genAI) throw new Error("Gemini not initialized");

  const model = genAI.getGenerativeModel({ model: activeModel });

  // Build the player answers section
  const playerSection = Object.entries(playerAnswers)
    .map(([id, ans]) => `  - Player "${id}": "${ans}"`)
    .join("\n");

  const prompt = `You are the AI host of "Don't Say The Same Thing As Me" — a multiplayer word elimination game inspired by bradyyourtutor on YouTube, where players must give a valid answer to a question WITHOUT matching the answer you choose. Your two jobs each round are:
1. Pick your own answer to the question
2. Judge every player's answer

GAME CONCEPT (important context for your decisions):
- This is the Discord bot version of Brady's YouTube series "Don't Say The Same Thing As Me"
- In Brady's format, the host says a word/category and contestants must give a valid answer that the host didn't pick
- The skill is in predicting what the host will say and deliberately avoiding it
- Brady's format rewards players who think creatively and avoid the "obvious" answers the host gravitates toward
- Like Brady, you should tend to pick the most common/obvious answer for the question — the one most people would instinctively say first. This makes the game fair and predictable, and matching it feels satisfying to watch. For example, for "name a color", you'd say "Red" not "Chartreuse"
- This means players who play it safe with the first thing that comes to mind are more likely to be eliminated

QUESTION: "${question}"
EXAMPLE VALID ANSWERS (these show you the scope and style of acceptable answers): [${exampleAnswers.join(", ")}]

PLAYER ANSWERS:
${playerSection || "  (no players answered)"}

YOUR ANSWER SELECTION RULES:
- Pick the single most instinctive, common, or "default" answer most people would say first
- Do NOT try to be clever or surprising — think like the average person's gut reaction
- Stay within the spirit of the example answers (same type, same level of specificity)
- Give exactly one answer (no slashes, no "or", no lists)

JUDGING RULES:
- Fix minor typos silently and note the correction (e.g. "photosyntesis" → "photosynthesis" is still valid)
- Accept answers that are clearly synonymous or semantically equivalent to a valid example answer
- Accept reasonable alternate phrasings (e.g. "the mitochondria" and "mitochondria" are the same)
- Reject pure gibberish, random keyboard mashing, or completely off-topic answers
- Reject answers that are factually incorrect for this question
- MATCH CHECK: if a player's answer and your answer refer to the same thing — even with different phrasing, capitalization, or minor spelling — that is a MATCH and the player is eliminated
- "pass: true" = player survives (gave a valid answer that doesn't match yours)
- "pass: false" = player is eliminated (wrong answer, gibberish, or matched your answer)
- matchesAI should be true ONLY when the answer is correct but matches yours; false for wrong/gibberish eliminations

Respond ONLY with valid JSON, no markdown, no explanation outside the JSON:
{
  "aiAnswer": "<your chosen answer>",
  "judgements": {
    "<playerId>": {
      "pass": true or false,
      "reason": "<short reason, 1 sentence>",
      "corrected": "<corrected spelling if a typo was fixed, else null>",
      "matchesAI": true or false
    }
  }
}`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();

    // Strip markdown code fences if present
    const clean = text.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim();
    const parsed = JSON.parse(clean);

    return {
      aiAnswer: parsed.aiAnswer || "???",
      judgements: parsed.judgements || {},
    };
  } catch (err) {
    console.error("Gemini judge error:", err.message);
    // Fallback: pass everyone if AI fails
    const fallback = {};
    for (const id of Object.keys(playerAnswers)) {
      fallback[id] = { pass: true, reason: "AI unavailable", corrected: null, matchesAI: false };
    }
    return { aiAnswer: "???", judgements: fallback };
  }
}

/**
 * Ask Gemini to judge a single "did player answer anything this round" scenario.
 * Used for the "no answer = eliminated" rule in round 2+.
 */
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
