import type { CaseStudyContent } from "./schema";

export const gaderCaseStudy = {
  projectSlug: "gader",
  presentation: "gader",
  seo: {
    title: "Gader Real-Time Consultation Product Case Study",
    description:
      "A consultation-product case study covering Gader's expert discovery, consultation requests, messaging, voice, video, and Android release context.",
  },
  hero: {
    eyebrow: "Consultation product",
    statement:
      "A communication-led Android product that helps beneficiaries find relevant volunteer expertise, request a consultation, and move into supported conversation channels.",
    images: [
      {
        src: "/projects/gader/consultation-categories.webp",
        alt: "Gader consultation categories for finding volunteer expertise",
        width: 760,
        height: 1351,
        caption: "Official product evidence · consultation discovery",
      },
    ],
  },
  snapshot: {
    productType: "Expert consultation and communication product",
    responsibilities: "Full mobile product build",
    engineeringAreas: "Discovery · requests · messaging · voice and video journeys",
  },
  challenge: {
    eyebrow: "Communication challenge",
    title: "Build confidence before a real-time conversation begins.",
    paragraphs: [
      "A consultation product asks users to move from an abstract need to a specific expert and then into direct communication. Categories, expert profiles, request context, and connection states must make that progression understandable before messaging, voice, or video begins.",
      "The evidence confirms these product journeys and an Android production release. It does not establish WebRTC choices, backend topology, call-quality metrics, consultation counts, user counts, or quantified impact.",
    ],
  },
  ownership: {
    eyebrow: "Full-build ownership",
    title: "The mobile journey from need to connection.",
    introduction:
      "Wasem confirmed full-build responsibility for Gader. The story focuses on the complete mobile product surface while keeping undocumented communication infrastructure outside the claim boundary.",
    areas: [
      {
        title: "Consultation discovery",
        detail: "Turn broad support needs into understandable consultation categories.",
      },
      {
        title: "Expert evaluation",
        detail:
          "Present profiles and context that help users choose an appropriate volunteer expert.",
      },
      {
        title: "Request journey",
        detail: "Carry intent from discovery into a specific consultation request.",
      },
      {
        title: "Communication surface",
        detail:
          "Connect supported messaging, voice, and video paths within the consultation context.",
      },
      {
        title: "Android release",
        detail: "Deliver the complete product through its verified Google Play destination.",
      },
    ],
  },
  approach: {
    eyebrow: "Connection model",
    title: "Trust is built before the call controls appear.",
    introduction:
      "The product journey establishes category and expert context before asking a beneficiary to connect.",
    stages: [
      { label: "Need", detail: "Begin with a recognizable consultation category." },
      { label: "Expert", detail: "Review a volunteer profile and relevant context." },
      { label: "Request", detail: "Express consultation intent before opening communication." },
      {
        label: "Connect",
        detail: "Continue through messaging, voice, or video as supported by the product.",
      },
    ],
    evidenceBoundary:
      "The journey is visible in approved store evidence and supported project facts. Transport protocols and server infrastructure are intentionally not inferred.",
  },
  flow: {
    id: "consultation-journey",
    eyebrow: "Communication journey",
    title: "Discover expert → request consultation → connect.",
    introduction:
      "Each step reduces ambiguity before moving into a higher-commitment communication state.",
    steps: [
      {
        number: "01",
        title: "Choose a consultation category",
        detail: "Translate a support need into a navigable starting point.",
      },
      {
        number: "02",
        title: "Review an expert profile",
        detail: "Use visible profile context to support a more informed selection.",
        image: {
          src: "/projects/gader/expert-profile.webp",
          alt: "Gader volunteer expert profile",
          width: 680,
          height: 1209,
          caption: "Official product evidence · expert evaluation",
        },
      },
      {
        number: "03",
        title: "Request the consultation",
        detail: "Keep the selected expert and consultation context attached to the request.",
      },
      {
        number: "04",
        title: "Move into messaging",
        detail: "Provide an asynchronous path within the consultation journey.",
      },
      {
        number: "05",
        title: "Use voice or video",
        detail: "Expose real-time channels as supported continuation options.",
      },
    ],
  },
  decisionsIntroduction: {
    eyebrow: "Engineering decisions",
    title: "Keep a multi-channel journey coherent.",
    description:
      "These product decisions are grounded in the supported surface and avoid unsupported real-time implementation claims.",
  },
  decisions: [
    {
      title: "Establish context before connection",
      context: "Users begin with a support need, not a known communication target.",
      decision:
        "Sequence categories and expert profiles before consultation requests and channels.",
      why: "The user understands who they are contacting and why before communication begins.",
    },
    {
      title: "Keep channels inside one consultation",
      context: "Messaging, voice, and video can otherwise feel like separate products.",
      decision: "Present each channel as a continuation of the same consultation journey.",
      why: "The product preserves intent and reduces navigation ambiguity.",
    },
    {
      title: "Make communication state explicit",
      context: "Real-time actions carry more uncertainty than static browsing.",
      decision: "Use clear request, messaging, voice, and video product states.",
      why: "Users can understand the current mode without relying on motion or color alone.",
    },
  ],
  resilience: {
    eyebrow: "Real-time product states",
    title: "The interface explains where the consultation stands.",
    introduction:
      "The supported journey distinguishes discovery, request, asynchronous messaging, and live communication surfaces.",
    states: [
      { title: "Discovering", detail: "Category and profile context support expert selection." },
      { title: "Requested", detail: "Consultation intent remains explicit before connection." },
      {
        title: "Messaging",
        detail: "An asynchronous communication path remains distinct from live channels.",
      },
      {
        title: "Voice or video",
        detail: "Real-time options are presented as clear consultation modes.",
      },
    ],
    evidenceBoundary:
      "No protocol, provider, retry strategy, media topology, call-quality measurement, or operational SLA is claimed.",
  },
  release: {
    eyebrow: "Production context",
    title: "A live Android consultation product.",
    paragraphs: [
      "Gader is recorded as a live Android product with full-build ownership. Its verified Google Play listing provides the public production destination.",
    ],
  },
  outcome: {
    eyebrow: "Supported outcome",
    title: "A complete consultation path centered on communication clarity.",
    summary:
      "The product connects consultation discovery, expert evaluation, requests, messaging, voice, and video within one coherent Android journey.",
    evidence: [
      "Full-build mobile ownership confirmed by Wasem",
      "Consultation categories and expert-profile discovery",
      "Supported messaging, voice, and video product journeys",
      "Verified Google Play release",
    ],
  },
} as const satisfies CaseStudyContent;
