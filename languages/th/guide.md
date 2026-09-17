# Thai (th) language guide

The Thai-specific realization of `global/voice.md`: script and spacing, register, grammar, and style. Term choices are in `glossary.md` and are binding.

## Script and spacing (critical)

- **Write in Thai script.** Never transliterate Thai into Latin letters.
- **Numerals stay Western (0-9).** Never Thai digits (๐-๙), including in dates and versions.
- **Thai has no capitalization and no working italics.** Where an English source uses `*italic*` on text you are translating, render it as **bold**. Italics survive only on a Latin-script English term inside a `<define>` gloss (see "Term clarification").
- **The space is punctuation, not a word separator.** Thai runs words together and uses a space where English uses a comma or a full stop. A stray space mid-clause reads as a break the author did not intend, so place every space deliberately.
- **Put one space before and after every Latin run**: `ในภาษา Python มีข้อมูลหลายชนิด`, `เรียกไฟล์นี้ว่า Source Code แล้ว`. This applies to code spans, product names and bare English words alike.
- **Never insert zero-width spaces (U+200B) or hand-break lines** to control wrapping. Thai line-breaking belongs to the renderer; hand-inserted breaks corrupt copy-paste and search.
- **Vowels and tone marks stack above and below the base consonant**, so a missing or doubled mark is close to invisible. Never "tidy" whitespace or marks in Thai you cannot read.
- **Write `ๆ` attached to the word it repeats** (`ต่างๆ`, `เรื่อยๆ`, `เล็กๆ`), matching modern web and developer writing rather than the spaced academic form.

## Punctuation

- **No full stop at the end of a sentence.** End the sentence with a space and start the next one. The period is for abbreviations only.
- **No comma between Thai clauses.** Use a space: `ยกเลิกสำเร็จแล้ว อย่างไรก็ตาม การยกเลิกเป็นแบบอื่น`. Keep the comma only in a series of numerals or Latin names (`บทที่ 2, 3 และ 4`).
- **Colon, parentheses, ellipsis, `?` and `!` work as in English.** Put a space before an opening parenthesis, none inside it: `สตริง (String) คือ`.
- **A question particle carries the question**, so `?` is optional after `ไหม`/`หรือไม่`. Use it where it helps the warmth, not as a rule.
- **Em dashes:** the natural Thai replacement is the ordinary clause space, or two sentences. Thai does not distinguish hyphen from en/em dash in practice, so never reach for a longer dash to mark an aside.

## Register and address (critical)

- **Never use the politeness particles `ครับ` or `ค่ะ`.** They are marked for the *speaker's* gender, so either one assigns Jiki a gender in every sentence it appears in. Particle-free is the standard register for written Thai product and learning copy.
- **Address the reader as `คุณ`, and drop it wherever Thai allows.** Thai omits pronouns freely, and an omitted pronoun reads warmer than a repeated one. Never `ท่าน`, which is banking and government register.
- **Use `เรา` ("we") for anything framed as "let's".** It is the workhorse for Jiki's we-are-doing-this-together voice, and it is genderless: `มาดูโค้ดนี้กัน`, `เรามาเริ่มกันเลย`.
- **Refer to Jiki by name, not by a pronoun.** Thai commonly repeats a name where English would say "he", and it avoids `เขา` having to carry a gender.
- **Avoid `มัน` for "it".** It is for animals, or for something the writer dislikes. Repeat the noun or drop the pronoun: `หรือให้ลอยอยู่`, not `หรือให้มันลอยอยู่`.
- **Write active, not passive.** Thai passives reduce readability and lift the register: `ดาวน์โหลดโปรแกรมนี้ไม่ได้`, not a passive construction copying the English.

### Register levers

What separates stiff Thai from warm Thai is vocabulary, not grammar. Reach for the right-hand word:

| Stiff | Warm |
|---|---|
| `อย่างไรก็ตาม` | `แต่` |
| `ค้นหา` | `หา` |
| `ให้คำแนะนำ` | `แนะนำ` |
| `ประสบ` | `พบ` |
| `มีโอกาส` | `สามารถ` |
| `อ้างอิงไปที่` | `ดู` |
| `เหมาะสม` | `ใช้ได้ดี` |

- **Sentence fragments are good Thai here.** They carry the conversational tone, especially for questions that engage the reader directly.
- **Starting a sentence with `และ` or `แต่` is fine** where it helps the rhythm.

## Grammar

- **Thai is SVO and analytic**: no inflection, no agreement, no tense marking. Time and aspect come from adverbs and particles, so do not manufacture a tense the Thai does not need.
- **`กำลัง` marks an ongoing action**, for English's `-ing` in progress messages: `กำลังโหลด`, `กำลังรัน`.
- **Classifiers are obligatory when counting.** A bare "3 boxes" needs its classifier: `กล่อง 3 ใบ`, `ฟังก์ชัน 3 ฟังก์ชัน`. Getting the classifier wrong is more noticeable than getting it verbose.
- **Split long English sentences.** English chains subordinate clauses; Thai reads better as shorter units separated by the clause space.
- **Numbers follow the source's form.** If the English writes `10`, write `10`; if it writes "ten", write `สิบ`.

## Style notes

- **Rhetorical asides** ("So what does this look like in code?") stay as natural Thai rhetorical questions: `แล้วในโค้ดมันหน้าตาเป็นยังไง`.
- **Spell these the standard way, not the common misspelling:** `ฟังก์ชัน` (not `ฟังก์ชั่น`), `อัปเดต` (not `อัพเดท`), `เว็บไซต์` (not `เวปไซท์`).
- **Do not put quotation marks around text the learner has to type.** They will type the quotes. This matters most for sentinel values and exact expected output.
