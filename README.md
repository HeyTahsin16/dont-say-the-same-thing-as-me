# 🎮 Don't Say The Same Thing As Me — Discord Bot

A multiplayer word elimination game inspired by **bradyyourtutor**'s YouTube series ["Don't Say The Same Thing As Me"](https://www.youtube.com/@bradyyourtutor). An AI judge (Gemini) secretly picks the most obvious answer to each question — players must give a valid answer that the AI *didn't* choose. Match the AI and you're out.

---

## How the Game Works

1. `/startgame` — Anyone can start a game in a channel.
2. A question appears with a **60-second timer**. Anyone who types in round 1 becomes a player.
3. The AI (Gemini) simultaneously picks its own answer — **always the most common/obvious one** — hidden from players until the round ends. Just like Brady does in his videos.
4. When time's up, the AI judges all answers:
   - ✅ **Safe** — correct answer that's different from the AI's
   - 💀 **Eliminated** — answer matches the AI's answer (you thought the same thing!)
   - ❌ **Eliminated** — wrong, off-topic, or gibberish answer
   - 🚫 **Eliminated** (round 2+) — no answer given
5. Results show for **10 seconds**, then the next round begins with a harder category.
6. **Last one standing wins** and gets a point on the leaderboard!

### The Key Mechanic
The AI deliberately picks the **most instinctive, default answer** — the one most people would blurt out first. The challenge is to think creatively enough to avoid it. Playing it safe is exactly what gets you eliminated.

### Question Categories (most → fewest answers)
`40+` → `20-40` → `10-20` → `5-10` → `1-5` → `1-3`

Round 1 starts at the category appropriate for the number of players. Each subsequent round steps down to a harder (narrower) category. As categories shrink, there are fewer hiding spots — you're more likely to collide with the AI.

---

## Setup

### 1. Create a Discord Application & Bot

1. Go to https://discord.com/developers/applications
2. Click **New Application**, give it a name
3. Go to **Bot** → click **Add Bot**
4. Under **Token**, click **Reset Token** and copy it
5. Under **Privileged Gateway Intents**, enable:
   - **Message Content Intent**
6. Go to **OAuth2 → General** and copy the **Client ID**

### 2. Invite the Bot to Your Server

Use this URL (replace `YOUR_CLIENT_ID`):
```
https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=277025459200&scope=bot%20applications.commands
```

Required permissions: Send Messages, Embed Links, Add Reactions, Read Message History, Use Slash Commands.

### 3. Get a Free Gemini API Key

1. Go to https://aistudio.google.com/app/apikey
2. Click **Create API Key**
3. Copy the key

### 4. Configure Environment Variables

```bash
cp .env.example .env
```

Edit `.env` and fill in:
```
DISCORD_TOKEN=your_discord_bot_token
CLIENT_ID=your_client_id
GEMINI_API_KEY=your_gemini_api_key
```

### 5. Install & Run

```bash
npm install
node index.js
```

Slash commands are registered globally on startup (may take up to 1 hour to propagate to all servers; instant in most cases).

---

## Commands

| Command | Description |
|---|---|
| `/startgame` | Start a new game in this channel |
| `/endgame` | Force-end the current game (starter or mod with Manage Messages) |
| `/leaderboard` | Show top winners across all games |
| `/help` | Show how-to-play instructions |

---

## Adding More Questions

Edit `questions.js`. Each question follows this shape:

```js
{
  id: "q_unique_id",         // unique string
  category: "10-20",         // "1-3" | "1-5" | "5-10" | "10-20" | "20-40" | "40+"
  question: "Name a ...",    // the question shown to players
  exampleAnswers: ["A", "B", "C"],  // calibrates the AI judge
  hint: "Optional hint text",
}
```

The `exampleAnswers` array is crucial — it tells Gemini what kinds of answers to accept or reject.

---

## File Structure

```
discord-minigame/
├── index.js          # Main bot, slash commands, game loop
├── questions.js      # Question database
├── gemini.js         # Gemini AI judge
├── gameState.js      # In-memory game state per channel
├── leaderboard.js    # JSON-backed win tracker
├── leaderboard.json  # Auto-created when first win is recorded
├── .env              # Your secrets (never commit this!)
├── .env.example      # Template
└── package.json
```

---

## Notes

- Only one game can run per channel at a time.
- The leaderboard persists in `leaderboard.json` between restarts.
- Gemini Flash is used for speed; it handles typo correction, synonym matching, and ambiguous answer decisions.
- If Gemini is unavailable during a round, all answers are passed (fail-safe).
- The AI is explicitly prompted to pick the **most common, instinctive answer** — just like Brady does as the human host in the YouTube videos. This is the core tension of the game.
- Credit: game concept by **bradyyourtutor** on YouTube.
