# Arabic (ar) glossary

The agreed term list for Arabic. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Arabic | Use (ar/en) | Notes |
|---------|--------|-------------|-------|
| streak | **المواظبة** | ar | Use the single word; do not render streak with سلسلة. Where the sense needs pinning down, say what is being kept up in the surrounding sentence rather than qualifying the term. Feminine; plural المواظبات. |
| pitfall | **خطأ شائع** | ar | "Common mistake", not "common trap": both words are mandatory as a set phrase. Do not use فخ شائع. Masculine; plural أخطاء شائعة. |
| code | **الكود** | ar | Use `الكود` in prose. The purist `شيفرة`/`رمز` is the wrong direction. The Latin form stays only inside code and for the `Debug`/`Test` tokens. Masculine; plural أكواد. |

## Localize (use the Arabic term)

These are terms where the Arabic is used in prose, so the "Use (ar/en)" column is `ar` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Arabic | Use (ar/en) | Notes |
|---------|--------|-------------|-------|
| number | عدد | ar | `عدد` for the data-type sense (`عدد صحيح`, `عدد عشري`); `رقم` is reserved for "digit/numeral", not this term. Masculine; plural أعداد. |
| true / false | صحيح / خطأ | ar | Not capitalised in prose. The literal code keywords `True`/`False` stay in English inside code, per `global/rules.md`. |
| array / list | مصفوفة | ar | Exercise prose that informally says "list" for the same concept as "array" also uses `مصفوفة`; see `global/terms.md`. Distinct from the "chain" physical metaphor, see below. Array sense: feminine; plural مصفوفات. |
| variable (the concept, in prose) | متغير / المتغيرات | ar | Only the concept explained in prose is translated. A literal variable *name* used in a code sample (e.g. `leftPosition`) is a code identifier and stays in English, per the "Keep in English" table below; the two are not the same thing. |
| index | فهرس | ar | Distinct from `مؤشر` (pointer); do not confuse the two. Masculine; plural فهارس. |
| string | سلسلة نصية | ar | Always the full qualified compound; never shortened to bare `سلسلة`. See guide § "The سلسلة collision." Feminine; plural سلاسل نصية. |
| Boolean | قيمة منطقية | ar | Translated fully; see guide § "Loanword policy." Feminine; plural قيم منطقية. |

### Functions & control flow

| English | Arabic | Use (ar/en) | Notes |
|---------|--------|-------------|-------|
| if statement | جملة شرطية | ar | Feminine; plural جمل شرطية. |
| expression | تعبير | ar | Distinct from "statement" below; an expression evaluates to a value. Masculine; plural تعبيرات. |
| operator | عامل | ar | e.g. `عوامل المقارنة` (comparison operators). Distinct from `معامل` (parameter); do not confuse the two despite the visual similarity. Masculine; plural عوامل. |
| statement (executable) | عبارة | ar | The imperative sense: a line of code that does something and gets executed. Kept distinct from `جملة شرطية` (if statement) and from `تعبير` (expression). |
| statement (logical claim) | قضية | ar | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word; kept distinct from `عبارة` above. |
| function | دالة | ar | The *keyword* `function` in code stays English; the concept in prose is `دالة`. Feminine; plural دوال. |
| method | طريقة | ar | A function that belongs to an object and is called on it (`mentors.includes(...)`). Feminine; plural `طُرق` (not the literary `طَرائق`), so a method returning takes `تُرجع`, exactly like `دالة`. Set by mirina, citing ARABTERM and Arabic Wikipedia; do **not** use `تابع`, which an early website-copy draft proposed. Because `طريقة` also means "way/manner" in everyday Arabic, never use it in that everyday sense in this content: write `أسلوب`, `كيفية` or a rephrase for "the first way to do this", so `طريقة` reads as the technical term throughout. |
| parameter | معامل | ar | The declaration-site name. Distinct from `عامل` (operator); do not confuse the two. Masculine; plural معاملات. |
| argument | وسيط | ar | The call-site value. Masculine; plural وسائط. |
| to return (a value) | يُرجع (المصدر: إرجاع) | ar | The programming action of a function, method or property giving a value back. Not `يعيد`, which in everyday Arabic also reads as "repeats/redoes". `إخراج`/`يُخرج` stays reserved for output/printing to the screen, so that a value handed back to the program and a result shown on screen never blur together for a beginner. Set by mirina. Applies to a property giving a value back (`mentors.length`), not only to a function or method. Conjugate to the implied subject: a `دالة`/`طريقة`/`خاصية` is feminine singular, so a function, method or property returning takes `تُرجع` (future `ستُرجع`, past `أرجعت`), not `يُرجع`. A plural of non-humans (`الدوال`, `الطرق`, `الخصائص`, `المصفوفات`) also takes the feminine singular `تُرجع`, never `يُرجعون`. A dual subject depends on word order: verb-first keeps the singular (`تُرجع الخاصيتان الأبعاد`), subject-first requires the dual verb `تُرجعان` (`الخاصيتان تُرجعان الأبعاد`). `يُرجع` is for a masculine singular subject such as `الكود`. |
| brackets (the two after a function name) | الأقواس الهلالية (الأقواس الهلالَين) | ar | The round pair `()` written after a function name to call it. Arabic has a dual, so use it where the pair is meant: `الأقواس الهلالية`, oblique `الأقواس الهلالَين` ("كتبت `move` ثم الأقواس الهلالَين"). Set by mirina, overriding humam-hamdan's earlier bare `الهلالان`: the generic head-word is `قوس`/`أقواس` for every bracket type, with the shape as a qualifier. See the Brackets table below. |

### Loops, state & program flow

| English | Arabic | Use (ar/en) | Notes |
|---------|--------|-------------|-------|
| interpreter | مفسّر | ar | The program that runs the code. Plural `مفسّرات`; possessive `مفسّرك` (your interpreter). Related verb `يفسّر`. Grammatically masculine. |
| (programming) language | لغة (البرمجة) | ar | Used both for "programming language" (`لغات البرمجة`) and for the "language a computer understands" framing (`بلغة يفهمها الحاسوب`). Never the transliteration. Feminine; plural لغات برمجة. |
| assignment | إسناد | ar | Use `إسناد` consistently, not the near-synonym `تعيين`. Masculine; plural إسنادات. |
| exception | استثناء | ar | Kept distinct from `خطأ` (error); an exception is the specific catchable runtime event. Masculine; plural استثناءات. |
| for loop | `for` حلقة | ar | Keep `for` in backticks (real keyword) + `حلقة`. |
| scope | نطاق | ar | Translated fully. Masculine; plural نطاقات. |
| class | صنف | ar | Standardise on `صنف`; do not use the near-synonym `فئة`. Masculine; plural أصناف. |

### Tooling & engineering

| English | Arabic | Use (ar/en) | Notes |
|---------|--------|-------------|-------|
| CLI (the concept) | واجهة سطر الأوامر | ar | Where the English itself explains the term, use `واجهة سطر الأوامر (command-line interface)`; may shorten to `سطر الأوامر` after. Feminine; plural واجهات سطر الأوامر. |

### Platform & curriculum vocabulary

| English | Arabic | Use (ar/en) | Notes |
|---------|--------|-------------|-------|
| course | دورة | ar | The whole course the reader is taking. Keep distinct from `درس` (lesson) and `منهج` (curriculum). Feminine; plural دورات. |
| dashboard | لوحة التحكم | ar | Confirmed by mirina: not necessarily the most elegant term, but correct and widely understandable. |
| canvas (the drawing surface) | السبورة | ar | The surface drawing code draws on: `مسح السبورة` for "cleared the canvas". Do not use `اللوحة` or `لوحة الرسم` for it. Set by mirina. Feminine; plural سبورات. |
| ellipse (the drawing shape) | شكل بيضاوي | ar | "Oval shape", not the strictly mathematical `قطع ناقص`, which is conic-section terminology and needlessly technical for absolute beginners. Set by mirina. Masculine (head-word `شكل`); plural أشكال بيضاوية. |

## Keep in English

These stay in English in Arabic prose. The middle column is the Arabic for the same thing,
for the places where the English text itself stops to explain the term. It is never added as
a bracketed gloss on the translator's own initiative (`global/voice.md`).
This list is deliberately short: given this audience's lower average English proficiency
(see guide § "Loanword policy"), Arabic content Arabizes core vocabulary by default rather
than keeping it in English.

| Term | Arabic word, where the English explains the term | Notes |
|------|--------------------------------------------------|-------|
| API | `واجهة برمجة التطبيقات (API)` | Do not replace it with the Arabic phrase on later mentions; keep the Latin acronym in running prose after it is glossed once. Feminine; plural واجهات برمجة التطبيقات. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Programming keywords (`function`, `if`, `for`, ...) | (none) | Always English, including inside prose. Translate only the surrounding explanation. |

## Brackets

Set by mirina, replacing the earlier humam-hamdan scheme. Every bracket
type shares one head-word and is distinguished by a qualifier naming its shape, matching the
English pattern (`bracket` + shape) and the usage of Arabic educational and technical sources.
**Never use a bare `هلال` or a bare `معقوف` on its own**, and never use `قوس` alone to mean `{}`.

Generic, when no specific type is meant: singular `قوس` (masculine), the pair `القوسان`, plural
`أقواس` / definite `الأقواس`.

| Glyph | Arabic | Notes |
|-------|--------|-------|
| `()` | الأقواس الهلالية (dual: الأقواس الهلالَين) | Parentheses / round brackets. See the `brackets (the two after a function name)` row above; that is this pair after a function call. |
| `[]` | الأقواس المربعة | Square brackets. Note this is a **swap** against the old scheme, where `معقوف` meant `[]`. |
| `{}` | الأقواس المعقوفة | Curly braces. Note this is a **swap** against the old scheme, where `معقوف` meant `[]` and `قوس` alone meant `{}`. Not `مجعد`, and not the descriptive `المنحنية`/`الحاضنات`. |
| `<>` | الأقواس الزاوية | Angle brackets. |

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks Arabic has agreed any row in this section, and no rendering has been
proposed.** These are the nouns Exercism's own product vocabulary is built from, and they are
the rows we most need a native speaker to fill in, because each one appears on hundreds of
pages. The target column is deliberately empty: an agent's invented rendering sitting in a
glossary reads as an agreed one, and these terms are too visible for that. Fill them in on the
pinned glossary thread, and a row moves into an agreed section once a native speaker has
settled it, recorded in `glossary-notes.md`. `global/terms.md` describes what each term means
on Exercism.

| English | Proposed Arabic | Use (ar/en) | Notes |
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
