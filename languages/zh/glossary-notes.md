# Chinese (zh) family glossary notes

The decision log for the terms shared by every Chinese locale (`zh-CN`, `zh-TW`). A decision
recorded here binds the whole family. Each locale's own decisions are logged in its own
`languages/<locale>/glossary-notes.md`.

## 2026-08-01: Family guide pruned; rationale moved here

**Decided by:** agent (guide-pruning pass). No term rendering changed. The family guide is
loaded into the prompt for every Chinese item in both locales, so research provenance,
connotation analysis and justification paragraphs were moved here; every behavioural
instruction stayed in the guide.

Rationale removed from `guide.md`, kept for the record:

- **Register (你, never 您).** Chinese has no grammatical T-V distinction the way Spanish or
  Hungarian does: there is no verb conjugation that shifts with formality, so the pronoun is
  the only lever. 你 (informal, direct) is what every general-audience programming tutorial
  site checked in research uses; 您 is reserved for customer service, elders, or officialdom,
  none of which fits Jiki's voice. Chinese also has no gendered second-person address, so the
  gender-neutral-phrasing problem some other languages face (see e.g. `es-419/guide.md`) does
  not arise here.
- **Particle calibration.** Mainland general-audience tutorial prose (廖雪峰的官方网站,
  菜鸟教程) uses sentence-final particles sparingly; Taiwan ed-tech content (六角學院, ALPHA
  Camp) uses them more freely to carry a warm, playful tone. That research is what the two
  locales' differing calibrations are based on.
- **Loanword policy.** Mainland and Taiwan technical writing both fully translate string,
  Boolean, array and the rest of the core term list natively, so using the English word for
  these would read as unnatural or lazy in both locales. This is why the family, unlike some
  others in this repo, has no "keep in English" table for core CS vocabulary.
- **CJK/Latin spacing.** The half-width space between Chinese text and adjacent plain Latin
  is a strong, widely followed community convention (not a single national standard) in both
  Simplified and Traditional technical writing. The exception for bold/inline-code runs is
  **native-speaker-confirmed** (taylorren, post #2, 2026-08-01): Chinese does not use space as a word separator
  at all, and the bold/code formatting already marks the boundary visually, so an added space
  is redundant and reads wrong to native readers. Do not overturn this without taylorren.
- **Full-width punctuation and Arabic numerals** are shared typesetting conventions across
  Simplified and Traditional technical writing; that is why they sit in the family file
  rather than per locale.
- **Metaphors.** The chain (array) image is used in both locales rather than a "list" or
  "sequence" abstraction. Taiwan usage explicitly avoids the alternative word for "chain"
  that carries a shackle/prison connotation, which is the wrong tone for a teaching
  metaphor; the Mainland rendering is additionally well-grounded, being the same root used
  in every standard Chinese data-structures textbook for "linked list", so it is a native
  image rather than an imported one. `machine` is the same underlying word in both locales
  but 机/機 is a Simplified/Traditional pair, so the glyphs differ. `shelves` is not a shared
  metaphor at all: Mainland and Taiwan research proposed genuinely different words, not just
  a script difference, so each locale decides independently.
- **"Feature" vs "function"** does not collide in either locale (功能 vs 函数 / 函式). The
  rule moved out of all three guides into the glossary rows where the term mapping belongs;
  `zh-TW` had no `feature` row, so one was added (功能) carrying the "never use 函式 for a
  product feature" instruction.

## 2026-08-01: Acronym glossing corrected to the `<define>` model

**Decided by:** agent, on the authority of `global/voice.md`. **Terms affected:** none; this
is a guide correction.

The family guide's loanword policy told the translator to gloss API and CLI "on first use in
a document". `global/voice.md` states that a `<define>` tag is the **only** trigger for
clarifying a term, that there is no first-use auto-detection, and that auto-glossing is
forbidden (`global/translating.md`'s tidy pass lists auto-glosses as something to remove).
API and CLI are genuine acronyms, which `voice.md` does license explaining, so the terms stay
in the exceptions list and keep their per-locale gloss phrases; only the first-occurrence
framing was removed. The guide now says: where the source `<define>`s one, explain the
concept in Chinese; with no `<define>`, use the acronym bare with no gloss. The reference to
building a "keep in English, gloss once" table was removed with it.

## 2026-08-01: Parentheses around glosses are full-width (unconfirmed draft)

**Decided by:** agent. **Status: unconfirmed draft, needs native-speaker confirmation** (raise
on both locales' pinned glossary threads).

The family guide contradicted itself: it said to use "half-width ( ) around an English word
or code token", but its own example for that rule was full-width (变量（variable）), the
family's § Term clarification rule specifies full-width parentheses containing English
(函数（英语：function）), and both locales' worked examples use full-width for exactly this
case (函式（英語：_functions_）, `move`（移動）). Every worked instance in the family
disagreed with the imperative, so the imperative was the outlier and was rewritten to match:
full-width （） for any gloss or aside inside Chinese prose, whatever the script of its
contents; half-width ( ) only inside code or inside a fully Latin-script run. This is the
better-supported of two genuinely defensible conventions (Chinese style guides split on
whether Latin content takes half-width parens), not a settled decision.
## 2026-08-01: `X vs Y` matchup naming keeps English "vs" (unconfirmed)

**Decided by:** agent, from the zh-TW rock-paper-scissors message-catalog pass. **Status:
unconfirmed draft**, a proposal only, not written to any glossary.

Head-to-head scenario names (石頭 vs 布) keep the English "vs" with CJK spacing, matching the
source's sentence-level names. 對 (X 對 Y) is equally defensible, and the choice recurs in
every head-to-head scenario name in game exercises, so passes picking differently would
diverge visibly on one screen. The rendering contains no script-variant characters, so if
agreed it qualifies for the family glossary rather than a locale file; zh-CN faces the same
question and has not weighed in.

## 2026-08-01: `character` (maze/on-screen figure) is `角色`; mental-model sense split out

**Decided by:** native speaker (cherylli), posts #2/#4/#5, and topic 792,
post #3.
**Terms affected:** `character` (the maze/on-screen figure).

zh-TW was using 小人 (unconfirmed, no glossary row) in one spot, flagged as reading like "a
petty/mean person" rather than a friendly figure. cherylli noticed zh-CN's published content
already uses 角色 for this exact figure, consistently and with no bad connotation, and
zh-TW's own maze translation already used 角色 everywhere except the one 小人 instance —
so 角色 was already the de facto answer on both sides for the maze figure specifically.

This row originally also covered the "little man inside the computer" mental-model image
(same word for both senses), but cherylli reconsidered (topic 792 post 3): 角色 reads as a
game/screen character, which fits the maze but not the more general, imagined "little
person" of the mental model; she prefers 小傢伙 (a more general, affectionate word) for
that sense. Split accordingly — this family row now covers the maze/on-screen sense only;
zh-TW's own glossary carries the mental-model sense separately (小傢伙). zh-CN was not
consulted on the split (cherylli is a zh-TW reviewer), so zh-CN's mental-model paragraph
stays 角色 for both senses unless a zh-CN native speaker says otherwise.

## 2026-08-01: `true / false` moves to Keep in English

**Decided by:** native speaker (cherylli) on the pinned Traditional Chinese glossary thread,
the forum, post #3. **Terms affected:** `true / false`.

真/假 was an unconfirmed agent row. cherylli checked several Chinese CS books and reports
they consistently use `true`/`false` untranslated rather than 真/假, so this moves to Keep
in English: gloss as 真/假 only where the source `<define>`s it, then use `true`/`false`
freely, matching how code literals were already handled.

## 2026-08-01: Native-speaker review of the shared Chinese terms

**Decided by:** native speaker taylorren, on the forum ("SC translations discussion and
general view for consideration"), post 1. Applied by agent.
**Terms affected:** `workflow`, `dictionary`.

- **`workflow` moved from 工作流程 to 工作流.** 工作流 is the term Chinese software writing uses
  for the engineering sense (as in 工作流引擎, "workflow engine"); 工作流程 reads as a business
  process rather than the technical concept. 工作流 is character-identical in both scripts, so
  the term stays in the shared family file.
- **`dictionary` (字典) left unchanged, pending a follow-up question.** The reviewer proposed
  字典 → 词典 on the grounds that 字 is a single character and carries little meaning on its
  own, so 词 (a word of one or more characters) is the natural "meaning unit". The argument is
  sound for the everyday word, but the glossary row is the *data structure* sense (a
  key-value mapping), and 字典 is the established rendering for it in Mainland programming
  writing, including Python's own Chinese documentation. Changing it would also move the term
  out of this shared file, because 词典/詞典 is not character-identical across scripts, so it
  would have to become one row per locale. Left as 字典 until the reviewer confirms whether
  the proposal was aimed at the data-structure sense; raise it on the forum.

## 2026-08-07: Term-clarification marker corrected from 英語：/英语： to 英文：

**Decided by:** native speaker (ramhuw), post #1. **Terms affected:** the family's term-clarification
marker (`§ Term clarification` in `guide.md`), not a glossary row.

The marker recorded in "2026-08-01: Parentheses around glosses are full-width" was still an
unconfirmed draft awaiting native-speaker confirmation. ramhuw points out that 英語 mostly
means *spoken* English, while 英文 is the correct term for the *written* language, which is
what the marker is actually glossing (a written English word or code token set off in
parentheses). Changed the marker from 英語：/英语： to 英文： throughout: the family guide,
zh-TW's guide, zh-CN's glossary example, and every already-published zh-CN and zh-TW file
using the old marker.
