# Website UI strings: the backend catalog (Rails)

The strings Rails renders: page copy, navigation, emails, notifications, flash and validation
messages. English is authored as about 125 YAML files under `config/locales/` in
`exercism/website`; the i18n repo flattens them into ONE catalog per locale.

| i18n type id | English | Translation, in the `i18n` repo |
|---|---|---|
| `website-backend` | `config/locales/**/*.yml`, under the `en:` root | `locales/<locale>/website/backend.json` |

This catalog is **key-based**, unlike everything git-sourced. A unit's English can be edited
under its translation, so the i18n repo stamps each unit (in `backend.meta.json`) with the
hash of the English it was checked against. Its sibling is
`content-types/website-frontend.md`, and the two use **different placeholder and plural
conventions**. Do not carry one's syntax into the other.

## What you are given, and what you return

A JSON object of units, keyed by unit id. An id is the dotted Rails key
(`tracks.show.summary_article.key.locked`), and it tells you where the string appears: read
it. Return one flat JSON object with exactly the same ids.

- An ordinary unit's value is a string. Return a string.
- **A plural group's id ends `.*`** and its value is an object of the categories English has,
  almost always `one` and `other`, sometimes `zero`:

  ```json
  "contributing.dashboard.tasks_section.issues_needed_help.*": {
    "one": "1 issue needs help",
    "other": "%{count} issues need help"
  }
  ```

  Return an object whose keys are the categories THIS language needs, which the instruction
  names (Hungarian and English need `one`, `other`; Polish `one`, `few`, `many`, `other`;
  Japanese `other` alone). Write each as this language's grammar requires for that category.
  English's `one` form often spells the number out ("1 issue") with no `%{count}`: a category
  that covers more than one number, as `few` and `many` do, must use `%{count}`. `zero`, where
  English has it, is a special message for none, not a grammatical category: translate it and
  keep it.

## Placeholders: `%{name}`

- `%{name}` is replaced by Rails at render time. Reproduce it exactly, inner name included,
  and never translate, add or drop one. It may move to where word order needs it. The rarer
  sprintf form `%<name>s` is the same thing: reproduce it whole.
- **Some placeholders are tag halves.** `%{highlight_open}%{count}%{highlight_close}
  %{highlight_unit_open}minutes%{highlight_unit_close}` wraps the number in one element and
  the word "minutes" in another. Keep each `_open`/`_close` pair around the translation of
  the words it wrapped, in whatever order the sentence now needs.
- You do not know what a placeholder will hold (`%{track_title}` may be "Ruby" or "x86-64
  Assembly", `%{handle}` any username). Phrase the sentence so it is correct for any value; the
  language guide says how this language handles articles and case endings on an interpolated
  value.

## Markup

- A key ending `_html` holds real HTML, rendered unescaped. Translate the text between tags.
  Reproduce every tag and every attribute exactly: `class`, `href` (which may itself contain a
  placeholder), `target`, `data-*`. Never add or remove a tag. In any other key, `<` and `>`
  are text.
- HTML entities (`&amp;`, `&nbsp;`) are reproduced as entities.
- **Leading and trailing whitespace is part of the value.** Some strings are concatenated in a
  template and carry a deliberate trailing space; some end in a newline because of how the
  YAML was written. Match English's edges exactly.

## What this copy is

- **UI chrome** (buttons, tabs, headings, labels): short, and the same English word must get
  the same translation everywhere, which is what the glossary's product section is for. A
  label is not a sentence: no final full stop unless English has one.
- **Emails and notifications** (`mailers.*`, `notifications.*`): whole sentences from Exercism
  to one person. Warm, direct, in the register the language guide sets.
- **Marketing and about pages**: persuasive copy; translate for effect, not word for word.
- **Validation and framework messages** (`errors.messages.*`, `activerecord.*`, and gems such
  as `doorkeeper.*`): use this language's conventional wording for such messages. They are
  terse by convention.
- Exercism's product vocabulary (track, mentor, iteration, reputation, Insiders, ...) follows
  the glossary exactly. Names of programming languages, of people, and of third parties
  (GitHub, Discord, PayPal, Stripe) stay as they are.
