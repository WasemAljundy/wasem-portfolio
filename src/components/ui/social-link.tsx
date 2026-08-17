import { Icon, type IconName } from "./icon";

type SocialLinkProps = {
  href: string;
  label: string;
  icon: IconName;
  external?: boolean;
};

export function SocialLink({ href, label, icon, external = true }: SocialLinkProps) {
  return (
    <a
      className="social-link"
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Icon name={icon} />
      <span>{label}</span>
    </a>
  );
}
