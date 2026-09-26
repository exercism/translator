#!/usr/bin/env node
//
// translate-tracks: run `translate.mjs track <track> <locale>` for many tracks,
// keeping a fixed number of them running at once.
//
// Usage:
//   node scripts/translate-tracks.mjs <locale> [--tracks=<a,b,c>] [--parallel=<n>]
//
//   <locale>        one locale code, as translate.mjs takes it
//   --tracks=       only these tracks (default: every track checkout in .source/)
//   --parallel=     how many track passes run at once (default 6)
//
// Examples:
//   node scripts/translate-tracks.mjs ja
//   node scripts/translate-tracks.mjs ja --tracks=ruby,python,go
//
// Run problem-specifications for the locale first. Practice exercises are
// synced from it byte for byte, so a track then finds most of them already held.
//
// ## Why this exists
//
// Translating a language's 122 tracks one command at a time left most of the
// parallel slots idle: a batch of commands waits for its slowest track, and
// java or csharp take many times longer than a small track. Here a slot starts
// the next track as soon as its last one finishes, so the slots stay busy.
//
// Each track is still its own `translate.mjs` process with its own summary, so
// nothing about a single pass changes. The only mode is still "translate if
// absent", so running this again picks up whatever a run left behind.
//
// ## Output
//
// A line per track as it finishes (exit code, written and failed counts, and
// its log), then a list of the tracks that need another run. Each track's full
// output goes to state/runs/tracks-<locale>-<time>/<track>.log. Translated text
// is never printed.
//
// ## One run per locale
//
// A lock file (state/tracks-<locale>.lock, gitignored) holds the process id while a
// run is going. A second run for the same locale refuses to start while that
// process is alive, so a command retried after a timeout cannot run every pass
// twice.
//
// ## Git
//
// None here. Each translate.mjs process reads English as git objects, as it
// always does. Nothing is committed.

import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { ROOT, config, die, parseArgs } from "./lib/config.mjs";

const TRACK_SLUG = /^[a-z0-9][a-z0-9-]*$/;

/** Every track checkout in .source/: a slug that is not one of the singleton repos. */
function allTracks() {
  const dir = path.join(ROOT, ".source");
  if (!fs.existsSync(dir)) die(`no .source/ checkouts. Run scripts/source-checkout.mjs first.`);
  const singletons = config().github.singletons;
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && TRACK_SLUG.test(entry.name) && !singletons.includes(entry.name))
    .map((entry) => entry.name)
    .sort();
}

function isAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}

function takeLock(locale) {
  const file = path.join(ROOT, "state", `tracks-${locale}.lock`);
  if (fs.existsSync(file)) {
    const pid = Number(fs.readFileSync(file, "utf8").trim());
    if (pid && isAlive(pid)) die(`a translate-tracks run for ${locale} is already going (process ${pid}). Wait for it to finish.`);
  }
  fs.writeFileSync(file, `${process.pid}\n`);
  const release = () => {
    try {
      if (fs.readFileSync(file, "utf8").trim() === String(process.pid)) fs.unlinkSync(file);
    } catch {
      // already gone
    }
  };
  process.on("exit", release);
  for (const signal of ["SIGINT", "SIGTERM"]) {
    process.on(signal, () => {
      release();
      process.exit(1);
    });
  }
}

/** The written and failed totals from one translate.mjs summary. */
function totals(output) {
  let written = 0;
  let failed = 0;
  for (const match of output.matchAll(/written\s+(\d+)\s+failed\s+(\d+)/g)) {
    written += Number(match[1]);
    failed += Number(match[2]);
  }
  return { written, failed };
}

function runTrack(track, locale, logDir) {
  return new Promise((resolve) => {
    const logFile = path.join(logDir, `${track}.log`);
    const out = fs.openSync(logFile, "w");
    const child = spawn(process.execPath, [path.join(ROOT, "scripts", "translate.mjs"), "track", track, locale], {
      cwd: ROOT,
      env: process.env,
      stdio: ["ignore", out, out]
    });
    child.on("close", (code) => {
      fs.closeSync(out);
      resolve({ track, code, logFile, ...totals(fs.readFileSync(logFile, "utf8")) });
    });
  });
}

async function main() {
  const { flags, positional } = parseArgs(process.argv.slice(2));
  const locale = positional[0];
  if (!locale || locale.includes(",")) die(`usage: translate-tracks.mjs <locale> [--tracks=<a,b,c>] [--parallel=<n>]  (one locale)`);
  if (!fs.existsSync(path.join(ROOT, "languages", locale, "guide.md"))) die(`languages/${locale}/ is not set up (no guide.md).`);

  const parallel = flags.parallel === undefined ? 6 : Number(flags.parallel);
  if (!Number.isInteger(parallel) || parallel < 1) die(`--parallel must be a whole number of at least 1`);

  const available = allTracks();
  const tracks = typeof flags.tracks === "string" ? flags.tracks.split(",").filter(Boolean) : available;
  const unknown = tracks.filter((track) => !available.includes(track));
  if (unknown.length > 0) die(`no .source/ checkout for: ${unknown.join(", ")}. Run scripts/source-checkout.mjs <repo> first.`);

  takeLock(locale);
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const logDir = path.join(ROOT, "state", "runs", `tracks-${locale}-${stamp}`);
  fs.mkdirSync(logDir, { recursive: true });
  console.log(`${tracks.length} track(s) into ${locale}, ${parallel} at a time. Logs: ${path.relative(ROOT, logDir)}/`);

  const queue = [...tracks];
  const results = [];
  const slot = async () => {
    while (queue.length > 0) {
      const result = await runTrack(queue.shift(), locale, logDir);
      results.push(result);
      console.log(`${String(results.length).padStart(3)}/${tracks.length}  ${result.track.padEnd(20)} exit ${result.code}  written ${result.written}  failed ${result.failed}`);
    }
  };
  await Promise.all(Array.from({ length: Math.min(parallel, tracks.length) }, slot));

  const again = results.filter((result) => result.code !== 0).sort((a, b) => a.track.localeCompare(b.track));
  const written = results.reduce((sum, result) => sum + result.written, 0);
  console.log(`\nDONE ${results.length} track(s), ${written} item(s) written, ${again.length} track(s) with failures.`);
  for (const result of again) console.log(`  ${result.track}: exit ${result.code}, failed ${result.failed} (${path.relative(ROOT, result.logFile)})`);
  process.exit(again.length > 0 ? 1 : 0);
}

main().catch((error) => {
  console.error(`error: ${error.stack ?? error.message}`);
  process.exit(1);
});
