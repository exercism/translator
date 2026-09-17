# Vietnamese (vi) language guide

The Vietnamese-specific realization of `global/voice.md`: formality, grammar, and worked
examples.

Use the register real Vietnamese programming communities use with each other: peer-to-peer
and informal, never textbook-dry.

## Formality and address (critical)

Vietnamese has no simple formal/informal split. It has a kinship-based pronoun system (age,
gender, and social distance all matter) that does not fit an anonymous adult reader, so the
address terms are fixed here:

| Role | Form | Never use here |
|---|---|---|
| "you" (reader) | bạn | em, anh, chị |
| "you all" (occasional) | các bạn | (none) |
| "I" (mentor voice) | mình | tôi, ta |
| "we / let's" (with the reader) | chúng ta / chúng mình | chúng tôi |
| "we" (Jiki team, without the reader) | chúng tôi | (none) |
| "he" (Jiki, third person) | cậu ấy | nó, bạn ấy, anh ấy |

- **Singular "bạn" is the everyday address.** "Các bạn" is fine occasionally for a
  genuinely communal moment, but is not the default.
- **Never address the reader with kinship-hierarchy terms**: "em" paired with "thầy"/"cô",
  or "anh"/"chị".
- **"Chúng ta" is the default "we"/"let's"**, with **"chúng mình"** usable where extra
  warmth fits. **Never "chúng tôi"** for a walk-through-together moment: it is grammatically
  *exclusive* and shuts the reader out. Reserve "chúng tôi" for statements about the Jiki
  team itself ("we built this platform"), never for narrating alongside the reader.
- **Jiki in the third person is "cậu ấy."** This is not a breach of the kinship-hierarchy
  ban above, which governs only how the prose addresses the *reader*: "cậu ấy" is the
  ordinary peer third person and claims no age or status over the reader. When Jiki speaks
  in his own voice, his first person is "mình", the same as the mentor voice.

## Grammar

Vietnamese is isolating and analytic: no inflection, no conjugation, no agglutination.
Meaning is carried by word order, classifiers, and particles, so rebuild each sentence the
Vietnamese way rather than carrying over English sentence machinery.

- **Prefer active voice; do not calque the English passive with "bị"/"được."** English
  passives ("the value is returned by the function") translate naturally as an active
  Vietnamese sentence, not a "được ... bởi" construction.
  - Stiff: "Giá trị được trả về bởi hàm." (calqued passive)
  - Natural: "Hàm trả về giá trị." (active)
  - **Never use "bị" for a neutral technical event**: it means something bad happened to
    the subject, so "biến bị thay đổi" wrongly implies something went wrong. Recast active:
    "chúng ta thay đổi biến."
- **Vietnamese is head-initial: the noun comes before its modifiers.** "A red button" is
  "nút màu đỏ" (button, color, red), not an English-order pre-noun stack.
- **Use classifiers before countable nouns.** "một cái hộp" (a box), not "một hộp." The
  three common ones: "cái" (inanimate objects), "con" (animate things and a fixed set of
  idiomatic items), "người" (people).
- **Break long English sentences into shorter Vietnamese ones.** English chains
  subordinate clauses ("..., which means..., so that..."); Vietnamese instructional
  prose reads better as sequential short sentences.
- **Do not over-insert subject pronouns.** Vietnamese drops the subject freely once it's
  clear from context. Re-inserting "bạn"/"cậu ấy" every sentence the way English repeats
  "you"/"he" makes the prose feel over-translated.
- **Use "thì" to mark a topic before its consequence**, especially after a condition:
  "Nếu điều kiện đúng thì vòng lặp chạy." (If the condition is true, then the loop runs.)
  Dropping "thì" here reads flatter than natural Vietnamese.

## Imperatives and encouragement

Use "hãy" (do/let's, before the verb) and "cùng" (together) to build warm imperatives, and
lean on sentence-final particles ("nhé", "nào", "đấy") for warmth rather than effusive
adjectives. Vietnamese warmth is quieter than English: "Bạn đã làm rất tốt! Điều này thật
tuyệt vời!" (calqued "you did great, this is wonderful") reads over-sweet and translated.

| English | Natural Vietnamese |
|---|---|
| "Let's look at..." | Cùng xem... / Chúng ta cùng xem... |
| "Let's begin" | Bắt đầu nào! / Chúng ta bắt đầu nhé. |
| "Try it out" | Bạn thử xem nhé. |
| "Notice that..." | Bạn để ý là... |
| "As you can see..." | Như bạn thấy đấy,... |
| "Don't worry if..." | Đừng lo nếu... |

## Style notes

- **Titles and headings use sentence case**, not English-style Title Case: capitalize
  only the first word (and proper nouns), e.g. "Vòng lặp while trong Python", not "Vòng
  Lặp While Trong Python."
- **Punctuation spacing:** no space before `. , : ; ! ?`, one space after, same as
  English (unlike French).
- **Quotation marks:** use straight ASCII double quotes `"like this"`. Not guillemets
  `« »`, which read as formal/print rather than the online-tutorial default.
- **Diacritics:** never strip tone or vowel diacritics; ensure proper Unicode (NFC) so
  tone marks render on the correct vowel.
