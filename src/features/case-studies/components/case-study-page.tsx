import type { CaseStudyContent } from "@/content/case-studies";
import type { Project } from "@/content/projects";

import { CaseStudyHero } from "./case-study-hero";
import {
  EngineeringApproach,
  EngineeringDecisions,
  NarrativeSection,
  NextProject,
  OwnershipSection,
  ProductFlow,
  ProductGallery,
  ProjectSnapshot,
  ReleaseAndOutcome,
  ResilienceSection,
  TechnologySummary,
} from "./case-study-sections";
import { ProjectStructuredData } from "./project-structured-data";

export function CaseStudyPage({
  project,
  content,
  nextProject,
}: {
  project: Project;
  content: CaseStudyContent;
  nextProject?: Project;
}) {
  return (
    <article data-case-study={content.presentation}>
      <ProjectStructuredData project={project} />
      <CaseStudyHero content={content} project={project} />
      <ProjectSnapshot project={project} snapshot={content.snapshot} />
      <NarrativeSection id="product-challenge" narrative={content.challenge} />
      <OwnershipSection ownership={content.ownership} />
      {content.approach ? <EngineeringApproach approach={content.approach} /> : null}
      {content.flow ? <ProductFlow flow={content.flow} /> : null}
      {content.decisions ? (
        <EngineeringDecisions
          decisions={content.decisions}
          introduction={content.decisionsIntroduction}
        />
      ) : null}
      {content.resilience ? <ResilienceSection resilience={content.resilience} /> : null}
      {content.technologies ? <TechnologySummary technologies={content.technologies} /> : null}
      {content.gallery ? <ProductGallery gallery={content.gallery} /> : null}
      <div id="case-study-ending">
        <ReleaseAndOutcome outcome={content.outcome} project={project} release={content.release} />
        <NextProject nextProject={nextProject} />
      </div>
    </article>
  );
}
