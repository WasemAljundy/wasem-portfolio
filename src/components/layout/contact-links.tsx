import { siteConfig } from "@/config/site";

import { SocialLink } from "../ui/social-link";

export function ContactLinks() {
  return (
    <>
      <ul className="contact-list" aria-label="Primary professional links">
        <li>
          <SocialLink
            external={false}
            href={`mailto:${siteConfig.email}`}
            icon="email"
            label="Email"
          />
        </li>
        <li>
          <SocialLink href={siteConfig.social.linkedin} icon="linkedin" label="LinkedIn" />
        </li>
        <li>
          <SocialLink href={siteConfig.social.github} icon="github" label="GitHub" />
        </li>
      </ul>
      <p className="secondary-contact">
        Prefer a quick message?{" "}
        <SocialLink href={siteConfig.social.whatsapp} icon="whatsapp" label="Message on WhatsApp" />
      </p>
    </>
  );
}
