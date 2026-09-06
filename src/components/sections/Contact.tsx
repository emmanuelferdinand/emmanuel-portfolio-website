import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { contactHeadline } from "@/content/contact";
import { socialLinks } from "@/content/socialLinks";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";

// Each word shows for a quarter of the 12s cycle, so every delay is 3s apart.
const wordDelayClassName = [
  "",
  "[animation-delay:3s]",
  "[animation-delay:6s]",
  "[animation-delay:9s]",
];

export function Contact() {
  const t = useTranslations("Sections.contact");
  const { prefix, rotatingWords, suffix } = contactHeadline;

  return (
    <section id="contact" aria-labelledby="contact-title" className="min-h-[70vh]">
      <Container className="pt-32 pb-20 text-center md:pt-44 md:pb-24">
        <h2
          id="contact-title"
          className="font-display text-5xl leading-display tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="block">{prefix}</span>
          <span className="flex justify-center gap-[0.2em]">
            <span className="inline-grid text-center">
              {rotatingWords.map((word, index) => (
                <span
                  key={word}
                  className={`col-start-1 row-start-1 animate-word-cycle text-accent ${index === 0 ? "" : "opacity-0"} ${wordDelayClassName[index]}`}
                >
                  {word}
                </span>
              ))}
            </span>
            <span>{suffix}</span>
          </span>
        </h2>
        <div className="mt-16 flex justify-center">
          <LinkButton href={socialLinks.email}>
            <Mail className="mr-2 size-4" />
            {t("emailMe")}
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
