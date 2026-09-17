# Romanian (ro) glossary

The agreed term list for Romanian. Why each term was chosen, and who chose it, is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Romanian | Use (ro/en) | Notes |
|---------|----------|-------------|-------|
| programming / coding | **programare** | ro | Use consistently. Never `codare`, which reads as encoding/encryption rather than writing code. |
| developer | **programator** | ro | `dezvoltator` is corporate-HR register; keep it out of prose. |
| tech / tech industry | **industria IT** | ro | Use `tehnologic` for the general adjective sense ("tech company" = „companie de tehnologie" / „companie IT"). |
| pitfall | **capcană** | ro | Stands alone; no gloss needed. |
| mental model | **model mental** | ro | The picture-in-your-head framing. |
| computer | **calculator** | ro | The ordinary everyday Romanian word. `computer` exists but is the loanword; use it nowhere in prose. |
| pattern (a recurring shape you reuse) | **tipar** | ro | Deliberately not `model`, which collides with `model mental` above, and not `șablon`, which reads first as a stencil or boilerplate. |

## Localize (use the Romanian term)

These are terms where the Romanian is used in prose, so the "Use (ro/en)" column is `ro` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Romanian | Use (ro/en) | Notes |
|---------|----------|-------------|-------|
| true / false | adevărat / fals | ro | Not capitalised in prose. |
| array | matrice | ro | Feminine: „o matrice", „două matrice". Never `tablou`, which does not read as an array to a Romanian speaker. See also "chain" under Jiki physical metaphors for the teaching metaphor used alongside it. |
| list | listă | ro | Feminine: „o listă", „două liste". Use where the source says "list"; use `matrice` where it says "array". |
| index | indice | ro | Plural `indici`. Not `index`, which reads as the index of a book or a database. |
| character (text) | caracter | ro | A single text character. Keep distinct from `personaj` (the on-screen game figure) under Jiki physical metaphors. |
| letter (of a string) | literă | ro | Distinct from `caracter`. |
| float / decimal | număr zecimal | ro | Use `număr cu virgulă mobilă` only where the floating-point nature itself is the point. |
| compound data type | tip de date compus | ro | Distinct from plain `tip de date`. |
| random number | număr aleatoriu | ro | `aleatoriu`, not `aleator`. |
| ones and zeros | 0 și 1 | ro | Written as digits. Romanian has no natural plural for „unu", so „unuri și zerouri" reads wrong; digits are what Romanian technical prose uses. |

### Functions & control flow

| English | Romanian | Use (ro/en) | Notes |
|---------|----------|-------------|-------|
| if statement | condiție | ro | „condiția `if`" when the keyword itself is named; keep `if` in backticks as the real keyword, as with „bucla `for`". Not `instrucțiune`, which is reserved for "statement (executable)" below. |
| statement (executable) | instrucțiune | ro | The imperative sense: a line of code that does something and gets executed. Shares the word with "instruction (given to Jiki)" below. |
| statement (logical claim) | afirmație | ro | The proposition sense: a claim that is true or false. Keep distinct from `instrucțiune`; pick by meaning, not by the English word. |
| instruction (given to Jiki) | instrucțiune | ro | What the learner puts on the board for Jiki to follow. Everyday Romanian, not a legal-register word. Deliberately the same word as "statement (executable)". |
| to return (a value) | a returna | ro | „returnează 30". Not `a întoarce`, which reads as physically turning something around. |
| return value | valoare returnată | ro | Not `valoare de retur`, which belongs to finance. |
| input (to a function) | intrare | ro | Also what the input-slot metaphor is built on („fanta de intrare"). |
| output | ieșire | ro | As above, for the return chute („toboganul de ieșire"). |
| brackets (the two after a function name) | paranteze | ro | The `()` pair written after a function name to call it („îi scrii numele și apoi cele două paranteze"). Bare `paranteze` is enough where the context is a function call; name the type only when disambiguating, per the Brackets section below. |
| built-in | predefinit | ro | Not `încorporat`, which reads mechanical. |
| placeholder | substituent | ro | A slot in a string template that gets filled with a value. |

### Loops, state & program flow

| English | Romanian | Use (ro/en) | Notes |
|---------|----------|-------------|-------|
| loop | buclă | ro | „bucla `for`", „bucla `while`". Not `ciclu` or `instrucțiune repetitivă`, which are the academic textbook register. |
| nested | imbricat | ro | „bucle imbricate" = nested loops. When glossed, gloss the full term (_nested loop_), not the bare adjective. |
| keyword | cuvânt-cheie | ro | Hyphenated, per DOOM. Plural `cuvinte-cheie`. |
| interpreter | interpretor | ro | **A person doing a job, not a program.** On concept pages Jiki *is* the interpreter („interpretorul tău este Jiki", „treaba lui este să interpreteze codul pe care îl scrii"). Never `interpret`, which in Romanian is a spoken-language interpreter or a performer, a different job entirely. |
| (programming) language | limbaj (de programare) | ro | Never `limbă`, which is a natural language. Use `limbaj de programare` where the programming sense needs stating, and bare `limbaj` once it is established, including in the "a language a computer understands" framing. |
| code block | bloc de cod | ro | `bloc de instrucțiuni` is the textbook form; `bloc de cod` is friendlier. Keep distinct from `domeniu de vizibilitate` (scope) below. |
| to run / execute (code) | a rula | ro | `a rula` for running a program or a block; `a executa` for a single instruction being carried out. |
| increment | incrementare | ro | |
| modulo / remainder operator | restul împărțirii | ro | Say what it does, because it explains itself to a beginner. `modulo` only where the operator needs naming. |
| scope | domeniu de vizibilitate | ro | Keep distinct from `bloc de cod` above. The scope concept page may use `scope` after defining it. |
| toggle | a comuta | ro | To flip a value between two states. |
| indentation | indentare | ro | Established Romanian; not `aliniere`. |

### Tooling & engineering

| English | Romanian | Use (ro/en) | Notes |
|---------|----------|-------------|-------|
| tool / tooling | instrument | ro | Not `unealtă`, which is a physical hand tool. |
| deploy | a publica | ro | Go-live sense. Not `a implementa` (that is "to implement"); Romanian devs say „a face deploy" in speech, which is unwritable here. |
| auth: authentication | autentificare | ro | Verifying identity. |
| auth: authorization | autorizare | ro | Verifying permissions; keep distinct from authentication above. |
| edge case | caz limită | ro | |
| debugging | depanare | ro | The prose activity. The `Debug` UI label and code token stay English; see "Keep in English". |

### Platform & curriculum vocabulary

| English | Romanian | Use (ro/en) | Notes |
|---------|----------|-------------|-------|
| feature (platform capability) | funcționalitate | ro | Deliberately kept distinct from `funcție`, which is reserved for the CS "function" concept. |
| concept (learning unit) | noțiune | ro | Concept Library = Biblioteca de noțiuni. Not `concept`, which is vaguer and everyday. |
| course | curs | ro | The whole Jiki course the learner is taking („în cursul acesta, interpretorul tău este Jiki"). Keep distinct from `lecție` and `programă` (curriculum). |
| task (within an exercise) | sarcină | ro | Distinct from `exercițiu` (the exercise itself). |
| scenario | scenariu | ro | |
| track (curriculum path) | traseu | ro | Keep distinct from `parcurs` (pathway) below. |
| pathway | parcurs | ro | Keep distinct from `traseu` (track) above. |
| solution (learner's submission) | soluție | ro | |
| plan (subscription tier) | abonament | ro | Enables „abonamentul {tier}". Not `plan`, which reads as a schedule. |
| dashboard | panou de control | ro | Deliberately **not** `tablou de bord`, which is the dashboard of a car. |
| canvas (graphics exercises) | pânză | ro | The drawing-surface sense specifically. |
| Learn to Code (strand) | Învață să programezi | ro | Descriptive strand names are translated. |
| Learn to Build (strand) | Învață să construiești | ro | Descriptive strand names are translated. |
| Run Code (button) | Rulează codul | ro | The on-screen button. Exercise instructions and the website-copy catalog must say exactly the same thing, or the instructions name a button that is not on screen. Not left in English: the "Keep in English" row for `Code` covers the bare UI token, not this sentence-shaped label. |

## Keep in English

These stay in English in Romanian prose, with the Romanian gloss to use for each.

| Term | Romanian gloss (on `<define>`) | Notes |
|------|---------------------------------|-------|
| string | _șir de caractere_ | Declines without a hyphen: „stringul", „stringuri" (see `guide.md`). Use `șir de caractere` only as the gloss where the source defines it, then `string` throughout. |
| Boolean | _valoare logică_ | Where the source defines it, explain it means a `valoare logică`, then use `Boolean`. |
| API | explain the concept in Romanian, not just the acronym | „un set de reguli prin care două programe vorbesc între ele", not just the expanded letters. |
| CLI | _linia de comandă_ | Where the source defines it, explain CLI as the text-based way of driving a computer. |
| framework | _cadru de lucru_ | Gloss it once where defined, then use `framework`, which is what Romanian dev writing does. |
| component | _componentă_ | Use `componentă` freely. |
| AI | _inteligență artificială_ | Use "AI" in prose and marketing, not the purist `IA`. |
| LLM | explain in Romanian | |
| widget | (no gloss) | Established in Romanian tech writing. |
| chat | (no gloss) | Fully nativized; a gloss would teach nothing. |
| backtick | (show the glyph) | |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As UI labels and code tokens. The prose activity of debugging is `depanare`; see "Tooling & engineering". |
| Code, Bug, Frontend, Backend | (no gloss) | As UI labels and code tokens. |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Brackets

| Glyph | Romanian | Notes |
|-------|----------|-------|
| `()` | paranteze · paranteze rotunde | Plain `paranteze` by default; add `rotunde` + glyph only when disambiguating. |
| `[]` | paranteze pătrate | |
| `{}` | acolade | Not `paranteze acolade`; `acolade` stands alone. |
| `<>` | paranteze unghiulare | |

How to phrase a bracket in running prose is in `guide.md`.
