import assert from "node:assert/strict";
import test from "node:test";

import manifestSource from "../../planning/project-manifest.json";
import {
  CaseStudyValidationError,
  getCaseStudy,
  validateCaseStudyContent,
  type CaseStudyContent,
} from "../../src/content/case-studies/index";
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

test("featured projects expose curated production derivatives", () => {
  for (const project of portfolioManifest.featuredOrder.map((slug) =>
    portfolioManifest.projects.find((candidate) => candidate.slug === slug),
  )) {
    assert.ok(project);
    assert.ok(project.productionAssets.length >= 2);
    assert.ok(
      project.productionAssets.every((asset) => asset.startsWith(`/projects/${project.slug}/`)),
    );
  }
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

test("Milestone 4B deep case studies are authored and connected", () => {
  const expected = ["jood", "sezon-store", "eureeca", "aura-fit", "aid-for-palestine"];
  for (const slug of expected) assert.equal(getCaseStudy(slug)?.projectSlug, slug);

  assert.equal(getCaseStudy("jood")?.nextProjectSlug, "eureeca");
  assert.equal(getCaseStudy("eureeca")?.nextProjectSlug, "aura-fit");
  assert.equal(getCaseStudy("aura-fit")?.nextProjectSlug, "sezon-store");
  assert.equal(getCaseStudy("sezon-store")?.nextProjectSlug, "aid-for-palestine");
  assert.equal(getCaseStudy("aid-for-palestine")?.nextProjectSlug, undefined);
});

test("AFP public evidence remains curated and project-bound", () => {
  const afp = portfolioManifest.projects.find((project) => project.slug === "aid-for-palestine");
  assert.ok(afp);
  assert.equal(afp.clientPrivacy, "private-client-demo");
  assert.equal(afp.visibility, "demo-approved");
  assert.equal(afp.productionAssets.length, 7);
  assert.ok(
    afp.productionAssets.every((asset) => asset.startsWith("/projects/aid-for-palestine/")),
  );
});

test("case-study sections are optional without weakening the required narrative", () => {
  const jood = getCaseStudy("jood");
  assert.ok(jood);
  const minimal = structuredClone(jood) as CaseStudyContent;
  delete minimal.approach;
  delete minimal.flow;
  delete minimal.decisions;
  delete minimal.resilience;
  delete minimal.technologies;
  delete minimal.gallery;

  assert.equal(validateCaseStudyContent(minimal), minimal);
});

test("case-study images cannot cross project publication boundaries", () => {
  const jood = getCaseStudy("jood");
  assert.ok(jood);
  const invalid: CaseStudyContent = {
    ...jood,
    hero: {
      ...jood.hero,
      images: [
        {
          ...jood.hero.images[0]!,
          src: "/projects/eureeca/borrowed.webp",
        },
      ],
    },
  };

  assert.throws(
    () => validateCaseStudyContent(invalid),
    (error) => error instanceof CaseStudyValidationError && /must live below/.test(error.message),
  );
});
