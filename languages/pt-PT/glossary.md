# European Portuguese (pt-PT) glossary

The agreed term list for what is distinct about European Portuguese. Read
`../pt/glossary.md` first for the terms shared with Brazilian Portuguese (`pt-BR`); this
file holds only the terms that diverge between the two locales, plus terms that exist only
for European Portuguese. A term lives in **exactly one** glossary file, this one or the
family's, **never both**. A locale's effective glossary is `../pt/glossary.md`'s rows plus
this file's rows, read together. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

Each term's "Use (pt-PT/en)" column records which language is primary in prose: `pt-PT` when
Portuguese is primary, `en` when English is kept primary; see `global/voice.md` §
"Direction comes from the glossary".

## Core decisions

| English | Portuguese | Use (pt-PT/en) | Notes |
|---------|------------|-----------------|-------|
| programming / coding | **programação** | pt-PT | Use `programação` consistently. |
| tech / tech industry | setor tecnológico | pt-PT | Loanword "tech" alone reads too casual for European Portuguese written prose; use `setor tecnológico`. |
| developer | programador(a) | pt-PT | Not `desenvolvedor`, which is a Brazilian-leaning form. |

## Localize (use the Portuguese term)

Terms below diverge from `../pt/glossary.md` or exist only for European Portuguese.

### Values & data types

| English | Portuguese | Use (pt-PT/en) | Notes |
|---------|------------|-----------------|-------|
| character | caráter (pl. carateres) | pt-PT | Post-1990 spelling: European Portuguese silences the `c`, giving "carateres" (Brazilian keeps it: "caractere/caracteres"). |
| float / decimal | número de vírgula flutuante | pt-PT | Use "decimal" alone when the floating-point nature does not matter. |
| digit | algarismo | pt-PT | The individual symbol inside a number ("soma os seus algarismos", "um número de três algarismos"). Not _dígito_, which reads technical next to the school-register _algarismo_. |
| dictionary | dicionário | pt-PT | The data structure. Masculine: _um dicionário_, _o dicionário_. |
| key (of a dictionary) | chave | pt-PT | The label on the left of a dictionary pair ("encontra a chave `name`"). Plural _chaves_. Safe in this locale because `{}` is _chavetas_ here (see § Brackets), so nothing collides; never assume the same for pt-BR. |
| apostrophe | apóstrofo | pt-PT | Plural _apóstrofos_. Never _apóstrofe_, which is the rhetorical figure, not the punctuation mark. |
| case-insensitive | não distinguir maiúsculas de minúsculas | pt-PT | Render as a verb phrase, not an adjective: _as palavras não distinguem maiúsculas de minúsculas_, _conta as palavras independentemente de serem maiúsculas ou minúsculas_. Case-sensitive is the same phrase without _não_. |

### Functions & control flow

| English | Portuguese | Use (pt-PT/en) | Notes |
|---------|------------|-----------------|-------|
| to return (a value) | devolver | pt-PT | "A função devolve um valor." Deliberately diverges from Brazilian `retornar`; never mix the two. |
| return value | valor devolvido | pt-PT | Follows the verb `devolver` above. |
| input (one a function declares) | parâmetro de entrada | pt-PT | Use only where the English word is **input** and it names one of the inputs a function declares or expects ("give it four inputs: `left`, `top`, `radius`, `color`"). Plural _parâmetros de entrada_. Never bare _entrada_. Never _fenda_, which translates the English **slot** only (see `../pt/glossary.md` § Jiki physical metaphors): pick between the three by the English word in front of you, not by what the sentence is about, and where one paragraph uses both English words, use both renderings. |
| input (a value passed in at a call) | valor de entrada | pt-PT | Use only where the English word is **input** and it names the value written at one position of a call ("for the fifth input, we write `"blue"`"). Masculine, so agreement follows: _um valor de entrada extra_, _o quinto valor de entrada_. Never bare _entrada_. Never _fenda_, on the same three-way distinction as the row above. |
| else clause | cláusula else | pt-PT | The keyword `else` stays English inside the phrase: _uma cláusula else_. |
| brackets (the two after a function name) | parênteses | pt-PT | The prose rendering of "those two brackets" written after a function name: _os parênteses_, or _dois parênteses_ on first mention. The glyph naming convention (and when to disambiguate `()` as _parênteses curvos_) is in § Brackets below. |

### Loops, state & program flow

| English | Portuguese | Use (pt-PT/en) | Notes |
|---------|------------|-----------------|-------|
| interpreter | intérprete | pt-PT | Never use _interpretador_, which names a piece of software, not a person. Plural: _intérpretes_. |
| instruction (given to Jiki) | instrução | pt-PT | Everyday register, not the legal/administrative sense of _instrução_. Plural _instruções_: "escrever instruções num quadro". |
| mental model | modelo mental | pt-PT | |
| (programming) language | linguagem (de programação) | pt-PT | Always _linguagem_, never the English borrowing. _Língua_ is for human languages; a programming language is a _linguagem_. Shorten to _linguagem_ once the context is established ("numa linguagem que o computador entende"). |
| iteration | iteração | pt-PT | Verb: _iterar_; "percorrer cada elemento" also natural. |
| to run / execute (code) | executar / correr | pt-PT | `correr` in warm/casual register ("experimenta correr este código"); `executar` in formal or procedural steps. Deliberately diverges from Brazilian "rodar", which is not natural European Portuguese usage. |
| loop | ciclo | pt-PT | Deliberately diverges from Brazilian `laço`. `for`/`while` keywords stay English. |
| scope | âmbito | pt-PT | Deliberately diverges from Brazilian `escopo`. |
| pass (one sweep over the data) | passagem | pt-PT | One run of an algorithm over its data: _numa única passagem_, _uma segunda passagem_. Never _passe_. |

### Tooling & engineering

| English | Portuguese | Use (pt-PT/en) | Notes |
|---------|------------|-----------------|-------|
| deploy (verb: to deploy) | publicar | pt-PT | "Publica o código" for go-live, beginner-facing (tu-imperative, matches `tu` formality). Avoid "fazer deploy" here, though it appears in professional dev prose. |

### Platform & curriculum vocabulary

| English | Portuguese | Use (pt-PT/en) | Notes |
|---------|------------|-----------------|-------|
| course | curso | pt-PT | The whole Jiki course ("Neste curso, o teu intérprete é o Jiki"). Keep distinct from _aula_ (lesson) and _currículo_ (curriculum). |

## Keep in English

Terms below diverge from `../pt/glossary.md` or exist only for European Portuguese. These
stay in English in prose.

| Term | Portuguese gloss (on `<define>`) | Notes |
|------|----------------------------------|-------|
| framework | _estrutura de trabalho_ | Explain where the source `<define>`s it, then use `framework` freely. |
| CLI (the concept) | interface de linha de comandos | Explain CLI as _interface de linha de comandos_ (plural "comandos") where the source `<define>`s it. Diverges from pt-BR's singular "comando". |

## Brackets

Default to plain **parênteses**; see `../pt/glossary.md` § Brackets for the shared `()`
glyph word. When a specific bracket type matters, name it and show the glyph immediately
after; for `()` itself, add _parênteses curvos_ + glyph only when disambiguating (pt-BR
uses "parênteses redondos" instead). This locale's `[]`, `{}`, `<>` renderings diverge from
pt-BR's and are given below.

| Glyph | Portuguese | Notes |
|-------|-----------|-------|
| `[]` | parênteses retos | Diverges from pt-BR's "colchetes". |
| `{}` | chavetas | Diverges from pt-BR's "chaves". |
| `<>` | sinais de menor e maior | Diverges from pt-BR's "sinais de maior e menor" (reversed order). |

Example: _para chamar uma função, escreve o nome dela seguido de parênteses de abertura e
fecho (`()`)._
