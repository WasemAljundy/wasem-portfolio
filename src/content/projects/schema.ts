export const projectStatuses = ["live", "private-client", "portfolio-only"] as const;
export const projectTiers = ["featured", "case-study", "selected", "archive"] as const;
export const ownershipTypes = ["full-build", "team-build"] as const;
export const visibilityTypes = ["public", "demo-approved", "private-summary", "withheld"] as const;
export const clientPrivacyTypes = [
  "public-product",
  "private-client-summary",
  "private-client-demo",
  "portfolio-only",
] as const;
export const projectLinkTypes = ["appStore", "googlePlay", "github", "live"] as const;

export type ProjectStatus = (typeof projectStatuses)[number];
export type ProjectTier = (typeof projectTiers)[number];
export type OwnershipType = (typeof ownershipTypes)[number];
export type ProjectVisibility = (typeof visibilityTypes)[number];
export type ClientPrivacy = (typeof clientPrivacyTypes)[number];
export type ProjectLinkType = (typeof projectLinkTypes)[number];

export type ProjectLink = {
  type: ProjectLinkType;
  label: string;
  href: string;
};

export type ProjectCaseStudyContent = {
  overview?: string;
  challenge?: string;
  decisions?: readonly string[];
  outcome?: string;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  domains: readonly string[];
  technologies: readonly string[];
  platforms: readonly string[];
  ownership: OwnershipType;
  ownershipEvidence?: Readonly<Record<string, string>>;
  status: ProjectStatus;
  tier: ProjectTier;
  homepageFeaturePriority: number | null;
  caseStudyEligible: boolean;
  deepCaseStudyPositioning: boolean;
  caseStudyContent?: ProjectCaseStudyContent;
  links: readonly ProjectLink[];
  assetSource: string;
  sourceAssets: readonly string[];
  productionAssets: readonly string[];
  visibility: ProjectVisibility;
  clientPrivacy: ClientPrivacy;
  proofPoints: readonly string[];
};

export type PortfolioOwner = {
  name: string;
  positioning: string;
  cvTitle: string;
  location: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    portfolio: string;
    whatsapp: string;
  };
};

export type WorkIndexCuration = {
  deepCaseStudyOrder: readonly string[];
  selectedProductionOrder: readonly string[];
  archiveOrder: readonly string[];
};

export type PortfolioManifest = {
  version: string;
  owner: PortfolioOwner;
  featuredOrder: readonly string[];
  workIndex: WorkIndexCuration;
  projects: readonly Project[];
};

export class ContentValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ContentValidationError";
  }
}

const linkLabels: Record<ProjectLinkType, string> = {
  appStore: "App Store",
  googlePlay: "Google Play",
  github: "GitHub",
  live: "Live product",
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function assertRecord(value: unknown, path: string): asserts value is Record<string, unknown> {
  if (!isRecord(value)) {
    throw new ContentValidationError(`${path} must be an object.`);
  }
}

function requiredString(value: unknown, path: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new ContentValidationError(`${path} must be a non-empty string.`);
  }
  return value.trim();
}

function stringArray(value: unknown, path: string): string[] {
  if (!Array.isArray(value) || value.some((item) => typeof item !== "string" || !item.trim())) {
    throw new ContentValidationError(`${path} must be an array of non-empty strings.`);
  }
  return value.map((item) => item.trim());
}

function optionalStringArray(value: unknown, path: string): string[] {
  return value === undefined ? [] : stringArray(value, path);
}

function enumValue<const T extends readonly string[]>(
  value: unknown,
  values: T,
  path: string,
): T[number] {
  if (typeof value !== "string" || !values.includes(value)) {
    throw new ContentValidationError(`${path} must be one of: ${values.join(", ")}.`);
  }
  return value as T[number];
}

function optionalBoolean(value: unknown, path: string, fallback: boolean): boolean {
  if (value === undefined) return fallback;
  if (typeof value !== "boolean") {
    throw new ContentValidationError(`${path} must be a boolean.`);
  }
  return value;
}

function parseUrl(value: unknown, path: string): string {
  const href = requiredString(value, path);
  if (/from-cv|placeholder|example\.com/i.test(href)) {
    throw new ContentValidationError(`${path} contains a placeholder destination.`);
  }
  let url: URL;
  try {
    url = new URL(href);
  } catch {
    throw new ContentValidationError(`${path} must be a valid absolute URL.`);
  }
  if (url.protocol !== "https:") {
    throw new ContentValidationError(`${path} must use HTTPS.`);
  }
  return url.toString();
}

function parseLinks(value: unknown, path: string): ProjectLink[] {
  assertRecord(value, path);
  return Object.entries(value).map(([key, href]) => {
    if (!projectLinkTypes.includes(key as ProjectLinkType)) {
      throw new ContentValidationError(`${path}.${key} is not a supported project link type.`);
    }
    const type = key as ProjectLinkType;
    return { type, label: linkLabels[type], href: parseUrl(href, `${path}.${key}`) };
  });
}

function parseEvidence(value: unknown, path: string): Record<string, string> | undefined {
  if (value === undefined) return undefined;
  assertRecord(value, path);
  return Object.fromEntries(
    Object.entries(value).map(([key, entry]) => [key, requiredString(entry, `${path}.${key}`)]),
  );
}

function defaultVisibility(status: ProjectStatus): ProjectVisibility {
  return status === "private-client" ? "private-summary" : "public";
}

function defaultPrivacy(status: ProjectStatus): ClientPrivacy {
  if (status === "private-client") return "private-client-summary";
  if (status === "portfolio-only") return "portfolio-only";
  return "public-product";
}

function parseProject(value: unknown, index: number, featuredOrder: readonly string[]): Project {
  const path = `projects[${index}]`;
  assertRecord(value, path);

  const slug = requiredString(value.slug, `${path}.slug`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new ContentValidationError(`${path}.slug must be lowercase kebab-case.`);
  }

  const status = enumValue(value.status, projectStatuses, `${path}.status`);
  const ownership = enumValue(value.ownership, ownershipTypes, `${path}.ownership`);
  const ownershipEvidence = parseEvidence(value.ownershipEvidence, `${path}.ownershipEvidence`);
  if (ownership === "team-build" && !ownershipEvidence) {
    throw new ContentValidationError(`${path} team-build records require ownershipEvidence.`);
  }

  const visibility =
    value.visibility === undefined
      ? defaultVisibility(status)
      : enumValue(value.visibility, visibilityTypes, `${path}.visibility`);
  if (status === "live" && visibility === "private-summary") {
    throw new ContentValidationError(`${path} cannot be live and private-summary.`);
  }

  const clientPrivacy =
    value.clientPrivacy === undefined
      ? defaultPrivacy(status)
      : enumValue(value.clientPrivacy, clientPrivacyTypes, `${path}.clientPrivacy`);
  if (status !== "private-client" && clientPrivacy.startsWith("private-client")) {
    throw new ContentValidationError(
      `${path} has a private-client classification without private-client status.`,
    );
  }

  const recommendedAssets = optionalStringArray(
    value.recommendedAssets,
    `${path}.recommendedAssets`,
  );
  const sourceAssets = recommendedAssets.filter((asset) => asset.startsWith("source-assets/"));
  const productionAssets = optionalStringArray(value.productionAssets, `${path}.productionAssets`);
  if (productionAssets.some((asset) => !asset.startsWith("/projects/"))) {
    throw new ContentValidationError(`${path}.productionAssets must live below /projects/<slug>/.`);
  }

  const caseStudyEligible = optionalBoolean(value.caseStudy, `${path}.caseStudy`, false);
  const deepCaseStudy = optionalBoolean(
    value.deepCaseStudyPositioning,
    `${path}.deepCaseStudyPositioning`,
    false,
  );
  if (deepCaseStudy && !caseStudyEligible) {
    throw new ContentValidationError(
      `${path} cannot be a deep case study when caseStudy is false.`,
    );
  }

  const priorityIndex = featuredOrder.indexOf(slug);
  return {
    slug,
    title: requiredString(value.name, `${path}.name`),
    shortDescription: requiredString(value.summary, `${path}.summary`),
    longDescription:
      value.longDescription === undefined
        ? undefined
        : requiredString(value.longDescription, `${path}.longDescription`),
    domains: stringArray(value.domain, `${path}.domain`),
    technologies: optionalStringArray(value.technologies, `${path}.technologies`),
    platforms: stringArray(value.platforms, `${path}.platforms`),
    ownership,
    ownershipEvidence,
    status,
    tier: enumValue(value.tier, projectTiers, `${path}.tier`),
    homepageFeaturePriority: priorityIndex === -1 ? null : priorityIndex + 1,
    caseStudyEligible,
    deepCaseStudyPositioning: deepCaseStudy,
    links: parseLinks(value.links, `${path}.links`),
    assetSource: requiredString(value.assetSource, `${path}.assetSource`),
    sourceAssets,
    productionAssets,
    visibility,
    clientPrivacy,
    proofPoints: stringArray(value.proofPoints, `${path}.proofPoints`),
  };
}

export function validatePortfolioManifest(input: unknown): PortfolioManifest {
  assertRecord(input, "manifest");
  assertRecord(input.owner, "manifest.owner");
  assertRecord(input.owner.contact, "manifest.owner.contact");
  assertRecord(input.portfolioStrategy, "manifest.portfolioStrategy");
  assertRecord(input.portfolioStrategy.workIndex, "manifest.portfolioStrategy.workIndex");

  const featuredOrder = stringArray(
    input.portfolioStrategy.featuredOrder,
    "manifest.portfolioStrategy.featuredOrder",
  );
  if (new Set(featuredOrder).size !== featuredOrder.length) {
    throw new ContentValidationError(
      "manifest.portfolioStrategy.featuredOrder contains duplicates.",
    );
  }
  if (!Array.isArray(input.projects)) {
    throw new ContentValidationError("manifest.projects must be an array.");
  }

  const projects = input.projects.map((project, index) =>
    parseProject(project, index, featuredOrder),
  );
  const slugs = projects.map((project) => project.slug);
  if (new Set(slugs).size !== slugs.length) {
    throw new ContentValidationError("manifest.projects contains duplicate slugs.");
  }
  for (const slug of featuredOrder) {
    const project = projects.find((candidate) => candidate.slug === slug);
    if (!project) {
      throw new ContentValidationError(`Featured project ${slug} does not exist.`);
    }
    if (project.tier !== "featured" || !project.caseStudyEligible) {
      throw new ContentValidationError(
        `Featured project ${slug} must be a case-study eligible featured record.`,
      );
    }
  }

  const workIndexSource = input.portfolioStrategy.workIndex;
  const workIndex: WorkIndexCuration = {
    deepCaseStudyOrder: stringArray(
      workIndexSource.deepCaseStudyOrder,
      "manifest.portfolioStrategy.workIndex.deepCaseStudyOrder",
    ),
    selectedProductionOrder: stringArray(
      workIndexSource.selectedProductionOrder,
      "manifest.portfolioStrategy.workIndex.selectedProductionOrder",
    ),
    archiveOrder: stringArray(
      workIndexSource.archiveOrder,
      "manifest.portfolioStrategy.workIndex.archiveOrder",
    ),
  };
  const curatedSlugs = [
    ...workIndex.deepCaseStudyOrder,
    ...workIndex.selectedProductionOrder,
    ...workIndex.archiveOrder,
  ];
  if (new Set(curatedSlugs).size !== curatedSlugs.length) {
    throw new ContentValidationError(
      "manifest.portfolioStrategy.workIndex contains duplicate project slugs.",
    );
  }
  for (const slug of curatedSlugs) {
    if (!projects.some((project) => project.slug === slug)) {
      throw new ContentValidationError(`Work index project ${slug} does not exist.`);
    }
  }
  for (const slug of workIndex.deepCaseStudyOrder) {
    const project = projects.find((candidate) => candidate.slug === slug)!;
    if (!project.caseStudyEligible || !project.deepCaseStudyPositioning) {
      throw new ContentValidationError(
        `Deep work index project ${slug} must be case-study eligible and explicitly positioned as deep.`,
      );
    }
  }
  for (const slug of workIndex.selectedProductionOrder) {
    const project = projects.find((candidate) => candidate.slug === slug)!;
    if (project.status === "portfolio-only" || project.deepCaseStudyPositioning) {
      throw new ContentValidationError(
        `Selected production project ${slug} must be production/private-client work outside the deep group.`,
      );
    }
  }
  for (const slug of workIndex.archiveOrder) {
    const project = projects.find((candidate) => candidate.slug === slug)!;
    if (project.tier !== "archive" || project.status !== "portfolio-only") {
      throw new ContentValidationError(
        `Archive work index project ${slug} must be an archive-tier portfolio-only record.`,
      );
    }
  }
  const publishableSlugs = projects
    .filter((project) => project.visibility !== "withheld")
    .map((project) => project.slug);
  const missingFromIndex = publishableSlugs.filter((slug) => !curatedSlugs.includes(slug));
  if (missingFromIndex.length > 0 || curatedSlugs.length !== publishableSlugs.length) {
    throw new ContentValidationError(
      `Work index must include every publishable project exactly once. Missing: ${missingFromIndex.join(", ") || "none"}.`,
    );
  }

  const contact = input.owner.contact;
  return {
    version: requiredString(input.version, "manifest.version"),
    owner: {
      name: requiredString(input.owner.name, "manifest.owner.name"),
      positioning: requiredString(input.owner.positioning, "manifest.owner.positioning"),
      cvTitle: requiredString(input.owner.cvTitle, "manifest.owner.cvTitle"),
      location: requiredString(input.owner.location, "manifest.owner.location"),
      contact: {
        email: requiredString(contact.email, "manifest.owner.contact.email"),
        linkedin: parseUrl(contact.linkedin, "manifest.owner.contact.linkedin"),
        github: parseUrl(contact.github, "manifest.owner.contact.github"),
        portfolio: parseUrl(contact.portfolio, "manifest.owner.contact.portfolio"),
        whatsapp: parseUrl(contact.whatsapp, "manifest.owner.contact.whatsapp"),
      },
    },
    featuredOrder,
    workIndex,
    projects,
  };
}
