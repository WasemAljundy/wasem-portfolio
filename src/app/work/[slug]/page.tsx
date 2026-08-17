import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { StatusLabel } from "@/components/ui/status-label";
import { caseStudyProjects, getProject } from "@/content/projects";
import { ProjectLinks } from "@/features/projects/components/project-links";
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
  return createMetadata({
    title: project.title,
    description: project.shortDescription,
    pathname: `/work/${project.slug}`,
  });
}

function ownershipLabel(ownership: "full-build" | "team-build") {
  return ownership === "full-build" ? "Full end-to-end build" : "Collaborative team build";
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.caseStudyEligible || project.visibility === "withheld") notFound();

  return (
    <article className="section">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/work">← Selected Work</Link>
        </nav>
        <header className="section-heading">
          <StatusLabel status={project.status} />
          <h1 className="page-title">{project.title}</h1>
          <p className="section-copy">{project.shortDescription}</p>
          <ProjectLinks links={project.links} />
        </header>

        <div className="project-detail-grid">
          <section className="detail-block" aria-labelledby="project-proof">
            <h2 id="project-proof">Engineering proof</h2>
            <ul className="work-list">
              {project.proofPoints.map((point) => (
                <li className="resume-item" key={point}>
                  {point}
                </li>
              ))}
            </ul>
          </section>
          <aside className="detail-block" aria-labelledby="project-context">
            <h2 id="project-context">Project context</h2>
            <p className="project-detail-copy">
              <strong>Ownership:</strong> {ownershipLabel(project.ownership)}
            </p>
            <div>
              <p className="project-detail-copy">
                <strong>Domains</strong>
              </p>
              <ul className="tag-list">
                {project.domains.map((domain) => (
                  <li key={domain}>{domain}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="project-detail-copy">
                <strong>Platforms</strong>
              </p>
              <ul className="tag-list">
                {project.platforms.map((platform) => (
                  <li key={platform}>{platform}</li>
                ))}
              </ul>
            </div>
            {project.technologies.length > 0 ? (
              <div>
                <p className="project-detail-copy">
                  <strong>Technologies</strong>
                </p>
                <ul className="tag-list">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </article>
  );
}
