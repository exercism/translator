# Mainland Simplified Chinese (zh-CN) glossary

The agreed term list for what is distinct about Mainland Simplified Chinese. Read `../zh/glossary.md` first for the terms shared with Taiwan Traditional Chinese (`zh-TW`); this file holds only the terms that diverge between the two locales (by wording, or by script even when the underlying word is the same), plus terms that exist only for Mainland Simplified Chinese. A term lives in **exactly one** glossary file, this one or the family's, **never both**. A locale's effective glossary is `../zh/glossary.md`'s rows plus this file's rows, read together. Why each term was chosen, and who decided it, is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Chinese | Use (zh-CN/en) | Notes |
|---------|---------|----------|-------|
| programming / coding | 编程 | zh-CN | Use consistently. |
| code (the noun, in prose) | 代码 | zh-CN | "写代码". The UI label `Code` stays English (see § Keep in English). |
| developer | 开发者 | zh-CN | |
| streak | 连续学习天数 | zh-CN | |
| tech / tech industry | 科技 / 科技行业 | zh-CN | 科技 for the general adjective/noun sense, 科技行业 for "the tech industry" specifically. |
| pitfall | 坑 (preferred, informal) / 陷阱 (formal) | zh-CN | Use 陷阱 only where a more formal register is genuinely called for. Do not mix both in one document. |
| frontend / backend | 前端 / 后端 | zh-CN | The English is never used in prose. |

## Localize (use the Chinese term)

These are terms where the Chinese is used in prose, so the "Use (zh-CN/en)" column is `zh-CN` throughout; where the English explains the term add the English per `../zh/guide.md` § "Term clarification", e.g. 函数（英文：function）. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Chinese | Use (zh-CN/en) | Notes |
|---------|---------|----------|-------|
| number | 数字 | zh-CN | |
| integer | 整数 | zh-CN | |
| float / decimal | 浮点数 (technical) / 小数 (plain) | zh-CN | Use 小数 where the floating-point nature doesn't matter. |
| character | 字符 | zh-CN | A single text character. |
| array / list | 数组 | zh-CN | Exercise prose that says "list" informally is the same concept; render it with 数组, do not introduce a second word. |
| index | 下标 (primary, array/list indexing) / 索引 (general concept, e.g. database index) | zh-CN | Keep the two senses distinct: 下标 for a position inside an array/list, 索引 for the broader concept. |
| key-value pair | 键值对 | zh-CN | The key itself is 键 (ordinary word once introduced). |
| string | 字符串 | zh-CN | Fully localized per the loanword policy in `../zh/guide.md`; not kept in English. |
| Boolean | 布尔 / 布尔值 | zh-CN | Fully localized; not kept in English. |
| data type | 数据类型 | zh-CN | The general concept, distinct from any specific type name. |

### Functions & control flow

| English | Chinese | Use (zh-CN/en) | Notes |
|---------|---------|----------|-------|
| if statement | `if` 语句 (primary) / 分支语句 | zh-CN | Do not write 条件语句: 条件 is the separate term for `condition` (see below). |
| condition | 条件 | zh-CN | Stands alone; no gloss needed. |
| comparison | 比较 | zh-CN | Stands alone; no gloss needed. |
| expression | 表达式 | zh-CN | |
| operator | 运算符 | zh-CN | |
| statement (executable) | 语句 | zh-CN | The imperative sense: a line of code that does something and gets executed. |
| statement (logical claim) | 判定 | zh-CN | The proposition/assertion sense: a claim that is true or false, determinable on the spot (e.g. `if (a > b)`). Not 断言 (too formal for young users), not 命题 (implies a full conjecture whose truth isn't yet known, not an immediately-checkable condition). Pick by meaning, not by the English word. |
| function | 函数 | zh-CN | The *keyword* `function` in code stays English; the concept in prose is 函数. |
| to call (a function) | 调用 | zh-CN | 调用一个函数. |
| to define (a function) | 定义 | zh-CN | |
| parameter | 形参 | zh-CN | Declaration-site name. Keep distinct from 实参 (argument), see below. |
| argument | 实参 | zh-CN | Call-site value. Keep distinct from 形参 (parameter). |
| input (to a function) | 输入 | zh-CN | |
| output | 输出 | zh-CN | |
| to return (a value) | 返回 | zh-CN | "返回一个值。" |
| return value | 返回值 | zh-CN | Noun form; distinct from the verb 返回. |
| brackets (the two after a function name) | 括号 | zh-CN | The `()` pair written after a function name; "写下它的名字，后面加上那对括号". Bare 括号 reads as round brackets in Mainland usage, so no qualifier is needed; write 圆括号 (or 小括号) only where the text contrasts them with 方括号 / 中括号 (square brackets, `[]`) or 大括号 / 花括号 (curly braces, `{}`). Pick one name per pair and do not mix both within a document. |
| pure function | 纯函数 | zh-CN | |

### Loops, state & program flow

| English | Chinese | Use (zh-CN/en) | Notes |
|---------|---------|----------|-------|
| keyword | 关键字 | zh-CN | |
| interpreter | 翻译 (翻译员 where a countable person noun reads better) | zh-CN | 解释器 is the word for the software. Needs a native speaker's eye: this rendering was chosen to name a character whose job was to interpret the reader's code, which is not how Exercism uses the word. On Exercism an interpreter is the program that runs the code. Left as it stands rather than changed by an agent. |
| mental model | 思维模型 | zh-CN | |
| (programming) language | 编程语言 | zh-CN | Full form on introduction; the bare 语言 is fine later in the same page once the context is set (e.g. 计算机能听懂的语言). Do not mix in the English word. |
| variable | 变量 | zh-CN | |
| assignment | 赋值 | zh-CN | Noun. |
| to assign | 赋值 / 赋值给 | zh-CN | Verb; matches 赋值 above. |
| code block | 代码块 | zh-CN | Deliberately distinct from 作用域 (scope). |
| error | 错误 | zh-CN | |
| exception | 异常 | zh-CN | The catchable-error-object sense, distinct from 错误 (error) as a general term. |
| nested | 嵌套 | zh-CN | e.g. 嵌套循环 = nested loop. |
| iteration | 迭代 | zh-CN | Distinct from `zh-TW`'s 疊代; not a script variant, a genuinely different word. |
| to run / execute (code) | 运行 (default, casual) / 执行 (formal) | zh-CN | |
| loop | 循环 | zh-CN | Deliberately different from `zh-TW`'s 迴圈. |
| for loop | `for` 循环 | zh-CN | Keep `for` in code font (real keyword) + 循环. |
| while loop | `while` 循环 | zh-CN | As above. |
| for-of loop | `for-of` 循环 | zh-CN | As above. |
| loop body | 循环体 | zh-CN | |
| break (loop control) | 跳出循环 | zh-CN | The keyword `break` in code stays English; this is the prose concept of breaking out of a loop. |
| increment | 自增 | zh-CN | |
| modulo / remainder operator | 求模 (primary) / 求余 | zh-CN | The `%` operator. |
| concatenation / to concatenate | 拼接 | zh-CN | |
| toggle | 切换 | zh-CN | |
| state / stateful | 状态 / 有状态的 | zh-CN | |
| stateless | 无状态的 | zh-CN | The opposite of 有状态的 (stateful); use the pair consistently. |
| scope | 作用域 | zh-CN | Fully translated, not kept in English. Deliberately distinct from 代码块 (code block). `zh-TW` also offers 範圍 as an alternative rendering; this locale uses only 作用域, so the term is kept separate per locale rather than merged. |
| class | 类 | zh-CN | Deliberately different from `zh-TW`'s 類別. |
| property | 属性 | zh-CN | |
| object | 对象 | zh-CN | Deliberately different from `zh-TW`'s 物件. |
| encapsulation | 封装 | zh-CN | The OOP concept of bundling data with the methods that operate on it and hiding internals. |

### Tooling & engineering

| English | Chinese | Use (zh-CN/en) | Notes |
|---------|---------|----------|-------|
| auth (authentication) | 身份验证 | zh-CN | |
| auth (authorization) | 授权 | zh-CN | Keep distinct from 身份验证 (authentication); pick by meaning. |
| tool / tooling | 工具 | zh-CN | |
| module | 模块 | zh-CN | Deliberately different from `zh-TW`'s 模組. |
| algorithm | 算法 | zh-CN | Deliberately different from `zh-TW`'s 演算法. |
| edge case | 边界情况 | zh-CN | Do not mix with 边缘情况 in the same document. |
| backwards compatibility | 向下兼容 | zh-CN | Do not write 向后兼容: bare 向后 can read as "towards the future" (cf. 后来 = "later"), which inverts the meaning. |
| component | 组件 | zh-CN | Fully localized, not kept in English. |
| bug (a defect, in prose) | bug | en | Keep it lower-case in prose; the UI label `Bug` stays capitalized. |
| repository (git) | 代码仓库 | zh-CN | Always write the full 代码仓库 for the git sense, because bare 仓库 is the everyday word for a warehouse. |

### Platform & curriculum vocabulary

| English | Chinese | Use (zh-CN/en) | Notes |
|---------|---------|----------|-------|
| feature (platform capability) | 功能 | zh-CN | Deliberately distinct from 函数 (function); the two do not collide in Mainland usage. Never use 函数 for a product feature. |
| course | 课程 | zh-CN | The whole course the reader is taking. Counted with 门, and the short form 这门课 is the natural way to say "this course" in running prose, so both are this one term. Distinct from 课 (lesson), 课程体系 (curriculum) and 教程 (tutorial). |
| lesson | 课 | zh-CN | One teaching unit: 第 3 课, 一节课, counted with 节. |
| exercise | 练习 | zh-CN | |
| curriculum | 课程体系 | zh-CN | |
| level | 关卡 | zh-CN | The gamified sense. |
| milestone | 里程碑 | zh-CN | |
| bootcamp | 训练营 | zh-CN | |
| syllabus | 教学大纲 | zh-CN | |
| mentor / mentoring | 导师 / 指导 | zh-CN | |
| tutorial | 教程 | zh-CN | |
| solution (learner's submission) | 提交的解答 | zh-CN | |
| canvas (graphics exercises) | 画布 | zh-CN | The drawing surface in creative-coding exercises. |
| foot-gun | (descriptive, no fixed term) | zh-CN | Idiomatic; render descriptively per context, e.g. 容易误用的功能. Do not force a glossary row. |

## Keep in English

These stay in English in prose. Where the English itself explains one of these terms, use the Chinese in the gloss column below (per the format in `global/voice.md`); with no an explanation in the English, use the English bare, with no gloss. Only the interface labels/tokens below and true acronyms and product/language names count as kept in English; everyday prose words are translated (see § Core decisions and § Tooling & engineering).

| Term | Chinese word, where the English explains the term | Notes |
|------|-------------------------------|-------|
| API | 应用程序接口 | Not a word a beginner knows; where defined, explain the concept in Chinese, not just gloss the acronym. |
| CLI (the concept) | 命令行 | Where the source defines it, explain CLI as 命令行 (command line). In dev-tool contexts after that gloss, `CLI` may be used as the acronym; 命令行 remains the general-prose term. |
| JavaScript, Python, React | (no gloss) | Product / language names. |
| `Code`, `Debug`, `Test`, `Bug` (UI labels) | (no gloss) | **Only the interface labels and tokens of those names.** The everyday words in prose are translated: code is 代码, frontend/backend are 前端/后端 (see § Core decisions). Only bare `bug` also stays English in prose (see § Tooling & engineering). |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Programming keywords (`function`, `if`, `for`, ...) | (none) | Always English, including inside prose. Translate only the surrounding explanation. |
