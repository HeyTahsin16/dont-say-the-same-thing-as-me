// Questions categorized by number of valid answers
// Categories: "40+", "20-40", "10-20", "5-10", "1-5", "1-3"
// exampleAnswers help the AI judge what's acceptable

const questions = [
  // ─────────────────────────────────────────────
  // 40+ answers (great opener rounds)
  // ─────────────────────────────────────────────
  {
    id: "q1",
    category: "40+",
    question: "Name a sovereign country in the world.",
    exampleAnswers: ["France", "Germany", "Japan", "Brazil", "India", "USA", "China", "Canada", "Australia", "Mexico"],
    hint: "There are about 195 of these."
  },
  {
    id: "q2",
    category: "40+",
    question: "Name a recognized music genre.",
    exampleAnswers: ["Pop", "Rock", "Jazz", "Classical", "Hip-hop", "Blues", "Country", "Electronic", "R&B", "Reggae"],
    hint: "Any recognized style of music counts."
  },
  {
    id: "q3",
    category: "40+",
    question: "Name an item of clothing.",
    exampleAnswers: ["Shirt", "Pants", "Socks", "Hat", "Jacket", "Skirt", "Dress", "Sweater", "Gloves", "Scarf"],
    hint: "Anything you wear on your body."
  },
  {
    id: "q4",
    category: "40+",
    question: "Name a fruit.",
    exampleAnswers: ["Apple", "Banana", "Orange", "Strawberry", "Grape", "Mango", "Pineapple", "Watermelon", "Kiwi", "Peach"],
    hint: "Botanical or culinary fruits are fine."
  },
  {
    id: "q5",
    category: "40+",
    question: "Name a capital city.",
    exampleAnswers: ["London", "Tokyo", "Paris", "Washington DC", "Berlin", "Beijing", "Ottawa", "Rome", "Madrid", "Seoul"],
    hint: "The seat of government for a country."
  },

  // ─────────────────────────────────────────────
  // 20-40 answers
  // ─────────────────────────────────────────────
  {
    id: "q6",
    category: "20-40",
    question: "Name a letter in the English alphabet.",
    exampleAnswers: ["A", "B", "C", "X", "Y", "Z", "Vowels", "Consonants"],
    hint: "There are exactly 26 of these."
  },
  {
    id: "q7",
    category: "20-40",
    question: "Name a member state of the European Union.",
    exampleAnswers: ["Germany", "France", "Italy", "Spain", "Poland", "Sweden", "Netherlands", "Greece"],
    hint: "There are 27 current members."
  },
  {
    id: "q8",
    category: "20-40",
    question: "Name one of the 50 US states.",
    exampleAnswers: ["California", "Texas", "Florida", "New York", "Illinois", "Ohio", "Georgia", "Michigan", "Washington", "Hawaii"],
    hint: "There are exactly 50 options."
  },
  {
    id: "q9",
    category: "20-40",
    question: "Name a programming language.",
    exampleAnswers: ["Python", "JavaScript", "Java", "C++", "C#", "Ruby", "Swift", "Go", "Rust", "TypeScript"],
    hint: "Any real programming language."
  },

  // ─────────────────────────────────────────────
  // 10-20 answers
  // ─────────────────────────────────────────────
  {
    id: "q10",
    category: "10-20",
    question: "Name a month of the Gregorian calendar.",
    exampleAnswers: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    hint: "There are 12 of these."
  },
  {
    id: "q11",
    category: "10-20",
    question: "Name a sign of the Western Zodiac.",
    exampleAnswers: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"],
    hint: "There are exactly 12 astrological signs."
  },
  {
    id: "q12",
    category: "10-20",
    question: "Name a country in South America.",
    exampleAnswers: ["Brazil", "Argentina", "Colombia", "Peru", "Chile", "Venezuela", "Ecuador", "Bolivia", "Paraguay", "Uruguay", "Guyana", "Suriname"],
    hint: "There are 12 sovereign nations here."
  },
  {
    id: "q13",
    category: "10-20",
    question: "Name one of the original 13 US Colonies.",
    exampleAnswers: ["Virginia", "Massachusetts", "New York", "Maryland", "Rhode Island", "Connecticut", "New Hampshire", "Delaware", "New Jersey", "Pennsylvania", "North Carolina", "South Carolina", "Georgia"],
    hint: "The stars on the original US flag."
  },

  // ─────────────────────────────────────────────
  // 5-10 answers
  // ─────────────────────────────────────────────
  {
    id: "q14",
    category: "5-10",
    question: "Name a planet in our solar system.",
    exampleAnswers: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
    hint: "There are officially 8."
  },
  {
    id: "q15",
    category: "5-10",
    question: "Name a continent.",
    exampleAnswers: ["Asia", "Africa", "North America", "South America", "Europe", "Australia", "Antarctica"],
    hint: "There are 7 of these."
  },
  {
    id: "q16",
    category: "5-10",
    question: "Name one of the seven deadly sins.",
    exampleAnswers: ["Pride", "Greed", "Lust", "Envy", "Gluttony", "Wrath", "Sloth"],
    hint: "Exactly 7."
  },
  {
    id: "q17",
    category: "5-10",
    question: "Name a standard chess piece.",
    exampleAnswers: ["King", "Queen", "Rook", "Bishop", "Knight", "Pawn"],
    hint: "There are 6 distinct types of pieces."
  },
  {
    id: "q18",
    category: "5-10",
    question: "Name a primary or secondary color.",
    exampleAnswers: ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"],
    hint: "The 3 primary + 3 secondary colors on a standard color wheel."
  },

  // ─────────────────────────────────────────────
  // 1-5 answers (Great for intense semi-finals)
  // ─────────────────────────────────────────────
  {
    id: "q19",
    category: "1-5",
    question: "Name a main blood type group in the ABO system.",
    exampleAnswers: ["A", "B", "AB", "O"],
    hint: "There are 4 main letter groups (ignore positive/negative)."
  },
  {
    id: "q20",
    category: "1-5",
    question: "Name a state of matter.",
    exampleAnswers: ["Solid", "Liquid", "Gas", "Plasma"],
    hint: "There are 4 fundamental states observable in everyday life."
  },
  {
    id: "q21",
    category: "1-5",
    question: "Name a nucleotide base found in DNA.",
    exampleAnswers: ["Adenine", "Thymine", "Cytosine", "Guanine"],
    hint: "A, T, C, or G."
  },
  {
    id: "q22",
    category: "1-5",
    question: "Name a suit in a standard deck of playing cards.",
    exampleAnswers: ["Hearts", "Diamonds", "Clubs", "Spades"],
    hint: "There are exactly 4."
  },
  {
    id: "q23",
    category: "1-5",
    question: "Name a major ocean on Earth.",
    exampleAnswers: ["Pacific", "Atlantic", "Indian", "Southern", "Arctic"],
    hint: "There are 5 recognized oceans."
  },

  // ─────────────────────────────────────────────
  // 1-3 answers (Very narrow — great for sudden death finals)
  // ─────────────────────────────────────────────
  {
    id: "q24",
    category: "1-3",
    question: "Name a primary color of light (RGB model).",
    exampleAnswers: ["Red", "Green", "Blue"],
    hint: "There are 3."
  },
  {
    id: "q25",
    category: "1-3",
    question: "Name a fundamental subatomic particle found in an atom.",
    exampleAnswers: ["Proton", "Neutron", "Electron"],
    hint: "There are 3 main ones."
  },
  {
    id: "q26",
    category: "1-3",
    question: "Name a branch of the United States Federal Government.",
    exampleAnswers: ["Executive", "Legislative", "Judicial"],
    hint: "There are 3 branches."
  },
  {
    id: "q27",
    category: "1-3",
    question: "Name a pole of a standard magnet.",
    exampleAnswers: ["North", "South"],
    hint: "There are exactly 2."
  }
];

// Pick a random question from a specific category
function getQuestionByCategory(category) {
  const pool = questions.filter(q => q.category === category);
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

// Pick a random question from any category
function getRandomQuestion() {
  return questions[Math.floor(Math.random() * questions.length)];
}

// Category order from most answers to fewest
const CATEGORY_ORDER = ["40+", "20-40", "10-20", "5-10", "1-5", "1-3"];

// ── Dynamic category selection ──────────────────────────────────────────────
//
// Category is chosen based on how many players are STILL ACTIVE — not just
// on which round it is. This prevents good players getting unfairly cut off
// just because the round number ticked up.
//
// Thresholds (generous — we want lots of breathing room at each tier):
//   30+  players  → "40+"
//   15+  players  → "20-40"
//   8+   players  → "10-20"
//   4+   players  → "5-10"
//   2-3  players  → "1-5"
//   1    player   → "1-3"  (shouldn't reach here — game ends at 1)
//
// The category only ADVANCES (gets harder) when:
//   (a) We've been on this category for `categoryLockRounds` rounds (3–5, random), AND
//   (b) The player count has dropped enough that the next category fits.
//
// It can also DROP BACK if lots of players join mid-game (unlikely but safe).

function getCategoryForPlayerCount(count) {
  if (count >= 30) return "40+";
  if (count >= 15) return "20-40";
  if (count >= 8)  return "10-20";
  if (count >= 4)  return "5-10";
  if (count >= 2)  return "1-5";
  return "1-3";
}

// Returns a random lock duration of 3, 4, or 5 rounds
function randomLockDuration() {
  return 3 + Math.floor(Math.random() * 3); // 3, 4, or 5
}

// Get next harder category (one step)
function getNextCategory(currentCategory) {
  const idx = CATEGORY_ORDER.indexOf(currentCategory);
  if (idx === -1 || idx >= CATEGORY_ORDER.length - 1) return CATEGORY_ORDER[CATEGORY_ORDER.length - 1];
  return CATEGORY_ORDER[idx + 1];
}

// Get previous easier category (one step)
function getPrevCategory(currentCategory) {
  const idx = CATEGORY_ORDER.indexOf(currentCategory);
  if (idx <= 0) return CATEGORY_ORDER[0];
  return CATEGORY_ORDER[idx - 1];
}

// Compare two categories: returns negative if a < b (a is easier), 0 if equal, positive if a > b (a is harder)
function compareDifficulty(a, b) {
  return CATEGORY_ORDER.indexOf(a) - CATEGORY_ORDER.indexOf(b);
}

/**
 * Decide the category for the upcoming round.
 * Mutates game.currentCategory, game.roundsOnCurrentCategory, game.categoryLockRounds.
 *
 * @param {GameState} game
 * @param {number} activePlayerCount
 * @returns {string} the chosen category
 */
function resolveCategory(game, activePlayerCount) {
  // Round 1: always use the widest category regardless of player count
  // (players haven't joined yet so count is 0)
  if (game.round === 1) {
    const cat = "40+";
    game.currentCategory = cat;
    game.roundsOnCurrentCategory = 1;
    game.categoryLockRounds = randomLockDuration();
    return cat;
  }

  // What category does the current player count naturally call for?
  const naturalCat = getCategoryForPlayerCount(activePlayerCount);

  // If we don't have a current category yet, just use the natural one
  if (!game.currentCategory) {
    game.currentCategory = naturalCat;
    game.roundsOnCurrentCategory = 1;
    game.categoryLockRounds = randomLockDuration();
    return naturalCat;
  }

  game.roundsOnCurrentCategory++;

  const lockedIn = game.roundsOnCurrentCategory <= game.categoryLockRounds;
  const currentIdx = CATEGORY_ORDER.indexOf(game.currentCategory);
  const naturalIdx = CATEGORY_ORDER.indexOf(naturalCat);

  if (lockedIn) {
    // Still within the lock window — stay on current category UNLESS
    // player count has dropped dramatically (2+ tiers harder warranted)
    if (naturalIdx >= currentIdx + 2) {
      // Big drop in players — skip ahead to keep things spicy
      const newCat = CATEGORY_ORDER[Math.min(currentIdx + 1, CATEGORY_ORDER.length - 1)];
      game.currentCategory = newCat;
      game.roundsOnCurrentCategory = 1;
      game.categoryLockRounds = randomLockDuration();
      return newCat;
    }
    // Normal lock — stay put
    return game.currentCategory;
  }

  // Lock window expired — re-evaluate based on player count
  // Move toward the natural category (one step at a time)
  let newCat = game.currentCategory;
  if (naturalIdx > currentIdx) {
    // Natural is harder — step up one
    newCat = CATEGORY_ORDER[currentIdx + 1];
  } else if (naturalIdx < currentIdx) {
    // Natural is easier (e.g. players didn't drop) — step back one
    newCat = CATEGORY_ORDER[Math.max(currentIdx - 1, 0)];
  }
  // else: same difficulty — stay but reset lock

  game.currentCategory = newCat;
  game.roundsOnCurrentCategory = 1;
  game.categoryLockRounds = randomLockDuration();
  return newCat;
}

module.exports = {
  questions,
  getQuestionByCategory,
  getRandomQuestion,
  CATEGORY_ORDER,
  getCategoryForPlayerCount,
  resolveCategory,
  getNextCategory,
  getPrevCategory,
  compareDifficulty,
};
