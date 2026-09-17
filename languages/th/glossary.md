# Thai (th) glossary

The agreed term list for Thai. Why each term was chosen, and who chose it, is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Thai | Use (th/en) | Notes |
|---------|------|-------------|-------|
| programming / coding | การเขียนโปรแกรม | th | Verb: `เขียนโปรแกรม`. `โค้ดดิ้ง` is slangier; never mix both in one document. |
| developer / programmer | โปรแกรมเมอร์ | th | The learner-facing sense, "a person who programs". `นักพัฒนา` is the industry job title; keep it for copy really about the profession. |
| bug | บัค | th | Not `ข้อบกพร่อง`, which is formal-report register. |
| syntax | ไวยากรณ์ | th | Not `ซินแท็กซ์`. `ไวยากรณ์` is the word a beginner already knows from school. English hint on first use: `ไวยากรณ์ (_syntax_)`. |

## Localize (use the Thai term)

These are terms where the Thai is used in prose, so the "Use (th/en)" column is `th` throughout. Split by theme; every table below follows the same columns.

### Values & data types

| English | Thai | Use (th/en) | Notes |
|---------|------|-------------|-------|
| string | สตริง | th | `สายอักขระ` only as the one-time `<define>` gloss where the source defines it, then `สตริง` throughout. |
| character (text) | อักขระ | th | A single text character. Keep distinct from `ตัวอักษร` (letter) and `ตัวละคร` (the game figure). |
| letter (of a string) | ตัวอักษร | th | Distinct from `อักขระ`, matching the English pair. |
| number | ตัวเลข | th | Not `จำนวน`, which is the quantity/mathematical sense. |
| float / decimal | ทศนิยม | th | Not `จำนวนจริง` (school maths) and not `โฟลต`. |
| true / false | จริง / เท็จ | th | Not capitalised in prose. The `true`/`false` literals stay English inside code. |
| Boolean | บูลีน | th | `ค่าความจริง` as the gloss where the source defines it, then `บูลีน` throughout. |
| array / list | อาร์เรย์ | th | Not `แถวลำดับ` (Royal Society) and not `ตัวแปรชุด` (older textbooks). Exercise prose saying "list" informally means the same thing. |
| element | สมาชิก | th | Not `อิลิเมนต์`. |
| index | ดัชนี | th | Not `อินเด็กซ์`. English hint on first use: `ดัชนี (_index_)`. |
| position (in a string/array) | ตำแหน่ง | th | The beginner-facing word taught before `ดัชนี`. Keep the two visibly apart on any page that has both. |
| dictionary | พจนานุกรม | th | Not `ดิกชันนารี`. The everyday word carries the spiral-notebook teaching metaphor. English hint on first use: `พจนานุกรม (_dictionary_)`. |
| key (dictionary key) | คีย์ | th | Never `กุญแจ`, which is a physical door key. |
| data type | ชนิดข้อมูล | th | Not `ประเภทข้อมูล`. Use one form; it recurs on every concept page. |
| compound data type | ชนิดข้อมูลแบบประกอบ | th | Distinct from plain `ชนิดข้อมูล`. English hint on first use: `ชนิดข้อมูลแบบประกอบ (_compound data type_)`. |
| object (JS `{}` literal) | ออบเจ็กต์ | th | Never `วัตถุ` (a physical object). Keep `พจนานุกรม` only where the English itself says "dictionary". |

### Functions & control flow

| English | Thai | Use (th/en) | Notes |
|---------|------|-------------|-------|
| function | ฟังก์ชัน | th | **Spelled `ฟังก์ชัน`, never `ฟังก์ชั่น`.** The *keyword* `function` in code stays English; the concept in prose is `ฟังก์ชัน`. |
| to call (a function) | เรียกใช้ | th | Not bare `เรียก`. |
| to define (a function) | สร้าง / นิยาม | th | `สร้าง` for the warm teaching voice; `นิยาม` only where the source is formal. |
| parameter | พารามิเตอร์ | th | The declaration-site name. |
| argument | อาร์กิวเมนต์ | th | The call-site value. Keep the pair distinct. |
| to return (a value) | คืนค่า | th | Not `ส่งค่ากลับ`. The bracketed `<define>` gloss word must be _return_, never _returning_. |
| return value | ค่าที่คืนออกมา | th | The noun. Keep distinct from the verb above. |
| if statement | คำสั่งเงื่อนไข | th | The `if` keyword stays English. English hint on first use: `คำสั่งเงื่อนไข (_if statement_)`. |
| statement (executable) | คำสั่ง | th | The imperative sense: a line of code that does something and gets executed. Shares the word with "instruction (given to Jiki)" below. English hint on first use: `คำสั่ง (_statement_)`, which also keeps it apart from the CLI-command reading of the bare word. |
| statement (logical claim) | เงื่อนไข | th | The proposition sense: a claim that is true or false; also a test assertion. Never `ประพจน์` (maths register). Pick by meaning, not by the English word. Where a page has both this and `คำสั่งเงื่อนไข` (if statement), make the sentence show which is the whole statement and which is the claim being tested. |
| instruction (given to Jiki) | คำสั่ง | th | What the learner puts on the board for Jiki to follow. Everyday Thai. Deliberately the same word as "statement (executable)". |
| expression | นิพจน์ | th | Not `เอ็กซ์เพรสชัน`. English hint on first use: `นิพจน์ (_expression_)`. |
| operator | ตัวดำเนินการ | th | Not `โอเปอเรเตอร์`. |
| to declare / declaration | ประกาศ | th | |
| initializer | ค่าเริ่มต้น | th | |
| placeholder | ตัวแทนค่า | th | English hint on first use: `ตัวแทนค่า (_placeholder_)`. |
| pure (function) | บริสุทธิ์ | th | `ฟังก์ชันบริสุทธิ์` = pure function. When glossed, gloss the full term _pure function_, not the bare adjective. English hint on first use: `ฟังก์ชันบริสุทธิ์ (_pure function_)`. |
| brackets (the two after a function name) | วงเล็บ | th | Plain `วงเล็บ` for the `()` pair written after a function name. Name the specific type only when disambiguating; see the Brackets table. |
| and / or (logical, in prose) | และ / หรือ | th | The keywords and/or/`&&`/`\|\|` stay English. If the source glosses one, the bracket may show the bare English word. |
| ampersand (`&`) | เครื่องหมายและ | th | Never `เครื่องหมายแอมเปอร์แซนด์`: the transliterated name means nothing to a Thai reader. On `<define>`, show the glyph itself (`&`), not the English word "ampersand". |
| bar / vertical bar (`\|`) | `\|` (the glyph) | th | Never `ขีดตั้ง`. Show the character itself in code formatting and let it speak; only where a sentence genuinely needs a spoken name for it, use `ท่อ`. The `\|\|` keyword stays English. On `<define>`, show the glyph, not the English word "bar". |
| bang (the `!` character) | เครื่องหมายตกใจ | th | The conversational name used on the logical-not concept page. |

### Loops, state & program flow

| English | Thai | Use (th/en) | Notes |
|---------|------|-------------|-------|
| interpreter | อินเทอร์พรีเตอร์ | th | Never `ล่าม`, which is a human interpreter of spoken language. Never `ตัวแปลภาษา`, never `โปรแกรมแปลคำสั่ง`. On concept pages Jiki *is* the `อินเทอร์พรีเตอร์`; keep the "does a job for you" framing in the surrounding prose rather than in the word itself. |
| loop | ลูป | th | Not `การวนซ้ำ` as the noun and not `วงวน`. `คำสั่งวนลูป` where the statement is meant. |
| loop body | ในลูป | th | Never `ตัวลูป`. Phrase it positionally rather than as a bare noun: `โค้ดในลูป` = the code in the loop. `ด้านในลูป` where the sentence needs the extra weight. |
| iteration | การวนรอบ | th | Verb: `วนซ้ำ`. |
| nested | ซ้อนกัน | th | e.g. `ลูปซ้อนกัน` = nested loop. When glossed, gloss the full term (_nested loop_), not the bare adjective. |
| keyword | คีย์เวิร์ด | th | Not `คำสงวน`, which is the narrower "reserved word". |
| assignment / to assign | การกำหนดค่า / กำหนดค่า | th | |
| to update (a variable/dict) | เปลี่ยน | th | Never `อัปเดต` for changing a value. `แก้ไข` where the sense is correcting or editing something rather than replacing a value. |
| code block | โค้ดบล็อก | th | Word order is `โค้ดบล็อก`, never `บล็อกโค้ด`. Keep distinct from `ขอบเขต` (scope). Where the source is just pointing at a stretch of code, prefer naming its position (`โค้ดในลูป`, `โค้ดข้างล่าง`) over the term. |
| scope | ขอบเขต | th | Not `สโคป`. |
| error | ข้อผิดพลาด | th | Not `เออเรอร์`. |
| exception | ข้อยกเว้น | th | The catchable runtime event. Keep distinct from `ข้อผิดพลาด` (error). |
| to run / execute (code) | รัน | th | Not `ประมวลผล` (formal) and not `ทำงาน`. |
| (programming) language | ภาษาโปรแกรม | th | Use it including in the "a language a computer understands" framing. |
| comment (code comment) | คอมเมนต์ | th | Not `หมายเหตุ`. |
| indentation | การย่อหน้า | th | |
| concatenation / to concatenate | การเชื่อมสตริง | th | |
| mental model | โมเดลในหัว | th | Not `ภาพในหัว` and not `แบบจำลองความคิด` (academic register). |

### Tooling & engineering

| English | Thai | Use (th/en) | Notes |
|---------|------|-------------|-------|
| framework | เฟรมเวิร์ก | th | |
| deploy (verb: to deploy) | ดีพลอย | th | Not `นำขึ้นระบบ`. |
| auth (authentication / authorization) | การยืนยันตัวตน | th | Covers authentication; use `การอนุญาต` where the source specifically means authorization. |

### Platform & curriculum vocabulary

| English | Thai | Use (th/en) | Notes |
|---------|------|-------------|-------|
| course | คอร์ส | th | Covers both the whole Jiki course and a curriculum track. Not `หลักสูตร` (a formal syllabus) or `รายวิชา` (a school subject). |
| concept (learning unit) | คอนเซปต์ | th | The Jiki page type. Keep distinct from `แนวคิด`, the everyday word "concept". |
| exercise | แบบฝึกหัด | th | |
| task (within an exercise) | งานย่อย | th | Distinct from `แบบฝึกหัด` (the exercise itself). |
| scenario (exercise test case) | สถานการณ์ | th | Also the concept title. |
| feature (platform capability) | ฟีเจอร์ | th | Keep visibly apart from `ฟังก์ชัน`. |

## Keep in English

These stay in English in Thai prose, with the Thai gloss to use for each.

| Term | Thai gloss (on `<define>`) | Notes |
|------|-----------------------------|-------|
| API | explain what it is in Thai | Where defined, explain the concept in Thai, not just gloss the acronym. |
| CLI (the concept) | อินเทอร์เฟซบรรทัดคำสั่ง | Explain CLI as a command-line interface where the source defines it. |
| AI | _ปัญญาประดิษฐ์_ | Use "AI" in prose and marketing, not the Thai term. |
| LLM | explain in Thai | |
| template literal / template string | (no gloss) | The JS construct's own name. |
| widget | (no gloss) | |
| chat | (no gloss) | |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | (no gloss) | As UI labels and code tokens. The ordinary noun in running prose follows the glossary rows above. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Brackets

| Glyph | Thai | Notes |
|-------|------|-------|
| `()` | วงเล็บ | Plain `วงเล็บ` by default; add the glyph only when disambiguating. |
| `[]` | วงเล็บเหลี่ยม | |
| `{}` | วงเล็บปีกกา | |
| `<>` | วงเล็บแหลม | |

How to phrase a bracket in running prose is in `guide.md`.
