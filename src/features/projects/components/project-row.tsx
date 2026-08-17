import Link from "next/link";

import type { Project } from "@/content/projects";

import { StatusLabel } from "@/components/ui/status-label";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="project-row">
      <div className="project-row-main">
        <StatusLabel status={project.status} />
        <h2 className="project-title">{project.title}</h2>
        <p>{project.shortDescription}</p>
      </div>
      <Link className="project-row-link" href={`/work/${project.slug}`}>
        View project
      </Link>
    </article>
  );
}
