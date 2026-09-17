# Korean (ko) glossary

The agreed term list for Korean. Why each term was chosen, and who chose it, is in the
decision log (`glossary-notes.md`).

## Core decisions

| English | Korean | Use (ko/en) | Notes |
|---------|--------|-------------|-------|
| programming (the discipline) | **프로그래밍** | ko | The general craft/discipline: "프로그래밍 언어", "프로그래밍의 기본 개념". |
| coding (the casual act of writing code) | **코딩** | ko | The hands-on act of writing code, including "learn to code" → "코딩을 배우다" and "coding journey" → "코딩 여정". Both words are ordinary Korean, so a page containing both does not read as mixing: pick by the English word actually used, and never render the same English word two ways in one document. |
| tech / tech industry | IT (업계) | ko | Use "IT 업계" for "the tech industry" and "IT" as the adjective ("IT 분야"). |

## Localize (use the Korean term)

These are terms where Korean uses a Hangul term (native Sino-Korean coinage or a Hangul-transliterated loanword) in prose. Split by theme for readability; every table below follows the same columns.

### Values & data types

| English | Korean | Use (ko/en) | Notes |
|---------|--------|-------------|-------|
| float / decimal | 실수 | ko | Use "부동소수점" only where the IEEE floating-point representation itself is the point. |
| array / list | 배열 | ko | Do not introduce a second word for informal "list" prose; use 배열 consistently. |
| dictionary | 딕셔너리 | ko | Never "사전", which is only used descriptively, never as the type name. |
| element | 원소 | ko | Kept distinct from a UI/DOM "element", which does not appear in this content. |
| string | 문자열 | ko | **Translated, not kept as a loanword.** Never "스트링". |
| Boolean | 불리언 | ko | Use "불리언" consistently, not "불린". |

### Functions & control flow

| English | Korean | Use (ko/en) | Notes |
|---------|--------|-------------|-------|
| NOT operator / logical negation | NOT 연산자 / 논리 부정 | ko | Keep the keyword `NOT` in code font when referring to the actual operator token; use "논리 부정" when explaining the general concept in prose. |
| statement (executable) | 문 | ko | The imperative sense: a line of code that does something and gets executed. Matches the existing `for`문/`while`문/`for...of`문 pattern below and how developer communities name a statement; not "문장" (an everyday sentence). |
| statement (logical claim) | 명제 | ko | The proposition sense: a claim that is true or false. Keep distinct from "문" above; pick by meaning, not by the English word. |
| parameter | 매개변수 | ko | The declaration-site name. |
| argument | 인자 | ko | The call-site value; kept distinct from "매개변수" above. |
| to return (a value) | 반환하다 | ko | "30을 반환해요." Written/educational default; colloquial "리턴하다" exists but is not used in Jiki prose, to keep one consistent term. |
| brackets (the two after a function name) | 괄호 | ko | The `()` pair written after a function name to call it: "이름을 쓰고 뒤에 괄호 두 개를 붙여요". 괄호 is the everyday generic word and needs no qualifier while the code is on screen; use 소괄호 (round) against 대괄호 (square) only where the two genuinely have to be contrasted. Count with the 개 counter ("괄호 두 개"). |

### Loops, state & program flow

| English | Korean | Use (ko/en) | Notes |
|---------|--------|-------------|-------|
| interpreter | 인터프리터 | ko | **The one who interprets: a person doing a job, not a program.** On concept pages Jiki *is* the interpreter ("이 강의에서 인터프리터 역할은 Jiki가 맡아요"; "이 강의를 안내해 줄 친절한 인터프리터, Jiki"). Never 해석기. Never 통역사. Where a bare apposition reads oddly, 인터프리터 역할 ("the interpreter role") carries it. **On first appearance**, explain it via the translator analogy before using the bare term, e.g. "우리가 작성한 코드를 컴퓨터가 알아듣도록 옮겨 주는 번역기 같은 프로그램을 인터프리터라고 해요."; a complete beginner will not otherwise know what 인터프리터 means, and 번역기 alone (without naming 인터프리터) risks being mistaken for the actual technical term. |
| instruction (given to Jiki) | 지시 | ko | Everyday word: "알맞은 지시를 내려요". Use 지시 사항 for the instructions taken as a set ("지시 사항을 칠판에 적어요"). Not 명령, which is a command from a superior and is also the CS "command" term. |
| mental model | 머릿속 모형 | ko | Ordinary Korean for "the model you picture in your head", and it reads as one on first sight. Not 멘탈 모델: a Korean reader reported having to stop and decode it. Note 모형 (a physical model of a thing), not 모델. Prose may still describe the thing plainly where that reads better ("제 머릿속에는..."), but the named term is 머릿속 모형. |
| (programming) language | (프로그래밍) 언어 | ko | Covers both senses: "프로그래밍 언어" and "컴퓨터가 알아듣는 언어". Never 랭귀지. |
| error | 오류 | ko | Docs and formal writing favor "오류"; colloquial speech often says "에러", not used in Jiki prose to keep one consistent term. |
| exception | 예외 | ko | The catchable-error-object sense, distinct from "오류" (error) as a general term. |
| loop | 루프 | ko | The general concept of repeated execution ("무한 루프" = infinite loop). Kept distinct from "반복문" below, which names the concrete statement. |
| for loop | `for`문 | ko | Keep `for` in backticks (the real keyword) directly followed by "문"; this compound is the universal Korean form, no space. |
| while loop | `while`문 | ko | As above, with `while`. |
| for-of loop | `for...of`문 | ko | As above. |
| scope | 스코프 | ko | Kept distinct from "코드 블록" (code block) above. |
| method | 메서드 | ko | Use "메서드", not the older spelling "메소드". |

### Tooling & engineering

| English | Korean | Use (ko/en) | Notes |
|---------|--------|-------------|-------|
| auth (authentication / authorization) | 인증 | ko | Use "인가" only where authorization specifically (not authentication) is the point. |
| API | API | en | Never transliterated ("아피" does not exist as a form). Where the source `<define>`s it, explain the concept in Korean for a beginner, not just gloss the acronym. |
| framework | 프레임워크 | ko | A literal "뼈대" gloss appears only as an explanatory aside in some sources, never as the working term. |
| CLI | CLI | en | Kept in raw Latin script like API. Where the source `<define>`s it, gloss the concept in Korean: "CLI (명령줄 인터페이스)". |

### Platform & curriculum vocabulary

| English | Korean | Use (ko/en) | Notes |
|---------|--------|-------------|-------|
| course | 강의 | ko | The whole Jiki course the learner is taking ("이 강의에서 인터프리터 역할은 Jiki가 맡아요"). Keep distinct from 커리큘럼 (curriculum). Not 코스; not 과정 (collides with 교육 과정). |
| exercise | 연습 문제 | ko | The full term where the exercise is being named or introduced; the plain short form 문제 is what Korean naturally uses on repeat inside the same passage (see the guide's Style notes). |

## Keep in English

Only a small set of terms stay in raw Latin script in Korean prose; everything else that is a loanword is still written in Hangul (see the Localize tables above).

| Term | Notes |
|------|-------|
| API | See Tooling table above; where the source `<define>`s it, explain the concept in Korean. |
| CLI | See Tooling table above; where the source `<define>`s it, explain the concept in Korean. |
| JavaScript, Python, React | Product/language names. |
| Debug, Test | As keywords/technical tokens. |
| Code, Bug, Frontend, Backend | |
| Variable and function names | Never translated. |
| CLI commands (`npm install`, `git commit`) | The commands themselves are never translated. |
| Jikiscript / programming keywords (`repeat`, `function`, `if`, `for`, ...) | Always English, including inside prose. Translate only the surrounding explanation. |
