// Questions categorized by number of valid answers
// Categories: "1-3", "1-5", "5-10", "10-20", "20-40", "40+"
// exampleAnswers help the AI judge what's acceptable

const questions = [
  // ─────────────────────────────────────────────
  // 40+ answers (great opener rounds)
  // ─────────────────────────────────────────────
  {
    id: "q1",
    category: "40+",
    question: "Name a country in the world.",
    exampleAnswers: ["France", "Germany", "Japan", "Brazil", "India", "USA", "China", "Canada", "Australia", "Mexico", "Italy", "Spain", "Russia", "Egypt", "Nigeria", "Argentina", "Turkey", "South Korea", "Thailand", "Portugal"],
    hint: "Any sovereign nation counts."
  },
  {
    id: "q2",
    category: "40+",
    question: "Name a color.",
    exampleAnswers: ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Pink", "Black", "White", "Brown", "Gray", "Cyan", "Magenta", "Teal", "Indigo", "Violet", "Maroon", "Beige", "Crimson", "Turquoise"],
    hint: "Any named color works."
  },
  {
    id: "q3",
    category: "40+",
    question: "Name a vegetable.",
    exampleAnswers: ["Carrot", "Broccoli", "Spinach", "Tomato", "Potato", "Onion", "Garlic", "Pea", "Corn", "Lettuce", "Cucumber", "Pepper", "Celery", "Asparagus", "Zucchini", "Eggplant", "Kale", "Radish", "Beet", "Cauliflower"],
    hint: "Culinary vegetables count."
  },
  {
    id: "q4",
    category: "40+",
    question: "Name a sport.",
    exampleAnswers: ["Football", "Basketball", "Tennis", "Cricket", "Baseball", "Hockey", "Swimming", "Golf", "Rugby", "Volleyball", "Boxing", "Cycling", "Skiing", "Badminton", "Table Tennis", "Wrestling", "Gymnastics", "Rowing", "Archery", "Fencing"],
    hint: "Any recognized sport."
  },
  {
    id: "q5",
    category: "40+",
    question: "Name a type of music genre.",
    exampleAnswers: ["Pop", "Rock", "Jazz", "Classical", "Hip-hop", "Blues", "Country", "Electronic", "R&B", "Reggae", "Metal", "Folk", "Soul", "Disco", "Punk", "Gospel", "Latin", "Indie", "Techno", "Ambient"],
    hint: "Any recognized music genre."
  },

  // ─────────────────────────────────────────────
  // 20-40 answers
  // ─────────────────────────────────────────────
  {
    id: "q6",
    category: "20-40",
    question: "Name a planet in our solar system.",
    exampleAnswers: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
    hint: "The 8 official planets."
  },
  {
    id: "q7",
    category: "20-40",
    question: "Name a programming language.",
    exampleAnswers: ["Python", "JavaScript", "Java", "C++", "C#", "Ruby", "Swift", "Go", "Rust", "TypeScript", "PHP", "Kotlin", "Scala", "R", "MATLAB", "Perl", "Haskell", "Lua", "Dart", "Elixir"],
    hint: "Any real programming language."
  },
  {
    id: "q8",
    category: "20-40",
    question: "Name a mammal.",
    exampleAnswers: ["Dog", "Cat", "Lion", "Elephant", "Whale", "Dolphin", "Horse", "Cow", "Bear", "Tiger", "Gorilla", "Giraffe", "Zebra", "Cheetah", "Wolf", "Fox", "Rabbit", "Deer", "Bat", "Seal"],
    hint: "Any warm-blooded, fur-bearing animal that nurses young."
  },
  {
    id: "q9",
    category: "20-40",
    question: "Name an element from the periodic table.",
    exampleAnswers: ["Hydrogen", "Oxygen", "Carbon", "Gold", "Silver", "Iron", "Copper", "Nitrogen", "Helium", "Sodium", "Calcium", "Potassium", "Zinc", "Chlorine", "Magnesium", "Sulfur", "Uranium", "Neon", "Lithium", "Titanium"],
    hint: "Official IUPAC element names or symbols."
  },
  {
    id: "q10",
    category: "20-40",
    question: "Name a US state.",
    exampleAnswers: ["California", "Texas", "Florida", "New York", "Illinois", "Ohio", "Georgia", "Michigan", "Washington", "Arizona", "Colorado", "Nevada", "Oregon", "Minnesota", "Wisconsin", "Missouri", "Tennessee", "Virginia", "Indiana", "Massachusetts"],
    hint: "Any of the 50 US states."
  },

  // ─────────────────────────────────────────────
  // 10-20 answers
  // ─────────────────────────────────────────────
  {
    id: "q11",
    category: "10-20",
    question: "Name one of the seven deadly sins.",
    exampleAnswers: ["Pride", "Greed", "Lust", "Envy", "Gluttony", "Wrath", "Sloth"],
    hint: "Exactly 7 — pride, greed, lust, envy, gluttony, wrath, sloth."
  },
  {
    id: "q12",
    category: "10-20",
    question: "Name a continent.",
    exampleAnswers: ["Asia", "Africa", "North America", "South America", "Europe", "Australia", "Antarctica"],
    hint: "The 7 continents."
  },
  {
    id: "q13",
    category: "10-20",
    question: "Name a type of triangle.",
    exampleAnswers: ["Equilateral", "Isosceles", "Scalene", "Right", "Acute", "Obtuse"],
    hint: "Classified by sides or angles."
  },
  {
    id: "q14",
    category: "10-20",
    question: "Name a primary or secondary color.",
    exampleAnswers: ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"],
    hint: "The 3 primary + 3 secondary colors."
  },
  {
    id: "q15",
    category: "10-20",
    question: "Name a type of cloud.",
    exampleAnswers: ["Cumulus", "Stratus", "Cirrus", "Nimbus", "Cumulonimbus", "Stratocumulus", "Altostratus", "Altocumulus", "Cirrostratus", "Nimbostratus"],
    hint: "Official meteorological cloud types."
  },

  // ─────────────────────────────────────────────
  // 5-10 answers
  // ─────────────────────────────────────────────
  {
    id: "q16",
    category: "5-10",
    question: "Name a state of matter.",
    exampleAnswers: ["Solid", "Liquid", "Gas", "Plasma", "Bose-Einstein condensate"],
    hint: "Physics-recognized states."
  },
  {
    id: "q17",
    category: "5-10",
    question: "Name a type of rock (geological).",
    exampleAnswers: ["Igneous", "Sedimentary", "Metamorphic"],
    hint: "The 3 main geological rock types."
  },
  {
    id: "q18",
    category: "5-10",
    question: "Name a type of chemical bond.",
    exampleAnswers: ["Covalent", "Ionic", "Metallic", "Hydrogen bond", "Van der Waals"],
    hint: "Chemistry-recognized bond types."
  },
  {
    id: "q19",
    category: "5-10",
    question: "Name a synonym for 'happy'.",
    exampleAnswers: ["Joyful", "Content", "Elated", "Cheerful", "Pleased", "Delighted", "Glad", "Ecstatic", "Blissful", "Merry"],
    hint: "Any word meaning happy."
  },
  {
    id: "q20",
    category: "5-10",
    question: "Name one of the five senses.",
    exampleAnswers: ["Sight", "Hearing", "Touch", "Taste", "Smell"],
    hint: "Exactly 5 — sight, hearing, touch, taste, smell."
  },
  {
    id: "q21",
    category: "5-10",
    question: "Name a type of angle in geometry.",
    exampleAnswers: ["Acute", "Right", "Obtuse", "Straight", "Reflex", "Full"],
    hint: "Classified by degree measure."
  },

  // ─────────────────────────────────────────────
  // 1-5 answers
  // ─────────────────────────────────────────────
  {
    id: "q22",
    category: "1-5",
    question: "Name the fastest land animal.",
    exampleAnswers: ["Cheetah"],
    hint: "Only one correct answer."
  },
  {
    id: "q23",
    category: "1-5",
    question: "Name a synonym for 'small'.",
    exampleAnswers: ["Tiny", "Little", "Mini", "Micro", "Miniature", "Petite", "Minute", "Compact", "Slight", "Diminutive"],
    hint: "Words meaning small in size."
  },
  {
    id: "q24",
    category: "1-5",
    question: "Name the process by which plants make food using sunlight.",
    exampleAnswers: ["Photosynthesis"],
    hint: "One word, a biological process."
  },
  {
    id: "q25",
    category: "1-5",
    question: "Name the hardest natural substance on Earth.",
    exampleAnswers: ["Diamond"],
    hint: "Scores 10 on the Mohs scale."
  },
  {
    id: "q26",
    category: "1-5",
    question: "Name a type of logical fallacy.",
    exampleAnswers: ["Ad hominem", "Straw man", "False dichotomy", "Slippery slope", "Appeal to authority", "Circular reasoning", "Red herring", "Hasty generalization"],
    hint: "Recognized logical fallacy names."
  },

  // ─────────────────────────────────────────────
  // 1-3 answers (very narrow — great for finals)
  // ─────────────────────────────────────────────
  {
    id: "q27",
    category: "1-3",
    question: "Name the chemical symbol for Gold.",
    exampleAnswers: ["Au"],
    hint: "From the Latin 'Aurum'."
  },
  {
    id: "q28",
    category: "1-3",
    question: "Name the only even prime number.",
    exampleAnswers: ["2", "Two"],
    hint: "Single digit."
  },
  {
    id: "q29",
    category: "1-3",
    question: "Name the powerhouse of the cell.",
    exampleAnswers: ["Mitochondria", "Mitochondrion"],
    hint: "Biology 101."
  },
  {
    id: "q30",
    category: "1-3",
    question: "Name the speed of light unit in a vacuum (approximately, in km/s).",
    exampleAnswers: ["300000", "299792", "299,792", "300,000"],
    hint: "Approximately 3 × 10⁵ km/s."
  },
  {
    id: "q31",
    category: "1-3",
    question: "Name the author of 'Pride and Prejudice'.",
    exampleAnswers: ["Jane Austen"],
    hint: "19th-century English novelist."
  },
  {
    id: "q32",
    category: "1-3",
    question: "Name the smallest prime number.",
    exampleAnswers: ["2", "Two"],
    hint: "Less than 3."
  },
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
