# Taiwan Traditional Chinese (zh-TW) glossary notes

## 2026-08-01: zh-TW guide pruned; rationale moved here

**Decided by:** agent (guide-pruning pass). No term rendering changed, and nothing cherylli
settled was touched: the 「」/『』 quotation glyphs, 小傢伙, 翻譯員, the one-word board and the
Gemini engine decision all stand. Everything cut was rationale, research provenance, or
content inherited unchanged from `../zh/guide.md`.

Rationale and provenance removed from `guide.md`, kept for the record:

- **Audience.** The Taiwan ed-tech market is shaped by resources such as 六角學院 (Hex
  School), ALPHA Camp (tw.alphacamp.co) and NTU extension-programme materials: an
  approachable, demystifying tone. Scratch's zh-TW localization (beyond-coding.org.tw,
  oxxostudio.tw, junyiacademy.org) confirms concrete, playful metaphor is an established
  convention in Chinese-language programming education for beginners (e.g. block → 積木,
  "building blocks"), which fits Jiki's metaphor-driven teaching well. That research is what
  the freer particle calibration and the metaphor renderings rest on.
- **Sourcing.** Duolingo's zh-TW app UI is not a trustworthy reference for this locale:
  native Taiwanese users report it contains Simplified-character contamination and
  Mainland-register phrasing, even though a consumer learning product would normally be a
  reasonable register source. The instruction not to use it stays in the guide; the reason is
  here.
- **Particles.** Light, encouraging sentence-final particles are a real, live convention in
  Taiwan tutorial writing, not decoration, which is why this locale leans into them more than
  `zh-CN` does.
- **Quotation marks.** 「」/『』 is the standard Taiwan typesetting convention and contrasts
  with Mainland's curly quotes. It is already in use in published zh-TW content; if a native
  speaker objects, change it in the guide once, through `/action-forum-post`.
- **`<define>` shapes.** The two worked shapes (函式（英語：_functions_）and `move`（移動）)
  are settled by published zh-TW content rather than re-decided per page.

Duplication removed (behaviour unaffected, the same instruction still exists elsewhere):

- The **"feature" vs "function"** style note (功能 vs 函式) is a term mapping. `zh-TW` had no
  `feature` row, so one was added to `glossary.md` (功能, Platform & curriculum vocabulary)
  carrying the "never use 函式 for a product feature" instruction, and the guide note was cut.
- The **board-is-one-object-one-word** instruction (including "never coin a second word for
  the instruction-board sense, never use 板子 or a word that already means array") moved
  verbatim into `glossary.md` § Jiki physical metaphors, alongside the metaphor rows it
  governs, matching how `zh-CN`'s glossary already carries it. This is cherylli-adjacent
  owner-settled content and was moved, not reworded.
- The **Jiki physical metaphors (zh-TW specifics)** bullets restated glyphs that are already
  glossary rows (鏈子 and its 鎖鏈 exclusion, 機器, 架子/置物架). Cut from the guide; the
  glossary rows are unchanged.
- The **Mechanics** paragraph (Arabic numerals, CJK/Latin spacing, full-width punctuation and
  parentheses) said only that those rules are inherited unchanged from `../zh/guide.md`,
  which inheritance already does.
- The pitfalls "break long relative-clause chains" and "do not default to 您" are stated in
  `../zh/guide.md` § Writing norms and this guide's § Register respectively.
## 2026-08-01: Draw and rock-paper-scissors catalog drafting (unconfirmed)

**Decided by:** agent, in the Stage 2 batch that translated concepts `variables`/`if`/
`repeat` and exercises `rock-paper-scissors`/`rainbow` (instruction prose via the confirmed
gemini engine, which proposes no deltas; these rows come from the subagent-translated
message catalogs). **Status: unconfirmed drafts**, proposals only, not written to any
glossary.

| English | Proposed target | Rationale | Confidence |
|---------|-----------------|-----------|------------|
| canvas (drawing surface) | 畫布 | Recurs across the whole draw family; 畫板/畫面 also defensible, family consistency matters. | medium |
| hex color / hex code | 十六進位色碼 | Competing live forms in Taiwan usage (十六進位顏色, 色碼, HEX 色碼); every draw exercise hits it. | medium |
| Drawing Shapes (function category label) | 繪製圖形 | `functions.*.category` labels must render identically across every draw-family exercise, each translated by its own worker; 繪製圖形/畫圖形/圖形 would otherwise drift. "Colors" → 顏色 likely uncontested. | medium |

A fourth proposal, keeping English "vs" (CJK-spaced) for `X vs Y` matchup names, contains no
script-variant characters and so is a family-file candidate; it is logged in
`../zh/glossary-notes.md`.

## 2026-08-01: Confirmed translation engine — Gemini Pro 3.1

**Decided by:** native speaker (cherylli), the forum ("[Traditional Chinese Review]
Alternative translation model"), comparing three versions of concept/using-functions: the
currently published version, a first alternative, and a second alternative. cherylli judged
the second alternative more natural overall. iHiD confirmed (post #5) that version is
Gemini Pro 3.1. `zh-TW`'s `translation_engine` is now set to `gemini` (`gemini-pro-3.1`) in
`tracking.json`.

## 2026-08-01: `character` (mental-model "little person") is `小傢伙`, separate from the maze figure

**Decided by:** native speaker (cherylli), the forum posts #2/#4/#5 and topic 792 post
#3.
**Terms affected:** `character` (the "little man inside the computer" mental-model image on
the using-functions page).

小人 was in use with no glossary row backing it, flagged as reading like "a petty/mean
person", not a friendly figure. First settled on 角色 for both this sense and the maze
figure (since zh-CN's published content used 角色 for both, and it's character-identical
across scripts — see `../zh/glossary.md`), moved to the family file. cherylli then
reconsidered specifically for this sense (topic 792 post 3): 角色 reads as a game/screen
character, which fits the maze but is a slightly wrong register for the more general,
imagined "little person" of the mental model; she prefers 小傢伙 (a more general,
affectionate word, like "little guy") here. Split back out: this locale's own row now
covers the mental-model sense only; the maze/on-screen sense stays 角色 in the family file.

## 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`.
**Terms affected:** `interpreter`, `board / whiteboard`, and, as a principle, every row.

Three decisions came out of that pass that bind Taiwan Traditional Chinese:

- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("your interpreter is Jiki... It's his job to
  interpret the code that you write"), so the word has to be able to name a character.
  **This changed the published rendering**: `interpreter` moves from 直譯器 to **翻譯員**.
  直譯器 takes the 器 suffix, which marks a device, and a device word cannot name a
  character the reader is meeting as a friend. Two alternatives were considered and
  rejected: **直譯員** keeps continuity with the CS term (直譯器) learners meet later in
  more technical contexts, but it is a coinage, not a word anyone actually uses; **口譯員**
  is the ordinary word for a human interpreter, but specifically a *speech* interpreter,
  the wrong domain for code.
- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. This locale renders both with the shared
  family term 白板 (see `../zh/glossary.md`), so no separate zh-TW rendering was needed.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where Taiwan developer writing genuinely uses the English word, the
  English word is the ordinary word and the right choice (e.g. `bug`); where it does not,
  the Chinese word is (e.g. 除錯 for the activity of debugging). The test is what the
  reader already says, never where the word came from.

## 2026-07-30: Agent drafting for the using-functions concept page (unconfirmed)

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

Rows added or corrected for the using-functions concept page, none changing an existing
human decision:

- Terms the page needed that had not been written down: `instruction (given to Jiki)`,
  `mental model`, `(programming) language`, `brackets (the two after a function name)`,
  `input (to a function)`, and the metaphor rows `machine`, `crank`, `shelves`,
  `warehouse`.
- **The `course` / `lesson` collision was resolved.** `lesson` is corrected from 課程 to
  **單元**, which frees 課程 to mean `course` (the whole Jiki course the learner is
  taking), matching Taiwan online-course platform usage for a single teaching unit.
- **The "Keep in English" leftovers were resolved.** `Code`, `Bug`, `Frontend`, `Backend`
  no longer sit blanket-exempted in English: that contradicted both the Chinese family's
  "fully localize" loanword policy (`../zh/guide.md` § Loanword policy) and this guide's
  own worked example. `code` (the prose noun) is now **程式碼**; `frontend` / `backend`
  are **前端** / **後端**; `debugging` (the activity) is **除錯**. `bug` stays English: it
  is the genuinely ordinary word in Taiwan developer prose, where "bug" is said inside
  Chinese sentences rather than 臭蟲 or 程式錯誤. The capitalized tokens `Code`, `Debug`,
  `Test` remain English only as UI labels or technical tokens, kept distinct from the
  now-localized prose words.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date. A term whose reasoning is
already covered by a dated entry above (`interpreter`, `board / whiteboard`, `course`,
`lesson`, `code`, `frontend / backend`, `debugging`, `bug`) is not repeated here.

### Core decisions

| Term | Why |
|------|-----|
| streak | The zh-TW Duolingo app was found to contain Simplified-character contamination and Mainland-register phrasing, so it was not used as a source; 連續學習天數 is a plain descriptive term instead. |

### Values & data types

| Term | Why |
|------|-----|
| index | Taiwan usage does not distinguish a separate "position" term the way `zh-CN`'s 下标 does. |

### Functions & control flow

| Term | Why |
|------|-----|
| to return (a value) | Deliberately different from `zh-CN`'s 返回. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| mental model | The picture-in-your-head framing ("a little man living in the computer"). |
| (programming) language | Deliberately different from `zh-CN`'s 编程语言. |
| variable | Deliberately different from `zh-CN`'s 变量. |
| iteration | Distinct from `zh-CN`'s 迭代; not a script variant, a genuinely different word. |
| loop | Deliberately different from `zh-CN`'s 循环. |
| scope | `zh-CN` uses only 作用域 as its single term, so this term is kept separate per locale rather than merged even though the primary word matches. |
| object | Deliberately different from `zh-CN`'s 对象. |
| class | Deliberately different from `zh-CN`'s 类. |

### Tooling & engineering

| Term | Why |
|------|-----|
| module | Deliberately different from `zh-CN`'s 模块. |
| algorithm | Deliberately different from `zh-CN`'s 算法. |

### Jiki physical metaphors

| Term | Why |
|------|-----|
| warehouse | Plain, concrete word. |
| crank | 手把 is the ordinary word for a handle; 曲柄 is engineering jargon. |
