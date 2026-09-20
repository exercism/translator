# Taiwan Traditional Chinese (zh-TW) glossary

The agreed term list for what is distinct about Taiwan Traditional Chinese. Read `../zh/glossary.md` first for the terms shared with Mainland Simplified Chinese (`zh-CN`); this file holds only the terms that diverge between the two locales (by wording, or by script even when the underlying word is the same), plus terms that exist only for Taiwan Traditional Chinese. A term lives in **exactly one** glossary file, this one or the family's, **never both**. A locale's effective glossary is `../zh/glossary.md`'s rows plus this file's rows, read together. Why each term was chosen is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Chinese | Use (zh-TW/en) | Notes |
|---------|---------|----------------|-------|
| programming / coding | 程式設計 (formal noun) / 寫程式 (casual verb phrase) | zh-TW | Pick by register; do not mix both in one document. |
| code (the prose noun) | 程式碼 | zh-TW | The capitalized token `Code` (a UI label or keyword) stays English, see § Keep in English. |
| developer | 開發者 / 工程師 | zh-TW | Near-synonyms; 工程師 leans toward "engineer" in a job-title sense. |
| streak | 連續學習天數 | zh-TW | Plain descriptive term. |
| tech / tech industry | 科技業 / 科技產業 | zh-TW | Near-synonyms for "the tech industry"; pick either, do not mix both in one document. |
| pitfall | 陷阱 | zh-TW | |

## Localize (use the Chinese term)

These are terms where the Chinese is used in prose, so the "Use (zh-TW/en)" column is `zh-TW` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Chinese | Use (zh-TW/en) | Notes |
|---------|---------|----------------|-------|
| number | 數字 | zh-TW | |
| integer | 整數 | zh-TW |  |
| float / decimal | 浮點數 (technical) / 小數 (plain) | zh-TW | Use 小數 where the floating-point nature doesn't matter. |
| character | 字元 | zh-TW | A single text character. |
| array / list | 陣列 | zh-TW | Exercise prose that says "list" informally is the same concept; render it with 陣列, do not introduce a second word. |
| index | 索引 | zh-TW | Use 索引 for both the array-position sense and the general concept. |
| string | 字串 | zh-TW | Fully localized per the loanword policy in `../zh/guide.md`; not kept in English. |
| Boolean | 布林 / 布林值 | zh-TW | Fully localized; not kept in English. |
| data type | 資料型態 / 型別 (dev-community casual) | zh-TW | The general concept, distinct from any specific type name. |

### Functions & control flow

| English | Chinese | Use (zh-TW/en) | Notes |
|---------|---------|----------------|-------|
| if statement | 條件式 / `if` 敘述 | zh-TW |  |
| condition | 條件 | zh-TW | Stands alone; no gloss needed. |
| comparison | 比較 | zh-TW | Stands alone; no gloss needed. |
| expression | 運算式 | zh-TW | |
| operator | 運算子 | zh-TW | |
| statement (executable) | 敘述 | zh-TW | The imperative sense: a line of code that does something and gets executed. |
| function | 函式 | zh-TW | Primary and only term; 函數 is not used, for consistency. The *keyword* `function` in code stays English; the concept in prose is 函式. |
| to call (a function) | 呼叫 | zh-TW | 呼叫一個函式. |
| to define (a function) | 定義 | zh-TW | |
| parameter | 參數 | zh-TW | Declaration-site name. |
| argument | 引數 | zh-TW | Call-site value; distinguishes it from 參數 (parameter). |
| input (to a function) | 輸入 | zh-TW |  |
| output | 輸出 | zh-TW |  |
| to return (a value) | 回傳 | zh-TW | 「回傳一個值。」 |
| return value | 回傳值 | zh-TW | Noun form; distinct from the verb 回傳. |
| brackets (the two after a function name) | 括號 | zh-TW | Chinese needs no round/square disambiguation here: bare 括號 defaults to the round pair. Say 小括號 only where the contrast with 方括號 (square brackets) is actually being drawn. Counted with Arabic numerals: 那兩個括號. |

### Loops, state & program flow

| English | Chinese | Use (zh-TW/en) | Notes |
|---------|---------|----------------|-------|
| keyword | 關鍵字 | zh-TW |  |
| interpreter | 翻譯員 | zh-TW | 直譯器 is the word for the software, with the 器 suffix naming a device. Needs a native speaker's eye: this rendering was chosen to name a character whose job was to interpret the reader's code, which is not how Exercism uses the word. On Exercism an interpreter is the program that runs the code. Left as it stands rather than changed by an agent. |
| mental model | 心智模型 | zh-TW | |
| (programming) language | 程式語言 (full) / 語言 (once context is clear) | zh-TW | Use 語言 alone for "a language a computer understands" where 程式語言 has already been established in the same passage. |
| variable | 變數 | zh-TW | |
| assignment | 賦值 / 指定 | zh-TW | Noun. |
| to assign | 指定 / 賦予 | zh-TW | Verb. |
| code block | 程式區塊 | zh-TW | Deliberately distinct from 作用域/範圍 (scope). |
| error | 錯誤 | zh-TW | |
| nested | 巢狀 | zh-TW | e.g. 巢狀迴圈 = nested loop. |
| iteration | 疊代 | zh-TW | |
| to run / execute (code) | 執行 | zh-TW | |
| loop | 迴圈 | zh-TW | |
| for loop | `for` 迴圈 | zh-TW | Keep `for` in code font (real keyword) + 迴圈. |
| while loop | `while` 迴圈 | zh-TW | As above. |
| scope | 作用域 / 範圍 | zh-TW | Fully translated, not kept in English. This locale allows either form. |
| object | 物件 | zh-TW | |
| class | 類別 | zh-TW | |
| property | 屬性 | zh-TW |  |

### Tooling & engineering

| English | Chinese | Use (zh-TW/en) | Notes |
|---------|---------|----------------|-------|
| module | 模組 | zh-TW | |
| algorithm | 演算法 | zh-TW | |
| database | 資料庫 | zh-TW |  |
| frontend / backend | 前端 / 後端 | zh-TW | The English forms are not used in Chinese prose. |
| debugging (the activity) | 除錯 | zh-TW | The activity, fully localized. The capitalized token `Debug` stays English, see § Keep in English. |

### Platform & curriculum vocabulary

| English | Chinese | Use (zh-TW/en) | Notes |
|---------|---------|----------------|-------|
| feature (platform capability) | 功能 | zh-TW | Deliberately distinct from 函式 (function); the two do not collide in Taiwan usage. Never use 函式 for a product feature. |
| course | 課程 | zh-TW | The whole course the reader is taking (在這門課程裡). 課程 is reserved for this sense; a single lesson inside it is 單元, and the syllabus-level sense is 課程大綱. |
| lesson | 單元 | zh-TW | One teaching unit inside a 課程; 一堂課 is fine in casual prose. Must not be 課程, which is "course". |
| exercise | 練習 | zh-TW | |
| curriculum | 課程大綱 / 課綱 | zh-TW | Low-medium confidence: may read as overly "school system" for a warm tone. Flag for native-speaker review via `/action-forum-post`. |
| mentor / mentoring | 導師 / 引導 | zh-TW | |

## Keep in English

These stay in English in prose. See `../zh/guide.md` § Loanword policy for why this section is short: the loanword policy is "fully localize", so only true acronyms, product/language names, code tokens, and the handful of loanwords Taiwanese developers genuinely write in Chinese prose belong here.

| Term | Chinese word, where the English explains the term | Notes |
|------|-------------------------------|-------|
| API | 應用程式介面 | Not a word a beginner knows; where the English itself explains the term, explain the concept in Chinese, not just gloss the acronym. |
| CLI (the concept) | 命令列 | Explain CLI as 命令列 (command line) where the English itself explains the term. |
| bug | (no gloss) | Do not use 錯誤, which is "error". The activity is localized: 除錯. |
| JavaScript, Python, React | (no gloss) | Product / language names. |
| `Debug`, `Test`, `Code` | (no gloss) | Only as capitalized UI labels / technical tokens. The prose words are localized: 除錯, 測試, 程式碼. |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Programming keywords (`function`, `if`, `for`, ...) | (none) | Always English, including inside prose. Translate only the surrounding explanation. |
