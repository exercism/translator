# Swedish (sv) glossary notes

## 2026-08-05: Website copy (codingExercise, seo, articles, blog, checkout)

**Decided by:** nobody yet. **Unconfirmed drafts**, proposed by the scoped
`namespaces=codingExercise,seo,articles,blog,checkout` pass (five `fable` workers, one per
namespace). Logged here for review and **not** written to `glossary.md`.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| tooltip | verktygstips | | medium |
| achievement (gamification) | utmärkelse | **Conflicts** with the 2026-08-03 pass's proposal of _prestation_ for the same term (see below) — needs reconciling before either is agreed. | medium |
| roadmap | färdplan | | medium |
| LLM-era (marketing phrase) | AI-eran | Flagged: shifts LLM specifically to AI generally, worth sign-off before agreeing. | medium |

## 2026-08-02: Website copy (app UI catalog)

**Decided by:** nobody yet. These rows are **unconfirmed drafts**, proposed by the
website-copy translation pass (in-scope namespaces: modals, codingExercise, lesson,
quizCard, videoExercise, dashboard, challenges, concepts, layout), run as a single fable
worker per `orchestrator.md`'s one-worker-per-scope rule. Logged here for review and **not**
written to `glossary.md`.

| English | Proposed target | Notes | Confidence |
|---------|-----------------|-------|------------|
| challenge (product area) | utmaning | Used across nav, tabs and cards; sets app-wide precedent. | medium |
| hint | ledtråd | Kept distinct from casual "tip" → tips. | medium |
| streak | svit | Loanword _streak_ is also current; wants a native check. | medium |
| badge | märke | Kept distinct from achievements → prestationer. | medium |
| scrubber | tidslinjen | No settled Swedish word; rendered as "the timeline". | medium |
| scenario | scenario (pl. scenarier) | huvudscenario / bonusscenario. | medium |
| fair use limits | gräns(er) för rimlig användning | No Swedish idiom; descriptive. | medium |

"Agentic coding" → "agentisk kodning" (`layout.footer.freeContent.agenticGuides`) is
emerging, not settled, Swedish.

Flags, not glossary rows: `challenges.empty.inProgressDescription` quotes a "Kom igång"
button whose own key is in a still-untranslated namespace — must match once that lands.
`modals.premiumUpgrade.featureLivestreams` runs noticeably longer than English and may wrap.

## 2026-08-01: `guide.md` trimmed to rules; rationale moved here

**Decided by:** agent, on the owner's instruction to strip rationale from every language
guide (the guide is loaded into the prompt for every Swedish item, in every pass).
**Terms affected:** none. No rule was dropped and no glossary row changed.

The rationale, connotation analysis and emphasis that used to sit in `guide.md` alongside
each rule is recorded here instead:

- **"du" throughout.** The du-reform of the late 1960s made _du_ universal, and modern
  Swedish instructional and marketing copy uses nothing else. _Ni_ addressed to one reader
  reads as either archaic or as shop-counter affectation.
- **"Låt oss" is banned** because it is a calque of English "Let's...": in Swedish it reads
  as a translated hymn rather than as speech.
- **Sweden-Swedish over Finland-Swedish** shows up most visibly on `loop` (Finland-Swedish
  curriculum documents keep _slinga_; see the bootstrap entry below).
- **V2 inversion.** Tracking English word order after a fronted adverbial is the single
  most common way a Swedish translation gives itself away, which is why the rule and the
  self-check both name it.
- **Särskrivning** is the most visible error in written Swedish, and it changes meaning
  outright rather than merely looking sloppy.
- **The -ing rule.** An English participle carried straight over ("När skrivande kod")
  reads as machine output; Swedish wants a finite verb.
- **Em dashes.** Swedish does not use the em dash at all, so `global/rules.md`'s house rule
  costs Swedish nothing. The tankstreck is a spaced en dash and is a different mark.
- **No Oxford comma** because the construction does not exist in Swedish at all.
- **Anti-patterns list.** The old guide restated four rules it had already given
  imperatively, plus the anglicisms (_deploya_, _exekvera_, _inkrementera_, _konkatenera_,
  _indentering_) and false friends (_karaktär_, _uppgift_, _kalla_) that `glossary.md`
  already rules out row by row. It is now a one-line self-check that names each once.
  _kontrollera_ for English "control" is the one item with no glossary row; it stayed in
  the guide.

**Contradiction fixed: quotation marks.** The guide's imperative rule has always been the
Swedish standard `”...”` (the same high right-hand mark at both ends), but roughly a dozen
of its own worked examples used the German-style low opening mark `„...”`. The examples were
wrong and are now consistent with the rule, which also now names `„` explicitly as a mark to
avoid. The rule outranks its own examples, and no native speaker had decided otherwise.

## 2026-08-01: `dictionary` is `uppslagstabell`, not `ordbok`; `array` confirmed as `array`

**Decided by:** native speakers (sneakymallard flagging `array`, estyrke answering in detail,
sneakymallard deferring to estyrke's developer judgement) on the pinned Swedish glossary
thread, posts #3, #5-8.
**Terms affected:** `array`, `dictionary`.

sneakymallard flagged `array` as unfamiliar; asked to clarify, estyrke (a working developer,
Sweden-Swedish) confirmed `array` is genuinely established as a loanword in that context, so
the row is unchanged, just confirmed. For `dictionary`, `ordbok` was an unconfirmed agent
coinage that estyrke said sounds invented; English `dictionary` isn't used as a loanword
either (too long to say casually). Of the alternatives estyrke listed, `uppslagstabell`
("lookup table") is the one they used as a real proposal (pairing it with `lista` for
`array` as an alternative labelling scheme, which we're not taking since `array` itself is
confirmed), and it keeps the same "look something up" image the old row was going for while
being technically accurate to the data structure. sneakymallard deferred to estyrke's
developer usage explicitly.

## 2026-08-01: `ampersand` is `och-tecken`, not `et-tecken`

**Decided by:** native speaker (estyrke, a working developer) on the pinned Swedish
glossary thread, post #6.
**Terms affected:** `ampersand`.

`et-tecken` was an unconfirmed agent draft. estyrke said they'd never seen or used it and
proposed `och-tecken` instead, which is what they use themselves. No prior human decision
existed on this row, so the correction is applied directly.

## 2026-07-31: Language bootstrapped

**Decided by:** agent, from research; approved by the owner (iHiD) as a whole rather than row by row. **Status: every row is an unconfirmed draft.** No native speaker has checked any rendering in this glossary. A Swedish speaker has volunteered on the forum (topic 734, "Translating into Swedish (sv)") but had not been sent anything to review when this file was written, so nothing below carries a human decision and a later pass may correct any of it.

**Sources the research rested on.** The Lund University compendium *Introduktion till programmering för blivande systemutvecklare* (Björn Regnell, Datavetenskap LTH, CC BY-SA, developed continuously since 2015) was the main evidence for what Swedish programming teaching actually writes, because it is long-lived, human-authored and signed by dozens of named contributors. Alongside it: Microsoft's Swedish localization style guide (address, capitalization, compounds, punctuation), IDG's *IT-ord* / Computer Sweden dictionary and Svenska datatermgruppen's recommendations (which Isof now maintains in Rikstermbanken, the group itself having wound down in 2016), Linköping University course material on interpreters and compilers, skiljetecken.se for glyph names, and Swedish colour-theory writing for the HSL vocabulary. Auto-translated Swedish content farms turned up repeatedly in searches for `dictionary` and `array`; those hits were discarded rather than counted as usage.

**Where the evidence pointed away from the textbook term.** Three rows follow what Swedish developers write rather than what a prescriptive source recommends, applying the ordinary-word principle in `global/voice.md`:

- **`loop` is _loop_, not _slinga_.** The LTH compendium uses _loop_ 161 times and _slinga_ not once, and inflects it as a native noun (_loopen_, _loopar_, _loopa_, _loopvariabel_). _Slinga_ survives in Finland-Swedish curriculum documents (Utbildningsstyrelsen) and in older textbooks, but nobody writing about code in Sweden uses it.
- **`array` is _array_.** The prescriptive sources disagree with each other and with practice: SIS recommends _fält_, IDG calls _vektor_ "not always correct" and offers _uppställning_ instead, and the LTH compendium uses _vektor_ while footnoting that _fält_ "skapar stor förvirring" because of English "field". None of _fält_, _vektor_ or _uppställning_ is what a Swedish JavaScript developer says. This is the row most likely to draw an objection, and it should.
- **`indentation` is _indrag_ and `to run` is _köra_,** against the anglicisms _indentering_ and _exekvera_ that appear even in course material.

**`interpreter` is _tolk_, deliberately a person.** It was chosen for a framing in which the interpreter was a character, so the word had to be able to name one. Swedish has the verb _tolka_ for interpreting code (the LTH compendium uses _tolka/tolkas/tolkar_ throughout and never the noun), and _tolk_ is its ordinary agent noun. IDG lists _programtolk_ as the main term for the software, with _interpretator_ and the short form _tolk_ alongside; _programtolk_ carries an explicit program morpheme and _interpretator_ names a piece of machinery, so both were ruled out.

**The metaphor set is the least evidenced part of this glossary.** _låda_, _kedja_, _maskin_, _vev_, _hylla_, _verkstad_, _tavla_, _mynt_, _lapp_ are ordinary Swedish words with nothing to argue about. Three were chosen on judgement and want a native speaker's eye: _inkast_ for the input slot (the word in _myntinkast_, a coin slot, which is exactly the picture), _rutschkana_ for the return chute (a playground slide, chosen because the obvious _utkast_ already means "draft"), and _lager_ for the warehouse (the literal word, though it also means "layer" and "stock").

**`board / whiteboard` is _tavla_, one word for one object,** per the cross-language decision recorded on 2026-07-30 for every language. Swedish has no collision to worry about here, since `array` is _array_ rather than anything board-shaped.

## Term rationale

Why individual rows read the way they do, where a dated entry above does not already cover it. Ordered by the glossary's own sections.

### Values & data types

| Term | Why |
|------|-----|
| number | Swedish splits the English word: _tal_ is a quantity, _nummer_ is an identifying label. Programming means _tal_. |
| character (text) | _karaktär_ is a false friend (a personality, or a figure in a story) and is the mistake a translator is most likely to make here. |
| true / false | Swedish adjectives agree with gender, so the pair has two forms. The row names both so no pass has to guess. |
| dictionary | _ordbok_ keeps the teaching picture: you look up a word and get back what is attached to it. _lexikon_ is the other live candidate and reads more academic. |
| string | _sträng_ is settled in Swedish course material, so unlike several other languages Swedish has no reason to keep the English word. |

### Functions & control flow

| Term | Why |
|------|-----|
| if statement | Swedish names statements after the keyword itself (_`if`-sats_, _`while`-sats_), which keeps the English keyword visible where the learner will type it. _villkorssats_ is correct but reads like a syllabus. |
| condition is true / false | Idiomatic Swedish says a condition is _uppfyllt_ (fulfilled), but this course teaches `true` and `false` as values, and _uppfyllt_ hides that link. |
| to call (a function) | _kalla_ is the literal translation of "call" and is wrong: it means calling out to someone. _anropa_ is the settled term. |
| input / output | _indata / utdata_ are the data; _inmatning / utmatning_ are the acts of typing in and printing out. The metaphor is about the data. |
| bang | English programmer slang with no Swedish counterpart, so the source's playful aside has to become a Swedish remark rather than a loan. |
| bar (`\|`) | _lodstreck_ is current; _vertikalstreck_ is the older name. Both are understood, so the row exists to stop passes alternating between them. |

### Loops, state & program flow

| Term | Why |
|------|-----|
| assignment / to assign | _uppgift_ translates the school sense of "assignment" and would be a silent disaster in a variables lesson. |
| exception | Swedish distinguishes _undantag_ (the catchable object) from _fel_ (an error in general), and the curriculum uses both. |
| state | _status_ is a condition being reported; _tillstånd_ is a condition being held, which is what the concept means. |

### Tooling & engineering

| Term | Why |
|------|-----|
| deploy | _driftsätta_ is the established Swedish term (IDG's _IT-ord_ defines _driftsättning_ as moving a finished system into the environment where it will run). _deploya_ is real developer slang but too casual for teaching copy. |
| framework | _ramverk_ is fully established, to the point that the English word would read as an affectation. |
| auth | Swedish keeps the two ideas apart lexically, so a single rendering would blur them. |

### Platform & curriculum vocabulary

| Term | Why |
|------|-----|
| concept (learning unit) | _koncept_ is a design or an idea; _begrepp_ is a thing you can be taught. The Concept Library is a library of the latter. |
| exercise / task | Swedish has two ordinary words, _övning_ and _uppgift_, so the curriculum's exercise-and-sub-step distinction survives without inventing anything. |
| feature | Swedish uses _funktion_ for both a code function and a product feature, exactly as the canonical term list warns. Rather than coin a second word, the row keeps the ordinary one and says what to do in the rare passage that needs both. |
| cookies | _kakor_ is Svenska datatermgruppen's recommendation and what Swedish cookie banners say, so it is the ordinary word here rather than a purist one. |

### Colours & graphics

| Term | Why |
|------|-----|
| hue / shade | Swedish colour writing reserves _färgton_ for the position on the colour wheel and _nyans_ for a small shift in a colour. Collapsing them, which the English words invite, would make the HSL explanation incoherent. |
| lightness | _ljushet_ is how light a colour is; _ljusstyrka_ is how much light something emits. HSL means the first. |
| frame (animation) | _ram_ is a picture frame or a border. One frame of an animation is a _bildruta_. |

### Keep in English

| Term | Why |
|------|-----|
| scope | Swedish course material reaches for _synlighet_, _räckvidd_ or _omfång_ depending on which aspect is meant, and often just writes the English in brackets. With no settled term, keeping `scope` and glossing it once is the honest option. |
| canvas | The drawing surface has no Swedish name in web writing, and `canvas` is also the element's own name. |
| Code, Bug | Listed as never-translated tokens, but the ordinary Swedish nouns _kod_ and _bugg_ are fully nativized and are what running prose should use. The row exists so a pass does not over-apply the token rule to prose. |
