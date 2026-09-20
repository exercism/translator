# Croatian (hr) glossary notes

## 2026-08-12: Bootstrap of Croatian (guide, glossary, decision log)

**Decided by:** the project owner (Jeremy), who agreed the researched proposal put to him in full by a `/bootstrap-language hr` pass. **Status:** agreed, but **unconfirmed by any native speaker**. **Terms affected:** every row in `glossary.md`. **Files affected:** `guide.md`, `glossary.md`, `glossary-notes.md`, `tracking.json`, and an "Exercise scenario vocabulary" section added to `global/terms.md`.

**No row here carries native-speaker authority.** Croatian had no community glossary submission and no forum request behind it: a search of the forum for "croatian" and "hrvatski" returned only Serbian threads, and the new-language-request topic had no Croatian entry. Every rendering below is an agent draft agreed by the owner on the strength of the sourcing, and the pinned glossary thread exists to get it corrected. A later pass may revise any of it on a native speaker's word, with no row protected by "Glossary writes are additive" until a speaker has actually signed one off.

### The two things most worth a native speaker's eyes

**1. `interpreter` = `tumač`.** This is the highest-stakes and lowest-confidence row in the file. The course makes Jiki *be* the interpreter, so the word has to name a **person doing a job**, not a program. Every Croatian source consulted (HJP, hr.wikipedia, Srce course handbooks, PMF material) locks `interpreter` and `interpretator` to the software, and `interpreter` additionally means a musical performer; `prevoditelj` is the standard Croatian word for a **compiler**, so it is worse than useless here. `tumač` is the only candidate whose primary sense is a person who interprets, but its everyday association is the court or spoken-language interpreter (`sudski tumač`), so a bare label risks reading legalistic. The mitigation written into the row is to lean on the framing (`tvoj tumač je Jiki`, `njegov je posao tumačiti kôd`) rather than the noun alone. If a native speaker rejects it, there is no obvious second choice and the row will need real discussion rather than a swap.

**2. The `ti` register.** Croatian software localization has split, and the split runs straight through our use case: software addressing a user says `vi` (Microsoft's Croatian style guide mandates it, Moodle `hr` follows, Srce goes further into impersonal constructions), while brands and ed-tech addressing one learner say `ti`. `ti` was chosen for the Jiki voice on the strength of Firefox `hr` (a professionally maintained, human, pre-LLM locale that is 100% `ti`), A1 Hrvatska, Netflix `hr`, and programiraj.hr, which is the closest Croatian structural analogue to Jiki. It remains the **minority convention in Croatian software**, so a reviewer trained on the Microsoft house style may object; Firefox is the precedent to cite if so.

### Why the register choice forced a gender rule

Croatian past tense and adjectives agree with the addressee's gender, so choosing `ti` means every "You've written..." would otherwise assign the reader a gender. The rule in `guide.md` (stay in present, imperative or future; move agreement onto the object; never write slash forms on a verb) is not a stylistic preference: the EU Parliament's Croatian gender-language guidance and Microsoft's Croatian style guide arrive at the same three workarounds independently, and IHJJ's advisers reject `napisao/la si`-type forms as unreadable. Choosing `vi` would have dodged this, which is a real cost of the decision above.

### The sources this rests on

Orthography and grammar: `pravopis.hr` (IHJJ's 2013 *Hrvatski pravopis*), `jezicni-savjetnik.hr`, Hrvatski jezični portal (`hjp.znanje.hr`), Hrvatska enciklopedija, and Z. Babić on declining foreign names (*Jezik* 38, via Hrčak). Localization corpora, downloaded and searched rather than sampled: the Microsoft Croatian Style Guide (2016), the Firefox `hr` locale (human team credited since 2004), Moodle `hr` 3.11 (2021) and 4.5, and Scratch `hr`. Academic and institutional: Srce's course handbooks (D450 Python, C502 JavaScript), FER Zagreb, PMF, FOI, and the national Informatics curriculum (NN 22/2018). Practitioner press with a human editorial history: Bug.hr (published since 1995), VIDI, `.debug`.

**One negative finding worth recording, because it will otherwise be rediscovered.** Struna (`struna.ihjj.hr`), the Croatian national terminology database and the obvious place to look, is **not usable for computing terms**: it has no populated computer-science domain, its apparent hits sit under unrelated fields, and it is prescriptive, listing coinages practitioners do not use. Three separate research threads hit this independently. Do not treat its absence of a term as evidence, and do not adopt a Struna coinage over attested usage.

Material was filtered against the pre-2022 human-authored rule. Discarded as likely machine-generated: tr-ex.me, techdico and similar aggregators, and a set of Croatian SEO and listicle sites with no bylines (liber-media.hr, puni.hr, nastava.hr, kakosepise.com.hr among them).

### Loanwords: the ordinary word wins, in both directions

`global/voice.md`'s ordinary-word principle decided a whole class of rows at once, and it cuts both ways for Croatian. Where Croatian genuinely says the borrowing, the borrowing is right (`softver`, `hardver`, `bug`, `framework`, `chat`, `bootcamp`, `biblioteka`), and the purist coinages were rejected (`programčić`, `očvrsje`, `poslužilac`, `prebirnik`, `knjižnica` for a code library). The cleanest evidence found: the Firefox `hr` package contains `programčić` **only inside its bundled spelling dictionary and never in a UI string**, which is exactly the in-the-dictionary-not-in-the-product distinction the principle is about. But where the native word genuinely won, it is kept (`računalo`, `datoteka`, `preglednik`, `poslužitelj`, `postavke`, `kolačići`), so this is not a general licence to reach for English.

### Guarding against Serbian, and against overcorrection

Croatian sits next to Serbian in a model's weights, and a Croatian reader spots Serbian forms instantly, so several rows exist only to hold a line: `računalo`, `stroj`, `polje`, `točno`, `uvjet`, `iznimka`, `objekt`, `doseg`, `usporedba`, `pogreška`, `tijelo funkcije`, `labirint`, `izvanzemaljac`, `traper`, `slijepa ulica`. The structural markers (ijekavian, `-irati` verbs, the infinitive rather than `da` + present) are rules and live in `guide.md` instead. The overcorrection trap is recorded in the same place: `računarstvo` is correct Croatian for computer science and must not be "fixed" to `računalstvo`, and hypercorrect purism is as wrong as Serbianism.

### Individual calls worth recording

- **`polje` for array.** `niz` is both the Serbian choice and already needed for `niz znakova` (string), so it would have collided twice. The residual cost is that `polje` also means a form field, handled in the row's note.
- **`rječnik` for dictionary.** `mapa`, the obvious-looking cognate, is Croatian for a **folder**.
- **`tečaj` for course, never `kolegij`.** Moodle `hr` says `e-kolegij` because it was localized for Srce's university system, where a course is a degree module. Wrong register for a commercial learn-to-code product.
- **`Naslovnica` for dashboard.** The attested Firefox rendering `nadzorna ploča` contains `ploča`, which is the whiteboard metaphor, and shipping both would put one word on two pictures. Moodle `hr` already ships `Moja naslovnica`, so the alternative is attested rather than invented.
- **`etapa` for milestone.** Reasoned for Croatian on its own terms and not inherited from Serbian, though it lands on the same word: `etapa` is ordinary Croatian for a numbered leg of a journey or race, `prekretnica` means a turning point (which "Milestone 3" is not), and `postignuće` is spoken for by the separate Achievements feature.
- **`AI`, never `UI`.** Croatian genuinely has not settled this (Bug.hr prints both in its own headlines), and `UI`, the "more correct" Croatian abbreviation, collides with user interface on a platform that will discuss both.
- **`stroj`, never `mašina`.** HJP marks `mašina` regional and Serbian. The bonus is `strojić`, a natural warm diminutive that fits the mascot register.
- **`lik` for the game character.** No collision exists in Croatian, because a text character is `znak` and not `karakter`, so `lik` is simply free.
- **`izlazni otvor` for the return chute, and `prorez` for the input slot.** The weakest pair in the metaphor set. Croatian has no everyday noun for a vending-machine delivery chute: `klizište` means a landslide and must never be used, `žlijeb` is standard Croatian and (contrary to the Serbian judgement on the same word) not archaic, but its mental image is a roof gutter, and `tobogan` stacks a playground slide on top of the machine metaphor. `utor` was rejected for the input slot because it is the hardware expansion-slot term.
- **`oble zagrade` for `()`.** A genuine two-way split, both well attested (`oble` in the pravopis and Srce's Python material, `okrugle` in Srce's JavaScript material and in maths). The pravopis tipped it; `okrugle` is arguably more transparent to a beginner, so this is a cheap row to change.
- **`klasa` over `razred`.** A live split in Croatian teaching material, not a Croatian-versus-Serbian question. `razred` appears in purist OOP courses, `klasa` dominates elsewhere.
- **`izvršiti` and `pokrenuti` are not synonyms**, and the row says so: executing code and launching a program are different actions in Croatian.

### Terms deliberately left out

Per the no-provisional-section rule, a term is either agreed or absent. Left out for want of any defensible Croatian evidence, to be added once a native speaker rules: **`toggle`** (no Croatian attestation was found in any source, for either the noun or the verb), **`streak`** (the natural `niz` collides with `niz znakova`), **`track`** and **`pathway`** (product coinages with no Croatian precedent, and no way to keep them apart), **`shade`** (collides with `nijansa`, already used for hue), and **`foot-gun`**. Names for `&`, `|` and the backtick are also absent: no authoritative source names them, and Croatian technical writing prints the glyph, so `guide.md` and the Brackets table say to show the glyph rather than coin a name.

Rows flagged in the report as lowest-confidence beyond the two headline items, and worth a speaker's attention on the thread: `osvijetljenost`/`svjetlina` (lightness against brightness), `platno` (canvas), `rezervirano mjesto` (placeholder), `uvlaka` (indentation), `objaviti`/`postaviti u produkciju` (deploy), and `izbacivač` against `zaštitar` for the bouncer, which is a register call rather than a correctness one.

## 2026-09-05: First native-speaker input (naziv funkcije)

**Decided by:** lilitu, the Croatian volunteer reviewer, on the pinned glossary thread. **Status:** agreed and applied. **Terms affected:** `function name` (new row), and the `Variable and function names` row in the Keep in English table. **Files affected:** `glossary.md`, `glossary-notes.md`.

This is the **first row in the Croatian glossary carrying native-speaker authority**; every other row is still the unconfirmed bootstrap draft described above.

lilitu gave `naziv funkcije` for *function name*, and `varijable i nazivi funkcija` for the phrase *variable and function names*. Croatian has both `ime` and `naziv` for *name*, and Croatian technical writing uses `naziv` for the name of a thing, reserving `ime` for people; a draft that reached for the cognate `ime funkcije` would have read wrong, which is why the row now says so explicitly. Nothing about this changes the underlying rule that the identifiers themselves are never translated: the Keep in English row keeps that instruction and only adds how the English phrase is said when it appears in running Croatian prose.

Left open and asked back on the thread: whether a single variable's name is `naziv varijable` by the same logic. It was not stated, so no row was invented for it.

## 2026-09-05: The two headline decisions confirmed, plus naziv varijable

**Decided by:** lilitu, the Croatian volunteer reviewer, on the pinned glossary thread. **Status:** agreed and applied. **Terms affected:** `variable name` (new row), `interpreter` (confirmed, unchanged), and the `ti` register rule in `guide.md` (confirmed, unchanged). **Files affected:** `glossary.md`, `glossary-notes.md`.

**`variable name` = `naziv varijable`.** Asked back on the thread after the `naziv funkcije` row landed, and answered directly: the same `naziv`-not-`ime` logic applies to a single variable's name. The row mirrors `function name`, including the reminder that the identifier in the code is never translated.

**`interpreter` = `tumač` is confirmed.** This was the highest-stakes and lowest-confidence row in the file, recorded above as the one most in need of a speaker's eyes, and lilitu called it "the correct term for interpreter" without qualification. The row itself needed no change: the sourcing behind it (`interpreter`/`interpretator` name the program, `prevoditelj` is a compiler) held up, and the framing advice in its note stays. It now carries native-speaker authority rather than being an agent draft.

**The `ti` register is confirmed.** The other headline worry: `ti` is the minority convention in Croatian software (Microsoft's style guide and Moodle say `vi`), and the concern was that a reviewer trained on that house style would find it too familiar for a learning platform. lilitu's answer was that `ti` is "absolutely the right register for this type of learning platform", which settles it for the Jiki voice and, with it, the gender-agreement rule in `guide.md` that follows from choosing `ti`. `guide.md` already states the rule imperatively and needed no wording change; the confirmation is recorded here rather than there, since the guide holds rules and not their provenance.

With these three, the two decisions flagged at bootstrap as most worth a native speaker's attention are both settled, and Croatian's largest open glossary questions are closed.
