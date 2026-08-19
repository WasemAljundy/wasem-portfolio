import { getProject } from "@/content/projects";

import { joodCaseStudy } from "./jood";
import { validateCaseStudyContent } from "./schema";

const authoredCaseStudies = [validateCaseStudyContent(joodCaseStudy)] as const;

for (const caseStudy of authoredCaseStudies) {
  const project = getProject(caseStudy.projectSlug);
  if (!project?.caseStudyEligible || project.visibility === "withheld") {
    throw new Error(`Authored case study ${caseStudy.projectSlug} has no publishable project.`);
  }
  if (!getProject(caseStudy.nextProjectSlug)) {
    throw new Error(`Case study ${caseStudy.projectSlug} references a missing next project.`);
  }
}

export function getCaseStudy(slug: string) {
  return authoredCaseStudies.find((caseStudy) => caseStudy.projectSlug === slug);
}

export { CaseStudyValidationError, validateCaseStudyContent } from "./schema";
export type { CaseStudyContent, CaseStudyImage, CaseStudyNarrative } from "./schema";
