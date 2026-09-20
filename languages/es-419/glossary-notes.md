# Latin American Spanish (es-419) glossary notes

## 2026-08-05: "code" is translated, _código_, and leaves the Keep in English list

**Decided by:** matcots5, native speaker, on the `exercise/maze-turn-around` review thread
(the forum). **Term affected:** `code (what the learner writes)`, a new row in the
family glossary `../es/glossary.md` § Core decisions; `Code` is removed from that file's
§ Keep in English row, which now reads `Bug, Frontend, Backend`.

**What he said.** Reading the translated Turn Around instructions, he stopped on "Una de las
cosas buenas de la solución es que el **code** se lee de forma muy natural" and asked "Why
does it says code? it should say 'código'". He added that he found it weird to read sentences
using "code" instead of _código_, that he knew the glossary had been accepted but that this
"can confuss people", and that apart from that word the translation was fine.

**Why he is right and the old row was not.** The row he is objecting to had no rationale
recorded anywhere: `../es/glossary-notes.md`, this file and `../es-ES/glossary-notes.md` are
all silent on it, unlike every other Keep in English entry (`string` frees _cadena_ for the
chain metaphor, `array` is the ordinary word for Spanish developers, and so on). The
identical string "Code, Bug, Frontend, Backend" appears in the published glossaries of a
dozen unrelated languages, so it is bootstrap-template boilerplate that was never a Spanish
decision, and no native speaker had ever confirmed it. matcots5 read and approved the
glossary in general terms back on the forum post 6, but a rationale-free row inside a
keep-in-English list is not the same thing as seeing the word in running prose; this is the
first time any native speaker has been shown the actual effect and asked about it.

There is also no technical reason to keep it. Unlike `string`, `code` blocks nothing: nothing
else in the Spanish glossary claims _código_, and _bloque de código_ (code block) already sits
in the family glossary, so the old row had es-419 writing "el bloque de código" and "el code"
in the same corpus. Both Spanish guides contradicted the row in their own worked examples
("Ejecute este código", "ejecuta el código", "en el código", "del código"), and the es-419
`interpreter` row uses "su trabajo es interpretar el código" as its canonical sentence. In
practice the row was near-dead already: no es-ES page ever left "code" untranslated, and in
es-419 only the deepseek `maze-turn-around` run applied it literally, while every other page
says _código_. So this change codifies what both locales were already doing, rather than
imposing a Latin American call on Spain, which is why the row goes in the family file.

**Not a prune of a protected row.** Removing `Code` from the Keep in English list is not
overriding a native speaker: the decision log records no speaker choosing it. It is retiring
an unconfirmed engine-era draft on the first native-speaker evidence we have, which is
exactly how a script-backed language's glossary is meant to grow.

**Follow-up, not done here.** `maze-turn-around` is the only published es-419 item that still
says "code" in prose (three lines in the instructions, five strings in its message catalog).
That sweep is a separate pass.

## 2026-08-03: `input` → _argumento_, and the HSL colour trio settled

**Decided by:** megareve and matcots5, both native speakers, on the glossary thread (posts 10, 12 and 14). **Terms affected:** `input (a value passed into a function)`
(new row), `hue (colour control)`, `lightness (colour control)`, `saturation (colour control)`
(new rows). All four were the unconfirmed drafts recorded in the 2026-08-02 entry below; they
are now written into `glossary.md`.

**`input` → _argumento_.** We had asked which of _argumento_ and _entrada_ reads more natural,
because the first Stage 2 batch had used both (see the 2026-08-02 entry). matcots5 answered
first (post 10) that _entrada_ sounded more natural to him personally, but that he had heard
other beginners say _argumento_, and explicitly asked to wait for other reviewers rather than
settle on his own preference. megareve then gave the deciding reasoning (post 12): both words
are natural, and the choice is about how each is used. _entrada_ (input) normally arrives with
a paired _salida_ (output), so it carries a strict in/out direction. _argumento_ draws no such
distinction, which is what you want, because an argument is not necessarily an input: with
pointers in C or C++ the same argument can be read from and written to. His conclusion was
that "argumento will be preferred when passing in to a function".

That is a reasoned case rather than a preference, offered by exactly the second reviewer
matcots5 asked to hear from, so it settles the question: **_argumento_ everywhere the
English says "input" in the passed-to-a-function sense**. The cost is real and accepted:
the English deliberately says "input" rather than "argument" to stay jargon-free, and
es-419 now collapses both English words onto _argumento_. The `input slot` metaphor is
unaffected and stays _ranura_: that is a physical slot on the machine, not the value going
into it.

**The HSL colour trio.** We asked (post 13) whether _tono_ / _luminosidad_ / _saturación_ or
the alternatives _matiz_ / _brillo_ read better on the drawing exercises' colour controls.
matcots5 confirmed (post 14) that _tono_, _luminosidad_ and _saturación_ feel natural to him,
while noting other people might prefer _brillo_. That is a confirmation of the words already
in use rather than a new proposal, so writing the rows changes no published text; it only
stops the three words drifting across the many `draw` exercises that use them. Settled on
that basis, with the caveat that it rests on one voice: his hedge was about what others might
prefer, not a reservation of his own, and _brillo_ names brightness rather than lightness, so
it is a weaker fit for the L of HSL regardless. If another reviewer argues for _matiz_ or
_brillo_, these rows are worth revisiting.

## 2026-08-03: `character` (the on-screen figure) → _personaje_, and "Ewww!" → _¡Guácala!_

**Decided by:** megareve and matcots5, both native speakers, on the `exercise/maze-solve-basic`
review thread. They agree with each other on every point below; nothing here
is contested. **Terms affected:** `character / little person (the figure on screen)` (new row),
`Ewww! / Yuck! (disgust interjection)` (new row).

_personajito_ was the original rendering of the maze figure and reads as unnatural baby-talk.
The agreed word is **_personaje_**, with **_personaje chiquito_** kept only where the English
itself marks the diminutive ("the little person"). The row is worded to keep it apart from the
family glossary's `character` → _carácter_, which is the text-character sense: the two English
words are identical and the Spanish ones are not interchangeable.

The maze poop error read "¡Puaj! ¡Pisaste la caca!". megareve proposed **_¡Guácala!_** as the
more natural Latin American interjection but was unsure how far it travels across the region,
so it was deliberately held rather than applied on one opinion. matcots5 has now confirmed it
("i prefer 'guacala'"), so with two reviewers agreeing it is settled for es-419. _¡Puaj!_ stays
in es-ES, which is where it is at home; this is exactly the kind of locale divergence the
es-419 delta glossary exists for.

_¡Guácala!_ lives in the shared `maze` category catalog, so applying it changed the message for
all eight exercises in that family (`maze-walk`, `maze-turn-around`, `maze-solve-basic`,
`maze-solve-walk`, `maze-solve-repeat`, `maze-automated-solve`, `look-around`,
`emoji-collector`), not just the one that was reviewed.

The same thread also settled a whole sentence rather than a term (the exercise's opening line,
"El objetivo de este ejercicio es que te familiarices en como funciona este entorno de
aprendizaje"). A sentence is not a glossary row, so it is recorded in the permanent reviewer
notes at `languages/es-419/exercise/maze-solve-basic.md` instead.

## 2026-08-03: `height` → _altura_, never _alto_

**Decided by:** megareve, a native speaker, on the `exercise/rainbow` review thread. **Terms affected:** `height (of a shape or box)` (new row).

The draw-category catalog rendered `heightPositive` as "El alto debe ser mayor que 0".
_El alto_ is grammatical but reads worse than _la altura_ here, and at the head of a
sentence a bare _alto_ can be misread as the interjection _¡alto!_ (stop), which is exactly
where an error message puts it. The agreed rendering is **_la altura_** everywhere height is
meant. The pairing word is unaffected: width stays _el ancho_, so pairs read _el ancho y la
altura_.

Applied across every es-419 file that used _alto_ in the height sense, not just the one the
reviewer read: the shared `draw` category catalog (the `heightPositive` error and both
`rectangle` describers), `exercise/rainbow`'s `rectangle` function description, and the
brick-wall paragraph in `concept/variables`. The article and adjective agreement was changed
with it (_el mismo alto_ → _la misma altura_, _un alto de_ → _una altura de_).

## 2026-08-02: Drafts from the first Stage 2 batch (since settled on the forum)

**Decided by:** nobody at the time. These were **proposals**, raised by the worker that
translated the `rock-paper-scissors` and `rainbow` exercise message catalogs (those catalogs
have no API path, so they stay on the subagent path even though es-419 runs on DeepSeek). They
were recorded here so the wording used in those two exercises stayed traceable, and so a
native speaker could object. **Both have since been settled by reviewers on the forum
and written into `glossary.md`; see the 2026-08-03 entry above.** The drafting reasoning is
kept below because it is what the reviewers were answering.

- **input** (a value passed into a function, the English source's usual word for it) → **argumento**. Used
  throughout the shared `draw` category catalog ("Todos los argumentos deben ser números").
  It collapses the English "input" onto the already-agreed _argumento_ (call-site value), which
  reads naturally but loses the distinction the English draws between the two words, and it sits next
  to the separate _input slot_ → _ranura_ metaphor. Medium confidence; the alternative is
  _entrada_, which is flatter but keeps the words apart. **This one is already inconsistent
  across the batch and needs settling**: `concept/variables` renders "four inputs" as _cuatro
  entradas_, while `exercise/rainbow`'s instructions render "the final input" as _el último
  argumento_. Both came out of the same engine on the same day, which is exactly the drift a
  glossary row exists to stop. The hand-written catalogs follow their own exercise's
  instructions (_argumento_ for `rainbow` and the shared `draw` catalog), so the two halves of
  each exercise agree even though the two items do not agree with each other.
- **hue** → **tono**; **lightness** → **luminosidad**; **saturation** → **saturación**. The
  HSL colour trio, used across every `draw` exercise, so they need to be the same words
  everywhere. _matiz_ is the other defensible rendering of _hue_ and _brillo_/_claridad_ of
  _lightness_. Medium confidence on _tono_ and _luminosidad_, high on _saturación_.

## 2026-08-02: Switched to the DeepSeek translation engine

**Decided by:** owner (Nicole), directly. `languages/es-419/tracking.json` now carries a
`translation_engine` block (`engine: deepseek, model: deepseek-v4-pro`). Per "Translation
engines" in `global/workflow.md`, this is the standing engine for es-419 from now on; every
future translation pass for this locale uses it instead of the fable subagent default.

A website-copy pass had started on the old fable/subagent path before this switch (three
chunk workers translated `modals` and part of the learning-surface namespaces) but was
abandoned before merging — `app/messages/es-419.json` is untouched, still 0/487 in-scope
keys translated. That draft was discarded rather than merged, so a future es-419 pass starts
clean on the deepseek engine, not as a mixed-engine catalog.

## 2026-08-01: Guide pruned to rules only

**Decided by:** agent, in a guide-pruning pass across all three Spanish files. No term
rendering changed; this entry records the rationale that was removed from `guide.md` and the
one contradiction that was resolved.

**Contradiction resolved (guide's own imperative rule outranks its own worked example).**
The § Formality imperative list offered "Fíjate que..." *and* "Nota que..." as equally good
renderings of "Notice that...", while the before/after table branded "Nota que los
paréntesis son importantes" as the *stiff* version of "Fíjate que los paréntesis hacen la
diferencia". Both readings cannot be right. The imperative rule wins, so both forms stay
available and the table row was dropped. (The row was also the one the 2026-07-30 entry
above cites for its `paréntesis` bracket check; the bracket rendering itself is unchanged
and still checked by the glossary's own default.)

**Rationale removed from the guide** (the rules it justified are all still stated
imperatively there):

- Why `tú` and not `usted`: `tú` is the neutral standard for online learning across Latin
  America.
- Why not `voseo`: `vos` is warm but regional (River Plate, parts of Central America) and
  reads as local rather than pan-LatAm, so `tú` is the neutral written choice. `ustedes`
  vs `vosotros` remains the single clearest es-419/es-ES grammatical marker.
- Why `-x`/`-@`/`-e`/`elle` forms are banned: they read as bureaucratic or activist and
  break the warm, neutral voice.
- Audience research: the LatAm ed-tech market is shaped by platforms like Platzi and
  freeCodeCamp Español (warm, direct, encouraging, informal), and learners span a wide range
  of educational backgrounds, so the writing assumes an intelligent reader who has never
  typed a line of code. The behavioural part (write neutral pan-regional Spanish) is now one
  sentence in the guide's opening; the rest was a restatement of `global/voice.md` §
  Audience.
- A comparison of Spanish word-order freedom against Hungarian's, used to introduce the
  information-structure section.

**Cut from the guide as duplication, not as a decision change:**

- § "Identical-gloss terms" moved wholesale to `../es/guide.md` § Term clarification (es-ES
  stated the same rule in its own words; see the family notes). The `framework` row's
  pointer at it was repointed to the family guide.
- Three "Regional lexicon" bullets that repeated glossary rows verbatim: floating point →
  _punto flotante_ (the `float / decimal` row), the whiteboard metaphor → _pizarrón_ (the
  `board / whiteboard` metaphor row), and the array gloss → _arreglo_ (the `array` row under
  Keep in English). "computadora" and "video" (no accent) have no glossary row and stayed in
  the guide.
- Sentence case for titles, which is pan-Spanish and now lives in the family guide.
- The `tú` + second-person-conjugation grammar bullet, folded into § Formality where the
  same rule was already half-stated; the "definite article with names" bullet, folded into
  the § Style notes product-name bullet it existed to support; and the "avoid comma-chained
  subordinate clauses" bullet, folded into the § Grammar "Sentence rhythm" bullet.
- The § "Worked examples" and § "Common EN→es-419 pitfalls" tail, whose surviving content
  (titles, calls to action, acronyms, calques and false friends) is now single-instance
  bullets under § Style notes, and two of whose examples became rows in the before/after
  table. The dropped items were the null-subject pitfall (already a family § Grammar rule),
  the long-relative-chain pitfall (already the § Grammar sentence-rhythm rule) and
  "Empecemos" (already in the § Formality imperative list).

**Proposed glossary delta, not applied** (these are term mappings currently living in
`guide.md`, kept there so no instruction is lost, but they belong in a glossary row once
agreed): "computer" → _computadora_, "video" (spelled without the accent), "PPP pricing" →
_precios ajustados al poder adquisitivo local_, "Q&A" → _preguntas y respuestas_.

## 2026-07-31: Pruned settled vocabulary

**Decided by:** agent. Removed 5 rows whose rendering had one obvious canonical answer and
nothing left to decide: `developer`, `mentor / mentoring` (both just pointed at the
gender-neutral-phrasing guidance already in `guide.md`), `template literal`, `return value`,
and `mental model`. A reviewer might query `template literal` (it's a technical term, not a
dictionary word) but its row carried no rejected alternative or scope note, just the settled
MDN-Spanish rendering.

## 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, and, as a principle, every row.

Two decisions came out of that pass that bind es-419:

- **`interpreter`.** Several languages had reached
  for their term for interpreter *software*, which cannot. **es-419 did not change:**
  _intérprete_ was already right, being the ordinary Spanish word for a human interpreter
  (someone who interprets speech), and it takes a character naturally. What changed is that
  the row now says so, and rules out _interpretador_ and _programa intérprete_, both of
  which name a piece of software rather than a person.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

## 2026-07-30: es-419 glossary filled out for the using-functions concept page

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**Rows added** to cover terms the using-functions concept page needed and that had not
been written down for es-419 before: `instruction`, `mental model`,
`(programming) language`, `brackets (the two after a function name)`, and the metaphor rows
`machine`, `crank`, `shelves`, `warehouse`, and `board / whiteboard` (the last per the owner
decision above).

**Contradictions checked and confirmed absent**, following the pattern that turned up in
other languages' equivalent passes:

- The `element` row points at `array` staying English (not `arreglo`), consistent with the
  `array` row under "Keep in English".
- The `framework` row does not bracket the English gloss: since `framework` is spelled
  identically in Spanish, its row explains the concept in Spanish instead, per the
  Identical-gloss-terms rule in `guide.md`.
- `guide.md`'s worked example ("Nota que los paréntesis son importantes") uses `paréntesis`,
  matching the glossary's default bracket rendering, not `corchetes` (which name the square
  brackets specifically).

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`) is not repeated here.

### Core decisions

| Term | Why |
|------|-----|
| developer | Standard term. |
| tech / tech industry | "tech" kept as-is: established in LatAm dev culture. |
| pitfall | Ordinary word. |

### Values & data types

| Term | Why |
|------|-----|
| index | Direct cognate. |
| template literal | The MDN-español term for JS backtick strings. |

### Functions & control flow

| Term | Why |
|------|-----|
| statement (executable) | Standard LatAm CS term. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| scope | Standard Spanish term; MDN and Microsoft's Spanish docs both use _ámbito_. |
| mental model | Standard Spanish collocation. |

### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| canvas (graphics exercises) | _lienzo_ is the term used by p5.js in Spanish. |

### Keep in English

| Term | Why |
|------|-----|
| string | Keeping _string_ English frees _cadena_ for the "chain" array metaphor; see `../es/glossary.md` § the physical metaphors. |
| framework | Kept as a loanword in prose; well-attested in LatAm dev writing. |

