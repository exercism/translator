# Brazilian Portuguese (pt-BR) glossary

The agreed term list for what is distinct about Brazilian Portuguese. Read
`../pt/glossary.md` first for the terms shared with European Portuguese (`pt-PT`) and for
how this file relates to it; this file holds only the terms that diverge between the two
locales, plus terms that exist only for Brazilian Portuguese.

Why each term here was chosen is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Portuguese | Use (pt-BR/en) | Notes |
|---------|------------|-----------------|-------|
| programming / coding | **programação** | pt-BR | Use `programação` consistently. `codificação` is not natural in Brazilian informal register; avoid. |
| tech / tech industry | mercado de tech | pt-BR | "tech" kept as-is; "mercado de tech" for "tech industry" in the broad/generic sense. |
| tech industry (software/programming jobs specifically) | mercado de TI | pt-BR | Use when the context is specifically the software/programming job market, not "mercado de tech". "TI" = "tecnologia da informação". |
| developer | desenvolvedor | pt-BR | Use gender-neutral rephrasing where practical; see guide § Gender-neutral phrasing. |
| welcome (greeting / interjection) | Bem-vindo | pt-BR | Never `Boas-vindas` as a standalone greeting: it is a noun and only works inside a construction like "damos as boas-vindas a você". Masculine fallback per guide § Gender-neutral phrasing, or recast to avoid the greeting entirely ("Vamos ao seu primeiro exercício!"). |

## Localize (use the Portuguese term)

Terms below diverge from `../pt/glossary.md` or exist only for Brazilian Portuguese. Same
column structure as the family file.

### Values & data types

| English | Portuguese | Use (pt-BR/en) | Notes |
|---------|------------|-----------------|-------|
| character | caractere | pt-BR | Singular is `caractere` (not `caracter`). Diverges from pt-PT's `caráter`/`carateres`. |
| float / decimal | número de ponto flutuante | pt-BR | Or _decimal_ when the floating-point nature does not matter. Diverges from pt-PT's "vírgula flutuante". |
| dictionary | dicionário | pt-BR | _um dicionário_; pairs with `key`/`value` below. |
| key (in a dictionary) | chave | pt-BR | _a chave_, plural _as chaves_. Locale-only: pt-PT renders `{}` differently (_chavetas_), so this row stays here rather than moving to `../pt/glossary.md` until pt-PT is checked. |
| value (in a dictionary) | valor | pt-BR | _o valor associado à chave_. **Unconfirmed draft.** Pairs with `key` above; keep the same pair of words throughout a page. |
| data structure | estrutura de dados | pt-BR | **Unconfirmed draft.** Feminine: _uma estrutura de dados_, _essas estruturas de dados_. |

### Functions & control flow

| English | Portuguese | Use (pt-BR/en) | Notes |
|---------|------------|-----------------|-------|
| to return (a value) | retornar | pt-BR | "A função retorna um valor." Diverges from pt-PT's "devolver". |
| return value | valor de retorno | pt-BR | Follows the verb `retornar` above. |
| input (one a function declares) | entrada | pt-BR | Use only where the English word is **input** and it names one of the inputs a function declares or expects ("give it four inputs: `left`, `top`, `radius`, `color`"; "an extra input where you specified the color"). Feminine: _uma entrada extra_, _as quatro entradas_. Never _fenda_, which translates the English **slot** only: pick by the English word in front of you, not by what the sentence is about, and where one paragraph uses both English words, use both renderings. |
| input (a value passed in at a call) | valor de entrada | pt-BR | Use only where the English word is **input** and it names the value written at one position of a call ("for the fifth input, we write `"blue"`"). Masculine, so agreement follows: _o quinto valor de entrada_. Bare _entrada_ is also natural here once context is set; _valor de entrada_ is the default where the sentence needs to name the value itself. Never _fenda_, on the same distinction as the row above. |
| condition is true / false | a condição é verdadeira / falsa | pt-BR | Prose form. After _se_ or _quando_ the verb goes to the future subjunctive: _quando a condição for verdadeira_. The code literals `true`/`false` stay English (see `../pt/glossary.md`). |
| else clause | cláusula `else` | pt-BR | _podemos colocar uma cláusula `else` depois da chave de fechamento_. Keep `else` in backticks (real keyword). **Unconfirmed draft.** |
| branch (of a conditional) | bloco | pt-BR | The chunk of code one arm of a conditional runs: _esse bloco roda quando a condição é verdadeira_. **Unconfirmed draft, low confidence**: _bloco_ describes the code, not the fork; where the source is about the fork itself, the road-fork metaphor (_bifurcação_) reads better. Native-speaker input wanted. |
| brackets (the two after a function name) | parênteses | pt-BR | The `()` pair written after a function name to call it: _escreva o nome dela e depois os parênteses_. Always `parênteses`, never `colchetes` (which is `[]`). See § Brackets below for the glyph names. |

### Loops, state & program flow

| English | Portuguese | Use (pt-BR/en) | Notes |
|---------|------------|-----------------|-------|
| interpreter | intérprete | pt-BR | Confirmed by a native speaker (oxe-b) on the pt-BR glossary thread as the word for the person doing the interpreting, against `interpretador`, which names interpreter *software*. Needs a native speaker's eye: this rendering was chosen to name a character whose job was to interpret the reader's code, which is not how Exercism uses the word. On Exercism an interpreter is the program that runs the code. Left as it stands rather than changed by an agent. |
| mental model | modelo mental | pt-BR | _é um modelo mental poderoso_. |
| (programming) language | linguagem (de programação) | pt-BR | `linguagem` alone once context is set; `linguagem de programação` on introduction. Never `língua` (natural languages only). |
| iteration | iteração | pt-BR | Verb: _iterar_, taking **sobre**: _iterar sobre um array_, _iteramos sobre strings_. Never _iterar por_. "passar por cada elemento" also natural. |
| to run / execute (code) | rodar / executar | pt-BR | `rodar` in warm/casual register; `executar` in formal or procedural steps. Diverges from pt-PT, where "rodar" is not natural usage. |
| loop | laço | pt-BR | `for`/`while` keywords stay English. Diverges from pt-PT's "ciclo". |
| for loop | laço `for` | pt-BR | Keep `for` in backticks (real keyword) + _laço_. |
| while loop | laço `while` | pt-BR | As above. |
| scope | escopo | pt-BR | Diverges from pt-PT's "âmbito". |
| comment (code comment) | comentário | pt-BR | The `//` line a reader writes as a private note; the program ignores it and moves to the next line. **Unconfirmed:** added for the function-inputs concept page, not yet used in a real translated file; likely identical in pt-PT, so a candidate to move to `../pt/glossary.md` once confirmed. |

### Tooling & engineering

| English | Portuguese | Use (pt-BR/en) | Notes |
|---------|------------|-----------------|-------|
| checksum | soma de verificação | pt-BR | **Unconfirmed draft.** Feminine: _a soma de verificação_. Used for the Luhn-style check-digit idea; keep the full phrase rather than the English _checksum_ in beginner-facing prose. |
| standard library (stdlib) | biblioteca padrão | pt-BR | **Unconfirmed draft.** Never abbreviated in prose; _stdlib_ is not used. |
| deploy (verb: to deploy) | publicar | pt-BR | "Publique o código" for go-live (subjunctive imperative, matches `você` formality). "Fazer deploy" is natural in dev prose; prefer `publicar` for beginner-facing text. |

### Platform & curriculum vocabulary

| English | Portuguese | Use (pt-BR/en) | Notes |
|---------|------------|-----------------|-------|
| course | curso | pt-BR | The whole course the reader is taking: _neste curso_. Keep distinct from `lição` (lesson). |
| cell (a square on a grid) | casa | pt-BR | "Move forward one cell" → "avance uma casa" (like a square on a board game), not "uma célula", which reads as a biology/spreadsheet term and feels unnatural here. |
| to turn (someone) away | barrar | pt-BR | _barrar a pessoa na porta_. Use _barrar_ in the nightclub-door context; _recusar a entrada_ only where the sentence needs an object phrase rather than a single verb. |
| dress code | código de vestimenta | pt-BR | **Unconfirmed draft.** The rule about what may be worn, as posted at a club door. |
| smart (of clothing, in a dress code) | roupa elegante | pt-BR | **Unconfirmed draft.** English "smart" here means dressed-up, never _inteligente_. Adjectivally: _elegante_. |
| Sensing (exercise function category label) | Percepção | pt-BR | **Unconfirmed draft.** The category heading grouping the functions that let the character sense its surroundings, in exercise message catalogs. |
| digital root | raiz digital | pt-BR | **Unconfirmed draft.** The repeated-digit-sum result; keep the mathematical calque, do not leave it in English. |

## Keep in English

These stay in English in prose. Where the English itself explains one of these terms, use the
Portuguese in the gloss column below (per the format in `global/voice.md`); with no
an explanation in the English, use the English bare, with no gloss. Terms below diverge from
`../pt/glossary.md` or exist only for Brazilian Portuguese.

| Term | Portuguese word, where the English explains the term | Notes |
|------|----------------------------------|-------|
| framework | _framework_ | Where the English itself explains the term, explain it means a reusable structure. Diverges from pt-PT's "estrutura de trabalho" gloss. |
| CLI (the concept) | interface de linha de comando | Where the English itself explains the term, explain CLI as _interface de linha de comando_ (singular "comando"). Diverges from pt-PT's plural "comandos". |

## Provisional terms (🟡)

These terms have been decided but not yet used in a real translated file. Confirm the choice on
first actual use and move to the sections above once confirmed.

| English | Portuguese | Notes |
|---------|------------|-------|
| loop body | corpo do laço | |
| auth (authentication / authorization) | autenticação / autorização | Pick by meaning. Standard Brazilian Portuguese; not abbreviated to "auth" in beginner-facing prose. |

## Brackets

Default to plain **parênteses**; see `../pt/glossary.md` § Brackets for the shared `()`
glyph word. When a specific bracket type matters, name it and show the glyph immediately
after; for `()` itself, add _parênteses redondos_ + glyph only when disambiguating (pt-PT
uses "parênteses curvos" instead). This locale's `[]`, `{}`, `<>` renderings diverge from
pt-PT's and are given below.

| Glyph | Portuguese | Notes |
|-------|-----------|-------|
| `[]` | colchetes | Diverges from pt-PT's "parênteses retos". |
| `{}` | chaves | Diverges from pt-PT's "chavetas". |
| `<>` | sinais de maior e menor | Diverges from pt-PT's "sinais de menor e maior" (reversed order). |

Example: _para chamar uma função, escreva o nome dela seguido de parênteses de abertura e
fechamento (`()`)._
