import Image from "next/image";
import Link from "next/link";

import { StatusLabel } from "@/components/ui/status-label";
import type { CaseStudyContent } from "@/content/case-studies";
import type { Project } from "@/content/projects";
import { ProjectLinks } from "@/features/projects/components/project-links";

import styles from "../case-study.module.css";

function ownershipLabel(project: Project) {
  return project.ownership === "full-build" ? "Full build" : "Team build";
}

export function CaseStudyHero({
  project,
  content,
}: {
  project: Project;
  content: CaseStudyContent;
}) {
  return (
    <section className={styles.hero} aria-labelledby="case-study-title" id="case-study-hero">
      <div className={`${styles.heroInner} container`}>
        <nav className={styles.breadcrumb} aria-label="Project navigation">
          <Link href="/#selected-work">← Selected work</Link>
          <span aria-hidden="true">/</span>
          <Link href="/work">All projects</Link>
        </nav>

        <header className={styles.heroHeader}>
          <div className={styles.heroCopy}>
            <div className={styles.heroLabelRow}>
              <p>{content.hero.eyebrow}</p>
              <StatusLabel status={project.status} />
            </div>
            <h1 id="case-study-title">{project.title}</h1>
            <p className={styles.heroStatement}>{content.hero.statement}</p>
            <ProjectLinks links={project.links} />
          </div>

          <div className={styles.heroMedia} aria-label={`${project.title} product views`}>
            {content.hero.images.map((image, index) => (
              <figure className={styles.heroFigure} data-image={index + 1} key={image.src}>
                <Image
                  alt={image.alt}
                  height={image.height}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes={
                    index === 0
                      ? "(max-width: 47.99rem) 76vw, (max-width: 63.99rem) 42vw, 30rem"
                      : "(max-width: 47.99rem) 46vw, (max-width: 63.99rem) 29vw, 19rem"
                  }
                  src={image.src}
                  width={image.width}
                />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>

          <dl className={styles.heroFacts} aria-label={`${project.title} project facts`}>
            <div>
              <dt>Ownership</dt>
              <dd>{ownershipLabel(project)}</dd>
            </div>
            <div>
              <dt>Platforms</dt>
              <dd>{project.platforms.join(" + ")}</dd>
            </div>
            <div>
              <dt>Domain</dt>
              <dd>{project.domains.join(" · ")}</dd>
            </div>
          </dl>
        </header>
      </div>
    </section>
  );
}
