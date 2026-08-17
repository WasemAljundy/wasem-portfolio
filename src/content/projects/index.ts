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

export type {
  ClientPrivacy,
  OwnershipType,
  PortfolioManifest,
  Project,
  ProjectLink,
  ProjectStatus,
  ProjectVisibility,
} from "./schema";
