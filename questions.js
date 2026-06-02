// Questions categorized by number of valid answers
// Categories: "40+", "20-40", "10-20", "5-10", "1-5", "1-3"
// exampleAnswers help the AI judge what's acceptable

const questions = [

  // ═══════════════════════════════════════════════
  // 40+ answers — Wide open openers
  // ═══════════════════════════════════════════════

  { id: "q1",   category: "40+", question: "Name a sovereign country in the world.", exampleAnswers: ["France", "Germany", "Japan", "Brazil", "India", "Bangladesh", "China", "Canada", "Australia", "Mexico"], hint: "There are about 195 of these." },
  { id: "q2",   category: "40+", question: "Name a recognized music genre.", exampleAnswers: ["Pop", "Rock", "Jazz", "Classical", "Hip-hop", "Blues", "R&B", "Reggae", "Electronic", "Folk"], hint: "Any recognized style of music." },
  { id: "q3",   category: "40+", question: "Name an item of clothing.", exampleAnswers: ["Shirt", "Pants", "Socks", "Hat", "Jacket", "Skirt", "Dress", "Sweater", "Scarf", "Sandals"], hint: "Anything you wear on your body." },
  { id: "q4",   category: "40+", question: "Name a fruit.", exampleAnswers: ["Apple", "Banana", "Mango", "Orange", "Strawberry", "Grape", "Pineapple", "Watermelon", "Lychee", "Guava"], hint: "Botanical or culinary fruits are fine." },
  { id: "q5",   category: "40+", question: "Name a capital city.", exampleAnswers: ["London", "Tokyo", "Paris", "Dhaka", "Berlin", "Beijing", "Ottawa", "Rome", "Madrid", "Seoul"], hint: "The seat of government for a country." },
  { id: "q6",   category: "40+", question: "Name a species of mammal.", exampleAnswers: ["Dog", "Cat", "Lion", "Elephant", "Whale", "Dolphin", "Tiger", "Cow", "Bear", "Deer"], hint: "Warm-blooded, fur-bearing animals." },
  { id: "q7",   category: "40+", question: "Name a brand of automobile.", exampleAnswers: ["Toyota", "Honda", "BMW", "Mercedes", "Audi", "Tesla", "Nissan", "Volkswagen", "Hyundai", "Ford"], hint: "Companies that manufacture cars." },
  { id: "q8",   category: "40+", question: "Name a species of bird.", exampleAnswers: ["Eagle", "Sparrow", "Pigeon", "Parrot", "Owl", "Hawk", "Flamingo", "Swan", "Crow", "Kingfisher"], hint: "Feathered, winged animals." },
  { id: "q9",   category: "40+", question: "Name a city located in Asia.", exampleAnswers: ["Tokyo", "Seoul", "Beijing", "Bangkok", "Mumbai", "Jakarta", "Manila", "Dhaka", "Tehran", "Dubai"], hint: "Any city on the Asian continent." },
  { id: "q10",  category: "40+", question: "Name a type of tree.", exampleAnswers: ["Oak", "Pine", "Mango", "Bamboo", "Coconut", "Banyan", "Cedar", "Willow", "Jackfruit", "Palm"], hint: "Think forests, gardens, roadsides." },
  { id: "q11",  category: "40+", question: "Name a major river in the world.", exampleAnswers: ["Nile", "Amazon", "Yangtze", "Ganges", "Padma", "Meghna", "Thames", "Danube", "Volga", "Mekong"], hint: "Any flowing body of water on a map." },
  { id: "q12",  category: "40+", question: "Name a common household appliance.", exampleAnswers: ["Refrigerator", "Microwave", "Fan", "Washing Machine", "Iron", "Blender", "Television", "Rice Cooker", "Toaster", "Vacuum"], hint: "Machines you use around the house." },
  { id: "q13",  category: "40+", question: "Name a musical instrument.", exampleAnswers: ["Piano", "Guitar", "Violin", "Drums", "Flute", "Trumpet", "Tabla", "Sitar", "Saxophone", "Harmonium"], hint: "Things used to make music." },
  { id: "q14",  category: "40+", question: "Name a spoken language.", exampleAnswers: ["English", "Bengali", "Spanish", "Mandarin", "Hindi", "Arabic", "French", "Russian", "Portuguese", "German"], hint: "Currently spoken human languages." },
  { id: "q15",  category: "40+", question: "Name a type of flower.", exampleAnswers: ["Rose", "Tulip", "Sunflower", "Lily", "Orchid", "Marigold", "Lotus", "Daisy", "Jasmine", "Hibiscus"], hint: "Flowering plants." },
  { id: "q16",  category: "40+", question: "Name a recognized sport.", exampleAnswers: ["Cricket", "Football", "Basketball", "Tennis", "Hockey", "Swimming", "Golf", "Rugby", "Volleyball", "Badminton"], hint: "Athletic competitions." },
  { id: "q17",  category: "40+", question: "Name a species of fish.", exampleAnswers: ["Salmon", "Tuna", "Hilsa", "Catfish", "Goldfish", "Clownfish", "Trout", "Cod", "Rohu", "Tilapia"], hint: "Aquatic, gill-bearing animals." },
  { id: "q18",  category: "40+", question: "Name a recognized breed of dog.", exampleAnswers: ["Labrador", "German Shepherd", "Poodle", "Bulldog", "Beagle", "Golden Retriever", "Pug", "Rottweiler", "Husky", "Dalmatian"], hint: "There are hundreds of recognized breeds." },
  { id: "q19",  category: "40+", question: "Name a type of vegetable.", exampleAnswers: ["Carrot", "Broccoli", "Potato", "Tomato", "Onion", "Garlic", "Spinach", "Cauliflower", "Eggplant", "Bitter Gourd"], hint: "Things you cook and eat." },
  { id: "q20",  category: "40+", question: "Name a recognized profession or job.", exampleAnswers: ["Doctor", "Teacher", "Engineer", "Nurse", "Chef", "Lawyer", "Accountant", "Farmer", "Pilot", "Police Officer"], hint: "Ways people make a living." },
  { id: "q21",  category: "40+", question: "Name a species of insect.", exampleAnswers: ["Ant", "Bee", "Mosquito", "Butterfly", "Grasshopper", "Cockroach", "Dragonfly", "Beetle", "Firefly", "Termite"], hint: "Six-legged creatures." },
  { id: "q22",  category: "40+", question: "Name a popular social media platform.", exampleAnswers: ["Facebook", "Instagram", "TikTok", "YouTube", "X (Twitter)", "Snapchat", "LinkedIn", "Reddit", "Pinterest", "Discord"], hint: "Apps where people post and scroll." },
  { id: "q23",  category: "40+", question: "Name a type of transportation vehicle.", exampleAnswers: ["Car", "Bus", "Train", "Airplane", "Bicycle", "Rickshaw", "Motorcycle", "Boat", "Subway", "Helicopter"], hint: "Machines that move people." },
  { id: "q24",  category: "40+", question: "Name a country located in Europe.", exampleAnswers: ["France", "Germany", "Italy", "Spain", "Poland", "Greece", "Portugal", "Sweden", "Netherlands", "Switzerland"], hint: "There are 44 recognized sovereign states here." },
  { id: "q25",  category: "40+", question: "Name a country in Asia.", exampleAnswers: ["China", "India", "Japan", "Bangladesh", "Pakistan", "Indonesia", "Vietnam", "Thailand", "Malaysia", "South Korea"], hint: "There are 48 recognized countries here." },
  { id: "q26",  category: "40+", question: "Name a country in Africa.", exampleAnswers: ["Egypt", "Nigeria", "South Africa", "Kenya", "Ethiopia", "Morocco", "Ghana", "Uganda", "Algeria", "Tanzania"], hint: "There are 54 sovereign nations here." },
  { id: "q27",  category: "40+", question: "Name a commonly used spice or herb.", exampleAnswers: ["Pepper", "Turmeric", "Cumin", "Coriander", "Cinnamon", "Cardamom", "Ginger", "Paprika", "Basil", "Chili"], hint: "Stuff you add to food for flavor." },
  { id: "q28",  category: "40+", question: "Name a genre of movies.", exampleAnswers: ["Action", "Comedy", "Horror", "Romance", "Sci-Fi", "Thriller", "Drama", "Documentary", "Fantasy", "Mystery"], hint: "Categories you browse on streaming apps." },
  { id: "q29",  category: "40+", question: "Name a globally recognized fast-food chain.", exampleAnswers: ["McDonald's", "Burger King", "KFC", "Subway", "Pizza Hut", "Domino's", "Popeyes", "Wendy's", "Chick-fil-A", "Taco Bell"], hint: "Places with drive-thrus and quick meals." },
  { id: "q30",  category: "40+", question: "Name a type of natural disaster.", exampleAnswers: ["Earthquake", "Flood", "Cyclone", "Tornado", "Tsunami", "Volcanic Eruption", "Wildfire", "Drought", "Landslide", "Blizzard"], hint: "Extreme destructive events from nature." },
  { id: "q31",  category: "40+", question: "Name a wild animal native to the Indian subcontinent.", exampleAnswers: ["Bengal Tiger", "Indian Elephant", "Rhino", "Leopard", "Peacock", "King Cobra", "Gharial", "Fishing Cat", "Irrawaddy Dolphin", "Jackal"], hint: "Animals found in Bangladesh, India, or nearby." },
  { id: "q32",  category: "40+", question: "Name a subject typically taught in school.", exampleAnswers: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "History", "Geography", "ICT", "Bangla", "Economics"], hint: "Classes you take to pass exams." },
  { id: "q33",  category: "40+", question: "Name a known chemical compound.", exampleAnswers: ["Water", "Carbon Dioxide", "Salt", "Ammonia", "Methane", "Glucose", "Sulfuric Acid", "Ethanol", "Baking Soda", "Hydrogen Peroxide"], hint: "Molecules made of two or more elements." },
  { id: "q34",  category: "40+", question: "Name a piece of household furniture.", exampleAnswers: ["Sofa", "Bed", "Dining Table", "Chair", "Bookshelf", "Dresser", "Desk", "Wardrobe", "Coffee Table", "Almirah"], hint: "Movable objects that make a room livable." },
  { id: "q35",  category: "40+", question: "Name a type of fabric or textile material.", exampleAnswers: ["Cotton", "Silk", "Jute", "Wool", "Polyester", "Leather", "Linen", "Nylon", "Muslin", "Denim"], hint: "What clothes and bags are made of." },
  { id: "q36",  category: "40+", question: "Name a room in a typical house.", exampleAnswers: ["Kitchen", "Bedroom", "Bathroom", "Living Room", "Dining Room", "Study", "Balcony", "Veranda", "Storeroom", "Garage"], hint: "The different spaces inside a home." },
  { id: "q37",  category: "40+", question: "Name a hobby or recreational activity.", exampleAnswers: ["Reading", "Gaming", "Painting", "Cooking", "Photography", "Fishing", "Cycling", "Gardening", "Dancing", "Hiking"], hint: "Things people do in their free time." },
  { id: "q38",  category: "40+", question: "Name a popular card game.", exampleAnswers: ["Poker", "Blackjack", "Uno", "Solitaire", "Rummy", "Spades", "Hearts", "Bridge", "Go Fish", "Crazy Eights"], hint: "Games played with a deck of cards." },
  { id: "q39",  category: "40+", question: "Name a hand tool found in a toolbox.", exampleAnswers: ["Hammer", "Screwdriver", "Wrench", "Pliers", "Tape Measure", "Saw", "Chisel", "Drill", "Allen Key", "Level"], hint: "Things you use to build or fix stuff." },
  { id: "q40",  category: "40+", question: "Name an item you would find in a hospital.", exampleAnswers: ["Stethoscope", "Syringe", "IV Drip", "Stretcher", "Scalpel", "Blood Pressure Cuff", "Thermometer", "X-ray Machine", "Wheelchair", "Bandage"], hint: "Medical equipment and supplies." },

  // ═══════════════════════════════════════════════
  // 20-40 answers
  // ═══════════════════════════════════════════════

  { id: "q50",  category: "20-40", question: "Name a letter in the English alphabet.", exampleAnswers: ["A", "B", "C", "X", "Y", "Z", "M", "P"], hint: "There are exactly 26 of these." },
  { id: "q51",  category: "20-40", question: "Name a programming language.", exampleAnswers: ["Python", "JavaScript", "Java", "C++", "C#", "PHP", "Ruby", "Swift", "Go", "TypeScript"], hint: "Any real programming language." },
  { id: "q52",  category: "20-40", question: "Name one of the first 20 elements on the periodic table.", exampleAnswers: ["Hydrogen", "Helium", "Lithium", "Carbon", "Oxygen", "Nitrogen", "Neon", "Sodium", "Calcium", "Magnesium"], hint: "Atomic numbers 1 through 20." },
  { id: "q53",  category: "20-40", question: "Name a bone in the human body.", exampleAnswers: ["Femur", "Tibia", "Fibula", "Humerus", "Radius", "Ulna", "Skull", "Rib", "Pelvis", "Sternum"], hint: "There are 206 bones — name any major one." },
  { id: "q54",  category: "20-40", question: "Name a capital city in Europe.", exampleAnswers: ["London", "Paris", "Berlin", "Rome", "Madrid", "Vienna", "Warsaw", "Stockholm", "Oslo", "Athens"], hint: "Seats of government in Europe." },
  { id: "q55",  category: "20-40", question: "Name a word from the NATO phonetic alphabet.", exampleAnswers: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet"], hint: "Words used to spell out letters over radio." },
  { id: "q56",  category: "20-40", question: "Name an element whose chemical symbol starts with 'C'.", exampleAnswers: ["Carbon", "Calcium", "Copper", "Chlorine", "Cobalt", "Chromium", "Cadmium", "Cesium"], hint: "Look at the periodic table." },
  { id: "q57",  category: "20-40", question: "Name a letter in the Greek alphabet.", exampleAnswers: ["Alpha", "Beta", "Gamma", "Delta", "Omega", "Sigma", "Pi", "Epsilon", "Theta", "Lambda"], hint: "There are 24 letters total." },
  { id: "q58",  category: "20-40", question: "Name a member country of NATO.", exampleAnswers: ["USA", "UK", "France", "Germany", "Turkey", "Canada", "Italy", "Poland", "Finland", "Sweden"], hint: "There are 32 member states." },
  { id: "q59",  category: "20-40", question: "Name a country in the Middle East.", exampleAnswers: ["Saudi Arabia", "Iran", "Iraq", "Israel", "Syria", "Jordan", "Lebanon", "Yemen", "Oman", "UAE"], hint: "There are around 18-20 countries here." },
  { id: "q60",  category: "20-40", question: "Name an element in the transition metals block.", exampleAnswers: ["Iron", "Copper", "Gold", "Silver", "Zinc", "Nickel", "Platinum", "Titanium", "Cobalt", "Mercury"], hint: "The large middle block of the periodic table." },
  { id: "q61",  category: "20-40", question: "Name a recognized constellation in the night sky.", exampleAnswers: ["Orion", "Ursa Major", "Cassiopeia", "Andromeda", "Cygnus", "Lyra", "Scorpius", "Pegasus", "Leo", "Draco"], hint: "There are 88 modern constellations." },
  { id: "q62",  category: "20-40", question: "Name a club currently in the English Premier League.", exampleAnswers: ["Arsenal", "Manchester City", "Liverpool", "Chelsea", "Manchester United", "Tottenham", "Aston Villa", "Newcastle", "Brighton", "Everton"], hint: "There are 20 teams in the top flight." },
  { id: "q63",  category: "20-40", question: "Name a standard time zone abbreviation.", exampleAnswers: ["EST", "PST", "GMT", "UTC", "CET", "JST", "BST", "IST", "BDT", "AEST"], hint: "The 3-4 letter codes used for regional time." },
  { id: "q64",  category: "20-40", question: "Name a proteinogenic amino acid.", exampleAnswers: ["Alanine", "Glycine", "Leucine", "Valine", "Tryptophan", "Tyrosine", "Serine", "Proline", "Lysine", "Methionine"], hint: "There are 20 standard ones encoded by DNA." },
  { id: "q65",  category: "20-40", question: "Name a famous scientist or mathematician.", exampleAnswers: ["Einstein", "Newton", "Darwin", "Tesla", "Curie", "Hawking", "Pasteur", "Faraday", "Bohr", "Turing"], hint: "People whose discoveries changed the world." },
  { id: "q66",  category: "20-40", question: "Name a district (zila) of Bangladesh.", exampleAnswers: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Comilla", "Barisal", "Mymensingh", "Rangpur", "Jessore"], hint: "There are 64 districts." },
  { id: "q67",  category: "20-40", question: "Name a recognized university in Bangladesh.", exampleAnswers: ["Dhaka University", "BUET", "Jahangirnagar University", "BRAC University", "NSU", "SUST", "RUET", "CUET", "IUT", "East West University"], hint: "Public and private universities count." },
  { id: "q68",  category: "20-40", question: "Name a country that has won the FIFA World Cup.", exampleAnswers: ["Brazil", "Germany", "Italy", "Argentina", "France", "England", "Spain", "Uruguay"], hint: "There are only 8 nations." },
  { id: "q69",  category: "20-40", question: "Name a recognized official working language of the United Nations.", exampleAnswers: ["English", "French", "Spanish", "Arabic", "Russian", "Chinese"], hint: "There are exactly 6." },

  // ═══════════════════════════════════════════════
  // 10-20 answers
  // ═══════════════════════════════════════════════

  { id: "q80",  category: "10-20", question: "Name a month of the year.", exampleAnswers: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], hint: "There are 12 of these." },
  { id: "q81",  category: "10-20", question: "Name a sign of the Western Zodiac.", exampleAnswers: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"], hint: "There are exactly 12." },
  { id: "q82",  category: "10-20", question: "Name a country in South America.", exampleAnswers: ["Brazil", "Argentina", "Colombia", "Peru", "Chile", "Venezuela", "Ecuador", "Bolivia", "Paraguay", "Uruguay"], hint: "There are 12 sovereign nations here." },
  { id: "q83",  category: "10-20", question: "Name a major organ system in the human body.", exampleAnswers: ["Circulatory", "Respiratory", "Digestive", "Nervous", "Skeletal", "Muscular", "Endocrine", "Immune", "Excretory", "Reproductive"], hint: "Systems that keep you alive." },
  { id: "q84",  category: "10-20", question: "Name a standard punctuation mark in English.", exampleAnswers: ["Period", "Comma", "Question Mark", "Exclamation Mark", "Colon", "Semicolon", "Apostrophe", "Hyphen", "Parentheses", "Quotation Mark"], hint: "Symbols used to structure writing." },
  { id: "q85",  category: "10-20", question: "Name a major tectonic plate.", exampleAnswers: ["Pacific", "North American", "Eurasian", "African", "Antarctic", "Indo-Australian", "South American", "Nazca", "Arabian", "Caribbean"], hint: "The massive slabs of rock making up Earth's crust." },
  { id: "q86",  category: "10-20", question: "Name an animal from the Chinese Zodiac.", exampleAnswers: ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"], hint: "There are 12 signs in the cycle." },
  { id: "q87",  category: "10-20", question: "Name a rank in a standard deck of cards.", exampleAnswers: ["Ace", "King", "Queen", "Jack", "Ten", "Two", "Seven", "Five", "Eight", "Three"], hint: "There are 13 possible ranks." },
  { id: "q88",  category: "10-20", question: "Name a major mountain range.", exampleAnswers: ["Himalayas", "Andes", "Rockies", "Alps", "Appalachians", "Urals", "Pyrenees", "Atlas", "Karakoram", "Hindu Kush"], hint: "The big rocky ridges across the world." },
  { id: "q89",  category: "10-20", question: "Name a unique musical note in the Western chromatic scale.", exampleAnswers: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"], hint: "There are 12 notes before the octave repeats." },
  { id: "q90",  category: "10-20", question: "Name a prime number between 1 and 50.", exampleAnswers: ["2", "3", "5", "7", "11", "13", "17", "19", "23", "29", "31", "37", "41", "43", "47"], hint: "There are 15 of them." },
  { id: "q91",  category: "10-20", question: "Name a digit in the hexadecimal numeral system.", exampleAnswers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"], hint: "Base-16 has 16 digits." },
  { id: "q92",  category: "10-20", question: "Name a basic CSS display property value.", exampleAnswers: ["block", "inline", "inline-block", "flex", "grid", "none", "table", "inline-flex", "contents", "list-item"], hint: "How elements are laid out on a webpage." },
  { id: "q93",  category: "10-20", question: "Name a club currently in La Liga (Spanish football).", exampleAnswers: ["Real Madrid", "Barcelona", "Atletico Madrid", "Sevilla", "Valencia", "Athletic Bilbao", "Real Sociedad", "Villarreal", "Betis", "Girona"], hint: "There are 20 teams in the top flight." },
  { id: "q94",  category: "10-20", question: "Name a standard basic HTML/CSS color keyword.", exampleAnswers: ["Red", "Blue", "Green", "Yellow", "Black", "White", "Purple", "Orange", "Pink", "Gray"], hint: "Named colors built into CSS." },
  { id: "q95",  category: "10-20", question: "Name a programming concept or data structure.", exampleAnswers: ["Array", "Loop", "Function", "Class", "Stack", "Queue", "Tree", "Graph", "Hash Table", "Recursion"], hint: "Fundamental building blocks of code." },
  // Mathematics
  { id: "q96",  category: "10-20", question: "Name a type of quadrilateral.", exampleAnswers: ["Square", "Rectangle", "Parallelogram", "Rhombus", "Trapezoid", "Kite", "Pentagon", "Trapezium", "Isosceles Trapezoid"], hint: "Four-sided polygons — there are several." },
  { id: "q97",  category: "10-20", question: "Name a trigonometric function.", exampleAnswers: ["Sine", "Cosine", "Tangent", "Cosecant", "Secant", "Cotangent"], hint: "The six standard trig functions." },
  // Physics
  { id: "q98",  category: "10-20", question: "Name a unit of measurement used in physics.", exampleAnswers: ["Meter", "Kilogram", "Second", "Newton", "Joule", "Watt", "Pascal", "Ampere", "Volt", "Ohm"], hint: "SI units and derived units." },
  // Bangladesh
  { id: "q99",  category: "10-20", question: "Name a division of Bangladesh.", exampleAnswers: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal", "Mymensingh", "Rangpur"], hint: "There are exactly 8 divisions." },
  // English
  { id: "q100", category: "10-20", question: "Name a part of speech in English grammar.", exampleAnswers: ["Noun", "Pronoun", "Verb", "Adjective", "Adverb", "Preposition", "Conjunction", "Interjection", "Article", "Determiner"], hint: "The grammatical categories of words." },

  // ═══════════════════════════════════════════════
  // 5-10 answers
  // ═══════════════════════════════════════════════

  { id: "q110", category: "5-10", question: "Name a planet in our solar system.", exampleAnswers: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"], hint: "There are officially 8." },
  { id: "q111", category: "5-10", question: "Name a continent.", exampleAnswers: ["Asia", "Africa", "North America", "South America", "Europe", "Australia", "Antarctica"], hint: "There are 7 of these." },
  { id: "q112", category: "5-10", question: "Name one of the seven deadly sins.", exampleAnswers: ["Pride", "Greed", "Lust", "Envy", "Gluttony", "Wrath", "Sloth"], hint: "Exactly 7." },
  { id: "q113", category: "5-10", question: "Name a standard chess piece.", exampleAnswers: ["King", "Queen", "Rook", "Bishop", "Knight", "Pawn"], hint: "There are 6 distinct types of pieces." },
  { id: "q114", category: "5-10", question: "Name a primary or secondary color.", exampleAnswers: ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"], hint: "3 primary + 3 secondary colors." },
  { id: "q115", category: "5-10", question: "Name a Noble Gas.", exampleAnswers: ["Helium", "Neon", "Argon", "Krypton", "Xenon", "Radon"], hint: "Group 18 on the periodic table." },
  { id: "q116", category: "5-10", question: "Name a color of the rainbow.", exampleAnswers: ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"], hint: "ROYGBIV — 7 colors." },
  { id: "q117", category: "5-10", question: "Name a classical simple machine.", exampleAnswers: ["Lever", "Wheel and Axle", "Pulley", "Inclined Plane", "Wedge", "Screw"], hint: "Basic mechanical devices. There are 6." },
  { id: "q118", category: "5-10", question: "Name a day of the week.", exampleAnswers: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], hint: "There are 7 days." },
  { id: "q119", category: "5-10", question: "Name a vowel in the English alphabet.", exampleAnswers: ["A", "E", "I", "O", "U"], hint: "The 5 core vowels." },
  { id: "q120", category: "5-10", question: "Name a primary layer of Earth's atmosphere.", exampleAnswers: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere", "Exosphere"], hint: "There are 5 main layers." },
  { id: "q121", category: "5-10", question: "Name a core hardware component needed to build a PC.", exampleAnswers: ["CPU", "GPU", "Motherboard", "RAM", "Power Supply", "SSD", "Case"], hint: "The parts you buy to build a rig." },
  { id: "q122", category: "5-10", question: "Name one of the Seven Wonders of the Ancient World.", exampleAnswers: ["Great Pyramid of Giza", "Hanging Gardens of Babylon", "Colossus of Rhodes", "Lighthouse of Alexandria", "Temple of Artemis", "Statue of Zeus", "Mausoleum at Halicarnassus"], hint: "There are exactly 7." },
  { id: "q123", category: "5-10", question: "Name a fundamental force of nature.", exampleAnswers: ["Gravity", "Electromagnetism", "Strong Nuclear Force", "Weak Nuclear Force"], hint: "Physics tells us there are 4." },
  // Mathematics
  { id: "q124", category: "5-10", question: "Name a type of triangle.", exampleAnswers: ["Equilateral", "Isosceles", "Scalene", "Right-angled", "Acute", "Obtuse"], hint: "Classified by sides or angles." },
  { id: "q125", category: "5-10", question: "Name a type of number in mathematics.", exampleAnswers: ["Integer", "Rational", "Irrational", "Real", "Complex", "Prime", "Natural", "Whole"], hint: "The different sets of numbers studied in maths." },
  // Physics
  { id: "q126", category: "5-10", question: "Name a type of wave in physics.", exampleAnswers: ["Longitudinal", "Transverse", "Electromagnetic", "Sound Wave", "Light Wave", "Mechanical", "Seismic"], hint: "Classified by how they travel." },
  { id: "q127", category: "5-10", question: "Name a standard SI base unit.", exampleAnswers: ["Meter", "Kilogram", "Second", "Ampere", "Kelvin", "Mole", "Candela"], hint: "There are exactly 7." },
  // Bangladesh
  { id: "q128", category: "5-10", question: "Name a river that flows through Bangladesh.", exampleAnswers: ["Padma", "Meghna", "Jamuna", "Brahmaputra", "Surma", "Karnaphuli", "Buriganga", "Teesta"], hint: "Bangladesh is crisscrossed by hundreds of rivers." },
  // ICT
  { id: "q129", category: "5-10", question: "Name a layer of the OSI networking model.", exampleAnswers: ["Physical", "Data Link", "Network", "Transport", "Session", "Presentation", "Application"], hint: "There are exactly 7 layers." },
  // English
  { id: "q130", category: "5-10", question: "Name a tense in English grammar.", exampleAnswers: ["Simple Present", "Simple Past", "Simple Future", "Present Continuous", "Past Continuous", "Present Perfect", "Past Perfect"], hint: "The different forms verbs take based on time." },

  // ═══════════════════════════════════════════════
  // 1-5 answers
  // ═══════════════════════════════════════════════

  { id: "q140", category: "1-5", question: "Name a main blood type group in the ABO system.", exampleAnswers: ["A", "B", "AB", "O"], hint: "There are 4 main letter groups (ignore +/-)." },
  { id: "q141", category: "1-5", question: "Name a state of matter.", exampleAnswers: ["Solid", "Liquid", "Gas", "Plasma"], hint: "There are 4 common states." },
  { id: "q142", category: "1-5", question: "Name a nucleotide base found in DNA.", exampleAnswers: ["Adenine", "Thymine", "Cytosine", "Guanine"], hint: "A, T, C, or G." },
  { id: "q143", category: "1-5", question: "Name a suit in a standard deck of playing cards.", exampleAnswers: ["Hearts", "Diamonds", "Clubs", "Spades"], hint: "There are exactly 4." },
  { id: "q144", category: "1-5", question: "Name a major ocean on Earth.", exampleAnswers: ["Pacific", "Atlantic", "Indian", "Southern", "Arctic"], hint: "There are 5 recognized oceans." },
  { id: "q145", category: "1-5", question: "Name a color of the Olympic rings.", exampleAnswers: ["Blue", "Yellow", "Black", "Green", "Red"], hint: "There are 5 interlocking rings." },
  { id: "q146", category: "1-5", question: "Name a cardinal direction.", exampleAnswers: ["North", "South", "East", "West"], hint: "Look at a compass." },
  { id: "q147", category: "1-5", question: "Name a gas giant in our solar system.", exampleAnswers: ["Jupiter", "Saturn", "Uranus", "Neptune"], hint: "The 4 outer planets." },
  { id: "q148", category: "1-5", question: "Name a chamber of the human heart.", exampleAnswers: ["Left Atrium", "Right Atrium", "Left Ventricle", "Right Ventricle"], hint: "There are 4 chambers." },
  { id: "q149", category: "1-5", question: "Name a layer of the Earth.", exampleAnswers: ["Crust", "Mantle", "Outer Core", "Inner Core"], hint: "There are 4 primary layers." },
  { id: "q150", category: "1-5", question: "Name a permanent member of the UN Security Council.", exampleAnswers: ["China", "France", "Russia", "United Kingdom", "United States"], hint: "The P5 — 5 nations." },
  { id: "q151", category: "1-5", question: "Name a distinct stage of a butterfly's life cycle.", exampleAnswers: ["Egg", "Larva", "Pupa", "Adult"], hint: "There are 4 stages." },
  // Mathematics
  { id: "q152", category: "1-5", question: "Name a type of angle in geometry.", exampleAnswers: ["Acute", "Right", "Obtuse", "Straight", "Reflex"], hint: "Classified by degree measure." },
  { id: "q153", category: "1-5", question: "Name a month of the year with exactly 30 days.", exampleAnswers: ["April", "June", "September", "November"], hint: "There are 4 of them." },
  { id: "q154", category: "1-5", question: "Name a quadrant on a standard Cartesian coordinate plane.", exampleAnswers: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"], hint: "The 4 sections divided by the X and Y axes." },
  // Physics
  { id: "q155", category: "1-5", question: "Name a law of thermodynamics.", exampleAnswers: ["Zeroth Law", "First Law", "Second Law", "Third Law"], hint: "There are 4 (including the Zeroth)." },
  { id: "q156", category: "1-5", question: "Name a type of electrical charge.", exampleAnswers: ["Positive", "Negative", "Neutral"], hint: "Physics 101 — there are 3." },
  // ICT
  { id: "q157", category: "1-5", question: "Name a part of a standard URL (web address).", exampleAnswers: ["Protocol", "Domain", "Path", "Query String", "Port"], hint: "The components that make up a web address." },
  { id: "q158", category: "1-5", question: "Name a type of computer memory.", exampleAnswers: ["RAM", "ROM", "Cache", "Flash Memory", "Virtual Memory"], hint: "Different kinds of storage inside a computer." },
  // Bangladesh
  { id: "q159", category: "1-5", question: "Name a neighboring country of Bangladesh.", exampleAnswers: ["India", "Myanmar"], hint: "There are only 2 land neighbors." },
  // English
  { id: "q160", category: "1-5", question: "Name a type of clause in English grammar.", exampleAnswers: ["Independent Clause", "Dependent Clause", "Relative Clause", "Noun Clause", "Adverbial Clause"], hint: "The building blocks of sentences." },

  // ═══════════════════════════════════════════════
  // 1-3 answers — Sudden death
  // ═══════════════════════════════════════════════

  { id: "q170", category: "1-3", question: "Name a primary color of light (RGB model).", exampleAnswers: ["Red", "Green", "Blue"], hint: "There are 3." },
  { id: "q171", category: "1-3", question: "Name a fundamental subatomic particle found in an atom.", exampleAnswers: ["Proton", "Neutron", "Electron"], hint: "There are 3 main ones." },
  { id: "q172", category: "1-3", question: "Name a pole of a standard magnet.", exampleAnswers: ["North", "South"], hint: "There are exactly 2." },
  { id: "q173", category: "1-3", question: "Name a variable declaration keyword in JavaScript.", exampleAnswers: ["var", "let", "const"], hint: "There are 3 standard ways." },
  { id: "q174", category: "1-3", question: "Name a spatial axis on a standard 3D coordinate system.", exampleAnswers: ["X", "Y", "Z"], hint: "The 3 dimensions of space." },
  { id: "q175", category: "1-3", question: "Name an outcome of a coin flip.", exampleAnswers: ["Heads", "Tails"], hint: "50/50 chance — 2 outcomes." },
  { id: "q176", category: "1-3", question: "Name a digit in the binary numeral system.", exampleAnswers: ["0", "1"], hint: "Base-2 — there are only 2." },
  { id: "q177", category: "1-3", question: "Name a standard axis in a 2D coordinate plane.", exampleAnswers: ["X", "Y"], hint: "There are 2." },
  { id: "q178", category: "1-3", question: "Name a type of electrical current.", exampleAnswers: ["Alternating Current", "Direct Current"], hint: "AC or DC — there are 2." },
  { id: "q179", category: "1-3", question: "Name a color of piece in a standard game of chess.", exampleAnswers: ["White", "Black"], hint: "There are 2." },
  { id: "q180", category: "1-3", question: "Name an outcome option in Rock, Paper, Scissors.", exampleAnswers: ["Rock", "Paper", "Scissors"], hint: "There are 3 choices." },
  { id: "q181", category: "1-3", question: "Name a hemisphere of the Earth divided by the Equator.", exampleAnswers: ["Northern", "Southern"], hint: "There are 2." },
  // Mathematics
  { id: "q182", category: "1-3", question: "Name the only even prime number.", exampleAnswers: ["2", "Two"], hint: "There is only 1." },
  { id: "q183", category: "1-3", question: "Name a type of number that is neither positive nor negative.", exampleAnswers: ["Zero", "0"], hint: "There is only one such integer." },
  // Physics
  { id: "q184", category: "1-3", question: "Name a type of lens.", exampleAnswers: ["Convex", "Concave"], hint: "The 2 basic optical lens shapes." },
  { id: "q185", category: "1-3", question: "Name a pole on a standard battery terminal.", exampleAnswers: ["Positive", "Negative"], hint: "There are 2 terminals." },
  // ICT
  { id: "q186", category: "1-3", question: "Name a standard URL protocol that goes before '://'.", exampleAnswers: ["HTTP", "HTTPS", "FTP"], hint: "The 3 most common ones." },
  { id: "q187", category: "1-3", question: "Name a state of a standard light switch.", exampleAnswers: ["On", "Off"], hint: "There are 2 binary states." },
  // Bangladesh
  { id: "q188", category: "1-3", question: "Name a color on the flag of Bangladesh.", exampleAnswers: ["Red", "Green"], hint: "There are exactly 2." },
  { id: "q189", category: "1-3", question: "Name a part of the national flower of Bangladesh (Shapla).", exampleAnswers: ["Petal", "Stem", "Leaf"], hint: "The white water lily — name any part." },
  // English
  { id: "q190", category: "1-3", question: "Name a side of an argument in a formal debate.", exampleAnswers: ["For", "Against"], hint: "Proposition or Opposition — there are 2." },
  { id: "q191", category: "1-3", question: "Name a direction a standard door hinge opens.", exampleAnswers: ["Inward", "Outward"], hint: "Push or pull — 2 options." },
  { id: "q192", category: "1-3", question: "Name a possible result of a standard chess game.", exampleAnswers: ["Win", "Loss", "Draw"], hint: "There are 3 outcomes." },
  { id: "q193", category: "1-3", question: "Name a direction you can scroll with a mouse wheel.", exampleAnswers: ["Up", "Down"], hint: "2 standard directions." },

  
  { id: "q194", category: "20-40", question: "Name something you find in a bathroom.", exampleAnswers: ["Toothbrush", "Soap", "Towel", "Mirror", "Toilet", "Shampoo", "Razor", "Toilet paper", "Sink", "Bathtub"], hint: "Think about your daily bathroom routine." },
  { id: "q195", category: "20-40", question: "Name a sport played with a ball.", exampleAnswers: ["Football", "Basketball", "Soccer", "Tennis", "Baseball", "Volleyball", "Golf", "Rugby", "Cricket", "Bowling"], hint: "Could be indoor or outdoor sports." },
  { id: "q196", category: "20-40", question: "Name something people do in the morning.", exampleAnswers: ["Brush teeth", "Shower", "Eat breakfast", "Drink coffee", "Check phone", "Exercise", "Get dressed", "Make bed", "Read news", "Walk the dog"], hint: "Think about your morning routine." },

  { id: "q197", category: "20-40", question: "Name something you take on a vacation.", exampleAnswers: ["Suitcase", "Passport", "Phone", "Camera", "Sunscreen", "Clothes", "Toothbrush", "Money", "Charger", "Sunglasses"], hint: "Think about what you pack before a trip." },
  { id: "q198", category: "20-40", question: "Name a farm animal.", exampleAnswers: ["Cow", "Pig", "Chicken", "Horse", "Sheep", "Goat", "Duck", "Rooster", "Donkey", "Turkey"], hint: "Animals you would find on a farm." },
  { id: "q200", category: "20-40", question: "Name something in a school bag.", exampleAnswers: ["Notebook", "Pen", "Pencil", "Ruler", "Eraser", "Calculator", "Textbook", "Water bottle", "Lunch box", "Scissors"], hint: "Things a student carries to school." },
  { id: "q202", category: "20-40", question: "Name something you do at a party.", exampleAnswers: ["Dance", "Eat", "Drink", "Talk", "Play games", "Take photos", "Sing", "Laugh", "Open gifts", "Meet new people"], hint: "Think about a fun party night." },
  { id: "q203", category: "20-40", question: "Name a job that involves driving.", exampleAnswers: ["Taxi driver", "Truck driver", "Bus driver", "Delivery driver", "Ambulance driver", "Racing driver", "Uber driver", "Postman", "Chauffeur", "Fire truck driver"], hint: "Jobs where driving is the main task." },
  { id: "q205", category: "20-40", question: "Name something you find on a dining table.", exampleAnswers: ["Plate", "Fork", "Knife", "Spoon", "Glass", "Napkin", "Salt shaker", "Pepper", "Candle", "Tablecloth"], hint: "Things set up before a meal." },
  { id: "q207", category: "20-40", question: "Name something that can be black and white.", exampleAnswers: ["Zebra", "Panda", "Newspaper", "Chess board", "Piano keys", "Penguin", "Dalmatian", "Soccer ball", "Cow", "Barcode"], hint: "Things with only two colors." },
  { id: "q208", category: "20-40", question: "Name a hobby people do at home.", exampleAnswers: ["Reading", "Gaming", "Cooking", "Drawing", "Knitting", "Watching TV", "Gardening", "Painting", "Exercising", "Playing instruments"], hint: "Activities you enjoy indoors." },
  { id: "q210", category: "20-40", question: "Name something associated with Christmas.", exampleAnswers: ["Santa Claus", "Christmas tree", "Gifts", "Snow", "Reindeer", "Candy cane", "Stockings", "Bells", "Elves", "Mistletoe"], hint: "Think about the holiday season." },
  { id: "q212", category: "20-40", question: "Name something you do when you're bored.", exampleAnswers: ["Watch TV", "Scroll phone", "Sleep", "Eat", "Play games", "Call a friend", "Go for a walk", "Listen to music", "Draw", "Clean"], hint: "Ways to pass time when there's nothing to do." },
  { id: "q213", category: "20-40", question: "Name a popular pizza topping.", exampleAnswers: ["Cheese", "Pepperoni", "Mushrooms", "Onion", "Olives", "Chicken", "Pineapple", "Bell peppers", "Sausage", "Jalapeños"], hint: "Things people put on top of pizza." },
  { id: "q214", category: "20-40", question: "Name something that has a screen.", exampleAnswers: ["Phone", "TV", "Laptop", "Tablet", "Computer monitor", "ATM", "GPS", "Camera", "Smartwatch", "Gaming console"], hint: "Devices with a display." },
  { id: "q215", category: "20-40", question: "Name a reason someone might call in sick.", exampleAnswers: ["Fever", "Cold", "Headache", "Stomachache", "Food poisoning", "Injury", "Sore throat", "Back pain", "Fatigue", "Flu"], hint: "Common reasons to miss work or school." },
  { id: "q216", category: "20-40", question: "Name something you find in an office.", exampleAnswers: ["Desk", "Chair", "Computer", "Printer", "Stapler", "Coffee machine", "Whiteboard", "Phone", "Filing cabinet", "Pen"], hint: "Things you see in a typical workplace." },
  { id: "q217", category: "20-40", question: "Name a type of shoe.", exampleAnswers: ["Sneakers", "Heels", "Boots", "Sandals", "Loafers", "Flip flops", "Oxford shoes", "Slippers", "Wedges", "Cleats"], hint: "Different kinds of footwear." },
  { id: "q218", category: "20-40", question: "Name something that can fly.", exampleAnswers: ["Bird", "Airplane", "Helicopter", "Butterfly", "Bee", "Kite", "Drone", "Bat", "Hot air balloon", "Superhero"], hint: "Things you might see up in the sky." },
  { id: "q219", category: "20-40", question: "Name a popular board game.", exampleAnswers: ["Monopoly", "Scrabble", "Chess", "Checkers", "Clue", "Risk", "Sorry", "Battleship", "Ludo", "Snakes and Ladders"], hint: "Games played on a flat board." },
  { id: "q220", category: "20-40", question: "Name something you find at a beach.", exampleAnswers: ["Sand", "Water", "Shells", "Sunscreen", "Towel", "Umbrella", "Waves", "Crabs", "Seagulls", "Surfboard"], hint: "Things you see or bring to the beach." },
  { id: "q221", category: "20-40", question: "Name a type of cheese.", exampleAnswers: ["Cheddar", "Mozzarella", "Parmesan", "Brie", "Gouda", "Swiss", "Feta", "Camembert", "Ricotta", "Provolone"], hint: "Varieties of dairy cheese." },
  { id: "q222", category: "20-40", question: "Name something people collect as a hobby.", exampleAnswers: ["Stamps", "Coins", "Cards", "Action figures", "Sneakers", "Books", "Vinyl records", "Artwork", "Rocks", "Watches"], hint: "Items people gather and keep over time." },
  { id: "q223", category: "20-40", question: "Name something you do before bed.", exampleAnswers: ["Brush teeth", "Wash face", "Read", "Watch TV", "Set alarm", "Charge phone", "Pray", "Shower", "Drink water", "Journal"], hint: "Part of a nightly routine." },
  { id: "q224", category: "20-40", question: "Name a type of sandwich.", exampleAnswers: ["BLT", "Club sandwich", "Grilled cheese", "Tuna sandwich", "Chicken sandwich", "Peanut butter & jelly", "Submarine", "Egg sandwich", "Turkey sandwich", "Veggie sandwich"], hint: "Fillings between two slices of bread." },
  { id: "q225", category: "20-40", question: "Name something that comes in pairs.", exampleAnswers: ["Shoes", "Socks", "Gloves", "Earrings", "Eyes", "Twins", "Chopsticks", "Handcuffs", "Skis", "Cufflinks"], hint: "Things that are always found in twos." },
  { id: "q226", category: "20-40", question: "Name a word that describes the weather in summer.", exampleAnswers: ["Hot", "Sunny", "Humid", "Bright", "Warm", "Dry", "Blazing", "Clear", "Scorching", "Sweaty"], hint: "Adjectives for a typical summer day." },

  { id: "q227", category: "10-20", question: "Name something you would find in a chemistry lab.", exampleAnswers: ["Test tube", "Beaker", "Bunsen burner", "Microscope", "Goggles", "Pipette", "Flask", "Gloves", "Chemical solution", "Periodic table"], hint: "Equipment or items used in scientific experiments." },
  { id: "q228", category: "10-20", question: "Name a country that starts with the letter 'C'.", exampleAnswers: ["Canada", "China", "Colombia", "Chile", "Cuba", "Croatia", "Cambodia", "Cameroon", "Congo", "Costa Rica"], hint: "Countries from any continent beginning with C." },
  { id: "q229", category: "10-20", question: "Name something associated with the Olympics.", exampleAnswers: ["Torch", "Gold medal", "Rings", "Athlete", "Stadium", "Flag", "Swimming", "Running", "Podium", "Opening ceremony"], hint: "Think about the world's biggest sporting event." },
  { id: "q230", category: "10-20", question: "Name a profession that requires a uniform.", exampleAnswers: ["Police officer", "Nurse", "Soldier", "Firefighter", "Chef", "Pilot", "Doctor", "Judge", "Security guard", "Flight attendant"], hint: "Jobs where you must wear a specific outfit." },
  { id: "q231", category: "10-20", question: "Name something that gets heavier as you add more of it.", exampleAnswers: ["Water", "Sand", "Books", "Coins", "Clothes", "Bricks", "Food", "Snow", "Rocks", "Paper"], hint: "Things that accumulate weight when more is added." },
  { id: "q232", category: "10-20", question: "Name a word associated with royalty.", exampleAnswers: ["Crown", "King", "Queen", "Throne", "Castle", "Prince", "Princess", "Scepter", "Knight", "Palace"], hint: "Things related to kings, queens and their world." },
  { id: "q233", category: "10-20", question: "Name something you would do to prepare for a job interview.", exampleAnswers: ["Research the company", "Iron clothes", "Practice questions", "Print resume", "Set an alarm", "Get a haircut", "Prepare outfit", "Review job description", "Sleep early", "Plan the route"], hint: "Steps taken to make a good first impression." },
  { id: "q234", category: "10-20", question: "Name a feature you look for when buying a phone.", exampleAnswers: ["Battery life", "Camera quality", "Storage", "Price", "Screen size", "Brand", "Speed", "Design", "RAM", "Waterproof"], hint: "Things that influence your phone purchase decision." },
  { id: "q235", category: "10-20", question: "Name something that can be found underground.", exampleAnswers: ["Subway", "Roots", "Coal", "Gold", "Oil", "Bunker", "Tunnel", "Worms", "Fossils", "Pipes"], hint: "Things that exist beneath the surface of the earth." },
  { id: "q236", category: "10-20", question: "Name a famous landmark in Europe.", exampleAnswers: ["Eiffel Tower", "Colosseum", "Big Ben", "Sagrada Familia", "Leaning Tower of Pisa", "Acropolis", "Stonehenge", "Brandenburg Gate", "Louvre", "Trevi Fountain"], hint: "Iconic tourist destinations across Europe." },
  { id: "q237", category: "10-20", question: "Name something that requires a password.", exampleAnswers: ["Phone", "Email", "Bank account", "Computer", "Social media", "WiFi", "App", "Safe", "Website", "Credit card"], hint: "Things protected by a secret code." },
  { id: "q238", category: "10-20", question: "Name a reason why someone might move to another country.", exampleAnswers: ["Work", "Education", "Marriage", "War", "Better life", "Family", "Climate", "Adventure", "Retirement", "Asylum"], hint: "Motivations for relocating internationally." },
  { id: "q239", category: "10-20", question: "Name something associated with space exploration.", exampleAnswers: ["Rocket", "Astronaut", "Satellite", "Moon", "NASA", "Space suit", "Telescope", "Gravity", "Space station", "Black hole"], hint: "Things related to missions beyond Earth." },
  { id: "q240", category: "10-20", question: "Name a skill that is useful in almost every job.", exampleAnswers: ["Communication", "Time management", "Teamwork", "Problem solving", "Computer skills", "Leadership", "Writing", "Math", "Adaptability", "Critical thinking"], hint: "General abilities valued by most employers." },
  { id: "q241", category: "10-20", question: "Name something people do to save money.", exampleAnswers: ["Cook at home", "Use coupons", "Cancel subscriptions", "Buy second hand", "Walk instead of drive", "Budget", "Avoid eating out", "Buy in bulk", "Turn off lights", "Sell unused items"], hint: "Habits of people who are careful with their finances." },
  { id: "q243", category: "10-20", question: "Name something you associate with Japan.", exampleAnswers: ["Sushi", "Mount Fuji", "Samurai", "Cherry blossom", "Anime", "Tokyo", "Kimono", "Bullet train", "Ninja", "Ramen"], hint: "Culture, food or landmarks from Japan." },
  { id: "q244", category: "10-20", question: "Name a type of renewable energy.", exampleAnswers: ["Solar", "Wind", "Hydropower", "Geothermal", "Tidal", "Biomass", "Wave energy", "Hydrogen", "Biofuel", "Nuclear"], hint: "Energy sources that are sustainable and eco-friendly." },
  { id: "q246", category: "10-20", question: "Name a language spoken in more than one country.", exampleAnswers: ["English", "Spanish", "French", "Arabic", "Portuguese", "Chinese", "Russian", "German", "Dutch", "Swahili"], hint: "Languages with speakers across multiple nations." },
  { id: "q247", category: "10-20", question: "Name something that can cause a traffic jam.", exampleAnswers: ["Accident", "Road works", "Rush hour", "Broken traffic light", "Bad weather", "Event", "Roadblock", "Stalled car", "Protest", "School run"], hint: "Situations that slow down or stop traffic." },
  { id: "q248", category: "10-20", question: "Name something associated with a detective.", exampleAnswers: ["Magnifying glass", "Clue", "Badge", "Notebook", "Crime scene", "Suspect", "Fingerprints", "Evidence", "Trench coat", "Mystery"], hint: "Tools or things linked to solving crimes." },
  { id: "q249", category: "10-20", question: "Name a reason why someone might not be able to sleep.", exampleAnswers: ["Stress", "Noise", "Caffeine", "Light", "Pain", "Anxiety", "Phone", "Hunger", "Heat", "Nightmares"], hint: "Things that keep people awake at night." },
  { id: "q250", category: "10-20", question: "Name something people do to stay healthy.", exampleAnswers: ["Exercise", "Eat vegetables", "Drink water", "Sleep well", "Avoid smoking", "Meditate", "Take vitamins", "Walk daily", "Reduce sugar", "Regular checkups"], hint: "Habits that improve physical or mental wellbeing." },
  { id: "q251", category: "10-20", question: "Name a subject taught in high school.", exampleAnswers: ["Math", "Science", "History", "English", "Geography", "Physics", "Chemistry", "Biology", "Art", "Physical education"], hint: "Classes you would take as a teenager in school." },
  { id: "q252", category: "10-20", question: "Name something associated with a pirate.", exampleAnswers: ["Ship", "Treasure", "Parrot", "Eye patch", "Hook", "Sword", "Map", "Skull and crossbones", "Cannon", "Island"], hint: "Things from pirate movies or stories." },
  { id: "q253", category: "10-20", question: "Name something that melts in heat.", exampleAnswers: ["Ice cream", "Snow", "Chocolate", "Butter", "Candle", "Ice", "Wax", "Cheese", "Metal", "Plastic"], hint: "Things that change form when exposed to high temperatures." },
  { id: "q254", category: "10-20", question: "Name a reason someone might see a therapist.", exampleAnswers: ["Anxiety", "Depression", "Trauma", "Relationship issues", "Stress", "Grief", "Addiction", "Anger", "Low self-esteem", "Phobia"], hint: "Mental health reasons people seek professional help." },
  { id: "q255", category: "10-20", question: "Name something that is always moving.", exampleAnswers: ["Clock hands", "River", "Wind", "Earth", "Blood", "Clouds", "Stock market", "Conveyor belt", "Heartbeat", "Traffic"], hint: "Things that are in constant motion." },
  { id: "q257", category: "10-20", question: "Name something associated with ancient Egypt.", exampleAnswers: ["Pyramids", "Mummy", "Pharaoh", "Sphinx", "Hieroglyphics", "Nile river", "Cleopatra", "Tomb", "Scarab", "Desert"], hint: "Culture, monuments or figures from ancient Egypt." },
  { id: "q258", category: "10-20", question: "Name something that has a lock.", exampleAnswers: ["Door", "Safe", "Phone", "Diary", "Car", "Locker", "Padlock", "Suitcase", "Bike chain", "Mailbox"], hint: "Things that need a key or code to open." },
  { id: "q259", category: "10-20", question: "Name a word that means happy.", exampleAnswers: ["Joyful", "Cheerful", "Elated", "Content", "Pleased", "Delighted", "Ecstatic", "Blissful", "Thrilled", "Gleeful"], hint: "Synonyms for the word happy." },
  { id: "q260", category: "10-20", question: "Name something a chef needs in the kitchen.", exampleAnswers: ["Knife", "Cutting board", "Pan", "Oven", "Spices", "Oil", "Apron", "Timer", "Whisk", "Spatula"], hint: "Tools or ingredients essential for cooking." },
  { id: "q261", category: "10-20", question: "Name something that gets better with age.", exampleAnswers: ["Wine", "Cheese", "Whiskey", "Friendship", "Wisdom", "Leather", "Cast iron pan", "Vintage car", "Trees", "Relationships"], hint: "Things that improve or become more valuable over time." },

  

  // ═══════════════════════════════════════════════════════════════════
  // NEW ADDITIONS — 40+ answers  (broad, many valid answers)
  // ═══════════════════════════════════════════════════════════════════

  { id: "q262", category: "40+", question: "Name a chemical element on the periodic table.", exampleAnswers: ["Hydrogen", "Oxygen", "Carbon", "Iron", "Gold", "Silver", "Helium", "Nitrogen", "Copper", "Zinc"], hint: "There are 118 known elements." },
  { id: "q263", category: "40+", question: "Name a currency used in any country of the world.", exampleAnswers: ["Dollar", "Euro", "Taka", "Yen", "Pound Sterling", "Rupee", "Ruble", "Riyal", "Dinar", "Won"], hint: "There are over 180 official currencies worldwide." },
  { id: "q264", category: "40+", question: "Name a country that is a member of the United Nations.", exampleAnswers: ["Bangladesh", "USA", "China", "India", "Brazil", "Germany", "Japan", "Nigeria", "Australia", "Canada"], hint: "There are 193 member states." },
  { id: "q265", category: "40+", question: "Name a famous historical leader, king, or ruler.", exampleAnswers: ["Julius Caesar", "Napoleon Bonaparte", "Genghis Khan", "Alexander the Great", "Cleopatra", "Emperor Akbar", "Winston Churchill", "Abraham Lincoln", "Mao Zedong", "Queen Victoria"], hint: "Kings, emperors, presidents — any era, any country." },
  { id: "q266", category: "40+", question: "Name a president of the United States of America.", exampleAnswers: ["George Washington", "Abraham Lincoln", "Franklin D. Roosevelt", "John F. Kennedy", "Barack Obama", "Donald Trump", "Joe Biden", "Bill Clinton", "George W. Bush", "Ronald Reagan"], hint: "There have been 47 US presidents so far." },
  { id: "q267", category: "40+", question: "Name a state of the United States of America.", exampleAnswers: ["California", "Texas", "New York", "Florida", "Illinois", "Ohio", "Pennsylvania", "Georgia", "Michigan", "Washington"], hint: "There are exactly 50 states." },
  { id: "q268", category: "40+", question: "Name a type of rock or mineral found in nature.", exampleAnswers: ["Granite", "Marble", "Limestone", "Quartz", "Diamond", "Gold", "Silver", "Ruby", "Emerald", "Basalt"], hint: "Natural geological materials found in the Earth." },
  { id: "q269", category: "40+", question: "Name a political party from any country in the world.", exampleAnswers: ["Awami League", "BNP", "BJP", "Indian National Congress", "Labour Party", "Republican Party", "Democratic Party", "Communist Party of China", "ANC", "Liberal Democrats"], hint: "Any recognized political organization from any nation." },
  { id: "q270", category: "40+", question: "Name something you can buy at a pharmacy or medicine shop.", exampleAnswers: ["Paracetamol", "Antacid", "Antibiotics", "Bandage", "Thermometer", "Eye drops", "Vitamin tablets", "Cough syrup", "Saline", "Insulin"], hint: "Medicines and health products sold at a chemist." },
  { id: "q271", category: "40+", question: "Name a type of bacteria, virus, or microorganism.", exampleAnswers: ["E. coli", "Salmonella", "Streptococcus", "Staphylococcus", "HIV", "Influenza virus", "Cholera bacteria", "Tuberculosis bacteria", "Yeast", "Amoeba"], hint: "Microscopic organisms — bacteria, viruses, fungi, and more." },
  { id: "q272", category: "40+", question: "Name a common household chemical or cleaning product.", exampleAnswers: ["Bleach", "Vinegar", "Baking soda", "Detergent", "Ammonia", "Hydrogen peroxide", "Dish soap", "Toilet cleaner", "Phenyl", "Hand sanitizer"], hint: "Chemicals you use for cleaning around the house." },
  { id: "q273", category: "40+", question: "Name a food or dish that is popular in Bangladesh.", exampleAnswers: ["Hilsa curry (Shorshe ilish)", "Biryani", "Dal (lentils)", "Roti", "Pittha", "Khichuri", "Bharta", "Halim", "Muri mix", "Chicken curry"], hint: "Dishes commonly eaten in Bangladeshi homes." },
  { id: "q274", category: "40+", question: "Name a well-known multinational company or global brand.", exampleAnswers: ["Google", "Apple", "Microsoft", "Amazon", "Samsung", "Toyota", "Coca-Cola", "Nike", "HSBC", "Unilever"], hint: "Companies that operate across many countries." },
  { id: "q275", category: "40+", question: "Name a type of natural habitat or ecosystem.", exampleAnswers: ["Rainforest", "Desert", "Ocean", "Grassland", "Wetland", "Coral reef", "Tundra", "Mangrove", "Savanna", "Taiga"], hint: "Where wild animals and plants naturally live." },
  { id: "q276", category: "40+", question: "Name a part of the human body.", exampleAnswers: ["Head", "Hand", "Knee", "Elbow", "Shoulder", "Spine", "Chest", "Ankle", "Wrist", "Skull"], hint: "Any named body part — there are hundreds." },

  // ═══════════════════════════════════════════════════════════════════
  // NEW ADDITIONS — 20-40 answers
  // ═══════════════════════════════════════════════════════════════════

  { id: "q277", category: "20-40", question: "Name a recognized political ideology or system of governance.", exampleAnswers: ["Democracy", "Communism", "Socialism", "Capitalism", "Fascism", "Liberalism", "Conservatism", "Anarchism", "Monarchy", "Theocracy"], hint: "Schools of political thought and systems of rule." },
  { id: "q278", category: "20-40", question: "Name a member country of the G20.", exampleAnswers: ["USA", "China", "India", "Germany", "UK", "France", "Japan", "Brazil", "Canada", "South Korea"], hint: "There are 19 member countries plus the European Union." },
  { id: "q279", category: "20-40", question: "Name a major global stock market or stock exchange.", exampleAnswers: ["NYSE New York", "NASDAQ", "London Stock Exchange", "Tokyo Stock Exchange", "Shanghai Stock Exchange", "DSE Dhaka", "BSE Mumbai", "Hong Kong Exchange", "Frankfurt Stock Exchange", "Toronto Stock Exchange"], hint: "Around 60 major exchanges operate worldwide." },
  { id: "q280", category: "20-40", question: "Name a type of chemical reaction.", exampleAnswers: ["Combustion", "Oxidation", "Neutralization", "Precipitation", "Photosynthesis", "Decomposition", "Synthesis reaction", "Reduction", "Acid-base reaction", "Polymerization"], hint: "The different ways chemical substances transform." },
  { id: "q281", category: "20-40", question: "Name a prime minister or president of Bangladesh.", exampleAnswers: ["Sheikh Mujibur Rahman", "Sheikh Hasina", "Khaleda Zia", "Ziaur Rahman", "H.M. Ershad", "Muhammad Yunus", "Tajuddin Ahmed", "Azizur Rahman", "Moudud Ahmed", "Fakhruddin Ahmed"], hint: "Bangladesh has had many heads of government since independence in 1971." },
  { id: "q282", category: "20-40", question: "Name a famous physicist.", exampleAnswers: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Marie Curie", "Richard Feynman", "Werner Heisenberg", "Max Planck", "Enrico Fermi", "Ernest Rutherford", "Stephen Hawking"], hint: "Scientists who shaped our understanding of the physical world." },
  { id: "q283", category: "20-40", question: "Name a type of investment or way to grow wealth.", exampleAnswers: ["Stocks", "Bonds", "Real estate", "Gold", "Mutual funds", "Fixed deposit", "Cryptocurrency", "Savings account", "Business ownership", "Treasury bills"], hint: "Ways people put money to work for the future." },
  { id: "q284", category: "20-40", question: "Name a branch or field of science.", exampleAnswers: ["Physics", "Chemistry", "Biology", "Astronomy", "Geology", "Ecology", "Genetics", "Neuroscience", "Biochemistry", "Microbiology"], hint: "The different areas of scientific study and research." },
  { id: "q285", category: "20-40", question: "Name a freedom fighter, national hero, or founding figure of Bangladesh.", exampleAnswers: ["Sheikh Mujibur Rahman", "Ziaur Rahman", "General Osmani", "Tajuddin Ahmed", "Syed Nazrul Islam", "A.K. Fazlul Huq", "Surjya Sen (Masterda)", "Titumir", "Pritilata Waddedar", "Lalon Shah"], hint: "Heroes of the 1971 Liberation War and earlier independence movements." },
  { id: "q286", category: "20-40", question: "Name a type of tax.", exampleAnswers: ["Income tax", "VAT (Value Added Tax)", "Import duty", "Corporate tax", "Property tax", "Capital gains tax", "Excise duty", "Customs duty", "Sales tax", "Withholding tax"], hint: "Different ways governments collect revenue from citizens and businesses." },
  { id: "q287", category: "20-40", question: "Name a hormone produced in the human body.", exampleAnswers: ["Insulin", "Adrenaline (Epinephrine)", "Cortisol", "Testosterone", "Estrogen", "Oxytocin", "Serotonin", "Thyroid hormone", "Growth hormone", "Melatonin"], hint: "Chemical messengers produced by glands in the body." },
  { id: "q288", category: "20-40", question: "Name a type of energy in physics.", exampleAnswers: ["Kinetic energy", "Potential energy", "Thermal energy", "Chemical energy", "Electrical energy", "Nuclear energy", "Sound energy", "Light energy", "Elastic potential energy", "Gravitational potential energy"], hint: "The different forms that energy can take." },
  { id: "q289", category: "20-40", question: "Name a well-known international organization or UN agency.", exampleAnswers: ["WHO", "UNICEF", "UNESCO", "IMF", "World Bank", "WTO", "UNHCR", "FAO", "IAEA", "ILO"], hint: "Global bodies working on peace, health, trade, and development." },
  { id: "q290", category: "20-40", question: "Name a cryptocurrency.", exampleAnswers: ["Bitcoin", "Ethereum", "BNB (Binance Coin)", "Tether", "Solana", "XRP (Ripple)", "Dogecoin", "Cardano", "Litecoin", "Polkadot"], hint: "Digital currencies that run on blockchain technology." },
  { id: "q291", category: "20-40", question: "Name a famous historical figure from Bangladesh or undivided Bengal.", exampleAnswers: ["Rabindranath Tagore", "Kazi Nazrul Islam", "Begum Rokeya", "A.K. Fazlul Huq", "Jagadish Chandra Bose", "Iswar Chandra Vidyasagar", "Michael Madhusudan Dutt", "Lalon Shah", "Siraj ud-Daulah", "Sher-e-Bangla"], hint: "People from Bengali history who left a lasting legacy." },
  { id: "q292", category: "20-40", question: "Name a type of bank or financial institution.", exampleAnswers: ["Central bank", "Commercial bank", "Islamic bank", "Investment bank", "Microfinance institution", "Development bank", "Cooperative bank", "Digital bank", "Insurance company", "Non-bank financial institution (NBFI)"], hint: "Institutions that deal with money, loans, and savings." },
  { id: "q293", category: "20-40", question: "Name a metal element from the periodic table.", exampleAnswers: ["Iron", "Gold", "Silver", "Copper", "Aluminum", "Zinc", "Lead", "Nickel", "Titanium", "Platinum"], hint: "The majority of the periodic table consists of metals." },
  { id: "q294", category: "20-40", question: "Name a recognized international human right.", exampleAnswers: ["Right to life", "Right to education", "Freedom of speech", "Right to vote", "Right to equality", "Freedom from torture", "Right to work", "Right to privacy", "Right to a fair trial", "Freedom of religion"], hint: "Basic rights recognized by the UN Declaration of Human Rights." },
  { id: "q295", category: "20-40", question: "Name a political party of Bangladesh.", exampleAnswers: ["Awami League", "Bangladesh Nationalist Party (BNP)", "Jatiya Party", "Jamaat-e-Islami Bangladesh", "Workers Party of Bangladesh", "Gono Forum", "Jatiya Samajtantrik Dal (JSD)", "Bangladesh Communist Party", "Liberal Democratic Party (LDP)", "Nagorik Oikya"], hint: "Parties that participate in Bangladeshi national elections." },
  { id: "q296", category: "20-40", question: "Name a class or type of organic compound in chemistry.", exampleAnswers: ["Alcohol", "Aldehyde", "Ketone", "Carboxylic acid", "Ester", "Amine", "Alkane", "Alkene", "Benzene (Aromatic compound)", "Ether"], hint: "Classes of carbon-containing compounds studied in organic chemistry." },

  // ═══════════════════════════════════════════════════════════════════
  // NEW ADDITIONS — 10-20 answers
  // ═══════════════════════════════════════════════════════════════════

  { id: "q297", category: "10-20", question: "Name a major export product or industry of Bangladesh.", exampleAnswers: ["Ready-made garments (RMG)", "Jute products", "Shrimp and seafood", "Leather goods", "Pharmaceuticals", "Frozen fish", "Tea", "Textile fabrics", "Ceramics", "Software and IT services"], hint: "Products and industries that Bangladesh is known for globally." },
  { id: "q298", category: "10-20", question: "Name a type of white blood cell (leukocyte).", exampleAnswers: ["Neutrophil", "Lymphocyte", "Monocyte", "Eosinophil", "Basophil", "T cell", "B cell", "NK (natural killer) cell", "Dendritic cell", "Macrophage"], hint: "Cells of the immune system that fight infection — 5 main types." },
  { id: "q299", category: "10-20", question: "Name a part or organ of the human digestive system.", exampleAnswers: ["Mouth", "Esophagus", "Stomach", "Small intestine", "Large intestine", "Liver", "Pancreas", "Gallbladder", "Rectum", "Anus"], hint: "The organs that break down and absorb food." },
  { id: "q300", category: "10-20", question: "Name a law or principle in physics named after a scientist.", exampleAnswers: ["Newton's Laws of Motion", "Boyle's Law", "Ohm's Law", "Faraday's Law", "Hooke's Law", "Archimedes' Principle", "Bernoulli's Principle", "Charles' Law", "Coulomb's Law", "Kepler's Laws"], hint: "Many key physics principles carry the name of their discoverer." },
  { id: "q301", category: "10-20", question: "Name a cell organelle found in eukaryotic cells.", exampleAnswers: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic reticulum", "Golgi apparatus", "Vacuole", "Lysosome", "Cell membrane", "Cytoplasm", "Chloroplast"], hint: "Tiny structures inside a cell that each have specific jobs." },
  { id: "q302", category: "10-20", question: "Name a major stock market index in the world.", exampleAnswers: ["S&P 500", "Dow Jones (DJIA)", "NASDAQ Composite", "FTSE 100", "Nikkei 225", "DAX", "Hang Seng", "BSE Sensex", "Shanghai Composite", "DSEX (Dhaka Stock Exchange)"], hint: "Financial benchmarks that track groups of stocks." },
  { id: "q303", category: "10-20", question: "Name a branch or field of mathematics.", exampleAnswers: ["Algebra", "Geometry", "Calculus", "Statistics", "Trigonometry", "Number theory", "Topology", "Combinatorics", "Linear algebra", "Probability theory"], hint: "The different areas of mathematical study." },
  { id: "q304", category: "10-20", question: "Name a commonly used acid in chemistry or biology.", exampleAnswers: ["Hydrochloric acid (HCl)", "Sulfuric acid (H2SO4)", "Nitric acid", "Acetic acid (vinegar)", "Citric acid", "Lactic acid", "Carbonic acid", "Phosphoric acid", "Ascorbic acid (Vitamin C)", "Formic acid"], hint: "Substances with a pH below 7 — found in labs and daily life." },
  { id: "q305", category: "10-20", question: "Name a famous landmark or tourist attraction in Bangladesh.", exampleAnswers: ["Lalbagh Fort", "Ahsan Manzil (Pink Palace)", "Sundarbans", "Cox's Bazar beach", "Paharpur ruins (Somapura Mahavihara)", "Sixty Dome Mosque (Shat Gambuj)", "Dhaka National Museum", "Kaptai Lake", "Rangamati hill tracts", "National Parliament Building"], hint: "Places that make Bangladesh special to locals and tourists." },
  { id: "q306", category: "10-20", question: "Name a factor that causes or drives inflation.", exampleAnswers: ["Rising oil prices", "Increased money supply", "High consumer demand", "Supply shortages", "Import price increases", "Wage increases", "Government deficit spending", "Currency devaluation", "Crop failure", "Global commodity price hike"], hint: "Things that make prices rise across an economy." },
  { id: "q307", category: "10-20", question: "Name a part or component of the human nervous system.", exampleAnswers: ["Brain", "Spinal cord", "Neurons", "Peripheral nerves", "Cerebrum", "Cerebellum", "Brain stem", "Sensory nerves", "Motor nerves", "Synapses"], hint: "The network that controls thought, movement, and body functions." },
  { id: "q308", category: "10-20", question: "Name a macroeconomic indicator used to measure a country's economy.", exampleAnswers: ["GDP (Gross Domestic Product)", "Inflation rate", "Unemployment rate", "Trade balance", "Foreign exchange reserves", "Interest rate", "Exchange rate", "GNP", "HDI (Human Development Index)", "Gini coefficient"], hint: "Numbers economists use to describe how a country is performing." },
  { id: "q309", category: "10-20", question: "Name a major agricultural crop grown in Bangladesh.", exampleAnswers: ["Rice (dhan)", "Jute (paat)", "Wheat", "Sugarcane", "Tea", "Mustard", "Potato", "Lentil (dal)", "Mango", "Jackfruit (kathal)"], hint: "Bangladesh is primarily an agricultural country — think of common crops." },
  { id: "q310", category: "10-20", question: "Name a basic mathematical operation or concept.", exampleAnswers: ["Addition", "Subtraction", "Multiplication", "Division", "Exponentiation", "Square root", "Logarithm", "Differentiation (calculus)", "Integration (calculus)", "Modulus (remainder)"], hint: "From primary school arithmetic to university-level math." },
  { id: "q311", category: "10-20", question: "Name a fundamental concept in personal finance or investing.", exampleAnswers: ["Interest rate", "Compound interest", "Return on Investment (ROI)", "Risk", "Diversification", "Inflation", "Liquidity", "Portfolio", "Equity", "Debt"], hint: "Key ideas for understanding and managing money." },
  { id: "q312", category: "10-20", question: "Name a major canal or strait important for global shipping.", exampleAnswers: ["Suez Canal", "Panama Canal", "Strait of Hormuz", "Strait of Malacca", "Bosphorus Strait", "Strait of Gibraltar", "English Channel", "Drake Passage", "Bab-el-Mandeb Strait", "Torres Strait"], hint: "Key waterways that connect major international trade routes." },
  { id: "q313", category: "10-20", question: "Name a type of government or political system.", exampleAnswers: ["Democracy", "Constitutional monarchy", "Republic", "Dictatorship", "Federal system", "Parliamentary system", "Presidential system", "Theocracy", "Oligarchy", "Military junta"], hint: "Different ways that governments are structured and run." },
  { id: "q314", category: "10-20", question: "Name a key feature or principle of a democratic government.", exampleAnswers: ["Free and fair elections", "Rule of law", "Separation of powers", "Freedom of speech", "Universal suffrage", "Independent judiciary", "Civil liberties", "Majority rule with minority rights", "Transparency and accountability", "Free press"], hint: "What makes a political system truly democratic." },
  { id: "q315", category: "10-20", question: "Name a part of the human brain.", exampleAnswers: ["Cerebrum", "Cerebellum", "Brain stem", "Frontal lobe", "Temporal lobe", "Parietal lobe", "Occipital lobe", "Hippocampus", "Amygdala", "Hypothalamus"], hint: "Different regions of the brain that each control different functions." },
  { id: "q316", category: "10-20", question: "Name a historically significant event in Bangladesh's history.", exampleAnswers: ["1952 Language Movement (Bhasha Andolan)", "1971 Liberation War", "1970 General Election", "Bangladesh Declaration of Independence 1971", "1975 coup and assassination of Mujib", "1990 Mass Uprising (Gono Obbhuthan)", "2013 Shahbag Movement", "2007 Military Caretaker Government", "2024 Student-led uprising", "1974 famine"], hint: "Major turning points in Bangladesh's modern history." },
  { id: "q317", category: "10-20", question: "Name something that is studied in the field of economics.", exampleAnswers: ["Supply and demand", "Inflation and deflation", "GDP measurement", "Trade policy", "Labor market", "Monetary policy", "Fiscal policy", "Market structures", "International trade", "Taxation"], hint: "Topics covered in an economics course." },
  { id: "q318", category: "10-20", question: "Name a major cause or driver of climate change.", exampleAnswers: ["Burning fossil fuels (coal oil gas)", "Deforestation", "Industrial emissions", "Methane from livestock", "Transportation pollution", "Coal-fired power plants", "Melting permafrost", "Agricultural practices", "Cement production", "Waste decomposition in landfills"], hint: "Human activities and natural feedbacks that are warming the planet." },
  { id: "q319", category: "10-20", question: "Name a disease or health problem that is common in Bangladesh.", exampleAnswers: ["Dengue fever", "Typhoid", "Cholera", "Tuberculosis (TB)", "Malaria", "Arsenic poisoning (from groundwater)", "Diabetes", "Diarrhea", "Acute respiratory infection", "Malnutrition"], hint: "Health conditions frequently seen in Bangladeshi communities." },
  { id: "q320", category: "10-20", question: "Name a Fibonacci number less than 100.", exampleAnswers: ["0", "1", "2", "3", "5", "8", "13", "21", "34", "55", "89"], hint: "Each number in this sequence equals the sum of the two before it." },
  { id: "q321", category: "10-20", question: "Name a key concept in organic chemistry.", exampleAnswers: ["Functional group", "Carbon backbone", "Isomer", "Polymer", "Hydrocarbon", "Saturated compound", "Unsaturated compound", "Esterification", "Benzene ring (aromatic)", "Structural formula"], hint: "Core ideas in the chemistry of carbon-containing molecules." },

  // ═══════════════════════════════════════════════════════════════════
  // NEW ADDITIONS — 5-10 answers
  // ═══════════════════════════════════════════════════════════════════

  { id: "q322", category: "5-10", question: "Name a type of chemical bond.", exampleAnswers: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond", "Van der Waals forces", "Coordinate (dative covalent) bond"], hint: "The different ways atoms bond together — 6 main types." },
  { id: "q323", category: "5-10", question: "Name a type of wave in the electromagnetic spectrum.", exampleAnswers: ["Radio waves", "Microwaves", "Infrared radiation", "Visible light", "Ultraviolet radiation", "X-rays", "Gamma rays"], hint: "There are 7 main bands, ordered from lowest to highest frequency." },
  { id: "q324", category: "5-10", question: "Name a Nobel Prize category.", exampleAnswers: ["Physics", "Chemistry", "Physiology or Medicine", "Literature", "Peace", "Economic Sciences"], hint: "There are exactly 6 Nobel Prize categories." },
  { id: "q325", category: "5-10", question: "Name a country that has won the ICC Cricket World Cup.", exampleAnswers: ["Australia", "India", "West Indies", "Pakistan", "Sri Lanka", "England"], hint: "Only 6 nations have ever lifted the ODI Cricket World Cup trophy." },
  { id: "q326", category: "5-10", question: "Name a major cricket league or international tournament.", exampleAnswers: ["ICC Cricket World Cup", "ICC T20 World Cup", "Asia Cup", "IPL (Indian Premier League)", "BPL (Bangladesh Premier League)", "The Ashes", "ICC Champions Trophy", "BBL (Australia)", "CPL (Caribbean Premier League)", "PSL (Pakistan Super League)"], hint: "Competitions played at international and franchise level." },
  { id: "q327", category: "5-10", question: "Name a branch of physics.", exampleAnswers: ["Classical mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Quantum mechanics", "Nuclear physics", "Astrophysics", "Acoustics"], hint: "The different specialized sub-fields within physics." },
  { id: "q328", category: "5-10", question: "Name a type of government bond or treasury security.", exampleAnswers: ["Treasury bill (T-bill)", "Treasury note", "Treasury bond", "Government savings bond", "Municipal bond", "Sovereign bond", "Sukuk (Islamic bond)"], hint: "Debt instruments issued by governments to raise funds." },
  { id: "q329", category: "5-10", question: "Name a blood type in the ABO and Rh combined system.", exampleAnswers: ["A positive (A+)", "A negative (A-)", "B positive (B+)", "B negative (B-)", "AB positive (AB+)", "AB negative (AB-)", "O positive (O+)", "O negative (O-)"], hint: "Combining ABO and Rh factor gives exactly 8 possible blood types." },
  { id: "q330", category: "5-10", question: "Name a subatomic particle.", exampleAnswers: ["Proton", "Neutron", "Electron", "Quark", "Photon", "Neutrino", "Positron", "Muon"], hint: "Particles smaller than — or making up — an atom." },
  { id: "q331", category: "5-10", question: "Name an alkali metal (Group 1 of the periodic table).", exampleAnswers: ["Lithium (Li)", "Sodium (Na)", "Potassium (K)", "Rubidium (Rb)", "Caesium (Cs)", "Francium (Fr)"], hint: "Highly reactive metals in the first column — exactly 6 of them." },
  { id: "q332", category: "5-10", question: "Name a halogen element (Group 17 of the periodic table).", exampleAnswers: ["Fluorine (F)", "Chlorine (Cl)", "Bromine (Br)", "Iodine (I)", "Astatine (At)", "Tennessine (Ts)"], hint: "Reactive non-metals in Group 17 — there are exactly 6." },
  { id: "q333", category: "5-10", question: "Name a type of logic gate in digital electronics.", exampleAnswers: ["AND gate", "OR gate", "NOT gate", "NAND gate", "NOR gate", "XOR gate", "XNOR gate"], hint: "The building blocks of digital circuits — 7 standard types." },
  { id: "q334", category: "5-10", question: "Name a type of microscope.", exampleAnswers: ["Light (optical) microscope", "Electron microscope", "Scanning Electron Microscope (SEM)", "Transmission Electron Microscope (TEM)", "Fluorescence microscope", "Atomic Force Microscope (AFM)", "Confocal microscope"], hint: "Instruments used to see things too small for the naked eye." },
  { id: "q335", category: "5-10", question: "Name a measurable physical property of a substance.", exampleAnswers: ["Mass", "Volume", "Density", "Temperature", "Pressure", "Electrical resistance", "pH", "Thermal conductivity", "Viscosity", "Refractive index"], hint: "Quantities measured in a physics or chemistry lab." },
  { id: "q336", category: "5-10", question: "Name a layer of the Sun.", exampleAnswers: ["Core", "Radiative zone", "Convective zone", "Photosphere", "Chromosphere", "Corona"], hint: "The Sun has 6 main layers from its centre to its outer atmosphere." },
  { id: "q337", category: "5-10", question: "Name an optical phenomenon.", exampleAnswers: ["Reflection", "Refraction", "Diffraction", "Dispersion", "Total internal reflection", "Scattering", "Polarization"], hint: "Things that happen when light interacts with matter." },
  { id: "q338", category: "5-10", question: "Name a type of graph used in mathematics or statistics.", exampleAnswers: ["Line graph", "Bar chart", "Pie chart", "Histogram", "Scatter plot", "Box plot (box-and-whisker)", "Frequency polygon", "Cumulative frequency curve"], hint: "Visual representations of data or mathematical functions." },
  { id: "q339", category: "5-10", question: "Name a fundamental right or freedom in the Bangladesh Constitution.", exampleAnswers: ["Right to equality", "Right to life and personal liberty", "Freedom of thought and expression", "Freedom of religion", "Right to education", "Freedom of movement", "Right to a fair trial", "Protection from arbitrary arrest"], hint: "Basic rights guaranteed to every citizen of Bangladesh." },
  { id: "q340", category: "5-10", question: "Name a type of market structure in economics.", exampleAnswers: ["Perfect competition", "Monopolistic competition", "Oligopoly", "Monopoly", "Duopoly", "Monopsony"], hint: "Economic models based on how many sellers compete in a market." },
  { id: "q341", category: "5-10", question: "Name a country that is known to possess nuclear weapons.", exampleAnswers: ["United States", "Russia", "China", "United Kingdom", "France", "India", "Pakistan", "North Korea", "Israel"], hint: "Nine countries are believed to hold nuclear warheads." },
  { id: "q342", category: "5-10", question: "Name a branch of chemistry.", exampleAnswers: ["Organic chemistry", "Inorganic chemistry", "Physical chemistry", "Analytical chemistry", "Biochemistry", "Nuclear chemistry", "Electrochemistry"], hint: "Different specialized fields within the science of chemistry." },
  { id: "q343", category: "5-10", question: "Name a type of computer network.", exampleAnswers: ["LAN (Local Area Network)", "WAN (Wide Area Network)", "MAN (Metropolitan Area Network)", "PAN (Personal Area Network)", "VPN (Virtual Private Network)", "Internet", "Intranet"], hint: "Networks classified by scale, ownership, and purpose." },
  { id: "q344", category: "5-10", question: "Name a phase of the Moon.", exampleAnswers: ["New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous", "Full Moon", "Waning Gibbous", "Last Quarter", "Waning Crescent"], hint: "The Moon goes through 8 distinct phases in about 29.5 days." },
  { id: "q345", category: "5-10", question: "Name a country in South Asia.", exampleAnswers: ["Bangladesh", "India", "Pakistan", "Nepal", "Bhutan", "Sri Lanka", "Maldives", "Afghanistan"], hint: "There are 8 countries in the South Asian region." },
  { id: "q346", category: "5-10", question: "Name a type of loop used in programming.", exampleAnswers: ["For loop", "While loop", "Do-while loop", "For-each loop", "For-in loop", "For-of loop", "Recursive function call"], hint: "Different ways to repeat a block of code." },
  { id: "q347", category: "5-10", question: "Name a major climate zone or biome on Earth.", exampleAnswers: ["Tropical rainforest", "Desert", "Tropical savanna (grassland)", "Temperate deciduous forest", "Boreal forest (Taiga)", "Tundra", "Mediterranean shrubland", "Wetland"], hint: "Large regions of the planet defined by their climate and plant life." },
  { id: "q348", category: "5-10", question: "Name a water-soluble vitamin.", exampleAnswers: ["Vitamin C (Ascorbic acid)", "Vitamin B1 (Thiamine)", "Vitamin B2 (Riboflavin)", "Vitamin B3 (Niacin)", "Vitamin B5 (Pantothenic acid)", "Vitamin B6", "Vitamin B7 (Biotin)", "Vitamin B9 (Folic acid)", "Vitamin B12 (Cobalamin)"], hint: "The entire B-group family plus Vitamin C — all dissolve in water." },
  { id: "q349", category: "5-10", question: "Name an organ or structure of the human immune system.", exampleAnswers: ["Thymus", "Spleen", "Lymph nodes", "Bone marrow", "Tonsils", "Appendix", "Peyer's patches (in the gut)"], hint: "Organs that help the body detect and fight disease and infection." },
  { id: "q350", category: "5-10", question: "Name a type of economic system.", exampleAnswers: ["Capitalism (free market)", "Socialism", "Communism", "Mixed economy", "Command economy (planned)", "Traditional economy"], hint: "The main ways societies organize production and distribution of resources." },
  { id: "q351", category: "5-10", question: "Name a regular polygon.", exampleAnswers: ["Equilateral triangle", "Square", "Regular pentagon", "Regular hexagon", "Regular heptagon", "Regular octagon", "Regular nonagon", "Regular decagon"], hint: "Polygons where all sides are equal and all interior angles are equal." },
  { id: "q352", category: "5-10", question: "Name an acid-base indicator used in a chemistry lab.", exampleAnswers: ["Litmus", "Phenolphthalein", "Methyl orange", "Bromothymol blue", "Universal indicator", "Red cabbage juice"], hint: "Substances that change colour to show whether a solution is acidic or basic." },
  { id: "q353", category: "5-10", question: "Name a characteristic physical property of metals.", exampleAnswers: ["Luster (shiny surface)", "Electrical conductivity", "Thermal conductivity", "Malleability (can be beaten into sheets)", "Ductility (can be drawn into wire)", "High melting point", "Hardness", "Corrosion resistance"], hint: "The properties that make metals such useful and versatile materials." },
  { id: "q354", category: "5-10", question: "Name a major function of the human liver.", exampleAnswers: ["Bile production for digestion", "Detoxification of blood", "Glycogen storage (energy reserve)", "Protein synthesis", "Blood clotting factor production", "Cholesterol regulation", "Drug and alcohol metabolism", "Immune support"], hint: "The liver performs over 500 functions — it is the body's chemical factory." },
  { id: "q355", category: "5-10", question: "Name a type of financial or economic market.", exampleAnswers: ["Stock market", "Bond market", "Foreign exchange (Forex) market", "Commodity market", "Real estate market", "Labor market", "Money market", "Derivatives market"], hint: "Markets where different types of assets or resources are traded." },
  { id: "q356", category: "5-10", question: "Name a festival or cultural tradition celebrated in Bangladesh.", exampleAnswers: ["Eid ul-Fitr", "Eid ul-Adha", "Pahela Baishakh (Bengali New Year)", "Durga Puja", "Nobanno (harvest festival)", "Shab-e-Barat", "Eid-e-Miladunnabi", "Saraswati Puja", "Buddha Purnima", "Bijoya Dashami"], hint: "Religious and cultural celebrations observed across Bangladesh." },

  // ═══════════════════════════════════════════════════════════════════
  // NEW ADDITIONS — 1-5 answers
  // ═══════════════════════════════════════════════════════════════════

  { id: "q357", category: "1-5", question: "Name a type of tissue in the human body.", exampleAnswers: ["Epithelial tissue", "Connective tissue", "Muscle tissue", "Nervous tissue"], hint: "There are exactly 4 fundamental types of tissue." },
  { id: "q358", category: "1-5", question: "Name an original founding member of BRICS.", exampleAnswers: ["Brazil", "Russia", "India", "China", "South Africa"], hint: "The original 5 nations that formed the BRICS group." },
  { id: "q359", category: "1-5", question: "Name a fat-soluble vitamin.", exampleAnswers: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"], hint: "There are exactly 4 fat-soluble vitamins — remember them as ADEK." },
  { id: "q360", category: "1-5", question: "Name a number system used in computing.", exampleAnswers: ["Binary (base-2)", "Octal (base-8)", "Decimal (base-10)", "Hexadecimal (base-16)"], hint: "The 4 main numeral systems in computer science." },
  { id: "q361", category: "1-5", question: "Name a sector of the economy.", exampleAnswers: ["Primary sector (agriculture and mining)", "Secondary sector (manufacturing)", "Tertiary sector (services)", "Quaternary sector (information and research)"], hint: "Economists divide the economy into 4 main sectors." },

  // ═══════════════════════════════════════════════════════════════════
  // NEW ADDITIONS — 1-3 answers  (Sudden death)
  // ═══════════════════════════════════════════════════════════════════

  { id: "q362", category: "1-3", question: "Name a type of tectonic plate boundary.", exampleAnswers: ["Convergent boundary", "Divergent boundary", "Transform boundary"], hint: "There are exactly 3 types of plate boundaries." },
  { id: "q363", category: "1-3", question: "Name a type of biological feedback mechanism in the body.", exampleAnswers: ["Positive feedback", "Negative feedback"], hint: "There are 2 ways the body regulates its own processes." },
  { id: "q364", category: "1-3", question: "Name a type of chemical reaction classified by energy exchange.", exampleAnswers: ["Exothermic reaction (releases heat)", "Endothermic reaction (absorbs heat)"], hint: "Reactions either release or absorb energy — exactly 2 types." },
  { id: "q365", category: "1-3", question: "Name a macronutrient the human body needs for energy.", exampleAnswers: ["Carbohydrates", "Protein", "Fat (Lipids)"], hint: "The 3 main energy-providing food groups." },
  { id: "q366", category: "1-3", question: "Name a type of nuclear reaction that releases enormous energy.", exampleAnswers: ["Nuclear fission (splitting atoms)", "Nuclear fusion (joining atoms)"], hint: "There are 2 ways atomic nuclei can release nuclear energy." }

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

function getCategoryForPlayerCount(count) {
  if (count >= 30) return "40+";
  if (count >= 15) return "20-40";
  if (count >= 8)  return "10-20";
  if (count >= 4)  return "5-10";
  if (count >= 2)  return "1-5";
  return "1-3";
}

function randomLockDuration() {
  return 3 + Math.floor(Math.random() * 3);
}

function getNextCategory(currentCategory) {
  const idx = CATEGORY_ORDER.indexOf(currentCategory);
  if (idx === -1 || idx >= CATEGORY_ORDER.length - 1) return CATEGORY_ORDER[CATEGORY_ORDER.length - 1];
  return CATEGORY_ORDER[idx + 1];
}

function getPrevCategory(currentCategory) {
  const idx = CATEGORY_ORDER.indexOf(currentCategory);
  if (idx <= 0) return CATEGORY_ORDER[0];
  return CATEGORY_ORDER[idx - 1];
}

function compareDifficulty(a, b) {
  return CATEGORY_ORDER.indexOf(a) - CATEGORY_ORDER.indexOf(b);
}

function resolveCategory(game, activePlayerCount) {
  if (game.round === 1) {
    const cat = "40+";
    game.currentCategory = cat;
    game.roundsOnCurrentCategory = 1;
    game.categoryLockRounds = randomLockDuration();
    return cat;
  }

  const naturalCat = getCategoryForPlayerCount(activePlayerCount);

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
    if (naturalIdx >= currentIdx + 2) {
      const newCat = CATEGORY_ORDER[Math.min(currentIdx + 1, CATEGORY_ORDER.length - 1)];
      game.currentCategory = newCat;
      game.roundsOnCurrentCategory = 1;
      game.categoryLockRounds = randomLockDuration();
      return newCat;
    }
    return game.currentCategory;
  }

  let newCat = game.currentCategory;
  if (naturalIdx > currentIdx) {
    newCat = CATEGORY_ORDER[currentIdx + 1];
  } else if (naturalIdx < currentIdx) {
    newCat = CATEGORY_ORDER[Math.max(currentIdx - 1, 0)];
  }

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
