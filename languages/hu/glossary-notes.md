# Hungarian (hu) glossary notes

## 2026-08-11: exercise-world terms settled before the hu launch (pangram, traffic light, bouncer, cityscape)

**Decided by:** an agent pass, from what the existing Hungarian corpus already favoured.
**Status: settled, but none of it is a native speaker's call**, so any of these rows can be
overturned by a reviewer without argument.
**Terms affected:** `pangram`, `traffic light`, `light (one lamp)`, `bouncer`, `skyline /
cityscape`, `skyscraper`.

A title-fixing pass had left four terms split across the corpus, each rendered one way in one
exercise and another way in its sibling. All four are now unified, and the rows exist so that
a later pass cannot re-split them.

- **`pangram` → _pangramma_.** Two of the three exercises in the series (`lower-pangram`,
  `methodic-pangram`) already used _pangramma_ throughout, roughly 30 occurrences against the
  middle exercise's 15 bare _pangram_. _Pangramma_ is also the ordinary Hungarian word, and
  it inflects cleanly (_pangramma-e_, _pangrammában_), where bare _pangram_ forces the
  hyphenated foreign-word suffixing the guide reserves for code spans and Latin-script names.
  The middle exercise's English title `Pangram` became `Pangramma`, which is what its two
  siblings' titles already implied.
- **`traffic light` → _jelzőlámpa_, and one lamp of it → _fény_.** The split was even on
  count (7 _jelzőlámpa_ against 5 _közlekedési lámpa_), so it was decided on naturalness:
  _jelzőlámpa_ is the everyday Hungarian word and the compact one, and _Relációs közlekedési
  lámpák_ would have been a clumsy title next to _Relációs jelzőlámpák_. The second row falls
  out of the first: `relational-traffic-lights` already called the individual coloured lights
  _fény_, and adopting that in `traffic-lights` too keeps "draw the three lights on the
  traffic light" from becoming _lámpa_ next to _jelzőlámpa_ in one clause, which the guide's
  same-root-repetition warning covers.
- **`bouncer` → _kidobó_.** Not really a decision: the corpus had 20-odd Hungarian forms and
  exactly one English survivor, the title of `bouncer-wristbands`, whose own body already
  said _kidobó_.
- **`skyline / cityscape` → _városkép_ and `skyscraper` → _felhőkarcoló_** are recorded, not
  decided. A previous pass set them in the two `cityscape-*` titles without writing rows; the
  rows now exist so the titles and any prose referring to them stay in step.

Also fixed in the same pass, as instances of one bug rather than as term decisions: four
places where Hungarian prose named another item by a name a Hungarian reader never sees.
`cityscape-skyline` opened "A Skyscraper feladatban" for an exercise titled _Felhőkarcoló_,
`two-fer` said „Hello” for one titled _Üdvözlés_, `acronym`'s hint said "Mint a Pangramban",
and the `jiki-is-10-days-old` blog post named both _közlekedési lámpa_ and _Structured
House_. Whenever one item names another, it should use that item's Hungarian title.

**Left for a native speaker.** Exercise-title capitalisation is inconsistent corpus-wide
(_Egyszerű pangramma_ against _Módszeres Pangramma_, and likewise _Összekevert Ház_,
_Véletlen Saláta_, _Relációs Nap_). Hungarian sentence case argues for the lower-case form,
but that is a style sweep across many titles, not a term decision, and it was left alone.

### Also on 2026-08-11: `Ask Jiki` given a row, formalising what the corpus already did

**Decided by:** an agent, at iHiD's request. **Status: settled, but not a native speaker's
call**, so any Hungarian native speaker can overturn it without argument.
**Terms affected:** `Ask Jiki`.

This is a formalisation of existing usage, not a fresh translation choice. _Kérdezd Jikit_
was already the rendering of nine keys in the Hungarian app catalog, including
`lesson.tabAskJiki` and `codingExercise.chatHeader.title`, so the wording was settled across
the corpus long before the row existed. What was missing was the row itself, and that gap is
exactly why an inconsistency could appear: two further keys were still sitting in English
against the nine already translated, and were corrected on 2026-08-11 along with two prose
files. iHiD asked for the row so a later pass cannot re-open the same split.

The row's Notes carry the grammar rather than the choice, because the grammar is what caused
rework on the day: the phrase is an imperative that already ends in the accusative `-t`, so
it resists every position the English name occupies freely (subject, further-suffixed, and
attributive before a noun). The fix in each case is to recast or to hang the name off a head
noun, which is what the same-day corrections did with _funkció_, alongside the file's
existing _szál_ for a strand.

## 2026-08-10: agentic coding → _Agentikus programozás_

**Decided by:** Jeremy (iHiD), the owner. **Status: settled.**
**Terms affected:** `agentic coding`.

Two passes ran independently on the same day and each picked its own rendering for surfaces a
learner sees on the same page: the project card tags said _Agentikus programozás_ while the
two episode pages behind those cards said _Ágensalapú programozás_. Jeremy settled it on
_Agentikus programozás_, and the episode prose was changed to match (adjective only; the noun
and every suffix on it were already identical between the two renderings).

It also lines up with the existing `programming / coding` row: Hungarian takes _programozás_,
not _kódolás_ and not an English borrowing, the same instinct as `framework` →
_keretrendszer_.

Still open, and not covered by this decision: several Hungarian pages (the agentic-coding
guides and blog posts) and the front-end's own `agentic-coding` tag label render the concept
as _agentikus kódolás_. That is a different word for arguably the same thing, and the
`programming / coding` row's "never mix both in one document" warning applies to it. It was
deliberately left alone pending a separate decision.

## 2026-08-06: Translation engine switched to `deepseek`

**Decided by:** vinetu, a native speaker, on the "Alternative translation model" comparison
thread (https://forum.jiki.io/t/927). **Status:** settled.
**Terms affected:** none (engine choice, not a glossary or guide change).
**Files affected:** none; `tracking.json` already carried the block, this entry records the
decision behind it.

Jeremy posted an alternative-model rendering of a Hungarian page alongside the published one
and asked which read better. vinetu answered that "the new one seems better", and Hungarian
was switched to it.

Hungarian therefore runs on `deepseek` rather than the `fable` default. This was a genuine
switch, made on a native speaker's verdict, not on our own judgement or on cost.

## 2026-08-05: _elegánstalan_ is not a Hungarian word (no glossary row)

**Decided by:** vinetu, a native Hungarian speaker, reviewing the `maze-turn-around` exercise
(https://forum.jiki.io/t/1218). **Status: settled.**

The Hungarian instructions had coined _elegánstalan_ as the negation of _elegáns_. It does
not exist: the `-talan/-telen` privative suffix does not attach to _elegáns_, and a Hungarian
reader sees an invented word rather than a stylistic judgement. The natural phrasing is the
comparative _kevésbé elegáns_ ("less elegant"), and the sentence reads better recast as a
rhetorical question, so `Talán egy kicsit elegánstalan megoldásnak érezted, hogy…` became
`Nem érezted egy kicsit kevésbé elegáns megoldásnak, hogy…`.

No row was added to `glossary.md`. "elegant" is not a recurring Jiki term and _elegáns_ needs
no mapping decision; the only thing worth remembering is that its negation must be formed
with _kevésbé_ (or _nem túl elegáns_), never by suffixing. Logged here so a future pass does
not reinvent the coinage.

## 2026-08-05: alien (creature) → űrlény

**Decided by:** vinetu, a native Hungarian speaker, reviewing the `while-loops` concept page
(https://forum.jiki.io/t/1216, posts 2 and 3). **Status: settled.**

The page rendered the code comment "shoot the alien" as _lövés az idegenre_. vinetu flagged
it as probably a glossary matter rather than a one-page fix: _idegen_ is "stranger", any
person from the street you do not know, not a being from another planet. His first
suggestion was _földön kívüli_, which was applied to `while-loops/hu.md` as a new glossary
row.

Before sweeping the rest of the corpus we checked and found the already-published Hungarian
Space Invaders content does not use _idegen_ at all: it uses a third word, _űrlény_ ("space
creature"), in five files (`space-invaders-solve-basic` instructions and catalog, the
`space-invaders` category catalog, and the `creating-functions-with-inputs` /
`creating-functions-with-return-values` concept pages). We asked vinetu which of _földön
kívüli_ or _űrlény_ should be the standard. In post 3541 he said he'd forgotten about
_űrlény_, called it "perfect", and said to use it everywhere. The glossary row and every
occurrence of _földön kívüli_ have been swept to _űrlény_ accordingly; this is now a settled
native-speaker decision and not to be reopened by a translation pass.

## 2026-08-04: The four interpreter-catalog drafts settled by a native speaker

**Decided by:** vinetu, a native Hungarian speaker, on the pinned glossary thread
(https://forum.jiki.io/t/289, post 3155), answering the four questions we asked about the
2026-08-02 unconfirmed drafts below. **Status: settled.** Three rows are confirmed as
drafted; one term changed. These rows are now native-speaker decisions and are not to be
reopened by a translation pass.

- **object (JS `{}` literal) → objektum, and the double-barrel stays.** vinetu confirmed
  the boundary the pass drew: _objektum_ for the JS construct, _szótár_ only where the
  English says "dictionary", and the one message that has to carry both
  (`InOperatorRequiresObject`) correctly reads _objektumnak/szótárnak_. He saw no reason to
  collapse the two words into one. The row loses its unconfirmed marker, unchanged.
- **type coercion: típuskényszerítés → automatikus típuskonverzió. Term changed.** vinetu
  had never encountered _típuskényszerítés_, including as a computer science student; it
  reads as a coinage rather than the name of anything. What is actually used in Hungarian
  is _automatikus típuskonverzió_ (or _implicit típuskonverzió_), and he judged it the
  clearer of the two for a beginner as well as the real one. That reverses the 2026-08-02
  call, which had picked _típuskényszerítés_ on the grounds that it names the concept
  rather than describing the mechanism; the mechanism-describing phrase turns out to be the
  name. Applied as a clean literal term swap across already-published Hungarian content:
  the two JS interpreter catalog messages (`TypeCoercionNotAllowed`,
  `UnaryTypeCoercionNotAllowed`) were the only occurrences in the corpus.
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
  it is now settled. The term stays English and the `<define>` behaviour (show the glyph)
  is unchanged.

## 2026-08-02: Four terms written in from the JS interpreter catalog pass (unconfirmed drafts)

**Decided by:** agent, on the owner's authorisation to write the rows so a native speaker
has something concrete to confirm or correct. **Status: unconfirmed drafts.** Nobody who
speaks Hungarian has seen them yet, and none of them is settled.
**Terms affected:** `object (JS {} literal)`, `type coercion`, `variable shadowing`,
`backtick`.

The source was the `/translate-interpreters hu` pass that translated the JavaScript
interpreter's 214 error and step-description messages. That catalog is a new surface for
Hungarian: it is the prose a learner reads when their code fails or when they step through
a program, and it forced four terms that no page-level content had needed before.

- **object (JS `{}` literal) → objektum.** The catalog talks about `{}` literals in a dozen
  places (`TrailingCommaInDictionary`, `InvalidDictionaryKey`, `DuplicateDictionaryKey`,
  `MissingRightBraceInDictionary`, `DictionaryExpressionNotAllowed`, the `for...in` and `in`
  errors), and Hungarian has to choose between _objektum_ and the already-agreed _szótár_
  for `dictionary`. The pass drew the line at the English: _objektum_ where the language
  construct is a JS object, _szótár_ only where the English source itself says
  "dictionary". That keeps the existing `dictionary` row intact and gives the two words
  separate jobs, but it means one message (`InOperatorRequiresObject`) carries both, as
  _objektumnak/szótárnak_. This is the row most worth a considered answer, because the JS
  `{}` and the teaching notion of a dictionary genuinely overlap and a native speaker may
  prefer one word to cover both. `object` was previously removed in the 2026-07-31 prune as
  having nothing to decide; it is back because this boundary is exactly the thing that
  needed deciding. Confidence: medium.
- **type coercion → típuskényszerítés.** _Automatikus típuskonverzió_ is equally defensible
  and arguably clearer to a beginner, but longer, and it describes the mechanism rather
  than naming the concept. Two errors (`TypeCoercionNotAllowed`,
  `UnaryTypeCoercionNotAllowed`) depend on the choice, so the value of picking one is
  consistency more than correctness. Confidence: medium.
- **variable shadowing → változóárnyékolás.** Used by `ShadowingDisabled`. Leaving the
  English _shadowing_ bare was the alternative, and is what some Hungarian developer writing
  does, but the message is aimed at a beginner who has just hit the error, and an
  untranslated English noun there teaches nothing. Note the same message keeps _scope_ in
  English, per the existing "Keep in English" row, so the sentence is already mixed.
  Confidence: medium.
- **backtick: existing row extended, rendering unchanged.** The row only covered the
  `<define>` case (show the glyph). The catalog needs the word in running prose
  (`MissingBacktickToTerminateTemplateLiteral`, `QuoteUsedToTerminateTemplateLiteral`,
  `TemplateLiteralExpressionNotAllowed`), where it has to take Hungarian suffixes, so the
  pass used _backticket_ and _backtickes_. This is a **correction to an unconfirmed row**
  (nothing in this log records a human deciding `backtick`): the term still stays English
  and the `<define>` behaviour is untouched; only the Notes now say what to do in prose. The
  suffixed forms are the lowest-confidence item of the four, because they are a spelling
  judgement about an English stem, which is exactly the gap the 2026-08-01 pruning entry
  flags as still open. Confidence: low.

## 2026-08-02: Proposed terms from the Stage 2 batch 2 catch-up pass (unconfirmed drafts)

**Decided by:** agent (proposals only, nothing written to `glossary.md`). The catch-up pass
translating `two-fer`, `digital-clock`, `weather-symbols` (and checking `strings`/`arrays`,
found already up-to-date) surfaced these terms:

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| Array (type name, capitalised) | kept English (`_Array_`), one-time gloss "tömb" | Glossary has the chain/lánc *metaphor* but not the type name itself. Alternative: localise fully as "tömb". Cross-exercise precedent, worth settling once. | medium |
| meridiem (am/pm marker) | kept English; the argument named "jelölés" | No natural Hungarian word; "napszakjelző" would be a coinage. Names a function argument, so consistency matters. | medium |
| category label: Action | Akció | Reference-panel label shared across exercises; must render identically everywhere. "Művelet" was the alternative. | medium |

Possible `global/terms.md` gap: "Array" as a type name, distinct from the chain metaphor.

## 2026-08-01: Proposed terms from the Stage 2 batch 1 passes (unconfirmed drafts)

**Decided by:** agent (proposals only, nothing written to `glossary.md`). The Stage 2
batch 1 translation passes (concept `if`, exercise `rock-paper-scissors` + its family
catalog, exercise `rainbow` + the `draw` family catalog) surfaced these terms with more
than one defensible rendering. They are **unconfirmed drafts awaiting agreement**; no
native speaker has seen them, and no row has been added to the glossary.

- **announce** (a result, rock-paper-scissors family) → _bejelent_. Family-wide verb
  across errors, describers and member-exercise catalogs; _kihirdet_ and _közöl_ are
  equally defensible, and divergence would fragment the family the shared catalog exists
  to keep consistent. Confidence: medium.
- **X vs Y** (scenario/matchup naming) → _„X vs. y”_ (e.g. „Papír vs. kő”), over
  _„X a Y ellen”_. Sets a cross-file precedent for the RPS family. Confidence: medium.
- **canvas** (drawing surface) → _vászon_. Proposed independently by both draw-family
  workers; _rajzvászon_, _rajzterület_ and bare English _canvas_ were also defensible.
  Central object of every draw exercise. Confidence: medium.
- **saturation** → _telítettség_. Proposed independently by both draw-family workers;
  completes the HSL trio alongside the agreed hue (_színárnyalat_) and lightness
  (_világosság_) rows; a translator could reach for _szaturáció_. Confidence: high.
- **radial width / radial height** (ellipse `rx`/`ry`) → _vízszintes sugár_ /
  _függőleges sugár_. The English is itself coined; _sugárirányú szélesség_ would be a
  calque. Confidence: medium.

The workers also flagged that **canvas** and **saturation** may be missing from the
canonical term catalogue (`global/terms.md`); adding them there is a governance step for
whoever reviews this delta.

## 2026-08-01: Closing quotation mark corrected, quotation rule written down

**Decided by:** agent. Every quoted Hungarian example in `guide.md` opened with `„`
(U+201E) and closed with an ASCII `"`, which is not the Hungarian closing mark. All 40
closings in `guide.md` and 5 in `glossary.md` were changed to `”` (U+201D), and the
Hungarian examples in the Formality and Grammar sections, which had used ASCII on both
sides, were moved onto the same `„…”` pair. No wording, no decision and no glossary row
changed; only the glyphs did. ASCII `"` is left in place where it delimits English text in
this English-language guide (English source sentences, glosses, section names).

A **Quotation marks** bullet was added to `## Style notes` stating the `„…”` pair and
naming `»…«` as the inner pair for a quote inside a quote. This closes the gap recorded
under the pruning entry below, which other guides already depended on: `languages/es-ES/
guide.md` cites "the Hungarian `„ "` pattern" as its authority, and so was citing the
broken pair.

The outer `„…”` pair is standard Hungarian orthography. **The nested `»…«` pair was
inferred, not confirmed by a native speaker**, and is worth checking on the forum; it is
rare enough in Jiki content that nothing currently turns on it.

## 2026-08-01: Guide pruned to rules only

**Decided by:** agent. `guide.md` is loaded into the prompt for every Hungarian item in
every pass, so anything in it that is not a rule a translator acts on is paid for every
time. No behavioural instruction was dropped; what left the guide either moved to
`glossary.md` verbatim or is recorded here.

**Moved to `glossary.md` verbatim.** The "Product and strand names" section (an owner
decision: descriptive strand names translated, `Tanulj meg programozni` /
`Tanulj fejleszteni`; coined and branded names, Ask Jiki, Deep Dive, Jiki Premium,
Bootcamp and the game names, kept English) is now its own glossary section, since the
renderings are term mappings. The two acronym renderings from the guide's "Worked
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

**Known gaps, deliberately not filled** (adding rules was out of scope for this pass):

- The guide never states a quotation-mark rule, though every example in it, and the
  Hungarian translations, consistently use `„ "`. Other guides already cite this as "the
  Hungarian `„ "` pattern" (`languages/es-ES/guide.md`), so the convention is real but
  unwritten here. **Closed the same day; see the entry below.**
- The suffixing rule says a hyphen attaches suffixes to code spans, names and numerals,
  and shows unhyphenated counter-examples (`a Reacttel`, `template stringben`), but never
  says which stems take which form, nor which suffix vowel an English stem takes.
  `global/translating.md` names wrong suffixing of English identifiers as a tidy-pass fix,
  so this is the gap most worth closing.

## 2026-07-31: Glossary pruned of ordinary vocabulary

**Decided by:** agent. Removed 67 rows whose English term has one obvious Hungarian rendering
with nothing to decide (e.g. `number` → szám, `variable` → változó, `object` → objektum),
keeping every row that records a rejected alternative, a collision, a register/scope
distinction, an English-language-name choice, or a Jiki metaphor. A reviewer might query the
loss of `array` (tömb) and `index` (index): both were removed because their own rows carried
no argument, though the reasoning that matters for `array` (avoiding a collision with `tábla`
for board) is recorded on the `board / whiteboard` row instead. All owner-decided rows below
are untouched.

## 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind Hungarian:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have, and
  several collided with their own word for `array` trying. Hungarian renders both as
  **tábla**: the ordinary word for a board in a room, with no collision with _tömb_.
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. Several languages had reached
  for their term for interpreter *software*, which cannot. **Hungarian did not change:**
  _értelmező_ was already right, because it is a plain `-ő` agent noun that takes a person
  naturally. What changed is that the row now says so, and rules out _értelmezőprogram_
  (machine only) and _tolmács_ (a human spoken-language interpreter, a different job).
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

**Twenty rows added**, filling gaps the concept-page pass hit rather than changing any
existing decision:

- Terms the using-functions page needed: `instruction (given to Jiki)`, `mental model`,
  `(programming) language`, `brackets (the two after a function name)`, `input (to a
  function)`, and the metaphor rows `machine`, `crank`, `shelves`, `warehouse`,
  `board / whiteboard`.
- Ordinary words that were being used consistently in translations but had never been
  written down: `value`, `number`, `true / false`, `character`, `condition`, `comparison`,
  `operator`, `error`, `statement (logical claim)`.
- `condition is true / false` was promoted out of a "Provisional terms" section, which was
  deleted. The section contradicted the file's own claim that everything in it is agreed.

**Eight self-contradictions fixed**, all note or placement problems rather than new
renderings:

- `tool / tooling` sat under "Keep in English" while its own gloss told you to say
  _eszköz_ (split, see above).
- `template literal / template string` was kept English but glossed "_string-sablon_
  conceptually". The JS construct's name (English, no gloss) is now separate from the prose
  concept `string template` (_string-sablon_).
- `chat` was kept English but carried _csevegés_ as its gloss, while its own note said
  _csevegés_ reads dated. The gloss is gone.
- `character (game/maze figure)` said _karakter_ needed no glossary entry, at the same time
  as _karakter_ was being added as one. It now points at the row.
- `statement (executable)` and `instruction (given to Jiki)` share _utasítás_ deliberately.
  Hungarian has one ordinary word for both and coining a second would read worse, so both
  rows now say so instead of looking like a collision.
- `interpreter`, `string template` and `course / track` had empty notes, so nothing
  recorded why they were chosen or what they cover.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`, `tool`) is not
repeated here.

### Core decisions

| Term | Why |
|------|-----|
| tech / tech industry | Hybrid (English "tech" + Hungarian "ipar"). Established in Hungarian tech media. _Technológiai ipar_ is too formal. |
| developer | Standard Hungarian equivalent. |
| mental model | The picture-in-your-head framing (_ezt a gondolati modellt építettem fel_). _Mentális modell_ reads clinical. |
| loom | Literal translation; the metaphor works naturally in Hungarian. |
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
| instruction (given to Jiki) | Hungarian has one ordinary word for this and for "statement (executable)", and coining a second would read worse. |
| initializer | _kezdőérték_ is beginner-friendly; _inicializáló_ is not. |
| (programming) language | Ordinary Hungarian word. |
| equal sign | Ordinary word, so even a `<define>` needs no "angolul". |

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

### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Plain Hungarian word for "box"; direct and concrete. |
| chain | Standard Hungarian for a physical chain. |
| machine | Plain word. |
| input slot | _bemenet_ (input) + _nyílás_ (a slot/opening). |
| return chute | _kimenet_ (output) + _csúszda_ (a slide/chute, the same word used for a playground slide). |
| crank | _Kar_ is the ordinary word for a handle or lever; _forgattyú_ is engine jargon. |
