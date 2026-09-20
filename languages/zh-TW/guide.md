# Taiwan Traditional Chinese (zh-TW) language guide

Taiwan Traditional Chinese belongs to the Chinese family. Read `../zh/guide.md` first for
everything shared with Mainland Simplified Chinese (`zh-CN`); this file states only what is
distinct. Readers are in Taiwan. Register and voice are nearly identical to `zh-CN`; the
deliberate differences are script, quotation-mark glyphs, particle calibration, and the
lexical splits recorded in `glossary.md`. Keep those splits and no others.

## Script

Write in **Traditional Chinese characters** throughout. Never mix in Simplified characters.
Do not use Duolingo's zh-TW app UI as a reference for this locale.

## Register and particle calibration (zh-TW specifics)

- 你 throughout, never 您. 您 reads as distant and wrong for this voice.
- **Use sentence-final particles more freely than `zh-CN` does.** Light, encouraging
  particles (啊, 喔, 呦, 吧, 呢) calibrated toward warmth read naturally here: 試試看吧！,
  很棒喔！. Lean into them more than the Mainland locale does, while staying natural rather
  than saccharine. Do not overuse them in dense technical explanation; save them for
  encouragement, invitations, and moments of praise.

## Quotation marks

Use corner brackets **「」** for Chinese-language quotation, with **『』** for a quotation
nested inside one. This is settled; do not re-decide it per page.

## Worked examples

Concrete Taiwan Traditional Chinese for the principles in `global/voice.md`.

**Natural phrasing** (good vs stiff/literal):
- "First, define a function" → 首先，定義一個函式（not the stiff, over-formal
  首先，您需要定義一個函式）
- "Try running this code" → 試著執行看看這段程式碼吧
- "Let's begin" → 我們開始吧
- "You did it!" → 你做到了！很棒喔！

**Introducing a term** (where the English itself explains it, per `global/voice.md`,
realized with the family's 英文： marker from `../zh/guide.md`). Follow these rather than
re-deciding per page:
- A prose term: 函式（英文：_functions_）. The Chinese is primary, the English goes once in
  full-width parentheses after 英文：, in italics.
- A code identifier: `move`（移動）. Backticks, never italics; the gloss is the
  identifier's *meaning* in Chinese, with no 英文： marker.

**Common EN→zh-TW pitfalls:**
- English "it" as subject → drop it where Chinese doesn't need an explicit subject: "it
  returns a value" → 回傳一個值 / 這個函式會回傳一個值
