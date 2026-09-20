# Persian / Farsi (fa) glossary

The agreed term list for Persian. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Localize (use the Persian term)

These are terms where the Persian is used in prose, so the "Use (fa/en)" column is `fa`
throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Persian | Use (fa/en) | Notes |
|---------|---------|-------------|-------|
| Boolean | منطقی | fa | Where a noun is needed, write «مقدار منطقی» / «مقادیر منطقی» (boolean value/values); منطقی is an ordinary Persian word and reads naturally however often it repeats. **بولی may be named once, and only once**, on the page that first introduces the concept, so a learner recognizes the word elsewhere in the Iranian ecosystem; every mention after that is منطقی. **Never pluralize بولی as «بولی‌ها»** on that one mention: it is an adjective and takes no plural marker. Keep «مقادیر منطقی» (boolean values) distinct from «عملگرهای منطقی» (logical operators), which is a different thing. |
| pair (key/value, in a dictionary) | جفت | fa | The key-and-value unit on a dictionary page: «چندین جفت» (several pairs), «هر جفت» (each pair). Never زوج. |
| item / element (of an array) | عنصر | fa | **One word for both.** English's "item" and "element" name the same thing on the arrays material, and Persian uses عنصر for both; **never آیتم**, which is a bare transliteration where an ordinary Persian word exists. Plural عنصرها/عناصر. |

### Functions & control flow

| English | Persian | Use (fa/en) | Notes |
|---------|---------|-------------|-------|
| function | تابع | fa | The *keyword* `function` in code stays English; the concept in prose is تابع. Plural توابع. |
| condition | شرط | fa | «دستور شرطی» (if statement) and «شرط» (condition) are distinct, related terms; do not conflate them. |
| brackets (the two after a function name) | پرانتز | fa | The round-bracket pair written after a function name: "دو پرانتز" (two brackets), "پرانتزها" (the brackets). Persian distinguishes bracket kinds, so پرانتز (round) is the required word here; never کروشه (square) or آکولاد (curly). |

### Loops, state & program flow

| English | Persian | Use (fa/en) | Notes |
|---------|---------|-------------|-------|
| loop | حلقه | fa | **Never use this word for an individual link of the "chain" array metaphor** (see the metaphors table below); the two would collide. |
| repeat loop / for loop (named in prose) | حلقه‌ی Repeat / حلقه‌ی For | fa | Keep the loop-type keyword in English, capitalized, unbackticked, when it qualifies حلقه in running prose. Never حلقه‌ی تکرار. |
| interpreter | مفسر | fa | The program that runs the code. Never مفسر with a program word attached (برنامه‌ی مفسر). The verb is تفسیر کردن. |

### Drawing & colour

| English | Persian | Use (fa/en) | Notes |
|---------|---------|-------------|-------|
| hue (the H of HSL) | فام | fa | **One term everywhere; never رنگ‌مایه.** Applies in prose, hints, check messages and function descriptions alike. Saturation stays اشباع and lightness روشنایی. |
| draw (a shape) | رسم کردن | fa | **Never کشیدن**, which also reads as "pull". Use رسم کنید for an instruction to the reader, رسم می‌کند for a function description, and رسم شد for a past-tense record. کشیدن is still fine in its non-drawing senses. |
| canvas (the drawing surface) | بوم | fa | The surface drawing code paints on. Keep distinct from تخته (a board or whiteboard): they are two different objects and must not share a word. |

### Platform & curriculum vocabulary

| English | Persian | Use (fa/en) | Notes |
|---------|---------|-------------|-------|
| name (of a person, variable, key) | اسم | fa | **Never نام**, in any construction: «به اسم» (called), «با اسم» (with the name), and possessives («اسمم», my name). |
| course | دوره | fa | The whole course the reader is taking ("در این دوره"). Keep distinct from درس (lesson) and برنامه‌ی درسی (curriculum). |
| choice (the thing chosen) | گزینه / انتخاب | fa | گزینه is an **option offered from a fixed set** («یکی از سه گزینه‌ی معتبر»). A **person's** choice, the thing they actually picked, is انتخاب: «انتخاب یوکی و آندو», «اگر انتخاب‌ها یکسان باشند». Never «گزینه‌ی یوکی». The verb "to choose" stays انتخاب کردن. |
| syntax | نحوه‌ی نگارش | fa | **Never نحو.** Native speaker's decision; do not revert. The exact wording may vary with context: «نحوه‌ی نگارش», «روش نوشتن» or «شکل نوشتن» are all acceptable, and a sentence often reads better recast around the verb («نحوه‌ی نوشتنش فرق می‌کند») than with a noun. Pick whichever is most natural in the sentence, but نحو is never one of the options. |
| bonus (an exercise's optional extra task) | امتیاز | fa | Standing term across every exercise's bonus task label, e.g. «امتیاز: کوتاه نگه دارید» (Bonus: keep it short). Never امتیازی or جایزه or نمره‌ی اضافه. |
| milestone (a numbered marker on the learning path) | مرحله | fa | **Never «نقطه‌ی عطف»**, which is too academic for this. «مرحله ۱» for "Milestone 1", «به این مرحله برسید» for "reach this milestone". Keep distinct from دستاورد (achievement) and درس (lesson). |

## Keep in English

These stay in English in prose. Where the English itself explains one of these terms, use the
Persian gloss below.

| Term | Persian word, where the English explains the term | Notes |
|------|-------------------------------|-------|
| API | رابط برنامه‌نویسی کاربردی | Not a word a beginner knows; where defined, explain the concept in Persian, not just gloss the acronym. |
| CLI (the concept) | رابط خط فرمان | Explain as "command-line interface" where the source defines it. |
| AI | هوش مصنوعی | Use "AI" (English) in prose/marketing, not هوش مصنوعی throughout. Gloss it in Persian only where the English itself explains the term, never on first use of your own initiative. Flag for confirmation once real content surfaces whether this matches how Iranian users actually talk about AI features. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test, Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Programming keywords (`function`, `if`, `for`, ...) | (none) | Always English, including inside prose. Translate only the surrounding explanation. |

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks Persian has agreed any row in this section, and no rendering has been
proposed.** These are the nouns Exercism's own product vocabulary is built from, and they are
the rows we most need a native speaker to fill in, because each one appears on hundreds of
pages. The target column is deliberately empty: an agent's invented rendering sitting in a
glossary reads as an agreed one, and these terms are too visible for that. Fill them in on the
pinned glossary thread, and a row moves into an agreed section once a native speaker has
settled it, recorded in `glossary-notes.md`. `global/terms.md` describes what each term means
on Exercism.

| English | Proposed Persian | Use (fa/en) | Notes |
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
| iteration (a submitted version of a solution) |  |  |  |
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
| badge |  |  |  |
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
