import { siteConfig } from "@/config/site";

export function PersonStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    email: `mailto:${siteConfig.email}`,
    homeLocation: {
      "@type": "Place",
      name: siteConfig.location,
    },
    knowsAbout: [
      "Flutter",
      "Dart",
      "Mobile engineering",
      "Android",
      "Firebase",
      "Software architecture",
    ],
    sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
    ...(siteConfig.siteUrl ? { url: siteConfig.siteUrl } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replaceAll("<", "\\u003c") }}
    />
  );
}
