// repair.mjs: put code back into a rejected translation, when that is safe.
//
// Most answers the checker rejects have good prose around code the model
// touched: a comment in a code block translated, an identifier in backticks
// translated or dropped. The code in a translation is by rule the English code
// byte for byte (global/rules.md), so it can be copied back from the English
// without asking the model again. That is only safe when every piece of code in
// the answer can be paired with the piece of English it came from:
//
//   - fenced blocks are paired by position, and only when the answer has the
//     same number as the English, each pair is the same kind (code with code,
//     admonition with admonition), and the answer closes every block the
//     English closes. A code block is replaced whole, fence
//     lines included. An admonition is prose, so only its two fence lines are
//     restored, and the code blocks inside it are paired like any other.
//   - inline code spans are compared as the checker compares them. Spans the
//     answer has unchanged are left where they are, since word order may have
//     moved them. The rest are paired in order, and only when the answer has as
//     many spans as the English.
//
// It uses the checker's own parsing (scripts/lib/checks.mjs), so a span or block
// it sees is one the checker sees. Prose is never changed. The caller runs the
// checker again on the result and writes it only if it passes.

import { codeBlocks, codeSpans } from "./checks.mjs";

/** Apply `[start, end, text]` edits, which must not overlap. */
function splice(text, edits) {
  let out = text;
  for (const [start, end, replacement] of [...edits].sort((a, b) => b[0] - a[0])) out = out.slice(0, start) + replacement + out.slice(end);
  return out;
}

function repairBlocks(english, translated) {
  const [en, target] = [codeBlocks(english), codeBlocks(translated)];
  if (en.length !== target.length) return { text: translated, count: 0 };
  // An answer that leaves open a block the English closes has turned the rest
  // of the file into code, and replacing that would drop its prose.
  if (en.some((block, index) => block.admonition !== target[index].admonition || (block.closer !== null && target[index].closer === null))) return { text: translated, count: 0 };
  const edits = [];
  let count = 0;
  en.forEach((block, index) => {
    const other = target[index];
    if (!block.admonition) {
      // A block the English leaves open runs to the end of the file, so the
      // repaired one does too.
      const end = block.closer === null ? translated.length : other.end;
      if (block.body !== translated.slice(other.start, end)) {
        edits.push([other.start, end, block.body]);
        count += 1;
      }
      return;
    }
    let changed = false;
    if (block.opener !== other.opener) {
      edits.push([other.start, other.start + other.opener.length, block.opener]);
      changed = true;
    }
    if (block.closer !== null && other.closer !== null && block.closer !== other.closer) {
      edits.push([other.end - other.closer.length, other.end, block.closer]);
      changed = true;
    }
    if (changed) count += 1;
  });
  return { text: splice(translated, edits), count };
}

function repairSpans(english, translated) {
  const [en, target] = [codeSpans(english), codeSpans(translated)];
  if (en.length !== target.length) return { text: translated, count: 0 };
  // Spans present in both are matched first, by content as the checker
  // compares them, counting repeats.
  const unmatched = new Map();
  for (const span of en) unmatched.set(span.content, (unmatched.get(span.content) ?? 0) + 1);
  const extra = [];
  for (const span of target) {
    const left = unmatched.get(span.content) ?? 0;
    if (left > 0) unmatched.set(span.content, left - 1);
    else extra.push(span);
  }
  const lost = [];
  for (const span of en) {
    const left = unmatched.get(span.content) ?? 0;
    if (left > 0) {
      unmatched.set(span.content, left - 1);
      lost.push(span);
    }
  }
  // Equal totals means equal leftovers on both sides.
  const edits = extra.map((span, index) => [span.start, span.end, lost[index].raw]);
  return { text: splice(translated, edits), count: edits.length };
}

/**
 * The translation with its code restored from the English, where each piece of
 * code can be paired safely.
 *
 * Returns `{ text, blocks, spans }`: the repaired text and how many fenced
 * blocks and inline spans were put back. Both counts are zero when nothing
 * could be, or needed to be, repaired.
 *
 * @param {string} english
 * @param {string} translated
 */
export function repairCode(english, translated) {
  const blocks = repairBlocks(english, translated);
  const spans = repairSpans(english, blocks.text);
  return { text: spans.text, blocks: blocks.count, spans: spans.count };
}
