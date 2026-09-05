export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-stroke px-3 py-1 text-sm">
      {children}
    </span>
  );
}
