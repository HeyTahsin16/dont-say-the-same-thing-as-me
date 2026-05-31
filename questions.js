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
  { id: "q70", category: "1-3", question: "Name a part of a standard URL protocol.", exampleAnswers: ["HTTP", "HTTPS", "FTP"], hint: "What goes before the '://'." },

  // ─────────────────────────────────────────────
  // 40+ answers (Round 2 Wide Open)
  // ─────────────────────────────────────────────
  { id: "q71", category: "40+", question: "Name a recognized breed of dog.", exampleAnswers: ["Labrador Retriever", "Poodle", "German Shepherd", "Bulldog", "Beagle", "Golden Retriever", "Pug", "Chihuahua", "Dachshund", "Boxer"], hint: "There are hundreds of recognized breeds." },
  { id: "q72", category: "40+", question: "Name a type of vegetable.", exampleAnswers: ["Carrot", "Broccoli", "Spinach", "Potato", "Tomato", "Onion", "Garlic", "Cucumber", "Pepper", "Zucchini"], hint: "Botanical or culinary vegetables count." },
  { id: "q73", category: "40+", question: "Name a famous video game franchise.", exampleAnswers: ["Super Mario", "The Legend of Zelda", "Call of Duty", "Final Fantasy", "Pokémon", "Grand Theft Auto", "Halo", "Minecraft", "Sonic the Hedgehog", "Assassin's Creed"], hint: "Any gaming series with multiple entries." },
  { id: "q74", category: "40+", question: "Name a famous historical painter or artist.", exampleAnswers: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Michelangelo", "Rembrandt", "Salvador Dalí", "Frida Kahlo", "Andy Warhol", "Georgia O'Keeffe"], hint: "People whose art hangs in major museums." },
  { id: "q75", category: "40+", question: "Name an item typically found in a grocery store.", exampleAnswers: ["Milk", "Bread", "Eggs", "Cheese", "Apples", "Cereal", "Pasta", "Rice", "Chicken", "Toilet Paper"], hint: "Think about the aisles you walk down." },
  { id: "q76", category: "40+", question: "Name a hand tool found in a standard toolbox.", exampleAnswers: ["Hammer", "Screwdriver", "Wrench", "Pliers", "Tape Measure", "Saw", "Chisel", "Mallet", "Allen Key", "Level"], hint: "Things you use to build or fix stuff." },
  { id: "q77", category: "40+", question: "Name a recognized profession or job title.", exampleAnswers: ["Doctor", "Teacher", "Engineer", "Nurse", "Chef", "Lawyer", "Accountant", "Plumber", "Electrician", "Police Officer"], hint: "Ways people make a living." },
  { id: "q78", category: "40+", question: "Name a species of insect.", exampleAnswers: ["Ant", "Honeybee", "Monarch Butterfly", "Mosquito", "Ladybug", "Grasshopper", "Cricket", "Dragonfly", "Wasp", "Beetle"], hint: "They usually have six legs and an exoskeleton." },
  { id: "q79", category: "40+", question: "Name a model line of smartphone.", exampleAnswers: ["iPhone", "Galaxy S", "Pixel", "OnePlus", "Xperia", "Moto G", "ZenFone", "Lumia", "BlackBerry", "Razr"], hint: "The name brand or series of the device in your pocket." },
  { id: "q80", category: "40+", question: "Name an official Olympic track and field event.", exampleAnswers: ["100m Dash", "Long Jump", "Shot Put", "Pole Vault", "Marathon", "High Jump", "Discus", "Javelin", "4x100m Relay", "Decathlon"], hint: "Events that happen inside the main athletic stadium." },
  { id: "q81", category: "40+", question: "Name a recognized cryptocurrency.", exampleAnswers: ["Bitcoin", "Ethereum", "Dogecoin", "Litecoin", "Cardano", "Solana", "Polkadot", "Tether", "Ripple (XRP)", "Shiba Inu"], hint: "Digital coins traded on the blockchain." },
  { id: "q82", category: "40+", question: "Name a past or present President of the United States.", exampleAnswers: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John F. Kennedy", "Barack Obama", "Franklin D. Roosevelt", "Theodore Roosevelt", "Ronald Reagan", "Bill Clinton", "Joe Biden"], hint: "There have been 46 presidencies." },
  { id: "q83", category: "40+", question: "Name a known chemical compound.", exampleAnswers: ["Water (H2O)", "Carbon Dioxide (CO2)", "Sodium Chloride (NaCl)", "Ammonia (NH3)", "Methane (CH4)", "Glucose (C6H12O6)", "Sulfuric Acid", "Ethanol", "Baking Soda", "Hydrogen Peroxide"], hint: "Molecules made of two or more elements." },
  { id: "q84", category: "40+", question: "Name a piece of household furniture.", exampleAnswers: ["Sofa", "Bed", "Dining Table", "Chair", "Bookshelf", "Dresser", "Nightstand", "Desk", "Coffee Table", "Wardrobe"], hint: "Movable objects that make a room livable." },
  { id: "q85", category: "40+", question: "Name a recognized university in the USA.", exampleAnswers: ["Harvard", "Stanford", "MIT", "UCLA", "Yale", "Princeton", "Columbia", "NYU", "University of Texas", "University of Michigan"], hint: "There are thousands to choose from." },
  { id: "q86", category: "40+", question: "Name a species of fish.", exampleAnswers: ["Salmon", "Tuna", "Clownfish", "Great White Shark", "Trout", "Goldfish", "Catfish", "Cod", "Mahi-Mahi", "Bass"], hint: "Aquatic, gill-bearing animals." },

  // ─────────────────────────────────────────────
  // 20-40 answers (Slightly narrower)
  // ─────────────────────────────────────────────
  { id: "q87", category: "20-40", question: "Name a team currently in the NFL.", exampleAnswers: ["Chiefs", "Eagles", "Cowboys", "Patriots", "49ers", "Packers", "Steelers", "Ravens", "Bills", "Seahawks"], hint: "There are 32 franchises." },
  { id: "q88", category: "20-40", question: "Name a team currently in the NBA.", exampleAnswers: ["Lakers", "Celtics", "Warriors", "Bulls", "Heat", "Knicks", "Spurs", "Nuggets", "Suns", "Mavericks"], hint: "There are 30 franchises." },
  { id: "q89", category: "20-40", question: "Name a letter in the Greek alphabet.", exampleAnswers: ["Alpha", "Beta", "Gamma", "Delta", "Omega", "Sigma", "Pi", "Epsilon", "Theta", "Kappa"], hint: "There are 24 letters total." },
  { id: "q90", category: "20-40", question: "Name an amendment to the US Constitution.", exampleAnswers: ["First", "Second", "Tenth", "Thirteenth", "Eighteenth", "Nineteenth", "Twenty-First", "Twenty-Fifth"], hint: "There are 27 of these." },
  { id: "q91", category: "20-40", question: "Name a property on a standard US Monopoly board.", exampleAnswers: ["Boardwalk", "Park Place", "Reading Railroad", "Illinois Avenue", "Marvin Gardens", "Baltic Avenue", "St. Charles Place"], hint: "There are 28 unowned properties you can buy." },
  { id: "q92", category: "20-40", question: "Name a book of the New Testament.", exampleAnswers: ["Matthew", "Mark", "Luke", "John", "Acts", "Romans", "Revelation", "Corinthians"], hint: "There are 27 books total." },
  { id: "q93", category: "20-40", question: "Name a playable character in Super Smash Bros. Melee.", exampleAnswers: ["Mario", "Fox", "Falco", "Marth", "Captain Falcon", "Peach", "Jigglypuff", "Zelda", "Sheik", "Mewtwo"], hint: "There are 26 playable fighters in this GameCube classic." },
  { id: "q94", category: "20-40", question: "Name a standard time zone abbreviation.", exampleAnswers: ["EST", "PST", "CST", "MST", "GMT", "UTC", "CET", "JST", "AEST", "BST"], hint: "The 3 or 4 letter codes used to denote regional time." },
  { id: "q95", category: "20-40", question: "Name a movie in the Marvel Cinematic Universe (MCU).", exampleAnswers: ["Iron Man", "The Avengers", "Black Panther", "Endgame", "Guardians of the Galaxy", "Thor: Ragnarok", "Spider-Man: No Way Home"], hint: "There are over 30 films in the interconnected universe." },
  { id: "q96", category: "20-40", question: "Name a bone in the human skull or face.", exampleAnswers: ["Mandible", "Maxilla", "Frontal", "Parietal", "Zygomatic", "Occipital", "Temporal", "Sphenoid"], hint: "There are 22 bones that make up the head." },
  { id: "q97", category: "20-40", question: "Name a day of the month.", exampleAnswers: ["1st", "15th", "31st", "10th", "22nd", "3rd", "28th"], hint: "Numbers 1 through 31." },
  { id: "q98", category: "20-40", question: "Name a member country of NATO.", exampleAnswers: ["USA", "UK", "France", "Germany", "Turkey", "Canada", "Italy", "Poland", "Finland", "Sweden"], hint: "There are 32 member states in the alliance." },

  // ─────────────────────────────────────────────
  // 10-20 answers (The squeeze begins)
  // ─────────────────────────────────────────────
  { id: "q99", category: "10-20", question: "Name an animal from the Chinese Zodiac.", exampleAnswers: ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"], hint: "There are 12 signs in the cycle." },
  { id: "q100", category: "10-20", question: "Name a rank in a standard deck of cards.", exampleAnswers: ["Ace", "King", "Queen", "Jack", "Ten", "Two", "Seven"], hint: "There are 13 possible ranks." },
  { id: "q101", category: "10-20", question: "Name a numbered wedge on a standard dartboard.", exampleAnswers: ["1", "20", "19", "15", "Bullseye", "Outer Bull"], hint: "Numbers 1-20 plus the center." },
  { id: "q102", category: "10-20", question: "Name a Cabinet department in the US Government.", exampleAnswers: ["State", "Defense", "Treasury", "Justice", "Education", "Energy", "Homeland Security", "Agriculture"], hint: "There are 15 executive departments." },
  { id: "q103", category: "10-20", question: "Name a unique musical note in the Western chromatic scale.", exampleAnswers: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"], hint: "There are 12 notes before the octave repeats." },
  { id: "q104", category: "10-20", question: "Name a zodiac constellation on the ecliptic.", exampleAnswers: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Ophiuchus"], hint: "There are 12 traditional ones (and 13 recognized by astronomy)." },
  { id: "q105", category: "10-20", question: "Name an English word for a multiple of 10, up to 100.", exampleAnswers: ["Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety", "Hundred"], hint: "There are exactly 10 words." },
  { id: "q106", category: "10-20", question: "Name a club currently in the English Premier League.", exampleAnswers: ["Arsenal", "Manchester City", "Liverpool", "Chelsea", "Manchester United", "Tottenham Hotspur", "Aston Villa", "Newcastle United"], hint: "There are 20 teams competing in the top flight." },
  { id: "q107", category: "10-20", question: "Name a cranial nerve in humans.", exampleAnswers: ["Olfactory", "Optic", "Oculomotor", "Trochlear", "Trigeminal", "Abducens", "Facial", "Vagus"], hint: "There are 12 pairs of these." },
  { id: "q108", category: "10-20", question: "Name a Canadian Province or Territory.", exampleAnswers: ["Ontario", "Quebec", "British Columbia", "Alberta", "Nunavut", "Nova Scotia", "Manitoba"], hint: "There are 13 total (10 provinces, 3 territories)." },

  // ─────────────────────────────────────────────
  // 5-10 answers (Getting highly specific)
  // ─────────────────────────────────────────────
  { id: "q109", category: "5-10", question: "Name a noble rank in the British peerage.", exampleAnswers: ["Duke", "Marquess", "Earl", "Viscount", "Baron"], hint: "There are 5 ranks of the peerage." },
  { id: "q110", category: "5-10", question: "Name a standard color found in a normal bag of M&Ms.", exampleAnswers: ["Red", "Orange", "Yellow", "Green", "Blue", "Brown"], hint: "There are 6 standard colors." },
  { id: "q111", category: "5-10", question: "Name a main novel in the Harry Potter series.", exampleAnswers: ["Sorcerer's Stone", "Chamber of Secrets", "Prisoner of Azkaban", "Goblet of Fire", "Order of the Phoenix", "Half-Blood Prince", "Deathly Hallows"], hint: "There are 7 books." },
  { id: "q112", category: "5-10", question: "Name a day of the week.", exampleAnswers: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], hint: "There are 7 days." },
  { id: "q113", category: "5-10", question: "Name one of the Seven Wonders of the Ancient World.", exampleAnswers: ["Great Pyramid of Giza", "Hanging Gardens of Babylon", "Colossus of Rhodes", "Lighthouse of Alexandria", "Temple of Artemis"], hint: "There are exactly 7." },
  { id: "q114", category: "5-10", question: "Name a vowel in the English alphabet.", exampleAnswers: ["A", "E", "I", "O", "U", "Y"], hint: "5 core ones, plus 'sometimes Y'." },
  { id: "q115", category: "5-10", question: "Name a main 'Episode' movie in the Star Wars Skywalker Saga.", exampleAnswers: ["The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "A New Hope", "The Empire Strikes Back", "Return of the Jedi"], hint: "There are 9 episodic films." },
  { id: "q116", category: "5-10", question: "Name a standard position on a basketball court.", exampleAnswers: ["Point Guard", "Shooting Guard", "Small Forward", "Power Forward", "Center"], hint: "There are 5 positions." },
  { id: "q117", category: "5-10", question: "Name a standard US coin denomination currently minted.", exampleAnswers: ["Penny", "Nickel", "Dime", "Quarter", "Half Dollar", "Dollar Coin"], hint: "There are 6 coins." },
  { id: "q118", category: "5-10", question: "Name a string tuning on a standard guitar.", exampleAnswers: ["E", "A", "D", "G", "B"], hint: "There are 6 strings, but 5 unique notes." },
  { id: "q119", category: "5-10", question: "Name a shape of a piece (Tetromino) in Tetris.", exampleAnswers: ["I", "O", "T", "S", "Z", "J", "L"], hint: "There are 7 unique blocks." },
  { id: "q120", category: "5-10", question: "Name an actor who has officially played James Bond in EON productions.", exampleAnswers: ["Sean Connery", "George Lazenby", "Roger Moore", "Timothy Dalton", "Pierce Brosnan", "Daniel Craig"], hint: "There are 6 official actors." },

  // ─────────────────────────────────────────────
  // 1-5 answers (Finals territory)
  // ─────────────────────────────────────────────
  { id: "q121", category: "1-5", question: "Name a season of the year.", exampleAnswers: ["Spring", "Summer", "Autumn (Fall)", "Winter"], hint: "There are 4 seasons." },
  { id: "q122", category: "1-5", question: "Name a nucleotide base found in RNA.", exampleAnswers: ["Adenine", "Uracil", "Cytosine", "Guanine"], hint: "There are 4 letters (one is different from DNA)." },
  { id: "q123", category: "1-5", question: "Name a ghost from the original Pac-Man arcade game.", exampleAnswers: ["Blinky", "Pinky", "Inky", "Clyde"], hint: "There are 4 ghosts." },
  { id: "q124", category: "1-5", question: "Name a primary taste sensation.", exampleAnswers: ["Sweet", "Sour", "Salty", "Bitter", "Umami"], hint: "There are 5 basic tastes recognized by science." },
  { id: "q125", category: "1-5", question: "Name a major US broadcast television network.", exampleAnswers: ["ABC", "CBS", "NBC", "Fox", "The CW"], hint: "There are 5 main over-the-air networks." },
  { id: "q126", category: "1-5", question: "Name a house at Hogwarts School of Witchcraft and Wizardry.", exampleAnswers: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"], hint: "There are 4 houses." },
  { id: "q127", category: "1-5", question: "Name a Grand Slam tennis tournament.", exampleAnswers: ["Australian Open", "French Open", "Wimbledon", "US Open"], hint: "There are 4 majors." },
  { id: "q128", category: "1-5", question: "Name one of the Teenage Mutant Ninja Turtles.", exampleAnswers: ["Leonardo", "Michelangelo", "Donatello", "Raphael"], hint: "There are 4 brothers." },
  { id: "q129", category: "1-5", question: "Name an official member of The Beatles.", exampleAnswers: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"], hint: "The Fab Four." },
  { id: "q130", category: "1-5", question: "Name a canonical Gospel in the New Testament.", exampleAnswers: ["Matthew", "Mark", "Luke", "John"], hint: "There are 4 gospels." },

  // ─────────────────────────────────────────────
  // 1-3 answers (Absolute sudden death)
  // ─────────────────────────────────────────────
  { id: "q131", category: "1-3", question: "Name a color on a standard traffic light.", exampleAnswers: ["Red", "Yellow", "Green"], hint: "There are 3 lights." },
  { id: "q132", category: "1-3", question: "Name a primary color of pigment (CMY model).", exampleAnswers: ["Cyan", "Magenta", "Yellow"], hint: "Used in printer ink, there are 3." },
  { id: "q133", category: "1-3", question: "Name a hand on a standard analog clock.", exampleAnswers: ["Hour", "Minute", "Second"], hint: "There are 3 standard hands." },
  { id: "q134", category: "1-3", question: "Name a metal used for a standard Olympic medal.", exampleAnswers: ["Gold", "Silver", "Bronze"], hint: "There are 3 medals awarded." },
  { id: "q135", category: "1-3", question: "Name a primary type of blood vessel.", exampleAnswers: ["Artery", "Vein", "Capillary"], hint: "There are 3 main types." },
  { id: "q136", category: "1-3", question: "Name a boolean value in standard computer programming.", exampleAnswers: ["True", "False"], hint: "There are only 2 states." },
  { id: "q137", category: "1-3", question: "Name a major political party in the United States.", exampleAnswers: ["Democratic", "Republican"], hint: "There are 2 main ones in the two-party system." },
  { id: "q138", category: "1-3", question: "Name a particle found inside the nucleus of an atom.", exampleAnswers: ["Proton", "Neutron"], hint: "There are 2 main nucleons (ignoring quarks)." },
  { id: "q139", category: "1-3", question: "Name a sex chromosome in humans.", exampleAnswers: ["X", "Y"], hint: "There are 2." },
  { id: "q140", category: "1-3", question: "Name a state of a standard light switch.", exampleAnswers: ["On", "Off"], hint: "There are 2 binary states." },

  // ─────────────────────────────────────────────
  // 40+ answers (Round 3 - Wide Open)
  // ─────────────────────────────────────────────
  { id: "q141", category: "40+", question: "Name a recognized world currency.", exampleAnswers: ["US Dollar", "Euro", "Yen", "Pound Sterling", "Rupee", "Peso", "Franc", "Dinar", "Yuan", "Ruble"], hint: "Money used to buy things internationally." },
  { id: "q142", category: "40+", question: "Name a muscle in the human body.", exampleAnswers: ["Bicep", "Tricep", "Gluteus Maximus", "Deltoid", "Hamstring", "Quadricep", "Pectoral", "Latissimus Dorsi", "Gastrocnemius", "Abdominals"], hint: "The things you flex at the gym." },
  { id: "q143", category: "40+", question: "Name a commonly used spice or herb.", exampleAnswers: ["Pepper", "Cinnamon", "Basil", "Oregano", "Cumin", "Paprika", "Thyme", "Rosemary", "Nutmeg", "Coriander"], hint: "Stuff you add to food for flavor." },
  { id: "q144", category: "40+", question: "Name a species of reptile.", exampleAnswers: ["Snake", "Turtle", "Crocodile", "Alligator", "Lizard", "Chameleon", "Iguana", "Gecko", "Komodo Dragon", "Tortoise"], hint: "Cold-blooded, scaly animals." },
  { id: "q145", category: "40+", question: "Name a globally recognized fast-food chain.", exampleAnswers: ["McDonald's", "Burger King", "KFC", "Subway", "Wendy's", "Taco Bell", "Domino's", "Pizza Hut", "Starbucks", "Popeyes"], hint: "Places with drive-thrus and quick meals." },
  { id: "q146", category: "40+", question: "Name a popular card game.", exampleAnswers: ["Poker", "Blackjack", "Uno", "Solitaire", "Hearts", "Spades", "Go Fish", "Crazy Eights", "Rummy", "Bridge"], hint: "Games played with a deck of cards." },
  { id: "q147", category: "40+", question: "Name a genre of movies.", exampleAnswers: ["Action", "Comedy", "Horror", "Romance", "Sci-Fi", "Thriller", "Drama", "Documentary", "Fantasy", "Mystery"], hint: "Categories you browse on streaming apps." },
  { id: "q148", category: "40+", question: "Name an item typically found in a bathroom.", exampleAnswers: ["Toothbrush", "Toilet", "Sink", "Mirror", "Shower", "Bathtub", "Soap", "Towel", "Shampoo", "Toilet Paper"], hint: "Things you use to get clean." },
  { id: "q149", category: "40+", question: "Name a major global airline.", exampleAnswers: ["Delta", "American Airlines", "United", "Emirates", "Lufthansa", "British Airways", "Air France", "Qantas", "Singapore Airlines", "Qatar Airways"], hint: "Companies that fly commercial planes." },
  { id: "q150", category: "40+", question: "Name a recognized university in the world.", exampleAnswers: ["Oxford", "Cambridge", "Harvard", "MIT", "Stanford", "Tokyo University", "University of Toronto", "Sorbonne", "Yale", "Princeton"], hint: "Places of higher education." },

  // ─────────────────────────────────────────────
  // 20-40 answers (Slightly narrower)
  // ─────────────────────────────────────────────
  { id: "q151", category: "20-40", question: "Name a team in Major League Baseball (MLB).", exampleAnswers: ["Yankees", "Dodgers", "Red Sox", "Cubs", "Astros", "Braves", "Mets", "Phillies", "Cardinals", "Giants"], hint: "There are 30 of these." },
  { id: "q152", category: "20-40", question: "Name a day in the month of February (in a leap year).", exampleAnswers: ["1st", "14th", "28th", "29th", "10th", "15th", "22nd"], hint: "Numbers 1 through 29." },
  { id: "q153", category: "20-40", question: "Name a letter in the Arabic alphabet.", exampleAnswers: ["Alif", "Baa", "Taa", "Thaa", "Jeem", "Haa", "Khaa", "Daal", "Ra", "Seen"], hint: "There are 28 basic letters." },
  { id: "q154", category: "20-40", question: "Name a film produced by Pixar Animation Studios.", exampleAnswers: ["Toy Story", "Finding Nemo", "Up", "Inside Out", "The Incredibles", "Monsters, Inc.", "Cars", "Ratatouille", "Coco", "WALL-E"], hint: "There are 28 feature films currently." },
  { id: "q155", category: "20-40", question: "Name an official James Bond movie.", exampleAnswers: ["Skyfall", "Casino Royale", "Goldfinger", "Dr. No", "Spectre", "GoldenEye", "No Time to Die", "Thunderball"], hint: "There are 25 official EON films." },
  { id: "q156", category: "20-40", question: "Name a country in the Middle East.", exampleAnswers: ["Saudi Arabia", "Iran", "Iraq", "Israel", "Syria", "Jordan", "Lebanon", "Yemen", "Oman", "UAE"], hint: "There are around 18-20 countries here." },
  { id: "q157", category: "20-40", question: "Name an element in the transition metals block.", exampleAnswers: ["Iron", "Copper", "Gold", "Silver", "Zinc", "Nickel", "Platinum", "Titanium", "Cobalt", "Mercury"], hint: "The large middle block of the periodic table." },
  { id: "q158", category: "20-40", question: "Name a book of the Old Testament.", exampleAnswers: ["Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Psalms", "Proverbs", "Isaiah", "Jeremiah", "Daniel"], hint: "There are 39 books in the Protestant version." },
  { id: "q159", category: "20-40", question: "Name a letter in the Russian Cyrillic alphabet.", exampleAnswers: ["A", "Б (Be)", "В (Ve)", "Г (Ge)", "Д (De)", "Е (Ye)", "Ж (Zhe)", "З (Ze)", "И (I)", "П (Pe)"], hint: "There are 33 letters." },
  { id: "q160", category: "20-40", question: "Name a US state that joined the Union after 1850.", exampleAnswers: ["California", "Oregon", "Nevada", "Colorado", "Washington", "Montana", "Alaska", "Hawaii", "Arizona", "New Mexico"], hint: "There are exactly 20." },

  // ─────────────────────────────────────────────
  // 10-20 answers (The squeeze begins)
  // ─────────────────────────────────────────────
  { id: "q161", category: "10-20", question: "Name a traditional birthstone.", exampleAnswers: ["Garnet", "Amethyst", "Aquamarine", "Diamond", "Emerald", "Pearl", "Ruby", "Peridot", "Sapphire", "Opal", "Topaz", "Turquoise"], hint: "There are 12 primary traditional ones." },
  { id: "q162", category: "10-20", question: "Name a US city with a population over 1 million.", exampleAnswers: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "Austin"], hint: "There are only about 10 of these depending on the census." },
  { id: "q163", category: "10-20", question: "Name a digit in the hexadecimal numeral system.", exampleAnswers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"], hint: "There are 16 of them." },
  { id: "q164", category: "10-20", question: "Name a basic CSS display property.", exampleAnswers: ["block", "inline", "inline-block", "flex", "grid", "none", "table", "inline-flex", "contents", "list-item"], hint: "How elements are laid out on a webpage." },
  { id: "q165", category: "10-20", question: "Name an actor who has played Batman in a live-action theatrical film.", exampleAnswers: ["Adam West", "Michael Keaton", "Val Kilmer", "George Clooney", "Christian Bale", "Ben Affleck", "Robert Pattinson"], hint: "There are less than 10 main ones." },
  { id: "q166", category: "10-20", question: "Name an element in the Lanthanide series.", exampleAnswers: ["Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium"], hint: "There are 15 of these rare earth metals." },
  { id: "q167", category: "10-20", question: "Name a track on Michael Jackson's 'Thriller' album.", exampleAnswers: ["Wanna Be Startin' Somethin'", "Baby Be Mine", "The Girl Is Mine", "Thriller", "Beat It", "Billie Jean", "Human Nature", "P.Y.T.", "The Lady in My Life"], hint: "There are exactly 9 tracks." },
  { id: "q168", category: "10-20", question: "Name a club currently in the Spanish La Liga.", exampleAnswers: ["Real Madrid", "Barcelona", "Atletico Madrid", "Sevilla", "Valencia", "Athletic Bilbao", "Real Sociedad", "Betis"], hint: "There are 20 teams in the top flight." },
  { id: "q169", category: "10-20", question: "Name a US constitutional amendment in the Bill of Rights.", exampleAnswers: ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"], hint: "There are 10 of these." },
  { id: "q170", category: "10-20", question: "Name a prime number between 1 and 50.", exampleAnswers: ["2", "3", "5", "7", "11", "13", "17", "19", "23", "29", "31", "37", "41", "43", "47"], hint: "There are 15 of them." },

  // ─────────────────────────────────────────────
  // 5-10 answers (Getting highly specific)
  // ─────────────────────────────────────────────
  { id: "q171", category: "5-10", question: "Name a member of the G7 (Group of Seven).", exampleAnswers: ["Canada", "France", "Germany", "Italy", "Japan", "United Kingdom", "United States"], hint: "There are 7 member nations." },
  { id: "q172", category: "5-10", question: "Name a standard SI base unit.", exampleAnswers: ["Meter", "Kilogram", "Second", "Ampere", "Kelvin", "Mole", "Candela"], hint: "There are 7 fundamental units in physics." },
  { id: "q173", category: "5-10", question: "Name a color on the national flag of South Africa.", exampleAnswers: ["Red", "Green", "Blue", "Yellow", "White", "Black"], hint: "There are 6 distinct colors." },
  { id: "q174", category: "5-10", question: "Name a piece in a standard game of Monopoly (Classic Tokens).", exampleAnswers: ["Top Hat", "Thimble", "Iron", "Shoe", "Battleship", "Dog (Scottie)", "Wheelbarrow", "Car"], hint: "The classic 8 metal tokens." },
  { id: "q175", category: "5-10", question: "Name a film in Peter Jackson's Middle-earth saga.", exampleAnswers: ["The Fellowship of the Ring", "The Two Towers", "The Return of the King", "An Unexpected Journey", "The Desolation of Smaug", "The Battle of the Five Armies"], hint: "There are 6 movies (3 LOTR, 3 Hobbit)." },
  { id: "q176", category: "5-10", question: "Name a standard phase of mitosis.", exampleAnswers: ["Prophase", "Prometaphase", "Metaphase", "Anaphase", "Telophase"], hint: "There are 5 main stages of cell division." },
  { id: "q177", category: "5-10", question: "Name a tier in standard competitive video game ranking systems.", exampleAnswers: ["Bronze", "Silver", "Gold", "Platinum", "Diamond", "Master", "Grandmaster", "Challenger"], hint: "Usually 6-8 precious metals/stones." },
  { id: "q178", category: "5-10", question: "Name an Ivy League university.", exampleAnswers: ["Harvard", "Yale", "Princeton", "Columbia", "Brown", "Dartmouth", "Cornell", "University of Pennsylvania"], hint: "There are exactly 8." },
  { id: "q179", category: "5-10", question: "Name a recognized dwarf planet in our solar system.", exampleAnswers: ["Pluto", "Ceres", "Eris", "Haumea", "Makemake"], hint: "There are 5 officially recognized by the IAU." },
  { id: "q180", category: "5-10", question: "Name a playable character class in Diablo II.", exampleAnswers: ["Amazon", "Necromancer", "Barbarian", "Sorceress", "Paladin", "Druid", "Assassin"], hint: "There are 7 classes with the expansion." },

  // ─────────────────────────────────────────────
  // 1-5 answers (Finals territory)
  // ─────────────────────────────────────────────
  { id: "q181", category: "1-5", question: "Name a layer of the Earth.", exampleAnswers: ["Crust", "Mantle", "Outer Core", "Inner Core"], hint: "There are 4 primary layers." },
  { id: "q182", category: "1-5", question: "Name an ocean that borders the United States.", exampleAnswers: ["Pacific", "Atlantic", "Arctic"], hint: "There are 3." },
  { id: "q183", category: "1-5", question: "Name a member of the rock band Queen.", exampleAnswers: ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"], hint: "There are 4 original members." },
  { id: "q184", category: "1-5", question: "Name a standard string on a violin.", exampleAnswers: ["G", "D", "A", "E"], hint: "There are 4 strings." },
  { id: "q185", category: "1-5", question: "Name a founder of Hogwarts.", exampleAnswers: ["Godric Gryffindor", "Helga Hufflepuff", "Rowena Ravenclaw", "Salazar Slytherin"], hint: "There are 4 founders." },
  { id: "q186", category: "1-5", question: "Name a terrestrial (rocky) planet in our solar system.", exampleAnswers: ["Mercury", "Venus", "Earth", "Mars"], hint: "There are 4 inner planets." },
  { id: "q187", category: "1-5", question: "Name a major championship in men's professional golf.", exampleAnswers: ["Masters", "PGA Championship", "US Open", "The Open Championship"], hint: "There are 4 majors." },
  { id: "q188", category: "1-5", question: "Name a color of a Teletubby.", exampleAnswers: ["Purple", "Green", "Yellow", "Red"], hint: "Tinky Winky, Dipsy, Laa-Laa, Po." },
  { id: "q189", category: "1-5", question: "Name a type of triangle based on side length.", exampleAnswers: ["Equilateral", "Isosceles", "Scalene"], hint: "There are 3 main types." },
  { id: "q190", category: "1-5", question: "Name a month of the year with exactly 30 days.", exampleAnswers: ["April", "June", "September", "November"], hint: "There are 4 of them." },

  // ─────────────────────────────────────────────
  // 1-3 answers (Absolute sudden death)
  // ─────────────────────────────────────────────
  { id: "q191", category: "1-3", question: "Name a digit in the binary numeral system.", exampleAnswers: ["0", "1"], hint: "There are only 2." },
  { id: "q192", category: "1-3", question: "Name a possible result of a standard chess game.", exampleAnswers: ["Win", "Loss", "Draw"], hint: "There are 3 main outcomes." },
  { id: "q193", category: "1-3", question: "Name a pole on a standard battery.", exampleAnswers: ["Positive", "Negative"], hint: "There are 2 sides." },
  { id: "q194", category: "1-3", question: "Name a hemisphere of the Earth divided by the Equator.", exampleAnswers: ["Northern", "Southern"], hint: "There are 2." },
  { id: "q195", category: "1-3", question: "Name an outcome option in a game of Rock, Paper, Scissors.", exampleAnswers: ["Rock", "Paper", "Scissors"], hint: "There are 3 choices." },
  { id: "q196", category: "1-3", question: "Name a side of a standard coin.", exampleAnswers: ["Heads", "Tails"], hint: "There are 2 sides." },
  { id: "q197", category: "1-3", question: "Name a color of a standard pedestrian crossing signal in the US.", exampleAnswers: ["White", "Orange"], hint: "Walk or Don't Walk (2 colors)." },
  { id: "q198", category: "1-3", question: "Name a grammatical gender in standard Spanish.", exampleAnswers: ["Masculine", "Feminine"], hint: "There are 2 primary ones." },
  { id: "q199", category: "1-3", question: "Name a standard mouse click button.", exampleAnswers: ["Left", "Right", "Middle"], hint: "Most mice have 3 primary buttons." },
  { id: "q200", category: "1-3", question: "Name a valid binary response to a Yes/No question.", exampleAnswers: ["Yes", "No"], hint: "It's one or the other (2)." },

  // ─────────────────────────────────────────────
  // 40+ answers (Round 4 - Wide Open)
  // ─────────────────────────────────────────────
  { id: "q201", category: "40+", question: "Name a country located in Europe.", exampleAnswers: ["France", "Germany", "Italy", "Spain", "Poland", "Sweden", "Norway", "Greece", "Portugal", "Belgium"], hint: "There are 44 recognized sovereign states here." },
  { id: "q202", category: "40+", question: "Name a Pokémon from Generation 1 (Kanto).", exampleAnswers: ["Pikachu", "Charizard", "Bulbasaur", "Squirtle", "Jigglypuff", "Gengar", "Mewtwo", "Eevee", "Snorlax", "Dragonite"], hint: "There are 151 original pocket monsters." },
  { id: "q203", category: "40+", question: "Name a recognized video game genre.", exampleAnswers: ["RPG", "FPS", "Platformer", "Battle Royale", "Puzzle", "Fighting", "Racing", "MMO", "Simulation", "Strategy"], hint: "How games are categorized by gameplay." },
  { id: "q204", category: "40+", question: "Name a superhero from Marvel or DC comics.", exampleAnswers: ["Spider-Man", "Batman", "Superman", "Iron Man", "Wonder Woman", "Captain America", "The Flash", "Thor", "Wolverine", "Hulk"], hint: "Characters with secret identities and capes." },
  { id: "q205", category: "40+", question: "Name a body of water (Ocean, Sea, Lake, or River).", exampleAnswers: ["Pacific Ocean", "Mediterranean Sea", "Lake Superior", "Nile River", "Red Sea", "Amazon River", "Indian Ocean", "Caspian Sea"], hint: "Major geographical water formations." },
  { id: "q206", category: "40+", question: "Name a tool used in gardening or farming.", exampleAnswers: ["Shovel", "Rake", "Hoe", "Trowel", "Watering Can", "Wheelbarrow", "Pruning Shears", "Pitchfork", "Tractor"], hint: "Things you use to work the soil or plants." },
  { id: "q207", category: "40+", question: "Name a popular brand of athletic shoes or apparel.", exampleAnswers: ["Nike", "Adidas", "Puma", "Under Armour", "Reebok", "New Balance", "Asics", "Converse", "Vans", "Fila"], hint: "Brands you wear to the gym or court." },
  { id: "q208", category: "40+", question: "Name a popular flavor of ice cream.", exampleAnswers: ["Vanilla", "Chocolate", "Strawberry", "Mint Chocolate Chip", "Cookie Dough", "Rocky Road", "Pistachio", "Butter Pecan"], hint: "Check the freezer aisle." },
  { id: "q209", category: "40+", question: "Name a piece of jewelry or wearable accessory.", exampleAnswers: ["Necklace", "Ring", "Bracelet", "Earrings", "Watch", "Sunglasses", "Belt", "Scarf", "Tie", "Hairband"], hint: "Things you wear to elevate an outfit." },
  { id: "q210", category: "40+", question: "Name a type of transportation vehicle.", exampleAnswers: ["Car", "Bus", "Train", "Airplane", "Bicycle", "Motorcycle", "Helicopter", "Boat", "Subway", "Scooter"], hint: "Machines that move people from A to B." },
  { id: "q211", category: "40+", question: "Name a hobby or recreational activity.", exampleAnswers: ["Reading", "Painting", "Gaming", "Hiking", "Cooking", "Photography", "Knitting", "Dancing", "Fishing", "Cycling"], hint: "Things people do for fun in their free time." },
  { id: "q212", category: "40+", question: "Name a type of natural disaster.", exampleAnswers: ["Earthquake", "Hurricane", "Tornado", "Tsunami", "Volcanic Eruption", "Wildfire", "Flood", "Blizzard", "Drought", "Avalanche"], hint: "Extreme, destructive weather or geological events." },
  { id: "q213", category: "40+", question: "Name a common phobia (fear of...).", exampleAnswers: ["Spiders (Arachnophobia)", "Heights (Acrophobia)", "Enclosed Spaces (Claustrophobia)", "Needles", "Public Speaking", "Snakes", "Darkness", "Flying"], hint: "Things that cause irrational panic." },
  { id: "q214", category: "40+", question: "Name a standard item found on a restaurant table.", exampleAnswers: ["Salt Shaker", "Pepper Shaker", "Napkins", "Forks", "Knives", "Spoons", "Menu", "Ketchup", "Glasses", "Plates"], hint: "Things sitting there before you even order." },
  { id: "q215", category: "40+", question: "Name a subject typically taught in high school.", exampleAnswers: ["Algebra", "Biology", "World History", "Chemistry", "Physical Education", "Geometry", "English Literature", "Physics"], hint: "Classes you had to take to graduate." },
  { id: "q216", category: "40+", question: "Name a wild animal native to Africa.", exampleAnswers: ["Lion", "Elephant", "Giraffe", "Zebra", "Cheetah", "Hippopotamus", "Rhinoceros", "Gorilla", "Hyena", "Meerkat"], hint: "Think of the savanna or a safari." },
  { id: "q217", category: "40+", question: "Name a piece of camping equipment.", exampleAnswers: ["Tent", "Sleeping Bag", "Flashlight", "Camp Stove", "Cooler", "Lantern", "Matches", "Compass", "Multi-tool", "Backpack"], hint: "Gear you pack to survive in the woods." },
  { id: "q218", category: "40+", question: "Name a tool used for cooking or baking.", exampleAnswers: ["Spatula", "Whisk", "Measuring Cup", "Rolling Pin", "Cutting Board", "Ladle", "Tongs", "Colander", "Peeler", "Oven Mitt"], hint: "Utensils found in kitchen drawers." },
  { id: "q219", category: "40+", question: "Name a type of footwear.", exampleAnswers: ["Sneakers", "Boots", "Sandals", "High Heels", "Loafers", "Slippers", "Flip-Flops", "Cleats", "Oxfords", "Crocs"], hint: "Things that go on your feet." },
  { id: "q220", category: "40+", question: "Name a popular social media platform.", exampleAnswers: ["Instagram", "TikTok", "X (Twitter)", "Facebook", "Snapchat", "LinkedIn", "Reddit", "Pinterest", "YouTube", "Discord"], hint: "Apps where people post and scroll." },
  { id: "q221", category: "40+", question: "Name a type of fabric or textile material.", exampleAnswers: ["Cotton", "Silk", "Denim", "Wool", "Polyester", "Leather", "Linen", "Velvet", "Nylon", "Spandex"], hint: "What clothes and furniture are made of." },
  { id: "q222", category: "40+", question: "Name a room or specific area in a typical house.", exampleAnswers: ["Kitchen", "Bedroom", "Bathroom", "Living Room", "Dining Room", "Basement", "Attic", "Garage", "Hallway", "Closet"], hint: "The floorplan of a home." },
  { id: "q223", category: "40+", question: "Name a commonly kept household pet.", exampleAnswers: ["Dog", "Cat", "Goldfish", "Hamster", "Parrot", "Guinea Pig", "Rabbit", "Turtle", "Ferret", "Lizard"], hint: "Animals that live comfortably indoors with humans." },
  { id: "q224", category: "40+", question: "Name a recognized musical tempo or dynamic marking.", exampleAnswers: ["Allegro", "Andante", "Forte", "Piano", "Crescendo", "Presto", "Largo", "Adagio", "Mezzo-forte"], hint: "Italian words used on sheet music." },
  { id: "q225", category: "40+", question: "Name an item of makeup or cosmetics.", exampleAnswers: ["Lipstick", "Mascara", "Foundation", "Eyeliner", "Blush", "Eyeshadow", "Concealer", "Highlighter", "Bronzer", "Lip Gloss"], hint: "Products used in a beauty routine." },

  // ─────────────────────────────────────────────
  // 20-40 answers (Slightly narrower)
  // ─────────────────────────────────────────────
  { id: "q226", category: "20-40", question: "Name a human tooth type or specific human tooth.", exampleAnswers: ["Incisor", "Canine", "Premolar", "Molar", "Wisdom Tooth"], hint: "There are 32 of them in an adult mouth." },
  { id: "q227", category: "20-40", question: "Name a country in North America (including Central America and the Caribbean).", exampleAnswers: ["USA", "Canada", "Mexico", "Cuba", "Jamaica", "Costa Rica", "Panama", "Haiti", "Bahamas"], hint: "There are 23 sovereign nations here." },
  { id: "q228", category: "20-40", question: "Name a recognized constellation in the night sky.", exampleAnswers: ["Orion", "Ursa Major", "Cassiopeia", "Andromeda", "Cygnus", "Lyra", "Scorpius", "Pegasus", "Draco"], hint: "There are 88 modern constellations." },
  { id: "q229", category: "20-40", question: "Name a US state with a coastline on the ocean or Gulf of Mexico.", exampleAnswers: ["California", "Florida", "New York", "Texas", "Hawaii", "Washington", "Oregon", "Maine", "North Carolina", "Louisiana"], hint: "There are exactly 23 of these." },
  { id: "q230", category: "20-40", question: "Name a proteinogenic amino acid found in humans.", exampleAnswers: ["Alanine", "Glycine", "Leucine", "Valine", "Tryptophan", "Tyrosine", "Serine", "Proline", "Glutamine"], hint: "There are 20 standard ones encoded by human DNA." },
  { id: "q231", category: "20-40", question: "Name a book in the New Testament of the Bible.", exampleAnswers: ["Matthew", "Mark", "Luke", "John", "Acts", "Romans", "Revelation", "Corinthians", "Galatians", "Ephesians"], hint: "There are 27 of these." },
  { id: "q232", category: "20-40", question: "Name an official working language of the European Union.", exampleAnswers: ["English", "French", "German", "Spanish", "Italian", "Dutch", "Polish", "Greek", "Swedish", "Portuguese"], hint: "There are 24 official languages." },
  { id: "q233", category: "20-40", question: "Name a team currently in the NHL.", exampleAnswers: ["Maple Leafs", "Bruins", "Rangers", "Canadiens", "Avalanche", "Oilers", "Penguins", "Blackhawks", "Golden Knights"], hint: "There are 32 franchises." },
  { id: "q234", category: "20-40", question: "Name a playable character class or race in standard D&D 5e.", exampleAnswers: ["Fighter", "Wizard", "Rogue", "Cleric", "Elf", "Dwarf", "Human", "Halfling", "Tiefling", "Dragonborn"], hint: "There are around 21 core options in the Player's Handbook." },
  { id: "q235", category: "20-40", question: "Name a standard whole-hour time zone offset from UTC.", exampleAnswers: ["UTC-5", "UTC+1", "UTC+8", "UTC-8", "UTC+9", "UTC+0", "UTC-4", "UTC+10"], hint: "There are 24 standard ones." },
  { id: "q236", category: "20-40", question: "Name a letter in the English alphabet from N to Z.", exampleAnswers: ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], hint: "The second half of the alphabet (13 letters)." },
  { id: "q237", category: "20-40", question: "Name a US state that starts with the letter M, N, or O.", exampleAnswers: ["Michigan", "Montana", "New York", "Nevada", "Ohio", "Oregon", "Maryland", "New Jersey", "Oklahoma", "Nebraska"], hint: "There are 19 states in this group." },
  { id: "q238", category: "20-40", question: "Name a country in Europe that does NOT use the Euro as its primary currency.", exampleAnswers: ["United Kingdom", "Switzerland", "Sweden", "Norway", "Denmark", "Poland", "Hungary", "Czech Republic", "Romania"], hint: "Around 24 European nations fit this." },
  { id: "q239", category: "20-40", question: "Name an official track/cup in Mario Kart 8 Deluxe (Base Game).", exampleAnswers: ["Mario Circuit", "Rainbow Road", "Toad Harbor", "Mount Wario", "Cloudtop Cruise", "Electrodrome", "Bowser's Castle"], hint: "There are 48 base tracks." },
  { id: "q240", category: "20-40", question: "Name a team in Major League Soccer (MLS).", exampleAnswers: ["LA Galaxy", "Seattle Sounders", "Atlanta United", "Inter Miami", "Toronto FC", "Portland Timbers", "NYCFC"], hint: "There are 29 clubs." },
  { id: "q241", category: "20-40", question: "Name a structural bone in the human hand or wrist.", exampleAnswers: ["Scaphoid", "Lunate", "Trapezium", "Metacarpal", "Proximal Phalanx", "Distal Phalanx", "Capitate"], hint: "There are 27 bones in each hand." },
  { id: "q242", category: "20-40", question: "Name a color found on the standard HTML/CSS color wheel base keywords.", exampleAnswers: ["Red", "Blue", "Green", "Yellow", "Cyan", "Magenta", "Black", "White", "Gray"], hint: "There are 16 core named colors." },
  { id: "q243", category: "20-40", question: "Name a standard key located on the 'home row' of a QWERTY keyboard.", exampleAnswers: ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Semicolon", "Apostrophe"], hint: "Where your fingers rest (11 keys)." },
  { id: "q244", category: "20-40", question: "Name an Academy Award (Oscar) category.", exampleAnswers: ["Best Picture", "Best Director", "Best Actor", "Best Actress", "Best Original Score", "Best Cinematography", "Best Editing"], hint: "There are 23 competitive categories." },
  { id: "q245", category: "20-40", question: "Name a US President whose face is featured on current US paper money or coins.", exampleAnswers: ["Washington", "Lincoln", "Jefferson", "Roosevelt", "Kennedy", "Jackson", "Grant"], hint: "There are about 15 individuals featured." },

  // ─────────────────────────────────────────────
  // 10-20 answers (The squeeze begins)
  // ─────────────────────────────────────────────
  { id: "q246", category: "10-20", question: "Name a traditional anniversary gift material (Years 1-15).", exampleAnswers: ["Paper", "Cotton", "Leather", "Wood", "Iron", "Copper", "Bronze", "Pottery", "Tin", "Steel", "Silk", "Lace", "Ivory", "Crystal"], hint: "There are 15 of these." },
  { id: "q247", category: "10-20", question: "Name a face card in a standard deck of playing cards.", exampleAnswers: ["King of Hearts", "Queen of Spades", "Jack of Diamonds", "King of Clubs", "Queen of Diamonds"], hint: "There are exactly 12 of them." },
  { id: "q248", category: "10-20", question: "Name a US state that starts with a vowel.", exampleAnswers: ["Alabama", "Alaska", "Arizona", "Arkansas", "Idaho", "Illinois", "Indiana", "Iowa", "Ohio", "Oklahoma", "Oregon", "Utah"], hint: "There are exactly 12." },
  { id: "q249", category: "10-20", question: "Name a prime number between 1 and 40.", exampleAnswers: ["2", "3", "5", "7", "11", "13", "17", "19", "23", "29", "31", "37"], hint: "There are 12 of them." },
  { id: "q250", category: "10-20", question: "Name a type of club found in a standard golf bag.", exampleAnswers: ["Driver", "Putter", "Sand Wedge", "Pitching Wedge", "Iron", "Wood", "Hybrid"], hint: "You're legally allowed a maximum of 14." },
  { id: "q251", category: "10-20", question: "Name a line on the London Underground network.", exampleAnswers: ["Bakerloo", "Central", "Circle", "District", "Jubilee", "Metropolitan", "Northern", "Piccadilly", "Victoria", "Waterloo & City"], hint: "There are 11 official lines." },
  { id: "q252", category: "10-20", question: "Name a US state that shares a land border with Canada.", exampleAnswers: ["Washington", "Idaho", "Montana", "North Dakota", "Minnesota", "Michigan", "New York", "Vermont", "Maine", "Alaska"], hint: "There are 13 of these." },
  { id: "q253", category: "10-20", question: "Name a physical button, trigger, or stick on a standard PS5 DualSense controller.", exampleAnswers: ["Cross", "Circle", "Square", "Triangle", "L1", "L2", "R1", "R2", "D-Pad Up", "Options", "Share", "Touchpad"], hint: "There are around 15 primary inputs." },
  { id: "q254", category: "10-20", question: "Name a major structural bone in the human face (Viscerocranium).", exampleAnswers: ["Mandible", "Maxilla", "Zygomatic", "Nasal", "Lacrimal", "Palatine", "Vomer", "Inferior Nasal Concha"], hint: "There are 14 of these." },
  { id: "q255", category: "10-20", question: "Name a sign of the Eastern (Chinese) Zodiac.", exampleAnswers: ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"], hint: "There are 12." },
  { id: "q256", category: "10-20", question: "Name a specific rank (number/letter) in a standard deck of cards.", exampleAnswers: ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"], hint: "There are 13 possible ranks." },
  { id: "q257", category: "10-20", question: "Name an amendment in the US Bill of Rights.", exampleAnswers: ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth"], hint: "The first 10 amendments." },
  { id: "q258", category: "10-20", question: "Name a US city with a population over 1 million people.", exampleAnswers: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas"], hint: "There are exactly 9." },
  { id: "q259", category: "10-20", question: "Name a valid digit in the hexadecimal numeral system.", exampleAnswers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"], hint: "Base-16 has 16 digits." },
  { id: "q260", category: "10-20", question: "Name a month of the year.", exampleAnswers: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], hint: "There are 12." },

  // ─────────────────────────────────────────────
  // 5-10 answers (Getting highly specific)
  // ─────────────────────────────────────────────
  { id: "q261", category: "5-10", question: "Name a color of the rainbow.", exampleAnswers: ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"], hint: "ROYGBIV (7 colors)." },
  { id: "q262", category: "5-10", question: "Name a day of the week.", exampleAnswers: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], hint: "There are 7." },
  { id: "q263", category: "5-10", question: "Name a piece in a standard game of chess.", exampleAnswers: ["King", "Queen", "Bishop", "Knight", "Rook", "Pawn"], hint: "There are 6 unique pieces." },
  { id: "q264", category: "5-10", question: "Name one of the Seven Deadly Sins.", exampleAnswers: ["Pride", "Greed", "Lust", "Envy", "Gluttony", "Wrath", "Sloth"], hint: "Exactly 7." },
  { id: "q265", category: "5-10", question: "Name one of the Great Lakes of North America.", exampleAnswers: ["Huron", "Ontario", "Michigan", "Erie", "Superior"], hint: "HOMES (5 lakes)." },
  { id: "q266", category: "5-10", question: "Name a Noble Gas from the periodic table.", exampleAnswers: ["Helium", "Neon", "Argon", "Krypton", "Xenon", "Radon", "Oganesson"], hint: "Group 18 has 7 elements." },
  { id: "q267", category: "5-10", question: "Name a continent on Earth.", exampleAnswers: ["Africa", "Antarctica", "Asia", "Europe", "North America", "South America", "Australia"], hint: "There are 7." },
  { id: "q268", category: "5-10", question: "Name a major recognized phase of the moon.", exampleAnswers: ["New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous", "Full Moon", "Waning Gibbous", "Third Quarter", "Waning Crescent"], hint: "There are 8 distinct phases." },
  { id: "q269", category: "5-10", question: "Name a standard starting position in indoor volleyball.", exampleAnswers: ["Setter", "Outside Hitter", "Opposite Hitter", "Middle Blocker", "Libero", "Defensive Specialist"], hint: "There are 6 players on the court per team." },
  { id: "q270", category: "5-10", question: "Name a base unit in the International System of Units (SI).", exampleAnswers: ["Meter", "Kilogram", "Second", "Ampere", "Kelvin", "Mole", "Candela"], hint: "There are 7 fundamental physical units." },
  { id: "q271", category: "5-10", question: "Name a primary layer of Earth's atmosphere.", exampleAnswers: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere", "Exosphere"], hint: "There are 5 main layers." },
  { id: "q272", category: "5-10", question: "Name a 'flavor' of quark in particle physics.", exampleAnswers: ["Up", "Down", "Charm", "Strange", "Top", "Bottom"], hint: "There are 6." },
  { id: "q273", category: "5-10", question: "Name a main color of the original Mighty Morphin Power Rangers.", exampleAnswers: ["Red", "Blue", "Black", "Yellow", "Pink", "Green", "White"], hint: "There were 6 core colors (plus White later)." },
  { id: "q274", category: "5-10", question: "Name a standard face button on an Xbox or PlayStation controller.", exampleAnswers: ["A", "B", "X", "Y", "Cross", "Circle", "Square", "Triangle"], hint: "There are 8 main ones across both." },
  { id: "q275", category: "5-10", question: "Name a standard open string on a standard 6-string acoustic guitar.", exampleAnswers: ["E", "A", "D", "G", "B"], hint: "There are 6 strings, but only 5 unique notes." },

  // ─────────────────────────────────────────────
  // 1-5 answers (Finals territory)
  // ─────────────────────────────────────────────
  { id: "q276", category: "1-5", question: "Name a corner space on a standard Monopoly board.", exampleAnswers: ["Go", "Jail", "Free Parking", "Go to Jail"], hint: "There are exactly 4." },
  { id: "q277", category: "1-5", question: "Name a canonical chamber of the human heart.", exampleAnswers: ["Left Atrium", "Right Atrium", "Left Ventricle", "Right Ventricle"], hint: "There are 4." },
  { id: "q278", category: "1-5", question: "Name a distinct stage of a butterfly's life cycle.", exampleAnswers: ["Egg", "Larva (Caterpillar)", "Pupa (Chrysalis)", "Adult (Butterfly)"], hint: "There are 4." },
  { id: "q279", category: "1-5", question: "Name a fundamental force of nature.", exampleAnswers: ["Gravity", "Electromagnetism", "Strong Nuclear Force", "Weak Nuclear Force"], hint: "There are 4." },
  { id: "q280", category: "1-5", question: "Name an open string on a standard 4-string bass guitar.", exampleAnswers: ["E", "A", "D", "G"], hint: "There are exactly 4." },
  { id: "q281", category: "1-5", question: "Name a permanent member nation of the UN Security Council.", exampleAnswers: ["China", "France", "Russia", "United Kingdom", "United States"], hint: "The 'P5' (5 nations)." },
  { id: "q282", category: "1-5", question: "Name a standard US coin denomination currently minted that is less than 50 cents.", exampleAnswers: ["Penny", "Nickel", "Dime", "Quarter"], hint: "There are 4." },
  { id: "q283", category: "1-5", question: "Name a base on a standard baseball diamond.", exampleAnswers: ["First Base", "Second Base", "Third Base", "Home Plate"], hint: "There are 4." },
  { id: "q284", category: "1-5", question: "Name a main titular character in the sitcom Seinfeld.", exampleAnswers: ["Jerry", "George", "Elaine", "Kramer"], hint: "There are 4." },
  { id: "q285", category: "1-5", question: "Name an original member of Marvel's Fantastic Four.", exampleAnswers: ["Mr. Fantastic (Reed Richards)", "Invisible Woman (Sue Storm)", "Human Torch (Johnny Storm)", "The Thing (Ben Grimm)"], hint: "There are exactly 4." },

  // ─────────────────────────────────────────────
  // 1-3 answers (Absolute sudden death)
  // ─────────────────────────────────────────────
  { id: "q286", category: "1-3", question: "Name a color of the pieces in a standard game of chess.", exampleAnswers: ["White", "Black"], hint: "There are 2." },
  { id: "q287", category: "1-3", question: "Name a type of electrical current.", exampleAnswers: ["Alternating Current (AC)", "Direct Current (DC)"], hint: "There are 2." },
  { id: "q288", category: "1-3", question: "Name a setting on a standard, non-dimming light switch.", exampleAnswers: ["On", "Off"], hint: "There are 2." },
  { id: "q289", category: "1-3", question: "Name a standard axis in a 2D coordinate plane.", exampleAnswers: ["X", "Y"], hint: "There are 2." },
  { id: "q290", category: "1-3", question: "Name a direction you can scroll using a standard computer mouse wheel.", exampleAnswers: ["Up", "Down"], hint: "There are 2 standard directions." }
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
