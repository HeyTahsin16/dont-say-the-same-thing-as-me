#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────
// assign-difficulty.js
//
// Fills in (or recalculates) the `difficulty` field — 1 (easiest) to 10
// (hardest) — for every question in questions.js.
//
// `category` in questions.js is about the size of the real-world answer
// pool ("40+" vs "1-3"), which is a completely separate axis from how
// *obscure the topic itself* is. This script scores that second axis with
// a plain keyword + specificity heuristic:
//
//   - Mentions of everyday/universal topics (colors, fruit, animals,
//     capital cities, mainstream movies, ...) push a question toward easy.
//   - Mentions of specialised/academic vocabulary (syllabus names, chemistry
//     and physics jargon, named laws/theorems, grammar terminology, ...)
//     push it toward hard.
//   - Longer, more heavily-qualified question text (more content words)
//     is a mild additional signal toward hard, since narrow/technical
//     concepts usually take more words to pin down than broad ones.
//   - A tiny deterministic jitter (seeded from the question id) breaks
//     ties so identical-looking scores don't all land on one number.
//
// Every question then gets ranked *within its own category* and bucketed
// into ten equal-ish groups (1-10) by percentile. Ranking within category
// (rather than globally) is what guarantees every category — even a small
// one like "1-3" — gets a full, usable easy-to-hard spread, which is what
// the in-game difficulty queue (see questions.js) needs.
//
// This is a heuristic, not a hand-graded answer key. It's deliberately
// transparent and re-runnable so you can tune the word lists below and
// regenerate, or just hand-edit a question's `difficulty` value directly
// afterwards — re-running this script will overwrite the WHOLE file's
// difficulty values again from scratch, so do any hand-tuning last.
//
// Usage:  node scripts/assign-difficulty.js
// ─────────────────────────────────────────────────────────────────────────

const fs = require("fs");
const path = require("path");

const QUESTIONS_PATH = path.join(__dirname, "..", "questions.js");

// ─── Word lists ─────────────────────────────────────────────────────────────
// Matched as whole words/phrases (case-insensitive) against the question
// text + hint. Add to these freely — they're just plain strings.

const EASY_TERMS = [
  "color", "colour", "fruit", "vegetable", "animal", "pet", "food", "drink", "beverage",
  "day of the week", "month", "season", "shape", "emotion", "feeling",
  "body part", "holiday", "festival", "vehicle", "continent", "ocean", "sea", "planet",
  "weather", "family member", "toy", "flower", "tree", "bird", "insect",
  "fish", "farm animal", "wild animal", "household appliance", "kitchen", "furniture",
  "clothing", "shoe", "snack", "dessert", "breakfast", "fast food", "soft drink", "juice",
  "cartoon", "superhero", "disney", "movie", "song", "singer", "actor or actress", "celebrity",
  "country", "capital city", "city", "language", "currency", "social media", "app",
  "school subject", "stationery", "football club", "cricket",
  "video game", "board game", "card game", "dance", "musical instrument", "metal", "gemstone",
  "number", "pizza topping", "ice cream flavor", "candy", "chocolate",
  "letter word", "starting with the letter", "word containing", "synonym for",
  "rhymes with", "ends with the letter",
];

const HARD_TERMS = [
  "syllabus", "hsc", "ssc", "theorem", "coefficient", "polynomial", "isomer", "isomerism",
  "enzyme", "chromosome", "allele", "genotype", "phenotype", "hypothesis", "algorithm",
  "compiler", "syntax", "semantics", "thermodynamics", "electrochemistry", "integration",
  "derivative", "calculus", "matrix", "vector", "quantum", "relativity", "conjecture",
  "topology", "combinatorics", "morphology", "phylum", "taxonomy", "cardiovascular",
  "anatomical", "jurisprudence", "constitutional", "legislative", "notation", "normalization",
  "protocol", "macroeconomics", "microeconomics", "literary device", "treaty", "mineralogy",
  "geology", "astrophysics", "organic chemistry", "inorganic", "biochemistry", "physiology",
  "pharmacology", "jurisdiction", "epistemology", "metaphysics", "linguistics", "phoneme",
  "morpheme", "periodic table", "compound", "catalyst", "apparatus", "circuit", "logic gate",
  "topography pattern", "data structure", "complexity", "kernel", "differential",
  "trigonometric", "probability", "statistics", "principle", "'s law", "'s theorem",
  "'s principle", "concept in", "branch of", "tactic", "reagent", "stoichiometry", "covalent",
  "ionic bond", "molarity", "entropy", "enthalpy", "cerebrum", "cortex", "hybridization",
  "p-block", "s-block", "d-block", "f-block", "nuclear physics", "modern physics",
  "central tendency", "structural design", "universal logic gate", "constitution",
  "amendment", "legislature", "sonnet", "stanza", "dynasty", "taxonomic",
  "classification based on", "architecture pattern", "map layout",
];

const STOPWORDS = new Set([
  "name", "a", "an", "the", "of", "in", "from", "or", "that", "is", "used", "utilized",
  "for", "commonly", "which", "found", "level", "with", "directly", "as", "currently",
  "any", "and",
]);

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hasTerm(text, term) {
  return new RegExp("\\b" + escapeRegex(term.trim()) + "s?\\b").test(text);
}

function hashCode(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

function scoreQuestion(q) {
  const text = (q.question + " " + (q.hint || "")).toLowerCase();
  let score = 0;

  for (const term of HARD_TERMS) if (hasTerm(text, term)) score += 2;
  for (const term of EASY_TERMS) if (hasTerm(text, term)) score -= 2;
  if (/bangladesh|bengali/.test(text)) score += 1;

  const contentWords = q.question
    .replace(/[.,]/g, "")
    .split(/\s+/)
    .map(w => w.toLowerCase())
    .filter(w => !STOPWORDS.has(w));
  score += contentWords.length * 0.2;

  // Small deterministic jitter so near-identical scores don't all tie.
  score += ((hashCode(q.id) % 100) / 100) * 0.4;

  return score;
}

// Ranks `group` by score ascending and buckets it into 1-10 by percentile.
function assignDifficultyWithinGroup(group) {
  const scored = group.map(q => ({ q, s: scoreQuestion(q) })).sort((a, b) => a.s - b.s);
  const n = scored.length;
  const result = new Map();
  scored.forEach(({ q }, rank) => {
    const difficulty = Math.min(10, 1 + Math.floor((rank / n) * 10));
    result.set(q.id, difficulty);
  });
  return result;
}

function main() {
  // require() the current file to get properly-parsed question objects —
  // this sidesteps any quoting/escaping edge cases a hand-rolled parser
  // would have to worry about. We only use this for *scoring*; the actual
  // file edit below is a minimal, surgical text patch so nothing else
  // about the file's formatting changes.
  delete require.cache[require.resolve(QUESTIONS_PATH)];
  const { questions } = require(QUESTIONS_PATH);

  const byCategory = new Map();
  for (const q of questions) {
    if (!byCategory.has(q.category)) byCategory.set(q.category, []);
    byCategory.get(q.category).push(q);
  }

  const difficultyById = new Map();
  for (const group of byCategory.values()) {
    for (const [id, difficulty] of assignDifficultyWithinGroup(group)) {
      difficultyById.set(id, difficulty);
    }
  }

  const src = fs.readFileSync(QUESTIONS_PATH, "utf8");
  const lines = src.split("\n");

  let updated = 0;
  const newLines = lines.map(line => {
    const idMatch = line.match(/id:\s*'([^']+)'/);
    if (!idMatch || !difficultyById.has(idMatch[1])) return line;

    const difficulty = difficultyById.get(idMatch[1]);

    // Replace an existing `difficulty: N,` if present, otherwise insert a
    // fresh one right after the `category: '...',` field.
    let newLine;
    if (/difficulty:\s*\d+,/.test(line)) {
      newLine = line.replace(/difficulty:\s*\d+,/, `difficulty: ${difficulty},`);
    } else {
      newLine = line.replace(/(category:\s*'[^']+',)/, `$1 difficulty: ${difficulty},`);
    }

    if (newLine !== line) updated++;
    return newLine;
  });

  fs.writeFileSync(QUESTIONS_PATH, newLines.join("\n"));
  console.log(`assign-difficulty: wrote difficulty (1-10) for ${updated} question(s) in ${path.relative(process.cwd(), QUESTIONS_PATH)}`);

  // Quick distribution report per category so a re-run is easy to sanity-check.
  for (const [category, group] of byCategory) {
    const counts = new Array(11).fill(0);
    for (const q of group) counts[difficultyById.get(q.id)]++;
    console.log(`  ${category.padEnd(6)} (n=${group.length}):`, counts.slice(1).join(" "));
  }
}

main();
