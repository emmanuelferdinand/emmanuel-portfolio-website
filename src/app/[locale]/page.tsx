import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Hobbies } from "@/components/sections/Hobbies";
import { TechStack } from "@/components/sections/TechStack";
import { Workflow } from "@/components/sections/Workflow";

export default function HomePage() {
  return (
    <>
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
