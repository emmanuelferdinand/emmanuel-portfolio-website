import { useLocale } from "next-intl";
import { profile } from "@/content/profile";
import { EMAIL_ADDRESS, socialLinks } from "@/content/socialLinks";
import { SITE_URL } from "@/lib/site";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Hobbies } from "@/components/sections/Hobbies";
import { TechStack } from "@/components/sections/TechStack";
import { Workflow } from "@/components/sections/Workflow";

export default function HomePage() {
  const locale = useLocale();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.headline[locale],
    email: EMAIL_ADDRESS,
    url: SITE_URL,
    sameAs: [socialLinks.github, socialLinks.linkedin],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Hero />
      <Experience />
      <TechStack />
      <Workflow />
      <Education />
      <Hobbies />
      <Contact />
    </>
  );
}
