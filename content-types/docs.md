# The docs site

The pages of `exercism.org/docs`, from `exercism/docs`. One i18n type per served section, so
that scope is a one-line change in the i18n registry.

| i18n type id | English | Written for |
|---|---|---|
| `docs-using` | `using/**/*.md` | everyone using the site: getting started, solving exercises, the editor, the CLI, feedback, settings, FAQs |
| `docs-programming` | `programming/**/*.md` | learners: general programming guidance |
| `docs-community` | `community/**/*.md` | everyone: how the community works, being a good member |
| `docs-mentoring` | `mentoring/**/*.md` | mentors |
| `docs-building` | `building/**/*.md` | contributors and maintainers: how tracks, tooling and the site are built |

**TODO(iHiD): OPEN.** Whether `docs-building` (155 of the 212 served pages) and
`docs-mentoring` are translated at all is undecided. Both types are live in the i18n registry,
so both are routed here, and this how-to covers them so that the decision is not made by
omission. Nothing in this file should be read as having made it.

A page's title and blurb live in its section's `config.json` and are not part of this type
(fragment text, see `START-HERE.md`).

## Name the interface by what the reader sees

These pages walk a reader through the website: "click the **Open in editor** button", "go to
your **Journey** page". Per "Name things by the name the reader sees" in `global/rules.md`,
a button, tab, menu item or page name is written as the website's own catalog translates it
for this language, because the reader is looking at it. Use the glossary's product terms
(track, iteration, mentoring, reputation, ...) exactly.

## What is particular to each audience

- **Using, programming, community:** the same readers as the exercises. Plain, direct, warm.
- **Mentoring:** written for volunteers who give their time. The register is the same
  informal one; the tone is collegial, never instructional-to-a-beginner.
- **Building:** technical documentation for maintainers. It is dense with file names
  (`config.json`, `.meta/config.json`), JSON keys, CLI commands (`configlet lint`), GitHub
  vocabulary and specification language ("MUST", "SHOULD"). File names, keys, commands, status
  values and label names stay exactly as written. Where a page uses RFC-style MUST / SHOULD /
  MAY, translate them with this language's conventional equivalents and keep them visually
  distinct, as the English does.

## Structure

- Plain Markdown, no frontmatter, one `#` title.
- Code blocks are reproduced byte for byte. That includes the ` ```markdown ` and
  ` ````markdown ` blocks the building docs use to SHOW Markdown: those are examples of what
  a maintainer types, not prose, and stay in English.
- `exercism/note`, `exercism/caution` and `exercism/advanced` fences are admonitions: translate
  the prose inside, reproduce the fence lines.
- Links between docs pages (`/docs/using/...`) keep their targets. A link to a heading inside
  a page (`#some-heading`) keeps its target too; do not rewrite it to match a translated
  heading.
