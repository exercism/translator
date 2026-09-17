# Brazilian Portuguese (pt-BR) glossary notes

## 2026-08-06: Translation engine confirmed as `fable`

**Decided by:** sorrizo and oxe-b, both native speakers, on the "Alternative translation
model" comparison thread (https://forum.jiki.io/t/931). **Status:** settled.
**Terms affected:** none (engine choice, not a glossary or guide change).
**Files affected:** `tracking.json` (`translation_engine`).

Jeremy posted an alternative-model rendering of a Brazilian Portuguese page alongside the
published one and asked which read better. Both reviewers preferred the original, and the
thread was closed with "we will keep the current version rather than switching models on
this evidence".

This is a **confirmation of the existing default, not a switch**: Brazilian Portuguese was
already running on `fable`, and it continues to. What changed is that the choice is now
native-speaker-backed and therefore recorded as a `translation_engine` block, which per
`orchestrator.md` means a human has confirmed that model for this language.

## 2026-08-05: Seven rows proposed from the website-copy translation pass (unconfirmed drafts)

**Decided by:** nobody. **Status: unconfirmed drafts**, proposed by the workers translating
website copy (`namespaces=codingExercise,seo,articles,blog,checkout`). **Terms affected:**
`breakpoint`, `tooltip`, `LLM-era`, `roadmap`, `job-ready`, `hands-on practice`, `post (blog
post)`.

No Brazilian Portuguese speaker has ruled on any of them.

**`job-ready` → `rumo ao mercado de TI`** reuses the existing `tech / tech industry` →
"mercado de TI" row confirmed by oxe-b on 2026-07-31, rather than coining a new phrase for
"job-ready" on its own.

**There is also an earlier, still-unagreed delta of roughly fifteen terms from a first
website-copy pass** (`dashboard → painel`, `feature → recurso`, `upgrade → fazer upgrade`,
`AI → IA`, `badge → emblema`, `achievement → conquista`, a `lesson → lição` vs `aula` split,
`frame → passo`, `breakpoint → ponto de parada`, and others), which was not logged as its own
dated section in this file at the time and is called out here so it is not lost. It predates
and is separate from this pass, and it is worth reconciling the two together when a native
speaker takes this up: this pass proposes keeping `breakpoint` in English, medium confidence,
while the earlier delta proposed `ponto de parada` for the same term. Neither is confirmed,
so the conflict is open, not resolved, and both candidates are recorded here rather than one
overwriting the other.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| breakpoint | kept English | Alternatives exist ("ponto de interrupção", "ponto de parada"); conflicts with the earlier unagreed delta's "ponto de parada" proposal, see note above. | medium |
| tooltip | dica | | medium |
| LLM-era | era da IA | | medium |
| roadmap | kept English | | medium |
| job-ready | rumo ao mercado de TI | Reuses the confirmed "mercado de TI" row (2026-07-31). | medium |
| hands-on practice | prática mão na massa | | medium |
| post (blog) | kept English ("post") | | high |

## 2026-08-04: `chave`, `barrar` and `segurança` confirmed; `branch` still unresolved

**Decided by:** native speaker (sorrizo), forum post https://forum.jiki.io/t/288/3099,
answering our four open questions at https://forum.jiki.io/t/288/3096. **Status: confirmed**
for the first three; `branch (of a conditional)` remains an unconfirmed low-confidence draft.
**Terms affected:** `key (in a dictionary)`, `to turn (someone) away`, `bouncer (the
door-staff character)`, `branch (of a conditional)`.

`key` → _chave_ stands, and the collision we had assumed does not exist. We had asked whether
sharing a word with _chaves_ for `{}` would confuse a reader; sorrizo: "It actually doesn't
collide with chaves {}." The row's disambiguation instruction (_a chave do dicionário_ vs _a
chave de fechamento_) was therefore solving a problem native speakers do not have, and has
been dropped along with the draft marker. The row still sits in the locale file rather than
`../pt/glossary.md`, but only because pt-PT has not been checked, not because of the
collision reasoning recorded in the 2026-08-02 entry below, which no longer holds.

`to turn (someone) away` → _barrar_ is confirmed for the nightclub-door sense. sorrizo: "Both
barrar and recusar are good, but I would use barrar in this context of a nightclub." The row
no longer offers the two as interchangeable-with-consistency; _barrar_ is the default and
_recusar a entrada_ is reserved for sentences that need an object phrase.

`bouncer` → _segurança_ is confirmed. sorrizo: "segurança is the perfect translation for it."
This settles the _porteiro_ alternative, which two workers had already independently rejected.

`branch (of a conditional)` → _bloco_ is **not** resolved and keeps its low-confidence
marking. sorrizo did not propose an alternative; she said she had never heard "branches" used
this way even in English, and that Portuguese may simply never have developed a natural
equivalent for the concept. That reframes the problem: this may not be a wording choice we
have got wrong but a concept with no clean pt-BR equivalent, in which case the fix is likely
to be describing the fork in the prose rather than finding a noun for it. Future review
should start from that, and should not read the absence of a suggested replacement as
approval of _bloco_.

## 2026-08-03: _iterar_ takes _sobre_, not _por_

**Decided by:** native speaker (oxe-b), forum post https://forum.jiki.io/t/1109/1, reviewing
the Arrays concept page. **Status: confirmed.**
**Terms affected:** `iteration`.

oxe-b flagged that "iterate through" should be _iterar sobre_. The `iteration` row was an
unconfirmed draft: it gave the verb _iterar_ but said nothing about which preposition follows
it, and the Arrays translation had reached for _iterar por_. _Iterar sobre_ is the standard
collocation in Brazilian technical writing, so the row's Notes now name it and rule out
_iterar por_. The rendering _iteração_ itself does not move; only the usage note is new.

The same post's other two suggestions were phrasing, not terms, and are recorded in
`languages/pt-BR/concept/arrays.md` instead.

## 2026-08-03: "input" splits away from _fenda_, and `intérprete` + `quadro` are confirmed

**Decided by:** native speaker (oxe-b), forum post https://forum.jiki.io/t/288/15, answering
our question at https://forum.jiki.io/t/288/14. **Status: confirmed.**
**Terms affected:** `input (one a function declares)`, `input (a value passed in at a call)`,
`interpreter`, `board / whiteboard`, and, by exclusion, the family row `input slot`.

We asked whether keeping _fenda_ for the physical vending-machine slot and using
_entrada_ / _valor de entrada_ for the ordinary "a value passed in" sense would read cleanly
as a split, or whether the two side by side would confuse a reader. oxe-b: "'Entrada' is a
good default word. 'Input value' is usually translated as 'valor de entrada' or just
'entrada'." So the split stands, and this resolves the conflict the 2026-08-02 catch-up pass
flagged below (the `strings` worker had merged both senses onto _fenda_, while the `two-fer`
and `weather-symbols` workers had proposed _entrada_ for the ordinary sense).

**This is not a correction to `input slot`.** The English source uses two words in the same
passage and uses them deliberately: **slot** for the physical opening a coin or a piece of
paper goes into ("put some coins in the first four slots"), **input** for the thing you
supply ("an extra input", "the fifth input"). _Fenda_ stays the rendering of the first, and
is confirmed family-wide. What was wrong was reaching for the metaphor word where the English
had not used the metaphor, so the new rows are keyed on the **English word**, not on what the
sentence is about. A future pass that finds them redundant is reading the sense, which is
exactly the mistake that produced _fenda_.

**Two `input` rows, not one**, mirroring the split European Portuguese settled independently
on the same day: _entrada_ where the English names an input a function declares or offers,
_valor de entrada_ where it names the value written at one position of a call. The two rows
differ from pt-PT's (which uses _parâmetro de entrada_ for the first), so both stay in this
locale file rather than moving up to `../pt/glossary.md`.

Applied to `curriculum/src/concepts/strings/pt-BR.md`: "uma fenda extra" → "uma entrada
extra" and "na quinta fenda" → "no quinto valor de entrada". The two genuine **slot**
sentences in the same page (the coins in the first four slots, the paper in the fifth slot,
and the image `alt` text) keep _fenda_ / _fendas_, as does "a fenda de uma máquina" on the
Arrays page, which renders the English "an input slot of a machine". The JavaScript
interpreter's pt-BR catalog was checked and already draws the distinction correctly
(`slotCount` → _fenda(s) de entrada_, `inputCount` → _entrada(s)_), so nothing was changed
there.

**Two existing rows were confirmed in the same post**, both of which had been our own calls
flagged as wanting a second opinion:

- **`interpreter` → intérprete** is right, and _interpretador_ is not. This was reversed once
  before (see the 2026-07-30 owner-decisions entry below), so the confirmation matters.
- **`board / whiteboard` → quadro** is clean for the whiteboard/instruction-board sense.

Neither rendering moves; both rows are now protected, and their Notes say so.

**Forward guidance, no glossary row yet: a chess/checkers-style board is _tabuleiro_, not
_quadro_.** oxe-b added that if a grid-of-squares board ever appears, _tabuleiro_ is the word
for it, and _quadro_ would be wrong there. No Jiki content needs it today, so there is
nothing for a translator to act on and no row was added; this note is here so that the first
pass that does hit one reaches for _tabuleiro_ and does not widen _quadro_ to cover it. It
pairs with the existing `cell (grid square)` → _casa_ row, which already borrows the
board-game frame.

## 2026-08-03: `return chute` corrected to `boca da máquina`, and the row left the family file

**Decided by:** native speakers (alanprofeta, oxe-b), forum posts
https://forum.jiki.io/t/288/10 and https://forum.jiki.io/t/288/12.
**Status: confirmed.**
**Terms affected:** `return chute`.

The previous rendering, `calha de saída`, was an unconfirmed draft carrying its own
"low-to-medium confidence; flag for native-speaker confirmation on first real use" warning.
alanprofeta read it in isolation and said it struck him as very odd, but had no alternative
to offer. We replied with the metaphor's actual context (Jiki's machine is a vending
machine: you post a value into the input slot at the top, and the return value comes out of
the opening at the bottom) and asked for a suggestion.

oxe-b answered with two candidates:

- **`bandeja de retirada`**, the more formal, manual-style term (literally a "collection
  tray").
- **`boca da máquina`**, the colloquial term Brazilians actually use for the opening on a
  vending machine or an ATM.

`boca da máquina` is the choice, on oxe-b's own stated preference for exactly this context.
It also fits the two rules that were already going to decide it: `global/voice.md`'s
"default to the ordinary, common word", and the requirement that the metaphor keep teaching.
`bandeja de retirada` is accurate but reads as signage rather than as something Jiki would
say, and it names a tray, which pictures a value resting in a receptacle rather than being
pushed out of the machine. `boca` is what a Brazilian reader already calls that opening, and
it binds the chute to the machine that owns it, which is the whole point of the metaphor.

It also sits well beside the confirmed `input slot → fenda`: `fenda` is the narrow slot a
value goes *in*, `boca` is the wide opening it comes *out* of, and the two words are not
confusable with each other.

**The row moved out of `../pt/glossary.md` into the two locale glossaries.** `boca da
máquina` is a Brazilian colloquialism, and no European Portuguese speaker has been asked
about it, so promoting it family-wide would be assuming what the family rule
(`global/workflow.md`, "only move it up to the family file once it is confirmed identical
across every locale") says must be confirmed. pt-PT keeps `calha de saída` verbatim, warning
and all, now in `../pt-PT/glossary.md`; its effective glossary is unchanged, and its
translated content was not touched.

## 2026-08-02: Proposed terms from the Stage 2 batch 2 catch-up pass (unconfirmed drafts)

**Decided by:** agent (proposals only, nothing written to `glossary.md`). The catch-up pass
translating `two-fer`, `strings`, `digital-clock`, `arrays`, `weather-symbols`.

**The one real conflict, needs a native-speaker ruling.** `languages/pt/glossary.md`
(family) already has a human-confirmed row: `input slot → fenda`. The `strings` worker
extended `fenda` to cover ordinary "input" too, merging the source's "an extra input" and
"the fifth slot" onto the one metaphor word. The `two-fer` and `weather-symbols` workers
went the other way, proposing `entrada` for ordinary "input" and deliberately keeping it
distinct from the `fenda` metaphor. Both can't stand — recommend keeping `fenda` for the
physical-slot metaphor and adding `entrada` for the ordinary "value passed in" sense, with a
Notes line on each pointing at the other, but this is a native-speaker call and `strings` is
already published with the merged reading.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| input (ordinary sense, distinct from the fenda metaphor — see conflict above) | entrada | | medium |
| compound data type | tipo de dado composto | Core teaching term, recurs on later compound-type pages. Pairs with "tipo de dado". | high |
| template string | kept English, no gloss | Brazilian dev writing uses the English term; alternatives (_literal de modelo_, _string de modelo_) exist, so this sets a precedent. | medium |
| display (the time) | mostrar | Chosen over _exibir_ for warmer register; other display-style exercises should match. | medium |
| meridiem | kept as-is / quoted | Source names it as a term of art; alternative is paraphrasing as "o indicador de am/pm". | medium |

**Note:** the `arrays` item's proposed delta was lost (its worker stopped responding across
three relay attempts) despite the page itself translating and publishing cleanly (stamped
`012da550948ba2ebcfaf953cd0906f3f`, first real use of "calha de saída" flagged for the
native-speaker confirmation the family glossary asks for). Worth a `tidy` re-ask later to
recover whatever term choices it made. Possible `global/terms.md` gap: "template string".

## 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, `board / whiteboard`, and, as a principle, every row.

Three decisions came out of that pass that bind Brazilian Portuguese:

- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. **Brazilian Portuguese
  reversed an earlier choice here.** An earlier pass had deliberately picked
  `interpretador` over `intérprete`, on the grounds that `intérprete` names a human
  spoken-language interpreter and would read as the wrong kind of person. That reasoning
  inverted once Jiki is understood as a character whose job is interpreting ("o trabalho
  dele é interpretar o código"): a human-shaped word is exactly what is needed, and
  `intérprete` is that word, while `interpretador` names interpreter *software* and cannot
  describe a character. The row now reads `intérprete`, and rules out `interpretador`.
- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have.
  Brazilian Portuguese renders both as **quadro**, the ordinary word for a board on a
  wall, with no second word (never `quadro branco` or `lousa`) for the same object.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

## 2026-07-30: `comment` added for the function-inputs concept page

**Decided by:** agent. **Status: unconfirmed draft.**
**Terms affected:** `comment (code comment)`.

Checked the source of the three using-functions concept pages
(`using-functions`, `using-functions-with-inputs`, `using-functions-with-return-values`)
against the combined pt/pt-BR glossary. Every term they need was already covered except
one: `using-functions-with-inputs` defines `<define>comments</define>` (the `//` line a
learner writes as a private note), which had no row in either file. `global/terms.md`
lists it as a term needing a glossary entry in every language. Added `comentário` to this
locale's glossary, not yet used in a real translated file. It reads as an ordinary word
with no reason to diverge from pt-PT, so it is a candidate to move to `../pt/glossary.md`
once confirmed identical there.

No other gap was found: the `board / whiteboard`, `machine`, `crank`, `shelves`,
`warehouse`, `interpreter`, `mental model`, `(programming) language`, `instruction (given
to Jiki)` and `brackets` rows this pass expected to need adding were already present in
this file from an earlier pass. A search of this locale's guide and glossary also found no
instance of `brackets` glossed as `colchetes` where `parênteses` was meant; the file
already used `parênteses` consistently for the function-call bracket pair.

## 2026-07-31: `tech industry` split into a software/programming-specific sense from forum feedback

**Decided by:** native speaker (oxe-b), forum post https://forum.jiki.io/t/288/3.
**Status: confirmed.**
**Terms affected:** `tech / tech industry`.

Reviewing the pt-BR glossary, oxe-b noted that "mercado de tech" carries a job/business
sense that works for "tech industry" broadly, but when the context is specifically
software/programming jobs, "mercado de TI" ("TI" = "tecnologia da informação", a literal
translation of "information technology") is more natural and common. They also noted
"setor de tecnologia" as an option for the broad/generic sense, but the existing "mercado
de tech" row already covers that case, so only the specific software/programming-jobs
sense was added as a new row rather than replacing the existing one.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections. A term whose reasoning is already covered
by a dated entry above (`interpreter`, `board / whiteboard`) is not repeated here.

### Core decisions

| Term | Why |
|------|-----|
| tech / tech industry | "tech" is established in Brazilian dev culture as a bare loanword. |
| developer | Standard term; no rationale beyond that. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| instruction (given to Jiki) | Portuguese has one ordinary word (`instrução`) for both an executable statement and an instruction given to Jiki; coining a second would read worse than sharing it. |
| scope | `escopo` is fully nativized in Brazilian tech writing, unlike pt-PT's `âmbito`. |

### Keep in English

| Term | Why |
|------|-----|
| framework | Both _framework_ and _estrutura_ appear in Brazilian dev writing; _framework_ reads more natural. |

### Jiki physical metaphors

| Term | Why |
|------|-----|
| warehouse | `galpão` preferred over `armazém`, which reads commercial/industrial in Brazil. |

## 2026-07-31: `cell` added from forum feedback on maze-solve-basic

**Decided by:** native speaker (sorrizo), forum post
https://forum.jiki.io/t/812/5. **Status: confirmed.**
**Terms affected:** `cell (grid square, e.g. maze exercises)`.

Reviewing the published `pt-BR` translation of `Solve the Maze`, sorrizo flagged "one cell"
translated as "uma célula" (move() description) as not sounding natural: "célula" reads as
a biology/spreadsheet term, not a board-game square. Suggested "uma casa" instead, which
matches the board-game sense (as in a chess/checkers square) and is the ordinary word.
Added to the glossary as a general term for a maze/grid square, since it will recur in any
grid-based exercise, not just this one.

The same post confirmed the existing "bonequinho" choice for the maze walker/character is
fine as-is (flagged only as "not the most literal translation", not as wrong), so no
glossary change there.

## 2026-08-01: `welcome` moved from the guide into the glossary, and the guide pruned

**Decided by:** native speaker (oxe-b), forum posts https://forum.jiki.io/t/812/2 and
https://forum.jiki.io/t/288/7, re-recorded here. **Status: confirmed** (the decision is
unchanged; only the file it lives in changed).
**Terms affected:** `welcome (greeting / interjection)`.

Reviewing the published `pt-BR` translation of `Solve the Maze`, oxe-b flagged "Welcome"
rendered as "Boas-vindas". `Boas-vindas` is a **noun**, something you wish or celebrate, and
only works inside a construction like "damos as boas-vindas a você" or "uma festa de
boas-vindas"; `Bem-vindo` is what directly addresses a person and is the right form for the
standalone greeting. That decision was written into `guide.md` § "Gender-neutral phrasing"
at the time, but a term mapping is a glossary row, not guide prose, so it now sits in
`glossary.md` § "Core decisions" with the instruction intact. The guide keeps only the
behavioural residue that is not about this one word: do not use a noun as an interjection to
dodge gender agreement, recast the sentence instead. Nothing was reworded away from what
oxe-b decided.

**The rest of the guide was pruned in the same pass**, with the removed reasoning recorded
here:

- **Audience research.** The guide described the Brazilian ed-tech market as large and
  diverse, shaped by platforms like Rocketseat and Curso em Vídeo, which set a warm, direct,
  encouraging, informal tone, and noted that learners span a wide range of educational
  backgrounds so one should write as if the reader is intelligent but has never typed a line
  of code. That is the research behind the register, and every instruction in it is already
  stated in `global/voice.md` (§ Audience, § Voice and tone). Only "Readers are in Brazil."
  survives in the guide.
- **Formality rationale.** "It is the standard second-person address in Brazilian Portuguese
  for online learning and informal writing" justified `você`; the rule itself is unchanged.
- **Duplicated rules cut, not weakened.** The `## Grammar` section restated "`você` +
  third-person conjugation", which § Formality already required; the two are merged into the
  Formality bullet, keeping the note that mixing them is the most common translator error.
  Its "Prepositions contract with articles" bullet and its "Contractions are mandatory"
  bullet were the same rule twice, and both are now the single family-level bullet in
  `../pt/guide.md` § Grammar (see `../pt/glossary-notes.md`). The § "Common EN→pt-BR
  pitfalls" tail restated the family guide's null-subject rule and its
  break-up-long-subordination rule; only its two genuinely new items ("just" → só/apenas,
  "make sure" → certifique-se de que) survive, folded into § "Style notes (pt-BR specifics)"
  as calque traps.
- **A false attribution fixed.** § "Information structure and emphasis" opened by comparing
  Portuguese word order to Hungarian's and credited "given information first, new information
  last" to `global/voice.md`, which does not state it. The comparison is gone and the
  principle is now stated plainly as this guide's own rule, which is what it always was. No
  instruction changed.

## 2026-08-04: Stage 2 batch-3 delta (12 draft rows), and four provisional terms promoted

**Decided by:** nobody yet, apart from `bonequinho` (see below). **Status: unconfirmed
drafts**, added from the ten-item Stage 2 batch (`else-if`, `for-loops`, `else`,
`while-loops`, `dictionaries`, `maze-turn-around`, `luhn`, `digital-root`, `word-count`,
`bouncer-dress-code`). Native-speaker confirmation is wanted on all of them.
**Terms affected:** `bouncer`, `to turn (someone) away`, `character / figure`, `checksum`,
`digital root`, `standard library`, `dress code`, `smart (of clothing)`, `Sensing`, `key`,
`value`, `data structure`, `else clause`, `branch (of a conditional)`, plus the four
promotions listed at the end.

**All of these went into the locale file, not `../pt/glossary.md`.** Per the family rule a
term defaults to the locale file and only moves up once it is confirmed identical in both
locales, and several of these (`checksum`, `estrutura de dados`, `biblioteca padrão`) are
plausibly identical in pt-PT but have not been checked there. Whoever confirms them can move
them up later; guessing now would have written unagreed rows that bind pt-PT.

`key` → _chave_ is a deliberate exception that must **never** move to the family file. In
pt-BR `{}` is also _chaves_, so dictionary keys and closing braces share a word, and the row
carries the disambiguation instruction for that. pt-PT has no collision (`{}` is _chavetas_
there), so its reasoning for the same rendering is a different reasoning, and one shared row
could not state both. The same collision was already flagged independently by the
JavaScript interpreter-catalog pass.

`bouncer` → _segurança_ was proposed by two workers independently, over _porteiro_, which
reads as a residential doorman rather than club door staff. It is masculine despite ending
in `-a`. A related pt-BR delta from an earlier pass had proposed the same word at medium
confidence, so this is the second time it has come up unprompted.

`to turn away` → _barrar_ is the single-verb rendering; `else`'s translation reached for
_recusar a entrada_ in the same sentence position. Both read naturally, so the row asks for
consistency within a page rather than ruling one out.

`branch (of a conditional)` → _bloco_ is the weakest of the set and is marked low
confidence in the row. _Bloco_ names the code a branch runs, not the fork itself, and where
the English is about the fork the translations reached for the road-fork metaphor
(_bifurcação_) instead. This one genuinely needs a native speaker.

`character / figure` → _bonequinho_ is **not** a draft: sorrizo confirmed it as natural at
https://forum.jiki.io/t/812/5 while flagging a different word on the same page. It was in de
facto use across the maze exercises without ever being written down, which is exactly the
state that lets a later pass quietly replace it, so it now has a row.

**Four provisional terms promoted out of § "Provisional terms".** That section's own rule is
to confirm on first actual use, and this batch is that first use: `for loop` → _laço `for`_
(`for-loops`), `while loop` → _laço `while`_ (`while-loops`), `dictionary` → _dicionário_
(`dictionaries`), and `condition is true/false` → _a condição é verdadeira / falsa_ (`else`,
`else-if`, `while-loops`). Each read naturally in place and none was reworded to fit, so the
rendering each row already carried is what moved; nothing new was invented. The
true/false row gained one usage note that the translations demonstrated and the old row did
not state: after _se_ or _quando_ the verb takes the future subjunctive (_quando a condição
for verdadeira_). `loop body` → _corpo do laço_ stays provisional: it did not appear in
either loops page, so it still has no first use. `auth` stays provisional for the same
reason.

**Not changed, flagged instead:** the family row `true / false` → _verdadeiro / falso_ says
only "Lowercase in prose" and does not state that the code literals stay English. The
pt-BR `condition is true / false` row now says so for this locale. Adding it to the family
file was deliberately not done here: a family edit binds pt-PT and obliges republishing and
announcing on every sibling locale, and a pt-PT session was working in the same checkout at
the time. It is worth doing as its own family-level change.
