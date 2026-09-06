const variantClassName = {
  solid: "bg-linear-to-r from-accent to-accent-deep text-on-accent hover:opacity-90",
  outline: "border border-stroke-strong hover:bg-surface",
};

interface LinkButtonProps {
  href: string;
  variant?: keyof typeof variantClassName;
  children: React.ReactNode;
}

export function LinkButton({ href, variant = "solid", children }: Readonly<LinkButtonProps>) {
  return (
    <a
      href={href}
      className={`inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition ${variantClassName[variant]}`}
    >
      {children}
    </a>
  );
}
