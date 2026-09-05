import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { IconLink } from "@/components/ui/IconLink";
import { LinkButton } from "@/components/ui/LinkButton";
import { Pill } from "@/components/ui/Pill";
import { Section } from "@/components/ui/Section";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export default function HomePage() {
  return (
    <main>
      <Section
        id="showcase"
        eyebrow="WELCOME"
        title="EMMANUEL FERDINAND ANGGAWIRJA"
        description="Full-stack engineer"
      >
        <div className="flex flex-wrap items-center gap-4">
          <ThemeToggle />
          <IconLink href="https://github.com/emmanuelferdinand" label="GitHub" icon={GitHubIcon} />
          <LinkButton href="#showcase">Solid</LinkButton>
          <LinkButton href="#showcase" variant="outline">
            Outline
          </LinkButton>
          <Pill>Pill</Pill>
        </div>
      </Section>
    </main>
  );
}
