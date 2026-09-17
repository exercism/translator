#!/usr/bin/env node
//
// translate: one whole translation pass for one source of English.
//
// Usage:
//   node scripts/translate.mjs <source> <locale[,locale]> [--dry-run] [--type=<id>]
//   node scripts/translate.mjs track <track> <locale[,locale]> [--dry-run] [--type=<id>]
//
//   <source>  website | problem-specifications | docs | blog | website-copy | track
//
// Options:
//   --dry-run            resolve the work, build every prompt, report counts and token
//                        estimates. Calls nothing, writes nothing, needs no API key.
//   --type=<id>          only this i18n content-type id (scripts/check-routes.mjs lists
//                        them), or `metadata` for the source's names, titles and blurbs
//   --limit=<n>          at most n items (files, or catalog units) per locale per type
//   --repo=<path>        the source checkout to read, instead of the one resolved
//   --ref=<ref>          the ref to read English at (default: origin/main, else HEAD)
//   --scope=<file>       JSON `{ "paths": [...], "units": [...] }`: only those repo-relative
//                        paths and those catalog unit ids are in scope. Written by
//                        scripts/work-issue.mjs from a PR's own diff, never by hand.
//   --list-types         print the type ids this script can run, one per line, and exit
//
// Examples:
//   node scripts/translate.mjs track ruby hu --dry-run
//   node scripts/translate.mjs website hu
//
// ## What it does, for every item, with no agent in the loop
//
//   resolve    list the source repo's tree at a ref, and derive each file's
//              content type from its path through the i18n repo's registry
//   skip       drop everything the locale already holds. THE ONE MODE IS
//              "TRANSLATE IF ABSENT". Git-sourced content is filed under the git
//              blob id of its English, so a translation is of exactly that text
//              forever: there is no staleness, no `outdated`, no `all`, no
//              `tidy`. An edited English file is a new blob id, which is a file
//              that does not exist yet, which is this mode.
//   prompt     assemble it in the fixed order scripts/lib/prompt.mjs documents
//   translate  call DeepSeek (scripts/lib/deepseek.mjs)
//   check      put the answer through the i18n repo's OWN check functions, then
//              the few this repo adds (scripts/lib/checks.mjs)
//   write      only what passed. A failed call or a rejected answer is retried
//              (config.json `engine.attempts`), then LEFT ABSENT and reported.
//              Absent is the honest state: the next run picks it up.
//
// Two things are key-based and not blob-keyed, and the i18n repo keeps a per-unit
// stamp for both: the two website catalogs, and each source repo's METADATA
// catalog (names, titles and blurbs out of config.json and metadata.toml, at
// locales/<locale>/metadata/<repo>.json). There, "absent" is a unit the locale
// does not hold, and a unit whose stamp no longer matches English (`stale`) is
// retranslated with the live translation given as the previous version.
// Identical English the locale has already translated in another repo's metadata
// catalog is COPIED, never bought twice (see reuseIndex). The
// stamps are written by the i18n repo's `validate.mjs --stamp`, which this runs
// at the end of a catalog pass, pinned to the commit the English was read at and
// naming exactly the units this run rewrote. Nothing here writes a stamp.
//
// ## What comes back
//
// Counts, and a list of failures with paths. Progress goes to stderr, the
// summary to stdout and to state/runs/<run>.json. No translated text is ever
// printed: the orchestrator reads the summary and never sees the words.
//
// ## Nothing here runs git in a way that changes anything
//
// English is read as git objects (`ls-tree`, `cat-file`, `log`). In a blobless
// checkout under this repo's own .source/, reading fetches the missing blobs in
// one request, which is what that checkout is for. Nothing is committed,
// anywhere: see "Git belongs to the orchestrator" in global/workflow.md.

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { Failure, ROOT, config, die, envKey, parseArgs } from "./lib/config.mjs";
import { i18n } from "./lib/i18n.mjs";
import { ROUTES, GAPS, SOURCES } from "./lib/routes.mjs";
import { SYSTEM, approxTokens, catalogTail, fileTail, fixedPrefix } from "./lib/prompt.mjs";
import { USD_PER_CACHE_HIT, USD_PER_CACHE_MISS, USD_PER_OUTPUT, addUsage, call, unfence } from "./lib/deepseek.mjs";
import { checkMarkdown, wordCount } from "./lib/checks.mjs";

const log = (message) => console.error(message);

// ---------------------------------------------------------------- resolve ---

/**
 * The checkout one source's English is read from.
 *
 * Order: `--repo=`, the i18n repo's own env override for that kind of repo, this
 * repo's .source/<name> (scripts/source-checkout.mjs), then a sibling working
 * copy. The i18n repo's .source/ is deliberately NOT a candidate: those are its
 * blobless caches, and reading English out of one fetches into it.
 */
function resolveSource(lib, sourceId, name, explicit) {
  const kind = lib.sourceRepos.REPO_KINDS[SOURCES[sourceId].kind];
  const candidates = [explicit, kind.env && process.env[kind.env], path.join(ROOT, ".source", name), path.resolve(ROOT, "..", name)].filter(Boolean);
  for (const candidate of candidates) {
    const dir = path.resolve(candidate);
    if (fs.existsSync(path.join(dir, ".git")) || fs.existsSync(path.join(dir, "HEAD"))) return dir;
  }
  die(
    `no checkout of exercism/${name} to read English from.\n` +
      `  Looked in: ${candidates.map((candidate) => path.resolve(candidate)).join(", ")}\n` +
      `  Fetch one:  node scripts/source-checkout.mjs ${name}`
  );
}

/** The older English of one path whose translation this locale holds, or null. */
function previousVersion(lib, { repo, ref, file, locale }) {
  let commits;
  try {
    commits = lib.git.git(["log", "--format=%H", "-n", "30", ref, "--", file.path], repo).split("\n").filter(Boolean);
  } catch {
    return null; // a shallow checkout has no history to walk
  }
  const seen = new Set([file.id]);
  for (const commit of commits) {
    let id;
    try {
      id = lib.git.git(["rev-parse", "--verify", "--quiet", `${commit}:${file.path}`], repo).trim();
    } catch {
      continue;
    }
    if (!id || seen.has(id)) continue;
    seen.add(id);
    const held = lib.contentTypes.contentPath(locale, id, file.extension);
    if (!fs.existsSync(held)) continue;
    const english = lib.git.readBlobs(repo, [id]).get(id);
    if (english) return { english: english.toString("utf8"), translation: fs.readFileSync(held, "utf8") };
  }
  return null;
}

// ------------------------------------------------------------------ pool ----

/**
 * Run `worker` over `items`: the FIRST one alone, then the rest `size` at a time.
 *
 * The first call of a group goes out alone because it is what writes the group's
 * shared prefix into the provider's cache. Sent together, the first `size` calls
 * would all miss on the same several thousand tokens.
 */
async function pool(items, size, worker) {
  if (items.length === 0) return;
  await worker(items[0], 0);
  let next = 1;
  const lanes = Array.from({ length: Math.min(size, items.length - 1) }, async () => {
    while (next < items.length) {
      const index = next++;
      await worker(items[index], index);
    }
  });
  await Promise.all(lanes);
}

// ---------------------------------------------------------------- content ---

async function translateContent({ lib, run, sourceId, name, repo, ref, locale, flags }) {
  const kindId = SOURCES[sourceId].kind;
  const kind = lib.sourceRepos.REPO_KINDS[kindId];
  const entries = lib.git.lsTree(repo, ref, kind.sparse ?? []);
  let files = lib.completeness.translatableFiles(kindId, entries);

  if (typeof flags.type === "string") files = files.filter((file) => file.type === flags.type);
  if (run.scope) files = files.filter((file) => run.scope.paths.includes(file.path));

  // One blob id is one file to translate, however many paths share it.
  const byId = new Map();
  for (const file of files) if (!byId.has(file.id)) byId.set(file.id, file);

  const typeOrder = Object.keys(ROUTES);
  const groups = new Map();
  for (const file of byId.values()) {
    const counts = run.count(locale, file.type);
    counts.total += 1;
    if (file.extension !== ".md") {
      counts.failed += 1;
      run.failures.push({ locale, type: file.type, source: `${name}:${file.path}`, target: null, reason: `only Markdown is translatable today, not "${file.extension}"` });
      continue;
    }
    if (fs.existsSync(lib.contentTypes.contentPath(locale, file.id, file.extension))) {
      counts.held += 1;
      continue;
    }
    if (!groups.has(file.type)) groups.set(file.type, []);
    groups.get(file.type).push(file);
  }

  const limit = Number(flags.limit) || Infinity;
  const hasStore = fs.existsSync(lib.contentTypes.contentRoot(locale));

  for (const type of typeOrder.filter((id) => groups.has(id))) {
    const work = groups.get(type).sort((a, b) => (a.path < b.path ? -1 : 1)).slice(0, limit);
    const counts = run.count(locale, type);
    const prefix = fixedPrefix({ locale, howto: ROUTES[type].howto, shape: "file" });
    const blobs = lib.git.readBlobs(repo, work.map((file) => file.id));
    log(`${locale} ${type}: ${work.length} to translate (${counts.held} already held)`);

    await pool(work, config().engine.concurrency, async (file) => {
      const target = lib.contentTypes.contentPath(locale, file.id, file.extension);
      const fail = (reason) => {
        counts.failed += 1;
        run.failures.push({ locale, type, source: `${name}:${file.path}`, target: path.relative(lib.dir, target), reason });
      };
      const bytes = blobs.get(file.id);
      if (!bytes) return fail("the English blob could not be read from the checkout");
      const english = bytes.toString("utf8");
      if (english.trim() === "") {
        counts.skipped += 1;
        return;
      }

      const previous = hasStore ? previousVersion(lib, { repo, ref, file, locale }) : null;
      if (previous) counts.revised += 1;
      const prompt = prefix + fileTail({ sourcePath: file.path, english, previous });
      run.estimate(locale, type, { prefix, tail: prompt.slice(prefix.length), english });
      if (run.dryRun) return;

      let reason = "";
      for (let attempt = 1; attempt <= config().engine.attempts; attempt++) {
        try {
          const { text, usage } = await run.call({ apiKey: run.apiKey, system: SYSTEM, prompt });
          addUsage(run.usage, usage);
          let answer = unfence(text);
          if (!english.endsWith("\n")) answer = answer.replace(/\n$/, "");

          const found = lib.checks.checkContentFile({ id: file.id, extension: file.extension, bytes: Buffer.from(answer, "utf8") }, bytes);
          const errors = found.filter((one) => one.level === lib.checks.ERROR).map((one) => one.message).concat(checkMarkdown(english, answer));
          if (errors.length > 0) {
            reason = `rejected by the checker: ${errors.join("; ")}`;
            continue;
          }
          fs.mkdirSync(path.dirname(target), { recursive: true });
          // `wx`: translate-if-absent is never an overwrite, even when two runs race.
          fs.writeFileSync(target, answer, { flag: "wx" });
          counts.written += 1;
          run.written.push(path.relative(lib.dir, target));
          return;
        } catch (error) {
          if (error.usage) addUsage(run.usage, error.usage);
          if (!(error instanceof Failure) && error.code !== "EEXIST") throw error;
          reason = error.code === "EEXIST" ? "another run wrote this file first" : error.message;
          if (error.code === "EEXIST") break;
        }
      }
      fail(reason);
    });
  }
}

// --------------------------------------------------------------- catalogs ---

/**
 * Translations this locale already holds of identical English, by the hash of
 * that English.
 *
 * A blurb synced from problem-specifications into eighty tracks appears, byte for
 * byte, in eighty metadata catalogs, and paying to translate it eighty times
 * would also produce eighty different wordings of one sentence. The i18n repo
 * leaves deduplicating that to this script, and makes it cheap: a unit's stamp is
 * the git blob id of its English string, so identical English has an identical
 * stamp in every `*.meta.json`. Only STAMPED units are indexed, because the stamp
 * is the only record of which English a translation is a translation of.
 *
 * This is why problem-specifications is translated before any track.
 */
function reuseIndex(lib, locale, exceptFile) {
  const index = new Map();
  for (const name of lib.metadata.heldMetadataRepos(locale)) {
    const file = lib.metadata.metadataPath(locale, name);
    if (file === exceptFile) continue;
    const tree = JSON.parse(fs.readFileSync(file, "utf8"));
    for (const [key, hash] of Object.entries(lib.catalogs.readStamps(file))) {
      if (typeof tree[key] === "string" && !index.has(hash)) index.set(hash, tree[key]);
    }
  }
  return index;
}

/**
 * One key-based catalog: a website catalog, or one source repo's metadata.
 *
 * @param {object} spec
 * @param {string} spec.type     the row this is counted under
 * @param {"backend"|"frontend"|"metadata"} spec.kind  the CHECKER's kind
 * @param {string} spec.file     the catalog on disk, in the i18n repo
 * @param {{catalog, arrays}} spec.english
 * @param {string} spec.howto
 * @param {string[]} spec.validate  the arguments that make validate.mjs read the same English
 * @param {Map|null} spec.reuse  see reuseIndex
 */
async function translateCatalog({ lib, run, locale, flags, spec }) {
  const { type, kind, file, english, howto } = spec;
  const { catalogs, plurals, checks } = lib;
  const units = catalogs.englishUnits(kind, english.catalog);

  const flatTarget = fs.existsSync(file) ? catalogs.flattenCatalog(kind, JSON.parse(fs.readFileSync(file, "utf8"))) : {};
  const stamps = catalogs.readStamps(file);
  const cardinal = plurals.requiredCategories(locale);
  const ordinal = plurals.requiredCategories(locale, { ordinal: true });
  if (cardinal === null) die(`this runtime has no CLDR plural data for "${locale}", so plural groups cannot be translated`);

  const counts = run.count(locale, type);
  const rewritten = [];
  let work = [];
  for (const unit of units.values()) {
    if (run.scope && !run.scope.units.includes(unit.id)) continue;
    counts.total += 1;
    const entries = catalogs.targetEntries(kind, unit, flatTarget);
    const state = catalogs.unitState(unit, entries, stamps);
    const needed = unit.plural ? (unit.ordinal ? ordinal : cardinal) : [];
    const short = unit.plural && Object.keys(entries).length > 0 && needed.some((category) => !(category in entries));
    if (state === catalogs.MISSING || state === catalogs.STALE || short) work.push({ unit, previous: state === catalogs.MISSING ? null : entries });
    else counts.held += 1;
  }

  const write = () => {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    // Merged INTO what is there: every key the file already held is still in
    // `flatTarget`. Nothing under locales/ is ever removed by a pass.
    fs.writeFileSync(file, `${JSON.stringify(catalogs.unflattenCatalog(kind, flatTarget, new Set(english.arrays ?? [])), null, 2)}\n`);
  };

  // Identical English this locale has already translated is copied, not bought
  // again. Counted apart from `written`, so the summary shows what was paid for.
  // `twins` are units whose English is identical to an EARLIER unit of this same
  // catalog: the first is translated, the rest are filled from it afterwards.
  const learned = new Map();
  const twins = [];
  if (spec.reuse) {
    const remaining = [];
    const first = new Set();
    for (const item of work) {
      const hash = item.unit.plural ? null : catalogs.unitHash(item.unit);
      const copy = hash === null ? undefined : spec.reuse.get(hash);
      if (copy === undefined) {
        if (hash !== null && first.has(hash)) {
          twins.push({ item, hash });
          if (run.dryRun) counts.copied += 1;
        } else {
          if (hash !== null) first.add(hash);
          remaining.push(item);
        }
        continue;
      }
      counts.copied += 1;
      if (run.dryRun) continue;
      flatTarget[item.unit.id] = copy;
      rewritten.push(item.unit.id);
    }
    work = remaining;
    if (!run.dryRun && rewritten.length > 0) write();
  }

  const limited = work.slice(0, Number(flags.limit) || Infinity);
  const size = config().engine.catalog_batch_units;
  const batches = [];
  for (let i = 0; i < limited.length; i += size) batches.push(limited.slice(i, i + size));
  log(`${locale} ${type}: ${limited.length} unit(s) to translate in ${batches.length} batch(es) (${counts.held} already held${counts.copied ? `, ${counts.copied} copied from identical English` : ""})`);

  const prefix = fixedPrefix({ locale, howto, shape: "catalog", plural: { cardinal, ordinal: kind === "frontend" ? ordinal : null } });
  const spelling = plurals.PLURAL_SPELLING[kind];

  const runBatch = async (batch) => {
    const payload = {};
    const previous = {};
    for (const { unit, previous: before } of batch) {
      payload[unit.id] = unit.plural ? unit.entries : unit.entries[""];
      if (before) previous[unit.id] = unit.plural ? before : before[""];
    }
    const tail = catalogTail({ catalog: type, batch: payload, previous });
    run.estimate(locale, type, { prefix, tail, english: Object.values(payload).map((value) => (typeof value === "string" ? value : Object.values(value).join(" "))).join(" "), units: batch.length, echoed: Object.keys(payload).join('"": "",') });
    if (run.dryRun) return [];

    let answer;
    try {
      const { text, usage } = await run.call({ apiKey: run.apiKey, system: SYSTEM, prompt: prefix + tail, json: true });
      addUsage(run.usage, usage);
      answer = JSON.parse(unfence(text));
    } catch (error) {
      if (error.usage) addUsage(run.usage, error.usage);
      if (!(error instanceof Failure) && !(error instanceof SyntaxError)) throw error;
      return batch.map((item) => ({ item, reason: error instanceof SyntaxError ? "the answer was not valid JSON" : error.message }));
    }

    // Each unit is checked ALONE against its own English with the i18n repo's
    // checkCatalog, so one bad unit never costs its neighbours.
    const rejected = [];
    for (const item of batch) {
      const { unit } = item;
      const value = answer?.[unit.id];
      const candidate = {};
      if (!unit.plural && typeof value === "string") candidate[unit.id] = value;
      if (unit.plural && value && typeof value === "object") {
        for (const [category, text] of Object.entries(value)) if (plurals.CATEGORIES.includes(category)) candidate[spelling.join(unit.base, category, unit.ordinal)] = text;
      }
      if (Object.keys(candidate).length === 0) {
        rejected.push({ item, reason: "the answer did not hold this unit, or held it in the wrong shape" });
        continue;
      }
      const subEnglish = Object.fromEntries(unit.keys.map((key) => [key, english.catalog[key]]));
      const errors = checks.checkCatalog(subEnglish, candidate, { kind, locale, requireComplete: true }).issues.filter((one) => one.level === checks.ERROR);
      if (errors.length > 0) {
        rejected.push({ item, reason: `rejected by the checker: ${errors.map((one) => one.message).join("; ")}` });
        continue;
      }
      Object.assign(flatTarget, candidate);
      rewritten.push(unit.id);
      counts.written += 1;
      if (item.previous) counts.revised += 1;
      // The same sentence later in THIS catalog (two exercises sharing a source line).
      if (spec.reuse && !unit.plural) learned.set(catalogs.unitHash(unit), candidate[unit.id]);
    }
    write();
    return rejected;
  };

  let pending = batches;
  let failed = [];
  for (let attempt = 1; attempt <= config().engine.attempts && pending.length > 0; attempt++) {
    failed = [];
    await pool(pending, config().engine.concurrency, async (batch) => failed.push(...(await runBatch(batch))));
    if (run.dryRun) return;
    pending = [];
    for (let i = 0; i < failed.length; i += size) pending.push(failed.slice(i, i + size).map((entry) => entry.item));
  }
  for (const { item, hash } of twins) {
    if (learned.has(hash)) {
      flatTarget[item.unit.id] = learned.get(hash);
      rewritten.push(item.unit.id);
      counts.copied += 1;
    } else {
      failed.push({ item, reason: "its English is identical to a unit that failed in this run" });
    }
  }
  if (twins.length > 0) write();
  for (const { item, reason } of failed) {
    counts.failed += 1;
    run.failures.push({ locale, type, source: `${spec.label}:${item.unit.id}`, target: path.relative(lib.dir, file), reason });
  }

  if (rewritten.length === 0) return;
  run.written.push(path.relative(lib.dir, file), path.relative(lib.dir, catalogs.metaPath(file)));

  // The stamp belongs to the checker. It is pointed at exactly the commit this
  // run translated, and `--stamp-units` names what was rewritten, which is the
  // only way a STALE unit may be re-stamped.
  const slug = type.replace(/[^A-Za-z0-9.-]/g, "_");
  const unitsFile = path.join(run.dir, `${locale}.${slug}.stamp-units.json`);
  fs.writeFileSync(unitsFile, JSON.stringify(rewritten));
  const result = spawnSync("node", [path.join(lib.dir, "scripts", "validate.mjs"), locale, "--stamp", `--stamp-units=@${unitsFile}`, ...spec.validate], { encoding: "utf8", env: process.env });
  const logFile = path.join(run.dir, `${locale}.${slug}.validate.log`);
  fs.writeFileSync(logFile, `${result.stdout}\n${result.stderr}`);
  const stamped = [...result.stdout.matchAll(/stamped (\d+)/g)].reduce((sum, match) => sum + Number(match[1]), 0);
  run.checker.push({ locale, type, exit: result.status, stamped, log: path.relative(ROOT, logFile) });
}

/** The catalogs one source has: the website's two, or one source repo's metadata. */
async function catalogSpecs({ lib, sourceId, name, repo, ref, sha, locale, flags }) {
  const wanted = (type) => typeof flags.type !== "string" || flags.type === type;
  const specs = [];
  if (SOURCES[sourceId].catalogs) {
    for (const kind of lib.catalogs.CATALOG_KINDS) {
      const type = `website-${kind}`;
      if (!wanted(type)) continue;
      const english = (await lib.websiteEnglish.buildWebsiteEnglish(lib.git.refReader(repo, ref), { kinds: [kind] }))[kind];
      specs.push({ type, kind, label: "website", file: lib.catalogs.catalogPath(locale, kind), english, howto: ROUTES[type].howto, reuse: null, validate: [`--type=${type}`, `--source-repo=${repo}`, `--source-ref=${sha}`] });
    }
    return specs;
  }
  const kindId = SOURCES[sourceId].kind;
  const metadataTypes = Object.keys(ROUTES).filter((id) => ROUTES[id].source === sourceId && ROUTES[id].metadata);
  if (!lib.metadata.METADATA_REPO_KINDS.includes(kindId) || !(typeof flags.type !== "string" || flags.type === "metadata" || metadataTypes.includes(flags.type))) return specs;
  if (path.basename(repo) !== name) die(`the i18n checker finds a metadata catalog's English by the checkout's directory name, so ${repo} must be a directory called "${name}"`);
  const english = lib.metadata.buildMetadataEnglish(kindId, lib.git.lsTree(repo, ref), lib.git.refReader(repo, ref).readMany);
  const file = lib.metadata.metadataPath(locale, name);
  specs.push({ type: `metadata/${name}`, kind: lib.metadata.METADATA_KIND, label: name, file, english: { catalog: english.catalog, arrays: [] }, howto: "metadata", reuse: reuseIndex(lib, locale, file), validate: [`--type=${lib.metadata.METADATA_TYPE_ID}`, `--content-repos=${repo}:${kindId}@${sha}`] });
  return specs;
}

// ------------------------------------------------------------------- main ---

/**
 * The engine: DeepSeek. scripts/test.mjs may substitute a fake one, so that the
 * write, check and stamp path is exercised for real without a paid call.
 *
 * That substitution is refused unless the i18n tree being written to is a test
 * fixture: EXERCISM_I18N_ROOT must be set, must not be the i18n checkout itself,
 * and must hold the marker file the test creates. A fake engine can therefore
 * never write a word into the real locales/.
 */
async function engine(lib) {
  const fake = process.env.TRANSLATOR_TEST_ENGINE;
  if (!fake) return call;
  const root = process.env.EXERCISM_I18N_ROOT ? path.resolve(process.env.EXERCISM_I18N_ROOT) : null;
  if (!root || root === path.resolve(lib.dir) || !fs.existsSync(path.join(root, ".translator-test-root"))) {
    die("TRANSLATOR_TEST_ENGINE is only honoured against a test fixture (EXERCISM_I18N_ROOT holding .translator-test-root)");
  }
  return (await import(path.resolve(fake))).default;
}

async function main() {
  const { flags, positional } = parseArgs(process.argv.slice(2));
  if (flags["list-types"]) {
    console.log(Object.keys(ROUTES).join("\n"));
    return;
  }

  const sourceId = positional[0];
  if (!SOURCES[sourceId]) die(`usage: translate.mjs <${Object.keys(SOURCES).join("|")}> [<track>] <locale> [--dry-run]. Unknown source "${sourceId ?? ""}".`);
  const named = SOURCES[sourceId].named;
  const name = named ? positional[1] : sourceId;
  const localeArg = positional[named ? 2 : 1];
  if (!name || !localeArg) die(`usage: translate.mjs ${sourceId}${named ? " <track>" : ""} <locale> [--dry-run]`);
  if (named && (config().github.singletons.includes(name) || !/^[a-z0-9][a-z0-9-]*$/.test(name))) die(`"${name}" is not a track slug`);

  const lib = await i18n();
  if (typeof flags.type === "string") {
    if (GAPS[flags.type]) die(`"${flags.type}" cannot be translated yet: ${GAPS[flags.type]}`);
    if (flags.type === "metadata") {
      if (SOURCES[sourceId].catalogs) die(`the website has no metadata catalog: its copy is its two catalogs`);
    } else if (!ROUTES[flags.type]) die(`unknown --type "${flags.type}". Known: ${Object.keys(ROUTES).join(", ")}`);
    if (flags.type !== "metadata" && ROUTES[flags.type].source !== sourceId) die(`type "${flags.type}" comes from the "${ROUTES[flags.type].source}" source, not "${sourceId}"`);
  }

  const dryRun = Boolean(flags["dry-run"]);
  const locales = localeArg.split(",").filter(Boolean).sort();
  for (const locale of locales) {
    if (!fs.existsSync(path.join(ROOT, "languages", locale, "guide.md"))) die(`languages/${locale}/ is not set up (no guide.md). Use /bootstrap-language first.`);
    if (!lib.constants.TARGET_LOCALES.includes(locale)) {
      const message = `"${locale}" is not in the i18n repo's locales.json "targets", so its checker refuses the locale`;
      if (!dryRun) die(`${message}. Adding it is a commit in the i18n repo, made by the orchestrator, in the same change that brings the content.`);
      log(`note: ${message}. A real run will stop here; a dry run does not need it.`);
    }
  }

  const repo = resolveSource(lib, sourceId, name, typeof flags.repo === "string" ? flags.repo : undefined);
  const ref = typeof flags.ref === "string" ? flags.ref : lib.sourceRepos.defaultRef(repo);
  const sha = lib.git.resolveSha(repo, ref);

  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const run = {
    dryRun,
    call: await engine(lib),
    apiKey: dryRun || process.env.TRANSLATOR_TEST_ENGINE ? null : envKey("DEEPSEEK_API_KEY"),
    dir: path.join(ROOT, "state", "runs", `${stamp}-${name}`),
    scope: typeof flags.scope === "string" ? JSON.parse(fs.readFileSync(path.resolve(flags.scope), "utf8")) : null,
    counts: {},
    estimates: {},
    failures: [],
    written: [],
    checker: [],
    usage: {},
    count(locale, type) {
      return ((this.counts[locale] ??= {})[type] ??= { total: 0, held: 0, copied: 0, written: 0, revised: 0, skipped: 0, failed: 0 });
    },
    estimate(locale, type, { prefix, tail, english, units = 1, echoed = "" }) {
      const row = ((this.estimates[locale] ??= {})[type] ??= { calls: 0, items: 0, words: 0, prefixTokens: approxTokens(SYSTEM + prefix), tailTokens: 0, textTokens: 0 });
      // A catalog answer repeats every unit id, so its output is more than its text.
      row.textTokens += approxTokens(echoed);
      row.calls += 1;
      row.items += units;
      row.words += wordCount(english);
      row.tailTokens += approxTokens(tail);
      row.textTokens += approxTokens(english);
    }
  };
  fs.mkdirSync(run.dir, { recursive: true });
  log(`English: exercism/${name} at ${repo} @ ${ref} (${sha})${dryRun ? "  [DRY RUN: nothing is called, nothing is written]" : ""}`);

  // Sorted by locale, then by type: consecutive calls share the longest prefix.
  for (const locale of locales) {
    // Catalogs first. For a content source that is its metadata (names, titles,
    // blurbs), which is what a student sees before they open anything.
    for (const spec of await catalogSpecs({ lib, sourceId, name, repo, ref, sha, locale, flags })) {
      await translateCatalog({ lib, run, locale, flags, spec });
    }
    if (SOURCES[sourceId].catalogs || flags.type === "metadata" || ROUTES[flags.type]?.metadata) continue;

    const before = run.written.length;
    await translateContent({ lib, run, sourceId, name, repo, ref, locale, flags });
    if (!dryRun && run.written.length > before) {
      const result = spawnSync("node", [path.join(lib.dir, "scripts", "validate.mjs"), locale, "--type=content", `--content-repos=${repo}:${SOURCES[sourceId].kind}@${sha}`], { encoding: "utf8", env: process.env });
      const logFile = path.join(run.dir, `${locale}.content.validate.log`);
      fs.writeFileSync(logFile, `${result.stdout}\n${result.stderr}`);
      run.checker.push({ locale, type: "content", exit: result.status, fails: (result.stdout.match(/^\s+ERROR /gm) ?? []).length, log: path.relative(ROOT, logFile) });
    }
  }

  const summary = { source: `exercism/${name}`, ref, sha, dryRun, model: config().engine.model, counts: run.counts, failures: run.failures, written: run.written.length, checker: run.checker };
  if (dryRun) summary.estimates = withCosts(run.estimates);
  else summary.usage = run.usage;
  fs.writeFileSync(path.join(run.dir, "summary.json"), `${JSON.stringify({ ...summary, writtenPaths: run.written }, null, 2)}\n`);
  report(summary, path.relative(ROOT, path.join(run.dir, "summary.json")));
  process.exit(run.failures.length > 0 || run.checker.some((one) => one.exit !== 0) ? 1 : 0);
}

/**
 * Dollar figures for a dry run. The group's prefix is priced as a MISS once and
 * a HIT on every later call, which is what the fixed prompt order buys. Output is
 * a guess (the text again, half as long again for a language wordier than
 * English) and EXCLUDES thinking tokens, which are billed as output and cannot be
 * known without calling. Read the figure as a floor.
 */
function withCosts(estimates) {
  for (const types of Object.values(estimates)) {
    for (const row of Object.values(types)) {
      row.inputTokens = row.calls * row.prefixTokens + row.tailTokens;
      row.cacheMissTokens = row.prefixTokens + row.tailTokens;
      row.cacheHitTokens = row.inputTokens - row.cacheMissTokens;
      row.outputTokensExThinking = Math.round(row.textTokens * 1.5);
      row.usdFloor = Number((row.cacheMissTokens * USD_PER_CACHE_MISS + row.cacheHitTokens * USD_PER_CACHE_HIT + row.outputTokensExThinking * USD_PER_OUTPUT).toFixed(4));
      row.usdIfNothingCached = Number((row.inputTokens * USD_PER_CACHE_MISS + row.outputTokensExThinking * USD_PER_OUTPUT).toFixed(4));
    }
  }
  return estimates;
}

function report(summary, file) {
  const lines = ["", `SUMMARY ${summary.dryRun ? "(dry run) " : ""}${summary.source} @ ${summary.sha.slice(0, 10)}  model ${summary.model}`];
  for (const [locale, types] of Object.entries(summary.counts)) {
    const order = Object.keys(ROUTES);
    const rank = (type) => (order.indexOf(type) === -1 ? -1 : order.indexOf(type));
    for (const [type, c] of Object.entries(types).sort(([a], [b]) => rank(a) - rank(b))) {
      const estimate = summary.estimates?.[locale]?.[type];
      const todo = c.total - c.held - c.copied - c.written - c.skipped - c.failed;
      lines.push(
        `  ${locale.padEnd(6)} ${type.padEnd(30)} total ${String(c.total).padStart(5)}  held ${String(c.held).padStart(5)}  ` +
          (c.copied ? `copied ${String(c.copied).padStart(5)}  ` : "") +
          (summary.dryRun ? `to translate ${String(estimate?.items ?? 0).padStart(5)}` : `written ${String(c.written).padStart(5)}  failed ${String(c.failed).padStart(4)}`) +
          (c.skipped ? `  empty in English ${c.skipped}` : "") +
          (c.revised ? `  (${c.revised} with a previous version)` : "") +
          (!summary.dryRun && todo > 0 ? `  not attempted ${todo}` : "")
      );
      if (estimate) {
        lines.push(
          `         ${"".padEnd(30)} ${estimate.calls} call(s), ${estimate.words} words, prefix ~${estimate.prefixTokens} tok/call, ` +
            `input ~${estimate.inputTokens} tok (~${estimate.cacheMissTokens} uncached), output ~${estimate.outputTokensExThinking} tok ex thinking, floor $${estimate.usdFloor}`
        );
      }
    }
  }
  if (summary.usage?.input) {
    const u = summary.usage;
    lines.push(`  tokens: ${u.input} in (cache hit ${u.cacheHit}, miss ${u.cacheMiss}), ${u.output} out (${u.thinking} thinking), $${u.cost.toFixed(4)} off-peak`);
  }
  for (const one of summary.checker) lines.push(`  checker ${one.locale} ${one.type}: exit ${one.exit}${"stamped" in one ? `, stamped ${one.stamped}` : ""}${one.fails ? `, ${one.fails} ERROR line(s)` : ""} (${one.log})`);
  lines.push(`  failures: ${summary.failures.length}`);
  for (const failure of summary.failures.slice(0, 200)) lines.push(`    ${failure.locale} ${failure.type} ${failure.source}${failure.target ? ` -> ${failure.target}` : ""}: ${failure.reason}`);
  if (summary.failures.length > 200) lines.push(`    ... and ${summary.failures.length - 200} more, in ${file}`);
  lines.push(`  full summary: ${file}`);
  console.log(lines.join("\n"));
}

main().catch((error) => {
  console.error(`error: ${error.stack ?? error.message}`);
  process.exit(1);
});
