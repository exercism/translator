// prompt.mjs: what the model is sent, and in what order.
//
// ## Prompt order matters
//
// DeepSeek bills a prompt-cache hit at roughly 1/120th of a miss, and the cache
// can only reuse a shared prefix. So every prompt is assembled in one fixed
// order, with the most widely shared parts first:
//
//   1. global/rules.md              identical for every call there will ever be
//   2. global/voice.md
//   3. global/translating.md
//   4. the language guide           identical for every call in one locale
//      (the family guide first, for a locale that belongs to a family)
//   5. the whole glossary           (family glossary first, likewise)
//   6. the content type's how-to    identical for every item of one type
//      and that type's fixed instruction
//   7. the previous version of this text and its translation, when English was
//      edited and the old translation exists
//   8. the English text, last
//
// An edited file whose translation the locale holds is usually revised instead
// (global/pass-mechanics.md, "Revising an edited file"). Its prompt shares steps
// 1 to 6, with its own fixed instruction, and its tail holds only what changed:
// the changed paragraphs (paragraphTail), or the diff with the numbered English
// and translation (patchTail).
//
// The system message is invariant too and names no language. scripts/translate.mjs
// sorts its work by locale and then by type, so consecutive calls share
// everything down to the end of step 6.
//
// The glossary is never filtered to the terms a text uses. A filtered glossary
// would differ for every item, which would end the shared prefix at step 4 and
// turn thousands of tokens per call from cache hits into misses. It would also
// drop the rows that tell the model what not to write.
//
// Anything that varies by item and is added before step 7 loses the cache for
// everything after it. Add item-specific material at step 7 or later.
//
// global/pass-mechanics.md and global/workflow.md are not sent. They describe
// what happens around the model, and the model cannot act on any of it.

import path from "node:path";
import { ROOT, die, familyOf, languageName, readIfPresent } from "./config.mjs";
import { numbered } from "./patch.mjs";

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
  `Every fenced code block is copied byte for byte, comments and strings included; the file ` +
  `is rejected if any code block differs from the English.\n\n` +
  `Output the complete translated text and nothing else: no JSON, no wrapper, no code fence ` +
  `around the whole answer, no frontmatter the English does not have.`;

// An edited file whose previous English the locale has translated is revised
// by line edits (scripts/lib/patch.mjs). The answer names only the lines that
// change, so everything else in the live translation is kept byte for byte.
const PATCH_INSTRUCTION = (name, locale) =>
  `The English text of one file was edited. At the end of this message are the git diff of ` +
  `that edit (<english-diff>), the new English with line numbers (<english-text>), and the ` +
  `${name} (${locale}) translation that is live today, also with line numbers ` +
  `(<current-translation>). That translation was written for the English before the edit.\n\n` +
  `Revise the current translation so that it translates the new English, following every ` +
  `governance file above. You are revising, not recreating (global/translating.md, "When a ` +
  `previous version is given"): change only the lines the English edit touches. Every other ` +
  `line is live, may have been corrected by a native speaker, and must be left alone, even ` +
  `where you would have worded it differently.\n\n` +
  `- A change to a fenced code block, or to an inline code span, is copied into the ` +
  `translation byte for byte, whitespace included.\n` +
  `- A change to whitespace that changes how Markdown renders (two trailing spaces that make a ` +
  `line break, indentation, blank lines between blocks) is carried into the translation.\n` +
  `- A change to whitespace that does not render (a single trailing space, a double space ` +
  `inside a prose sentence) needs no edit.\n` +
  `- A change to the English wording is translated, and the matching line or lines of the ` +
  `translation are rewritten. The translation's lines need not match the English line for ` +
  `line: find where it says what the edited English says.\n` +
  `- If the edit needs no change to the translation at all, return no edits.\n\n` +
  `Answer with one JSON object and nothing else:\n` +
  `{"edits": [ ... ]}\n` +
  `where each edit is one of:\n` +
  `- {"line": N, "old": "<line N of the current translation, copied>", "new": ["<line>", ...]} ` +
  `replaces line N with the lines in "new". An empty "new" deletes line N.\n` +
  `- {"after": N, "new": ["<line>", ...]} inserts the lines after line N (0 inserts before ` +
  `line 1).\n` +
  `Line numbers refer to <current-translation> as given, before any edit. Each line in "new" is ` +
  `one line without its number prefix and without a newline; an empty string is a blank line. ` +
  `Name each line of the translation at most once. Do not return lines that stay the same.`;

// An edited file whose paragraphs line up with its translation is revised one
// paragraph at a time (scripts/lib/paragraphs.mjs). Only the changed paragraphs
// are sent, and only their new translations come back.
const PARAGRAPH_INSTRUCTION = (name, locale) =>
  `The English text of one file was edited. At the end of this message is each paragraph whose ` +
  `English changed: its English before the edit (<old-english>), its English now ` +
  `(<new-english>), and its ${name} (${locale}) translation that is live today ` +
  `(<current-translation>), which was written for the English before the edit.\n\n` +
  `Revise each translation so that it translates the new English, following every governance ` +
  `file above. You are revising, not recreating (global/translating.md, "When a previous ` +
  `version is given"): change only what the English edit touches, and keep every other word of ` +
  `the current translation, even where you would have worded it differently. It is live and ` +
  `may have been corrected by a native speaker.\n\n` +
  `- If the current translation already says what the new English says (the edit fixed an ` +
  `English typo the translation never had, or changed only whitespace that does not render), ` +
  `answer null for that paragraph.\n` +
  `- Keep the translation's own line breaks inside the paragraph, except where the edit ` +
  `changes the English's lines: where the new English splits a line into two lines or list ` +
  `items, or joins two into one, do the same in the translation. Never add a blank line: a ` +
  `paragraph stays one paragraph.\n` +
  `- Inline code spans, link targets, HTML and Markdown markers are copied from the new English ` +
  `byte for byte.\n\n` +
  `Answer with one JSON object and nothing else, keyed by each paragraph's id:\n` +
  `{"paragraphs": {"<id>": "<the whole revised paragraph>" or null, ...}}`;

const CATALOG_INSTRUCTION = (name, locale, { cardinal, ordinal }) =>
  `The JSON object at the end of this message is a batch of strings from one catalog, keyed ` +
  `by unit id. Translate every value into ${name} (${locale}), following every governance file ` +
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
  parts.push(`<instruction>\n${shape === "catalog" ? CATALOG_INSTRUCTION(name, locale, plural) : shape === "patch" ? PATCH_INSTRUCTION(name, locale) : shape === "paragraphs" ? PARAGRAPH_INSTRUCTION(name, locale) : FILE_INSTRUCTION(name, locale)}\n</instruction>`);
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

/** Steps 7 and 8 for a line-edit revision of a file (scripts/lib/patch.mjs). */
export function patchTail({ sourcePath, diff, english, translation }) {
  return (
    `<english-diff path="${sourcePath}">\n${diff.trimEnd()}\n</english-diff>\n\n` +
    `<english-text path="${sourcePath}">\n${numbered(english)}\n</english-text>\n\n` +
    `<current-translation>\n${numbered(translation)}\n</current-translation>\n`
  );
}

/** Steps 7 and 8 for a paragraph revision of a file (scripts/lib/paragraphs.mjs). */
export function paragraphTail({ sourcePath, send }) {
  const items = send.map(
    (one) =>
      `<paragraph id="${one.index + 1}">\n<old-english>\n${one.oldEnglish}\n</old-english>\n` +
      `<new-english>\n${one.english}\n</new-english>\n<current-translation>\n${one.translation}\n</current-translation>\n</paragraph>`
  );
  return `<changed-paragraphs path="${sourcePath}">\n${items.join("\n...\n")}\n</changed-paragraphs>\n`;
}

/** Steps 7 and 8 for one catalog batch. */
export function catalogTail({ catalog, batch, previous = null }) {
  const parts = [];
  if (previous && Object.keys(previous).length > 0) parts.push(`<previous-version>\n${JSON.stringify(previous, null, 2)}\n</previous-version>`);
  parts.push(`<strings-to-translate catalog="${catalog}">\n${JSON.stringify(batch, null, 2)}\n</strings-to-translate>`);
  return `${parts.join("\n\n")}\n`;
}

/** Tokens, near enough for a dry run: four characters each. */
export const approxTokens = (text) => Math.round(text.length / 4);
