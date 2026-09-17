# Instruction and introduction appends

A track-specific addition to an exercise's shared text. The website shows it directly after
the instructions (or introduction) the exercise inherits from `problem-specifications`, as
one page.

| i18n type id | English, in a track repo |
|---|---|
| `exercise-instructions-append` | `exercises/{practice,concept}/<slug>/.docs/instructions.append.md` |
| `exercise-introduction-append` | `exercises/{practice,concept}/<slug>/.docs/introduction.append.md` |

Everything in `content-types/exercise-docs.md` applies, including "Test-compared strings".
What is particular to an append:

- **You are given the append alone, and it is read as the continuation of a page you cannot
  see.** Do not write an opening that introduces the exercise, and do not repeat what the
  instructions would have said. Translate what is there and nothing more.
- It opens with a heading such as `# Instructions append`. Translate it. The website strips
  it on render; it is kept so the file stays structurally identical.
- Appends are where a track explains its own conventions: which method to define, which
  exception to raise, how to run one test. They are dense with identifiers, exception class
  names and error messages the tests compare against. Those stay in English.
- Appends are short, sometimes two sentences, and often less polished than the shared text:
  a bare URL in the middle of a sentence, a missing final newline. Reproduce the structure you
  are given. Do not tidy it, turn a bare URL into a link, or add a heading.
- Name the programming language as the glossary has it. An append says "In Ruby, ..." far more
  often than the shared instructions do.
