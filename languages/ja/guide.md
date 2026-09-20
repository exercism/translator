# Japanese (ja) language guide

The Japanese-specific realization of `global/voice.md`: formality, orthography, sentence
structure, and term-clarification rules.

## Formality (critical, and it inverts the usual instinct)

`global/voice.md` asks for the informal, friendly register. In most languages that means
dropping the polite form. **In Japanese it means the opposite.** Use the polite **です・ます
form (敬体 / teineigo)** throughout, and warm it with *word choice and encouragement*, not by
dropping politeness.

- **Never である体 (plain-formal) or だ体 (plain-casual)**, and never drop to plain form for
  whole sentences. Keep the です・ます sentence endings consistent start to finish.
- **Invitational 〜ましょう** for shared steps we take together with the reader. This is the
  natural match for "Let's look at...": 「見てみましょう」「始めましょう」「書いて
  みましょう」.
- **〜てみましょう / 〜てみてください** for "try it": 「実行してみましょう」「試してみて
  ください」.
- **〜してください** for a direct instruction to the reader (a polite request), and plain
  **〜します** for stating what happens. Do not put 〜してください on every English
  imperative; steps we take together are 〜ましょう.
- **Sentence-final ね** occasionally, for rapport, and **〜んです / 〜のです** occasionally,
  for a warm explanatory tone. Use both sparingly; over-used they feel saccharine.
- **No honorific/humble keigo** (尊敬語・謙譲語: なさってください、ご覧ください、いたします).
  Plain です・ます is the right level.

**Do not address the reader as あなた.** Japanese avoids an explicit "you"; the reader is
addressed implicitly. "You can create a variable" is 「変数を作ることができます」, never
「あなたは変数を作ることができます」. Refer to a person named in the text **by name, with no
honorific**.

**The one exception: 私 for the author's own voice.** Where the English source has the author
genuinely speaking about himself ("When I learnt to code 34 years ago", "In my head, there's
a little man living in the computer"), keep the singular **私** as the explicit subject:
「私が34年前にプログラミングを覚えたとき」. This is narrowly the author's first-person
narration. It never licenses the editorial 私たち for "we", which still gets dropped (see
Concrete techniques below), and it never licenses あなた.

## Orthography and mechanics

Japanese-specific mechanical rules that are easy to get wrong from outside the language:

- **Writing system.** Use kanji for the established terms (`glossary.md` says which),
  katakana for loanwords, hiragana for grammar. **Do not over-kanji-fy.** "Open" (write in
  hiragana) formal auxiliaries and formal nouns: できる (not 出来る)、ください、いただく、
  こと、もの、とき、ため、ように、～ています.
- **Spacing.** Japanese has no spaces between words, and **by default no space belongs
  anywhere in Japanese prose**, including where Latin script, numerals or code sit inside it:
  write 「Exercismは、プログラミングの旅を案内してくれるサイトです」「棚の上に3つの機械が置いて
  あります」, not 「Exercism は…」or 「3 つの機械」. Follow this consistently, including in
  the glossary. Four things qualify it:
  - **Wrap every inline code or API term in a Markdown code span** (`` `move` ``,
    `` `turnLeft` ``, `` `if` ``, `` `()` ``) and write **no space around it**:
    「`move`と書いて、その後に括弧を付けます」「`if`文を使います」. The renderer gives a
    code span its own visual gap, so the spacing comes out right and stays consistent
    without anyone placing it by hand. Where a code span is not available (image `alt`
    text, plain-text fields), write the Latin term with no spaces around it either.
  - **A whole English sentence quoted inside Japanese** keeps the spaces inside it and
    takes none before or after. If it ends in a Latin full stop, put one space after that
    full stop.
  - **A multi-word proper noun keeps its internal space** and still takes none around it:
    「イギリスの英語はGreat Britainです。」
  - **Add a space only where a specific spot is genuinely hard to read without one.** This
    is a case-by-case judgement, never a pattern applied across a page. If you cannot say
    what the space fixes, leave it out.
- **Katakana long vowels.** Keep the long-vowel mark ー: サーバー、ユーザー、
  コンピューター、フォルダー. Do not apply the older JIS "drop the final ー" rule.
- **Punctuation.** Full-width 。 and 、. `！` is fine for encouragement. `？` is optional
  (the particle か already marks a question); use it sparingly for a light tone. Use
  full-width parentheses **（）** for an English gloss and for asides. Use the
  middle dot **・** for compound loanwords and inline lists (キーと値のペア、A・B・C). When
  ？ or ！ ends a sentence mid-paragraph, follow it with a **full-width** space 　, never a
  half-width one: 「では、条件はどんなふうに書くのでしょうか？　たいていは…」.
- **Half-width characters.** Write **all** Latin letters and Arabic numerals half-width,
  never full-width (`Ａ`, `１`): 「3つの要素」「2スペース分インデントします」.
- **Times** are written on the **24-hour clock**: 「14時30分」, never 「午後2時30分」.
- **Em dashes.** In Japanese, replace with a separate sentence, a 、, or a （）aside. Do not
  use 〜 or —— as an em-dash substitute.

## Sentence structure and emphasis

This is where machine-produced Japanese characteristically fails: it tracks English word
order and produces grammatically correct but unnatural, translation-flavoured (翻訳調)
Japanese. Do **not** map English clause-by-clause. Read a whole English paragraph, understand
what each sentence is really saying, then rebuild it as natural Japanese.

### Japanese is topic-comment and verb-final

Japanese is SOV and topic-prominent. The **topic** (what the sentence is about, marked は)
comes first; new and important information flows toward the **verb at the end**. The
sentence-final predicate carries the point, so do not bury it or trail off.

### The one rule that fixes most of it: は for the topic, が for what is new

- **が introduces something new** into the discourse: 「`move`という機械があります」
  (there is a machine called `move`; it is new information).
- **は marks the topic** already in play, and also carries **contrast**: 「`move`の機械は、
  一歩進ませます」(as for the move machine, ... ); 「でも、これは少し違います」(this
  one, by contrast, is different).

When you translate a sentence, ask: **is this thing new, or already being talked about?**
New takes が; known/contrastive takes は.

### Before / after examples

| English | Mis-paced (tracks English) | Natural Japanese |
|---|---|---|
| "We put some information in the brackets." | 私たちは括弧の中にいくつかの情報を入れます。 | 括弧の中に、条件を書きます。(drop 私たちは; 情報を入れる → 条件を書く reads naturally) |
| "hello with a capital H is not equal to hello with a small h" | 大文字の H の hello は小文字の h の hello と等しくありません。 | 大文字の`H`で始まる`"Hello"`と、小文字の`h`の`"hello"`は同じではありません。(は for contrast; 同じではない, not the clinical 等しくない) |
| "we use three equal signs in a row" | 私たちは 3 つの等号を連続して使います。 | イコールを3つ、続けて書きます。(3 つ is the point; keep it near the verb, drop 私たち) |
| "This one is a bit different from what you're used to." | これはあなたが慣れているものとは少し違います。 | これは、今まで見てきたものとは少し違います。(drop あなた; 今まで見てきた reads naturally) |

### Concrete techniques

- **Drop pronouns.** English "you" and "we" usually vanish in Japanese. Force them in and
  the sentence immediately reads as a translation. Address the reader implicitly.
- **Front the topic, not the grammatical subject.** Start with what is already being talked
  about. "In these situations we use `if`" → 「こういうときは、`if`を使います」(the
  situation is old info and becomes the topic は).
- **Contrast is は, not a literal "however" clause.** "It's the capital H that makes them
  different" → 「大文字の`H`が、両者を違うものにしています」(が focuses `H`), not a
  heavy 「〜という点が違います」construction.
- **Keep sentences short.** English chains "..., which means..., so that...". Japanese
  reads better split into shorter sentences. A long のですが / 〜ので chain gets muddy;
  break it and let each predicate land.
- **Given-before-new.** Known information leftward, the new/important element rightward
  toward the final verb. A sentence that opens with brand-new information feels abrupt.

### Anti-patterns (signs you tracked English)

- **あなた / 私たち** appearing as explicit subjects → drop them (「変数を作れます」, not
  「あなたは変数を作れます」).
- **は where が belongs** (or vice versa), especially introducing a brand-new noun with は.
- **等しい / 〜を有する / 〜を実行する** clinical vocabulary where a plain verb (同じ・
  持つ・動かす) is warmer and more natural.
- **Long comma-chained sentences** mirroring English subordination → split and reorder so
  each predicate is verb-final.
- **Heavy kanji** on auxiliaries (出来る、事、時、下さい) → open them to hiragana.
- **Forcing plurals with 〜たち** on inanimate nouns → Japanese has no plural; 「いくつかの箱」
  not 「箱たち」.
- **Redundant 「これは〜です」** for every English "This is" → often just state the thing.

## Style notes

- **Rhetorical asides** ("So what do these conditions look like?") → keep them as natural
  Japanese rhetorical questions: 「では、条件はどんなふうに書くのでしょうか？」
- **Loanword vs native term is decided per concept in the glossary**, not by a blanket
  rule. Some core concepts are kanji (変数、関数、配列、文字列), others are katakana
  (ループ、オブジェクト、メソッド、エラー). Follow the glossary; do not "modernize" a
  kanji term into katakana or vice versa.

## Worked examples

Concrete Japanese for the principles in `global/voice.md`.

**Titles and headlines:**
- Avoid: 「ついにExercismが誕生！」(too dramatic) → Prefer: 「Exercismのご紹介」/
  「Exercismを始めよう」
- Avoid: 「プログラミングを学ぶ新しい方法」(stiff, literal) → Prefer: 「プログラミング
  学習の新しいかたち」
- Use sentence flow, not English title-case calques.

**Calls to action:**
- Signup: 「今すぐ始めよう！」/「無料で始める」(not the vague 「参加しよう！」)
- Trying: 「試してみましょう！」/「今すぐ無料で試す」

**Acronyms:**
- "PPP pricing" → 「国ごとの購買力に合わせた価格」(not 「PPP価格」)
- "Q&A" → 「よくある質問」/「質問と回答」

**Natural phrasing** (good vs stiff/literal):
- "Let's learn React" → 「Reactを学んでみましょう」
- "First, install Node.js" → 「まずはNode.jsをインストールしましょう」(a shared step;
  not the flat 「最初にNode.jsをインストールしてください」unless it is a direct
  instruction)
- "Try running this code" → 「このコードを実行してみましょう」
