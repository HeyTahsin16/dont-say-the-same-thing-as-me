// Questions categorized by number of valid answers
// Categories: "40+", "20-40", "10-20", "5-10", "1-5", "1-3"
//
// exampleAnswers is a representative sample — NOT exhaustive.
// The category reflects the real-world total of valid answers,
// not how many examples are listed here.
const questions = [
  {
    id: 'q1',
    category: '10-20',
    question: 'Name a 2.5D platformer or game.',
    exampleAnswers: ["Hollow Knight", "Ori and the Blind Forest", "Little Nightmares", "Limbo", "Cuphead", "Hades", "Shovel Knight", "Kirby Forgotten Land", "Klonoa", "Paper Mario"],
    hint: 'Games with 3D graphics but 2D or side-scrolling gameplay.'
  },
  {
    id: 'q2',
    category: '40+',
    question: 'Name a 3-letter word starting with the letter F.',
    exampleAnswers: ["Fan", "Fat", "Far", "Fog", "Fly", "Fix", "Fit", "Fun", "Fig", "Fur", "Fee", "Foe", "Fry", "Fin", "Flu"],
    hint: 'Any real English word F + 2 more letters.'
  },
  {
    id: 'q3',
    category: '40+',
    question: 'Name a 3-letter word starting with the letter R.',
    exampleAnswers: ["Run", "Red", "Raw", "Row", "Rub", "Rug", "Ram", "Rat", "Rod", "Rip", "Rim", "Rob", "Rot", "Rue", "Rye"],
    hint: 'Any real English word R + 2 more letters.'
  },
  {
    id: 'q4',
    category: '40+',
    question: 'Name a 3-letter word starting with the letter S.',
    exampleAnswers: ["Sun", "Sea", "Sky", "Say", "Set", "Sit", "Son", "Sum", "Saw", "Sip", "Sob", "Shy", "Six", "Ski", "Sow"],
    hint: 'Any real English word S + 2 more letters.'
  },
  {
    id: 'q5',
    category: '20-40',
    question: 'Name a 3D modeling or design software.',
    exampleAnswers: ["Blender", "Maya", "3ds Max", "Cinema 4D", "ZBrush", "SolidWorks", "AutoCAD", "Fusion 360", "SketchUp", "Houdini", "Rhino 3D", "Modo"],
    hint: 'Tools for creating 3D models or scenes.'
  },
  {
    id: 'q6',
    category: '20-40',
    question: 'Name a Bangladeshi actor or actress.',
    exampleAnswers: ["Shakib Khan", "Mosharraf Karim", "Chanchal Chowdhury", "Bidya Sinha Mim", "Mahiya Mahi", "Ferdous Ahmed", "Riaz", "Tisha", "Nusraat Faria", "Afran Nisho"],
    hint: 'Film or TV actors from Bangladesh.'
  },
  {
    id: 'q7',
    category: '20-40',
    question: 'Name a Bangladeshi or Bengali poet.',
    exampleAnswers: ["Rabindranath Tagore", "Kazi Nazrul Islam", "Michael Madhusudan Datta", "Jibanananda Das", "Sufia Kamal", "Shamsur Rahman", "Al Mahmud", "Jasimuddin", "Humayun Azad", "Nirmalendu Goon"],
    hint: 'Poets who wrote in the Bengali language.'
  },
  {
    id: 'q8',
    category: '20-40',
    question: 'Name a Bangladeshi politician or leader.',
    exampleAnswers: ["Sheikh Hasina", "Khaleda Zia", "Ziaur Rahman", "Mujibur Rahman", "Fakhruddin Ahmed"],
    hint: 'Key figures in BD politics.'
  },
  {
    id: 'q9',
    category: '10-20',
    question: 'Name a basic CSS display property value.',
    exampleAnswers: ["block", "inline", "inline-block", "flex", "grid", "none", "table", "inline-flex", "contents", "list-item"],
    hint: 'How elements are laid out on a webpage.'
  },
  {
    id: 'q10',
    category: '1-5',
    question: 'Name a basic mathematical vector operation.',
    exampleAnswers: ["Addition", "Subtraction", "Dot Product", "Cross Product", "Scalar Multiplication"],
    hint: 'Combining or transforming directional geometric segments.'
  },
  {
    id: 'q11',
    category: '5-10',
    question: 'Name a basic or universal logic gate in ICT.',
    exampleAnswers: ["AND", "OR", "NOT", "NAND", "NOR", "XOR", "XNOR"],
    hint: 'Digital circuits used in boolean algebra.'
  },
  {
    id: 'q12',
    category: '10-20',
    question: 'Name a basic text or element-structuring HTML layout tag.',
    exampleAnswers: ["p", "h1", "div", "span", "br", "a", "img", "ul", "li", "table"],
    hint: 'Angle-bracket building block terms anchoring hypertext elements.'
  },
  {
    id: 'q13',
    category: '1-5',
    question: 'Name a basic vocabulary term describing foundational probability elements.',
    exampleAnswers: ["Event", "Sample Space", "Outcome", "Mutually Exclusive"],
    hint: 'Terms defining trials, possible scopes, or results in statistical events.'
  },
  {
    id: 'q14',
    category: '40+',
    question: 'Name a biological enzyme found in the human body.',
    exampleAnswers: ["Amylase", "Pepsin", "Trypsin", "Lipase", "Maltase", "Sucrase", "Lactase", "Helicase", "Polymerase", "Catalase"],
    hint: 'Proteins that act as biological catalysts.'
  },
  {
    id: 'q15',
    category: '40+',
    question: 'Name a block found in Minecraft.',
    exampleAnswers: ["Dirt", "Stone", "Wood", "Sand", "Gravel", "Glass", "Obsidian", "Cobblestone", "Iron Ore", "Diamond Ore"],
    hint: 'There are hundreds of blocks in the game.'
  },
  {
    id: 'q16',
    category: '20-40',
    question: 'Name a board game.',
    exampleAnswers: ["Monopoly", "Chess", "Ludo", "Snakes and Ladders", "Scrabble", "Risk"],
    hint: 'Classic tabletop games.'
  },
  {
    id: 'q17',
    category: '40+',
    question: 'Name a Bollywood or Tollywood actoractress.',
    exampleAnswers: ["Shah Rukh Khan", "Salman Khan", "Deepika Padukone", "Priyanka Chopra", "Allu Arjun", "Nora Fatehi", "Tiger Shroff", "Alia Bhatt", "Ranbir Kapoor"],
    hint: 'Stars from Indian cinema.'
  },
  {
    id: 'q18',
    category: '40+',
    question: 'Name a bone in the human appendicular skeleton.',
    exampleAnswers: ["Femur", "Tibia", "Fibula", "Humerus", "Radius", "Ulna", "Clavicle", "Scapula", "Patella", "Phalanges"],
    hint: 'Bones of the limbs and their girdles.'
  },
  {
    id: 'q19',
    category: '40+',
    question: 'Name a bone in the human body.',
    exampleAnswers: ["Femur", "Tibia", "Fibula", "Humerus", "Radius", "Ulna", "Skull", "Rib", "Pelvis", "Sternum"],
    hint: 'There are 206 bones — name any major one.'
  },
  {
    id: 'q20',
    category: '10-20',
    question: 'Name a branch of mathematics.',
    exampleAnswers: ["Algebra", "Calculus", "Geometry", "Trigonometry", "Statistics", "Number Theory", "Topology", "Linear Algebra", "Combinatorics", "Differential Equations"],
    hint: 'The major fields of mathematical study.'
  },
  {
    id: 'q21',
    category: '40+',
    question: 'Name a brand of automobile.',
    exampleAnswers: ["Toyota", "Honda", "BMW", "Mercedes", "Audi", "Tesla", "Nissan", "Volkswagen", "Hyundai", "Ford"],
    hint: 'Companies that manufacture cars.'
  },
  {
    id: 'q22',
    category: '40+',
    question: 'Name a capital city in Europe.',
    exampleAnswers: ["London", "Paris", "Berlin", "Rome", "Madrid", "Vienna", "Warsaw", "Stockholm", "Oslo", "Athens"],
    hint: 'Seats of government in Europe.'
  },
  {
    id: 'q23',
    category: '40+',
    question: 'Name a capital city.',
    exampleAnswers: ["London", "Tokyo", "Paris", "Dhaka", "Berlin", "Beijing", "Ottawa", "Rome", "Madrid", "Seoul"],
    hint: 'The seat of government for a country.'
  },
  {
    id: 'q24',
    category: '1-5',
    question: 'Name a cardinal direction.',
    exampleAnswers: ["North", "South", "East", "West"],
    hint: 'Look at a compass.'
  },
  {
    id: 'q25',
    category: '1-3',
    question: 'Name a cellular component suspended inside human blood plasma.',
    exampleAnswers: ["Erythrocytes", "Leukocytes", "Thrombocytes"],
    hint: 'Red cells, white defensive units, or clotting micro-platelets.'
  },
  {
    id: 'q26',
    category: '1-5',
    question: 'Name a chamber of the human heart.',
    exampleAnswers: ["Left Atrium", "Right Atrium", "Left Ventricle", "Right Ventricle"],
    hint: 'There are 4 chambers.'
  },
  {
    id: 'q27',
    category: '10-20',
    question: 'Name a chapter topic from the HSC Biology syllabus.',
    exampleAnswers: ["Cell and its Structure", "Cell Division", "Tissue", "Plant Physiology", "Genetics", "Animal Diversity", "Human Digestion", "Blood and Circulation", "Respiration", "Nervous System"],
    hint: 'Major sections covering botany and zoology.'
  },
  {
    id: 'q28',
    category: '10-20',
    question: 'Name a chapter topic from the HSC Higher Math syllabus.',
    exampleAnswers: ["Matrices", "Vectors", "Straight Lines", "Calculus", "Trigonometry", "Complex Numbers", "Conics", "Polynomials", "Statics", "Dynamics"],
    hint: 'Major sections in 1st or 2nd paper.'
  },
  {
    id: 'q29',
    category: '10-20',
    question: 'Name a chapter topic from the HSC Physics syllabus.',
    exampleAnswers: ["Vectors", "Newtonian Mechanics", "Work", "Energy & Power", "Thermodynamics", "Static Electricity", "Current Electricity", "Physical Optics", "Modern Physics", "Semiconductor", "Astrophysics"],
    hint: 'Major sections in 1st or 2nd paper.'
  },
  {
    id: 'q30',
    category: '10-20',
    question: 'Name a character from \'Demon Slayer\' (Kimetsu no Yaiba).',
    exampleAnswers: ["Tanjiro Kamado", "Nezuko Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira", "Kyojuro Rengoku", "Muzan Kibutsuji"],
    hint: 'Members of the Hashira, the main squad, or the Upper Moons.'
  },
  {
    id: 'q31',
    category: '5-10',
    question: 'Name a character from \'Frieren Beyond Journey\'s End\'.',
    exampleAnswers: ["Frieren", "Fern", "Stark", "Himmel", "Heiter", "Eisen", "Aura"],
    hint: 'Elves, mages, and heroes from the post-Demon King fantasy world.'
  },
  {
    id: 'q32',
    category: '5-10',
    question: 'Name a character from \'One Punch Man\'.',
    exampleAnswers: ["Saitama", "Genos", "Garou", "Tatsumaki", "Mumen Rider", "Bang"],
    hint: 'Heroes or monsters from the Hero Association universe.'
  },
  {
    id: 'q33',
    category: '20-40',
    question: 'Name a character from Attack on Titan.',
    exampleAnswers: ["Eren Yeager", "Mikasa Ackerman", "Levi Ackerman", "Armin Arlert", "Historia Reiss", "Erwin Smith", "Hange Zoe", "Reiner Braun", "Bertholdt Hoover", "Zeke Yeager"],
    hint: 'Characters from Shingeki no Kyojin.'
  },
  {
    id: 'q34',
    category: '10-20',
    question: 'Name a character from Death Note.',
    exampleAnswers: ["Light Yagami", "L", "Misa Amane", "Near", "Mello", "Ryuk", "Rem", "Soichiro Yagami", "Watari", "Teru Mikami"],
    hint: 'Characters from the Death Note manga and anime.'
  },
  {
    id: 'q35',
    category: '20-40',
    question: 'Name a character from Dragon Ball.',
    exampleAnswers: ["Goku", "Vegeta", "Gohan", "Piccolo", "Bulma", "Frieza"],
    hint: 'Anime legends from DBZ.'
  },
  {
    id: 'q36',
    category: '20-40',
    question: 'Name a character from Harry Potter.',
    exampleAnswers: ["Harry Potter", "Hermione", "Ron", "Dumbledore", "Voldemort"],
    hint: 'Wizarding world icons.'
  },
  {
    id: 'q37',
    category: '20-40',
    question: 'Name a character from Spy x Family.',
    exampleAnswers: ["Anya Forger", "Loid Forger", "Yor Forger", "Bond"],
    hint: 'Forger family members.'
  },
  {
    id: 'q38',
    category: '10-20',
    question: 'Name a character from the anime \'Jujutsu Kaisen\'.',
    exampleAnswers: ["Yuji Itadori", "Satoru Gojo", "Megumi Fushiguro", "Nobara Kugisaki", "Ryomen Sukuna", "Yuta Okkotsu"],
    hint: 'Sorcerers or cursed spirits fighting at Jujutsu High.'
  },
  {
    id: 'q39',
    category: '40+',
    question: 'Name a character from the anime \'Naruto\'.',
    exampleAnswers: ["Naruto Uzumaki", "Sasuke Uchiha", "Kakashi Hatake", "Itachi Uchiha", "Hinata Hyuga"],
    hint: 'Ninjas from the Hidden Leaf Village or the Akatsuki.'
  },
  {
    id: 'q40',
    category: '40+',
    question: 'Name a character from the anime \'One Piece\'.',
    exampleAnswers: ["Monkey D. Luffy", "Roronoa Zoro", "Sanji", "Nami", "Tony Tony Chopper"],
    hint: 'Pirates sailing the Grand Line looking for the ultimate treasure.'
  },
  {
    id: 'q41',
    category: '5-10',
    question: 'Name a characteristic of simple harmonic motion.',
    exampleAnswers: ["Amplitude", "Period", "Frequency", "Phase", "Restoring Force", "Angular Frequency", "Displacement", "Equilibrium Position", "Energy Conservation"],
    hint: 'Properties of SHM studied at HSC level.'
  },
  {
    id: 'q42',
    category: '5-10',
    question: 'Name a chemical compound utilized directly as a food preservative.',
    exampleAnswers: ["Sodium Benzoate", "Acetic Acid", "Potassium Sorbate", "Sodium Chloride", "Calcium Propionate"],
    hint: 'Additives preventing microbial growth in cannedprocessed foods.'
  },
  {
    id: 'q43',
    category: '10-20',
    question: 'Name a chess tactic or technique.',
    exampleAnswers: ["Fork", "Pin", "Skewer", "Discovered Attack", "Double Check", "Zwischenzug", "En Passant", "Zugzwang", "Smothered Mate", "Back Rank Mate", "Decoy", "Deflection"],
    hint: 'Tactical moves or patterns used in chess.'
  },
  {
    id: 'q44',
    category: '40+',
    question: 'Name a Chinese consumer brand.',
    exampleAnswers: ["Xiaomi", "Huawei", "OnePlus", "OPPO", "Vivo", "Lenovo", "Haier", "TCL", "Itel", "DJI"],
    hint: 'Brands originating from China.'
  },
  {
    id: 'q45',
    category: '40+',
    question: 'Name a city located in Asia.',
    exampleAnswers: ["Tokyo", "Seoul", "Beijing", "Bangkok", "Mumbai", "Jakarta", "Manila", "Dhaka", "Tehran", "Dubai"],
    hint: 'Any city on the Asian continent.'
  },
  {
    id: 'q46',
    category: '1-5',
    question: 'Name a classic conic section tracking curve equations.',
    exampleAnswers: ["Circle", "Parabola", "Ellipse", "Hyperbola"],
    hint: 'Geometric tracks derived from slicing a double cone with planes.'
  },
  {
    id: 'q47',
    category: '5-10',
    question: 'Name a classic Real-Time Strategy (RTS) game.',
    exampleAnswers: ["Age of Empires II", "StarCraft II", "Warcraft III", "Command & Conquer", "Total War"],
    hint: 'Strategic games where you collect resources and build armies simultaneously without taking turns.'
  },
  {
    id: 'q48',
    category: '5-10',
    question: 'Name a classic RPG character class.',
    exampleAnswers: ["Mage", "Warrior", "Rogue", "Paladin", "Cleric", "Bard"],
    hint: 'The combat role you pick before starting a massive fantasy adventure.'
  },
  {
    id: 'q49',
    category: '5-10',
    question: 'Name a classic structural topography pattern for local computer networks.',
    exampleAnswers: ["Bus", "Star", "Ring", "Mesh", "Tree", "Hybrid"],
    hint: 'Physical configurations mapping node lines inside networks.'
  },
  {
    id: 'q50',
    category: '5-10',
    question: 'Name a classical simple machine.',
    exampleAnswers: ["Lever", "Wheel and Axle", "Pulley", "Inclined Plane", "Wedge", "Screw"],
    hint: 'Basic mechanical devices. There are 6.'
  },
  {
    id: 'q51',
    category: '1-5',
    question: 'Name a classification of friction in mechanics.',
    exampleAnswers: ["Static", "Kinetic", "Rolling", "Fluid"],
    hint: 'Resistance forces depending on state of motion or phase.'
  },
  {
    id: 'q52',
    category: '10-20',
    question: 'Name a club currently in La Liga (Spanish football).',
    exampleAnswers: ["Real Madrid", "Barcelona", "Atletico Madrid", "Sevilla", "Valencia", "Athletic Bilbao", "Real Sociedad", "Villarreal", "Betis", "Girona"],
    hint: 'There are 20 teams in the top flight.'
  },
  {
    id: 'q53',
    category: '20-40',
    question: 'Name a club currently in the English Premier League.',
    exampleAnswers: ["Arsenal", "Manchester City", "Liverpool", "Chelsea", "Manchester United", "Tottenham", "Aston Villa", "Newcastle", "Brighton", "Everton"],
    hint: 'There are 20 teams in the top flight.'
  },
  {
    id: 'q54',
    category: '1-3',
    question: 'Name a color of piece in a standard game of chess.',
    exampleAnswers: ["White", "Black"],
    hint: 'There are 2.'
  },
  {
    id: 'q55',
    category: '1-5',
    question: 'Name a color of the Olympic rings.',
    exampleAnswers: ["Blue", "Yellow", "Black", "Green", "Red"],
    hint: 'There are 5 interlocking rings.'
  },
  {
    id: 'q56',
    category: '5-10',
    question: 'Name a color of the rainbow.',
    exampleAnswers: ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"],
    hint: 'ROYGBIV — 7 colors.'
  },
  {
    id: 'q57',
    category: '1-3',
    question: 'Name a color on the flag of Bangladesh.',
    exampleAnswers: ["Red", "Green"],
    hint: 'There are exactly 2.'
  },
  {
    id: 'q58',
    category: '1-3',
    question: 'Name a color produced when red and blue light are mixed (additive color mixing).',
    exampleAnswers: ["Magenta", "Purple", "Pink"],
    hint: 'Red + Blue in additive (light) mixing.'
  },
  {
    id: 'q59',
    category: '10-20',
    question: 'Name a common catalyst used in HSC industrial chemistry.',
    exampleAnswers: ["Platinum", "Nickel", "Iron", "Vanadium Pentoxide", "Manganese Dioxide", "Alumina", "Silica", "Zeolite", "Sulfuric Acid", "Palladium"],
    hint: 'Substances that speed up chemical processes.'
  },
  {
    id: 'q60',
    category: '40+',
    question: 'Name a common household appliance.',
    exampleAnswers: ["Refrigerator", "Microwave", "Fan", "Washing Machine", "Iron", "Blender", "Television", "Rice Cooker", "Toaster", "Vacuum"],
    hint: 'Machines you use around the house.'
  },
  {
    id: 'q61',
    category: '5-10',
    question: 'Name a common integration technique.',
    exampleAnswers: ["Substitution", "Integration by Parts (UV Rule)", "Partial Fractions", "Trigonometric Substitution", "Definite Integration", "Numerical Integration"],
    hint: 'Methods used to evaluate integrals in calculus.'
  },
  {
    id: 'q62',
    category: '10-20',
    question: 'Name a common laboratory acid.',
    exampleAnswers: ["Hydrochloric Acid", "Sulfuric Acid", "Nitric Acid", "Acetic Acid", "Phosphoric Acid", "Citric Acid", "Carbonic Acid", "Formic Acid", "Oxalic Acid", "Lactic Acid"],
    hint: 'Acids commonly used in chemistry labs.'
  },
  {
    id: 'q63',
    category: '10-20',
    question: 'Name a common laboratory apparatus or equipment.',
    exampleAnswers: ["Beaker", "Erlenmeyer Flask", "Bunsen Burner", "Test Tube", "Pipette", "Burette", "Centrifuge", "Crucible", "Condenser", "Volumetric Flask"],
    hint: 'Equipment found in a chemistry lab.'
  },
  {
    id: 'q64',
    category: '40+',
    question: 'Name a commonly used spice or herb.',
    exampleAnswers: ["Pepper", "Turmeric", "Cumin", "Coriander", "Cinnamon", "Cardamom", "Ginger", "Paprika", "Basil", "Chili"],
    hint: 'Stuff you add to food for flavor.'
  },
  {
    id: 'q65',
    category: '10-20',
    question: 'Name a company known for making RPG games.',
    exampleAnswers: ["FromSoftware", "BioWare", "Bethesda", "Square Enix", "CD Projekt Red", "Bandai Namco", "Atlus", "Obsidian", "Larian Studios", "Monolith Soft"],
    hint: 'Studios that built their reputation on RPGs.'
  },
  {
    id: 'q66',
    category: '10-20',
    question: 'Name a company known for making shooter games.',
    exampleAnswers: ["Valve", "Bungie", "Activision", "id Software", "Respawn Entertainment", "DICE", "Epic Games", "Ubisoft", "Treyarch", "Infinity Ward"],
    hint: 'Studios or publishers behind popular FPSTPS titles.'
  },
  {
    id: 'q67',
    category: '1-3',
    question: 'Name a comparative degree level utilized by adjectives or adverbs.',
    exampleAnswers: ["Positive", "Comparative", "Superlative"],
    hint: 'The scaling phases detailing raw descriptions, dual choices, or ultimate group peaks.'
  },
  {
    id: 'q68',
    category: '10-20',
    question: 'Name a computer input device.',
    exampleAnswers: ["Keyboard", "Mouse", "Scanner", "Microphone", "Joystick"],
    hint: 'Hardware for input.'
  },
  {
    id: 'q69',
    category: '10-20',
    question: 'Name a concept from ray optics studied in HSC physics.',
    exampleAnswers: ["Reflection", "Refraction", "Total Internal Reflection", "Critical Angle", "Snell's Law", "Focal Length", "Principal Axis", "Real Image", "Virtual Image", "Magnification"],
    hint: 'Optics topics from the HSC syllabus.'
  },
  {
    id: 'q70',
    category: '40+',
    question: 'Name a concept in classical physics.',
    exampleAnswers: ["Velocity", "Acceleration", "Momentum", "Force", "Gravity", "Friction", "Pressure", "Density", "Torque", "Work", "Power", "Energy", "Frequency", "Amplitude", "Tension"],
    hint: 'Fundamental ideas from Newtonian mechanics and classical physics.'
  },
  {
    id: 'q71',
    category: '10-20',
    question: 'Name a concept in electrochemistry from the HSC syllabus.',
    exampleAnswers: ["Electrolysis", "Anode", "Cathode", "Electrolyte", "Oxidation", "Reduction", "Faraday's Law", "Galvanic Cell", "Salt Bridge", "Electrode"],
    hint: 'Electrochemistry at HSC level.'
  },
  {
    id: 'q72',
    category: '20-40',
    question: 'Name a concept in genetics covered in HSC biology.',
    exampleAnswers: ["DNA", "Gene", "Chromosome", "Allele", "Dominant", "Recessive", "Genotype", "Phenotype", "Mutation", "Heredity", "Punnett Square", "RNA", "Protein Synthesis", "Locus", "Meiosis"],
    hint: 'Genetics topics from the HSC biology syllabus.'
  },
  {
    id: 'q73',
    category: '10-20',
    question: 'Name a concept in modern physics or atomic models.',
    exampleAnswers: ["Photoelectric Effect", "Compton Effect", "Work Function", "Threshold Frequency", "Time Dilation", "Mass Defect", "Radioactivity", "Pauli Exclusion Principle", "Bohr Model", "De Broglie Wavelength"],
    hint: 'Ideas from the physics of photons, atoms, and relativity.'
  },
  {
    id: 'q74',
    category: '1-5',
    question: 'Name a conic section.',
    exampleAnswers: ["Circle", "Ellipse", "Parabola", "Hyperbola"],
    hint: 'Curves formed by the intersection of a plane and a cone.'
  },
  {
    id: 'q75',
    category: '20-40',
    question: 'Name a consumer device that can natively connect to a Wi-Fi network.',
    exampleAnswers: ["Smartphone", "Laptop", "Smart TV", "Tablet", "Gaming Console", "Smartwatch"],
    hint: 'Everyday hardware equipped with wireless network adapters to access the internet.'
  },
  {
    id: 'q76',
    category: '5-10',
    question: 'Name a continent.',
    exampleAnswers: ["Asia", "Africa", "North America", "South America", "Europe", "Australia", "Antarctica"],
    hint: 'There are 7 of these.'
  },
  {
    id: 'q77',
    category: '20-40',
    question: 'Name a coordinate geometry concept.',
    exampleAnswers: ["Slope", "Y-intercept", "Distance Formula", "Midpoint Formula", "Gradient", "Equation of a Line", "Circle Equation", "Parabola", "Locus", "Collinearity", "Section Formula", "Area of a Triangle"],
    hint: 'Concepts from analytic or coordinate geometry.'
  },
  {
    id: 'q78',
    category: '5-10',
    question: 'Name a core hardware component needed to build a PC.',
    exampleAnswers: ["CPU", "GPU", "Motherboard", "RAM", "Power Supply", "SSD", "Case"],
    hint: 'The parts you buy to build a rig.'
  },
  {
    id: 'q79',
    category: '1-3',
    question: 'Name a core letter element trigger driving cerebral shifting under NattoSattho Bidhan rules.',
    exampleAnswers: ["Ri", "Rro", "Ssho"],
    hint: 'Sanskrit roots mapping letters like ঋ, র, ষ that aggressively pull standard dental sounds into cerebrals.'
  },
  {
    id: 'q80',
    category: '1-3',
    question: 'Name a core organic macronutrient grouping required by animal biology.',
    exampleAnswers: ["Carbohydrates", "Proteins", "Lipids"],
    hint: 'Sustenance foundations driving energy, muscular repair, and lipid cell layers.'
  },
  {
    id: 'q81',
    category: '1-3',
    question: 'Name a core structural parameter in a linear slope-intercept equation.',
    exampleAnswers: ["Slope", "Y-intercept"],
    hint: 'The variables scaling incline rate and boundary axis intersection points.'
  },
  {
    id: 'q82',
    category: '40+',
    question: 'Name a country in Africa.',
    exampleAnswers: ["Egypt", "Nigeria", "South Africa", "Kenya", "Ethiopia", "Morocco", "Ghana", "Uganda", "Algeria", "Tanzania"],
    hint: 'There are 54 sovereign nations here.'
  },
  {
    id: 'q83',
    category: '40+',
    question: 'Name a country in Asia.',
    exampleAnswers: ["China", "India", "Japan", "Bangladesh", "Pakistan", "Indonesia", "Vietnam", "Thailand", "Malaysia", "South Korea"],
    hint: 'There are 48 recognized countries here.'
  },
  {
    id: 'q84',
    category: '5-10',
    question: 'Name a country in Central America.',
    exampleAnswers: ["Guatemala", "Belize", "Honduras", "El Salvador", "Nicaragua", "Costa Rica", "Panama"],
    hint: 'There are exactly 7 countries on the Central American isthmus.'
  },
  {
    id: 'q85',
    category: '10-20',
    question: 'Name a country in Oceania.',
    exampleAnswers: ["Australia", "New Zealand", "Papua New Guinea", "Fiji", "Solomon Islands", "Vanuatu", "Samoa", "Kiribati", "Tonga", "Micronesia"],
    hint: 'There are about 14 sovereign nations in this region.'
  },
  {
    id: 'q86',
    category: '10-20',
    question: 'Name a country in South America.',
    exampleAnswers: ["Brazil", "Argentina", "Colombia", "Peru", "Chile", "Venezuela", "Ecuador", "Bolivia", "Paraguay", "Uruguay"],
    hint: 'There are 12 sovereign nations here.'
  },
  {
    id: 'q87',
    category: '20-40',
    question: 'Name a country in the Middle East.',
    exampleAnswers: ["Saudi Arabia", "Iran", "Iraq", "Israel", "Syria", "Jordan", "Lebanon", "Yemen", "Oman", "UAE"],
    hint: 'There are around 18-20 countries here.'
  },
  {
    id: 'q88',
    category: '40+',
    question: 'Name a country located in Europe.',
    exampleAnswers: ["France", "Germany", "Italy", "Spain", "Poland", "Greece", "Portugal", "Sweden", "Netherlands", "Switzerland"],
    hint: 'There are 44 recognized sovereign states here.'
  },
  {
    id: 'q89',
    category: '20-40',
    question: 'Name a country that has hosted the FIFA World Cup.',
    exampleAnswers: ["Brazil", "Germany", "France", "Italy", "Mexico", "Argentina", "Spain", "USA", "South Africa", "Russia", "Qatar", "England", "Japan", "South Korea"],
    hint: 'About 18 countries have hosted so far.'
  },
  {
    id: 'q90',
    category: '5-10',
    question: 'Name a country that has won the FIFA World Cup.',
    exampleAnswers: ["Brazil", "Germany", "Italy", "Argentina", "France", "England", "Spain", "Uruguay"],
    hint: 'There are only 8 nations.'
  },
  {
    id: 'q91',
    category: '10-20',
    question: 'Name a country that shares a land border with China.',
    exampleAnswers: ["Russia", "Mongolia", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Afghanistan", "Pakistan", "India", "Nepal", "Bhutan", "Myanmar", "Laos", "Vietnam", "North Korea"],
    hint: 'China has 14 land neighbors — the most of any country.'
  },
  {
    id: 'q92',
    category: '10-20',
    question: 'Name a country that shares a land border with Russia.',
    exampleAnswers: ["Norway", "Finland", "Estonia", "Latvia", "Belarus", "Ukraine", "Georgia", "Azerbaijan", "Kazakhstan", "China", "Mongolia", "North Korea"],
    hint: 'Russia has 14 land neighbors.'
  },
  {
    id: 'q93',
    category: '40+',
    question: 'Name a country that speaks Spanish as an official language.',
    exampleAnswers: ["Mexico", "Spain", "Colombia", "Argentina", "Peru", "Chile", "Venezuela", "Cuba", "Ecuador", "Guatemala"],
    hint: 'There are 21 Spanish-speaking nations.'
  },
  {
    id: 'q94',
    category: '10-20',
    question: 'Name a cranial nerve pair in humans.',
    exampleAnswers: ["Olfactory", "Optic", "Oculomotor", "Trochlear", "Trigeminal", "Abducens", "Facial", "Vestibulocochlear", "Glossopharyngeal", "Vagus"],
    hint: 'There are 12 pairs of these nerves.'
  },
  {
    id: 'q95',
    category: '20-40',
    question: 'Name a cricket player from Bangladesh.',
    exampleAnswers: ["Shakib Al Hasan", "Tamim Iqbal", "Mushfiqur Rahim", "Mustafizur Rahman", "Liton Das", "Taskin Ahmed", "Mahmudullah", "Soumya Sarkar"],
    hint: 'Tigers of Bangladesh cricket.'
  },
  {
    id: 'q96',
    category: '20-40',
    question: 'Name a cricket stadium in Bangladesh.',
    exampleAnswers: ["Mirpur", "Sylhet", "Chittagong", "Khulna"],
    hint: 'BD cricket venues.'
  },
  {
    id: 'q97',
    category: '40+',
    question: 'Name a critically acclaimed historical or period piece movie.',
    exampleAnswers: ["Gladiator", "Schindler's List", "Oppenheimer", "Braveheart", "1917", "Titanic"],
    hint: 'Epic films based on real-world past events or historical eras.'
  },
  {
    id: 'q98',
    category: '20-40',
    question: 'Name a dark fantasy anime.',
    exampleAnswers: ["Berserk", "Claymore", "Vinland Saga", "Made in Abyss", "Dorohedoro"],
    hint: 'Grim and intense series.'
  },
  {
    id: 'q99',
    category: '10-20',
    question: 'Name a database query language.',
    exampleAnswers: ["SQL", "NoSQL"],
    hint: 'Data languages.'
  },
  {
    id: 'q100',
    category: '5-10',
    question: 'Name a day of the week.',
    exampleAnswers: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    hint: 'There are 7 days.'
  },
  {
    id: 'q101',
    category: '5-10',
    question: 'Name a dedicated fishing video game.',
    exampleAnswers: ["Ultimate Fishing Simulator", "Fishing Planet", "The Catch Carp & Coarse", "Sega Bass Fishing", "Dredge"],
    hint: 'Niche simulation titles entirely tracking angling, baiting, and reeling in aquatic catches.'
  },
  {
    id: 'q102',
    category: '40+',
    question: 'Name a delivery or ride-sharing app.',
    exampleAnswers: ["Pathao", "Uber", "Foodpanda", "Shohoz", "bKash"],
    hint: 'Popular BD apps.'
  },
  {
    id: 'q103',
    category: '1-3',
    question: 'Name a designated universal logic gate architecture.',
    exampleAnswers: ["NAND", "NOR"],
    hint: 'Inverted compound gates capable of scaling any complete boolean expression alone.'
  },
  {
    id: 'q104',
    category: '40+',
    question: 'Name a device or instrument used in physics experiments.',
    exampleAnswers: ["Voltmeter", "Ammeter", "Oscilloscope", "Spectrometer", "Barometer", "Manometer", "Galvanometer", "Spring Balance", "Vernier Caliper", "Micrometer", "Thermometer", "Geiger Counter", "Calorimeter"],
    hint: 'Instruments found in a physics lab.'
  },
  {
    id: 'q105',
    category: '1-3',
    question: 'Name a digit in the binary numeral system.',
    exampleAnswers: ["0", "1"],
    hint: 'Base-2 — there are only 2.'
  },
  {
    id: 'q106',
    category: '10-20',
    question: 'Name a digit in the hexadecimal numeral system.',
    exampleAnswers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"],
    hint: 'Base-16 has 16 digits.'
  },
  {
    id: 'q107',
    category: '5-10',
    question: 'Name a digit that is valid in the octal number system.',
    exampleAnswers: ["0", "1", "2", "3", "4", "5", "6", "7"],
    hint: 'Base-8 uses only 8 digits.'
  },
  {
    id: 'q108',
    category: '1-3',
    question: 'Name a direction a standard door hinge opens.',
    exampleAnswers: ["Inward", "Outward"],
    hint: 'Push or pull — 2 options.'
  },
  {
    id: 'q109',
    category: '1-3',
    question: 'Name a direction you can scroll with a mouse wheel.',
    exampleAnswers: ["Up", "Down"],
    hint: '2 standard directions.'
  },
  {
    id: 'q110',
    category: '1-3',
    question: 'Name a directional transmission mode processing data signals.',
    exampleAnswers: ["Simplex", "Half Duplex", "Full Duplex"],
    hint: 'One-way only, alternating two-way, or concurrent dual-path streaming streams.'
  },
  {
    id: 'q111',
    category: '20-40',
    question: 'Name a Disney or Pixar movie.',
    exampleAnswers: ["Frozen", "Toy Story", "The Lion King", "Moana", "Inside Out", "Coco", "Encanto", "Finding Nemo"],
    hint: 'Animated classics from DisneyPixar.'
  },
  {
    id: 'q112',
    category: '1-5',
    question: 'Name a distinct stage of a butterfly\'s life cycle.',
    exampleAnswers: ["Egg", "Larva", "Pupa", "Adult"],
    hint: 'There are 4 stages.'
  },
  {
    id: 'q113',
    category: '40+',
    question: 'Name a district (zila) of Bangladesh.',
    exampleAnswers: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Comilla", "Barisal", "Mymensingh", "Rangpur", "Jessore"],
    hint: 'There are 64 districts.'
  },
  {
    id: 'q114',
    category: '1-3',
    question: 'Name a divalent metal cation responsible for standard water hardness.',
    exampleAnswers: ["Calcium", "Magnesium"],
    hint: 'Metallic ions reacting with soaps to form insoluble scum precipitate.'
  },
  {
    id: 'q115',
    category: '5-10',
    question: 'Name a division of Bangladesh.',
    exampleAnswers: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal", "Mymensingh", "Rangpur"],
    hint: 'There are exactly 8 divisions.'
  },
  {
    id: 'q116',
    category: '5-10',
    question: 'Name a factor that affects enzyme activity.',
    exampleAnswers: ["Temperature", "pH", "Substrate Concentration", "Enzyme Concentration", "Inhibitor", "Cofactor", "Coenzyme", "Salinity", "Activator"],
    hint: 'Factors from HSC biology that change enzyme activity.'
  },
  {
    id: 'q117',
    category: '10-20',
    question: 'Name a famous anime opening song.',
    exampleAnswers: ["Unravel", "Gurenge", "Silhouette", "Again", "The Day", "Crossing Field"],
    hint: 'Popular anime OPs.'
  },
  {
    id: 'q118',
    category: '20-40',
    question: 'Name a famous detective or mystery character.',
    exampleAnswers: ["Sherlock Holmes", "Hercule Poirot", "Byomkesh Bakshi", "Feluda", "Miss Marple"],
    hint: 'Iconic sleuths.'
  },
  {
    id: 'q119',
    category: '10-20',
    question: 'Name a famous historical empire.',
    exampleAnswers: ["Roman Empire", "Ottoman Empire", "British Empire", "Mongol Empire", "Byzantine Empire", "Persian Empire", "Mughal Empire", "Han Dynasty", "Aztec Empire", "Inca Empire"],
    hint: 'Great empires that shaped human civilization.'
  },
  {
    id: 'q120',
    category: '40+',
    question: 'Name a famous landmark or monument.',
    exampleAnswers: ["Eiffel Tower", "Taj Mahal", "Statue of Liberty", "Great Wall of China", "Pyramids of Giza", "Burj Khalifa", "Sydney Opera House"],
    hint: 'Iconic places people travel to see.'
  },
  {
    id: 'q121',
    category: '40+',
    question: 'Name a famous mountain peak.',
    exampleAnswers: ["Mount Everest", "K2", "Kilimanjaro", "Mont Blanc", "Mount Fuji", "Denali", "Elbrus", "Matterhorn", "Aconcagua", "Kangchenjunga"],
    hint: 'The highest or most iconic peaks on every continent.'
  },
  {
    id: 'q122',
    category: '20-40',
    question: 'Name a famous painter or artist.',
    exampleAnswers: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo", "Frida Kahlo"],
    hint: 'Legendary artists.'
  },
  {
    id: 'q123',
    category: '40+',
    question: 'Name a famous painting or work of art.',
    exampleAnswers: ["Mona Lisa", "The Starry Night", "The Scream", "The Last Supper", "Guernica", "Girl with a Pearl Earring", "The Persistence of Memory", "The Birth of Venus"],
    hint: 'Iconic works you would see in a museum or art history book.'
  },
  {
    id: 'q124',
    category: '40+',
    question: 'Name a famous science fiction movie.',
    exampleAnswers: ["Interstellar", "The Matrix", "Blade Runner", "Dune", "Star Wars", "Inception"],
    hint: 'Cinematic masterpieces featuring space travel, cyberpunk futures, or mind-bending tech.'
  },
  {
    id: 'q125',
    category: '40+',
    question: 'Name a famous scientist or mathematician.',
    exampleAnswers: ["Einstein", "Newton", "Darwin", "Tesla", "Curie", "Hawking", "Pasteur", "Faraday", "Bohr", "Turing"],
    hint: 'People whose discoveries changed the world.'
  },
  {
    id: 'q126',
    category: '40+',
    question: 'Name a famous singer or musician.',
    exampleAnswers: ["Taylor Swift", "BTS", "Arijit Singh", "Shreya Ghoshal", "Ed Sheeran", "Beyoncé", "Justin Bieber", "Ariana Grande"],
    hint: 'Popular vocal artists.'
  },
  {
    id: 'q127',
    category: '40+',
    question: 'Name a famous YouTuber from Bangladesh or India.',
    exampleAnswers: ["Tahseen", "CarryMinati", "Technical Guruji", "BB Ki Vines", "Ashish Chanchlani", "Sourav Joshi", "Round2hell", "Triggered Insaan", "Mumbiker Nikhil"],
    hint: 'Desi creators popping off.'
  },
  {
    id: 'q128',
    category: '40+',
    question: 'Name a festival food item.',
    exampleAnswers: ["Biriyani", "Pitha", "Shemai", "Haleem", "Kebab", "Payesh"],
    hint: 'Special occasion dishes.'
  },
  {
    id: 'q129',
    category: '40+',
    question: 'Name a first-person or third-person shooter game.',
    exampleAnswers: ["Counter-Strike", "Valorant", "Call of Duty", "Overwatch", "Apex Legends", "PUBG", "Fortnite", "Rainbow Six Siege", "Halo", "Doom"],
    hint: 'Games where shooting is the core mechanic.'
  },
  {
    id: 'q130',
    category: '20-40',
    question: 'Name a football (soccer) club.',
    exampleAnswers: ["Real Madrid", "Barcelona", "Manchester United", "Liverpool", "Bayern Munich", "PSG", "Chelsea", "Arsenal"],
    hint: 'Big teams in world football.'
  },
  {
    id: 'q131',
    category: '10-20',
    question: 'Name a form of energy.',
    exampleAnswers: ["Kinetic", "Potential", "Thermal", "Chemical", "Nuclear", "Electrical", "Sound", "Light", "Elastic", "Magnetic"],
    hint: 'Different ways energy manifests.'
  },
  {
    id: 'q132',
    category: '5-10',
    question: 'Name a founder of a major tech company.',
    exampleAnswers: ["Elon Musk", "Mark Zuckerberg", "Bill Gates", "Jeff Bezos", "Larry Page", "Sergey Brin", "Steve Jobs"],
    hint: 'People who started FAANG-level companies.'
  },
  {
    id: 'q133',
    category: '40+',
    question: 'Name a fruit.',
    exampleAnswers: ["Apple", "Banana", "Mango", "Orange", "Strawberry", "Grape", "Pineapple", "Watermelon", "Lychee", "Guava"],
    hint: 'Botanical or culinary fruits are fine.'
  },
  {
    id: 'q134',
    category: '10-20',
    question: 'Name a function from the C standard library stdio.h or math.h.',
    exampleAnswers: ["printf", "scanf", "pow", "sqrt", "sin", "cos", "tan", "abs", "floor", "ceil"],
    hint: 'Built-in functions for IO and math.'
  },
  {
    id: 'q135',
    category: '10-20',
    question: 'Name a functional group in organic chemistry.',
    exampleAnswers: ["Hydroxyl", "Carboxyl", "Amino", "Aldehyde", "Ketone", "Ester", "Ether", "Halide", "Amide", "Nitro"],
    hint: 'Specific groups of atoms in organic molecules.'
  },
  {
    id: 'q136',
    category: '1-3',
    question: 'Name a fundamental characteristic property of a musical sound wave.',
    exampleAnswers: ["Pitch", "Intensity", "Timbre"],
    hint: 'Frequency-related, loudness-related, or waveform quality parameters.'
  },
  {
    id: 'q137',
    category: '1-5',
    question: 'Name a fundamental force of nature.',
    exampleAnswers: ["Gravity", "Electromagnetism", "Strong Nuclear Force", "Weak Nuclear Force"],
    hint: 'Physics tells us there are 4.'
  },
  {
    id: 'q138',
    category: '10-20',
    question: 'Name a fundamental or subatomic particle.',
    exampleAnswers: ["Proton", "Neutron", "Electron", "Photon", "Positron", "Neutrino", "Antineutrino", "Meson", "Alpha Particle", "Beta Particle"],
    hint: 'Particles studied in nuclear physics.'
  },
  {
    id: 'q139',
    category: '5-10',
    question: 'Name a fundamental Samas type (সমাস) formatting compound words in Bangla.',
    exampleAnswers: ["Dandva", "Dvigu", "Tatpurush", "Karmadharaya", "Bahuvrihi", "Avyayibhava"],
    hint: 'Word structural compressions managing descriptive meanings, sums, or independent parameters.'
  },
  {
    id: 'q140',
    category: '1-3',
    question: 'Name a fundamental subatomic particle found in an atom.',
    exampleAnswers: ["Proton", "Neutron", "Electron"],
    hint: 'There are 3 main ones.'
  },
  {
    id: 'q141',
    category: '40+',
    question: 'Name a gacha game.',
    exampleAnswers: ["Genshin Impact", "Honkai Star Rail", "Blue Archive", "Arknights", "FateGrand Order", "Azur Lane", "Wuthering Waves", "Nikke", "Reverse 1999", "Tower of Fantasy"],
    hint: 'Games with randomized characteritem pulls.'
  },
  {
    id: 'q142',
    category: '5-10',
    question: 'Name a game developed by Valve.',
    exampleAnswers: ["Portal", "Half-Life", "Left 4 Dead", "Team Fortress 2", "Dota 2", "Counter-Strike"],
    hint: 'The legendary studio that also created the Steam platform.'
  },
  {
    id: 'q143',
    category: '1-5',
    question: 'Name a game franchise owned by Microsoft (Xbox Game Studios).',
    exampleAnswers: ["Minecraft", "Halo", "Forza Horizon", "Gears of War", "Sea of Thieves"],
    hint: 'Titles you can typically play day-one on Xbox Game Pass.'
  },
  {
    id: 'q144',
    category: '10-20',
    question: 'Name a game that won Game of the Year (GOTY) at The Game Awards.',
    exampleAnswers: ["Elden Ring", "Baldur's Gate 3", "It Takes Two", "Sekiro Shadows Die Twice", "The Witcher 3"],
    hint: 'The ultimate peak gaming award handed out by Geoff Keighley.'
  },
  {
    id: 'q145',
    category: '1-5',
    question: 'Name a gas giant in our solar system.',
    exampleAnswers: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    hint: 'The 4 outer planets.'
  },
  {
    id: 'q146',
    category: '5-10',
    question: 'Name a gas law in chemistry or physics.',
    exampleAnswers: ["Boyle's Law", "Charles's Law", "Gay-Lussac's Law", "Avogadro's Law", "Ideal Gas Law", "Graham's Law", "Dalton's Law", "Henry's Law", "Van der Waals Equation"],
    hint: 'Laws describing the behaviour of gases.'
  },
  {
    id: 'q147',
    category: '1-5',
    question: 'Name a general category of experimental error in physical measurements.',
    exampleAnswers: ["Systematic", "Random", "Gross"],
    hint: 'Errors due to instrument bias, chance fluctuations, or human blunders.'
  },
  {
    id: 'q148',
    category: '5-10',
    question: 'Name a generic category classification of malicious software (malware).',
    exampleAnswers: ["Virus", "Worm", "Trojan Horse", "Spyware", "Ransomware"],
    hint: 'Software scripts designed to infiltrate, hijack, encrypt, or spy on user platforms.'
  },
  {
    id: 'q149',
    category: '5-10',
    question: 'Name a generic generational standard phase of cellular wireless networks.',
    exampleAnswers: ["1G", "2G", "3G", "4G", "5G"],
    hint: 'Evolutionary telecommunication eras from voice down to low-latency high gigabit tracks.'
  },
  {
    id: 'q150',
    category: '40+',
    question: 'Name a genre of movies.',
    exampleAnswers: ["Action", "Comedy", "Horror", "Romance", "Sci-Fi", "Thriller", "Drama", "Documentary", "Fantasy", "Mystery"],
    hint: 'Categories you browse on streaming apps.'
  },
  {
    id: 'q151',
    category: '1-3',
    question: 'Name a geometric state condition comparing multi-vector sets.',
    exampleAnswers: ["Parallel", "Perpendicular", "Coplanar"],
    hint: 'Describes vectors facing same lines, square offsets, or identical flat layers.'
  },
  {
    id: 'q152',
    category: '40+',
    question: 'Name a globally recognized fast-food chain.',
    exampleAnswers: ["McDonald's", "Burger King", "KFC", "Subway", "Pizza Hut", "Domino's", "Popeyes", "Wendy's", "Chick-fil-A", "Taco Bell"],
    hint: 'Places with drive-thrus and quick meals.'
  },
  {
    id: 'q153',
    category: '5-10',
    question: 'Name a grammatical classification of pronouns inside English.',
    exampleAnswers: ["Personal", "Demonstrative", "Relative", "Interrogative", "Indefinite", "Reflexive", "Possessive"],
    hint: 'Subsets of noun-replacing elements tracking specific agents or questions.'
  },
  {
    id: 'q154',
    category: '20-40',
    question: 'Name a Greek god or goddess.',
    exampleAnswers: ["Zeus", "Hera", "Poseidon", "Athena", "Apollo", "Artemis", "Ares", "Hephaestus", "Hermes", "Aphrodite", "Demeter", "Dionysus", "Hades"],
    hint: 'The 12 Olympians and other major deities.'
  },
  {
    id: 'q155',
    category: '5-10',
    question: 'Name a halogen from Group 17 of the periodic table.',
    exampleAnswers: ["Fluorine", "Chlorine", "Bromine", "Iodine", "Astatine"],
    hint: 'Highly reactive nonmetals that readily accept an electron to form salts.'
  },
  {
    id: 'q156',
    category: '40+',
    question: 'Name a hand tool found in a toolbox.',
    exampleAnswers: ["Hammer", "Screwdriver", "Wrench", "Pliers", "Tape Measure", "Saw", "Chisel", "Drill", "Allen Key", "Level"],
    hint: 'Things you use to build or fix stuff.'
  },
  {
    id: 'q157',
    category: '5-10',
    question: 'Name a Harry Potter book or movie.',
    exampleAnswers: ["Philosopher's Stone", "Chamber of Secrets", "Prisoner of Azkaban", "Goblet of Fire", "Order of the Phoenix", "Half-Blood Prince", "Deathly Hallows"],
    hint: 'There are 7 books and 8 films in the main series.'
  },
  {
    id: 'q158',
    category: '5-10',
    question: 'Name a Hashira from Demon Slayer.',
    exampleAnswers: ["Giyu Tomioka", "Kyojuro Rengoku", "Shinobu Kocho", "Tengen Uzui", "Mitsuri Kanroji"],
    hint: 'Demon Slayer pillars.'
  },
  {
    id: 'q159',
    category: '1-3',
    question: 'Name a hemisphere of the Earth divided by the Equator.',
    exampleAnswers: ["Northern", "Southern"],
    hint: 'There are 2.'
  },
  {
    id: 'q160',
    category: '5-10',
    question: 'Name a highly-rated science fiction anime.',
    exampleAnswers: ["Steins;Gate", "Cyberpunk Edgerunners", "Cowboy Bebop", "Psycho-Pass", "Neon Genesis Evangelion"],
    hint: 'Anime dealing with time travel, dystopias, or mechas.'
  },
  {
    id: 'q161',
    category: '40+',
    question: 'Name a historically infamous or ruthless figure.',
    exampleAnswers: ["Genghis Khan", "Vlad the Impaler", "Ivan the Terrible", "Nero", "Caligula"],
    hint: 'Rulers or conquerors known for their brutal tactics and terrifying legacies.'
  },
  {
    id: 'q162',
    category: '40+',
    question: 'Name a hobby or recreational activity.',
    exampleAnswers: ["Reading", "Gaming", "Painting", "Cooking", "Photography", "Fishing", "Cycling", "Gardening", "Dancing", "Hiking"],
    hint: 'Things people do in their free time.'
  },
  {
    id: 'q163',
    category: '1-5',
    question: 'Name a Hogwarts house in Harry Potter.',
    exampleAnswers: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"],
    hint: 'There are exactly 4 houses.'
  },
  {
    id: 'q164',
    category: '10-20',
    question: 'Name a hormone in the human body.',
    exampleAnswers: ["Insulin", "Adrenaline", "Thyroxine", "Estrogen", "Testosterone"],
    hint: 'Chemical messengers.'
  },
  {
    id: 'q165',
    category: '10-20',
    question: 'Name a horror anime.',
    exampleAnswers: ["Another", "Higurashi", "Corpse Party", "Tokyo Ghoul", "Parasyte", "Made in Abyss", "Shiki", "Hellsing", "Blood-C", "Junji Ito Collection"],
    hint: 'Anime with horror, gore, or psychological terror themes.'
  },
  {
    id: 'q166',
    category: '40+',
    question: 'Name a household chore.',
    exampleAnswers: ["Washing Dishes", "Sweeping", "Cooking", "Laundry", "Cleaning", "Mopping", "Ironing"],
    hint: 'Daily home tasks.'
  },
  {
    id: 'q167',
    category: '10-20',
    question: 'Name a human bone in the arm or leg.',
    exampleAnswers: ["Humerus", "Radius", "Ulna", "Carpals", "Metacarpals", "Phalanges", "Femur", "Patella", "Tibia", "Fibula"],
    hint: 'Bones comprising the appendicular limbs.'
  },
  {
    id: 'q168',
    category: '40+',
    question: 'Name a human disease caused by a virus or bacteria.',
    exampleAnswers: ["Cholera", "Tuberculosis", "Dengue", "COVID-19", "Influenza", "Typhoid", "Malaria", "Measles", "Rabies", "Tetanus"],
    hint: 'Common infectious illnesses.'
  },
  {
    id: 'q169',
    category: '10-20',
    question: 'Name a human hormone.',
    exampleAnswers: ["Insulin", "Adrenaline", "Testosterone", "Estrogen", "Cortisol", "Thyroxine", "Growth Hormone", "Progesterone", "Melatonin", "Oxytocin"],
    hint: 'Chemical messengers produced by the endocrine system.'
  },
  {
    id: 'q170',
    category: '1-3',
    question: 'Name a hybridization type of carbon atoms.',
    exampleAnswers: ["sp", "sp2", "sp3"],
    hint: 'The three carbon hybridization states in HSC organic chemistry.'
  },
  {
    id: 'q171',
    category: '10-20',
    question: 'Name a JoJo\'s Bizarre Adventure Stand.',
    exampleAnswers: ["Star Platinum", "The World", "Crazy Diamond", "Killer Queen", "Gold Experience"],
    hint: 'Iconic Stands.'
  },
  {
    id: 'q172',
    category: '40+',
    question: 'Name a JRPG.',
    exampleAnswers: ["Final Fantasy", "Dragon Quest", "Persona 5", "Tales of Berseria", "Xenoblade Chronicles", "Nier Automata", "Kingdom Hearts", "Fire Emblem", "Chrono Trigger", "Star Ocean"],
    hint: 'Japanese role-playing games.'
  },
  {
    id: 'q173',
    category: '20-40',
    question: 'Name a K-pop group or idol.',
    exampleAnswers: ["BTS", "BLACKPINK", "TWICE", "Stray Kids", "NewJeans", "SEVENTEEN", "IVE", "Aespa", "TXT", "LE SSERAFIM"],
    hint: 'Global K-pop stars.'
  },
  {
    id: 'q174',
    category: '5-10',
    question: 'Name a kingdom in biological classification.',
    exampleAnswers: ["Animalia", "Plantae", "Fungi", "Protista", "Archaea", "Bacteria", "Monera"],
    hint: 'The highest traditional level of biological classification.'
  },
  {
    id: 'q175',
    category: '40+',
    question: 'Name a kitchen utensil.',
    exampleAnswers: ["Spoon", "Knife", "Fork", "Plate", "Bowl", "Pot", "Pan", "Blender", "Grinder"],
    hint: 'Tools for cooking.'
  },
  {
    id: 'q176',
    category: '40+',
    question: 'Name a known chemical compound.',
    exampleAnswers: ["Water", "Carbon Dioxide", "Salt", "Ammonia", "Methane", "Glucose", "Sulfuric Acid", "Ethanol", "Baking Soda", "Hydrogen Peroxide"],
    hint: 'Molecules made of two or more elements.'
  },
  {
    id: 'q177',
    category: '5-10',
    question: 'Name a laboratory device used to measure or detect circuit variables.',
    exampleAnswers: ["Galvanometer", "Ammeter", "Voltmeter", "Ohmmeter", "Multimeter"],
    hint: 'Instruments targeting currents, potentials, or resistances.'
  },
  {
    id: 'q178',
    category: '5-10',
    question: 'Name a law in electrostatics or magnetostatics.',
    exampleAnswers: ["Coulomb's Law", "Gauss's Law", "Biot-Savart Law", "Ampere's Law", "Faraday's Law", "Lenz's Law", "Kirchhoff's Voltage Law", "Kirchhoff's Current Law"],
    hint: 'Fundamental laws governing electric and magnetic fields.'
  },
  {
    id: 'q179',
    category: '5-10',
    question: 'Name a law of logarithms.',
    exampleAnswers: ["Product Rule", "Quotient Rule", "Power Rule", "Change of Base", "Log of 1 is 0", "Log base b of b is 1"],
    hint: 'Rules for simplifying logarithmic expressions.'
  },
  {
    id: 'q180',
    category: '1-5',
    question: 'Name a law of thermodynamics.',
    exampleAnswers: ["Zeroth Law", "First Law", "Second Law", "Third Law"],
    hint: 'There are 4 (including the Zeroth).'
  },
  {
    id: 'q181',
    category: '10-20',
    question: 'Name a law or principle in classical mechanics.',
    exampleAnswers: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Conservation of Momentum", "Law of Conservation of Energy", "Hooke's Law", "Law of Universal Gravitation", "Archimedes Principle", "Bernoulli's Principle", "Pascal's Law"],
    hint: 'Fundamental laws governing motion and forces.'
  },
  {
    id: 'q182',
    category: '1-5',
    question: 'Name a layer of the Earth.',
    exampleAnswers: ["Crust", "Mantle", "Outer Core", "Inner Core"],
    hint: 'There are 4 primary layers.'
  },
  {
    id: 'q183',
    category: '5-10',
    question: 'Name a layer of the OSI networking model.',
    exampleAnswers: ["Physical", "Data Link", "Network", "Transport", "Session", "Presentation", "Application"],
    hint: 'There are exactly 7 layers.'
  },
  {
    id: 'q184',
    category: '1-5',
    question: 'Name a layer of the rainforest.',
    exampleAnswers: ["Emergent Layer", "Canopy", "Understory", "Forest Floor"],
    hint: 'The 4 vertical zones of a tropical rainforest.'
  },
  {
    id: 'q185',
    category: '20-40',
    question: 'Name a letter in the English alphabet.',
    exampleAnswers: ["A", "B", "C", "X", "Y", "Z", "M", "P"],
    hint: 'There are exactly 26 of these.'
  },
  {
    id: 'q186',
    category: '20-40',
    question: 'Name a letter in the Greek alphabet.',
    exampleAnswers: ["Alpha", "Beta", "Gamma", "Delta", "Omega", "Sigma", "Pi", "Epsilon", "Theta", "Lambda"],
    hint: 'There are 24 letters total.'
  },
  {
    id: 'q187',
    category: '1-5',
    question: 'Name a lipid-soluble (fat-soluble) vitamin essential for health.',
    exampleAnswers: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
    hint: 'Vitamins absorbed alongside lipids and stored inside corporate fatty tissues.'
  },
  {
    id: 'q188',
    category: '10-20',
    question: 'Name a magical girl anime.',
    exampleAnswers: ["Sailor Moon", "Madoka Magica", "Cardcaptor Sakura", "Tokyo Mew Mew", "Pretty Cure"],
    hint: 'Transformation heroines.'
  },
  {
    id: 'q189',
    category: '1-5',
    question: 'Name a main blood type group in the ABO system.',
    exampleAnswers: ["A", "B", "AB", "O"],
    hint: 'There are 4 main letter groups (ignore +-).'
  },
  {
    id: 'q190',
    category: '5-10',
    question: 'Name a main character from \'Dragon Ball Z\'.',
    exampleAnswers: ["Goku", "Vegeta", "Gohan", "Piccolo", "Bulma", "Frieza", "Cell", "Trunks", "Krillin", "Beerus"],
    hint: 'Heroes and villains from the Saiyan saga and beyond.'
  },
  {
    id: 'q191',
    category: '5-10',
    question: 'Name a main film from the Star Wars Skywalker Saga.',
    exampleAnswers: ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Phantom Menace", "Attack of the Clones", "Revenge of the Sith", "The Force Awakens", "The Last Jedi", "The Rise of Skywalker"],
    hint: 'Episodes I through IX of the main saga.'
  },
  {
    id: 'q192',
    category: '40+',
    question: 'Name a major AAA (Triple-A) video game release.',
    exampleAnswers: ["Red Dead Redemption 2", "Call of Duty", "Assassin's Creed", "Cyberpunk 2077", "Elden Ring"],
    hint: 'High-budget, high-profile blockbuster games with massive development teams.'
  },
  {
    id: 'q193',
    category: '40+',
    question: 'Name a major city in China.',
    exampleAnswers: ["Beijing", "Shanghai", "Shenzhen", "Guangzhou", "Chengdu"],
    hint: 'Massive urban centers powering the East Asian economy.'
  },
  {
    id: 'q194',
    category: '40+',
    question: 'Name a major city in India.',
    exampleAnswers: ["Mumbai", "Delhi", "Kolkata", "Chennai", "Bangalore"],
    hint: 'Huge, densely populated metropolises just across the border.'
  },
  {
    id: 'q195',
    category: '20-40',
    question: 'Name a major city in Japan.',
    exampleAnswers: ["Tokyo", "Kyoto", "Osaka", "Yokohama", "Sapporo"],
    hint: 'Metropolitan hubs known for high-speed rail, shrines, or neon-lit streets.'
  },
  {
    id: 'q196',
    category: '10-20',
    question: 'Name a major functional group in organic chemistry.',
    exampleAnswers: ["Hydroxyl", "Carboxyl", "Carbonyl", "Amino", "Nitro", "Ester", "Ether", "Amide", "Alkyl"],
    hint: 'Specific atom arrangements driving organic class reactivities.'
  },
  {
    id: 'q197',
    category: '20-40',
    question: 'Name a major mountain range.',
    exampleAnswers: ["Himalayas", "Andes", "Rockies", "Alps", "Appalachians", "Urals", "Pyrenees", "Atlas", "Karakoram", "Hindu Kush"],
    hint: 'The big rocky ridges across the world.'
  },
  {
    id: 'q198',
    category: '1-5',
    question: 'Name a major ocean on Earth.',
    exampleAnswers: ["Pacific", "Atlantic", "Indian", "Southern", "Arctic"],
    hint: 'There are 5 recognized oceans.'
  },
  {
    id: 'q199',
    category: '10-20',
    question: 'Name a major organ system in the human body.',
    exampleAnswers: ["Circulatory", "Respiratory", "Digestive", "Nervous", "Skeletal", "Muscular", "Endocrine", "Immune", "Excretory", "Reproductive"],
    hint: 'Systems that keep you alive.'
  },
  {
    id: 'q200',
    category: '1-5',
    question: 'Name a major religious text or holy book.',
    exampleAnswers: ["Quran", "Bible", "Torah", "Vedas", "Tripitaka"],
    hint: 'Foundational scriptures guiding the beliefs of world religions.'
  },
  {
    id: 'q201',
    category: '40+',
    question: 'Name a major river in the world.',
    exampleAnswers: ["Nile", "Amazon", "Yangtze", "Ganges", "Padma", "Meghna", "Thames", "Danube", "Volga", "Mekong"],
    hint: 'Any flowing body of water on a map.'
  },
  {
    id: 'q202',
    category: '10-20',
    question: 'Name a major tectonic plate.',
    exampleAnswers: ["Pacific", "North American", "Eurasian", "African", "Antarctic", "Indo-Australian", "South American", "Nazca", "Arabian", "Caribbean"],
    hint: 'The massive slabs of rock making up Earth\'s crust.'
  },
  {
    id: 'q203',
    category: '5-10',
    question: 'Name a major world religion.',
    exampleAnswers: ["Christianity", "Islam", "Hinduism", "Buddhism", "Judaism", "Sikhism"],
    hint: 'The six most widely practiced religions globally.'
  },
  {
    id: 'q204',
    category: '40+',
    question: 'Name a mathematical symbol or operator.',
    exampleAnswers: ["Plus (+)", "Minus (-)", "Multiply (×)", "Divide (÷)", "Equals (=)", "Pi (π)", "Sigma (Σ)", "Integral (∫)", "Infinity (∞)", "Square Root (√)", "Delta (Δ)", "Theta (θ)"],
    hint: 'Symbols used in mathematical notation.'
  },
  {
    id: 'q205',
    category: '10-20',
    question: 'Name a matrix operation or property taught in HSC Math.',
    exampleAnswers: ["Matrix Addition", "Matrix Multiplication", "Transpose", "Inverse", "Determinant", "Adjoint", "Minor", "Cofactor", "Row Reduction", "Singular Matrix"],
    hint: 'Operations and terms associated with matrices.'
  },
  {
    id: 'q206',
    category: '1-3',
    question: 'Name a measure of central tendency in Statistics.',
    exampleAnswers: ["Mean", "Median", "Mode"],
    hint: 'Values representing the center of a data set.'
  },
  {
    id: 'q207',
    category: '5-10',
    question: 'Name a measure used in probability.',
    exampleAnswers: ["Probability", "Conditional Probability", "Expected Value", "Variance", "Bayes Theorem", "Normal Distribution", "Binomial Distribution", "Poisson Distribution", "Standard Deviation"],
    hint: 'Concepts from probability theory.'
  },
  {
    id: 'q208',
    category: '1-3',
    question: 'Name a measurement unit scaling rotational angles.',
    exampleAnswers: ["Degree", "Radian", "Gradian"],
    hint: 'Standard angular subdivisions used across trigonometry.'
  },
  {
    id: 'q209',
    category: '10-20',
    question: 'Name a mecha anime series.',
    exampleAnswers: ["Neon Genesis Evangelion", "Gundam", "Code Geass", "Darling in the Franxx", "Full Metal Panic"],
    hint: 'Robots and giant suits anime.'
  },
  {
    id: 'q210',
    category: '20-40',
    question: 'Name a member country of NATO.',
    exampleAnswers: ["USA", "UK", "France", "Germany", "Turkey", "Canada", "Italy", "Poland", "Finland", "Sweden"],
    hint: 'There are 32 member states.'
  },
  {
    id: 'q211',
    category: '20-40',
    question: 'Name a member country of the G20.',
    exampleAnswers: ["USA", "UK", "France", "Germany", "Japan", "China", "India", "Brazil", "Canada", "Australia", "South Korea", "Italy", "Mexico", "Saudi Arabia", "South Africa", "Turkey", "Indonesia", "Argentina", "Russia"],
    hint: '19 countries plus the EU make up the G20.'
  },
  {
    id: 'q212',
    category: '10-20',
    question: 'Name a member of the Avengers team from the Marvel movies.',
    exampleAnswers: ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", "Ant-Man", "Scarlet Witch", "Vision", "Spider-Man", "Doctor Strange", "Black Panther", "Captain Marvel", "War Machine"],
    hint: 'Earth\'s Mightiest Heroes from the MCU.'
  },
  {
    id: 'q213',
    category: '1-5',
    question: 'Name a member of the Simpsons family.',
    exampleAnswers: ["Homer", "Marge", "Bart", "Lisa", "Maggie"],
    hint: 'The five core members of the yellow animated family from Springfield.'
  },
  {
    id: 'q214',
    category: '20-40',
    question: 'Name a metal found in the periodic table.',
    exampleAnswers: ["Iron", "Copper", "Gold", "Silver", "Aluminum", "Zinc", "Nickel", "Lead", "Titanium", "Chromium"],
    hint: 'Elements classified as metals.'
  },
  {
    id: 'q215',
    category: '5-10',
    question: 'Name a metal used in daily life.',
    exampleAnswers: ["Iron", "Gold", "Silver", "Copper", "Aluminum", "Steel"],
    hint: 'Common metals.'
  },
  {
    id: 'q216',
    category: '5-10',
    question: 'Name a method to solve simultaneous equations.',
    exampleAnswers: ["Substitution Method", "Elimination Method", "Graphical Method", "Matrix Method", "Cramer's Rule", "Cross Multiplication", "Comparison Method", "Trial and Error"],
    hint: 'HSC-level methods for solving two or more equations together.'
  },
  {
    id: 'q217',
    category: '40+',
    question: 'Name a mobile game or app.',
    exampleAnswers: ["PUBG", "Free Fire", "Candy Crush", "Among Us", "Genshin Impact", "Clash of Clans", "Temple Run", "Subway Surfers", "Minecraft", "Call of Duty"],
    hint: 'Games you play on your phone.'
  },
  {
    id: 'q218',
    category: '20-40',
    question: 'Name a mobile OS.',
    exampleAnswers: ["Android", "iOS", "Windows Phone"],
    hint: 'Phone operating systems.'
  },
  {
    id: 'q219',
    category: '40+',
    question: 'Name a mobile phone brand.',
    exampleAnswers: ["Samsung", "Apple", "Xiaomi", "OPPO", "Vivo", "Realme", "OnePlus", "Huawei", "Nokia", "Motorola"],
    hint: 'Companies that make smartphones.'
  },
  {
    id: 'q220',
    category: '5-10',
    question: 'Name a mode of heat transfer.',
    exampleAnswers: ["Conduction", "Convection", "Radiation", "Advection", "Diffusion"],
    hint: 'Ways thermal energy moves from one place to another.'
  },
  {
    id: 'q221',
    category: '1-3',
    question: 'Name a modifier classification based on its positional orientation to the headword.',
    exampleAnswers: ["Pre-modifier", "Post-modifier"],
    hint: 'Adverbialadjectival components nesting structural tags right before or after their targets.'
  },
  {
    id: 'q222',
    category: '1-3',
    question: 'Name a modulus of elasticity defined in Hooke\'s Law context.',
    exampleAnswers: ["Young's Modulus", "Bulk Modulus", "Rigidity Modulus"],
    hint: 'Ratios of different types of stress to their corresponding strains.'
  },
  {
    id: 'q223',
    category: '1-5',
    question: 'Name a month of the year with exactly 30 days.',
    exampleAnswers: ["April", "June", "September", "November"],
    hint: 'There are 4 of them.'
  },
  {
    id: 'q224',
    category: '10-20',
    question: 'Name a month of the year.',
    exampleAnswers: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    hint: 'There are 12 of these.'
  },
  {
    id: 'q225',
    category: '10-20',
    question: 'Name a mountain range.',
    exampleAnswers: ["Himalayas", "Alps", "Andes", "Rockies", "Atlas Mountains"],
    hint: 'Big groups of mountains.'
  },
  {
    id: 'q226',
    category: '40+',
    question: 'Name a musical instrument.',
    exampleAnswers: ["Piano", "Guitar", "Violin", "Drums", "Flute", "Trumpet", "Tabla", "Sitar", "Saxophone", "Harmonium"],
    hint: 'Things used to make music.'
  },
  {
    id: 'q227',
    category: '20-40',
    question: 'Name a named theorem in number theory or algebra.',
    exampleAnswers: ["Fermat's Last Theorem", "Pythagorean Theorem", "Fundamental Theorem of Algebra", "Fundamental Theorem of Arithmetic", "Chinese Remainder Theorem", "Euclid's Theorem", "Binomial Theorem", "De Moivre's Theorem", "Rolle's Theorem", "Mean Value Theorem"],
    hint: 'Famous named results in mathematics.'
  },
  {
    id: 'q228',
    category: '1-3',
    question: 'Name a neighboring country of Bangladesh.',
    exampleAnswers: ["India", "Myanmar"],
    hint: 'There are only 2 land neighbors.'
  },
  {
    id: 'q229',
    category: '10-20',
    question: 'Name a network topology or transmission medium in ICT.',
    exampleAnswers: ["Star Topology", "Bus Topology", "Ring Topology", "Mesh Topology", "Tree Topology", "Coaxial Cable", "Twisted Pair Cable", "Fiber Optic Cable", "Microwave", "Satellite"],
    hint: 'How computers connect and communicate.'
  },
  {
    id: 'q230',
    category: '5-10',
    question: 'Name a nitrogenous base found in nucleic acids.',
    exampleAnswers: ["Adenine", "Guanine", "Cytosine", "Thymine", "Uracil"],
    hint: 'The core building blocks of DNA and RNA structure.'
  },
  {
    id: 'q231',
    category: '1-5',
    question: 'Name a nitrogenous base molecule integrated inside standard RNA structures.',
    exampleAnswers: ["Adenine", "Uracil", "Cytosine", "Guanine"],
    hint: 'The nucleotide letters excluding Thymine.'
  },
  {
    id: 'q232',
    category: '5-10',
    question: 'Name a Nobel Prize category.',
    exampleAnswers: ["Physics", "Chemistry", "Physiology or Medicine", "Literature", "Peace", "Economic Sciences"],
    hint: 'There are exactly 6 Nobel Prize fields.'
  },
  {
    id: 'q233',
    category: '5-10',
    question: 'Name a noble gas element.',
    exampleAnswers: ["Helium", "Neon", "Argon"],
    hint: 'Inert gases.'
  },
  {
    id: 'q234',
    category: '5-10',
    question: 'Name a Noble Gas.',
    exampleAnswers: ["Helium", "Neon", "Argon", "Krypton", "Xenon", "Radon"],
    hint: 'Group 18 on the periodic table.'
  },
  {
    id: 'q235',
    category: '1-5',
    question: 'Name a nucleotide base found in DNA.',
    exampleAnswers: ["Adenine", "Thymine", "Cytosine", "Guanine"],
    hint: 'A, T, C, or G.'
  },
  {
    id: 'q236',
    category: '1-3',
    question: 'Name a parameter that can shift equilibrium positions according to Le Chatelier.',
    exampleAnswers: ["Concentration", "Temperature", "Pressure"],
    hint: 'System factors altering relative forward or reverse reaction rates.'
  },
  {
    id: 'q237',
    category: '1-5',
    question: 'Name a part of a standard URL (web address).',
    exampleAnswers: ["Protocol", "Domain", "Path", "Query String", "Port"],
    hint: 'The components that make up a web address.'
  },
  {
    id: 'q238',
    category: '10-20',
    question: 'Name a part of speech in English grammar.',
    exampleAnswers: ["Noun", "Pronoun", "Verb", "Adjective", "Adverb", "Preposition", "Conjunction", "Interjection", "Article", "Determiner"],
    hint: 'The grammatical categories of words.'
  },
  {
    id: 'q239',
    category: '10-20',
    question: 'Name a part of the human brain.',
    exampleAnswers: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Pons", "Thalamus", "Hypothalamus", "Midbrain", "Corpus Callosum", "Amygdala", "Hippocampus"],
    hint: 'Structures inside the skull governing the nervous system.'
  },
  {
    id: 'q240',
    category: '1-3',
    question: 'Name a part of the national flower of Bangladesh (Shapla).',
    exampleAnswers: ["Petal", "Stem", "Leaf"],
    hint: 'The white water lily — name any part.'
  },
  {
    id: 'q241',
    category: '10-20',
    question: 'Name a particle studied in nuclear or modern physics at HSC level.',
    exampleAnswers: ["Proton", "Neutron", "Electron", "Photon", "Alpha Particle", "Beta Particle", "Neutrino", "Positron"],
    hint: 'Particles from the HSC nuclear physics syllabus.'
  },
  {
    id: 'q242',
    category: '1-5',
    question: 'Name a permanent member of the UN Security Council.',
    exampleAnswers: ["China", "France", "Russia", "United Kingdom", "United States"],
    hint: 'The P5 — 5 nations.'
  },
  {
    id: 'q243',
    category: '5-10',
    question: 'Name a phase change of matter.',
    exampleAnswers: ["Melting", "Freezing", "Evaporation", "Condensation", "Sublimation", "Deposition", "Ionization"],
    hint: 'Transitions between states of matter.'
  },
  {
    id: 'q244',
    category: '5-10',
    question: 'Name a phase of the Moon.',
    exampleAnswers: ["New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous", "Full Moon", "Waning Gibbous", "Last Quarter", "Waning Crescent"],
    hint: 'The eight phases in a lunar cycle.'
  },
  {
    id: 'q245',
    category: '10-20',
    question: 'Name a phase or sub-phase of cell division.',
    exampleAnswers: ["G1", "S", "G2", "Prophase", "Prometaphase", "Metaphase", "Anaphase", "Telophase", "Leptotene", "Zygotene"],
    hint: 'Stages of the cell cycle and mitosismeiosis.'
  },
  {
    id: 'q246',
    category: '20-40',
    question: 'Name a phenomenon studied in electromagnetism.',
    exampleAnswers: ["Electromagnetic Induction", "Magnetic Flux", "Electric Field", "Magnetic Field", "Capacitance", "Inductance", "Resistance", "Eddy Currents", "Hysteresis", "Lenz's Law", "Faraday's Law", "Ampere's Law"],
    hint: 'Topics covered in electromagnetism.'
  },
  {
    id: 'q247',
    category: '5-10',
    question: 'Name a physical constant used in physics calculations.',
    exampleAnswers: ["Gravitational Constant (G)", "Speed of Light (c)", "Planck's Constant (h)", "Elementary Charge (e)", "Universal Gas Constant (R)", "Avogadro's Number", "Permittivity of Free Space", "Permeability of Free Space"],
    hint: 'Fixed numerical values in nature.'
  },
  {
    id: 'q248',
    category: '40+',
    question: 'Name a physical quantity with a SI unit.',
    exampleAnswers: ["Length", "Mass", "Time", "Temperature", "Electric Current", "Force", "Energy", "Power", "Pressure", "Velocity", "Acceleration", "Resistance", "Frequency", "Luminous Intensity"],
    hint: 'Measurable physical quantities — there are dozens.'
  },
  {
    id: 'q249',
    category: '40+',
    question: 'Name a piece of household furniture.',
    exampleAnswers: ["Sofa", "Bed", "Dining Table", "Chair", "Bookshelf", "Dresser", "Desk", "Wardrobe", "Coffee Table", "Almirah"],
    hint: 'Movable objects that make a room livable.'
  },
  {
    id: 'q250',
    category: '5-10',
    question: 'Name a planet in our solar system.',
    exampleAnswers: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
    hint: 'There are officially 8.'
  },
  {
    id: 'q251',
    category: '5-10',
    question: 'Name a PlayStation first-party exclusive game franchise.',
    exampleAnswers: ["God of War", "The Last of Us", "Spider-Man", "Ghost of Tsushima", "Uncharted", "Bloodborne"],
    hint: 'Massive cinematic AAA titles published by Sony Interactive Entertainment.'
  },
  {
    id: 'q252',
    category: '10-20',
    question: 'Name a Pokemon anime rival or companion.',
    exampleAnswers: ["Gary Oak", "Misty", "Brock", "Dawn", "May"],
    hint: 'Ash\'s friendsrivals.'
  },
  {
    id: 'q253',
    category: '1-3',
    question: 'Name a pole of a standard magnet.',
    exampleAnswers: ["North", "South"],
    hint: 'There are exactly 2.'
  },
  {
    id: 'q254',
    category: '1-3',
    question: 'Name a pole of the Earth.',
    exampleAnswers: ["North Pole", "South Pole"],
    hint: 'There are exactly 2.'
  },
  {
    id: 'q255',
    category: '1-3',
    question: 'Name a pole on a standard battery terminal.',
    exampleAnswers: ["Positive", "Negative"],
    hint: 'There are 2 terminals.'
  },
  {
    id: 'q256',
    category: '5-10',
    question: 'Name a polygon with 5 or more sides.',
    exampleAnswers: ["Pentagon", "Hexagon", "Heptagon", "Octagon"],
    hint: 'Multi-sided shapes.'
  },
  {
    id: 'q257',
    category: '40+',
    question: 'Name a popular anime series.',
    exampleAnswers: ["Naruto", "One Piece", "Dragon Ball", "Death Note", "Attack on Titan", "Jujutsu Kaisen", "My Hero Academia", "Demon Slayer"],
    hint: 'Well-known anime shows.'
  },
  {
    id: 'q258',
    category: '5-10',
    question: 'Name a popular Bangladeshi brand or company.',
    exampleAnswers: ["Walton", "Pran", "Aarong", "Star Tech", "Udvash", "bKash"],
    hint: 'Local giants dominating tech retail, academics, food, or mobile banking.'
  },
  {
    id: 'q259',
    category: '5-10',
    question: 'Name a popular brand that manufactures computer keyboards.',
    exampleAnswers: ["Corsair", "Logitech", "Razer", "Keychron", "SteelSeries", "Wooting"],
    hint: 'Companies dominating the mechanical switch and RGB peripheral market.'
  },
  {
    id: 'q260',
    category: '5-10',
    question: 'Name a popular brand that manufactures computer mice.',
    exampleAnswers: ["Logitech", "Razer", "Zowie", "Glorious", "Pulsar", "Finalmouse"],
    hint: 'Companies known for ultra-lightweight designs and high-polling rate sensors.'
  },
  {
    id: 'q261',
    category: '5-10',
    question: 'Name a popular brand that manufactures headphones or gaming headsets.',
    exampleAnswers: ["Sony", "Sennheiser", "Audio-Technica", "Bose", "HyperX", "Beyerdynamic"],
    hint: 'Audio companies known for active noise cancellation or studio-grade sound.'
  },
  {
    id: 'q262',
    category: '40+',
    question: 'Name a popular card game.',
    exampleAnswers: ["Poker", "Blackjack", "Uno", "Solitaire", "Rummy", "Spades", "Hearts", "Bridge", "Go Fish", "Crazy Eights"],
    hint: 'Games played with a deck of cards.'
  },
  {
    id: 'q263',
    category: '40+',
    question: 'Name a popular creative or design software.',
    exampleAnswers: ["Photoshop", "Illustrator", "Figma", "Canva", "Blender", "After Effects", "Premiere Pro", "Procreate", "DaVinci Resolve", "GIMP", "Inkscape", "Cinema 4D", "Lightroom", "Sketch", "CorelDRAW"],
    hint: 'Tools used by designers, artists, and creators.'
  },
  {
    id: 'q264',
    category: '10-20',
    question: 'Name a popular fighting video game franchise.',
    exampleAnswers: ["Street Fighter", "Tekken", "Mortal Kombat", "Super Smash Bros.", "Shadow Fight", "Guilty Gear"],
    hint: 'Combat sports titles focusing on head-to-head matches, combos, and health bars.'
  },
  {
    id: 'q265',
    category: '10-20',
    question: 'Name a popular management or simulation game.',
    exampleAnswers: ["Factorio", "RimWorld", "Cities Skylines", "The Sims", "Stardew Valley", "RollerCoaster Tycoon"],
    hint: 'Games focused on building, scaling, optimizing, or maintaining systems and resources.'
  },
  {
    id: 'q266',
    category: '40+',
    question: 'Name a popular meme.',
    exampleAnswers: ["Doge", "Trollface", "Pepe", "This is Fine", "Success Kid"],
    hint: 'Viral internet memes.'
  },
  {
    id: 'q267',
    category: '20-40',
    question: 'Name a popular Netflix original series.',
    exampleAnswers: ["Stranger Things", "The Witcher", "Squid Game", "Money Heist", "Bridgerton", "The Crown"],
    hint: 'Hit shows on Netflix.'
  },
  {
    id: 'q268',
    category: '1-5',
    question: 'Name a popular PC digital game storefront.',
    exampleAnswers: ["Steam", "Epic Games Store", "GOG", "Battle.net", "EA App"],
    hint: 'The desktop apps you use to buy, download, and launch your PC games.'
  },
  {
    id: 'q269',
    category: '5-10',
    question: 'Name a popular relational or NoSQL database management system.',
    exampleAnswers: ["MySQL", "PostgreSQL", "MongoDB", "Oracle Database", "Microsoft SQL Server"],
    hint: 'The backend systems used by developers to store, query, and manage application data.'
  },
  {
    id: 'q270',
    category: '5-10',
    question: 'Name a popular romance anime.',
    exampleAnswers: ["Kaguya-sama Love Is War", "Your Lie in April", "Toradora!", "Horimiya", "Fruits Basket"],
    hint: 'High school rom-coms or emotional drama series.'
  },
  {
    id: 'q271',
    category: '40+',
    question: 'Name a popular snack food.',
    exampleAnswers: ["Chips", "Biscuit", "Namkeen", "Popcorn", "Chocolate", "Samosa Chat"],
    hint: 'Quick bites.'
  },
  {
    id: 'q272',
    category: '40+',
    question: 'Name a popular social media platform.',
    exampleAnswers: ["Facebook", "Instagram", "TikTok", "YouTube", "X (Twitter)", "Snapchat", "LinkedIn", "Reddit", "Pinterest", "Discord"],
    hint: 'Apps where people post and scroll.'
  },
  {
    id: 'q273',
    category: '20-40',
    question: 'Name a popular software or application created by Google.',
    exampleAnswers: ["Google Chrome", "Google Maps", "Google Drive", "Android", "Google Docs", "YouTube"],
    hint: 'The main ecosystem apps you probably use for browsing, navigating, or watching videos.'
  },
  {
    id: 'q274',
    category: '1-5',
    question: 'Name a popular software used for graphic design or vector illustration.',
    exampleAnswers: ["Adobe Illustrator", "CorelDRAW", "Canva", "Affinity Designer", "Figma"],
    hint: 'Apps used by creatives to make logos, social media posts, or scalable graphics.'
  },
  {
    id: 'q275',
    category: '1-5',
    question: 'Name a popular software used specifically for photo editing and manipulation.',
    exampleAnswers: ["Adobe Photoshop", "Adobe Lightroom", "GIMP", "Photopea", "Affinity Photo"],
    hint: 'Tools used for color grading, retouching, or removing backgrounds from images.'
  },
  {
    id: 'q276',
    category: '10-20',
    question: 'Name a popular South Korean webtoon or manhwa.',
    exampleAnswers: ["Solo Leveling", "Tower of God", "The God of High School", "Lookism", "Sweet Home", "Bastard"],
    hint: 'Vertically scrolling digital comic books originating from Korea.'
  },
  {
    id: 'q277',
    category: '10-20',
    question: 'Name a popular survival video game.',
    exampleAnswers: ["Minecraft", "Rust", "The Forest", "Ark Survival Evolved", "Don't Starve", "Subnautica", "Terraria"],
    hint: 'Games where you gather resources, build shelters, and manage hunger or health meters to stay alive.'
  },
  {
    id: 'q278',
    category: '40+',
    question: 'Name a popular video editing software.',
    exampleAnswers: ["DaVinci Resolve", "Adobe Premiere Pro", "Final Cut Pro", "Sony Vegas", "CapCut", "iMovie", "Kdenlive", "Filmora", "HitFilm", "Avid Media Composer", "After Effects", "OpenShot"],
    hint: 'Software used to cut and edit video.'
  },
  {
    id: 'q279',
    category: '1-5',
    question: 'Name a popular video game development engine.',
    exampleAnswers: ["Unreal Engine", "Unity", "Godot", "Source Engine", "CryEngine"],
    hint: 'The core software frameworks developers use to build out rendering and physics.'
  },
  {
    id: 'q280',
    category: '20-40',
    question: 'Name a popular video game genre.',
    exampleAnswers: ["Action", "Adventure", "RPG", "Shooter", "Battle Royale", "Sports", "Racing", "Puzzle"],
    hint: 'Game categories.'
  },
  {
    id: 'q281',
    category: '40+',
    question: 'Name a popular web browser.',
    exampleAnswers: ["Chrome", "Firefox", "Safari", "Edge", "Brave", "Opera", "Tor Browser"],
    hint: 'Apps you use to surf the internet.'
  },
  {
    id: 'q282',
    category: '5-10',
    question: 'Name a popular workspace communication and collaboration software.',
    exampleAnswers: ["Microsoft Teams", "Slack", "Zoom", "Discord", "Google Meet"],
    hint: 'The apps people use for remote work meetings, screen sharing, and group chats.'
  },
  {
    id: 'q283',
    category: '5-10',
    question: 'Name a popular, critically acclaimed indie game.',
    exampleAnswers: ["Hollow Knight", "Stardew Valley", "Undertale", "Celeste", "Terraria", "Hades"],
    hint: 'Masterpieces made by small independent studios rather than massive corporations.'
  },
  {
    id: 'q284',
    category: '1-5',
    question: 'Name a positional numeral base system fundamental to computer sciences.',
    exampleAnswers: ["Binary", "Octal", "Decimal", "Hexadecimal"],
    hint: 'Base 2, 8, 10, or 16 frameworks sorting notation fields.'
  },
  {
    id: 'q285',
    category: '1-3',
    question: 'Name a possible result of a standard chess game.',
    exampleAnswers: ["Win", "Loss", "Draw"],
    hint: 'There are 3 outcomes.'
  },
  {
    id: 'q286',
    category: '5-10',
    question: 'Name a postulate of Einstein\'s Special Theory of Relativity.',
    exampleAnswers: ["Constancy of Speed of Light", "Principle of Relativity", "Time Dilation", "Length Contraction", "Mass-Energy Equivalence", "Relativistic Momentum"],
    hint: 'The core ideas of Special Relativity.'
  },
  {
    id: 'q287',
    category: '5-10',
    question: 'Name a prefix used in the SI system for fractional multipliers (less than 1).',
    exampleAnswers: ["Milli", "Micro", "Nano", "Pico", "Femto", "Centi", "Deci"],
    hint: 'Think negative powers of 10 like 10^-3, 10^-6, etc.'
  },
  {
    id: 'q288',
    category: '5-10',
    question: 'Name a prefix used in the SI system for multiple multipliers (greater than 1).',
    exampleAnswers: ["Kilo", "Mega", "Giga", "Tera", "Peta"],
    hint: 'Think positive powers of 10 like 10^3, 10^6, etc.'
  },
  {
    id: 'q289',
    category: '5-10',
    question: 'Name a primary case type (কারক) identified inside Bangla grammar rules.',
    exampleAnswers: ["Kortri", "Kormo", "Koron", "Shompordan", "Opadan", "Odhikoron"],
    hint: 'Structural linkages indicating sentence actors, target results, operational tools, or situational settings.'
  },
  {
    id: 'q290',
    category: '1-5',
    question: 'Name a primary classification of grammatical gender in language rules.',
    exampleAnswers: ["Masculine", "Feminine", "Neuter", "Common"],
    hint: 'Locks nouns down based on biological sex signals, lifeless objects, or shared dual states.'
  },
  {
    id: 'q291',
    category: '1-3',
    question: 'Name a primary color of light (RGB model).',
    exampleAnswers: ["Red", "Green", "Blue"],
    hint: 'There are 3.'
  },
  {
    id: 'q292',
    category: '5-10',
    question: 'Name a primary component of a nuclear reactor.',
    exampleAnswers: ["Fuel Rod", "Moderator", "Control Rod", "Coolant", "Shielding", "Turbine", "Generator"],
    hint: 'Parts needed to safely generate nuclear power.'
  },
  {
    id: 'q293',
    category: '5-10',
    question: 'Name a primary environmental air pollutant gas from industrialautomotive sources.',
    exampleAnswers: ["Carbon Monoxide", "Sulfur Dioxide", "Nitric Oxide", "Methane", "Ammonia"],
    hint: 'Gases emitted directly into the troposphere causing toxic hazards.'
  },
  {
    id: 'q294',
    category: '1-3',
    question: 'Name a primary fundamental boolean logic gate architecture.',
    exampleAnswers: ["AND", "OR", "NOT"],
    hint: 'The most basic digital operations multiplying, sum-linking, or inversing input bits.'
  },
  {
    id: 'q295',
    category: '1-5',
    question: 'Name a primary geographical cortex lobe of the human cerebrum.',
    exampleAnswers: ["Frontal", "Parietal", "Occipital", "Temporal"],
    hint: 'Brain partitions sorting logic, motor integration, visual tracking, or audio cues.'
  },
  {
    id: 'q296',
    category: '1-3',
    question: 'Name a primary grammatical voice state inside English sentences.',
    exampleAnswers: ["Active", "Passive"],
    hint: 'Shifts whether focal subjects directly execute actions or undergo them.'
  },
  {
    id: 'q297',
    category: '1-5',
    question: 'Name a primary human taste sensation.',
    exampleAnswers: ["Sweet", "Sour", "Salty", "Bitter", "Umami"],
    hint: 'The 5 scientifically recognized basic tastes.'
  },
  {
    id: 'q298',
    category: '5-10',
    question: 'Name a primary layer of Earth\'s atmosphere.',
    exampleAnswers: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere", "Exosphere"],
    hint: 'There are 5 main layers.'
  },
  {
    id: 'q299',
    category: '5-10',
    question: 'Name a primary or secondary color.',
    exampleAnswers: ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"],
    hint: '3 primary + 3 secondary colors.'
  },
  {
    id: 'q300',
    category: '1-5',
    question: 'Name a primary state variable in classical thermodynamics.',
    exampleAnswers: ["Pressure", "Volume", "Temperature", "Entropy", "Internal Energy"],
    hint: 'Macroscopic parameters defining a system\'s condition.'
  },
  {
    id: 'q301',
    category: '1-5',
    question: 'Name a primary thermodynamic process where a specific property remains constant.',
    exampleAnswers: ["Isothermal", "Isobaric", "Isochoric", "Adiabatic"],
    hint: 'Processes keeping temperature, pressure, volume, or net heat constant.'
  },
  {
    id: 'q302',
    category: '1-5',
    question: 'Name a primary type of chemical bond or strong interatomic attraction.',
    exampleAnswers: ["Ionic", "Covalent", "Metallic", "Coordinate Covalent"],
    hint: 'Forces binding atoms together within stable compounds.'
  },
  {
    id: 'q303',
    category: '1-3',
    question: 'Name a primary water-soluble vitamin grouping.',
    exampleAnswers: ["Vitamin B", "Vitamin C"],
    hint: 'Nutrients readily dissolved and constantly flushed out via urinary excretion paths.'
  },
  {
    id: 'q304',
    category: '10-20',
    question: 'Name a prime number between 1 and 50.',
    exampleAnswers: ["2", "3", "5", "7", "11", "13", "17", "19", "23", "29", "31", "37", "41", "43", "47"],
    hint: 'There are 15 of them.'
  },
  {
    id: 'q305',
    category: '5-10',
    question: 'Name a prime number less than 30.',
    exampleAnswers: ["2", "3", "5", "7", "11", "13", "17", "19", "23", "29"],
    hint: 'Small primes.'
  },
  {
    id: 'q306',
    category: '1-5',
    question: 'Name a principal muscular valve regulating flow inside the human heart chambers.',
    exampleAnswers: ["Tricuspid", "Bicuspid", "Aortic Semilunar", "Pulmonary Semilunar"],
    hint: 'Fibers preventing fluid reverse between atria, ventricles, and key arteries.'
  },
  {
    id: 'q307',
    category: '5-10',
    question: 'Name a principal taxonomic phylum of the animal kingdom (Animalia).',
    exampleAnswers: ["Porifera", "Cnidaria", "Platyhematodes", "Nematoda", "Annelida", "Arthropoda", "Mollusca", "Echinodermata", "Chordata"],
    hint: 'Structural lineages from elementary sea sponges up to advanced backbone chordates.'
  },
  {
    id: 'q308',
    category: '40+',
    question: 'Name a programming concept or data structure.',
    exampleAnswers: ["Array", "Loop", "Function", "Class", "Stack", "Queue", "Tree", "Graph", "Hash Table", "Recursion"],
    hint: 'Fundamental building blocks of code.'
  },
  {
    id: 'q309',
    category: '10-20',
    question: 'Name a programming language used for web development.',
    exampleAnswers: ["JavaScript", "Python", "PHP", "Ruby", "TypeScript", "Go", "Rust", "Java"],
    hint: 'Languages for building websites and backends.'
  },
  {
    id: 'q310',
    category: '20-40',
    question: 'Name a programming language.',
    exampleAnswers: ["Python", "JavaScript", "Java", "C++", "C#", "PHP", "Ruby", "Swift", "Go", "TypeScript"],
    hint: 'Any real programming language.'
  },
  {
    id: 'q311',
    category: '40+',
    question: 'Name a prominent historical Muslim figure.',
    exampleAnswers: ["Saladin", "Ibn Sina (Avicenna)", "Mansa Musa", "Ibn Battuta", "Al-Khwarizmi"],
    hint: 'Legendary scholars, rulers, or explorers from the Islamic Golden Age.'
  },
  {
    id: 'q312',
    category: '5-10',
    question: 'Name a prominent prophet in Abrahamic religions.',
    exampleAnswers: ["Muhammad", "Jesus", "Moses", "Abraham", "Noah"],
    hint: 'Key historical messengers recognized across major monotheistic scriptures.'
  },
  {
    id: 'q313',
    category: '5-10',
    question: 'Name a property of a function in mathematics.',
    exampleAnswers: ["Continuity", "Differentiability", "Periodicity", "Symmetry", "Monotonicity", "Boundedness", "Injectivity", "Surjectivity", "Bijectivity"],
    hint: 'Characteristics that describe how a function behaves.'
  },
  {
    id: 'q314',
    category: '5-10',
    question: 'Name a property of a geometric figure related to symmetry.',
    exampleAnswers: ["Line Symmetry", "Rotational Symmetry", "Point Symmetry", "Translational Symmetry", "Reflective Symmetry", "Bilateral Symmetry", "Glide Reflection", "Scale Symmetry"],
    hint: 'Types of symmetry a shape can have.'
  },
  {
    id: 'q315',
    category: '20-40',
    question: 'Name a property of a solid material studied in physics.',
    exampleAnswers: ["Density", "Elasticity", "Plasticity", "Hardness", "Ductility", "Malleability", "Tensile Strength", "Brittleness", "Conductivity", "Resistivity", "Thermal Expansion", "Young's Modulus"],
    hint: 'Physical properties of solid materials.'
  },
  {
    id: 'q316',
    category: '10-20',
    question: 'Name a property of real numbers.',
    exampleAnswers: ["Commutative Property", "Associative Property", "Distributive Property", "Identity Property", "Inverse Property", "Closure Property", "Reflexive Property", "Transitive Property", "Symmetric Property", "Density Property"],
    hint: 'Algebraic properties that real numbers satisfy.'
  },
  {
    id: 'q317',
    category: '10-20',
    question: 'Name a property or concept of solutions in HSC chemistry.',
    exampleAnswers: ["Solubility", "Concentration", "Molarity", "Dilution", "Saturated Solution", "Osmosis", "Electrolyte", "Non-electrolyte", "pH", "Neutralization"],
    hint: 'Solution chemistry topics at HSC level.'
  },
  {
    id: 'q318',
    category: '20-40',
    question: 'Name a proteinogenic amino acid.',
    exampleAnswers: ["Alanine", "Glycine", "Leucine", "Valine", "Tryptophan", "Tyrosine", "Serine", "Proline", "Lysine", "Methionine"],
    hint: 'There are 20 standard ones encoded by DNA.'
  },
  {
    id: 'q319',
    category: '40+',
    question: 'Name a PS5 game.',
    exampleAnswers: ["Spider-Man 2", "God of War Ragnarok", "Demon's Souls", "Returnal", "Ratchet & Clank Rift Apart", "Astro's Playroom", "Horizon Forbidden West", "Final Fantasy XVI", "Gran Turismo 7", "The Last of Us Part I"],
    hint: 'Games available on PlayStation 5.'
  },
  {
    id: 'q320',
    category: '1-5',
    question: 'Name a quadrant on a standard Cartesian coordinate plane.',
    exampleAnswers: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
    hint: 'The 4 sections divided by the X and Y axes.'
  },
  {
    id: 'q321',
    category: '1-3',
    question: 'Name a quadrant where the trigonometric cosine function yields positive values.',
    exampleAnswers: ["Quadrant I", "Quadrant IV"],
    hint: 'Coordinate zones where the X coordinate maps right of zero.'
  },
  {
    id: 'q322',
    category: '1-3',
    question: 'Name a quadrant where the trigonometric sine function yields positive values.',
    exampleAnswers: ["Quadrant I", "Quadrant II"],
    hint: 'Coordinate zones where the Y coordinate maps above zero.'
  },
  {
    id: 'q323',
    category: '1-3',
    question: 'Name a quadrant where the trigonometric tangent function yields positive values.',
    exampleAnswers: ["Quadrant I", "Quadrant III"],
    hint: 'Coordinate zones where signs of X and Y match identically.'
  },
  {
    id: 'q324',
    category: '5-10',
    question: 'Name a quantity conserved in a closed physical system.',
    exampleAnswers: ["Energy", "Momentum", "Angular Momentum", "Electric Charge", "Mass-Energy", "Baryon Number", "Lepton Number", "Linear Momentum", "Parity"],
    hint: 'Quantities that remain constant in an isolated system.'
  },
  {
    id: 'q325',
    category: '5-10',
    question: 'Name a quantity measured in joules.',
    exampleAnswers: ["Kinetic Energy", "Potential Energy", "Work Done", "Heat", "Internal Energy", "Enthalpy", "Binding Energy", "Activation Energy"],
    hint: 'Physical quantities whose SI unit is the joule.'
  },
  {
    id: 'q326',
    category: '5-10',
    question: 'Name a quantity related to rotational motion.',
    exampleAnswers: ["Angular Velocity", "Angular Acceleration", "Torque", "Moment of Inertia", "Angular Momentum", "Centripetal Force", "Centrifugal Force", "Rotational Kinetic Energy", "Period"],
    hint: 'Physical quantities describing objects spinning or rotating.'
  },
  {
    id: 'q327',
    category: '1-5',
    question: 'Name a quantum number in chemistry.',
    exampleAnswers: ["Principal", "Azimuthal", "Magnetic", "Spin"],
    hint: 'Numbers detailing the position and energy of an electron.'
  },
  {
    id: 'q328',
    category: '40+',
    question: 'Name a racing game.',
    exampleAnswers: ["Gran Turismo", "Forza Motorsport", "Mario Kart", "Need for Speed", "F1 series", "Burnout Paradise", "Dirt Rally", "Ridge Racer", "WipEout", "Assetto Corsa"],
    hint: 'Games where racing vehicles is the main goal.'
  },
  {
    id: 'q329',
    category: '10-20',
    question: 'Name a rank in a standard deck of cards.',
    exampleAnswers: ["Ace", "King", "Queen", "Jack", "Ten", "Two", "Seven", "Five", "Eight", "Three"],
    hint: 'There are 13 possible ranks.'
  },
  {
    id: 'q330',
    category: '40+',
    question: 'Name a recognized breed of dog.',
    exampleAnswers: ["Labrador", "German Shepherd", "Poodle", "Bulldog", "Beagle", "Golden Retriever", "Pug", "Rottweiler", "Husky", "Dalmatian"],
    hint: 'There are hundreds of recognized breeds.'
  },
  {
    id: 'q331',
    category: '40+',
    question: 'Name a recognized constellation in the night sky.',
    exampleAnswers: ["Orion", "Ursa Major", "Cassiopeia", "Andromeda", "Cygnus", "Lyra", "Scorpius", "Pegasus", "Leo", "Draco"],
    hint: 'There are 88 modern constellations.'
  },
  {
    id: 'q332',
    category: '40+',
    question: 'Name a recognized formula or equation from HSC Physics.',
    exampleAnswers: ["F = ma", "v = u + at", "s = ut + 12at^2", "E = mc^2", "V = IR", "P = VI", "W = Fd", "Q = msΔθ", "PV = nRT", "F = G(m1m2r^2)"],
    hint: 'Standard mathematical equations governing physics.'
  },
  {
    id: 'q333',
    category: '40+',
    question: 'Name a recognized music genre.',
    exampleAnswers: ["Pop", "Rock", "Jazz", "Classical", "Hip-hop", "Blues", "R&B", "Reggae", "Electronic", "Folk"],
    hint: 'Any recognized style of music.'
  },
  {
    id: 'q334',
    category: '5-10',
    question: 'Name a recognized official working language of the United Nations.',
    exampleAnswers: ["English", "French", "Spanish", "Arabic", "Russian", "Chinese"],
    hint: 'There are exactly 6.'
  },
  {
    id: 'q335',
    category: '40+',
    question: 'Name a recognized profession or job.',
    exampleAnswers: ["Doctor", "Teacher", "Engineer", "Nurse", "Chef", "Lawyer", "Accountant", "Farmer", "Pilot", "Police Officer"],
    hint: 'Ways people make a living.'
  },
  {
    id: 'q336',
    category: '40+',
    question: 'Name a recognized sport.',
    exampleAnswers: ["Cricket", "Football", "Basketball", "Tennis", "Hockey", "Swimming", "Golf", "Rugby", "Volleyball", "Badminton"],
    hint: 'Athletic competitions.'
  },
  {
    id: 'q337',
    category: '40+',
    question: 'Name a recognized university in Bangladesh.',
    exampleAnswers: ["Dhaka University", "BUET", "Jahangirnagar University", "BRAC University", "NSU", "SUST", "RUET", "CUET", "IUT", "East West University"],
    hint: 'Public and private universities count.'
  },
  {
    id: 'q338',
    category: '40+',
    question: 'Name a released Rockstar Games title.',
    exampleAnswers: ["GTA V", "GTA San Andreas", "Red Dead Redemption 2", "GTA Vice City", "GTA IV", "Red Dead Redemption", "GTA III", "Bully", "LA Noire", "Max Payne"],
    hint: 'Games published or developed by Rockstar.'
  },
  {
    id: 'q339',
    category: '10-20',
    question: 'Name a river in Bangladesh.',
    exampleAnswers: ["Padma", "Meghna", "Jamuna", "Surma", "Karnaphuli", "Teesta", "Brahmaputra", "Ganges"],
    hint: 'Major rivers flowing through the country.'
  },
  {
    id: 'q340',
    category: '5-10',
    question: 'Name a river that flows through Bangladesh.',
    exampleAnswers: ["Padma", "Meghna", "Jamuna", "Brahmaputra", "Surma", "Karnaphuli", "Buriganga", "Teesta"],
    hint: 'Bangladesh is crisscrossed by hundreds of rivers.'
  },
  {
    id: 'q341',
    category: '40+',
    question: 'Name a romance anime.',
    exampleAnswers: ["Horimiya", "Toradora", "Kaguya-sama", "My Little Monster", "Rent-a-Girlfriend"],
    hint: 'Love story anime.'
  },
  {
    id: 'q342',
    category: '40+',
    question: 'Name a room in a typical house.',
    exampleAnswers: ["Kitchen", "Bedroom", "Bathroom", "Living Room", "Dining Room", "Study", "Balcony", "Veranda", "Storeroom", "Garage"],
    hint: 'The different spaces inside a home.'
  },
  {
    id: 'q343',
    category: '5-10',
    question: 'Name a rule of indices or exponents.',
    exampleAnswers: ["Product Rule", "Quotient Rule", "Power of a Power", "Zero Exponent Rule", "Negative Exponent Rule", "Fractional Exponent", "Product to Power Rule", "Quotient to Power Rule"],
    hint: 'Rules for working with powers and exponents at HSC level.'
  },
  {
    id: 'q344',
    category: '10-20',
    question: 'Name a rule used in differentiation.',
    exampleAnswers: ["Power Rule", "Chain Rule", "Product Rule", "Quotient Rule", "Sum Rule", "Constant Rule", "Exponential Rule", "Sine Rule", "Cosine Rule", "Implicit Differentiation"],
    hint: 'HSC-level techniques for finding derivatives.'
  },
  {
    id: 'q345',
    category: '5-10',
    question: 'Name a Sacred Gear from High School DxD.',
    exampleAnswers: ["Boosted Gear", "Divine Dividing", "True Longinus"],
    hint: 'Powerful artifacts in DxD.'
  },
  {
    id: 'q346',
    category: '40+',
    question: 'Name a scalar quantity studied in physics.',
    exampleAnswers: ["Mass", "Time", "Distance", "Speed", "Work", "Energy", "Power", "Temperature", "Density", "Volume"],
    hint: 'Physical quantities with magnitude only.'
  },
  {
    id: 'q347',
    category: '1-5',
    question: 'Name a scale network classification sorting systems geographically.',
    exampleAnswers: ["PAN", "LAN", "MAN", "WAN"],
    hint: 'Ranging scopes from personal body distances to massive global enterprise connections.'
  },
  {
    id: 'q348',
    category: '40+',
    question: 'Name a school subject in Bangla.',
    exampleAnswers: ["Bangla", "English", "Ganit", "Biggan", "Itihas"],
    hint: 'Common curriculum subjects.'
  },
  {
    id: 'q349',
    category: '40+',
    question: 'Name a school supply item.',
    exampleAnswers: ["Pencil", "Pen", "Notebook", "Eraser", "Ruler", "Bag", "Book"],
    hint: 'Things students use.'
  },
  {
    id: 'q350',
    category: '20-40',
    question: 'Name a scientist associated with a law or theory in physics.',
    exampleAnswers: ["Newton", "Einstein", "Faraday", "Maxwell", "Bohr", "Heisenberg", "Schrödinger", "Planck", "Curie", "Ohm", "Coulomb", "Ampere", "Kelvin", "Joule", "Pascal"],
    hint: 'Physicists whose names appear in laws or units.'
  },
  {
    id: 'q351',
    category: '1-5',
    question: 'Name a season of the year.',
    exampleAnswers: ["Spring", "Summer", "Autumn", "Winter"],
    hint: 'There are 4 seasons.'
  },
  {
    id: 'q352',
    category: '5-10',
    question: 'Name a sentence classification based on semantic meaning (अर्थगत) in Bangla grammar.',
    exampleAnswers: ["Bibritymulok", "Proshnobodhok", "Anugymulok", "Bismaybodhok", "Prarthonamulok"],
    hint: 'Sentences serving as pure descriptions, inquiries, instructions, or emotional sighs.'
  },
  {
    id: 'q353',
    category: '1-3',
    question: 'Name a sentence classification based on structural design (গঠনগত) in Bangla grammar.',
    exampleAnswers: ["Shorol", "Jotil", "Jougik"],
    hint: 'The Bangla syntax equivalents of simple, complex, and compound layouts.'
  },
  {
    id: 'q354',
    category: '5-10',
    question: 'Name a Servant class in Fate series.',
    exampleAnswers: ["Saber", "Archer", "Lancer", "Rider", "Caster", "Assassin", "Berserker"],
    hint: 'Holy Grail War classes.'
  },
  {
    id: 'q355',
    category: '20-40',
    question: 'Name a Shakespeare play.',
    exampleAnswers: ["Hamlet", "Macbeth", "Othello", "Romeo and Juliet", "A Midsummer Night's Dream", "King Lear", "The Merchant of Venice", "Much Ado About Nothing", "Julius Caesar", "The Tempest"],
    hint: 'Shakespeare wrote 37 plays — tragedies, comedies, and histories.'
  },
  {
    id: 'q356',
    category: '40+',
    question: 'Name a shape studied in geometry.',
    exampleAnswers: ["Circle", "Square", "Rectangle", "Triangle", "Hexagon", "Pentagon", "Rhombus", "Trapezoid", "Ellipse", "Cylinder", "Cube", "Sphere", "Cone", "Pyramid", "Prism"],
    hint: '2D and 3D geometric shapes.'
  },
  {
    id: 'q357',
    category: '40+',
    question: 'Name a Shonen Jump anime protagonist.',
    exampleAnswers: ["Naruto Uzumaki", "Monkey D. Luffy", "Ichigo Kurosaki", "Goku", "Deku", "Tanjiro"],
    hint: 'Main heroes from Shonen series.'
  },
  {
    id: 'q358',
    category: '40+',
    question: 'Name a shounen anime.',
    exampleAnswers: ["Naruto", "Dragon Ball Z", "One Piece", "Bleach", "Attack on Titan", "My Hero Academia", "Demon Slayer", "Hunter x Hunter", "Fullmetal Alchemist", "Jujutsu Kaisen"],
    hint: 'Action-oriented anime typically aimed at young male audiences.'
  },
  {
    id: 'q359',
    category: '5-10',
    question: 'Name a SI base unit.',
    exampleAnswers: ["Meter", "Kilogram", "Second", "Ampere", "Kelvin", "Mole", "Candela"],
    hint: 'Fundamental measurement units.'
  },
  {
    id: 'q360',
    category: '1-3',
    question: 'Name a side of an argument in a formal debate.',
    exampleAnswers: ["For", "Against"],
    hint: 'Proposition or Opposition — there are 2.'
  },
  {
    id: 'q361',
    category: '10-20',
    question: 'Name a sign of the Western Zodiac.',
    exampleAnswers: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"],
    hint: 'There are exactly 12.'
  },
  {
    id: 'q362',
    category: '40+',
    question: 'Name a slice of life anime.',
    exampleAnswers: ["K-On!", "Non Non Biyori", "Barakamon", "Nichijou", "Lucky Star"],
    hint: 'Chill everyday anime.'
  },
  {
    id: 'q363',
    category: '40+',
    question: 'Name a social app feature.',
    exampleAnswers: ["Stories", "Reels", "Live", "Post", "Comment", "Like"],
    hint: 'Things on InstagramTikTok.'
  },
  {
    id: 'q364',
    category: '40+',
    question: 'Name a social media influencer or content creator.',
    exampleAnswers: ["MrBeast", "PewDiePie", "Khaby Lame", "CarryMinati", "MKBHD", "Dude Perfect", "Charli D'Amelio", "Zack King", "Apu", "Tahsin"],
    hint: 'Anyone big on YouTube, TikTok, Instagram, etc.'
  },
  {
    id: 'q365',
    category: '1-3',
    question: 'Name a solution to the equation x² = 4.',
    exampleAnswers: ["2", "−2", "+2", "Positive 2", "Negative 2"],
    hint: 'There are exactly 2 real solutions.'
  },
  {
    id: 'q366',
    category: '5-10',
    question: 'Name a South Asian currency.',
    exampleAnswers: ["Taka", "Rupee", "Rial", "Kyat", "Rupiah", "Ngultrum"],
    hint: 'Money used in the region.'
  },
  {
    id: 'q367',
    category: '40+',
    question: 'Name a sovereign country in the world.',
    exampleAnswers: ["France", "Germany", "Japan", "Brazil", "India", "Bangladesh", "China", "Canada", "Australia", "Mexico"],
    hint: 'There are about 195 of these.'
  },
  {
    id: 'q368',
    category: '1-3',
    question: 'Name a spatial axis on a standard 3D coordinate system.',
    exampleAnswers: ["X", "Y", "Z"],
    hint: 'The 3 dimensions of space.'
  },
  {
    id: 'q369',
    category: '40+',
    question: 'Name a species of bird.',
    exampleAnswers: ["Eagle", "Sparrow", "Pigeon", "Parrot", "Owl", "Hawk", "Flamingo", "Swan", "Crow", "Kingfisher"],
    hint: 'Feathered, winged animals.'
  },
  {
    id: 'q370',
    category: '40+',
    question: 'Name a species of fish.',
    exampleAnswers: ["Salmon", "Tuna", "Hilsa", "Catfish", "Goldfish", "Clownfish", "Trout", "Cod", "Rohu", "Tilapia"],
    hint: 'Aquatic, gill-bearing animals.'
  },
  {
    id: 'q371',
    category: '40+',
    question: 'Name a species of insect.',
    exampleAnswers: ["Ant", "Bee", "Mosquito", "Butterfly", "Grasshopper", "Cockroach", "Dragonfly", "Beetle", "Firefly", "Termite"],
    hint: 'Six-legged creatures.'
  },
  {
    id: 'q372',
    category: '40+',
    question: 'Name a species of mammal.',
    exampleAnswers: ["Dog", "Cat", "Lion", "Elephant", "Whale", "Dolphin", "Tiger", "Cow", "Bear", "Deer"],
    hint: 'Warm-blooded, fur-bearing animals.'
  },
  {
    id: 'q373',
    category: '5-10',
    question: 'Name a specific Cursed Technique from \'Jujutsu Kaisen\'.',
    exampleAnswers: ["Limitless", "Limitless and Six Eyes", "Ten Shadows Technique", "Idle Transfiguration", "Ratio Technique", "Disaster Flames", "Boogie Woogie"],
    hint: 'The innate supernatural abilities utilized by sorcerers or curses, like Gojo\'s or Megumi\'s powers.'
  },
  {
    id: 'q374',
    category: '5-10',
    question: 'Name a specific mapping classification of algebraic functions.',
    exampleAnswers: ["One-to-one", "Onto", "Into", "Identity", "Constant", "Inverse"],
    hint: 'How domains link to codomains inside standard sets.'
  },
  {
    id: 'q375',
    category: '5-10',
    question: 'Name a spectral line series in the hydrogen emission spectrum.',
    exampleAnswers: ["Lyman", "Balmer", "Paschen", "Brackett", "Pfund"],
    hint: 'Electron transitions studied in modern physics at HSC level.'
  },
  {
    id: 'q376',
    category: '40+',
    question: 'Name a spoken language.',
    exampleAnswers: ["English", "Bengali", "Spanish", "Mandarin", "Hindi", "Arabic", "French", "Russian", "Portuguese", "German"],
    hint: 'Currently spoken human languages.'
  },
  {
    id: 'q377',
    category: '20-40',
    question: 'Name a sport played in the Summer Olympics.',
    exampleAnswers: ["Swimming", "Athletics", "Gymnastics", "Rowing", "Volleyball", "Boxing", "Cycling", "Basketball", "Football", "Tennis", "Archery", "Fencing", "Judo", "Wrestling", "Sailing"],
    hint: 'There are about 33 sports at the Summer Games.'
  },
  {
    id: 'q378',
    category: '40+',
    question: 'Name a sports anime.',
    exampleAnswers: ["Haikyuu", "Slam Dunk", "Kuroko no Basket", "Yuri on Ice", "Free!"],
    hint: 'Athletic anime series.'
  },
  {
    id: 'q379',
    category: '5-10',
    question: 'Name a stage of mitosis.',
    exampleAnswers: ["Prophase", "Prometaphase", "Metaphase", "Anaphase", "Telophase", "Cytokinesis"],
    hint: 'The ordered steps of cell division in somatic cells.'
  },
  {
    id: 'q380',
    category: '1-3',
    question: 'Name a standard 2D coordinate system used to locate a point in a plane.',
    exampleAnswers: ["Cartesian", "Polar"],
    hint: 'Either rectangular grids or angles and distances.'
  },
  {
    id: 'q381',
    category: '5-10',
    question: 'Name a standard algebraic identity.',
    exampleAnswers: ["(a+b)² = a²+2ab+b²", "(a-b)² = a²-2ab+b²", "(a+b)(a-b) = a²-b²", "(a+b)³", "(a-b)³", "a³+b³ factorization", "a³-b³ factorization", "(a+b+c)²"],
    hint: 'Algebraic identities used in HSC algebra.'
  },
  {
    id: 'q382',
    category: '1-3',
    question: 'Name a standard axis in a 2D coordinate plane.',
    exampleAnswers: ["X", "Y"],
    hint: 'There are 2.'
  },
  {
    id: 'q383',
    category: '10-20',
    question: 'Name a standard basic HTMLCSS color keyword.',
    exampleAnswers: ["Red", "Blue", "Green", "Yellow", "Black", "White", "Purple", "Orange", "Pink", "Gray"],
    hint: 'Named colors built into CSS.'
  },
  {
    id: 'q384',
    category: '40+',
    question: 'Name a standard C programming keyword.',
    exampleAnswers: ["int", "float", "double", "char", "if", "else", "for", "while", "return", "void"],
    hint: 'There are 32 reserved words in C.'
  },
  {
    id: 'q385',
    category: '5-10',
    question: 'Name a standard chess piece.',
    exampleAnswers: ["King", "Queen", "Rook", "Bishop", "Knight", "Pawn"],
    hint: 'There are 6 distinct types of pieces.'
  },
  {
    id: 'q386',
    category: '5-10',
    question: 'Name a standard indicator dye used for acid-base volumetric titrations.',
    exampleAnswers: ["Phenolphthalein", "Methyl Orange", "Litmus", "Methyl Red", "Bromothymol Blue"],
    hint: 'Chemical agents shifting color at explicit pH values.'
  },
  {
    id: 'q387',
    category: '1-3',
    question: 'Name a standard method to charge an object with static electricity.',
    exampleAnswers: ["Friction", "Conduction", "Induction"],
    hint: 'Rubbing surfaces, direct contact, or nearby charging without touching.'
  },
  {
    id: 'q388',
    category: '1-3',
    question: 'Name a standard nuclear radiation emission type.',
    exampleAnswers: ["Alpha", "Beta", "Gamma"],
    hint: 'Helium nuclei, high speed electrons, or high energy photons.'
  },
  {
    id: 'q389',
    category: '10-20',
    question: 'Name a standard punctuation mark in English.',
    exampleAnswers: ["Period", "Comma", "Question Mark", "Exclamation Mark", "Colon", "Semicolon", "Apostrophe", "Hyphen", "Parentheses", "Quotation Mark"],
    hint: 'Symbols used to structure writing.'
  },
  {
    id: 'q390',
    category: '5-10',
    question: 'Name a standard SI base unit.',
    exampleAnswers: ["Meter", "Kilogram", "Second", "Ampere", "Kelvin", "Mole", "Candela"],
    hint: 'There are exactly 7.'
  },
  {
    id: 'q391',
    category: '5-10',
    question: 'Name a standard structural noun classification category in English grammar.',
    exampleAnswers: ["Proper", "Common", "Collective", "Material", "Abstract"],
    hint: 'Groups nouns from specific names and item pools up to intangible abstract ideas.'
  },
  {
    id: 'q392',
    category: '40+',
    question: 'Name a standard time zone abbreviation.',
    exampleAnswers: ["EST", "PST", "GMT", "UTC", "CET", "JST", "BST", "IST", "BDT", "AEST"],
    hint: 'The 3-4 letter codes used for regional time.'
  },
  {
    id: 'q393',
    category: '1-3',
    question: 'Name a standard URL protocol that goes before \'\'.',
    exampleAnswers: ["HTTP", "HTTPS", "FTP"],
    hint: 'The 3 most common ones.'
  },
  {
    id: 'q394',
    category: '1-3',
    question: 'Name a state of a standard light switch.',
    exampleAnswers: ["On", "Off"],
    hint: 'There are 2 binary states.'
  },
  {
    id: 'q395',
    category: '1-5',
    question: 'Name a state of matter.',
    exampleAnswers: ["Solid", "Liquid", "Gas", "Plasma"],
    hint: 'There are 4 common states.'
  },
  {
    id: 'q396',
    category: '10-20',
    question: 'Name a statistical measure of central tendency or spread.',
    exampleAnswers: ["Mean", "Median", "Mode", "Variance", "Standard Deviation", "Range", "Frequency", "Class Interval", "Cumulative Frequency", "Quartile"],
    hint: 'Descriptive statistics from the HSC syllabus.'
  },
  {
    id: 'q397',
    category: '20-40',
    question: 'Name a streaming service.',
    exampleAnswers: ["Netflix", "YouTube", "Disney+", "Amazon Prime", "Spotify", "HBO Max"],
    hint: 'Platforms for movies and music.'
  },
  {
    id: 'q398',
    category: '1-3',
    question: 'Name a structural category of muscle tissue found in human anatomy.',
    exampleAnswers: ["Skeletal", "Smooth", "Cardiac"],
    hint: 'Voluntary locomotion tissues, hollow organ layers, or self-pacing heart walls.'
  },
  {
    id: 'q399',
    category: '1-3',
    question: 'Name a structural category of simple permanent plant tissue.',
    exampleAnswers: ["Parenchyma", "Collenchyma", "Sclerenchyma"],
    hint: 'Ground cells scaling from thin photosynthetic walls up to dead woody support fibers.'
  },
  {
    id: 'q400',
    category: '1-3',
    question: 'Name a structural sentence layout type in standard English syntax.',
    exampleAnswers: ["Simple", "Complex", "Compound"],
    hint: 'Categorized directly by the number and dependence setups of its clauses.'
  },
  {
    id: 'q401',
    category: '20-40',
    question: 'Name a Studio Ghibli movie.',
    exampleAnswers: ["Spirited Away", "My Neighbor Totoro", "Howl's Moving Castle", "Princess Mononoke", "Grave of the Fireflies"],
    hint: 'Classic Ghibli films.'
  },
  {
    id: 'q402',
    category: '40+',
    question: 'Name a subject typically taught in school.',
    exampleAnswers: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "History", "Geography", "ICT", "Bangla", "Economics"],
    hint: 'Classes you take to pass exams.'
  },
  {
    id: 'q403',
    category: '1-5',
    question: 'Name a suit in a standard deck of playing cards.',
    exampleAnswers: ["Hearts", "Diamonds", "Clubs", "Spades"],
    hint: 'There are exactly 4.'
  },
  {
    id: 'q404',
    category: '40+',
    question: 'Name a superhero from Marvel or DC Comics.',
    exampleAnswers: ["Spider-Man", "Batman", "Superman", "Iron Man", "Wonder Woman", "Thor", "Captain America", "Hulk", "Wolverine", "The Flash"],
    hint: 'Caped crusaders from the two biggest superhero universes.'
  },
  {
    id: 'q405',
    category: '20-40',
    question: 'Name a superhero from Marvel or DC.',
    exampleAnswers: ["Spider-Man", "Iron Man", "Batman", "Superman", "Captain America", "Wonder Woman", "Thor", "Black Panther", "Deadpool", "Wolverine"],
    hint: 'Caped crusaders and masked heroes.'
  },
  {
    id: 'q406',
    category: '20-40',
    question: 'Name a superhero team.',
    exampleAnswers: ["Avengers", "Justice League", "X-Men", "Fantastic Four", "Teen Titans"],
    hint: 'Groups of heroes.'
  },
  {
    id: 'q407',
    category: '20-40',
    question: 'Name a swordsman anime character.',
    exampleAnswers: ["Roronoa Zoro", "Kenshin Himura", "Ichigo Kurosaki", "Guts", "Mugen"],
    hint: 'Famous blade users.'
  },
  {
    id: 'q408',
    category: '5-10',
    question: 'Name a tense in English grammar.',
    exampleAnswers: ["Simple Present", "Simple Past", "Simple Future", "Present Continuous", "Past Continuous", "Present Perfect", "Past Perfect"],
    hint: 'The different forms verbs take based on time.'
  },
  {
    id: 'q409',
    category: '20-40',
    question: 'Name a term used in set theory.',
    exampleAnswers: ["Union", "Intersection", "Subset", "Superset", "Complement", "Universal Set", "Empty Set", "Power Set", "Cardinality", "Disjoint Sets", "Venn Diagram", "Symmetric Difference"],
    hint: 'Vocabulary used when working with sets.'
  },
  {
    id: 'q410',
    category: '10-20',
    question: 'Name a term used in the study of Genetics.',
    exampleAnswers: ["Allele", "Genotype", "Phenotype", "Homozygous", "Heterozygous", "Epistasis", "Pleiotropy", "Mutation", "Locus", "Chromosome"],
    hint: 'Vocabulary related to inheritance and DNA.'
  },
  {
    id: 'q411',
    category: '1-3',
    question: 'Name a terminal punctuation mark capable of completing an English sentence structure.',
    exampleAnswers: ["Period", "Question Mark", "Exclamation Mark"],
    hint: 'Stops mapping full thoughts via standard endpoints, queries, or emphatic declarations.'
  },
  {
    id: 'q412',
    category: '5-10',
    question: 'Name a theorem in geometry.',
    exampleAnswers: ["Pythagorean Theorem", "Thales Theorem", "Midpoint Theorem", "Angle Bisector Theorem", "Apollonius Theorem", "Ptolemy's Theorem", "Inscribed Angle Theorem", "Brahmagupta's Theorem"],
    hint: 'Named results in Euclidean or plane geometry.'
  },
  {
    id: 'q413',
    category: '5-10',
    question: 'Name a thermodynamic process.',
    exampleAnswers: ["Isothermal", "Adiabatic", "Isobaric", "Isochoric", "Cyclic", "Reversible", "Irreversible"],
    hint: 'Ways states of a gas change in relation to heat and work.'
  },
  {
    id: 'q414',
    category: '20-40',
    question: 'Name a thermodynamics concept from the HSC syllabus.',
    exampleAnswers: ["Specific Heat Capacity", "Latent Heat", "Thermal Expansion", "Conduction", "Convection", "Radiation", "Isothermal Process", "Adiabatic Process", "Internal Energy", "Entropy", "Heat Engine", "Absolute Temperature"],
    hint: 'Heat and thermodynamics topics at HSC level.'
  },
  {
    id: 'q415',
    category: '1-5',
    question: 'Name a title from the \'Need for Speed\' racing franchise.',
    exampleAnswers: ["Need for Speed Most Wanted", "Need for Speed Underground", "Need for Speed Heat", "Need for Speed Unbound", "Need for Speed Carbon"],
    hint: 'Iconic street racing games featuring intense police pursuits and heavy car customization.'
  },
  {
    id: 'q416',
    category: '10-20',
    question: 'Name a topic covered in high school mathematics.',
    exampleAnswers: ["Algebra", "Trigonometry", "Calculus", "Statistics", "Probability", "Geometry", "Matrices", "Vectors", "Logarithms", "Quadratic Equations", "Set Theory", "Coordinate Geometry"],
    hint: 'Topics from secondary school maths curriculum.'
  },
  {
    id: 'q417',
    category: '40+',
    question: 'Name a tower defense game.',
    exampleAnswers: ["Bloons TD", "Kingdom Rush", "Plants vs Zombies", "Clash Royale", "Defense Grid", "Dungeon Defenders", "PixelJunk Monsters", "Orcs Must Die", "Fieldrunners", "They Are Billions"],
    hint: 'Games where you place towers to stop enemy waves.'
  },
  {
    id: 'q418',
    category: '5-10',
    question: 'Name a toxic heavy metal water pollutant hazardous to human biology.',
    exampleAnswers: ["Lead", "Mercury", "Cadmium", "Arsenic", "Chromium"],
    hint: 'Highly toxic industrial waste elements that bioaccumulate in food chains.'
  },
  {
    id: 'q419',
    category: '20-40',
    question: 'Name a traditional Bangladeshi festival.',
    exampleAnswers: ["Pohela Boishakh", "Eid-ul-Fitr", "Eid-ul-Adha", "Durga Puja", "Buddha Purnima", "Christmas"],
    hint: 'Cultural celebrations.'
  },
  {
    id: 'q420',
    category: '20-40',
    question: 'Name a traditional musical instrument from BD.',
    exampleAnswers: ["Ektara", "Dotara", "Dhol", "Flute", "Tabla", "Sitar"],
    hint: 'Desi folk instruments.'
  },
  {
    id: 'q421',
    category: '5-10',
    question: 'Name a transition element from the 3d series.',
    exampleAnswers: ["Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper"],
    hint: 'Elements with atomic numbers 21 to 29 (excluding Zinc).'
  },
  {
    id: 'q422',
    category: '40+',
    question: 'Name a transition metal from the d-block.',
    exampleAnswers: ["Iron", "Copper", "Nickel", "Cobalt", "Zinc", "Titanium", "Vanadium", "Chromium", "Manganese", "Silver"],
    hint: 'Metals found in the center of the periodic table.'
  },
  {
    id: 'q423',
    category: '5-10',
    question: 'Name a trigonometric function.',
    exampleAnswers: ["Sine", "Cosine", "Tangent", "Cosecant", "Secant", "Cotangent"],
    hint: 'The six standard trig functions.'
  },
  {
    id: 'q424',
    category: '5-10',
    question: 'Name a trigonometric identity or formula.',
    exampleAnswers: ["Pythagorean Identity", "Double Angle Formula", "Half Angle Formula", "Sum-to-Product Formula", "Product-to-Sum Formula", "Sine Rule", "Cosine Rule", "Euler's Formula", "De Moivre's Formula"],
    hint: 'Equations that are always true for trig functions.'
  },
  {
    id: 'q425',
    category: '5-10',
    question: 'Name a type of angle formed when a transversal crosses parallel lines.',
    exampleAnswers: ["Alternate Interior Angles", "Alternate Exterior Angles", "Co-interior Angles", "Corresponding Angles", "Vertically Opposite Angles", "Supplementary Angles", "Complementary Angles", "Adjacent Angles"],
    hint: 'Angle relationships from HSC geometry.'
  },
  {
    id: 'q426',
    category: '1-5',
    question: 'Name a type of angle in geometry.',
    exampleAnswers: ["Acute", "Right", "Obtuse", "Straight", "Reflex"],
    hint: 'Classified by degree measure.'
  },
  {
    id: 'q427',
    category: '1-5',
    question: 'Name a type of asymptote a function can have.',
    exampleAnswers: ["Horizontal Asymptote", "Vertical Asymptote", "Oblique Asymptote", "Curvilinear Asymptote"],
    hint: 'Lines that a curve approaches but never touches.'
  },
  {
    id: 'q428',
    category: '5-10',
    question: 'Name a type of average or mean.',
    exampleAnswers: ["Arithmetic Mean", "Geometric Mean", "Harmonic Mean", "Weighted Mean", "Median", "Mode", "Trimmed Mean"],
    hint: 'Different types of averages in statistics.'
  },
  {
    id: 'q429',
    category: '40+',
    question: 'Name a type of bag.',
    exampleAnswers: ["Backpack", "Handbag", "Suitcase", "Wallet", "Purse"],
    hint: 'Carrying items.'
  },
  {
    id: 'q430',
    category: '10-20',
    question: 'Name a type of biomolecule or macromolecule.',
    exampleAnswers: ["Protein", "Carbohydrate", "Lipid", "Nucleic Acid", "DNA", "RNA", "Enzyme", "Hormone", "Vitamin", "Glycogen"],
    hint: 'The major classes of biological molecules.'
  },
  {
    id: 'q431',
    category: '20-40',
    question: 'Name a type of bread.',
    exampleAnswers: ["White Bread", "Whole Wheat Bread", "Sourdough", "Baguette", "Naan", "Pita", "Rye Bread", "Ciabatta", "Brioche", "Focaccia", "Pumpernickel", "Flatbread"],
    hint: 'Baked dough products from various cultures.'
  },
  {
    id: 'q432',
    category: '10-20',
    question: 'Name a type of cell division or reproduction process.',
    exampleAnswers: ["Mitosis", "Meiosis", "Binary Fission", "Budding", "Fragmentation", "Vegetative Propagation", "Parthenogenesis", "Conjugation", "Sporulation", "Endospore Formation"],
    hint: 'How cells and organisms reproduce.'
  },
  {
    id: 'q433',
    category: '10-20',
    question: 'Name a type of cell organelle.',
    exampleAnswers: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic Reticulum", "Golgi Apparatus", "Lysosome", "Vacuole", "Chloroplast", "Cell Membrane", "Cytoskeleton"],
    hint: 'Structures found inside eukaryotic cells.'
  },
  {
    id: 'q434',
    category: '20-40',
    question: 'Name a type of chemical bond or intermolecular force.',
    exampleAnswers: ["Covalent Bond", "Ionic Bond", "Metallic Bond", "Hydrogen Bond", "Van der Waals", "Dipole-Dipole", "London Dispersion", "Pi Bond", "Sigma Bond", "Coordinate Bond"],
    hint: 'Forces that hold atoms or molecules together.'
  },
  {
    id: 'q435',
    category: '20-40',
    question: 'Name a type of chemical reaction.',
    exampleAnswers: ["Combustion", "Oxidation", "Reduction", "Neutralization", "Precipitation", "Decomposition", "Synthesis", "Single Displacement", "Double Displacement", "Polymerization"],
    hint: 'Categories of reactions studied in chemistry.'
  },
  {
    id: 'q436',
    category: '1-5',
    question: 'Name a type of clause in English grammar.',
    exampleAnswers: ["Independent Clause", "Dependent Clause", "Relative Clause", "Noun Clause", "Adverbial Clause"],
    hint: 'The building blocks of sentences.'
  },
  {
    id: 'q437',
    category: '10-20',
    question: 'Name a type of cloud computing service.',
    exampleAnswers: ["IaaS", "PaaS", "SaaS"],
    hint: 'Cloud models.'
  },
  {
    id: 'q438',
    category: '10-20',
    question: 'Name a type of cloud.',
    exampleAnswers: ["Cumulus", "Stratus", "Cirrus", "Nimbostratus", "Cumulonimbus", "Altostratus", "Altocumulus", "Stratocumulus", "Cirrostratus", "Cirrocumulus"],
    hint: 'Cloud formations classified by altitude and shape.'
  },
  {
    id: 'q439',
    category: '5-10',
    question: 'Name a type of collision in mechanics.',
    exampleAnswers: ["Elastic Collision", "Inelastic Collision", "Perfectly Inelastic Collision", "Head-on Collision", "Oblique Collision", "Explosive Collision"],
    hint: 'Classifications of how objects collide.'
  },
  {
    id: 'q440',
    category: '40+',
    question: 'Name a type of common pet animal.',
    exampleAnswers: ["Dog", "Cat", "Hamster", "Rabbit", "Fish", "Parrot", "Guinea Pig", "Turtle", "Snake", "Gecko"],
    hint: 'Animals kept in homes around the world.'
  },
  {
    id: 'q441',
    category: '1-5',
    question: 'Name a type of computer memory.',
    exampleAnswers: ["RAM", "ROM", "Cache", "Flash Memory", "Virtual Memory"],
    hint: 'Different kinds of storage inside a computer.'
  },
  {
    id: 'q442',
    category: '10-20',
    question: 'Name a type of conic section or its geometrical property.',
    exampleAnswers: ["Parabola", "Ellipse", "Hyperbola", "Focus", "Directrix", "Vertex", "Latus Rectum", "Eccentricity", "Major Axis", "Minor Axis"],
    hint: 'Features of sliced cones in coordinate geometry.'
  },
  {
    id: 'q443',
    category: '20-40',
    question: 'Name a type of dance style.',
    exampleAnswers: ["Salsa", "Tango", "Waltz", "Ballet", "Hip-Hop", "Flamenco", "Samba", "Foxtrot", "Breakdance", "Bhangra", "Merengue", "Cha-Cha"],
    hint: 'Dance forms from cultures around the world.'
  },
  {
    id: 'q444',
    category: '40+',
    question: 'Name a type of dessert or sweet treat.',
    exampleAnswers: ["Cake", "Ice Cream", "Brownie", "Cookie", "Pudding", "Cheesecake", "Donut", "Pie", "Tiramisu", "Flan"],
    hint: 'Things that satisfy a sweet tooth.'
  },
  {
    id: 'q445',
    category: '40+',
    question: 'Name a type of dessert.',
    exampleAnswers: ["Ice Cream", "Cake", "Chocolate", "Pudding", "Pie", "Cookies", "Halwa", "Rasgulla", "Jalebi", "Gulab Jamun"],
    hint: 'Sweet treats after meals.'
  },
  {
    id: 'q446',
    category: '40+',
    question: 'Name a type of drink.',
    exampleAnswers: ["Tea", "Coffee", "Water", "Juice", "Milk", "Soda", "Lassi", "Lemonade"],
    hint: 'Beverages people consume daily.'
  },
  {
    id: 'q447',
    category: '1-3',
    question: 'Name a type of eclipse.',
    exampleAnswers: ["Solar Eclipse", "Lunar Eclipse"],
    hint: 'There are exactly 2 main types.'
  },
  {
    id: 'q448',
    category: '5-10',
    question: 'Name a type of ecological relationship between organisms.',
    exampleAnswers: ["Mutualism", "Commensalism", "Parasitism", "Predation", "Competition", "Amensalism", "Symbiosis", "Neutralism"],
    hint: 'How two species interact in an ecosystem.'
  },
  {
    id: 'q449',
    category: '1-5',
    question: 'Name a type of economic system.',
    exampleAnswers: ["Capitalism", "Socialism", "Communism", "Mixed Economy"],
    hint: 'The main ways societies organize production and distribution.'
  },
  {
    id: 'q450',
    category: '1-3',
    question: 'Name a type of electrical charge.',
    exampleAnswers: ["Positive", "Negative", "Neutral"],
    hint: 'Physics 101 — there are 3.'
  },
  {
    id: 'q451',
    category: '10-20',
    question: 'Name a type of electrical circuit component.',
    exampleAnswers: ["Resistor", "Capacitor", "Inductor", "Diode", "Transistor", "Transformer", "LED", "Battery", "Switch", "Relay"],
    hint: 'Components used in electronic circuits.'
  },
  {
    id: 'q452',
    category: '1-3',
    question: 'Name a type of electrical current.',
    exampleAnswers: ["Alternating Current", "Direct Current"],
    hint: 'AC or DC — there are 2.'
  },
  {
    id: 'q453',
    category: '5-10',
    question: 'Name a type of electromagnetic radiation.',
    exampleAnswers: ["Radio Wave", "Microwave", "Infrared", "Visible Light", "Ultraviolet", "X-ray", "Gamma Ray", "Terahertz", "Extreme Ultraviolet", "Millimeter Wave"],
    hint: 'Regions of the electromagnetic spectrum.'
  },
  {
    id: 'q454',
    category: '40+',
    question: 'Name a type of electronic gadget.',
    exampleAnswers: ["Smartphone", "Laptop", "Tablet", "Smartwatch", "Headphones", "Speaker"],
    hint: 'Modern tech devices.'
  },
  {
    id: 'q455',
    category: '40+',
    question: 'Name a type of fabric or textile material.',
    exampleAnswers: ["Cotton", "Silk", "Jute", "Wool", "Polyester", "Leather", "Linen", "Nylon", "Muslin", "Denim"],
    hint: 'What clothes and bags are made of.'
  },
  {
    id: 'q456',
    category: '20-40',
    question: 'Name a type of fish commonly eaten in BD.',
    exampleAnswers: ["Hilsa", "Rui", "Katla", "Pangas", "Tilapia"],
    hint: 'Desi fish favorites.'
  },
  {
    id: 'q457',
    category: '40+',
    question: 'Name a type of flower used in rituals.',
    exampleAnswers: ["Rose", "Lotus", "Marigold", "Jasmine", "Hibiscus"],
    hint: 'Common puja flowers.'
  },
  {
    id: 'q458',
    category: '40+',
    question: 'Name a type of flower.',
    exampleAnswers: ["Rose", "Tulip", "Sunflower", "Lily", "Orchid", "Marigold", "Lotus", "Daisy", "Jasmine", "Hibiscus"],
    hint: 'Flowering plants.'
  },
  {
    id: 'q459',
    category: '40+',
    question: 'Name a type of footwear.',
    exampleAnswers: ["Sneakers", "Boots", "Sandals", "Slippers", "Heels", "Loafers"],
    hint: 'Shoes and sandals.'
  },
  {
    id: 'q460',
    category: '20-40',
    question: 'Name a type of force in physics.',
    exampleAnswers: ["Gravitational Force", "Normal Force", "Friction Force", "Tension", "Applied Force", "Spring Force", "Magnetic Force", "Electric Force", "Buoyancy", "Air Resistance", "Nuclear Force", "Centripetal Force"],
    hint: 'Forces that act on objects.'
  },
  {
    id: 'q461',
    category: '1-3',
    question: 'Name a type of frame of reference in physics.',
    exampleAnswers: ["Inertial", "Non-inertial"],
    hint: 'Whether the frame is accelerating or not — HSC Physics.'
  },
  {
    id: 'q462',
    category: '10-20',
    question: 'Name a type of function in mathematics.',
    exampleAnswers: ["Linear Function", "Quadratic Function", "Polynomial Function", "Exponential Function", "Logarithmic Function", "Trigonometric Function", "Rational Function", "Step Function", "Piecewise Function", "Inverse Function", "Periodic Function"],
    hint: 'Classifications of mathematical functions.'
  },
  {
    id: 'q463',
    category: '10-20',
    question: 'Name a type of gemstone.',
    exampleAnswers: ["Diamond", "Ruby", "Emerald", "Sapphire", "Pearl", "Topaz"],
    hint: 'Precious stones.'
  },
  {
    id: 'q464',
    category: '5-10',
    question: 'Name a type of graph used in data visualization.',
    exampleAnswers: ["Bar Chart", "Line Graph", "Pie Chart", "Histogram", "Scatter Plot", "Box Plot", "Heat Map", "Stem-and-Leaf Plot", "Frequency Polygon"],
    hint: 'Charts and graphs used to represent data.'
  },
  {
    id: 'q465',
    category: '5-10',
    question: 'Name a type of immunity.',
    exampleAnswers: ["Innate Immunity", "Adaptive Immunity", "Passive Immunity", "Active Immunity", "Humoral Immunity", "Cell-mediated Immunity", "Herd Immunity", "Natural Immunity"],
    hint: 'How the body defends itself against pathogens.'
  },
  {
    id: 'q466',
    category: '5-10',
    question: 'Name a type of isomer studied in HSC chemistry.',
    exampleAnswers: ["Structural Isomer", "Chain Isomer", "Position Isomer", "Functional Group Isomer", "Geometric Isomer", "Cis Isomer", "Trans Isomer"],
    hint: 'Isomers covered in the HSC organic chemistry syllabus.'
  },
  {
    id: 'q467',
    category: '1-3',
    question: 'Name a type of lens.',
    exampleAnswers: ["Convex", "Concave"],
    hint: 'The 2 basic optical lens shapes.'
  },
  {
    id: 'q468',
    category: '5-10',
    question: 'Name a type of magnet.',
    exampleAnswers: ["Permanent Magnet", "Electromagnet", "Temporary Magnet", "Ferromagnet", "Diamagnet", "Paramagnet"],
    hint: 'Classifications of magnetic materials and devices.'
  },
  {
    id: 'q469',
    category: '1-3',
    question: 'Name a type of magnetism.',
    exampleAnswers: ["Diamagnetism", "Paramagnetism", "Ferromagnetism"],
    hint: 'Three types of magnetic behavior based on electron configuration.'
  },
  {
    id: 'q470',
    category: '10-20',
    question: 'Name a type of martial art.',
    exampleAnswers: ["Karate", "Judo", "Kung Fu", "Taekwondo", "Muay Thai", "Boxing"],
    hint: 'Fighting styles.'
  },
  {
    id: 'q471',
    category: '10-20',
    question: 'Name a type of mathematical sequence or series.',
    exampleAnswers: ["Arithmetic Sequence", "Geometric Sequence", "Fibonacci Sequence", "Harmonic Series", "Binomial Series", "Infinite Series", "Finite Series", "Convergent Series", "Divergent Series"],
    hint: 'Ordered lists of numbers following a pattern — HSC syllabus.'
  },
  {
    id: 'q472',
    category: '10-20',
    question: 'Name a type of matrix taught in HSC Higher Math.',
    exampleAnswers: ["Square", "Diagonal", "Scalar", "Identity", "Null", "Symmetric", "Skew-symmetric", "Transpose", "Orthogonal", "Singular"],
    hint: 'Different classifications of number grids.'
  },
  {
    id: 'q473',
    category: '1-3',
    question: 'Name a type of mechanical equilibrium for a rigid body.',
    exampleAnswers: ["Stable", "Unstable", "Neutral"],
    hint: 'How a body behaves after a slight displacement.'
  },
  {
    id: 'q474',
    category: '1-3',
    question: 'Name a type of mechanical wave based on the direction of particle vibration.',
    exampleAnswers: ["Transverse", "Longitudinal"],
    hint: 'Whether particles move perpendicular or parallel to the wave direction.'
  },
  {
    id: 'q475',
    category: '5-10',
    question: 'Name a type of motion studied in mechanics.',
    exampleAnswers: ["Linear Motion", "Projectile Motion", "Circular Motion", "Rotational Motion", "Simple Harmonic Motion", "Periodic Motion"],
    hint: 'Ways in which physical bodies move.'
  },
  {
    id: 'q476',
    category: '40+',
    question: 'Name a type of natural disaster.',
    exampleAnswers: ["Earthquake", "Flood", "Cyclone", "Tornado", "Tsunami", "Volcanic Eruption", "Wildfire", "Drought", "Landslide", "Blizzard"],
    hint: 'Extreme destructive events from nature.'
  },
  {
    id: 'q477',
    category: '5-10',
    question: 'Name a type of nuclear radiation.',
    exampleAnswers: ["Alpha Radiation", "Beta Radiation", "Gamma Radiation", "Neutron Radiation", "X-ray Radiation", "Positron Emission"],
    hint: 'Radiation emitted during radioactive decay.'
  },
  {
    id: 'q478',
    category: '5-10',
    question: 'Name a type of number in mathematics.',
    exampleAnswers: ["Integer", "Rational", "Irrational", "Real", "Complex", "Prime", "Natural", "Whole"],
    hint: 'The different sets of numbers studied in maths.'
  },
  {
    id: 'q479',
    category: '5-10',
    question: 'Name a type of number system used in mathematics or computing.',
    exampleAnswers: ["Binary", "Octal", "Decimal", "Hexadecimal", "Unary", "Base-64", "Duodecimal", "Sexagesimal"],
    hint: 'Positional numeral systems with different bases.'
  },
  {
    id: 'q480',
    category: '1-3',
    question: 'Name a type of number that is neither positive nor negative.',
    exampleAnswers: ["Zero", "0"],
    hint: 'There is only one such integer.'
  },
  {
    id: 'q481',
    category: '10-20',
    question: 'Name a type of optical phenomenon.',
    exampleAnswers: ["Reflection", "Refraction", "Diffraction", "Interference", "Polarization", "Dispersion", "Total Internal Reflection", "Doppler Effect", "Mirage", "Rainbow"],
    hint: 'Phenomena involving light and optics.'
  },
  {
    id: 'q482',
    category: '40+',
    question: 'Name a type of pasta.',
    exampleAnswers: ["Spaghetti", "Penne", "Fusilli", "Rigatoni", "Linguine", "Fettuccine", "Farfalle", "Lasagna", "Ravioli", "Tortellini"],
    hint: 'Italian noodles of different shapes and sizes.'
  },
  {
    id: 'q483',
    category: '40+',
    question: 'Name a type of pet animal.',
    exampleAnswers: ["Dog", "Cat", "Bird", "Fish", "Rabbit", "Hamster", "Turtle", "Guinea Pig"],
    hint: 'Common household pets.'
  },
  {
    id: 'q484',
    category: '40+',
    question: 'Name a type of pizza topping.',
    exampleAnswers: ["Pepperoni", "Mozzarella", "Mushroom", "Olives", "Ham", "Bell Pepper", "Jalapeu00f1os", "Bacon", "Onion", "Basil"],
    hint: 'Anything you would find on a pizza menu.'
  },
  {
    id: 'q485',
    category: '10-20',
    question: 'Name a type of poem structure.',
    exampleAnswers: ["Sonnet", "Haiku", "Limerick", "Ballad"],
    hint: 'Poetry forms.'
  },
  {
    id: 'q486',
    category: '10-20',
    question: 'Name a type of polygon.',
    exampleAnswers: ["Triangle", "Quadrilateral", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Nonagon", "Decagon", "Dodecagon", "Regular Polygon"],
    hint: 'Closed 2D shapes with straight sides.'
  },
  {
    id: 'q487',
    category: '10-20',
    question: 'Name a type of polymer.',
    exampleAnswers: ["Polyethylene", "Polypropylene", "PVC", "Nylon", "Teflon", "Polystyrene", "Rubber", "Kevlar", "Polyester", "Bakelite"],
    hint: 'Large molecules made of repeating units.'
  },
  {
    id: 'q488',
    category: '1-3',
    question: 'Name a type of primary blood vessel inside human circulatory networks.',
    exampleAnswers: ["Artery", "Vein", "Capillary"],
    hint: 'Outward lines, returns, or micro-exchange cellular meshes.'
  },
  {
    id: 'q489',
    category: '10-20',
    question: 'Name a type of protein in the human body.',
    exampleAnswers: ["Hemoglobin", "Collagen", "Actin", "Myosin", "Insulin", "Keratin", "Antibody", "Enzyme", "Fibrin", "Albumin"],
    hint: 'Proteins with structural or functional roles.'
  },
  {
    id: 'q490',
    category: '40+',
    question: 'Name a type of public transport in cities.',
    exampleAnswers: ["Bus", "Train", "Rickshaw", "CNG", "Metro", "Taxi", "Auto"],
    hint: 'Ways to commute locally.'
  },
  {
    id: 'q491',
    category: '5-10',
    question: 'Name a type of quadrilateral.',
    exampleAnswers: ["Square", "Rectangle", "Parallelogram", "Rhombus", "Trapezoid", "Kite", "Trapezium", "Isosceles Trapezoid"],
    hint: 'Four-sided polygons — there are several.'
  },
  {
    id: 'q492',
    category: '5-10',
    question: 'Name a type of radioactive decay.',
    exampleAnswers: ["Alpha Decay", "Beta-minus Decay", "Beta-plus Decay", "Gamma Decay", "Electron Capture", "Spontaneous Fission"],
    hint: 'Types of nuclear decay processes.'
  },
  {
    id: 'q493',
    category: '5-10',
    question: 'Name a type of renewable energy source.',
    exampleAnswers: ["Solar", "Wind", "Hydroelectric", "Geothermal", "Tidal", "Wave", "Biomass"],
    hint: 'Clean energy sources that won\'t run out.'
  },
  {
    id: 'q494',
    category: '1-3',
    question: 'Name a type of RNA.',
    exampleAnswers: ["mRNA", "tRNA", "rRNA"],
    hint: 'The three main types of RNA in the HSC syllabus.'
  },
  {
    id: 'q495',
    category: '1-3',
    question: 'Name a type of rock in geology.',
    exampleAnswers: ["Igneous", "Sedimentary", "Metamorphic"],
    hint: 'The 3 major rock types in Earth\'s rock cycle.'
  },
  {
    id: 'q496',
    category: '40+',
    question: 'Name a type of shoe or footwear.',
    exampleAnswers: ["Sneakers", "Boots", "Sandals", "High Heels", "Loafers", "Slippers", "Flip Flops", "Oxford Shoes", "Moccasins", "Wedges"],
    hint: 'Anything you put on your feet.'
  },
  {
    id: 'q497',
    category: '40+',
    question: 'Name a type of smartphone brand.',
    exampleAnswers: ["Samsung", "Apple", "Xiaomi", "Oppo", "Vivo", "Realme", "OnePlus", "Google"],
    hint: 'Phone manufacturers.'
  },
  {
    id: 'q498',
    category: '5-10',
    question: 'Name a type of solid studied in HSC chemistry.',
    exampleAnswers: ["Ionic Solid", "Covalent Solid", "Metallic Solid", "Molecular Solid", "Amorphous Solid", "Crystalline Solid"],
    hint: 'Solids classified by their bonding and structure.'
  },
  {
    id: 'q499',
    category: '5-10',
    question: 'Name a type of spectrum studied in HSC physics.',
    exampleAnswers: ["Emission Spectrum", "Absorption Spectrum", "Continuous Spectrum", "Line Spectrum", "Electromagnetic Spectrum", "Visible Spectrum", "Atomic Spectrum", "Solar Spectrum", "Hydrogen Spectrum"],
    hint: 'Spectra from HSC optics and atomic physics.'
  },
  {
    id: 'q500',
    category: '1-3',
    question: 'Name a type of stereoisomerism.',
    exampleAnswers: ["Geometric Isomerism", "Optical Isomerism"],
    hint: 'Isomers with the same bond structure but different spatial arrangement.'
  },
  {
    id: 'q501',
    category: '40+',
    question: 'Name a type of street food.',
    exampleAnswers: ["Samosa", "Fuchka", "Chaat", "Jhal Muri", "Vada Pav", "Pani Puri", "Dosa", "Shawarma", "Chow Mein", "Falafel"],
    hint: 'Spicy, cheap, and delicious.'
  },
  {
    id: 'q502',
    category: '1-5',
    question: 'Name a type of structural entity relational linkage in relational databases.',
    exampleAnswers: ["One-to-One", "One-to-Many", "Many-to-One", "Many-to-Many"],
    hint: 'How records within a specific parent database block reference children keys.'
  },
  {
    id: 'q503',
    category: '1-3',
    question: 'Name a type of structural isomerism in HSC organic chemistry.',
    exampleAnswers: ["Chain Isomerism", "Position Isomerism", "Functional Group Isomerism"],
    hint: 'Types of structural isomers studied at HSC level.'
  },
  {
    id: 'q504',
    category: '1-3',
    question: 'Name a type of structural stress in mechanics.',
    exampleAnswers: ["Tensile", "Compressive", "Shearing"],
    hint: 'Forces pulling apart, pushing together, or sliding parallel planes.'
  },
  {
    id: 'q505',
    category: '1-5',
    question: 'Name a type of telescope.',
    exampleAnswers: ["Refracting Telescope", "Reflecting Telescope", "Radio Telescope", "Space Telescope"],
    hint: 'Different designs used to observe the night sky or universe.'
  },
  {
    id: 'q506',
    category: '1-3',
    question: 'Name a type of thermodynamic system.',
    exampleAnswers: ["Open", "Closed", "Isolated"],
    hint: 'Classified by whether mass and energy can cross the boundary.'
  },
  {
    id: 'q507',
    category: '5-10',
    question: 'Name a type of thermometer classified by its thermometric property.',
    exampleAnswers: ["Liquid-in-glass", "Gas thermometer", "Resistance thermometer", "Thermocouple", "Pyrometer"],
    hint: 'Uses properties like volume, pressure, or resistance to read temp.'
  },
  {
    id: 'q508',
    category: '5-10',
    question: 'Name a type of tissue in the human body.',
    exampleAnswers: ["Epithelial Tissue", "Connective Tissue", "Muscle Tissue", "Nervous Tissue", "Adipose Tissue", "Bone Tissue", "Cartilage", "Blood", "Lymphatic Tissue"],
    hint: 'Groups of cells with similar structure and function.'
  },
  {
    id: 'q509',
    category: '1-3',
    question: 'Name a type of transmission media used to guide data networks.',
    exampleAnswers: ["Coaxial", "Twisted Pair", "Fiber Optic"],
    hint: 'Physical cabling materials running electric copper signals or internal light pulses.'
  },
  {
    id: 'q510',
    category: '40+',
    question: 'Name a type of transportation vehicle.',
    exampleAnswers: ["Car", "Bus", "Train", "Airplane", "Bicycle", "Rickshaw", "Motorcycle", "Boat", "Subway", "Helicopter"],
    hint: 'Machines that move people.'
  },
  {
    id: 'q511',
    category: '40+',
    question: 'Name a type of tree fruit.',
    exampleAnswers: ["Mango", "Jackfruit", "Coconut", "Guava", "Papaya"],
    hint: 'Desi tree fruits.'
  },
  {
    id: 'q512',
    category: '40+',
    question: 'Name a type of tree.',
    exampleAnswers: ["Oak", "Pine", "Mango", "Bamboo", "Coconut", "Banyan", "Cedar", "Willow", "Jackfruit", "Palm"],
    hint: 'Think forests, gardens, roadsides.'
  },
  {
    id: 'q513',
    category: '10-20',
    question: 'Name a type of triangle by sides.',
    exampleAnswers: ["Equilateral", "Isosceles", "Scalene"],
    hint: 'Side-based classifications.'
  },
  {
    id: 'q514',
    category: '1-5',
    question: 'Name a type of triangle classified by its internal angles.',
    exampleAnswers: ["Acute", "Right", "Obtuse"],
    hint: 'Triangle classifications.'
  },
  {
    id: 'q515',
    category: '5-10',
    question: 'Name a type of triangle.',
    exampleAnswers: ["Equilateral", "Isosceles", "Scalene", "Right-angled", "Acute", "Obtuse"],
    hint: 'Classified by sides or angles.'
  },
  {
    id: 'q516',
    category: '5-10',
    question: 'Name a type of vector operation.',
    exampleAnswers: ["Dot Product", "Cross Product", "Addition", "Scalar Multiplication", "Projection", "Magnitude", "Normalization"],
    hint: 'Operations you can perform on vectors.'
  },
  {
    id: 'q517',
    category: '40+',
    question: 'Name a type of vegetable.',
    exampleAnswers: ["Carrot", "Broccoli", "Potato", "Tomato", "Onion", "Garlic", "Spinach", "Cauliflower", "Eggplant", "Bitter Gourd"],
    hint: 'Things you cook and eat.'
  },
  {
    id: 'q518',
    category: '5-10',
    question: 'Name a type of wave in physics.',
    exampleAnswers: ["Longitudinal", "Transverse", "Electromagnetic", "Sound Wave", "Light Wave", "Mechanical", "Seismic"],
    hint: 'Classified by how they travel.'
  },
  {
    id: 'q519',
    category: '10-20',
    question: 'Name a type of wave property or characteristic.',
    exampleAnswers: ["Wavelength", "Frequency", "Amplitude", "Period", "Speed", "Phase", "Intensity", "Polarization", "Superposition", "Resonance"],
    hint: 'Properties that describe a wave.'
  },
  {
    id: 'q520',
    category: '40+',
    question: 'Name a type of weather phenomenon.',
    exampleAnswers: ["Rain", "Sunshine", "Wind", "Cloud", "Fog", "Hail", "Snow"],
    hint: 'Daily weather stuff.'
  },
  {
    id: 'q521',
    category: '40+',
    question: 'Name a type or genre of literature.',
    exampleAnswers: ["Novel", "Poetry", "Short Story", "Drama", "Essay", "Biography", "Autobiography", "Fable", "Myth", "Science Fiction", "Fantasy", "Mystery", "Thriller", "Romance", "Horror"],
    hint: 'Forms and genres of written literary work.'
  },
  {
    id: 'q522',
    category: '10-20',
    question: 'Name a unique musical note in the Western chromatic scale.',
    exampleAnswers: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
    hint: 'There are 12 notes before the octave repeats.'
  },
  {
    id: 'q523',
    category: '20-40',
    question: 'Name a unit of measurement in physics not in the SI system.',
    exampleAnswers: ["Calorie", "Electron Volt", "Angstrom", "Light Year", "Parsec", "Atmosphere", "Bar", "Torr", "Horsepower", "Gauss", "Tesla", "Dyne", "Erg", "Foot-pound"],
    hint: 'Non-SI units still commonly used in physics.'
  },
  {
    id: 'q524',
    category: '10-20',
    question: 'Name a unit of measurement used in physics.',
    exampleAnswers: ["Meter", "Kilogram", "Second", "Newton", "Joule", "Watt", "Pascal", "Ampere", "Volt", "Ohm"],
    hint: 'SI units and derived units.'
  },
  {
    id: 'q525',
    category: '5-10',
    question: 'Name a unit of pressure or force.',
    exampleAnswers: ["Pascal", "Newton", "Atmosphere (atm)", "Bar", "Torr", "mmHg", "Dyne", "Pound-force"],
    hint: 'Standard measurements for physical mechanics.'
  },
  {
    id: 'q526',
    category: '40+',
    question: 'Name a US President.',
    exampleAnswers: ["George Washington", "Abraham Lincoln", "Barack Obama", "Franklin D. Roosevelt", "John F. Kennedy", "Theodore Roosevelt", "Donald Trump", "Joe Biden", "Ronald Reagan", "Bill Clinton"],
    hint: 'There have been 47 presidents.'
  },
  {
    id: 'q527',
    category: '40+',
    question: 'Name a US state.',
    exampleAnswers: ["California", "Texas", "Florida", "New York", "Illinois", "Ohio", "Georgia", "Michigan", "Washington", "Arizona", "Colorado", "Nevada", "Oregon", "Minnesota", "Wisconsin"],
    hint: 'There are exactly 50 states.'
  },
  {
    id: 'q528',
    category: '5-10',
    question: 'Name a valid data type in C programming.',
    exampleAnswers: ["int", "float", "double", "char", "void", "short", "long", "signed", "unsigned"],
    hint: 'Keywords declaring the type of data a variable holds.'
  },
  {
    id: 'q529',
    category: '40+',
    question: 'Name a valid HTML tag.',
    exampleAnswers: ["a", "div", "p", "img", "h1", "span", "ul", "li", "table", "form"],
    hint: 'Building blocks used in web development.'
  },
  {
    id: 'q530',
    category: '1-3',
    question: 'Name a variable declaration keyword in JavaScript.',
    exampleAnswers: ["var", "let", "const"],
    hint: 'There are 3 standard ways.'
  },
  {
    id: 'q531',
    category: '10-20',
    question: 'Name a vector design or illustration software.',
    exampleAnswers: ["Adobe Illustrator", "Figma", "Inkscape", "CorelDRAW", "Affinity Designer", "Sketch", "Gravit Designer", "Canva", "Vectornator", "Amadine"],
    hint: 'Tools that work with scalable vector graphics.'
  },
  {
    id: 'q532',
    category: '40+',
    question: 'Name a vector quantity studied in physics.',
    exampleAnswers: ["Velocity", "Acceleration", "Force", "Displacement", "Momentum", "Torque", "Electric Field", "Magnetic Field", "Weight", "Impulse"],
    hint: 'Physical quantities with both magnitude and direction.'
  },
  {
    id: 'q533',
    category: '20-40',
    question: 'Name a video game console.',
    exampleAnswers: ["PlayStation", "Xbox", "Nintendo Switch", "PC", "Wii"],
    hint: 'Gaming hardware.'
  },
  {
    id: 'q534',
    category: '10-20',
    question: 'Name a visual novel character.',
    exampleAnswers: ["Shirou Emiya", "Rintaro Okabe", "Monika", "Nagito Komaeda", "Ryunosuke Naruhodo", "Tomoya Okazaki", "Battler Ushiromiya", "Saber", "Sayori", "Hajime Hinata"],
    hint: 'Protagonists or major characters from visual novels.'
  },
  {
    id: 'q535',
    category: '20-40',
    question: 'Name a visual novel.',
    exampleAnswers: ["Clannad", "Steins;Gate", "Doki Doki Literature Club", "FateStay Night", "Danganronpa", "Phoenix Wright", "Higurashi", "Ever17", "Katawa Shoujo", "Umineko"],
    hint: 'Story-driven games with mostly text and still images.'
  },
  {
    id: 'q536',
    category: '5-10',
    question: 'Name a vitamin.',
    exampleAnswers: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D", "Vitamin E", "Vitamin K"],
    hint: 'Essential nutrients.'
  },
  {
    id: 'q537',
    category: '5-10',
    question: 'Name a vowel in the English alphabet.',
    exampleAnswers: ["A", "E", "I", "O", "U"],
    hint: 'The 5 core vowels.'
  },
  {
    id: 'q538',
    category: '40+',
    question: 'Name a VTuber.',
    exampleAnswers: ["Gawr Gura", "Kizuna AI", "Mori Calliope", "Takanashi Kiara", "Ninomae Ina'nis", "Amelia Watson", "Korone Inugami", "Pekora Usada", "Fubuki Shirakami", "Ironmouse", "Veibae", "Hololive"],
    hint: 'Virtual YouTubers using anime avatars.'
  },
  {
    id: 'q539',
    category: '40+',
    question: 'Name a waifu or popular female anime character.',
    exampleAnswers: ["Asuna", "Rem", "Zero Two", "Mikasa", "Hinata", "Yor Forger"],
    hint: 'Beloved female characters.'
  },
  {
    id: 'q540',
    category: '10-20',
    question: 'Name a well-known brand of athletic or casual shoes.',
    exampleAnswers: ["Nike", "Adidas", "Puma", "Reebok", "New Balance", "Converse", "Vans", "ASICS", "Under Armour", "Skechers", "Fila", "Jordan"],
    hint: 'Brands you see on sneakers and running shoes.'
  },
  {
    id: 'q541',
    category: '5-10',
    question: 'Name a well-known delivery or courier service.',
    exampleAnswers: ["Pathao", "Foodpanda", "FedEx", "DHL", "RedX"],
    hint: 'Companies that bring food, parcels, or tech orders straight to your location.'
  },
  {
    id: 'q542',
    category: '20-40',
    question: 'Name a well-known EdTech platform.',
    exampleAnswers: ["Coursera", "Khan Academy", "Udemy", "edX", "Duolingo", "Skillshare", "LinkedIn Learning", "Brilliant", "Codecademy", "10 Minute School"],
    hint: 'Online platforms for learning and education.'
  },
  {
    id: 'q543',
    category: '20-40',
    question: 'Name a well-known film director.',
    exampleAnswers: ["Steven Spielberg", "Martin Scorsese", "Christopher Nolan", "Stanley Kubrick", "Quentin Tarantino", "Alfred Hitchcock", "James Cameron", "Ridley Scott", "Tim Burton", "David Fincher"],
    hint: 'Directors known for influential or iconic films.'
  },
  {
    id: 'q544',
    category: '10-20',
    question: 'Name a well-known music award show.',
    exampleAnswers: ["Grammy Awards", "MTV VMAs", "Billboard Music Awards", "Brit Awards", "American Music Awards", "Latin Grammy", "Juno Awards", "Ivor Novello Awards", "Kerrang! Awards", "Mercury Prize"],
    hint: 'Ceremonies that celebrate the best in music.'
  },
  {
    id: 'q545',
    category: '20-40',
    question: 'Name a well-known piece of Bengali literature.',
    exampleAnswers: ["Gitanjali", "Pather Panchali", "Bishad Sindhu", "Anandamath", "Rabindranather Galpa", "Lalsalu", "Shrikanta", "Devdas", "Aranyak", "Padma Nadir Majhi"],
    hint: 'Novels, poetry collections, or stories in Bengali.'
  },
  {
    id: 'q546',
    category: '20-40',
    question: 'Name a well-known real-world billionaire.',
    exampleAnswers: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Mark Zuckerberg", "Bernard Arnault", "Warren Buffett"],
    hint: 'High-profile global tech magnates, founders, or investment tycoons.'
  },
  {
    id: 'q547',
    category: '20-40',
    question: 'Name a well-known type of cheese.',
    exampleAnswers: ["Cheddar", "Mozzarella", "Parmesan", "Brie", "Gouda", "Swiss", "Feta", "Camembert", "Gruyu00e8re", "Ricotta", "Emmental", "Provolone"],
    hint: 'Common cheese varieties from around the world.'
  },
  {
    id: 'q548',
    category: '20-40',
    question: 'Name a well-known video or movie streaming platform.',
    exampleAnswers: ["Netflix", "Amazon Prime Video", "Disney+", "HBO Max", "Hulu", "Apple TV+", "Peacock", "Paramount+", "Crunchyroll", "YouTube Premium"],
    hint: 'Subscription services for watching films and series.'
  },
  {
    id: 'q549',
    category: '5-10',
    question: 'Name a widely used computer antivirus software.',
    exampleAnswers: ["Bitdefender", "Kaspersky", "Norton", "McAfee", "Malwarebytes", "Windows Defender"],
    hint: 'Programs running in the background to protect your PC from malware and ransomware.'
  },
  {
    id: 'q550',
    category: '20-40',
    question: 'Name a WiFi router or networking equipment brand.',
    exampleAnswers: ["TP-Link", "Netgear", "Asus", "D-Link", "Linksys", "Cisco", "Ubiquiti", "Tenda", "Mikrotik", "Huawei"],
    hint: 'Brands you find on routers and access points.'
  },
  {
    id: 'q551',
    category: '40+',
    question: 'Name a wild animal native to the Indian subcontinent.',
    exampleAnswers: ["Bengal Tiger", "Indian Elephant", "Rhino", "Leopard", "Peacock", "King Cobra", "Gharial", "Fishing Cat", "Irrawaddy Dolphin", "Jackal"],
    hint: 'Animals found in Bangladesh, India, or nearby.'
  },
  {
    id: 'q552',
    category: '10-20',
    question: 'Name a Winter Olympic sport.',
    exampleAnswers: ["Alpine Skiing", "Cross-Country Skiing", "Snowboarding", "Ice Hockey", "Figure Skating", "Speed Skating", "Biathlon", "Bobsled", "Ski Jumping", "Luge", "Curling", "Freestyle Skiing"],
    hint: 'Sports at the Winter Games — about 15 disciplines.'
  },
  {
    id: 'q553',
    category: '20-40',
    question: 'Name a word from the NATO phonetic alphabet.',
    exampleAnswers: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet"],
    hint: 'Words used to spell out letters over radio.'
  },
  {
    id: 'q554',
    category: '5-10',
    question: 'Name a word group classification based on origin (উৎস) in Bangla grammar.',
    exampleAnswers: ["Tatsama", "Tadbhava", "Deshi", "Bideshi", "Ardha-Tatsama"],
    hint: 'Traces where vocabulary stemmed from, like raw Sanskrit, shifted variants, or local dialects.'
  },
  {
    id: 'q555',
    category: '10-20',
    question: 'Name a zodiac sign.',
    exampleAnswers: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"],
    hint: 'Astrology signs.'
  },
  {
    id: 'q556',
    category: '1-3',
    question: 'Name an Abrahamic religion.',
    exampleAnswers: ["Islam", "Christianity", "Judaism"],
    hint: 'Monotheistic faiths tracing their origins back to a specific ancient patriarch.'
  },
  {
    id: 'q557',
    category: '1-3',
    question: 'Name an active internet protocol address format standard layer.',
    exampleAnswers: ["IPv4", "IPv6"],
    hint: 'The 32-bit dot-decimal or 128-bit hex architectures handling net packets.'
  },
  {
    id: 'q558',
    category: '5-10',
    question: 'Name an alkali metal from Group 1 of the periodic table.',
    exampleAnswers: ["Lithium", "Sodium", "Potassium", "Rubidium", "Cesium", "Francium"],
    hint: 'Excludes Hydrogen; highly reactive elements forming alkaline hydroxides.'
  },
  {
    id: 'q559',
    category: '10-20',
    question: 'Name an alkali or alkaline earth metal.',
    exampleAnswers: ["Lithium", "Sodium", "Potassium", "Rubidium", "Cesium", "Beryllium", "Magnesium", "Calcium", "Strontium", "Barium"],
    hint: 'Elements from Group 1 and Group 2.'
  },
  {
    id: 'q560',
    category: '5-10',
    question: 'Name an alkaline earth metal from Group 2 of the periodic table.',
    exampleAnswers: ["Beryllium", "Magnesium", "Calcium", "Strontium", "Barium", "Radium"],
    hint: 'Reactive divalent elements forming basic oxides.'
  },
  {
    id: 'q561',
    category: '40+',
    question: 'Name an alkene or alkyne studied in organic chemistry.',
    exampleAnswers: ["Ethene", "Propene", "Butene", "Ethyne", "Propyne", "Butyne", "Pentene", "Hexene", "Octene", "Decene"],
    hint: 'Unsaturated hydrocarbons with double or triple bonds.'
  },
  {
    id: 'q562',
    category: '40+',
    question: 'Name an angiosperm plant commonly found in Bangladesh.',
    exampleAnswers: ["Mango (Mangifera indica)", "Jackfruit", "Rice (Oryza sativa)", "Jute", "Bamboo", "Banyan", "Water Lily (Shapla)", "Neem", "Papaya", "Banana"],
    hint: 'Flowering plants typical to the region.'
  },
  {
    id: 'q563',
    category: '40+',
    question: 'Name an angle in degrees that has a positive sine value.',
    exampleAnswers: ["30", "45", "60", "90", "120", "135", "150", "10", "20", "80"],
    hint: 'Think of Quadrants I and II.'
  },
  {
    id: 'q564',
    category: '10-20',
    question: 'Name an animal from the Chinese Zodiac.',
    exampleAnswers: ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"],
    hint: 'There are 12 signs in the cycle.'
  },
  {
    id: 'q565',
    category: '40+',
    question: 'Name an animated Disney or Pixar movie.',
    exampleAnswers: ["The Lion King", "Toy Story", "Frozen", "The Little Mermaid", "Finding Nemo", "Moana", "Coco", "Up", "WALL-E", "Encanto"],
    hint: 'Movies from Disney Animation or Pixar Studios.'
  },
  {
    id: 'q566',
    category: '20-40',
    question: 'Name an anime antagonist or villain.',
    exampleAnswers: ["Frieza", "Madara Uchiha", "All For One", "Hisoka", "Meruem", "Pain"],
    hint: 'Iconic anime bad guys.'
  },
  {
    id: 'q567',
    category: '40+',
    question: 'Name an anime character.',
    exampleAnswers: ["Naruto", "Goku", "Luffy", "Light Yagami", "Eren Yeager", "Levi Ackerman", "Ichigo", "Edward Elric", "Spike Spiegel", "Killua"],
    hint: 'Any character from any anime.'
  },
  {
    id: 'q568',
    category: '20-40',
    question: 'Name an anime from the 90s or earlier.',
    exampleAnswers: ["Sailor Moon", "Dragon Ball Z", "Yu Yu Hakusho", "Hunter x Hunter (old)", "Fist of the North Star"],
    hint: 'Classic old-school anime.'
  },
  {
    id: 'q569',
    category: '40+',
    question: 'Name an anime power or ability.',
    exampleAnswers: ["Sharingan", "Bankai", "One For All", "Nen", "Devil Fruit", "Breathing Technique"],
    hint: 'Special powers in anime.'
  },
  {
    id: 'q570',
    category: '5-10',
    question: 'Name an anime set in a historical time period.',
    exampleAnswers: ["Vinland Saga", "Kingdom", "Samurai Champloo", "Rurouni Kenshin", "Dororo"],
    hint: 'Shows featuring Vikings, ancient warring states, or wandering samurai.'
  },
  {
    id: 'q571',
    category: '10-20',
    question: 'Name an anime studio known for high quality.',
    exampleAnswers: ["ufotable", "MAPPA", "Kyoto Animation", "WIT Studio", "A-1 Pictures"],
    hint: 'Top animation studios.'
  },
  {
    id: 'q572',
    category: '40+',
    question: 'Name an anime with supernatural elements.',
    exampleAnswers: ["Tokyo Ghoul", "Blue Exorcist", "Noragami", "Chainsaw Man", "Hell's Paradise"],
    hint: 'Ghosts, demons, etc.'
  },
  {
    id: 'q573',
    category: '1-5',
    question: 'Name an architectural map layout pattern for corporate websites.',
    exampleAnswers: ["Linear", "Hierarchical", "Network", "Hybrid"],
    hint: 'Structures directing user navigation steps sequentially, tree-like, or complex-linked.'
  },
  {
    id: 'q574',
    category: '1-3',
    question: 'Name an architecture service framework type inside modern cloud computing.',
    exampleAnswers: ["IaaS", "PaaS", "SaaS"],
    hint: 'Delivering foundational hardware infrastructures, coding platforms, or software apps directly.'
  },
  {
    id: 'q575',
    category: '40+',
    question: 'Name an aromatic organic compound.',
    exampleAnswers: ["Benzene", "Toluene", "Phenol", "Aniline", "Naphthalene", "Anthracene", "Benzoic Acid", "Nitrobenzene", "Chlorobenzene", "Xylene"],
    hint: 'Compounds containing planar, ring structures like benzene.'
  },
  {
    id: 'q576',
    category: '10-20',
    question: 'Name an attribute used inside an HTML tag.',
    exampleAnswers: ["href", "src", "alt", "class", "id", "style", "width", "height", "type", "value"],
    hint: 'Modifiers added to the opening tag in web design.'
  },
  {
    id: 'q577',
    category: '20-40',
    question: 'Name an audio or sound production software (DAW).',
    exampleAnswers: ["FL Studio", "Ableton Live", "GarageBand", "Logic Pro", "Audacity", "Pro Tools", "Reaper", "Cubase", "Studio One", "Reason", "Bitwig", "Cakewalk"],
    hint: 'Digital audio workstations and sound editors.'
  },
  {
    id: 'q578',
    category: '40+',
    question: 'Name an element in the p-block of the periodic table.',
    exampleAnswers: ["Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon"],
    hint: 'Groups 13 to 18 on the periodic table.'
  },
  {
    id: 'q579',
    category: '5-10',
    question: 'Name an element or reference boundary of a parabola\'s geometric layout.',
    exampleAnswers: ["Focus", "Directrix", "Vertex", "Axis of Symmetry", "Latus Rectum"],
    hint: 'Key anatomical coordinates and linear bounds defining parabolic paths.'
  },
  {
    id: 'q580',
    category: '5-10',
    question: 'Name an element whose chemical symbol starts with \'C\'.',
    exampleAnswers: ["Carbon", "Calcium", "Copper", "Chlorine", "Cobalt", "Chromium", "Cadmium", "Cesium"],
    hint: 'Look at the periodic table.'
  },
  {
    id: 'q581',
    category: '20-40',
    question: 'Name an email service provider.',
    exampleAnswers: ["Gmail", "Outlook", "Yahoo Mail", "ProtonMail", "iCloud Mail", "Zoho Mail", "Tutanota", "Hotmail", "AOL Mail", "Fastmail", "Thunderbird", "Yandex Mail"],
    hint: 'Services that let you send and receive email.'
  },
  {
    id: 'q582',
    category: '20-40',
    question: 'Name an engineering discipline or sector.',
    exampleAnswers: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Software Engineering", "Chemical Engineering", "Aerospace Engineering", "Biomedical Engineering", "Computer Engineering", "Marine Engineering", "Industrial Engineering"],
    hint: 'Branches of the engineering profession.'
  },
  {
    id: 'q583',
    category: '5-10',
    question: 'Name an essential component block forming a formal English business letter layout.',
    exampleAnswers: ["Heading", "Salutation", "Body", "Subscription", "Signature"],
    hint: 'The structural chunks separating coordinates, greeting anchors, target content, and closings.'
  },
  {
    id: 'q584',
    category: '1-5',
    question: 'Name an essential structure tag for a basic HTML document.',
    exampleAnswers: ["html", "head", "title", "body"],
    hint: 'Tags required for every standard webpage layout.'
  },
  {
    id: 'q585',
    category: '40+',
    question: 'Name an even number greater than 0.',
    exampleAnswers: ["2", "4", "6", "8", "10", "12", "14", "16", "18", "20"],
    hint: 'Positive integers perfectly divisible by 2.'
  },
  {
    id: 'q586',
    category: '10-20',
    question: 'Name an IEEE networking or wireless standard.',
    exampleAnswers: ["IEEE 802.11", "IEEE 802.3", "IEEE 802.11ac", "IEEE 802.11ax", "IEEE 802.11n", "IEEE 802.15", "IEEE 802.11b", "IEEE 802.11g", "IEEE 802.16", "IEEE 802.11a"],
    hint: 'Standards published by the IEEE 802 working group.'
  },
  {
    id: 'q587',
    category: '1-5',
    question: 'Name an infamous historical serial killer.',
    exampleAnswers: ["Jack the Ripper", "Zodiac Killer", "Ted Bundy", "Jeffrey Dahmer"],
    hint: 'Notorious true-crime figures who committed multiple sequential crimes.'
  },
  {
    id: 'q588',
    category: '40+',
    question: 'Name an isekai anime.',
    exampleAnswers: ["ReZero", "Overlord", "That Time I Got Reincarnated as a Slime", "Konosuba", "The Rising of the Shield Hero"],
    hint: 'Transported to another world series.'
  },
  {
    id: 'q589',
    category: '40+',
    question: 'Name an item of clothing.',
    exampleAnswers: ["Shirt", "Pants", "Socks", "Hat", "Jacket", "Skirt", "Dress", "Sweater", "Scarf", "Sandals"],
    hint: 'Anything you wear on your body.'
  },
  {
    id: 'q590',
    category: '20-40',
    question: 'Name an item that can be eaten or consumed by the player in \'Minecraft\'.',
    exampleAnswers: ["Golden Apple", "Cooked Porkchop", "Steak", "Bread", "Rotten Flesh", "Pufferfish", "Golden Carrot", "Chorus Fruit"],
    hint: 'Food units or magical items that replenish your hunger bar or grant special status effects.'
  },
  {
    id: 'q591',
    category: '40+',
    question: 'Name an item you would find in a hospital.',
    exampleAnswers: ["Stethoscope", "Syringe", "IV Drip", "Stretcher", "Scalpel", "Blood Pressure Cuff", "Thermometer", "X-ray Machine", "Wheelchair", "Bandage"],
    hint: 'Medical equipment and supplies.'
  },
  {
    id: 'q592',
    category: '1-5',
    question: 'Name an open-world urban crime or exploration game.',
    exampleAnswers: ["Grand Theft Auto V", "Cyberpunk 2077", "Watch Dogs", "Sleeping Dogs", "Saints Row"],
    hint: 'Games where you drive cars, cause chaos, and explore massive cities.'
  },
  {
    id: 'q593',
    category: '10-20',
    question: 'Name an original AI model or assistant (not a derivative product).',
    exampleAnswers: ["ChatGPT", "Claude", "Gemini", "Grok", "Llama", "Mistral", "Copilot", "Perplexity", "DeepSeek", "Qwen"],
    hint: 'Base AI models or assistants from major labs.'
  },
  {
    id: 'q594',
    category: '1-3',
    question: 'Name an outcome of a coin flip.',
    exampleAnswers: ["Heads", "Tails"],
    hint: '5050 chance — 2 outcomes.'
  },
  {
    id: 'q595',
    category: '1-3',
    question: 'Name an outcome option in Rock, Paper, Scissors.',
    exampleAnswers: ["Rock", "Paper", "Scissors"],
    hint: 'There are 3 choices.'
  },
  {
    id: 'q596',
    category: '40+',
    question: 'Name an RPG game.',
    exampleAnswers: ["The Witcher 3", "Dark Souls", "Elden Ring", "Final Fantasy VII", "Baldur's Gate 3", "Skyrim", "Dragon Age", "Mass Effect", "Persona 5", "Tales of Arise"],
    hint: 'Role-playing games — any platform.'
  },
  {
    id: 'q597',
    category: '5-10',
    question: 'Name one of Newton\'s laws of motion.',
    exampleAnswers: ["First Law", "Second Law", "Third Law"],
    hint: 'The three famous laws.'
  },
  {
    id: 'q598',
    category: '5-10',
    question: 'Name one of the Akatsuki members.',
    exampleAnswers: ["Itachi", "Pain", "Kisame", "Deidara", "Sasori"],
    hint: 'Naruto organization members.'
  },
  {
    id: 'q599',
    category: '10-20',
    question: 'Name one of the first 20 elements on the periodic table.',
    exampleAnswers: ["Hydrogen", "Helium", "Lithium", "Carbon", "Oxygen", "Nitrogen", "Neon", "Sodium", "Calcium", "Magnesium"],
    hint: 'Atomic numbers 1 through 20.'
  },
  {
    id: 'q600',
    category: '5-10',
    question: 'Name one of the five oceans.',
    exampleAnswers: ["Pacific", "Atlantic", "Indian", "Arctic", "Southern"],
    hint: 'The major oceans.'
  },
  {
    id: 'q601',
    category: '5-10',
    question: 'Name one of the five senses.',
    exampleAnswers: ["Sight", "Hearing", "Taste", "Touch", "Smell"],
    hint: 'How humans perceive the world.'
  },
  {
    id: 'q602',
    category: '5-10',
    question: 'Name one of the four elements in ancient science.',
    exampleAnswers: ["Earth", "Water", "Fire", "Air"],
    hint: 'Classical elements.'
  },
  {
    id: 'q603',
    category: '1-5',
    question: 'Name one of the four main blood groups.',
    exampleAnswers: ["A", "B", "AB", "O"],
    hint: 'Positive or negative doesn\'t count as separate.'
  },
  {
    id: 'q604',
    category: '5-10',
    question: 'Name one of the great pyramids location.',
    exampleAnswers: ["Giza", "Egypt"],
    hint: 'Famous pyramid site.'
  },
  {
    id: 'q605',
    category: '10-20',
    question: 'Name one of the human body systems.',
    exampleAnswers: ["Circulatory", "Respiratory", "Digestive", "Nervous", "Skeletal", "Muscular"],
    hint: 'Major biological systems.'
  },
  {
    id: 'q606',
    category: '1-5',
    question: 'Name one of the key element boundaries forming the standard CSS Box Model.',
    exampleAnswers: ["Margin", "Border", "Padding", "Content"],
    hint: 'The concentric spacing layers formatting layouts on a web viewport.'
  },
  {
    id: 'q607',
    category: '5-10',
    question: 'Name one of the main six characters in the TV show \'Friends\'.',
    exampleAnswers: ["Rachel Green", "Monica Geller", "Phoebe Buffay", "Ross Geller", "Chandler Bing", "Joey Tribbiani"],
    hint: 'The six New Yorkers who made up the main friend group.'
  },
  {
    id: 'q608',
    category: '5-10',
    question: 'Name one of the New Seven Wonders of the World.',
    exampleAnswers: ["The Great Wall of China", "Chichen Itza", "Roman Colosseum", "Machu Picchu", "Taj Mahal", "Petra", "Christ the Redeemer"],
    hint: 'Seven iconic structures voted on in a 2007 global poll.'
  },
  {
    id: 'q609',
    category: '5-10',
    question: 'Name one of the phases of the Moon.',
    exampleAnswers: ["New Moon", "Full Moon", "Crescent", "Quarter"],
    hint: 'Lunar phases.'
  },
  {
    id: 'q610',
    category: '5-10',
    question: 'Name one of the planets in our solar system (excluding Earth).',
    exampleAnswers: ["Mars", "Venus", "Jupiter", "Saturn", "Mercury", "Uranus", "Neptune"],
    hint: 'No dwarf planets or the Sun.'
  },
  {
    id: 'q611',
    category: '5-10',
    question: 'Name one of the seven continents (repeat for variety).',
    exampleAnswers: ["Asia", "Africa", "Europe", "America"],
    hint: 'Landmasses again.'
  },
  {
    id: 'q612',
    category: '5-10',
    question: 'Name one of the Seven Deadly Sins in the anime.',
    exampleAnswers: ["Meliodas", "Diane", "Ban", "King", "Gowther"],
    hint: 'Main sins group.'
  },
  {
    id: 'q613',
    category: '5-10',
    question: 'Name one of the seven deadly sins.',
    exampleAnswers: ["Pride", "Greed", "Lust", "Envy", "Gluttony", "Wrath", "Sloth"],
    hint: 'Exactly 7.'
  },
  {
    id: 'q614',
    category: '5-10',
    question: 'Name one of the Seven Wonders of the Ancient World.',
    exampleAnswers: ["Great Pyramid of Giza", "Hanging Gardens of Babylon", "Colossus of Rhodes", "Lighthouse of Alexandria", "Temple of Artemis", "Statue of Zeus", "Mausoleum at Halicarnassus"],
    hint: 'There are exactly 7.'
  },
  {
    id: 'q615',
    category: '5-10',
    question: 'Name one of the Three Great Admirals in One Piece.',
    exampleAnswers: ["Akainu", "Aokiji", "Kizaru"],
    hint: 'Navy admirals.'
  },
  {
    id: 'q616',
    category: '1-5',
    question: 'Name one of the three states of matter (excluding plasma).',
    exampleAnswers: ["Solid", "Liquid", "Gas"],
    hint: 'Classic school science.'
  },
  {
    id: 'q617',
    category: '40+',
    question: 'Name something closely associated with China\'s culture, geography, or history.',
    exampleAnswers: ["The Great Wall", "Giant Pandas", "Beijing", "Mandarin", "Dim Sum", "Terracotta Army"],
    hint: 'Iconic landmarks, native animals, or traditional foods from the mainland.'
  },
  {
    id: 'q618',
    category: '40+',
    question: 'Name something you would typically find in a kitchen.',
    exampleAnswers: ["Knife", "Cutting Board", "Stove", "Pot", "Pan", "Spoon", "Blender", "Colander", "Bowl", "Ladle"],
    hint: 'Cooking tools, appliances, or utensils — anything in the kitchen.'
  },
  {
    id: 'q619',
    category: '1-5',
    question: 'Name the five fingers of the hand.',
    exampleAnswers: ["Thumb", "Index", "Middle", "Ring", "Little"],
    hint: 'Digits on your hand.'
  },
  {
    id: 'q620',
    category: '1-5',
    question: 'Name the four cardinal directions.',
    exampleAnswers: ["North", "South", "East", "West"],
    hint: 'NSEW on a compass.'
  },
  {
    id: 'q621',
    category: '1-5',
    question: 'Name the four main directions on a map.',
    exampleAnswers: ["North", "East", "South", "West"],
    hint: 'Same as cardinal but repeated for variety.'
  },
  {
    id: 'q622',
    category: '1-5',
    question: 'Name the four seasons.',
    exampleAnswers: ["Spring", "Summer", "Autumn", "Winter"],
    hint: 'The yearly weather cycles.'
  },
  {
    id: 'q623',
    category: '1-5',
    question: 'Name the four suits in a deck of cards.',
    exampleAnswers: ["Hearts", "Diamonds", "Clubs", "Spades"],
    hint: 'Card game suits.'
  },
  {
    id: 'q624',
    category: '1-3',
    question: 'Name the only even prime number.',
    exampleAnswers: ["2", "Two"],
    hint: 'There is only 1.'
  },
  {
    id: 'q625',
    category: '1-5',
    question: 'Name the three main characters from Death Note.',
    exampleAnswers: ["Light Yagami", "L", "Misa Amane"],
    hint: 'Core trio.'
  },
  {
    id: 'q626',
    category: '1-5',
    question: 'Name the three main schools in My Hero Academia.',
    exampleAnswers: ["U.A. High", "Shiketsu", "Ketsubutsu"],
    hint: 'Hero schools.'
  },
  {
    id: 'q627',
    category: '1-5',
    question: 'Name the three main titan shifters in early Attack on Titan.',
    exampleAnswers: ["Eren", "Mikasa", "Armin"],
    hint: 'Core trio.'
  },
  {
    id: 'q628',
    category: '1-3',
    question: 'Name the three primary colors.',
    exampleAnswers: ["Red", "Blue", "Yellow"],
    hint: 'Basic colors that can\'t be mixed from others.'
  },
  {
    id: 'q629',
    category: '1-5',
    question: 'Name the three R\'s of waste management.',
    exampleAnswers: ["Reduce", "Reuse", "Recycle"],
    hint: 'Eco-friendly principles.'
  },
  {
    id: 'q630',
    category: '1-5',
    question: 'Name the three states of water.',
    exampleAnswers: ["Ice", "Water", "Steam"],
    hint: 'Forms of H2O.'
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
