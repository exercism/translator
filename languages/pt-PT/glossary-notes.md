# European Portuguese (pt-PT) glossary notes

## 2026-08-22: the shared `string` gloss stops hardcoding the Brazilian spelling

**Decided by:** native speaker (rlsmota), the forum post 6, replying to the glossary
update in post 3097. **Terms affected:** the family row `string` in `../pt/glossary.md`;
this locale's `character` row is unchanged.

The family file's `string` row glossed the term as _cadeia de caracteres_ and repeated that
spelling in its Notes. `caracteres` is the Brazilian plural, and the family file binds
`pt-PT` as well as `pt-BR`, so the shared row was imposing one locale's spelling on both.
This was flagged as an open question in the 2026-08-02 entry below and put to the reviewer in
post 3097. The row now says "chain of characters" and points at each locale's own `character`
row for the spelling, so neither locale is hardcoded in the shared file.

**What the reviewer actually said about the spelling.** Post-agreement European Portuguese
accepts **both** _carateres_ and _caracteres_, the choice following how the speaker
pronounces the word, and rlsmota, who learned to write before the agreement, uses
_caracteres_ himself. He did not ask for a change. So this is not a ruling that _carateres_
is the only correct European form; the locale keeps _caráter (pl. carateres)_ as its single
convention for internal consistency, and pt-PT content was swept to match it. If a future
reviewer prefers _caracteres_, the `character` row is free to change: nothing here rules it
out as European Portuguese.

**Also confirmed in the same post, no change needed:** the `true / false` concept-versus-token
split reads right; `return chute` stays _calha de saída_ (the reviewer finds pt-BR's _boca da
máquina_ harder to understand in European Portuguese); `apóstrofo` is correct.

## 2026-08-05: Sixteen rows proposed from the website-copy translation pass (unconfirmed drafts)

**Decided by:** nobody. **Status: unconfirmed drafts**, proposed by the workers translating
website copy (`namespaces=codingExercise,seo,articles,blog,checkout`). **Terms affected:**
`password`, `sign in / log in`, `breakpoint`, `to throw (an error)`, `tooltip`, `achievement
(gamification)`, `dashboard`, `email`, `reset (password)`, `computer science`, `post (blog
post)`, `learner`, `feedback`, `roadmap`, `LLM-era`, `blog`.

No European Portuguese speaker has ruled on any of them. They are written down so the choices
made in this pass are visible and repeatable, not so they are treated as settled.

**`dashboard` → `painel` wants checking before it is agreed.** This locale's file already
rejects `painel` once, for a different term: the 2026-07-30 `board / whiteboard` decision
picked `quadro` and explicitly ruled out `painel` as reading like a control panel or a
signboard, not something you write on. That objection was about the whiteboard metaphor, not
about `dashboard`, and `painel` (control panel) is the ordinary Portuguese word for a
software dashboard, so the two uses are not necessarily in conflict. But the two words now
sit close enough in the same glossary that a native speaker should confirm `painel` reads
unambiguously as "dashboard" and never gets misread against the whiteboard metaphor.

**`learner` → `aluno`** is masculine-generic. Flag if a gender-neutral policy is wanted here;
this pass did not attempt one.

**`post` (blog post) vs `article`.** The pass distinguished `post → publicação` from
`article → artigo`, matching the English source's own distinction between the two content
types rather than collapsing them onto one Portuguese word.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| password | palavra-passe | Standard European Portuguese; Brazilian Portuguese says "senha". | high |
| sign in / log in | iniciar sessão | Standard European Portuguese; Brazilian Portuguese says "fazer login" / "entrar". | high |
| breakpoint | ponto de paragem | | medium |
| to throw (an error) | lançar (um erro) | | medium |
| tooltip | dica | | medium |
| achievement (gamification) | conquista | | medium |
| dashboard | painel | Check against the `board / whiteboard` → `quadro` decision, which rejected `painel` for a different metaphor; see note above. | medium |
| email | email | Kept as the ordinary word, not glossed. | high |
| reset (password) | repor | | medium |
| computer science | informática | | medium |
| post (blog post) | publicação | Distinguished from `article → artigo`. | medium |
| learner | aluno | Masculine-generic; flag if a gender-neutral policy is wanted. | medium |
| feedback | kept English | | medium |
| roadmap | kept English ("Roadmap") | | low |
| LLM-era | era da inteligência artificial | Loses the LLM specificity in favour of the broader "AI" framing. | low |
| blog | kept English | Alternative: "blogue". | medium |

## 2026-08-04: fifteen rows added from the Stage 2 batch-3 translation pass

**Decided by:** nobody. **Status: unconfirmed drafts**, proposed by the translation workers
that produced the ten batch-3 items (`else-if`, `for-loops`, `else`, `while-loops`,
`dictionaries`, `maze-turn-around`, `luhn`, `digital-root`, `word-count`,
`bouncer-dress-code`). **Terms affected:** `digit`, `dictionary`, `key (of a dictionary)`,
`apostrophe`, `case-insensitive`, `else clause`, `pass (one sweep over the data)`,
`bouncer`, `venue (the bouncer's club)`, `to turn away (a person)`, `smart (attire)`,
`dead end`, `checksum`, `Sensing (scenario category)`, `spiral notebook`.

No European Portuguese speaker has ruled on any of them. They are written down so that the
next pass reuses the wording already shipped in those ten items rather than drifting, and
each rendering here was read back out of the translated files, not invented for the
glossary. Every one of them is open for a native speaker to change.

**All fifteen go in this locale file, not `../pt/glossary.md`.** A term is only promoted to
the family file once it is confirmed identical in both locales, and none of these has been
checked against Brazilian usage at all. `key → chave` is the clearest case of why that
default matters: it is unambiguous here because this locale calls `{}` _chavetas_, but pt-BR
calls `{}` _chaves_, so the same row in the family file would collide with the bracket
naming on the Brazilian side.

**Confidence, as the workers reported it.** `chave`, `dicionário` and `algarismo` are
straightforward. The exercise-domain words (`porteiro`, `espaço`, `mandar embora`,
`elegante`, `beco sem saída`, `soma de verificação`, `Deteção`, `cláusula else`, `bloco de
notas de espiral`, `passagem`, and the `case-insensitive` phrasing) are ordinary Portuguese
that reads correctly but has alternatives worth a speaker's opinion. `apóstrofo` is the
weakest: it is the standard name for the punctuation mark, and the row exists mainly to rule
out _apóstrofe_, the rhetorical figure, which is the mistake worth guarding against.

**Two of the workers' labels were corrected against the actual text.** What one worker
proposed as `slot → espaço` is the English word **venue** in `bouncer-dress-code` ("working
at a venue with a strict dress code"), not **slot**; filing it as `slot` would have
contradicted the family's confirmed `input slot → fenda`, which Brazilian native speakers
settled, so the row is written as `venue`. And `case-insensitive` is recorded as the verb
phrase the files actually use (_não distinguem maiúsculas de minúsculas_) rather than as an
adjective, because European Portuguese has no natural adjective for it.

## 2026-08-03: `return chute` inherited down from the family file, unchanged and still unconfirmed

**Decided by:** nobody, for European Portuguese. **Status: unconfirmed draft**, exactly as it
was before. **Terms affected:** `return chute`.

`return chute → calha de saída` used to live in `../pt/glossary.md` as a shared row. Brazilian
native speakers rejected that rendering for their locale and picked `boca da máquina` instead
(see `../pt-BR/glossary-notes.md`), so the term stopped being family-shared and each locale
now carries its own row.

Nothing about European Portuguese was decided here. `calha de saída` is copied down verbatim,
including its original low-to-medium confidence warning, and no pt-PT translated file was
touched. It is still open for a European Portuguese speaker to confirm or replace, and the
Brazilian discussion is worth reading first: the objection there was that the phrase reads
oddly in isolation, which may or may not apply in Portugal, and `boca` may read differently.

## 2026-08-03: "input" splits into two rows, and neither of them is _fenda_

**Decided by:** native speaker (rlsmota), reviewing the European Portuguese Strings concept
page. **Terms affected:** `input (one a function declares)`, `input (a value passed in at a
call)`, and, by exclusion, the family row `input slot`.

The Strings page had rendered the English word **input** as _fenda_ ("uma fenda extra", "na
quinta fenda"). The reviewer's correction is that the natural European Portuguese for an
input is _valor de entrada_: "valor de entrada extra", "no quinto valor de entrada".

**This is not a correction to `input slot`.** The English source uses two different words in
the same passage, and it uses them deliberately: **input** where it means the thing you
supply, and **slot** where it means the physical opening in the machine that a coin or a
piece of paper goes into ("put some coins in the first four slots"). _Fenda_ is the agreed
rendering of the second, confirmed by Brazilian native speakers on the pt-BR glossary thread
and binding on the whole family, and the reviewer flagged neither of the sentences that use
it correctly. So the family row is untouched: what was wrong was reaching for the metaphor
word where the English had not used the metaphor.

**Two `input` rows, not one.** An earlier round with the same reviewer settled "inputs" as
_parâmetros de entrada_ on the Variables page, where the sentence names what the `circle`
function declares ("give it four inputs. Its `left`, `top`, `radius`, and `color`"). That is
a different object from the one settled here, which is the value written at one position of
a particular call. European Portuguese distinguishes them naturally, _parâmetro_ being the
declared input and _valor_ being what is passed for it, so both renderings are right for
their own sense and neither generalises to the other. Unifying them would have had to
overrule one of the reviewer's own two corrections, so the glossary carries both rows, each
scoped to the English wording that triggers it, and each ruling out _fenda_ explicitly. A
future pass that finds them redundant is looking at the sense, which is exactly the mistake
that produced _fenda_; the rows are keyed on the English word for that reason.

Both rows are in the **locale** file, not the family file: the distinction is settled for
European Portuguese only, and nobody has confirmed that Brazilian Portuguese draws it the
same way.

**This supersedes** the unconfirmed 2026-08-02 proposal below of `input (the value passed
in)` as _o valor recebido_, which nobody confirmed and which was avoiding _entrada_ on the
grounds that it collided with _fenda_. The collision is real, and this is the resolution of
it.

**Left unfixed, flagged rather than changed:** the JavaScript interpreter's pt-PT message
catalog renders the `inputCount` plural family as bare _entrada_ / _entradas_, which these
rows now rule out (its `slotCount` family correctly uses _fenda_, matching the English
"input slot"). It is a different content type with its own validated write path, so it wants
a `/translate-interpreters` pass, not a hand edit.

## 2026-08-02: Proposed terms from the Stage 2 batch 2 catch-up pass (unconfirmed drafts)

**Decided by:** agent (proposals only, nothing written to `glossary.md`). The catch-up pass
translating `two-fer`, `strings`, `digital-clock`, `arrays`, `weather-symbols`.

**Family-glossary spelling conflict, needs settling.** `languages/pt/glossary.md:68`
(family) spells the `string` gloss `cadeia de caracteres` — the Brazilian spelling. But
`languages/pt-PT/glossary.md:31` (`character`) mandates the post-1990 European spelling
`carateres`, explicitly noting `caracteres` is the Brazilian form. The family file is
carrying a Brazilian spelling that binds pt-PT too. This pass followed the locale rule
(`carateres`), but the family row is wrong for pt-PT as written. Fix options: add a
per-locale spelling note to the family row, or move the gloss into each locale file.

**Also unrecorded:** `string`'s grammatical gender — this pass used feminine (`uma string`);
a future pass could defensibly pick masculine. Worth one note on the existing row.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| data type | tipo de dados | Recurs across every concept page; likely family-level (pt-BR should match). | high |
| compound data type | tipo de dados composto | Adjective could vary (_composto_ vs _combinado_). | medium |
| concatenation | concatenação | Pairs with `+` across many exercises; probably the one canonical word, may not earn a row. | high |
| default (value) | valor por omissão | European form (pt-BR would say _valor padrão_); belongs in the **locale** file, not the family file. Alternatives: _predefinido_, _por defeito_. | medium |
| to display (on screen/clock) | mostrar | Chosen over _apresentar_/_exibir_; recurs across visual exercises. | medium |
| input (the value passed in) | o valor recebido | Avoids bare _input_ and _entrada_ (which collides with the _fenda_ input-slot metaphor). | medium |
| quotation marks | aspas (duplas) | Portugal traditionally uses angle quotes («»), so _aspas_ alone is mildly ambiguous where the page teaches straight double quotes as syntax. | medium |
| meridiem (am/pm indicator) | kept English | It is the literal parameter name in `displayTime`; translating it would break the tie to the code. | medium |
| template string | kept English | Alternatives exist (_string de template_, _literal de modelo_), so passes could diverge. | low |

Flags, not glossary rows: `arrays` renders "the posh word for true and false" as _o nome
pomposo_ — a native reviewer may prefer _chique_ or _fino_. `weather-symbols`'
`functions.draw.category` renders as _Desenho_; checked the shared `draw` catalog for a
competing category label, found none, but worth a glance if that file gains one. Possible
`global/terms.md` gaps: "data type" / "compound data type", possibly "quotation marks".

**Casing bug (not a glossary item, flag for Aron/Jeremy):** `exercise-categories/draw/
locales/` is on disk as `pt-PT` (capital PT) while this batch and everything else write
`pt-PT`. macOS's case-insensitive filesystem hides this; a case-sensitive Linux CI box would
treat them as two different locales and the shared `draw` messages would fall back to raw
keys. Not renamed by this pass.

## 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, and, as a principle, every row.

Two decisions came out of that pass that bind European Portuguese:

- **`interpreter`.** **European Portuguese changed**:
  earlier translation work had deliberately avoided _intérprete_ because it "reads as a
  human interpreter", and that reasoning inverted once the interpreter was understood as a character
  whose job is interpreting: a human interpreter is exactly what the word needs to name.
  The row now reads **intérprete**, and rules out _interpretador_, which names interpreter
  software and cannot describe a character.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

## 2026-07-30: European Portuguese glossary filled out and a guide contradiction fixed

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**Rows added** for the terms the using-functions concept page needed: `interpreter`,
`instruction`, `mental model`, `(programming) language`, `brackets (the two
after a function name)`, `course`, and the metaphor rows `board / whiteboard`, `warehouse`,
`crank`. None of these change an existing decision; they fill gaps the page hit.

**One guide contradiction fixed.** The formality section stated that the `tu` form takes
"escreves" and not "escreve" with no qualification, while the guide's own worked examples
correctly used the bare `escreve` as a tu-imperative ("Escreve o nome da função"). Since the
tu-imperative of most verbs is spelled identically to the `você` present indicative, an
unqualified "always escreves" rule would have told a translator to write the wrong form in
every imperative sentence: a live mistranslation risk, not just a wording nit. The
formality section now scopes "escreves (not escreve)" to the indicative, and adds a
separate bullet ("Watch the imperative, which looks like the `você` indicative") covering
the imperative case explicitly.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`interpreter`, `board / whiteboard`) is not repeated here.

### Core decisions

| Term | Why |
|------|-----|
| tech / tech industry | More restrained register than pt-BR's "mercado de tech". |
| developer | The natural European Portuguese equivalent; `desenvolvedor` leans Brazilian. |

### Values & data types

| Term | Why |
|------|-----|
| float / decimal | European Portuguese says "vírgula flutuante" (decimal comma); Brazilian says "ponto flutuante" (decimal point). |

### Functions & control flow

| Term | Why |
|------|-----|
| to return (a value) | European Portuguese idiom, confirmed against Univ. Évora course material ("Devolve o valor..."). |

### Loops, state & program flow

| Term | Why |
|------|-----|
| mental model | The standard Portuguese phrase; it reads naturally in beginner prose. |
| loop | Source: Univ. Évora, FEUP course descriptions. |

### Keep in English

| Term | Why |
|------|-----|
| framework | The native term is understood but rarely forced in practice, so European Portuguese keeps the English word in running prose after a single gloss; diverges from pt-BR, which glosses simply as `framework`. |

## 2026-08-01: Guide pruned; rationale moved here

**Decided by:** agent (guide-pruning pass). **Status: no rule changed.**

`guide.md` is loaded into the prompt for every European Portuguese item, so the reasoning
behind its rules was moved here. Every instruction survives in the guide; what follows is
only the justification that was sitting next to it.

- **Audience.** The removed text: Portuguese tech education leans more formal and more
  restrained with anglicisms than Brazil's. The rule that follows from it (be restrained with
  anglicisms; the warmth comes from register and encouragement, not from loanwords) stays in
  the guide, stated imperatively.
- **`tu` over `você`.** The removed text: `tu` is the register used by real Portuguese online
  tutorials and learning platforms, and `você` reads as distancing, overly formal, or even
  brusque. The rules ("Use `tu` throughout", "Never default to `você`") are unchanged.
- **Separate locale, not a variant.** The guide said that where it diverges from
  `languages/pt-BR/guide.md` the divergence is deliberate and researched. A pt-PT pass never
  loads the pt-BR guide, so the cross-reference could not be acted on; the actionable half,
  "never carry a Brazilian choice over by default", stays.
- **Duplicated rules cut, not weakened.** The § "Contractions are mandatory" bullet was
  word-for-word the same rule as pt-BR's and now sits once in `../pt/guide.md` § Grammar,
  which this locale inherits (see `../pt/glossary-notes.md`). The § "Common EN→pt-PT
  pitfalls" tail restated the family guide's null-subject rule, this guide's own `estar a` +
  infinitive rule, and its own "never default to `você`" rule; the gerund bullet's one extra
  clause (it creeps in from English or Brazilian source material) is folded into the `estar
  a` rule, and the two genuinely new items ("just" → só/apenas, "make sure" → certifica-te de
  que) are folded into § "Style notes (pt-PT specifics)" as calque traps. "Try running this
  code" appeared both in the before/after table and in § "Natural phrasing"; the table row
  keeps it.
- **A false attribution fixed.** § "Information structure and emphasis" credited "given
  information first, new information last" to `global/voice.md`, which does not state it. It
  is now stated plainly as this guide's own rule, unchanged in substance.

## 2026-08-21: Three open terminology questions from the locale-parity batch (PR #49)

**Decided by:** nobody yet — open. Flagged here, not acted on, so a native speaker or
Jeremy has full context when one of these comes up.

The PR that brought pt-PT to full-catalog parity with hu (`0f93d83`, deepseek route) surfaced
three terminology inconsistencies while translating, none blocking, none fixed:

- **"Arrays"**: left untranslated, identical to the English, in both `levels` (the level
  title) and the `arrays` concept's own title. Worth a native-speaker call on whether pt-PT
  keeps it as a loanword deliberately (and if so, a glossary row saying so) or wants a
  Portuguese rendering.
- **"Deep Dive"**: rendered three different ways across the app-messages catalog —
  `Análise aprofundada` (5 keys), left as bare `Deep Dive` (3 keys), and `Mergulhos
  profundos` (1 key, plural "deep dives" read literally, clearly wrong on its own). Needs
  one term picked and swept across all 9 keys.
- Once those two are settled, both are candidates for a glossary row so future passes don't
  reintroduce the inconsistency.

Source: PR #49 description (`../i18n`, merged commit `0f93d83`).
