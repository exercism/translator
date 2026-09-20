# Portuguese (pt) family glossary notes

## 2026-09-20: Adapted for Exercism (agent; nothing here is a native speaker's decision)

This family glossary was forked from Jiki's Portuguese family glossary when Exercism's
translator repo was created. Exercism and Jiki are separate products, and this glossary is
Exercism's from here on. Everything that was about Jiki's own product (its courses, its
exercise stories, its characters and physical metaphors) went with the fork; every decision
about the Portuguese language itself was kept, including the ones a native speaker made. Where a
native speaker had settled one of the removed terms, the decision is recorded below as
retired rather than deleted.

**Added: `Exercism product vocabulary: PROPOSED, NOT YET AGREED`.** The English terms the
product's own nouns are built from, with the target column left empty, in the family file
because the product's nouns are shared across the family. Nobody who speaks Portuguese has been
asked yet, and an agent's invented rendering would read as an agreed one.

The decision log behind `glossary.md` and `guide.md` in this family folder: what changed,
why, and what still needs confirming. Reasoning only; term mappings live in `glossary.md`.

## 2026-08-04: `true / false` splits by sense in its Notes, not by rendering

**Decided by:** nobody. **Status: unconfirmed clarification**, raised by the European
Portuguese Stage 2 batch-3 pass. **Terms affected:** `true / false`.

The row still renders the concept as _verdadeiro / falso_; nothing about the term itself
changed. What the Notes column did not say is which of the two jobs the English words do in
the English source, and the two want opposite treatment.

Where the sentence is saying whether something is the case ("if the condition is true"), the
words are ordinary prose and take the Portuguese. Where **true** or **false** names the
literal value a function hands back ("Returns **true** if the space ahead is not a wall"),
it is the code token the learner will type and see in the editor, and translating it breaks
the link between the description and the program.

The formatting is not a reliable signal on its own, which is why the note is written by
sense. In code font the answer was never in doubt; the case that needed settling is the
bolded one in exercise message catalogs, where the token is bold rather than backticked and
so reads as emphasis.

**Precedent.** French and Italian both keep the bolded token English in the
`maze-turn-around` catalog (_Restituisce **true** se..._, _renvoie **true** si..._), as do
Serbian and Ukrainian. The pt-PT files written in this batch already do the same. **pt-BR's
`maze-turn-around` catalog currently translates it** (_Retorna **verdadeiro**..._), so it
diverges from the clarification. Nothing on the Brazilian side was touched here; that is for
a pt-BR pass and, ideally, a Brazilian speaker to settle, and if they prefer the translated
form the split belongs in the locale files rather than in this row.

## 2026-08-03: `return chute` is no longer a shared row

**Decided by:** native speakers (alanprofeta, oxe-b) on the Brazilian Portuguese glossary
thread, and.
**Terms affected:** `return chute`.

The shared row `return chute → calha de saída` was an unconfirmed draft that carried its own
request for native-speaker confirmation. Brazilian speakers gave that confirmation and it
came back negative: `calha de saída` reads odd, and pt-BR now uses `boca da máquina`, the
colloquial Brazilian term for the opening on a vending machine or an ATM. The full reasoning
is in `../pt-BR/glossary-notes.md`.

That rendering is a Brazilian colloquialism and no European Portuguese speaker has been asked
about it, so it is not promoted back up here. The row was removed from this file and written
into both locale glossaries instead: pt-BR takes `boca da máquina`, pt-PT keeps `calha de
saída` exactly as it was, still flagged as awaiting its own confirmation. Neither locale's
effective glossary lost a row, and no pt-PT content changed.

## 2026-08-02: `string` gloss spelling conflicts with pt-PT's own European-spelling rule

**Flagged by:** agent, during the pt-PT Stage 2 batch 2 catch-up pass. **Status: needs an
owner decision, nothing changed here yet.**

`glossary.md:68` (this family file) spells the `string` gloss `cadeia de caracteres` — the
Brazilian spelling of "characters". But `languages/pt-PT/glossary.md:31` (`character` row)
explicitly mandates the post-1990 European spelling `carateres`, and calls out `caracteres`
as the Brazilian form to avoid. A family-file row is therefore carrying a spelling that
contradicts pt-PT's own settled rule. The pt-PT pass followed its locale's rule (`carateres`)
rather than the family file, which is correct per-locale but leaves the family row wrong for
half the family.

Two fixes, either is fine: (1) add a per-locale spelling note to this family row so pt-BR and
pt-PT each render correctly from one place, or (2) drop the `string` gloss from the family
file and let each locale file own it. Needs an owner call, not an agent guess, since it's a
family-vs-locale placement decision affecting every future Portuguese pass.

Also unrecorded anywhere: `string`'s grammatical gender. The pt-BR and pt-PT catch-up passes
both used feminine (`uma string`) without an explicit rule; a future pass could defensibly
pick masculine. Worth one note wherever the `string` row ends up.

## 2026-08-01: Family guide pruned, and the contraction rule lifted out of both locales

**Decided by:** agent (guide-pruning pass). **Status: structural, no rule changed.**

The family guide is loaded into the prompt for every Portuguese item in both locales, so
anything in it that a translator cannot act on is paid for on every pass. Three things were
removed and are recorded here instead.

- **The "This file never stands alone" paragraph and the `## Terminology` section** both
  described how the family/locale split works rather than how to write Portuguese. That
  mechanism is already stated in `CLAUDE.md` § "Language families", in `global/workflow.md`,
  and in `glossary.md` § "How this file changes". The guide keeps a single sentence pointing
  at the locale guide and both glossaries; nothing a translator acts on was lost.
- **The rationale for why the shared grammar section is thin** was: Brazilian and European
  Portuguese diverge more grammatically than the two Spanish locales do (different
  second-person address, different progressive-aspect construction, different clitic
  placement), so only genuinely shared grammar belongs in the family file. That reasoning
  still holds and is why the family `## Grammar` section stays short; it is guidance for
  whoever edits the file, not for a translator, so it lives here.
- **The contraction rule moved up from both locale guides into the family guide.** `de + o =
  do`, `em + a = na`, `a + o = ao` and the rest were stated in `pt-BR/guide.md` and
  `pt-PT/guide.md` in near-identical words, and the rule is identical in both locales, so it
  now sits once in `pt/guide.md` § Grammar. The pt-BR guide additionally had a separate
  "Prepositions contract with articles" bullet stating the same rule a second time with
  examples; those examples are folded into the single family bullet, minus "through the loop
  → pelo laço", whose noun is pt-BR-specific (`laço` vs pt-PT `ciclo`) and which taught
  nothing the other examples did not.

## Open: no quotation-mark convention exists for either locale

**Status: gap, not a decision.** Neither `pt/guide.md` nor either locale guide states which
quotation glyphs to use, and no example in any of the three files uses a quotation mark, so
there is nothing to contradict. The two locales genuinely differ (Brazil uses `" "`, Portugal
traditionally `« »`, though `" "` is now common in Portuguese web writing), which means the
rule cannot sit in the family guide as one line; it needs a locale-level decision from a
native speaker in each. Deliberately left unwritten rather than invented.

## Open: gender-neutral phrasing is stated only for pt-BR

**Status: gap, not a decision.** `pt-BR/guide.md` § "Gender-neutral phrasing" tells a
translator how to avoid reader-directed gendered agreement (prefer neutral forms, masculine
as fallback, never `(a)`/`x`/`@`). European Portuguese has exactly the same grammatical
problem and no equivalent section, and inherits nothing, because the family guide has none
either. Whether the pt-BR rules apply unchanged in Portugal (in particular the masculine
fallback and the ban on `(a)` forms) is a native-speaker call for pt-PT; once answered, the
shared part of it probably belongs in `pt/guide.md`.

## Open: provenance is sitting in the family glossary's Notes column

**Status: defect, not fixed here.** Several rows in `glossary.md` carry research provenance
and forum attribution in their `Notes` column, which per `orchestrator.md` § "Where each
piece of the feedback goes" should hold only what a translator must act on: `if statement`
and `statement (executable)` ("Corroborated for pt-PT via Univ. Évora course material"),
`array` ("Confirmed for pt-PT as the dominant academic usage"), `input slot` (a full
paragraph of connotation analysis attributing the choice to oxe-b and alanprofeta on the
pt-BR glossary thread), and `return chute` ("Low-to-medium confidence; flag for
native-speaker confirmation on first real use"). Moving them here would be the right fix,
but `input slot` records a native speaker's decision and this pass was scoped to the guides,
so nothing was touched. Flagged for a glossary-side pass.
