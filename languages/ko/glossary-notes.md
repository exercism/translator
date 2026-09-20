# Korean (ko) glossary notes

## 2026-08-01: Paragraph breaks added to guide.md's Style notes

**Decided by:** owner (iHiD), from native speaker (Dojany) feedback on the forum
("[Korean Review] Progress?" post #2,. Dojany flagged a
pattern they'd seen before with AI translation generally: even when individual sentences
translate well, mechanically preserving the English source's paragraph breaks can hurt
readability, pacing and flow in Korean, especially in beginner-focused educational content.
iHiD confirmed (post #3): "I'll ensure this is added to the Korean guide!" Added as an
imperative rule under Style notes.

## 2026-08-01: Subject honorific `-시-` ruled on (UNCONFIRMED DRAFT)

**Decided by:** agent. **Status: unconfirmed draft. No native speaker has confirmed this
rule.** It needs a native-speaker call on the pinned Korean glossary thread. **Terms
affected:** none.

The guide mandates 해요체 but never ruled on the subject honorific `-시-`, and its own examples
disagreed: "잘하셨어요!" in the Punctuation bullet uses it, "먼저 Node.js를 설치해요" in the
Worked examples does not. No higher authority decides this (`global/voice.md` fixes the
register level, not honorific agreement), so it was settled here and both examples were kept.

**The rule adopted:** `-시-` raises the **subject of its own verb**, so it can never attach to
a verb whose subject is the writer or an inclusive "we". Because the guide's default framing
is the shared step (`-아/어 봐요`, 해요 with a dropped inclusive subject), the default is **no
`-시-`**; it is added only where the sentence is unambiguously about the reader's own action,
most often praise for something they have just done ("잘하셨어요!").

**Research behind it.** `-(으)시-` is the subject-honorific pre-final ending: it marks respect
for whoever the sentence is *about*, and it is set independently of the hearer-level ending
(`-요`), so a 해요체 text can carry it or not depending on the subject. That makes the two
existing examples compatible rather than contradictory, and it makes any blanket "always use
`-시-`" rule wrong on the shared-step sentences that dominate this guide. The one place the
plain form would be actively wrong is praise: "잘했어요" to an adult stranger reads as an adult
praising a child, which is why "잘하셨어요!" keeps the honorific. Sources consulted: 나무위키
해요체 and 한국어의 존비어 체계, and English-language grammar references on `-(으)시-` (Elon.io,
Migaku, Wikipedia "Korean honorifics").

**Not touched:** the `interpreter` row's first-appearance explanation, which is Dojany's
native-speaker decision (entry below).

Also, house style: an em dash in the "Confirmed translation engine" heading below was
replaced with a colon, per the no-em-dash rule in `CLAUDE.md` and `global/rules.md`.

## 2026-08-01: Rationale moved out of `guide.md`

**Decided by:** agent, applying the "Where each piece of the feedback goes" split in
`orchestrator.md`. No rule changed and no term changed; this entry is the home for the
research, attribution and connotation analysis that used to sit inside the guide, which is
loaded into the prompt for every Korean item in every pass.

**Why 해요체 is the register.** Korean coding-education platforms aimed at adult beginners
stay inside a polite register while sounding warm and approachable: Codeit's own marketing
and course copy ("...전달해요", "...쉽게 이해해요") is 해요체 start to finish, and MDN
Korean's beginner-facing "Learn" hub is likewise warm rather than clinical, as is the
Korean translation of the Modern JavaScript Tutorial at ko.javascript.info.

**Why 반말 is banned outright.** Korean etiquette treats an unknown adult reader, including
a "student" in a teacher/learner relationship, as someone you address politely by default,
so 반말 (당신을 아는 사이가 아닌 학습자에게는 무례하게 들립니다) would read as presumptuous
no matter how casual Jiki's brand voice is elsewhere.

**Why the second-person pronoun is dropped.** Explicit 당신 reads oddly formal or even
pointed outside a few narrow contexts (married couples, formal address to an unnamed reader
in print, song lyrics), and 너 is the 반말 problem restated.

**Why Jiki takes no honorific suffix.** Jiki is the friendly guide; the bare name keeps the
voice warm rather than corporate.

**Where the pro-drop exception came from.** A native-speaker review flagged a sentence about
what Jiki can do, several clauses after "Jiki" was last the grammatical subject, as reading
better with "Jiki는" restated than left implicit. That report is what the guide's
"re-establish the subject when the topic has drifted" exception encodes; it was never a
blanket return to explicit subjects.

**Audience research behind the Korean pass.** Korea has a strong, well-funded
coding-education market (bootcamps, university CS programs, platforms like Codeit and
노마드코더), but genuinely low functional English proficiency among adult beginners despite
heavy English-class exposure in school. That gap is what the Korean content exists to close:
real, natural Korean explanation rather than a thin gloss over English, which is why the
guide's Information structure section is written as the pass's biggest quality lever.
Machine-produced Korean characteristically fails there, tracking English word order and
producing grammatically correct but translation-flavoured prose.

## 2026-08-01: Unconfirmed draft proposal: `person` (the maze character) as 캐릭터

**Proposed by:** a translation worker during the DeepSeek re-run of
exercise/maze-solve-basic. **Not decided by anyone**; this is an unconfirmed draft awaiting
review, and no glossary row has been added. **Terms affected:** `person` (maze character).

캐릭터 is already the de facto rendering across the ko maze instructions, the exercise
catalog, and the maze family base catalog. A future pass could defensibly pick 사람 instead,
and a mismatch across maze exercises would be visible on one screen, so it is worth
settling. Confidence: medium.

## 2026-08-01: Confirmed translation engine: DeepSeek

**Decided by:** native speaker (Dojany), the forum ("[Korean Review] Alternative
translation model"), comparing three versions of concept/using-functions: the currently
published version, a first alternative model, and a second alternative model. Dojany judged
the second alternative ("Version 3") noticeably better overall for comprehensibility,
despite a few still-awkward sentences. Per iHiD, that version is DeepSeek. `ko`'s
`translation_engine` is now set to `deepseek` (`deepseek-v4-pro`) in `tracking.json`.

## 2026-08-01: `interpreter` (인터프리터) needs a first-use explanation

**Decided by:** native speaker (Dojany) on the pinned Korean glossary thread, post #7. **Terms affected:** `interpreter`.

인터프리터 itself is unchanged and confirmed as the right term (standard in Korean
programming education and developer communities). Dojany's point is narrower: a complete
beginner won't know what it means on sight, since it's a transliteration rather than an
ordinary Korean word. Tested this on a non-technical reader (his sister), who asked what an
interpreter was. Fix: explain it via the translator analogy on first appearance ("우리가
작성한 코드를... 인터프리터라고 해요"), then use 인터프리터 bare afterwards. Not 번역기 alone without
naming 인터프리터, which would risk being read as the actual technical term rather than an
explanatory analogy.

## 2026-08-01: `warehouse` is 작업실, not 창고

**Decided by:** native speaker (Dojany) on the pinned Korean glossary thread, post #6. **Terms affected:** `warehouse`.

창고 was an unconfirmed agent draft. Dojany's point: in Korean, 창고 reads as a plain
storage space (a logistics warehouse or junk room), not somewhere a person works with
tools, which is the intended image (Jiki's machine shelf lives there). Many Korean readers
live in apartments, where private garages/sheds/workshop-style storage are unfamiliar, so
창고 pulls even harder toward "storage" than it might for a Western reader. 작업실 (a room
where someone works, builds, or uses tools) matches the illustration and the metaphor.

**Flagged for future passes:** `workshop` is a separate metaphor (`global/terms.md`, used
on the scope concept page) that ko has not translated yet. When it comes up, do not also
render it 작업실; pick a different word (e.g. 작업장) so the two don't collide, the way
Italian keeps `magazzino` (warehouse) distinct from `officina` (workshop).

## 2026-07-31: `mental model` is 머릿속 모형, not 멘탈 모델

**Decided by:** owner (iHiD), on a native speaker's correction from Dojany on the pinned
Korean glossary thread:
**Status: human-decided, settled.** Protected: do not change it back without a further
native-speaker decision on the forum.
**Terms affected:** `mental model`.

Dojany reported that 멘탈 모델 "feels like a term transferred directly from English", that
it "did not immediately create a clear image in my mind", and that he "had to stop for a
while to think about what it meant", where 머릿속 모형 "communicates the idea much more
intuitively to a Korean reader". He also recalled the loanword being criticised as awkward
in the Korean edition of a foreign self-help book.

That is the exact failure the term exists to prevent, reported first-hand by the audience,
so it outranks the earlier agent draft (which was unconfirmed, per the 2026-07-30 entry
below). 머릿속 모형 is built from ordinary words: 머릿속 ("inside one's head") and 모형 (a
model of a thing, the word for a scale model or a mock-up), so it names the picture in your
head without asking the reader to translate anything.

This is **not** the 머릿속 모델 the earlier draft considered and rejected as "a coinage no
reader has met". That one was a hybrid, a native first half bolted to a loanword second
half. Dojany's is 모형, an ordinary Korean noun, which makes the whole compound read as
Korean rather than as a half-translation.

**Decided by:** agent, applying the pruning test in `global/pass-mechanics.md` § "Proposed glossary delta". Removed
51 rows that had one obvious canonical rendering with nothing to decide (e.g. `developer`,
`value`, `variable`, `class`, `object`, `deploy`, `module`, `algorithm`), keeping only rows
that settle a real choice, record a rejected alternative, distinguish a collision, or belong
to the protected/metaphor sets. Closest calls, kept out on reflection: `assignment` / `to
assign` (대입 vs a plausible 할당 alternative, but no rejection recorded) and `true` / `false`
(a capitalization note that does no real work in a script with no capitals). A reviewer
querying the cut list should look first at `break (loop control)`, `if statement`, and
`function`, whose notes were judged to restate the general "keywords stay English" rule
already covered under "Keep in English" rather than to record a Korean-specific decision.

## 2026-07-31: `statement (executable)` is 문, not 문장

**Decided by:** agent, applying the standing rule that a clean native-speaker-backed
correction to an unconfirmed row is actioned directly. Source: borntobesso on the pinned
Korean glossary thread,. No reply has followed that post as of
this check (thread has 4 posts total; post 4 is the latest).

**Terms affected:** `statement (executable)`.

borntobesso reported that in developer communities '문' or '구문' is the standard term for
an executable statement, and that '문장' (the row's prior rendering) means an everyday
sentence, so it does not deliver the technical nuance of a standalone line of code that gets
executed.

Between the two alternatives borntobesso offered, 문 was picked over 구문 because it matches
a pattern already established elsewhere in this glossary: `for`문, `while`문, and
`for...of`문 already use the -문 suffix to name a concrete loop statement, and the `loop` row
explicitly distinguishes 루프 (the general concept) from "반복문" (the concrete statement,
also built on 문). Rendering `statement (executable)` as 문 keeps that convention consistent
rather than introducing a second, unrelated word (구문) for the same concept.

This row was previously unconfirmed (see the 2026-07-30 entry below and the Term rationale
table), not a protected human-decided entry, so no conflict: this replaces the agent's
earlier draft rather than overwriting a native speaker's prior call.

## 2026-07-30: Owner decisions from the 28-language using-functions pass

**Decided by:** owner (iHiD), from the results of the concept-page pass across all 28
languages. Commit `1d91ad4`, following `946293c`.
**Terms affected:** `board / whiteboard`, `interpreter`, and, as a principle, every row.

Three decisions came out of that pass that bind Korean:

- **`board / whiteboard` is one object, so one word.** The board the learner writes
  instructions on for Jiki to follow, and the board a function keeps its own instructions
  and notes on, are the same visual metaphor. The previous instruction to keep them
  distinct was forcing languages to invent a distinction the course does not have, and
  several collided with their own word for `array` trying. **Korean merged the two draft
  renderings onto 칠판**, the everyday word for a write-and-wipe board in a room (every
  Korean reader knows it from a classroom, and it is used loosely of whiteboards too), and
  it collides with nothing else in the glossary (`array` is 배열). It retires the earlier
  draft 화이트보드, which named a specific office object rather than the everyday teaching
  image.
- **`interpreter` means the one who interprets, a person doing a job, not a program.** On
  concept pages Jiki *is* the interpreter ("It's his job to interpret the code that you
  write"), so the word has to be able to name a character. Several languages had reached
  for their term for interpreter *software*, which cannot. **Korean did not change:**
  인터프리터 was kept, because the `-기` device suffix in 해석기 cannot name Jiki, and the
  construction 인터프리터 역할 ("the interpreter role") lets the loanword name a person
  where a bare apposition would read oddly.
- **Default to the ordinary, common word**, whatever its etymology (now in
  `global/voice.md`). Where a language's own developer writing uses the English word, the
  English word is the ordinary word and the right choice; where it does not, the native
  word is. The test is what the reader already says, never where the word came from.

## 2026-07-30: Korean glossary filled out for the using-functions pass

**Decided by:** agent, in the same pass. **Status: unconfirmed drafts**, except where the
entry above governs.

**Rows added for the concept page.** The using-functions page needed terms the glossary
did not yet cover: `mental model`, `(programming) language`, `brackets (the two after a
function name)`, `input (to a function)`, `instruction (given to Jiki)`, and the metaphor
rows `machine`, `input slot`, `return chute`, `crank`, `shelves`, `warehouse`.

**`course` moved from 코스 to 강의.** 강의 is what Korean online-learning platforms
(인프런, 패스트캠퍼스, Codeit) call a course and what learners themselves say. 코스 was
rejected: in ordinary Korean it reads as a route, a golf course, or a tasting menu. 과정
was also rejected: it collides with 교육 과정 (curriculum), which Korean keeps as a
separate word (커리큘럼 in this glossary).

**`coding` versus `programming` split by mapping each to the English word actually
present**, rather than treating them as interchangeable. Both 프로그래밍 and 코딩 are
ordinary Korean, so a document using both does not read as mixing, provided each English
term always renders the same way: never render the same English word two ways in one
document. This mirrors the phrasing Korean coding-education brands like Codeit and
생활코딩 already use ("코딩을 배우다", "코딩 여정").

**The gloss format was standardised on 인터프리터(영어: _interpreters_)**, no space before
the parenthesis, against two rival formats present in the guide at the time (a spaced form,
and a bare parenthetical with no 영어: marker). The chosen form is now the only one
described in the guide's Term clarification section.

## Term rationale

Why individual rows read the way they do, for the reasoning that is not a dated decision
above. Ordered by the glossary's own sections, not by date, because most of it dates from
the language bootstrap rather than from any one decision. A term whose reasoning is already
covered by a dated entry above (`board / whiteboard`, `interpreter`, `course`, `coding` /
`programming`) is not repeated here.

### Core decisions

| Term | Why |
|------|-----|
| developer | Standard, universal Korean term. |
| tech / tech industry | Korean overwhelmingly says "IT" for the tech industry ("IT기업", "IT업계"), not "테크". |
| streak | Loanword; matches how Korean learning-app users refer to a daily-use streak. |
| pitfall | Ordinary word ("trap/pitfall"). |

### Values & data types

| Term | Why |
|------|-----|
| value, number, character | Ordinary Korean words. |
| float / decimal | "실수" (real number) is the standard beginner-level term. |
| array / list | Standard term for both senses. |
| dictionary | Loanword; the standard term in Korean beginner material. |
| element | Standard in array/data-structure context (생활코딩, 위키백과). |
| index | Loanword; the practical everyday term, over the more textbook-formal "색인"/"첨자". |
| template literal | Loanword, standard JS terminology. |
| string | MDN Korean and Python Korean docs both render `string` as 문자열, never "스트링". |
| Boolean | Loanword (also seen as "불린"). |

### Functions & control flow

| Term | Why |
|------|-----|
| condition, comparison | Ordinary Korean words, so they stand alone. |
| statement (executable) | 문, matching the -문 pattern already used for `for`문/`while`문/`for...of`문/반복문. See the 2026-07-31 entry above; not 문장 (an everyday sentence). |

### Loops, state & program flow

| Term | Why |
|------|-----|
| instruction (given to Jiki) | Everyday word ("알맞은 지시를 내려요"); 명령 was rejected as a command from a superior that also collides with the CS "command" term. |
| mental model | 머릿속 모형, settled by the owner on a native speaker's report (see the 2026-07-31 entry above). Not 멘탈 모델, and not the earlier-rejected hybrid 머릿속 모델. |
| (programming) language | 언어 is the ordinary word and covers both senses. |
| error | Ordinary word in written/educational Korean; docs and formal writing favor "오류" over colloquial "에러". |
| iteration | Ordinary word. |
| scope | Loanword; dominant in Korean developer speech over the more formal-document "범위". |

### Tooling & engineering

| Term | Why |
|------|-----|
| workflow | Loanword, standard in Korean dev writing. |
| auth | Standard Korean term for authentication. |
| deploy | Standard DevOps term. |
| tool / tooling | Ordinary word. |
| edge case | Loanword; no established native equivalent in Korean dev writing. |
| API | "아피" does not exist as a transliterated form, so the acronym is universally kept in raw Latin script. |
| framework | Loanword; the standard term. |

### Jiki physical metaphors

| Term | Why |
|------|-----|
| box | Direct precedent: the Korean translation of the Modern JavaScript Tutorial (ko.javascript.info) already teaches variables with "'상자' 안에 데이터를 저장하는데, 이 상자에는 특별한 이름표가 붙어 있다고 상상해 봅시다" (imagine storing data inside a "box" with a name tag). 상자 (native/Sino-Korean) reads warmer and more tutorial-appropriate than the loanword "박스". |
| machine | Direct precedent: Korean functional-programming beginner material models a function as a beverage-packaging machine (기계) that takes materials in and returns a finished product, mapping closely onto Jiki's own function-as-machine framing. |
| input slot | Pairs naturally with 기계: Korean vending machines are labelled with a "동전 투입구" (coin slot), so 투입구 is an immediately familiar, concrete image for "the opening a function's input goes into", not a coinage. |
| return chute | Pairs with 투입구 the same way a vending machine has a coin slot and a product-dispensing slot (배출구, "product dispensing/ejection opening"). Concrete and familiar; avoids a dry technical rendering of "return". |
| chain | No direct precedent found in Korean beginner CS material (existing Korean array explanations tend to use a classroom/numbered-seats metaphor instead), but 사슬 is the ordinary, everyday Korean word for a physical chain and carries the same "linked things in a row" image as the English metaphor. |
| shelves | No direct precedent found either way. 선반 is the ordinary native word for "shelf" and is linguistically safe, but untested in this specific teaching context. |
| warehouse | Ordinary everyday word for a warehouse or storeroom. |
| crank | Korean has no single everyday noun for a crank, so the concrete handle-plus-turn phrasing carries the physical image instead. |
