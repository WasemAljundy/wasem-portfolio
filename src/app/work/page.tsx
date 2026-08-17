import type { Metadata } from "next";

import { caseStudyProjects } from "@/content/projects";
import { ProjectRow } from "@/features/projects/components/project-row";
import { createMetadata } from "@/lib/seo/metadata";

const description =
  "Selected Flutter and mobile engineering work by Wasem Aljundy, spanning production products, private-client systems, and focused case studies.";

export const metadata: Metadata = createMetadata({
  title: "Selected Work",
  description,
  pathname: "/work",
});

export default function WorkPage() {
  return (
    <section className="section" aria-labelledby="work-title">
      <div className="container">
        <header className="section-heading">
          <p className="eyebrow">Selected Work</p>
          <h1 className="page-title" id="work-title">
            Products with real engineering depth.
          </h1>
          <p className="section-copy">
            Production and private-client work presented with clear status, defensible ownership,
            and only real external destinations.
          </p>
        </header>
        <div className="work-list">
          {caseStudyProjects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
