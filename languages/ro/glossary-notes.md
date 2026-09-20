# Romanian (ro) glossary notes

The decision log behind `glossary.md`. Two rules bind every pass that reads it:

1. **A pass that changes the glossary reads this file first, and appends an entry after.** If an entry below records a **human** deciding a term, it is settled: it changes only by fresh agreement with a human, raised where it was settled. If nothing here mentions the term, it is an **unconfirmed draft**, and a pass may correct it provided it appends an entry saying what it changed and why.
2. **A translation pass never loads this file.** It loads `glossary.md` and needs the term, not the argument that produced it.

## 2026-09-20: Adapted for Exercism (agent; nothing here is a native speaker's decision)

This glossary was forked from Jiki's Romanian glossary when Exercism's translator repo was
created. Exercism and Jiki are separate products, and this glossary is Exercism's from here
on. Everything that was about Jiki's own product (its courses, its exercise stories, its
characters and physical metaphors) went with the fork; every decision about the Romanian
language itself was kept, including the ones a native speaker made. Where a native speaker had
settled one of the removed terms, the decision is recorded below as retired rather than
deleted.

**Added: `Exercism product vocabulary: PROPOSED, NOT YET AGREED`.** The English terms the
product's own nouns are built from, with the target column left empty. Nobody who speaks
Romanian has been asked yet, and an agent's invented rendering would read as an agreed one.

### Retired with the fork, with the decision recorded

These rows named things Exercism does not have, so the rows are gone. The renderings are
kept here because the reasoning still stands if any of these words is ever needed again.

- `scenario` → scenariu.
- `track (a curriculum path, a different thing from Exercism's track)` → traseu. Keep
  distinct from `parcurs` (pathway) below.
- `pathway` → parcurs. Keep distinct from `traseu` (track) above.
- `Learn to Code (a strand name)` → Învață să programezi. Descriptive strand names are
  translated.
- `Learn to Build (a strand name)` → Învață să construiești. Descriptive strand names
  are translated.

## 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout), run as a single fable
worker per `orchestrator.md`'s one-worker-per-scope rule. Logged here for review, not
written to `glossary.md`.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| challenge | provocare | | high |
| hint | indiciu | | high |
| streak | serie | | medium |
| badge | insignă | Not _ecuson_. | medium |
| milestone | etapă | | medium |
| Log (panel) | jurnal | | medium |
| upgrade to Premium | a trece la Premium | | medium |
| fun fact | curiozitate | | medium |
| scrubber | bara de derulare | | low |

"era of Agentic Coding" rendered "era agenților AI" since "programare agentică" isn't
established Romanian; wants a native check.

Flags, not glossary rows: shared "Locked"/"Completed" labels were rendered feminine to agree
with _lecție_/_provocare_/_noțiune_ — a latent FE bug if those keys get reused for a
masculine referent (an exercise); that's a split-key change on Aron's side, not a
translation fix. Two layout risks: "Panou de control" in the narrow nav slot
(`codingExercise.rhs.navDashboard`), and "Sesiuni live de întrebări și răspunsuri" in the
premium feature list.

## 2026-08-01: `guide.md` slimmed, product names moved to the glossary, closing quote fixed

**Decided by:** agent, on the owner's (iHiD) instruction to strip research provenance and rationale from `guide.md`. **Status: no term decision was overturned**; the two changes to `glossary.md` are additive rows, and the one typographic ruling below is an **unconfirmed draft**.

**Terms affected:** the product and strand name rows, all retired with the fork.

**Moved out of the guide into `glossary.md`.** The guide's "Product and strand names" section was a term decision living in prose (the owner decision applied in every language): descriptive strand names are translated („Învață să programezi”, „Învață să construiești”), coined and branded names stay English. The renderings were carried across verbatim, as two rows under "Platform & curriculum vocabulary" and one under "Keep in English", and the section was deleted from the guide.

**Closing quotation mark corrected in the guide's own examples.** The guide's rule already said „...” (U+201E opening, U+201D closing) and „never the ASCII `"`”, but every one of its 113 examples closed with an ASCII `"`, so the file contradicted itself and taught the wrong glyph by demonstration. All closings in `guide.md` are now U+201D, and the rule gained an explicit "never a straight closing quote after an opening „". This matches what the two published Romanian files do (`maze-solve-basic` closes correctly), and it is the SR 13392:2004 pairing. It is an unconfirmed draft only in the sense that no native speaker has been asked; the standard is not in doubt. Two places still carry the old ASCII closing and should be swept separately: the note fields in `glossary.md`/this file, and `concepts/using-functions/ro.md` in the front-end repo, where the published sentence „Dacă se întâmplă asta, atunci trebuie să fac asta" ends on a straight quote.

**Cut from the guide as provenance or rationale** (kept here so it is not lost):

- **Audience.** Readers are in Romania and Moldova plus Romanian speakers abroad; the written standard is the same for all of them, which is why the guide needs no regional variant. Romanian school and university informatics already teach the core vocabulary (variabilă, funcție, tablou, șir de caractere), so any reader who has met programming has met these words. Where that academic register clashes with how people write online, the glossary picks the everyday word (see the register discussion in the bootstrap entry below).
- **Why "tu", not a close call.** The Romanian Mozilla localization team changed its own policy to enforce personal address („s-a decis de ceva timp folosirea exclusivă a adresării personale”), and it is what every modern Romanian learning platform uses. „dumneavoastră” reads cold and distant in teaching prose.
- **Why the negative-imperative rule earns a place at all:** the imperative form („Nu uită”) is the single most common tell of machine-translated Romanian.
- **Diacritics.** The cedilla forms ş ţ are Turkish letters that entered Romanian text through old codepages; the Romanian localization community treats them as a hard error („Traducerile folosind caractere cu sedilă dedesubt nu sunt corecte”, SR 13392:2004). Stripping diacritics entirely is an SMS convention, not something serious writing does.
- **â/î spelling** follows the Academia Română 1993 ruling; the loanword article rules („stringul” vs „site-ul”) follow DOOM, and getting them wrong is very visible to a Romanian reader.
- **Why `engl.`** is the marker word: it is the notation Romanian dictionaries use for English etymons, so it reads as a normal editorial convention rather than an aside.
- **Why the reflexive passive** („codul se execută”) is preferred: „este executat” is a direct calque of the English passive.

**Deleted from the guide as duplicates**, with nothing salvaged because the content already lives elsewhere: the "Worked examples" tail restated `global/voice.md` on titles, headlines and calls to action with generic Romanian examples; its acronym examples (API, CLI) restated the two "Keep in English" glossary rows verbatim; and its "natural phrasing" examples restated the Formality section's hortative and informal-imperative rules. The one thing those examples taught that the rules did not, the formal „Instalați Node.js” as an explicit counter-example, was folded into the Formality section. Also dropped: three lane-marker sentences pointing at `global/voice.md`, and the "Owner decision, the same rule as every other language" framing on the product-names section.

## 2026-07-31: `if statement` is `condiție` (native speaker)

**Decided by:** @florin-cuculeac (Florin Cuculeac), native speaker, on the pinned Romanian glossary thread ([post 4 of topic 825]); approved for action by the owner (iHiD). **Status: human-decided, so this row is settled** and changes only by fresh agreement with a human, raised on that thread.

**Terms affected:** `if statement` (previously `instrucțiune if`).

Florin's words: „Not ok in Romanian, use instead 'condiție', the word 'instrucțiune' means more like statement in english." That is precisely the problem with the old rendering: this glossary already spends `instrucțiune` on "statement (executable)" and on "instruction", so using it for the `if` construct as well made one ordinary word carry three jobs. `condiție` names the thing a beginner actually meets, and it frees `instrucțiune` for the two rows that keep it. Those two rows are unchanged.

The backticked-keyword convention survives the change: „condiția `if`" when the keyword itself is named, matching „bucla `for`" on the `loop` row.

The old note rejected `structură decizională` as textbook register. That rejection stands (it is still the wrong voice) but it no longer needs saying in the glossary, because it was an argument against a register, and nobody proposing `condiție` is anywhere near it. It is recorded here instead.

This supersedes the "Not actioned" line in the entry below, which recorded this objection as still under discussion.

## 2026-07-31: `array` is `matrice`, `list` is `listă` (native speaker)

**Decided by:** @florin-cuculeac (Florin Cuculeac), native speaker, on the pinned Romanian glossary thread ([post 3 of topic 825]); approved for action by the owner (iHiD). **Status: human-decided, so these rows are settled** and change only by fresh agreement with a human, raised on that thread.

**Terms affected:** `array`, `list` (previously one row, `array / list` → `tablou`), and the notes on `dashboard`, `chain (array metaphor)` and `board / whiteboard`, which referred to the old term.

Florin's words on the old row: „This is not sound correct in Romanian, use instead 'matrice/listă'." That overturns the bootstrap's `tablou`, which was flagged in the entry below as one of the four rows most likely to draw exactly this objection. A native speaker's judgement on how a word lands outranks the school-textbook evidence the draft rested on.

Because the two English terms now take different Romanian words, the single `array / list` row is **split into two**: `array` → `matrice`, `list` → `listă`. Both are feminine, so the plurals are „două matrice" and „două liste", not the neuter forms the old row taught.

Three consequences elsewhere. The `dashboard` row keeps `panou de control`, but no longer because of a collision with `tablou`: the reason is now simply that `tablou de bord` is the dashboard of a car. The `chain` metaphor note points at `matrice` as the technical term it sits alongside. The `board / whiteboard` note drops its "no collision with `tablou`" aside, which is now about a word the glossary does not use.

Note that `matrice` is also the Romanian word for a mathematical matrix. That is a real overlap, and if it causes trouble in a translation the place to raise it is the same thread, with Florin.

**Not actioned:** his separate objection to `if statement` → `instrucțiune if` ([post 4], proposing `condiție`) is still under discussion and that row is untouched.

## 2026-07-31: Five rows added from the first two translations

**Decided by:** agent, approved by the owner (iHiD). **Status: unconfirmed drafts**, like everything else in this glossary.

**Terms affected:** `computer`, `pattern (a recurring shape you reuse)`, `ones and zeros`, `Run Code (button)`, `little person (maze figure)`.

The first two Romanian translations (the `using-functions` concept page and the `maze-solve-basic` exercise) each proposed a delta. All five rows were added rather than left out, because each word is already in use in a translated file: leaving it unrecorded is the drift the glossary exists to prevent, and recording it as an unconfirmed draft is what flags it for a native speaker.

Three were straightforward. **`computer` → `calculator`** is simply the ordinary Romanian word. **`ones and zeros` → `0 și 1`** is a formatting convention more than a term: Romanian has no natural plural for „unu", so the spelled-out form reads wrong. **`Run Code` → `Rulează codul`** has to be settled centrally because the exercise instructions and the website-copy catalog must name the same button; the "Keep in English" row for `Code` covers the bare UI token, not a sentence-shaped label.

**Two are genuinely open and should be raised on the pinned thread:**

- **`pattern` → `tipar`.** All of `tipar`, `model` and `șablon` are defensible. `model` was rejected because it collides with `model mental`, already in the glossary, and `șablon` reads first as a stencil or boilerplate. That reasoning is sound but it is an agent's, not a native speaker's.
- **`little person` → `omuleț`.** The English source deliberately alternates "the little person" and "the character" for the same maze figure. Romanian could keep two words or collapse both to `personaj` and lose the warmth. Whether the distinction survives translation is a native-speaker call, not a lookup.

## 2026-07-31: Language bootstrapped

**Decided by:** agent, approved by the owner (iHiD). **Status: every row is an unconfirmed draft.** No native speaker has confirmed any rendering in this glossary. Romanian was requested on the forum the same day by @florin-cuculeac ([topic 714]), who has not yet reviewed anything; the pinned glossary thread exists precisely to get these rows checked.

**Terms affected:** every row in `glossary.md`.

The research rested on pre-2022, human-authored sources: the [Mozilla Romanian localization style guide](https://mozilla-l10n.github.io/styleguides/ro/index.html), the [Ubuntu Romanian team translation guide](https://wiki.ubuntu.com/RomanianTeam/Proiecte/Localizare/Ghid), DOOM2/DOOM3 and dexonline for orthography and word senses, and Romanian university and high-school CS course material (Politehnica București `ocw.cs.pub.ro`, `pbinfo.ro`, `infogenius.ro`, UnitBv course PDFs). Several Romanian-language tutorial sites were found to be machine-translated from English and were discarded rather than used as evidence of natural phrasing.

**The register question ran through everything.** Romanian has two live technical registers that disagree: the school and university one (`ciclu`, `instrucțiune repetitivă`, `tablou`, `șir de caractere`) and the modern online dev one (`buclă`, `array`, `string`). the voice is a warm mentor rather than a textbook, so the glossary takes the everyday word where that is genuinely what a reader says (`buclă`), and keeps the native term where the academic word is also the ordinary one. This is the row-by-row judgement most likely to draw native-speaker disagreement.

**Four rows are flagged as the first things to ask a native speaker about:**

- **`interpreter` → `interpretor`.** The hard one. The framing it was chosen for required a word that can name a **person**, because the interpreter was then a character. DEX defines `interpretor` as a program ("procesor specializat"), which is the failure mode that rule exists to prevent. It was chosen anyway because morphologically it is an ordinary `-or` agent noun, and Romanian `-or`/`-tor` names people as readily as machines (`doctor`, `profesor`, `traducător`); it carries no device morpheme and does not begin with "program". The alternative, `interpret`, is the person word but means a spoken-language interpreter or a performer, which is the same wrong job Hungarian rejected as `tolmács` and Serbian as `tumač`. Lowest-confidence row in the file.
- **`array` → `tablou`.** The native term Romanian schooling teaches, consistent with the choices Hungarian and Serbian made. `array` (declined `array-ul`, `array-uri`) is very common in Romanian web-dev speech and is the obvious counter-proposal.
- **`deploy` → `a publica`.** Romanian devs say „a face deploy" in speech, which cannot be written here. `a implementa` was rejected because it means "to implement".
- **`placeholder` → `substituent`.** `placeholder` is also used bare in Romanian dev speech.

**Three metaphor renderings want a sanity check** rather than an argument: `mașină` for the function machine (the bare word's commonest everyday sense is "car", though the slot-and-crank context disambiguates), `fantă` for the input slot (correct but a slightly technical French borrowing), and `tobogan` for the return chute (chosen over the literal `jgheab`, which is a rustic gutter).

**One term was deliberately left out.** `foot-gun` has no clean Romanian idiom, so rather than force a fixed rendering the glossary has no row for it and translators should use a descriptive phrase.

**Two collisions were designed around**, and a later pass should not undo them without reading this:

- `dashboard` is `panou de control`, **not** the otherwise natural `tablou de bord`, because `tablou` is already the array term.
- `feature` is `funcționalitate`, kept clear of `funcție` (the CS concept).

**Roughly half of `global/terms.md` earned no row.** Terms with one obvious Romanian rendering and nothing to decide (`valoare`, `număr`, `variabilă`, `funcție`, `condiție`, `eroare`, `element`, `expresie`, `operator`, `parametru`, `argument`, `obiect`, `clasă`, `metodă`, `iterație`, `algoritm`, `dicționar`, `cheie`, `excepție`, `sintaxă`, `concatenare` and others) were left out on purpose, per the test in "Proposed glossary delta" in `global/pass-mechanics.md`. Their absence is not an oversight.

## Term rationale

Why individual rows read the way they do, where the reasoning is not already covered by a dated entry above. Reference, not history.

### Core decisions

| Term | Why |
|------|-----|
| programming / coding | `codare` reads as encoding or encryption in Romanian, not as writing code. |
| developer | `programator` is the ordinary word; `dezvoltator` belongs to job adverts and corporate copy. |
| tech / tech industry | `industria IT` is what Romanian tech media says. `industria tehnologică` is stiff. |

### Values & data types

| Term | Why |
|------|-----|
| index | `indice` (pl. `indici`) is what Romanian CS material uses for an array subscript. `index` reads as the index of a book or a database. |
| character / letter | Romanian splits these cleanly, and splits both from `personaj` (a figure in a story or game), so the three-way distinction the curriculum needs comes free. |
| float / decimal | `număr zecimal` is beginner-facing; `număr cu virgulă mobilă` is accurate but heavy, so it is reserved for where the floating-point nature is the actual point. |
| random number | `aleatoriu` is the adjective form; `aleator` is a common error. |

### Functions & control flow

| Term | Why |
|------|-----|
| statement / instruction | Romanian has one ordinary word, `instrucțiune`, for both the executable statement and a single thing the reader is told to do. Coining a second would read worse, so the two rows deliberately share it, exactly as Hungarian does. The logical-claim sense is a genuinely different word, `afirmație`. |
| to return | `returnează` is attested in Romanian course material. `a întoarce` reads as physically turning something around. |
| return value | `valoare de retur` belongs to finance. |
| built-in | `încorporat` reads mechanical, as of a component built into a device. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| loop | `buclă` is what modern Romanian tutorials use („bucla `for`", „bucle imbricate"). `ciclu` and `instrucțiune repetitivă` are the university and school register, and would make this sound like a lecture. |
| nested | `imbricat` is the established Romanian CS term and collocates naturally with `buclă`. |
| keyword | DOOM hyphenates `cuvânt-cheie`; writing it as two words is an error a Romanian reader notices. |
| (programming) language | Romanian splits `limbă` (a natural language) from `limbaj` (a programming language). Using `limbă` here is a classic tell of a bad translation. |
| to run / execute | `a rula` covers running a program or a block; `a executa` is what a single instruction does. Both are ordinary, and the split is worth keeping. |
| modulo / remainder | Naming it after what it does explains itself to a beginner, which the borrowed operator name does not. |
| indentation | `indentare` is established in Romanian technical writing; `aliniere` means alignment generally. |

### Tooling & engineering

| Term | Why |
|------|-----|
| tool | `unealtă` is a physical hand tool, so `instrument` carries the software sense better. |
| auth | Romanian has two distinct words, `autentificare` and `autorizare`, so the glossary keeps two rows rather than collapsing them. |
| debugging | `depanare` is the established Romanian word for the activity, and it coexists happily with the English `Debug` as a UI token. |

### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| concept (learning unit) | `noțiune` names a teachable unit, where the everyday `concept` is vaguer and would not read as a section of a library. |
| course | Kept distinct from `lecție` (lesson) and `programă` (curriculum), which Romanian would otherwise blur. |
| plan (subscription tier) | `abonament` enables „abonamentul {tier}"; `plan` reads as a schedule. |
| track / pathway | Both mean "path" in Romanian; `traseu` and `parcurs` are assigned one each so the two curriculum concepts stay apart. |

### Keep in English

| Term | Why |
|------|-----|
| string | Romanian dev writing says `string` and declines it (`stringul`, `stringuri`). `șir de caractere` is the school term and works as the gloss. |
| framework | Romanian technical writing uses the English word; `cadru de lucru` is understandable but nobody says it. |
| AI | Mirrors the owner decision made for Hungarian: "AI" in prose and marketing, not the purist `IA`. |
| chat | Fully nativized, so a gloss would teach nothing. |

