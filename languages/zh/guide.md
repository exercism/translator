# Chinese (zh) family guide

The Chinese realization of `global/voice.md` shared by every Chinese locale: Mainland
Simplified (`zh-CN`) and Taiwan Traditional (`zh-TW`). Each locale's own `guide.md` states
only what diverges from this file. Term choices are in this file's `glossary.md` plus each
locale's own `glossary.md`; together they are binding.

## Register and address

- **Use 你 throughout, in both locales. Never 您.**
- **Sentence-final particles** (吧, 呢, 哦, 啊, 喔, 呦) can soften an instruction or add
  encouragement, but use them lightly. How lightly differs by locale, and each locale guide
  states its own calibration; when unsure, use fewer rather than more.

## Writing norms

- Short, problem-first sentences. Break a long English sentence into two or more Chinese
  ones rather than mirroring its structure: Chinese instructional prose does not chain long
  subordinate clauses the way English can.
- Chinese has no tense or number inflection. Carry aspect (whether an action is ongoing,
  completed, or experienced) with particles (了, 过, 着), not verb endings. There are no
  articles ("a"/"the"); do not try to render them.

## Loanword policy

**Fully localize.** Render core CS vocabulary (string, Boolean, array, and the rest of the
core term list) with the Chinese term, in both locales. The only exceptions:

- **The acronyms API and CLI.** Keep the acronym itself in English. Where the English itself
  explains one, explain the concept in Chinese using the gloss in that locale's glossary
  (the two locales' gloss phrases differ by script); otherwise use the acronym bare and add
  no gloss.
- **Product and language names** (JavaScript, Python, React, ...) and **code tokens**
  (variable/function names, CLI commands, programming keywords), which are never translated.

## Mechanics: numerals, spacing, punctuation

- **Numerals:** use Arabic numerals (1, 2, 3, ...) for counts and quantities in prose, not
  spelled-out Chinese numerals.
- **CJK/Latin spacing:** put a half-width space between Chinese text and any adjacent
  **plain, unformatted** Latin letters, digits, or code token, e.g. 使用 5 个参数.
  **Exception: no space when the Latin/code run is already set off by bold or inline code
  formatting**, e.g. 点击**运行代码** and 这里我们比较了`a`和`b`的值, never 点击 **运行代码**
  or 了 `a` 和 `b` 的.
- **Full-width Chinese punctuation.** Use full-width forms (，。！？；：、) for Chinese
  sentence punctuation in both locales.
- **Parentheses.** Use full-width （） for a gloss or aside inside Chinese prose, including
  when what sits inside them is an English word or a code token, e.g. 变量（variable）. Use
  half-width ( ) only inside code or inside a fully Latin-script run.
- **Quotation marks** are locale-specific glyphs, not a shared convention; each locale guide
  gives its own.

## Style notes

- **Em dashes.** Replace an em dash with a full-width comma (，) for a mid-sentence aside,
  or with two separate sentences.

