# Hebrew (he) glossary

The agreed term list for Hebrew. Why each term was chosen, and who chose it, is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Hebrew | Use (he/en) | Notes |
|---------|--------|-------------|-------|
| programming / coding | **תכנות** | he | Never `קידוד`, which means character or data encoding and is a false friend. |
| developer / programmer | מתכנת | he | The learner-facing sense, "a person who programs". `מפתח` is the industry job title; keep it for copy that is really about the profession. |
| bug | באג | he | Not the Academy's `תקל`, which is dead in real usage. |

## Localize (use the Hebrew term)

These are terms where the Hebrew is used in prose, so the "Use (he/en)" column is `he` throughout. Split by theme; every table below follows the same columns.

### Values & data types

| English | Hebrew | Use (he/en) | Notes |
|---------|--------|-------------|-------|
| string | מחרוזת | he | Never swap with `שרשרת` (the chain metaphor). See guide § "The שרשרת / מחרוזת collision". |
| character (text) | תו | he | A single text character. Keep distinct from `דמות` (the on-screen game figure). |
| Boolean | בוליאני | he | Not `טיפוס לוגי`. The literal keywords `true`/`false` stay English inside code. |
| float / decimal | עשרוני | he | Follows the current Python curriculum. Not `ממשי`, which is the older schoolbook term. |
| index | אינדקס | he | Not `מציין` and not the Academy's `ציון`, which is unused in practice. |
| object | אובייקט | he | Use `אובייקט` in prose. `עצם` survives only inside the fixed phrase `תכנות מונחה־עצמים`. |

### Functions & control flow

| English | Hebrew | Use (he/en) | Notes |
|---------|--------|-------------|-------|
| function | פונקציה | he | The *keyword* `function` in code stays English; the concept in prose is `פונקציה`. Not `פעולה`, which is the school-textbook term. |
| statement (executable) | הוראה | he | The imperative sense: a line of code that does something and gets executed. Keep distinct from `פסוק` below. |
| statement (logical claim) | פסוק | he | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. |
| assignment | השמה | he | Use `השמה` consistently, not the near-synonym `הצבה`. |
| to declare / declaration | הצהרה | he | Use `הצהרה` for every declared thing, rather than alternating with `הכרזה`. |
| built-in | מובנה | he | Not `מוכן`, and not the spoken `בילט־אין`. |
| brackets (the two after a function name) | סוגריים | he | Plain `סוגריים` for the `()` pair written after a function name. Name the specific type only when disambiguating; see the Brackets table. |

### Loops, state & program flow

| English | Hebrew | Use (he/en) | Notes |
|---------|--------|-------------|-------|
| interpreter | מפרש | he | The program that runs the code. Because unvocalised `מפרש` is also "sail" and "commentator", give following sentences a clearer subject rather than repeating bare `המפרש`. Never `מתרגם`, `מתורגמן` or `מפענח`. |
| exception | חריגה | he | The catchable runtime event. Keep distinct from `שגיאה` (error). |
| iteration | איטרציה | he | Not the Academy's `חִזְרוּר`, which is dead in practice. |
| scope | תחום | he | Plain `תחום`, not the more formal `תחום הכרזה`. |
| debugging | דיבוג | he | What Israeli developers actually say. `ניפוי שגיאות` is the formal alternative; do not mix the two in one document. |

### Tooling & engineering

| English | Hebrew | Use (he/en) | Notes |
|---------|--------|-------------|-------|
| framework | פריימוורק | he | Not `שלד תוכנה`, which is rarely said aloud. |
| component | קומפוננטה | he | The front-end sense. Not the generic `רכיב`. |

### Platform & curriculum vocabulary

| English | Hebrew | Use (he/en) | Notes |
|---------|--------|-------------|-------|
| feature (platform capability) | יכולת | he | Never `תכונה`, which is the Hebrew CS term for an object property and collides. `פיצ'ר` is too informal for lesson prose. |
| level | רמה | he | Reserve `שלב` for a step within something. |
| concept library | מאגר המושגים | he | Not `ספריית המושגים`: `ספרייה` is the word for a code library and collides. |
| plan (subscription tier) | מסלול מנוי | he | Always qualified. Bare `תוכנית` means a computer program and bare `מסלול` is the curriculum track. |
| streak | רצף | he | No relation to `שרשרת` or `מחרוזת`. |
| dashboard | לוח בקרה | he | Not `לוח מחוונים`, which reads as a car dashboard. |
| badge | תג | he | Keep distinct from `תגית` (a tag, including an HTML tag). |
| canvas (graphics exercises) | משטח ציור | he | The drawing surface. `קנבס` has no settled spelling; do not use it in prose. |
| hue | גוון | he | The colour-wheel position. Also the base for "shade"; see below. |
| shade (of a colour) | (no fixed noun) | he | Hebrew has no separate noun for "shade" distinct from hue. Render it as `גוון` plus an adjective (`גוון בהיר יותר`). Never `צל`, which means a literal shadow. |
| lightness | בהירות | he | Hebrew uses one word for lightness and brightness, so qualify it: `בהירות הצבע` versus `בהירות המסך`. Never the Academy's `בהיקות`. |
| slider (UI control) | מחוון | he | Not `סליידר`, which in practice means an image carousel. |
| frame (animation) | פריים | he | Not `מסגרת`, which means a picture border and is a real trap in a drawing course. |

## Keep in English

These stay in English in Hebrew prose. Where the source an explanation in the Englishs one of them, use the Hebrew in the gloss column; with no an explanation in the English, use the English bare, with no gloss.

| Term | Hebrew word, where the English explains the term | Notes |
|------|-------------------------------|-------|
| API | `ממשק תכנות יישומים` | Explain the concept where it is defined, not just the acronym. Keep the Latin acronym in running prose after that. |
| CLI (the concept) | `ממשק שורת פקודה` | May shorten to `שורת הפקודה` after. |
| AI | `בינה מלאכותית` | Use "AI" in prose and marketing copy. |
| LLM | explain in Hebrew | Latin script dominates in real usage. |
| JavaScript, Python, React | (no gloss) | Product and language names. |
| Debug, Test, Code, Bug, Frontend, Backend | (no gloss) | As UI labels and code tokens only. The ordinary noun "bug" in prose is `באג`; see "Core decisions". |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Programming keywords (`function`, `if`, `for`, ...) | (none) | Always English, including inside prose. Translate only the surrounding explanation. |

## Brackets

Default to plain **סוגריים**. When a specific bracket type matters, name it and show the glyph in a code span immediately after.

| Glyph | Hebrew | Notes |
|-------|--------|-------|
| `()` | סוגריים · סוגריים עגולים | Plain `סוגריים` by default; add `עגולים` plus the glyph only when disambiguating. |
| `[]` | סוגריים מרובעים | |
| `{}` | סוגריים מסולסלים | |
| `<>` | סוגריים משולשים | |

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks Hebrew has agreed any row in this section, and no rendering has been
proposed.** These are the nouns Exercism's own product vocabulary is built from, and they are
the rows we most need a native speaker to fill in, because each one appears on hundreds of
pages. The target column is deliberately empty: an agent's invented rendering sitting in a
glossary reads as an agreed one, and these terms are too visible for that. Fill them in on the
pinned glossary thread, and a row moves into an agreed section once a native speaker has
settled it, recorded in `glossary-notes.md`. `global/terms.md` describes what each term means
on Exercism.

| English | Proposed Hebrew | Use (he/en) | Notes |
|---------|------------------|------------------|-------|
| track |  |  |  |
| to join (a track) |  |  |  |
| exercise |  |  |  |
| concept exercise / learning exercise |  |  |  |
| practice exercise |  |  |  |
| syllabus |  |  |  |
| learning mode / practice mode |  |  |  |
| locked / unlocked / available / in progress / completed |  |  |  |
| to unlock |  |  |  |
| solution |  |  |  |
| to submit |  |  |  |
| to publish (a solution) / published |  |  |  |
| community solutions |  |  |  |
| to star / stars |  |  |  |
| mentor / mentoring |  |  |  |
| student (the person being mentored) |  |  |  |
| mentoring request |  |  |  |
| mentoring session / discussion |  |  |  |
| code review |  |  |  |
| mentoring queue |  |  |  |
| testimonial (left for a mentor) |  |  |  |
| supermentor |  |  |  |
| automated feedback |  |  |  |
| analyzer |  |  |  |
| representer |  |  |  |
| representation |  |  |  |
| test runner |  |  |  |
| tests passed / tests failed |  |  |  |
| online editor / the editor |  |  |  |
| the Exercism CLI |  |  |  |
| reputation |  |  |  |
| trophy |  |  |  |
| journey (the user's history page) |  |  |  |
| contributor / contributing |  |  |  |
| maintainer |  |  |  |
| Insiders |  |  |  |
| donation / to donate / donor |  |  |  |
| perks |  |  |  |
| partner |  |  |  |
| flair (marker beside a username) |  |  |  |
| Dig Deeper (tab) |  |  |  |
| approach (to an exercise) |  |  |  |
| article (on an exercise) |  |  |  |
| deep dive (video) |  |  |  |
| challenge (community event) |  |  |  |
| cohort |  |  |  |
| community |  |  |  |
| notification |  |  |  |
| favorites |  |  |  |
| difficulty: easy / medium / hard |  |  |  |
| handle (username) |  |  |  |
| automation (feedback on representations) |  |  |  |
