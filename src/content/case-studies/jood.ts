import type { CaseStudyContent } from "./schema";

export const joodCaseStudy = {
  projectSlug: "jood",
  seo: {
    title: "Jood Flutter Case Study",
    description:
      "A production Flutter case study covering Jood's offer discovery, booking, payment, QR, account, and cross-platform release journeys.",
  },
  hero: {
    eyebrow: "Flagship mobile engineering case study",
    statement:
      "A cross-platform offer and booking product carried from discovery through payment, confirmation, and post-booking access.",
    images: [
      {
        src: "/projects/jood/browse-offers.webp",
        alt: "Jood mobile interface showing restaurant offer discovery and location-aware browsing",
        width: 920,
        height: 1991,
        caption: "Discover nearby restaurant and service offers.",
      },
      {
        src: "/projects/jood/secure-payment.webp",
        alt: "Jood mobile interface summarizing a booking before payment confirmation",
        width: 760,
        height: 1645,
        caption: "Confirm the booking context before payment.",
      },
    ],
  },
  snapshot: {
    productType: "Offer discovery and transactional booking application",
    responsibilities:
      "End-to-end Flutter delivery across interface implementation, product journeys, integrations, and release.",
    engineeringAreas:
      "Discovery, offer detail, booking, payment, QR access, account state, and cross-platform delivery.",
  },
  challenge: {
    eyebrow: "The product challenge",
    title: "One mobile journey, several stateful commitments.",
    paragraphs: [
      "The shipped product brings restaurant and service offers into one browsing experience, then carries a selected offer through availability, booking, payment, and later retrieval.",
      "That creates a mobile-product challenge beyond displaying a catalogue: each step must preserve enough context for the next action, keep the user oriented, and make the resulting booking available after the transaction.",
    ],
  },
  ownership: {
    eyebrow: "Ownership and responsibility",
    title: "Full-build ownership across the mobile surface.",
    introduction:
      "The supported record identifies Jood as an end-to-end Flutter build. Public evidence is strongest across the mobile application and delivery scope, so this case study does not imply ownership of the underlying business or backend infrastructure.",
    areas: [
      {
        title: "Product foundation",
        detail:
          "Shape a coherent cross-platform application spanning guest discovery, authenticated account behavior, and transactional journeys.",
      },
      {
        title: "Interface and navigation",
        detail:
          "Implement the progression from searchable offers into detail, availability, confirmation, orders, and QR access.",
      },
      {
        title: "Integration boundary",
        detail:
          "Connect the Flutter product to verified REST API and Firebase capabilities without exposing unsupported backend implementation claims.",
      },
      {
        title: "Delivery responsibility",
        detail:
          "Carry the application through iOS and Android release, with live destinations on both public stores.",
      },
    ],
  },
  approach: {
    eyebrow: "Engineering approach",
    title: "Organize around the product journey and its integration boundaries.",
    introduction:
      "The available evidence supports a mobile-side view of the system: product surfaces coordinate a sequence of user decisions, remote product data, authenticated capabilities, and platform delivery.",
    stages: [
      {
        label: "Product surfaces",
        detail: "Browse, detail, booking, payment, orders, QR, and account experiences.",
      },
      {
        label: "Journey state",
        detail: "Selected offer, availability, booking context, confirmation, and order status.",
      },
      {
        label: "Data boundary",
        detail: "Verified REST API and Firebase integrations associated with the Jood application.",
      },
      {
        label: "Platform delivery",
        detail: "A Flutter codebase delivered to iOS and Android production destinations.",
      },
    ],
    evidenceBoundary:
      "The source material does not document the server topology or a Jood-specific state-management package, so neither is presented as fact.",
  },
  flow: {
    eyebrow: "Transaction flow",
    title: "Discovery becomes a recoverable booking.",
    introduction:
      "The flow is presented as a static, readable sequence. The screenshots prove the visible product states; no animation is required to understand the handoff between them.",
    steps: [
      {
        number: "01",
        title: "Discover",
        detail:
          "Browse nearby offers and compare visible price, discount, location, and rating cues.",
      },
      {
        number: "02",
        title: "Inspect",
        detail:
          "Open the restaurant or service context, review highlights, and move toward availability.",
        image: {
          src: "/projects/jood/offer-details.webp",
          alt: "Jood restaurant detail interface with availability and service information",
          width: 820,
          height: 1775,
          caption: "Offer context stays visible before commitment.",
        },
      },
      {
        number: "03",
        title: "Book",
        detail: "Choose a date, time, and available offer before advancing to confirmation.",
        image: {
          src: "/projects/jood/booking-time.webp",
          alt: "Jood date and time selection interface for an available restaurant offer",
          width: 760,
          height: 1645,
          caption: "Availability is resolved before payment.",
        },
      },
      {
        number: "04",
        title: "Confirm and pay",
        detail: "Review booking context and amount before completing the transaction.",
      },
      {
        number: "05",
        title: "Track and manage",
        detail: "Return to paid bookings, recover the booking reference, and open its QR access.",
        image: {
          src: "/projects/jood/order-history.webp",
          alt: "Jood orders interface listing paid bookings with QR access",
          width: 760,
          height: 1645,
          caption: "Completed bookings remain available after payment.",
        },
      },
    ],
  },
  decisions: [
    {
      title: "Gate commitment with visible context",
      context: "A booking moves through offer choice, availability, attendee count, and payment.",
      decision:
        "Keep the selected venue, slot, and amount visible at the point where the user confirms payment.",
      why: "The user can verify the transaction context before committing to it.",
    },
    {
      title: "Separate discovery from account commitment",
      context: "The product supports both quick exploration and account-dependent actions.",
      decision:
        "Allow a guest path into discovery while keeping sign-in and account creation available when the journey requires identity.",
      why: "Initial product value remains accessible without hiding the authenticated path.",
    },
    {
      title: "Carry success into a durable order surface",
      context: "Payment completion is not the end of a visit-based booking journey.",
      decision:
        "Represent paid bookings in an order history with status, reference, schedule, amount, and QR access.",
      why: "The post-payment state remains recoverable when the user returns later.",
    },
  ],
  resilience: {
    eyebrow: "Product states and resilience",
    title: "Production thinking is visible in the handoffs.",
    introduction:
      "The approved imagery does not expose every loading or network-error state. It does show several safeguards and persistent states that matter to a real transaction.",
    states: [
      {
        title: "Validation gates",
        detail:
          "Authentication and registration actions remain unavailable until required input is present.",
      },
      {
        title: "Pre-payment confirmation",
        detail: "Venue, schedule, attendee count, and total are shown before the final action.",
      },
      {
        title: "Persistent success state",
        detail:
          "Paid status and booking details remain visible in order history after confirmation.",
      },
      {
        title: "Visit recovery",
        detail: "QR access is reachable again from the saved booking rather than only at checkout.",
      },
    ],
    evidenceBoundary:
      "Loading, offline, retry, and server-error policies are not documented in the supplied evidence and are intentionally not claimed here.",
  },
  technologies: [
    { purpose: "Mobile product", items: ["Flutter", "Dart"] },
    { purpose: "Integration", items: ["REST API", "Firebase"] },
    { purpose: "Delivery", items: ["iOS", "Android"] },
  ],
  gallery: {
    eyebrow: "Selected product evidence",
    title: "Screens chosen for distinct responsibility—not volume.",
    introduction:
      "These views add evidence for QR retrieval and structured offer sorting without repeating the core booking sequence.",
    images: [
      {
        src: "/projects/jood/booking-qr.webp",
        alt: "Jood booking interface showing QR access from an existing paid order",
        width: 760,
        height: 1645,
        caption: "A booking can be retrieved and presented at the point of use.",
      },
      {
        src: "/projects/jood/smart-sorting.webp",
        alt: "Jood offer sorting interface with price, discount, and rating controls",
        width: 760,
        height: 1645,
        caption: "Offer discovery supports explicit, comprehensible sorting criteria.",
      },
    ],
  },
  release: {
    eyebrow: "Release responsibility",
    title: "Delivered across both mobile platforms.",
    paragraphs: [
      "Jood is recorded as a production Flutter application with end-to-end ownership and cross-platform release responsibility.",
      "The public destinations resolve to live Google Play and Apple App Store listings. No download, rating, revenue, or conversion metric is used as an engineering outcome.",
    ],
  },
  outcome: {
    eyebrow: "Factual outcome",
    title: "A shipped mobile journey, complete beyond checkout.",
    summary:
      "The defensible result is a production product that connects discovery, booking, payment, order state, and QR access across iOS and Android.",
    evidence: [
      "Live Google Play and App Store destinations",
      "End-to-end Flutter ownership",
      "Discovery-to-booking transactional breadth",
      "Persistent order and QR access after payment",
    ],
  },
  nextProjectSlug: "eureeca",
} as const satisfies CaseStudyContent;
