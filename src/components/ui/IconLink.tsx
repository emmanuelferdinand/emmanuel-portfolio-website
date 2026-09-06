import { externalLinkProps } from "@/lib/links";

type IconComponent = React.ComponentType<{ className?: string }>;

interface IconLinkProps {
  href: string;
  label: string;
  icon: IconComponent;
  isExternal?: boolean;
}

export function IconLink({ href, label, icon: Icon, isExternal = true }: Readonly<IconLinkProps>) {
  const linkProps = isExternal ? externalLinkProps : {};

  return (
    <a
      href={href}
      {...linkProps}
      className="inline-flex size-11 items-center justify-center rounded-full text-muted transition hover:text-fg"
    >
      <Icon className="size-5" />
      <span className="sr-only">{label}</span>
    </a>
  );
}
