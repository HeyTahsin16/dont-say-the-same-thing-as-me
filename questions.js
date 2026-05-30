// Questions categorized by number of valid answers
// Categories: "40+", "20-40", "10-20", "5-10", "1-5", "1-3"
// exampleAnswers help the AI judge what's acceptable

const questions = [
  // ─────────────────────────────────────────────
  // 40+ answers (Great opener rounds - Wide open)
  // ─────────────────────────────────────────────
  { id: "q1", category: "40+", question: "Name a sovereign country in the world.", exampleAnswers: ["France", "Germany", "Japan", "Brazil", "India", "USA", "China", "Canada", "Australia", "Mexico"], hint: "There are about 195 of these." },
  { id: "q2", category: "40+", question: "Name a recognized music genre.", exampleAnswers: ["Pop", "Rock", "Jazz", "Classical", "Hip-hop", "Blues", "Country", "Electronic", "R&B", "Reggae"], hint: "Any recognized style of music counts." },
  { id: "q3", category: "40+", question: "Name an item of clothing.", exampleAnswers: ["Shirt", "Pants", "Socks", "Hat", "Jacket", "Skirt", "Dress", "Sweater", "Gloves", "Scarf"], hint: "Anything you wear on your body." },
  { id: "q4", category: "40+", question: "Name a fruit.", exampleAnswers: ["Apple", "Banana", "Orange", "Strawberry", "Grape", "Mango", "Pineapple", "Watermelon", "Kiwi", "Peach"], hint: "Botanical or culinary fruits are fine." },
  { id: "q5", category: "40+", question: "Name a capital city.", exampleAnswers: ["London", "Tokyo", "Paris", "Washington DC", "Berlin", "Beijing", "Ottawa", "Rome", "Madrid", "Seoul"], hint: "The seat of government for a country." },
  { id: "q6", category: "40+", question: "Name a species of mammal.", exampleAnswers: ["Dog", "Cat", "Lion", "Elephant", "Whale", "Dolphin", "Horse", "Cow", "Bear", "Tiger"], hint: "Warm-blooded, fur-bearing animals." },
  { id: "q7", category: "40+", question: "Name a brand of automobile.", exampleAnswers: ["Toyota", "Ford", "Honda", "Chevrolet", "BMW", "Mercedes", "Audi", "Tesla", "Nissan", "Volkswagen"], hint: "Companies that manufacture cars." },
  { id: "q8", category: "40+", question: "Name a species of bird.", exampleAnswers: ["Eagle", "Sparrow", "Pigeon", "Penguin", "Parrot", "Owl", "Hawk", "Flamingo", "Swan", "Crow"], hint: "Feathered, winged animals." },
  { id: "q9", category: "40+", question: "Name a city located in Asia.", exampleAnswers: ["Tokyo", "Seoul", "Beijing", "Bangkok", "Mumbai", "Jakarta", "Manila", "Dhaka", "Tehran", "Dubai"], hint: "Any city on the Asian continent." },
  { id: "q10", category: "40+", question: "Name a type of tree.", exampleAnswers: ["Oak", "Pine", "Maple", "Birch", "Cedar", "Willow", "Redwood", "Spruce", "Ash", "Palm"], hint: "Think forests and woods." },
  { id: "q11", category: "40+", question: "Name a major river in the world.", exampleAnswers: ["Nile", "Amazon", "Yangtze", "Mississippi", "Ganges", "Danube", "Volga", "Mekong", "Thames", "Rhine"], hint: "Any flowing body of water on a map." },
  { id: "q12", category: "40+", question: "Name a common household appliance.", exampleAnswers: ["Refrigerator", "Microwave", "Toaster", "Blender", "Washing Machine", "Dryer", "Oven", "Vacuum", "Dishwasher", "Iron"], hint: "Machines you plug in around the house." },
  { id: "q13", category: "40+", question: "Name a musical instrument.", exampleAnswers: ["Piano", "Guitar", "Violin", "Drums", "Flute", "Trumpet", "Saxophone", "Cello", "Clarinet", "Harp"], hint: "Things used to make music." },
  { id: "q14", category: "40+", question: "Name a spoken language.", exampleAnswers: ["English", "Spanish", "Mandarin", "Hindi", "Arabic", "French", "Russian", "Portuguese", "Bengali", "German"], hint: "Currently spoken human languages." },
  { id: "q15", category: "40+", question: "Name a type of flower.", exampleAnswers: ["Rose", "Tulip", "Sunflower", "Daisy", "Lily", "Orchid", "Daffodil", "Marigold", "Peony", "Lotus"], hint: "Flowering plants." },
  { id: "q16", category: "40+", question: "Name a recognized sport.", exampleAnswers: ["Soccer", "Basketball", "Tennis", "Cricket", "Baseball", "Hockey", "Swimming", "Golf", "Rugby", "Volleyball"], hint: "Athletic competitions." },

  // ─────────────────────────────────────────────
  // 20-40 answers (Starts narrowing down)
  // ─────────────────────────────────────────────
  { id: "q17", category: "20-40", question: "Name a letter in the English alphabet.", exampleAnswers: ["A", "B", "C", "X", "Y", "Z"], hint: "There are exactly 26 of these." },
  { id: "q18", category: "20-40", question: "Name a member state of the European Union.", exampleAnswers: ["Germany", "France", "Italy", "Spain", "Poland", "Sweden", "Netherlands", "Greece"], hint: "There are 27 current members." },
  { id: "q19", category: "20-40", question: "Name one of the 50 US states.", exampleAnswers: ["California", "Texas", "Florida", "New York", "Illinois", "Ohio", "Georgia", "Michigan", "Washington", "Hawaii"], hint: "There are exactly 50 options." },
  { id: "q20", category: "20-40", question: "Name a programming language.", exampleAnswers: ["Python", "JavaScript", "Java", "C++", "C#", "Ruby", "Swift", "Go", "Rust", "TypeScript"], hint: "Any real programming language." },
  { id: "q21", category: "20-40", question: "Name one of the first 20 elements on the periodic table.", exampleAnswers: ["Hydrogen", "Helium", "Lithium", "Carbon", "Oxygen", "Neon", "Sodium", "Calcium"], hint: "Atomic numbers 1 through 20." },
  { id: "q22", category: "20-40", question: "Name a bone in the human body.", exampleAnswers: ["Femur", "Tibia", "Fibula", "Humerus", "Radius", "Ulna", "Skull", "Rib", "Pelvis", "Sternum"], hint: "There are 206 total, name any of the major ones." },
  { id: "q23", category: "20-40", question: "Name a capital city in Europe.", exampleAnswers: ["London", "Paris", "Berlin", "Rome", "Madrid", "Vienna", "Warsaw", "Stockholm", "Oslo", "Athens"], hint: "Seats of government in the European continent." },
  { id: "q24", category: "20-40", question: "Name a country in Africa.", exampleAnswers: ["Egypt", "Nigeria", "South Africa", "Kenya", "Ethiopia", "Morocco", "Ghana", "Uganda", "Algeria", "Tanzania"], hint: "There are 54 sovereign nations here." },
  { id: "q25", category: "20-40", question: "Name a country in Asia.", exampleAnswers: ["China", "India", "Japan", "South Korea", "Indonesia", "Vietnam", "Thailand", "Malaysia", "Bangladesh", "Pakistan"], hint: "There are 48 recognized countries here." },
  { id: "q26", category: "20-40", question: "Name a word from the NATO phonetic alphabet.", exampleAnswers: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet"], hint: "Words used to spell out letters over radio." },
  { id: "q27", category: "20-40", question: "Name a play written by William Shakespeare.", exampleAnswers: ["Hamlet", "Macbeth", "Romeo and Juliet", "Othello", "King Lear", "The Tempest", "Julius Caesar"], hint: "He wrote 39 of them." },
  { id: "q28", category: "20-40", question: "Name an element whose chemical symbol starts with 'C'.", exampleAnswers: ["Carbon", "Calcium", "Copper", "Chlorine", "Cobalt", "Chromium", "Cadmium", "Cesium"], hint: "Look at the periodic table." },

  // ─────────────────────────────────────────────
  // 10-20 answers (Mid-game pressure)
  // ─────────────────────────────────────────────
  { id: "q29", category: "10-20", question: "Name a month of the Gregorian calendar.", exampleAnswers: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], hint: "There are 12 of these." },
  { id: "q30", category: "10-20", question: "Name a sign of the Western Zodiac.", exampleAnswers: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"], hint: "There are exactly 12 astrological signs." },
  { id: "q31", category: "10-20", question: "Name a country in South America.", exampleAnswers: ["Brazil", "Argentina", "Colombia", "Peru", "Chile", "Venezuela", "Ecuador", "Bolivia", "Paraguay", "Uruguay", "Guyana", "Suriname"], hint: "There are 12 sovereign nations here." },
  { id: "q32", category: "10-20", question: "Name one of the original 13 US Colonies.", exampleAnswers: ["Virginia", "Massachusetts", "New York", "Maryland", "Rhode Island", "Connecticut", "New Hampshire", "Delaware", "New Jersey", "Pennsylvania", "North Carolina", "South Carolina", "Georgia"], hint: "The stars on the original US flag." },
  { id: "q33", category: "10-20", question: "Name a major organ system in the human body.", exampleAnswers: ["Circulatory", "Respiratory", "Digestive", "Nervous", "Skeletal", "Muscular", "Endocrine", "Immune"], hint: "Systems that keep you alive." },
  { id: "q34", category: "10-20", question: "Name a standard punctuation mark in English.", exampleAnswers: ["Period", "Comma", "Question Mark", "Exclamation Point", "Colon", "Semicolon", "Apostrophe", "Hyphen", "Dash", "Parentheses"], hint: "Symbols used to structure writing." },
  { id: "q35", category: "10-20", question: "Name a standard basic HTML color name.", exampleAnswers: ["Aqua", "Black", "Blue", "Fuchsia", "Gray", "Green", "Lime", "Maroon", "Navy", "Olive", "Purple", "Red", "Silver", "Teal", "White", "Yellow"], hint: "There are 16 original standard color names in CSS." },
  { id: "q36", category: "10-20", question: "Name a major tectonic plate.", exampleAnswers: ["Pacific", "North American", "Eurasian", "African", "Antarctic", "Indo-Australian", "South American", "Nazca"], hint: "The massive slabs of rock making up Earth's crust." },
  { id: "q37", category: "10-20", question: "Name a standard US paper currency denomination currently printed.", exampleAnswers: ["$1", "$2", "$5", "$10", "$20", "$50", "$100"], hint: "The bills in your wallet." },
  { id: "q38", category: "10-20", question: "Name a major mountain range.", exampleAnswers: ["Himalayas", "Andes", "Rockies", "Alps", "Appalachians", "Urals", "Pyrenees", "Atlas"], hint: "The big rocky ridges across the world." },

  // ─────────────────────────────────────────────
  // 5-10 answers (Getting very tight)
  // ─────────────────────────────────────────────
  { id: "q39", category: "5-10", question: "Name a planet in our solar system.", exampleAnswers: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"], hint: "There are officially 8." },
  { id: "q40", category: "5-10", question: "Name a continent.", exampleAnswers: ["Asia", "Africa", "North America", "South America", "Europe", "Australia", "Antarctica"], hint: "There are 7 of these." },
  { id: "q41", category: "5-10", question: "Name one of the seven deadly sins.", exampleAnswers: ["Pride", "Greed", "Lust", "Envy", "Gluttony", "Wrath", "Sloth"], hint: "Exactly 7." },
  { id: "q42", category: "5-10", question: "Name a standard chess piece.", exampleAnswers: ["King", "Queen", "Rook", "Bishop", "Knight", "Pawn"], hint: "There are 6 distinct types of pieces." },
  { id: "q43", category: "5-10", question: "Name a primary or secondary color.", exampleAnswers: ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"], hint: "The 3 primary + 3 secondary colors on a standard color wheel." },
  { id: "q44", category: "5-10", question: "Name a Noble Gas.", exampleAnswers: ["Helium", "Neon", "Argon", "Krypton", "Xenon", "Radon"], hint: "Group 18 on the periodic table." },
  { id: "q45", category: "5-10", question: "Name a primary phase of the moon.", exampleAnswers: ["New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous", "Full Moon", "Waning Gibbous", "Third Quarter", "Waning Crescent"], hint: "There are 8 distinct phases." },
  { id: "q46", category: "5-10", question: "Name one of the Great Lakes of North America.", exampleAnswers: ["Huron", "Ontario", "Michigan", "Erie", "Superior"], hint: "Remember the acronym HOMES." },
  { id: "q47", category: "5-10", question: "Name a core hardware component needed to build a PC.", exampleAnswers: ["CPU", "GPU", "Motherboard", "RAM", "Power Supply", "Storage", "Case"], hint: "The parts you buy to build a rig." },
  { id: "q48", category: "5-10", question: "Name a fundamental force of nature.", exampleAnswers: ["Gravity", "Electromagnetism", "Strong Nuclear Force", "Weak Nuclear Force"], hint: "Physics tells us there are 4 of these." },
  { id: "q49", category: "5-10", question: "Name a color of the rainbow.", exampleAnswers: ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"], hint: "ROYGBIV." },
  { id: "q50", category: "5-10", question: "Name a classical simple machine.", exampleAnswers: ["Lever", "Wheel and Axle", "Pulley", "Inclined Plane", "Wedge", "Screw"], hint: "Basic mechanical devices from antiquity. There are 6." },

  // ─────────────────────────────────────────────
  // 1-5 answers (Great for intense semi-finals)
  // ─────────────────────────────────────────────
  { id: "q51", category: "1-5", question: "Name a main blood type group in the ABO system.", exampleAnswers: ["A", "B", "AB", "O"], hint: "There are 4 main letter groups (ignore positive/negative)." },
  { id: "q52", category: "1-5", question: "Name a state of matter.", exampleAnswers: ["Solid", "Liquid", "Gas", "Plasma"], hint: "There are 4 fundamental states observable in everyday life." },
  { id: "q53", category: "1-5", question: "Name a nucleotide base found in DNA.", exampleAnswers: ["Adenine", "Thymine", "Cytosine", "Guanine"], hint: "A, T, C, or G." },
  { id: "q54", category: "1-5", question: "Name a suit in a standard deck of playing cards.", exampleAnswers: ["Hearts", "Diamonds", "Clubs", "Spades"], hint: "There are exactly 4." },
  { id: "q55", category: "1-5", question: "Name a major ocean on Earth.", exampleAnswers: ["Pacific", "Atlantic", "Indian", "Southern", "Arctic"], hint: "There are 5 recognized oceans." },
  { id: "q56", category: "1-5", question: "Name a color of the Olympic rings.", exampleAnswers: ["Blue", "Yellow", "Black", "Green", "Red"], hint: "There are 5 interlocking rings." },
  { id: "q57", category: "1-5", question: "Name a cardinal direction.", exampleAnswers: ["North", "South", "East", "West"], hint: "Look at a compass." },
  { id: "q58", category: "1-5", question: "Name a section of a classical orchestra.", exampleAnswers: ["Strings", "Woodwinds", "Brass", "Percussion"], hint: "There are 4 main instrument families." },
  { id: "q59", category: "1-5", question: "Name a gas giant in our solar system.", exampleAnswers: ["Jupiter", "Saturn", "Uranus", "Neptune"], hint: "The outer planets." },
  { id: "q60", category: "1-5", question: "Name a chamber of the human heart.", exampleAnswers: ["Left Atrium", "Right Atrium", "Left Ventricle", "Right Ventricle"], hint: "There are 4 chambers." },

  // ─────────────────────────────────────────────
  // 1-3 answers (Very narrow — sudden death finals)
  // ─────────────────────────────────────────────
  { id: "q61", category: "1-3", question: "Name a primary color of light (RGB model).", exampleAnswers: ["Red", "Green", "Blue"], hint: "There are 3." },
  { id: "q62", category: "1-3", question: "Name a fundamental subatomic particle found in an atom.", exampleAnswers: ["Proton", "Neutron", "Electron"], hint: "There are 3 main ones." },
  { id: "q63", category: "1-3", question: "Name a branch of the United States Federal Government.", exampleAnswers: ["Executive", "Legislative", "Judicial"], hint: "There are 3 branches." },
  { id: "q64", category: "1-3", question: "Name a pole of a standard magnet.", exampleAnswers: ["North", "South"], hint: "There are exactly 2." },
  { id: "q65", category: "1-3", question: "Name a variable declaration keyword in JavaScript.", exampleAnswers: ["var", "let", "const"], hint: "There are 3 standard ways to declare one." },
  { id: "q66", category: "1-3", question: "Name a type of electrical charge.", exampleAnswers: ["Positive", "Negative", "Neutral"], hint: "Physics 101." },
  { id: "q67", category: "1-3", question: "Name a spatial axis on a standard 3D coordinate graph.", exampleAnswers: ["X", "Y", "Z"], hint: "The 3 dimensions of space." },
  { id: "q68", category: "1-3", question: "Name a primary law of thermodynamics.", exampleAnswers: ["First", "Second", "Third", "Zeroth"], hint: "The foundational laws governing heat and energy." },
  { id: "q69", category: "1-3", question: "Name an outcome of a coin flip.", exampleAnswers: ["Heads", "Tails"], hint: "50/50 chance." },
  { id: "q70", category: "1-3", question: "Name a part of a standard URL protocol.", exampleAnswers: ["HTTP", "HTTPS", "FTP"], hint: "What goes before the '://'." }
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
