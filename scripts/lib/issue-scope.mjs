// issue-scope.mjs: what one pull request changed, worked out from git.
//
// The issue a PR opens lists the English files it touched, and that list is
// ignored, because no decision is taken from an issue's text
// (scripts/lib/issues.mjs). The scope of a run is derived here from the source
// repo itself, given only the verified sha and PR number:
//
//   paths   the content files the i18n repo's completeness check requires for
//           this change, from its own `requiredContent`: every translatable file
//           at the ref whose blob id the base did not already require. So a
//           rename needs no work, an edit to a doc the website never shows
//           (docs/CONTRIBUTING.md) needs none, and a doc that docs/config.json
//           starts listing, or an exercise that leaves `wip`, is in scope even
//           if its file is unchanged.
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
//
// A track whose config.json says `"active": false` at `ref` gets an empty scope
// and `inactive: true`. The website does not show an inactive track, and the
// i18n repo's completeness check does not hold its PRs, so there is nothing to
// translate. Translating one anyway would also start a metadata catalog that a
// production locale is then required to finish (exercism/i18n#381).
//
// A PR that makes a track active (inactive at the base, active at `ref`) gets
// everything at `ref` in scope, because merging it puts the whole track on the
// website and the completeness check requires all of it. That is far above the
// word cap, so the issue waits for iHiD.

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
  // The whole tree, as the completeness check reads it: a track's config.json
  // (which exercises are `wip`) is outside the kind's sparse prefixes.
  const [headEntries, read] = [lib.git.lsTree(repo, ref), lib.git.refReader(repo, ref).readMany];
  if (kindId === "track" && !lib.sourceRepos.isActiveTrack(headEntries, read)) {
    return { base, ref, paths: [], units: [], inactive: true };
  }
  const [baseEntries, baseRead] = [lib.git.lsTree(repo, base), lib.git.refReader(repo, base).readMany];
  // A PR that makes a track active puts the whole track on the website, and the
  // i18n repo's completeness check then requires all of it. So everything at
  // `ref` is in scope, as if the base held nothing.
  const activates = kindId === "track" && !lib.sourceRepos.isActiveTrack(baseEntries, baseRead);
  const required = lib.completeness.requiredContent(kindId, headEntries, activates ? null : baseEntries, { read, baseRead: activates ? null : baseRead });
  const paths = required.map((file) => file.path);

  const englishAt = async (ref) => {
    if (source === "website") {
      const built = await lib.websiteEnglish.buildWebsiteEnglish(lib.git.refReader(repo, ref));
      return { backend: built.backend.catalog, frontend: built.frontend.catalog };
    }
    if (!lib.metadata.METADATA_REPO_KINDS.includes(kindId)) return {};
    return { metadata: lib.metadata.buildMetadataEnglish(kindId, lib.git.lsTree(repo, ref), lib.git.refReader(repo, ref).readMany).catalog };
  };
  const [englishBefore, englishAfter] = [activates ? {} : await englishAt(base), await englishAt(ref)];
  const units = [];
  for (const [kind, catalog] of Object.entries(englishAfter)) {
    const old = englishBefore[kind] ?? {};
    for (const unit of lib.catalogs.englishUnits(kind, catalog).values()) {
      if (unit.keys.some((key) => catalog[key] !== old[key])) units.push(unit.id);
    }
  }
  return { base, ref, paths, units, inactive: false };
}
