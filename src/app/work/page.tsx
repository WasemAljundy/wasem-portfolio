import type { Metadata } from "next";

import {
  archiveProjects,
  deepCaseStudyProjects,
  selectedProductionProjects,
} from "@/content/projects";
import { ProjectRow } from "@/features/projects/components/project-row";
import { WorkPreview } from "@/features/projects/components/work-preview";
import { getWorkPreviewItem, type WorkPreviewItem } from "@/features/projects/work-preview";
import { createMetadata } from "@/lib/seo/metadata";

import styles from "../../features/projects/work-index.module.css";

const description =
  "A curated index of Wasem Aljundy's Flutter and mobile engineering work, separating deep case studies, production and private-client projects, and earlier portfolio records.";

export const metadata: Metadata = createMetadata({
  title: "Engineering Work",
  description,
  pathname: "/work",
});

const groups = [
  {
    id: "deep-stories",
    eyebrow: "01 · Featured / Deep Stories",
    title: "Engineering decisions, shown in context.",
    description:
      "Eight authored studies connect product constraints to architecture, implementation, quality, and release judgment. The six homepage Featured chapters lead the sequence.",
    projects: deepCaseStudyProjects,
    variant: "deep",
  },
  {
    id: "production-work",
    eyebrow: "02 · Selected Production Work",
    title: "Breadth across shipped and private-client products.",
    description:
      "Production releases and approved private summaries, with internal overviews or verified external destinations where available.",
    projects: selectedProductionProjects,
    variant: "selected",
  },
  {
    id: "archive",
    eyebrow: "03 · Additional Work / Archive",
    title: "Earlier work, kept in honest proportion.",
    description:
      "Portfolio-only records broaden the chronology without being presented as production releases or linked to unfinished case studies.",
    projects: archiveProjects,
    variant: "archive",
  },
] as const;

export default function WorkPage() {
  return (
    <div className={styles.page}>
      <header className={`${styles.introduction} container`}>
        <p className="eyebrow">Complete Work Index</p>
        <h1 className="page-title" id="work-title">
          Product proof, organized by depth.
        </h1>
        <p className={styles.lede}>
          A recruiter-friendly view of 24 public portfolio records: deep engineering stories first,
          then production and private-client breadth, followed by clearly separated archive work.
        </p>
        <p className={styles.claimNote}>
          The CV-supported “20+ production applications” claim reflects the broader professional
          record. This index does not count portfolio-only archive entries as production releases.
        </p>
        <dl className={styles.summary} aria-label="Work index summary">
          <div>
            <dt>{deepCaseStudyProjects.length}</dt>
            <dd>Deep stories</dd>
          </div>
          <div>
            <dt>{deepCaseStudyProjects.length + selectedProductionProjects.length}</dt>
            <dd>Production / private-client records</dd>
          </div>
          <div>
            <dt>{archiveProjects.length}</dt>
            <dd>Portfolio-only archive records</dd>
          </div>
        </dl>
      </header>

      {groups.map((group) => {
        const previews: WorkPreviewItem[] = group.projects.flatMap((project) => {
          const preview = getWorkPreviewItem(project, group.variant);
          return preview ? [preview] : [];
        });

        return (
          <section
            className={`${styles.group} container`}
            id={group.id}
            key={group.id}
            aria-labelledby={`${group.id}-title`}
          >
            <header className={styles.groupHeader}>
              <p>{group.eyebrow}</p>
              <div>
                <h2 id={`${group.id}-title`}>{group.title}</h2>
                <p>{group.description}</p>
              </div>
              <span>{String(group.projects.length).padStart(2, "0")} projects</span>
            </header>
            <div
              className={styles.groupExplorer}
              data-has-preview={previews.length > 0}
              data-work-explorer
            >
              <ol className={styles.list}>
                {group.projects.map((project, index) => (
                  <ProjectRow
                    index={index}
                    key={project.slug}
                    project={project}
                    variant={group.variant}
                  />
                ))}
              </ol>
              {previews.length > 0 ? <WorkPreview previews={previews} /> : null}
            </div>
          </section>
        );
      })}
    </div>
  );
}
