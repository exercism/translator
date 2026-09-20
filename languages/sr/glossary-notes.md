# Serbian (sr) glossary notes

## 2026-09-20: Adapted for Exercism (agent; nothing here is a native speaker's decision)

This glossary was forked from Jiki's Serbian glossary when Exercism's translator repo was
created. Exercism and Jiki are separate products, and this glossary is Exercism's from here
on. Everything that was about Jiki's own product (its courses, its exercise stories, its
characters and physical metaphors) went with the fork; every decision about the Serbian
language itself was kept, including the ones a native speaker made. Where a native speaker had
settled one of the removed terms, the decision is recorded below as retired rather than
deleted.

**Added: `Exercism product vocabulary: PROPOSED, NOT YET AGREED`.** The English terms the
product's own nouns are built from, with the target column left empty. Nobody who speaks
Serbian has been asked yet, and an agent's invented rendering would read as an agreed one.

### Retired with the fork, with the decision recorded

These rows named things Exercism does not have, so the rows are gone. The renderings are
kept here because the reasoning still stands if any of these words is ever needed again.

- **The guide character's name, transliterated.** A decision by Jeremy, 2026-08-24, on
  little_mouse's report that the Latin spelling read as "Yikee" to a Serbian speaker: a
  **person's** name in narrative prose is transliterated and declined normally (genitive
  „-ja“, dative „-ju“), while a **product or brand** name keeps its Latin spelling. The
  general rule survives in `guide.md`; only the character it named is gone.
- `scenario` → scenario (an exercise test case, a structure Exercism does not have).
- `pathway` → putanja. Keep distinct from "staza" (the track row below); both mean "path" but were assigned to
  different concepts.
- `bootcamp` → butkamp. **(a native speaker's decision)** Corrected from the hybrid
  spelling "bootkamp" per native-speaker feedback: a loanword adopted into Serbian prose
  is respelled phonetically throughout, not half-kept in its English spelling. Declines
  normally ("butkampa", "u butkampu"). Deliberately not "kurs", which is spoken for by
  `course` above.
- `track (a curriculum path, a different thing from Exercism's track)` → staza. Keep
  distinct from "putanja" (pathway) above.

## 2026-08-26: `smart` (attire) is "poslovno" and `formal` (attire) is "svečano" (settled)

**Decided by:** native speaker **little_mouse** on the pinned Serbian glossary thread
([post 25]). **Terms affected:** `smart (attire)`,
`formal (attire)`. **Status: human-decided, settled. Both are now rows in `glossary.md`.**
**Files affected:** `glossary.md`, plus `bouncer-dress-code`'s `instructions.md` and message
catalog in `../i18n/locales/sr/` (swept in the same pass; see below).

This closes the question left open on 2026-08-04 in the two entries below, and it took five
posts of narrowing to get there.

**The arc.** little_mouse first flagged the draft "elegantno" as over-shooting toward the
formal end of the register scale, without supplying a replacement (post 15). Returning to it
on 2026-08-26 she was audibly unsure: hedged, self-contradictory, no term she would stand
behind (post 19). What unstuck it was not asking her again but telling her what the word
actually has to do in this exercise. Asked whether "biznis-kežual" would survive repeated use
in exercise prose (post 20), she asked back for the exact register, "shirt but no tie?"
(post 21). The answer was that there is no fuzzy register to pin down: in
`bouncer-dress-code`, "smart" is a **literal code category**, `outfit == "suit"` or
`"dress"`, exactly as "formal" is `"ballgown"` or `"tuxedo"` (post 22). She then guessed at a
four-tier system, and was corrected to the real shape (post 24): **two named tiers only**,
formal (ballgown/tuxedo, adults also get champagne) and smart (suit/dress, canapés only, no
champagne), with everything else a single bucket where only guest-listed children get in.

**Given that, she answered plainly:** "maybe top tier - 'svečano' and middle - 'poslovno' -
like business". That is treated as a settled native-speaker decision, not another round of
input, and the contrast with post 19 is the reason. There is no hedge in it: no "I am 80%
sure", no "maybe we should read fashion texts", no reopening the question in the closing
line. The single "maybe" attaches to the tier labelling, not to the words. And "poslovno" is
a **real, ordinary Serbian adjective** meaning businesslike, not a coined compound: the
2026-08-04 entry ruled out inventing something like "poslovno-ležerno" precisely because
constructed options were not ours to coin, and this is the opposite case, a plain word a
native speaker reached for herself. Per "Decisions" in `global/workflow.md`, a confident
native-speaker call is the decision; sending it back for a further round of confirmation
would be treating clarity as if it were doubt.

**Why "poslovno" is right on the merits, too.** The 2026-08-04 objection was that English
"smart" names a register *between* casual and formal, closest to business-casual, and that
"elegantno" reaches past it. "poslovno" lands on exactly the register she said was missing,
and it does so while satisfying the two costs that blocked the earlier candidates: it is not
bare English (so the guide's loanword rule is untouched), and it sits naturally beside a
fully Serbian "svečano" in the same list of categories. It also matches what the code
literals actually mean, since `"suit"` and `"dress"` are business wear, not eveningwear.

**`formal` = "svečano" is confirmed rather than changed.** It had been the published wording
since the exercise was first translated but was never written into `glossary.md`, and the
2026-08-04 entry flagged it as worth revisiting in the same breath as `smart`, since the two
are read as a pair. Post 25 names it directly as the top tier, so it is now a row on the same
authority as its partner. The earlier alternative "formalno" stays rejected for the reason
already recorded: it narrows toward serious/business dress, which is now exactly what
"poslovno" covers, so using it for the gala tier would blur the two categories the exercise
needs to keep apart.

**Content sweep.** "elegantno" was live in the published `bouncer-dress-code` translation, in
both `instructions.md` (the rules list and the category definitions) and `messages.json`
(scenario feedback, the exercise description, and a hint answer). Because the swap is a clean
adjective-stem substitution with identical declension (`elegantn-` → `poslovn-`), it was
applied in the same pass rather than deferred, and re-checked and re-stamped with
`validate.mjs`. The exercise still needs re-publishing to the review site before the thread
reads as acted on. One unrelated hit was deliberately left alone:
`space-invaders-repeat/instructions.md` uses "elegantniji način" in the ordinary sense of a
neater solution, which has nothing to do with attire.

## 2026-08-06: `milestone` is "etapa", not "prekretnica" and not "dostignuće" (settled)

**Decided by:** an owner-authorised ruling (Jeremy explicitly asked for a final call on this
one disagreement rather than continued escalation) made by a dispatched agent, on the pinned
Serbian glossary thread after three rounds of
native-speaker input that pulled in opposite directions. **Terms affected:**
`milestone`. **Status: settled** (it supersedes the "OPEN: `milestone` in the dashboard UI"
item below, which is kept for the record). **Files affected:** `glossary.md`,
`front-end/app/messages/sr.json`.

### What the reviewers said

- **miroslav-inc** ([post 3], and again in
  [post 17]): "prekretnica" is wrong, because a milestone is
  an achievement, so the word should be "postignuće" or "dostignuće" (or the English
  "milestone" left untranslated).
- **little_mouse** ([post 8]), independently: not
  "prekretnica", "since it is used more like some accomplished mid-goal here"; offered
  "tačka", "cilj", or miroslav-inc's "dostignuće".
- **aleksaelezovic** ([post 11]): keep "prekretnica" as the
  closest translation of the English word, while conceding it is "more similar to word
  checkpoint" and offering "cilj", "dostignuće" or "faza" for the dashboard use case, ending
  "I would just discuss milestone some more maybe, or change it in the future".

### The two things that settled it

**1. "dostignuće" is already taken, in shipped Serbian copy.** There was a separate
**Achievements** feature, whose Serbian sidebar entry already read **"Dostignuća"**. So miroslav-inc's and little_mouse's instinct that a milestone is
"something achieved" is right about the feeling, but the word that carries it is spoken for:
adopting it for `milestone` would put one Serbian word on two different product concepts,
which is exactly the collision the `streak`/`niz` and `feature`/`funkcija` rows already
guard against. This is the piece of information none of the three reviewers had, and it is
what makes the choice decidable rather than a matter of taste.

**2. The English string is a numbered path marker, not a turning point.** The concept is
`dashboard.exercisePath.milestone.label` = "Milestone {index}", rendered on a path whose
first node is literally "The Start of your Journey", and the roadmap speaks of "Milestones
6-10 ... extending the journey". So a milestone there was a numbered leg of a journey that
a learner works through and completes. "Prekretnica" cannot carry that: it means a turning
point, a moment where direction changes, which is not what "Milestone 3" is. (miroslav-inc
glossed it as "crossroad"; the precise Serbian for crossroad is "raskrsnica", but his
underlying objection stands, and two of the three reviewers made it independently.)

### Why "etapa"

**"Etapa"** is a leg of a journey: the dictionary sense is "deo puta koji se pređe između
dva odmora", and in sport it is the numbered section of a course ("treća etapa"). It is
ordinary, unmarked Serbian, used equally for stages of a project and legs of a race
("završetak prve etape"), and it numbers cleanly: "Etapa 1", "Etapa 2". It keeps the road
metaphor the English word carries, which is the thing every other candidate drops.

It also answers aleksaelezovic's real objection, which was not that "prekretnica" is
semantically right but that a replacement would "seem kind of silly in the dashboard UI and
give away that it was just directly translated from english". "Etapa" is not a calque of
"milestone" at all: it is the word Serbian already uses for this shape of thing, so it reads
as native rather than translated. It is the same family as the "faza" he offered, but a
better fit, because "faza" is a period of time while an "etapa" is a stretch you cover and
finish.

Rejected alternatives: "dostignuće"/"postignuće" (collides with Achievements, above);
"prekretnica" (wrong sense, objected to by two of three reviewers); "faza" (phase, a period
rather than a leg); "cilj" (goal, and every milestone is not the goal); "tačka" (too bare on
its own); "ključna tačka" (project-management jargon, and clumsy numbered); leaving the
English "milestone" (the course localises platform vocabulary, and the row would be the odd
one out).

**Not a rebuke of any reviewer.** aleksaelezovic's "does it read as translated?" test is the
right test, and it is the test "etapa" passes; miroslav-inc's and little_mouse's reading of
the English meaning is the right reading, and it is what ruled "prekretnica" out.

## 2026-08-04: clothing-item terms confirmed and added; `smart` (attire) still open

**Raised by:** native speaker **little_mouse** on the `bouncer-dress-code` review thread, and **confirmed by the same reviewer** on
2026-08-04 in post 3 (post_id 3157). **Terms
affected:** `ballgown`, `tuxedo`, `suit`, `dress`, `denim`, plus further input on
`smart (attire)` and `formal (attire)`. **Status: all five clothing terms are confirmed and
now rows in `glossary.md`; `smart` remains open.**

**The exercise itself was approved** in the same post ("I think this can pass"), so
`exercise/bouncer-dress-code` is recorded as approved in `tracking.json`. The term points
below are separate from that sign-off and do not block it.

**Clothing-item terms, confirmed and now rows in `glossary.md`.** little_mouse suggested the
mappings below, noting the English stays in the code and any Serbian could appear as a
bracketed explanation:

| English | Serbian |
| --- | --- |
| ballgown | balska haljina |
| tuxedo | smoking |
| suit | odelo |
| dress | haljina |
| denim | teksas |

They were first logged here rather than in `glossary.md` because the reviewer signalled low
confidence three times in the same post ("I am 80% sure", "I am not sure", "maybe we should
read fashion texts"), and the hedging was not cleanly separable term by term: the list came
in the same breath as the `smart`/`formal` point they explicitly left unresolved. Per
"Decisions" in `global/workflow.md`, a low-confidence proposal goes back to the reviewer for
confirmation rather than being written in as settled, so a follow-up question was posted on the forum.

little_mouse answered it on 2026-08-04 in [post 3157] with
"I'm sure about clothing words", which withdraws the hedge from these five specifically and
confirms them exactly as first written (no wording changes). They are therefore now rows in
`glossary.md`, decided by a native speaker, and are not to be reworded or removed by an
agent. The confirmation is deliberately narrow: in the same post they kept `smart` and
`formal` open (see below), so the withdrawn hedge covers the clothing items only.

**`smart` (attire) still an unconfirmed draft; this post is input, not a resolution.** The
question was left open on the pinned glossary thread
(the forum, see the 2026-08-04 entry below), and this post is the
same reviewer returning to the same question rather than a new dispute. What is new is the
direction they lean: they now say "we don't have to nitpick", that "svečano" and "elegantno"
can stay as "less precise but OK", and offer `smart` = "smart" (bare English) and `formal` =
"formalno" as what they believe fashion writing uses. That is still hedged at 80%, and they
close by reopening it themselves ("maybe it could be actually changed or we should read
fashion texts"), plus a useful observation for whoever settles it: the two words are a
register scale, "smart is more casual than formal". So the published wording stands
unchanged, the row stays a draft, and the question stays open on the forum.

## 2026-08-04: `dress code` and `dead end` confirmed; `smart` (attire) stays open

**Decided by:** native speaker **little_mouse** on the pinned Serbian glossary thread
([post 3080]), answering the draft terms posted in
[post 2946]. **Terms affected:** `dress code`,
`dead end`, `smart (attire)`, `formal (attire)`. **Status: two settled, one left open.**

**`dress code` = "pravila oblačenja". Settled, moved into `glossary.md`.** little_mouse
noted that Serbian news and general writing freely mix in English terms, so "dres kod" is
also idiomatic and is arguably the clearer of the two, but described "pravila oblačenja" as
"more fluid, not like Latin" and closed with "we can also leave as it is". Read together,
that is a mild preference for the draft we already had rather than a correction of it, so
the draft is confirmed rather than swapped. It also matches the register the rest of the
Serbian glossary uses, which reaches for a native phrase where one reads naturally and
keeps English only where the English is the real technical token. The published
`bouncer-dress-code` exercise already used "pravila oblačenja" throughout (both
`instructions/sr.md` and the message catalog), so no content sweep followed from this.

**`dead end` = "ćorsokak". Settled, moved into `glossary.md`.** Confirmed unchanged ("OK").
Already in use across the `maze-turn-around` exercise.

**`smart` (attire) stays an unconfirmed draft.** This is the substantive point in the post
and it did not produce a term. little_mouse's objection is precise and correct: English
"smart" in dress is not "elegant". It names a specific register sitting *between* casual and
formal/elegant, closest to business-casual, whereas "elegantno" reaches for the formal end.
What was offered as the alternative was to keep the English word "smart" (they note Serbian
dress writing does borrow it), with "elegantno" accepted as "less precise but OK". No
Serbian rendering of the business-casual register was actually supplied.

Left as a draft deliberately rather than guessed at. Substituting a word little_mouse did
not give would be our invention wearing their authority, and the two candidates on the table
each have a real cost: keeping bare English "smart" cuts against the guide's loanword rule
(a borrowing that enters Serbian prose is respelled phonetically throughout, "framework" →
"frejmvork") and would sit oddly beside a fully Serbian "svečano" in the same list, while
"elegantno" is the imprecision they flagged. Constructed options such as "poslovno-ležerno"
were not proposed by anyone and are not ours to coin.

The published exercise keeps "elegantno" in the meantime, which is the reviewer's own
"less precise but OK", and a second opinion has been asked for on the thread. What would
settle it is a native speaker naming the Serbian phrase they would actually use for the
business-casual register, at which point it is a clean term swap across
`bouncer-dress-code`'s instructions and message catalog.

**`formal` (attire) = "svečano" stays unchanged.** little_mouse raised "formalno" as
possibly more precise (politicians, suits, serious dress, as against fancy dress generally),
then set the point aside themselves: "doesn't matter since this is not fashion text but IT
exercise". Not treated as a change request. There is also a reason to keep "svečano" beyond
inertia: the exercise's own `"ballgown"`/`"tuxedo"` values are gala wear, which "svečano"
covers and "formalno" arguably narrows. If `smart` is later settled with a business-register
word, this row is worth revisiting in the same breath, since the two are read as a pair.

The remaining drafts from post 2946 (`bouncer`, `guest list`, `standard library`,
`dictionary key`) were not commented on and stay unconfirmed drafts below.

## 2026-08-03: Proposed terms for the bouncer/maze family (unconfirmed drafts)

**Status: agent draft, not yet reviewed by a native speaker.**

Surfaced while translating Stage 2 batch 2 (bouncer-dress-code, maze-turn-around); the
remaining bouncer-family exercises (bouncer, bouncer-wristbands) still need these same
terms, so logging them now rather than re-deriving per exercise. None of these are in
`glossary.md` yet — do not treat them as settled.

- **bouncer** (the exercise's job title) → izbacivač
- **guest list** → spisak gostiju
- **standard library** → standardna biblioteka
- **dictionary key** → ključ

`dress code` → pravila oblačenja and `dead end` → ćorsokak were on this list and are now
confirmed and in `glossary.md` (see the 2026-08-04 entry above). `smart (attire)` was on it
too, drafted as "elegantno"; it was settled as **"poslovno"** on 2026-08-26 and is likewise
now a row in `glossary.md` (see the 2026-08-26 entry at the top).

If a native speaker confirms or corrects any of these on the forum, move it into
`glossary.md` as a normal additive row and remove it from this list.

## 2026-08-02: `bootcamp` is "butkamp", not "bootkamp"

**Decided by:** native speaker **aleksaelezovic** on the pinned Serbian glossary thread
([post 2522]), answering the questions asked in
[post 2484]. **Terms affected:** `bootcamp`.
**Status: human-decided, settled.**

The row read **"bootkamp"**, a hybrid that keeps the English "boot" spelling and respells
only the second half. aleksaelezovic gave "butkamp" (noting it is "not really a word") or
plain "kurs" as the two options.

**"butkamp" is picked.** Two reasons. The guide's own loanword rule is that a new loanword
adopted into Serbian prose is respelled phonetically *throughout* ("framework" → "frejmvork"),
which "bootkamp" only half does, so the old spelling was inconsistent with the language's
stated pattern rather than a deliberate exception. And "kurs" is already the agreed rendering
of `course` (the whole course a learner is taking), so reusing it for `bootcamp` would
collapse two curriculum-vocabulary terms the glossary deliberately keeps apart. That
aleksaelezovic calls "butkamp" "not really a word" is expected of a recent loanword and is
not an objection to it; the row records the declension so it is used as an ordinary Serbian
masculine noun.

The published Serbian `arrays` concept page carries the old "bootkampa" and needs the
corresponding content fix; a glossary change does not update already-translated files.

## 2026-08-02: `toggle` splits into a noun and a verb row

**Decided by:** native speaker **aleksaelezovic** on the pinned Serbian glossary thread
([post 2522]), answering the questions asked in
[post 2484]. **Terms affected:** `toggle`.
**Status: human-decided, settled** (the split and the noun; the verb is settled *as*
context-dependent).

There was a single row, `toggle` → **"preklopiti"**, which is a verb, so the one row was
silently doing two jobs and answered the noun sense with an infinitive. aleksaelezovic
answered the two senses separately, so the row is now two:

- The **noun** `toggle` (the two-state control itself) is **"prekidač"**, the ordinary
  Serbian word for a switch. Clean substitution, settled.
- The **verb** `to toggle` has no single-word Serbian equivalent: as he put it, it "really
  depends on the context and there is no single word verb that it can be directly translated
  to". The row therefore carries **"prebaciti"** as the general-case default with an explicit
  caveat that a translator picks the verb fitting the actual action rather than forcing this
  one. The context-dependence is the decision, not a gap in it; this is the same shape as the
  `deploy` row settled on 2026-07-31.

This also closes the `toggle` question left open by little_mouse's post (entry below), which
had offered "prebaciti", "promeniti", "invertovati" and "prekidač" without picking between
them. The reason it looked unresolvable there is that the options are answers to two
different questions: "prekidač" is the noun, the rest are the verb.

## 2026-08-02: `dictionary` = "rečnik" and `milestone` = "prekretnica" confirmed by a second native speaker

**Confirmed by:** native speaker **aleksaelezovic** on the pinned Serbian glossary thread
([post 2522]), answering the questions asked in
[post 2484]. **Terms affected:** `dictionary`, `milestone`.
**No rendering changed.**

- **`dictionary` → "rečnik": human-confirmed, protected.** This is a second independent
  native speaker endorsing the rendering little_mouse corrected "mapa" to (entry below). The
  row is now backed by two native speakers and must not be changed back by any pass.
- **`milestone` → "prekretnica": unchanged, but the question stays OPEN.** See the open item
  below; this is not a clean confirmation.

### OPEN: `milestone` in the dashboard UI, revisit later

**Superseded on 2026-08-06** (see the top entry: the row is now "etapa"). Kept as written for
the record of what each reviewer argued.

aleksaelezovic keeps **"prekretnica"** for now, on the grounds that it is the closest
translation of the English word itself, and adds that "anything other than `prekretnica`
seems kind of silly in the dashboard UI and gives away that it was just directly translated
from english". So the row stands and nothing changes.

But he raises a real tension rather than closing it: "prekretnica" is, in his reading, nearer
to **`checkpoint`** than to `milestone`, and he offers "cilj" (goal), "dostignuće"
(accomplishment) and "faza" (phase) as candidates that might fit the dashboard use-case
better, ending with "I would just discuss `milestone` some more maybe, or change it in the
future".

**Status: open, deliberately unresolved.** Three earlier passes have now landed on the same
spot: miroslav-inc proposed "dostignuće" (2026-07-31 entry below, not actioned because
*achievement* is a different concept and may be wanted for its own feature), little_mouse
proposed "tačka"/"cilj"/"dostignuće", and aleksaelezovic now proposes "cilj"/"dostignuće"/
"faza" while preferring the status quo. What none of the three had is the thing that would
settle it: the actual dashboard string in context, and a decision about whether `milestone`
and `achievement` are two separate product concepts. Revisit when the dashboard
copy is real; do not re-litigate the row from the glossary alone.

## 2026-08-02: `dictionary` is "rečnik", not "mapa"

**Decided by:** owner (iHiD), on the correction of native speaker **little_mouse** on the
pinned Serbian glossary thread ([post 8], post id 2371).
**Terms affected:** `dictionary`. **Status: human-decided, settled.**

The row read **"mapa"**. little_mouse's point is that the two words are split by language in
Serbian developer usage: "mapa" (and the verb sense "mapiranje") is what Java's `Map` type is
called, while Python calls its dictionaries "rečnik". The `dictionary` concept teaches the
Python-style key/value dictionary, not a Java `Map`, so "mapa" points a Serbian reader at the
wrong language's data structure. "rečnik" is also the literal translation of "dictionary". The
row now reads "rečnik", and the note records the Java-vs-Python split so a future pass does not
reintroduce "mapa".

The already-translated Serbian JavaScript interpreter catalog carried "mapa" in the two error
messages whose English says "dictionary" (`InOperatorRequiresObject`,
`InWithArrayNotAllowed`); both were updated to "rečnik" with the change.

The same post raised four other terms, **none of them actioned here** because each is a choice
between several plausible options rather than a single clean substitution: `increment`
("inkrement" / "inkrementirati" for the `++` sense specifically, argued as not merely
academic), `toggle` ("preklopiti" questioned; "prebaciti", "promeniti", "invertovati" or
"prekidač" offered instead, with the reviewer unsure), `milestone` ("prekretnica" reads as a
turning point rather than an achieved mid-goal; "tačka", "cilj" or another reviewer's
"dostignuće" offered), and `bootcamp` ("bootkamp" questioned; plain "bootcamp",
"intenzivni kurs" or "kurs" offered). The post also noted "ugnježden" as an equally valid
spelling variant of `nested` (no change needed), and observed that Serbian IT people are often
more comfortable with English UI words such as "Save" and "Edit" than with translations.

## 2026-08-02: Proposed terms from the Stage 2 batch 2 catch-up pass (unconfirmed drafts)

**Decided by:** agent (proposals only, nothing written to `glossary.md`). The catch-up pass
translating `two-fer`, `strings`, `digital-clock`, `arrays`, `weather-symbols`.

**Conflict, needs settling:** `piece of paper` (string metaphor) — this batch's `strings`
item proposes _папир_, but the earlier `if` pass proposed _папирић_ for the same term. One
has to win.

**Two rows narrow existing agreed metaphors, worth a native-speaker check before agreeing:**
`slot` (bare/generic) → _отвор_ sits beside the already-agreed "input slot = улазни отвор";
`box` (weather-symbols forecast grid cell) → _поље_ was deliberately kept distinct from the
value-container `box → кутија`, which is the right call but should be confirmed rather than
assumed.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| compound data type | сложени тип података | | high |
| coin (number metaphor) | новчић | | high |
| item (informal, vs technical "element") | ставка | | medium |
| template string | шаблонски стринг | | medium |
| meridiem (am/pm marker) | kept as-is, quoted on first mention | | medium |
| week (scenario names) | седмица | Not "недеља", which also means Sunday. | medium |
| counter (loop counter) | бројач | | low |

Possible `global/terms.md` gaps flagged: `coin`, `piece of paper`, `template string`,
`meridiem`, `counter`.

## 2026-08-01: `guide.md` trimmed to rules only

**Decided by:** agent, on an owner-requested pass over `languages/sr/guide.md`.
**Status:** editorial, plus two **unconfirmed drafts** flagged below. No term mapping
changed, and no glossary row was touched.

The guide is loaded into the prompt for every Serbian item, in every pass, so the pass
removed everything in it that was rationale, provenance or a restatement of a global file
(9,570 → 6,022 characters, −37%). Every behavioural instruction was kept. What was removed,
and is recorded here instead:

- **Script provenance.** The Latin-script decision was justified by the fact that every
  real source of Serbian programming education (Petlja.org, university course material, dev
  blogs) writes in Latin script, even on platforms that otherwise default to Cyrillic for
  general content, and that dropping the diacritics is a casual chat/SMS convention rather
  than something serious educational writing does. The imperative rule stays in the guide;
  the evidence is here.
- **The whole "Audience specifics" section.** It said that readers are in Serbia and other
  Serbian-speaking communities, and that real Serbian CS-education material already leans on
  concrete physical metaphors for abstract concepts (a variable as a "little box", array
  elements as "boxes on a shelf", encapsulation as "cocooned data"), so a metaphor-driven
  family is a natural fit rather than an import. That is research provenance, not an
  instruction: `global/voice.md` carries the audience profile and `global/rules.md` carries
  the "metaphors are load-bearing" rule. The individual attestations are already in the Term
  rationale table below.
- **The ти/ви justification.** The guide argued the informal "ti" choice at length:
  institutional Serbian CS material (official course manuals, university textbooks) actually
  defaults to formal "vi", but that register belongs to academic/institutional writing rather
  than to this warm, informal, mentor-like brand voice; "ti" is what real Serbian marketing
  and youth-oriented tutorial content uses, and matches the other languages. The
  rule ("use ti, never vi") is unchanged in the guide.
- **Cross-language commentary on word order.** A parenthetical compared Serbian's
  topic/focus word order with the more rigid focus-position system documented in Hungarian's
  guide. Serbian's word order is freer than English but not rule-governed the way Hungarian's
  is, which is why the guide states it as "reorder for naturalness", not as a positional rule.
- **The "Worked examples" tail.** Its titles, calls-to-action and natural-phrasing bullets
  restated `global/voice.md` with Serbian illustrations: "Stiže Exercism" / "Upoznaj
  Exercism" rather than a melodramatic "Rođen je Exercism"; "Nov način da naučiš programiranje" rather than the
  redundant "Jedan novi način učenja programiranja"; "Počni odmah!" / "Prijavi se odmah!"
  rather than the vague "Pridruži nam se!"; "Probaj besplatno!" / "Isprobaj ovo!"; "Hajde da
  naučimo React" rather than the flatter "Naučimo React". The two examples that taught the
  ti-form/aspect rule something the rule alone did not ("Prvo instaliraj Node.js", "Probaj da
  pokreneš ovaj kod") moved up into the Formality section and are still in the guide.
- **The acronym bullet.** It instructed that "API" be explained as "skup pravila koja
  omogućavaju da dva programa međusobno komuniciraju" and "CLI" as "komandna linija" rather
  than glossed letter by letter. Both are already glossary rows in the "Keep in English"
  table, with that exact Serbian text, and `global/voice.md` carries the general principle.
- **Rationale trimmed from surviving rules.** That an invariant technical noun is "the single
  biggest source of machine-translated-sounding Serbian"; that the gendered-participle problem
  "comes up constantly in walkthrough prose"; that the identical-loanword gloss "bites often,
  because so many Serbian technical terms are Latin-spelled loanwords". All true, none of it
  changes what a translator does.
- **A "flag it for a native-speaker check" instruction on product-name inflection**, with
  the observation that no inflected form had yet appeared in a real translated file.
  `global/rules.md` ("When unsure") already covers flagging anything ambiguous, so this was
  a duplicate.

### Two conflicts resolved

- **Quotation marks (unconfirmed draft).** The guide stated no quotation convention but its
  own Serbian examples opened with „ (U+201E) and closed with a straight ASCII `"`, which is
  a mismatched pair. The guide now states the standard Serbian pair **„...“** (U+201E opening,
  U+201C closing) and all its examples use it. This is an agent call from the standard written
  convention, not a native-speaker decision, and is worth confirming on the forum.
- **The hyphen as an em-dash substitute (unconfirmed draft).** The guide's style notes said a
  hyphen "is also acceptable where it reads better" as a replacement for an em dash.
  `global/rules.md` outranks the guide and enumerates the replacements as separate sentences,
  commas or parentheses, so the guide now says a hyphen is not a dash substitute. The hyphen's
  Serbian-specific real job, attaching a case suffix to a code identifier or a number in prose
  („`niz`-u“, „30-og“), was kept and promoted to a Grammar bullet in its own right, since
  declension on code tokens is a load-bearing Serbian rule rather than a typographic aside.

No other contradiction was found: the Latin-script decision reads consistently everywhere it
appears (including the "never write Cyrillic `енгл.`" rule that depends on it), and the guide
already triggers glossing only from a `<define>` tag, never on first occurrence, as
`global/voice.md` requires.

## 2026-07-31: `deploy` is "postavi na server", not "deploj"; `return chute` is "izlazni otvor", not "izlazni žleb"

**Decided by:** native speaker **aleksaelezovic** on the pinned Serbian glossary thread
([post 6]), actioned directly.
**Terms affected:** `deploy`, `return chute` (a physical metaphor, since retired).
**Status: settled.**

Both terms were raised in the same post as the `scope`/`method` correction above but were
left unactioned there pending a follow-up call between multiple plausible options. This
entry closes that out.

The row read **"deploj"** for `deploy`, a phonetic respelling of the English word.
aleksaelezovic flagged it as reading unprofessional and too anglicized, and suggested
"postavi na server" ("postaviti" = "to put") as the natural Serbian phrasing, while noting
it might need rephrasing depending on context rather than a single fixed term. The row now
reads "postavi na server" with a note flagging it as context-dependent, so a translator
rephrases around the specific action where the literal phrase does not fit.

The row read **"izlazni žleb"** for `return chute`, one of three options aleksaelezovic
offered for the archaic "žleb" ("otvor", "kanal", "cev"). "otvor" is picked because it
mirrors the existing "ulazni otvor" (input slot) rendering, giving the input/output pair a
consistent "otvor" base rather than mixing vocabulary between the two metaphors. The row now
reads "izlazni otvor".

The same post endorsed the existing renderings for `machine`, `shelves`, and `input slot` as
correct; no change made there (already recorded in the entry above).

## 2026-07-31: `scope` is "opseg", not "doseg"; `method` (class sense) is "metoda", not "metod"

**Decided by:** owner (iHiD), on the correction of native speaker **aleksaelezovic** on the
pinned Serbian glossary thread
([post 5], [post 6]).
**Terms affected:** `scope`, `method (a function that belongs to a class)`. **Status:
human-decided, settled.**

The row read **"doseg"** for `scope`. aleksaelezovic's suggestion is "opseg" instead; no
counter-argument or prior native-speaker sign-off is on record for "doseg", so the row is
corrected as proposed.

The row read **"metod"** (masculine) for `method`, with a note explicitly picking the
masculine form over the feminine "metoda". aleksaelezovic's correction reverses that call for
the OOP sense specifically: in programming, "metoda" (feminine, -a ending) is what a function
belonging to a class is called, and "metod" is reserved for the general, non-programming
sense of the word "method". The curriculum uses `method` in the class sense, so the row
now reads "metoda" and the note records the "metod" vs "metoda" split so a future translator
does not re-collapse it.

The same post (6) also raised `deploy` ("deploj" reads as an awkward non-word; suggests
"postavi na server" or rephrasing depending on context) and `return chute` ("izlazni žleb"
uses an archaic word; suggests "izlazni otvor", "izlazni kanal", or "izlazna cev" instead).
**Neither is actioned here**: both need a follow-up call between multiple plausible options
rather than a single clean substitution, so they are flagged here for Jeremy's attention
rather than resolved unilaterally. The same post also endorsed the existing renderings for
`machine`, `shelves`, and `input slot` as correct; no change needed there.

## 2026-07-31: `feature` is "funkcionalnost", not "mogućnost"

**Decided by:** owner (iHiD), on the correction of native speaker **miroslav-inc** on the
pinned Serbian glossary thread
([post]).
**Terms affected:** `feature (platform capability)`. **Status: human-decided, settled.**

The row read **"mogućnost"**, an agent draft that reached for "capability" in order to steer
well clear of "funkcija" (the agreed CS term for `function`). miroslav-inc's correction is
that **"funkcionalnost"** is the word Serbian software and product writing actually uses:
"nove funkcionalnosti" is ordinary release-note Serbian in a way "nove mogućnosti" is not.
That is the "default to the ordinary, common word" principle below, applied by someone who
speaks the language.

The old note's worry does not survive the change. "funkcionalnost" and "funkcija" share a
root, but they are two distinct words that a Serbian reader does not confuse, and the
collision `global/terms.md` warns about is one term doing two jobs, which is not what this
is. The concern is kept in the row in the narrow form that still bites: never shorten
"funkcionalnost" to "funkcija" for the feature sense, because that word is spoken for.

**`milestone` is deliberately not actioned.** The same post proposed "dostignuće" in place of
the current "prekretnica". That one is not a clean correction: "dostignuće" means
*achievement*, which is a different concept from a milestone, and may well be wanted for an
achievements feature later. It stays as it is pending a follow-up question to native
speakers on the same thread.

## 2026-07-31: `maze` is "lavirint", not "labirint"

**Decided by:** owner (iHiD), on the correction of native speaker **aleksaelezovic** on the
pinned Serbian glossary thread
([post]), raised against the "Solve
the Maze" exercise ([topic 814]).
**Terms affected:** `maze`. **Status: human-decided, settled.**

The exercise rendered "maze" as **"labirint"**. That form is not wrong, and it is the one a
dictionary reaches for, but as aleksaelezovic put it, "it is pretty much always used as
'lavirint' around here in Serbia and this is the way it sounds most natural to Serbian
speakers". Serbian has both variants; the **v** form is the ordinary spoken one, so it is
the one the course uses, per the "default to the ordinary, common word" principle below.

A row was added for `maze` (there was none before, which is how the exercise came to pick a
rendering on its own).

## 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, and, as a principle, every row.

Two decisions came out of that pass that bind Serbian:

- **`interpreter`.** Several languages had reached
  for their term for interpreter *software*, which cannot. **Serbian kept the loanword
  "interpreter"**: it is what Serbian dev writing actually uses, and it already names a
  person in general Serbian, as of a performer interpreting a song, so it carries no
  machine or program morpheme and can name a person. "prevodilac" was rejected as the
  compiler-style translator, and "tumač" as bound to the court/spoken-language sense.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

## 2026-07-30: The agent's own drafting in the same pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

Rows were added for the terms the using-functions concept page needed (`instruction (given
`, `mental model`, `(programming) language`, `brackets (the two after a function
name)`, `input (to a function)`, and the metaphor rows `machine`, `shelves`, `warehouse`,
`crank`, `board / whiteboard`).

**One rendering was corrected.** `concatenation` moved from "spajanje (nizova)" to
**"spajanje (stringova)"**: "niz" is the agreed word for `array`, so the old rendering read
as "joining arrays" rather than "joining strings".

Serbian also carries terms in real use on the published using-functions concept page that
no confirmation from a native speaker is recorded for, notably `mašina` (machine) and
`police` (shelves), plus the coinages `ulazni otvor` (input slot) and `izlazni žleb` (return
chute). These are open questions, flagged in the glossary rows themselves; nothing here
asserts whether or when a native speaker has looked at them.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`, `concatenation`) is not
repeated here.

### Core decisions

| Term | Why |
|------|-----|
| programming / coding | Standard, undisputed term. |
| tech / tech industry | "IT" is well established in Serbian as the name of the sector. |
| developer | Standard, general Serbian word for someone who writes code. |
| pitfall | Ordinary word ("trap"). |
| pattern | The everyday Serbian word for a pattern/template you follow repeatedly ("to je šablon koji ćeš koristiti"); "obrazac" is the more formal register. |

### Values & data types

| Term | Why |
|------|-----|
| value, number | Ordinary words. |
| character | Loanword; established in Serbian beginner CS material (Petlja). |
| array / list | The established CS term. |
| index | Transparent cognate. |
| data type | Transparent compound once introduced. |

### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary words. |
| operator | Loanword, fully naturalized. |
| pure function | Transparent compound once "funkcija" is clarified. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| keyword | Transparent compound. |
| mental model | Transparent and in ordinary use in Serbian educational writing. |
| (programming) language | "Jezik" is the ordinary word every beginner already knows. |
| code block | "blok" is itself a loanword. |
| nested | Native metaphor (from "gnezdo" = nest), already the standard term. |
| iteration | Loanword. |
| loop | "petlja" is also the name of Serbia's national CS-education platform (Petlja.org), so it's well-established and iconic, not just a textbook coinage. |
| increment | Native, transparent ("increase"), and reads better for a beginner audience than the academic "inkrement". |
| modulo / remainder operator | Transparent: "the remainder of division". |
| class | Loanword. |
| property | Ordinary Serbian word for a characteristic/attribute. |
| object | Loanword, fully naturalized. |
| encapsulation | Standard OOP loanword. Real Serbian course material sometimes frames the concept with a "cocooned data" image ("učaurena podaci", from "čaura" = cocoon/casing), a nice explanatory aside but not the term to use. |

### Tooling & engineering

| Term | Why |
|------|-----|
| tool / tooling | Ordinary, transparent word. |
| module | Loanword. |
| algorithm | Long-established loanword. |
| edge case | Transparent native compound ("border/edge case"). |

### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| syllabus | Established loanword in Serbian academic usage. |
| mentor / mentoring | Established loanword, fully naturalized. |
| tutorial | Loanword. |
| solution | Ordinary word. |
| foot-gun | Descriptive phrase, not a fixed idiom; no clean one-word Serbian equivalent was found. |

### Keep in English

| Term | Why |
|------|-----|
| string | Practitioner Serbian material (Petlja) uses "string" directly in prose; "niska" is the more academic/purist term. |
| API | Not a word a beginner knows. |
| component | Fully naturalized Serbian tech vocabulary. |

