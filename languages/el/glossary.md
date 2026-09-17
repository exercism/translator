# Greek (el) glossary

The agreed term list for Greek. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| programming / coding | **προγραμματισμός** | el | Use consistently. "coding" occasionally appears as a casual English loanword; do not mix it in with `προγραμματισμός` in one document. |
| developer | **προγραμματιστής** | el | English "developer" also appears in job titles/marketing but does not displace this in prose. |

## Localize (use the Greek term)

These are terms where the Greek is used in prose, so the "Use (el/en)" column is `el` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| true / false | αληθής / ψευδής | el | Not capitalised in prose. |
| string | συμβολοσειρά | el | Not the school curriculum's `αλφαριθμητικό`. |
| array | πίνακας | el | **Never confuse with `board / whiteboard` in the metaphors table below**, which is always `ασπροπίνακας`, never bare `πίνακας`. |
| list | λίστα | el | Used where the source itself distinguishes "list" from "array". |
| index | θέση | el | Not `δείκτης`, which is reserved for "pointer", a different concept in Greek CS. |
| variable | **μεταβλητή** (feminine) | el | Unconfirmed draft (agent, 2026-07-31). Central teaching concept; subject of the "box" metaphor. |
| equal sign | **σύμβολο ίσον** | el | Unconfirmed draft (agent, 2026-07-31). Prose gloss for the `=` token when introduced conceptually. |
| value (general sense) | **τιμή** / plural **τιμές** | el | Unconfirmed draft (agent, 2026-07-31). Distinct from `return value` → `τιμή επιστροφής` above: this row is the general, non-return sense. |

### Functions & control flow

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| if statement | εντολή `if` | el | Keep `if` in backticks (real keyword) + `εντολή`, matching `for` βρόχος below. Not the school-curriculum term `δομή επιλογής`. |
| statement (executable) | εντολή | el | The imperative sense: a line of code that does something and gets executed. Shares the word with `instruction (given to Jiki)` below. |
| statement (logical claim) | πρόταση | el | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. |
| function | συνάρτηση | el | The *keyword* `function` in code stays English; the concept in prose is `συνάρτηση`. |
| parameter | παράμετρος | el | The declaration-site name. |
| argument | όρισμα | el | The call-site value. |
| return value | τιμή επιστροφής | el | Keep distinct from the verb above. |
| brackets (the two after a function name) | παρενθέσεις | el | Greek names each bracket shape separately (see the Brackets table), so the rendering must say which: the pair written after a function name is always `παρενθέσεις`, e.g. `αυτές τις δύο παρενθέσεις`. Never the generic `αγκύλες`, which is `[]`. |

### Loops, state & program flow

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| keyword | λέξη-κλειδί | el | Not `δεσμευμένη λέξη`. |
| interpreter | διερμηνευτής | el | A **person** who interprets, which is what the term means here (Jiki is the interpreter, and it is "his job to interpret"). Never `διερμηνευτικό πρόγραμμα` or any `-πρόγραμμα`/device compound: those name a tool, so they cannot name Jiki. |
| instruction (given to Jiki) | εντολή | el | The everyday Greek word for something you tell someone to do; the same word as `statement (executable)` above. |
| (programming) language | γλώσσα προγραμματισμού | el | Shorten to bare `γλώσσα` once context is established, including in the "a language a computer understands" framing. Never the English "language". |
| code block | μπλοκ κώδικα | el | |
| exception | εξαίρεση | el | Keep distinct from `σφάλμα` (error), the general term. |
| to throw / raise an error | **πετάει ένα σφάλμα** | el | Not `δίνει ένα σφάλμα` ("gives an error"), which is unidiomatic. `αναφέρει ένα σφάλμα` ("reports") is an acceptable alternative where the source itself says "reports". **Never `κάνει ένα σφάλμα`**, which is what a *person* does when they make a mistake, not what software does. |
| iteration | επανάληψη | el | Same word covers "loop" as a general concept; context disambiguates. |
| loop | βρόχος | el | The general "repetition" concept is `επανάληψη`; keep `βρόχος` for the loop construct itself. |
| for loop | `for` βρόχος | el | Keep `for` in backticks (real keyword) + `βρόχος`. |
| while loop | `while` βρόχος | el | As above. |
| nested loop(s) | εμφωλευμένος βρόχος / εμφωλευμένοι βρόχοι | el | The CS-standard word, as used in Greek programming courses and textbooks. **Never `φωλιασμένος/-η/-ο`**, which is the colloquial, spatial "nested" (a bird's nest, a place tucked into a landscape) and is wrong for this sense. Applies to anything nested in code, not just loops: `εμφωλευμένη εντολή if`, `εμφωλευμένος κώδικας`. |
| Nested Loop (concept / heading) | Εμφωλευμένη Επανάληψη | el | The title-case form for the concept and its headings, built on `επανάληψη` (the repetition concept) rather than `βρόχος`. |
| class | κλάση | el | Not the older, more generic `τάξη`. |

### Platform & curriculum

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| course | μάθημα | el | The whole Jiki course (e.g. "σε αυτό το μάθημα"). Not `σειρά μαθημάτων`. See `lesson` below for the collision this avoids. |
| lesson | ενότητα | el | One lesson inside the course. Not `μάθημα`, which is `course` above. |

### Tooling & engineering

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| CLI (the concept) | γραμμή εντολών | el | Where the source `<define>`s it, explain the concept, not just gloss the term. `τερματικό` (terminal) is the common colloquial synonym once the concept is established. |

### General vocabulary

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| vs (versus, between two choices/scenarios) | **εναντίον** | el | Unconfirmed draft (agent, 2026-07-31). From the rock-paper-scissors exercise. |
| golf tee | **πάσσαλος του γκολφ** | el | Confirmed by a native speaker (astyanax, 2026-08-03). Never left as bare English `tee`. `γκολφ` is transliterated here, matching `μπάλα γκολφ` in the same content. |
| meridiem (the `am`/`pm` indicator) | **ένδειξη μεσημβρίας** | el | Confirmed by a native speaker (astyanax, 2026-08-03). Never left as bare English `meridiem` in prose. Inflect the head noun and keep `μεσημβρίας` fixed in the genitive: `τη σωστή ένδειξη μεσημβρίας`, never `τη σωστή μεσημβρία`. The code identifier `meridiem` (in `displayTime(hour, minutes, meridiem)`) and the catalog key of the same name stay English. |
| infiltration | **παρείσφρηση** | el | Confirmed by a native speaker (astyanax, 2026-08-07). Never `διείσδυση`, which carries an unwanted sexual innuendo. Feminine noun, same gender pattern as `διείσδυση` (`η παρείσφρηση`). |
| record (a data record) | **καταγραφή** | el | Not `αρχείο`, which reads as "a file". Feminine noun (`μία καταγραφή`). |

### Drawing & color (exercise family)

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| hue | **απόχρωση** | el | Unconfirmed draft (agent, 2026-07-31). Color-model term; recurs across the "draw" exercise family. |
| saturation | **κορεσμός** | el | Unconfirmed draft (agent, 2026-07-31). |
| lightness | **φωτεινότητα** | el | Unconfirmed draft (agent, 2026-07-31). |
| bar (vertical drawing unit, e.g. a rainbow bar) | **ράβδος** | el | Unconfirmed draft (agent, 2026-07-31). Chosen over `γραμμή` specifically to avoid collision with the existing `line()` shape/describer, which is already glossaried as `γραμμή`. |
| hardcode (verb) / hardcoded value | **καρφωτή τιμή** / plural **καρφωτές τιμές** | el | Confirmed by a native speaker (astyanax, 2026-08-04). Never the loanword `hardcode`/`hard-code`, and never `σκληροκωδικοποιημένος`. Verb sense renders as "βάζω καρφωτή τιμή". |

## Keep in English

These stay in English in prose: the English word is what Greek developers actually say, so
it is the ordinary word here.

| Term | Greek gloss (on `<define>`) | Notes |
|------|-----------------------------|-------|
| Boolean | _λογική τιμή_ | Unconfirmed draft (agent, 2026-07-31). English "Boolean" stays primary in prose with the Greek gloss in brackets, mirroring how the Hungarian sibling page handles it. |
| API | explain what it is in Greek (e.g. "Διεπαφή Προγραμματισμού Εφαρμογών") | Where defined, explain the concept, not just gloss the acronym. |
| framework | _πλαίσιο εργασίας_ | |
| component | _συστατικό_ | |
| deploy (verb) | explain as "ανάπτυξη σε παραγωγικό περιβάλλον" | The verb inflects around the English word ("κάνω deploy"). Low confidence; revisit with native-speaker feedback. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | **Bug is the one exception:** at its first mention across the Greek curriculum (the `while` loops concept page) it is written `bugs (λογικά σφάλματα)`, so a beginner meets the meaning once. Every other mention, on that page and every other, is bare English. |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |
| `let` (the JavaScript keyword) | _έστω_ | Confirmed by a native speaker (astyanax, 2026-07-31). The one exception to the row above: gloss it **once**, where the keyword is first introduced, as `` `let` (έστω) ``, borrowing the standard Greek mathematical "let" ("έστω x = 10"). Every later mention is bare `let`. |
| backtick / backticks | _βαρεία_ / plural _βαρείες_ | Confirmed by a native speaker (astyanax, 2026-08-13). The English word stays in prose (`backticks`), with the Greek term in brackets at its first mention on a page: `backticks (βαρείες)`, matching the `if`/`for` pattern of keeping the real token beside its Greek word. **Never `ανάποδα τικ`**, which is not Greek: `βαρεία` is the proper name of the mark, a `τόνος` / `διακριτικό σημείο`. Feminine noun (`η βαρεία`, `οι βαρείες`). |

## Jiki physical metaphors

Load-bearing teaching terms. Use exactly the agreed rendering; never substitute dry technical language.

| English metaphor | Greek rendering | Notes |
|-------------------|------------------|-------|
| box (value container) | κουτί | |
| chain (array metaphor) | αλυσίδα | |
| machine (function metaphor) | μηχανή | |
| input slot | θυρίδα | Not the more generic/technical `υποδοχή`. |
| return chute | τσουλήθρα | |
| shelves (storage) | ράφια | |
| warehouse (Jiki's warehouse) | αποθήκη | Where Jiki hangs out and keeps his machine shelf. |
| crank (machine crank) | μανιβέλα | Not the technical `στρόφαλο`. Jiki `γυρίζει τη μανιβέλα`. |
| board / whiteboard | ασπροπίνακας | **One word for one object**: both the board the learner puts instructions on for Jiki to follow, and the board a function keeps its own notes on. **Never bare `πίνακας`**, which is the agreed term for `array` and would collide with it, so the qualified `ασπροπίνακας` is compulsory here. Do not alternate with `λευκός πίνακας`. |

## Brackets

| Glyph | Greek | Notes |
|-------|-------|-------|
| `()` | παρένθεση | Plural `παρενθέσεις`; see `brackets (the two after a function name)` above. |
| `[]` | αγκύλη | |
| `{}` | άγκιστρο | |
| `<>` | γωνιακή αγκύλη | |

How to phrase a bracket in running prose is in `guide.md`.
