interface SplitRowProps {
  aside: React.ReactNode;
  children: React.ReactNode;
}

export function SplitRow({ aside, children }: Readonly<SplitRowProps>) {
  return (
    <div className="grid gap-4 py-10 md:grid-cols-12">
      <div className="md:col-span-4">{aside}</div>
      <div className="md:col-span-8">{children}</div>
    </div>
  );
}
