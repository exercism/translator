# Polish (pl) glossary notes

## 2026-08-24: canvas translates as `plansza`, not `płótno`

**Decided by:** native speaker **mlistewnik**, reviewing the `arithmetic` concept page,
the forum (post 1:. **Term affected:** canvas.

The existing translation used `płótno` throughout for "canvas" (the drawing surface the code
draws shapes on). mlistewnik pointed out that `płótno` has a narrow meaning in Polish — a
painter's fabric, or a painting — which reads wrong here. They initially considered `obszar
roboczy` (thinking of a defined space in a graphical interface), but settled on `plansza`
once they pictured someone standing next to the drawing: a physical drawing-board framing fits
better than either a painting or an abstract workspace.

Applied to the `arithmetic` page as part of the same review. `płótno` also appears in 8
other already-translated pl files (snowman-basic, rainbow, jumbled-house, fix-wall,
exercise-categories/draw); those are a separate tidy sweep, not yet done, flagged to Jeremy.

## 2026-08-04: praise messages use `Robisz postępy!` and `Kawał dobrej roboty!`

mlistewnik (posts 3110 and 3114) flagged two Polish UI praise strings in
the first website-copy pass as sounding wrong to a native speaker.

`Świetny postęp!` (from English "Great progress!", key `challenges.empty.allStartedDescription`):
the noun `postęp` is used in Polish for the progress of humanity or technology, not for
praising one person's achievement, so the sentence reads oddly. He offered three
alternatives, best first: `Robisz postępy!` (closest to the English), `Dobrze Ci idzie!`,
`Tak trzymaj!`. We took his first choice. His third was not available here anyway: the same
sentence already ends with `Tak trzymaj i doprowadź je do końca.`, so opening with it would
have repeated the phrase.

`Niesamowita praca!` (from English "Amazing effort!", key
`codingExercise.testResults.congratsAmazingEffort`): `niesamowity` means extraordinary or
out-of-this-world, and pairing it with `praca` reads as praise for a mesmerising work of
art rather than encouragement for the effort someone put in. He could not find the English
source string (GitHub code search only) and so proposed no replacement. We chose
`Kawał dobrej roboty!`, which keeps the praise in the same informal spoken `robota` family
as the already-agreed `Dobra robota!` opener, praises the effort rather than the artefact,
and stays distinct from the neighbouring variants (`Brawo!`, `Dobra robota!`,
`Fantastyczna robota!`, `Wspaniałe osiągnięcie!`). Worth confirming with him on the thread,
since it is our wording, not his.

`congratsAmazingEffort` is one of seven interchangeable congratulation variants the app
picks between (hashed on exercise title and test index, so a learner sees different ones
across the course), so each variant has to stand alone as a complete piece of praise and
must not read as a near-duplicate of its neighbours.

## 2026-08-03: the maze character turns with `obracać się`, never `skręcać`

**Decided by:** native speakers **mlistewnik** and **siling**, on the maze-solve-basic review
thread, the forum: mlistewnik in post 9, siling agreeing
in post 11.
**Terms affected:** `turn (the maze character's turnLeft()/turnRight() instruction)` (new row);
also the example wording inside the `character (the little figure in the maze exercises)` row.

siling originally chose _skręcać_ in an earlier line-by-line review of the same exercise.
mlistewnik contested it: in these exercises the character rotates on the spot and nothing else
happens, whereas _skręcić_ describes turning in the middle of travelling („samochód skręcił w
prawo" means it drove on, turned, and drove on again). _Obracać się_ is rotation in place,
which is exactly what `turnLeft()` and `turnRight()` do. siling has now explicitly reversed his
earlier position and agreed with mlistewnik, so two native speakers back _obracać się_.

**This row is human-decided.** It changes only by fresh agreement with a native speaker.

The verb is reflexive, so the _się_ is not optional, and the noun form used when naming the
instruction is _obrót_ („obrót w lewo", „polecenie obrotu w lewo"), not _skręt_.

Applied to every Polish occurrence, which were all in `exercise/maze-solve-basic`: the two
instruction bullets in `instructions/pl.md` and the `turnLeftTurnsRight` hint (both question
and answer) in `locales/pl/translation.json`. The shared maze category catalog
(`exercise-categories/maze/locales/pl/translation.json`) already read „Obraca ludzika o 90
stopni w lewo/w prawo" and needed no change. No other Polish content uses the turn verb.

The 2026-08-02 `ludzik` entry below quotes _a on skręca_ as one of its masculine-agreement
examples. That entry stands as written (this log is append-only); the corresponding example in
the glossary row itself now reads _a on obraca się_, which is the same grammatical point made
with wording that still exists in the content. The `ludzik` decision itself is untouched.

## 2026-08-03: the draw-family grid cell is `pole`, never `pudełko`

**Decided by:** native speaker **mlistewnik** on the pinned Polish glossary thread, post 11:
**Terms affected:** `box (draw-family grid cell)` (new row).

We had asked, in the glossary announcement, whether the grid cell a learner draws into should
reuse the value-container metaphor. mlistewnik answered directly: absolutely do not use
_pudełko_ for a grid cell, _pole_ is fine, and gave the everyday reference point of
„pola na szachownicy" (the squares on a chess board). That is exactly the sense the draw
family needs: a flat, bounded area on a marked-out surface, not a container something is put
inside.

Keeping the two senses on separate words also protects the variable metaphor. _Pudełko_ is
load-bearing for "a box on the shelves that holds one value"; using the same word for a
square of a grid would make a learner read the forecast grid as six containers of values, and
would blur the one image the variables concept is built on. The existing `box (value
container) → pudełko` row is untouched by this decision.

This settles the "priority row to settle" logged as open in the 2026-08-02 Stage 2 batch 2
entry below, which the checker had been warning on for every draw-family pass.

**This row is human-decided.** It changes only by fresh agreement with a native speaker.

Already-published Polish content needed no fix: the only translated item using the grid-cell
sense, `exercise/weather-symbols` (instructions and message catalog), had already rendered it
as _pole_ throughout („numer pola", „w polu", „siatka sześciu pól"). Every occurrence of
_pudełko_ in Polish content (the `variables`, `arrays` and `if` concepts, and the JavaScript
interpreter catalog) is the value-container sense and is correct.

## 2026-08-03: success messages open with `Dobra robota!`, not `Świetna robota!`

**Decided by:** native speaker **mlistewnik** on the website-copy review thread, post 7:
**Terms affected:** `Great work! / Great job! (success or congratulation opener)` (new row).

The exercise-completion success messages opened with „Świetna robota!". mlistewnik's verdict:
nobody says „świetna robota", it is a 1:1 translation of English "great job"; „dobra robota"
is the idiomatic Polish phrase. The row is written as a phrase mapping rather than a rule
because it is a fixed collocation: the fix is the word, not a principle about register.

Applied to `exerciseCompletion.success.messageExercise` and `.messageChallenge` in
`../front-end/app/messages/pl.json`. The rest of each sentence was already fine and was left
alone.

Deliberately left alone, because they are not the flagged collocation and are ordinary Polish:
„Świetnie!" (`successTitle`), „Świetny postęp!" (`allStartedDescription`), „Te ćwiczenia to
świetny sposób..." (concept-practice description), and „Fantastyczna robota!"
(`congratsFantasticJob`, which is a distinct exclamation, not a rendering of "great work").

## 2026-08-02: no `o` after `zapytaj` before a subordinate clause

**Decided by:** native speaker **mlistewnik** on the website-copy review thread, post 4:
**Terms affected:** none (grammar rule, recorded in `guide.md` under Grammar).

The app's "Ask about..." prompt was translated as „Zapytaj o...”,
followed by an animated rotating phrase („jak podejść do tego ćwiczenia”, „co oznacza ten
błąd”, ...). mlistewnik reported this as a grammatical error: the `o` is a calque of English
"ask about". In Polish, `pytać`/`zapytać` takes `o` only before a **noun** („spytaj o drogę”),
never before a subordinate clause. He noted that a pronoun workaround („Zapytaj o to, jak...”)
would be grammatical but does not fit here, because the prefix is fixed while the second half
of the sentence changes inside the animation, so the correct fix is simply to drop the `o`.

Applied: `codingExercise.canStart.askAbout` in `../front-end/app/messages/pl.json` changed
from „Zapytaj o...” to „Zapytaj...”. The two curriculum/app uses where `o` precedes a noun
(„zapytaj o wiek” in the `if` concept, „Zadawaj pytania o swój kod” in the premium upgrade
modal) are correct and were left alone.

## 2026-08-02: the maze character is `ludzik`, not `postać`

**Decided by:** native speaker **mlistewnik** on the maze-solve-basic review thread, post 9:
**Terms affected:** `character (the little figure in the maze exercises)` (new row).

The English describes a *little person* walking the maze. `postać` is the generic word for a
character/figure in the abstract (a character in a story, a form something takes), and reads
as distant and vague for a small cartoon figure a beginner is steering around a grid.
`ludzik` is the ordinary Polish diminutive for exactly that: a little human figure, the word
Poles use for the small person in a game or on a screen. It also removes the awkwardness of
the source's "small character" needing `mała postać`, since the smallness is already in the
word.

The swap is not lexical only: `postać` is feminine and `ludzik` is masculine, so every
agreeing verb, adjective, participle and pronoun in the surrounding sentence changed with it
(_Postać weszła_ → _Ludzik wszedł_, _jest zwrócona_ → _jest zwrócony_, _a ona skręca_ → _a on
skręca_). That is why the row carries the gender explicitly: a future pass that reaches for
the word without it produces sentences that are wrong rather than merely unidiomatic.

**This row is human-decided.** It changes only by fresh agreement with a native speaker.

`postać` is still correct, and is left alone, in its unrelated senses elsewhere in the Polish
content: "Prognoza ma postać siatki" (weather-symbols instructions) and "Poprawna postać to"
(JavaScript interpreter catalog) both mean *form*, not *character*.

The same reviewer contested `skręcać` in the same post. That is being handled separately and
nothing about it is recorded here.

## 2026-08-02: `input slot` candidate from mlistewnik, not yet confirmed

**Raised by:** mlistewnik (post 7):
**Status:** open, one candidate logged, not written to `glossary.md`.

Proposes **szczelina wrzutowa** for `input slot` (currently the unconfirmed coinage `otwór
wejściowy`), citing real vending-machine manuals as the source (a narrow coin/card slot,
closer to the physical input-slot metaphor than the rounder-sounding `otwór`). Reviewer
disclosed partial LLM assistance in researching it, cross-checked against real manuals
though, so the term itself is worth keeping as a candidate even if the process that found it
isn't the personal-recollection kind we usually ask for. Needs a second, LLM-free native
speaker to independently confirm before it replaces the current row.

Same post also proposed **podajnik odbiorczy** to replace the already-settled `return
chute` → `kanał zwrotny` (see the 2026-07-31 entry below). Declined to act on that one: it
contests a native-speaker-settled row, and came with the same disclosed-LLM-assistance
caveat, so per "guide/glossary defers to humans" it needs a fresh, LLM-free native-speaker
objection before reopening, not just a plausible alternative.

## 2026-08-02: Proposed terms from the Stage 2 batch 2 catch-up pass (unconfirmed drafts)

**Decided by:** agent (proposals only, nothing written to `glossary.md`). The catch-up pass
translating `two-fer`, `strings`, `digital-clock`, `arrays`, `weather-symbols`.

**Priority row to settle (now settled):** `box` (draw-family grid cell) → _pole_, deliberately
distinct from the existing value-container metaphor `box → pudełko`. Confirmed by a native
speaker and written to `glossary.md` on 2026-08-03; see the entry at the top of this file.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| compound data type | złożony typ danych | _złożony_/_zespolony_/_kompozytowy_ all defensible; sets precedent alongside the existing `typ danych` row. | medium |
| Boolean (the data type name) | wartość logiczna | Glossary has _prawda_/_fałsz_ but no row for the type itself; `boolean` kept-English or _typ logiczny_ are alternatives. | medium |
| piece of paper (string metaphor) | kartka papieru | Load-bearing recurring metaphor; over _papier_/_karteczka_ so every page pictures the same object. | medium |
| coin (machine-input metaphor) | moneta | Recurring metaphor for number inputs to machines. | medium |
| template string | kept English, as-is | Polish devs say it in English; consistent with the existing "string stays English" row. MDN-pl uses _literały szablonowe_ as an alternative. | medium |
| line of code | linijka kodu | _linijka_ (informal, matches this voice) vs _wiersz_ (formal); line-count checks recur across exercises. | medium |
| meridiem / am-pm indicator | meridiem (indeclinable); _oznaczenie_ for "indicator" | Keep the Latin term where the source teaches it, paraphrase elsewhere; recurs in clock content. | medium |
| quotation marks | cudzysłów / podwójny cudzysłów | **Ambiguity, not just a term choice**: Polish prose quotes are „…", but the code a learner types uses straight ". Worth deciding whether teaching pages should show the `"` glyph explicitly. | medium |
| string in error-message prose (no `<define>`) | declined loanword, e.g. _stringami_ | Register call: declining the bare loanword vs _ciągami znaków_ in error messages; follows the existing keep-English row but a native speaker may want to settle it. | medium |

Possible `global/terms.md` gaps flagged: "template string", "compound data type", the
paper/coin metaphors.

## 2026-08-01: `guide.md` trimmed to rules only; rationale moved here

**Decided by:** owner (iHiD), as part of the cross-language guide-slimming pass.
**Terms affected:** none (no glossary row changed).

`languages/pl/guide.md` is loaded into the prompt for every Polish item in every pass, so
everything in it that was research provenance, justification or a restatement of another
file was removed. No behavioural instruction was dropped. What came out, and why it is
kept here:

- **Audience specifics section (removed).** It said only that readers are in Poland and
  Polish-speaking regions (Polish has no dialect split the guide needs to arbitrate), plus
  the research finding that the Polish online-education and IT-bootcamp market (e.g.
  Kodilla) already writes to young adult beginners in a direct, informal register, so
  this voice fits an established norm rather than having to invent one. That research is
  the reason the "Ty" decision was easy; it is not an instruction.
- **Provenance for the "Ty" register (removed from the guide).** The informal-Ty choice
  follows established Polish programming-education sites and professional Polish
  localization style guides for user-facing instructional content.
- **Provenance for the future-tense rule (removed from the guide).** The rule against
  „będziesz potrafić / potrafił / potrafiła budować", and the „nauczysz się budować"
  rephrase in its place, came from a **native speaker** on the forum:
  <. The rule itself stays in the guide; this is a
  native-speaker decision and must not be overturned without fresh agreement on that
  thread.
- **Justification for the impersonal/się register (removed).** Using się constructions for
  conceptual explanation is not a contradiction of the informal register; it is how
  informal Polish instructional prose actually distributes direct address.
- **Acronym worked examples (removed).** The guide carried worked examples for `API` and
  `CLI` that duplicated their `glossary.md` "Keep in English" rows. They also said the
  expansion happens on "first use", which conflicts with `global/voice.md` (a gloss is
  triggered only by a `<define>` tag, never by first occurrence). The glossary rows already
  say "where the source `<define>`s it", so deleting the guide copies resolves the conflict
  without changing any decision.
- **Metaphor gender list (removed).** The guide listed _łańcuch_ masculine, _pudełko_
  neuter, _maszyna_ and _półka_ feminine. Every one of those genders is already in the
  glossary's metaphor table, which the guide now points at instead.
- **`interpreter`.** Polish did not change rendering: the loanword `interpreter` was kept, because it is an
  `-er` agent noun that Polish developer writing genuinely uses for a person, unlike a
  program-only paraphrase such as `program interpretujący`. What changed is that the row
  now says so, and rules that paraphrase out explicitly.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from. This
  is what keeps `interpreter` as a loanword above while other terms stay native Polish.

## 2026-07-30: Agent's own drafting in the same pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**Rows added**, for the terms the using-functions concept page needed: `instruction (given
`, `mental model`, `(programming) language`, `brackets (the two after a function
name)`, `course` (a new "Platform & curriculum" section), and the metaphor rows `crank` and
`warehouse`.

**One rendering corrected.** `encapsulation` changed from `enkapsulacja` to
**`hermetyzacja`**. The old row justified `enkapsulacja` only by consistency with how other
cognate CS loanwords are handled in this glossary, not by what Polish teaching material
actually says. `hermetyzacja` is the word Polish teaching material and Polish Wikipedia
actually use for the OOP concept; `enkapsulacja` is also current but less common outside
direct translations.

**Two coinages remain open questions, never validated by a native speaker**: `otwór
wejściowy` (input slot) and `zsyp zwrotny` (return chute). Both are flagged in the glossary
for native-speaker review via `/action-forum-post`; neither has been confirmed.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`, `encapsulation`) is not
repeated here.

### Core decisions

| Term | Why |
|------|-----|
| programming | The default, neutral term for programming. |
| tech / tech industry | Standard term in Polish tech writing. |
| developer | Standard, gender-neutral-reading term. |
| streak | Confirmed via Duolingo's own Polish product terminology, a comparable gamified daily-habit-learning product. |
| pitfall | Ordinary, idiomatic word; used this way in Polish IT writing. |

### Values & data types

| Term | Why |
|------|-----|
| value, number | Ordinary words. |
| array / list | The unrivalled Polish CS term for array. |
| element, index | Direct cognates. |

### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary words, so they stand alone. |
| operator | Direct cognate. |
| statement (executable) | `instrukcja` is the standard Polish CS term for an executable statement. |
| parameter | the English source's own writing keeps the textbook-correct distinction between parameter and argument, even though Polish developers sometimes conflate the two informally. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| instruction | Polish has one ordinary word for this and for "statement (executable)", and coining a second would read worse. |
| mental model | The standard Polish rendering, used in Polish psychology and UX writing. |
| (programming) language | Ordinary Polish word, known to every beginner. |
| for-of loop | No independent Polish name exists for this construct. |

### Tooling & engineering

| Term | Why |
|------|-----|
| modulo | `modulo` is a normal loanword in Polish too, not a code-switch. |
| toggle | Matches current Microsoft Polish UI terminology. |
| class, method, object, module, algorithm | Direct cognates. |
| component | Naturalised spelling, used consistently in general software writing and in frontend/React contexts. |

### Keep in English

| Term | Why |
|------|-----|
| API | Not a term a beginner knows, so the concept has to be explained, not just the acronym expanded. |
| workflow | Confirmed by Poland's own language authority (PWN) as having no settled Polish rendering for the dev/CI-CD sense. |

