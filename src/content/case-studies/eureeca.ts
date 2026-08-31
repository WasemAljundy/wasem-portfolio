import type { CaseStudyContent } from "./schema";

export const eureecaCaseStudy = {
  projectSlug: "eureeca",
  presentation: "eureeca",
  seo: {
    title: "Eureeca Flutter Production Contribution",
    description:
      "A factual Flutter contribution case study covering bug resolution and performance work within Eureeca's collaborative production team.",
  },
  hero: {
    eyebrow: "Collaborative FinTech contribution",
    statement:
      "Production Flutter work inside a high-trust private-markets product—focused on resolving defects and improving performance as part of the team.",
    images: [
      {
        src: "/projects/eureeca/private-deals.webp",
        alt: "Official Eureeca store screen presenting private investment opportunities",
        width: 900,
        height: 1600,
        caption: "Private-market discovery presented in the live product.",
      },
      {
        src: "/projects/eureeca/regulated-onboarding.webp",
        alt: "Official Eureeca store screen presenting investor verification",
        width: 760,
        height: 1351,
        caption: "Regulated onboarding makes trust and clarity part of the interface.",
      },
    ],
  },
  snapshot: {
    productType: "Private-markets investment application",
    responsibilities:
      "Collaborative Flutter engineering focused on production bug resolution and performance issues during the Logicteca role.",
    engineeringAreas:
      "Production quality, performance, defect investigation, and contribution within an existing financial product.",
  },
  challenge: {
    eyebrow: "The contribution context",
    title: "Improve a live product without overstating the boundary of the work.",
    paragraphs: [
      "Eureeca is a regulated investment experience for discovering private equity deals and selected IPO opportunities, evaluating information, and tracking a portfolio. That makes reliability and comprehensible state especially important.",
      "The professional record supports a precise contribution: resolving Flutter bugs and performance issues within the production team. It does not support claiming the whole application, its architecture, or its financial infrastructure.",
    ],
  },
  ownership: {
    eyebrow: "Role and responsibility",
    title: "A team contribution, framed at its actual scale.",
    introduction:
      "The value of production engineering is not limited to greenfield ownership. This work required understanding an existing application, finding defects, and improving behavior without disrupting a high-trust journey.",
    areas: [
      {
        title: "Defect resolution",
        detail:
          "Investigate and resolve reported Flutter application bugs within an established production codebase.",
      },
      {
        title: "Performance work",
        detail:
          "Address performance issues supported by the CV rather than inventing unverified benchmark gains.",
      },
      {
        title: "Collaborative delivery",
        detail: "Contribute within the Logicteca product team and existing ownership boundaries.",
      },
      {
        title: "Financial-product care",
        detail:
          "Work in a domain where user trust, clear product state, and regression awareness matter.",
      },
    ],
  },
  approach: {
    eyebrow: "Contribution approach",
    title: "Read the existing system before changing production behavior.",
    introduction:
      "Only the supported working boundary is described: investigate defects, understand their product context, implement targeted Flutter changes, and validate them within the team’s release process.",
    stages: [
      {
        label: "Reproduce",
        detail: "Establish the affected product behavior and its user context.",
      },
      { label: "Trace", detail: "Follow the relevant Flutter path in the existing application." },
      {
        label: "Resolve",
        detail: "Make a focused correction consistent with the established product.",
      },
      {
        label: "Validate",
        detail: "Check the corrected behavior and adjacent production journey.",
      },
    ],
    evidenceBoundary:
      "The record does not specify exact defects, performance metrics, architecture, team size, backend ownership, or release volume. None are inferred here.",
  },
  decisionsIntroduction: {
    eyebrow: "Production judgment",
    title: "The responsible decision is often to change only what the evidence supports.",
    description:
      "These principles explain the contribution boundary without turning undocumented implementation details into claims.",
  },
  decisions: [
    {
      title: "Preserve the established product model",
      context: "The work happened inside an existing collaborative production application.",
      decision:
        "Treat defect and performance work as targeted contributions, not an opportunity to recast ownership.",
      why: "It respects both the product team and the risk profile of a live financial experience.",
    },
    {
      title: "Tie technical work to user-visible risk",
      context:
        "Performance and defects affect comprehension and confidence in high-trust journeys.",
      decision:
        "Evaluate corrections in the context of the affected product path and nearby behavior.",
      why: "A local fix is only valuable when the surrounding experience remains dependable.",
    },
  ],
  resilience: {
    eyebrow: "Trust boundary",
    title: "Financial UX raises the standard for production changes.",
    introduction:
      "Official store evidence shows opportunity discovery and regulated onboarding. Those surfaces make careful state, clear language, and regression awareness consequential.",
    states: [
      {
        title: "Identity and eligibility",
        detail: "Investor onboarding communicates regulated verification as part of access.",
      },
      {
        title: "Deal comprehension",
        detail:
          "Investment opportunities need structured information before a user evaluates them.",
      },
      {
        title: "Production continuity",
        detail: "Bug and performance work must preserve the surrounding live-product journey.",
      },
    ],
    evidenceBoundary:
      "No claim is made about transaction processing, compliance implementation, investment outcomes, or proprietary Eureeca systems.",
  },
  technologies: [
    { purpose: "Verified contribution", items: ["Flutter", "Dart"] },
    { purpose: "Product domain", items: ["FinTech", "Private Markets"] },
    { purpose: "Production platforms", items: ["iOS", "Android"] },
  ],
  release: {
    eyebrow: "Production context",
    title: "Contribution to an application with a live public destination.",
    paragraphs: [
      "Eureeca is recorded as a live iOS and Android product. The supplied public destination is its Google Play listing.",
      "Wasem’s contribution remains deliberately narrower: production Flutter bug resolution and performance work as part of the team.",
    ],
  },
  outcome: {
    eyebrow: "Factual outcome",
    title: "Verified production contribution without inflated ownership.",
    summary:
      "The defensible result is meaningful engineering work inside a live FinTech product, demonstrating the ability to enter an existing codebase and improve production quality collaboratively.",
    evidence: [
      "CV-supported bug resolution",
      "CV-supported performance work",
      "Collaborative production role",
      "Live Google Play destination",
    ],
  },
  nextProjectSlug: "taseese",
} as const satisfies CaseStudyContent;
