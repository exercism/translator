# Croatian (hr) glossary

The agreed term list for Croatian. Why each term was chosen, and who chose it, is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| programming / coding | **programiranje** | hr | Use consistently. `kodiranje` only where the source stresses the casual act of writing code; never mix both in one document. |
| developer | programer | hr | The word a beginner knows. `developer` only where the industry job role itself is meant. |
| computer | **računalo** | hr | Never `računar`, never `kompjuter`. Note that computer science is `računarstvo`, which is correct Croatian and must not be "corrected" to `računalstvo`. |
| code (the noun, in prose) | kôd | hr | Written with the circumflex, which keeps it apart from the preposition `kod`. `kôda`, `u kôdu`. The `Code` UI token stays English. |
| tech / tech industry | IT industrija | hr | `tehnološki` for the general adjective sense. |
| pattern (a recurring shape you reuse) | obrazac | hr | Collides with `obrazac` meaning a form to fill in, so use `obrazac za unos` for a web form and keep bare `obrazac` for the pattern sense. |
| mental model | mentalni model | hr | |
| pitfall | zamka | hr | Stands alone; no gloss needed. |

## Localize (use the Croatian term)

These are terms where the Croatian is used in prose, so the "Use (hr/en)" column is `hr` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| value | vrijednost | hr | Feminine. Never `vrednost`. |
| true / false | točno / netočno | hr | Not capitalised in prose. This governs the prose concept only: a `true`/`false` literal that code returns or is compared against stays English. |
| character (text) | znak | hr | **Never `karakter`**, which in Croatian means character as in personality. `niz znakova` = a string of characters. |
| letter (of a string) | slovo | hr | Kept distinct from `znak`. |
| integer | cijeli broj | hr | Adjective `cjelobrojni`. |
| float / decimal | decimalni broj | hr | `realni broj` in academic register, `broj s pomičnim zarezom` where the floating-point nature matters. Croatian uses *zarez*, so never `pomična točka`. |
| array / list | polje | hr | Never `niz`, which is both the Serbian choice and already needed for `niz znakova` (string). `lista` only where the source means a Python-style list. See also "chain" under the metaphors. |
| dictionary | rječnik | hr | **Not `mapa`**, which is Croatian for a folder. |
| compound data type | složeni tip podataka | hr | Distinct from a plain data type. |
| random number | slučajni broj | hr | Not `nasumičan`. |
| object (JS `{}` literal) | objekt | hr | Masculine. Never `objekat`. |
| position (in a string/array) | pozicija | hr | Kept distinct from `indeks`. |

### Functions & control flow

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| if statement | naredba `if` | hr | The keyword stays English. For the general concept of conditional branching in prose, use `uvjetno grananje`. |
| condition | uvjet | hr | Never `uslov`. |
| comparison | usporedba | hr | Verb `usporediti`. Never `poređenje` or `uporediti`. The operator class is `relacijski operatori`. |
| statement (executable) | naredba | hr | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | iskaz | hr | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. |
| function | funkcija | hr | The *keyword* `function` in code stays English; the concept in prose is `funkcija`. |
| function name | naziv funkcije | hr | Never `ime funkcije`. The identifier itself still stays exactly as written in the code; this is only the word for *name*. |
| to define (a function) | definirati | hr | Never `definisati`. The same `-irati` pattern governs `deklarirati` and `inicijalizirati`. |
| parameter | parametar | hr | The declaration-site name. |
| argument | argument | hr | The call-site value. Keep the two distinct even though older Croatian material merges them as `formalni`/`stvarni argument`. |
| input (to a function) / output | ulaz / izlaz | hr | The concepts. The *actions* are different words and must not be conflated with these: `unos` or `učitavanje` for reading input, `ispis` for printing output. |
| to return (a value) | vratiti (vrijednost) | hr | |
| return value | povratna vrijednost | hr | |
| function body | tijelo funkcije | hr | Never `telo`. |
| brackets (the two after a function name) | oble zagrade | hr | Bare `zagrade` is enough where the context is a function call. Which bracket type to name, and when, is in the Brackets section below. |
| interpreter | **tumač** | hr | **A person doing a job, not a program.** On concept pages Jiki *is* the interpreter (`tvoj tumač je Jiki`, `njegov je posao tumačiti kôd koji pišeš`). Never `interpreter` or `interpretator`, which name the program and also mean a musical performer, and never `prevoditelj`, which is the word for a compiler. Lean on the framing rather than the bare label. |
| instruction (given to Jiki) | uputa | hr | What the learner writes on the board for Jiki to follow. Everyday word, deliberately distinct from `naredba` (an executable statement of code). |
| else clause / branch | inače | hr | `inače` in prose; `grana `else`` where the code branch itself is meant. |
| built-in | ugrađen | hr | `ugrađene funkcije`, as against `korisnički definirane funkcije`. |
| equal sign | znak jednakosti | hr | Assignment as an action is `pridruživanje`. |
| bang (the `!` character) | uskličnik | hr | Croatian names it functionally where the logical sense is meant (`negacija`); use the glyph itself on a `<define>`. |
| placeholder | rezervirano mjesto | hr | |
| pure (function) | čista funkcija | hr | When glossed, gloss the full term *pure function*, not the bare adjective. |

### Loops, state & program flow

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| variable | varijabla | hr | Feminine. Never `promjenjiva` or `promenljiva`. |
| variable name | naziv varijable | hr | Never `ime varijable`. The identifier itself still stays exactly as written in the code; this is only the word for *name*. |
| assignment / to assign | pridruživanje / pridružiti | hr | `dodjeljivanje` is an acceptable synonym; do not alternate inside one document. |
| code block | blok naredbi | hr | Kept distinct from `doseg` (scope). |
| error | pogreška | hr | Never `greška`, which is lower register and the Serbian form. |
| exception | iznimka | hr | The catchable-error-object sense, distinct from `pogreška`. Never `izuzetak`. |
| nested | ugniježđen | hr | `ugniježđene petlje` = nested loops. When glossed, gloss the full term (*nested loop*), not the bare adjective. |
| iteration | iteracija | hr | `ponavljanje` or `prolaz` in plainer register; do not alternate inside one document. |
| increment | uvećavanje | hr | `inkrementiranje` is the technical register; prefer the plain word. |
| to run / execute (code) | izvršiti (kôd) / pokrenuti (program) | hr | **Not synonyms.** `izvršiti` is to execute code, `pokrenuti` is to launch a program or start a run. |
| concatenation / to concatenate | nadovezivanje | hr | `spajanje` is plainer and acceptable; `nadovezivanje` is the precise term. |
| scope | doseg | hr | Kept distinct from `blok naredbi`. Never `oblast vidljivosti`. |
| class | klasa | hr | `razred` appears in purist course material; use `klasa`. |
| method | metoda | hr | Feminine. |
| property | svojstvo | hr | Distinct from `atribut`. |
| encapsulation | enkapsulacija | hr | `učahurivanje` is available as a Croatian gloss where one is needed. |
| indentation | uvlaka | hr | The action is `uvlačenje`. |
| break (loop control) | prekinuti petlju | hr | Croatian phrases this verbally; `izlazak iz petlje` for the noun sense. The keyword `break` always stays English. |

### Tooling & engineering

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| library (code) | biblioteka | hr | `knjižnica` is the prescriptivist preference and not what developers say. |
| workflow | tijek rada | hr | The software-engineering sense. Cf. `dijagram tijeka` for a flowchart. |
| edge case | rubni slučaj | hr | |
| debugging | otklanjanje pogrešaka | hr | The prose activity. The `Debug` UI token stays English. |
| deploy | objaviti / postaviti u produkciju | hr | Context-dependent, not a fixed phrase: where neither reads well, rephrase around the specific action. |
| tool | alat | hr | |
| file / folder | datoteka / mapa | hr | `direktorij` only in a filesystem or CLI context. |
| browser | preglednik | hr | `web-preglednik` where the web sense needs stating. |
| server | poslužitelj | hr | Never `poslužilac`. |
| website / web page | web-mjesto / web-stranica | hr | Hyphenated, lowercase `web`. |
| software / hardware | softver / hardver | hr | Never `programska podrška` or `očvrsje`. |

### Platform & curriculum vocabulary

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| course | tečaj | hr | The whole Jiki course the learner is taking. **Never `kolegij` or `e-kolegij`**, which mean a university degree module. |
| task (within an exercise) | zadatak | hr | Distinct from `vježba` (the exercise itself). |
| level | razina | hr | |
| milestone | etapa | hr | The numbered marker on the learning path (`Etapa 3`). Deliberately not `prekretnica` (a turning point, which a numbered path marker is not), and deliberately not `postignuće`, which is spoken for by the Achievements feature. Where English uses "milestone" loosely rather than as the platform feature, translate for sense instead. |
| concept (learning unit) | pojam | hr | Concept Library = `Zbirka pojmova`. Not `koncept`. |
| scenario | scenarij | hr | Croatian spelling; never `scenario`. |
| curriculum | kurikulum | hr | |
| tutorial | vodič | hr | |
| challenge (platform feature) | izazov | hr | |

### App & product UI

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| plan (subscription tier) | paket | hr | `plan pretplate` as the unambiguous long form. Not `plan` alone. |
| subscription | pretplata | hr | |
| dashboard | Naslovnica | hr | Deliberately not `nadzorna ploča`, which would put `ploča` on both the dashboard and the whiteboard metaphor. |
| badge | značka | hr | |
| achievements | postignuća | hr | Reserved for this feature, which is why `milestone` is `etapa`. |
| account | korisnički račun | hr | |
| sign in / sign up | Prijava / Registracija | hr | Keep these two apart: `Prijavi se` can read as either, so never use it for both. |
| button / tab / menu | gumb / kartica / izbornik | hr | `tipka` is a physical or keyboard key only. |
| Run Code (button) | Pokreni kôd | hr | Must match between exercise instructions and the app catalog. |
| session (auth) | sesija | hr | Not `sjednica`. |
| cookies | kolačići | hr | |
| settings | postavke | hr | |

### Colours & graphics

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| hue | nijansa | hr | |
| saturation | zasićenje | hr | Not `saturacija`. |
| lightness | osvijetljenost | hr | Kept distinct from `svjetlina` (brightness). |
| brightness | svjetlina | hr | The casual "how bright" sense; not the HSL channel. |
| colour wheel | krug boja | hr | |
| slider (UI control) | klizač | hr | |
| frame (animation) | sličica | hr | `kadar` is the film sense and is wrong here. |
| canvas (graphics exercises) | platno | hr | The drawing-surface sense. The HTML `<canvas>` element name stays English. |
| radius | polumjer | hr | Use one rendering for both the horizontal and the vertical radius. |
| circle | krug / kružnica | hr | `krug` is the filled disc, `kružnica` the outline. A drawing exercise must honour the difference. |
| horizontal / vertical | vodoravno / okomito | hr | Better for beginners than `horizontalno`/`vertikalno`. |

### Exercise scenario vocabulary

Terms that belong to an exercise's story rather than to programming itself.

| English | Croatian | Use (hr/en) | Notes |
|---------|----------|-------------|-------|
| maze | labirint | hr | Masculine. Never `lavirint`. |
| dead end (maze) | slijepa ulica | hr | `slijepi hodnik` inside a corridor maze. Never `ćorsokak`. |
| alien (creature) | izvanzemaljac | hr | Never `vanzemaljac`: Croatian takes the `izvan-` prefix. Does not read as "foreigner", which is `stranac`. |
| traffic light (the whole device) | semafor | hr | |
| light (one coloured lamp) | svjetlo | hr | `crveno / žuto / zeleno svjetlo`. Croatian says `žuto`, never `narančasto`, for the middle light. |
| bouncer | izbacivač | hr | Including in exercise titles. `zaštitar` is what Croatians more often say in real life; keep it for running prose where the security-guard sense fits better. |
| skyscraper | neboder | hr | |
| skyline / cityscape | silueta grada | hr | Croatian has no one-word equivalent; do not coin one. |
| dress code | pravila odijevanja | hr | |
| ballgown | balska haljina | hr | The English value stays as-is in code; use the Croatian in prose. |
| tuxedo | smoking | hr | Masculine. Never `tuksedo`. |
| suit | odijelo | hr | |
| dress | haljina | hr | |
| denim | traper | hr | `traperice` for jeans. Never `džins`. |
| pangram | pangram | hr | Gloss where the source introduces it as `rečenica koja sadrži sva slova abecede`. Croatian uses *abeceda*, never *azbuka*. |

## Keep in English

These stay in English in Croatian prose, with the Croatian gloss to use for each.

| Term | Croatian gloss (on `<define>`) | Notes |
|------|--------------------------------|-------|
| string | _niz znakova_ | Exception: the string concept itself uses `niz znakova` where the source defines it, then `string` throughout. Masculine; declines normally (`stringa`, `u stringu`). |
| Boolean | _logička vrijednost_ | The type name is `logički tip`. Where the source defines it, gloss it, then use `Boolean`. |
| API | explain the concept in Croatian | Explain what an API does, not just the letters. Inflects with a hyphen: `API-ja`, `API-jem`. |
| CLI (the concept) | _naredbeni redak_ | Never `komandna linija`. |
| framework | _programski okvir_ | No settled Croatian word; Croatian tech writing keeps `framework`. |
| component | _komponenta_ | Use `komponenta` freely. |
| module | _modul_ | |
| AI | _umjetna inteligencija_ | Use `AI` as the short form, never `UI`, which collides with user interface. Inflects `AI-a`. |
| LLM | explain in Croatian | `veliki jezični model`. Inflects `LLM-a`. |
| bug | (no gloss) | Genuinely the ordinary word in Croatian tech writing. |
| widget, chat | (no gloss) | `programčić` exists in dictionaries and not in real use. |
| bootcamp | (no gloss) | Kept English in Croatian tech-education copy. |
| Debug, Test | (no gloss) | As keywords and UI tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | As UI labels and code tokens. The ordinary noun in prose follows the `kôd` row above. |
| RGB, HSL | (no gloss) | Explain what the letters stand for in Croatian where the source does; the acronyms stay English. |
| JavaScript, Python, React | (no gloss) | Decline directly, with no hyphen: `Pythona`, `u Reactu`. |
| Variable and function names | (no gloss) | The identifiers themselves are never translated. Where the phrase itself appears in prose, it is `varijable i nazivi funkcija`. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | Never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Croatian rendering | Notes |
|-------------------|--------------------|-------|
| box (value container) | kutija | Feminine. `kutijica` where a warmer diminutive helps. |
| chain (array metaphor) | lanac | Masculine (genitive `lanca`, plural `lanci`). One link is a **`karika`**, never `alka`. Used as the teaching image alongside the technical `polje`. |
| machine (function metaphor) | stroj | Masculine. **Never `mašina`**, which is marked regional and Serbian. `strojić` is the natural diminutive for one of Jikijevih malih strojeva. |
| input slot | prorez | Masculine. The everyday word for the slot you drop a coin into. Never `utor`, which is the hardware expansion-slot term. |
| return chute | izlazni otvor | Masculine. Pairs with `prorez`. Never `klizište`, which means a landslide. |
| crank (machine crank) | ručica | Feminine. Jiki `okreće ručicu` to power a machine up. Not `kurbla` (dated) and not `poluga` (a lever). |
| shelves (storage) | polica | Feminine, plural `police`. Jikijevi strojevi stoje na polici. |
| warehouse (Jiki's warehouse) | skladište | Neuter. `Jikijevo skladište`. |
| workshop (Jiki's workshop) | radionica | Feminine. `Jikijeva radionica`. |
| board / whiteboard | ploča | Feminine. **One object, one word:** the board the learner writes instructions on for Jiki to follow, and the board a function keeps its own notes on, are the same `ploča`. Keep it strictly for the writing surface, since `matična ploča` is a motherboard. |
| piece of paper (string metaphor) | papirić | Masculine. `list papira` in more explanatory register. |
| coin (number metaphor) | novčić | Masculine. Not `kovanica`, which is numismatic. |
| label (on a box/machine) | naljepnica | Feminine. `natpis` where Jiki writes directly on the box. **Avoid `oznaka`**, the standard word for a code label or identifier. |
| spiral notebook page (dictionary metaphor) | bilježnica na spiralu | Feminine. One page is `stranica bilježnice`. |
| mini-Jiki | mali Jiki | Plural `mali Jikiji`. **Never `Jikić`**, which reads as a surname. |
| character (game/maze figure) | lik | Masculine. Free of collision, because a text character is `znak`, not `karakter`. |

## Brackets

| Glyph | Croatian | Notes |
|-------|----------|-------|
| `()` | oble zagrade | Plain `zagrade` by default; name the type only when disambiguating. |
| `[]` | uglate zagrade | |
| `{}` | vitičaste zagrade | |
| `<>` | šiljaste zagrade | |

`&`, `\|` and the backtick have no agreed Croatian name: Croatian technical writing prints the glyph rather than naming it. On a `<define>`, show the glyph itself. How to phrase a bracket in running prose is in `guide.md`.
