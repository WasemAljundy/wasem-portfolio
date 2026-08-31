import type { CaseStudyContent } from "./schema";

export const eisalCaseStudy = {
  projectSlug: "eisal",
  presentation: "eisal",
  seo: {
    title: "Eisal Digital Document Workflow Case Study",
    description:
      "A business-product case study covering Eisal's receipt, invoice, warranty, localization, theme, and structured record-management workflows.",
  },
  hero: {
    eyebrow: "Business workflow system",
    statement:
      "A mobile record system where receipts, invoices, and warranties remain organized, readable, and useful across language and theme contexts.",
    images: [
      {
        src: "/projects/eisal/invoice-workflow.webp",
        alt: "Eisal multilingual invoice organization screen with demonstration entries",
        width: 760,
        height: 1647,
        caption: "Approved product evidence · structured invoice workflow",
      },
    ],
  },
  snapshot: {
    productType: "Digital receipt, invoice, and warranty organizer",
    responsibilities: "Full mobile product build",
    engineeringAreas: "Record workflows · localization · themes · notifications",
  },
  challenge: {
    eyebrow: "Workflow challenge",
    title: "Turn several document lifecycles into one dependable mental model.",
    paragraphs: [
      "Receipts, invoices, and warranties share the need for structured records, but they are not interchangeable. Each carries different information and follow-up expectations. Eisal needed a coherent product language without erasing those distinctions.",
      "The public story is limited to the supplied interface evidence and CV-supported Flutter, REST API, and localization scope. It does not claim OCR, accounting compliance, banking integrations, enterprise customers, metrics, or undocumented backend architecture.",
    ],
  },
  ownership: {
    eyebrow: "Full-build ownership",
    title: "The whole mobile workflow, not a collection of screens.",
    introduction:
      "Wasem confirmed full-build ownership. The responsibility is presented through the product surface: record organization, multilingual presentation, theme parity, notifications, and account-aware states.",
    areas: [
      {
        title: "Record architecture",
        detail:
          "Keep receipts, invoices, and warranties distinct while preserving a shared organizational model.",
      },
      {
        title: "Workflow continuity",
        detail:
          "Carry users from record discovery into detail and follow-up states without losing context.",
      },
      {
        title: "Localization",
        detail:
          "Support a multilingual product structure without treating translated copy as an afterthought.",
      },
      {
        title: "Theme parity",
        detail:
          "Maintain the same information hierarchy across light and dark presentation systems.",
      },
    ],
  },
  flow: {
    id: "document-journey",
    eyebrow: "Document journey",
    title: "Organize, inspect, and return to the record that matters.",
    introduction:
      "The core journey treats each document as a durable record rather than a transient notification.",
    steps: [
      {
        number: "01",
        title: "Enter the record space",
        detail: "Start from a structured view of the user's available documents.",
      },
      {
        number: "02",
        title: "Distinguish the document type",
        detail: "Preserve the difference between receipts, invoices, and warranty records.",
      },
      {
        number: "03",
        title: "Inspect the detail",
        detail: "Expose the information needed to understand and revisit the record.",
      },
      {
        number: "04",
        title: "Return through notifications and organization",
        detail: "Keep relevant records findable as the collection grows.",
      },
      {
        number: "05",
        title: "Preserve hierarchy across themes",
        detail:
          "The dark surface retains the same product structure rather than becoming a separate visual concept.",
        image: {
          src: "/projects/eisal/dark-mode-insights.webp",
          alt: "Eisal dark theme insights interface with demonstration values",
          width: 680,
          height: 1473,
          caption: "Approved product evidence · dark-mode information parity",
        },
      },
    ],
  },
  decisionsIntroduction: {
    eyebrow: "System decisions",
    title: "Make business records feel consistent without making them generic.",
    description:
      "The decisions below stay at the supported product and mobile-engineering boundary.",
  },
  decisions: [
    {
      title: "Share structure, preserve record identity",
      context: "Several document types coexist in one product.",
      decision:
        "Use a consistent organizational language while retaining type-specific labels and detail.",
      why: "Users can transfer what they learn without confusing one record lifecycle for another.",
    },
    {
      title: "Treat localization as layout input",
      context: "The product supports multilingual experiences.",
      decision: "Keep information order and labels resilient across language contexts.",
      why: "Core workflows remain understandable rather than merely translated.",
    },
    {
      title: "Hold theme systems to equal evidence",
      context: "Light and dark modes expose the same business information.",
      decision: "Preserve hierarchy, contrast, and state clarity across both themes.",
      why: "Theme choice does not change what users can understand or complete.",
    },
  ],
  resilience: {
    eyebrow: "Product states",
    title: "A record system must explain what exists and what happens next.",
    introduction:
      "Eisal's supported surface includes organized records, account-aware views, notifications, and paired visual themes.",
    states: [
      { title: "Organized records", detail: "Document types remain visible and distinguishable." },
      {
        title: "Account context",
        detail: "User-facing states keep records associated with the correct product context.",
      },
      {
        title: "Notification return paths",
        detail: "Follow-up signals lead back into structured record views.",
      },
      {
        title: "Light and dark parity",
        detail: "Information remains readable across both approved themes.",
      },
    ],
    evidenceBoundary:
      "No OCR pipeline, accounting certification, bank connection, enterprise integration, or server topology is claimed.",
  },
  technologies: [
    { purpose: "Mobile product", items: ["Flutter"] },
    { purpose: "Service integration", items: ["REST API"] },
    { purpose: "Experience system", items: ["Localization"] },
  ],
  release: {
    eyebrow: "Private-client context",
    title: "Production-shaped evidence, deliberately bounded.",
    paragraphs: [
      "Eisal is recorded as a private-client iOS and Android product. Approved derivatives demonstrate the workflow and theme system, while the portfolio exposes no private destination or unsupported operational claim.",
    ],
  },
  outcome: {
    eyebrow: "Supported outcome",
    title: "One coherent system for several document journeys.",
    summary:
      "The product evidence shows receipts, invoices, warranties, notifications, localization, and themes working as parts of one organized mobile experience.",
    evidence: [
      "Full-build mobile ownership confirmed by Wasem",
      "Structured receipt, invoice, and warranty workflows",
      "CV-supported Flutter, REST API, and localization scope",
      "Approved light and dark product evidence",
    ],
  },
  nextProjectSlug: "gader",
} as const satisfies CaseStudyContent;
