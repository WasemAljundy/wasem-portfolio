"use client";

import { useEffect, useState } from "react";

import type { CaseStudySection } from "@/content/case-studies";

import styles from "../case-study.module.css";

export function CaseStudyNavigator({ sections }: { sections: readonly CaseStudySection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const targets = sections
      .map(({ id }) => document.getElementById(id))
      .filter((target): target is HTMLElement => Boolean(target));

    if (targets.length === 0 || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top);
        const next = visible[0]?.target.id;
        if (next) setActiveId(next);
      },
      { rootMargin: "-24% 0px -64%", threshold: [0, 0.2, 0.6] },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className={styles.caseNavigator} aria-label="Case study sections">
      <div className={`${styles.caseNavigatorInner} container`}>
        <span className={styles.caseNavigatorLabel}>In this study</span>
        <ol>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                aria-current={activeId === section.id ? "location" : undefined}
                href={`#${section.id}`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
