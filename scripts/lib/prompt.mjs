// prompt.mjs: what the model is sent, and in what order.
//
// ## Prompt order is load-bearing
//
// DeepSeek bills a prompt-cache hit at roughly 1/120th of a miss, and a cache
// can only reuse a shared PREFIX. So every prompt is assembled in one fixed
// order, most widely shared first:
//
//   1. global/rules.md              identical for every call there will ever be
//   2. global/voice.md
//   3. global/translating.md
//   4. the language guide           identical for every call in one locale
//      (the family guide first, for a locale that belongs to a family)
//   5. the WHOLE glossary           (family glossary first, likewise)
//   6. the content type's how-to    identical for every item of one type
//      and that type's fixed instruction
//   7. the previous version of this text and its translation, when English was
//      edited and the old translation exists
//   8. the English text, last
//
// The system message is invariant too and names no language. scripts/translate.mjs
// sorts its work by locale and then by type, so consecutive calls share
// everything down to the end of step 6.
//
// **The glossary is never filtered to the terms a text happens to use.** A
// filtered glossary is different bytes for every item, which ends the shared
// prefix at step 4 and turns thousands of tokens per call from a hit into a
// miss. It also removes the rows that tell a model what NOT to write.
//
// Anything added above step 7 that varies by item throws the cache away for
// everything after it. Add item-specific material at step 7 or below.
//
// global/pass-mechanics.md and global/workflow.md are deliberately NOT sent.
// They describe what happens around the model, none of which the thing on the
// other end of a prompt can do.

import path from "node:path";
import { ROOT, die, familyOf, languageName, readIfPresent } from "./config.mjs";

function load(relative) {
  const text = readIfPresent(path.join(ROOT, relative));
  if (text === null) die(`missing governance file: ${relative}`);
  return { relative, text };
}

const asFile = (file) => `<file path="${file.relative}">\n${file.text.trimEnd()}\n</file>`;

export const SYSTEM =
  `You are an Exercism translation worker. You translate from English into the target ` +
  `language named in the message below.\n\n` +
  `The governance files given to you are binding: follow global/rules.md, global/voice.md, ` +
  `global/translating.md, the language guide, the glossary and the content-type how-to ` +
  `exactly.\n\n` +
  `Work through the pass as global/translating.md defines it, including its mandatory ` +
  `self-review, before you answer. Output ONLY what the final instruction asks for and ` +
  `nothing else: no commentary, no explanation, no notes about terms you were unsure of.`;

/** Steps 1 to 5: everything that is fixed for one locale. */
function localePrefix(locale) {
  const name = languageName(locale);
  if (!name) die(`locale "${locale}" is not in languages/names.json`);
  const family = familyOf(locale);
  const parts = ["global/rules.md", "global/voice.md", "global/translating.md"].map((file) => asFile(load(file)));
  parts.push(`<target-language code="${locale}">${name}</target-language>`);
  if (family) parts.push(asFile(load(`languages/${family}/guide.md`)));
  parts.push(asFile(load(`languages/${locale}/guide.md`)));
  if (family) parts.push(asFile(load(`languages/${family}/glossary.md`)));
  parts.push(asFile(load(`languages/${locale}/glossary.md`)));
  return { name, parts };
}

const FILE_INSTRUCTION = (name, locale) =>
  `Translate the English text at the end of this message into ${name} (${locale}), following ` +
  `every governance file above.\n\n` +
  `Reproduce the Markdown structure exactly: the same headings at the same levels, the same ` +
  `lists, tables and link targets, every fenced code block and every inline code span byte ` +
  `for byte, and every HTML tag with its attributes. A string the exercise's tests compare ` +
  `against stays in English even where the author wrote it as plain quoted prose ` +
  `(global/rules.md, "Test-compared strings").\n\n` +
  `Where a <previous-version> block is given, the English was edited: that block holds the ` +
  `older English and the translation of it that is live today. Keep its wording wherever the ` +
  `English did not change, and translate afresh only what did.\n\n` +
  `Output the complete translated text and nothing else: no JSON, no wrapper, no code fence ` +
  `around the whole answer, no frontmatter the English does not have.`;

const CATALOG_INSTRUCTION = (name, locale, { cardinal, ordinal }) =>
  `The JSON object at the end of this message is a batch of website strings, keyed by unit ` +
  `id. Translate every value into ${name} (${locale}), following every governance file ` +
  `above.\n\n` +
  `- A value that is a STRING is one ordinary string. Return a string.\n` +
  `- A value that is an OBJECT is a plural group: its keys are the plural categories English ` +
  `has. Return an object whose keys are exactly the categories ${name} needs: ` +
  `${cardinal.map((c) => `"${c}"`).join(", ")}` +
  `${ordinal ? ` (and for an id ending "_ordinal_*": ${ordinal.map((c) => `"${c}"`).join(", ")})` : ""}. ` +
  `Write each form as ${name} grammar requires for that category, whatever English holds. ` +
  `A category that English's "other" form carries a count placeholder in must carry it too.\n` +
  `- Where a <previous-version> block is given, those units' English was edited: it holds ` +
  `the translation that is live today. Keep its wording wherever the new English allows.\n\n` +
  `Hard requirements. A unit that breaks one is rejected by the checker and left untranslated:\n` +
  `- Copy every unit id byte for byte. Do not invent, rename, drop or nest any id.\n` +
  `- Reproduce every placeholder and every tag exactly as the how-to above describes.\n` +
  `- Keep leading and trailing whitespace exactly as the English value has it.\n` +
  `- Never return a value unchanged from English unless it is genuinely the same in ` +
  `${name} (a brand name, a programming language's name).\n\n` +
  `Output one flat JSON object mapping every unit id you were given to its translation, and ` +
  `nothing else.`;

/** The fixed prefix for one (locale, how-to, shape). Byte-identical across every item of a group. */
export function fixedPrefix({ locale, howto, shape, plural = null }) {
  const { name, parts } = localePrefix(locale);
  parts.push(asFile(load(`content-types/${howto}.md`)));
  parts.push(`<instruction>\n${shape === "catalog" ? CATALOG_INSTRUCTION(name, locale, plural) : FILE_INSTRUCTION(name, locale)}\n</instruction>`);
  return `${parts.join("\n\n")}\n\n`;
}

/** Steps 7 and 8 for a whole file. */
export function fileTail({ sourcePath, english, previous = null }) {
  const parts = [];
  if (previous) {
    parts.push(
      `<previous-version>\n<previous-english>\n${previous.english.trimEnd()}\n</previous-english>\n` +
        `<previous-translation>\n${previous.translation.trimEnd()}\n</previous-translation>\n</previous-version>`
    );
  }
  parts.push(`<english-text path="${sourcePath}">\n${english.trimEnd()}\n</english-text>`);
  return `${parts.join("\n\n")}\n`;
}

/** Steps 7 and 8 for one catalog batch. */
export function catalogTail({ kind, batch, previous = null }) {
  const parts = [];
  if (previous && Object.keys(previous).length > 0) parts.push(`<previous-version>\n${JSON.stringify(previous, null, 2)}\n</previous-version>`);
  parts.push(`<strings-to-translate catalog="website-${kind}">\n${JSON.stringify(batch, null, 2)}\n</strings-to-translate>`);
  return `${parts.join("\n\n")}\n`;
}

/** Tokens, near enough for a dry run: four characters each. */
export const approxTokens = (text) => Math.round(text.length / 4);
