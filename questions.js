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
  { id: "q196", category: "20-40", question: "Name something people do in the morning.", exampleAnswers: ["Brush teeth", "Shower", "Eat breakfast", "Drink coffee", "Check phone", "Exercise", "Get dressed", "Make bed", "Read news", "Walk the dog"], hint: "Think about your morning routine." }
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
