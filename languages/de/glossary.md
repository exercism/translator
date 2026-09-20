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
| string | String | en | Where the English itself explains the term, gloss as "String (Zeichenkette)", then use "String" throughout. Exception: in the string concept itself, lean more on "Zeichenkette" if it aids teaching. |
| Boolean | boolescher Wert | de | The type keyword `bool`/`Boolean` in code stays English. |

### Functions & control flow

| English | German | Use (de/en) | Notes |
|---------|--------|-------------|-------|
| if statement | if-Anweisung | de | The `if` keyword stays English in code and in this compound; "Anweisung" is translated. |
| expression | Ausdruck | de | Distinct from "Anweisung" (statement). |
| statement (executable) | Anweisung | de | The imperative sense: a line of code that does something and gets executed. Keep distinct from "Befehl", which is the everyday word for a single thing someone is told to do. |
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
| interpreter | Interpreter | de | The program that runs the code. No gloss: the German form is the same word in the same script, so a parenthetical would teach nothing (see the skip-gloss rule in `guide.md`). Never "Übersetzer" (that is a compiler) or "Dolmetscher" (spoken-language interpreting). |
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
| edge case | Randfall | de | Where the English itself explains the term, gloss as "Randfall (Edge Case)". Keep distinct from "Grenzfall" (a boundary value) and "Sonderfall" (a special/exceptional case), which are not synonyms. |
| CLI (the concept) | Kommandozeile | de | The working term itself, not the bare acronym. "CLI-Tool" is acceptable as a compound where the acronym is part of a product name. |

### Platform & curriculum vocabulary

| English | German | Use (de/en) | Notes |
|---------|--------|-------------|-------|
| exercise | Übung | de | The platform unit the learner works through: "Bei jeder Übung...". Kept distinct from "Aufgabe" (a task inside it). |
| task (within an exercise) | Aufgabe | de | A sub-step of an exercise. Never "Übung". The everyday sense of "Aufgabe" ("Seine Aufgabe ist es, ...") is ordinary prose and unaffected. |
| course | Kurs | de | The whole course the reader is taking: "in diesem Kurs". Keep distinct from "Lektion" (lesson) and "Lehrplan" (curriculum). |

## Keep in English

These stay in English in prose. Where the English itself explains one of these terms, use the
German in the gloss column below (per the format in `global/voice.md`); and where it does not, use
the English bare, with no gloss.

| Term | German word, where the English explains the term | Notes |
|------|------------------------------|-------|
| API | _Programmierschnittstelle_ | Not a word a beginner knows; where defined, explain the concept in German, not just gloss the acronym. |
| framework | _Grundgerüst, auf dem man ein Programm aufbaut_ | Explain the idea where the source defines it, then use "Framework" freely. Do not gloss with "Rahmenwerk". |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Programming keywords (`function`, `if`, `for`, ...) | (none) | Always English, including inside prose. Translate only the surrounding explanation. |

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks German has agreed any row in this section, and no rendering has been
proposed.** These are the nouns Exercism's own product vocabulary is built from, and they are
the rows we most need a native speaker to fill in, because each one appears on hundreds of
pages. The target column is deliberately empty: an agent's invented rendering sitting in a
glossary reads as an agreed one, and these terms are too visible for that. Fill them in on the
pinned glossary thread, and a row moves into an agreed section once a native speaker has
settled it, recorded in `glossary-notes.md`. `global/terms.md` describes what each term means
on Exercism.

| English | Proposed German | Use (de/en) | Notes |
|---------|------------------|------------------|-------|
| track |  |  |  |
| to join (a track) |  |  |  |
| concept exercise / learning exercise |  |  |  |
| practice exercise |  |  |  |
| syllabus |  |  |  |
| learning mode / practice mode |  |  |  |
| locked / unlocked / available / in progress / completed |  |  |  |
| to unlock |  |  |  |
| solution |  |  |  |
| to submit |  |  |  |
| to publish (a solution) / published |  |  |  |
| community solutions |  |  |  |
| to star / stars |  |  |  |
| mentor / mentoring |  |  |  |
| student (the person being mentored) |  |  |  |
| mentoring request |  |  |  |
| mentoring session / discussion |  |  |  |
| code review |  |  |  |
| mentoring queue |  |  |  |
| testimonial (left for a mentor) |  |  |  |
| supermentor |  |  |  |
| automated feedback |  |  |  |
| analyzer |  |  |  |
| representer |  |  |  |
| representation |  |  |  |
| test runner |  |  |  |
| tests passed / tests failed |  |  |  |
| online editor / the editor |  |  |  |
| the Exercism CLI |  |  |  |
| reputation |  |  |  |
| badge |  |  |  |
| trophy |  |  |  |
| journey (the user's history page) |  |  |  |
| contributor / contributing |  |  |  |
| maintainer |  |  |  |
| Insiders |  |  |  |
| donation / to donate / donor |  |  |  |
| perks |  |  |  |
| partner |  |  |  |
| flair (marker beside a username) |  |  |  |
| Dig Deeper (tab) |  |  |  |
| approach (to an exercise) |  |  |  |
| article (on an exercise) |  |  |  |
| deep dive (video) |  |  |  |
| challenge (community event) |  |  |  |
| cohort |  |  |  |
| community |  |  |  |
| notification |  |  |  |
| favorites |  |  |  |
| difficulty: easy / medium / hard |  |  |  |
| handle (username) |  |  |  |
| automation (feedback on representations) |  |  |  |
