# Architecture

A developer-facing reference for how this bot's code is organized and how each
system actually works internally. For installing, configuring, and deploying
the bot, see [README.md](./README.md) — this doc assumes it's already running
and explains what's going on under the hood.

## Overview

One Node.js process (`index.js`), one Discord client, built on discord.js v14.
No database — everything persistent lives in flat JSON files under `data/`
(created on first run). That's fine for a single bot process; it would need
real storage before running multiple instances against the same data.

The bot hosts **three independent game modes**. Each has its own state class,
question data, and embed-rendering code, and **only one mode can be active per
Discord channel at a time** — every `/startX` command checks that the other
two aren't already running, and the `messageCreate` handler routes each
incoming message to whichever mode is active (image → speed → regular
priority, first match wins).

| | Regular Game | Speed Round | Image Round |
|---|---|---|---|
| Start / stop | `/startgame`, `/endgame` | `/startspeed`, `/endspeed` | `/startimage`, `/endimage` |
| State class | `gameState.js` | `speedGameState.js` | `imageGameState.js` |
| Question data | `questions.js` (961 questions) | `speedQuestions.js` | `imageSets.js` (one set so far: flags) |
| Win condition | Last player not eliminated | Last player not eliminated | First to a target score |
| Answer checking | Google Gemini judges validity | Exact match vs. curated `acceptedAnswers` | Exact match vs. curated `acceptedAnswers` |
| Elimination style | Match the AI's own answer → out | Fail to win *any* round in a "phase" → out | No elimination — race to target score |

All three share `leaderboard.js` for win tracking.

---

## Regular Game — `index.js` (round loop) + `questions.js` (data + selection) + `gameState.js` (per-channel state)

### Round lifecycle
`game.phase` moves through `waiting → answering → judging → result →` (loop
back to `answering` for the next round, or `ended`). One round: a question
comes off the current category's difficulty queue → posted as an embed →
players type answers directly in the channel (round 1 only: typing also
joins you) → timer expires → Gemini judges → anyone whose answer matches the
AI's is eliminated → next round, or game over once ≤1 player remains.

### Two separate axes: `category` and `difficulty`
Easy to conflate, so worth being explicit:

- **`category`** (`"1-3"` up to `"40+"`) is how many real-world valid answers
  a question has, which drives collision odds against the AI. The game works
  through all six categories in a fixed order — `40+` → `20-40` → `10-20` →
  `5-10` → `1-5` → `1-3` — each one getting a full 10-15 question batch
  before moving to the next. (An earlier version picked the category from
  active player count instead; that's gone — see "The difficulty queue"
  below for why.)
- **`difficulty`** (`1`–`10`) is how obscure the *topic itself* is,
  independent of pool size. A `"40+"` question can be difficulty 1 ("name a
  fruit") or difficulty 9 ("name a biological enzyme") — both have huge
  answer pools, but one is common knowledge and the other isn't.

### The difficulty queue
Every time `resolveCategory()` (re)locks the game into a category,
`enterCategory()` (also in `questions.js`):

1. Gathers every question in that category never used **this session**
   (`game.usedQuestionIds`) **or any past session**
   (`game.globalHistory` — see "Cross-session question memory" below).
2. Stratifies a pick across all ten difficulty levels (`buildDifficultyQueue()`)
   — roughly one question per level — rather than just taking the 10-15
   lowest-scoring questions overall. A single level can easily hold 15+
   questions on its own, and a plain sorted slice could land entirely inside
   one level, producing a "flat" batch that never climbs.
3. Queues 10-15 of them (`QUESTIONS_PER_CATEGORY_VISIT`), sorted ascending, as
   `game.categoryQueue`.

Each round calls `getNextQueuedQuestion()`, which just walks that queue in
order — so a category visit always opens on its easiest question and closes
on its hardest. Skipping a question (⏭️ button → `applySkipReplacement()`)
swaps in a replacement of **at least the difficulty of whatever was just
served**, then re-sorts the still-unserved tail of the queue, so a skip can
never make the ramp dip backwards.

`resolveCategory()` always lets a category finish its whole 10-15 batch
before calling `enterCategory()` on `getNextCategory(game.currentCategory)`
— a fixed, unconditional step to the next tier in `CATEGORY_ORDER`. An
earlier version instead picked the category from active player count, with
an "emergency" jump of an extra tier whenever that player-count-implied
category was 2+ tiers narrower than the current one. That logic is gone: for
a typical small lobby (3-4 players), the implied category was already
narrow from round 2 onward, so the emergency jump fired almost immediately
and kept firing, cutting most categories' batches short by several tiers at
once — the opposite of "every category gets its own 10-15 questions."
Because `getNextCategory("1-3")` just returns `"1-3"` again (there's nowhere
narrower left), the narrowest category never gets permanently stuck either —
it keeps rolling fresh batches for as long as the game continues.

### Cross-session question memory
`game.usedQuestionIds` only ever covers the *current* game — necessary so a
session doesn't have to special-case "have we ever played before," but not
enough on its own, since a fresh `usedQuestionIds` at the start of every new
game meant a small pool (only ~17 questions at the easiest difficulty level
of the widest category) could easily repeat a question from a game played
minutes earlier. `questionHistory.js` persists every served question's id
and a last-used timestamp to `data/question_history.json`; `/startgame`
loads that into the new game's `game.globalHistory` (a `Map`), and
`buildDifficultyQueue()`/`applySkipReplacement()` both treat it as a second,
softer exclusion set — preferred over never-used-anywhere questions, but
not absolute: if a category's supply of those runs low, they fall back to
reusing the *oldest*-used question in that category rather than a random
recent one. `recordQuestionUsed()` is called at the same moment a question
is added to `game.usedQuestionIds`, so the record survives even if the
process crashes mid-game.

`difficulty` values themselves are generated by `scripts/assign-difficulty.js`
— a keyword + question-length heuristic, documented in full in the script's
own header comment. It's a heuristic, not a hand-graded answer key. If a
specific question's difficulty (or category) looks wrong, its `id` is shown
in the round embed's footer specifically so it can be found and hand-edited
in `questions.js` quickly.

### AI judging — `gemini.js`
Gemini has exactly two jobs each round, in one prompt: pick its own answer
(the most obvious one it hasn't already used for this question), and decide
whether each player's answer is a *real, correct* answer at all (pass/fail,
typo-tolerant). **Gemini never decides whether a player matched the AI** —
that's done locally, in code, via `answersMatch()` (lowercase + strip
punctuation, then exact match, containment, or shared-significant-words).
LLM judgment on "did these two strings mean the same thing" was less
reliable/consistent than a few lines of normalization for this specific
check, hence the split.

If the Gemini call throws (rate limit, bad key, network blip), `judgeRound()`
fails open — everyone passes that round rather than the game breaking.

`aiHistory.js` remembers up to 50 of the AI's past answers per question
(rolling window) so it doesn't repeat itself, and drops the block list once a
category's estimated answer pool is nearly exhausted
(`MIN_FRESH_REMAINING`) so the AI doesn't get stuck with nothing left to say.

### Anti-camping — `playerHistory.js`
Repeating the exact same answer to the exact same question is tracked per
player. On the 2nd repeat, a trap arms with a random fire point between the
3rd and 5th use. Once armed and fired, `index.js`'s round resolution forces
the AI's answer to match the camper's: if every currently-trapped player is
camping the *same* answer, that answer is forced (all of them get caught);
if different campers are camping *different* answers, one group is chosen at
random to be caught this round — the others stay armed for a future round.

---

## Speed Round — `speedGame.js` + `speedQuestions.js` + `speedGameState.js`

A 1:1 port of bradyyourtutor's "Last Person Standing" format. No AI judging
at all — just exact-match trivia (`checkAnswer()` in `speedQuestions.js`
against a curated `acceptedAnswers` list of the canonical answer plus common
typos/variants).

Organized into **phases**, not simple rounds: within a phase, every
"eligible" player (hasn't won a round yet this phase) can answer each
question; the first correct answer (by arrival order) wins the round, and
that player becomes "safe" for the rest of the phase. A phase ends once only
one eligible player remains — they're eliminated, and a new phase begins
with the survivors.

## Image Round — `imageGame.js` + `imageSets.js` + `imageGameState.js`

A points race, not elimination: everyone can answer every round (no lobby
lock-in), first correct guess scores a point, first to a set's `winScore`
wins outright. Ships one set today — `flags` ("Country Flags"), images
served straight from this repo's own `Country Flags/` folder via
raw.githubusercontent.com. `imageSets.js`'s header comment explains how to
add a new set (a new folder of images + a new entry in the `SETS` registry +
a slash command choice in `index.js`); the registry already has commented-out
placeholders (`landmarks`, `people`) as a hint of the intended pattern.

---

## Shared infrastructure

- **`leaderboard.js`** — one win-count file (`data/leaderboard.json`) shared
  by all three modes. A win only counts toward the leaderboard if
  `peakPlayerCount >= 2` for that game — solo runs don't score a point.
- **One game per channel** — every `/startX` command checks all three modes'
  state before creating a new game, and `messageCreate` dispatches to
  whichever one is active (image → speed → regular priority).
- **Data persistence** — `data/leaderboard.json` (all three modes),
  `data/ai_history.json`, `data/player_history.json`, and
  `data/question_history.json` (regular game only). Plain read-modify-write
  JSON, no locking. Fine for a single process; a real database would be
  needed to run more than one bot instance against the same data safely.

## Commands

| Command | Mode | Notes |
|---|---|---|
| `/startgame [players]` | Regular | Optional player cap — round 1 ends as soon as that many have answered |
| `/endgame` | Regular | |
| `/startspeed [players]` | Speed | |
| `/endspeed` | Speed | |
| `/startimage [category] [points]` | Image | `category` = set id (currently only `flags`); `points` overrides the set's default `winScore` |
| `/endimage` | Image | |
| `/leaderboard` | Shared | Top wins across all three modes |
| `/setmodel [model]` | Shared | Switch the Gemini model at runtime; restricted to `DISCORD_OWNER_ID` if that env var is set |
| `/help` | Shared | In-Discord rules reference |

## Where to make common changes

| I want to... | Look at |
|---|---|
| Add/edit regular-game questions | `questions.js` — shape documented in README.md's "Adding More Questions" |
| Re-score difficulty after adding questions | `node scripts/assign-difficulty.js` |
| Add speed-round trivia | `speedQuestions.js` |
| Add a new image set | `imageSets.js`'s `SETS` registry, then wire the choice into `/startimage` in `index.js` |
| Change round/lobby/result timings | The `*_MS` constants at the top of `gameState.js` / `speedGameState.js` / `imageGameState.js` |
| Change how many questions a category deals per visit | `QUESTIONS_PER_CATEGORY_VISIT` in `questions.js` (currently 10-15) |
| Change the AI judge's prompt or available model list | `gemini.js` |
