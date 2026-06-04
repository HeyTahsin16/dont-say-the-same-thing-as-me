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
  // ═══════════════════════════════════════════════
  // HSC Syllabus Standard Extra Questions (q200 - q299)
  // ═══════════════════════════════════════════════

  // ─── PHYSICS ───────────────────────────────────
  { id: "q200", category: "1-5", question: "Name a primary thermodynamic process where a specific property remains constant.", exampleAnswers: ["Isothermal", "Isobaric", "Isochoric", "Adiabatic"], hint: "Processes keeping temperature, pressure, volume, or net heat constant." },
  { id: "q201", category: "1-3", question: "Name a standard 2D coordinate system used to locate a point in a plane.", exampleAnswers: ["Cartesian", "Polar"], hint: "Either rectangular grids or angles and distances." },
  { id: "q202", category: "5-10", question: "Name a prefix used in the SI system for fractional multipliers (less than 1).", exampleAnswers: ["Milli", "Micro", "Nano", "Pico", "Femto", "Centi", "Deci"], hint: "Think negative powers of 10 like 10^-3, 10^-6, etc." },
  { id: "q203", category: "5-10", question: "Name a prefix used in the SI system for multiple multipliers (greater than 1).", exampleAnswers: ["Kilo", "Mega", "Giga", "Tera", "Peta"], hint: "Think positive powers of 10 like 10^3, 10^6, etc." },
  { id: "q204", category: "1-3", question: "Name a type of mechanical equilibrium for a rigid body.", exampleAnswers: ["Stable", "Unstable", "Neutral"], hint: "How a body behaves after a slight displacement." },
  { id: "q205", category: "1-5", question: "Name a classification of friction in mechanics.", exampleAnswers: ["Static", "Kinetic", "Rolling", "Fluid"], hint: "Resistance forces depending on state of motion or phase." },
  { id: "q206", category: "1-3", question: "Name a modulus of elasticity defined in Hooke's Law context.", exampleAnswers: ["Young's Modulus", "Bulk Modulus", "Rigidity Modulus"], hint: "Ratios of different types of stress to their corresponding strains." },
  { id: "q207", category: "5-10", question: "Name a vector quantity in classical mechanics.", exampleAnswers: ["Force", "Velocity", "Acceleration", "Momentum", "Torque", "Displacement"], hint: "Physical quantities with both magnitude and explicit direction." },
  { id: "q208", category: "10-20", question: "Name a scalar quantity in standard physics.", exampleAnswers: ["Mass", "Time", "Work", "Energy", "Speed", "Power", "Distance", "Density", "Pressure", "Temperature"], hint: "Physical quantities fully defined by magnitude alone." },
  { id: "q209", category: "1-3", question: "Name a type of mechanical wave based on the direction of particle vibration.", exampleAnswers: ["Transverse", "Longitudinal"], hint: "Whether particles move perpendicular or parallel to the wave direction." },
  { id: "q210", category: "10-20", question: "Name a fundamental particle or gauge boson in the Standard Model of particle physics.", exampleAnswers: ["Up Quark", "Down Quark", "Electron", "Photon", "Gluon", "Higgs Boson", "Neutrino", "Muon"], hint: "The basic building blocks of matter and force carriers." },
  { id: "q211", category: "1-3", question: "Name a type of structural stress in mechanics.", exampleAnswers: ["Tensile", "Compressive", "Shearing"], hint: "Forces pulling apart, pushing together, or sliding parallel planes." },
  { id: "q212", category: "1-5", question: "Name a primary state variable in classical thermodynamics.", exampleAnswers: ["Pressure", "Volume", "Temperature", "Entropy", "Internal Energy"], hint: "Macroscopic parameters defining a system's condition." },
  { id: "q213", category: "5-10", question: "Name a type of thermometer classified by its thermometric property.", exampleAnswers: ["Liquid-in-glass", "Gas thermometer", "Resistance thermometer", "Thermocouple", "Pyrometer"], hint: "Uses properties like volume, pressure, or resistance to read temp." },
  { id: "q214", category: "1-3", question: "Name a fundamental characteristic property of a musical sound wave.", exampleAnswers: ["Pitch", "Intensity", "Timbre"], hint: "Frequency-related, loudness-related, or waveform quality parameters." },
  { id: "q215", category: "5-10", question: "Name a spectral line series in the hydrogen emission spectrum.", exampleAnswers: ["Lyman", "Balmer", "Paschen", "Brackett", "Pfund"], hint: "Transitions of excited electrons down to specific lower shells." },
  { id: "q216", category: "1-5", question: "Name a general category of experimental error in physical measurements.", exampleAnswers: ["Systematic", "Random", "Gross"], hint: "Errors due to instrument bias, chance fluctuations, or human blunders." },
  { id: "q217", category: "1-3", question: "Name a standard method to charge an object with static electricity.", exampleAnswers: ["Friction", "Conduction", "Induction"], hint: "Rubbing surfaces, direct contact, or nearby charging without touching." },
  { id: "q218", category: "5-10", question: "Name a laboratory device used to measure or detect circuit variables.", exampleAnswers: ["Galvanometer", "Ammeter", "Voltmeter", "Ohmmeter", "Multimeter"], hint: "Instruments targeting currents, potentials, or resistances." },
  { id: "q219", category: "1-3", question: "Name a type of frame of reference in special relativity and dynamics.", exampleAnswers: ["Inertial", "Non-inertial"], hint: "Whether or not the reference frame is accelerating." },

  // ─── CHEMISTRY ─────────────────────────────────
  { id: "q220", category: "1-3", question: "Name a type of magnetic behavior seen in chemical substances.", exampleAnswers: ["Diamagnetic", "Paramagnetic", "Ferromagnetic"], hint: "Depends on paired or unpaired electron configurations in magnetic fields." },
  { id: "q221", category: "1-5", question: "Name one of the four core quantum numbers defining an electron.", exampleAnswers: ["Principal", "Azimuthal", "Magnetic", "Spin"], hint: "The quantum values specifying shell, subshell, orientation, and spin." },
  { id: "q222", category: "5-10", question: "Name a primary type of chemical bond or strong interatomic attraction.", exampleAnswers: ["Ionic", "Covalent", "Metallic", "Coordinate Covalent"], hint: "Forces binding atoms together within stable compounds." },
  { id: "q223", category: "1-5", question: "Name an atomic subshell orbital designation.", exampleAnswers: ["s", "p", "d", "f"], hint: "Identified by the letters corresponding to l = 0, 1, 2, 3." },
  { id: "q224", category: "5-10", question: "Name an alkali metal from Group 1 of the periodic table.", exampleAnswers: ["Lithium", "Sodium", "Potassium", "Rubidium", "Cesium", "Francium"], hint: "Excludes Hydrogen; highly reactive elements forming alkaline hydroxides." },
  { id: "q225", category: "5-10", question: "Name an alkaline earth metal from Group 2 of the periodic table.", exampleAnswers: ["Beryllium", "Magnesium", "Calcium", "Strontium", "Barium", "Radium"], hint: "Reactive divalent elements forming basic oxides." },
  { id: "q226", category: "5-10", question: "Name a halogen from Group 17 of the periodic table.", exampleAnswers: ["Fluorine", "Chlorine", "Bromine", "Iodine", "Astatine"], hint: "Highly reactive nonmetals that readily accept an electron to form salts." },
  { id: "q227", category: "5-10", question: "Name a crystal system class used to describe mineral lattices.", exampleAnswers: ["Cubic", "Tetragonal", "Orthorhombic", "Hexagonal", "Monoclinic", "Triclinic", "Rhombohedral"], hint: "The seven basic geometric classifications of crystal structures." },
  { id: "q228", category: "5-10", question: "Name a primary environmental air pollutant gas from industrial/automotive sources.", exampleAnswers: ["Carbon Monoxide", "Sulfur Dioxide", "Nitric Oxide", "Methane", "Ammonia"], hint: "Gases emitted directly into the troposphere causing toxic hazards." },
  { id: "q229", category: "1-3", question: "Name a type of thermodynamic system based on boundary exchanges.", exampleAnswers: ["Open", "Closed", "Isolated"], hint: "Systems exchanging mass/energy, energy only, or absolutely nothing." },
  { id: "q230", category: "10-20", question: "Name a major functional group in organic chemistry.", exampleAnswers: ["Hydroxyl", "Carboxyl", "Carbonyl", "Amino", "Nitro", "Ester", "Ether", "Amide", "Alkyl"], hint: "Specific atom arrangements driving organic class reactivities." },
  { id: "q231", category: "5-10", question: "Name a basic hybridization type of atomic orbitals in carbon compounds.", exampleAnswers: ["sp", "sp2", "sp3", "sp3d", "sp3d2"], hint: "The blending of atomic states for molecular geometry bonds." },
  { id: "q232", category: "5-10", question: "Name a class of structural isomerism in organic structures.", exampleAnswers: ["Chain", "Position", "Functional", "Metamerism", "Tautomerism"], hint: "Isomers distinct because of straight bonding map layouts." },
  { id: "q233", category: "1-3", question: "Name a primary branch of stereoisomerism.", exampleAnswers: ["Geometrical", "Optical"], hint: "Isomers different only in spatial 3D alignment, not bonding layout." },
  { id: "q234", category: "5-10", question: "Name a standard indicator dye used for acid-base volumetric titrations.", exampleAnswers: ["Phenolphthalein", "Methyl Orange", "Litmus", "Methyl Red", "Bromothymol Blue"], hint: "Chemical agents shifting color at explicit pH values." },
  { id: "q235", category: "1-3", question: "Name a parameter that can shift equilibrium positions according to Le Chatelier.", exampleAnswers: ["Concentration", "Temperature", "Pressure"], hint: "System factors altering relative forward or reverse reaction rates." },
  { id: "q236", category: "5-10", question: "Name a chemical compound utilized directly as a food preservative.", exampleAnswers: ["Sodium Benzoate", "Acetic Acid", "Potassium Sorbate", "Sodium Chloride", "Calcium Propionate"], hint: "Additives preventing microbial growth in canned/processed foods." },
  { id: "q237", category: "1-3", question: "Name a classification of electrochemical cell networks.", exampleAnswers: ["Galvanic", "Electrolytic"], hint: "Spontaneous chemical-to-electric converters or electric-to-chemical drivers." },
  { id: "q238", category: "1-3", question: "Name a divalent metal cation responsible for standard water hardness.", exampleAnswers: ["Calcium", "Magnesium"], hint: "Metallic ions reacting with soaps to form insoluble scum precipitate." },
  { id: "q239", category: "5-10", question: "Name a toxic heavy metal water pollutant hazardous to human biology.", exampleAnswers: ["Lead", "Mercury", "Cadmium", "Arsenic", "Chromium"], hint: "Highly toxic industrial waste elements that bioaccumulate in food chains." },

  // ─── HIGHER MATHEMATICS ──────────────────────────
  { id: "q240", category: "1-3", question: "Name a standard nuclear radiation emission type.", exampleAnswers: ["Alpha", "Beta", "Gamma"], hint: "Helium nuclei, high speed electrons, or high energy photons." },
  { id: "q241", category: "10-20", question: "Name a specific structural classification of mathematical matrices.", exampleAnswers: ["Row", "Column", "Square", "Identity", "Diagonal", "Scalar", "Zero", "Symmetric", "Transpose"], hint: "Matrix types labeled by their dimensions or identity setups." },
  { id: "q242", category: "1-5", question: "Name a classic conic section tracking curve equations.", exampleAnswers: ["Circle", "Parabola", "Ellipse", "Hyperbola"], hint: "Geometric tracks derived from slicing a double cone with planes." },
  { id: "q243", category: "1-3", question: "Name a quadrant where the trigonometric sine function yields positive values.", exampleAnswers: ["Quadrant I", "Quadrant II"], hint: "Coordinate zones where the Y coordinate maps above zero." },
  { id: "q244", category: "1-3", question: "Name a quadrant where the trigonometric cosine function yields positive values.", exampleAnswers: ["Quadrant I", "Quadrant IV"], hint: "Coordinate zones where the X coordinate maps right of zero." },
  { id: "q245", category: "1-3", question: "Name a quadrant where the trigonometric tangent function yields positive values.", exampleAnswers: ["Quadrant I", "Quadrant III"], hint: "Coordinate zones where signs of X and Y match identically." },
  { id: "q246", category: "1-5", question: "Name a basic mathematical vector operation.", exampleAnswers: ["Addition", "Subtraction", "Dot Product", "Cross Product", "Scalar Multiplication"], hint: "Combining or transforming directional geometric segments." },
  { id: "q247", category: "1-3", question: "Name a classification of functional discontinuity in calculus.", exampleAnswers: ["Removable", "Jump", "Infinite"], hint: "Graph breaks where limits match but don't equal values, step over, or shoot off." },
  { id: "q248", category: "1-5", question: "Name a core technique or strategy used to resolve calculus integrals.", exampleAnswers: ["Substitution", "Integration by Parts", "Partial Fractions", "Trigonometric Substitution"], hint: "System approaches to undoing differentiation variations." },
  { id: "q249", category: "5-10", question: "Name an element or reference boundary of a parabola's geometric layout.", exampleAnswers: ["Focus", "Directrix", "Vertex", "Axis of Symmetry", "Latus Rectum"], hint: "Key anatomical coordinates and linear bounds defining parabolic paths." },
  { id: "q250", category: "1-3", question: "Name a measurement unit scaling rotational angles.", exampleAnswers: ["Degree", "Radian", "Gradian"], hint: "Standard angular subdivisions used across trigonometry." },
  { id: "q251", category: "1-3", question: "Name a geometric state condition comparing multi-vector sets.", exampleAnswers: ["Parallel", "Perpendicular", "Coplanar"], hint: "Describes vectors facing same lines, square offsets, or identical flat layers." },
  { id: "q252", category: "5-10", question: "Name a specific mapping classification of algebraic functions.", exampleAnswers: ["One-to-one", "Onto", "Into", "Identity", "Constant", "Inverse"], hint: "How domains link to codomains inside standard sets." },
  { id: "q253", category: "1-3", question: "Name a core structural parameter in a linear slope-intercept equation.", exampleAnswers: ["Slope", "Y-intercept"], hint: "The variables scaling incline rate and boundary axis intersection points." },
  { id: "q254", category: "5-10", question: "Name a basic vocabulary term describing foundational probability elements.", exampleAnswers: ["Event", "Sample Space", "Outcome", "Mutually Exclusive"], hint: "Terms defining trials, possible scopes, or results in statistical events." },

  // ─── BIOLOGY ───────────────────────────────────
  { id: "q255", category: "1-5", question: "Name a primary somatic stage within cellular mitosis.", exampleAnswers: ["Prophase", "Prometaphase", "Metaphase", "Anaphase", "Telophase"], hint: "The split phases where nuclear structures dismantle, align, and isolate." },
  { id: "q256", category: "5-10", question: "Name a sub-stage of Prophase I in meiotic cell division.", exampleAnswers: ["Leptotene", "Zygotene", "Pachytene", "Diplotene", "Diakinesis"], hint: "The five evolutionary stages tracking genetic recombination crossing over." },
  { id: "q257", category: "1-3", question: "Name a core organic macronutrient grouping required by animal biology.", exampleAnswers: ["Carbohydrates", "Proteins", "Lipids"], hint: "Sustenance foundations driving energy, muscular repair, and lipid cell layers." },
  { id: "q258", category: "1-5", question: "Name a nitrogenous base molecule integrated inside standard RNA structures.", exampleAnswers: ["Adenine", "Uracil", "Cytosine", "Guanine"], hint: "The nucleotide letters excluding Thymine." },
  { id: "q259", category: "1-3", question: "Name a primary functional RNA classification variant.", exampleAnswers: ["mRNA", "tRNA", "rRNA"], hint: "Messenger, transfer, or ribosomal transcript processors." },
  { id: "q260", category: "5-10", question: "Name a kingdom classification within Robert Whittaker's Five-Kingdom paradigm.", exampleAnswers: ["Monera", "Protista", "Fungi", "Plantae", "Animalia"], hint: "The five massive ecosystem groupings segmenting global life organisms." },
  { id: "q261", category: "5-10", question: "Name a principal taxonomic phylum of the animal kingdom (Animalia).", exampleAnswers: ["Porifera", "Cnidaria", "Platyhematodes", "Nematoda", "Annelida", "Arthropoda", "Mollusca", "Echinodermata", "Chordata"], hint: "Structural lineages from elementary sea sponges up to advanced backbone chordates." },
  { id: "q262", category: "1-3", question: "Name a type of primary blood vessel inside human circulatory networks.", exampleAnswers: ["Artery", "Vein", "Capillary"], hint: "Outward lines, returns, or micro-exchange cellular meshes." },
  { id: "q263", category: "1-5", question: "Name a cellular component suspended inside human blood plasma.", exampleAnswers: ["Erythrocytes", "Leukocytes", "Thrombocytes"], hint: "Red cells, white defensive units, or clotting micro-platelets." },
  { id: "q264", category: "1-5", question: "Name a principal muscular valve regulating flow inside the human heart chambers.", exampleAnswers: ["Tricuspid", "Bicuspid", "Aortic Semilunar", "Pulmonary Semilunar"], hint: "Fibers preventing fluid reverse between atria, ventricles, and key arteries." },
  { id: "q265", category: "1-5", question: "Name a primary geographical cortex lobe of the human cerebrum.", exampleAnswers: ["Frontal", "Parietal", "Occipital", "Temporal"], hint: "Brain partitions sorting logic, motor integration, visual tracking, or audio cues." },
  { id: "q266", category: "1-3", question: "Name a structural category of muscle tissue found in human anatomy.", exampleAnswers: ["Skeletal", "Smooth", "Cardiac"], hint: "Voluntary locomotion tissues, hollow organ layers, or self-pacing heart walls." },
  { id: "q267", category: "1-5", question: "Name a lipid-soluble (fat-soluble) vitamin essential for health.", exampleAnswers: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"], hint: "Vitamins absorbed alongside lipids and stored inside corporate fatty tissues." },
  { id: "q268", category: "1-3", question: "Name a primary water-soluble vitamin grouping.", exampleAnswers: ["Vitamin B", "Vitamin C"], hint: "Nutrients readily dissolved and constantly flushed out via urinary excretion paths." },
  { id: "q269", category: "1-3", question: "Name a structural category of simple permanent plant tissue.", exampleAnswers: ["Parenchyma", "Collenchyma", "Sclerenchyma"], hint: "Ground cells scaling from thin photosynthetic walls up to dead woody support fibers." },

  // ─── ICT (INFO & COMM TECHNOLOGY) ───────────────
  { id: "q270", category: "5-10", question: "Name a classic structural topography pattern for local computer networks.", exampleAnswers: ["Bus", "Star", "Ring", "Mesh", "Tree", "Hybrid"], hint: "Physical configurations mapping node lines inside networks." },
  { id: "q271", category: "1-3", question: "Name a primary fundamental boolean logic gate architecture.", exampleAnswers: ["AND", "OR", "NOT"], hint: "The most basic digital operations multiplying, sum-linking, or inversing input bits." },
  { id: "q272", category: "1-3", question: "Name a designated universal logic gate architecture.", exampleAnswers: ["NAND", "NOR"], hint: "Inverted compound gates capable of scaling any complete boolean expression alone." },
  { id: "q273", category: "10-20", question: "Name a basic text or element-structuring HTML layout tag.", exampleAnswers: ["p", "h1", "div", "span", "br", "a", "img", "ul", "li", "table"], hint: "Angle-bracket building block terms anchoring hypertext elements." },
  { id: "q274", category: "5-10", question: "Name a generic generational standard phase of cellular wireless networks.", exampleAnswers: ["1G", "2G", "3G", "4G", "5G"], hint: "Evolutionary telecommunication eras from voice down to low-latency high gigabit tracks." },
  { id: "q275", category: "1-5", question: "Name a scale network classification sorting systems geographically.", exampleAnswers: ["PAN", "LAN", "MAN", "WAN"], hint: "Ranging scopes from personal body distances to massive global enterprise connections." },
  { id: "q276", category: "1-3", question: "Name an active internet protocol address format standard layer.", exampleAnswers: ["IPv4", "IPv6"], hint: "The 32-bit dot-decimal or 128-bit hex architectures handling net packets." },
  { id: "q277", category: "1-3", question: "Name a directional transmission mode processing data signals.", exampleAnswers: ["Simplex", "Half Duplex", "Full Duplex"], hint: "One-way only, alternating two-way, or concurrent dual-path streaming streams." },
  { id: "q278", category: "1-3", question: "Name an architecture service framework type inside modern cloud computing.", exampleAnswers: ["IaaS", "PaaS", "SaaS"], hint: "Delivering foundational hardware infrastructures, coding platforms, or software apps directly." },
  { id: "q279", category: "1-5", question: "Name a type of structural entity relational linkage in relational databases.", exampleAnswers: ["One-to-One", "One-to-Many", "Many-to-One", "Many-to-Many"], hint: "How records within a specific parent database block reference children keys." },
  { id: "q280", category: "1-5", question: "Name one of the key element boundaries forming the standard CSS Box Model.", exampleAnswers: ["Margin", "Border", "Padding", "Content"], hint: "The concentric spacing layers formatting layouts on a web viewport." },
  { id: "q281", category: "5-10", question: "Name a type of transmission media used to guide data networks.", exampleAnswers: ["Coaxial", "Twisted Pair", "Fiber Optic"], hint: "Physical cabling materials running electric copper signals or internal light pulses." },
  { id: "q282", category: "1-5", question: "Name a positional numeral base system fundamental to computer sciences.", exampleAnswers: ["Binary", "Octal", "Decimal", "Hexadecimal"], hint: "Base 2, 8, 10, or 16 frameworks sorting notation fields." },
  { id: "q283", category: "1-5", question: "Name an architectural map layout pattern for corporate websites.", exampleAnswers: ["Linear", "Hierarchical", "Network", "Hybrid"], hint: "Structures directing user navigation steps sequentially, tree-like, or complex-linked." },
  { id: "q284", category: "5-10", question: "Name a generic category classification of malicious software (malware).", exampleAnswers: ["Virus", "Worm", "Trojan Horse", "Spyware", "Ransomware"], hint: "Software scripts designed to infiltrate, hijack, encrypt, or spy on user platforms." },

  // ─── BANGLA & ENGLISH GRAMMAR ───────────────────
  { id: "q285", category: "1-3", question: "Name a structural sentence layout type in standard English syntax.", exampleAnswers: ["Simple", "Complex", "Compound"], hint: "Categorized directly by the number and dependence setups of its clauses." },
  { id: "q286", category: "5-10", question: "Name a grammatical classification of pronouns inside English.", exampleAnswers: ["Personal", "Demonstrative", "Relative", "Interrogative", "Indefinite", "Reflexive", "Possessive"], hint: "Subsets of noun-replacing elements tracking specific agents or questions." },
  { id: "q287", category: "1-3", question: "Name a primary grammatical voice state inside English sentences.", exampleAnswers: ["Active", "Passive"], hint: "Shifts whether focal subjects directly execute actions or undergo them." },
  { id: "q288", category: "1-3", question: "Name a terminal punctuation mark capable of completing an English sentence structure.", exampleAnswers: ["Period", "Question Mark", "Exclamation Mark"], hint: "Stops mapping full thoughts via standard endpoints, queries, or emphatic declarations." },
  { id: "q289", category: "5-10", question: "Name a word group classification based on origin (উৎস) in Bangla grammar.", exampleAnswers: ["Tatsama", "Tadbhava", "Deshi", "Bideshi", "Ardha-Tatsama"], hint: "Traces where vocabulary stemmed from, like raw Sanskrit, shifted variants, or local dialects." },
  { id: "q290", category: "5-10", question: "Name a sentence classification based on semantic meaning (अर्थगत) in Bangla grammar.", exampleAnswers: ["Bibritymulok", "Proshnobodhok", "Anugymulok", "Bismaybodhok", "Prarthonamulok"], hint: "Sentences serving as pure descriptions, inquiries, instructions, or emotional sighs." },
  { id: "q291", category: "1-3", question: "Name a sentence classification based on structural design (গঠনগত) in Bangla grammar.", exampleAnswers: ["Shorol", "Jotil", "Jougik"], hint: "The Bangla syntax equivalents of simple, complex, and compound layouts." },
  { id: "q292", category: "5-10", question: "Name a standard structural noun classification category in English grammar.", exampleAnswers: ["Proper", "Common", "Collective", "Material", "Abstract"], hint: "Groups nouns from specific names and item pools up to intangible abstract ideas." },
  { id: "q293", category: "1-5", question: "Name a primary classification of grammatical gender in language rules.", exampleAnswers: ["Masculine", "Femininely", "Neuter", "Common"], hint: "Locks nouns down based on biological sex signals, lifeless objects, or shared dual states." },
  { id: "q294", category: "1-3", question: "Name a comparative degree level utilized by adjectives or adverbs.", exampleAnswers: ["Positive", "Comparative", "Superlative"], hint: "The scaling phases detailing raw descriptions, dual choices, or ultimate group peaks." },
  { id: "q295", category: "5-10", question: "Name an essential component block forming a formal English business letter layout.", exampleAnswers: ["Heading", "Salutation", "Body", "Subscription", "Signature"], hint: "The structural chunks separating coordinates, greeting anchors, target content, and closings." },
  { id: "q296", category: "5-10", question: "Name a primary case type (কারক) identified inside Bangla grammar rules.", exampleAnswers: ["Kortri", "Kormo", "Koron", "Shompordan", "Opadan", "Odhikoron"], hint: "Structural linkages indicating sentence actors, target results, operational tools, or situational settings." },
  { id: "q297", category: "5-10", question: "Name a fundamental Samas type (সমাস) formatting compound words in Bangla.", exampleAnswers: ["Dandva", "Dvigu", "Tatpurush", "Karmadharaya", "Bahuvrihi", "Avyayibhava"], hint: "Word structural compressions managing descriptive meanings, sums, or independent parameters." },
  { id: "q298", category: "1-3", question: "Name a core letter element trigger driving cerebral shifting under Natto/Sattho Bidhan rules.", exampleAnswers: ["Ri", "Rro", "Ssho"], hint: "Sanskrit roots mapping letters like ঋ, র, ষ that aggressively pull standard dental sounds into cerebrals." },
  { id: "q299", category: "1-3", question: "Name a modifier classification based on its positional orientation to the headword.", exampleAnswers: ["Pre-modifier", "Post-modifier"], hint: "Adverbial/adjectival components nesting structural tags right before or after their targets." }
  
  // ═══════════════════════════════════════════════
  // NEW QUESTIONS — User requested batch
  // ═══════════════════════════════════════════════

  // ── 40+ category ──────────────────────────────
  { id: "n1",  category: "40+", question: "Name a released Rockstar Games title.", exampleAnswers: ["GTA V", "GTA San Andreas", "Red Dead Redemption 2", "GTA Vice City", "GTA IV", "Red Dead Redemption", "GTA III", "Bully", "LA Noire", "Max Payne"], hint: "Games published or developed by Rockstar." },
  { id: "n2",  category: "40+", question: "Name an anime character.", exampleAnswers: ["Naruto", "Goku", "Luffy", "Light Yagami", "Eren Yeager", "Levi Ackerman", "Ichigo", "Edward Elric", "Spike Spiegel", "Killua"], hint: "Any character from any anime." },
  { id: "n3",  category: "40+", question: "Name a block found in Minecraft.", exampleAnswers: ["Dirt", "Stone", "Wood", "Sand", "Gravel", "Glass", "Obsidian", "Cobblestone", "Iron Ore", "Diamond Ore"], hint: "There are hundreds of blocks in the game." },
  { id: "n4",  category: "40+", question: "Name a mobile phone brand.", exampleAnswers: ["Samsung", "Apple", "Xiaomi", "OPPO", "Vivo", "Realme", "OnePlus", "Huawei", "Nokia", "Motorola"], hint: "Companies that make smartphones." },
  { id: "n5",  category: "40+", question: "Name a gacha game.", exampleAnswers: ["Genshin Impact", "Honkai Star Rail", "Blue Archive", "Arknights", "Fate/Grand Order", "Azur Lane", "Wuthering Waves", "Nikke", "Reverse 1999", "Tower of Fantasy"], hint: "Games with randomized character/item pulls." },
  { id: "n6",  category: "40+", question: "Name a first-person or third-person shooter game.", exampleAnswers: ["Counter-Strike", "Valorant", "Call of Duty", "Overwatch", "Apex Legends", "PUBG", "Fortnite", "Rainbow Six Siege", "Halo", "Doom"], hint: "Games where shooting is the core mechanic." },
  { id: "n7",  category: "40+", question: "Name an RPG game.", exampleAnswers: ["The Witcher 3", "Dark Souls", "Elden Ring", "Final Fantasy VII", "Baldur's Gate 3", "Skyrim", "Dragon Age", "Mass Effect", "Persona 5", "Tales of Arise"], hint: "Role-playing games — any platform." },
  { id: "n8",  category: "40+", question: "Name a JRPG.", exampleAnswers: ["Final Fantasy", "Dragon Quest", "Persona 5", "Tales of Berseria", "Xenoblade Chronicles", "Nier Automata", "Kingdom Hearts", "Fire Emblem", "Chrono Trigger", "Star Ocean"], hint: "Japanese role-playing games." },
  { id: "n9",  category: "40+", question: "Name a PS5 game.", exampleAnswers: ["Spider-Man 2", "God of War Ragnarok", "Demon's Souls", "Returnal", "Ratchet & Clank: Rift Apart", "Astro's Playroom", "Horizon Forbidden West", "Final Fantasy XVI", "Gran Turismo 7", "The Last of Us Part I"], hint: "Games available on PlayStation 5." },
  { id: "n10", category: "40+", question: "Name a racing game.", exampleAnswers: ["Gran Turismo", "Forza Motorsport", "Mario Kart", "Need for Speed", "F1 series", "Burnout Paradise", "Dirt Rally", "Ridge Racer", "WipEout", "Assetto Corsa"], hint: "Games where racing vehicles is the main goal." },
  { id: "n11", category: "40+", question: "Name a Chinese consumer brand.", exampleAnswers: ["Xiaomi", "Huawei", "OnePlus", "OPPO", "Vivo", "Lenovo", "Haier", "TCL", "Itel", "DJI"], hint: "Brands originating from China." },
  { id: "n12", category: "40+", question: "Name an engineering discipline or sector.", exampleAnswers: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Software Engineering", "Chemical Engineering", "Aerospace Engineering", "Biomedical Engineering", "Computer Engineering", "Marine Engineering", "Industrial Engineering"], hint: "Branches of the engineering profession." },
  { id: "n13", category: "40+", question: "Name a company known for making shooter games.", exampleAnswers: ["Valve", "Bungie", "Activision", "id Software", "Respawn Entertainment", "DICE", "Epic Games", "Ubisoft", "Treyarch", "Infinity Ward"], hint: "Studios or publishers behind popular FPS/TPS titles." },
  { id: "n14", category: "40+", question: "Name a company known for making RPG games.", exampleAnswers: ["FromSoftware", "BioWare", "Bethesda", "Square Enix", "CD Projekt Red", "Bandai Namco", "Atlus", "Obsidian", "Larian Studios", "Monolith Soft"], hint: "Studios that built their reputation on RPGs." },
  { id: "n15", category: "40+", question: "Name a shounen anime.", exampleAnswers: ["Naruto", "Dragon Ball Z", "One Piece", "Bleach", "Attack on Titan", "My Hero Academia", "Demon Slayer", "Hunter x Hunter", "Fullmetal Alchemist", "Jujutsu Kaisen"], hint: "Action-oriented anime typically aimed at young male audiences." },

  // ── 20-40 category ────────────────────────────
  { id: "n16", category: "20-40", question: "Name a country in Oceania.", exampleAnswers: ["Australia", "New Zealand", "Papua New Guinea", "Fiji", "Solomon Islands", "Vanuatu", "Samoa", "Kiribati", "Tonga", "Micronesia"], hint: "There are about 14 sovereign nations in this region." },
  { id: "n17", category: "20-40", question: "Name an original AI model or assistant (not a derivative product).", exampleAnswers: ["ChatGPT", "Claude", "Gemini", "Grok", "Llama", "Mistral", "Copilot", "Perplexity", "DeepSeek", "Qwen"], hint: "Base AI models or assistants from major labs." },
  { id: "n18", category: "20-40", question: "Name a well-known EdTech platform.", exampleAnswers: ["Coursera", "Khan Academy", "Udemy", "edX", "Duolingo", "Skillshare", "LinkedIn Learning", "Brilliant", "Codecademy", "10 Minute School"], hint: "Online platforms for learning and education." },
  { id: "n19", category: "20-40", question: "Name a WiFi router or networking equipment brand.", exampleAnswers: ["TP-Link", "Netgear", "Asus", "D-Link", "Linksys", "Cisco", "Ubiquiti", "Tenda", "Mikrotik", "Huawei"], hint: "Brands you find on routers and access points." },
  { id: "n20", category: "20-40", question: "Name a visual novel.", exampleAnswers: ["Clannad", "Steins;Gate", "Doki Doki Literature Club", "Fate/Stay Night", "Danganronpa", "Phoenix Wright", "Higurashi", "Ever17", "Katawa Shoujo", "Umineko"], hint: "Story-driven games with mostly text and still images." },
  { id: "n21", category: "20-40", question: "Name a character from Attack on Titan.", exampleAnswers: ["Eren Yeager", "Mikasa Ackerman", "Levi Ackerman", "Armin Arlert", "Historia Reiss", "Erwin Smith", "Hange Zoe", "Reiner Braun", "Bertholdt Hoover", "Zeke Yeager"], hint: "Characters from Shingeki no Kyojin." },
  { id: "n22", category: "20-40", question: "Name a Bangladeshi actor or actress.", exampleAnswers: ["Shakib Khan", "Mosharraf Karim", "Chanchal Chowdhury", "Bidya Sinha Mim", "Mahiya Mahi", "Ferdous Ahmed", "Riaz", "Tisha", "Nusraat Faria", "Afran Nisho"], hint: "Film or TV actors from Bangladesh." },
  { id: "n23", category: "20-40", question: "Name a Bangladeshi or Bengali poet.", exampleAnswers: ["Rabindranath Tagore", "Kazi Nazrul Islam", "Michael Madhusudan Datta", "Jibanananda Das", "Sufia Kamal", "Shamsur Rahman", "Al Mahmud", "Jasimuddin", "Humayun Azad", "Nirmalendu Goon"], hint: "Poets who wrote in the Bengali language." },
  { id: "n24", category: "20-40", question: "Name a well-known piece of Bengali literature.", exampleAnswers: ["Gitanjali", "Pather Panchali", "Bishad Sindhu", "Anandamath", "Rabindranather Galpa", "Lalsalu", "Shrikanta", "Devdas", "Aranyak", "Padma Nadir Majhi"], hint: "Novels, poetry collections, or stories in Bengali." },

  // ── 10-20 category ────────────────────────────
  { id: "n25", category: "10-20", question: "Name a character from Death Note.", exampleAnswers: ["Light Yagami", "L", "Misa Amane", "Near", "Mello", "Ryuk", "Rem", "Soichiro Yagami", "Watari", "Teru Mikami"], hint: "Characters from the Death Note manga and anime." },
  { id: "n26", category: "10-20", question: "Name a visual novel character.", exampleAnswers: ["Shirou Emiya", "Rintaro Okabe", "Monika", "Nagito Komaeda", "Ryunosuke Naruhodo", "Tomoya Okazaki", "Battler Ushiromiya", "Saber", "Sayori", "Hajime Hinata"], hint: "Protagonists or major characters from visual novels." },
  { id: "n27", category: "10-20", question: "Name a 2.5D platformer or game.", exampleAnswers: ["Hollow Knight", "Ori and the Blind Forest", "Little Nightmares", "Limbo", "Cuphead", "Hades", "Shovel Knight", "Kirby Forgotten Land", "Klonoa", "Paper Mario"], hint: "Games with 3D graphics but 2D or side-scrolling gameplay." },
  { id: "n28", category: "10-20", question: "Name a horror anime.", exampleAnswers: ["Another", "Higurashi", "Corpse Party", "Tokyo Ghoul", "Parasyte", "Made in Abyss", "Shiki", "Hellsing", "Blood-C", "Junji Ito Collection"], hint: "Anime with horror, gore, or psychological terror themes." },
  { id: "n29", category: "10-20", question: "Name an IEEE networking or wireless standard.", exampleAnswers: ["IEEE 802.11", "IEEE 802.3", "IEEE 802.11ac", "IEEE 802.11ax", "IEEE 802.11n", "IEEE 802.15", "IEEE 802.11b", "IEEE 802.11g", "IEEE 802.16", "IEEE 802.11a"], hint: "Standards published by the IEEE 802 working group." },

  // ── MATHEMATICS — 20-40 ──────────────────────
  { id: "m1",  category: "20-40", question: "Name a rule or law used in differentiation (calculus).", exampleAnswers: ["Power Rule", "Chain Rule", "Product Rule", "Quotient Rule", "Sum Rule", "Constant Rule", "Exponential Rule", "Logarithmic Differentiation", "Implicit Differentiation", "L'Hôpital's Rule"], hint: "Techniques for finding derivatives." },
  { id: "m2",  category: "20-40", question: "Name a type of mathematical sequence or series.", exampleAnswers: ["Arithmetic Sequence", "Geometric Sequence", "Fibonacci Sequence", "Harmonic Series", "Power Series", "Taylor Series", "Maclaurin Series", "Alternating Series", "Telescoping Series", "Binomial Series"], hint: "Ordered lists of numbers following a pattern." },
  { id: "m3",  category: "20-40", question: "Name a branch of mathematics.", exampleAnswers: ["Algebra", "Calculus", "Geometry", "Trigonometry", "Statistics", "Number Theory", "Topology", "Linear Algebra", "Combinatorics", "Differential Equations"], hint: "The major fields of mathematical study." },
  { id: "m4",  category: "20-40", question: "Name a statistical measure of central tendency or spread.", exampleAnswers: ["Mean", "Median", "Mode", "Variance", "Standard Deviation", "Range", "Interquartile Range", "Skewness", "Kurtosis", "Coefficient of Variation"], hint: "Descriptive statistics used to summarize data." },
  { id: "m5",  category: "20-40", question: "Name a matrix operation or property taught in HSC Math.", exampleAnswers: ["Matrix Addition", "Matrix Multiplication", "Transpose", "Inverse", "Determinant", "Adjoint", "Minor", "Cofactor", "Row Reduction", "Singular Matrix"], hint: "Operations and terms associated with matrices." },
  { id: "m6",  category: "20-40", question: "Name a conic section.", exampleAnswers: ["Circle", "Ellipse", "Parabola", "Hyperbola"], hint: "Curves formed by the intersection of a plane and a cone." },

  // ── MATHEMATICS — 10-20 ──────────────────────
  { id: "m7",  category: "10-20", question: "Name a type of polygon.", exampleAnswers: ["Triangle", "Quadrilateral", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Nonagon", "Decagon", "Dodecagon", "Regular Polygon"], hint: "Closed 2D shapes with straight sides." },
  { id: "m8",  category: "10-20", question: "Name a common integration technique.", exampleAnswers: ["Substitution", "Integration by Parts (UV Rule)", "Partial Fractions", "Trigonometric Substitution", "Definite Integration", "Numerical Integration"], hint: "Methods used to evaluate integrals in calculus." },
  { id: "m9",  category: "10-20", question: "Name a type of graph used in data visualization.", exampleAnswers: ["Bar Chart", "Line Graph", "Pie Chart", "Histogram", "Scatter Plot", "Box Plot", "Heat Map", "Stem-and-Leaf Plot", "Frequency Polygon"], hint: "Charts and graphs used to represent data." },
  { id: "m10", category: "10-20", question: "Name a measure used in probability.", exampleAnswers: ["Probability", "Conditional Probability", "Expected Value", "Variance", "Bayes Theorem", "Normal Distribution", "Binomial Distribution", "Poisson Distribution", "Standard Deviation"], hint: "Concepts from probability theory." },
  { id: "m11", category: "10-20", question: "Name a theorem in geometry.", exampleAnswers: ["Pythagorean Theorem", "Thales Theorem", "Midpoint Theorem", "Angle Bisector Theorem", "Apollonius Theorem", "Ptolemy's Theorem", "Inscribed Angle Theorem", "Brahmagupta's Theorem"], hint: "Named results in Euclidean or plane geometry." },
  { id: "m12", category: "10-20", question: "Name a property of a function in mathematics.", exampleAnswers: ["Continuity", "Differentiability", "Periodicity", "Symmetry", "Monotonicity", "Boundedness", "Injectivity", "Surjectivity", "Bijectivity"], hint: "Characteristics that describe how a function behaves." },

  // ── CHEMISTRY — 20-40 ────────────────────────
  { id: "c1",  category: "20-40", question: "Name a type of chemical reaction.", exampleAnswers: ["Combustion", "Oxidation", "Reduction", "Neutralization", "Precipitation", "Decomposition", "Synthesis", "Single Displacement", "Double Displacement", "Polymerization"], hint: "Categories of reactions studied in chemistry." },
  { id: "c2",  category: "20-40", question: "Name a common laboratory acid.", exampleAnswers: ["Hydrochloric Acid", "Sulfuric Acid", "Nitric Acid", "Acetic Acid", "Phosphoric Acid", "Citric Acid", "Carbonic Acid", "Formic Acid", "Oxalic Acid", "Lactic Acid"], hint: "Acids commonly used in chemistry labs." },
  { id: "c3",  category: "20-40", question: "Name a type of chemical bond or intermolecular force.", exampleAnswers: ["Covalent Bond", "Ionic Bond", "Metallic Bond", "Hydrogen Bond", "Van der Waals", "Dipole-Dipole", "London Dispersion", "Pi Bond", "Sigma Bond", "Coordinate Bond"], hint: "Forces that hold atoms or molecules together." },
  { id: "c4",  category: "20-40", question: "Name a functional group in organic chemistry.", exampleAnswers: ["Hydroxyl", "Carboxyl", "Amino", "Aldehyde", "Ketone", "Ester", "Ether", "Halide", "Amide", "Nitro"], hint: "Specific groups of atoms in organic molecules." },
  { id: "c5",  category: "20-40", question: "Name a common laboratory apparatus or equipment.", exampleAnswers: ["Beaker", "Erlenmeyer Flask", "Bunsen Burner", "Test Tube", "Pipette", "Burette", "Centrifuge", "Crucible", "Condenser", "Volumetric Flask"], hint: "Equipment found in a chemistry lab." },
  { id: "c6",  category: "20-40", question: "Name a metal found in the periodic table.", exampleAnswers: ["Iron", "Copper", "Gold", "Silver", "Aluminum", "Zinc", "Nickel", "Lead", "Titanium", "Chromium"], hint: "Elements classified as metals." },

  // ── CHEMISTRY — 10-20 ────────────────────────
  { id: "c7",  category: "10-20", question: "Name a type of isomer in organic chemistry.", exampleAnswers: ["Structural Isomer", "Stereoisomer", "Geometric Isomer", "Optical Isomer", "Chain Isomer", "Position Isomer", "Functional Group Isomer", "Conformational Isomer"], hint: "Molecules with the same formula but different arrangements." },
  { id: "c8",  category: "10-20", question: "Name a colligative property of solutions.", exampleAnswers: ["Boiling Point Elevation", "Freezing Point Depression", "Osmotic Pressure", "Vapour Pressure Lowering", "Relative Lowering of Vapour Pressure"], hint: "Properties that depend on solute concentration, not identity." },
  { id: "c9",  category: "10-20", question: "Name a gas law in chemistry or physics.", exampleAnswers: ["Boyle's Law", "Charles's Law", "Gay-Lussac's Law", "Avogadro's Law", "Ideal Gas Law", "Graham's Law", "Dalton's Law", "Henry's Law", "Van der Waals Equation"], hint: "Laws describing the behaviour of gases." },
  { id: "c10", category: "10-20", question: "Name a type of polymer.", exampleAnswers: ["Polyethylene", "Polypropylene", "PVC", "Nylon", "Teflon", "Polystyrene", "Rubber", "Kevlar", "Polyester", "Bakelite"], hint: "Large molecules made of repeating units." },
  { id: "c11", category: "10-20", question: "Name a phase change of matter.", exampleAnswers: ["Melting", "Freezing", "Evaporation", "Condensation", "Sublimation", "Deposition", "Ionization"], hint: "Transitions between states of matter." },
  { id: "c12", category: "10-20", question: "Name a type of electrochemical cell.", exampleAnswers: ["Galvanic Cell", "Electrolytic Cell", "Fuel Cell", "Concentration Cell", "Standard Hydrogen Electrode", "Daniell Cell", "Lead-Acid Battery"], hint: "Devices that convert chemical energy to electricity or vice versa." },

  // ── BIOLOGY — 20-40 ──────────────────────────
  { id: "b1",  category: "20-40", question: "Name a type of cell organelle.", exampleAnswers: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic Reticulum", "Golgi Apparatus", "Lysosome", "Vacuole", "Chloroplast", "Cell Membrane", "Cytoskeleton"], hint: "Structures found inside eukaryotic cells." },
  { id: "b2",  category: "20-40", question: "Name a human hormone.", exampleAnswers: ["Insulin", "Adrenaline", "Testosterone", "Estrogen", "Cortisol", "Thyroxine", "Growth Hormone", "Progesterone", "Melatonin", "Oxytocin"], hint: "Chemical messengers produced by the endocrine system." },
  { id: "b3",  category: "20-40", question: "Name a type of protein in the human body.", exampleAnswers: ["Hemoglobin", "Collagen", "Actin", "Myosin", "Insulin", "Keratin", "Antibody", "Enzyme", "Fibrin", "Albumin"], hint: "Proteins with structural or functional roles." },
  { id: "b4",  category: "20-40", question: "Name a type of biomolecule or macromolecule.", exampleAnswers: ["Protein", "Carbohydrate", "Lipid", "Nucleic Acid", "DNA", "RNA", "Enzyme", "Hormone", "Vitamin", "Glycogen"], hint: "The major classes of biological molecules." },
  { id: "b5",  category: "20-40", question: "Name a type of cell division or reproduction process.", exampleAnswers: ["Mitosis", "Meiosis", "Binary Fission", "Budding", "Fragmentation", "Vegetative Propagation", "Parthenogenesis", "Conjugation", "Sporulation", "Endospore Formation"], hint: "How cells and organisms reproduce." },
  { id: "b6",  category: "20-40", question: "Name a type of genetic mutation.", exampleAnswers: ["Point Mutation", "Frameshift Mutation", "Insertion", "Deletion", "Substitution", "Inversion", "Duplication", "Translocation", "Nonsense Mutation", "Missense Mutation"], hint: "Changes in the DNA sequence." },
  { id: "b7",  category: "20-40", question: "Name a type of tissue in the human body.", exampleAnswers: ["Epithelial Tissue", "Connective Tissue", "Muscle Tissue", "Nervous Tissue", "Adipose Tissue", "Bone Tissue", "Cartilage", "Blood", "Lymphatic Tissue"], hint: "Groups of cells with similar structure and function." },

  // ── BIOLOGY — 10-20 ──────────────────────────
  { id: "b8",  category: "10-20", question: "Name a type of RNA molecule.", exampleAnswers: ["mRNA", "tRNA", "rRNA", "Genetic RNA", "Viral RNA"], hint: "Different classes of ribonucleic acid with specific roles." },
  { id: "b9",  category: "10-20", question: "Name a kingdom in biological classification.", exampleAnswers: ["Animalia", "Plantae", "Fungi", "Protista", "Archaea", "Bacteria", "Monera"], hint: "The highest traditional level of biological classification." },
  { id: "b10", category: "10-20", question: "Name a type of immunity.", exampleAnswers: ["Innate Immunity", "Adaptive Immunity", "Passive Immunity", "Active Immunity", "Humoral Immunity", "Cell-mediated Immunity", "Herd Immunity", "Natural Immunity"], hint: "How the body defends itself against pathogens." },
  { id: "b11", category: "10-20", question: "Name a stage of mitosis.", exampleAnswers: ["Prophase", "Metaphase", "Anaphase", "Telophase", "Interphase", "Prometaphase", "Cytokinesis"], hint: "The ordered steps of cell division." },
  { id: "b12", category: "10-20", question: "Name a type of ecological relationship between organisms.", exampleAnswers: ["Mutualism", "Commensalism", "Parasitism", "Predation", "Competition", "Amensalism", "Symbiosis", "Neutralism"], hint: "How two species interact in an ecosystem." },
  { id: "b13", category: "10-20", question: "Name a type of enzyme inhibition.", exampleAnswers: ["Competitive Inhibition", "Non-competitive Inhibition", "Uncompetitive Inhibition", "Allosteric Inhibition", "Feedback Inhibition", "Irreversible Inhibition", "Mixed Inhibition"], hint: "Ways enzyme activity can be reduced." },

  // ── PHYSICS — 20-40 ──────────────────────────
  { id: "p1",  category: "20-40", question: "Name a law or principle in classical mechanics.", exampleAnswers: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Conservation of Momentum", "Law of Conservation of Energy", "Hooke's Law", "Law of Universal Gravitation", "Archimedes Principle", "Bernoulli's Principle", "Pascal's Law"], hint: "Fundamental laws governing motion and forces." },
  { id: "p2",  category: "20-40", question: "Name a type of electromagnetic radiation.", exampleAnswers: ["Radio Wave", "Microwave", "Infrared", "Visible Light", "Ultraviolet", "X-ray", "Gamma Ray", "Terahertz", "Extreme Ultraviolet", "Millimeter Wave"], hint: "Regions of the electromagnetic spectrum." },
  { id: "p3",  category: "20-40", question: "Name a concept in modern physics or atomic models.", exampleAnswers: ["Photoelectric Effect", "Compton Effect", "Work Function", "Threshold Frequency", "Time Dilation", "Mass Defect", "Radioactivity", "Pauli Exclusion Principle", "Bohr Model", "De Broglie Wavelength"], hint: "Ideas from the physics of photons, atoms, and relativity." },
  { id: "p4",  category: "20-40", question: "Name a type of electrical circuit component.", exampleAnswers: ["Resistor", "Capacitor", "Inductor", "Diode", "Transistor", "Transformer", "LED", "Battery", "Switch", "Relay"], hint: "Components used in electronic circuits." },
  { id: "p5",  category: "20-40", question: "Name a formula or equation used in physics.", exampleAnswers: ["F = ma", "E = mc²", "V = IR", "P = IV", "KE = ½mv²", "W = Fd", "λ = h/p", "E = hf", "PV = nRT", "F = qE"], hint: "Mathematical relationships in physics." },
  { id: "p6",  category: "20-40", question: "Name a type of optical phenomenon.", exampleAnswers: ["Reflection", "Refraction", "Diffraction", "Interference", "Polarization", "Dispersion", "Total Internal Reflection", "Doppler Effect", "Mirage", "Rainbow"], hint: "Phenomena involving light and optics." },
  { id: "p7",  category: "20-40", question: "Name a fundamental or subatomic particle.", exampleAnswers: ["Proton", "Neutron", "Electron", "Photon", "Positron", "Neutrino", "Antineutrino", "Meson", "Alpha Particle", "Beta Particle"], hint: "Particles studied in nuclear physics." },

  // ── PHYSICS — 10-20 ──────────────────────────
  { id: "p8",  category: "10-20", question: "Name a type of wave property or characteristic.", exampleAnswers: ["Wavelength", "Frequency", "Amplitude", "Period", "Speed", "Phase", "Intensity", "Polarization", "Superposition", "Resonance"], hint: "Properties that describe a wave." },
  { id: "p9",  category: "10-20", question: "Name a quantity measured in joules.", exampleAnswers: ["Kinetic Energy", "Potential Energy", "Work Done", "Heat", "Internal Energy", "Enthalpy", "Binding Energy", "Activation Energy"], hint: "Physical quantities whose SI unit is the joule." },
  { id: "p10", category: "10-20", question: "Name a type of nuclear radiation.", exampleAnswers: ["Alpha Radiation", "Beta Radiation", "Gamma Radiation", "Neutron Radiation", "X-ray Radiation", "Positron Emission"], hint: "Radiation emitted during radioactive decay." },
  { id: "p11", category: "10-20", question: "Name a mode of heat transfer.", exampleAnswers: ["Conduction", "Convection", "Radiation", "Advection", "Diffusion"], hint: "Ways thermal energy moves from one place to another." },
  { id: "p12", category: "10-20", question: "Name a type of collision in mechanics.", exampleAnswers: ["Elastic Collision", "Inelastic Collision", "Perfectly Inelastic Collision", "Head-on Collision", "Oblique Collision", "Explosive Collision"], hint: "Classifications of how objects collide." },

  // ═══════════════════════════════════════════════
  // BATCH 3 — Math, Physics, Gaming, Misc
  // ═══════════════════════════════════════════════

  // ── REQUESTED — 40+ ──────────────────────────
  { id: "x1",  category: "40+", question: "Name a tower defense game.", exampleAnswers: ["Bloons TD", "Kingdom Rush", "Plants vs Zombies", "Clash Royale", "Defense Grid", "Dungeon Defenders", "PixelJunk Monsters", "Orcs Must Die", "Fieldrunners", "They Are Billions"], hint: "Games where you place towers to stop enemy waves." },
  { id: "x2",  category: "40+", question: "Name a 3-letter word starting with the letter F.", exampleAnswers: ["Fan", "Fat", "Far", "Fog", "Fly", "Fix", "Fit", "Fun", "Fig", "Fur", "Fee", "Foe", "Fry", "Fin", "Flu"], hint: "Any real English word: F + 2 more letters." },
  { id: "x3",  category: "40+", question: "Name a 3-letter word starting with the letter S.", exampleAnswers: ["Sun", "Sea", "Sky", "Say", "Set", "Sit", "Son", "Sum", "Saw", "Sip", "Sob", "Shy", "Six", "Ski", "Sow"], hint: "Any real English word: S + 2 more letters." },
  { id: "x4",  category: "40+", question: "Name a 3-letter word starting with the letter R.", exampleAnswers: ["Run", "Red", "Raw", "Row", "Rub", "Rug", "Ram", "Rat", "Rod", "Rip", "Rim", "Rob", "Rot", "Rue", "Rye"], hint: "Any real English word: R + 2 more letters." },
  { id: "x5",  category: "40+", question: "Name a US state.", exampleAnswers: ["California", "Texas", "Florida", "New York", "Illinois", "Ohio", "Georgia", "Michigan", "Washington", "Arizona", "Colorado", "Nevada", "Oregon", "Minnesota", "Wisconsin"], hint: "There are exactly 50 states." },
  { id: "x6",  category: "40+", question: "Name a type or genre of literature.", exampleAnswers: ["Novel", "Poetry", "Short Story", "Drama", "Essay", "Biography", "Autobiography", "Fable", "Myth", "Science Fiction", "Fantasy", "Mystery", "Thriller", "Romance", "Horror"], hint: "Forms and genres of written literary work." },
  { id: "x7",  category: "40+", question: "Name a popular creative or design software.", exampleAnswers: ["Photoshop", "Illustrator", "Figma", "Canva", "Blender", "After Effects", "Premiere Pro", "Procreate", "DaVinci Resolve", "GIMP", "Inkscape", "Cinema 4D", "Lightroom", "Sketch", "CorelDRAW"], hint: "Tools used by designers, artists, and creators." },
  { id: "x8",  category: "40+", question: "Name a popular video editing software.", exampleAnswers: ["DaVinci Resolve", "Adobe Premiere Pro", "Final Cut Pro", "Sony Vegas", "CapCut", "iMovie", "Kdenlive", "Filmora", "HitFilm", "Avid Media Composer", "After Effects", "OpenShot"], hint: "Software used to cut and edit video." },

  // ── REQUESTED — 20-40 ────────────────────────
  { id: "x9",  category: "20-40", question: "Name an audio or sound production software (DAW).", exampleAnswers: ["FL Studio", "Ableton Live", "GarageBand", "Logic Pro", "Audacity", "Pro Tools", "Reaper", "Cubase", "Studio One", "Reason", "Bitwig", "Cakewalk"], hint: "Digital audio workstations and sound editors." },
  { id: "x10", category: "20-40", question: "Name a vector design or illustration software.", exampleAnswers: ["Adobe Illustrator", "Figma", "Inkscape", "CorelDRAW", "Affinity Designer", "Sketch", "Gravit Designer", "Canva", "Vectornator", "Amadine"], hint: "Tools that work with scalable vector graphics." },
  { id: "x11", category: "20-40", question: "Name a 3D modeling or design software.", exampleAnswers: ["Blender", "Maya", "3ds Max", "Cinema 4D", "ZBrush", "SolidWorks", "AutoCAD", "Fusion 360", "SketchUp", "Houdini", "Rhino 3D", "Modo"], hint: "Tools for creating 3D models or scenes." },
  { id: "x12", category: "20-40", question: "Name an email service provider.", exampleAnswers: ["Gmail", "Outlook", "Yahoo Mail", "ProtonMail", "iCloud Mail", "Zoho Mail", "Tutanota", "Hotmail", "AOL Mail", "Fastmail", "Thunderbird", "Yandex Mail"], hint: "Services that let you send and receive email." },
  { id: "x13", category: "20-40", question: "Name a VTuber.", exampleAnswers: ["Gawr Gura", "Kizuna AI", "Mori Calliope", "Takanashi Kiara", "Ninomae Ina'nis", "Amelia Watson", "Korone Inugami", "Pekora Usada", "Fubuki Shirakami", "Ironmouse", "Veibae", "Hololive"], hint: "Virtual YouTubers using anime avatars." },

  // ── REQUESTED — 10-20 ────────────────────────
  { id: "x14", category: "10-20", question: "Name a chess tactic or technique.", exampleAnswers: ["Fork", "Pin", "Skewer", "Discovered Attack", "Double Check", "Zwischenzug", "En Passant", "Zugzwang", "Smothered Mate", "Back Rank Mate", "Decoy", "Deflection"], hint: "Tactical moves or patterns used in chess." },
  { id: "x15", category: "10-20", question: "Name a digit that is valid in the octal number system.", exampleAnswers: ["0", "1", "2", "3", "4", "5", "6", "7"], hint: "Base-8 uses only 8 digits." },

  // ── MATHEMATICS — 40+ (many answers, easy) ───
  { id: "mx1", category: "40+", question: "Name a shape studied in geometry.", exampleAnswers: ["Circle", "Square", "Rectangle", "Triangle", "Hexagon", "Pentagon", "Rhombus", "Trapezoid", "Ellipse", "Cylinder", "Cube", "Sphere", "Cone", "Pyramid", "Prism"], hint: "2D and 3D geometric shapes." },
  { id: "mx2", category: "40+", question: "Name a mathematical symbol or operator.", exampleAnswers: ["Plus (+)", "Minus (-)", "Multiply (×)", "Divide (÷)", "Equals (=)", "Pi (π)", "Sigma (Σ)", "Integral (∫)", "Infinity (∞)", "Square Root (√)", "Delta (Δ)", "Theta (θ)"], hint: "Symbols used in mathematical notation." },
  { id: "mx3", category: "40+", question: "Name a topic covered in high school mathematics.", exampleAnswers: ["Algebra", "Trigonometry", "Calculus", "Statistics", "Probability", "Geometry", "Matrices", "Vectors", "Logarithms", "Quadratic Equations", "Set Theory", "Coordinate Geometry"], hint: "Topics from secondary school maths curriculum." },

  // ── MATHEMATICS — 20-40 ──────────────────────
  { id: "mx4", category: "20-40", question: "Name a technique used to solve a system of linear equations.", exampleAnswers: ["Substitution Method", "Elimination Method", "Matrix Method", "Cramer's Rule", "Gaussian Elimination", "Gauss-Jordan Elimination", "LU Decomposition", "Iterative Method", "Graphical Method", "Row Reduction"], hint: "Methods for finding unknowns in simultaneous equations." },
  { id: "mx5", category: "20-40", question: "Name a type of function in mathematics.", exampleAnswers: ["Linear Function", "Quadratic Function", "Polynomial Function", "Exponential Function", "Logarithmic Function", "Trigonometric Function", "Rational Function", "Step Function", "Piecewise Function", "Inverse Function", "Periodic Function"], hint: "Classifications of mathematical functions." },
  { id: "mx6", category: "20-40", question: "Name a property of real numbers.", exampleAnswers: ["Commutative Property", "Associative Property", "Distributive Property", "Identity Property", "Inverse Property", "Closure Property", "Reflexive Property", "Transitive Property", "Symmetric Property", "Density Property"], hint: "Algebraic properties that real numbers satisfy." },
  { id: "mx7", category: "20-40", question: "Name a coordinate geometry concept.", exampleAnswers: ["Slope", "Y-intercept", "Distance Formula", "Midpoint Formula", "Gradient", "Equation of a Line", "Circle Equation", "Parabola", "Locus", "Collinearity", "Section Formula", "Area of a Triangle"], hint: "Concepts from analytic or coordinate geometry." },
  { id: "mx8", category: "20-40", question: "Name a term used in set theory.", exampleAnswers: ["Union", "Intersection", "Subset", "Superset", "Complement", "Universal Set", "Empty Set", "Power Set", "Cardinality", "Disjoint Sets", "Venn Diagram", "Symmetric Difference"], hint: "Vocabulary used when working with sets." },
  { id: "mx9", category: "20-40", question: "Name a named theorem in number theory or algebra.", exampleAnswers: ["Fermat's Last Theorem", "Pythagorean Theorem", "Fundamental Theorem of Algebra", "Fundamental Theorem of Arithmetic", "Chinese Remainder Theorem", "Euclid's Theorem", "Binomial Theorem", "De Moivre's Theorem", "Rolle's Theorem", "Mean Value Theorem"], hint: "Famous named results in mathematics." },
  { id: "mx10", category: "20-40", question: "Name a type of differential equation.", exampleAnswers: ["Ordinary Differential Equation", "Partial Differential Equation", "Linear Differential Equation", "Non-linear Differential Equation", "First Order ODE", "Second Order ODE", "Homogeneous Equation", "Bernoulli Equation", "Separable Equation", "Exact Equation"], hint: "Types of equations involving derivatives." },

  // ── MATHEMATICS — 10-20 ──────────────────────
  { id: "mx11", category: "10-20", question: "Name a type of number system used in mathematics or computing.", exampleAnswers: ["Binary", "Octal", "Decimal", "Hexadecimal", "Unary", "Base-64", "Duodecimal", "Sexagesimal"], hint: "Positional numeral systems with different bases." },
  { id: "mx12", category: "10-20", question: "Name a trigonometric identity or formula.", exampleAnswers: ["Pythagorean Identity", "Double Angle Formula", "Half Angle Formula", "Sum-to-Product Formula", "Product-to-Sum Formula", "Sine Rule", "Cosine Rule", "Euler's Formula", "De Moivre's Formula"], hint: "Equations that are always true for trig functions." },
  { id: "mx13", category: "10-20", question: "Name a type of mathematical proof technique.", exampleAnswers: ["Direct Proof", "Proof by Contradiction", "Proof by Induction", "Proof by Contrapositive", "Proof by Exhaustion", "Constructive Proof", "Non-constructive Proof", "Proof by Counterexample"], hint: "Methods used to formally prove mathematical statements." },
  { id: "mx14", category: "10-20", question: "Name a property of a geometric figure related to symmetry.", exampleAnswers: ["Line Symmetry", "Rotational Symmetry", "Point Symmetry", "Translational Symmetry", "Reflective Symmetry", "Bilateral Symmetry", "Glide Reflection", "Scale Symmetry"], hint: "Types of symmetry a shape can have." },
  { id: "mx15", category: "10-20", question: "Name a test for convergence of an infinite series.", exampleAnswers: ["Ratio Test", "Root Test", "Integral Test", "Comparison Test", "Limit Comparison Test", "Alternating Series Test", "Divergence Test", "P-Series Test", "Abel's Test"], hint: "Tests used to determine if a series converges or diverges." },

  // ── MATHEMATICS — 5-10 ───────────────────────
  { id: "mx16", category: "5-10", question: "Name a type of average or mean.", exampleAnswers: ["Arithmetic Mean", "Geometric Mean", "Harmonic Mean", "Weighted Mean", "Median", "Mode", "Trimmed Mean"], hint: "Different types of averages in statistics." },
  { id: "mx17", category: "5-10", question: "Name a law of logarithms.", exampleAnswers: ["Product Rule", "Quotient Rule", "Power Rule", "Change of Base", "Log of 1 is 0", "Log base b of b is 1"], hint: "Rules for simplifying logarithmic expressions." },
  { id: "mx18", category: "5-10", question: "Name a type of vector operation.", exampleAnswers: ["Dot Product", "Cross Product", "Addition", "Scalar Multiplication", "Projection", "Magnitude", "Normalization"], hint: "Operations you can perform on vectors." },

  // ── MATHEMATICS — 1-5 ────────────────────────
  { id: "mx19", category: "1-5", question: "Name a type of asymptote a function can have.", exampleAnswers: ["Horizontal Asymptote", "Vertical Asymptote", "Oblique Asymptote", "Curvilinear Asymptote"], hint: "Lines that a curve approaches but never touches." },
  { id: "mx20", category: "1-5", question: "Name a solution to the equation x² = 4.", exampleAnswers: ["2", "−2", "+2", "Positive 2", "Negative 2"], hint: "There are exactly 2 real solutions." },

  // ── PHYSICS — 40+ (broad, many answers) ──────
  { id: "px1", category: "40+", question: "Name a physical quantity with a SI unit.", exampleAnswers: ["Length", "Mass", "Time", "Temperature", "Electric Current", "Force", "Energy", "Power", "Pressure", "Velocity", "Acceleration", "Resistance", "Frequency", "Luminous Intensity"], hint: "Measurable physical quantities — there are dozens." },
  { id: "px2", category: "40+", question: "Name a device or instrument used in physics experiments.", exampleAnswers: ["Voltmeter", "Ammeter", "Oscilloscope", "Spectrometer", "Barometer", "Manometer", "Galvanometer", "Spring Balance", "Vernier Caliper", "Micrometer", "Thermometer", "Geiger Counter", "Calorimeter"], hint: "Instruments found in a physics lab." },
  { id: "px3", category: "40+", question: "Name a concept in classical physics.", exampleAnswers: ["Velocity", "Acceleration", "Momentum", "Force", "Gravity", "Friction", "Pressure", "Density", "Torque", "Work", "Power", "Energy", "Frequency", "Amplitude", "Tension"], hint: "Fundamental ideas from Newtonian mechanics and classical physics." },

  // ── PHYSICS — 20-40 ──────────────────────────
  { id: "px4", category: "20-40", question: "Name a scientist associated with a law or theory in physics.", exampleAnswers: ["Newton", "Einstein", "Faraday", "Maxwell", "Bohr", "Heisenberg", "Schrödinger", "Planck", "Curie", "Ohm", "Coulomb", "Ampere", "Kelvin", "Joule", "Pascal"], hint: "Physicists whose names appear in laws or units." },
  { id: "px5", category: "20-40", question: "Name a type of force in physics.", exampleAnswers: ["Gravitational Force", "Normal Force", "Friction Force", "Tension", "Applied Force", "Spring Force", "Magnetic Force", "Electric Force", "Buoyancy", "Air Resistance", "Nuclear Force", "Centripetal Force"], hint: "Forces that act on objects." },
  { id: "px6", category: "20-40", question: "Name a phenomenon studied in electromagnetism.", exampleAnswers: ["Electromagnetic Induction", "Magnetic Flux", "Electric Field", "Magnetic Field", "Capacitance", "Inductance", "Resistance", "Eddy Currents", "Hysteresis", "Lenz's Law", "Faraday's Law", "Ampere's Law"], hint: "Topics covered in electromagnetism." },
  { id: "px7", category: "20-40", question: "Name a property of a solid material studied in physics.", exampleAnswers: ["Density", "Elasticity", "Plasticity", "Hardness", "Ductility", "Malleability", "Tensile Strength", "Brittleness", "Conductivity", "Resistivity", "Thermal Expansion", "Young's Modulus"], hint: "Physical properties of solid materials." },
  { id: "px8", category: "20-40", question: "Name a concept in thermodynamics.", exampleAnswers: ["Entropy", "Enthalpy", "Internal Energy", "Heat Capacity", "Thermal Equilibrium", "Carnot Cycle", "Isothermal Process", "Adiabatic Process", "Isobaric Process", "Isochoric Process", "Gibbs Free Energy", "Boltzmann Constant"], hint: "Ideas from the study of heat and energy." },
  { id: "px9", category: "20-40", question: "Name a unit of measurement in physics not in the SI system.", exampleAnswers: ["Calorie", "Electron Volt", "Angstrom", "Light Year", "Parsec", "Atmosphere", "Bar", "Torr", "Horsepower", "Gauss", "Tesla", "Dyne", "Erg", "Foot-pound"], hint: "Non-SI units still commonly used in physics." },
  { id: "px10", category: "20-40", question: "Name a type of spectrum in physics or optics.", exampleAnswers: ["Emission Spectrum", "Absorption Spectrum", "Continuous Spectrum", "Line Spectrum", "Electromagnetic Spectrum", "Visible Spectrum", "Infrared Spectrum", "X-ray Spectrum", "Mass Spectrum", "NMR Spectrum"], hint: "Different types of spectra analyzed in physics and chemistry." },

  // ── PHYSICS — 10-20 ──────────────────────────
  { id: "px11", category: "10-20", question: "Name a quantity conserved in a closed physical system.", exampleAnswers: ["Energy", "Momentum", "Angular Momentum", "Electric Charge", "Mass-Energy", "Baryon Number", "Lepton Number", "Linear Momentum", "Parity"], hint: "Quantities that remain constant in an isolated system." },
  { id: "px12", category: "10-20", question: "Name a type of oscillation or vibration.", exampleAnswers: ["Simple Harmonic Motion", "Damped Oscillation", "Forced Oscillation", "Free Oscillation", "Resonance", "Torsional Vibration", "Coupled Oscillation", "Longitudinal Vibration", "Transverse Vibration"], hint: "Types of repetitive motion studied in mechanics." },
  { id: "px13", category: "10-20", question: "Name a type of lens aberration.", exampleAnswers: ["Spherical Aberration", "Chromatic Aberration", "Coma", "Astigmatism", "Field Curvature", "Distortion", "Pincushion Distortion", "Barrel Distortion"], hint: "Optical imperfections that blur or distort images." },
  { id: "px14", category: "10-20", question: "Name a law in electrostatics or magnetostatics.", exampleAnswers: ["Coulomb's Law", "Gauss's Law", "Biot-Savart Law", "Ampere's Law", "Faraday's Law", "Lenz's Law", "Kirchhoff's Voltage Law", "Kirchhoff's Current Law"], hint: "Fundamental laws governing electric and magnetic fields." },
  { id: "px15", category: "10-20", question: "Name a quantity related to rotational motion.", exampleAnswers: ["Angular Velocity", "Angular Acceleration", "Torque", "Moment of Inertia", "Angular Momentum", "Centripetal Force", "Centrifugal Force", "Rotational Kinetic Energy", "Period"], hint: "Physical quantities describing objects spinning or rotating." },

  // ── PHYSICS — 5-10 ───────────────────────────
  { id: "px16", category: "5-10", question: "Name a type of radioactive decay.", exampleAnswers: ["Alpha Decay", "Beta-minus Decay", "Beta-plus Decay", "Gamma Decay", "Electron Capture", "Spontaneous Fission"], hint: "Types of nuclear decay processes." },
  { id: "px17", category: "5-10", question: "Name a postulate of Einstein's Special Theory of Relativity.", exampleAnswers: ["Constancy of Speed of Light", "Principle of Relativity", "Time Dilation", "Length Contraction", "Mass-Energy Equivalence", "Relativistic Momentum"], hint: "The core ideas of Special Relativity." },
  { id: "px18", category: "5-10", question: "Name a type of energy in physics.", exampleAnswers: ["Kinetic Energy", "Potential Energy", "Thermal Energy", "Chemical Energy", "Nuclear Energy", "Electrical Energy", "Sound Energy", "Light Energy"], hint: "Different forms energy can take." },

  // ── PHYSICS — 1-5 ────────────────────────────
  { id: "px19", category: "1-5", question: "Name a type of magnet.", exampleAnswers: ["Permanent Magnet", "Electromagnet", "Temporary Magnet", "Ferromagnet", "Diamagnet", "Paramagnet"], hint: "Classifications of magnetic materials and devices." },
  { id: "px20", category: "1-5", question: "Name a color produced when red and blue light are mixed (additive color mixing).", exampleAnswers: ["Magenta", "Purple", "Pink"], hint: "Red + Blue in additive (light) mixing." },

  // ═══════════════════════════════════════════════
  // HSC STANDARD ACADEMICS (NEW BATCH)
  // ═══════════════════════════════════════════════

  // ── 40+ category ──────────────────────────────
  { id: "hsc1", category: "40+", question: "Name a standard C programming keyword.", exampleAnswers: ["int", "float", "double", "char", "if", "else", "for", "while", "return", "void"], hint: "There are 32 reserved words in C." },
  { id: "hsc2", category: "40+", question: "Name a vector quantity studied in physics.", exampleAnswers: ["Velocity", "Acceleration", "Force", "Displacement", "Momentum", "Torque", "Electric Field", "Magnetic Field", "Weight", "Impulse"], hint: "Physical quantities with both magnitude and direction." },
  { id: "hsc3", category: "40+", question: "Name a scalar quantity studied in physics.", exampleAnswers: ["Mass", "Time", "Distance", "Speed", "Work", "Energy", "Power", "Temperature", "Density", "Volume"], hint: "Physical quantities with magnitude only." },
  { id: "hsc4", category: "40+", question: "Name an element in the p-block of the periodic table.", exampleAnswers: ["Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon"], hint: "Groups 13 to 18 on the periodic table." },
  { id: "hsc5", category: "40+", question: "Name a transition metal from the d-block.", exampleAnswers: ["Iron", "Copper", "Nickel", "Cobalt", "Zinc", "Titanium", "Vanadium", "Chromium", "Manganese", "Silver"], hint: "Metals found in the center of the periodic table." },
  { id: "hsc6", category: "40+", question: "Name an aromatic organic compound.", exampleAnswers: ["Benzene", "Toluene", "Phenol", "Aniline", "Naphthalene", "Anthracene", "Benzoic Acid", "Nitrobenzene", "Chlorobenzene", "Xylene"], hint: "Compounds containing planar, ring structures like benzene." },
  { id: "hsc7", category: "40+", question: "Name a bone in the human appendicular skeleton.", exampleAnswers: ["Femur", "Tibia", "Fibula", "Humerus", "Radius", "Ulna", "Clavicle", "Scapula", "Patella", "Phalanges"], hint: "Bones of the limbs and their girdles." },
  { id: "hsc8", category: "40+", question: "Name an angiosperm plant commonly found in Bangladesh.", exampleAnswers: ["Mango (Mangifera indica)", "Jackfruit", "Rice (Oryza sativa)", "Jute", "Bamboo", "Banyan", "Water Lily (Shapla)", "Neem", "Papaya", "Banana"], hint: "Flowering plants typical to the region." },
  { id: "hsc9", category: "40+", question: "Name a valid HTML tag.", exampleAnswers: ["<a>", "<div>", "<p>", "<img>", "<h1>", "<span>", "<ul>", "<li>", "<table>", "<form>"], hint: "Building blocks used in web development." },
  { id: "hsc10", category: "40+", question: "Name an even number greater than 0.", exampleAnswers: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"], hint: "Positive integers perfectly divisible by 2." },
  { id: "hsc11", category: "40+", question: "Name an angle in degrees that has a positive sine value.", exampleAnswers: ["30", "45", "60", "90", "120", "135", "150", "10", "20", "80"], hint: "Think of Quadrants I and II." },
  { id: "hsc12", category: "40+", question: "Name a biological enzyme found in the human body.", exampleAnswers: ["Amylase", "Pepsin", "Trypsin", "Lipase", "Maltase", "Sucrase", "Lactase", "Helicase", "Polymerase", "Catalase"], hint: "Proteins that act as biological catalysts." },
  { id: "hsc13", category: "40+", question: "Name a human disease caused by a virus or bacteria.", exampleAnswers: ["Cholera", "Tuberculosis", "Dengue", "COVID-19", "Influenza", "Typhoid", "Malaria", "Measles", "Rabies", "Tetanus"], hint: "Common infectious illnesses." },
  { id: "hsc14", category: "40+", question: "Name an alkene or alkyne studied in organic chemistry.", exampleAnswers: ["Ethene", "Propene", "Butene", "Ethyne", "Propyne", "Butyne", "Pentene", "Hexene", "Octene", "Decene"], hint: "Unsaturated hydrocarbons with double or triple bonds." },
  { id: "hsc15", category: "40+", question: "Name a recognized formula or equation from HSC Physics.", exampleAnswers: ["F = ma", "v = u + at", "s = ut + 1/2at^2", "E = mc^2", "V = IR", "P = VI", "W = Fd", "Q = msΔθ", "PV = nRT", "F = G(m1m2/r^2)"], hint: "Standard mathematical equations governing physics." },

  // ── 20-40 category ────────────────────────────
  { id: "hsc16", category: "20-40", question: "Name a chapter topic from the HSC Higher Math syllabus.", exampleAnswers: ["Matrices", "Vectors", "Straight Lines", "Calculus", "Trigonometry", "Complex Numbers", "Conics", "Polynomials", "Statics", "Dynamics"], hint: "Major sections in 1st or 2nd paper." },
  { id: "hsc17", category: "20-40", question: "Name a chapter topic from the HSC Physics syllabus.", exampleAnswers: ["Vectors", "Newtonian Mechanics", "Work, Energy & Power", "Thermodynamics", "Static Electricity", "Current Electricity", "Physical Optics", "Modern Physics", "Semiconductor", "Astrophysics"], hint: "Major sections in 1st or 2nd paper." },
  { id: "hsc18", category: "20-40", question: "Name a chapter topic from the HSC Biology syllabus.", exampleAnswers: ["Cell and its Structure", "Cell Division", "Tissue", "Plant Physiology", "Genetics", "Animal Diversity", "Human Digestion", "Blood and Circulation", "Respiration", "Nervous System"], hint: "Major sections covering botany and zoology." },
  { id: "hsc19", category: "20-40", question: "Name an attribute used inside an HTML tag.", exampleAnswers: ["href", "src", "alt", "class", "id", "style", "width", "height", "type", "value"], hint: "Modifiers added to the opening tag in web design." },
  { id: "hsc20", category: "20-40", question: "Name a function from the C standard library <stdio.h> or <math.h>.", exampleAnswers: ["printf", "scanf", "pow", "sqrt", "sin", "cos", "tan", "abs", "floor", "ceil"], hint: "Built-in functions for I/O and math." },
  { id: "hsc21", category: "20-40", question: "Name a transition element from the 3d series.", exampleAnswers: ["Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper"], hint: "Elements with atomic numbers 21 to 29 (excluding Zinc)." },
  { id: "hsc22", category: "20-40", question: "Name a common catalyst used in HSC industrial chemistry.", exampleAnswers: ["Platinum", "Nickel", "Iron", "Vanadium Pentoxide", "Manganese Dioxide", "Alumina", "Silica", "Zeolite", "Sulfuric Acid", "Palladium"], hint: "Substances that speed up chemical processes." },
  { id: "hsc23", category: "20-40", question: "Name a part of the human brain.", exampleAnswers: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Pons", "Thalamus", "Hypothalamus", "Midbrain", "Corpus Callosum", "Amygdala", "Hippocampus"], hint: "Structures inside the skull governing the nervous system." },
  { id: "hsc24", category: "20-40", question: "Name a term used in the study of Genetics.", exampleAnswers: ["Allele", "Genotype", "Phenotype", "Homozygous", "Heterozygous", "Epistasis", "Pleiotropy", "Mutation", "Locus", "Chromosome"], hint: "Vocabulary related to inheritance and DNA." },
  { id: "hsc25", category: "20-40", question: "Name a unit of pressure or force.", exampleAnswers: ["Pascal", "Newton", "Atmosphere (atm)", "Bar", "Torr", "mmHg", "Dyne", "Pound-force"], hint: "Standard measurements for physical mechanics." },
  { id: "hsc26", category: "20-40", question: "Name a type of chemical bond or intermolecular force.", exampleAnswers: ["Ionic Bond", "Covalent Bond", "Metallic Bond", "Hydrogen Bond", "Van der Waals Force", "London Dispersion Force", "Dipole-Dipole Interaction"], hint: "Forces holding atoms and molecules together." },
  { id: "hsc27", category: "20-40", question: "Name an integration technique or common integral result.", exampleAnswers: ["ln(x)", "x^2/2", "Integration by Substitution", "UV Rule (By Parts)", "Partial Fractions", "Definite Integral", "e^x", "sin(x)"], hint: "Methods and basic answers found in calculus." },
  { id: "hsc28", category: "20-40", question: "Name a physical constant used in physics calculations.", exampleAnswers: ["Gravitational Constant (G)", "Speed of Light (c)", "Planck's Constant (h)", "Elementary Charge (e)", "Universal Gas Constant (R)", "Avogadro's Number", "Permittivity of Free Space", "Permeability of Free Space"], hint: "Fixed numerical values in nature." },
  { id: "hsc29", category: "20-40", question: "Name a type of motion studied in mechanics.", exampleAnswers: ["Linear Motion", "Projectile Motion", "Circular Motion", "Rotational Motion", "Simple Harmonic Motion", "Periodic Motion"], hint: "Ways in which physical bodies move." },
  { id: "hsc30", category: "20-40", question: "Name a network topology or transmission medium in ICT.", exampleAnswers: ["Star Topology", "Bus Topology", "Ring Topology", "Mesh Topology", "Tree Topology", "Coaxial Cable", "Twisted Pair Cable", "Fiber Optic Cable", "Microwave", "Satellite"], hint: "How computers connect and communicate." },

  // ── 10-20 category ────────────────────────────
  { id: "hsc31", category: "10-20", question: "Name a cranial nerve pair in humans.", exampleAnswers: ["Olfactory", "Optic", "Oculomotor", "Trochlear", "Trigeminal", "Abducens", "Facial", "Vestibulocochlear", "Glossopharyngeal", "Vagus"], hint: "There are 12 pairs of these nerves." },
  { id: "hsc32", category: "10-20", question: "Name a type of matrix taught in HSC Higher Math.", exampleAnswers: ["Square", "Diagonal", "Scalar", "Identity", "Null", "Symmetric", "Skew-symmetric", "Transpose", "Orthogonal", "Singular"], hint: "Different classifications of number grids." },
  { id: "hsc33", category: "10-20", question: "Name a phase or sub-phase of cell division.", exampleAnswers: ["G1", "S", "G2", "Prophase", "Prometaphase", "Metaphase", "Anaphase", "Telophase", "Leptotene", "Zygotene"], hint: "Stages of the cell cycle and mitosis/meiosis." },
  { id: "hsc34", category: "10-20", question: "Name a valid data type in C programming.", exampleAnswers: ["int", "float", "double", "char", "void", "short", "long", "signed", "unsigned"], hint: "Keywords declaring the type of data a variable holds." },
  { id: "hsc35", category: "10-20", question: "Name a type of conic section or its geometrical property.", exampleAnswers: ["Parabola", "Ellipse", "Hyperbola", "Focus", "Directrix", "Vertex", "Latus Rectum", "Eccentricity", "Major Axis", "Minor Axis"], hint: "Features of sliced cones in coordinate geometry." },
  { id: "hsc36", category: "10-20", question: "Name a primary component of a nuclear reactor.", exampleAnswers: ["Fuel Rod", "Moderator", "Control Rod", "Coolant", "Shielding", "Turbine", "Generator"], hint: "Parts needed to safely generate nuclear power." },
  { id: "hsc37", category: "10-20", question: "Name a thermodynamic process.", exampleAnswers: ["Isothermal", "Adiabatic", "Isobaric", "Isochoric", "Cyclic", "Reversible", "Irreversible"], hint: "Ways states of a gas change in relation to heat and work." },
  { id: "hsc38", category: "10-20", question: "Name a form of energy.", exampleAnswers: ["Kinetic", "Potential", "Thermal", "Chemical", "Nuclear", "Electrical", "Sound", "Light", "Elastic", "Magnetic"], hint: "Different ways energy manifests." },
  { id: "hsc39", category: "10-20", question: "Name an alkali or alkaline earth metal.", exampleAnswers: ["Lithium", "Sodium", "Potassium", "Rubidium", "Cesium", "Beryllium", "Magnesium", "Calcium", "Strontium", "Barium"], hint: "Elements from Group 1 and Group 2." },
  { id: "hsc40", category: "10-20", question: "Name a human bone in the arm or leg.", exampleAnswers: ["Humerus", "Radius", "Ulna", "Carpals", "Metacarpals", "Phalanges", "Femur", "Patella", "Tibia", "Fibula"], hint: "Bones comprising the appendicular limbs." },

  // ── 5-10 category ────────────────────────────
  { id: "hsc41", category: "5-10", question: "Name a basic or universal logic gate in ICT.", exampleAnswers: ["AND", "OR", "NOT", "NAND", "NOR", "XOR", "XNOR"], hint: "Digital circuits used in boolean algebra." },
  { id: "hsc42", category: "5-10", question: "Name a quantum number in chemistry.", exampleAnswers: ["Principal", "Azimuthal", "Magnetic", "Spin"], hint: "Numbers detailing the position and energy of an electron." },
  { id: "hsc43", category: "5-10", question: "Name a generation of mobile communication.", exampleAnswers: ["1G", "2G", "3G", "4G", "5G"], hint: "The evolutionary steps of cellular networks." },
  { id: "hsc44", category: "5-10", question: "Name a nitrogenous base found in nucleic acids.", exampleAnswers: ["Adenine", "Guanine", "Cytosine", "Thymine", "Uracil"], hint: "The core building blocks of DNA and RNA structure." },
  { id: "hsc45", category: "5-10", question: "Name a fundamental force of nature.", exampleAnswers: ["Gravitational", "Electromagnetic", "Strong Nuclear", "Weak Nuclear"], hint: "The four basic forces governing physics." },
  { id: "hsc46", category: "5-10", question: "Name a measure of central tendency in Statistics.", exampleAnswers: ["Mean", "Median", "Mode"], hint: "Values representing the center of a data set." },
  { id: "hsc47", category: "5-10", question: "Name an inert or noble gas.", exampleAnswers: ["Helium", "Neon", "Argon", "Krypton", "Xenon", "Radon"], hint: "The highly unreactive elements in Group 18." },
  { id: "hsc48", category: "5-10", question: "Name a kingdom in the Whittaker Five-Kingdom classification.", exampleAnswers: ["Monera", "Protista", "Fungi", "Plantae", "Animalia"], hint: "The major biological domains." },
  { id: "hsc49", category: "5-10", question: "Name an essential structure tag for a basic HTML document.", exampleAnswers: ["<html>", "<head>", "<title>", "<body>"], hint: "Tags required for every standard webpage layout." },
  { id: "hsc50", category: "5-10", question: "Name a type of thermodynamic law.", exampleAnswers: ["Zeroth Law", "First Law", "Second Law", "Third Law"], hint: "The four laws defining thermal energy behavior." },

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

// Per-category question count ranges (min inclusive, max inclusive).
// "1-3" is null — it cycles forever with no cap.
const CATEGORY_LOCK_RANGES = {
  "40+":   { min: 5,  max: 7  },   // ~6 questions
  "20-40": { min: 10, max: 13 },   // ~10-13 questions
  "10-20": { min: 8,  max: 11 },   // ~8-11 questions
  "5-10":  { min: 6,  max: 9  },   // ~6-9 questions
  "1-5":   { min: 4,  max: 7  },   // ~4-7 questions
  "1-3":   null,                    // infinite — cycles forever
};

// Returns a random lock duration for the given category.
// Returns Infinity for "1-3" so it never advances to a non-existent harder tier.
function randomLockDuration(category) {
  const range = CATEGORY_LOCK_RANGES[category];
  if (!range) return Infinity;
  return range.min + Math.floor(Math.random() * (range.max - range.min + 1));
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
    game.categoryLockRounds = randomLockDuration(cat);
    return cat;
  }

  const naturalCat = getCategoryForPlayerCount(activePlayerCount);

  if (!game.currentCategory) {
    game.currentCategory = naturalCat;
    game.roundsOnCurrentCategory = 1;
    game.categoryLockRounds = randomLockDuration(naturalCat);
    return naturalCat;
  }

  game.roundsOnCurrentCategory++;

  // For infinite categories (1-3), lockedIn is always true — never advances
  const lockedIn = game.roundsOnCurrentCategory <= game.categoryLockRounds;
  const currentIdx = CATEGORY_ORDER.indexOf(game.currentCategory);
  const naturalIdx = CATEGORY_ORDER.indexOf(naturalCat);

  if (lockedIn) {
    if (naturalIdx >= currentIdx + 2) {
      const newCat = CATEGORY_ORDER[Math.min(currentIdx + 1, CATEGORY_ORDER.length - 1)];
      game.currentCategory = newCat;
      game.roundsOnCurrentCategory = 1;
      game.categoryLockRounds = randomLockDuration(newCat);
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
  game.categoryLockRounds = randomLockDuration(newCat);
  return newCat;
}

module.exports = {
  questions,
  getQuestionByCategory,
  getRandomQuestion,
  CATEGORY_ORDER,
  CATEGORY_LOCK_RANGES,
  getCategoryForPlayerCount,
  resolveCategory,
  getNextCategory,
  getPrevCategory,
  compareDifficulty,
};
