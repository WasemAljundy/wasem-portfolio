export type CaseStudyImage = {
  src: `/projects/${string}.webp`;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

export type CaseStudyNarrative = {
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
};

export type CaseStudyContent = {
  projectSlug: string;
  presentation: "jood" | "sezon" | "eureeca" | "taseese" | "aura" | "eisal" | "gader" | "afp";
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    statement: string;
    images: readonly CaseStudyImage[];
  };
  snapshot: {
    productType: string;
    responsibilities: string;
    engineeringAreas: string;
  };
  challenge: CaseStudyNarrative;
  ownership: {
    eyebrow: string;
    title: string;
    introduction: string;
    areas: readonly { title: string; detail: string }[];
  };
  approach?: {
    eyebrow: string;
    title: string;
    introduction: string;
    stages: readonly { label: string; detail: string }[];
    evidenceBoundary: string;
  };
  flow?: {
    id?: string;
    eyebrow: string;
    title: string;
    introduction: string;
    steps: readonly {
      number: string;
      title: string;
      detail: string;
      image?: CaseStudyImage;
    }[];
  };
  decisions?: readonly {
    title: string;
    context: string;
    decision: string;
    why: string;
    tradeoff?: string;
  }[];
  decisionsIntroduction?: {
    eyebrow: string;
    title: string;
    description: string;
  };
  resilience?: {
    eyebrow: string;
    title: string;
    introduction: string;
    states: readonly { title: string; detail: string }[];
    evidenceBoundary?: string;
  };
  technologies?: readonly { purpose: string; items: readonly string[] }[];
  gallery?: {
    eyebrow: string;
    title: string;
    introduction: string;
    images: readonly CaseStudyImage[];
  };
  release: CaseStudyNarrative;
  outcome: {
    eyebrow: string;
    title: string;
    summary: string;
    evidence: readonly string[];
  };
  nextProjectSlug?: string;
};

export type CaseStudySection = {
  id: string;
  label: string;
};

export function getCaseStudySections(content: CaseStudyContent): CaseStudySection[] {
  return [
    { id: "project-overview", label: "Overview" },
    { id: "product-challenge", label: "Challenge" },
    { id: "project-ownership", label: "Ownership" },
    ...(content.approach ? [{ id: "engineering-approach", label: "Approach" }] : []),
    ...(content.flow ? [{ id: content.flow.id ?? "transaction-flow", label: "Product flow" }] : []),
    ...(content.decisions ? [{ id: "engineering-decisions", label: "Decisions" }] : []),
    ...(content.resilience ? [{ id: "product-states", label: "States" }] : []),
    ...(content.technologies ? [{ id: "technology", label: "Technology" }] : []),
    ...(content.gallery ? [{ id: "product-gallery", label: "Gallery" }] : []),
    { id: "release-context", label: "Release" },
    { id: "case-study-outcome", label: "Outcome" },
  ];
}

export class CaseStudyValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CaseStudyValidationError";
  }
}

function assertText(value: string, path: string) {
  if (!value.trim()) throw new CaseStudyValidationError(`${path} must not be empty.`);
}

function collectImages(content: CaseStudyContent) {
  return [
    ...content.hero.images,
    ...(content.flow?.steps.flatMap((step) => (step.image ? [step.image] : [])) ?? []),
    ...(content.gallery?.images ?? []),
  ];
}

export function validateCaseStudyContent(content: CaseStudyContent): CaseStudyContent {
  assertText(content.projectSlug, "projectSlug");
  assertText(content.seo.title, "seo.title");
  assertText(content.seo.description, "seo.description");
  assertText(content.hero.statement, "hero.statement");
  assertText(content.challenge.title, "challenge.title");
  assertText(content.ownership.title, "ownership.title");
  assertText(content.release.title, "release.title");
  assertText(content.outcome.title, "outcome.title");

  if (content.hero.images.length === 0) {
    throw new CaseStudyValidationError("hero.images must contain at least one image.");
  }
  if (content.ownership.areas.length === 0) {
    throw new CaseStudyValidationError("ownership.areas must contain at least one responsibility.");
  }
  if (content.decisions && content.decisions.length === 0) {
    throw new CaseStudyValidationError("decisions must be omitted rather than empty.");
  }
  if (content.gallery && content.gallery.images.length === 0) {
    throw new CaseStudyValidationError("gallery must be omitted rather than empty.");
  }
  if (content.nextProjectSlug === content.projectSlug) {
    throw new CaseStudyValidationError("nextProjectSlug must reference a different project.");
  }

  const images = collectImages(content);
  const paths = new Set<string>();
  for (const [index, image] of images.entries()) {
    if (!image.src.startsWith(`/projects/${content.projectSlug}/`)) {
      throw new CaseStudyValidationError(
        `image ${index} must live below /projects/${content.projectSlug}/.`,
      );
    }
    if (paths.has(image.src)) {
      throw new CaseStudyValidationError(`image ${image.src} is used more than once.`);
    }
    paths.add(image.src);
    assertText(image.alt, `image ${index}.alt`);
    assertText(image.caption, `image ${index}.caption`);
    if (image.width <= 0 || image.height <= 0) {
      throw new CaseStudyValidationError(`image ${index} requires positive dimensions.`);
    }
  }

  return content;
}
