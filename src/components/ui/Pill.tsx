interface PillProps {
  children: React.ReactNode;
}

export function Pill({ children }: Readonly<PillProps>) {
  return (
    <span className="inline-flex items-center rounded-full border border-stroke px-3 py-1 text-sm">
      {children}
    </span>
  );
}
