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
| variable | **μεταβλητή** (feminine) | el | Confirmed by a native speaker (VaiaPatta1985, 2026-09-26). Central teaching concept; subject of the "box" metaphor. |
| equal sign | **σύμβολο ίσον** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-09-26). Prose gloss for the `=` token when introduced conceptually. Write the full phrase: bare `ίσον` is the colloquial, spoken form. |
| value (general sense) | **τιμή** / plural **τιμές** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-09-26). Distinct from `return value` → `τιμή επιστροφής` above: this row is the general, non-return sense. |

### Functions & control flow

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| if statement | εντολή `if` | el | Keep `if` in backticks (real keyword) after `εντολή`, matching βρόχος `for` below. Not the school-curriculum term `δομή επιλογής`. |
| statement (executable) | εντολή | el | The imperative sense: a line of code that does something and gets executed. It is the ordinary word for a single thing someone is told to do as well. |
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
| interpreter | διερμηνευτής | el | The program that runs the code. Never the heavier `διερμηνευτικό πρόγραμμα`. |
| (programming) language | γλώσσα προγραμματισμού | el | Shorten to bare `γλώσσα` once context is established, including in the "a language a computer understands" framing. Never the English "language". |
| code block | μπλοκ κώδικα | el | |
| code (source code, what the learner writes) | **κώδικας** (masculine) | el | Confirmed by a native speaker (VaiaPatta1985, 2026-09-26). Always translated in prose, never left as English "code": `ο κώδικάς σου`, `γράψε κώδικα`, `γραμμές κώδικα`. Keep distinct from `κωδικός`, which is a password (`κωδικός πρόσβασης`) or an identifying code (a country, error, status or exit code). |
| exception | εξαίρεση | el | Keep distinct from `σφάλμα` (error), the general term. |
| to throw / raise an error | **πετάει ένα σφάλμα** | el | Not `δίνει ένα σφάλμα` ("gives an error"), which is unidiomatic. `αναφέρει ένα σφάλμα` ("reports") is an acceptable alternative where the source itself says "reports". **Never `κάνει ένα σφάλμα`**, which is what a *person* does when they make a mistake, not what software does. |
| iteration | επανάληψη | el | Same word covers "loop" as a general concept; context disambiguates. |
| loop | βρόχος | el | The general "repetition" concept is `επανάληψη`; keep `βρόχος` for the loop construct itself. |
| for loop | **βρόχος `for`** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-09-26). The Greek noun comes first and the keyword follows it in backticks, inflecting only `βρόχος`: ο βρόχος `for`, τον βρόχο `for`, του βρόχου `for`, οι βρόχοι `for`. Never "`for` βρόχος". |
| while loop | **βρόχος `while`** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-09-26). Same word order as `for loop` above: ο βρόχος `while`, οι βρόχοι `while`. Never "`while` βρόχος". |
| nested loop(s) | εμφωλευμένος βρόχος / εμφωλευμένοι βρόχοι | el | The CS-standard word, as used in Greek programming courses and textbooks. **Never `φωλιασμένος/-η/-ο`**, which is the colloquial, spatial "nested" (a bird's nest, a place tucked into a landscape) and is wrong for this sense. Applies to anything nested in code, not just loops: `εμφωλευμένη εντολή if`, `εμφωλευμένος κώδικας`. |
| Nested Loop (concept / heading) | Εμφωλευμένη Επανάληψη | el | The title-case form for the concept and its headings, built on `επανάληψη` (the repetition concept) rather than `βρόχος`. |
| class | κλάση | el | Not the older, more generic `τάξη`. |

### Platform & curriculum

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| course | μάθημα | el | The whole course (e.g. "σε αυτό το μάθημα"). Not `σειρά μαθημάτων`. See `lesson` below for the collision this avoids. |
| lesson | ενότητα | el | One lesson inside the course. Not `μάθημα`, which is `course` above. |
| progress bar | **μπάρα προόδου** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-09-26). Use it for a bar on the website or on screen that shows progress (plural `μπάρες προόδου`). Never `γραμμή προόδου` or `ράβδος προόδου`. A bar in a chart or a drawing is `ράβδος` (see `bar` below). |
| syllabus | **διδακτική ύλη** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). Bare `ύλη` is acceptable where space is short, e.g. breadcrumbs. |
| to join (a track) | **εγγράφομαι** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). Same verb as signing up for an account; that overlap is acceptable. |
| exercise | **άσκηση** (feminine) | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| practice exercise | **άσκηση εξάσκησης** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| learning mode / practice mode | **λειτουργία εκμάθησης** / **λειτουργία εξάσκησης** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| locked / unlocked / available / in progress / completed (exercise state) | **κλειδωμένη** / **ξεκλείδωτη** / **διαθέσιμη** / **σε εξέλιξη** / **ολοκληρωμένη** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). Feminine, agreeing with `άσκηση`. |
| to unlock | **ξεκλειδώνω** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| solution | **λύση** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| to submit | **υποβάλλω** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| to publish (a solution) / published | **δημοσιεύω** / **δημοσιευμένη** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). Feminine, agreeing with `λύση`. |
| community solutions | **λύσεις κοινότητας** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| to star / stars | **βάζω αστεράκι** / **αστεράκι** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). There is no single verb; use the phrase. |
| student (the person being mentored) | **μαθητής** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| code review | **επισκόπηση κώδικα** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| testimonial (left for a mentor) | **μαρτυρία** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| analyzer | **αναλυτής** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| representation | **αναπαράσταση** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). Exercism's sense is data (a solution's representation), not the "person who represents" sense; see `representer`, still open. |
| test runner | **εκτελεστής τεστ** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). Makes `τεστ` the word for a test; pairs with the row below. |
| tests passed / tests failed | **τα τεστ πέρασαν** / **τα τεστ κόπηκαν** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| online editor / the editor | **επεξεργαστής online** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| the Exercism CLI | **το CLI του Exercism** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). Keep distinct from the concept row `CLI (the concept)` → `γραμμή εντολών` above. |
| reputation | **φήμη** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| badge | **μετάλλιο** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). Avoids `σήμα`, which programming content uses for "signal". Keep distinct from `trophy`. |
| trophy | **τρόπαιο** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). Keep distinct from `badge`. |
| maintainer | **συντηρητής** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| donation / to donate / donor | **δωρεά** / **δωρίζω** / **δωρητής** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). `κάνω δωρεά` is acceptable for "donate". |
| perks | **προνόμια** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| approach (to an exercise) | **προσέγγιση** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| article (on an exercise) | **άρθρο** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| deep dive (video) | **εμβάθυνση** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| challenge (community event) | **πρόκληση** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| community | **κοινότητα** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| notification | **ειδοποίηση** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| handle (username) | **όνομα χρήστη** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| automation (feedback on representations) | **αυτοματοποίηση** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). |
| difficulty: easy / medium / hard | **δυσκολία: εύκολη / μέση / δύσκολη** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-10-07). The "medium" rendering is still being checked against the live site's `μέτρια`; see `glossary-notes.md`. |

### Tooling & engineering

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| CLI (the concept) | γραμμή εντολών | el | Where the English itself explains the term, explain the concept, not just gloss the term. `τερματικό` (terminal) is the common colloquial synonym once the concept is established. |

### General vocabulary

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| vs (versus, between two choices) | **έναντι** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-09-26). Use `έναντι` when two options are compared or chosen between ("Ruby έναντι Python", "πίνακες έναντι λιστών"). Use `εναντίον` only when one side plays or fights against the other (a match, a game, a contest). `έναντι` does not inflect. |
| meridiem (the `am`/`pm` indicator) | **ένδειξη μεσημβρίας** | el | Confirmed by a native speaker (astyanax, 2026-08-03). Never left as bare English `meridiem` in prose. Inflect the head noun and keep `μεσημβρίας` fixed in the genitive: `τη σωστή ένδειξη μεσημβρίας`, never `τη σωστή μεσημβρία`. The code identifier `meridiem` (in `displayTime(hour, minutes, meridiem)`) and the catalog key of the same name stay English. |
| infiltration | **παρείσφρηση** | el | Confirmed by a native speaker (astyanax, 2026-08-07). Never `διείσδυση`, which carries an unwanted sexual innuendo. Feminine noun, same gender pattern as `διείσδυση` (`η παρείσφρηση`). |
| record (a data record) | **καταγραφή** | el | Not `αρχείο`, which reads as "a file". Feminine noun (`μία καταγραφή`). |

### Drawing & color (exercise family)

| English | Greek | Use (el/en) | Notes |
|---------|-------|-------------|-------|
| hue | **απόχρωση** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-09-26). Color-model term; recurs across the "draw" exercise family. |
| saturation | **κορεσμός** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-09-26). |
| lightness | **φωτεινότητα** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-09-26). |
| bar (vertical drawing unit, e.g. a rainbow bar) | **ράβδος** | el | Confirmed by a native speaker (VaiaPatta1985, 2026-09-26). This row covers a bar in a chart or a drawing (a bar graph's bar). Other kinds of bar are not covered by it, and may take `στήλη` or `μπάρα`. Chosen over `γραμμή` specifically to avoid collision with the `line()` shape, which is already glossaried as `γραμμή`. |
| hardcode (verb) / hardcoded value | **καρφωτή τιμή** / plural **καρφωτές τιμές** | el | Confirmed by a native speaker (astyanax, 2026-08-04). Never the loanword `hardcode`/`hard-code`, and never `σκληροκωδικοποιημένος`. Verb sense renders as "βάζω καρφωτή τιμή". |

## Keep in English

These stay in English in prose: the English word is what Greek developers actually say, so
it is the ordinary word here.

| Term | Greek word, where the English explains the term | Notes |
|------|-----------------------------|-------|
| Boolean | _λογική τιμή_ | Unconfirmed draft (agent, 2026-07-31). English "Boolean" stays primary in prose with the Greek gloss in brackets, mirroring how the Hungarian sibling page handles it. |
| API | explain what it is in Greek (e.g. "Διεπαφή Προγραμματισμού Εφαρμογών") | Where defined, explain the concept, not just gloss the acronym. |
| framework | _πλαίσιο εργασίας_ | |
| component | _συστατικό_ | |
| deploy (verb) | explain as "ανάπτυξη σε παραγωγικό περιβάλλον" | The verb inflects around the English word ("κάνω deploy"). Low confidence; revisit with native-speaker feedback. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | `Code` here covers only a literal interface label or a name written in Latin script. In prose, code is `κώδικας` (see `code` under "Loops, state & program flow"). **Bug is the one exception:** at its first mention across the Greek curriculum (the `while` loops concept page) it is written `bugs (λογικά σφάλματα)`, so a beginner meets the meaning once. Every other mention, on that page and every other, is bare English. |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Programming keywords (`function`, `if`, `for`, ...) | (none) | Always English, including inside prose. Translate only the surrounding explanation. |
| `let` (the JavaScript keyword) | _έστω_ | Confirmed by a native speaker (astyanax, 2026-07-31). The one exception to the row above: gloss it **once**, where the keyword is first introduced, as `` `let` (έστω) ``, borrowing the standard Greek mathematical "let" ("έστω x = 10"). Every later mention is bare `let`. |
| backtick / backticks | _βαρεία_ / plural _βαρείες_ | Confirmed by a native speaker (astyanax, 2026-08-13). The English word stays in prose (`backticks`), with the Greek term in brackets at its first mention on a page: `backticks (βαρείες)`, matching the `if`/`for` pattern of keeping the real token beside its Greek word. **Never `ανάποδα τικ`**, which is not Greek: `βαρεία` is the proper name of the mark, a `τόνος` / `διακριτικό σημείο`. Feminine noun (`η βαρεία`, `οι βαρείες`). |

## Brackets

| Glyph | Greek | Notes |
|-------|-------|-------|
| `()` | παρένθεση | Plural `παρενθέσεις`; see `brackets (the two after a function name)` above. |
| `[]` | αγκύλη | |
| `{}` | άγκιστρο | |
| `<>` | γωνιακή αγκύλη | |

How to phrase a bracket in running prose is in `guide.md`.

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks Greek has agreed any row in this section, and no rendering has been
proposed.** These are the nouns Exercism's own product vocabulary is built from, and they are
the rows we most need a native speaker to fill in, because each one appears on hundreds of
pages. The target column is deliberately empty: an agent's invented rendering sitting in a
glossary reads as an agreed one, and these terms are too visible for that. Fill them in on the
pinned glossary thread, and a row moves into an agreed section once a native speaker has
settled it, recorded in `glossary-notes.md`. `global/terms.md` describes what each term means
on Exercism.

Still open, awaiting another round with VaiaPatta1985 (and astyanax where noted); see
`glossary-notes.md` for why each one is held back.

| English | Proposed Greek | Use (el/en) | Notes |
|---------|------------------|------------------|-------|
| track |  |  |  |
| concept exercise / learning exercise |  |  |  |
| mentor / mentoring |  |  |  |
| mentoring request |  |  |  |
| mentoring session / discussion |  |  |  |
| mentoring queue |  |  |  |
| supermentor |  |  |  |
| automated feedback |  |  |  |
| representer |  |  |  |
| journey (the user's history page) |  |  |  |
| contributor / contributing |  |  |  |
| Insiders |  |  |  |
| partner |  |  |  |
| flair (marker beside a username) |  |  |  |
| Dig Deeper (tab) |  |  |  |
| cohort |  |  |  |
| favorites |  |  |  |
