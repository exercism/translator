// config.mjs: the repo root, config.json, and the two things every script does
// the same way (fail, and read one key out of .env).
//
// config.json is the ONE config file. Nothing here supplies a default for a
// value that file is meant to hold: a missing value is a broken config and says
// so, because a silent default is a second home for the same decision.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

export class Failure extends Error {}

export function die(message) {
  console.error(`error: ${message}`);
  process.exit(1);
}

export function readIfPresent(file) {
  try {
    return fs.readFileSync(file, "utf8");
  } catch {
    return null;
  }
}

let CONFIG = null;

export function config() {
  if (CONFIG) return CONFIG;
  const raw = readIfPresent(path.join(ROOT, "config.json"));
  if (raw === null) die("config.json not found at the repo root");
  CONFIG = JSON.parse(raw);
  for (const key of ["engine", "i18n_repo", "github", "issue_word_cap", "forum"]) {
    if (!(key in CONFIG)) die(`config.json has no "${key}"`);
  }
  for (const key of ["name", "model", "endpoint", "concurrency", "attempts", "catalog_batch_units"]) {
    if (!(key in CONFIG.engine)) die(`config.json "engine" has no "${key}"`);
  }
  return CONFIG;
}

/** The i18n checkout: translated output is written there and its checker is run. */
export function i18nRepo() {
  const dir = path.resolve(ROOT, process.env.EXERCISM_I18N_REPO || config().i18n_repo);
  if (!fs.existsSync(path.join(dir, "scripts", "lib", "content-types.mjs"))) {
    die(
      `no i18n checkout at ${dir} (looked for scripts/lib/content-types.mjs). ` +
        `Set EXERCISM_I18N_REPO, or "i18n_repo" in config.json.`
    );
  }
  return dir;
}

/** Read one key out of .env. Returned, never logged, never written back. */
export function envKey(name) {
  if (process.env[name]) return process.env[name];
  const env = readIfPresent(path.join(ROOT, ".env"));
  if (env === null) die(`.env not found at the repo root; it must hold ${name} (see .env.example)`);
  const match = new RegExp(`^${name}\\s*=\\s*(.*)$`, "m").exec(env);
  if (!match) die(`${name} is not set in .env`);
  const value = match[1].trim().replace(/^["']|["']$/g, "");
  if (!value) die(`${name} in .env is empty`);
  return value;
}

/** Minimal argv parsing, the same shape as the i18n repo's scripts/lib/args.mjs. */
export function parseArgs(argv) {
  const flags = {};
  const positional = [];
  for (const arg of argv) {
    if (arg.startsWith("--")) {
      const [key, ...rest] = arg.slice(2).split("=");
      flags[key] = rest.length > 0 ? rest.join("=") : true;
    } else {
      positional.push(arg);
    }
  }
  return { flags, positional };
}

export function languageName(locale) {
  const names = JSON.parse(fs.readFileSync(path.join(ROOT, "languages", "names.json"), "utf8"));
  return names[locale] ?? null;
}

/** `languages/<family>/` for a locale that belongs to one, by folder existence. */
export function familyOf(locale) {
  if (!locale.includes("-")) return null;
  const family = locale.split("-")[0];
  return fs.existsSync(path.join(ROOT, "languages", family)) ? family : null;
}
