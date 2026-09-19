# CLAUDE.md

Context for AI coding assistants (Claude Code, or Claude in chat/an IDE)
working in this repository. For a full technical walkthrough see
`ARCHITECTURE.md`; for install/deploy/play instructions see `README.md`.
This file is for fast orientation before making a change, not a complete
reference — go read the file you're about to touch too.

## What this is

A Discord bot: one Node.js process (`node index.js`), `discord.js` v14, no
build step, no test suite, no database. It hosts three independent party-game
modes in the same bot. State is either in-memory (per-channel `Map`s that
don't survive a restart) or flat JSON files under `data/`.

**Naming collision to be aware of:** the game's AI judge is **Google
Gemini** (`gemini.js`, `@google/generative-ai`), not Anthropic/Claude.
Nothing in this codebase calls the Anthropic API. Don't assume "the AI"
anywhere in these files means Claude, and don't add an Anthropic call
thinking you're filling a gap — you're not; that's a deliberate,
Gemini-based system.

## Running it

```bash
npm install
cp .env.example .env   # fill in DISCORD_TOKEN, CLIENT_ID, GEMINI_API_KEY
npm start               # node index.js
```

No test suite exists. For a logic-heavy change (anything touching the
regular game's round/category/phase state machine, or the difficulty
queue), write a throwaway standalone script that `require()`s the relevant
module directly and drives it through many synthetic rounds rather than
editing `index.js` blind — that's how the difficulty queue in `questions.js`
was validated (duplicate questions, ascending-difficulty ordering, and
category-regression checks across several simulated games with randomized
skip votes) before being wired into the live round loop. Delete the script
afterward unless it seems worth keeping.

## Repository shape

- `index.js` — the only Discord client. All slash commands, all three
  modes' `messageCreate`/interaction routing, and the regular game's round
  loop specifically (the other two modes' round loops live in their own
  files).
- `questions.js` / `speedQuestions.js` / `imageSets.js` — one game mode's
  question data + selection logic each. **Not interchangeable** — don't
  reach for one mode's helpers while working on another; they have
  different data shapes and different answer-checking philosophies (AI
  judge vs. exact string match).
- `gameState.js` / `speedGameState.js` / `imageGameState.js` — per-channel
  state classes for each mode, held in in-memory `Map`s keyed by channel id.
- `gemini.js` — the regular game's AI judge only. Speed and image modes
  don't import it at all.
- `leaderboard.js`, `aiHistory.js`, `playerHistory.js` — persistence,
  flat JSON under `data/`.
- `scripts/assign-difficulty.js` — re-runnable codemod that fills in
  `questions.js`'s `difficulty` field (1-10) via a keyword heuristic.

## Conventions worth knowing before you edit

- **`questions.js`'s 961 questions are one JS object literal per line, on
  purpose.** `scripts/assign-difficulty.js` edits that file with per-line
  regex, not a JS parser — reformatting the array (multi-line objects,
  running a formatter over it, etc.) will silently break that script the
  next time someone runs it. Keep new/edited questions on one line, matching
  the existing style.
- **`category` and `difficulty` are different axes** on a regular-game
  question: `category` is answer-pool size (drives collision odds against
  the AI), `difficulty` is topic obscurity (drives whether players can
  answer at all). Don't conflate them — see `ARCHITECTURE.md` for the full
  explanation of how they combine into the per-category question queue.
- **A few exported functions are intentionally unused right now**:
  `getQuestionByCategory` / `getRandomQuestion` / `getNextCategory` /
  `getPrevCategory` / `compareDifficulty` in `questions.js`, `isGibberish`
  in `gemini.js`. They're legacy/utility, kept for potential external
  use — not bugs, don't delete them reflexively, but also don't assume
  anything currently calls them.
- **Gemini decides answer *validity*, never answer *matching*.** Whether a
  player's answer matches the AI's own answer is decided locally, in code
  (`answersMatch()` in `gemini.js`), not by asking the model. This is a
  deliberate reliability choice, not an oversight — keep it that way.
- **Exactly one game mode runs per Discord channel**, enforced by each
  `/startX` command checking the other two modes' state before creating a
  new game, and by `messageCreate` routing to whichever is active
  (image → speed → regular priority). If you add a fourth mode, it needs to
  slot into both of those places.
- **Player/eligible counts only ever go down** in the regular game (after
  round 1) and within a speed-round phase — nobody rejoins mid-game. Logic
  that only seems to handle "narrowing" or "eliminating," with no symmetric
  "add back" case, is not missing something; that case is currently
  unreachable by design.

## Common tasks

- Add regular-game questions → `questions.js`, then optionally
  `node scripts/assign-difficulty.js` to fill in `difficulty` for the new
  ones (it recalculates every question's value from scratch, so hand-tune
  any specific values *after* running it, not before).
- Add speed-round trivia → `speedQuestions.js`.
- Add an image set → `imageSets.js`'s `SETS` registry (see its header
  comment for the exact shape), then wire the new choice into `/startimage`
  in `index.js`.
- Tune round/lobby/result timings → the `*_MS` constants at the top of each
  `*GameState.js` file.
- Tune how many questions a regular-game category deals per visit →
  `QUESTIONS_PER_CATEGORY_VISIT` in `questions.js` (currently 10-15).
