# German (de) glossary

The agreed term list for German. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | German | Use (de/en) | Notes |
|---------|--------|-------------|-------|
| streak | Streak | en | |

## Localize (use the German term unless the row says `en`)

Split by theme for readability; every table below follows the same columns. The
"Use (de/en)" column says which language is primary in prose for that term, per
`global/voice.md`. Most rows are `de`; the few `en` rows are loanwords German developers
themselves actually use, so the English word is the ordinary German word there.

### Values & data types

| English | German | Use (de/en) | Notes |
|---------|--------|-------------|-------|
| integer | Ganzzahl | de | The type keyword `int` in code stays English. |
| float / decimal | Gleitkommazahl | de | **Settled on the forum; do not change** (see `glossary-notes.md`). Do **not** fall back on "Dezimalzahl": it names the base-10 system, not this data type, so it is not a synonym here. "Fließkommazahl" is also rejected as an anglicism. |
| true / false | wahr / falsch | de | Not capitalized in prose. |
| array | Array | en | No gloss needed, "Array" is standard vocabulary now. |
| dictionary | Wörterbuch | de | General prose term. Python-specific material may say "Dictionary"/"dict" instead; do not mix within one document. |
| string | String | en | Where the source `<define>`s it, gloss as "String (Zeichenkette)", then use "String" throughout. Exception: in the string concept itself, lean more on "Zeichenkette" if it aids teaching. |
| Boolean | boolescher Wert | de | The type keyword `bool`/`Boolean` in code stays English. |

### Functions & control flow

| English | German | Use (de/en) | Notes |
|---------|--------|-------------|-------|
| if statement | if-Anweisung | de | The `if` keyword stays English in code and in this compound; "Anweisung" is translated. |
| expression | Ausdruck | de | Distinct from "Anweisung" (statement). |
| statement (executable) | Anweisung | de | The imperative sense: a line of code that does something and gets executed. Keep distinct from "Befehl" (instruction given to Jiki). |
| statement (logical claim) | Aussage | de | The proposition sense: a claim that is true or false. Keep distinct from "Anweisung". |
| function | Funktion | de | The *keyword* `function` in code stays English; the concept in prose is "Funktion". |
| parameter | Parameter | de | Declaration-site name. Masculine, unchanged plural: "der Parameter, die Parameter". |
| argument | Argument | de | Call-site value. Neuter, distinct gender from "Parameter": "das Argument, die Argumente". |
| input (to a function) | Eingabewert | de | Distinct from general "Eingabe" (user input). |
| output | Ausgabe | de | The function's result specifically is "Rückgabewert"; "Ausgabe" is the general/printed sense. |
| return value | Rückgabewert | de | Keep distinct from the verb above. |
| brackets (the two after a function name) | runde Klammern | de | German distinguishes shapes, so name them on first mention in a page: "zwei runde Klammern". Plain "Klammern" is fine for later mentions in the same page. Square brackets are "eckige Klammern". |

### Loops, state & program flow

| English | German | Use (de/en) | Notes |
|---------|--------|-------------|-------|
| interpreter | Interpreter | de | **A person doing a job, not a program: Jiki is the interpreter.** No gloss on `<define>`: the German form is the same word in the same script, so the parenthetical would teach nothing (see the skip-gloss rule in `guide.md`). Never "Übersetzer" (that is a compiler) or "Dolmetscher" (spoken-language interpreting). |
| instruction (given to Jiki) | Befehl | de | A single thing the learner tells Jiki to do. Pairs with "befolgen": "Befehle auf eine Tafel schreiben, und Jiki befolgt sie." Kept distinct from "Anweisung" (statement), which is reserved for a line of code. |
| mental model | Denkmodell | de | The picture-in-your-head framing. |
| (programming) language | Programmiersprache | de | Also the "a language a computer understands" framing, where the bare "Sprache" is right. Never the English "Language". |
| code block | Block | de | Keep distinct from "scope" (Gültigkeitsbereich) below; do not conflate. |
| iteration | Iteration | de | "Durchlauf" is a friendlier beginner gloss for a single pass through a loop. |
| loop | Schleife | de | English "loop" is never used in prose. |
| for loop | for-Schleife | de | Keep the `for` keyword in code font; translate only "Schleife". |
| while loop | while-Schleife | de | As above, with `while`. |
| loop body | Schleifenblock | de | Masculine ("der Schleifenblock, des Schleifenblocks, die Schleifenblöcke"). Consistent with "Block" (code block) above: the body of a loop is the block it repeats. Never "Schleifenrumpf" or "Schleifenkörper". |
| increment | erhöhen | de | The verb. |
| scope | Gültigkeitsbereich | de | Keep distinct from "Block" (code block) above. |
| property | Eigenschaft | de | |

### Tooling & engineering

| English | German | Use (de/en) | Notes |
|---------|--------|-------------|-------|
| workflow | Workflow | en | Distinct from the curriculum sense. |
| deploy | ausrollen | de | The verb. Noun form: "Deployment". |
| tool / tooling | Tool | en | |
| edge case | Randfall | de | Where the source `<define>`s it, gloss as "Randfall (Edge Case)". Keep distinct from "Grenzfall" (a boundary value) and "Sonderfall" (a special/exceptional case), which are not synonyms. |
| CLI (the concept) | Kommandozeile | de | The working term itself, not the bare acronym. "CLI-Tool" is acceptable as a compound where the acronym is part of a product name. |

### Platform & curriculum vocabulary

| English | German | Use (de/en) | Notes |
|---------|--------|-------------|-------|
| exercise | Übung | de | The platform unit the learner works through: "Bei jeder Übung...". Kept distinct from "Aufgabe" (a task inside it). |
| task (within an exercise) | Aufgabe | de | A sub-step of an exercise. Never "Übung". The everyday sense of "Aufgabe" ("Seine Aufgabe ist es, ...") is ordinary prose and unaffected. |
| course | Kurs | de | The whole Jiki course: "In diesem Kurs ist Jiki dein Interpreter." Keep distinct from "Lektion" (lesson) and "Lehrplan" (curriculum). |

## Keep in English

These stay in English in prose. Where the source `<define>`s one of these terms, use the
German in the gloss column below (per the format in `global/voice.md`); with no
`<define>`, use the English bare, with no gloss.

| Term | German gloss (on `<define>`) | Notes |
|------|------------------------------|-------|
| API | _Programmierschnittstelle_ | Not a word a beginner knows; where defined, explain the concept in German, not just gloss the acronym. |
| framework | _Grundgerüst, auf dem man ein Programm aufbaut_ | Explain the idea where the source defines it, then use "Framework" freely. Do not gloss with "Rahmenwerk". |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | German rendering | Notes |
|-------------------|-------------------|-------|
| box (value container) | Box | |
| chain (array metaphor) | Kette | Link = "Kettenglied". |
| input slot | Trichter | Masculine: "der Trichter", plural "die Trichter". Use it bare, not "Eingabetrichter": it is the thing Jiki throws values into ("Jiki wirft es in den Trichter"). Never "Eingabeschlitz" or "Eingabeschacht". |
| return chute | Ausgaberutsche | Feminine: "die Ausgaberutsche", plural "die Ausgaberutschen". The out half of the pair with "Trichter": things go in the Trichter and come out the Ausgaberutsche. |
| machine (function metaphor) | Maschine | |
| shelves (storage) | Regale | The shelves where variables and functions are stored; singular "Regal". |
| board / whiteboard | Tafel | **One object, one word.** The board the learner writes Befehle on for Jiki to follow, and the board a function keeps its own notes on, are the same object and take the same word everywhere. Never "Whiteboard" as a second word for the same object. |
| warehouse (Jiki's warehouse) | Lagerhalle | The place where Jiki hangs out and keeps his machine shelf. Never "Warenhaus" (that means a department store). |
| crank (machine crank) | Kurbel | The handle Jiki turns to start a machine: "die Kurbel drehen". |
