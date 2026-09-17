# Exercise hints

The hints a student can open while solving a concept exercise.

| i18n type id | English, in a track repo |
|---|---|
| `exercise-hints` | `exercises/{practice,concept}/<slug>/.docs/hints.md` |

## The website parses this file by its H2 headings

This is not a page that is rendered whole. The website cuts it into chunks at every `##`
heading and attaches each chunk to a task of the exercise, by the number that leads the
heading:

```markdown
# Hints

## General

- ...

## 1. Define the expected oven time in minutes

- ...

## 2. Calculate the remaining oven time in minutes

- ...
```

- `## 1. ...` belongs to task 1 of the instructions, `## 2. ...` to task 2, and so on. **Keep
  the number, the dot and the space exactly, and keep the headings in the same order.**
  Translate the words after the number, and make them match the way the same task's heading
  was translated in the instructions.
- A heading with no leading number (`## General`) holds the hints shown for the exercise as a
  whole. Translate it. It must still not begin with a digit.
- **Never add, remove, merge or split an H2, and never change a heading's level.** A hint
  under a heading the website does not expect is a hint no student ever sees.
- Under each heading is a bullet list. Keep it a bullet list, with the same number of bullets:
  each bullet is shown as one hint.

## Links

Hints lean on reference-style links more than any other file: `[constant][constants]` in a
bullet, and a block of `[constants]: https://...` definitions at the foot. Translate the link
text (the first bracket). Never translate a label (the second bracket, or the definition's),
and never touch a URL. The definitions block is reproduced exactly as it is.

## Everything else

As `content-types/exercise-docs.md`: code spans and code blocks byte for byte, test-compared
strings in English, method and constant names untouched. A hint often IS an identifier with a
few words around it ("You can use the `::` operator"); translate the few words.
