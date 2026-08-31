import type { Route } from "next";
import Link from "next/link";

import { StatusLabel } from "@/components/ui/status-label";
import type { Project } from "@/content/projects";
import { getProjectAction } from "@/features/projects/project-action";

import styles from "../work-index.module.css";

type ProjectRowProps = {
  project: Project;
  index: number;
  variant: "deep" | "selected" | "archive";
};

const ownershipLabels = {
  "full-build": "Full build",
  "team-build": "Team contribution",
} as const;

export function ProjectRow({ project, index, variant }: ProjectRowProps) {
  const action = variant === "archive" ? undefined : getProjectAction(project);

  return (
    <li className={styles.row} data-variant={variant}>
      <article
        className={styles.project}
        data-preview-slug={
          variant !== "archive" && project.productionAssets.length > 0 ? project.slug : undefined
        }
      >
        <p className={styles.index} aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </p>
        <div className={styles.body}>
          <div className={styles.statusLine}>
            <StatusLabel status={project.status} />
            <span>{project.domains[0]}</span>
          </div>
          <h3>{project.title}</h3>
          <p className={styles.projectSummary}>{project.shortDescription}</p>
        </div>
        <dl className={styles.facts} aria-label={`${project.title} project facts`}>
          <div>
            <dt>Ownership</dt>
            <dd>{ownershipLabels[project.ownership]}</dd>
          </div>
          <div>
            <dt>Platforms</dt>
            <dd>{project.platforms.join(" + ")}</dd>
          </div>
        </dl>
        <div className={styles.destination}>
          {action?.kind === "internal" ? (
            <Link
              aria-label={`${action.label}: ${project.title}`}
              className={styles.action}
              href={action.href as Route}
              prefetch={false}
            >
              {action.label}
              <span aria-hidden="true">↗</span>
            </Link>
          ) : action?.kind === "external" ? (
            <a
              aria-label={`${action.label}: ${project.title} (opens in a new tab)`}
              className={styles.action}
              href={action.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {action.label}
              <span aria-hidden="true">↗</span>
            </a>
          ) : project.status === "private-client" ? (
            <span className={styles.restricted}>Private summary only</span>
          ) : null}
        </div>
      </article>
    </li>
  );
}
