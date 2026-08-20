import type { CaseStudyContent } from "./schema";

export const auraFitCaseStudy = {
  projectSlug: "aura-fit",
  presentation: "aura",
  seo: {
    title: "Aura Fit Flutter Health Integration Case Study",
    description:
      "A private-client Flutter case study covering personalized fitness planning, food analysis, Google Fit and Apple Health integration, and progress tracking.",
  },
  hero: {
    eyebrow: "Personalization and integration case study",
    statement:
      "A fitness product that turns onboarding context, activity data, planned workouts, food analysis, and progress into one daily mobile experience.",
    images: [
      {
        src: "/projects/aura-fit/daily-dashboard.webp",
        alt: "Aura Fit daily dashboard with activity nutrition and workout summaries",
        width: 760,
        height: 1647,
        caption: "Daily activity and planning meet in one product surface.",
      },
      {
        src: "/projects/aura-fit/food-analysis.webp",
        alt: "Aura Fit demonstration food analysis with calorie and macro estimates",
        width: 680,
        height: 1473,
        caption: "Food input is translated into estimated nutrition context.",
      },
    ],
  },
  snapshot: {
    productType: "AI-assisted fitness and personal planning application",
    responsibilities:
      "End-to-end Flutter delivery across personalized onboarding, workout and meal surfaces, health-data integration, and progress tracking.",
    engineeringAreas:
      "Personalization, activity data, Google Fit, Apple Health, food analysis, workout guidance, and progress state.",
  },
  challenge: {
    eyebrow: "The product challenge",
    title: "Make several sources of personal context feel like one daily plan.",
    paragraphs: [
      "Aura Fit spans onboarding inputs, workout preferences, meal planning, activity data, food analysis, and progress. The product challenge is not simply showing each feature—it is keeping the user oriented as those inputs shape what appears next.",
      "Health and fitness information also demands careful language. The application can organize estimates and personal activity context without turning them into unsupported medical advice or guaranteed outcomes.",
    ],
  },
  ownership: {
    eyebrow: "Ownership and responsibility",
    title: "Full-build responsibility across a deeply personalized mobile surface.",
    introduction:
      "The supplied record supports end-to-end Flutter ownership and the named integrations. This case study describes the product and integration boundary without claiming medical efficacy or undocumented model infrastructure.",
    areas: [
      {
        title: "Personalized onboarding",
        detail:
          "Collect product-relevant context that can shape workout, meal, and daily planning surfaces.",
      },
      {
        title: "Activity integration",
        detail:
          "Bring supported Google Fit and Apple Health data into the application’s progress experience.",
      },
      {
        title: "AI-assisted product flows",
        detail:
          "Present food analysis and planning support as estimates and product assistance, not clinical conclusions.",
      },
      {
        title: "Cross-platform delivery",
        detail:
          "Carry the private-client Flutter product across its recorded iOS and Android scope.",
      },
    ],
  },
  approach: {
    eyebrow: "Integration approach",
    title: "Keep source data, derived guidance, and user action legible.",
    introduction:
      "The visible product separates what the user supplies, what connected health services provide, what the product estimates, and what action the user can take next.",
    stages: [
      {
        label: "Personal context",
        detail: "Goals and preferences establish the planning context.",
      },
      {
        label: "Connected activity",
        detail: "Google Fit or Apple Health supplies supported activity data.",
      },
      {
        label: "Assisted planning",
        detail: "Workout, meal, and food-analysis surfaces organize next actions.",
      },
      {
        label: "Progress",
        detail: "Daily and completed-workout states make activity recoverable over time.",
      },
    ],
    evidenceBoundary:
      "Flutter, Firebase, AI/ML, Google Fit, Apple Health, iOS, Android, and the visible product journeys are supported. Model architecture and clinical validation are not documented.",
  },
  flow: {
    id: "personalization-flow",
    eyebrow: "Personalized workout flow",
    title: "Move from a broad intention to a completed activity state.",
    introduction:
      "The screenshots show a practical product sequence: choose a training direction, inspect a guided exercise, and retain completion feedback.",
    steps: [
      {
        number: "01",
        title: "Choose a training direction",
        detail:
          "Start from recognizable workout categories rather than an undifferentiated exercise list.",
        image: {
          src: "/projects/aura-fit/training-types.webp",
          alt: "Aura Fit workout categories including chest back legs cardio and arms",
          width: 680,
          height: 1473,
          caption: "Training categories turn intent into a narrower path.",
        },
      },
      {
        number: "02",
        title: "Inspect the exercise",
        detail:
          "Review the movement, visual guidance, and visible effort context before beginning.",
        image: {
          src: "/projects/aura-fit/exercise-detail.webp",
          alt: "Aura Fit exercise detail with visual guidance and start control",
          width: 680,
          height: 1473,
          caption: "Guidance precedes the workout action.",
        },
      },
      {
        number: "03",
        title: "Complete and retain progress",
        detail:
          "Close the workout with a clear completion state and a path back to the exercise list.",
        image: {
          src: "/projects/aura-fit/workout-complete.webp",
          alt: "Aura Fit completed workout confirmation with elapsed activity summary",
          width: 680,
          height: 1473,
          caption: "A distinct end state confirms the completed activity.",
        },
      },
    ],
  },
  decisionsIntroduction: {
    eyebrow: "Health-product decisions",
    title: "Personalize the journey without overstating what the data means.",
    description:
      "The decisions prioritize clarity around inputs, estimates, connected data, and completion state.",
  },
  decisions: [
    {
      title: "Distinguish estimates from outcomes",
      context:
        "Food analysis and personalized planning can appear authoritative in a health-adjacent product.",
      decision: "Describe values as estimates and product guidance rather than medical assessment.",
      why: "It keeps the interface useful without making unsupported health claims.",
    },
    {
      title: "Consolidate daily context",
      context: "Activity, nutrition, and workout information originate from different journeys.",
      decision: "Bring their current state into one daily dashboard.",
      why: "The user can understand the day without reconstructing context across separate features.",
    },
    {
      title: "Close the workout loop explicitly",
      context: "A timer or exercise screen does not by itself prove that progress was retained.",
      decision: "Use a distinct completion state after the activity ends.",
      why: "The user receives clear feedback before returning to the wider product.",
    },
  ],
  resilience: {
    eyebrow: "Safety and evidence boundary",
    title: "Useful fitness context, carefully framed.",
    introduction:
      "The product evidence supports activity integration and AI-assisted fitness experiences. It does not support clinical, diagnostic, or guaranteed-outcome language.",
    states: [
      {
        title: "Source awareness",
        detail: "Connected activity and user-entered context remain distinct inputs.",
      },
      {
        title: "Estimated analysis",
        detail: "Food and calorie information is presented as assistance rather than certainty.",
      },
      {
        title: "Explicit completion",
        detail: "Workout state resolves into visible feedback instead of ending ambiguously.",
      },
      {
        title: "Private-client boundary",
        detail: "No public product link or confidential implementation detail is exposed.",
      },
    ],
    evidenceBoundary:
      "No medical efficacy, diagnostic accuracy, model-performance, weight-loss, or health-outcome claim is made.",
  },
  technologies: [
    { purpose: "Mobile product", items: ["Flutter", "Dart"] },
    { purpose: "Product services", items: ["Firebase", "AI/ML"] },
    { purpose: "Health integration", items: ["Google Fit", "Apple Health"] },
    { purpose: "Delivery", items: ["iOS", "Android"] },
  ],
  gallery: {
    eyebrow: "Workout system evidence",
    title: "A broader library sits behind the guided path.",
    introduction:
      "The library view adds evidence for discoverability without repeating the daily dashboard or completion flow.",
    images: [
      {
        src: "/projects/aura-fit/workout-library.webp",
        alt: "Aura Fit workout library with exercise choices",
        width: 680,
        height: 1473,
        caption: "Exercise discovery supports the more focused workout path.",
      },
    ],
  },
  release: {
    eyebrow: "Delivery boundary",
    title: "A private-client cross-platform build.",
    paragraphs: [
      "Aura Fit is recorded as a private-client Flutter product delivered for iOS and Android with full-build responsibility.",
      "No public link is shown, and no health, engagement, retention, or model-quality metric is asserted without evidence.",
    ],
  },
  outcome: {
    eyebrow: "Factual outcome",
    title: "A connected personal-fitness product with clear evidence boundaries.",
    summary:
      "The defensible result is a cross-platform mobile experience joining personalization, workouts, food analysis, connected activity data, and progress surfaces.",
    evidence: [
      "Confirmed end-to-end Flutter ownership",
      "Google Fit and Apple Health integration",
      "AI/ML-assisted product experience",
      "iOS and Android delivery scope",
    ],
  },
  nextProjectSlug: "sezon-store",
} as const satisfies CaseStudyContent;
