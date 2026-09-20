# Chinese (zh) family glossary

The agreed term list shared by every Chinese locale: Mainland Simplified (`zh-CN`) and Taiwan Traditional (`zh-TW`). Every term here has been agreed and is binding for both locales: use it exactly, with no synonyms and no mixing within a document.

## How this file changes

Nothing is written here without prior agreement. A translation pass never edits this file; it surfaces new terms it had to decide on as proposals in its output (a "glossary delta"). Those proposals are discussed, and only once agreed are they written in (by a human or by Claude). So everything in this file is, by definition, already agreed.

A term lives in **exactly one** glossary file: this family file, or one locale's own `glossary.md`, **never both**. A term defaults to the locale file; it only moves here once its rendering, `Use (zh/en)` column, and Notes are confirmed **character-identical** across `zh-CN` and `zh-TW`, not merely the same underlying word. Because Mainland writing uses Simplified characters and Taiwan writing uses Traditional characters, most Chinese words that are "the same word" still render as different glyphs (e.g. 数/數, 变/變, 语/語), so this bar is stricter than for other language families in this repo: a term only belongs here if none of its characters have a Simplified/Traditional variant at all. When reading a locale's effective glossary, it is this file's rows plus that locale's own `glossary.md` rows (concatenation, not an override lookup, because of the one-place rule). If a term is not here, check the relevant locale file; it has not necessarily gone unagreed, it may simply diverge by locale or script.

## Localize (use the Chinese term)

These are terms whose Chinese rendering is confirmed identical, character for character, across both locales. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Chinese | Use (zh/en) | Notes |
|---------|---------|-------------|-------|
| value | 值 | zh | Ordinary word. Identical in both scripts. |
| dictionary | 字典 | zh | Identical in both scripts. |
| element | 元素 | zh | Array element. Identical in both scripts. |
| character (maze/on-screen figure) | 角色 | zh | The on-screen figure the learner controls in maze exercises. Not 小人 (reads as "a petty/mean person" or an old humble first-person pronoun in Chinese, not a friendly figure). Distinct from the text-character sense (字符 in zh-CN's glossary), so no collision. Identical in both scripts. For the separate "little person imagined inside the computer" mental-model sense, see each locale's own glossary — the two senses may take different words. |

### Tooling & engineering

| English | Chinese | Use (zh/en) | Notes |
|---------|---------|-------------|-------|
| method | 方法 | zh | Identical in both scripts. |
| workflow | 工作流 | zh | The software-engineering sense. Identical in both scripts. |
| deploy | 部署 | zh | Identical in both scripts. |
| framework | 框架 | zh | Fully translated (see § Loanword policy in `guide.md`); not kept as an English loanword. Identical in both scripts. |

## Keep in English

| English | Chinese word, where the English explains the term | Notes |
|---------|-------------------------------|-------|
| true / false | 真 / 假 | Real Chinese CS books use `true`/`false` untranslated in prose; keep it that way, only explaining it as 真/假 where the English itself explains the term. Code literals stay English regardless. Identical in both scripts, so it lives here in the family file. |

## Exercism product vocabulary: PROPOSED, NOT YET AGREED

**Nobody who speaks Chinese has agreed any row in this section, and no rendering has been
proposed.** These are the nouns Exercism's own product vocabulary is built from, and they are
the rows we most need a native speaker to fill in, because each one appears on hundreds of
pages. The target column is deliberately empty: an agent's invented rendering sitting in a
glossary reads as an agreed one, and these terms are too visible for that. They sit in the
family file because the product's own nouns are shared by every locale in the family; a
locale that ends up wanting its own rendering moves that row down into its own glossary.
`global/terms.md` describes what each term means on Exercism.

| English | Proposed Chinese | Use (zh/en) | Notes |
|---------|------------------|------------------|-------|
| track |  |  |  |
| to join (a track) |  |  |  |
| exercise |  |  |  |
| concept exercise / learning exercise |  |  |  |
| practice exercise |  |  |  |
| syllabus |  |  |  |
| learning mode / practice mode |  |  |  |
| locked / unlocked / available / in progress / completed |  |  |  |
| to unlock |  |  |  |
| solution |  |  |  |
| iteration (a submitted version of a solution) |  |  |  |
| to submit |  |  |  |
| to publish (a solution) / published |  |  |  |
| community solutions |  |  |  |
| to star / stars |  |  |  |
| mentor / mentoring |  |  |  |
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
