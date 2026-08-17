import type { Route } from "next";
import Link from "next/link";

type SharedProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

type ActionLinkProps = SharedProps &
  ({ href: Route; download?: false } | { href: `/${string}.pdf`; download: true });

export function ActionLink({ href, children, variant = "secondary", download }: ActionLinkProps) {
  if (download) {
    return (
      <a className="button-link" data-variant={variant} download href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className="button-link" data-variant={variant} href={href}>
      {children}
    </Link>
  );
}
