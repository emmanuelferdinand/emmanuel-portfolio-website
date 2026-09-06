import { Container } from "./Container";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, eyebrow, title, children }: Readonly<SectionProps>) {
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId}>
      <Container className="py-20 md:py-24">
        <p className="text-xs tracking-eyebrow text-muted uppercase">{eyebrow}</p>
        <h2
          id={titleId}
          className="mt-3 font-display text-4xl leading-display tracking-tight md:text-6xl"
        >
          {title}
        </h2>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}
