# 🎮 Don't Say The Same Thing As Me — Discord Bot

A multiplayer word elimination game inspired by **bradyyourtutor**'s YouTube series ["Don't Say The Same Thing As Me"](https://www.youtube.com/@bradyyourtutor). An AI judge (Gemini) secretly picks the most obvious answer to each question — players must give a valid answer that the AI *didn't* choose. Match the AI and you're out.

---

## How the Game Works

1. `/startgame` — Anyone can start a game in a channel. Optionally set `players:N` to skip the round 1 timer once all expected players have joined.
2. A question appears with a **60-second timer** for round 1. Anyone who types becomes a player.
3. The AI (Gemini) simultaneously picks its own answer — **always the most common/obvious one** — hidden from players until the round ends. Just like Brady does in his videos.
4. When time's up (or everyone answers early), the AI judges all answers:
   - ✅ **Safe** — correct answer that's different from the AI's
   - 💀 **Eliminated** — answer matches the AI's answer
   - 🔁 **Eliminated** — same answer as another player, including typo variants
   - ❌ **Eliminated** — wrong, off-topic, or gibberish
   - 🚫 **Eliminated** (round 2+) — no answer given
5. Results show for **10 seconds**, then the next round begins.
6. **Last one standing wins** and gets a point on the leaderboard!

### The Key Mechanic
The AI deliberately picks the **most instinctive, default answer** — the one most people would blurt out first. The challenge is to think creatively enough to avoid it. Playing it safe is exactly what gets you eliminated.

### Round Timers
- **Round 1:** 60 seconds (joining round — anyone who types joins)
- **Round 2+:** 30 seconds per round
- **Early skip:** If all active players answer before time's up, the round resolves immediately

### Dynamic Difficulty
Questions are selected based on how many players are still active — not just the round number.

| Active players | Category |
|---|---|
| 30+ | `40+` answers |
| 15–29 | `20-40` answers |
| 8–14 | `10-20` answers |
| 4–7 | `5-10` answers |
| 2–3 | `1-5` answers |
| 1 | `1-3` answers |

Every question also carries its own **difficulty weight from 1 (easiest) to 10 (hardest)** — a second axis, independent of category, for how obscure the *topic* itself is (see [Adding More Questions](#adding-more-questions)). Each time a category locks in, the bot lines up **10-15 questions** from it (instead of a quick handful) spread across that whole 1-10 range, so a category visit always opens on its easiest question and climbs to its hardest before the game moves on to the next, narrower category and starts the easy-to-hard ramp again. Skipping a question (see below) swaps in a replacement of at least the same difficulty, so the ramp never steps backwards. This makes a full game meaningfully longer, and means the challenge builds from two directions at once: the answer pool keeps shrinking *and* the questions keep getting harder. If the active player count keeps a category relevant for longer than one 10-15 batch, the bot just deals a fresh batch rather than force-advancing — the category only narrows once the players do.

### Anti-Camping System
Player answers are tracked across sessions per question. If a player repeatedly uses the same answer for the same question, the bot secretly "loads" that answer as the AI's pick — eliminating them. The trap fires randomly between the 3rd and 5th repeated use so campers can't predict when they'll get caught.

### AI Answer Variety
The AI remembers up to 50 previous answers per question across all sessions and avoids repeating them. This prevents players from memorising what the AI always says. For narrow categories (`1-3`, `1-5`), the avoid list clears automatically when answers run low so the AI never gets stuck.

---

## Setup

### 1. Create a Discord Application & Bot

1. Go to https://discord.com/developers/applications
2. Click **New Application**, give it a name
3. Go to **Bot** → click **Add Bot**
4. Under **Token**, click **Reset Token** and copy it
5. Under **Privileged Gateway Intents**, enable **Message Content Intent**
6. Go to **OAuth2 → General** and copy the **Client ID**

### 2. Invite the Bot to Your Server

Replace `YOUR_CLIENT_ID`:
```
https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=277025459200&scope=bot%20applications.commands
```

Required permissions: Send Messages, Embed Links, Add Reactions, Read Message History, Use Slash Commands.

### 3. Get a Free Gemini API Key

1. Go to https://aistudio.google.com/app/apikey
2. Click **Create API Key** and copy it

### 4. Configure Environment Variables

```bash
cp .env.example .env
```

Fill in your `.env`:
```
DISCORD_TOKEN=your_discord_bot_token
CLIENT_ID=your_client_id
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-3.1-flash-lite
DISCORD_OWNER_ID=your_discord_user_id   # optional — locks /setmodel to you only
```

### 5. Install & Run

```bash
npm install
node index.js
```

Slash commands register globally on startup (usually instant, up to 1 hour to propagate).

### 6. Deploying to Railway

1. Push to GitHub, connect the repo in Railway
2. Add all env vars under **Variables**
3. Add a **Volume** and set the mount path to `/app/data`
4. Set start command to `node index.js` (also in `railway.toml`)

The `/app/data` volume stores `leaderboard.json`, `ai_history.json`, and `player_history.json` — all persist across redeploys.

---

## Commands

| Command | Description |
|---|---|
| `/startgame` | Start a new game. Optional `players:N` to skip round 1 timer early |
| `/endgame` | Force-end the current game (starter or mod with Manage Messages) |
| `/leaderboard` | Show all-time top winners |
| `/setmodel` | Switch the Gemini model at runtime (owner/mod only) |
| `/help` | Show how-to-play instructions |

### Skip Button
From round 2 onward, each question embed has a **⏭️ Skip Question** button. Active players can vote to skip — if a majority votes, a replacement question from the same category is loaded instantly. Only one skip is allowed per round.

---

## Available Gemini Models

Switch at runtime with `/setmodel` — no restart needed.

| Model | API String | Notes |
|---|---|---|
| Gemini 3.5 Flash | `gemini-3.5-flash` | Most capable, stable — best judging quality ⭐ |
| Gemini 3 Flash | `gemini-3-flash-preview` | Frontier performance, preview |
| Gemini 3.1 Flash Lite | `gemini-3.1-flash-lite` | Lightest Gemini 3, stable — **default** |
| Gemini 3.1 Pro | `gemini-3.1-pro-preview` | Most advanced, preview |
| Gemini 2.5 Flash | `gemini-2.5-flash` | Best price-performance 2.5 |
| Gemini 2.5 Pro | `gemini-2.5-pro` | Most capable 2.5 |
| Gemma 4 27B | `gemma-4-27b-it` | Open model |
| Gemma 4 31B | `gemma-4-31b-it` | Open model, largest |

If you hit a rate limit on one model, use `/setmodel` to switch instantly mid-session.

---

## Adding More Questions

Edit `questions.js`. Each question follows this shape:

```js
{
  id: "q_unique_id",              // any unique string — dots are fine (e.g. "math.1")
  category: "10-20",              // "1-3" | "1-5" | "5-10" | "10-20" | "20-40" | "40+"
  difficulty: 5,                  // 1 (easiest) to 10 (hardest) — how obscure the topic itself is
  question: "Name a ...",         // the question shown to players
  exampleAnswers: ["A", "B", "C"],// calibrates the AI judge — include as many as you can
  hint: "Optional hint text",
}
```

`category` and `difficulty` are two different axes: `category` is how many real-world valid answers exist (drives collision odds against the AI), `difficulty` is how obscure the *topic* is (drives whether players can think of an answer at all). A `40+` question can be difficulty 1 ("Name a fruit") or difficulty 9 ("Name a biological enzyme") — both have huge answer pools, but one asks for common knowledge and the other doesn't.

The `exampleAnswers` array is crucial — it tells Gemini what kinds of answers to accept or reject. The `id` only needs to be unique; order doesn't matter.

Don't want to hand-pick a `difficulty` for a big batch of new questions? Run:

```bash
node scripts/assign-difficulty.js
```

It scores every question in the file with a keyword + specificity heuristic (documented at the top of the script) and fills in `difficulty` for you — ranked per-category so every category keeps a full 1-10 spread. It's safe to re-run any time you add questions, but note it recalculates *every* question's difficulty from scratch, so do any hand-tuning of individual values after running it, not before.

---

## File Structure

```
dont-say-the-same-thing-as-me/
├── index.js            # Main bot, slash commands, game loop
├── questions.js        # Question database (961 questions) + difficulty-ordered category queue logic
├── scripts/
│   └── assign-difficulty.js  # Re-runnable heuristic scorer that fills in each question's difficulty (1-10)
├── gemini.js           # Gemini AI judge + model switching
├── gameState.js        # Per-channel in-memory game state
├── leaderboard.js      # Win tracker → data/leaderboard.json
├── aiHistory.js        # AI answer history → data/ai_history.json
├── playerHistory.js    # Anti-camping tracker → data/player_history.json
├── railway.toml        # Railway build + start config
├── package.json
├── .env                # Your secrets (never commit!)
├── .env.example        # Template
├── .gitignore
└── README.md
```

**Runtime data** (stored in `/app/data/` on Railway, `./data/` locally — all auto-created):
- `leaderboard.json` — win counts per player
- `ai_history.json` — AI answer history per question (prevents repetition)
- `player_history.json` — per-player answer history per question (anti-camping)

---

## How Match Detection Works

Match detection is done entirely in code — **not by the AI**. After Gemini validates each answer and corrects typos, the bot:

1. Takes the **effective answer** (corrected spelling if a typo was fixed, otherwise raw)
2. Runs `answersMatch(effectiveAnswer, aiAnswer)` — normalises both strings and checks for exact match, substring containment, or shared significant words
3. Eliminates the player if it's a match

This prevents Gemini from making inconsistent match decisions (e.g. calling "rock" a match for "pop").

**Typo collision:** answers are also checked against other players' effective answers in submission order. First submitter wins — if "refflex" gets corrected to "reflex" and someone already said "reflex", the late typo sender is eliminated.

---

## Notes

- Only one game can run per channel at a time.
- Solo games (only one player ever joins) don't count toward the leaderboard.
- All persistent data lives in `./data/` and is excluded from git.
- If Gemini is unavailable during a round, all answers are passed (fail-safe).
- Slash command choices update after a redeploy. If old options still show, clear commands manually and restart.
- Credit: game concept by **bradyyourtutor** on YouTube.
