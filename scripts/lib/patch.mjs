// patch.mjs: revise an existing translation by line edits instead of a whole new file.
//
// When English is edited and the locale holds a translation of the previous
// English, the model is sent the git diff of the English, the new English and
// the current translation, both with line numbers. It answers with only the
// lines of the translation that have to change. Every line it does not name is
// kept byte for byte, so a native speaker's correction anywhere else survives,
// and the answer is a few lines instead of the whole file.
//
// The answer is JSON:
//
//   { "edits": [
//       { "line": 12, "old": "<line 12 as it is now>", "new": ["<replacement>", ...] },
//       { "after": 12, "new": ["<inserted line>", ...] }
//   ] }
//
// A replace with an empty `new` deletes the line. `after: 0` inserts before the
// first line. `old` is a guard against a wrong line number: it is compared with
// the line at that number, ignoring whitespace, and if it does not match, the
// one line elsewhere that does is used instead. If no line matches, or more than
// one does, the whole answer is refused, and the caller falls back to
// translating the whole file.

const norm = (line) => line.replace(/\s+/g, " ").trim();

/** The text as lines, without the final newline, and the line ending it uses. */
export function splitLines(text) {
  const eol = text.includes("\r\n") ? "\r\n" : "\n";
  const body = text.endsWith("\n") ? text.replace(/\r?\n$/, "") : text;
  return { lines: body === "" ? [] : body.split(/\r?\n/), eol, final: text.endsWith("\n") };
}

/** The text with each line prefixed by its 1-based number, as the model is sent it. */
export function numbered(text) {
  const { lines } = splitLines(text);
  const width = String(lines.length).length;
  return lines.map((line, index) => `${String(index + 1).padStart(width)}| ${line}`).join("\n");
}

/** The edits in an answer, or a Failure-style `{ error }`. Pure. */
export function parseEdits(answer) {
  let text = answer.trim().replace(/^```(?:json)?\s*\n/, "").replace(/\n```\s*$/, "");
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1) return { error: "the answer holds no JSON object" };
  let parsed;
  try {
    parsed = JSON.parse(text.slice(start, end + 1));
  } catch (error) {
    return { error: `the answer is not valid JSON: ${error.message}` };
  }
  if (!Array.isArray(parsed?.edits)) return { error: "the answer has no `edits` array" };
  for (const edit of parsed.edits) {
    const isReplace = Number.isInteger(edit?.line) && typeof edit.old === "string";
    const isInsert = Number.isInteger(edit?.after);
    if (isReplace === isInsert) return { error: `an edit is neither a replace nor an insert: ${JSON.stringify(edit).slice(0, 200)}` };
    if (!Array.isArray(edit.new) || edit.new.some((line) => typeof line !== "string" || /[\r\n]/.test(line))) {
      return { error: `an edit's \`new\` is not an array of single lines: ${JSON.stringify(edit).slice(0, 200)}` };
    }
  }
  return { edits: parsed.edits };
}

/**
 * The translation with the edits applied, or `{ error }`. Pure.
 *
 * `relocated` counts replaces whose line number was wrong and whose `old` text
 * was found, uniquely, on another line.
 */
export function applyEdits(translation, edits) {
  const { lines, eol, final } = splitLines(translation);
  const targets = new Set();
  const placed = [];
  let relocated = 0;

  for (const edit of edits) {
    if ("after" in edit) {
      if (edit.after < 0 || edit.after > lines.length) return { error: `insert after line ${edit.after}, but the translation has ${lines.length} lines` };
      placed.push({ at: edit.after + 0.5, seq: placed.length, apply: (all) => all.splice(edit.after, 0, ...edit.new) });
      continue;
    }
    let index = edit.line - 1;
    if (!(index >= 0 && index < lines.length && norm(lines[index]) === norm(edit.old))) {
      const matches = lines.flatMap((line, at) => (norm(line) === norm(edit.old) ? [at] : []));
      if (matches.length !== 1) {
        return { error: `line ${edit.line} does not hold the text the edit names, and ${matches.length === 0 ? "no line" : `${matches.length} lines`} elsewhere ${matches.length === 0 ? "does" : "do"}: ${JSON.stringify(edit.old).slice(0, 120)}` };
      }
      index = matches[0];
      relocated += 1;
    }
    if (targets.has(index)) return { error: `two edits replace line ${index + 1}` };
    targets.add(index);
    placed.push({ at: index + 1, seq: placed.length, apply: (all) => all.splice(index, 1, ...edit.new) });
  }

  // From the bottom up, so an edit never moves the line another one targets.
  // Two inserts after one line are applied last-first, so they land in the
  // order the answer gave them.
  const result = [...lines];
  for (const one of placed.sort((a, b) => b.at - a.at || b.seq - a.seq)) one.apply(result);
  return { text: result.join(eol) + (final ? eol : ""), relocated, edits: edits.length };
}
