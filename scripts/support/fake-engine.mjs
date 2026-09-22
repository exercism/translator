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

const between = (text, open, close) => {
  const start = text.lastIndexOf(open);
  const from = text.indexOf("\n", start) + 1;
  return text.slice(from, text.lastIndexOf(close) - 1);
};

const mark = (value) => {
  const marked = value.replace(/^(\s*)([\s\S]*?)(\s*)$/, (_, lead, body, trail) => `${lead}HU ${body}${trail}`);
  return process.env.FAKE_ENGINE_BREAK === "placeholder" ? marked.replace(/%\{[^}]*\}/g, "") : marked;
};

export default async function call({ prompt, json }) {
  const usage = { input: 100, cacheHit: 60, cacheMiss: 40, thinking: 0, output: 50, cost: 0 };
  if (json) {
    const batch = JSON.parse(between(prompt, "<strings-to-translate", "</strings-to-translate>"));
    const answer = {};
    for (const [id, value] of Object.entries(batch)) {
      answer[id] = typeof value === "string" ? mark(value) : Object.fromEntries(Object.entries(value).map(([category, text]) => [category, mark(text)]));
    }
    return { text: JSON.stringify(answer), usage };
  }

  const english = between(prompt, "<english-text", "</english-text>");
  if (process.env.FAKE_ENGINE_BREAK === "english") return { text: english, usage };
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
  return { text: lines.filter((line) => line !== null).join("\n"), usage };
}
