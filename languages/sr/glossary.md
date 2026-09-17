# Serbian (sr) glossary

The agreed term list for Serbian. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Serbian | Use (sr/en) | Notes |
|---------|---------|-------------|-------|
| programming / coding | **programiranje** | sr | Use consistently. |
| streak | **serija** | sr | E.g. "serija od 7 dana". Deliberately not "niz" (reserved for the array/CS term), to avoid a collision. |
| tech / tech industry | **IT industrija** | sr | Use "tehnologija" for the general adjective sense ("tech company" = "tech kompanija" / "IT kompanija"). |
| developer | **programer** | sr | |
| pitfall | **zamka** | sr | Stands alone; no gloss needed. |
| pattern (a recurring shape you reuse) | **šablon** | sr | Deliberately not "obrazac", which reads first as a form to fill in and is the more formal register. |
| Jiki (the character) | **Džiki** | sr | Decided by Jeremy (t/935/7), 2026-08-24. Only when "Jiki" is the friendly guide character in narrative prose. Decline normally: „Džikija“ (genitive), „Džikiju“ (dative). Never for the product/brand name, which stays "Jiki" (Latin). See the guide's "Jiki: character vs product name" note. |
| Jeremy (as narrator/person) | **Džeremi** | sr | Same decision as above, same split (person vs any use as a bare label/brand mention). Decline normally. |

## Localize (use the Serbian term)

These are terms where the Serbian is used in prose, so the "Use (sr/en)" column is `sr` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Serbian | Use (sr/en) | Notes |
|---------|---------|-------------|-------|
| value | vrednost | sr | |
| number | broj | sr | |
| true / false | tačno / netačno | sr | Not capitalised in prose. This governs the prose concept only. A LITERAL boolean value a function returns or compares against in code (e.g. `true`/`false` as a sentinel) stays in English — do not translate a code-checked literal. |
| character | karakter | sr | |
| integer | ceo broj | sr | Also "celobrojni tip" for the type name specifically. |
| float / decimal | broj sa pokretnim zarezom | sr | Or "realni tip" when the type name (not the value) is meant. |
| array / list | niz | sr | See also "chain" under Jiki physical metaphors for the teaching metaphor used alongside it. |
| dictionary | rečnik | sr | Corrected from "mapa" per native-speaker feedback (see glossary-notes.md). "mapa" / "mapiranje" belongs to Java's `Map`; the Python-style dictionary Jiki teaches is "rečnik". Masculine; declines normally ("u rečniku", pl. "rečnici", instr. pl. "rečnicima"). |
| element | element | sr | "element niza" = array element. |
| index | indeks | sr | Stands alone. |
| data type | tip podataka | sr | |

### Functions & control flow

| English | Serbian | Use (sr/en) | Notes |
|---------|---------|-------------|-------|
| if statement | if naredba | sr | Keep `if` in backticks/inline code as the real keyword; "grananje" (branching) is the natural word to use in prose when talking about the general concept of conditional branching, not the specific statement. |
| condition | uslov | sr | Stands alone. |
| comparison | poređenje | sr | Stands alone. |
| expression | izraz | sr | |
| operator | operator | sr | |
| statement (executable) | naredba | sr | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | iskaz | sr | The proposition sense: a claim that is true or false. Keep distinct from "naredba" above; pick by meaning, not by the English word. |
| function | funkcija | sr | The *keyword* `function` in code stays English; the concept in prose is "funkcija". |
| to call (a function) | pozvati (funkciju) | sr | |
| to define (a function) | definisati | sr | |
| input (to a function) | ulaz | sr | |
| output | izlaz | sr | |
| to return (a value) | vratiti (vrednost) | sr | |
| return value | povratna vrednost | sr | |
| parameter | parametar | sr | The declaration-site name. |
| argument | argument | sr | The call-site value; used somewhat interchangeably with "parametar" in casual Serbian dev speech, but keep them distinct per the glossary discipline. |
| pure function | čista funkcija | sr | |
| brackets (the two after a function name) | zagrade | sr | The `()` pair written after a function name to call it ("napiši njeno ime, a zatim te dve zagrade"). Bare "zagrade" is enough where the context is a function call; where round and square must be distinguished, "obične zagrade" (round) vs "uglaste zagrade" (square). |

### Loops, state & program flow

| English | Serbian | Use (sr/en) | Notes |
|---------|---------|-------------|-------|
| keyword | ključna reč | sr | Still worth clarifying once. |
| interpreter (the one who interprets) | interpreter | sr | **A person doing the job of interpreting, not a piece of software:** on concept pages Jiki *is* the interpreter ("tvoj interpreter je Jiki", "njegov posao je da interpretira kod koji pišeš"). Declines normally: "interpretera", "interpreteru". The verb is "interpretirati". Not "interpretator" (names the program, not the person), not "prevodilac" (the standard word for a compiler-style translator), and not "tumač" (bound to the court/spoken-language sense). |
| instruction (given to Jiki) | instrukcija | sr | A single thing the learner tells Jiki to do ("daš mu prave instrukcije"). Keep distinct from "naredba" (an executable statement of code). Note that "instrukcije" on its own can also mean private tutoring lessons in Serbian; the Jiki context removes the ambiguity, but do not use it bare where it could. |
| mental model | mentalni model | sr | The picture-in-your-head framing ("to je snažan mentalni model"). |
| (programming) language | programski jezik / jezik | sr | Use "programski jezik" where the programming sense needs stating, and bare "jezik" once it is established or where the framing is "a language a computer understands" ("na jeziku koji računar razume"). Never the English borrowing. |
| variable | promenljiva | sr | Feminine gender; "nova promenljiva", "promenljiva je definisana". |
| assignment | dodela (vrednosti) | sr | |
| to assign | dodeliti | sr | |
| code block | blok (koda) | sr | "telo funkcije" for the function-body sense specifically. |
| error | greška | sr | |
| exception | izuzetak | sr | Distinct from the general "greška"; the catchable-error-object sense. |
| nested | ugnežden(i) | sr | E.g. "ugnežđene petlje" (nested loops). |
| iteration | iteracija | sr | |
| to run / execute (code) | izvršiti / pokrenuti (kod) | sr | |
| loop | petlja | sr | |
| for loop | `for` petlja | sr | Keep `for` in backticks (real keyword) + "petlja". |
| while loop | `while` petlja | sr | As above. |
| for-of loop | `for-of` petlja | sr | As above. |
| loop body | telo petlje | sr | |
| break (loop control) | prekid (petlje) | sr | The keyword `break` itself always stays English in code; this is the prose concept. |
| increment | uvećanje | sr | "inkrement" is also used in more academic registers; use "uvećanje" here. |
| modulo / remainder operator | ostatak (deljenja) | sr | "The remainder of division"; no clarification needed. |
| concatenation / to concatenate | spajanje (stringova) | sr | Joining strings. Not "spajanje nizova" (reads as joining arrays). |
| toggle (the noun: a control with two states) | prekidač | sr | The switch/control itself. Masculine; declines normally ("prekidača", "na prekidaču"). Corrected from "preklopiti" per native-speaker feedback (see glossary-notes.md), which merged the noun and the verb into one verb form. |
| to toggle (the verb) | prebaciti | sr | **Context-dependent, not a fixed rendering.** Serbian has no single one-word verb covering English "to toggle"; "prebaciti" (to switch/flip over) is the general-case default, but pick the verb that fits the actual action ("promeniti", "invertovati", "uključiti/isključiti" for an on/off control). Never force "prebaciti" where it reads oddly. |
| state / stateful | stanje | sr | |
| scope | opseg | sr | Corrected from "doseg" per native-speaker feedback (see glossary-notes.md). Keep distinct from "blok" (code block) above. |
| class | klasa | sr | |
| method (a function that belongs to a class) | metoda | sr | Feminine ("metoda", with the -a ending). Corrected from "metod" per native-speaker feedback (see glossary-notes.md); "metod" is now reserved for the general, non-OOP sense of "method" only, not for class methods. |
| property | svojstvo | sr | Stands alone. |
| object | objekat | sr | Masculine. |
| encapsulation | enkapsulacija | sr | Use "enkapsulacija" consistently. |

### Tooling & engineering

| English | Serbian | Use (sr/en) | Notes |
|---------|---------|-------------|-------|
| workflow | radni tok | sr | The software-engineering sense (a sequence of dev tasks), distinct from "curriculum" below. |
| auth: authentication | autentifikacija | sr | Verifying identity. |
| auth: authorization | autorizacija | sr | Verifying permissions; keep distinct from authentication above. |
| deploy | postavi na server | sr | Corrected from "deploj" per native-speaker feedback (see glossary-notes.md): "deploj" reads unprofessional and anglicized. "postaviti" = "to put"; conjugate to fit the sentence (e.g. "postavljanje na server" as the noun/gerund). Context-dependent: where "postavi na server" reads awkwardly, rephrase around the specific action instead of forcing this exact phrase. |
| tool / tooling | alat | sr | |
| module | modul | sr | |
| algorithm | algoritam | sr | Still worth clarifying for a first-time beginner reader. |
| edge case | granični slučaj | sr | |
| backwards compatibility | unazadna kompatibilnost | sr | |

### Platform & curriculum vocabulary

| English | Serbian | Use (sr/en) | Notes |
|---------|---------|-------------|-------|
| feature (platform capability) | funkcionalnost | sr | The word Serbian developer and product writing actually uses ("nove funkcionalnosti"). Still never bare "funkcija", which is reserved for the CS "function" concept. "funkcionalnost" shares that root but is a separate, unambiguous word, so keep the two forms apart and never shorten one to the other. |
| lesson | lekcija | sr | |
| exercise | vežba | sr | |
| scenario | scenario | sr | |
| course | kurs | sr | The whole Jiki course the learner is taking ("na ovom kursu tvoj interpreter je Jiki"). Keep distinct from "lekcija" (lesson) and "kurikulum" (curriculum). |
| curriculum | kurikulum | sr | Distinct from "radni tok" (workflow) above; this is the curriculum-structure sense. |
| level | nivo | sr | |
| milestone | etapa | sr | The numbered marker on the learning path ("Etapa 3"). Feminine; declines normally ("u etapi", "završi etapu", pl. "etape"). Deliberately not "prekretnica" (a turning point, which a numbered path marker is not) and deliberately not "dostignuće"/"postignuće", which is spoken for by the separate Achievements feature ("Dostignuća" in the sidebar). Keep distinct from "nivo" (level). Where English uses "milestone" in the loose, everyday sense rather than as the platform feature, translate for sense (e.g. "cilj") instead of forcing this row. |
| pathway | putanja | sr | Keep distinct from "staza" (track) below; both mean "path" but are assigned to different concepts. |
| bootcamp | butkamp | sr | Corrected from the hybrid spelling "bootkamp" per native-speaker feedback (see glossary-notes.md): a loanword adopted into Serbian prose is respelled phonetically throughout, not half-kept in its English spelling. Declines normally ("butkampa", "u butkampu"). Deliberately not "kurs", which is spoken for by `course` above. |
| syllabus | silabus | sr | |
| mentor / mentoring | mentor / mentorstvo | sr | |
| track (curriculum path) | staza | sr | Keep distinct from "putanja" (pathway) above. |
| tutorial | tutorijal | sr | |
| solution (learner's submission) | rešenje | sr | |
| canvas (graphics exercises) | platno | sr | The drawing-surface sense specifically. |
| maze | lavirint | sr | Masculine; declines normally ("u lavirintu", "kroz lavirint", pl. "lavirinti"). Spelled with **v**, not "labirint": both are valid, but "lavirint" is what Serbian speakers actually say. |
| foot-gun | opasna prečica | sr | Flagged for native-speaker review; Serbian has the idiom "pucati sebi u nogu" (to shoot yourself in the foot), which may be worth workshopping into a punchier term. |

## Keep in English

These stay in English in Serbian prose, with the Serbian gloss to use for each.

| Term | Serbian gloss (on `<define>`) | Notes |
|------|----------------------------------|-------|
| string | "niska" | Used only as the gloss where the source defines it. |
| Boolean | "logička vrednost" | Where the source defines it, explain it means "logička vrednost", then use "Boolean". |
| API | explain the concept in Serbian, not just the acronym | Where the source defines it, explain what an API does ("skup pravila koja omogućavaju da dva programa međusobno komuniciraju"), not just gloss the letters. |
| framework | "radni okvir" | Where the source defines it, explain it means "radni okvir" (working framework); may then use either "radni okvir" or "framework" (Serbian technical writing sometimes phonetically respells this as "frejmvork", but plain English "framework" is also fine). |
| CLI | "komandna linija" | Where the source defines it, explain CLI as "komandna linija" (command line), then use "CLI" or "komandna linija" interchangeably. |
| component | "komponenta" | Use "komponenta" freely. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |
