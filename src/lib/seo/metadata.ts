import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "@/config/site";

type MetadataInput = {
  title?: string;
  description: string;
  pathname: string;
};

export function createMetadata({ title, description, pathname }: MetadataInput): Metadata {
  const canonical = absoluteUrl(pathname);
  const socialImage = absoluteUrl("/api/og");

  return {
    ...(title ? { title } : {}),
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: title ?? siteConfig.title,
      description,
      url: canonical,
      images: socialImage ? [{ url: socialImage, width: 1200, height: 630 }] : undefined,
    },
    twitter: {
      card: socialImage ? "summary_large_image" : "summary",
      title: title ?? siteConfig.title,
      description,
      images: socialImage ? [socialImage] : undefined,
    },
  };
}
