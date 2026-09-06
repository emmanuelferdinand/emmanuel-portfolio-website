import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { socialLinks } from "@/content/socialLinks";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { IconLink } from "./IconLink";

export function SocialLinks() {
  const t = useTranslations("Social");

  return (
    <ul className="flex">
      <li>
        <IconLink href={socialLinks.github} label={t("github")} icon={GitHubIcon} />
      </li>
      <li>
        <IconLink href={socialLinks.linkedin} label={t("linkedin")} icon={LinkedInIcon} />
      </li>
      <li>
        <IconLink href={socialLinks.email} label={t("email")} icon={Mail} isExternal={false} />
      </li>
    </ul>
  );
}
