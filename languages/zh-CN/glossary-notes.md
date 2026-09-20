# Mainland Simplified Chinese (zh-CN) glossary notes

## 2026-08-06: Translation engine switched to `deepseek`

**Decided by:** taylorren, a native speaker, on the "Alternative translation model"
comparison thread. **Status:** settled.
**Terms affected:** none (engine choice, not a glossary or guide change).
**Files affected:** none; `tracking.json` already carried the block, this entry records the
decision behind it.

Jeremy posted an alternative-model rendering of a Mainland Simplified Chinese page alongside
the published one and asked which read better. taylorren answered "I'd say I like the 'new'
translation better", and the language was switched to it.

Mainland Simplified Chinese therefore runs on `deepseek` rather than the `fable` default.
This was a genuine switch, made on a native speaker's verdict, not on our own judgement or
on cost. It is recorded here rather than in the shared `zh` family notes because the engine
is set per locale in `tracking.json`, not per family.

## 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout), run as a single fable
worker per `orchestrator.md`'s one-worker-per-scope rule. Logged here for review and **not**
written to `glossary.md`.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| Premium (product tier) | kept English | Recurs app-wide ("Premium 会员", "升级到 Premium"); worth pinning as a product name. | medium |
| plan (subscription) | 方案 | Chosen over 套餐/计划. | medium |
| Dashboard | 主页 | 仪表盘 judged too technical for beginners. | medium |
| Deep Dive (walkthrough video) | 深度解析 | Feature name across dashboard, hints panel, modals. | medium |
| Ask Jiki (feature/tab) | 问 Jiki | Header variant: "卡住了？问问 Jiki 吧！". | medium |
| scrubber (execution timeline) | 时间轴 | Picked over 进度条 to avoid colliding with video/lesson progress bars. | medium |
| bonus scenario | 附加场景 | Pairs with existing 场景; bare "Bonus" badge → 附加. | medium |
| unlock / locked (gamified) | 解锁 / 未解锁 | 锁定 was the alternative. | medium |
| Learn to Build (product area) | 学习构建 | Named section in nav and Premium feature lists; must stay identical everywhere. | medium |
| streak (verb phrases) | 连续学习天数 | Reuses the existing glossary noun; the noStreak/oneDayStreak phrasing (开启/累积你的连续学习天数) wants reviewer confirmation. | low |

## 2026-08-01: zh-CN guide pruned; rationale moved here

**Decided by:** agent (guide-pruning pass). No term rendering changed, and no rule was lost:
everything cut was either rationale, research provenance, or content the locale guide
already inherits unchanged from `../zh/guide.md` or restates from `glossary.md`.

Rationale and provenance removed from `guide.md`, kept for the record:

- **Audience.** The Mainland tech-education market is shaped by long-running,
  human-authored, pre-LLM-era resources such as 廖雪峰的官方网站 and 菜鸟教程 (runoob.com):
  short-sentence, problem-first, no-nonsense prose. That is the research behind this
  locale's plainer register and behind the sparing use of sentence-final particles; the
  behavioural instructions themselves are in `../zh/guide.md` § Writing norms and this
  guide's § Register.
- **Quotation marks.** The curly “ ” convention follows the GB/T 15834—2011 national
  punctuation standard and is standard in Mainland technical writing. It contrasts with
  Taiwan's corner-bracket convention.
- **您.** The full rationale for 你-throughout is in `../zh/glossary-notes.md`.

Duplication removed (behaviour unaffected, the same instruction still exists elsewhere):

- The **"feature" vs "function"** style note (功能 vs 函数) is a term mapping and now lives
  only in `glossary.md`'s `feature (platform capability)` row.
- The **Jiki physical metaphors (zh-CN specifics)** section restated glyphs that are already
  glossary rows (链/链条, 机器, 货架, 仓库, 摇柄) and repeated the board/whiteboard
  one-word-one-object instruction that `glossary.md` § Jiki physical metaphors already
  states in full. Cut from the guide; the glossary is unchanged.
- The pitfall "break long English relative-clause chains into short Chinese sentences" is
  inherited verbatim from `../zh/guide.md` § Writing norms, so the locale copy was cut. The
  的-chain depth pitfall and the dropped-subject pitfall are zh-CN-only and were kept.

## 2026-08-01: `statement (logical claim)` is `判定`, not `断言`

**Decided by:** native speaker taylorren, on the forum, post #3. **Terms affected:** `statement (logical claim)`.

Follow-up to the entry below, which left this one an open question between 判定/判断 and
命题. taylorren recommends 判定/判断 (interchangeable) and explicitly rules out 命题: a
programming condition like `if (a > b)` is immediately checkable true/false, whereas 命题
implies a fuller claim or conjecture whose truth isn't yet known (his example: "every even
number greater than 4 is the sum of two primes"). Picked 判定 as the single settled row
value since he said the two were interchangeable.

## 2026-08-01: Native-speaker review of the Mainland terms

**Decided by:** native speaker taylorren, on the forum ("SC translations discussion and
general view for consideration"), post 1. Applied by agent. Every row touched below was an
unconfirmed agent draft before this entry.
**Terms affected:** `if statement`, `modulo / remainder operator`, `backwards compatibility`,
`stateless`, `brackets`, `streak`, and, as open questions, `statement (logical claim)` and
`curriculum`.

- **`if statement` secondary rendering moved from 条件语句 to 分支语句.** 分支 ("branch") is the
  word Chinese programming books use for this construct, and 条件语句 blurred the row into
  `condition` (条件), which is a separate glossary term. The primary `if` 语句 is unchanged.
- **`modulo / remainder operator` moved from 取模 to 求模.** Native-speaker preference; it also
  makes the row internally consistent with its own secondary 求余. 取模 is also idiomatic, so
  this is a preference call rather than a correction of an error.
- **`backwards compatibility` moved from 向后兼容 to 向下兼容.** 向后 is ambiguous in Chinese: it
  can read as "towards the future" (cf. 后来, "later"), which inverts the intended meaning of
  compatibility with *earlier* versions. 向下兼容 does not carry that reading.
- **`stateless` added as its own row (无状态的).** The reviewer asked that the counterpart to
  有状态的 (stateful) be documented too. Added as a new row rather than folded into the
  `state / stateful` row, so no existing row's English term changes.
- **`brackets` Notes extended with the full set of Mainland bracket names**: 小括号/圆括号 for
  `()`, 中括号/方括号 for `[]`, 大括号/花括号 for `{}`. The rendering 括号 itself is unchanged;
  this only gives a translator the names to use when a page actually names the other pairs.
- **`streak` (连续学习天数) confirmed by a native speaker.** The reviewer floated 连续打卡天数
  ("consecutive clock-in days") as sounding more in-tune, then explicitly said they are happy
  with the current 连续学习天数. The rendering does not move, but the row is now a confirmed
  decision rather than an unconfirmed draft, and it supersedes the "not Duolingo-derived" note
  in the rationale section below as the reason it stands.
- **`statement (logical claim)` (断言) left unchanged, pending a follow-up question.** The
  reviewer said 断言 is "OK but maybe too formal" for very young users and offered 判定/判断
  without choosing between them. Two un-chosen alternatives is not a decision, and there is a
  third candidate (命题, the standard word for a logical proposition), so the row stands until
  the reviewer picks one. Raise it on the forum.
- **`curriculum` (课程体系) left unchanged; the proposed 课程 cannot be applied.** The reviewer
  suggested shortening 课程体系 to 课程, but 课程 is already this glossary's term for `course`
  (the whole Jiki course), a collision the 2026-07-30 entry below deliberately resolved by
  moving `lesson` to 课. Taking 课程 for `curriculum` would recreate exactly that clash. If
  课程体系 reads too heavy, a different short form is needed; raise it on the forum.

## 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, `board / whiteboard`, and, as a principle, every row.

Three decisions came out of that pass that bind Mainland Simplified Chinese:

- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. This is the one decision that
  changed already-published Chinese text: the row moved from **解释器 to 翻译**. 解释器 is
  wrong for this sense because the 器 suffix marks a device, not a person, and cannot name
  a character; 翻译 is the ordinary Mainland word for the person who translates or
  interprets, and works as both noun and verb, matching the source's "his job to
  interpret". **Open question, not yet resolved:** whether calling Jiki 翻译 will confuse
  learners who later meet 解释器 as the real technical term for interpreter software, since
  the two words now name different things in the same course. Left for native-speaker
  feedback.
- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. Rendered as **白板** for both uses, the
  ordinary word for a writing board in a room, with no collision with 数组 (array). This
  term lives in the shared family file (`../zh/glossary.md`) because it is
  character-identical in both scripts; recorded here too because the decision binds this
  locale's usage.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from. This
  is the principle behind keeping `bug` in English below.

## 2026-07-30: Agent drafting for the using-functions concept page

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

- Rows added for the concept page: `mental model`, `instruction (given to Jiki)`,
  `(programming) language`, `brackets (the two after a function name)`, `input (to a
  function)`, and the metaphor rows `machine`, `crank`, `shelves`, `warehouse`.
- **`crank` moved from 手柄 to 摇柄.** 手柄 reads first as a game controller in Mainland
  usage, which is the wrong image for the crank Jiki turns to power a machine up; 摇柄 does
  not carry that association.
- **The `course` / `lesson` collision was resolved by correcting `lesson`.** Both had been
  rendered with 课程. `lesson` is now 课 (第 3 课, 一节课, counted with 节), freeing 课程 to
  be the one term for `course` (the whole Jiki course, counted with 门).
- **The "Keep in English" row for `Code`/`Bug`/`Frontend`/`Backend` was narrowed to UI
  labels and tokens only.** The guide's own examples write 代码 and 前端 in prose, so
  keeping the whole set of everyday words in English contradicted the guide it sat next to.
  `code`, `frontend`, and `backend` are now translated in prose (代码, 前端, 后端); only the
  interface labels `Code`/`Debug`/`Test`/`Bug` and code tokens stay English.
- **`bug` was deliberately kept English in prose**, lower-case, as the genuinely ordinary
  word in Mainland developer prose ("修 bug"); 缺陷 reads stiff and bureaucratic for this
  audience. The UI label `Bug` stays capitalized.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date. A term whose reasoning is
already covered by a dated entry above (`interpreter`, `board / whiteboard`, `crank`,
`course`, `lesson`, `bug`, the Keep in English narrowing) is not repeated here.

### Core decisions

| Term | Why |
|------|-----|
| code (the noun, in prose) | 代码 is the ordinary Mainland word for code in prose. |
| streak | Deliberately not Duolingo-derived: the Duolingo zh-CN string could not be confirmed live during research, so a plain descriptive term was used instead. |
| pitfall | 坑 fits Jiki's warm, informal register; 陷阱 is the fallback for a genuinely formal register. |
| frontend / backend | 前端 and 后端 are the ordinary Mainland words for these concepts. |

### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary Mainland words, so they stand alone with no gloss. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| instruction (given to Jiki) | Everyday word, not a formal or legal register. |
| mental model | 思维模型 is plainer and more transparent for a general reader than the academic 心智模型. |

### Tooling & engineering

| Term | Why |
|------|-----|
| edge case | 边界情况 is the more established rendering in Mainland technical writing than 边缘情况. |

### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| level | The gamified sense, 关卡, fits Jiki's tone. |

### Jiki physical metaphors

| Term | Why |
|------|-----|
| chain | 链 / 链条 is the root of 链表 ("linked list") in standard Chinese data-structures textbooks (e.g. 严蔚敏《数据结构》): an unusually well-grounded, native metaphor, not an import. |
| warehouse | 仓库 is the ordinary word for a warehouse, so it stays; the collision this creates with git "repository" is why that sense is always written in full as 代码仓库. |
