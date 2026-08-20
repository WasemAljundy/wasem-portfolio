import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/content/projects";
import { getChapterPresentation, getStatusLabel, ownershipLabels } from "@/features/home/content";

import styles from "../home.module.css";

export function FeaturedChapter({ project }: { project: Project }) {
  const presentation = getChapterPresentation(project);

  return (
    <article
      className={`${styles.chapter} ${styles[`chapter_${presentation.tone}`]}`}
      id={project.slug}
      aria-labelledby={`${project.slug}-title`}
      data-motion-section
    >
      <div className={`${styles.chapterInner} container`}>
        <header className={styles.chapterHeader}>
          <div className={styles.chapterIndex} aria-hidden="true">
            {presentation.index}
          </div>
          <div className={styles.chapterHeading}>
            <p className={styles.chapterOverline}>{presentation.overline}</p>
            <h3 id={`${project.slug}-title`}>{project.title}</h3>
            <p className={styles.chapterPremise}>{project.shortDescription}</p>
          </div>
          <dl className={styles.projectFacts} aria-label={`${project.title} project facts`}>
            <div>
              <dt>Ownership</dt>
              <dd>{ownershipLabels[project.ownership]}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{getStatusLabel(project.status)}</dd>
            </div>
            <div>
              <dt>Platforms</dt>
              <dd>{project.platforms.join(" + ")}</dd>
            </div>
          </dl>
        </header>

        {presentation.tone === "taseese" ? (
          <p className={styles.learningPath} aria-label="Learning structure">
            <span>Stage</span>
            <span aria-hidden="true">→</span>
            <span>Subject</span>
            <span aria-hidden="true">→</span>
            <span>Assessment</span>
          </p>
        ) : null}

        <div className={styles.chapterBody}>
          <Link
            aria-label={`Read the ${project.title} case study`}
            className={styles.chapterMedia}
            data-count={presentation.visuals.length}
            data-cursor-label="Read case study"
            href={`/work/${project.slug}` as Route}
          >
            {presentation.visuals.map((visual, index) => (
              <figure className={styles.projectVisual} data-visual={index + 1} key={visual.src}>
                <Image
                  alt={visual.alt}
                  height={visual.height}
                  loading="lazy"
                  sizes={
                    index === 0
                      ? "(max-width: 47.99rem) calc(100vw - 2rem), (max-width: 63.99rem) 46vw, 34rem"
                      : "(max-width: 47.99rem) 72vw, (max-width: 63.99rem) 35vw, 24rem"
                  }
                  src={visual.src}
                  width={visual.width}
                />
              </figure>
            ))}
          </Link>

          <aside
            className={styles.engineeringProof}
            aria-label={`${project.title} engineering proof`}
          >
            <p>Engineering proof</p>
            <h4>{presentation.proofPoint}</h4>
            <p>{presentation.proofDetail}</p>
          </aside>
        </div>

        <footer className={styles.chapterActions}>
          <Link
            className={styles.caseStudyLink}
            data-cursor-label="Read"
            href={`/work/${project.slug}` as Route}
          >
            {presentation.caseStudyLabel}
            <span aria-hidden="true">↗</span>
          </Link>
          {project.links.length > 0 ? (
            <ul aria-label={`${project.title} store links`}>
              {project.links.map((link) => (
                <li key={link.type}>
                  <a href={link.href} rel="noopener noreferrer" target="_blank">
                    {link.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.privateNote}>Private-client summary. No public product link.</p>
          )}
        </footer>
      </div>
    </article>
  );
}
