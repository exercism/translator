# Japanese (ja) glossary

The agreed term list for Japanese. Every term here has been agreed and is binding: use it
exactly, with no synonyms and no mixing within a document. Why each term was chosen, and
who chose it, is in the decision log (`glossary-notes.md`).

## Core decisions

| English | Japanese | Use (ja/en) | Notes |
|---------|----------|-------------|-------|
| programming / coding | プログラミング | ja | Use プログラミング consistently. 「コーディング」only when the source specifically stresses the casual act of writing code. Never mix both in one document. |
| developer | エンジニア | ja | 「開発者」is a more literal alternative; do not mix both in one document. |
| streak | 連続学習日数 | ja | The "consecutive days practised" sense. |
| tech / tech industry | IT業界 | ja | Do not switch to 「テック業界」mid-document. |

## Localize (use the Japanese term)

These are terms where the Japanese is used in prose, so the "Use (ja/en)" column is `ja` throughout. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Japanese | Use (ja/en) | Notes |
|---------|----------|-------------|-------|
| number | 数値 | ja | 数値 in a programming context; 「数」in casual mention. |
| float / decimal | 小数 | ja | 「浮動小数点数」when the floating-point nature specifically matters. |
| true / false | `true` / `false` | ja | Keep the literals in code font (Jikiscript tokens). Described conceptually as 真偽; not rewritten to 真/偽 in prose. |
| array / list | 配列 | ja | Exercise prose sometimes says "list" informally for the same concept; render both with 配列, do not introduce a second word. |
| index | インデックス | ja | No gloss needed. 「添字」is a native alternative; do not mix both in one document. |
| Boolean | 真偽値 | ja | 「ブール値」is an alternative; do not mix both in one document. |

### Functions & control flow

| English | Japanese | Use (ja/en) | Notes |
|---------|----------|-------------|-------|
| if statement | `if`文 | ja | Keep `if` in code font + 文. |
| NOT operator / logical negation | 否定 | ja | 「NOT演算子」when the operator itself is meant. |
| statement (executable) | 文 | ja | The imperative sense: a line of code that executes, e.g. `if`文、代入文. |
| statement (logical claim) | 命題 | ja | The proposition sense: a claim that is true or false. Pick by meaning, not by the English word. |
| function | 関数 | ja | The *keyword* `function` in code stays English; the concept in prose is 関数. |
| parameter | 仮引数 | ja | The declaration-site name. Rarely surfaced; Jiki prose favours 入力. |
| input (to a function) | 入力 | ja | Jiki prefers this over parameter/argument in prose. |
| return value | 戻り値 | ja | Noun form; distinct from the verb "to return". 「返り値」is a common alternative; use 戻り値, not 返り値. |
| brackets (the two after a function name) | 括弧 | ja | Plain 括弧, not 丸括弧, for the `()` pair written after a function name. Show the glyph on the first mention in a page, 「括弧（`()`）」, then bare 括弧 after that. Do not render "two brackets" as 「2つの括弧」. See the Brackets section below. |

### Loops, state & program flow

| English | Japanese | Use (ja/en) | Notes |
|---------|----------|-------------|-------|
| keyword | キーワード | ja | 「予約語」is a more precise alternative; do not mix. |
| interpreter (the program) | インタプリター | ja | The software sense: the thing that turns written code into 1と0. Keep the final ー: the guide's keep-the-ー rule applies here too. Do not write インタプリタ, and do not stretch it to インタープリター. |
| interpreter (the one interpreting, incl. Jiki) | 通訳者 | ja | The personified sense, where the interpreter is named as a someone (Jiki). **Never bare 通訳 here**: 通訳 on its own names the *activity*, so 「このコースでの通訳はJikiです」reads as Jiki being a kind of interpreting. Bare 通訳 is correct only in activity phrasings (「Jikiが通訳をしてくれます」「通訳の役割を担うプログラム」), and those are usually the more natural rewrite. |
| instruction (given to Jiki) | 指示 | ja | Do not use 命令, which reads as a command in the military/legal register (and as a CPU instruction). |
| mental model | イメージ | ja | 「頭の中のイメージ」when the "in your head" part needs saying. Do not use メンタルモデル and do not drift to 考え方 mid-page: one word per document. |
| (programming) language | プログラミング言語 | ja | The technical compound is プログラミング言語. For the "a language the computer understands" framing, use the ordinary 言葉 (「コンピューターにわかる言葉」). These are the two senses the source itself distinguishes, not two words for one thing; never reach for a katakana ランゲージ. |
| code block | ブロック | ja | 「コードブロック」acceptable. Keep distinct from スコープ (scope). |
| nested | 入れ子 | ja | 入れ子のループ = nested loop. 「ネスト」also used; do not mix both in one document. |
| iteration | 繰り返し | ja | 「反復」/「イテレーション」are alternatives. |
| for loop | `for`ループ | ja | Keep `for` as the real keyword in code font + ループ. |
| while loop | `while`ループ | ja | As above. |
| for-of loop | `for-of`ループ | ja | As above. |
| break (loop control) | 抜ける | ja | ループを抜ける。 The keyword `break` in code stays English; this is the prose verb for the concept. |
| modulo / remainder operator | 余り | ja | The `%` operator. 「剰余」is the technical alternative. |
| scope | スコープ | ja | No gloss needed. Keep distinct from ブロック (code block). |

### Tooling & engineering

| English | Japanese | Use (ja/en) | Notes |
|---------|----------|-------------|-------|
| auth (authentication / authorization) | 認証 / 認可 | ja | Pick by meaning: 認証 = authentication, 認可 = authorization. |
| framework | フレームワーク | ja | Where the source `<define>`s it, explain that it means a reusable structure (再利用できる骨組み); otherwise use フレームワーク bare. |

### Platform & curriculum vocabulary

| English | Japanese | Use (ja/en) | Notes |
|---------|----------|-------------|-------|
| feature (platform capability) | 機能 | ja | Different word from 関数 (function); no collision. Never use 関数 for a product feature. |
| exercise | 演習 | ja | 「エクササイズ」is an alternative; do not mix both in one document. |
| course | コース | ja | The whole Jiki course the learner is taking (「このコースでは、Jikiが通訳をしてくれます」). Keep distinct from レッスン (lesson) and カリキュラム (curriculum); do not use 講座. |
| milestone | マイルストーン | ja | 「節目」is a native alternative. |
| pathway | 学習パス | ja | A structured learning sequence; near-synonym of "track". |
| solution (learner's submission) | 解答 | ja | The code the learner writes for an exercise. Avoid 「ソリューション」. |
| bouncer (club/bar doorkeeper) | バウンサー | ja | Never 門番, which is a gatekeeper guarding the gate of a castle. |
| foot-gun | (descriptive) | ja | Use a descriptive phrase such as「自滅の元になりやすい機能」rather than forcing a fixed term. |

## Keep in English

These stay in English in prose. This set is deliberately **small in Japanese**: strong
native terms cover most concepts (e.g. `string` → 文字列, `Boolean` → 真偽値, `framework` →
フレームワーク), so only genuinely Latin-script items live here. Where the source
`<define>`s one of these terms, use the Japanese in the gloss column below; with no
`<define>`, use the English bare, no gloss.

| Term | Japanese gloss (on `<define>`) | Notes |
|------|--------------------------------|-------|
| API | explain what it is in Japanese | Where defined, explain the concept in Japanese (プログラム同士が情報をやり取りする仕組み), not just gloss the acronym. |
| CLI (the concept) | コマンドラインインターフェース | Explain CLI as コマンドラインインターフェース (command-line interface) where the source defines it. |
| JavaScript, Python, React | (no gloss) | Product/language names. |
| Debug, Test | (no gloss) | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend (as UI labels / product tokens) | (no gloss) | Latin script **only** where these are interface labels or product tokens. In running prose the ordinary Japanese words are the katakana ones, and those are what to use: コード、バグ、フロントエンド、バックエンド (per "Default to the ordinary, common word" in `global/voice.md`). |
| Variable and function names | (no gloss) | Never translated. |
| CLI commands (`npm install`, `git commit`) | (no gloss) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | (no gloss) | Always English, including inside prose. Translate only the surrounding explanation. |

## Brackets

Default to plain **括弧**. Show the glyph in a code tag immediately after, in full-width
parentheses, on the **first mention in a page**: 「括弧（`()`）」, then bare 括弧 after
that. When a specific bracket type matters (disambiguating one kind from another), name the
kind as well: 「角括弧（`[]`）」.

| Glyph | Japanese | Notes |
|-------|----------|-------|
| `()` | 括弧 · 丸括弧 | Plain 括弧 by default; add 丸 + glyph only when disambiguating. |
| `[]` | 角括弧 | Also 大括弧. |
| `{}` | 波括弧 | Also 中括弧・ブレース. |
| `<>` | 山括弧 | |

Example: 「関数を呼び出すには、関数名のあとに括弧（`()`）を書きます。」
