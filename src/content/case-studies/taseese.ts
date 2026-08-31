import type { CaseStudyContent } from "./schema";

export const taseeseCaseStudy = {
  projectSlug: "taseese",
  presentation: "taseese",
  seo: {
    title: "Taseese EdTech Product Engineering Case Study",
    description:
      "A structured EdTech case study covering Taseese's learning hierarchy, assessment journey, learner progression, and full-build mobile ownership.",
  },
  hero: {
    eyebrow: "Structured EdTech product",
    statement:
      "A long-lived learning product shaped around hierarchy: stages become classes, classes become subjects, and subjects resolve into content and assessment.",
    images: [
      {
        src: "/projects/taseese/subject-hierarchy.webp",
        alt: "Taseese learning dashboard organized by subjects",
        width: 760,
        height: 1647,
        caption: "Official product evidence · subject-led learning structure",
      },
    ],
  },
  snapshot: {
    productType: "Structured learning and assessment product",
    responsibilities: "Full mobile product build",
    engineeringAreas: "Content hierarchy · assessment flows · learner progress",
  },
  challenge: {
    eyebrow: "Product context",
    title: "Make a deep education hierarchy feel navigable, not institutional.",
    paragraphs: [
      "Taseese organizes a substantial learning surface: educational stages, classes, subjects, nested sections, lessons, quizzes, and performance progression. The challenge is not merely showing content; it is preserving a learner's place while the hierarchy becomes progressively more specific.",
      "The public evidence supports the product structure and assessment journey. It does not establish student counts, institutional partnerships, learning outcomes, analytics, or undocumented server architecture, so this story stays focused on the visible mobile system.",
    ],
  },
  ownership: {
    eyebrow: "Full-build ownership",
    title: "One product surface, carried from structure to release.",
    introduction:
      "Wasem confirmed full-build responsibility for the mobile product. The evidence supports ownership of the learning experience without extending that claim to undocumented services or institutional operations.",
    areas: [
      {
        title: "Information structure",
        detail:
          "Shape the stage, class, subject, and nested-section model into a coherent mobile path.",
      },
      {
        title: "Learning progression",
        detail:
          "Keep lesson access and progress evidence understandable as learners move through the hierarchy.",
      },
      {
        title: "Assessment experience",
        detail:
          "Connect quiz entry, completion, and performance views to the surrounding learning context.",
      },
      {
        title: "Apple-platform delivery",
        detail: "Deliver and maintain the production product across iPhone and iPad surfaces.",
      },
    ],
  },
  approach: {
    eyebrow: "Education structure",
    title: "A hierarchy learners can read one decision at a time.",
    introduction:
      "The product is most legible when each level answers a single question before revealing the next.",
    stages: [
      { label: "Stage", detail: "Establish the learner's broad educational level." },
      { label: "Class", detail: "Narrow the context without losing the selected stage." },
      { label: "Subject", detail: "Turn curriculum structure into a recognizable destination." },
      { label: "Content", detail: "Expose nested learning material and assessment in context." },
    ],
    evidenceBoundary:
      "The hierarchy and product states are visible in approved product imagery. No curriculum-generation, analytics, or backend implementation is inferred.",
  },
  flow: {
    id: "learning-journey",
    eyebrow: "Product journey",
    title: "From orientation to visible progress.",
    introduction:
      "The learning journey keeps content discovery and assessment connected rather than treating quizzes as a separate product.",
    steps: [
      {
        number: "01",
        title: "Choose a learning stage",
        detail: "Begin with the broadest meaningful context.",
      },
      {
        number: "02",
        title: "Resolve class and subject",
        detail: "Move through a predictable hierarchy toward relevant material.",
      },
      {
        number: "03",
        title: "Open structured content",
        detail: "Keep nested sections and lessons tied to the selected subject.",
      },
      {
        number: "04",
        title: "Enter an assessment",
        detail: "Carry the learning context into the quiz journey.",
      },
      {
        number: "05",
        title: "Review progression",
        detail:
          "Return completion and performance evidence to the learner in a structured summary.",
        image: {
          src: "/projects/taseese/assessment-progress.webp",
          alt: "Taseese assessment and learner progress report",
          width: 680,
          height: 1474,
          caption: "Official product evidence · assessment and progression states",
        },
      },
    ],
  },
  decisionsIntroduction: {
    eyebrow: "Engineering decisions",
    title: "Decisions that protect orientation.",
    description:
      "These decisions describe supported product behavior, not undocumented implementation details.",
  },
  decisions: [
    {
      title: "Let hierarchy carry meaning",
      context: "Education content spans several nested levels.",
      decision:
        "Keep each navigation level explicit instead of flattening all material into one feed.",
      why: "A learner can understand both the current destination and the path that produced it.",
      tradeoff: "More deliberate steps are accepted in exchange for stronger orientation.",
    },
    {
      title: "Keep assessment attached to content",
      context: "Quizzes are part of learning progression rather than isolated utilities.",
      decision: "Present assessment entry and results within the surrounding subject journey.",
      why: "Progress evidence retains educational context.",
    },
    {
      title: "Design for both iPhone and iPad",
      context: "The product ships on iOS and iPadOS.",
      decision: "Treat readable hierarchy and adaptable content width as product requirements.",
      why: "Dense educational structure must remain legible across both delivery surfaces.",
    },
  ],
  resilience: {
    eyebrow: "Product states",
    title: "Progress remains visible across the learning loop.",
    introduction:
      "The supported product evidence distinguishes where a learner is, what can be opened next, and how assessment activity is reflected afterward.",
    states: [
      {
        title: "Structured discovery",
        detail: "Stage, class, and subject context precede detailed content.",
      },
      {
        title: "Assessment in progress",
        detail: "Quiz activity remains attached to its learning destination.",
      },
      {
        title: "Progress review",
        detail: "Performance summaries return evidence of learner progression.",
      },
    ],
    evidenceBoundary:
      "No offline strategy, synchronization model, analytics pipeline, or learning-outcome metric is claimed.",
  },
  release: {
    eyebrow: "Production context",
    title: "A maintained App Store learning product.",
    paragraphs: [
      "Taseese is recorded as a live, long-lived iOS and iPadOS product with full-build ownership. The verified App Store destination remains the public release reference.",
    ],
  },
  outcome: {
    eyebrow: "Supported outcome",
    title: "A complete learning path with structure intact.",
    summary:
      "The resulting product connects educational hierarchy, learning content, assessment, and progression in one coherent mobile experience.",
    evidence: [
      "Full-build mobile ownership confirmed by Wasem",
      "Stage, class, subject, and nested content structure",
      "Assessment and learner-progress product flows",
      "Live iOS and iPadOS release",
    ],
  },
  nextProjectSlug: "aura-fit",
} as const satisfies CaseStudyContent;
