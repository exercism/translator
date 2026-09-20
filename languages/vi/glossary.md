# Vietnamese (vi) glossary

The agreed term list for Vietnamese. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Vietnamese | Use (vi/en) | Notes |
|---------|-----------|-------------|-------|
| programming / coding | lập trình | vi | Use lập trình as the consistent prose term; do not mix with "viết code". |
| developer | lập trình viên | vi | Not "dev", even in casual prose. |
| streak | streak | en | Where the English itself explains the term, gloss as "chuỗi ngày học liên tục." |
| tech / tech industry | ngành công nghệ | vi | Do not mix with "ngành IT" in one document. |
| pitfall | lỗi thường gặp | vi | Stands alone; no gloss needed. |

## Localize (use the Vietnamese term)

These are terms where the Vietnamese is used in prose, so the "Use (vi/en)" column is `vi` for most rows below (a few exceptions kept `en` are noted inline). Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Vietnamese | Use (vi/en) | Notes |
|---------|-----------|-------------|-------|
| value | giá trị | vi | |
| number | số | vi | |
| true / false | đúng / sai | vi | The literals `true`/`false` in code stay in code font; this is the prose concept. |
| character | ký tự | vi | `char` is the type name in code. |
| integer | số nguyên | vi | `int` is the type name in code. |
| float / decimal | số thực | vi | `float`/`double` are the type names in code. |
| array | mảng | vi | |
| dictionary | từ điển | vi | Python-specific prose may keep "dict"; do not mix both in one document without a reason tied to the source. |
| element | phần tử | vi | Array element = "phần tử của mảng". |
| index | chỉ số | vi | |
| key-value pair | cặp khóa-giá trị | vi | |
| string | chuỗi | vi | Not "xâu" (dated, competitive-programming register; do not use for beginner content). |
| Boolean | kiểu logic | vi | The concept name; the literal type name `bool`/`Boolean` in code stays as-is. |

### Functions & control flow

| English | Vietnamese | Use (vi/en) | Notes |
|---------|-----------|-------------|-------|
| if statement | câu lệnh if | vi | Keep `if` in code font. |
| condition | điều kiện | vi | Stands alone; no gloss needed. |
| comparison | phép so sánh | vi | Stands alone; no gloss needed. |
| expression | biểu thức | vi | |
| operator | toán tử | vi | |
| NOT operator / logical negation | phép phủ định | vi | The keyword `not`/`!` in code stays English. |
| statement (executable) | câu lệnh | vi | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | mệnh đề | vi | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. |
| function | hàm | vi | The *keyword* `function` in code stays English; the concept in prose is "hàm". |
| to call (a function) | gọi hàm | vi | |
| to define (a function) | định nghĩa hàm | vi | |
| parameter | tham số | vi | The declaration-site name. |
| argument | đối số | vi | The call-site value. Keep distinct from tham số. |
| input (to a function) | đầu vào | vi | The concept, not the `input()` I/O function, which stays as code. |
| output | đầu ra | vi | |
| to return (a value) | trả về | vi | "Hàm trả về một giá trị." The keyword `return` in code stays English. |
| return value | giá trị trả về | vi | Keep distinct from the verb above. |
| brackets (the two after a function name) | dấu ngoặc đơn | vi | The `()` pair. Vietnamese names the shape, so say which: "dấu ngoặc đơn" is `()`, "dấu ngoặc vuông" is `[]`. In prose: "hai dấu ngoặc đơn". |
| pure function | hàm thuần túy | vi | **Low confidence, flagged for native-speaker review**: "hàm thuần khiết" is a competing calque and English "pure function" is also common in practice; source base for this term is thinner than others. |

### Loops, state & program flow

| English | Vietnamese | Use (vi/en) | Notes |
|---------|-----------|-------------|-------|
| keyword | từ khóa | vi | |
| interpreter | thông dịch viên | vi | **A person doing a job, not software.** Never "trình thông dịch" here; keep distinct from the compiler term "trình biên dịch". The verb is "thông dịch". |
| mental model | mô hình tư duy | vi | |
| (programming) language | ngôn ngữ lập trình | vi | Short form "ngôn ngữ" once established, including in the "a language a computer understands" framing. Never the English borrowing. |
| variable | biến | vi | |
| assignment | phép gán | vi | |
| to assign | gán | vi | "Gán giá trị cho biến." |
| code block | khối lệnh | vi | |
| error | lỗi | vi | |
| nested | lồng nhau | vi | e.g. "vòng lặp lồng nhau" = nested loop. |
| iteration | lần lặp | vi | One pass; "sự lặp lại" for the process as a whole. |
| to run / execute (code) | chạy / thực thi | vi | "Chạy" for the everyday sense, "thực thi" in more formal explanation; do not mix both in one document. |
| loop | vòng lặp | vi | |
| for loop | vòng lặp for | vi | Keep `for` in code font + "vòng lặp". |
| while loop | vòng lặp while | vi | As above, with `while`. |
| loop body | thân vòng lặp | vi | |
| break (loop control) | thoát khỏi vòng lặp | vi | The keyword `break` itself always stays English in code; this is the prose concept of breaking out of a loop. |
| increment | tăng | vi | "Tăng giá trị của biến đếm." |
| modulo / remainder operator | phép chia lấy dư | vi | The `%` operator. |
| concatenation / to concatenate | nối chuỗi | vi | |
| state / stateful | trạng thái | vi | **Flagged for native-speaker review**: React/JS-facing Vietnamese prose often keeps English "state" instead. |
| scope | scope | en | Where the English itself explains the term, gloss as "phạm vi (biến)". |
| class | lớp | vi | |
| method | phương thức | vi | |
| property | thuộc tính | vi | |
| object | đối tượng | vi | |

### Platform & curriculum

| English | Vietnamese | Use (vi/en) | Notes |
|---------|-----------|-------------|-------|
| course | khóa học | vi | The whole course the reader is taking ("Trong khóa học này..."). Keep distinct from "bài học" (lesson) and "chương trình học" (curriculum). |
| exercise | bài tập | vi | |

### Tooling & engineering

| English | Vietnamese | Use (vi/en) | Notes |
|---------|-----------|-------------|-------|
| workflow | quy trình làm việc | vi | The software-engineering sense (a sequence of dev tasks), distinct from curriculum vocabulary. |
| auth (authentication / authorization) | xác thực / phân quyền | vi | Pick by meaning: xác thực = authentication, phân quyền = authorization. |
| deploy (verb: to deploy) | triển khai | vi | "Triển khai" for the verb and noun. |
| tool / tooling | công cụ | vi | |
| module | mô-đun | vi | Python-specific prose may keep "module"; do not mix both in one document without reason. |
| algorithm | thuật toán | vi | "Giải thuật" is a fully interchangeable synonym; do not mix both in one document. |
| edge case | trường hợp biên | vi | |
| backwards compatibility | khả năng tương thích ngược | vi | |
| debug | gỡ lỗi | vi | Not the bare English verb (common in developer speech). |
| test / testing | kiểm thử | vi | "Test"/"test case" are commonly kept in Vietnamese dev speech; do not mix into prose without reason. |
| bug | lỗi | vi | Same word as "error"; pick by context. |

## Keep in English

These stay in English in Vietnamese prose, with the Vietnamese gloss to use for each.

| Term | Vietnamese word, where the English explains the term | Notes |
|------|-----------------------------------|-------|
| API | giao diện lập trình ứng dụng | Not a word a beginner knows; where defined, explain the concept in Vietnamese, not just gloss the acronym. |
| framework | bộ khung / khung làm việc | Where defined, explain it means a reusable structure, then use "framework". |
| CLI (the concept) | giao diện dòng lệnh | Where defined, explain CLI as "giao diện dòng lệnh" (command-line interface), then use "CLI". |
| component | component | UI/framework sense only (e.g. a React component). Where defined, gloss as "một phần giao diện có thể tái sử dụng". For the generic "a part of a system" sense, use "thành phần" instead (localized, no gloss needed). Pick by sense, never mix the two senses under one word. |
| mentor / mentoring | mentor | Where defined, gloss as "người hướng dẫn, cố vấn". |
| list (Python data type) | list | Distinct from "mảng" (array). Where defined, gloss as "danh sách". |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test, Bug | (no gloss) | Only as capitalized keywords/technical tokens (e.g. UI button labels), distinct from the prose words "gỡ lỗi"/"kiểm thử"/"lỗi" above. |
| Code, Frontend, Backend | (no gloss) | |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Programming keywords (`function`, `if`, `for`, ...) | (none) | Always English, including inside prose. Translate only the surrounding explanation. |

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks Vietnamese has agreed any row in this section, and no rendering has been
proposed.** These are the nouns Exercism's own product vocabulary is built from, and they are
the rows we most need a native speaker to fill in, because each one appears on hundreds of
pages. The target column is deliberately empty: an agent's invented rendering sitting in a
glossary reads as an agreed one, and these terms are too visible for that. Fill them in on the
pinned glossary thread, and a row moves into an agreed section once a native speaker has
settled it, recorded in `glossary-notes.md`. `global/terms.md` describes what each term means
on Exercism.

| English | Proposed Vietnamese | Use (vi/en) | Notes |
|---------|------------------|------------------|-------|
| track |  |  |  |
| to join (a track) |  |  |  |
| concept exercise / learning exercise |  |  |  |
| practice exercise |  |  |  |
| syllabus |  |  |  |
| learning mode / practice mode |  |  |  |
| locked / unlocked / available / in progress / completed |  |  |  |
| to unlock |  |  |  |
| solution |  |  |  |
| to submit |  |  |  |
| to publish (a solution) / published |  |  |  |
| community solutions |  |  |  |
| to star / stars |  |  |  |
| student (the person being mentored) |  |  |  |
| mentoring request |  |  |  |
| mentoring session / discussion |  |  |  |
| code review |  |  |  |
| mentoring queue |  |  |  |
| testimonial (left for a mentor) |  |  |  |
| supermentor |  |  |  |
| automated feedback |  |  |  |
| analyzer |  |  |  |
| representer |  |  |  |
| representation |  |  |  |
| test runner |  |  |  |
| tests passed / tests failed |  |  |  |
| online editor / the editor |  |  |  |
| the Exercism CLI |  |  |  |
| reputation |  |  |  |
| badge |  |  |  |
| trophy |  |  |  |
| journey (the user's history page) |  |  |  |
| contributor / contributing |  |  |  |
| maintainer |  |  |  |
| Insiders |  |  |  |
| donation / to donate / donor |  |  |  |
| perks |  |  |  |
| partner |  |  |  |
| flair (marker beside a username) |  |  |  |
| Dig Deeper (tab) |  |  |  |
| approach (to an exercise) |  |  |  |
| article (on an exercise) |  |  |  |
| deep dive (video) |  |  |  |
| challenge (community event) |  |  |  |
| cohort |  |  |  |
| community |  |  |  |
| notification |  |  |  |
| favorites |  |  |  |
| difficulty: easy / medium / hard |  |  |  |
| handle (username) |  |  |  |
| automation (feedback on representations) |  |  |  |
