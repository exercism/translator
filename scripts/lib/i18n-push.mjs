// i18n-push: the git that the two unattended scripts run in the i18n checkout.
//
// scripts/run-issue.mjs (one queue issue) and scripts/catch-up.mjs (everything
// still untranslated on main) both commit to ../i18n and push to its `main`.
// They are the only scripts in this repo that do, and they do it through this
// file, so the commit author, the rebase-and-retry push and the scrubbing of the
// push credential are written once.
//
// git runs in the i18n checkout and nowhere else. Source repos are read as
// objects at a ref, and .source/ is managed by scripts/source-checkout.mjs.
//
// The push credential arrives as EXERCISM_I18N_PUSH_TOKEN, is never written to a
// file this repo keeps, and is removed from everything this returns.

import path from "node:path";
import { spawnSync } from "node:child_process";
import { Failure, config } from "./config.mjs";

const PUSH_TOKEN = process.env.EXERCISM_I18N_PUSH_TOKEN || "";

/** Text with the push credential taken out. */
export const scrub = (text) => (PUSH_TOKEN ? String(text ?? "").split(PUSH_TOKEN).join("***") : String(text ?? ""));

/** The Actions run this is, for a report to point at. */
export function runUrl() {
  const { GITHUB_SERVER_URL: server, GITHUB_REPOSITORY: repo, GITHUB_RUN_ID: id } = process.env;
  return server && repo && id ? `${server}/${repo}/actions/runs/${id}` : null;
}

/** git and push helpers bound to one i18n checkout. */
export function i18nGit(lib) {
  const dir = path.resolve(lib.dir);

  // The commits are the Exercism i18n app's bot user's, as the push is made
  // with the app's token.
  const { name, email } = config().github.commit_author;
  const ident = ["-c", `user.name=${name}`, "-c", `user.email=${email}`];

  function git(args, { allowFail = false } = {}) {
    const result = spawnSync("git", args, { cwd: dir, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
    if (result.status !== 0 && !allowFail) throw new Failure(`git ${args.find((arg) => !arg.startsWith("-") && !arg.includes("="))} failed in ${dir}: ${scrub(result.stderr).trim().split("\n").slice(-1)[0]}`);
    return { ok: result.status === 0, out: scrub(result.stdout), error: scrub(result.stderr).trim() };
  }

  function remote() {
    if (!PUSH_TOKEN) throw new Failure("EXERCISM_I18N_PUSH_TOKEN is not set, so nothing can be pushed");
    return `https://x-access-token:${PUSH_TOKEN}@github.com/${config().github.i18n_repo}.git`;
  }

  /** Rebase onto main and push, retrying a non-fast-forward. */
  function pushToMain() {
    const url = remote();
    let last = "";
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      const pulled = git([...ident, "pull", "--rebase", url, "main"], { allowFail: true });
      if (!pulled.ok) {
        last = pulled.error;
        git(["rebase", "--abort"], { allowFail: true });
        continue;
      }
      const pushed = git(["push", url, "HEAD:main"], { allowFail: true });
      if (pushed.ok) return { ok: true, attempts: attempt };
      last = pushed.error;
    }
    return { ok: false, error: last };
  }

  /** Stage locales/ and index/ (the translation index a pass updates). */
  function stageTranslations() {
    git(["add", "--", "locales", "index"]);
    return !git(["diff", "--cached", "--quiet"], { allowFail: true }).ok;
  }

  /** Commit what is staged, with the message in `file`. */
  function commit(file) {
    git([...ident, "commit", "--file", file]);
  }

  /**
   * Throw away everything uncommitted under locales/ and index/, so the next
   * pass in the same checkout starts from what is committed.
   */
  function discardTranslations() {
    git(["reset", "--quiet", "--", "locales", "index"], { allowFail: true });
    git(["checkout", "--", "locales", "index"], { allowFail: true });
    git(["clean", "-fdq", "--", "locales", "index"], { allowFail: true });
  }

  /** Put the checkout back on the pushed main, dropping a commit that did not get there. */
  function resetToMain() {
    git(["fetch", "--quiet", remote(), "main"]);
    git(["reset", "--hard", "--quiet", "FETCH_HEAD"]);
  }

  return { dir, git, pushToMain, stageTranslations, commit, discardTranslations, resetToMain };
}

/**
 * The website checkout validate.mjs reads the two UI catalogs' English from,
 * when the English being checked is from another repo.
 *
 * validate.mjs checks the website catalogs of every locale it is given, so it
 * needs the website's English even for a track. A runner starts with none, so
 * this fetches exercism/website main with the i18n repo's own
 * scripts/source-checkout.mjs, the same fetch its validate.yml makes: one
 * commit, trees only, plus the blobs of the two English directories, into
 * ../i18n/.source/website. A checkout the i18n repo already finds (a sibling
 * ../website locally) is used as it is, and nothing is fetched. validate.mjs
 * then reads it at its default ref, website main, as the i18n repo's CI does.
 */
export function websiteEnglish(lib) {
  const found = lib.sourceRepos.resolveRepo("website", undefined, { optional: true });
  if (found) return found;
  const fetched = spawnSync("node", [path.join(lib.dir, "scripts", "source-checkout.mjs"), "--source=website"], { cwd: path.resolve(lib.dir), encoding: "utf8" });
  if (fetched.status !== 0) throw Object.assign(new Failure(`could not fetch exercism/website for its English: ${fetched.stderr.trim().split("\n").pop()}`), { transient: true });
  return lib.sourceRepos.checkoutDir("website");
}
