import type { Project, ProjectLinkType } from "@/content/projects";

type InternalProjectAction = {
  kind: "internal";
  href: `/work/${string}`;
  label: "Read case study" | "View project";
  cursorLabel: "READ CASE STUDY" | "READ CONTRIBUTION" | "VIEW PROJECT";
};

type ExternalProjectAction = {
  kind: "external";
  href: string;
  label: string;
  cursorLabel: string;
};

export type ProjectAction = InternalProjectAction | ExternalProjectAction;

const externalActionLabels: Record<ProjectLinkType, { label: string; cursorLabel: string }> = {
  appStore: { label: "View on App Store", cursorLabel: "OPEN APP STORE" },
  googlePlay: { label: "View on Google Play", cursorLabel: "OPEN GOOGLE PLAY" },
  github: { label: "View repository", cursorLabel: "VIEW REPOSITORY" },
  live: { label: "Visit live product", cursorLabel: "VISIT PRODUCT" },
};

export function getProjectAction(project: Project): ProjectAction | undefined {
  if (project.caseStudyEligible) {
    const isDeepCaseStudy = project.deepCaseStudyPositioning;
    return {
      kind: "internal",
      href: `/work/${project.slug}`,
      label: isDeepCaseStudy ? "Read case study" : "View project",
      cursorLabel:
        project.slug === "eureeca"
          ? "READ CONTRIBUTION"
          : isDeepCaseStudy
            ? "READ CASE STUDY"
            : "VIEW PROJECT",
    };
  }

  const link = project.links[0];
  if (!link) return undefined;
  return {
    kind: "external",
    href: link.href,
    ...externalActionLabels[link.type],
  };
}
