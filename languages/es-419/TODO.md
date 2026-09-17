# TODO: adapt Latin American Spanish for Exercism

This folder was copied from Jiki's translator repo. Only the mechanical removals that are safe
to script have been made. **Hungarian is the one language adapted by hand**, and
`languages/hu/` is the model for what a finished folder looks like. Delete this file when the
list below is empty. It is never sent to the model: a pass loads `guide.md` and `glossary.md`
only.

## Already done, by script

- `glossary.md`: removed the whole section `## Jiki physical metaphors` (Jiki's product, world or source-markup model).
- `tracking.json` was NOT copied. A fresh one holds the schema with every forum id `null`.
- Per-item reviewer notes were NOT copied: Exercism has no such mechanism (`global/workflow.md`, "A forum fix overwrites the file").

## Still to do, by someone who can judge the language

1. **Add the Exercism product vocabulary.** `global/terms.md` § "Exercism product vocabulary" is the
   checklist (track, mentor, iteration, solution, reputation, analyzer, representer, test runner,
   concept / practice exercise, learning mode, badge, Insiders, community solutions, automated
   feedback, ...). Propose rows in a clearly separated "Proposed, not yet agreed" block, as
   `languages/hu/glossary.md` does: glossary rows are pre-agreed with native speakers.
2. **Remove what is left of Jiki**, by hand, because each line needs a judgement a script cannot
   make (a row that mentions Jiki in its Notes may still be a perfectly good term):

   - `guide.md` line 20: Jiki
   - `guide.md` line 24: Jiki
   - `guide.md` line 95: Jiki
   - `guide.md` line 96: Jiki
   - `guide.md` line 98: Jiki
   - `glossary.md` line 29: Jiki
   - `glossary.md` line 38: Jiki
   - `glossary.md` line 46: Jiki
   - `glossary.md` line 47: Jiki
   - `glossary.md` line 61: Jiki
   - `glossary.md` line 74: <define>
   - `glossary.md` line 76: <define>
   - `glossary.md` line 78: <define>
   - `glossary.md` line 79: <define>
   - `glossary.md` line 80: <define>
   - `glossary.md` line 81: <define>

3. **Reword `<define>` guidance.** No Exercism repo carries `<define>` / `<literal>` markup, and
   `global/voice.md` keeps only "never auto-gloss". A glossary column or note that says what to
   show "on `<define>`" now describes something that never happens: keep the fact a translator
   can still act on (which language is primary, what the native word is) and drop the rest.
4. **Check the register and audience lines.** Same register as Jiki, but the reader is no longer
   always a complete beginner: see `global/voice.md` § Audience.
5. **Interpolated values.** Exercism's UI strings and analyzer comments interpolate names the
   translator cannot see (`%{track_title}`, `{{handle}}`). If this language inflects or takes an
   article that depends on the word, the guide needs a rule for it, as `languages/hu/guide.md` has.
6. **Do not touch `glossary-notes.md`.** It is the decision log, copied as it is, append-only.
   It will mention Jiki pages and removed rows; that is history, and it stays.
