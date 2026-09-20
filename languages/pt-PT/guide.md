# European Portuguese (pt-PT) language guide

European Portuguese belongs to the Portuguese family. Read `../pt/guide.md` first for
everything shared with Brazilian Portuguese (`pt-BR`). This file states only what is
distinct about European Portuguese. A `##` heading here with the same name as one in
`../pt/guide.md` replaces it for this locale; anything not mentioned here is inherited
unchanged. Read `global/voice.md`, `global/rules.md`, and the relevant `content-types/*.md`
alongside both. Term choices are in `glossary.md` plus `../pt/glossary.md`; together they
are binding.

Readers are in Portugal. European Portuguese is a **separate locale from Brazilian
Portuguese**, not a variant of it: never carry a Brazilian choice over by default. Be
restrained with anglicisms; the warmth of this voice comes from register and
encouragement, not from loanwords.

## Formality (critical)

Realizes the "modern, informal address" principle from `global/voice.md`:

- **Use `tu` throughout.** In Portugal, `tu` is the warm, ordinary informal address.
- **Never default to `você`.** Unlike in Brazilian Portuguese, `você` is not a neutral
  informal default in Portugal; it reads as distancing or brusque. Never use `o senhor` /
  `a senhora` either.
- **`tu` takes second-person singular verb forms and imperatives.** "Tu vais ver" (not
  "você vai ver"), "escreves" (not "escreve") in the **indicative**: "quando escreves
  código".
- **Watch the imperative, which looks like the `você` indicative.** The `tu`-imperative of
  most verbs is spelled the same as the `você` present indicative ("escreve", "define",
  "repara"), so the bare form is correct in a command and wrong in a statement. "Escreve o
  nome da função" (imperative, correct); "quando escreve o nome da função" (statement, wrong,
  it must be "escreves").
- Encouraging imperatives use the **tu-imperative**, not the subjunctive:
  - "Vamos ver o próximo código" (Let's look at the next code)
  - "Experimenta" / "Tenta" (Try it out)
  - "Vamos começar" (Let's begin)
  - "Repara que..." (Notice that...)

## Grammar (pt-PT specifics)

Additional to the shared rules in `../pt/guide.md` § Grammar:

- **`estar a` + infinitive, not the gerund.** Always "está a aprender", "estás a escrever";
  never the Brazilian gerund ("está aprendendo"), including where it creeps in from English
  or Brazilian source material.
- **Clitic pronoun placement differs from Brazilian Portuguese.** European Portuguese
  favours proclisis (pronoun before the verb) after triggers like negation, adverbs, and
  subordinators, and enclisis (pronoun after the verb, with a hyphen) in a plain affirmative
  main clause. "Não te esqueças" (proclisis, after "não"); "Diz-me o valor" (enclisis, plain
  imperative). Do not default to the Brazilian pattern of pronoun-before-verb everywhere.

## Spelling standard

Use the current official orthography (Acordo Ortográfico de 1990), as used in Portuguese
schools and official publications today: e.g. `caráter` (singular), `carateres` (plural,
the `c` is silent in Portugal and dropped), `receção`, `ação`. Where European and Brazilian
spelling still diverge after the accord (silent consonants pronounced in one variant and not
the other), always use the European Portuguese form; the glossary flags these where they
recur.

## Information structure and emphasis

Given information first, new information last.

- **End-weight:** new or important information goes toward the end of the clause. "A função
  devolve um valor" (the return is the point). Flip when the function itself is the new
  element: "É a função que devolve o valor."
- **Cleft for contrast:** "It's the capital B that matters" → "É o B maiúsculo que faz a
  diferença." Not a word-for-word transfer.
- **Negation:** `não` sits immediately before the verb or the word being denied. "Não
  devolve nada." "Não é o tamanho que importa."

### Before / after examples

| English | Stiff (literal) | Natural (pt-PT) |
|---------|-----------------|-----------------|
| "The function returns a value." | "A função faz um retorno de um valor." | "A função devolve um valor." |
| "Let's look at what happens when..." | "Deixemo-nos ver o que acontece quando..." | "Vamos ver o que acontece quando..." |
| "Notice that the brackets are important." | "Nota que os parênteses são importantes." | "Repara que os parênteses fazem a diferença." |
| "Try running this code." | "Você pode executar este código." | "Experimenta correr este código." |

## Style notes (pt-PT specifics)

Additional to the shared style notes in `../pt/guide.md` § Style notes:

- **Rhetorical questions, concretely:** "So what does a loop do?" → "E o que faz um ciclo,
  afinal?"
- **Calque traps to avoid:** "just" as emphasis → "só" / "apenas", never "justo"; "make
  sure" → "certifica-te de que" / "verifica se", not "tem a certeza que".

## Worked examples

**Titles and headlines** (sentence case, natural word order, no drama, no redundancy):
- Avoid: "Nasceu o Exercism" (too dramatic) → Prefer: "Conhece o Exercism" / "Chegou o
  Exercism"
- Avoid: "Uma nova forma de aprender a programar" (generic) → Prefer: "Aprende a programar
  de outra forma" / "Programação para quem está a começar"

**Calls to action** (specific, action-oriented):
- Sign-up: "Começa agora!" / "Cria a tua conta!" (not the vague "Junta-te a nós!")
- Trying: "Experimenta!" / "Testa gratuitamente!"

**Natural phrasing** (good vs stiff/literal):
- "First, define a function" → "Primeiro, define uma função" (not the formal "Em primeiro
  lugar, defina uma função")
- "Let's begin" → "Vamos começar" (not "Comecemos", too literary)
- "You've worked hard" → "Esforçaste-te bastante" / "Dedicaste bastante tempo a isto" (not
  "trabalhaste duro", a calque)
