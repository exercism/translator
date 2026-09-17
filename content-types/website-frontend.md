# Website UI strings: the frontend catalog (i18next)

The strings the React components render: the editor, mentoring discussions, the dashboard,
community solutions, settings, donations. English is authored as about 205 TypeScript bundles
under `app/javascript/i18n/en/` in `exercism/website`; the i18n repo flattens them into ONE
catalog per locale.

| i18n type id | English | Translation, in the `i18n` repo |
|---|---|---|
| `website-frontend` | `app/javascript/i18n/en/*.ts`, mapped to namespaces by `index.ts` | `locales/<locale>/website/frontend.json` |

This catalog is **key-based** and stamped per unit (in `frontend.meta.json`), exactly as
`content-types/website-backend.md` describes for its sibling. The two use **different
placeholder and plural conventions**. Nothing here is written `%{name}`, and nothing there is
written `{{name}}`.

## What you are given, and what you return

A JSON object of units, keyed by unit id. An id is `<namespace>:<key>`, such as
`components/common/exercise-widget:info.titleInTrack`. The namespace is the component the
string belongs to, which tells you where it appears: read it. Return one flat JSON object with
exactly the same ids.

- An ordinary unit's value is a string. Return a string.
- **A plural group's id ends `_*`** (or `_ordinal_*` for an ordinal such as "1st", "2nd") and
  its value is an object of the categories English has:

  ```json
  "components/common/exercise-widget:info.iterationsCount_*": {
    "one": "{{count}} iteration",
    "other": "{{count}} iterations"
  }
  ```

  Return an object whose keys are the categories THIS language needs, which the instruction
  names, each written as this language's grammar requires. An `_ordinal_*` group takes this
  language's ORDINAL categories, which are often fewer than English's four: a language that
  writes every ordinal the same way returns `other` alone.

## Placeholders: `{{name}}`

- `{{name}}` is replaced by i18next at render time. Reproduce it exactly, inner name and both
  pairs of braces. A formatted one, `{{count, number}}`, is reproduced whole, format included.
  It may move to where word order needs it; never translate, add or drop one.
- **The count is not always called `count`.** `{{postsCount}} comments` pluralises on
  `postsCount`. Whatever it is called, a category that covers more than one number must carry
  it.
- `$t(some.other.key)` pulls another string in. Reproduce it exactly and translate around it.
- As in the backend catalog, you do not know what a placeholder will hold. Phrase the sentence
  so it is correct for any value, per the language guide.

## Tags: `<0>`, `<strong>`, `<trackTitle>`

These are not HTML. They are slots a React `<Trans>` component fills with elements: a link, a
bold span, an icon, a track's title.

- **Numbered tags**: `<0>Join Insiders</0> to enable Dark Mode`. The number is a position in
  the component's children. Keep every number, wrap the translation of the same words, and
  move the pair wherever the sentence needs it.
- **Self-closing tags**: `in <0/> <1>{{trackTitle}}</1>`. `<0/>` is a whole element (here, the
  track's icon) with no text. Keep it, in the place that reads naturally.
- **Named tags**: `<strong>`, `<bold>`, `<link>`, `<trackTitle>`. The name is an identifier,
  never translated.
- Never add, drop or rename a tag, and never nest tags differently from English. A few English
  strings close a tag as `<0/>` where `</0>` was meant; reproduce what English has.

## What this copy is

Mostly short interactive UI: buttons, tooltips, empty states, confirmation dialogs, status
labels ("In progress", "Published"), and the editor's panels. The same rules as the backend
catalog's UI chrome: the same English word gets the same translation everywhere, by the
glossary's product section; a label is not a sentence; leading and trailing whitespace matches
English exactly.

- **A status label agrees with what it labels.** "Completed", "Locked", "Published" describe
  an exercise, a solution or an iteration; the id usually says which. In a language with
  grammatical gender or case, pick the form that fits the noun the glossary uses for that
  thing.
- Keyboard shortcuts, file names, CLI commands (`exercism download ...`) and programming
  language names are reproduced exactly.
- Mentoring copy addresses mentors and students as peers. Keep the register the language guide
  sets, to both.
