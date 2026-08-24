import manifestSource from "../../../planning/project-manifest.json";

import { validatePortfolioManifest } from "./schema";

export const portfolioManifest = validatePortfolioManifest(manifestSource);
export const projects = portfolioManifest.projects;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const caseStudyProjects = projects.filter(
  (project) => project.caseStudyEligible && project.visibility !== "withheld",
);

export const featuredProjects = portfolioManifest.featuredOrder.map((slug) => {
  const project = getProject(slug);
  if (!project) {
    throw new Error(`Validated featured project ${slug} was not found.`);
  }
  return project;
});

function resolveProjectOrder(slugs: readonly string[]) {
  return slugs.map((slug) => {
    const project = getProject(slug);
    if (!project) throw new Error(`Validated work index project ${slug} was not found.`);
    return project;
  });
}

export const deepCaseStudyProjects = resolveProjectOrder(
  portfolioManifest.workIndex.deepCaseStudyOrder,
);
export const selectedProductionProjects = resolveProjectOrder(
  portfolioManifest.workIndex.selectedProductionOrder,
);
export const archiveProjects = resolveProjectOrder(portfolioManifest.workIndex.archiveOrder);

export type {
  ClientPrivacy,
  OwnershipType,
  PortfolioManifest,
  Project,
  ProjectLink,
  ProjectLinkType,
  ProjectStatus,
  ProjectVisibility,
  WorkIndexCuration,
} from "./schema";
