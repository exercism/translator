# Persian / Farsi (fa) glossary notes

## 2026-09-20: Adapted for Exercism (agent; nothing here is a native speaker's decision)

This glossary was forked from Jiki's Persian glossary when Exercism's translator repo was
created. Exercism and Jiki are separate products, and this glossary is Exercism's from here
on. Everything that was about Jiki's own product (its courses, its exercise stories, its
characters and physical metaphors) went with the fork; every decision about the Persian
language itself was kept, including the ones a native speaker made. Where a native speaker had
settled one of the removed terms, the decision is recorded below as retired rather than
deleted.

**Added: `Exercism product vocabulary: PROPOSED, NOT YET AGREED`.** The English terms the
product's own nouns are built from, with the target column left empty. Nobody who speaks
Persian has been asked yet, and an agent's invented rendering would read as an agreed one.

### Retired with the fork, with the decision recorded

These rows named things Exercism does not have, so the rows are gone. The renderings are
kept here because the reasoning still stands if any of these words is ever needed again.

- **The guide character's name, written in Persian script.** mominchezgi's request,
  actioned by iHiD on 2026-08-01: a single LTR Latin token dropped into RTL Persian
  running text breaks the reading flow, and this name recurred several times a paragraph.
  Code tokens are a different case, because inline-code styling marks them as foreign on
  purpose. Product and language names in the "Keep in English" table (JavaScript, Python,
  React) were unaffected and stay Latin. Worth knowing if a Persian rendering of a
  recurring name is ever wanted again.
- **`scenario`** was queried by mominchezgi, who disliked the transliteration سناریو and
  asked for "a more common and better word" without naming one. The candidates each failed
  somewhere: حالت reads as "mode" or "state", مورد is too vague to head a panel, and
  آزمون/تست renames the thing into "test". Left open when the term was retired.

## 2026-08-06: "milestone" is مرحله; «نقطه‌ی عطف» is banned

**Decided by:** native speaker mominchezgi, the word
choice picked by an agent. **Terms affected:** new `milestone` row.
**Protected: the ban on «نقطه‌ی عطف» is a native speaker's decision and is not to be
reversed by an agent.**

Reviewing the website he wrote: "I don't like «نقطه‌ی عطف», because it is a very academic
word". He gave no replacement, so the substitute is our own call. «نقطه‌ی عطف» is the
literary "turning point" and carries far more weight than a numbered marker on a learning
path deserves.

مرحله (stage/step) was chosen: it is the everyday Persian word Iranian learners already
meet for numbered stages in games and courses, it reads naturally both as a bare label
(«مرحله ۱») and inside a sentence («به این مرحله برسید»), and it was free in the Persian
app catalog. دستاورد was ruled out because it already carries "achievement" in the sidebar
and settings copy, and پله/گام read as a single small step rather than a marker worth
reaching. Applied to both occurrences in the app catalog: the exercise-path milestone label
and the empty-challenges description.

## 2026-08-05: "bonus" (a task label) is امتیاز

**Decided by:** native speaker mominchezgi,
actioned by an agent the same day. **Terms affected:** new `bonus` row.
**Protected: this is a native speaker's decision and is not to be reversed by an agent.**

Reviewing the Digital Root exercise he was first unsure ("I'm not sure, so be careful
there") whether "bonus" meant an additional prize and proposed «نمره‌ی اضافه». We flagged
the scope, since it is a standing label on every exercise's bonus task. He came back
decisive: "No, translate bonus to امتیاز". Applied as the standing term and swept into the
two already-published instances that predate the decision: Digital Root's «امتیازی: کوتاه
نگه دارید» (adjectival form) and Word Count's «جایزه: آپاستروف‌ها و نقل‌قول‌ها», both
corrected to the امتیاز noun form.

## 2026-08-04: a term's first mention on a page is wrapped in guillemets

**Decided by:** native speaker mominchezgi,
actioned by an agent the same day. **Terms affected:** none; this is a typographic rule, so
it went to `guide.md` under "Style notes" rather than to the glossary.

He asked for the convention to be recorded: when a page introduces a word the learner has
not met before, the word goes in «…», giving his own example of the Repeat page's
introduction of کلیدواژه. Applied on that page to the three terms the source `<define>`s on
first mention (کلیدواژه، بلوک کد، حلقه); later mentions stay plain, so the marking reads as
"here is a new term" and not as scare quotes. This sits alongside, and does not disturb, the
2026-08-01 decision that a parenthetical Persian gloss comes only from a `<define>` tag.

## 2026-08-04: "choice" splits into گزینه (an option) and انتخاب (what a player picked)

**Decided by:** native speaker mominchezgi,
actioned by an agent the same day. **Terms affected:** the existing `choice` row.
**Protected: this is a native speaker's decision and is not to be reversed by an agent.**

Reviewing the Rock, Paper, Scissors exercise he flagged «misuse of the گزینه» and asked us
to go through the whole item deciding, case by case, which occurrences are گزینه and which
are انتخاب. This refines his own earlier blanket ruling of 2026-08-03 (below), which the
Rainbow-era feedback had produced from a single quoted describer; it is the same reviewer
narrowing his own rule, not an agent reversing him.

The line he drew: گزینه is an **option offered from a fixed set**, so «یکی از سه گزینه‌ی
معتبر» (one of the three valid options) stays. A **person's** choice, the thing they
actually picked, is انتخاب: «انتخاب هر دو بازیکن», «اگر انتخاب‌ها یکسان باشند», «انتخاب
یوکی را برمی‌گرداند». He was most direct about the possessive: «گزینه‌ی یوکی» is not
something Persian says, even though "Yuki's choice" is unremarkable in English.

For the two describers he asked for the possessive to go entirely rather than be
retranslated, giving «یوکی به عنوان خروجی برگردانده شد» for "returned Yuki's choice". That
generalises to a guide rule (drop a possessive Persian does not need), so it is stated in
`guide.md` under Describers, and the describer example there was updated to match.

He also asked, separately in the same post, for «توابع آماده» ("provided functions") to
become «توابع از پیش تعیین شده». He offered it tentatively, unsure what "provided
functions" meant; it means the functions the exercise hands the learner, so his reading is
right and it was applied. It is not a glossary row: it is one exercise's phrasing, logged
in `languages/fa/exercise/rock-paper-scissors.md` with the rest of his line edits.

## 2026-08-04: "syntax" is نحوه‌ی نگارش; نحو is banned outright

**Decided by:** native speaker mominchezgi,
actioned by an agent the same day. **Terms affected:** the new `syntax` row.
**Protected: this is a native speaker's decision and is not to be reversed by an agent.**

Reviewing the Dictionaries concept page he asked us to stop using نحو for "syntax"
anywhere, in any page, and to make a dedicated glossary decision about it rather than
fixing it sentence by sentence. نحو is the formal Arabic-derived grammar term and reads as
academic linguistics, not as something a beginner meets while learning to code. He offered
نحوه‌ی نگارش، روش نوشتن and شکل نوشتن as alternatives, with the caveat that the best choice
may vary by context.

نحوه‌ی نگارش is recorded as the glossary default, with the row stating explicitly that the
other two are acceptable and that recasting the sentence around a verb is often better than
using any noun at all. The point that is not negotiable is the ban on نحو. This matches an
earlier, page-scoped version of the same call on the Arrays page ("no «نحو کروشه‌ای»,
too academic"), which is now generalized to a term-level rule.

Jeremy has designated mominchezgi's Persian feedback as authoritative: his calls are
actioned directly, without seeking further confirmation.

The rest of that post is sentence-level rewording on the Dictionaries page (a singular page
title, «و…» for "and so on", an impersonal unique-keys sentence, a parenthetical «(اگر
بخواهید)», naming the brackets instead of a "syntax", and a fronted position clause), which
is item-specific and so lives in `languages/fa/concept/dictionaries.md`.

## 2026-08-04: the Arrays gloss names the concept بولی

**Decided by:** native speaker mominchezgi, actioned by an agent the same day. **Terms affected:** none; the `Boolean` row is
unchanged and منطقی remains the term in running prose.
**Protected: this is a native speaker's decision and is not to be reversed by an agent.**

Reviewing the Arrays page he asked that the parenthetical gloss on the opening sentence
(«(منطقی، واژه‌ی پرطمطراقِ «درست» و «غلط»)») name the term differently "for the first time
(as I said before)". The agent first read that as the English word in Latin script and wrote
`boolean` there; he corrected it in post 3189 ("Nah! I meant to add Farsi بولی not the
English word"), and the gloss now reads «(بولی، واژه‌ی پرطمطراقِ «درست» و «غلط»)». In post
3251 he refined it once more: بولی is named in the sentence itself as well as in the
parenthesis, so the opening reads «مقادیر منطقی یا بولی استفاده کرده‌اید (بولی، واژه‌ی
پرطمطراقِ «درست» و «غلط»)». Every later mention on the page is still منطقی, so this remains
the single permitted naming of بولی in Persian script where the page glosses the concept, not
a reversal of the 2026-08-03 منطقی decision. It is recorded as a reviewer note
on `languages/fa/concept/arrays.md` rather than as a rule, because it applies to that one
gloss.

The rest of that post is sentence-level rewording on the same page (سر و ته for "two ends",
the appositive parenthesis losing its آن, «هر برگه‌ی کاغذ برای یک اسم», درست می‌کند for
"gets", dropping a چیز, and shortening the first thank-you sentence), which is item-specific
and so lives in that same reviewer-notes file.

## 2026-08-03: "name" is اسم, not نام; dictionary pairs are جفت

**Decided by:** native speaker mominchezgi, actioned by an
agent the same day. **Terms affected:** the new `name` and `pair` rows.
**Protected: اسم is a native speaker's decision and is not to be reversed by an agent.**

Reviewing the Dictionaries concept page, he asked to "replace all نام with اسم". Both words
mean "name" and both are ordinary Persian, but نام is the more literary register and اسم is
what people say. The course is spoken-voice throughout, so اسم is the one that matches how
the material sounds, and "name" recurs constantly (the `name` key, variable names, function
names), which is why it earns a row rather than a one-page fix. The row covers every
construction, including «به اسم» where نام is the more common bookish default.

جفت (pair) came out of the same review, on the sentence introducing key-value pairs. It was
not previously in the glossary and will recur across all the dictionary material, so it is
recorded now. جفت is the everyday word for a pair of matched things; زوج is the alternative
and was not used, since it carries a "couple/spouse" reading in ordinary speech.

The same review also produced sentence-level rewording on that page (chain in the singular,
a reordered opening, an added چون, «و الی آخر» for "and so on"), which is item-specific and
so is recorded in `languages/fa/concept/dictionaries.md` rather than here.

## 2026-08-03: Boolean is منطقی, not بولی

**Decided by:** native speaker mominchezgi, actioned by an
agent the same day. **Terms affected:** the `Boolean` row, and `guide.md`'s "Boolean values
go in guillemets" rule.
**Protected: this is a native speaker's decision and is not to be reversed by an agent.**
It **supersedes the "open, not decided" note in the entry below**, which left this pending.

His words: *"A big change for boolean: I accepted to use بولی for boolean translation. But I
regret choosing that word. If you want to use it one time or just a couple of times, yeah;
But if you want to write it again and again, it's awful to use بولی in the text. I strongly
suggest منطقی instead of بولی."*

The reason is grammatical, not stylistic. بولی is a bare transliteration doing the work of an
adjective, and Persian adjectives do not inflect or pluralize naturally, which is why
«بولی‌ها» had to be banned as a plural on the Arrays page the same day (entry below). Every
place the material needed a plural or an ezafe, the word had to be worked around. منطقی is an
ordinary Persian adjective, so «مقدار منطقی» / «مقادیر منطقی» behave like any other Persian
noun phrase and read naturally however often they repeat, which on this material is often.

**This corrects the agent's own bootstrap research, not a human decision.** بولی came from
Persian Wikipedia's «نوع داده بولی» during the bootstrap (see the "Values & data types" term
rationale below, now amended); no dated entry in this log ever recorded a native speaker
choosing it. mominchezgi's own "I accepted to use بولی" refers to not objecting earlier, and
he is the person withdrawing it. Nobody has argued the other way.

بولی is kept, named **once**, on the page that first introduces the concept (the `if` concept
page), because it is what a learner will meet on Persian Wikipedia, Quera and Faradars.
Everywhere after that first naming the term is منطقی. That is the mirror image of the row's
previous structure, with the two terms swapped in priority.

One collision to watch, recorded on the row: «مقادیر منطقی» (boolean values) and «عملگرهای
منطقی» (logical operators, already in the JavaScript interpreter catalog) are different
things and must keep their distinguishing noun.

## 2026-08-03: چیز is never the default word for "thing"

**Decided by:** native speaker mominchezgi, actioned by an
agent the same day. **Terms affected:** none; this is a writing rule, not a term mapping.
**Protected: this is a native speaker's decision and is not to be reversed by an agent.**

He asked for the point to be a standing rule rather than a per-page correction: English uses
"thing/things/anything" far more freely than Persian uses چیز, so translating it 1:1 stacks
چیز through a paragraph and reads as filler. The instruction is to understand what the
sentence actually means and pick the specific word, and where nothing specific fits, to
prefer a construction that drops the noun («می‌توانند هرچه باشند») over another چیز. The
same point had already been recorded once as a per-page reviewer note on
`concept/using-functions`; it is now an imperative in `guide.md`, "Grammar", and the
per-page note stands as the worked examples for it.

## 2026-08-03: Arrays page corrections (عنصر, بولی plural, bare ordinals)

**Decided by:** native speaker mominchezgi, actioned by an
agent the same day. **Terms affected:** the `Boolean` row's plural note and the new
`item / element (of an array)` row.
**Protected: both are a native speaker's decisions and are not to be reversed by an agent.**

- **item/element → عنصر, never آیتم.** He asked for آیتم to be replaced with عنصر
  throughout the Arrays concept page. The page was already using عنصر for the `<define>`d
  "element" and آیتم for English's "item", which are the same thing in this material, so the
  fix is one word for both rather than a two-term split. آیتم was the only Persian content
  anywhere using it (swept: the Arrays page was the sole occurrence across all translated
  Persian files), so the row records a decision rather than triggering a cross-content sweep.
- **بولی takes no plural marker.** «بولی‌ها» is wrong because بولی is an adjective; where
  English writes "Booleans" the Persian is «مقادیر بولی» (boolean values). Recorded on the
  existing `Boolean` row.
- **A bare ordinal or adjective needs its noun.** He flagged «اگر بخواهیم اولین را بیرون
  بیاوریم» (it needs «اولین عنصر»), and made the same point a second time on the thread, so
  it is generalized into `guide.md`, "Grammar", rather than fixed only in place.
- **«درست»/«غلط» in guillemets in a boolean context.** Already a standing rule in
  `guide.md`'s "Style notes" ("Boolean values go in guillemets"); the Arrays page simply was
  not following it. Nothing new was written, the page was corrected.
- **No comma before و.** Likewise already a `guide.md` rule; three violations on the page
  were fixed, two by starting a new sentence.

**Open, not decided: he proposes replacing بولی with منطقی.** That reverses a bootstrap
decision and is deliberately left untouched here, pending a human call. See the `Boolean`
row and the "Values & data types" term rationale below for the existing reasoning.

## 2026-08-03: No English term in brackets after a Persian term, ever

**Decided by:** native speaker mominchezgi,
ratified by the owner (iHiD) on 2026-08-03 and actioned by an agent the same day. **Terms
affected:** none; this is a formatting rule, not a term mapping. **Protected: this is a
native speaker's decision and is not to be reversed by an agent.**

mominchezgi objected twice, on the same thread, to the parenthetical-English pattern that
`global/voice.md`'s markup expansion produces for a target-primary term, e.g. «توابع
(_functions_ به انگلیسی)»: *"Sadly I see this ... Please never ever use them"*. Everything
else he raised on that thread had been fixed; this one had not, and our reply on the thread
had defended it as a course-wide styling decision instead. It is not one that survives a
native speaker saying "never ever": the guide defers to the human.

- **`guide.md`, "Term clarification (Persian realisation)".** The Persian-primary bullet no
  longer produces a bracket. It now states the override explicitly, because a worker loads
  `voice.md` as well as the guide and would otherwise follow `voice.md`'s default: Persian
  never appends an English term in brackets after a Persian term, and never writes the
  marker `به انگلیسی` at all, in any content type, whether or not the source `<define>`s
  the term.
- **What is kept.** The two bracket forms whose brackets carry *Persian* are unaffected,
  because the objection was to being shown English the reader did not ask for: an
  English-primary term still glosses into Persian (`_API_ (رابط برنامه‌نویسی کاربردی)`), and
  a code identifier still carries its Persian meaning (`` `turnLeft` `` (به چپ بچرخ)).
- **`guide.md`, "Loanword policy".** The bullet that permitted a bracketed English gloss
  where the source has a `<define>` (itself the narrowed form of the older first-use rule,
  see 2026-08-01 below) is replaced by the flat prohibition.
- **Existing content swept.** 33 occurrences removed across 12 already-translated Persian
  files (10 concept pages, 2 exercise instruction pages). "Never ever" is not a per-page
  request, so the sweep covered everything already translated, not just
  `concepts/using-functions`.
- **Expected checker noise.** `check-translation`'s gloss-count check is a heuristic that
  compares bracketed glosses against the source's `<define>`/`<literal>` count, so Persian
  pages will now WARN with a lower gloss count than tags. That is the rule working, not a
  failure. It is a WARN and never gates a pass.

## 2026-08-03: Hue is فام; "draw" is رسم کردن; "choice" (noun) is گزینه

**Decided by:** native speaker mominchezgi, actioned by an agent on 2026-08-03. **Terms affected:** the
new `hue`, `draw (a shape)`, `canvas` and `choice` rows.
**Protected: `hue`, `draw` and `choice` are a native speaker's decisions and are not to be
reversed by an agent.** `canvas` (بوم) is the agent's own drafting, see below.

- **hue → فام.** The Rainbow exercise used رنگ‌مایه in its instructions and its own catalog
  but فام in the shared `draw` category catalog, and mominchezgi asked for one term so the
  reader is not left guessing whether they are the same thing. فام is the settled Persian
  equivalent: Persian Wikipedia's article on Hue is titled فام, and its اچ‌اس‌ال و اچ‌اس‌وی
  (HSL/HSV) article names the H component فام رنگی. رنگ‌مایه appears in neither and reads
  closer to "tint/tone", which is a different colour property. Every occurrence in Persian
  content was swept to فام.
- **draw → رسم کردن.** mominchezgi flagged «رنگین‌کمان را بکشید» as ambiguous, because
  کشیدن means both "draw" and "pull". رسم کردن carries only the drawing sense. Applied to
  the task and scenario names, the hints, the instruction prose, the `rectangle` function
  description and its category label.
- **choice (noun) → گزینه.** mominchezgi asked for گزینه rather than انتخاب, quoting the
  `getYukiChoice` describer. The verb is untouched: انتخاب کردن is still how a player
  chooses, and only the noun moved. **Narrowed by the same reviewer on 2026-08-04 (see the
  top of this file): گزینه is an option from a fixed set, and a person's own choice is
  انتخاب.**

**canvas → بوم is the agent's own drafting, and is a deliberate departure from the wording
mominchezgi suggested.** He asked for «بوم را پاک کرد» to be restructured to «الان تخته
خالی است». The restructure was applied, but with بوم kept rather than تخته, because تخته is
already the agreed word for the instruction board (the 2026-07-30 owner decision below,
whose whole point is that one board is one word), and بوم is what the Rainbow task
description already calls the drawing surface. Using تخته for the canvas would have created
exactly the one-thing-two-words problem he raised about hue, one row further down. The
string now reads «الان بوم خالی است». **This needs his confirmation**; if he wants تخته
after all, that is a decision about the board row too, not just this string.

## 2026-08-02: "instruction" is دستورالعمل, not دستور

**Decided by:** native speaker mominchezgi, actioned by an
agent the same day. **Terms affected:** the `instruction` row.
**Protected: this is a native speaker's decision and is not to be reversed by an agent.**

The row previously said دستور, with a note explicitly rejecting دستورالعمل as reading like
an official manual. That note was an agent's own judgement at bootstrap, never a native
speaker's; mominchezgi asked plainly for the opposite ("don't translate instruction to
دستور, translate it to دستورالعمل") after reading the live pages, so the reviewer's call
stands and the note has been rewritten.

The overlap the old note called deliberate is now a distinction worth keeping: **statement**
stays دستور (دستور شرطی for an if statement, «دستور `repeat`»), because it names a piece of
code syntax, while an **instruction** someone is handed is دستورالعمل. Nothing that
translates "statement" was changed, in the curriculum or in the JavaScript interpreter's
error catalog (which uses دستور throughout for `statement`, correctly).

## 2026-08-01: Guide and glossary contradiction resolved (first-use auto-gloss)

**Decided by:** agent, applying `global/voice.md` as the higher authority. **Terms
affected:** `AI` (Notes column only; the term and its Persian gloss are unchanged).

Two places told the translator to gloss on first use, which `global/voice.md` forbids:
glossing is triggered **only** by a `<define>` tag in the source, and the tidy pass in
`global/translating.md` lists an unprompted parenthetical as something to remove. `voice.md`
outranks the guide, so both were repointed at `<define>`.

- **Guide, "Loanword policy".** "Gloss the English term once per file on first occurrence"
  ("تابع (function)" then "تابع") is replaced by the `<define>`-only rule. The test it
  carried, which terms deserve a gloss at all (genuine CS jargon yes; a word a
  non-programmer already knows, no), was kept in full and re-attached to `<define>`
  expansion, where it serves `voice.md`'s "skip a gloss that would teach nothing".
- **Guide, "Keep in English".** The Latin-script term list said those terms were "glossed
  once in Persian on first use". The list itself is unchanged. The gloss instruction is now
  split: an acronym in that list is still explained in Persian rather than left bare or
  transliterated, because `global/voice.md` mandates that separately under "Acronyms and
  foreign terms"; any other bracketed gloss comes only from a `<define>`.
- **Glossary, `AI` row.** "Gloss once on first use per the glossary" now reads "Gloss it in
  Persian only where the source `<define>`s it, never on first use of your own initiative".
  The decision (English "AI" in prose, هوش مصنوعی as the gloss, flagged for native-speaker
  confirmation) is untouched.

## 2026-08-01: Rationale moved out of `guide.md`

**Decided by:** owner (iHiD), as a guide audit. No rule changed; nothing was re-decided.
`guide.md` is loaded into the prompt for every Persian item in every pass, so the reasoning
behind its rules was moved here and the rules themselves left stated imperatively. About a
third of the file was record-of-the-conversation rather than instruction. What was removed,
and why each choice was made, is below so none of it is lost.

**Where the research came from.** Persian has no Duolingo course and no Duolingo site UI at
all (checked, absent), so unlike most languages there is no Duolingo tone to benchmark
against; this is the same position as Urdu. The guide was instead built from real Persian
tech-education writing: Quera (quera.org/blog) and Faradars (blog.faradars.org), both
long-running, human-authored Iranian CS-education publishers, cross-checked against Persian
Wikipedia's programming articles and its own house style manual.

**Why formal شما, not informal تو.** This looks like a departure from other languages'
"use the informal register", and is not. Quera and Faradars, both checked directly,
consistently address the reader with شما, never تو. From an unfamiliar voice,
تو reads as presumptuous rather than warm; شما is the actual modern, everyday-appropriate
register for this kind of instructional writing, not a formality downgrade. Same correction
Urdu documents for Urdu.

**Why Persian-native digits.** Explicit, sourced Persian Wikipedia house style
(ویکی‌پدیا:شیوه‌نامه/تاریخ‌ها و اعداد), corroborated by real tutorial prose (Faradars) and by
Persian Wikipedia's own CS articles. This is the **opposite** convention from Arabic and
Urdu in this repo (both use Western digits): a genuine, deliberate per-language difference,
not an inconsistency for anyone to "fix" later.

**Video-player numerals are an app problem, not a translation one.** UI chrome numerals a
translator never touches, such as the video player's time/duration readout, still
conventionally read as Farsi digits for a Persian audience. That readout is rendered by a
third-party video-player component, not by any translated content, so it is app-level locale-aware number formatting work.

**Why no manual bidi markup.** Real Persian technical sources embed English code and
keywords directly in running RTL prose with no inserted directional-override characters and
rely on the renderer's bidi algorithm, so the guide requires the same.

**Why native Persian primary for core CS vocabulary.** Unlike Arabic (which leans toward
heavy Arabization of nearly everything, given a lower average English proficiency in that
audience), Persian already has comfortable, settled, non-awkward native terms for
programming fundamentals in real everyday use (تابع, متغیر, حلقه, آرایه, رشته, اندیس). These
are not stiff or mocked Academy calques the way some consumer-tech coinages are (compare
دندان آبی for Bluetooth); they are the ordinary words real Iranian developers and CS
educators use.

**Why one link of the chain is never حلقه.** زنجیر is the ordinary, concrete Persian word
for a physical chain and is safe unqualified for the array metaphor as a whole. But the
natural Persian word for one *link* of a chain is حلقه, which is the settled term for
**loop**. Arrays and loops are taught close together, so a bare حلقه for a chain link risks
real confusion between two concepts on one page, hence دانه (bead) or قطعه (segment)
instead. زنجیر itself is never at risk; only "link" is. The rule itself already lives on the
`loop` and `chain` glossary rows, so the guide's copy of it was redundant and was dropped.

**Why Persian guillemets.** «…» are the standard Persian quotation marks (Persian Wikipedia
house style, and universal in Quera/Faradars prose).

**Two native-speaker flags whose rules stay in the guide.** A native speaker flagged the
doubled این in «هدف این تمرین این است» as an audible duplication, and flagged a named UI
element left unquoted in prose as ambiguous (hence wrapping such names in «…»). The rules
are in the guide; the attribution is here.

**Owner precedents.** Product/strand names (descriptive strand names translated, coined and
branded names kept English) and AI terminology (use "AI" in prose, glossed once as
هوش مصنوعی) were both owner decisions following the Hungarian precedent. The AI section was
dropped from the guide entirely because the glossary's `AI` row already carries the same
instruction word for word. The two strand-name renderings in the guide («برنامه‌نویسی یاد
بگیرید», «ساختن یاد بگیرید») are still unconfirmed drafts and worth checking with a native
speaker on their first real use; the guide's inline "confirm on first use" aside was dropped
because the engine that reads the guide has no channel to report on.

## 2026-07-31: Pruned ordinary vocabulary

Removed 12 rows that had one obvious canonical Persian rendering and nothing to decide:
programming/coding, (programming) language, array, index (array index), string, data type,
if statement, variable, nested, error, mental model, exercise. A reviewer might query "if
statement" (دستور شرطی), cut because its own Notes were empty; the collision it guards
against is still recorded on the surviving `condition` and `instruction` rows. No protected
or dated-decision row (board/whiteboard, interpreter, Boolean, Keep in English, the
metaphors) was touched.

## 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`.
**Terms affected:** `interpreter`, and, as a principle, every row.

Two decisions came out of that pass that bind Persian:

- **`interpreter`.** **Persian did not change:** مفسر was already right, because it is an agent noun (the one
  who interprets/expounds) that is used of people first and carries no device or program
  morpheme.

A third decision, "default to the ordinary, common word" whatever its etymology, now lives
in `global/voice.md` as a general principle rather than a per-language note.

## 2026-07-30: Agent's own drafting in the same pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.
**Terms affected:** the rows this pass added for the Using Functions concept page (the
Functions & control flow and the physical metaphors sections in particular), and the
guide's quotation-mark examples.

The rows this pass needed for the concept page were drafted and added rather than
correcting any existing decision. Separately, the guide's quotation examples were changed
from the German-style low quotes `„…"` to Persian guillemets `«…»`, because guillemets are
the standard Persian quotation mark (Persian Wikipedia house style, and universal in
Quera/Faradars prose), not because anything about the previous examples had been agreed
with a native speaker.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`, `Boolean`) is not
repeated here.

### Values & data types

| Term | Why |
|------|-----|
| array | Standard Persian CS term; confirmed via Persian Wikipedia, Faradars, sariasan. |
| index (array index) | Dominant generic CS term for an array index; confirmed via Persian Wikipedia, Faradars. |
| string | Already the comfortable, established primary Persian term (unlike some other languages that keep "string" in English); confirmed via general Persian CS usage. |

### Functions & control flow

| Term | Why |
|------|-----|
| function | Confirmed via Persian Wikipedia, Quera, Faradars, tahlildadeh. |
| if statement | Confirmed via Faradars, fa.wikibooks. |
| condition | Confirmed via Faradars, fa.wikibooks. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| variable | Confirmed via Persian Wikipedia, Quera, Faradars. |
| loop | Confirmed via Persian Wikipedia, Quera, Faradars. |
| nested | Confirmed via Faradars («if-elseهای تو در تو» for nested if-else). |
| error | The standard Persian CS term; ordinary enough that a beginner reads it without help. |
| mental model | The picture-in-your-head framing («یک آدم کوچک داخل کامپیوتر زندگی می‌کند»). The ordinary Persian phrase, used as-is in Persian writing about learning. |

### Keep in English

| Term | Why |
|------|-----|
| AI | Owner precedent, following the Hungarian decision. |

