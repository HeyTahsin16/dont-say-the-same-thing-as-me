const fs = require("fs");
const path = require("path");

const LB_FILE = path.join(__dirname, "leaderboard.json");

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
  lb[userId].username = username; // keep name fresh
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
