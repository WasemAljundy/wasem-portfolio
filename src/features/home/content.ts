import type { Project, ProjectStatus } from "@/content/projects";

export type ChapterTone = "jood" | "eureeca" | "taseese" | "aura" | "eisal" | "gader";

export type ProjectVisual = {
  src: `/projects/${string}.webp`;
  alt: string;
  width: number;
  height: number;
};

export type ChapterPresentation = {
  tone: ChapterTone;
  index: string;
  overline: string;
  proofPoint: string;
  proofDetail: string;
  caseStudyLabel: string;
  visuals: readonly ProjectVisual[];
};

const statusLabels: Record<ProjectStatus, string> = {
  live: "Live",
  "private-client": "Private Client",
  "portfolio-only": "Portfolio Only",
};

export const ownershipLabels = {
  "full-build": "Full build",
  "team-build": "Team build",
} as const;

export function getStatusLabel(status: ProjectStatus) {
  return statusLabels[status];
}

const chapterDefinitions = {
  jood: {
    tone: "jood",
    index: "01",
    overline: "Transaction chapter",
    proofPoint: "Rich transactional user flows",
    proofDetail:
      "Offer discovery, booking, payment, QR interaction, and account flows form one cross-platform product journey.",
    caseStudyLabel: "See architecture and release story",
    visuals: [
      {
        src: "/projects/jood/browse-offers.webp",
        alt: "Jood mobile interface showing restaurant offer discovery",
        width: 920,
        height: 1991,
      },
      {
        src: "/projects/jood/secure-payment.webp",
        alt: "Jood mobile interface showing a secure booking payment step",
        width: 760,
        height: 1645,
      },
    ],
  },
  eureeca: {
    tone: "eureeca",
    index: "02",
    overline: "Production contribution",
    proofPoint: "CV-supported Flutter bug and performance contributions",
    proofDetail:
      "Contribution is presented explicitly as collaborative production engineering within a high-trust financial product.",
    caseStudyLabel: "Read my contribution",
    visuals: [
      {
        src: "/projects/eureeca/private-deals.webp",
        alt: "Official Eureeca store artwork showing private deal discovery",
        width: 900,
        height: 1600,
      },
      {
        src: "/projects/eureeca/regulated-onboarding.webp",
        alt: "Official Eureeca store artwork showing regulated investor verification",
        width: 760,
        height: 1351,
      },
    ],
  },
  taseese: {
    tone: "taseese",
    index: "03",
    overline: "Structured content",
    proofPoint: "Assessment flows",
    proofDetail:
      "Learning stages resolve into subjects, nested content, quizzes, and visible learner progression.",
    caseStudyLabel: "Explore the learning system",
    visuals: [
      {
        src: "/projects/taseese/subject-hierarchy.webp",
        alt: "Official Taseese store artwork showing a subject-based learning dashboard",
        width: 760,
        height: 1647,
      },
      {
        src: "/projects/taseese/assessment-progress.webp",
        alt: "Official Taseese store artwork showing assessment and learner progress reports",
        width: 680,
        height: 1474,
      },
    ],
  },
  "aura-fit": {
    tone: "aura",
    index: "04",
    overline: "Integration chapter",
    proofPoint: "Google Fit / Apple Health integration",
    proofDetail:
      "Activity data, personalized planning, food analysis, and progress tracking meet in one AI-assisted fitness experience.",
    caseStudyLabel: "See the integration story",
    visuals: [
      {
        src: "/projects/aura-fit/daily-dashboard.webp",
        alt: "Aura Fit daily activity and nutrition dashboard",
        width: 760,
        height: 1647,
      },
      {
        src: "/projects/aura-fit/food-analysis.webp",
        alt: "Aura Fit food analysis with calorie and macro estimates",
        width: 680,
        height: 1473,
      },
      {
        src: "/projects/aura-fit/workout-library.webp",
        alt: "Aura Fit workout library with exercise choices",
        width: 680,
        height: 1473,
      },
    ],
  },
  eisal: {
    tone: "eisal",
    index: "05",
    overline: "System depth",
    proofPoint: "Document and warranty management",
    proofDetail:
      "Multilingual invoice organization, warranty workflows, notifications, and paired themes demonstrate product-system breadth.",
    caseStudyLabel: "Review the workflow system",
    visuals: [
      {
        src: "/projects/eisal/invoice-workflow.webp",
        alt: "Eisal multilingual invoice organization screen with demonstration entries",
        width: 760,
        height: 1647,
      },
      {
        src: "/projects/eisal/dark-mode-insights.webp",
        alt: "Eisal dark theme insights interface with demonstration values",
        width: 680,
        height: 1473,
      },
    ],
  },
  gader: {
    tone: "gader",
    index: "06",
    overline: "Communication chapter",
    proofPoint: "Real-time communication workflows",
    proofDetail:
      "Expert selection and consultation requests extend into supported messaging, voice, and video communication paths.",
    caseStudyLabel: "Follow the consultation journey",
    visuals: [
      {
        src: "/projects/gader/consultation-categories.webp",
        alt: "Official Gader store artwork showing volunteer consultation categories",
        width: 760,
        height: 1351,
      },
      {
        src: "/projects/gader/expert-profile.webp",
        alt: "Official Gader store artwork showing a volunteer expert profile",
        width: 680,
        height: 1209,
      },
    ],
  },
} as const satisfies Record<string, ChapterPresentation>;

export function getChapterPresentation(project: Project): ChapterPresentation {
  const presentation = chapterDefinitions[project.slug as keyof typeof chapterDefinitions];
  if (!presentation) {
    throw new Error(`No homepage chapter presentation exists for ${project.slug}.`);
  }
  if (!project.proofPoints.includes(presentation.proofPoint)) {
    throw new Error(`Homepage proof for ${project.slug} has drifted from the canonical manifest.`);
  }
  return presentation;
}

export const capabilityBridge = [
  {
    title: "Architecture",
    project: "Jood + Taseese",
    detail: "Full-build responsibility across transactional and structured-content products.",
  },
  {
    title: "Product & data flows",
    project: "Jood",
    detail: "Connected browse, booking, payment, QR, and account journeys.",
  },
  {
    title: "Quality & performance",
    project: "Eureeca",
    detail: "CV-supported production bug resolution and performance work within a team.",
  },
  {
    title: "Store delivery",
    project: "Across featured work",
    detail: "iOS and Android products carried through release and post-launch responsibility.",
  },
] as const;
