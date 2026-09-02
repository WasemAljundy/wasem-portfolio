import Link from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link className="brand-link" href="/" aria-label={`${siteConfig.name}, home`}>
          {siteConfig.name}
        </Link>
        <div className="header-actions">
          <nav className="site-nav" aria-label="Primary navigation">
            <ul>
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link className="nav-link" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
