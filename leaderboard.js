const fs = require("fs");
const path = require("path");

// On Railway: volume is mounted at /app/data
// Locally: falls back to a /data folder next to the project files
const DATA_DIR = path.join(__dirname, "data");
const LB_FILE  = path.join(DATA_DIR, "leaderboard.json");

// Make sure the data directory exists (Railway volume or local)
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function loadLeaderboard() {
  if (!fs.existsSync(LB_FILE)) return {};
  try {
    return JSON.parse(fs.readFileSync(LB_FILE, "utf8"));
  } catch {
    return {};
  }
}

function saveLeaderboard(data) {
  fs.writeFileSync(LB_FILE, JSON.stringify(data, null, 2));
}

function recordWin(userId, username) {
  const lb = loadLeaderboard();
  if (!lb[userId]) lb[userId] = { username, wins: 0 };
  lb[userId].username = username;
  lb[userId].wins++;
  saveLeaderboard(lb);
}

function getTopPlayers(limit = 10) {
  const lb = loadLeaderboard();
  return Object.entries(lb)
    .map(([id, data]) => ({ id, ...data }))
    .sort((a, b) => b.wins - a.wins)
    .slice(0, limit);
}

module.exports = { recordWin, getTopPlayers };
