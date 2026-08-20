import type { CaseStudyContent } from "./schema";

export const aidForPalestineCaseStudy = {
  projectSlug: "aid-for-palestine",
  presentation: "afp",
  seo: {
    title: "Aid For Palestine Flutter Systems Case Study",
    description:
      "A privacy-safe Flutter systems case study spanning beneficiary stories, donor journeys, identity verification, donations, wallet withdrawals, and messaging.",
  },
  hero: {
    eyebrow: "Humanitarian systems case study · approved demo data",
    statement:
      "A two-sided aid platform coordinating public stories, donor action, beneficiary verification, wallet state, withdrawals, and direct communication.",
    images: [
      {
        src: "/projects/aid-for-palestine/fundraiser-discovery.webp",
        alt: "Aid For Palestine fundraiser discovery using approved demonstration content",
        width: 375,
        height: 812,
        caption: "Donors discover beneficiary stories and visible fundraising progress.",
      },
      {
        src: "/projects/aid-for-palestine/story-detail.webp",
        alt: "Aid For Palestine story detail and donation action using approved demonstration content",
        width: 375,
        height: 1051,
        caption: "A story carries context, progress, updates, and the donation action.",
      },
    ],
  },
  snapshot: {
    productType: "Humanitarian fundraising and beneficiary-management platform",
    responsibilities:
      "End-to-end Flutter delivery across donor, beneficiary, verification, donation, wallet, withdrawal, messaging, and support journeys.",
    engineeringAreas:
      "Multi-actor state, REST integration, real-time chat, fundraising, identity verification, wallet and bank-account workflows.",
  },
  challenge: {
    eyebrow: "The system challenge",
    title: "Different actors share one high-consequence state machine.",
    paragraphs: [
      "Beneficiaries need to create and maintain a credible story, complete identity verification, receive donations, and manage withdrawal details. Donors need to understand stories, follow updates, and act with confidence. Support and messaging connect the two sides when static state is not enough.",
      "The engineering challenge is coordination: identity, story status, fundraising progress, wallet activity, and withdrawal readiness must remain understandable across several roles and product surfaces.",
    ],
  },
  ownership: {
    eyebrow: "Ownership and responsibility",
    title: "Full-build mobile ownership across the actor and state model.",
    introduction:
      "The canonical manifest records end-to-end Flutter ownership. Publication remains restricted to selected, re-encoded derivatives of audit-approved demo screenshots; no original AFP file, archive, APK, credential, or client implementation detail is public.",
    areas: [
      {
        title: "Beneficiary journey",
        detail:
          "Connect story creation, updates, identity verification, wallet status, bank details, and withdrawal review.",
      },
      {
        title: "Donor journey",
        detail:
          "Support story discovery, detail comprehension, donation context, QR fundraising, and visible progress.",
      },
      {
        title: "Communication",
        detail:
          "Integrate real-time messaging and technical-support surfaces into the wider aid workflow.",
      },
      {
        title: "Cross-platform delivery",
        detail:
          "Carry the private-client Flutter product across its recorded iOS and Android scope.",
      },
    ],
  },
  approach: {
    eyebrow: "Systems approach",
    title: "Organize the product around actors, gates, and recoverable states.",
    introduction:
      "The mobile surface is legible when each actor can see what they may do now, which gate remains, and where completed state can be recovered later.",
    stages: [
      {
        label: "Beneficiary",
        detail: "Creates a story, verifies identity, receives support, and manages withdrawals.",
      },
      {
        label: "Donor",
        detail: "Discovers stories, reviews progress, donates, follows updates, and communicates.",
      },
      {
        label: "Trust gates",
        detail:
          "Identity and bank-account steps separate story visibility from withdrawal readiness.",
      },
      {
        label: "Shared state",
        detail:
          "Fundraising progress, wallet entries, updates, and messages carry context over time.",
      },
    ],
    evidenceBoundary:
      "Flutter, REST API, real-time chat, fundraising, the named product workflows, and full mobile ownership are supported. Payment-provider, backend-topology, security-control, and operational-impact details are not documented.",
  },
  flow: {
    id: "aid-system-flow",
    eyebrow: "Beneficiary system flow",
    title: "A public story becomes verified, funded, and withdrawable state.",
    introduction:
      "The sequence focuses on system responsibility rather than a decorative screen tour. Every image is a renamed WebP derivative of approved demonstration data.",
    steps: [
      {
        number: "01",
        title: "Create the story",
        detail:
          "Capture the need, funding goal, and supporting image while allowing a draft state.",
        image: {
          src: "/projects/aid-for-palestine/story-creation.webp",
          alt: "Aid For Palestine beneficiary story creation form",
          width: 358,
          height: 900,
          caption: "Story creation begins the beneficiary-side state model.",
        },
      },
      {
        number: "02",
        title: "Complete the identity gate",
        detail: "Provide identity-document and selfie inputs before donations can be withdrawn.",
        image: {
          src: "/projects/aid-for-palestine/identity-verification.webp",
          alt: "Aid For Palestine identity verification upload workflow",
          width: 410,
          height: 907,
          caption: "Verification is an explicit prerequisite, not an invisible side effect.",
        },
      },
      {
        number: "03",
        title: "Recover wallet state",
        detail: "Review incoming support and withdrawal entries with distinct transaction status.",
        image: {
          src: "/projects/aid-for-palestine/beneficiary-wallet.webp",
          alt: "Aid For Palestine beneficiary wallet using approved demonstration values",
          width: 375,
          height: 812,
          caption: "Wallet entries retain fundraising and withdrawal context.",
        },
      },
      {
        number: "04",
        title: "Review the withdrawal",
        detail:
          "Collect bank-routing context, acknowledgements, fees, and remaining balance before submission.",
        image: {
          src: "/projects/aid-for-palestine/withdrawal-review.webp",
          alt: "Aid For Palestine withdrawal review with empty demonstration fields",
          width: 375,
          height: 1286,
          caption: "Financial details and deductions are reviewed before commitment.",
        },
      },
    ],
  },
  decisionsIntroduction: {
    eyebrow: "Systems decisions",
    title: "Make trust gates and durable state visible across actors.",
    description:
      "The decisions are tied to approved interface evidence and deliberately avoid undocumented backend or security claims.",
  },
  decisions: [
    {
      title: "Separate story publication from withdrawal readiness",
      context:
        "A beneficiary can communicate a need before every financial prerequisite is complete.",
      decision: "Represent identity verification as a visible gate for receiving withdrawals.",
      why: "The user can understand both the value already available and the requirement still blocking the next financial action.",
    },
    {
      title: "Keep fundraising progress recoverable",
      context: "Stories, donations, updates, and wallet events evolve over time.",
      decision: "Retain progress and transaction state in dedicated story and wallet surfaces.",
      why: "Neither actor has to rely on a one-time confirmation to understand the current state.",
    },
    {
      title: "Review financial commitments explicitly",
      context:
        "Withdrawal details include identity, routing, fee, balance, and responsibility implications.",
      decision: "Show acknowledgements and a deduction summary before submission.",
      why: "The beneficiary can inspect the consequence of the action before committing.",
    },
    {
      title: "Provide a communication escape hatch",
      context:
        "Humanitarian cases and support needs cannot always be resolved through static forms.",
      decision: "Include messaging and technical-support routes alongside structured workflows.",
      why: "Users retain a direct path when the prescribed state flow is insufficient.",
    },
  ],
  resilience: {
    eyebrow: "Privacy and publication",
    title: "Deep product evidence without exposing private-client source material.",
    introduction:
      "The AFP privacy audit confirms the supplied screenshots use intentional demo/test data. Publication is still minimized to the exact screens needed for this case study.",
    states: [
      {
        title: "Immutable originals",
        detail: "All files under source-assets/AFP remain private source material.",
      },
      {
        title: "Curated derivatives",
        detail:
          "Only renamed, resized, re-encoded WebP outputs live in the public project directory.",
      },
      {
        title: "Demo-data disclosure",
        detail: "Captions and alt text identify demonstration values where that context matters.",
      },
      {
        title: "Private-client framing",
        detail:
          "No public product link, client system detail, archive, APK, or credential is exposed.",
      },
    ],
    evidenceBoundary:
      "No real beneficiary identity, live bank detail, secret, payment-provider implementation, security certification, donation metric, or humanitarian-impact metric is claimed.",
  },
  technologies: [
    { purpose: "Mobile product", items: ["Flutter", "Dart"] },
    { purpose: "Integration", items: ["REST API", "Real-Time Chat"] },
    { purpose: "Product domain", items: ["Fundraising", "Beneficiary Management"] },
    { purpose: "Delivery", items: ["iOS", "Android"] },
  ],
  gallery: {
    eyebrow: "Communication evidence",
    title: "Structured state is supported by a direct conversation path.",
    introduction:
      "The approved messages screen adds evidence for the real-time communication responsibility without exposing a conversation transcript.",
    images: [
      {
        src: "/projects/aid-for-palestine/support-messages.webp",
        alt: "Aid For Palestine messages list using approved demonstration identities",
        width: 375,
        height: 812,
        caption: "Messaging remains available beside the structured aid workflow.",
      },
    ],
  },
  release: {
    eyebrow: "Private-client boundary",
    title: "Demonstrable, but not publicly distributed here.",
    paragraphs: [
      "Aid For Palestine is recorded as a private-client iOS and Android Flutter product with full-build mobile ownership and no authorized public product link.",
      "This page publishes only a minimal, audited derivative set. The source directory and non-image artifacts remain outside the public application.",
    ],
  },
  outcome: {
    eyebrow: "Factual outcome",
    title: "A multi-actor aid system carried across its critical mobile states.",
    summary:
      "The defensible result is a cross-platform Flutter product connecting beneficiary onboarding and verification with donor discovery, fundraising state, wallet withdrawals, and communication.",
    evidence: [
      "Confirmed end-to-end Flutter ownership",
      "Beneficiary and donor journeys",
      "Identity, wallet, bank, and withdrawal workflows",
      "Audit-approved demo-only publication",
    ],
  },
} as const satisfies CaseStudyContent;
