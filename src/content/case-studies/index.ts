import { getProject } from "@/content/projects";

import { joodCaseStudy } from "./jood";
import { aidForPalestineCaseStudy } from "./aid-for-palestine";
import { auraFitCaseStudy } from "./aura-fit";
import { eureecaCaseStudy } from "./eureeca";
import { sezonStoreCaseStudy } from "./sezon-store";
import { validateCaseStudyContent } from "./schema";

const authoredCaseStudies = [
  joodCaseStudy,
  sezonStoreCaseStudy,
  eureecaCaseStudy,
  auraFitCaseStudy,
  aidForPalestineCaseStudy,
].map(validateCaseStudyContent);

for (const caseStudy of authoredCaseStudies) {
  const project = getProject(caseStudy.projectSlug);
  if (!project?.caseStudyEligible || project.visibility === "withheld") {
    throw new Error(`Authored case study ${caseStudy.projectSlug} has no publishable project.`);
  }
  if (caseStudy.nextProjectSlug && !getProject(caseStudy.nextProjectSlug)) {
    throw new Error(`Case study ${caseStudy.projectSlug} references a missing next project.`);
  }
}

export function getCaseStudy(slug: string) {
  return authoredCaseStudies.find((caseStudy) => caseStudy.projectSlug === slug);
}

export { CaseStudyValidationError, validateCaseStudyContent } from "./schema";
export type { CaseStudyContent, CaseStudyImage, CaseStudyNarrative } from "./schema";
