import type { CaseStudyContent } from "./schema";

export const sezonStoreCaseStudy = {
  projectSlug: "sezon-store",
  presentation: "sezon",
  seo: {
    title: "Sezon Store Flutter Commerce Case Study",
    description:
      "An end-to-end Flutter commerce case study spanning multi-vendor product creation, catalogue discovery, checkout, payment, and order management.",
  },
  hero: {
    eyebrow: "End-to-end commerce case study",
    statement:
      "A multi-vendor mobile product connecting the seller’s catalogue work to the customer’s path from discovery through payment and orders.",
    images: [
      {
        src: "/projects/sezon-store/catalog-discovery.webp",
        alt: "Sezon Store mobile catalogue with categories and product discovery",
        width: 360,
        height: 780,
        caption: "Catalogue structure gives customers a direct path into products.",
      },
      {
        src: "/projects/sezon-store/checkout-summary.webp",
        alt: "Sezon Store checkout summary with products shipping and totals",
        width: 360,
        height: 780,
        caption: "The order context remains visible before payment.",
      },
    ],
  },
  snapshot: {
    productType: "Multi-vendor commerce application",
    responsibilities:
      "End-to-end Flutter application delivery across customer and vendor journeys, Firebase-backed product behavior, and payment integration.",
    engineeringAreas:
      "Catalogue discovery, product details, seller product creation, cart, shipping, payment methods, and orders.",
  },
  challenge: {
    eyebrow: "The product challenge",
    title: "Two sides of commerce must resolve into one dependable order.",
    paragraphs: [
      "A multi-vendor product has to support more than a customer catalogue. Sellers need a clear way to create and maintain products while customers need enough detail, pricing, shipping context, and payment choice to complete an order.",
      "The mobile challenge is continuity: product data created on one side must remain understandable and actionable across discovery, checkout, payment selection, and later order management.",
    ],
  },
  ownership: {
    eyebrow: "Ownership and responsibility",
    title: "An individually delivered mobile build across both product roles.",
    introduction:
      "Wasem confirmed full-build responsibility for the mobile application. The case study stays within the supported Flutter product surface and does not imply ownership of undocumented server infrastructure.",
    areas: [
      {
        title: "Commerce structure",
        detail:
          "Connect categories, products, details, cart context, shipping, payment selection, and saved orders as one mobile system.",
      },
      {
        title: "Vendor workflow",
        detail:
          "Give sellers a dedicated product-creation path with the information required to publish catalogue inventory.",
      },
      {
        title: "Payment boundary",
        detail:
          "Implement supported Stripe and payment-method experiences while keeping the amount and order context visible.",
      },
      {
        title: "Android delivery",
        detail:
          "Carry the Flutter application through its recorded Android delivery scope as a private-client product.",
      },
    ],
  },
  approach: {
    eyebrow: "Product-system approach",
    title: "Model the app around durable commerce responsibilities.",
    introduction:
      "The visible system separates catalogue, transaction, and fulfilment responsibilities while preserving the product and order context between them.",
    stages: [
      { label: "Supply", detail: "Vendor product creation establishes sellable catalogue data." },
      {
        label: "Discovery",
        detail: "Categories and details help customers evaluate available products.",
      },
      { label: "Commitment", detail: "Cart, shipping, and payment choices converge at checkout." },
      { label: "Recovery", detail: "Order management retains the result after the transaction." },
    ],
    evidenceBoundary:
      "Flutter, GetX, Firebase, Stripe, Android, and the visible product journeys are supported. Backend topology and operational commerce metrics are not documented.",
  },
  flow: {
    id: "commerce-flow",
    eyebrow: "Commerce flow",
    title: "A product moves from inventory to a recoverable order.",
    introduction:
      "The sequence pairs customer-facing commitment with the vendor surface that supplies the catalogue.",
    steps: [
      {
        number: "01",
        title: "Evaluate a product",
        detail:
          "Review imagery, pricing, selection controls, and product detail before adding an item.",
        image: {
          src: "/projects/sezon-store/product-detail.webp",
          alt: "Sezon Store product detail with image pricing and purchase controls",
          width: 360,
          height: 780,
          caption: "Product context precedes cart commitment.",
        },
      },
      {
        number: "02",
        title: "Resolve payment",
        detail: "Choose among the supported payment methods at the point of checkout.",
        image: {
          src: "/projects/sezon-store/payment-methods.webp",
          alt: "Sezon Store payment method selection at checkout",
          width: 360,
          height: 780,
          caption: "Payment choice is a distinct, comprehensible step.",
        },
      },
      {
        number: "03",
        title: "Return to the order",
        detail: "Use the orders surface to recover and manage the result after checkout.",
        image: {
          src: "/projects/sezon-store/order-management.webp",
          alt: "Sezon Store customer orders interface",
          width: 360,
          height: 780,
          caption: "The transaction remains available after payment.",
        },
      },
    ],
  },
  decisionsIntroduction: {
    eyebrow: "Commerce decisions",
    title: "Protect the handoffs where product intent becomes an order.",
    description:
      "The strongest evidence is in visible journey structure, so the decisions stay grounded in customer and vendor behavior.",
  },
  decisions: [
    {
      title: "Keep product context visible through checkout",
      context:
        "Price, quantity, delivery, and payment decisions accumulate across several screens.",
      decision: "Present an explicit order review before the final payment action.",
      why: "Customers can verify the commercial commitment before submitting it.",
    },
    {
      title: "Separate payment choice from the order summary",
      context: "Multiple payment methods add choice at the most sensitive point in the flow.",
      decision:
        "Use a focused payment-method surface rather than compressing every option into the cart.",
      why: "The user can make one clear decision without losing the underlying order context.",
    },
    {
      title: "Treat vendor creation as a first-class journey",
      context: "A multi-vendor catalogue depends on sellers supplying structured product data.",
      decision:
        "Provide a dedicated creation workflow instead of representing the app only as a storefront.",
      why: "The mobile product supports both the supply and customer sides of commerce.",
    },
  ],
  technologies: [
    { purpose: "Mobile product", items: ["Flutter", "Dart", "GetX"] },
    { purpose: "Product services", items: ["Firebase", "Stripe"] },
    { purpose: "Delivery", items: ["Android"] },
  ],
  gallery: {
    eyebrow: "Vendor evidence",
    title: "The catalogue begins on the seller side.",
    introduction:
      "This final screen makes the multi-vendor scope explicit without repeating the customer transaction sequence.",
    images: [
      {
        src: "/projects/sezon-store/product-creation.webp",
        alt: "Sezon Store vendor form for creating a catalogue product",
        width: 360,
        height: 780,
        caption: "Structured product creation supplies the customer catalogue.",
      },
    ],
  },
  release: {
    eyebrow: "Delivery boundary",
    title: "A private-client Android product with public code evidence.",
    paragraphs: [
      "The project is recorded as an Android Flutter build delivered end to end by Wasem, with the source repository available publicly.",
      "No live-store, order-volume, revenue, or conversion claim is made because those outcomes are not supported by the supplied evidence.",
    ],
  },
  outcome: {
    eyebrow: "Factual outcome",
    title: "A coherent multi-vendor journey from catalogue supply to orders.",
    summary:
      "The defensible result is a Flutter commerce application covering both vendor product creation and the customer’s discovery, checkout, payment, and order paths.",
    evidence: [
      "Confirmed end-to-end individual mobile build",
      "Multi-vendor and customer workflows",
      "Verified Firebase and Stripe experience",
      "Public GitHub repository",
    ],
  },
  nextProjectSlug: "aid-for-palestine",
} as const satisfies CaseStudyContent;
