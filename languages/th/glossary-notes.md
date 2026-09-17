# Thai (th) glossary notes

## 2026-08-06: Translation engine confirmed as `fable`

**Decided by:** native speaker `faiifaiipuipui`, on the "[Thai Review] Which of these three translations reads best?" comparison thread (https://forum.jiki.io/t/1050, post 2), 2026-08-04. **Status:** settled.
**Terms affected:** none (engine choice, not a glossary or guide change).
**Files affected:** `tracking.json` only, which now carries a `translation_engine` block of `{"engine": "fable", "model": "fable"}`. It had no block before, meaning the engine was unconfirmed.

Three renderings of the same Bouncer exercise passage were posted as A, B and C, produced by three different models from identical instructions, guide and glossary. He opened his reply with the verdict:

> Let's start with which one is the best. That would be **B**.

His reasoning was given as answers to the three specific questions the thread asked, and it is about word choice rather than a general impression:

1. **`bouncer`.** "Bouncer in the context of a person checking whether a person is allowed in a venue is almost always call `การ์ด`. The longer term of `การ์ดหน้าประตู` is also fine. The term `คนเฝ้าหน้าประตู` is understandable, but they sound more generalized, and `คนเฝ้าประตู` will sound much more natural." B was the version that used `การ์ดหน้าประตู`; A used `คนเฝ้าหน้าประตู` and C used `พนักงานคุมประตู`.
2. **`smart` clothes.** "This one have no direct translation in Thai. No one would understand if you use the term `สมาร์ท`, and `สุภาพเรียบร้อย` is also a level more formal than `smart` clothing. `สุภาพ` will probably convey the level of formality best. I'm also thinking of the word `ไปรเวท` ... I believe both `สุภาพ` and `ไปรเวท` would work fine." This is the one point where his preferred wording is C's `สุภาพ` rather than B's `สุภาพเรียบร้อย`, and A's `สมาร์ท` is rejected outright. It did not change his overall verdict.
3. **Spacing around bold text.** "No space." The bold run attaches directly to the surrounding text.

### Why the letter B means `fable` here, and not `gemini`

**This thread predates the standard A/B/C convention.** The fixed convention used on later comparison threads is A = `fable`, B = `gemini`, C = `deepseek`. It did not exist when this thread was generated, so **reading B as `gemini` here would be wrong.** Per the verified generating-script mapping for this specific thread, the labels were:

- **A = `deepseek-v4-pro`**
- **B = `fable`**
- **C = `gemini-3.1-pro-preview`**

So his choice of B confirms **`fable`**, not `deepseek` and not `gemini`. Anyone re-reading this thread later must use the mapping above rather than the standard convention.

Thai therefore stays on the `fable` default, but that is now a native speaker's confirmed choice rather than an unconfirmed default. Per `orchestrator.md`, `"engine": "fable"` in a `translation_engine` block is a recorded human decision and must never be read as a config error or a missing setting.

**Not yet actioned from the same post:** the two wording points above (his preference for `สุภาพ` over `สุภาพเรียบร้อย` for "smart" clothes, and the no-space rule around bold) are translation guidance, not an engine decision, and are recorded here only as the reasoning behind the verdict.

## 2026-08-04: English hint in parentheses for terms Thai speakers say in English

**Decided by:** native speaker `faiifaiipuipui` on the pinned glossary thread (https://forum.jiki.io/t/1049, post 3), actioned by agent under the owner's standing instruction to apply clean, uncontested native-speaker recommendations. First native-speaker feedback Thai has had.

He asked whether some rows could show the English word in parentheses as a hint, because for many programming terms Thai speakers say the English even where a Thai word exists, and listed the terms he has "seldom heard someone say in Thai" in a learning-to-program context. The convention itself was already the Thai realisation of `<define>` (Thai first, English in italic brackets); what is new is applying it to a term on first use in a page even where the English source carries no markup. The rule lives in `guide.md` under "Term clarification"; the per-row trigger is the phrase "English hint on first use" in the `Notes` column.

**Rows given the hint (the ones he named where the Thai term itself stands and only the recognition is the problem):** `syntax`, `index`, `dictionary`, `compound data type`, `if statement`, `statement (executable)`, `expression`, `placeholder`, `pure (function)`.

Deliberately not applied to the whole glossary in one pass. Most rows do not need it (transliterations like `สตริง`, `อาร์เรย์`, `ฟังก์ชัน` already read as the English word, and the metaphor vocabulary is ordinary Thai), and a hint on every term would clutter the prose it is meant to help. Further rows get the hint incrementally, as native speakers flag them; he was invited on the thread to name more.

### Term changes from the same post (all eight actioned)

The rest of his list was a different kind of feedback: the Thai word itself is wrong, not merely unfamiliar. All eight are now applied to `glossary.md`. Where he offered two options, the shorter and more general one is the glossary term and the other is kept in the `Notes` column for the cases it fits better.

- **`interpreter`: `ล่าม` → `อินเทอร์พรีเตอร์`.** "Just use อินเทอร์พรีเตอร์. ล่าม refer to a person." This is exactly the objection the bootstrap flagged as the first question to put to a native speaker (see "The term worth the most argument" below), and the answer came back against the choice. The bootstrap's reasoning was that `global/terms.md` wants a word that can name a person, and that Thai's alternatives all carry a thing/machine morpheme. A native speaker saying the person-word reads as a human translator settles it: the transliteration's clumsiness costs less than naming the wrong thing. The row's old prohibition on `อินเทอร์พรีเตอร์` is now a prohibition on `ล่าม`.
- **`mental model`: `ภาพในหัว` → `โมเดลในหัว`.** "โมเดลในหัว is much more understandable." Also a bootstrap open question ("may read as too casual"), answered. The informal register was right; the noun was not.
- **`ampersand`: `เครื่องหมายแอมเปอร์แซนด์` → `เครื่องหมายและ`.** "We honestly just use เครื่องหมายและ. No one will know an *and-per-se* character is." The transliteration transliterates a name that carries no meaning in English either.
- **`bar (|)`: `ขีดตั้ง` → the glyph itself, `ท่อ` where a name is needed.** "Just show us the '|' and we will understand. We do sometime call the symbol ท่อ though." The glyph is the primary rendering because he put it first and because it needs no vocabulary at all; `ท่อ` is in the `Notes` for sentences that must speak the character's name.
- **`loop body`: `ตัวลูป` → `ในลูป`, with `ด้านในลูป` as the heavier variant.** He also noted that Thai normally refers to a stretch of code by its position rather than by a noun for it, so the row now tells the translator to phrase it positionally (`โค้ดในลูป`) rather than hunting for a bare noun.
- **`to update`: `อัปเดต` → `เปลี่ยน`, with `แก้ไข` for the correct/edit sense.** `เปลี่ยน` ("change") is the shorter and more general of the two he gave and matches the curriculum's use, which is almost always replacing a value in a box. The `อัปเดต`/`อัพเดท` spelling pin stays in `guide.md`, since the word still occurs in product copy; it just no longer names this concept.
- **`code block`: `บล็อกโค้ด` → `โค้ดบล็อก`.** A word-order swap; "โค้ดบล็อก could work". His preference for naming position instead is carried in the `Notes`.
- **`statement (logical claim)`: `ประพจน์` → `เงื่อนไข`.** "Most of the time we use the word เงื่อนไข, and that's when referring to condition in if else statement." The bootstrap already rated this row medium confidence, noting `ประพจน์` is maths register a beginner may not know. The cost is that `เงื่อนไข` now sits inside `คำสั่งเงื่อนไข` (if statement) too, so the row carries an instruction to keep the whole statement and the claim it tests visibly apart on any page that has both.

**Content sweep:** none needed. Thai is still in Phase 1 with an empty `content` map in `tracking.json`, so no page has been translated yet and none of these terms appears anywhere in `../front-end`. The only rendered copy of any of them was the published glossary page on the review site, which regenerates from `glossary.md`. Every one of these changes therefore lands before the first translated page exists, which is the cheapest possible moment for it.

He closed with "There are more I wanted to say but this is what I'm currently able to convey", so expect more.

## 2026-08-02: Thai bootstrapped (every row an unconfirmed draft)

**Decided by:** agent, on the owner's agreement to the researched proposal. **Status: unconfirmed drafts.** No native Thai speaker has seen any row in `glossary.md`, and no row is settled. There was no community glossary submission and no `i18n-th` forum category before this pass, so there was nothing to verify against. Every term below may be corrected by a later pass under the rules in `global/workflow.md`.

**Terms affected:** all of them.

The research rested on: the Microsoft Thai Localization Style Guide (punctuation, pronouns, verbs, and its classic→modern word table); the Royal Society's `หลักเกณฑ์การเว้นวรรค` spacing rules; KMITL's *Python Coding (v02)* Thai beginner textbook (`nemd.kmitl.ac.th/pybook`); Chiang Mai University's *Introduction to Computer Programming* ebook by Somsak Chanaim; TAmemo.com's "รู้จักกับตัวแปลภาษา Compiler และ Interpreter" (Ta, 31 Aug 2018) as a sample of unforced informal Thai developer prose; Thai Wikipedia's `สายอักขระ`, `แถวลำดับ` and `อินเทอร์พรีเตอร์`; Ben Mitchell's "Thai italics part 1: Usage" (The Fontpad, 23 Feb 2015) for the bold-not-italic emphasis rule; and Thiantawan's "UX Writing Challenges: Inclusive Pronouns in Thai Localization" (Medium, 15 Mar 2024) for the pronoun and particle analysis. A number of post-2022 SEO tutorial pages were read and discarded: their Thai tracked English clause order closely enough to be untrustworthy as evidence of natural phrasing.

### The owner decisions baked in

- **No `ครับ`/`ค่ะ` particles anywhere.** Both are marked for the speaker's gender, so either one would assign Jiki a gender in every sentence it appeared in. Particle-free is the standard register for written Thai software and learning copy, including Microsoft's own Thai samples. This is a voice decision, not a term decision, so it lives in `guide.md`.
- **Developer usage beats Royal Society prescription.** Where the language academy's coinage and the word working Thai developers and university Python courses actually use diverge, the glossary takes the latter: `สตริง` over `สายอักขระ`, `อาร์เรย์` over `แถวลำดับ`. This is `global/voice.md`'s ordinary-word principle applied to Thai. The academy form is kept as the one-time `<define>` gloss, so a reader meets both exactly once. The known cost is that a Thai *schoolteacher* reviewing the glossary may call the choice unofficial, because school textbooks use the purist forms.
- **`Jiki` stays Latin, with a one-time pronunciation gloss.** The owner gave the canonical pronunciation as the Japanese short-vowel `じき` (as in 正直), with a high tone on the first syllable and a low tone on the second. That maps to `จิ๊กิ`: both `จ` and `ก` are mid-class consonants and a short vowel with no final makes a dead syllable, which defaults to low tone, so the second syllable needs no mark and the first takes ไม้ตรี to reach high. See the open questions below.

### The term worth the most argument: `interpreter` → `ล่าม`

**Superseded on 2026-08-04:** a native speaker rejected `ล่าม`; the term is now `อินเทอร์พรีเตอร์`. The reasoning below is kept as the record of why the original call was made.

`global/terms.md` requires a word that can name **a person**, and warns off any candidate carrying a device or program morpheme. Thai makes that bite hard, because its three standard renderings all fail it. `ตัวแปลภาษา` is the usual term, but `ตัว` is the classifier and prefix for things and animals, so it literally names an object. `โปรแกรมแปลคำสั่ง` begins with "program" and is disqualified outright. `อินเทอร์พรีเตอร์` is a nine-syllable transliteration that is both machine-flavoured and hostile to a beginner.

That leaves the human-agentive options, `ผู้` being Thai's "-er/-or for people". `ล่าม` was chosen over `ผู้แปลภาษา` because it is a live human interpreter working in real time, line by line, which is precisely Jiki's job, and because it is an everyday word rather than a constructed one. The supporting evidence is that Thai developer writing already reaches for it to explain the English concept: the TAmemo article glosses `Interpreter … แปลว่า "ล่าม"`.

The cost is real and should be stated plainly: `ล่าม` is a *spoken-language* interpreter, so the word carries a domain mismatch. This is deliberately the opposite call to Hungarian, which rejected `tolmács` for exactly that reason. Hungarian had `értelmező` available as a person-word; Thai has no equivalent, so the spoken-language association is the price of getting a person at all. Confidence: medium. This is the first question to put to any native speaker who appears.

### Other rows with a genuine choice behind them

- **`สตริง` (string).** Three renderings are live: `สตริง` (developers, university courses), `สายอักขระ` (Royal Society, Thai Wikipedia's lead term), `ข้อความ` (the everyday word for "text"). The third was rejected as too vague to name a data type. Confidence: high.
- **`อาร์เรย์` (array).** Against `แถวลำดับ` (Royal Society, used by the CMU ebook) and `ตัวแปรชุด` (older Thai textbooks). Confidence: high.
- **`พจนานุกรม` (dictionary).** Against `ดิกชันนารี`. The native word was preferred here, breaking the transliteration pattern, specifically because the Jiki teaching metaphor models a dictionary as a spiral-notebook page with keys down the left, and the native word is the one that carries the everyday picture of a dictionary book. Confidence: medium.
- **`จริง` / `เท็จ` (true / false).** Cross-verified across several Thai teaching sites and Thai Wikipedia's `ค่าความจริง`. `เท็จ` carries a faint legal or moral flavour ("false" as in untruthful), and `ไม่จริง` would be warmer for a beginner but is two words and less standard. Confidence: medium.
- **`อักขระ` / `ตัวอักษร` / `ตัวละคร`.** Thai has three separate words where English overloads "character", so the glossary keeps three rows: the text character, the letter of a string, and the on-screen game figure. This is a collision the language solves for us rather than one we had to invent around. Confidence: high.
- **`คำสั่ง` used for both "statement (executable)" and "instruction (given to Jiki)".** The same deliberate collapse Hungarian makes with `utasítás`. `ประพจน์` keeps the logical-claim sense separate. Confidence: medium on `ประพจน์`, which is a maths-register word a beginner may not know.
- **`ลูป` (loop).** Against `การวนซ้ำ` and the Royal Society's `วงวน`. KMITL's textbook writes `คำสั่งวนลูป`, which mixes both, and the glossary splits them: `ลูป` for the noun, `วนซ้ำ` reserved as the verb under `iteration`. Confidence: medium.
- **Spelling rows.** `ฟังก์ชัน` (not `ฟังก์ชั่น`) and `อัปเดต` (not `อัพเดท`) are pinned because both misspellings are extremely common in real Thai writing, common enough that different passes would otherwise diverge within one document.

### Open questions for the first native speaker

These are the rows most likely to be wrong, and the ones to raise first on the pinned thread:

- ~~**`ล่าม` for `interpreter`**, per the argument above.~~ Answered 2026-08-04: wrong, now `อินเทอร์พรีเตอร์`.
- **`จิ๊กิ` as the pronunciation gloss for `Jiki`.** The tones were derived from the owner's spec, not heard from a Thai speaker, and two things remain unchecked: whether `จิ๊กิ` carries an unwanted echo of `จิ๊ก` (slang, "to swipe/nick something"), and whether the unaspirated `ก` or an aspirated `ข`/`ค` is the better consonant for the second syllable. The tone pattern survives either consonant.
- **`รางคืนค่า` for `return chute`.** The weakest row in the file. Thai has no everyday one-word noun for a chute, so this is a descriptive compound rather than a real word, and it sits in a load-bearing metaphor.
- **`โรงงาน` for `workshop`.** Chosen only because `เวิร์กช็อป` has drifted in modern Thai to mean a training seminar and is therefore unusable. `โรงงาน` means "factory", which is bigger and more industrial than the room the metaphor wants.
- **`ชนิดข้อมูลแบบประกอบ` for `compound data type`.** Coinage territory; no source confirmed this exact form.
- ~~**`ภาพในหัว` for `mental model`.** Deliberately informal over the academic `แบบจำลองความคิด`, but it may read as too casual to name a concept.~~ Answered 2026-08-04: wrong, now `โมเดลในหัว`.
