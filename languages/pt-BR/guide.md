# Brazilian Portuguese (pt-BR) language guide

Brazilian Portuguese belongs to the Portuguese family. Read `../pt/guide.md` first for
everything shared with European Portuguese (`pt-PT`). This file states only what is
distinct about Brazilian Portuguese. A `##` heading here with the same name as one in
`../pt/guide.md` replaces it for this locale; anything not mentioned here is inherited
unchanged. Term choices are in `glossary.md` plus `../pt/glossary.md`; together they are
binding.

Readers are in Brazil.

## Formality (critical)

Realizes the "modern, informal address" principle from `global/voice.md`:

- **Use `você` throughout.** Never use `o senhor` / `a senhora` (too formal) or regional
  `tu` conjugation (not a neutral written standard in Brazil).
- **`você` takes third-person verb forms.** "Você vai ver" (not "vais ver"), "você pode"
  (not "podes"). Mixing `você` with second-person conjugations is the most common
  translator error here.
- **Imperatives use the present subjunctive.** "Experimente", "Veja", "Repare", "Tente". Not
  the `tu`-imperative form ("Experimenta", "Vê").
- Encouraging imperatives:
  - "Vamos ver o próximo código" (Let's look at the next code)
  - "Experimente" / "Tente" (Try it out)
  - "Vamos começar" (Let's begin)
  - "Repare que..." (Notice that...)

## Gender-neutral phrasing

Portuguese adjectives can agree with the reader's gender, which is unknown. Rephrase to avoid
reader-directed gendered agreement wherever practical:

- Prefer gender-neutral forms: "tudo pronto?", "você vai conseguir", "ficou claro?"
- Avoid: "você está preparado". Rephrase to "você está pronto?" or recast the sentence.
- When a gendered form is truly unavoidable, use masculine as fallback. Never use `(a)`, `x`, or
  `@` forms; they read as bureaucratic and break the warm voice.
- Do not dodge gender agreement by putting a noun where an interjection belongs (see
  `welcome` in `glossary.md`); recast the sentence instead ("Vamos ao seu primeiro
  exercício!").

## Grammar (pt-BR specifics)

Additional to the shared rules in `../pt/guide.md` § Grammar:

- **Progressive/continuous aspect uses the gerund.** "está aprendendo", "está escrevendo"
  for an action in progress. Never the European `estar a` + infinitive form ("está a
  aprender").
- **Infinitive vs subjunctive imperative.** Both work for instructions. Use the subjunctive
  imperative ("Experimente") for invitations and encouragement, and the infinitive ("Para
  executar...") for sequential procedural steps in a list.

## Information structure and emphasis

Given information first, new information last.

- **End-weight:** new, important, or surprising information goes at the end of the clause. "A
  função retorna um valor" (the return is the point). Flip when the function itself is the new
  element: "Quem retorna o valor é a função."
- **Cleft for contrast:** "It's the capital B that matters" → "É o B maiúsculo que faz diferença."
  Not a word-for-word transfer.
- **Negation:** `não` sits immediately before the verb or the word being denied. "Não retorna
  nada." "Não é o tamanho que importa."

### Before / after examples

| English | Stiff (literal) | Natural (pt-BR) |
|---------|-----------------|-----------------|
| "The function returns a value." | "A função faz um retorno de um valor." | "A função retorna um valor." |
| "It doesn't matter how many times you try." | "Não importa quantas vezes você tente." | "Quantas vezes você tentar não importa." / "Pode tentar quantas vezes quiser." |
| "Let's look at what happens when..." | "Deixe-nos olhar o que acontece quando..." | "Vamos ver o que acontece quando..." |
| "Notice that the brackets are important." | "Note que os parênteses são importantes." | "Repare que os parênteses fazem diferença." |

## Style notes (pt-BR specifics)

Additional to the shared style notes in `../pt/guide.md` § Style notes:

- **Rhetorical questions, concretely:** "So what does a loop do?" → "E o que um laço faz, afinal?"
- **Calque traps to avoid:** "just" as emphasis → "só" / "apenas" / "simplesmente", never
  "justo"; "make sure" → "certifique-se de que" / "verifique se", not "tenha certeza que".

## Worked examples

**Titles and headlines** (sentence case, natural word order, no drama, no redundancy):
- Avoid: "Nasceu o Jiki" (too dramatic) → Prefer: "Conheça o Jiki" / "O Jiki chegou"
- Avoid: "Uma nova forma de aprender a programar" (generic) → Prefer: "Aprenda a programar de um
  jeito novo" / "Programação para quem está começando"

**Calls to action** (specific, action-oriented):
- Sign-up: "Comece agora!" / "Crie sua conta!" (not the vague "Junte-se a nós!")
- Trying: "Experimente!" / "Teste de graça!"

**Natural phrasing** (good vs stiff/literal):
- "First, define a function" → "Primeiro, defina uma função" (not "Primeiramente, defina uma
  função")
- "Try running this code" → "Experimente rodar este código" (not "Execute este código")
- "Let's begin" → "Vamos começar" (not "Comecemos", too literary)
- "You've worked hard" → "Você se esforçou muito" / "Você dedicou bastante tempo" (not
  "trabalhou duro", a calque)
