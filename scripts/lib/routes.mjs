// routes.mjs: for every content type in the i18n registry, the how-to that
// governs it and the command that reaches it.
//
// The i18n repo's scripts/lib/content-types.mjs is the one place a PATH PATTERN
// lives, and the type of a file is always derived from its source path through
// that registry (`typeForPath`), never declared here. What the registry has no
// business knowing is this repo's layout: which file under content-types/
// explains a type to the model, and which slash command an operator types. That
// is all this table holds.
//
// scripts/check-routes.mjs asserts that every registry type appears here exactly
// once, that the how-to and the command exist, and that scripts/translate.mjs
// itself agrees it can run the type. A type with no route does not fail, it
// silently never happens, so run the check whenever the registry changes.
//
// SOURCES is the other half: where English comes from, which is what the
// commands are split by. `kind` is a REPO_KINDS id in the i18n repo's
// scripts/lib/source-repos.mjs.

export const SOURCES = {
  website: { kind: "website", command: "translate-website", catalogs: true },
  track: { kind: "track", command: "translate-track", named: true },
  "problem-specifications": { kind: "problem-specifications", command: "translate-problem-specifications" },
  docs: { kind: "docs", command: "translate-docs" },
  blog: { kind: "blog", command: "translate-blog" },
  "website-copy": { kind: "website-copy", command: "translate-website-copy" }
};

export const ROUTES = {
  // ---------------------------------------------------------------- website --
  "website-backend": { howto: "website-backend", source: "website" },
  "website-frontend": { howto: "website-frontend", source: "website" },

  // ------------------------------------------------------------ track repos --
  "exercise-instructions": { howto: "exercise-docs", source: "track" },
  "exercise-introduction": { howto: "exercise-docs", source: "track" },
  "exercise-instructions-append": { howto: "appends", source: "track" },
  "exercise-introduction-append": { howto: "appends", source: "track" },
  "exercise-hints": { howto: "hints", source: "track" },
  "exercise-shared-docs": { howto: "track-docs", source: "track" },
  "concept-about": { howto: "concepts", source: "track" },
  "concept-introduction": { howto: "concepts", source: "track" },
  "track-docs": { howto: "track-docs", source: "track" },

  // ------------------------------------------------ problem-specifications --
  "problem-specification": { howto: "problem-specifications", source: "problem-specifications" },

  // ------------------------------------------------------------------- docs --
  "docs-using": { howto: "docs", source: "docs" },
  "docs-building": { howto: "docs", source: "docs" },
  "docs-programming": { howto: "docs", source: "docs" },
  "docs-mentoring": { howto: "docs", source: "docs" },
  "docs-community": { howto: "docs", source: "docs" },

  // ------------------------------------------------------------------- blog --
  "blog-post": { howto: "blog", source: "blog" },
  "community-story": { howto: "blog", source: "blog" },

  // ----------------------------------------------------------- website-copy --
  "analyzer-comments": { howto: "analyzer-comments", source: "website-copy" }
};

// TODO(iHiD): OPEN. How text that is not a whole file is keyed (config.json
// blurbs and titles, metadata.toml fields) is undecided, so the i18n registry
// declares these types with `unit: "fragment"` and every script there skips
// them. They are DELIBERATE gaps here for the same reason, declared so that the
// route check can tell one from an oversight. When the question is settled,
// each moves up into ROUTES with a how-to, and scripts/translate.mjs grows the
// extractor. Nothing here guesses at the answer.
const FRAGMENT_REASON = "fragment text: how it is keyed is an open decision in the i18n repo (TODO(iHiD))";
export const GAPS = {
  "exercise-metadata": FRAGMENT_REASON,
  "concept-metadata": FRAGMENT_REASON,
  "track-metadata": FRAGMENT_REASON,
  "track-docs-metadata": FRAGMENT_REASON,
  "problem-specification-metadata": FRAGMENT_REASON,
  "docs-metadata": FRAGMENT_REASON,
  "blog-metadata": FRAGMENT_REASON
};

// TODO(iHiD): OPEN. Whether contributor-facing `building/` docs (155 of the 212
// served pages) and mentor-facing `mentoring/` docs are translated is undecided
// in the i18n repo, which keeps both types live. They are routed here like any
// other type so that the decision is NOT made by this repo either way; the
// /translate-docs command says out loud that both are included. Dropping one is
// a change to the i18n registry, which this table then follows.
export const SCOPE_UNDECIDED = ["docs-building", "docs-mentoring"];
