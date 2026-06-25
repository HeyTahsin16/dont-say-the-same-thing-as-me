// Speed Round Questions — each has exactly ONE correct answer
// acceptedAnswers: all valid forms (main answer + common typos/variants)
// The first entry in acceptedAnswers is always the "canonical" display answer

const speedQuestions = [

  // ── SCIENCE & NATURE ─────────────────────────────────────────────────────
  { id: "s1",  question: "What is the fastest land animal on Earth?", answer: "Cheetah", acceptedAnswers: ["cheetah", "cheetah cat", "cheeta", "cheta", "chetah"] },
  { id: "s2",  question: "What is the chemical symbol for Gold?", answer: "Au", acceptedAnswers: ["au", "Au"] },
  { id: "s3",  question: "What is the chemical symbol for Silver?", answer: "Ag", acceptedAnswers: ["ag", "Ag"] },
  { id: "s4",  question: "What is the chemical symbol for Iron?", answer: "Fe", acceptedAnswers: ["fe", "Fe"] },
  { id: "s5",  question: "What is the chemical symbol for Sodium?", answer: "Na", acceptedAnswers: ["na", "Na"] },
  { id: "s6",  question: "What is the chemical symbol for Potassium?", answer: "K", acceptedAnswers: ["k", "K"] },
  { id: "s7",  question: "What is the chemical symbol for Lead?", answer: "Pb", acceptedAnswers: ["pb", "Pb"] },
  { id: "s8",  question: "What is the chemical symbol for Mercury?", answer: "Hg", acceptedAnswers: ["hg", "Hg"] },
  { id: "s9",  question: "What is the powerhouse of the cell?", answer: "Mitochondria", acceptedAnswers: ["mitochondria", "mitochondrion", "mitochodria", "mitocondria", "mitochondira", "mitochondrea"] },
  { id: "s10", question: "What planet is known as the Red Planet?", answer: "Mars", acceptedAnswers: ["mars"] },
  { id: "s11", question: "What is the largest planet in our solar system?", answer: "Jupiter", acceptedAnswers: ["jupiter", "jupter", "juipter"] },
  { id: "s12", question: "What is the closest planet to the Sun?", answer: "Mercury", acceptedAnswers: ["mercury", "mercery", "mercurey"] },
  { id: "s13", question: "What is the largest organ in the human body?", answer: "Skin", acceptedAnswers: ["skin"] },
  { id: "s14", question: "How many bones are in the adult human body?", answer: "206", acceptedAnswers: ["206"] },
  { id: "s15", question: "What is the hardest natural substance on Earth?", answer: "Diamond", acceptedAnswers: ["diamond", "dimond", "diamand"] },
  { id: "s16", question: "What gas do plants absorb during photosynthesis?", answer: "Carbon Dioxide", acceptedAnswers: ["carbon dioxide", "carbon di oxide", "co2", "CO2", "carbondioxide"] },
  { id: "s17", question: "What is the process by which plants make food using sunlight?", answer: "Photosynthesis", acceptedAnswers: ["photosynthesis", "photo synthesis", "photosyntesis", "photosynthsis", "photosinthesis"] },
  { id: "s18", question: "What is the speed of light approximately (in km/s)?", answer: "300000", acceptedAnswers: ["300000", "300,000", "3 x 10^8", "299792", "3×10^8"] },
  { id: "s19", question: "What is the atomic number of Carbon?", answer: "6", acceptedAnswers: ["6"] },
  { id: "s20", question: "What is the atomic number of Oxygen?", answer: "8", acceptedAnswers: ["8"] },
  { id: "s21", question: "What is the atomic number of Hydrogen?", answer: "1", acceptedAnswers: ["1"] },
  { id: "s22", question: "What is the most abundant gas in Earth's atmosphere?", answer: "Nitrogen", acceptedAnswers: ["nitrogen", "nitogen", "nitregen"] },
  { id: "s23", question: "What is the most abundant element in the universe?", answer: "Hydrogen", acceptedAnswers: ["hydrogen", "hydogen", "hdyrogen"] },
  { id: "s24", question: "What is the chemical formula for water?", answer: "H2O", acceptedAnswers: ["h2o", "H2O"] },
  { id: "s25", question: "What is the chemical formula for table salt?", answer: "NaCl", acceptedAnswers: ["nacl", "NaCl", "na cl"] },
  { id: "s26", question: "What is the SI unit of force?", answer: "Newton", acceptedAnswers: ["newton", "Newton", "N"] },
  { id: "s27", question: "What is the SI unit of electric current?", answer: "Ampere", acceptedAnswers: ["ampere", "ampere", "amp", "Ampere", "amps"] },
  { id: "s28", question: "What is the SI unit of temperature?", answer: "Kelvin", acceptedAnswers: ["kelvin", "Kelvin", "K"] },
  { id: "s29", question: "What is the SI unit of energy?", answer: "Joule", acceptedAnswers: ["joule", "Joule", "J"] },
  { id: "s30", question: "What is the SI unit of pressure?", answer: "Pascal", acceptedAnswers: ["pascal", "Pascal", "Pa"] },
  { id: "s31", question: "What is the normal boiling point of water in Celsius?", answer: "100", acceptedAnswers: ["100", "100°c", "100 c", "100c", "100 degrees"] },
  { id: "s32", question: "What is the freezing point of water in Celsius?", answer: "0", acceptedAnswers: ["0", "0°c", "0c", "zero"] },
  { id: "s33", question: "What is the largest ocean on Earth?", answer: "Pacific Ocean", acceptedAnswers: ["pacific ocean", "pacific", "the pacific", "pacfic ocean"] },
  { id: "s34", question: "What is the tallest mountain on Earth?", answer: "Mount Everest", acceptedAnswers: ["mount everest", "everest", "mt everest", "mount everst", "mt. everest"] },
  { id: "s35", question: "What is the longest river in the world?", answer: "Nile", acceptedAnswers: ["nile", "nile river", "the nile", "neil river"] },
  { id: "s36", question: "What is the largest continent?", answer: "Asia", acceptedAnswers: ["asia"] },
  { id: "s37", question: "What is the smallest continent?", answer: "Australia", acceptedAnswers: ["australia", "ausralia", "australlia"] },
  { id: "s38", question: "How many chromosomes do normal human cells have?", answer: "46", acceptedAnswers: ["46", "46 chromosomes"] },
  { id: "s39", question: "What blood type is known as the universal donor?", answer: "O Negative", acceptedAnswers: ["o negative", "o-", "o neg", "o-negative", "0 negative"] },
  { id: "s40", question: "What blood type is known as the universal recipient?", answer: "AB Positive", acceptedAnswers: ["ab positive", "ab+", "ab pos", "ab-positive"] },
  { id: "s41", question: "What is the largest mammal on Earth?", answer: "Blue Whale", acceptedAnswers: ["blue whale", "blue whales", "bluewhale", "bluw whale"] },
  { id: "s42", question: "What is the only mammal capable of true flight?", answer: "Bat", acceptedAnswers: ["bat", "bats"] },
  { id: "s43", question: "What is the national flower of Bangladesh?", answer: "Shapla", acceptedAnswers: ["shapla", "shapla flower", "white water lily", "water lily", "shapla/water lily"] },
  { id: "s44", question: "What is the national bird of Bangladesh?", answer: "Doel", acceptedAnswers: ["doel", "magpie robin", "oriental magpie robin", "doyal", "doyel"] },
  { id: "s45", question: "What is the national animal of Bangladesh?", answer: "Bengal Tiger", acceptedAnswers: ["bengal tiger", "tiger", "royal bengal tiger", "bengal"] },

  // ── MATHEMATICS ──────────────────────────────────────────────────────────
  { id: "m1",  question: "What is the value of Pi to two decimal places?", answer: "3.14", acceptedAnswers: ["3.14", "pi", "π"] },
  { id: "m2",  question: "What is the square root of 144?", answer: "12", acceptedAnswers: ["12"] },
  { id: "m3",  question: "What is the square root of 256?", answer: "16", acceptedAnswers: ["16"] },
  { id: "m4",  question: "What is 15% of 200?", answer: "30", acceptedAnswers: ["30"] },
  { id: "m5",  question: "What is the sum of angles in a triangle?", answer: "180", acceptedAnswers: ["180", "180°", "180 degrees"] },
  { id: "m6",  question: "What is the sum of angles in a quadrilateral?", answer: "360", acceptedAnswers: ["360", "360°", "360 degrees"] },
  { id: "m7",  question: "What is the only even prime number?", answer: "2", acceptedAnswers: ["2", "two"] },
  { id: "m8",  question: "What is 2 to the power of 10?", answer: "1024", acceptedAnswers: ["1024", "1,024"] },
  { id: "m9",  question: "What is the value of 0 factorial (0!)?", answer: "1", acceptedAnswers: ["1", "one"] },
  { id: "m10", question: "How many sides does a hexagon have?", answer: "6", acceptedAnswers: ["6", "six"] },
  { id: "m11", question: "How many sides does an octagon have?", answer: "8", acceptedAnswers: ["8", "eight"] },
  { id: "m12", question: "What is the Pythagorean theorem formula?", answer: "a² + b² = c²", acceptedAnswers: ["a²+b²=c²", "a2+b2=c2", "a^2+b^2=c^2", "a squared plus b squared equals c squared"] },
  { id: "m13", question: "What is the area formula of a circle?", answer: "πr²", acceptedAnswers: ["πr²", "pi r squared", "pi*r^2", "πr^2", "pi r^2", "3.14r^2"] },
  { id: "m14", question: "What is the perimeter formula of a circle (circumference)?", answer: "2πr", acceptedAnswers: ["2πr", "2 pi r", "2*pi*r", "πd", "pi d"] },
  { id: "m15", question: "What is the next prime number after 7?", answer: "11", acceptedAnswers: ["11"] },
  { id: "m16", question: "What is the result of sin(90°)?", answer: "1", acceptedAnswers: ["1", "one"] },
  { id: "m17", question: "What is the result of cos(0°)?", answer: "1", acceptedAnswers: ["1", "one"] },
  { id: "m18", question: "What is the result of tan(45°)?", answer: "1", acceptedAnswers: ["1", "one"] },
  { id: "m19", question: "What is the result of sin(0°)?", answer: "0", acceptedAnswers: ["0", "zero"] },
  { id: "m20", question: "What is the result of cos(90°)?", answer: "0", acceptedAnswers: ["0", "zero"] },
  { id: "m21", question: "What is log₁₀(1000)?", answer: "3", acceptedAnswers: ["3", "three"] },
  { id: "m22", question: "What is log₁₀(100)?", answer: "2", acceptedAnswers: ["2", "two"] },
  { id: "m23", question: "How many degrees are in a right angle?", answer: "90", acceptedAnswers: ["90", "90°", "ninety"] },
  { id: "m24", question: "What is the 10th number in the Fibonacci sequence (starting 1,1,2...)?", answer: "55", acceptedAnswers: ["55"] },
  { id: "m25", question: "What is the formula for the area of a triangle?", answer: "½ × base × height", acceptedAnswers: ["1/2 bh", "0.5bh", "half base height", "1/2 × b × h", "bh/2", "base times height divided by 2"] },

  // ── HISTORY & GEOGRAPHY ───────────────────────────────────────────────────
  { id: "h1",  question: "In what year did Bangladesh gain independence?", answer: "1971", acceptedAnswers: ["1971"] },
  { id: "h2",  question: "What is the capital city of Bangladesh?", answer: "Dhaka", acceptedAnswers: ["dhaka", "dacca", "dhaka city"] },
  { id: "h3",  question: "What is the capital city of France?", answer: "Paris", acceptedAnswers: ["paris"] },
  { id: "h4",  question: "What is the capital city of Japan?", answer: "Tokyo", acceptedAnswers: ["tokyo", "tokio", "toky"] },
  { id: "h5",  question: "What is the capital city of Australia?", answer: "Canberra", acceptedAnswers: ["canberra", "canberrra", "camberra"] },
  { id: "h6",  question: "What is the capital city of Canada?", answer: "Ottawa", acceptedAnswers: ["ottawa", "otawa"] },
  { id: "h7",  question: "What is the largest country in the world by area?", answer: "Russia", acceptedAnswers: ["russia", "russian federation"] },
  { id: "h8",  question: "What is the most populous country in the world?", answer: "India", acceptedAnswers: ["india"] },
  { id: "h9",  question: "What is the smallest country in the world?", answer: "Vatican City", acceptedAnswers: ["vatican city", "vatican", "the vatican", "holy see"] },
  { id: "h10", question: "On what date is Bangladesh Independence Day celebrated?", answer: "26th March", acceptedAnswers: ["26 march", "march 26", "26th march", "march 26th"] },
  { id: "h11", question: "Who wrote the Bangladesh national anthem Amar Shonar Bangla?", answer: "Rabindranath Tagore", acceptedAnswers: ["rabindranath tagore", "tagore", "rabindranath", "robindranath tagore", "robi thakur"] },
  { id: "h12", question: "What is the currency of Bangladesh?", answer: "Taka", acceptedAnswers: ["taka", "bangladeshi taka", "bdt"] },
  { id: "h13", question: "How many countries are in the United Nations?", answer: "193", acceptedAnswers: ["193"] },
  { id: "h14", question: "In what year did World War II end?", answer: "1945", acceptedAnswers: ["1945"] },
  { id: "h15", question: "In what year did World War I begin?", answer: "1914", acceptedAnswers: ["1914"] },
  { id: "h16", question: "Who was the first person to walk on the moon?", answer: "Neil Armstrong", acceptedAnswers: ["neil armstrong", "armstrong", "neil armstong", "neil arsmtrong"] },
  { id: "h17", question: "In what year did the Berlin Wall fall?", answer: "1989", acceptedAnswers: ["1989"] },
  { id: "h18", question: "What is the national language of Bangladesh?", answer: "Bengali", acceptedAnswers: ["bengali", "bangla", "bangali"] },
  { id: "h19", question: "What river flows through the heart of Dhaka?", answer: "Buriganga", acceptedAnswers: ["buriganga", "buriganga river", "buri ganga"] },
  { id: "h20", question: "How many districts are in Bangladesh?", answer: "64", acceptedAnswers: ["64"] },

  // ── ICT & TECHNOLOGY ──────────────────────────────────────────────────────
  { id: "t1",  question: "What does CPU stand for?", answer: "Central Processing Unit", acceptedAnswers: ["central processing unit", "central process unit", "central proessing unit"] },
  { id: "t2",  question: "What does RAM stand for?", answer: "Random Access Memory", acceptedAnswers: ["random access memory", "random acess memory", "random acces memory"] },
  { id: "t3",  question: "What does HTTP stand for?", answer: "HyperText Transfer Protocol", acceptedAnswers: ["hypertext transfer protocol", "hyper text transfer protocol"] },
  { id: "t4",  question: "What does HTML stand for?", answer: "HyperText Markup Language", acceptedAnswers: ["hypertext markup language", "hyper text markup language", "hyper-text markup language"] },
  { id: "t5",  question: "What does CSS stand for?", answer: "Cascading Style Sheets", acceptedAnswers: ["cascading style sheets", "cascading stylesheet", "cascade style sheets"] },
  { id: "t6",  question: "What does URL stand for?", answer: "Uniform Resource Locator", acceptedAnswers: ["uniform resource locator", "uniform resource locater", "universal resource locator"] },
  { id: "t7",  question: "What does SQL stand for?", answer: "Structured Query Language", acceptedAnswers: ["structured query language", "structured query languange"] },
  { id: "t8",  question: "What does OS stand for in computing?", answer: "Operating System", acceptedAnswers: ["operating system", "os", "operating sytem"] },
  { id: "t9",  question: "What does IP stand for in networking?", answer: "Internet Protocol", acceptedAnswers: ["internet protocol", "internet protocal"] },
  { id: "t10", question: "What does DNS stand for?", answer: "Domain Name System", acceptedAnswers: ["domain name system", "domain name server", "domain name service"] },
  { id: "t11", question: "What does GUI stand for?", answer: "Graphical User Interface", acceptedAnswers: ["graphical user interface", "graphic user interface", "graphical user interfce"] },
  { id: "t12", question: "What does API stand for?", answer: "Application Programming Interface", acceptedAnswers: ["application programming interface", "application program interface", "application programing interface"] },
  { id: "t13", question: "How many bits are in a byte?", answer: "8", acceptedAnswers: ["8", "eight"] },
  { id: "t14", question: "What is the binary representation of the decimal number 10?", answer: "1010", acceptedAnswers: ["1010"] },
  { id: "t15", question: "What company created the Python programming language?", answer: "Guido van Rossum", acceptedAnswers: ["guido van rossum", "guido", "guido vanrossum", "van rossum"] },
  { id: "t16", question: "What does USB stand for?", answer: "Universal Serial Bus", acceptedAnswers: ["universal serial bus", "universal serial buss"] },
  { id: "t17", question: "What does LAN stand for?", answer: "Local Area Network", acceptedAnswers: ["local area network", "local area net"] },
  { id: "t18", question: "What does Wi-Fi stand for?", answer: "Wireless Fidelity", acceptedAnswers: ["wireless fidelity", "wireless fidality", "wireless fidelty"] },
  { id: "t19", question: "In what year was the first iPhone released?", answer: "2007", acceptedAnswers: ["2007"] },
  { id: "t20", question: "What programming language is known as the language of the web (client-side)?", answer: "JavaScript", acceptedAnswers: ["javascript", "java script", "js"] },
  { id: "t21", question: "What does WWW stand for?", answer: "World Wide Web", acceptedAnswers: ["world wide web", "wordl wide web"] },
  { id: "t22", question: "What company developed the Android operating system?", answer: "Google", acceptedAnswers: ["google", "alphabet", "google/alphabet"] },
  { id: "t23", question: "What is the default port number for HTTP?", answer: "80", acceptedAnswers: ["80", "port 80"] },
  { id: "t24", question: "What is the default port number for HTTPS?", answer: "443", acceptedAnswers: ["443", "port 443"] },
  { id: "t25", question: "What does PDF stand for?", answer: "Portable Document Format", acceptedAnswers: ["portable document format", "portable doc format"] },

  // ── GENERAL KNOWLEDGE ────────────────────────────────────────────────────
  { id: "g1",  question: "What is the national sport of Bangladesh?", answer: "Kabaddi", acceptedAnswers: ["kabaddi", "kabadi", "kabbadi"] },
  { id: "g2",  question: "How many players are in a standard football (soccer) team?", answer: "11", acceptedAnswers: ["11", "eleven"] },
  { id: "g3",  question: "How many players are in a cricket team?", answer: "11", acceptedAnswers: ["11", "eleven"] },
  { id: "g4",  question: "How many players are in a basketball team on the court?", answer: "5", acceptedAnswers: ["5", "five"] },
  { id: "g5",  question: "How many strings does a standard guitar have?", answer: "6", acceptedAnswers: ["6", "six"] },
  { id: "g6",  question: "What is the largest desert in the world?", answer: "Sahara", acceptedAnswers: ["sahara", "sahara desert", "the sahara"] },
  { id: "g7",  question: "What is the currency of Japan?", answer: "Yen", acceptedAnswers: ["yen", "japanese yen", "jpy"] },
  { id: "g8",  question: "What is the currency of the United Kingdom?", answer: "Pound Sterling", acceptedAnswers: ["pound", "pound sterling", "gbp", "british pound", "pounds"] },
  { id: "g9",  question: "How many colors are in a rainbow?", answer: "7", acceptedAnswers: ["7", "seven"] },
  { id: "g10", question: "How many months have exactly 30 days?", answer: "4", acceptedAnswers: ["4", "four"] },
  { id: "g11", question: "How many days are in a leap year?", answer: "366", acceptedAnswers: ["366"] },
  { id: "g12", question: "How many weeks are in a year?", answer: "52", acceptedAnswers: ["52", "52 weeks"] },
  { id: "g13", question: "What is the square number after 64?", answer: "81", acceptedAnswers: ["81"] },
  { id: "g14", question: "How many keys are on a standard piano?", answer: "88", acceptedAnswers: ["88"] },
  { id: "g15", question: "What is the main ingredient in bread?", answer: "Flour", acceptedAnswers: ["flour", "wheat flour", "wheat"] },
  { id: "g16", question: "What is the first element on the periodic table?", answer: "Hydrogen", acceptedAnswers: ["hydrogen", "hydogen"] },
  { id: "g17", question: "What is the last element on the periodic table by atomic number (as of 2024)?", answer: "Oganesson", acceptedAnswers: ["oganesson", "oganesson (og)", "og"] },
  { id: "g18", question: "What is the most widely spoken language in the world?", answer: "Mandarin Chinese", acceptedAnswers: ["mandarin", "chinese", "mandarin chinese", "manderin"] },
  { id: "g19", question: "What year was Google founded?", answer: "1998", acceptedAnswers: ["1998"] },
  { id: "g20", question: "What does UNESCO stand for?", answer: "United Nations Educational, Scientific and Cultural Organization", acceptedAnswers: ["united nations educational scientific and cultural organization", "un educational scientific cultural organization", "unesco"] },
];

// Normalise an answer for comparison
function normaliseAnswer(str) {
  return str.toLowerCase().trim().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();
}

// Check if a submitted answer matches the question's accepted answers
function checkAnswer(question, submission) {
  const norm = normaliseAnswer(submission);
  return question.acceptedAnswers.some(a => normaliseAnswer(a) === norm);
}

// Pick a random question not in the usedIds set
function getRandomSpeedQuestion(usedIds = new Set()) {
  const pool = speedQuestions.filter(q => !usedIds.has(q.id));
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

module.exports = { speedQuestions, normaliseAnswer, checkAnswer, getRandomSpeedQuestion };
