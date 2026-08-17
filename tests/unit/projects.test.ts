import assert from "node:assert/strict";
import test from "node:test";

import manifestSource from "../../planning/project-manifest.json";
import { portfolioManifest } from "../../src/content/projects/index";
import { validatePortfolioManifest } from "../../src/content/projects/schema";

type MutableManifest = {
  projects: Array<{
    slug: string;
    ownership: string;
    ownershipEvidence?: Record<string, string>;
    links: Partial<Record<string, string>>;
  }>;
};

test("the canonical project manifest validates as the factual source", () => {
  assert.equal(portfolioManifest.projects.length, 24);
  assert.deepEqual(portfolioManifest.featuredOrder.slice(0, 3), ["jood", "eureeca", "taseese"]);
});

test("reconciled ownership is represented without ambiguity", () => {
  const eureeca = portfolioManifest.projects.find((project) => project.slug === "eureeca");
  const sezon = portfolioManifest.projects.find((project) => project.slug === "sezon-store");

  assert.equal(eureeca?.ownership, "team-build");
  assert.match(eureeca?.ownershipEvidence?.publicationRule ?? "", /without implying sole/i);
  assert.equal(sezon?.ownership, "full-build");
});

test("placeholder project destinations are rejected", () => {
  const invalid = structuredClone(manifestSource) as unknown as MutableManifest;
  invalid.projects[0]!.links.googlePlay = "https://example.com/placeholder";

  assert.throws(() => validatePortfolioManifest(invalid), /placeholder destination/);
});

test("duplicate project slugs are rejected", () => {
  const invalid = structuredClone(manifestSource) as unknown as MutableManifest;
  invalid.projects[1]!.slug = invalid.projects[0]!.slug;

  assert.throws(() => validatePortfolioManifest(invalid), /duplicate slugs/);
});

test("team builds require ownership evidence", () => {
  const invalid = structuredClone(manifestSource) as unknown as MutableManifest;
  const eureeca = invalid.projects.find((project) => project.slug === "eureeca");
  assert.ok(eureeca);
  delete eureeca.ownershipEvidence;

  assert.throws(() => validatePortfolioManifest(invalid), /require ownershipEvidence/);
});
