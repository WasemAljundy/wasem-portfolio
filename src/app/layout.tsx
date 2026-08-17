import type { Metadata, Viewport } from "next";
import "@fontsource-variable/public-sans/wght.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo/metadata";
import { PersonStructuredData } from "@/lib/seo/structured-data";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  ...createMetadata({ description: siteConfig.description, pathname: "/" }),
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f5f6f4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <div className="site-shell">
          <SiteHeader />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
        </div>
        <PersonStructuredData />
      </body>
    </html>
  );
}
