import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { ActionLink } from "@/components/ui/action-link";
import type { CaseStudyContent, CaseStudyNarrative } from "@/content/case-studies";
import type { Project, ProjectStatus } from "@/content/projects";
import { ProjectLinks } from "@/features/projects/components/project-links";
import { siteConfig } from "@/config/site";

import styles from "../case-study.module.css";

const statusLabels: Record<ProjectStatus, string> = {
  live: "Live",
  "private-client": "Private Client",
  "portfolio-only": "Portfolio Only",
};

export function ProjectSnapshot({
  project,
  snapshot,
}: {
  project: Project;
  snapshot: CaseStudyContent["snapshot"];
}) {
  const facts = [
    [
      "Role / ownership",
      project.ownership === "full-build" ? "End-to-end Flutter build" : "Team build",
    ],
    ["Product type", snapshot.productType],
    ["Platforms / status", `${project.platforms.join(" + ")} · ${statusLabels[project.status]}`],
    ["Primary responsibility", snapshot.responsibilities],
    ["Engineering areas", snapshot.engineeringAreas],
    ...(project.technologies.length > 0
      ? [["Verified technology", project.technologies.join(" · ")] as const]
      : []),
  ] as const;

  return (
    <section
      className={styles.snapshot}
      aria-labelledby="snapshot-title"
      data-case-section
      id="project-overview"
    >
      <div className={`${styles.snapshotInner} container`}>
        <header>
          <p className={styles.eyebrow}>Project snapshot</p>
          <h2 id="snapshot-title">The production surface at a glance.</h2>
        </header>
        <dl className={styles.snapshotList}>
          {facts.map(([label, value], index) => (
            <div key={label}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function NarrativeSection({ narrative, id }: { narrative: CaseStudyNarrative; id: string }) {
  return (
    <section className={styles.narrative} aria-labelledby={`${id}-title`} data-case-section id={id}>
      <div className={`${styles.narrativeInner} container`}>
        <header>
          <p className={styles.eyebrow}>{narrative.eyebrow}</p>
          <h2 id={`${id}-title`}>{narrative.title}</h2>
        </header>
        <div className={styles.narrativeCopy}>
          {narrative.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OwnershipSection({ ownership }: { ownership: CaseStudyContent["ownership"] }) {
  return (
    <section
      className={styles.ownership}
      aria-labelledby="ownership-title"
      data-case-section
      id="project-ownership"
    >
      <div className="container">
        <header className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{ownership.eyebrow}</p>
          <h2 id="ownership-title">{ownership.title}</h2>
          <p>{ownership.introduction}</p>
        </header>
        <ol className={styles.ownershipList}>
          {ownership.areas.map((area, index) => (
            <li key={area.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{area.title}</h3>
              <p>{area.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function EngineeringApproach({
  approach,
}: {
  approach: NonNullable<CaseStudyContent["approach"]>;
}) {
  return (
    <section
      className={styles.approach}
      aria-labelledby="approach-title"
      data-case-section
      id="engineering-approach"
    >
      <div className={`${styles.approachInner} container`}>
        <header>
          <p className={styles.eyebrow}>{approach.eyebrow}</p>
          <h2 id="approach-title">{approach.title}</h2>
          <p>{approach.introduction}</p>
        </header>
        <ol className={styles.approachFlow} aria-label="Supported engineering boundaries">
          {approach.stages.map((stage, index) => (
            <li key={stage.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{stage.label}</h3>
              <p>{stage.detail}</p>
            </li>
          ))}
        </ol>
        <p className={styles.evidenceBoundary}>
          <strong>Evidence boundary.</strong> {approach.evidenceBoundary}
        </p>
      </div>
    </section>
  );
}

export function ProductFlow({ flow }: { flow: NonNullable<CaseStudyContent["flow"]> }) {
  return (
    <section
      className={styles.productFlow}
      aria-labelledby={`${flow.id ?? "transaction-flow"}-title`}
      data-case-section
      id={flow.id ?? "transaction-flow"}
    >
      <div className="container">
        <header className={styles.flowHeading}>
          <p className={styles.eyebrow}>{flow.eyebrow}</p>
          <h2 id={`${flow.id ?? "transaction-flow"}-title`}>{flow.title}</h2>
          <p>{flow.introduction}</p>
        </header>
        <ol className={styles.flowList}>
          {flow.steps.map((step) => (
            <li className={styles.flowStep} data-has-image={Boolean(step.image)} key={step.number}>
              <div className={styles.flowStepCopy}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
              {step.image ? (
                <figure>
                  <Image
                    alt={step.image.alt}
                    height={step.image.height}
                    loading="lazy"
                    sizes="(max-width: 47.99rem) calc(100vw - 3.5rem), (max-width: 63.99rem) 42vw, 28rem"
                    src={step.image.src}
                    width={step.image.width}
                  />
                  <figcaption>{step.image.caption}</figcaption>
                </figure>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function EngineeringDecisions({
  decisions,
  introduction,
}: {
  decisions: NonNullable<CaseStudyContent["decisions"]>;
  introduction?: CaseStudyContent["decisionsIntroduction"];
}) {
  const heading = introduction ?? {
    eyebrow: "Engineering decisions",
    title: "Small decisions that protect the whole journey.",
    description:
      "Each decision is tied to visible product behavior. No undocumented framework or backend choice is presented as evidence.",
  };

  return (
    <section
      className={styles.decisions}
      aria-labelledby="decisions-title"
      data-case-section
      id="engineering-decisions"
    >
      <div className="container">
        <header className={styles.sectionHeading}>
          <p className={styles.eyebrow}>{heading.eyebrow}</p>
          <h2 id="decisions-title">{heading.title}</h2>
          <p>{heading.description}</p>
        </header>
        <ol className={styles.decisionList}>
          {decisions.map((decision, index) => (
            <li key={decision.title}>
              <header>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{decision.title}</h3>
              </header>
              <dl>
                <div>
                  <dt>Context</dt>
                  <dd>{decision.context}</dd>
                </div>
                <div>
                  <dt>Decision</dt>
                  <dd>{decision.decision}</dd>
                </div>
                <div>
                  <dt>Why</dt>
                  <dd>{decision.why}</dd>
                </div>
                {decision.tradeoff ? (
                  <div>
                    <dt>Tradeoff</dt>
                    <dd>{decision.tradeoff}</dd>
                  </div>
                ) : null}
              </dl>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ResilienceSection({
  resilience,
}: {
  resilience: NonNullable<CaseStudyContent["resilience"]>;
}) {
  return (
    <section
      className={styles.resilience}
      aria-labelledby="resilience-title"
      data-case-section
      id="product-states"
    >
      <div className={`${styles.resilienceInner} container`}>
        <header>
          <p className={styles.eyebrow}>{resilience.eyebrow}</p>
          <h2 id="resilience-title">{resilience.title}</h2>
          <p>{resilience.introduction}</p>
        </header>
        <ul className={styles.stateList}>
          {resilience.states.map((state) => (
            <li key={state.title}>
              <h3>{state.title}</h3>
              <p>{state.detail}</p>
            </li>
          ))}
        </ul>
        {resilience.evidenceBoundary ? (
          <p className={styles.evidenceBoundary}>
            <strong>Not claimed.</strong> {resilience.evidenceBoundary}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function TechnologySummary({
  technologies,
}: {
  technologies: NonNullable<CaseStudyContent["technologies"]>;
}) {
  return (
    <section
      className={styles.technology}
      aria-labelledby="technology-title"
      data-case-section
      id="technology"
    >
      <div className={`${styles.technologyInner} container`}>
        <header>
          <p className={styles.eyebrow}>Verified technology</p>
          <h2 id="technology-title">Only the stack supported by the evidence.</h2>
        </header>
        <dl>
          {technologies.map((group) => (
            <div key={group.purpose}>
              <dt>{group.purpose}</dt>
              <dd>{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function ProductGallery({ gallery }: { gallery: NonNullable<CaseStudyContent["gallery"]> }) {
  return (
    <section
      className={styles.gallery}
      aria-labelledby="gallery-title"
      data-case-section
      id="product-gallery"
    >
      <div className="container">
        <header className={styles.galleryHeading}>
          <p className={styles.eyebrow}>{gallery.eyebrow}</p>
          <h2 id="gallery-title">{gallery.title}</h2>
          <p>{gallery.introduction}</p>
        </header>
        <div className={styles.galleryGrid}>
          {gallery.images.map((image, index) => (
            <figure data-image={index + 1} key={image.src}>
              <Image
                alt={image.alt}
                height={image.height}
                loading="lazy"
                sizes="(max-width: 47.99rem) calc(100vw - 2rem), (max-width: 63.99rem) 42vw, 32rem"
                src={image.src}
                width={image.width}
              />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReleaseAndOutcome({
  project,
  release,
  outcome,
}: {
  project: Project;
  release: CaseStudyNarrative;
  outcome: CaseStudyContent["outcome"];
}) {
  return (
    <>
      <section
        className={styles.release}
        aria-labelledby="release-title"
        data-case-section
        id="release-context"
      >
        <div className={`${styles.releaseInner} container`}>
          <header>
            <p className={styles.eyebrow}>{release.eyebrow}</p>
            <h2 id="release-title">{release.title}</h2>
          </header>
          <div>
            {release.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ProjectLinks links={project.links} />
          </div>
        </div>
      </section>
      <section
        className={styles.outcome}
        aria-labelledby="outcome-title"
        data-case-section
        id="case-study-outcome"
      >
        <div className={`${styles.outcomeInner} container`}>
          <div>
            <p className={styles.eyebrow}>{outcome.eyebrow}</p>
            <h2 id="outcome-title">{outcome.title}</h2>
            <p>{outcome.summary}</p>
          </div>
          <ul>
            {outcome.evidence.map((item, index) => (
              <li key={item}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export function NextProject({ nextProject }: { nextProject?: Project }) {
  const preview = nextProject?.productionAssets[0];

  return (
    <section className={styles.nextProject} aria-labelledby="next-project-title" id="next-project">
      <div
        className={`${styles.nextProjectInner} container`}
        data-has-preview={Boolean(nextProject && preview)}
      >
        <div className={styles.nextProjectCopy}>
          <p className={styles.eyebrow}>
            {nextProject ? "Continue the evidence" : "Continue from here"}
          </p>
          <h2 id="next-project-title">
            {nextProject
              ? `Next: ${nextProject.title}`
              : "Explore the work or start a conversation."}
          </h2>
          <p>
            {nextProject
              ? nextProject.shortDescription
              : "The deep-story sequence ends here. The full project index and direct contact path remain one step away."}
          </p>
          {nextProject ? (
            <p className={styles.nextProjectMeta}>
              {nextProject.domains[0]} ·{" "}
              {nextProject.ownership === "full-build" ? "Full build" : "Team contribution"}
            </p>
          ) : null}
        </div>
        {nextProject && preview ? (
          <Link
            aria-label={`Continue to ${nextProject.title}`}
            className={styles.nextProjectPreview}
            href={`/work/${nextProject.slug}` as Route}
          >
            <Image
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 63.99rem) 100vw, 34vw"
              src={preview}
            />
          </Link>
        ) : null}
        <div className={styles.nextActions}>
          {nextProject ? (
            <ActionLink href={`/work/${nextProject.slug}` as Route}>
              View {nextProject.title}
            </ActionLink>
          ) : (
            <ActionLink href="/work">Explore all work</ActionLink>
          )}
          {nextProject ? <Link href="/work">Explore all work</Link> : null}
          <Link href="/resume">View résumé</Link>
          <a href={`mailto:${siteConfig.email}`}>Contact</a>
          <a href={siteConfig.social.linkedin} rel="noopener noreferrer" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
