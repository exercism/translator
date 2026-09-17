# European Spanish (es-ES) glossary notes

## 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout). Logged here for review
and **not** written to `glossary.md`.

Two direct conflicts are already live in the catalog (chunked fan-out with no glossary row
to anchor on) and need a decision before a targeted `all`-mode re-run of `modals`:

| English | Conflict | Recommendation |
|---------|----------|-----------------|
| challenge | *reto* in 24 keys (challenges, dashboard, concepts, layout, codingExercise) vs *desafío* in 9 `modals` keys | **reto** — two of three workers chose it independently, shorter for nav, names the section. |
| quiz | *cuestionario* (lesson) vs *test* (dashboard) | Needs a call. |

Other proposed rows, no conflict:

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| dashboard | panel | Agreed by two workers. | medium |
| Settings | ajustes | Agreed by two workers. | medium |
| streak | racha | Suggest settling at the `es` family level. | medium |
| hint | pista | | medium |
| badge | insignia | | medium |
| blank (fill-in) | hueco | | medium |
| upgrade | mejorar (tu plan) | | medium |
| bonus | extra | | medium |
| journey | aventura | Vs literal _viaje_. | medium |
| scrubber | barra de tiempo | No established term. | low |
| frame | fotograma | | medium |
| log | registro / registrar | | medium |
| Deep Dive, Learn to Build, Projects, AI Chat | kept English | Treated as feature names. | medium |

Flags for Aron/product, not glossary rows: tier names may mix languages if `{tier}`
placeholders inject raw English tier data next to translated copy ("Plan Básico" next to
"Plan Basic"); "Spotlight" kept English on the assumption it's a feature name (else _modo
foco_); lesson-status labels are feminine (_Completada_) while challenge/concept statuses
are masculine (_Completado_) — check no component reuses one key across differently
gendered nouns; length risks on the fair-use link, the livestreams bullet, and the "Agentic
Coding" footer link.

## 2026-08-01: Guide pruned to rules only, auto-gloss and quotation defects fixed

**Decided by:** agent, in a guide-pruning pass across all three Spanish files. No term
rendering changed.

**Auto-gloss instruction removed (authority: `global/voice.md`).** The § Style notes bullet
on "list" as an informal synonym for "array" told the translator to keep the glossary's
`array` term "(the English word, glossed once as _matriz_)". `global/voice.md` is explicit
that a `<define>` in the source is the **only** trigger for a gloss and that auto-glossing is
forbidden, and `global/translating.md`'s tidy pass lists auto-glosses as removable. `array`
is an ordinary word, not an acronym, so the separate licence to explain acronyms does not
apply. The bullet now just says to use the glossary's `array` term and not to introduce
_lista_; the `array` row in `glossary.md` already says the gloss is _matriz_ **on
`<define>`**, which is the correct and only home for that instruction.

**Quotation marks** were moved to the family guide and the dangling "do not use the
Hungarian `„ "` pattern" cross-reference dropped; the new family-level rule and its
unconfirmed-draft status are recorded in `../es/glossary-notes.md` (2026-08-01).

**Cut from the guide as duplication, not as a decision change:**

- § "European vs Latin American Spanish (distinctiveness)". Four of its five bullets
  repeated a binding row that already exists: loop → _bucle_ never _ciclo_ and to return →
  _devolver_ never _retornar_ are family glossary rows; `array` kept English with the
  _matriz_ gloss and never _arreglo_ is this locale's own `array` row; "informal plural →
  vosotros" is the § Formality rule. The fifth (ordenador / vídeo / fichero-archivo) has no
  glossary row and survives as the § Style notes "Spain vs Latin American lexicon" bullet,
  which the guide's opening now points at.
- § "Glosses that would teach nothing", moved wholesale to `../es/guide.md` § Term
  clarification, since es-419 stated the same rule in its own words (see the family notes).
- § "Audience specifics": the second bullet restated `global/voice.md` § Audience and § Voice
  and tone; the first (readers in Spain and other European Spanish-speaking communities) is
  now part of the guide's opening sentence.
- Sentence case for titles and headings, which is pan-Spanish and now lives in the family
  guide.
- The § Grammar bullet on the personal "a" in "llamar **a** una función", which is the
  `to call (a function)` family glossary row's own instruction.
- The § Style notes "loanword gender is fixed once" bullet, folded into the § Grammar gender
  agreement bullet that already listed _el array_ / _los arrays_ / _el string_.

**Proposed glossary delta, not applied** (term mappings kept in `guide.md` so no instruction
is lost, but which belong in glossary rows once agreed): "computer" → _ordenador_, "video" →
_vídeo_, "input" → _entrada_.

## 2026-07-31: Pruned ordinary vocabulary

Removed 8 rows that had one obvious canonical rendering with nothing to decide: `tech /
tech industry`, `pitfall`, `element`, `index`, `template literal`, `mental model`, `deploy
(verb / noun)`, `mentor / mentoring`. A reviewer may want to double-check `pitfall`
(_escollo_) and `deploy` (_desplegar / despliegue_), since both had a secondary alternative
noted, but neither alternative amounted to a real fork a translator would need guidance on.

## 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind European Spanish:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have, and
  several collided with their own word for `array` trying. European Spanish merged both
  onto **pizarra**, the everyday word for the board on a wall in Spain, ruling out
  _tablero_ (a game board or a dashboard) and _tablón_ (a noticeboard). No collision with
  `array`, which stays English in this locale.
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("your interpreter is Jiki... It's his job to
  interpret"), so the word has to be able to name a character. Several languages had
  reached for their term for interpreter *software*, which cannot. **es-ES did not change:**
  _intérprete_ was already right, being the ordinary Spanish word for a human interpreter.
  What changed is that the row now says so, and rules out _interpretador_ or any other
  program/device-flavoured coinage.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

## 2026-07-30: es-ES glossary filled out and its self-contradictions fixed

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**Rows added** for the terms the using-functions concept page needed: `identifier`,
`brackets (the two after a function name)`, `instruction (given to Jiki)`, `mental model`,
`(programming) language`, `course`, and the metaphor rows `machine`, `warehouse`,
`shelves`, `crank`, alongside the merged `board / whiteboard` row above.

**Two self-contradictions fixed**, both note or placement problems rather than new
renderings:

- `scope` appeared twice with opposite directions: a "Localize" row under Loops, state &
  program flow said `ámbito` was used as-is in prose, while the "Keep in English" row said
  `scope` itself stays English and is only glossed as _ámbito_. The two could not both be
  right for the same term. The "Keep in English" row is correct (it matches how the string
  and Boolean rows are handled) and is now the only one; the duplicate Localize row is
  gone.
- The worked example under § Brackets used _identificador_ ("escribe su identificador"),
  while the beginner-facing page this example illustrates correctly uses the ordinary word
  _nombre_ for the same idea. The example now reads "escribe su nombre", matching the
  `identifier` row's own instruction to prefer _nombre_ in beginner-facing prose.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`) is not repeated here.

### Core decisions

| Term | Why |
|------|-----|
| tech / tech industry | _Sector tecnológico_ is natural in Spain; _industria tecnológica_ is heavier. |
| pitfall | Ordinary word, so it stands alone; _escollo_ reads more natural here than a literal translation of "pitfall". |

### Values & data types

| Term | Why |
|------|-----|
| template literal | _Literal de plantilla_ follows MDN's Spanish documentation (MDN es). |
| index | Direct cognate of the English word, so it needs no clarifying parenthetical. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| mental model | _Modelo mental_ is the standard, ordinary collocation in Spanish; nothing more idiomatic exists. |
| (programming) language | _Lenguaje_ is the ordinary Spanish word for a language, matching how English uses its own everyday word; _idioma_ reads as a category error (it names a natural, spoken language). |

### Tooling & engineering

| Term | Why |
|------|-----|
| deploy | Spain-standard rendering; the Spanish Wikipedia entry for the concept is titled "Despliegue de software". |

### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| pathway | _Itinerario formativo_ is natural in Spain education contexts. |

### Keep in English

| Term | Why |
|------|-----|
| string | Keeping it English leaves _cadena_ free for the array chain metaphor. |
| array | Spanish developers in Spain keep "array" in prose; it is the ordinary word for them, not a jargon import. |
| framework | _Marco de trabajo_ is well-attested as a loanword gloss in Spanish developer writing. |

### Jiki physical metaphors

| Term | Why |
|------|-----|
| input slot | _Ranura_ is exactly a coin/token slot, pairing with the family glossary's _rampa de salida_ (return chute) into one coherent vending-machine mental model. |
