# Vietnamese (vi) glossary notes

## 2026-09-20: Adapted for Exercism (agent; nothing here is a native speaker's decision)

This glossary was forked from Jiki's Vietnamese glossary when Exercism's translator repo was
created. Exercism and Jiki are separate products, and this glossary is Exercism's from here
on. Everything that was about Jiki's own product (its courses, its exercise stories, its
characters and physical metaphors) went with the fork; every decision about the Vietnamese
language itself was kept, including the ones a native speaker made. Where a native speaker had
settled one of the removed terms, the decision is recorded below as retired rather than
deleted.

**Added: `Exercism product vocabulary: PROPOSED, NOT YET AGREED`.** The English terms the
product's own nouns are built from, with the target column left empty. Nobody who speaks
Vietnamese has been asked yet, and an agent's invented rendering would read as an agreed one.

### Retired with the fork, with the decision recorded

These rows named things Exercism does not have, so the rows are gone. The renderings are
kept here because the reasoning still stands if any of these words is ever needed again.

- `bootcamp` was kept in English, glossed once as "khóa học lập trình cấp tốc".

## 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout), run as a single fable
worker per `orchestrator.md`'s one-worker-per-scope rule. Logged here for review, not
written to `glossary.md`.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| challenge | thử thách | Must stay distinct from _bài tập_ (exercise). | medium |
| Deep Dive | Phân tích chuyên sâu | Keeping English is a defensible alternative; needs a native-speaker call. | medium |
| dashboard | trang tổng quan | Kept-English "Dashboard" also circulates. | medium |
| scenario (test) | kịch bản | Sets precedent against _tình huống_. | medium |
| hint | gợi ý | Distinct from tip → _mẹo_, which the UI also uses. | medium |
| Learn to Build | Học xây dựng | Branded track name; keeping English is the main alternative. | medium |
| plan (subscription) | gói | Tier names stay English except Basic → _Cơ bản_; worth confirming. | medium |
| scrubber | thanh tua | No established Vietnamese term. | low |
| frame (execution) | khung hình | Collides with the video sense; _bước_ (step) is the fallback. | medium |
| streak | streak (kept) | Already kept in the glossary; UI settled on "bắt đầu / xây streak". | high |

Flags, not glossary rows: two length risks to eyeball in the real UI ("Xem Phân tích chuyên
sâu", "Giải các kịch bản thưởng"). `layout.footer.freeContent.agenticGuides` keeps "agentic
coding" in English inside a Vietnamese sentence, as no agreed term exists.

## 2026-08-01: Guide prune, rationale moved here

**Decided by:** agent, in the cross-language guide-prune pass. Every rule in `guide.md` was
kept; only the reasoning behind those rules moved into this entry, so that the guide (which
is loaded into the prompt for every Vietnamese item) carries instructions and not
justification.

### Audience and register

The guide previously described the Vietnamese audience in detail. That research, not the
rule, is:

- Readers are in Vietnam, learning largely self-taught or through community platforms
  (howkteam, viblo, F8, CodeGym), not a formal classroom.
- Vietnamese tech-education content is peer-to-peer and informal by convention, not
  textbook-dry. Choosing a peer voice over a school-hierarchy voice is itself a signal that
  this isn't a stiff classroom.

The surviving rule in the guide is simply to use the register real Vietnamese programming
communities use with each other.

### Address terms (why each form was chosen or ruled out)

- **"Bạn"** ("friend") is age-neutral and gender-neutral, the standard address in real
  Vietnamese online tutorials, and the correct choice for a mass audience whose age and
  gender the writer cannot know.
- **Kinship-hierarchy address is ruled out** ("em" paired with "thầy"/"cô", or
  "anh"/"chị") because it imposes a teacher-student or older-younger relationship that
  reads school-ish and slightly condescending for a peer-to-peer platform aimed at adults,
  and because "thầy"/"cô" forces a gender choice a single brand voice should not make.
- **First person "mình"**: "tôi" reads cold and formal for this context, and "ta" reads
  self-important.
- **"Chúng ta"** is neutral and inclusive of the reader; "chúng mình" is warmer and also
  inclusive.

### The third-person pronoun for a narrated character (why the alternatives lost)

A narrated character is talked *about* constantly ("it's his job to interpret", "he
can remember things"), so this pronoun recurs on nearly every concept page and had to be
fixed once. **"Cậu ấy"** is a warm, peer-level third person for a young male character,
which is what such a character is. The rejected options:

- **"Nó"** is grammatically available for a non-human, but it flattens the character into a thing or
  a piece of software, exactly the reading the course is built to avoid.
- **"Bạn ấy"** collides with "bạn", the reader's own address, so every sentence mentioning
  both the character and the reader reads ambiguously.
- **"Anh ấy"** imports the older-male kinship framing the guide rules out for the reader,
  and applying it to the character would put him above the reader.

### "bị" / "được"

"Bị" carries a *negative* connotation (something bad happened to X) and "được" a *positive*
one. The guide keeps only the actionable half of this: never use "bị" for a neutral
technical event such as a variable changing.

### Quotation glyphs, unconfirmed draft

**Status: unconfirmed draft.** The guide previously said to "use straight/curly double
quotes", naming two different glyph sets as if they were one choice, while giving ASCII
quotes in the example. Nothing in `global/rules.md` or `global/voice.md` decides between
them, so the guide now specifies **straight ASCII double quotes** (`"like this"`),
consistent with the reason it already gives for rejecting guillemets: `« »` reads as
formal/print, and straight quotes are the online-tutorial default the guide is aiming at.
Guillemets remain ruled out. A native speaker may overturn this.

### Cut as duplication

- The em-dash bullet under "Style notes" restated the house-style rule in
  `global/rules.md` and was removed.
- The instruction not to re-insert "cậu ấy" in every sentence duplicated the grammar rule
  against over-inserting subject pronouns; that grammar rule now names "cậu ấy" directly.

## 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, and, as a principle, every row.

Two decisions from that pass changed Vietnamese renderings, plus a general principle:

- **`interpreter`.** Vietnamese moved from **`trình thông dịch`** to **`thông dịch viên`**: `trình` literally
  means "program", so `trình thông dịch` names software and cannot name a character, while
  `thông dịch viên` is the ordinary word for a person who interprets, keeps the link with
  the verb `thông dịch` already on the page, and stays distinct from the compiler term
  `trình biên dịch`.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

## 2026-07-30: Agent drafting for the concept-page pass, unconfirmed

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

Rows added for the "using functions" concept page:

- `crank (machine crank)` moved from **`tay cầm`** (any handle or grip, as on a game
  controller) to **`tay quay`**, the everyday word for a crank you turn.
- `brackets (the two after a function name)` spelled out as **`dấu ngoặc đơn`**.

One self-contradiction fixed: `Bug` was listed under "Keep in English" as never
translated, while the tooling table rendered it `lỗi`. Both rows now agree: `bug` the prose
noun is `lỗi`, and `Bug` only as a capitalized keyword/technical token (e.g. a UI button
label) stays English.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`interpreter`, `board / whiteboard`, `crank`) is not
repeated here.

### Core decisions

| Term | Why |
|------|-----|
| programming / coding | "Coding" specifically is often rendered "viết code" colloquially in speech. |
| developer | "Dev" is common in speech; "lập trình viên" is the standard written form. |
| streak | English "streak" is dominant even in otherwise-Vietnamese prose (e.g. "giữ streak"). |
| tech / tech industry | "ngành IT" is a common alternative. |
| pitfall | Ordinary Vietnamese phrase. |

### Values & data types

| Term | Why |
|------|-----|
| value, number | Ordinary words. |

### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary words. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| instruction | Everyday word. |
| mental model | The picture-in-your-head framing ("một người tí hon sống trong máy tính"). |
| state / stateful | We standardise on the native term since the course teaches the general concept, not a specific framework. |
| scope | Matches the Hungarian/Japanese pattern of keeping this specific term English; Vietnamese developer prose commonly keeps "scope" too, especially in fixed compounds (block scope, function scope). |

### Tooling & engineering

| Term | Why |
|------|-----|
| debug | This is beginner-facing teaching content, not dev-forum prose. |
| bug | Bare English "bug" is very common colloquially, but we standardise on "lỗi" for the prose noun. |

### Keep in English

| Term | Why |
|------|-----|
| framework | Overwhelmingly kept English in Vietnamese dev/ed-tech content. |
| bootcamp | Overwhelmingly kept English in Vietnamese ed-tech. |
| mentor / mentoring | Overwhelmingly kept English in Vietnamese dev-education content. |
| list (Python data type) | Python-specific Vietnamese material overwhelmingly keeps "list" in English even in otherwise-Vietnamese prose. |

