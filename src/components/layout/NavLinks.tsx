interface NavLink {
  href: string;
  label: string;
  isActive: boolean;
}

interface NavLinksProps {
  links: readonly NavLink[];
  className?: string;
  onNavigate?: () => void;
}

export function NavLinks({ links, className = "", onNavigate }: Readonly<NavLinksProps>) {
  return (
    <ul className={`gap-8 ${className}`}>
      {links.map(({ href, label, isActive }) => (
        <li key={href}>
          <a
            href={href}
            onClick={onNavigate}
            aria-current={isActive ? "location" : undefined}
            className="text-sm text-muted transition hover:text-fg aria-[current=location]:text-fg"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
