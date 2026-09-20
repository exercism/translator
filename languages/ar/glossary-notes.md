# Arabic (ar) glossary notes

## 2026-09-20: Adapted for Exercism (agent; nothing here is a native speaker's decision)

This glossary was forked from Jiki's Arabic glossary when Exercism's translator repo was
created. Exercism and Jiki are separate products, and this glossary is Exercism's from here
on. Everything that was about Jiki's own product (its courses, its exercise stories, its
characters and physical metaphors) went with the fork; every decision about the Arabic
language itself was kept, including the ones a native speaker made. Where a native speaker had
settled one of the removed terms, the decision is recorded below as retired rather than
deleted.

**Added: `Exercism product vocabulary: PROPOSED, NOT YET AGREED`.** The English terms the
product's own nouns are built from, with the target column left empty. Nobody who speaks
Arabic has been asked yet, and an agent's invented rendering would read as an agreed one.

### Retired with the fork, with the decision recorded

The physical teaching metaphors are gone with the fork. Two decisions among them were a
person's and are kept here, because the Arabic reasoning stands if the words are ever needed
again.

- **`return chute` → `مجرى الإخراج`.** mirina, 2026-08-21, replacing `مزلقة الإخراج`:
  `مزلقة` is specifically a playground slide, an unnecessary physical image once paired with
  `الإخراج`, while `مجرى` (channel, duct) keeps the output sense without it. The related
  `to return (a value)` → `يُرجع` row is live and unaffected.
- **`board / whiteboard` → `سبورة`.** iHiD, 2026-07-30: the everyday, pan-Arab word for a
  writing board in a room, needing no qualifier. It ruled out `لوح` (a plank, panel or
  tablet) and the over-specific `السبورة البيضاء`, and collides with nothing. The live
  `canvas` row uses the same word for the same reason.

## 2026-09-09: dual agreement is word-order dependent

**Decided by:** reviewer mirina, forum, actioned directly.

A precision on the entry below. When we wrote the agreement paradigm down we recorded the dual
as `تُرجع الخاصيتان الأبعاد`, phrased as though it were the dual form full stop. mirina's point
is that it is not a fact about the dual, it is a fact about word order: in Arabic a verb placed
before its subject stays singular whatever the subject's number, which is the only reason
`تُرجع` is correct in that example. Put the dual subject first, and dual agreement becomes
mandatory again: `الخاصيتان تُرجعان الأبعاد`.

That matters here because our own guide's default is subject-first, so a translator or an
engine following both the glossary and the guide would produce `الخاصيتان تُرجع` and be wrong.
The guide bullet and the glossary row now give both orders and name `تُرجعان` as the form a
subject-first dual needs.

The non-human plural rule is unaffected: `الخصائص` takes the feminine singular verb in either
order, which is why that one could be stated without a word-order caveat.

She also spotted an omission in the same list: `الطرق`, the plural of `طريقة`, was missing from
the non-human plurals named beside `الدوال` / `الخصائص` / `المصفوفات`. Added in both files.

## 2026-09-08: `method` added as `طريقة`

**Decided by:** reviewer mirina, forum, actioned directly.

`method` had no row of its own. The word `طريقة` was already in use across Arabic curriculum
prose and was even named inside the `to return (a value)` row's Notes (as a feminine subject
governing `تُرجع`), but only as an aside, so nothing in the glossary actually settled the term.
mirina's point is that an unsettled term with a live competitor is worse than no term: the
2026-08-02 website-copy draft below proposed `تابع` (masculine) at medium confidence, and that
draft reached the app catalog, where `codingExercise.instructionsPanel.functionsTitle` and
`functionsIntro` read `الدوال والتوابع`. Learners therefore meet `تُرجع الطريقة` on a concept
page and `التوابع` in the panel beside it.

`طريقة` wins on evidence rather than on which pass happened first: ARABTERM and Arabic
Wikipedia both give it for the OOP sense, it is what the Arabic corpus already uses, and its
feminine gender matches `دالة`, so the agreement rule set on the forum covers functions and
methods with one sentence instead of two. The plural is `طُرق`, the common technical form;
`طَرائق` is correct but reads literary and academic.

One caveat travels with the term, and mirina raised it herself: `طريقة` is first and foremost
the everyday word for "way / manner / approach", so a page that says "the first way to do this"
would collide with its own technical vocabulary. The row therefore bans the everyday sense in
this content and points at `أسلوب` / `كيفية` / a rephrase instead. The `طرق` / `طريق`
("road") overlap she also mentions is not a practical risk: technical context disambiguates.

`تابع` is now explicitly ruled out, and the draft row for it below is struck through.

## 2026-09-08: `to return (a value)` extended to properties

**Decided by:** reviewer mirina, forum, actioned directly.

Follow-up to the 2026-09-06 entry below. We had applied her agreement rule to method calls
(`mentors.includes(...)` -> `ستُرجع` / `فستُرجع`) but left the sentence above it,
`mentors.length` -> `فسيُرجع`, alone and asked her whether a property behaves differently.

It does not. A `خاصية` (property) is feminine singular exactly like a `دالة` or `طريقة`, so
`mentors.length` returning four is `فستُرجع`. She gave the full paradigm: singular
`تُرجع الخاصية length عدد العناصر`, plural `تُرجع الخصائصُ القيمَ` (non-human plural, still
feminine singular), dual `تُرجع الخاصيتان الأبعاد`.

Her second point is the one with reach: the glossary defined the term as "the programming
action of a **function** giving a value back", which is narrower than the course material,
where the Arrays concept says the `length` property returns a value. A definition narrower
than the content it governs is what let the agent write `فسيُرجع` in the first place, and it
would keep causing inconsistency for human reviewers checking continuity. So the definition
now reads "a function, method or property giving a value back", the conjugation note names
`خاصية` and `الخصائص` alongside `دالة`/`طريقة`, and `guide.md`'s agreement bullet is retitled
to cover a property acting, with the `mentors.length` case spelled out.

mirina also noted approvingly that the agent could not decide the property case on its own but
did raise the question rather than guess, which is the behaviour we want on an open grammar
point.

## 2026-09-06: verb agreement for `to return (a value)` made explicit

**Decided by:** reviewer mirina, forum, actioned directly.

The glossary row for `to return (a value)` recorded only `يُرجع`, the masculine singular
present form. mirina's point is that the word itself was never in doubt (she set it herself on the forum/46) but that a single citation form is not enough to translate from: the verb has to
agree with whatever is doing the returning, and in programming prose that is almost never a
masculine singular noun.

Two rules follow, and both were already being broken in published Arabic content:

- A `دالة` (function) or `طريقة` (method) is a feminine singular noun, so a function that
  returns takes `تُرجع` / `ستُرجع` / `أرجعت`. The `arrays` concept page had `mentors.includes(...)`
  returning as `سيُرجع`, agreeing with an imagined masculine `الكود` rather than with the method
  actually named in the sentence.
- Arabic's inanimate-plural rule (جمع غير العاقل) makes a plural of non-humans agree as feminine
  singular, so `الدوال تُرجع القيم`. Writing `الدوال يُرجعون` reads as "the functions, who are a
  group of men, return", which mirina flags as a serious grammar error rather than a stylistic
  slip. She cited pan-Arab technical sources using `دوال تُرجع` and `الدوال التي تُرجع قيمة`.

The word choice itself is unchanged and the reasoning behind it still stands: `أرجع / يُرجع` keeps
"returning a value" distinct from `إخراج` (printing to the screen) and from `أعاد / يعيد`
(repeating), which is why `أعاد` was wrong in the Rock, Paper, Scissors category catalog.

The actionable half went to the glossary row's Notes (the conjugation matrix) and to
`guide.md`'s grammar section (non-human plural agreement, and agreeing with the implied subject
when a function or method acts), since both apply well beyond this one term.

## 2026-08-30: `canvas` added as `السبورة`, `ellipse` added as `شكل بيضاوي`

**Decided by:** reviewer mirina, forum, actioned directly.
Both came out of her review of the Weather Symbols exercise, whose page carries the shared
"draw" category messages.

### `canvas` -> `السبورة`

The shared draw catalog rendered "cleared the canvas" as `مسح اللوحة`. mirina's point is that
the Arabic word for a display or drawing surface is `سبورة`, so `اللوحة` was the odd one
out rather than a second legitimate term. The row is written down so a future pass cannot
reintroduce `اللوحة` on the grounds that "canvas" had no row of its own.

### `ellipse` -> `شكل بيضاوي`

The shared draw catalog rendered "drew an ellipse" as `رسم قطعًا ناقصًا`. `قطع ناقص` is the
strictly mathematical term (the conic section), which mirina judged needlessly technical for
beginners of all levels; `شكل بيضاوي` ("oval shape") names the shape and is understandable to
everyone. The Arabic corpus was already split on this, and the pages that introduce ellipses to the
reader already used `شكل بيضاوي` / `الأشكال البيضاوية` throughout, so her call removes an
inconsistency rather than creating one.

**Resolved (2026-08-30):** the drift noted above is cleared across every Arabic page that
had used the old words.

## 2026-08-26: `to return (a value)` added as `يُرجع`

**Decided by:** reviewer mirina, forum, actioned directly.
She pointed out that the glossary never named the verb for the programming action itself,
where the French and Spanish (es-ES) glossaries both carry a `to return (a value)` row, and
asked for the same row in Arabic.

### The term

`يُرجع`, verbal noun `إرجاع`. Added to the "Functions & control flow" table.

### mirina's reasoning

- **It is the standard term.** `يُرجع` is what the major Arabic learning platforms (Hsoub
  Academy, Elzero Web School, Harmash) and the official standards bodies (ALECSO, and its
  ARABTERM database) use for a function returning a value. She supplied screenshots of each.
- **It keeps return and print apart.** Beginners routinely confuse returning a value with
  printing one to the screen. In Arabic CS writing `إخراج` / `يُخرج` is reserved for
  output/print, so using it for `return` as well would collapse exactly the distinction the
  return-values material exists to teach. `يُرجع` says "gives a value back to the program"
  and nothing else.
- **`يعيد` is ambiguous.** The verb the Arabic content had been using ad hoc also carries
  the everyday sense "repeats / does again", which is a live confusion for an absolute
  beginner reading about loops in the same course.

### Propagation

Not yet swept. The published Arabic content mostly used `يعيد` / `تعيد` for this sense and
a few places already said `تُرجع`, so the corpus was inconsistent before this decision. A follow-up sweep will bring
the `يعيد` occurrences over; the other senses of `يعيد` / `إعادة` in the corpus ("rebuild",
"rewatch", "reset", "reuse") are untouched by it.

## 2026-08-22: brackets restructured to `قوس` + shape qualifier, overriding the 2026-08-08 scheme

**Decided by:** project owner iHiD, resolving a direct conflict between two native speakers
in mirina's favour. The linguistic case is mirina's; the
call to adopt it over humam-hamdan's earlier decision is
iHiD's, made explicitly because the two proposals could not both stand and we had told the
thread (post 34) we would not pick a side unilaterally. **Both humam-hamdan's rows and this
override are native-speaker input; this entry exists so it is on the record that the earlier
rows were replaced by an owner decision, not quietly dropped.**

### What changed

| Glyph | Was (humam-hamdan, 2026-08-08) | Now (mirina) |
|-------|-------------------------------|--------------|
| `()` | هلال · هلالان (dual: هلالَين) | الأقواس الهلالية (dual: الأقواس الهلالَين) |
| `[]` | معقوف · معقوفان | الأقواس المربعة |
| `{}` | قوس · قوسان | الأقواس المعقوفة |
| `<>` | قوس زاوي | الأقواس الزاوية |

Plus a generic baseline the old scheme deliberately did not have: singular `قوس`, the pair
`القوسان`, plural `أقواس` / `الأقواس`, for use when no specific type is meant.

**Two of these are swaps, not replacements.** `معقوف` meant `[]` under the old scheme and
means `{}` under the new one, and `قوس` alone meant `{}` and is now the generic head-word for
all four. Any future edit touching bracket wording has to read the surrounding glyph rather
than pattern-match the word.

### mirina's reasoning

She rejected the premise of humam-hamdan's argument directly: "I do not agree with this
translation or with the argument put forward by humam-hamdan against translating
'Brackets' as 'قوس' because the word should be reserved for 'Curly brackets.' This argument
is not based on any objective evidence." Her positive case:

- `الهلالان` is real, but its register is grammar and classical typography, not programming:
  "in educational and technical resources, it is systematically replaced by 'الأقواس
  الهلالية' (a morphological description of the bracket type). In programming, the term
  'الهلالَين' is not used as a generic term for brackets."
- Arabic technical writing mirrors the English two-word pattern, `bracket` + shape:
  "قوس + specification (bracket form)".
- `أقواس` as the generic head-word is, in her words, "the generic term validated by all
  Arabic educational platforms (Hsoub, Elzero, Harmash, Mawdoo3), ALECSO and its ARABTERM
  database (Rabat), and textbooks from four countries (Egypt, Morocco, the UAE, and Saudi
  Arabia)", plus Google for Education, Arabic Wikipedia (علامات الترقيم) and the Moroccan
  external translation group. She supplied screenshots of each.
- She specifically warns against the bare-`الأقواس` shortcut for `{}` that Google for
  Education permits, as "it can be a source of confusion in some Arabic-speaking countries",
  which is why every row here keeps its qualifier.

### Why this is a correction rather than a coin-toss

humam-hamdan's own post named the three types as "الهلالية والمربعة والمعقوفة", i.e. with
exactly the shape adjectives mirina uses, and only then assigned bare nouns that put
`معقوف` on `[]` and `قوس` on `{}`. His descriptive naming and his assigned nouns disagree
with each other about which shape `معقوف` denotes; mirina's scheme is consistent with the
naming both of them started from.

### mirina's own framing of the disagreement

She later softened the conflict herself, suggesting both schemes are correct in their own
register: humam-hamdan's bare nouns read as real-world developer shorthand (short forms are
preferred in inline code comments, partly to dodge RTL/LTR rendering bugs around `{}`),
while hers is the formal documentation and teaching register. She asked us to decide which
context this is. **This is teaching material for people who have never programmed**, which
is the formal/educational register, so that framing points the same way as the decision.

### Propagation

Swept every published Arabic item using the old terms. The base word for true/false and
every other open disagreement on the forum is untouched by this.

## 2026-08-20: Grammatical gender and plurals added to existing terms

**Decided by:** reviewer mirina, forum, post 24. She reviewed the existing glossary
term by term and confirmed her proposed grammatical gender and plural form for each Arabic
word already agreed there, without proposing any change to the word itself. This is an
enrichment pass, not a re-decision: every word audited here already matched what was in the
glossary; only the missing gender/plural detail was appended to each row's Notes column. A
handful of terms she also raised turned out to be open conflicts (competing renderings, not
missing detail on an agreed one) and are being tracked and actioned separately rather than
folded into this batch.

## 2026-08-19: Demonstratives settled on هذا/هذه/هذي only, reversing the 2026-08-08 call

**Decided by:** reviewer mirina, forum, post 22, following up on the earlier
"stylistic variation" note below. She researched the short forms ذا/ذه/ذي and found they
belong to classical/literary Arabic (العربية الفصحى), associated with religious and literary
texts, not the living everyday language her reading group actually uses — a poor fit for
this course's tone and its 18-35 audience. She also argued that mixing the two forms
inconsistently reads as confusion, not variety. This supersedes the 2026-08-08 entry below:
**always use the full هذا/هذه/هذي, never the short ذا/ذه/ذي.** Row/rule to be added to
`guide.md`; any existing ar content using the short forms should be swept to the full forms
next time that page is touched.

## 2026-08-19: `variable` (the concept) given its own glossary row

**Decided by:** reviewer mirina's question on forum, post 20. She was reasonably
confused by the "Keep in English" table listing "Variable and function names" as never
translated, having also seen the general word "variable" translated in concept prose. Those
are two different things: the table entry means literal code identifiers (`leftPosition`,
`getCurrentTime`), never the CS concept explained in prose. Checked already-translated
content (`concept/variables`, `concept/dictionaries`) and confirmed متغير/المتغيرات was
already being used consistently for the concept, with code identifiers correctly left in
English throughout — no actual bug, just an undocumented convention. Added a row for it,
matching the existing `array / list` row's pattern, so the distinction is explicit rather
than implicit. Her question about `tuple` and `Set` needing glossary rows was left: neither type appeared
anywhere in the material that pass covered.

## 2026-08-08: brackets split by type; الاقتران is a one-time gloss only; demonstrative register left to the author's judgement

**Decided by:** native speaker humam-hamdan, answering four
questions raised while applying his full review of `concept/using-functions`.

### Brackets: no shared default, each glyph gets its own word (actioned)

Previously `قوس` was the default word for any bracket, disambiguated with a qualifier
(`عادي`, `معقوف`, `مجعد`, `زاوي`) only when the type mattered. humam-hamdan: "فالمسألة أننا
عندنا ثلاث أنواع من الأقواس، الهلالية والمربعة والمعقوفة" (we have three types of brackets),
and assigned each its own word rather than a shared default with qualifiers: `()` is
`هلالان` (not `قوسان`), `[]` is `معقوفان`, `{}` is `قوسان` (reassigning the bare `قوس`/`قوسان`
from its old generic-default role to specifically mean curly braces). `<>` was not
addressed and keeps its previous rendering (`قوس زاوي`). The "brackets after a function
name" row (the `()` pair in `move()`) moves from `القوسان`/`القوسين` to `الهلالان`/`الهلالَين`
accordingly. Propagated to `concept/using-functions`, the only published item using this
term so far.

### function / الاقتران: not a glossary term, a one-time first-mention gloss

His draft added "(أو الاقتران)" once, next to the first mention of `الدوال`. Asked whether to
adopt `الاقتران` as an alternative rendering site-wide: "ذكرت الاقتران لأن الدالة والاقتران
يستخدمان تبادليا، وذكرتها مرة واحدة فقط، لذا نبقيها في تيك المرة ولا تذكر بعدها" (I mentioned
it because the two are used interchangeably, and mentioned it only once on purpose — keep it
that one time, don't repeat it elsewhere). Not a glossary row: `الدوال` remains the term used
everywhere; the parenthetical synonym is restored at its one first-mention spot in
`concept/using-functions` only, and should not be added anywhere else.

### Demonstratives (ذا/ذه/ذي vs هذا/هذه/هذي): stylistic variation, not a fixed register rule

Asked whether the shortened colloquial forms are the intended register throughout: "فذي
تعتمد على السياق، وغيّرتُ ما غيرت للتنويع وتقليل الرتابة" (it depends on context; I varied
what I varied for variety, to reduce monotony). Not a rule to codify in the guide: this is
deliberate authorial variation, not a register decision that would make other pages wrong
for using standard `هذا`/`هذه`.

## 2026-08-07: pitfall and streak settled; true/false contested

**Decided by:** native speakers humam-hamdan and baharoon, on the pinned Arabic glossary thread. humam-hamdan's post
answers, term by term, the three points baharoon raised the day before and that were left
open in the 2026-08-06 entry below.

### pitfall: `فخ شائع` → `خطأ شائع` (actioned)

humam-hamdan: "pitfall, since it's a 'frequent mistake' rather than a 'trap', which is
something specifically made to trip people over, i add my voice into خطأ شائع." That is a
second native speaker independently reaching baharoon's suggestion ("more commonly used in
the context of warning about pitfalls in learning"), which is what the earlier entry was
waiting for: the open question was explicitly "a register preference on a single opinion".
Two agreeing reviewers and a semantic argument (a pitfall is an error learners fall into,
not a snare someone laid) outrank the bootstrap rationale for "common trap", so the row is
changed. Both words stay mandatory as a set phrase.

### streak: `سلسلة الأيام` → `المواظبة` (actioned)

humam-hamdan: "مواظبة is the word we need here, as its meaning (directly) entails 'keeping
it up', while استمرارية is more of a construct with that meaning." baharoon had offered
`الاستمرارية` and `المواظبة` without choosing; humam-hamdan picks between them and gives
the reason, which closes that open question too.

This also resolves, rather than breaks, the سلسلة scheme recorded under "The سلسلة
collision" below. The concern raised in reply to baharoon was that streak was one leg of a
deliberate three-way qualification (`سلسلة الحلقات` / `سلسلة نصية` / `سلسلة الأيام`) and
that moving it might reintroduce ambiguity. `المواظبة` shares no root with سلسلة at all, so
the collision now has two legs instead of three and each is still qualified. `guide.md`
§ "The سلسلة collision" was updated to list the two remaining senses (array metaphor,
string); the rule itself (never bare سلسلة) is unchanged.

The one thing lost is the literal "days" in the old rendering. baharoon had asked for a
hover note explaining what the streak counts; we do not have a mechanism for that on a
glossary term, so the glossary row instead tells the translator to make the sense explicit
in the surrounding sentence where it is not obvious.

### true/false: NOT actioned, now contested between reviewers

The current row (`صحيح / خطأ`) is **unchanged**, because what began as one reviewer's
correction has turned into a live disagreement between three:

- humam-hamdan, post 5: "صواب / خطأ is the better version, صح is a verb, its noun usage is
  recent." In post 7 he narrows what he is rejecting: "what i'm rejecting is 'صح'. as for
  'صحيح' its rejection is not what i did, abdulrahman did that." In post 12 he does then
  argue against `صحيح` directly, on classical-lexicographic grounds, quoting al-Jawhari's
  الصحاح: `الصحيح` is opposed to `السقيم` (sound vs ailing) while `الصواب` is opposed to
  `الخطأ`, so `صواب/خطأ` is the properly paired antonym set.
- mirina, post 10, argues the opposite: `صحيح` reads as a pure Boolean value while `صواب`
  carries "correct / in the right" connotations (*إجابتك صواب*, *أنت على صواب*), and
  `صحيح/خطأ` is what MDN, W3Schools, Code.org and Khan Academy use. She notes she drafted
  parts of the post with DeepL.
- humam-hamdan, post 11, rejects that line of evidence rather than the conclusion: an
  Arabic translation should not be built on foreign-language sources, and an
  LLM-acceptable rendering is not the bar.

Both the pairing argument and the connotation argument are substantive and neither reviewer
has conceded. Per `orchestrator.md` ("ask first when the analysis is contested between
native speakers", and never post again on a contested point without checking first), this
stays open for the owner, and the reply posted to the thread does not take a side.
baharoon's original grammatical claim (that `صحيح` is "grammatically incorrect" here) is
also still unsupported by anything beyond assertion; humam-hamdan's post 12 restates it as
a question of which antonym pair is idiomatic, which is a different and weaker claim.

## 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout). Logged here for review
and **not** written to `glossary.md`.

Agreed independently across chunk workers:

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| ~~dashboard~~ | ~~لوحة التحكم~~ | **Confirmed by mirina/7 (2026-08-24), moved to `glossary.md`.** | ~~medium~~ |
| Premium (tier name) | kept Latin | | medium |
| concept | مفهوم | | medium |
| unlock | فتح | | medium |
| upgrade | ترقية | | medium |
| locked / unlocked | مقفل / مفتوح | | medium |
| in progress | قيد التقدم | | medium |
| badge | شارة | | medium |
| sign up | سجّل | | medium |
| milestone | محطة | | medium |
| scrubber | شريط التنقّل | | low |
| Spotlight mode | وضع التركيز | | low |
| ~~method~~ | ~~تابع~~ | **Rejected by mirina/53 (2026-09-08); `طريقة` written to `glossary.md` instead.** | ~~medium~~ |

Two disagreements needing a call before a tidy pass (feature names, recur across namespaces):

| English | Options | Notes |
|---------|---------|-------|
| Deep Dive | الشرح المتعمّق / شرح متعمّق / kept Latin | |
| challenge | تحدٍّ / تحدي | |

Other flags: "Projects" was rendered المشاريع (generic noun) — needs pinning if it's a
branded feature name like "Learn to Build". "Agentic Coding" (footer) has no settled Arabic
term; rendered البرمجة بالوكلاء الذكيين, low confidence. The "bug" keep-in-English glossary
row produces a bare Latin token inside short RTL chips (e.g. "كيفية إصلاح bug"); reviewers may
object, but that's the existing glossary policy, not new to this pass.

**A rendering flag worth keeping:** a UI string with a hard-coded `→` in it points the
wrong way in RTL. Move the arrow out of the copy or make the component direction-aware.

## 2026-08-01: Guide contradiction resolved (first-occurrence auto-gloss)

**Decided by:** agent, applying `global/voice.md` as the higher authority. **Terms
affected:** none.

The guide's "Loanword policy" told the translator to add a one-time English gloss in
parentheses on a jargon term's **first occurrence per file** (_دالة (function)_, then
_دالة_). `global/voice.md` says a gloss belongs **only** where the English text itself stops to
explain the term, and its no-auto-gloss rule forbids
parenthesising a term on your own initiative; the tidy pass in `global/translating.md` lists
such an auto-gloss as something to remove. The global files outrank the language guide, so
the first-occurrence trigger is gone.

Nothing behavioural was lost. The judgement the bullet carried, which terms are worth
glossing at all (genuine CS jargon a reader must map onto English in code and docs, not
ordinary words like condition, comparison or value, tested by "would a non-programmer
already know this Arabic word?"), was kept in full and re-attached to the case where the
English explains the term, where it now serves `voice.md`'s "skip a gloss that would teach
nothing". No glossary row was touched: the `API` row's "glossed once" wording is already
conditioned on that case, as is the `CLI` row. No acronym clause was added, because the Arabic guide never had one to keep.

## 2026-08-01: Guide stripped of research provenance and rationale

**Decided by:** agent, on an audit of `guide.md` against `orchestrator.md` § "Where each
piece of the feedback goes". The guide is loaded into the prompt for every Arabic item in
every pass, and roughly a third of it was a record of the research that produced the rules
rather than the rules themselves. Every instruction was kept; only the supporting material
moved here. Nothing was added, and no glossary row was reworded or removed.

**The research behind the register and mechanical decisions.** The sources surveyed at
bootstrap, and cited in the guide until now, were: Khan Academy Arabic (أكاديمية خان),
freeCodeCamp's Arabic curriculum, Hsoub Academy (أكاديمية حسوب, a long-running pan-Arab
dev-education publisher), ar.javascript.info, and Arabic Wikipedia's CS articles. What
each one settled:

- **MSA, single locale.** MSA (الفصحى) is the standard register for pan-Arab educational
  and technical content, confirmed by every reference checked. Regional dialects
  (Egyptian, Gulf, Levantine, Maghrebi) are reserved for marketing and spoken contexts.
  There was never a dialect decision to make: `ar` targets MSA for everyone.
- **Modern, not classical, MSA.** Hsoub Academy and ar.javascript.info both write short
  sentences, direct address, everyday vocabulary and established technical loanwords.
  Ornate classical constructions, rare vocabulary and dense literary subordination read
  as distant and hard to follow for a beginner, which is why the guide bans them.
- **SVO word order.** MSA allows both VSO (classical-leaning) and SVO (modern
  journalistic); real Arabic tech-education prose consistently favours SVO because it
  reads more directly and matches how technical claims are framed.
- **Masculine default for generic "you".** This is the standard convention in Arabic
  software localization (Google, Microsoft and Facebook Arabic products all default this
  way). It is not a comment on the reader's actual gender.
- **Western digits.** Every source checked uses Western Arabic digits (0-9) for numbers
  and code. This is also the norm across most of the Mashriq and Gulf in tech/software
  contexts specifically (Eastern Arabic-Indic digits ٠-٩ remain common in some print and
  formal contexts), and Western digits dominate in the Maghreb generally.
- **No manual bidi marks around embedded code.** Hsoub Academy and ar.javascript.info
  embed English code and keywords directly in running RTL Arabic prose with no
  directional-override characters and no `<bdi>`-style wrapping in the source; the
  renderer's bidi algorithm copes. What those sources rely on instead, and what the guide
  therefore mandates, is code styling: the monospace run is what visually separates an
  embedded LTR token from the Arabic around it.
- **Arabize by default.** The audience's average English proficiency is lower here than in
  several other markets outside Gulf elites, so Arabic leans further toward full
  Arabization than some other language guides. `string` (سلسلة نصية) and `Boolean` (قيمة
  منطقية) are fully Arabized in real Arabic CS materials, unlike in some other languages
  that keep such terms in English with a gloss. This is why the "Keep in English" list is
  deliberately short, and why **API** is the notable exception: every Arabic tech source
  checked keeps the Latin acronym even in Arabic sentences, expanding it once
  ("واجهة برمجة التطبيقات (API)") rather than replacing it in running prose.

**The سلسلة collision.** The guide keeps the rule (never bare سلسلة, always the qualified
compound); the sourcing is here. It is a real collision, not a stylistic quibble: Arabic
Wikipedia and every Arabic programming tutorial checked use سلسلة نصية for "string", while
سلسلة alone is the ordinary word for a physical chain. The renderings (سلسلة نصية for
string, سلسلة الأيام for streak) read as clearly distinct once qualified, which is why
qualification is mandatory rather than optional. Each is a
glossary row and no longer duplicated in the guide.

**`الكود` versus the purist forms.** The guide's prose ruling out `شيفرة`/`رمز` moved into
the `code` glossary row's Notes, unchanged in substance; the reasoning is in the
2026-07-30 entry below.

**Cut as duplication, not as content:** the guide's restatements of `global/rules.md`
(code and inline backticks are byte-for-byte; keywords stay English; product names are
never translated) and of `global/voice.md` (translate intent not words; explain acronyms
in the target language; specific calls to action). The "CLI" and "PPP pricing" worked
examples went with them: CLI is a glossary row, and PPP was only an illustration of the
`voice.md` acronym principle.

**Left alone deliberately, and flagged for a human:** the guide's "one-time English gloss
in parentheses on first occurrence per file" rule contradicts `global/voice.md` § "Never
auto-gloss". It was kept verbatim (minus a cross-reference to Hungarian) because resolving
that is a decision for the owner, not an audit. It was resolved the same day; see the entry
above.

## 2026-07-31: Pruned of ordinary vocabulary

**Decided by:** agent, per the pruning test in `global/pass-mechanics.md` § "Proposed glossary delta". Removed 45
rows whose Arabic rendering was the one obvious dictionary word with nothing to decide
(e.g. `value`, `variable`, `error`, `loop`, `object`, `workflow`, `algorithm`), including
`while loop` and `for-of loop` as mechanical repeats of the `for loop` backtick convention.
Rows kept where two renderings were live, a collision or register distinction was recorded,
or the row carried a register distinction; a reviewer might query cutting `while loop`
and `for-of loop` (mechanical repeats of `for loop`'s stated convention), `deploy`, and
`mental model`, all removed as having no independent decision.

## 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, and, as a principle, every row.

Two decisions came out of that pass that bind Arabic:

- **`interpreter`: Arabic did not change.**
  `مفسّر` was already right, because it is the active participle "the one who
  interprets/explains" and is used of people first (a `مفسّر` of a text, a `مفسّر` at a
  meeting), so it takes the person sense without strain and carries no device or program
  morpheme. What changed is that the row now says so, confirming `مفسّر` and ruling out any
  reading of it as a machine-only term.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

## 2026-07-30: Agent's own drafting in the same pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**Rows added** for terms the using-functions concept page needed: `mental model`,
`(programming) language`, `brackets (the two after a function name)`, `input (to a
function)`, and the metaphor rows `machine`, `crank`, `shelves`, `warehouse`,
`board / whiteboard`.

**One contradiction resolved.** The "Keep in English" table had listed `Code`, while the
guide's own worked examples used `الكود` throughout. Resolved to `الكود`: it is the
Arabic-script form of the English word and the ordinary word in real Arabic developer
writing (Hsoub Academy, ar.javascript.info), preferred over the purist `شيفرة`/`رمز`. The
Latin form `Code` survives only inside code and for the `Debug`/`Test` tokens.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`interpreter`) is not repeated here.

### Core decisions

| Term | Why |
|------|-----|
| programming / coding | Standard, single established term. |
| tech / tech industry | Established in Arabic tech media. |
| developer | Standard Arabic equivalent. |
| pitfall | The original `فخ شائع` ("common trap") was chosen as concrete and natural, matching the informal register. Superseded on 2026-08-07 by `خطأ شائع`; see the dated entry at the top of this file. |

### Values & data types

| Term | Why |
|------|-----|
| value | Ordinary word. |
| Boolean | Translated fully, unlike some other languages that keep "Boolean" in English. |

### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary words, so they stand alone. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| mental model | Standard, transparent compound. |
| (programming) language | Ordinary Arabic word, already familiar to beginners. |
| assignment | More established in Arabic CS-specific usage than the near-synonym `تعيين`. |
| scope | Translated fully, unlike Hungarian's "keep in English" approach for the same term. |
| class | `فئة` is used interchangeably in some sources; `صنف` matches Arabic Wikipedia's CS-article title, chosen for consistency. |

### Tooling & engineering

| Term | Why |
|------|-----|
| algorithm | Well established in general vocabulary (from al-Khwarizmi), not just CS jargon. |
| backwards compatibility | Descriptive phrase, standard rendering. |
| tool / tooling | Used bare in established Arabic technical prose. |

### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| course | `دورة` is the ordinary word for a course of study in Arabic. |

### Keep in English

| Term | Why |
|------|-----|
| API | Every Arabic tech source checked keeps the Latin acronym in running prose after glossing it once. |

