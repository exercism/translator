# Hungarian (hu) glossary notes

## 2026-09-24: Verb agreement in the "New on Exercism" feed, lists and counted groups (no glossary row)

**Reported by BNAndras (native status not known), on forum topic 85570
(https://forum.exercism.org/t/85570, post 193645).** BNAndras reported that the feed's
"published a new Exercise/Concept" lines read „We közzétett” when no author is listed and
„juhlig, iHiD, and 3 others közzétett” when more than three are, and gave the forms
„közzétettünk” (first person plural, no „We”), „közzétettek” (third person plural), „és”
for "and", and „3-an” for "3 others". An agent verified the forms and agreed with them,
with three refinements: a Hungarian list takes no comma before „és”, „és még 3-an” reads
more naturally than „és 3-an”, and names joined by „és” may take a singular verb, so the
singular is acceptable for two or three listed names.

- The website builds `%{maker_handles}` in Ruby (`SiteUpdates::NewExerciseUpdate` and
  `NewConceptUpdate#maker_handles`) with the English "We" and ", and N others" hardcoded,
  and the keys `site_updates.new_exercise.1` and `site_updates.new_concept.1` have no count,
  so no Hungarian value can fix the two reported cases. The values keep the singular
  „közzétett”, which is right for one name and acceptable for two or three. The website
  change that would fix it was reported to iHiD.
- The guide's Grammar section now says to keep a singular verb after a name-list
  placeholder, to drop the serial comma before „és”, and how to write a counted group of
  people („és még 3-an”, with a plural verb).

## 2026-09-23: The adjective from „Exercism” is „Exercism-ös” (no glossary row)

**Decided by dem4ron (native speaker), on forum topic 85372
(https://forum.exercism.org/t/85372/5), in post 5.** We asked whether the derivational
adjective should be „Exercism-es” or „Exercism-ös”. dem4ron answered: „Yes, that's right.
Let's use “Exercism-ös””. The adjective takes a hyphen and ö-harmony, like the case
suffixes in the entry below.

- The same „Yes, that's right” confirms the lowercase CLI program name in running text,
  hyphenated like the brand name („az exercism-höz”, „az exercism-ben”), and the derived
  case-suffix forms listed in post 4 (see the entry below).
- The guide's bullet on the name „Exercism” now names the adjective „Exercism-ös”.
- The two occurrences of _Exercismes_ in `i18n`'s `locales/hu/` (the two blog interview
  files the entry below left alone) now read _Exercism-ös_. No other hu file held an
  adjective form of the name.

## 2026-09-23: Every case suffix on „Exercism” follows a hyphen, with ö-harmony (no glossary row)

**Decided by dem4ron (native speaker), on forum topic 85372
(https://forum.exercism.org/t/85372/3, post 193250).** This extends the accusative-only entry
below, from earlier today, to every case suffix. dem4ron's reason: A magyar helyesírás
szabályai puts a hyphen before a suffix when a word keeps its foreign spelling and its
written ending does not match how it is pronounced (Chicago-ban, New York-i). „Exercism” is
pronounced roughly „ekszörszizöm”, so its ending does not match the spelling, and the
dominant final vowel is „ö”. dem4ron gave „Exercism-öt” and „Exercism-ön”.

- The other forms were derived by an agent with the same harmony (a front rounded final
  vowel), and dem4ron did not list them: _Exercism-höz_ (the three-way -hoz/-hez/-höz
  suffix takes -höz, as the three-way accusative and superessive take -öt and -ön),
  _Exercism-mel_ (-vel assimilated to the final m), _Exercism-nek_, _Exercism-nél_,
  _Exercism-ben_, _Exercism-be_, _Exercism-ből_, _Exercism-re_, _Exercism-ről_,
  _Exercism-től_ and _Exercism-ért_. _Exercism-höz_ replaces the earlier _Exercismhez_, and
  _Exercism-ön_ replaces _Exercismen_.
- The guide's bullet on the name „Exercism” now states the rule for every case suffix.
- Every existing directly suffixed form in `i18n`'s `locales/hu/` was rewritten by a script
  (744 occurrences in 263 files: the two website catalogs, 85 metadata catalogs and 176
  content files). Code spans, code blocks, URLs, link targets and placeholders were left
  alone, and none of them held such a form. Two lowercase forms in a CLI walkthrough
  („az exercismhez”, „az exercismben”, meaning the `exercism` program) became
  _exercism-höz_ and _exercism-ben_.
- The derivational adjective _Exercismes_ (two blog interview files) was left as it is,
  since the decision covers case suffixes and the vowel of -os/-es/-ös after this name is
  not settled.

## 2026-09-23: „Exercism” takes its case suffix after a hyphen (no glossary row)

**Decided by dem4ron (native speaker), on forum topic 85372
(https://forum.exercism.org/t/85372/1).** The donation banner and the donation modal's body
text rendered the accusative of „Exercism” as _Exercisst_, a malformed word that drops the
end of the name. dem4ron gave the correct form as **„Exercism-öt”**: the name stays whole and
the suffix follows a hyphen.

- The guide's bullet on the name „Exercism” said suffixes attach directly („az Exercismen”,
  „az Exercismnek”, „az Exercismmel”). That was an agent's draft with no human decision
  behind it. It now says to attach a case suffix with a hyphen, with „az Exercism-öt” as
  the example.
- Four website keys were corrected (`components/modals/BegModal.tsx:` `begModal.shareExercism`,
  `begModal.fewerThan1Percent`, `begModal.previousDonorContent.hateToAskAgain`,
  `begModal.nonDonorContent.mostPeopleCantAfford`).
- The decision covers the accusative, which is what dem4ron corrected. Existing strings with
  other forms attached directly (_Exercismet_, _Exercismen_, _Exercismnek_ and others) were
  left as they are, pending a native speaker's view on whether they should change too.

## 2026-09-17: Adapted for Exercism (agent; nothing here is a native speaker's decision)

This glossary was forked from Jiki's Hungarian glossary when Exercism's translator repo was
created. Exercism and Jiki are separate products, and this glossary is Exercism's from here
on. Everything that was about Jiki's own product (its courses, its exercise stories, its
characters and physical metaphors) went with the fork; every decision about the Hungarian
language itself was kept, including the ones a native speaker made.

**Removed, on the owner's instruction (iHiD), because Exercism has no such thing.** A
native-speaker decision among them is not overruled, it is out of scope, and each is recorded
below as retired.

- The product and strand name rows, the exercise-story rows, and the physical-metaphor rows
  (a box, a chain, a machine, an input slot, a return chute, a crank, shelves, a warehouse, a
  board, and _figura_ for an on-screen character).
- `course / track` → _kurzus_: it described a different product's course. _kurzus_ is proposed
  again for Exercism's "track", below, where it has to be agreed afresh because the thing is
  different.
- `level stdlib`, `instruction (given to the interpreter character)`, `scenario (exercise test
  case)`: structures Exercism does not have.

**Notes reworded, renderings unchanged.** Exercism's English carries no inline definition
markup, so no gloss is ever added (`global/voice.md`), and every note that said what to show
"on define" described something that can no longer happen. Those clauses were dropped from:
dictionary, key, to return, and / or, ampersand, bar, pure, nested, backtick, and the
"Keep in English" table, whose middle column is now "the Hungarian word, where the English
explains the term". Two notes changed meaning and are worth a native speaker's eye:

- `interpreter` → _értelmező_, unchanged, but the note no longer says "a person doing a job,
  not a program". That framing was a character in a different course. On Exercism an
  interpreter is the program that runs Ruby or Python. _tolmács_ stays ruled out; the ban on
  _értelmezőprogram_ was dropped with the framing that motivated it.
- `concept (learning unit)` → _fogalom_ and `task (within an exercise)` → _részfeladat_ are kept
  as agreed, since Exercism's concepts and its concept exercises' numbered tasks are the same
  things.

**Added: `Exercism product vocabulary: PROPOSED, NOT YET AGREED`.** Fifty-odd rows for the
product's own nouns, mined from the website's English UI catalogs (`global/terms.md`). Every
one is an unconfirmed draft by an agent. The basis for the ones that were a real choice:

- `track` → _kurzus_: the website's own earlier Hungarian copy
  (`config/locales/pages/track.yml`, `hu:` root, not migrated) says „a(z) %{track_title}
  kurzust”, and Hungarian reviewers had already accepted _kurzus_ for a course. Rejected:
  _sáv_, _pálya_ (literal "track", meaningless here), _útvonal_.
- `locked / available / in progress / completed` → _zárolva / elérhető / folyamatban /
  elkészült_, and `trophy` → _trófea_: the same earlier copy uses exactly these.
- `concept exercise` / `practice exercise` → _tanulófeladat_ / _gyakorlófeladat_: chosen as a
  pair. _fogalmi feladat_ was rejected as opaque. The site's UI already says "learning
  exercise" for the first.
- `student` → _tanuló_: _diák_ and _hallgató_ place the reader in a school or a university,
  and Exercism's students are often working developers.
- `to submit` → _beküld_: the ordinary verb for sending something through a website. _bead_ is
  handing homework to a teacher.
- `to publish` → _közzétesz_ over _publikál_, which leans towards academic publishing.
- `reputation` → _reputáció_: the word Hungarian developers know from Stack Overflow. _hírnév_
  reads as fame.
- `testimonial` → _ajánlás_: what LinkedIn's Hungarian UI calls the same thing.
- `flair` → _kitűző_, only because _jelvény_ is taken by `badge` and the two appear together.
- `representer`, `Insiders`: kept in English. The first is a coined word with no everyday
  equivalent in any language; the second is a proper name.
- `code review` → _kódáttekintés_: Hungarian developers also say "code review" as it stands,
  and a native speaker may well prefer that.
- `Dig Deeper` → _Áss mélyebbre_, `journey` → _az utad_, `deep dive` → _mélyelemzés_: the
  least certain rows here. All three are metaphors in English.

### Retired with the fork, with the decision recorded

- **`alien (creature)` → _űrlény_.** Decided by vinetu, a native Hungarian speaker, on
  2026-08-05: _idegen_ is "stranger", a person from the street you do not know, not a being
  from another planet, and _űrlény_ ("space creature") was his settled preference over
  _földön kívüli_. The term belonged to an exercise story Exercism does not carry, so the row
  went with the fork. Kept here because the reasoning stands if the word is ever needed again.
- **The exercise-story rows** `pangram` → _pangramma_, `traffic light` → _jelzőlámpa_ with one
  lamp of it _fény_, `bouncer` → _kidobó_, `skyline / cityscape` → _városkép_ and `skyscraper`
  → _felhőkarcoló_. Settled by an agent pass on 2026-08-11 from what the existing Hungarian
  corpus already favoured, never by a native speaker. Exercism's practice exercises have their
  own stories and none has been discussed yet.
- **`board / whiteboard` → _tábla_.** An owner decision (iHiD, 2026-07-30) about a physical
  metaphor Exercism does not use. Worth knowing that _tábla_ was chosen because it is the
  ordinary word for a board in a room and does not collide with _tömb_ for an array.

## 2026-08-10: agentic coding → _Agentikus programozás_

**Decided by:** Jeremy (iHiD), the owner. **Status: settled.**
**Terms affected:** `agentic coding`.

Two passes ran independently on the same day and each picked its own rendering for surfaces a
learner sees on the same page: one said _Agentikus programozás_ and the other _Ágensalapú
programozás_. Jeremy settled it on _Agentikus programozás_, and the other prose was changed to
match (adjective only; the noun and every suffix on it were already identical between the two
renderings).

It also lines up with the existing `programming / coding` row: Hungarian takes _programozás_,
not _kódolás_ and not an English borrowing, the same instinct as `framework` →
_keretrendszer_.

Still open, and not covered by this decision: some Hungarian prose renders the concept as
_agentikus kódolás_. That is a different word for arguably the same thing, and the
`programming / coding` row's "never mix both in one document" warning applies to it. It was
deliberately left alone pending a separate decision.

## 2026-08-05: _elegánstalan_ is not a Hungarian word (no glossary row)

**Decided by:** vinetu, a native Hungarian speaker, reviewing an exercise's Hungarian
instructions. **Status: settled.**

The instructions had coined _elegánstalan_ as the negation of _elegáns_. It does not exist:
the `-talan/-telen` privative suffix does not attach to _elegáns_, and a Hungarian reader sees
an invented word rather than a stylistic judgement. The natural phrasing is the comparative
_kevésbé elegáns_ ("less elegant"), and the sentence reads better recast as a rhetorical
question, so `Talán egy kicsit elegánstalan megoldásnak érezted, hogy…` became `Nem érezted
egy kicsit kevésbé elegáns megoldásnak, hogy…`.

No row was added to `glossary.md`. "elegant" is not a recurring term and _elegáns_ needs no
mapping decision; the only thing worth remembering is that its negation must be formed with
_kevésbé_ (or _nem túl elegáns_), never by suffixing. Logged here so a future pass does not
reinvent the coinage.

## 2026-08-04: Four drafts settled by a native speaker

**Decided by:** vinetu, a native Hungarian speaker, on the pinned glossary thread, answering
the four questions we asked about the 2026-08-02 unconfirmed drafts below. **Status:
settled.** Three rows are confirmed as drafted; one term changed. These rows are now
native-speaker decisions and are not to be reopened by a translation pass.

- **object (JS `{}` literal) → objektum, and the double-barrel stays.** vinetu confirmed
  the boundary the pass drew: _objektum_ for the JS construct, _szótár_ only where the
  English says "dictionary", and the one message that has to carry both correctly reads
  _objektumnak/szótárnak_. He saw no reason to collapse the two words into one. The row loses
  its unconfirmed marker, unchanged.
- **type coercion: típuskényszerítés → automatikus típuskonverzió. Term changed.** vinetu
  had never encountered _típuskényszerítés_, including as a computer science student; it
  reads as a coinage rather than the name of anything. What is actually used in Hungarian
  is _automatikus típuskonverzió_ (or _implicit típuskonverzió_), and he judged it the
  clearer of the two for a beginner as well as the real one. That reverses the 2026-08-02
  call, which had picked _típuskényszerítés_ on the grounds that it names the concept
  rather than describing the mechanism; the mechanism-describing phrase turns out to be the
  name.
- **variable shadowing → változóárnyékolás.** Confirmed, and the coinage is deliberately
  kept over bare English _shadowing_. vinetu's reasoning is about the message rather than
  the word: the sentence immediately after the first use explains what shadowing is, so a
  Hungarian term there is something the beginner can attach the explanation to, and it
  teaches them the concept instead of handing them an untranslated English noun. This
  answers the doubt logged on 2026-08-02 directly.
- **backtick: the suffixed prose forms are fine.** vinetu confirmed _backticket_
  (accusative) and _backtickes_ (adjective, e.g. _backtickes template stringek_) as natural
  Hungarian inflection of the English stem. This was the lowest-confidence of the four and
  needed a native ear precisely because it is a spelling judgement about an English word;
  it is now settled. The term stays English.

## 2026-08-02: Four terms written in from an error-message pass (unconfirmed drafts)

**Decided by:** agent, on the owner's authorisation to write the rows so a native speaker
has something concrete to confirm or correct. **Status: unconfirmed drafts** at the time;
all four were settled on 2026-08-04 above.
**Terms affected:** `object (JS {} literal)`, `type coercion`, `variable shadowing`,
`backtick`.

The source was a pass over a JavaScript runtime's error and step-description messages: the
prose a learner reads when their code fails or when they step through a program. It forced
four terms that no page-level content had needed before.

- **object (JS `{}` literal) → objektum.** The messages talk about `{}` literals in a dozen
  places, and Hungarian has to choose between _objektum_ and the already-agreed _szótár_
  for `dictionary`. The pass drew the line at the English: _objektum_ where the language
  construct is a JS object, _szótár_ only where the English source itself says
  "dictionary". That keeps the existing `dictionary` row intact and gives the two words
  separate jobs, but it means one message carries both, as _objektumnak/szótárnak_. This is
  the row most worth a considered answer, because the JS `{}` and the teaching notion of a
  dictionary genuinely overlap and a native speaker may prefer one word to cover both.
  `object` had previously been removed in the 2026-07-31 prune as having nothing to decide;
  it is back because this boundary is exactly the thing that needed deciding. Confidence:
  medium.
- **type coercion → típuskényszerítés.** _Automatikus típuskonverzió_ is equally defensible
  and arguably clearer to a beginner, but longer, and it describes the mechanism rather
  than naming the concept. Confidence: medium.
- **variable shadowing → változóárnyékolás.** Leaving the English _shadowing_ bare was the
  alternative, and is what some Hungarian developer writing does, but the message is aimed at
  a beginner who has just hit the error, and an untranslated English noun there teaches
  nothing. Note the same message keeps _scope_ in English, per the existing "Keep in English"
  row, so the sentence is already mixed. Confidence: medium.
- **backtick: existing row extended, rendering unchanged.** The row had only covered the
  display of the glyph. Running prose needs the word itself, where it has to take Hungarian
  suffixes, so the pass used _backticket_ and _backtickes_. This is a **correction to an
  unconfirmed row** (nothing in this log records a human deciding `backtick`): the term still
  stays English; only the Notes now say what to do in prose. The suffixed forms were the
  lowest-confidence item of the four, because they are a spelling judgement about an English
  stem. Confidence: low.

## 2026-08-02: Proposed terms surfaced by a batch of exercise passes (unconfirmed drafts)

**Decided by:** agent (proposals only, nothing written to `glossary.md`).

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| Array (type name, capitalised) | kept English (`_Array_`), one-time gloss "tömb" | The glossary has no row for the type name itself. Alternative: localise fully as "tömb". Cross-exercise precedent, worth settling once. | medium |
| meridiem (am/pm marker) | kept English; the argument named "jelölés" | No natural Hungarian word; "napszakjelző" would be a coinage. It names a function argument, so consistency matters. | medium |

## 2026-08-01: Proposed terms from a batch of graphics passes (unconfirmed drafts)

**Decided by:** agent (proposals only, nothing written to `glossary.md`). They are
**unconfirmed drafts awaiting agreement**; no native speaker has seen them, and no row has
been added to the glossary.

- **canvas** (drawing surface) → _vászon_. Proposed independently by two workers;
  _rajzvászon_, _rajzterület_ and bare English _canvas_ were also defensible. Confidence:
  medium.
- **saturation** → _telítettség_. Proposed independently by two workers; completes the HSL
  trio alongside the agreed hue (_színárnyalat_) and lightness (_világosság_) rows; a
  translator could reach for _szaturáció_. Confidence: high.
- **radial width / radial height** (ellipse `rx`/`ry`) → _vízszintes sugár_ /
  _függőleges sugár_. The English is itself coined; _sugárirányú szélesség_ would be a
  calque. Confidence: medium.

## 2026-08-01: Closing quotation mark corrected, quotation rule written down

**Decided by:** agent. Every quoted Hungarian example in `guide.md` opened with `„`
(U+201E) and closed with an ASCII `"`, which is not the Hungarian closing mark. All 40
closings in `guide.md` and 5 in `glossary.md` were changed to `”` (U+201D), and the
Hungarian examples in the Formality and Grammar sections, which had used ASCII on both
sides, were moved onto the same `„…”` pair. No wording, no decision and no glossary row
changed; only the glyphs did. ASCII `"` is left in place where it delimits English text in
this English-language guide (English source sentences, glosses, section names).

A **Quotation marks** bullet was added to `## Style notes` stating the `„…”` pair and
naming `»…«` as the inner pair for a quote inside a quote.

The outer `„…”` pair is standard Hungarian orthography. **The nested `»…«` pair was
inferred, not confirmed by a native speaker**, and is worth checking on the forum.

## 2026-08-01: Guide pruned to rules only

**Decided by:** agent. `guide.md` is loaded into the prompt for every Hungarian item in
every pass, so anything in it that is not a rule a translator acts on is paid for every
time. No behavioural instruction was dropped; what left the guide either moved to
`glossary.md` verbatim or is recorded here.

**Moved to `glossary.md` verbatim.** The two acronym renderings from the guide's "Worked
examples" tail, `PPP pricing` → _helyi vásárlóerőhöz igazított árazás_ and `Q&A` →
_kérdés-felelet / kérdések és válaszok_, are now rows under "Core decisions".

**Cut as restatements of `global/voice.md`.** The "Audience specifics" section (it said
only that readers are in Hungary and then pointed at `voice.md`); the "Calls to action"
block (`Kezdd el most!` / `Indulj el most!` / `Regisztrálj most!` / `Próbáld ki!` /
`Tesztelj most ingyen!` versus the vague `Csatlakozz hozzánk!`), which was `voice.md`'s own
"Start now!" vs "Join us!" example in Hungarian; and the "explain acronyms, don't
transliterate" framing around the two rows moved above.

**Cut as restatements of rules stated elsewhere in the guide.** The "Anti-patterns"
subsection: its four bullets each restated a rule from the section immediately above it.
The two that were not otherwise recoverable (a clause that starts with the verb, and a
filler verb sitting in focus) are now folded into the focus rule itself. The "Natural
phrasing" block, whose three examples restated Formality and Grammar: `Tanuljuk meg a
Reactet`, `Először telepítsd a Node.js-t` (not `Telepítse a Node.js-t`) and `Próbáld ki
ezt a kódot` (not `Futtassa le ezt a kódot`) are kept, moved next to the rules they
illustrate.

**Cut as one-off rewrites rather than rules.** Two of the three "Common EN→HU pitfalls":
`nullától a magabiztos kezdőig` → `a nulláról kezdve, egészen a magabiztos tudásig`, and
`falba ütköztek, mert hiányoztak az alapvető készségeik` → `az alapvető készségek hiánya
miatt akadtak el`. Both were rewrites of one specific marketing sentence, not a general
pattern; recorded here in case that copy is retranslated. The third, the `Keményen
dolgoztunk` calque, is a general English-interference trap and stayed in the guide. One
row was also dropped from the focus-position before/after table (`Ez utóbbi kicsit más` →
`Ez viszont kicsit másképp működik`), as the remaining three rows teach the same point.

**Consolidated, not changed.** The suffixing of Latin-script code identifiers, names and
numerals was stated in three places (the agglutination bullet, the number-agreement
bullet, and the em-dash style note). It is now one Grammar bullet holding all of the
previous examples (`repeat`-et, Node.js-t, 30-at, 12-t, a Reacttel, template stringben,
a Reactet). No new criterion was invented for when the hyphen is used; see the gap below.

**A known gap, deliberately not filled.** The suffixing rule says a hyphen attaches suffixes
to code spans, names and numerals, and shows unhyphenated counter-examples (`a Reacttel`,
`template stringben`), but never says which stems take which form, nor which suffix vowel an
English stem takes. Wrong suffixing of English identifiers is a recurring fix, so this is the
gap most worth closing.

## 2026-07-31: Glossary pruned of ordinary vocabulary

**Decided by:** agent. Removed 67 rows whose English term has one obvious Hungarian rendering
with nothing to decide (e.g. `number` → szám, `variable` → változó, `object` → objektum),
keeping every row that records a rejected alternative, a collision, a register/scope
distinction, or an English-language-name choice. A reviewer might query the loss of `array`
(tömb) and `index` (index): both were removed because their own rows carried no argument.
All owner-decided rows below are untouched.

## 2026-07-30: Owner decisions from a 28-language concept-page pass

**Decided by:** owner (iHiD), from the results of a concept-page pass across all 28
languages.
**Terms affected:** `interpreter`, and, as a principle, every row.

- **`interpreter`: Hungarian did not change.** _értelmező_ was already right, because it is a
  plain `-ő` agent noun. _tolmács_ (a human spoken-language interpreter, a different job) is
  ruled out.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

## 2026-07-30: Hungarian glossary filled out and its self-contradictions fixed

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**One rendering changed.** `tool` moved from "Keep in English" to **eszköz**, applying the
ordinary-word principle above: _eszköz_ is the everyday Hungarian word and Hungarian prose
uses it. The mass noun `tooling` stays English, which is what Hungarian tech writing
actually does, so the old single `tool / tooling` row was split in two.

**Rows added**, filling gaps the concept-page pass hit rather than changing any existing
decision:

- Terms that pass needed: `mental model`, `(programming) language`, `brackets (the two after
  a function name)`, `input (to a function)`.
- Ordinary words that were being used consistently in translations but had never been
  written down: `value`, `number`, `true / false`, `character`, `condition`, `comparison`,
  `operator`, `error`, `statement (logical claim)`.
- `condition is true / false` was promoted out of a "Provisional terms" section, which was
  deleted. The section contradicted the file's own claim that everything in it is agreed.

**Self-contradictions fixed**, all note or placement problems rather than new renderings:

- `tool / tooling` sat under "Keep in English" while its own gloss told you to say
  _eszköz_ (split, see above).
- `template literal / template string` was kept English but glossed "_string-sablon_
  conceptually". The JS construct's name (English, no gloss) is now separate from the prose
  concept `string template` (_string-sablon_).
- `chat` was kept English but carried _csevegés_ as its gloss, while its own note said
  _csevegés_ reads dated. The gloss is gone.
- `interpreter` and `string template` had empty notes, so nothing recorded why they were
  chosen or what they cover.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`interpreter`, `tool`) is not repeated here.

### Core decisions

| Term | Why |
|------|-----|
| tech / tech industry | Hybrid (English "tech" + Hungarian "ipar"). Established in Hungarian tech media. _Technológiai ipar_ is too formal. |
| developer | Standard Hungarian equivalent. |
| mental model | The picture-in-your-head framing (_ezt a gondolati modellt építettem fel_). _Mentális modell_ reads clinical. |
| dopamine hit | Fits the lighter register. _Dopaminroham_ is an alternative, but heavier. |

### Learning platform

| Term | Why |
|------|-----|
| exercise | Recurs across all content. |

### Values & data types

| Term | Why |
|------|-----|
| value, number | Ordinary Hungarian words. |
| array | Standard HU term. |
| index | The same word in both languages, so nothing needs clarifying. |

### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary Hungarian words, so they stand alone. |
| statement (executable) | Standard HU CS term. |
| initializer | _kezdőérték_ is beginner-friendly; _inicializáló_ is not. |
| (programming) language | Ordinary Hungarian word. |
| equal sign | Ordinary word, so it needs no "angolul" alongside it. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| state | Standard HU CS term. |

### Tooling & engineering

| Term | Why |
|------|-----|
| pitfall | Ordinary Hungarian word, so it stands alone. |
| auth | _hitelesítés_ is the standard Hungarian for both autentikáció and autorizáció. |
| deploy | _telepítsd ki_ reads more as installation than go-live. |
| component | Common Hungarian tech vocabulary, so no gloss is needed. |

### App & product UI

| Term | Why |
|------|-----|
| plan (subscription tier) | _csomag_ enables "{tier} csomag"; _terv_ does not. |

### Keep in English

| Term | Why |
|------|-----|
| API | Not a word a beginner knows, so the concept has to be explained, not just the acronym expanded. |
| tooling (mass noun) | Used as-is in Hungarian tech writing. |
| backtick | HU tech writing keeps the English word. |
| AI | Owner decision: "AI" in prose and marketing copy, not the purist _MI_. |
| widget | Established in HU tech writing. |
| chat | _chatelni_ is fully nativized and _csevegés_ reads dated for this audience, so a gloss would teach nothing. |
