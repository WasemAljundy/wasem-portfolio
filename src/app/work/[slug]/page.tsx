import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getCaseStudy } from "@/content/case-studies";
import { caseStudyProjects, getProject } from "@/content/projects";
import { CaseStudyPage } from "@/features/case-studies/components/case-study-page";
import { ProjectOverview } from "@/features/case-studies/components/project-overview";
import { createMetadata } from "@/lib/seo/metadata";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.caseStudyEligible || project.visibility === "withheld") return {};
  const caseStudy = getCaseStudy(slug);
  return createMetadata({
    title: caseStudy?.seo.title ?? project.title,
    description: caseStudy?.seo.description ?? project.shortDescription,
    pathname: `/work/${project.slug}`,
    socialImagePath: caseStudy ? `/api/og?project=${project.slug}` : undefined,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.caseStudyEligible || project.visibility === "withheld") notFound();
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return <ProjectOverview project={project} />;

  const nextProject = caseStudy.nextProjectSlug ? getProject(caseStudy.nextProjectSlug) : undefined;
  if (caseStudy.nextProjectSlug && !nextProject) {
    throw new Error(`Case study ${slug} references a missing next project.`);
  }

  return <CaseStudyPage content={caseStudy} nextProject={nextProject} project={project} />;
}
