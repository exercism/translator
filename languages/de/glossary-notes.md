# German (de) glossary notes

## 2026-09-20: Adapted for Exercism (agent; nothing here is a native speaker's decision)

This glossary was forked from Jiki's German glossary when Exercism's translator repo was
created. Exercism and Jiki are separate products, and this glossary is Exercism's from here
on. Everything that was about Jiki's own product (its courses, its exercise stories, its
characters and physical metaphors) went with the fork; every decision about the German
language itself was kept, including the ones a native speaker made. Where a native speaker had
settled one of the removed terms, the decision is recorded below as retired rather than
deleted.

**Added: `Exercism product vocabulary: PROPOSED, NOT YET AGREED`.** The English terms the
product's own nouns are built from, with the target column left empty. Nobody who speaks
German has been asked yet, and an agent's invented rendering would read as an agreed one.

## 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout), run as a single fable
worker per `orchestrator.md`'s one-worker-per-scope rule. Logged here for review and **not**
written to `glossary.md`.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| challenge (platform content type) | Challenge | Kept English as a feature name. | medium |
| hint | Hinweis | | medium |
| badge | Abzeichen | | medium |
| frame (execution frame) | Schritt | | medium |
| plan (subscription) | Plan | | medium |
| AI | KI | | high |
| scrubber (timeline control) | Scrubber | Kept English; no settled German term. | low |
| Learn to Code / Learn to Build | kept English | Treated as branded section names. | medium |

Layout risks flagged by the worker: "Fehlgeschlagen" / "Ausstehend" run long in tight status
badges (shorter fallbacks: "Fehler" / "Offen"), "In Bearbeitung" in the challenges tab row,
and the video pill "Du hast {name} fertig geschaut" vs English "Finished {name}".

## 2026-08-01: `guide.md` trimmed to rules only (rationale moved here)

**Decided by:** owner (iHiD), as part of the cross-language guide-trimming pass. No term
mapping changed, and no glossary row was edited. `guide.md` is loaded into the prompt for
every German item in every pass, so the material below was moved out of it and kept here.

**Two contradictions were fixed in the guide, on the authority of `global/voice.md`:**

- The "Jargon and loanword rules" section told the translator to gloss `String` with
  `Zeichenkette` "once at first use, then `String` throughout". `global/voice.md` is
  explicit that a gloss is triggered **only** by a `<define>` tag and that auto-glossing is
  forbidden, and the tidy pass in `global/translating.md` lists auto-glosses as something to
  remove. The first-use trigger was removed. The term decision itself was already correct in
  `glossary.md` (`string` row: gloss as "String (Zeichenkette)" where the source `<define>`s
  it, then "String" throughout), so nothing was lost.
- The "Acronyms" worked examples told the translator to explain "API" and "CLI" "on first
  use", the same forbidden auto-gloss trigger. Both are term decisions already carried
  verbatim by `glossary.md` (`API` in the Keep-in-English table, with the instruction to
  explain the concept in German where the source defines it; `CLI (the concept)` =
  `Kommandozeile`, "the working term itself, not the bare acronym"), so the guide bullets
  were dropped. `global/voice.md`'s general acronym rule still applies unchanged.
- The quotation-mark rule named German quotes as „…“ (low-opening, high-closing) but wrote
  the closing glyph as a straight ASCII `"`. The rule's own statement wins, so the example
  now uses „…“.

**Rationale and provenance moved out of the guide:**

- **Register / du.** The informal, lowercase "du" was adopted because it is the standard
  address form in modern German coding tutorials and platform copy, confirmed against real
  German coding tutorials and Duolingo's German localization. Capitalized "Du" is only
  optionally correct in personal letters and emails under Duden's spelling rule, and is not
  the norm for tutorial or platform copy whatever some marketing copy does. "Sie" was
  rejected as reading like a corporate manual rather than a mentor, and the impersonal
  constructions of print-era German programming textbooks were rejected as the older
  register. The rules themselves stay in the guide.
- **The "wosch-Glossar" reference source.** A German CS glossary by a German university
  professor, findable by searching for the name. It is a useful *inventory*: it gives a
  German form for essentially every English computing word, so it answers "does a German
  rendering exist at all". It is not a style model. It is deliberately purist, and its
  renderings sit far outside this course's register ("Fehler beseitigen" for *debug*,
  "Fehleraufspürer" for *debugger*, where German learners say "debuggen" and "Debugger"). A
  term found only there, and not in real German teaching material or developer speech, fails
  the "default to the ordinary, common word" test in `global/voice.md`.
- **The native/loanword mix.** German programming education genuinely mixes native coinages
  (`Funktion`, `Schleife`, `Anweisung`, `Rückgabewert`) with fully naturalized English
  loanwords (`Array`, `API`, `Framework`, `Tool`). Which applies to a given term is recorded
  in the glossary's `Use (de/en)` column; there is no separate rule for the translator to
  apply, beyond `global/voice.md`'s ordinary-word principle.
- **Audience note.** The German-language tech-education market expects clear, precise
  writing that still reads warm and encouraging, not the impersonal, formal register of
  older print textbooks. This is `global/voice.md`'s tone in German dress, so it was cut
  from the guide.

**Term decisions removed from the guide's prose** because `glossary.md` already carries them
verbatim: `Befehl` vs `Anweisung`, `Übung` vs `Aufgabe`, `Tafel` as one word for one object,
and `Interpreter` as a person rather than a program. The one part of the `Interpreter` entry
that is a *phrasing* rule rather than a term mapping (keep the surrounding prose personal and
use the verb `interpretieren` nearby) was kept in the guide's style notes.

## 2026-07-31: `input slot` = `Trichter` (resolves the open objection)

**Decided by:** owner (iHiD), on the proposal by native speaker `neillana`, on the forum.
[/340/7] and
[/340/10].
**Terms affected:** `input slot`. **Supersedes** the `input slot` half of the "Open
objections (unresolved)" entry below, which is now closed in full (its `loop body` half was
already closed by the entry below this one).

`Eingabeschlitz` is replaced by **`Trichter`**. `neillana` argued `Eingabeschlitz` denotes
something narrow (a coin slot, `Münzschlitz`) and that both `Schlitz` and `Schacht` read as
old-fashioned and overly technical. Asked by the owner what fits an opening that takes
paper, coins and a chain of things, `neillana` answered that the animation's input slots
literally are hoppers ("I just watched it again and the input slots actually are hoppers",
"If you think about the thing the stuff goes into to get it into the machine, it is simply
'Trichter'"), and that `Trichter` is live, common vocabulary. `Eingabefach` was
offered only as a fallback if we wanted to avoid the hopper association, and is not adopted.
The owner adopted `Trichter`. It also keeps the in/out metaphor pair concrete beside
`return chute` = `Ausgaberutsche`.

`Trichter` is human-decided and settled, and must not be changed without fresh agreement
raised on that same thread.

## 2026-07-31: `loop body` = `Schleifenblock` (resolves the open objection)

**Decided by:** owner (iHiD), on the objection raised by native speakers `elzda` and
`neillana`, the forum, posts
[/340/4] and
[/340/11].
**Terms affected:** `loop body`. **Supersedes** the `loop body` half of the "Open
objections (unresolved)" entry below; the `input slot` half of that entry still stands.

`Schleifenrumpf` is replaced by **`Schleifenblock`**. `elzda` called `Schleifenrumpf`
"really unnatural" and proposed `Schleifenkörper`; `neillana` rejected both as bodily and
old-fashioned ("it makes me think of cut off human body parts") and proposed
`Schleifenblock`, citing German developer documentation using it ("Der Schleifenblock ist
ein Container, der Blöcke wiederholt ausführt..."). The owner adopted `neillana`'s
proposal. It also sits well beside the agreed `code block` = `Block`: the body of a loop is
the block it repeats.

`Schleifenblock` is human-decided and settled, and must not be changed without fresh
agreement raised on that same thread.

## 2026-07-31: Pruned settled ordinary vocabulary

Removed 29 rows whose English term has one obvious canonical German rendering with nothing
to decide (empty or purely grammatical notes, no rejected alternative, no collision with
another agreed term): `programming / coding`, `tech / tech industry`, `developer`, `pitfall`,
`value`, `number`, `character`, `element`, `index`, `data type`, `condition`, `comparison`,
`operator`, `to call (a function)`, `to define (a function)`, `to return (a value)`,
`keyword`, `variable`, `assignment`, `to assign`, `error`, `nested`, `to run / execute
(code)`, `class`, `method`, `object`, `module`, `algorithm`, `component`. Anything with a
rejected alternative, a collision note, an open forum objection, or part of the metaphor set was left untouched; a reviewer querying `component` or `class`/`method`/`object`
(direct, uncontested cognates) is the most likely challenge.

## 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, and, as a principle, every row.

Two decisions came out of that pass that bind German:

- **`interpreter`.**
  German renders it as **Interpreter**, naturalized as a German noun and inflected as one
  ("der Interpreter, dein Interpreter"), and the transparent agent noun to the everyday
  verb "interpretieren", which the surrounding prose uses ("Seine Aufgabe ist es, den Code
  zu interpretieren"), so it reads as an agent, not a device. Never "Übersetzer" (that is a
  compiler) or "Dolmetscher" (spoken-language interpreting).
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is.

## 2026-07-12: `float / decimal` = `Gleitkommazahl` settled on the forum

**Decided by:** native speakers `elzda` and `neillana`, on the forum.
**Terms affected:** `float / decimal`.

`elzda` objected to `Gleitkommazahl` as a word they had never heard, and proposed
`Dezimalzahl` instead ("'Dezimalzahl' seems more fitting... In general, 'Dezimalzahl' means
the exact same as decimal number, but is often used for numbers with decimal places").

`neillana` answered with the Duden definition and German MATLAB documentation, arguing
`Gleitkommazahl` is the standard, technically precise term for the data type, while
`Dezimalzahl` is a Duden-defined term for the base-10 number system rather than for this
data type ("A float like pi would be an 'irrationale Dezimalzahl' as you can't write it in
fractional. But no one would talk about rational and irrational decimals in daily life."),
quoting the German MATLAB help center: "p = pi gibt die Gleitkommazahl zurück, die dem Wert
von π in doppelter Genauigkeit nach IEEE entspricht." `neillana` also rejected
`Fließkommazahl` as a likely anglicism, since English "floating" maps more accurately to
"gleitend" than to "fließend".

`elzda` conceded: "That sounds reasonable, even though some people may not have learned it
in school, after your explanation, it seems like the right choice!"

`Gleitkommazahl` is settled and must not be changed without fresh agreement raised on that
same thread.

## Open objections (unresolved): `loop body` and `input slot`

**Raised by:** native speakers `elzda` and `neillana`, on the forum, 2026-07-11 to
2026-07-13. **Not decided.** The owner
has not ruled on either, so the current glossary renderings stand unconfirmed and must not
be changed on this basis alone.

- **`loop body` (currently `Schleifenrumpf`).** `elzda`: "For loop body I'd really use
  'Schleifenkörper', 'Schleifenrumpf' sounds really unnatural." `neillana` rejected both
  established terms as bodily and old-fashioned ("it makes me think of cut off human body
  parts") and proposed `Schleifenblock` instead, citing real-world usage
  (docs.outboundconsole.com's German blocks documentation: "Der Schleifenblock ist ein
  Container, der Blöcke wiederholt ausführt..."). The two native speakers did not converge
  on a single alternative between themselves.
- **`input slot` (currently `Eingabeschlitz`).** `neillana` explained that `Eingabeschlitz`
  denotes something narrow (a coin slot, `Münzschlitz`), while `Eingabeschacht` denotes
  something larger (a shaft, for something like a sheet of paper). Asked by the owner what
  fits an input that takes paper, coins, and a chain of things, `neillana` proposed
  **`Trichter`** (hopper): "If you think about the thing the stuff goes into to get it
  into the machine, it is simply 'Trichter'... I just watched it again and the input slots
  actually are hoppers," with **`Eingabefach`** offered as an alternative "if you don't want
  the association with hoppers."

Neither exchange produced an owner ruling, so both stay exactly as currently rendered
(`Schleifenrumpf`, `Eingabeschlitz`) until one does.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`, `float / decimal`,
`loop body`, `input slot`) is not repeated here.

### Core decisions

| Term | Why |
|------|-----|
| programming / coding | Standard. |
| streak | Loanword; Duolingo's own German app uses "Streak" verbatim, and German learning platforms follow suit. |
| tech / tech industry | Hybrid (English "Tech" + German "Branche"), established in German tech media. |
| developer | Standard German equivalent. |
| pitfall | Ordinary word. |

### Values & data types

| Term | Why |
|------|-----|
| value, number | Ordinary words. |
| array | Dominant in modern German teaching material over the older, theory-flavored "Feld". |
| element | Fully naturalized. |
| Boolean | Standard textbook/prose form. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| instruction | Everyday word in German beginner programming material (Scratch and school material talk about "Befehle"), and the established German rendering of a machine instruction ("Befehlszeile", "Befehlssatz"). |
| mental model | Ordinary word; "mentales Modell" is the stiffer academic calque. |
| (programming) language | Fully native. |
| increment | Reads more naturally for beginners than the loanword "inkrementieren". |
| property | More intuitive for beginners than the formal OOP term "Attribut". |

### Tooling & engineering

| Term | Why |
|------|-----|
| workflow | Duden-recognized loanword. |
| deploy | More natural for beginners than the loanword "deployen". |
| tool / tooling | Shorter and what developers actually say; "Werkzeug" is a legitimate native alternative but not the default here. |
| module | Fully naturalized. |
| component | "Komponente" is the ordinary German word and what German front-end writing says ("React-Komponente"). |

### Keep in English

| Term | Why |
|------|-----|
| framework | "Rahmenwerk" is a purist coinage nobody uses. |

