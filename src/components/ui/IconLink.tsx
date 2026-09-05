import { externalLinkProps } from "@/lib/links";
import { iconControlClassName } from "./iconControl";

type IconComponent = React.ComponentType<{ className?: string }>;

interface IconLinkProps {
  href: string;
  label: string;
  icon: IconComponent;
}

export function IconLink({ href, label, icon: Icon }: IconLinkProps) {
  return (
    <a href={href} {...externalLinkProps} className={iconControlClassName}>
      <Icon />
      <span className="sr-only">{label}</span>
    </a>
  );
}
