# Finnish (fi) glossary notes

## 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout). Logged here for review
and **not** written to `glossary.md`; they need agreement before landing there.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| scenario (test) | skenaario | Two workers agreed. | medium |
| quiz | **visa / tietovisa — conflict** | Two chunks landed on different renderings (learning surface vs browsing); needs a ruling before a tidy pass. | medium |
| scrubber | aikajana | Wants a native eye. | low |
| breakpoint | keskeytyskohta | | medium |
| Pass / Fail (badges) | Läpi / Hylätty | | medium |
| Expected / Actual | Odotettu / Saatu | | medium |
| fair use limits | kohtuukäytön rajat | | medium |
| modal (dialog) | ikkuna | | medium |
| unlock | avata (käyttöön) | | medium |
| Projects (feature name) | Projektit | Or keep English like other coined feature names. | low |
| XP | XP (not kokemuspisteet) | | medium |
| roadmap | tiekartta | | medium |
| testimonials | kokemuksia | | medium |
| agentic coding | tekoälyagenttien aikakausi | | low |

**Cross-chunk consistency issue, not a term row:** `challenges.empty.inProgressDescription`
quotes a "Get started" button rendered as `Aloita`, but that button's own key lives in
another namespace; the two must be made to agree on a tidy pass.

## 2026-08-01: Quotation-mark contradiction resolved (rule wins over examples)

**Decided by:** agent, applying the guide's own imperative rule over its worked examples.
**Terms affected:** none; three Notes cells were re-punctuated, no decision changed.

The 2026-08-01 audit entry below recorded this as "left alone deliberately": the guide states
that Finnish quotation marks are `”…”` and that the German-style low quote is not Finnish,
while every Finnish example in the guide was written `„…"`. A guide is loaded into the prompt
for every Finnish item in every pass, so an example that contradicts the rule teaches the
wrong mark pass after pass. A guide's own imperative rule outranks its own examples, so the
examples were changed to match the rule, not the other way round.

- `guide.md`: 39 `„…"` pairs became `”…”`. Only the quote glyphs changed; no Finnish word,
  and no rule, was edited.
- `glossary.md`: the same fix in the three Notes cells that quoted Finnish (`position`,
  `to return (a value)`, `plan (subscription tier)`).

This is still an **unconfirmed draft** in the sense that no native Finnish speaker has
confirmed the quotation rule itself; what has been removed is the internal contradiction. The
straight ASCII `"…"` used as a plain delimiter elsewhere in the guide (the Worked examples
list) was left alone: it reads as neutral markup around an example rather than as a
demonstration of a Finnish typographic mark.

## 2026-08-01: Guide audit (rationale stripped, two rows moved in)

**Decided by:** agent audit of `guide.md`, on iHiD's instruction. No rule was changed, added or
removed: everything cut below was justification, provenance or attribution around a rule the
guide already states imperatively, and it is recorded here so it is not lost.

- **`turnLeft` → _käänny vasemmalle_ and `turnRight` → _käänny oikealle_ now have glossary
  rows.** They were term decisions living in the guide's prose (only `turnLeft` was written
  out there; `turnRight` was recorded in the `move` row and in the 2026-07-31 entry above).
  Both are moved verbatim, unchanged. The `move` row's cross-reference was repointed from
  "the guide's fixed" to the rows themselves; its decision is untouched. The guide keeps
  `` `turnLeft` `` (käänny vasemmalle) as the worked example of the code-identifier gloss
  *format*, which the rule statement alone does not show.
- **Register research cut from "Audience specifics".** The register to aim at is that of
  Finnish-language university programming teaching: the University of Helsinki Ohjelmoinnin
  MOOC, Aalto's Ohjelmointi 1, and JYU's course material. The guide now names the register
  without listing the sources; the source list is in the bootstrap entry below.
- **Sinuttelu attribution cut.** Kielitoimisto's own guidance for instructional text is
  explicit that sinuttelu plus the imperative makes a text clearer and easier to follow.
  That is why the rule reads as it does; the rule itself is unchanged.
- **"Three registers, used together" no longer says "exactly as the Finnish MOOC material
  does".** That was provenance for the imperative / `-taan` / 2nd-person mix, not part of it.
- **The hyphen on `` `print`-komento `` no longer carries its reason.** The reason is that a
  code identifier counts as a "harvinainen vierassana" in Finnish orthography, so the ending
  hangs off the head noun after a hyphen. The rule ("the hyphen is required") is unchanged.
- **`engl.` placement no longer cites usage.** Putting `engl.` in front of the English word
  inside the brackets is the convention existing Finnish course material uses, so it looks
  familiar to the reader. The example „_Lause_ (engl. _statement_)" is kept in the guide,
  because it shows the placement.
- **The ajatusviiva rule no longer cites SFS 4175**, which is the standard the spaced en
  dash comes from.
- **"Owner decision" cut from "Product and strand names".** The split (descriptive strand
  names translated, coined and branded names kept English) is the owner's, and is the same
  rule every language guide carries.
- **Left alone deliberately:** the guide states the Finnish quotation marks are `”…”`, while
  every example in the guide itself uses `„…"`. That is a real inconsistency and needs a
  native speaker to settle which the translations should use; the audit did not touch either.

## 2026-07-31: Two UI-label terms ("Run Code", "Dashboard")

**Decided by:** agent proposal, added on iHiD's instruction. **Status: unconfirmed drafts**, like every other row in this glossary, but with a *second* dependency beyond native-speaker review: there is no Finnish app UI copy at all yet (`app/messages/` holds only `en` and `hu`), so neither row can be checked against a real Finnish label. Both must be confirmed against actual Finnish app strings once those exist, not just read by a native speaker. If the app ever ships a different word, the glossary follows the app, because an exercise instruction that names a button the learner cannot see on screen is worse than an imperfect word.

- **`"Run Code"` (the button label) is `Suorita koodi`.** Sentence case, matching this repo's house style and what `hu` and `sv` already do with the same label. It follows the already-agreed `to run / execute (code)` → _suorittaa_, so nothing new is being decided about the verb; the row exists only to fix the button's exact wording. This sets the precedent rather than confirming an existing label.
- **`Dashboard` (the page) is `koontinäyttö`.** This supersedes the bootstrap entry below, which deliberately left `dashboard` unsettled. _koontinäyttö_ is the standard Finnish rendering used in major localized UIs, which is the agreement the bootstrap pass could not find at the time. _kojelauta_ is rejected (it reads as a car dashboard) and _hallintapaneeli_ is rejected (it reads as admin tooling). _etusivu_ is a genuine alternative, and is the first thing to revisit when a native speaker reviews this glossary.

## 2026-07-31: Three terms from the first Finnish translation passes

**Decided by:** agent translation passes (the `using-functions` concept page and the `maze` exercise-family message catalog), approved for addition by iHiD ("Add them. A human can always disagree."). **Status: unconfirmed drafts**, like every other row in this glossary. No native Finnish speaker has reviewed them.

- **`little man (in the computer)` is `pieni mies`.** The mental-model figure the `using-functions` page puts inside the computer. It is not _hahmo_ (an on-screen game figure), so it needed its own row. _pikku-ukko_ and _pikkumies_ are genuine alternatives a reviewer may prefer; the row exists because the figure recurs across concept pages and one settled rendering is worth more than a per-page choice.
- **`move` (the machine/identifier gloss) is `liiku`.** Only the one-time explanatory gloss when the machine is introduced by name in prose; the `move()` code token stays English. Imperative, so it matches the form the guide already fixed for its siblings `turnLeft` (_käänny vasemmalle_) and `turnRight` (_käänny oikealle_).
- **`cell` (a grid square) is `ruutu`.** From the maze catalog. This collides with the already-agreed `frame (animation)` → _ruutu_. The domains do not meet (a maze square and a frame per second never appear in one passage), so it is very probably harmless, but it is flagged in the glossary row too because maze is the first exercise family to set this precedent and later grid-based families will follow it.

## 2026-07-31: Language bootstrapped

**Decided by:** agent, from research, running `/bootstrap-language` unattended. **Status: every row is an unconfirmed draft**, and unlike most bootstraps these were not put to the owner term by term either: the pass made the linguistic calls itself from the sources below. No native Finnish speaker has read any rendering in this glossary. A Finnish volunteer offered to help on the forum's language-request thread, so the first review should go to them.

**What the research rested on.** Human-authored, mostly pre-2022 Finnish sources: the University of Helsinki Ohjelmoinnin MOOC (`ohjelmointi-20/-21/-22.mooc.fi`, Finnish original, not a translation), Aalto's Ohjelmointi 1 glossary, the JYU TIM Ohjelmointi 1 and 2 glossaries (Vesa Lappalainen), Arto Wikla's Helsinki course glossaries, the community IT-sanasto, Sanastokeskus TSK's Tietotekniikan termitalkoot, Kotus / Kielitoimiston ohjepankki for register and typography, Jukka Korpela's Nykyajan kielenopas for inflection, and Finnish JavaScript material (Ohjelmointiputka, JYU appro) for the JS-specific words. One machine-degraded source (part of an Aalto glossary fetch) was discarded and its terms re-verified elsewhere.

**Decisions worth recording, because a reviewer will ask about them:**

- **`interpreter` is `tulkki`.** Finnish `tulkki` names a human interpreter first and was borrowed into computing unchanged, so it satisfies the requirement that the interpreter was a character without any strain. `ohjelmatulkki` is software-only and is ruled out. Finnish also gives the matching pair for free: `kääntäjä` is both a human translator and a compiler.
- **`board / whiteboard` is `tussitaulu`, and bare `taulu` is banned.** Finnish `taulukko` is `array`, and `taulu` is one derivational step away from it, so a learner meeting arrays as `taulukko` will read `taulu` as its stem. `tussitaulu` is the ordinary word for a write-on-with-a-pen board and carries no collision.
- **`array` is `taulukko`, not `lista`.** Finnish course material distinguishes fixed-size `taulukko` from dynamic `lista`, and a JS array is dynamic, so `lista` was arguable. Finnish JavaScript writing nonetheless says `taulukko`, and the course needs `lista` free for an everyday list in prose.
- **`Boolean` and `scope` are localized rather than kept English**, against the pattern most languages here follow. `totuusarvo` ("truth value") teaches the idea better than the English word, and `näkyvyysalue` is what Finnish course material actually uses.
- **`AI` is `tekoäly`**, also against the pattern elsewhere. Finnish prose genuinely says `tekoäly`; keeping "AI" would be the foreign choice here, not the ordinary one.
- **`debuggaus` and `bugi` beat `virheenjäljitys` and `ohjelmointivirhe`**, applying the ordinary-word principle in `global/voice.md`. The native terms are real but formal; Finnish developers and Finnish course pages say the loans.
- **`argument` is `argumentti`, not `todellinen parametri`.** Finnish teaching material commonly pairs `muodollinen parametri` with `todellinen parametri`. That pairing is heavier than this course wants, and it makes `parameter` and `argument` two halves of one phrase rather than two words.
- **`if statement` is `` `if`-lause ``, not `ehtorakenne`.** `ehtorakenne` is what the Python MOOC says, and it is framed around indentation defining the structure. the course teaches a brace language, so the keyword-named `` `if`-lause `` (matching `` `for`-silmukka ``) fits better. The generic word `ehtolause` stays available.
- **`instruction` is `ohje`.** „Annat oikeat ohjeet" is what a Finn would say. `käsky` is an order, and `komento` is already the word for a command in code.
- **`number` is `luku`, never `numero`.** `numero` is a digit. This is the most common mistake in Finnish beginner material and is called out in the guide as well as here.
- **`iteration` is `kierros`** for one pass of a loop, because it is concrete and is what the Finnish MOOC says, with `iteraatio` held back for the technical concept.
- **`track` is `oppimispolku`, not `opintopolku`.** Opintopolku is the name of Finland's national education-application service, so the bare word reads as someone else's branding.
- **`hue` is `värisävy` and `shade` is `sävy`.** Finnish `sävy` covers both, and the colours concept page uses both senses, so the hue term is written out in full to keep them apart.

**Left out deliberately, as genuinely unsettled**, rather than guessed at: `deploy`, `dashboard`, `string template`, and `toggle`. Finnish has no settled rendering for any of them that two independent sources agree on, and a translator meeting one should propose a delta rather than find a coin-flip in this file.
