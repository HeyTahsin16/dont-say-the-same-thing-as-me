// ─── IMAGE QUESTION SETS ───────────────────────────────────────────────────────
// Each set is a self-contained topic pack. Add new sets here to extend the game.
//
// Structure:
//   id          — internal key used in slash command choices
//   name        — display name shown in embeds
//   prompt      — question text shown above the image
//   baseUrl     — raw GitHub URL prefix for images in this set
//   winScore    — points needed to win mid-game
//   questions[] — array of question objects:
//     id              — unique string (typically filename without ext)
//     file            — actual filename in the GitHub folder
//     displayName     — shown when someone gets it right
//     acceptedAnswers — lowercase, punctuation-stripped forms that count as correct
//
// HOW TO ADD A NEW SET:
//   1. Create a folder in the GitHub repo with your images
//   2. Add a new entry to SETS below following the same structure
//   3. Add it to the slash command choices in index.js
// ──────────────────────────────────────────────────────────────────────────────

function norm(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')   // strip diacritics (é→e, ü→u etc.)
    .replace(/[^\w\s]/g, '')           // strip punctuation
    .replace(/\s+/g, ' ')
    .trim();
}

// Build helper: canonical name + optional alternates → normalised answer array
function a(canonical, ...alts) {
  return [norm(canonical), ...alts.map(norm)];
}

// ─── FLAGS SET ─────────────────────────────────────────────────────────────────
const FLAGS_BASE = "https://raw.githubusercontent.com/HeyTahsin16/dont-say-the-same-thing-as-me/main/Country%20Flags/";

const flagQuestions = [
  { id: "afghanistan",                    file: "afghanistan.png",                    displayName: "Afghanistan",                     acceptedAnswers: a("Afghanistan") },
  { id: "albania",                        file: "albania.png",                        displayName: "Albania",                         acceptedAnswers: a("Albania") },
  { id: "algeria",                        file: "algeria.png",                        displayName: "Algeria",                         acceptedAnswers: a("Algeria") },
  { id: "andorra",                        file: "andorra.png",                        displayName: "Andorra",                         acceptedAnswers: a("Andorra") },
  { id: "angola",                         file: "angola.png",                         displayName: "Angola",                          acceptedAnswers: a("Angola") },
  { id: "antigua_and_barbuda",            file: "antigua_and_barbuda.png",            displayName: "Antigua and Barbuda",             acceptedAnswers: a("Antigua and Barbuda", "Antigua") },
  { id: "argentina",                      file: "argentina.png",                      displayName: "Argentina",                       acceptedAnswers: a("Argentina") },
  { id: "armenia",                        file: "armenia.png",                        displayName: "Armenia",                         acceptedAnswers: a("Armenia") },
  { id: "australia",                      file: "australia.png",                      displayName: "Australia",                       acceptedAnswers: a("Australia", "Oz") },
  { id: "austria",                        file: "austria.png",                        displayName: "Austria",                         acceptedAnswers: a("Austria") },
  { id: "azerbaijan",                     file: "azerbaijan.png",                     displayName: "Azerbaijan",                      acceptedAnswers: a("Azerbaijan") },
  { id: "bahamas",                        file: "bahamas.png",                        displayName: "Bahamas",                         acceptedAnswers: a("Bahamas", "The Bahamas") },
  { id: "bahrain",                        file: "bahrain.png",                        displayName: "Bahrain",                         acceptedAnswers: a("Bahrain") },
  { id: "bangladesh",                     file: "bangladesh.png",                     displayName: "Bangladesh",                      acceptedAnswers: a("Bangladesh") },
  { id: "barbados",                       file: "barbados.png",                       displayName: "Barbados",                        acceptedAnswers: a("Barbados") },
  { id: "belarus",                        file: "belarus.png",                        displayName: "Belarus",                         acceptedAnswers: a("Belarus", "Byelorussia") },
  { id: "belgium",                        file: "belgium.png",                        displayName: "Belgium",                         acceptedAnswers: a("Belgium") },
  { id: "belize",                         file: "belize.png",                         displayName: "Belize",                          acceptedAnswers: a("Belize") },
  { id: "benin",                          file: "benin.png",                          displayName: "Benin",                           acceptedAnswers: a("Benin") },
  { id: "bhutan",                         file: "bhutan.png",                         displayName: "Bhutan",                          acceptedAnswers: a("Bhutan") },
  { id: "bolivia",                        file: "bolivia.png",                        displayName: "Bolivia",                         acceptedAnswers: a("Bolivia") },
  { id: "bosnia_and_herzegovina",         file: "bosnia_and_herzegovina.png",         displayName: "Bosnia and Herzegovina",          acceptedAnswers: a("Bosnia and Herzegovina", "Bosnia", "BiH") },
  { id: "botswana",                       file: "botswana.png",                       displayName: "Botswana",                        acceptedAnswers: a("Botswana") },
  { id: "brazil",                         file: "brazil.png",                         displayName: "Brazil",                          acceptedAnswers: a("Brazil", "Brasil") },
  { id: "brunei",                         file: "brunei.png",                         displayName: "Brunei",                          acceptedAnswers: a("Brunei", "Brunei Darussalam") },
  { id: "bulgaria",                       file: "bulgaria.png",                       displayName: "Bulgaria",                        acceptedAnswers: a("Bulgaria") },
  { id: "burkina_faso",                   file: "burkina_faso.png",                   displayName: "Burkina Faso",                    acceptedAnswers: a("Burkina Faso") },
  { id: "burundi",                        file: "burundi.png",                        displayName: "Burundi",                         acceptedAnswers: a("Burundi") },
  { id: "cambodia",                       file: "cambodia.png",                       displayName: "Cambodia",                        acceptedAnswers: a("Cambodia", "Kampuchea") },
  { id: "cameroon",                       file: "cameroon.png",                       displayName: "Cameroon",                        acceptedAnswers: a("Cameroon") },
  { id: "canada",                         file: "canada.png",                         displayName: "Canada",                          acceptedAnswers: a("Canada") },
  { id: "cape_verde",                     file: "cape_verde.png",                     displayName: "Cape Verde",                      acceptedAnswers: a("Cape Verde", "Cabo Verde") },
  { id: "central_african_republic",       file: "central_african_republic.png",       displayName: "Central African Republic",        acceptedAnswers: a("Central African Republic", "CAR") },
  { id: "chad",                           file: "chad.png",                           displayName: "Chad",                            acceptedAnswers: a("Chad") },
  { id: "chile",                          file: "chile.png",                          displayName: "Chile",                           acceptedAnswers: a("Chile") },
  { id: "china",                          file: "china.png",                          displayName: "China",                           acceptedAnswers: a("China", "PRC", "Peoples Republic of China") },
  { id: "colombia",                       file: "colombia.png",                       displayName: "Colombia",                        acceptedAnswers: a("Colombia") },
  { id: "comoros",                        file: "comoros.png",                        displayName: "Comoros",                         acceptedAnswers: a("Comoros") },
  { id: "congo",                          file: "congo.png",                          displayName: "Republic of the Congo",           acceptedAnswers: a("Congo", "Republic of Congo", "Republic of the Congo", "Congo Republic") },
  { id: "costa_rica",                     file: "costa_rica.png",                     displayName: "Costa Rica",                      acceptedAnswers: a("Costa Rica") },
  { id: "croatia",                        file: "croatia.png",                        displayName: "Croatia",                         acceptedAnswers: a("Croatia", "Hrvatska") },
  { id: "cuba",                           file: "cuba.png",                           displayName: "Cuba",                            acceptedAnswers: a("Cuba") },
  { id: "cyprus",                         file: "cyprus.png",                         displayName: "Cyprus",                          acceptedAnswers: a("Cyprus") },
  { id: "czechia",                        file: "czechia.png",                        displayName: "Czechia",                         acceptedAnswers: a("Czechia", "Czech Republic") },
  { id: "democratic_republic_of_the_congo", file: "democratic_republic_of_the_congo.png", displayName: "Democratic Republic of the Congo", acceptedAnswers: a("Democratic Republic of the Congo", "DRC", "DR Congo", "Congo DR", "Congo DRC") },
  { id: "denmark",                        file: "denmark.png",                        displayName: "Denmark",                         acceptedAnswers: a("Denmark") },
  { id: "djibouti",                       file: "djibouti.png",                       displayName: "Djibouti",                        acceptedAnswers: a("Djibouti") },
  { id: "dominica",                       file: "dominica.png",                       displayName: "Dominica",                        acceptedAnswers: a("Dominica") },
  { id: "dominican_republic",             file: "dominican_republic.png",             displayName: "Dominican Republic",              acceptedAnswers: a("Dominican Republic") },
  { id: "ecuador",                        file: "ecuador.png",                        displayName: "Ecuador",                         acceptedAnswers: a("Ecuador") },
  { id: "egypt",                          file: "egypt.png",                          displayName: "Egypt",                           acceptedAnswers: a("Egypt") },
  { id: "el_salvador",                    file: "el_salvador.png",                    displayName: "El Salvador",                     acceptedAnswers: a("El Salvador", "Salvador") },
  { id: "equatorial_guinea",              file: "equatorial_guinea.png",              displayName: "Equatorial Guinea",               acceptedAnswers: a("Equatorial Guinea") },
  { id: "eritrea",                        file: "eritrea.png",                        displayName: "Eritrea",                         acceptedAnswers: a("Eritrea") },
  { id: "estonia",                        file: "estonia.png",                        displayName: "Estonia",                         acceptedAnswers: a("Estonia") },
  { id: "eswatini",                       file: "eswatini.png",                       displayName: "Eswatini",                        acceptedAnswers: a("Eswatini", "Swaziland") },
  { id: "ethiopia",                       file: "ethiopia.png",                       displayName: "Ethiopia",                        acceptedAnswers: a("Ethiopia") },
  { id: "fiji",                           file: "fiji.png",                           displayName: "Fiji",                            acceptedAnswers: a("Fiji") },
  { id: "finland",                        file: "finland.png",                        displayName: "Finland",                         acceptedAnswers: a("Finland") },
  { id: "france",                         file: "france.png",                         displayName: "France",                          acceptedAnswers: a("France") },
  { id: "gabon",                          file: "gabon.png",                          displayName: "Gabon",                           acceptedAnswers: a("Gabon") },
  { id: "gambia",                         file: "gambia.png",                         displayName: "Gambia",                          acceptedAnswers: a("Gambia", "The Gambia") },
  { id: "georgia",                        file: "georgia.png",                        displayName: "Georgia",                         acceptedAnswers: a("Georgia") },
  { id: "germany",                        file: "germany.png",                        displayName: "Germany",                         acceptedAnswers: a("Germany", "Deutschland") },
  { id: "ghana",                          file: "ghana.png",                          displayName: "Ghana",                           acceptedAnswers: a("Ghana") },
  { id: "greece",                         file: "greece.png",                         displayName: "Greece",                          acceptedAnswers: a("Greece", "Hellas") },
  { id: "grenada",                        file: "grenada.png",                        displayName: "Grenada",                         acceptedAnswers: a("Grenada") },
  { id: "guatemala",                      file: "guatemala.png",                      displayName: "Guatemala",                       acceptedAnswers: a("Guatemala") },
  { id: "guinea",                         file: "guinea.png",                         displayName: "Guinea",                          acceptedAnswers: a("Guinea") },
  { id: "guinea_bissau",                  file: "guinea_bissau.png",                  displayName: "Guinea-Bissau",                   acceptedAnswers: a("Guinea-Bissau", "Guinea Bissau") },
  { id: "guyana",                         file: "guyana.png",                         displayName: "Guyana",                          acceptedAnswers: a("Guyana") },
  { id: "haiti",                          file: "haiti.png",                          displayName: "Haiti",                           acceptedAnswers: a("Haiti") },
  { id: "honduras",                       file: "honduras.png",                       displayName: "Honduras",                        acceptedAnswers: a("Honduras") },
  { id: "hungary",                        file: "hungary.png",                        displayName: "Hungary",                         acceptedAnswers: a("Hungary") },
  { id: "iceland",                        file: "iceland.png",                        displayName: "Iceland",                         acceptedAnswers: a("Iceland") },
  { id: "india",                          file: "india.png",                          displayName: "India",                           acceptedAnswers: a("India") },
  { id: "indonesia",                      file: "indonesia.png",                      displayName: "Indonesia",                       acceptedAnswers: a("Indonesia") },
  { id: "iran",                           file: "iran.png",                           displayName: "Iran",                            acceptedAnswers: a("Iran", "Persia") },
  { id: "iraq",                           file: "iraq.png",                           displayName: "Iraq",                            acceptedAnswers: a("Iraq") },
  { id: "ireland",                        file: "ireland.png",                        displayName: "Ireland",                         acceptedAnswers: a("Ireland", "Eire") },
  { id: "italy",                          file: "italy.png",                          displayName: "Italy",                           acceptedAnswers: a("Italy", "Italia") },
  { id: "ivory_coast",                    file: "ivory_coast.png",                    displayName: "Ivory Coast",                     acceptedAnswers: a("Ivory Coast", "Cote d'Ivoire", "Cote dIvoire", "Cote Divoire") },
  { id: "jamaica",                        file: "jamaica.png",                        displayName: "Jamaica",                         acceptedAnswers: a("Jamaica") },
  { id: "japan",                          file: "japan.png",                          displayName: "Japan",                           acceptedAnswers: a("Japan") },
  { id: "jordan",                         file: "jordan.png",                         displayName: "Jordan",                          acceptedAnswers: a("Jordan") },
  { id: "kazakhstan",                     file: "kazakhstan.png",                     displayName: "Kazakhstan",                      acceptedAnswers: a("Kazakhstan") },
  { id: "kenya",                          file: "kenya.png",                          displayName: "Kenya",                           acceptedAnswers: a("Kenya") },
  { id: "kiribati",                       file: "kiribati.png",                       displayName: "Kiribati",                        acceptedAnswers: a("Kiribati") },
  { id: "kosovo",                         file: "kosovo.png",                         displayName: "Kosovo",                          acceptedAnswers: a("Kosovo") },
  { id: "kuwait",                         file: "kuwait.png",                         displayName: "Kuwait",                          acceptedAnswers: a("Kuwait") },
  { id: "kyrgyzstan",                     file: "kyrgyzstan.png",                     displayName: "Kyrgyzstan",                      acceptedAnswers: a("Kyrgyzstan", "Kyrgyz Republic") },
  { id: "laos",                           file: "laos.png",                           displayName: "Laos",                            acceptedAnswers: a("Laos") },
  { id: "latvia",                         file: "latvia.png",                         displayName: "Latvia",                          acceptedAnswers: a("Latvia") },
  { id: "lebanon",                        file: "lebanon.png",                        displayName: "Lebanon",                         acceptedAnswers: a("Lebanon") },
  { id: "lesotho",                        file: "lesotho.png",                        displayName: "Lesotho",                         acceptedAnswers: a("Lesotho") },
  { id: "liberia",                        file: "liberia.png",                        displayName: "Liberia",                         acceptedAnswers: a("Liberia") },
  { id: "libya",                          file: "libya.png",                          displayName: "Libya",                           acceptedAnswers: a("Libya") },
  { id: "liechtenstein",                  file: "liechtenstein.png",                  displayName: "Liechtenstein",                   acceptedAnswers: a("Liechtenstein") },
  { id: "lithuania",                      file: "lithuania.png",                      displayName: "Lithuania",                       acceptedAnswers: a("Lithuania") },
  { id: "luxembourg",                     file: "luxembourg.png",                     displayName: "Luxembourg",                      acceptedAnswers: a("Luxembourg") },
  { id: "madagascar",                     file: "madagascar.png",                     displayName: "Madagascar",                      acceptedAnswers: a("Madagascar") },
  { id: "malawi",                         file: "malawi.png",                         displayName: "Malawi",                          acceptedAnswers: a("Malawi") },
  { id: "malaysia",                       file: "malaysia.png",                       displayName: "Malaysia",                        acceptedAnswers: a("Malaysia") },
  { id: "maldives",                       file: "maldives.png",                       displayName: "Maldives",                        acceptedAnswers: a("Maldives") },
  { id: "mali",                           file: "mali.png",                           displayName: "Mali",                            acceptedAnswers: a("Mali") },
  { id: "malta",                          file: "malta.png",                          displayName: "Malta",                           acceptedAnswers: a("Malta") },
  { id: "marshall_islands",               file: "marshall_islands.png",               displayName: "Marshall Islands",                acceptedAnswers: a("Marshall Islands") },
  { id: "mauritania",                     file: "mauritania.png",                     displayName: "Mauritania",                      acceptedAnswers: a("Mauritania") },
  { id: "mauritius",                      file: "mauritius.png",                      displayName: "Mauritius",                       acceptedAnswers: a("Mauritius") },
  { id: "mexico",                         file: "mexico.png",                         displayName: "Mexico",                          acceptedAnswers: a("Mexico", "Mexico") },
  { id: "micronesia",                     file: "micronesia.png",                     displayName: "Micronesia",                      acceptedAnswers: a("Micronesia", "Federated States of Micronesia", "FSM") },
  { id: "moldova",                        file: "moldova.png",                        displayName: "Moldova",                         acceptedAnswers: a("Moldova", "Republic of Moldova") },
  { id: "monaco",                         file: "monaco.png",                         displayName: "Monaco",                          acceptedAnswers: a("Monaco") },
  { id: "mongolia",                       file: "mongolia.png",                       displayName: "Mongolia",                        acceptedAnswers: a("Mongolia") },
  { id: "montenegro",                     file: "montenegro.png",                     displayName: "Montenegro",                      acceptedAnswers: a("Montenegro") },
  { id: "morocco",                        file: "morocco.png",                        displayName: "Morocco",                         acceptedAnswers: a("Morocco") },
  { id: "mozambique",                     file: "mozambique.png",                     displayName: "Mozambique",                      acceptedAnswers: a("Mozambique") },
  { id: "myanmar",                        file: "myanmar.png",                        displayName: "Myanmar",                         acceptedAnswers: a("Myanmar", "Burma") },
  { id: "namibia",                        file: "namibia.png",                        displayName: "Namibia",                         acceptedAnswers: a("Namibia") },
  { id: "nauru",                          file: "nauru.png",                          displayName: "Nauru",                           acceptedAnswers: a("Nauru") },
  { id: "nepal",                          file: "nepal.png",                          displayName: "Nepal",                           acceptedAnswers: a("Nepal") },
  { id: "netherlands",                    file: "netherlands.png",                    displayName: "Netherlands",                     acceptedAnswers: a("Netherlands", "Holland") },
  { id: "new_zealand",                    file: "new_zealand.png",                    displayName: "New Zealand",                     acceptedAnswers: a("New Zealand", "NZ", "Aotearoa") },
  { id: "nicaragua",                      file: "nicaragua.png",                      displayName: "Nicaragua",                       acceptedAnswers: a("Nicaragua") },
  { id: "niger",                          file: "niger.png",                          displayName: "Niger",                           acceptedAnswers: a("Niger") },
  { id: "nigeria",                        file: "nigeria.png",                        displayName: "Nigeria",                         acceptedAnswers: a("Nigeria") },
  { id: "north_korea",                    file: "north_korea.png",                    displayName: "North Korea",                     acceptedAnswers: a("North Korea", "DPRK", "Korea North") },
  { id: "north_macedonia",                file: "north_macedonia.png",                displayName: "North Macedonia",                 acceptedAnswers: a("North Macedonia", "Macedonia", "FYROM") },
  { id: "norway",                         file: "norway.png",                         displayName: "Norway",                          acceptedAnswers: a("Norway") },
  { id: "oman",                           file: "oman.png",                           displayName: "Oman",                            acceptedAnswers: a("Oman") },
  { id: "pakistan",                       file: "pakistan.png",                       displayName: "Pakistan",                        acceptedAnswers: a("Pakistan") },
  { id: "palau",                          file: "palau.png",                          displayName: "Palau",                           acceptedAnswers: a("Palau") },
  { id: "palestine",                      file: "palestine.png",                      displayName: "Palestine",                       acceptedAnswers: a("Palestine", "Palestinian Territory", "State of Palestine") },
  { id: "panama",                         file: "panama.png",                         displayName: "Panama",                          acceptedAnswers: a("Panama") },
  { id: "papua_new_guinea",               file: "papua_new_guinea.png",               displayName: "Papua New Guinea",                acceptedAnswers: a("Papua New Guinea", "PNG") },
  { id: "paraguay",                       file: "paraguay.png",                       displayName: "Paraguay",                        acceptedAnswers: a("Paraguay") },
  { id: "peru",                           file: "peru.png",                           displayName: "Peru",                            acceptedAnswers: a("Peru") },
  { id: "philippines",                    file: "philippines.png",                    displayName: "Philippines",                     acceptedAnswers: a("Philippines") },
  { id: "poland",                         file: "poland.png",                         displayName: "Poland",                          acceptedAnswers: a("Poland", "Polska") },
  { id: "portugal",                       file: "portugal.png",                       displayName: "Portugal",                        acceptedAnswers: a("Portugal") },
  { id: "qatar",                          file: "qatar.png",                          displayName: "Qatar",                           acceptedAnswers: a("Qatar") },
  { id: "romania",                        file: "romania.png",                        displayName: "Romania",                         acceptedAnswers: a("Romania") },
  { id: "russia",                         file: "russia.png",                         displayName: "Russia",                          acceptedAnswers: a("Russia", "Russian Federation") },
  { id: "rwanda",                         file: "rwanda.png",                         displayName: "Rwanda",                          acceptedAnswers: a("Rwanda") },
  { id: "saint_kitts_and_nevis",          file: "saint_kitts_and_nevis.png",          displayName: "Saint Kitts and Nevis",           acceptedAnswers: a("Saint Kitts and Nevis", "St Kitts and Nevis", "Saint Kitts", "St Kitts") },
  { id: "saint_lucia",                    file: "saint_lucia.png",                    displayName: "Saint Lucia",                     acceptedAnswers: a("Saint Lucia", "St Lucia") },
  { id: "saint_vincent_and_the_grenadines", file: "saint_vincent_and_the_grenadines.png", displayName: "Saint Vincent and the Grenadines", acceptedAnswers: a("Saint Vincent and the Grenadines", "St Vincent and the Grenadines", "Saint Vincent", "St Vincent") },
  { id: "samoa",                          file: "samoa.png",                          displayName: "Samoa",                           acceptedAnswers: a("Samoa", "Western Samoa") },
  { id: "san_marino",                     file: "san_marino.png",                     displayName: "San Marino",                      acceptedAnswers: a("San Marino") },
  { id: "sao_tome_and_principe",          file: "sao_tome_and_principe.png",          displayName: "São Tomé and Príncipe",           acceptedAnswers: a("Sao Tome and Principe", "Sao Tome", "Sao Tome Principe") },
  { id: "saudi_arabia",                   file: "saudi_arabia.png",                   displayName: "Saudi Arabia",                    acceptedAnswers: a("Saudi Arabia", "Saudi") },
  { id: "senegal",                        file: "senegal.png",                        displayName: "Senegal",                         acceptedAnswers: a("Senegal") },
  { id: "serbia",                         file: "serbia.png",                         displayName: "Serbia",                          acceptedAnswers: a("Serbia") },
  { id: "seychelles",                     file: "seychelles.png",                     displayName: "Seychelles",                      acceptedAnswers: a("Seychelles") },
  { id: "sierra_leone",                   file: "sierra_leone.png",                   displayName: "Sierra Leone",                    acceptedAnswers: a("Sierra Leone") },
  { id: "singapore",                      file: "singapore.png",                      displayName: "Singapore",                       acceptedAnswers: a("Singapore") },
  { id: "slovakia",                       file: "slovakia.png",                       displayName: "Slovakia",                        acceptedAnswers: a("Slovakia") },
  { id: "slovenia",                       file: "slovenia.png",                       displayName: "Slovenia",                        acceptedAnswers: a("Slovenia") },
  { id: "solomon_islands",                file: "solomon_islands.png",                displayName: "Solomon Islands",                 acceptedAnswers: a("Solomon Islands") },
  { id: "somalia",                        file: "somalia.png",                        displayName: "Somalia",                         acceptedAnswers: a("Somalia") },
  { id: "south_africa",                   file: "south_africa.png",                   displayName: "South Africa",                    acceptedAnswers: a("South Africa", "RSA") },
  { id: "south_korea",                    file: "south_korea.png",                    displayName: "South Korea",                     acceptedAnswers: a("South Korea", "Korea", "Republic of Korea", "ROK") },
  { id: "south_sudan",                    file: "south_sudan.png",                    displayName: "South Sudan",                     acceptedAnswers: a("South Sudan") },
  { id: "spain",                          file: "spain.png",                          displayName: "Spain",                           acceptedAnswers: a("Spain", "Espana") },
  { id: "sri_lanka",                      file: "sri_lanka.png",                      displayName: "Sri Lanka",                       acceptedAnswers: a("Sri Lanka", "Ceylon") },
  { id: "sudan",                          file: "sudan.png",                          displayName: "Sudan",                           acceptedAnswers: a("Sudan") },
  { id: "suriname",                       file: "suriname.png",                       displayName: "Suriname",                        acceptedAnswers: a("Suriname", "Surinam") },
  { id: "sweden",                         file: "sweden.png",                         displayName: "Sweden",                          acceptedAnswers: a("Sweden", "Sverige") },
  { id: "switzerland",                    file: "switzerland.png",                    displayName: "Switzerland",                     acceptedAnswers: a("Switzerland", "Swiss") },
  { id: "syria",                          file: "syria.png",                          displayName: "Syria",                           acceptedAnswers: a("Syria") },
  { id: "taiwan",                         file: "taiwan.png",                         displayName: "Taiwan",                          acceptedAnswers: a("Taiwan", "Republic of China", "ROC") },
  { id: "tajikistan",                     file: "tajikistan.png",                     displayName: "Tajikistan",                      acceptedAnswers: a("Tajikistan") },
  { id: "tanzania",                       file: "tanzania.png",                       displayName: "Tanzania",                        acceptedAnswers: a("Tanzania") },
  { id: "thailand",                       file: "thailand.png",                       displayName: "Thailand",                        acceptedAnswers: a("Thailand") },
  { id: "timor_leste",                    file: "timor_leste.png",                    displayName: "Timor-Leste",                     acceptedAnswers: a("Timor-Leste", "Timor Leste", "East Timor") },
  { id: "togo",                           file: "togo.png",                           displayName: "Togo",                            acceptedAnswers: a("Togo") },
  { id: "tonga",                          file: "tonga.png",                          displayName: "Tonga",                           acceptedAnswers: a("Tonga") },
  { id: "trinidad_and_tobago",            file: "trinidad_and_tobago.png",            displayName: "Trinidad and Tobago",             acceptedAnswers: a("Trinidad and Tobago", "Trinidad", "T and T") },
  { id: "tunisia",                        file: "tunisia.png",                        displayName: "Tunisia",                         acceptedAnswers: a("Tunisia") },
  { id: "turkey",                         file: "turkey.png",                         displayName: "Turkey",                          acceptedAnswers: a("Turkey", "Turkiye", "Turkiye") },
  { id: "turkmenistan",                   file: "turkmenistan.png",                   displayName: "Turkmenistan",                    acceptedAnswers: a("Turkmenistan") },
  { id: "tuvalu",                         file: "tuvalu.png",                         displayName: "Tuvalu",                          acceptedAnswers: a("Tuvalu") },
  { id: "uganda",                         file: "uganda.png",                         displayName: "Uganda",                          acceptedAnswers: a("Uganda") },
  { id: "ukraine",                        file: "ukraine.png",                        displayName: "Ukraine",                         acceptedAnswers: a("Ukraine") },
  { id: "united_arab_emirates",           file: "united_arab_emirates.png",           displayName: "United Arab Emirates",            acceptedAnswers: a("United Arab Emirates", "UAE", "Emirates") },
  { id: "united_kingdom",                 file: "united_kingdom.png",                 displayName: "United Kingdom",                  acceptedAnswers: a("United Kingdom", "UK", "Britain", "Great Britain", "England") },
  { id: "united_states",                  file: "united_states.png",                  displayName: "United States",                   acceptedAnswers: a("United States", "USA", "America", "US", "United States of America") },
  { id: "uruguay",                        file: "uruguay.png",                        displayName: "Uruguay",                         acceptedAnswers: a("Uruguay") },
  { id: "uzbekistan",                     file: "uzbekistan.png",                     displayName: "Uzbekistan",                      acceptedAnswers: a("Uzbekistan") },
  { id: "vanuatu",                        file: "vanuatu.png",                        displayName: "Vanuatu",                         acceptedAnswers: a("Vanuatu") },
  { id: "vatican_city",                   file: "vatican_city.png",                   displayName: "Vatican City",                    acceptedAnswers: a("Vatican City", "Vatican", "Holy See") },
  { id: "venezuela",                      file: "venezuela.png",                      displayName: "Venezuela",                       acceptedAnswers: a("Venezuela") },
  { id: "vietnam",                        file: "vietnam.png",                        displayName: "Vietnam",                         acceptedAnswers: a("Vietnam", "Viet Nam") },
  { id: "yemen",                          file: "yemen.png",                          displayName: "Yemen",                           acceptedAnswers: a("Yemen") },
  { id: "zambia",                         file: "zambia.png",                         displayName: "Zambia",                          acceptedAnswers: a("Zambia") },
  { id: "zimbabwe",                       file: "zimbabwe.png",                       displayName: "Zimbabwe",                        acceptedAnswers: a("Zimbabwe") },
];

// ─── SET REGISTRY ──────────────────────────────────────────────────────────────
// Add new topic packs here. The key is used as the slash command choice value.
const SETS = {
  flags: {
    id:        "flags",
    name:      "Country Flags",
    prompt:    "🚩 Which country does this flag belong to?",
    baseUrl:   FLAGS_BASE,
    winScore:  10,
    questions: flagQuestions,
  },
  // FUTURE SETS — add here and wire up in index.js:
  // landmarks: { id: "landmarks", name: "Famous Landmarks", ... },
  // people:    { id: "people",    name: "Famous People",    ... },
};

// ─── HELPERS ───────────────────────────────────────────────────────────────────

function normaliseInput(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function checkImageAnswer(question, input) {
  const n = normaliseInput(input);
  return question.acceptedAnswers.includes(n);
}

function getSet(setId) {
  return SETS[setId] || null;
}

function getRandomImageQuestion(set, usedIds) {
  const pool = set.questions.filter(q => !usedIds.has(q.id));
  if (pool.length === 0) return null; // all used
  return pool[Math.floor(Math.random() * pool.length)];
}

function getImageUrl(set, question) {
  return set.baseUrl + encodeURIComponent(question.file);
}

module.exports = { SETS, getSet, checkImageAnswer, getRandomImageQuestion, getImageUrl, normaliseInput };
