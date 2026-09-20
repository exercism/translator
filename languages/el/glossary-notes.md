# Greek (el) glossary notes

## 2026-09-20: Adapted for Exercism (agent; nothing here is a native speaker's decision)

This glossary was forked from Jiki's Greek glossary when Exercism's translator repo was
created. Exercism and Jiki are separate products, and this glossary is Exercism's from here
on. Everything that was about Jiki's own product (its courses, its exercise stories, its
characters and physical metaphors) went with the fork; every decision about the Greek
language itself was kept, including the ones a native speaker made. Where a native speaker had
settled one of the removed terms, the decision is recorded below as retired rather than
deleted.

**Added: `Exercism product vocabulary: PROPOSED, NOT YET AGREED`.** The English terms the
product's own nouns are built from, with the target column left empty. Nobody who speaks
Greek has been asked yet, and an agent's invented rendering would read as an agreed one.

### Retired with the fork, with the decision recorded

These rows named things Exercism does not have, so the rows are gone. The renderings are
kept here because the reasoning still stands if any of these words is ever needed again.

- `golf tee` → **πάσσαλος του γκολφ**. **(a native speaker's decision)** Confirmed by a
  native speaker (astyanax, 2026-08-03). Never left as bare English `tee`. `γκολφ` is
  transliterated here, matching `μπάλα γκολφ` in the same content.

## 2026-08-13: "backtick" glosses as "βαρεία", never "ανάποδο τικ"

**Decided by:** astyanax, the authoritative native-speaker reviewer for Greek, on.
**Status:** native-speaker-confirmed, settled.
**Terms affected:** `backtick / backticks` (added, _βαρεία_ / _βαρείες_).
**Files affected:** `locales/el/curriculum/concepts/string-templates/page.md` (three
sentences, fixed).

The `string-templates` page introduced backticks as `ανάποδα τικ` ("backward ticks"), a
literal calque of the English rather than Greek. Greek already has a name for the mark:
`βαρεία` (plural `βαρείες`), one of the accents/diacritics (`τόνος` / `διακριτικό σημείο`).
Astyanax gave the replacement wording himself, and it keeps the English `backticks` as the
word used in prose with `(βαρείες)` in brackets at first mention, so a learner meets both
the token they will see in code and the Greek name for it. That is the same shape as the
`if`/`for` rows, and the reason the term sits in the "Keep in English" table rather than
the localize tables.

His rewrite of the second sentence also explains the mark rather than naming it twice
(`διακριτικά σημεία σαν ανάποδοι τόνοι`, "diacritics like backward accents") and adds where
to find the key on a Greek keyboard (above Tab, sharing the key with the tilde), which the
English source leaves to the reader.

## 2026-08-11: "nested" is "εμφωλευμένος", never the colloquial "φωλιασμένος"

**Decided by:** astyanax, the authoritative native-speaker reviewer for Greek, on.
**Status:** native-speaker-confirmed, settled.
**Terms affected:** `nested loop(s)` (added, _εμφωλευμένος βρόχος_), `Nested Loop (concept /
heading)` (added, _Εμφωλευμένη Επανάληψη_).
**Files affected:** `locales/el/curriculum/exercises/checkerboard/messages.json` (one
occurrence), `locales/el/curriculum/exercises/lower-pangram/instructions.md` (two
occurrences), `locales/el/interpreters/javascript/messages.json` (two occurrences, the
"nested code" sense).

Astyanax flagged "Χρησιμοποίησε φωλιασμένους βρόχους" in the `checkerboard` exercise: he
said `φωλιασμένοι` "isn't used in CS courses or books (it's sometimes used to describe
places, context not relevant to us)". It is the colloquial, spatial sense of "nested", the
bird's-nest one. The CS-standard Greek term is `εμφωλευμένος`, and he gave both the running
form (`εμφωλευμένους βρόχους`) and the concept/heading form (`Εμφωλευμένη Επανάληψη`).

Most Greek content already used `εμφωλευμένος` (`build-wall`,
`space-invaders-nested-repeat`, the `logical-and` concept page, the `and-or` subtitles), so
this settles a real inconsistency rather than reversing a house choice. The rule is not
loop-specific: `φωλιασμένος/-η/-ο` is wrong for anything nested in code, which is why the
two interpreter messages about nested code were swept in alongside the exercises.

## 2026-08-10: "record" is "καταγραφή", not "αρχείο" (reads as "file")

**Decided by:** astyanax, the authoritative native-speaker reviewer for Greek, on.
**Status:** native-speaker-confirmed, settled.
**Terms affected:** `record` (added, _καταγραφή_). **Files affected:**
`locales/el/curriculum/concepts/state/page.md` (one occurrence, fixed).

Astyanax flagged that everywhere the English word "record" (in the data-record sense, as in
"a record of whether we're traveling left or right") had been rendered as `αρχείο`, that
reading is wrong: `αρχείο` reads as "a file" to a Greek reader, not as a record of a value.
He gave the correct rendering himself: `μία καταγραφή`. He noted the rest of the `state`
page was fine as-is ("The rest is good enough, I don't have anything else to nit-pick
here"). The page had exactly one occurrence of the pattern, in the second paragraph; it was
changed from "ένα αρχείο για το αν ταξιδεύουμε αριστερά ή δεξιά" to "μία καταγραφή για το αν
ταξιδεύουμε αριστερά ή δεξιά". `καταγραφή` is feminine, matching astyanax's `μία καταγραφή`.

## 2026-08-10: Ordinal/referent gender agreement rule added to `guide.md`

**Decided by:** astyanax (native speaker), the forum ("[Greek Review] Concept page:
String Concatenation").
**Status:** settled. `guide.md` updated with a new imperative bullet under Grammar.
**Terms affected:** none (grammar rule, not a term row). **Files affected:**
`locales/el/curriculum/concepts/string-concatenation/page.md`.

The published page read "Υπάρχουν δύο τρόποι. Η πρώτη ονομάζεται..." ("there are two ways.
The first is called..."), using the feminine ordinal η πρώτη. Astyanax pointed out that "the
first" refers back to τρόπους (ways), masculine, so it must agree as ο πρώτος. Fixed on the
page; checked the rest of the file for the same noun/ordinal pairing and found no other
instance. The underlying rule (an ordinal standing in for an earlier plural noun must agree
with that noun's gender, not with whichever noun sits nearest it in the English) is general
enough to recur on any concept page enumerating options with ordinals, so it was written into
`guide.md`'s Grammar section as its own bullet rather than left as a one-off fix.

The same review also corrected the "hello world" example sentence to add a bracketed Greek
gloss, `(γειά κόσμε)`, after the `"hello world"` string, matching how the individual words
`"hello"`/`"world"` are already glossed earlier in the same sentence. Applied as a wording fix
only; no glossary or guide change follows from it.

## 2026-08-07: "infiltration" is "παρείσφρηση", not "διείσδυση" (unwanted innuendo)

**Decided by:** astyanax, the authoritative native-speaker reviewer for Greek, on.
**Status:** native-speaker-confirmed, settled.
**Terms affected:** `infiltration` (added, _παρείσφρηση_). **Files affected:**
`locales/el/curriculum/exercises/annalyns-infiltration/instructions.md` (title only; the
rest of the page was confirmed fine as-is).

Astyanax flagged that the published title, "Η διείσδυση της Annalyn", uses `διείσδυση` in a
way that carries an unwanted sexual innuendo ("penetration") in Greek. He proposed
`παρείσφρηση` instead, from the verb `παρεισφρέω` ("to enter by deceit or stealth"), a
formal-register word that means "infiltration" or "sneaking in" without the innuendo. It is
feminine, like `διείσδυση`, so the title's `Η ... της Annalyn` structure carries over
unchanged: `Η παρείσφρηση της Annalyn`.

## 2026-08-05: Weekday and month names ARE capitalized (reverses a wrong guide rule)

**Decided by:** astyanax (native speaker).
**Raised by:** the Stage 2 batch 2 pass, flagged as a "possible guide bug" in the
2026-08-02 entry below; put to astyanax on the pinned glossary thread,.
**Status:** native-speaker-confirmed, settled. `guide.md` corrected.
**Terms affected:** none (guide-level orthography rule, not a term row).

`guide.md` said "Days, months, and language names are not capitalized in Greek prose". For
days, months and holidays that was simply wrong. Astyanax confirmed the capitalized forms
(Δευτέρα, Σάββατο) and cited Greek Wikipedia's own style manual: "Μήνες, ημέρες και αργίες
ξεκινούν με κεφαλαίο γράμμα" (months, days and holidays start with a capital letter). The
guide now requires capitalization for days, months and holidays, and keeps the (correct)
lowercase rule for language names as a separate bullet.

**Follow-up sweep needed, not done here.** Greek content translated while the wrong rule was
in force will contain lowercase weekdays. The known case is `weather-symbols`, whose worker
followed the guide as written and produced δευτέρα/σάββατο; Stage 2c and anything else
naming days or months needs auditing for the same pattern. Because the English source is
unchanged, this is invisible to the `en_md5` staleness check, so any re-run must use mode
`all`. Flagged for the orchestrator.

## 2026-08-05: Straight double quotes confirmed as the house style

**Decided by:** astyanax (native speaker), confirming an agent's editorial call.
**Raised on:** the pinned glossary thread,.
**Status:** native-speaker-confirmed, settled. `guide.md` already stated the rule; no edit
needed.
**Terms affected:** none (guide-level punctuation rule).

The guide's straight-quotes rule was a deliberate divergence from Greek print convention
(which uses guillemets, «»), taken by an agent and logged in the 2026-08-01 entry below as
"not native-speaker-confirmed; worth a forum question". It now is confirmed. Astyanax's
rationale: straight quotes are "easier to type... we can use them properly when defining
strings. When writing on paper, we are indeed supposed to write guillemets, but for everyday
uses nobody would bat an eye." The extra argument he adds, that plain quotes match how string
literals are written in code, is the one that matters most for this curriculum, where quoted
prose sits alongside quoted code on the same page.

The guide's existing carve-out is unaffected: inside an HTML attribute already delimited by
double quotes (e.g. `alt="..."`), guillemets are still used, because a literal `"` there
would close the attribute early.

## 2026-08-05: "throw an error" stays "πετάει" as the default rendering

**Decided by:** astyanax (native speaker), confirming an existing editorial default.
**Raised on:** the pinned glossary thread,.
**Status:** confirmed, settled. No glossary change: the existing row already reads this way.
**Terms affected:** `to throw / raise an error` (unchanged).

The 2026-07-31 entry below records astyanax offering _πετάει_ ("throws") and _αναφέρει_
("reports") without ranking them, and an agent picking _πετάει_ as the primary rendering with
_αναφέρει_ kept for sources that themselves say "reports". That was the open question left in
that entry. Asked directly, astyanax confirmed it: "Your choice looks sensible to me, let's
keep it unless somebody else raises a concern." The default now has his backing rather than
being an unreviewed editorial call.

## 2026-08-04: "hardcode" is "καρφωτή τιμή"

**Decided by:** astyanax (native speaker).
**Raised by:** astyanax on the Greek `relational-sun` exercise review thread,.
**Terms affected:** `hardcode` (added, _καρφωτή τιμή_ / plural _καρφωτές τιμές_).

The translation had rendered "hardcode"/"hard-code" as the loanword `hardcode` in one place
and as `σκληροκωδικοποιημένοι` (a literal calque of "hard-coded") in another. Astyanax
rejected both: "don't use `hardcode` or `hard-code`, and let's not translate it as
`σκληροκωδικοποιημένοι`, use `καρφωτή τιμή`/`καρφωτές τιμές`." _Καρφωτή τιμή_ (literally
"nailed-down value") is the idiomatic Greek programmer's term; the verb sense is expressed as
"βάζω καρφωτή τιμή" (to put in a hardcoded value), not as a standalone verb form.

## 2026-08-03: "meridiem" is translated as "ένδειξη μεσημβρίας"

**Decided by:** astyanax (native speaker).
**Raised by:** astyanax on the Greek `digital-clock` exercise review thread,.
**Terms affected:** `meridiem` (added, _ένδειξη μεσημβρίας_).

The translation had kept `meridiem` as a bare Latin token inside Greek prose, on the
reasoning that it matches the third parameter of `displayTime(hour, minutes, meridiem)` and
so keeps the page and the code speaking the same word. Astyanax said it simply reads better
translated, and gave the rendering himself: _ένδειξη μεσημβρίας_, literally the "midday
indication". He framed it as a preference rather than an error ("we could keep `meridiem`
untranslated, but I think it sounds better if we translate it"), which is why the row is
recorded as confirmed rather than as a draft: the wording is his, not an agent's proposal he
approved.

He also settled the grammar in the same breath, by giving _τη σωστή ένδειξη μεσημβρίας_ and
explicitly marking it as better than _τη σωστή μεσημβρία_. The difference matters: the
shorter form makes _μεσημβρία_ itself the noun being inflected, which turns the term into an
ordinary word meaning "midday" and loses the sense of an indicator with two settings. Keeping
_ένδειξη_ as the head noun and _μεσημβρίας_ fixed in the genitive preserves the two-part
term, so only the head inflects. That is the rule the glossary row carries.

The code identifier keeps its English name. Translating the prose term while the parameter
in the signature stays `meridiem` is the normal split for this curriculum (identifiers are
never translated), and the signature sits three lines below the sentence that introduces the
Greek term, so the connection is still visible on the page.

## 2026-08-03: "golf tee" is translated, not kept in English

**Decided by:** astyanax (native speaker).
**Raised by:** astyanax on the Greek `golf-rolling-ball-loop` exercise review thread,.
**Terms affected:** `golf tee` (added, _πάσσαλος του γκολφ_).

The translation had left `tee` as a bare English word inside otherwise Greek prose. Astyanax
said golf tees are too niche a concept in Greece for the English term to carry any meaning to
a general reader, and proposed either _πάσσαλος του golf_ or _πάσσαλος του γκολφ_, checking
first whether the glossary required `golf` to stay in Latin script. It does not: nothing in
the Greek glossary keeps `golf` untranslated, and the surrounding sentence already reads
_μπάλα γκολφ_, so the transliterated variant was the one that matched what was on the page.
That settled the choice between his two options without needing to go back to him.

`golf` is a sport name rather than a technical token, so keeping it in Latin script would
have been the odd choice here, not the safe one.

## 2026-08-03: `αληθής` stands as a fixed term; boolean literals get quotes in prose

**Decided by:** agent, applying the existing glossary row.
**Raised by:** astyanax (native speaker) on the Greek `word-count` exercise review thread,.
**Status:** the quoting is applied; the grammar question underneath it is settled by the
existing row, not reopened.
**Terms affected:** none. The `true / false` row (_αληθής / ψευδής_) is unchanged.

Astyanax's instinct was that "Επιστρέφει αληθής" should be _αληθές_, the neuter, because a
returned value is a neuter thing and a Greek adjective would agree with it. He raised it as a
nuance rather than a firm error, and flagged the reason himself: if _αληθής_ is being used as
a fixed technical term elsewhere in the Greek content (as in "Αληθής (συνθήκη)"), the
citation form is defensible and agreement does not apply to it. That is exactly the case
here. The glossary already settles `true / false` as _αληθής / ψευδής_, so these are names of
values, not adjectives describing the returned thing, and inflecting them per sentence would
break the one-word-per-concept property the row exists to guarantee.

What was genuinely wrong is that nothing on the page told the reader that. Bare _αληθής_ in
running prose reads as an adjective and invites precisely astyanax's parse. So his own
proposed middle ground was applied: the literals go in straight double quotes (the Greek
guide's quote style) wherever they are named as values, which marks them as terms and makes
the non-agreement deliberate rather than accidental. This resolves the concern whichever way
the grammar question would have gone, which is why it did not need a human ruling.

## 2026-08-02: "bug" stays English, but is explained once, at its first mention

**Decided by:** owner (iHiD).
**Raised by:** astyanax (native speaker) on the Greek `while` loops concept review thread, asking what a Greek beginner is meant to make of the bare
English word.
**Status:** human-decided, settled.
**Terms affected:** `Bug` (existing "Keep in English" row, Notes column only).

The existing decision stands: Greek developers say "bug", so the English word is the
ordinary word and it is not translated. The gap astyanax pointed at is that a beginner
meeting it for the first time has no way in. The owner's ruling is a single one-off
explanation rather than a running translation: at the **first** place the term appears
across the Greek curriculum, the English word carries a short bracketed Greek explanation,
and every later occurrence anywhere is bare English. This is the same shape as the `let`
(έστω) decision above.

Astyanax's own proposed Greek rendering, **λογικό σφάλμα**, is what the bracket uses. It is
deliberately not a glossary term row: nothing translates "bug" as λογικό σφάλμα in running
prose, and a term row would invite exactly that.

The first mention is in `concepts/while-loops/el.md`, which is the only Greek curriculum
file (concept page, exercise instructions or exercise catalog) where the word occurs at all.
The second occurrence, later in the same paragraph, was deliberately left bare. The
instruction is recorded permanently in `languages/el/concept/while-loops.md` so a future
pass on that page does not strip the bracket or spread it to the other mention.

## 2026-08-02: Unconfirmed drafts from the first Stage 3 batch (not yet in the glossary)

**Decided by:** nobody yet. These are **proposals**, surfaced translating the first 10
Stage 3 exercises (space-invaders-solve-basic, maze-solve-walk, fix-wall, snowman-basic,
foxy-face, penguin, cloud-rain-sun, jumbled-house, golf-rolling-ball-loop,
maze-solve-repeat). **None of them has been written into `glossary.md`.**

- **row** (grid row, e.g. a row of aliens) → **σειρά**. Deliberately avoids **γραμμή**,
  which is reserved for the `draw` family's `line()` describer. Medium confidence.
- **shot** (golf) → **βολή**. Recurs across the golf family. Medium confidence.
- **position** (a place on the grid/course) → **θέση**. Flagging only: this is the same
  Greek word already assigned to **index**, so there's an overlap worth a native speaker's
  eye rather than a proposal to fix it. Low confidence.
- **puff** (a cloud puff, drawing) → **τολύπη**. Recurs 4 times in `cloud-rain-sun`; a real
  alternative (**φούσκα**) exists. Low confidence.

## 2026-08-02: Final -ν (τελικό -ν) rule added to `guide.md`

**Raised by:** astyanax (native speaker) on the Greek `while` loops concept review thread, (posts 2683, 2753).
**Status:** settled.

Astyanax's first pass flagged "τρέξε τον βρόχο" and "έναν βρόχο", asking for the final -ν
to drop before β. Applying that surfaced the masculine/neuter distinction: Triantafyllidis'
grammar traditionally keeps τον/έναν's -ν in every position specifically so it stays
distinguishable from neuter το/ένα. Asked astyanax directly whether this prose should drop
it on masculine forms generally; he checked further (including a university course page
using the traditional form) and confirmed: **keep -ν on masculine τον/έναν always**, and
apply the drop rule only to την/δεν/μην. `concepts/while-loops/el.md` was fixed to the
drop-ν version first, then reverted back to "τρέξε τον βρόχο"/"έναν βρόχο" once this was
confirmed. The guide now states the settled rule directly, with masculine as an explicit
always-keep case.

## 2026-08-02: Stage 2 batch 2 catch-up (unconfirmed drafts)

**Decided by:** agent (proposals only, nothing written to `glossary.md`). This closes
Greek's gap in the original Stage 2 queue (it had jumped ahead to Stage 2c and skipped this
batch). Pass translated `two-fer`, `strings`, `digital-clock`, `arrays`, `weather-symbols`.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| data type | τύπος δεδομένων | Canonical Greek CS term; recurs across concept pages. | high |
| compound data type | σύνθετος τύπος δεδομένων | Defined in `arrays`; sets the pattern for later compound types. | medium |
| element (of an array) | στοιχείο | "αντικείμενο" would collide with "object" later. | high |
| coin (number metaphor) | κέρμα | the machine-slot metaphor; κέρμα vs νόμισμα needs settling. | high |
| piece of paper (string metaphor) | κομμάτι χαρτί | the string metaphor; shortens to bare "χαρτί" once established. | high |
| input (value passed to a function/machine) | είσοδος | Proposed independently twice (two-fer, strings), same target both times. Must stay distinct from the agreed "θυρίδα" (input slot, physical opening). | medium |
| quotation marks | εισαγωγικά (διπλά εισαγωγικά) | Greek "εισαγωγικά" defaults to guillemets («»); here it must always mean straight double quotes. | medium |
| concatenation | συνένωση | Recurs across string exercises. | medium |
| scenario | σενάριο | Recurs in every exercise catalog; prevents drift to περίπτωση/δοκιμή. | medium |
| counter (loop counter) | μετρητής | "δείκτης" is reserved for "pointer". | medium |
| iterate (verb) | διατρέχω | Glossary fixes only the noun "iteration" → "επανάληψη"; verb form needs to stay coherent. | medium |
| template string | kept English | Greek devs use the English term; sets precedent for JS-syntax terms. | medium |
| category label "Action" | Ενέργεια | Function-panel label, recurs across exercises. | medium |
| category label "Time" | Ώρα | "Χρόνος" was the alternative. | low |
| label (verb, to label a box) | βάζω ετικέτα / ως ετικέτα | Likely recurs in draw-family exercises. | low |

**Possible guide bug, not a term row:** `guide.md` says weekday names aren't capitalised in
Greek prose; standard Modern Greek orthography does capitalise them (Δευτέρα, Σάββατο). The
weather-symbols worker followed the guide as written (δευτέρα, σάββατο). If confirmed wrong,
fixing it means re-running weather-symbols (mode `all`) and auditing Stage 2c for the same
pattern.

## 2026-08-01: Stage 2c

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the Stage 2c
translation batch (concepts: else, else-if, for-loops, while-loops, dictionaries; exercises:
maze-turn-around, bouncer-dress-code, luhn, digital-root, word-count). They are logged here
for review and have **not** been written to `glossary.md`; they need agreement (ideally a
native speaker) before landing there. The renderings below are what the translated pages
currently use, so a reviewer rejecting one implies fixing those pages.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| dictionary (data type) | λεξικό (pl. λεξικά) | Core data-type name; proposed independently by two workers. Alternative rejected: πίνακας κατακερματισμού (wrong register for beginners). | high |
| key (dictionary key) | κλειδί | Proposed independently by two workers. Row needed to keep it distinct from the existing keyword → λέξη-κλειδί. Pairs with value → τιμή. | high |
| character (exercise avatar) | ανθρωπάκι | Already the de facto choice in the maze family el catalog; maze-solve-basic's el instructions mix ανθρωπάκι with χαρακτήρας, which a row would stop. | high |
| bouncer (recurring character) | πορτιέρης | Proposed independently by two workers (else-if concept, bouncer-dress-code exercise). Alternatives: μπράβος (rougher connotation), σεκιουριτάς. | medium |
| infinite loop | ατέρμονος βρόχος (pl. ατέρμονες βρόχοι) | Alternatives: άπειρος βρόχος, learned ατέρμων βρόχος. Recurs across loop/debugging content. | medium |
| initializer (for-loop part) | αρχικοποίηση | Alternative: αρχικοποιητής. Names one of the three canonical for-loop parts. | medium |
| increment (for-loop part) | αύξηση | Alternative: προσαύξηση (common in Greek CS texts); plainer everyday word chosen per voice guidance. | medium |
| else clause / clause | ρήτρα `else` | ρήτρα is used in Greek CS teaching (cf. "ρήτρα WHERE") but can read legalistic to a beginner; alternative: τμήμα. Native speaker should confirm. | medium |
| spiral notebook (dictionary metaphor) | σπιράλ σημειωματάριο | the physical metaphor for dictionaries; alternatives: μπλοκ σπιράλ, τετράδιο. Bare σημειωματάριο after first mention in-page. | medium |
| turn around (maze manoeuvre) | αναστροφή | Everyday word for a U-turn; alternatives: μεταβολή, στροφή προς τα πίσω. Family-wide consistency matters. | medium |
| checksum | άθροισμα ελέγχου | Alternatives: keep English "checksum"; ψηφίο ελέγχου means check digit, a different thing. Recurs in ISBN/Luhn content. | medium |
| dress code | dress code (kept in English) | Ordinary term in Greek nightlife context; ενδυματολογικός κώδικας reads bureaucratic. | medium |
| outfit | ντύσιμο | Alternative: ενδυμασία (stiffer). Must match between bouncer prose and catalog. | medium |
| smart (dress-code sense) | κομψό | Paired with formal → επίσημο; alternatives: καλοντυμένος, καθωσπρέπει. | medium |
| branch (of a conditional) | διακλάδωση | Alternative: κλάδος. Recurs wherever conditionals are taught. | medium |
| case insensitive | πεζά-κεφαλαία (δεν γίνεται διάκριση πεζών-κεφαλαίων) | Phrasing varies easily (ανεξαρτήτως κεφαλαίων); recurs across string exercises. | medium |
| function category label: Sensing | Ανίχνευση | Reference-panel label, must be identical across exercises; alternative: Αίσθηση. | medium |
| function category label: Type Conversion | Μετατροπή τύπων | Same reference-panel consistency argument. | medium |
| function category labels: Information / Action | Πληροφορίες / Ενέργεια | Same reference-panel consistency argument. | medium |
| condition | συνθήκη | Near-canonical in Greek CS prose; logged only because it recurs on every conditional page. May be rejected as "the ordinary word". | low |
| contraction (grammatical) | σύντμηση | EFL materials also use συντομευμένος τύπος; native speaker should confirm. | low |
| collapse (a number to a single digit) | καταλήγει σε (result) / συνέχισε να αθροίζεις (process) | Exercise-local (digital-root); flagged as ambiguity, may not merit a row. | low |

Open question flagged by the batch: "Canadian SIN" is kept as the bare English acronym in
luhn scenario text (the no-auto-gloss rule forbids adding an untagged parenthetical); worth
a call if it recurs.

## 2026-08-01: `guide.md` pruned of rationale, plus two consistency fixes

**Decided by:** agent, per the standing rule that `guide.md` is loaded into every Greek
translation prompt forever, so it holds rules stated imperatively and nothing else.
**Status:** editorial cleanup; no rule removed, no term decision changed. The two
consistency fixes below are **unconfirmed drafts**.

The rationale moved out of the guide, kept here so a later reader does not "fix" a rule
back to the option that was already considered and rejected:

- **Informal εσύ.** It matches the "friend teaching you" voice, and εσείς reads cold
  and institutional against that mentor voice. The official school Πληροφορική curriculum
  defaults to εσείς, but that is the classroom-plural "you" addressing a room of students,
  not a deliberate politeness register, so it is not the model to follow. The guide now
  states only "use εσύ, never εσείς, and do not take the curriculum as the model".
- **Straight double quotes, not guillemets.** Guillemets («») are the more traditional
  Greek printed-textbook convention, so the choice is a deliberate divergence from print
  convention: plain quotes are already common in informal Greek digital writing and fit a
  modern web platform. Not native-speaker-confirmed; worth a forum question if the pinned
  thread is live.
- **Monotonic accentuation** is standard since the 1982 reform (provenance only; the rule
  itself is unchanged).
- **Clitic placement, aspect and word order.** The dropped sentences said only that
  getting these wrong is a common tell of non-native Greek. The rules themselves are
  unchanged.
- **Keeping a gloss on a real Greek word.** Greek is written in its own script, so pairing
  the Greek word with the italic English one is genuinely informative: it tells the reader
  which English word they will meet in code, in documentation, and in every English
  tutorial they read next. Conversely a phonetic transliteration restates the English
  without adding meaning, and Greek readers read the Latin alphabet perfectly well, so the
  transliteration is harder to read than the English it glosses.
- **"Για την ώρα" over "Για τώρα".** Both are correct; "Για την ώρα" ("for the moment") is
  what a Greek speaker reaches for in this teaching aside.
- **"μηδενικά και άσσους".** Rationale already logged in the 2026-07-31 entry below; the
  guide's copy of it was removed as a duplicate.

**Two consistency fixes (unconfirmed drafts):**

- **The skip-a-gloss rule used `framework` as its example of a transliteration-only term
  (φρέιμγουορκ), which contradicted the glossary row** giving `framework` the gloss
  _πλαίσιο εργασίας_ (adopted from astyanax, logged below). The glossary row wins: the
  guide's examples are now ντιμπάγκινγκ and φρόντεντ, and the rule now says explicitly
  that a "Keep in English" row carrying a Greek gloss is glossed as usual, while only
  rows marked "(no gloss)" are left bare.
- **The Greek question mark rule now names the codepoint**: the ASCII semicolon U+003B, not
  the deprecated U+037E. The examples in the guide already used U+003B, so this only
  pins down what was already practised.

**Instructions preserved, not lost.** The deleted "Common EN→EL pitfalls" tail restated
three rules already stated imperatively under Grammar (pro-drop, clitic placement, English
clause order). Its only non-duplicate content, "prefer active constructions over a carried
English passive", was folded into the Word order bullet.

**Gaps noted, deliberately not filled** (adding them would be inventing rules without
research): no rule on the disjunctive ή (whether it takes an accent, and how it is
distinguished from the article η in prose); no rule on declining, or refusing to decline,
Latin-script code identifiers and English-kept technical terms in Greek case frames (only
a Latin-script product name is covered); and nothing on final sigma when such a term takes a Greek ending.

## 2026-07-31: `let` glosses once as "έστω", confirmed by a native speaker

**Decided by:** astyanax (native speaker), confirming an agent proposal.
**Raised on:** the pinned glossary thread, (asked at
**Status:** native-speaker-confirmed, settled.
**Terms affected:** `let` (the JavaScript keyword), new row under "Keep in English".

The variables concept page introduces the keyword as `` `let` (έστω) ``, borrowing the
standard Greek mathematical "let" ("έστω x = 10"). That was an agent's medium-confidence
call from the translation pass, so it was put to the thread.

Astyanax confirmed it, having gone and checked the Greek high-school CS textbooks
(_Ανάπτυξη Εφαρμογών σε Προγραμματιστικό Περιβάλλον_) for precedent first. He found no use
of _έστω_ in the ΓΛΩΣΣΑ pseudocode itself, but plenty of mathematical terminology
throughout, which is exactly the register the gloss leans on: students and young beginners
are already accustomed to that mathematical background, so it reads naturally to them. He
also quoted the textbook's warning that an assignment statement (_εντολή εκχώρησης_) must
never be read as an equation, which is why ΓΛΩΣΣΑ writes assignment as `<-` rather than
`=`. His verdict: "So, I agree with `let` (έστω) being used!"

The row records it as a **one-time** gloss on first introduction, not a running
translation: later mentions stay bare `let`, like every other keyword.

## 2026-07-31: Nine terms added as unconfirmed drafts from translation passes

**Decided by:** agent, per the standing rule from the owner (iHiD) that translation-pass
proposals are always added to the glossary as unconfirmed drafts rather than held back for
review: the only way a native speaker gives feedback is by seeing the term on the published
site.
**Source:** the translation passes that proposed them (not a forum thread; not yet
native-speaker-sourced).
**Status:** unconfirmed drafts.
**Terms affected:** `variable`, `equal sign`, `value (general sense)`, `Boolean`, `vs`,
`hue`, `saturation`, `lightness`, `bar`.

Nine rows added, one per term proposed by a recent translation pass, filed under the
best-fit existing section (or a new section where none fit):

- **From the concept/variables pass:** `variable` → `μεταβλητή` (feminine), the central
  teaching concept and subject of the "box" metaphor; `equal sign` → `σύμβολο ίσον`, the
  prose gloss for the `=` token when introduced conceptually; `value (general sense)` →
  `τιμή` / `τιμές`, filed distinct from the already-agreed `return value` →
  `τιμή επιστροφής`. All three added under "Values & data types".
- **From the concept/if pass:** `Boolean` added under "Keep in English", English primary in
  prose with a Greek gloss `λογική τιμή` in brackets, mirroring how the Hungarian sibling
  page handles it.
- **From the exercise/rock-paper-scissors pass:** `vs` (versus, between two choices/
  scenarios) → `εναντίον`. No existing section fit, so a new "General vocabulary"
  subsection was added under "Localize".
- **From the exercise/rainbow pass:** `hue` → `απόχρωση`, `saturation` → `κορεσμός`,
  `lightness` → `φωτεινότητα`, all color-model terms that recur across the "draw" exercise
  family; `bar` (vertical drawing unit, e.g. a rainbow bar) → `ράβδος`, chosen over
  `γραμμή` specifically to avoid colliding with the existing `line()` shape/describer,
  which is already glossaried as `γραμμή`. A new "Drawing & color (exercise family)"
  subsection was added under "Localize" to hold all four.

None of these are forum- or native-speaker-sourced yet; they are agent proposals from live
translation work, added immediately per the standing rule above so that publishing the
glossary to i18n is what surfaces them for native-speaker review.

## 2026-07-31: An error is "πετάει ένα σφάλμα", not "δίνει"

**Decided by:** owner (iHiD), on a native speaker's correction.
**Raised by:** astyanax (native speaker) on the "Using Functions" concept review thread,
**Status:** human-decided, settled.
**Terms affected:** `to throw / raise an error` (new row).

The page rendered "it will give an error" as _δώσει ένα σφάλμα_. Astyanax's verdict was
that it "isn't wrong, but it doesn't sound too great": what Greek would typically say is
_πετάει ένα σφάλμα_ ("throws") or _αναφέρει ένα σφάλμα_ ("reports"). He also ruled out the
near-miss a translator is most likely to reach for: _κάνει ένα σφάλμα_ is what a **person**
does when they make a mistake, so it cannot describe software.

**One thing worth confirming with him.** He offered _πετάει_ and _αναφέρει_ as two options
and did not rank them. Making _πετάει_ the primary rendering, with _αναφέρει_ kept for
sources that themselves say "reports", was an editorial call taken here, not his. Worth a
quick check if he is still active on the thread, but not blocking: both are renderings he
volunteered, so neither can be wrong.

## 2026-07-31: "Ones and zeros" reads better as "μηδενικά και άσσους" (zeros first)

**Decided by:** owner (iHiD), on a native speaker's note.
**Raised by:** astyanax (native speaker) on the "Using Functions" concept review thread,
**Status:** human-decided, settled. Added as a `guide.md` style note, not a glossary row
(it is a phrasing/ordering preference, not a term choice).

The published page uses "άσσους και μηδενικά" (ones before zeros). Astyanax said he agrees
with using it, but flagged that official standard usage (citing a Hellenic Parliament
document) puts the zeros first: "μηδενικά και άσσους". Neither order is wrong; the
zeros-first order was adopted as the preferred rendering going forward since it matches the
more standard/official phrasing he cited.

The same post's other two points needed no new action here: the "δίνει" → "πετάει"
correction is the entry directly below (already logged), and "Για τώρα" → "Για την ώρα" was
already a `guide.md` note before this post.

## 2026-07-31: `framework` glosses as "πλαίσιο εργασίας"

**Decided by:** owner (iHiD), adopting a native speaker's suggestion.
**Suggested by:** astyanax (native speaker) on the pinned glossary thread,
**Status:** human-suggested, adopted.
**Terms affected:** `framework`.

The term still stays in English in prose; only its `<define>` gloss moved, from bare
_πλαίσιο_ to _πλαίσιο εργασίας_. Bare _πλαίσιο_ can simply mean "frame", so on its own it
does not tell a beginner what a software framework is; _πλαίσιο εργασίας_ is the precise
and idiomatic Greek rendering for this sense.

## 2026-07-31: Glossary pruned of ordinary vocabulary

**Decided by:** agent, per the standing rule in `global/pass-mechanics.md` § "Proposed glossary delta" that a
glossary only earns a row where a real choice exists. 34 rows removed: `value`, `number`,
`Boolean`, `character`, `integer`, `float / decimal`, `dictionary`, `element`,
`key-value pair`, `condition`, `comparison`, `expression`, `operator`,
`to call (a function)`, `to define (a function)`, `input (to a function)`, `output`,
`to return (a value)`, `mental model`, `variable`, `assignment`, `to assign`, `error`,
`nested`, `to run / execute (code)`, `loop body`, `scope`, `method`, `property`, `object`,
`exercise`, `workflow`, `module`, `algorithm`. Each had either an empty Notes cell or one
that only glossed the ordinary dictionary word; anything documenting a rejected
alternative, a collision, a register distinction, or a native-speaker/owner decision
(e.g. `interpreter`, `board / whiteboard`, `if statement`, `class`, `index`, `keyword`)
was left in place. A reviewer checking this pass might most want to query `Boolean` and
`module`: both had a rationale note in this log explaining the choice, but the main
glossary row itself carried no decision (no rejected alternative, no collision), so they
were cut along with the rest.

## 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `interpreter`, and, as a principle, every row.

Two decisions came out of that pass that bind Greek:

- **`interpreter`.** Several languages had reached
  for their term for interpreter *software*, which cannot. **Greek did not change:**
  `διερμηνευτής` was already right, because it is first of all the human interpreter of
  speech, and only secondarily anything else. What changed is that the row now rules out
  `διερμηνευτικό πρόγραμμα` and any other `-πρόγραμμα`/device compound, which name a tool
  and so name a tool rather than a person.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

## 2026-07-30: Greek glossary filled out for the using-functions pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**Rows added**, filling gaps the concept-page pass hit: `instruction`,
`mental model`, `(programming) language`, `brackets (the two after a function name)`,
`input (to a function)`, and the metaphor rows `machine`, `crank`, `shelves`, `warehouse`,
`board / whiteboard`.

**The `course` / `lesson` collision was resolved by giving `lesson` `ενότητα`.** `μάθημα`
is the ordinary Greek word for a course and the natural choice, being short enough for a
term that recurs on every page, but it is also the everyday word for a single lesson.
Giving `lesson` `ενότητα` instead keeps `μάθημα` free for `course` so the two never
collide.

**Two corrections**, both flagged here rather than left silent:

- `code block` moved from `ενότητα κώδικα` to `μπλοκ κώδικα`, which is what Greek developer
  writing actually says, and also clears a second, unrelated use of `ενότητα` now that the
  word is reserved for `lesson` above.
- `if statement` moved from `δομή επιλογής` to `εντολή` `if` (keeping the real keyword in
  backticks), matching the `for` βρόχος / `while` βρόχος pattern already used for loops.
  `δομή επιλογής` ("selection structure") is the school-curriculum term, and reads as
  textbook register rather than what a beginner reader says.

## 2026-07-30: Open question: `index` and `position` will collide

**Raised by:** agent, in the same pass. Not a decision: nothing has been agreed, and no
Greek rendering for `position` exists yet.

`index` is `θέση`, which literally means "position". `position (in a string/array)` is not
yet a glossary term, but the concept-page pass is working through the curriculum page by
page, and Greek has no other candidate rendering for "position" waiting in reserve. Once a
page introduces `position` as its own term, `θέση` will already be taken by `index` and the
two will read as the same word. Left for a human to resolve when that page comes up, rather
than guessed at now.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`, `code block`,
`if statement`, `course`, `lesson`) is not repeated here.

### Core decisions

| Term | Why |
|------|-----|
| developer | Standard Greek equivalent. |

### Values & data types

| Term | Why |
|------|-----|
| value, number | Ordinary Greek words. |
| string | `αλφαριθμητικό` implies "alphanumeric" and is less accurate for the general concept, so `συμβολοσειρά` is preferred. |
| Boolean | Literally "logical value"; well established and unambiguous, with no English-loanword tension for this term in Greek. |

### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary Greek words, so they stand alone. |
| statement (executable) | Greek has one ordinary word for both, and splitting them would invent a distinction the reader does not have. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| keyword | `λέξη-κλειδί` was chosen over the more technical `δεσμευμένη λέξη` for the friendlier beginner tone; both terms exist in real usage. |
| mental model | The standard Greek rendering, and ordinary enough to read naturally in prose. |
| loop | `βρόχος` is reinforced by the `ΓΛΩΣΣΑ` pseudocode taught in Greek schools. |
| class | `κλάση` is dominant in OOP-specific teaching over the older, more generic `τάξη`. |

### Tooling & engineering

| Term | Why |
|------|-----|
| module | Well-established specifically for Python modules in Greek teaching material. |

### Keep in English

| Term | Why |
|------|-----|
| API | Not a word a beginner knows, so the concept has to be explained, not just the acronym expanded. |
| framework | Greek developer speech says "framework". |
| component | React-era Greek developer speech says "component". |
| deploy (verb) | No established native beginner-level term exists; real Greek developers say "κάνω deploy". |

