# Spanish (es) family glossary notes

## 2026-08-05: `code` → _código_, and `Code` leaves Keep in English

**Decided by:** matcots5, native speaker (es-419), on the forum. A `code (what the
learner writes)` row is added to § Core decisions and `Code` is dropped from the § Keep in
English row, which now reads `Bug, Frontend, Backend`. The change is family-level rather
than locale-level because no es-ES page had ever left "code" untranslated either, and both
guides already use _código_ in their worked examples, so it records what both locales were
doing. Full reasoning, including why the old row counted as an unconfirmed bootstrap draft
rather than an agreed decision, is in `../es-419/glossary-notes.md` under the same date.

## 2026-08-01: Family guide pruned, quotation-mark rule settled at family level

**Decided by:** agent, in a guide-pruning pass across all three Spanish files. **Status:
unconfirmed draft** for the quotation-mark rule; everything else is relocation, not a new
decision.

**Quotation marks (unconfirmed draft, needs native-speaker confirmation).** `es-ES/guide.md`
previously said the RAE-preferred marks are « », that straight `" "` are "near-universal
online and acceptable, pick one and stay consistent", and that the "Hungarian `„ "` pattern"
must not be used. Three problems: the rule was stated only for Spain although the convention
does not split by locale, "pick one and stay consistent" cannot produce consistency across a
corpus translated item by item, and the Hungarian cross-reference was dangling (the
Hungarian guide states no such rule). It is now one family-level rule in
`../es/guide.md` § Orthography and punctuation: « » (comillas latinas) for quoted material,
" " (comillas inglesas) only for a quotation nested inside a « » one, never the straight
typewriter `"`, never `„ "`, and quote characters inside code reproduced verbatim. « » is
the RAE-preferred primary form and is shared by both locales, so it is the better-researched
of the two defensible options; a native speaker may still prefer the plainer `" "` for
web-native beginner copy, in which case the rule flips at the family level, not per locale.

**Moved up from the locale guides to the family guide** (each was stated in both locales, or
was a pan-Spanish fact stated in only one, and neither locale contradicted the other):

- **Sentence case for titles and headings.** Stated in `es-ES/guide.md` § Orthography and in
  `es-419/guide.md`'s worked examples. Now family-level.
- **The identical-gloss rule** (drop the bracketed English gloss when the Spanish word is
  spelled exactly like the English one; keep it when they differ by so much as an accent).
  Stated at length in both locales, as `es-ES` § "Glosses that would teach nothing" and
  `es-419` § "Identical-gloss terms", with the same content in different words. The merged
  family version keeps every part of both: the standing-rule framing and the loanword
  examples from es-419, and the "never a reason to leave a term in English" clause from
  es-ES.

**Cut from the family guide as duplication, not as a decision change:**

- § Terminology (a closing paragraph restating that the glossary is binding and that a
  locale's effective glossary is the family rows plus its own, which `glossary.md` and
  `global/rules.md` both already say).
- The "feature vs función" style bullet: the `feature (platform capability)` glossary row
  already carries the same instruction, so the row's pointer at the guide was removed and
  the guide's copy dropped.
- The long second paragraph explaining the family/locale mechanism was cut to the two
  sentences a translation worker acts on.

## 2026-08-01: `modulo / remainder operator` result term is _residuo_, not _resto_

**Decided by:** native speaker (megareve) on the es-419 pinned glossary topic, post #4. **Terms affected:** `modulo / remainder
operator`.

The row rendered the result of `%` as _resto (de la división)_. megareve asked for
_residuo_ instead: in a maths context _resto_ reads as what is left over from a
**subtraction**, which is not what `%` produces, while _residuo_ names the remainder of a
division unambiguously. The split the row draws is unchanged: _módulo_ still names the
operator, and only the word for the result moves, so the row now reads _residuo (de la
división)_ and rules out _resto_ explicitly.

Nobody in the thread pushed back on it. The change is made in the family file, so it binds
both `es-419` and `es-ES`; it was raised by an es-419 speaker, and if a European Spanish
reviewer finds _resto_ is the ordinary word in Spain, the term splits into the two locale
glossaries rather than the family file.
