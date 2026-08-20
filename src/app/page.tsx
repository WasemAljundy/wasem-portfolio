import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContactLinks } from "@/components/layout/contact-links";
import { ActionLink } from "@/components/ui/action-link";
import { ContextualCursor } from "@/components/ui/contextual-cursor";
import { getCaseStudy } from "@/content/case-studies";
import { featuredProjects, getProject } from "@/content/projects";
import { resume } from "@/content/resume";
import { FeaturedChapter } from "@/features/home/components/featured-chapter";
import { capabilityBridge, getStatusLabel, ownershipLabels } from "@/features/home/content";

import styles from "../features/home/home.module.css";

const moreWorkSlugs = [
  "sezon-store",
  "aid-for-palestine",
  "naseeb",
  "haraj-aden",
  "talabati",
  "famous-steam",
  "pureness",
] as const;

const moreWork = moreWorkSlugs.map((slug) => {
  const project = getProject(slug);
  if (!project) throw new Error(`Homepage project index references missing project ${slug}.`);
  return project;
});

export default function HomePage() {
  const firstChapters = featuredProjects.slice(0, 3);
  const finalChapters = featuredProjects.slice(3);

  return (
    <>
      <ContextualCursor />
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`${styles.heroGrid} container`}>
          <div className={styles.heroCopy}>
            <p className={styles.heroName}>Wasem Aljundy</p>
            <p className={styles.heroRole}>Senior Flutter Engineer</p>
            <h1 id="hero-title">Engineering mobile products from architecture to release.</h1>
            <div className={styles.heroSupport}>
              <p>
                Flutter and Android production engineering across architecture, integrations,
                quality, and store delivery.
              </p>
              <p className={styles.productionProof}>
                <strong>20+</strong>
                <span>production applications</span>
              </p>
            </div>
            <ul className={styles.heroActions} aria-label="Primary actions">
              <li>
                <ActionLink href="/#selected-work" variant="primary">
                  View Work
                </ActionLink>
              </li>
              <li>
                <ActionLink href="/resume">View Résumé</ActionLink>
              </li>
              <li>
                <ActionLink href="/#contact">Contact Me</ActionLink>
              </li>
            </ul>
          </div>

          <figure className={styles.heroPortrait}>
            <Image
              alt="Wasem Aljundy working at a laptop in his studio"
              fill
              priority
              sizes="(max-width: 47.99rem) calc(100vw - 2rem), (max-width: 63.99rem) 38vw, 31rem"
              src="/images/wasem-aljundy-portrait.webp"
            />
            <figcaption>Mobile product engineering · Gaza, Palestine</figcaption>
          </figure>

          <ul className={styles.proofRail} aria-label="Engineering focus">
            <li>Flutter + Android</li>
            <li>iOS + Android delivery</li>
            <li>Commerce · FinTech · EdTech · Health</li>
          </ul>
        </div>
      </section>

      <section className={styles.selectedWork} id="selected-work" aria-labelledby="work-title">
        <header className={`${styles.workIntroduction} container`} data-motion-section>
          <p className={styles.sectionNumber}>Selected production work · 01—06</p>
          <h2 id="work-title">Products are the proof.</h2>
          <p>
            Six applications selected to show ownership, production judgment, domain range, and the
            engineering decisions behind the interface.
          </p>
        </header>

        {firstChapters.map((project) => (
          <FeaturedChapter key={project.slug} project={project} />
        ))}

        <section
          className={styles.capabilityBridge}
          aria-labelledby="capability-title"
          data-motion-section
        >
          <div className={`${styles.capabilityInner} container`}>
            <div className={styles.capabilityHeading}>
              <p>Engineering bridge</p>
              <h3 id="capability-title">Patterns that hold across products.</h3>
              <p>
                Seniority is visible in how architecture, product flows, quality, and release
                responsibility connect—not in a cloud of package names.
              </p>
            </div>
            <ol className={styles.capabilityList}>
              {capabilityBridge.map((capability, index) => (
                <li key={capability.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{capability.title}</h4>
                    <p className={styles.capabilitySource}>{capability.project}</p>
                    <p>{capability.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {finalChapters.map((project) => (
          <FeaturedChapter key={project.slug} project={project} />
        ))}
      </section>

      <section className={styles.experience} aria-labelledby="experience-title" data-motion-section>
        <div className={`${styles.narrativeGrid} container`}>
          <header>
            <p className={styles.sectionNumber}>Experience</p>
            <h2 id="experience-title">Production responsibility, carried forward.</h2>
            <p>
              Roles across product teams, client delivery, and independent work—focused on mobile
              architecture, implementation, release, and post-launch quality.
            </p>
          </header>
          <ol className={styles.experienceList}>
            {resume.experience.slice(0, 4).map((item, index) => (
              <li key={`${item.organization}-${item.role}`}>
                <div className={styles.experienceMeta}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <p>{item.dates}</p>
                </div>
                <div>
                  <h3>{item.role}</h3>
                  <p className={styles.organization}>{item.organization}</p>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.moreWork} aria-labelledby="more-work-title" data-motion-section>
        <div className="container">
          <header className={styles.compactHeading}>
            <div>
              <p className={styles.sectionNumber}>More work</p>
              <h2 id="more-work-title">Breadth without the wall of cards.</h2>
            </div>
            <Link href="/work">View the full project index</Link>
          </header>
          <ol className={styles.projectIndex}>
            {moreWork.map((project, index) => {
              const externalDestination = project.links[0]?.href;
              const hasDeepCaseStudy = Boolean(getCaseStudy(project.slug));
              const rowContent = (
                <>
                  <span className={styles.projectIndexNumber}>
                    {String(index + 7).padStart(2, "0")}
                  </span>
                  <span className={styles.projectIndexTitle}>{project.title}</span>
                  <span className={styles.projectIndexDomain}>{project.domains[0]}</span>
                  <span className={styles.projectIndexOwnership}>
                    {ownershipLabels[project.ownership]}
                  </span>
                  <span className={styles.projectIndexStatus}>
                    {getStatusLabel(project.status)}
                  </span>
                  <span className={styles.projectIndexAction}>
                    {hasDeepCaseStudy ? "Read case study" : "View project"}
                    <span aria-hidden="true">↗</span>
                  </span>
                </>
              );

              return (
                <li key={project.slug}>
                  {project.caseStudyEligible ? (
                    <Link
                      data-cursor-label={hasDeepCaseStudy ? "Read case study" : "View project"}
                      href={`/work/${project.slug}` as Route}
                    >
                      {rowContent}
                    </Link>
                  ) : externalDestination ? (
                    <a
                      data-cursor-label="Open"
                      href={externalDestination}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {rowContent}
                    </a>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <div className={styles.closingSequence}>
        <section className={styles.resumeBand} aria-labelledby="resume-title" data-motion-section>
          <div className={`${styles.resumeInner} container`}>
            <div>
              <p className={styles.sectionNumber}>Résumé</p>
              <h2 id="resume-title">The concise record behind the work.</h2>
            </div>
            <p>
              Experience, technical capabilities, education, and training are available as an
              accessible web résumé and the canonical PDF.
            </p>
            <ul className={styles.resumeActions}>
              <li>
                <ActionLink href="/resume" variant="primary">
                  View HTML Résumé
                </ActionLink>
              </li>
              <li>
                <ActionLink href="/resume/wasem-aljundy-cv.pdf" download>
                  Download PDF
                </ActionLink>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.about} aria-labelledby="about-title" data-motion-section>
          <div className={`${styles.aboutInner} container`}>
            <p className={styles.sectionNumber}>About</p>
            <h2 id="about-title">A mobile engineer who stays close to the product.</h2>
            <div>
              <p className={styles.aboutEvidence}>4+ years · 20+ production applications</p>
              <p>
                I work from the architecture outward: understanding the journey, shaping dependable
                foundations, implementing the details, and staying accountable through release.
              </p>
              <p>
                Based in Gaza, Palestine, I collaborate across product, design, backend, and client
                teams to turn mobile requirements into maintainable production software.
              </p>
            </div>
          </div>
        </section>

        <section
          className={styles.contact}
          id="contact"
          aria-labelledby="contact-title"
          data-motion-section
        >
          <div className={`${styles.contactInner} container`}>
            <div>
              <p className={styles.sectionNumber}>Contact</p>
              <h2 id="contact-title">Let’s discuss serious mobile product work.</h2>
              <p>Email, LinkedIn, and GitHub are the fastest professional routes.</p>
            </div>
            <div className={styles.contactActions}>
              <ContactLinks />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
