// issue-scope.mjs: what one pull request changed, worked out from git.
//
// The issue a PR opens lists the English files it touched, and that list is
// ignored, because no decision is taken from an issue's text
// (scripts/lib/issues.mjs). The scope of a run is derived here from the source
// repo itself, given only the verified sha and PR number:
//
//   paths   files whose blob id differs between the base and the ref (below).
//           Comparing blob ids means a rename or a mode change needs no work.
//   units   catalog units (the website's two catalogs, or this repo's metadata
//           catalog) whose English differs between the two, found by building
//           the English at both commits with the i18n repo's own builders.
//
// The English is read at the PR's merge ref (`refs/pull/<n>/merge`, fetched by
// scripts/source-checkout.mjs) and compared with its first parent, which is
// exactly what the i18n repo's completeness check requires. When main has
// edited a file the PR also edits, the merged file is a third text that neither
// the PR's sha nor main holds, and only the merge ref has it. The merge ref is
// used only when its second parent is the verified sha, so it is this PR at
// this push.
//
// Without a usable merge ref (the PR conflicts, or it has moved since the
// issue was written), the sha is compared with its merge base against the
// checkout's default branch, so a PR that is behind main is not given main's
// changes.
//
// `ref` is the commit to translate at.

import { SOURCES } from "./routes.mjs";

/** The PR's fetched merge ref, when its second parent is `sha`, else null. */
export function mergeRef(lib, repo, pr, sha) {
  if (!pr) return null;
  try {
    const commit = (name) => lib.git.git(["rev-parse", "--verify", "--quiet", `${name}^{commit}`], repo).trim();
    const merge = commit(`refs/remotes/origin/pr/${pr}-merge`);
    return commit(`${merge}^2`) === sha ? merge : null;
  } catch {
    return null;
  }
}

export async function scopeOf(lib, { source, repo, sha, pr = null }) {
  const git = (args) => lib.git.git(args, repo).trim();
  const merge = mergeRef(lib, repo, pr, sha);
  const ref = merge ?? sha;
  const base = merge ? git(["rev-parse", `${merge}^1`]) : git(["merge-base", lib.sourceRepos.defaultRef(repo), sha]);

  const kindId = SOURCES[source].kind;
  const sparse = lib.sourceRepos.REPO_KINDS[kindId].sparse ?? [];
  const idsAt = (ref) => new Map(lib.git.lsTree(repo, ref, sparse).map((entry) => [entry.path, entry.id]));
  const [before, after] = [idsAt(base), idsAt(ref)];
  const paths = [...after].filter(([file, id]) => before.get(file) !== id).map(([file]) => file);

  const englishAt = async (ref) => {
    if (source === "website") {
      const built = await lib.websiteEnglish.buildWebsiteEnglish(lib.git.refReader(repo, ref));
      return { backend: built.backend.catalog, frontend: built.frontend.catalog };
    }
    if (!lib.metadata.METADATA_REPO_KINDS.includes(kindId)) return {};
    return { metadata: lib.metadata.buildMetadataEnglish(kindId, lib.git.lsTree(repo, ref), lib.git.refReader(repo, ref).readMany).catalog };
  };
  const [englishBefore, englishAfter] = [await englishAt(base), await englishAt(ref)];
  const units = [];
  for (const [kind, catalog] of Object.entries(englishAfter)) {
    const old = englishBefore[kind] ?? {};
    for (const unit of lib.catalogs.englishUnits(kind, catalog).values()) {
      if (unit.keys.some((key) => catalog[key] !== old[key])) units.push(unit.id);
    }
  }
  return { base, ref, paths, units };
}
