# Hebrew (he) glossary notes

## 2026-08-29: First native-speaker feedback (forum)

**Decided by:** duke-of-spacingham (native Hebrew speaker, community reviewer), actioned
directly per this repo's rule that a native speaker's call outranks a default assumption.
**Status:** this is Hebrew's first native-speaker linguistic review; every guide row below
was previously an unconfirmed bootstrap draft (see "2026-08-01: Language bootstrapped").

Forum topic 1302 ("[Hebrew Review] Which of these two reads better?") posted two candidate
openings (Version A / Version B) of the "Using Functions" concept page as an A/B sample —
**this content was never written to `../i18n`** (Hebrew is still `stage: "setup"` and has no
`locales/he/curriculum/concept-pages/` at all), so nothing needed re-stamping. The
contributor called Version A more fluent overall, then gave four concrete critiques of
English-tracking phrasing, all folded into `guide.md`:

- **Name repetition.** A Latin-script name was repeated in every short sentence instead of
  switching to `הוא` after the first mention, and the paragraph was cut into fragments with
  no dialogue or pause reason to do so. Added as a new bullet on handling names.
- **`מסע התכנות הזה` ("this programming journey") is an English-wording calque.** Natural
  Hebrew possessive/directional framing (`מסע התכנות שלנו` / `מסע התכנות שלפנינו`) reads
  better than the literal demonstrative. Added as a new row in the Translationese
  anti-patterns table (generalised to "`X הזה` for an abstract shared noun", since the same
  calque risk applies to `הקורס הזה`, `החוויה הזאת`, etc., not only "journey").
- **`תכלית` is too formal**, reading as "the main reason" rather than this casual voice.
  The contributor's two suggested informal framings ("actually…", "the whole thing with
  X…") were added to Register levers.
- **A repeated Latin-script name breaks reading flow, and dev-workflow verbs should be
  transliterated into Hebrew, not left in English or translated literally.** The contributor
  gave `merge` → `למרג'ג'`, "do a commit" → `תעשה קומיט`, "compile it" → `תקמפל את זה` as the
  real-usage pattern. This is the same shape as the already-settled `דיבוג` glossary row
  (Hebrew-lettered, Hebrew-conjugated, not the literal `ניפוי שגיאות` and not bare English
  `debug`), so it was written up as a general Loanword-policy rule rather than three
  one-off glossary rows, with `דיבוג` cited as the existing precedent. Note this does **not**
  change the settled "a product name stays in Latin script" decision: the contributor's
  complaint was about the sentence being chopped up around the repeated name, not about the
  script it is written in, and the existing rationale for keeping product names in Latin
  script (every Israeli tech source does this) still holds. Worth flagging back to a future native
  reviewer if this reading is ever contested.
- A fifth point (conditional clauses: `אם זה קורה, אז אני צריך לעשות את זה` reading as "if it
  happens, then I should do it" rather than the intended "if this happens, then I do that",
  fixed with `ככה` in place of the second `זה`) was also folded in, to Grammar and sentence
  rhythm.
- A sixth point, on Hebrew prose being generally less wordy than English and Israeli readers
  being impatient with padded/machine-sounding text, was captured as a general concision
  bullet even though **the contributor's own post cuts off mid-sentence** ("A Hebrew" —
  confirmed via the Discourse API that post 6177 is genuinely the thread's last post, not a
  fetch truncation) — the direction of the point is unambiguous even though the final
  example never arrived. If the contributor returns to finish that thought, revisit this
  bullet.

No glossary term rows changed. All decisions landed in `guide.md` because they are
sentence-construction and register rules, not term mappings.

## 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout). Logged here for review
and **not** written to `glossary.md`. No cross-chunk disagreements; two rows were
independently proposed by both chunk workers.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| challenge | אתגר | Agreed by both workers. | medium |
| unlock | לפתוח / נפתח | Agreed by both workers; chosen over לשחרר. | medium |
| quiz | חידון | Agreed by both workers; learning register over school-test בוחן. | medium |
| scenario | תרחיש | Alternative מקרה בדיקה worth pinning. | medium |
| session (auth) | התחברות | Loanword סשן avoided. | medium |
| cookies | עוגיות | Vs קובצי Cookie. | medium |
| achievements | הישגים | | medium |
| lesson | שיעור | Anchor against drift to יחידה. | medium |
| milestone | אבן דרך | | medium |
| instructions (exercise panel) | הנחיות | Deliberately distinct from glossary's הוראה (statement). | medium |
| scrubber | ציר הזמן | No settled Hebrew term; needs confirmation. | low |
| breakpoint | נקודת עצירה | | medium |
| method | מתודה | Paired with פונקציה, not school term פעולה. | medium |
| blank (fill-in quiz) | מקום ריק | | medium |
| verification / authentication | אימות / הזדהות | Kept distinct. | medium |

"Agentic coding" has no settled Hebrew term; rendered סוכני ה־AI ("AI agents"), low confidence.

Flags, not glossary rows: several in-scope strings quote button text owned by
still-untranslated namespaces ("Not now, maybe later", "Continue", "Upgrade to Premium",
"Settings", "Get started" → "התחלה") — resolves itself once those namespaces are translated,
but wording must then match. a header UI string's trailing arrow was flipped
`→`→`←` for RTL (arguably CSS's job, Aron's call). Hebrew plurals exceed English in three
keys (ICU categories `two`/`many` added where English only has `one`/`other`) — correct, not
a defect.

## 2026-08-01: Two internal contradictions resolved

**Decided by:** agent. **Terms affected:** none (a Notes column and two worked examples).

- **`בואו` in the worked examples.** The Formality section makes bare first person plural
  (`נסתכל`, `נתחיל`) the workhorse form and says explicitly not to render every English
  "Let's" as `בואו נ…`, yet both "Let's" entries in Worked examples did exactly that. The
  guide's own imperative rule outranks its own examples, so the two examples now show the
  default form (`נסתכל על הקוד הבא:`, `נתחיל`). `בואו נתחיל` is still shown, in the
  Hortative bullet, as the sparing warm variant, so nothing was lost.

**Left alone:** the guide's rule that a Latin-script product name is introduced once with a
Hebrew pronunciation in brackets. It reads like an auto-gloss against `global/voice.md`, but
it is a pronunciation aid for a name rather than a term gloss. Worth an explicit call if the
no-auto-gloss rule is ever read as covering names.

## 2026-08-01: Language bootstrapped

**Decided by:** owner (iHiD), agreeing the researched proposal from the Hebrew bootstrap pass.
**Status: unconfirmed drafts.** No native Hebrew speaker has checked any rendering in this glossary. There is no community glossary submission for Hebrew and no Hebrew forum thread, so every row here is an agent draft that a later pass may correct.

The research rested on the Academy of the Hebrew Language (כללי הפיסוק, approved 1992, published 1994, revised 2017; the transliteration rules of 2007; and its IT term dictionaries, 1990 to 2016), the Israeli Ministry of Education's CS textbooks (`יסודות מדעי המחשב`, C# and Java editions) and its 2021 Python curriculum, Barak Gonen's Python textbook, the Microsoft Hebrew Style Guide, the Gezer and translatewiki Hebrew localization rules, the Firefox Hebrew localization corpus, and Hebrew Wikipedia and Wikibooks. Post-2022 SEO and AI-writing sites were checked and discarded; nothing here rests on them.

Eight decisions were put to the owner and confirmed:

- **Address the reader in the plural** (`אתם`, `לחצו`, `תוכלו`), with first person plural for anything framed as "let's". Hebrew has no gender-neutral second person, so this is forced. Plural address is what Israeli instructional prose has converged on, it is prescribed by Microsoft's Hebrew guide and by the Gezer open-source rules, and the Academy's grammar committee recommended it. Masculine singular was rejected as excluding half the audience and reading as legacy software chrome; slash and dot forms (`משתמש/ת`) were rejected because the Academy, the Open University and every localization guide reject them and they produce unreadable word forms.
- **`function` is `פונקציה`, not `פעולה`.** This is the sharpest fork in Hebrew CS vocabulary: the Ministry of Education's school textbooks use `פעולה` exclusively (0 occurrences of `פונקציה` across two volumes, against 1,056 of `פעולה`), while adult tutorials, real developer speech and the Academy all use `פונקציה`. the course teaches a general adult audience rather than replicating school C#/Java pedagogy, so it targets adult industry Hebrew. This is the single row most worth putting to a native speaker.
- **Native Hebrew is primary for core CS vocabulary, but real usage wins term by term.** Hebrew's native words (`משתנה`, `לולאה`, `מערך`, `מחרוזת`, `תו`) are genuinely ordinary, unlike some Academy consumer-tech coinages, so Hebrew sits closer to Persian than to Arabic here. Where real usage is decisively a loanword it takes the loanword: `באג` over the Academy's `תקל`, `דיבוג` over `ניפוי שגיאות`, `בוליאני` over `טיפוס לוגי`, `איטרציה` over `חִזְרוּר`.
- **A product name stays in Latin script** in Hebrew prose, with maqaf-attached prefixes and `של` for possession, introduced once with the Hebrew pronunciation in brackets. Transliterating throughout would be out of step with how every Israeli tech source writes product names.
- **The `<define>` gloss marker is `באנגלית:`**, the Hebrew Wikipedia convention (present in thousands of articles), rather than the literary `בלעז`.
- **Punctuation follows the Academy**: Western digits, Latin punctuation, double quotation marks in place of English italics and title case, and the maqaf `־` before a Latin run or a digit.
- **The chain metaphor is always the qualified `שרשרת חוליות`.** Hebrew's word for string (`מחרוזת`) means a beaded necklace and its word for chain (`שרשרת`) means a chain or necklace, which alone would be survivable. What makes it a genuine collision is that Hebrew's term for string concatenation is `שרשור`, the same root as `שרשרת`. The qualifier follows the precedent already set for Arabic, for the same reason.
- **`crank` is `ידית`**, the ordinary word for a handle you turn. `מנואלה` is the more vivid hand-crank loanword and `ארכובה` is engineering register; both were rejected as less widely understood in a beginner context.

Two renderings were chosen specifically to keep a metaphor and a CS term apart, and must not be collapsed by a later pass: `תו` (a text character) against `דמות` (the on-screen game figure), and `לוח` (the board) against `מערך` (array) and `טבלה` (a data table).

Three terms were deliberately **left out** of the glossary rather than guessed at, and are open questions for the first native-speaker review: `deploy` (three live options, no consensus in real usage), `session` in the authentication sense (the standard `הפעלה` literally means "running", which collides with running code), and the cluster with no attested Hebrew term anywhere: key-value pair, entry, `break`, increment, toggle, placeholder and template literal.

## 2026-08-01: Guide audited down to instructions only

**Decided by:** owner (iHiD), via a guide-audit pass. `guide.md` is loaded into the prompt for every Hebrew item in every pass, so the reasoning behind its rules was moved here. No rule was dropped and no term decision was changed or reworded; what follows is the *why* that used to sit inline in the guide, plus a note of the two things that moved to `glossary.md`.

**Sources behind the typography, punctuation and address rules.** The Academy of the Hebrew Language's כללי הפיסוק (approved 1992, published 1994, revised 2017), which Hebrew Wikipedia and Israeli publishing both defer to, is the authority for: the ordinary Latin punctuation set; the behaviour of parentheses around a Latin run and the fact that Latin script makes quotation marks unnecessary (נספח א); and the maqaf `־` before a Latin run or a digit (§32ה), which is also what real Hebrew localization does. Plural address to the reader is the settled convention for Hebrew instructional prose: the Academy's grammar committee recommended it, Microsoft's Hebrew Style Guide mandates it for help content, and the Gezer rules governing Hebrew open-source translation require it specifically for the body of a guide. Slash, dot and blended inclusive forms (`משתמש/ת`) are rejected by the Academy explicitly, produce unreadable word forms, and are mangled by screen readers. Masculine singular for the generic reader reads as legacy software chrome or a military instruction. Standard Hebrew typography does not use italic type at all, which is why English italics and title case become double quotation marks or bold.

**Why the register rules read as they do.** First person plural is the workhorse because Hebrew's first person is genderless, so it sidesteps the gender question entirely. Mixing `לחץ` and `לחצו` on one page is the most visible amateur tell in Hebrew. A whole page of future-as-imperative (`תעשו… תלחצו…`) reads as transcribed speech, and rendering every English "Let's" as `בואו נ…` reads over-caffeinated. Hebrew has no morphological negative imperative, which is why the negative is always `אל` plus future. On word order: the uninverted (subject-first) version after a fronted adverbial is marked as *lower* register rather than neutral, so keeping SVO for this voice is a deliberate choice, not an accident; and breaking one English sentence into two or three Hebrew ones is normal and expected, not a liberty.

**Why the guide targets adult industry Hebrew.** Two registers of Hebrew CS vocabulary coexist and readers may arrive from either: the Ministry of Education's school CS textbooks, and adult tutorial/industry Hebrew. Where they diverge, the guide targets adult industry Hebrew, because that is the language a learner will meet in real code and in real conversation. The `פונקציה`/`פעולה` fork above is the sharpest instance.

**Why the loanword policy is term-by-term.** Hebrew has comfortable, settled, everyday native words for programming fundamentals, so native Hebrew is primary in prose. That is the ordinary-word principle in `global/voice.md`, not purism: these words are what Israeli developers and educators actually say. Where real usage is decisively an English loanword (`באג`, `דיבוג`), the loanword *is* the ordinary word and is correct. Leaving a term in Latin script mid-sentence is normal Israeli practice, not a translation failure: Israeli CS textbooks and developer prose do it routinely with acronyms and with keywords.

**Bidi rendering: what the platform does and does not fix.** Unlike this repo's other RTL guides, the Hebrew guide cannot assume the renderer handles everything. The Unicode bidi algorithm gets most cases right on its own (a bare Latin word mid-sentence, `f(x)`, `arr[0]`, `src/main.js`, a URL), but it provably does **not** resolve an empty bracket pair, so `move()` renders as `()move`, and in a programming course that case is everywhere. Markdown backticks do not fix it: they emit `<code>` with no direction of its own, which inherits the surrounding right-to-left direction and breaks exactly like plain text. Backticks fix font and semantics, not direction. The guide's rules are therefore only what a translator controls; they assume the platform isolates code spans, and where it does not yet, some tokens will still render wrongly. That is a platform bug, not something to work around by hand, which is also why hand-inserted bidi control characters are banned: they are unreviewable in a diff, survive copy-paste badly, and the Hebrew localization community rejects the practice.

**The שרשרת / מחרוזת collision, in full.** Hebrew's word for "string" (`מחרוזת`) literally means a beaded necklace, and its word for a physical chain (`שרשרת`) means a chain or necklace too. On its own that adjacency would be survivable, because they are two distinct words. What makes it a real problem is the verb: Hebrew's established term for string concatenation is `שרשור`, built on the same root as `שרשרת`, and Hebrew Wikipedia titles that article `שרשור (מחרוזות)`. A course that teaches the chain-as-array metaphor *and* string concatenation is therefore using one root for two unrelated ideas. The qualified compound follows the precedent already set for Arabic, for the same reason.

**Term clarification and product names.** `באנגלית:` is the standard Hebrew Wikipedia convention, present in thousands of articles, and far more current than the literary `בלעז`. Keeping a product name in Latin script is what every Israeli tech source does, and Microsoft's Hebrew guide is explicit that an untransliterated product name takes no definite article. A pronunciation is introduced once in brackets where a sound is not guessable from Latin script for a Hebrew reader.

**Moved out of the guide into `glossary.md`.** The product and strand name rows, all of them since retired with the fork. Also deleted from the guide as pure duplicates of existing glossary rows: the `קידוד` false-friend warning (already on the "programming / coding" row), the brackets default (already the "Brackets" section preamble), and the CLI acronym example (already a "Keep in English" row).

## Term rationale

Why individual rows read the way they do, for the reasoning not already carried by the dated entry above. Grouped by the glossary's own sections.

### Core decisions

| Term | Why |
|------|-----|
| programming / coding | `קידוד` is a false friend meaning character or data encoding, and it is a trap a translator can fall into unprompted, so the row exists mainly to block it. |
| developer / programmer | `מפתח` is the industry job title and `מתכנת` is "a person who programs". The learner-facing sense is the second one. |

### Values & data types

| Term | Why |
|------|-----|
| float / decimal | The 2019 to 2021 Ministry curricula shifted from `ממשי` to `עשרוני`, so the newer term is the better signal for a course written now. |
| index | Israeli textbooks mix `מציין` and `אינדקס` inside the same volume; `אינדקס` is closer to what a learner will hear. The Academy's `ציון` is essentially unused. |
| object | `אובייקט` dominates real OOP speech. `עצם` is the schoolbook term and survives in the fixed phrase for object-oriented programming, which is why the row has to say which is which. |

### Functions & control flow

| Term | Why |
|------|-----|
| statement (executable) / statement (logical claim) | English uses one word for two ideas the course keeps apart. `פסוק` is attested from `תחשיב הפסוקים` (propositional calculus); the alternative `היגד` had no hits in any CS source checked. |
| assignment | `השמה` is the schoolbook standard and `הצבה` is the Academy's. Both are alive, so the row exists to stop passes alternating. |
| to declare / declaration | Hebrew textbooks split `הצהרה` and `הכרזה` by what is being declared, which is a distinction the course does not need and would apply inconsistently. One word, chosen for the commoner case. |
| built-in | `מובנה` is the middle ground between the schoolbook `מוכן` and the spoken `בילט־אין`. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| interpreter | Hebrew is unusually lucky here. `מפרש` is simultaneously the Academy's term, Hebrew Wikipedia's article title, and a live agent noun meaning "one who explains", so unlike several other languages it can name a character rather than only a piece of software. The cost is that unvocalised `מפרש` is also "sail" and "commentator", which is why the row tells a translator to give a clearer subject rather than repeat the bare noun. If a native reviewer rejects it, `פרשן` is the fallback: unambiguously a person, and the gloss the standard Israeli Python textbook uses, but it under-signals that this is technology. |
| exception | Kept distinct from `שגיאה` because the course teaches errors generally before it teaches catchable exceptions. |
| debugging | The reference Israeli Python textbook has zero occurrences of `ניפוי שגיאות` and uses `דיבוג` throughout. |

### Tooling & engineering

| Term | Why |
|------|-----|
| framework, component | Both follow the ordinary-word principle: `פריימוורק` and `קומפוננטה` are what Israeli developers say, and the native alternatives are rarely spoken aloud. |

### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| feature (platform capability) | `תכונה` is the Hebrew CS word for an object property, which the course also teaches, so it cannot be used for a platform feature. |
| concept library | `ספרייה` is the word for a code library, so the obvious rendering of "library" collides. |
| plan (subscription tier) | A three-way squeeze: `תוכנית` already means a computer program and `מסלול` is the curriculum track, so this term has to be qualified to survive. |
| shade (of a colour) | Ordinary Hebrew has no noun for "shade" separate from hue. Inventing one would be worse than the periphrasis. `צל` was rejected outright as meaning a literal shadow, which is actively misleading in a graphics context. |
| lightness | Hebrew collapses lightness and brightness into `בהירות`, and the Academy's `בהיקות` is not used by ordinary speakers, so the fix is a qualifier rather than a different word. |
| slider, frame | Both rows exist to block a wrong attractor: `סליידר` means an image carousel in practice, and `מסגרת` means a picture border, which is a real trap in a drawing course. |

