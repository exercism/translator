// fake-engine.mjs: a stand-in for DeepSeek, used only by scripts/test.mjs.
//
// It "translates" by marking text, which is enough to run everything around the
// model for real: the prompt's shape, the i18n checker, the write, the stamp.
// scripts/translate.mjs refuses to load it unless the tree being written to is a
// test fixture, so it cannot write into the real locales/.
//
// FAKE_ENGINE_BREAK=code makes it alter a code block and translate inline code,
// which the checker rejects and the code repair puts right;
// FAKE_ENGINE_BREAK=drop makes it leave out every code block, which cannot be
// repaired; FAKE_ENGINE_BREAK=english makes it hand the English back unchanged;
// FAKE_ENGINE_BREAK=placeholder makes it drop `%{...}` from catalog strings.
//
// Asked for line edits (a prompt with <current-translation>), it works out the
// whole translation as above and returns an edit for each line that differs
// from the current one, or, when the line counts differ, one edit that replaces
// everything. FAKE_ENGINE_PATCH=misplaced names text no line holds, which the
// patch refuses, so the run falls back to the whole file.
//
// Asked for paragraphs (a prompt with <changed-paragraphs>), it translates each
// paragraph's new English the same way. FAKE_ENGINE_PARAGRAPHS=refuse leaves
// every paragraph out of the answer, which is refused, so the run falls back to
// line edits.

const between = (text, open, close) => {
  const start = text.lastIndexOf(open);
  const from = text.indexOf("\n", start) + 1;
  return text.slice(from, text.lastIndexOf(close) - 1);
};

const mark = (value) => {
  const marked = value.replace(/^(\s*)([\s\S]*?)(\s*)$/, (_, lead, body, trail) => `${lead}HU ${body}${trail}`);
  return process.env.FAKE_ENGINE_BREAK === "placeholder" ? marked.replace(/%\{[^}]*\}/g, "") : marked;
};

const unnumber = (text) => text.split("\n").map((line) => line.replace(/^\s*\d+\| ?/, "")).join("\n");

function patch(prompt) {
  const english = unnumber(between(prompt, "<english-text", "</english-text>"));
  const current = unnumber(between(prompt, "<current-translation>", "</current-translation>")).split("\n");
  const wanted = whole(english).split("\n");
  if (process.env.FAKE_ENGINE_PATCH === "misplaced") return { edits: [{ line: 1, old: "no line says this", new: ["x"] }] };
  if (wanted.length !== current.length) {
    return { edits: [{ line: 1, old: current[0], new: wanted }, ...current.slice(1).map((old, index) => ({ line: index + 2, old, new: [] }))] };
  }
  return { edits: wanted.flatMap((line, index) => (line === current[index] ? [] : [{ line: index + 1, old: current[index], new: [line] }])) };
}

function paragraphs(prompt) {
  if (process.env.FAKE_ENGINE_PARAGRAPHS === "refuse") return { paragraphs: {} };
  const answer = {};
  for (const [, id, english] of prompt.matchAll(/<paragraph id="(\d+)">[\s\S]*?<new-english>\n([\s\S]*?)\n<\/new-english>/g)) answer[id] = whole(english);
  return { paragraphs: answer };
}

export default async function call({ prompt, json }) {
  const usage = { input: 100, cacheHit: 60, cacheMiss: 40, thinking: 0, output: 50, cost: 0 };
  if (json && prompt.includes("<changed-paragraphs")) return { text: JSON.stringify(paragraphs(prompt)), usage };
  if (json && prompt.includes("<current-translation>")) return { text: JSON.stringify(patch(prompt)), usage };
  if (json) {
    const batch = JSON.parse(between(prompt, "<strings-to-translate", "</strings-to-translate>"));
    const answer = {};
    for (const [id, value] of Object.entries(batch)) {
      answer[id] = typeof value === "string" ? mark(value) : Object.fromEntries(Object.entries(value).map(([category, text]) => [category, mark(text)]));
    }
    return { text: JSON.stringify(answer), usage };
  }

  return { text: whole(between(prompt, "<english-text", "</english-text>")), usage };
}

function whole(english) {
  if (process.env.FAKE_ENGINE_BREAK === "english") return english;
  const breaking = process.env.FAKE_ENGINE_BREAK;
  let fenced = false;
  const lines = english.split("\n").map((line) => {
    if (/^\s*(```|~~~)/.test(line)) {
      fenced = !fenced;
      return breaking === "drop" ? null : line;
    }
    if (fenced) return breaking === "drop" ? null : breaking === "code" ? `${line} # lefordítva` : line;
    if (!/\p{L}/u.test(line) || /^\s*\[[^\]]+\]:\s/.test(line)) return line;
    return `${breaking === "code" ? line.replace(/`(\w+)`/g, "`$1_hu`") : line} HU`;
  });
  return lines.filter((line) => line !== null).join("\n");
}
