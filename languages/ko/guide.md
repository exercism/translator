# Korean (ko) language guide

The Korean-specific realization of `global/voice.md`: formality, grammar, and worked
examples. Readers are in South Korea.

The first published Korean page, `curriculum/src/concepts/using-functions/ko.md` in the
front-end repo, is the reference realization of everything below (해요체, dropped pronouns,
the 영어: gloss form, counters). Where a later page faces the same question, follow it
rather than deciding again.

## Formality (critical)

`global/voice.md` says to use the informal, friendly register that modern online learning
content uses. In Korean that is **해요체** (haeyo-che), not the plain/intimate 반말 and not
the more distant 하십시오체. This is the single most important thing to get right.

- **Use 해요체 throughout**: verb endings in `-아요/어요/해요`, e.g. 만들어요, 볼까요,
  해봐요.
- **Never use 반말**, including where a teacher-to-student framing might seem to license
  it, and no matter how casual Jiki's brand voice is elsewhere.
- **Reserve 하십시오체** (`-습니다/니다`) for rare moments of real procedural weight (a
  destructive, irreversible action) if any occur; it is not the default register. Everyday
  teaching prose, encouragement, and explanation all stay in 해요체.
- **Drop the second-person pronoun.** Korean, like Japanese, prefers to omit "you" and let
  the verb ending and context carry it. Never write explicit **당신** (it reads oddly
  formal, or pointed) and never **너** (the 반말 problem restated). Address the learner
  implicitly: "You can create a variable" → "변수를 만들 수 있어요", never "당신은 변수를
  만들 수 있어요".
- **Soft, collaborative framing over blunt instruction.** Prefer "저장할까요?" (shall we
  save it?) over "저장하시겠습니까?" (a procedural, distant register). Use the shared-step
  construction `-아/어 봐요` or `-아/어 봅시다` for Jiki's "Let's..." invitations: "함께
  살펴봐요" (Let's look at it together), "한번 해봐요" (Try it out), "시작해볼까요?"
  (Shall we begin?).
- **Subject honorific `-시-`: only where the subject is the reader alone.** `-시-` raises
  the **subject of its own verb**, so it can never attach to a verb whose subject is the
  writer or an inclusive "we". Because the default framing above is the shared step
  ("함께 살펴봐요", "먼저 Node.js를 설치해요", "한번 해봐요"), the default is **no `-시-`**.
  Add it only where the sentence is unambiguously about the reader's own action, most often
  praise for something they have just done: "잘하셨어요!" (plain "잘했어요" praises an adult
  reader the way one praises a child). Never write both a `-시-` form and a plain form of
  the same verb for the same subject in one document.

## Grammar

Korean-specific rules that English speakers get wrong:

- **Korean is SOV and topic-prominent**, not English SVO. The verb comes last and carries
  the sentence's register (해요체 ending).
  - EN: "The function returns a value." → KO: "함수는 값을 반환해요." (function-는
    value-를 return-해요; verb last)
- **Pro-drop.** Subjects and objects that are clear from context, especially "you" and
  "we", are routinely omitted. Do not force them in; a Korean sentence with every English
  pronoun spelled out reads as a translation.
  - **Exception: re-establish the subject when the topic has drifted away from it.**
    Dropping works only while the reader can still track who the sentence is about. If the
    immediately preceding sentence's grammatical topic was something else (e.g. "지시는..."
    about instructions, not Jiki) and the next sentence's implicit subject reverts to a
    name/character mentioned two or more sentences back, spell that subject out again
    ("Jiki는...") rather than dropping it. This is not a blanket return to explicit
    subjects; it applies at the specific point where the topic chain would otherwise leave
    the reader guessing.
- **Particles (조사) mark grammatical role, not English-style word order or prepositions.**
  - Topic/contrast: 은/는 (받침 있으면 은, 없으면 는): "함수는..." (as for the function...)
  - Subject, incl. new information: 이/가 (받침 있으면 이, 없으면 가): "오류가
    발생했어요." (An error occurred.)
  - Object: 을/를 (받침 있으면 을, 없으면 를): "값을 반환해요." (returns a value)
  - Location/direction: 에, 에서: "함수 안에" (inside the function), "배열에서" (from
    the array)
  - Instrument/means: (으)로: "React로 만들어요." (build it with React)
  - The particle form is chosen by whether the preceding syllable (Korean **or** an
    attached English word, see Style notes) ends in a consonant (받침) or a vowel.
- **은/는 (topic) vs. 이/가 (subject/new information)** is the single biggest source of
  unnatural Korean when mapping English sentence-by-sentence. See Information structure
  below.
- **No grammatical plural marking required.** Korean does not obligatorily mark plurals;
  "배열의 요소들" (the elements of the array, with the optional plural marker -들) and
  "배열의 요소" (the element(s) of the array) are both fine. Add -들 only when plurality
  needs emphasis, not on every countable noun out of habit (an English-tracking tell).
- **Counters (단위성 의존명사) for numbers.** Korean counts things with a number +
  counter-word pattern, not a bare number. Common Jiki-relevant counters: 개 (generic
  objects, e.g. "3개의 요소" = 3 elements, "괄호 두 개" = two brackets), 대 (machines and
  vehicles, e.g. "기계 세 대" = three machines), 번 (times/occurrences, e.g. "두 번
  반복해요" = repeat it twice), 장 (flat sheets, e.g. a piece of paper), 개월/년
  (durations). Do not drop the counter; "3 요소" reads as broken Korean. Pick the counter by
  what the thing physically is: Jiki's machines take 대, not 개.
- **Sino-Korean vs. native-Korean numerals.** Use **native-Korean numerals** (하나, 둘,
  셋...) for counting small everyday quantities with a counter ("세 개의 상자" = three
  boxes), and **Sino-Korean numerals** (일, 이, 삼...) for indices, sequence, and
  mathematical values ("인덱스 3", "3을 반환해요"). When in doubt, follow whichever
  reads naturally with the specific counter; this is a common EN→KO pitfall.

## Information structure and emphasis

This is the single biggest quality lever. Do **not** map English clause-by-clause. Read
a whole English paragraph, understand what each sentence is really saying, then rebuild it
as natural Korean, verb-final, with the real point placed correctly.

### The core rule: 는/은 for the topic, 가/이 for what is new or contrasted

- **가/이 introduces something new** into the discourse: "`move`라는 기계가 있어요." (There
  is a machine called `move`; it is new information.)
- **는/은 marks the topic** already in play, and also carries **contrast**: "`move`
  기계는 Jiki를 걷게 해요." (As for the `move` machine, it makes Jiki walk.) "그런데 이건
  좀 달라요." (This one, by contrast, is a bit different.)

When translating a sentence, ask: **is this thing new, or already being talked about?**
New takes 가/이; known or contrastive takes 는/은.

### Before / after examples

| English | Mis-paced (tracks English) | Natural Korean |
|---|---|---|
| "We put some information in the brackets." | 우리는 괄호 안에 정보를 넣어요. | 괄호 안에는 필요한 정보를 적어요. (drop 우리는; brackets as topic, "적다" reads more naturally than "넣다" here) |
| "hello with a capital H is not equal to hello with a small h" | 대문자 H를 가진 hello는 소문자 h를 가진 hello와 같지 않아요. | 대문자 `H`로 시작하는 "hello"는 소문자 `h`로 시작하는 "hello"와 같지 않아요. (는 for contrast; concrete "시작하는" instead of the clinical "가진") |
| "we use three equal signs in a row" | 우리는 등호 세 개를 연달아 사용해요. | 등호를 **세 개** 연달아 써요. (drop 우리는; 세 개 is the point, kept close to the verb) |
| "This one is a bit different from what you're used to." | 이것은 여러분이 익숙한 것과 조금 달라요. | 이건 지금까지 본 것과는 조금 달라요. (drop the explicit "여러분이"; "지금까지 본 것" reads naturally) |

### Concrete techniques

- **Front the topic, not the grammatical subject.** "In these situations we use `if`" →
  "이런 상황에서는 `if`를 사용해요." (the situation is old information and becomes the
  topic with 는).
- **Contrast is 는, not a literal "however" clause.** "It's the capital H that makes them
  different" → "대문자 `H`가 둘을 다르게 만들어요." (가 focuses `H`), not a heavy "…라는
  점이 다릅니다" construction.
- **Keep sentences short.** English chains "..., which means..., so that...". Korean reads
  better split into shorter sentences, each with its own verb-final predicate.
- **Given-before-new.** Known information leftward, the new or important element rightward
  toward the final verb. A sentence that opens with brand-new information feels abrupt.

### Anti-patterns (signs you tracked English order)

- **당신은 / 여러분은 / 우리는** appearing as explicit subjects where Korean would drop
  them.
- **는 where 가 belongs** (or vice versa), especially introducing a brand-new noun with 는.
- Clinical, dictionary-flavoured verbs where a warm, plain verb is more natural: 같지 않다,
  not "동등하지 않다"; 만들다, not "생성하다" outside a genuinely technical context.
- Long comma-chained sentences mirroring English subordination, instead of split,
  verb-final Korean sentences.
- Bare numbers without a counter ("3 요소" instead of "세 개의 요소" or "요소 3개").
- Literal "-하십시오" on every imperative, instead of "-아/어 봐요" or a soft question
  ("...할까요?").

## Style notes

- **Em dashes:** in Korean prose the natural replacements are a **comma (,)** for a
  mid-sentence aside, two separate sentences, or parentheses for a genuine parenthetical.
  Do not substitute the Korean reading-point mark or any dash-like glyph.
- **Spacing around embedded Latin script and code.** Korean text does not normally space
  between words the way English does, but a piece of inline code, a variable name, or an
  English technical term gets **no space** before an attached particle: "`x`라는 변수",
  "HTML과 CSS를", "JavaScript나". Insert a space only where you would naturally pause
  before or after a run of Latin text acting as its own phrase, e.g. "`move` (이동)" for a
  short inline translation of an identifier. A term gloss takes no space, per Term
  clarification above. Follow this consistently, including in the glossary.
- **Particle choice on English words follows the sound of the word, not its spelling.**
  Pick 과/와, 을/를, 이/가, 은/는 by whether the English word's last syllable, said aloud,
  ends on a consonant or vowel sound: "Node.js를 설치해요", "React로 만들어요". When
  genuinely unsure how a term is pronounced by Korean speakers, check how it is written
  elsewhere in Korean technical prose rather than guessing from the English spelling.
- **Punctuation.** Standard Korean punctuation: 마침표 (．), 쉼표 (，) or their
  full-width/half-width forms consistent with the rest of the file; question marks and
  exclamation marks are used the same way as in English for a warm, direct tone
  ("한번 해볼까요?", "잘하셨어요!"). For a first-use English gloss, use the 영어: form in
  Term clarification above, nothing else.
- **Shortening a long term on repeat.** Korean prose gets heavy if a multi-word term is
  spelled out every time. Where the glossary's term is a compound and the short head noun is
  unambiguous in context, name it in full on introduction and use the short form afterwards
  in the same passage: 연습 문제 first, then 문제. This is phrasing, not a new term: never
  swap in a *different* word, and never shorten where the short form could be read as
  something else.
- **Rhetorical asides** ("So what do these conditions look like?") → keep them as natural
  Korean rhetorical questions in 해요체: "그럼 조건은 어떻게 생겼을까요?"
- **Jiki-name handling.** "Jiki" stays as the Latin product name; when a particle
  attaches, choose it by the pronounced ending ("Jiki가", "Jiki는", "Jiki를"). Use the bare
  name with **no honorific suffix** (never Jiki님).
- **Paragraph breaks matter as much as sentence-level wording.** Even when every sentence
  translates well individually, mechanically keeping the English source's paragraph
  boundaries can hurt readability, pacing, and flow in Korean. Re-judge where a paragraph
  should break for natural Korean reading rather than copying the English structure by
  default.

## Worked examples

Concrete Korean for the principles in `global/voice.md`.

**Titles and headlines** (natural word order, no drama, no redundancy):
- Avoid: "지키(Jiki)가 마침내 탄생했습니다!" (too dramatic, wrong register) → Prefer:
  "Jiki를 소개해요" / "Jiki, 지금 시작해요"
- Avoid: "코딩을 배우는 새로운 방법" (stiff, literal calque) → Prefer: "새로운 방식의
  코딩 학습" / "코딩을 배우는 새로운 길"

**Calls to action** (specific, action-oriented):
- Signup: "지금 시작해요!" / "무료로 시작해요" (not the vague "함께해요!")
- Trying: "한번 해봐요!" / "지금 무료로 체험해 봐요"

**Acronyms** (explain in Korean, don't just transliterate):
- "PPP pricing" → "국가별 구매력에 맞춘 가격" (not "PPP 가격")
- "Q&A" → "질문과 답변" / "자주 묻는 질문"

**Natural phrasing** (good vs stiff/literal):
- "Let's learn React" → "React를 배워봐요"
- "First, install Node.js" → "먼저 Node.js를 설치해요" (a shared step, 해요체; not the
  distant "Node.js를 설치하십시오")
- "Try running this code" → "이 코드를 한번 실행해 봐요"
