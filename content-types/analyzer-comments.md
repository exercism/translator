# Analyzer comments

The automated feedback a student sees on a submitted solution. An analyzer (one per track)
inspects the code and emits a comment code such as `ruby.two-fer.splat_args`; the website
reads `analyzer-comments/ruby/two-fer/splat_args.md` from `exercism/website-copy`, fills in
the comment's parameters, and shows the result beside the student's code.

| i18n type id | English, in `exercism/website-copy` |
|---|---|
| `analyzer-comments` | `analyzer-comments/<track>/<exercise-or-general>/<name>.md` |

Nothing else in `website-copy` is translated: mentor notes are read only by mentors, and the
rest is not served.

## `%{name}` interpolation

Before rendering, the website replaces every `%{name}` token with a value the analyzer
supplied, usually a piece of the student's own code:

```markdown
No method called `%{method.name}` was found. The tests won't pass without it.

**Line %{line_number}** :  %{message} was reported by Ameba.
```

- **Reproduce every `%{...}` token exactly**: the percent sign, the braces, and the inner name
  with its underscores and dots. Never translate the inner name, never add or drop a token,
  never put a space inside the braces. A renamed or dropped token renders as a hole in the
  sentence. The checker rejects a file whose tokens differ from its English's.
- **`%%` is a literal percent sign**, used where a `%` would otherwise be read as the start of
  a token: `number %% 2 == 0`, and in URLs (`divisible_by%%3F`). Reproduce `%%` as `%%`.
- A token may move to wherever the target language's word order needs it. It usually sits
  inside a code span, and the backticks move with it.
- **You do not know what a token will hold.** It may be an identifier, a number, a whole
  error message in English, or several words. So write the sentence so that it reads
  correctly whatever is substituted: do not attach a case ending, an article or a plural to a
  token that only fits some values, and do not make the grammar depend on the value's gender
  or number. The language guide says how this language handles a suffix on an interpolated
  value.

## What these files look like

- A `# title` line first, often lower-case and terse (`# splat args`). The website strips it
  when it renders; translate it anyway, so the file stays structurally identical.
- One to a few short paragraphs, sometimes a code block showing a better form, sometimes
  reference-style links to documentation.
- **The voice is a mentor's, talking about this student's code**: specific, constructive,
  never scolding. Many comments say what is good before what could change. Keep that. The
  student did not ask for this feedback, so a comment that reads as cold or as a rule being
  quoted at them is a worse translation than one that loses a nuance.

## Leave alone

Code blocks and inline code, byte for byte; method, function and variable names; the names of
linters and tools (Ameba, ShellCheck, `golint`); link labels, definitions and URLs.
