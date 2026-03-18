"use client";

import { PERSONAL_INFO, SOCIAL_LINKS } from "@/data/constants";
import { getCopy, resolveLocale } from "@/lib/i18n";
import { isConfiguredValue } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

export default function Footer() {
  const searchParams = useSearchParams();
  const locale = resolveLocale(searchParams.get("lang"));
  const text = getCopy(locale);
  
  const email = isConfiguredValue(PERSONAL_INFO.email) ? PERSONAL_INFO.email : undefined;
  const github = isConfiguredValue(SOCIAL_LINKS.github) ? SOCIAL_LINKS.github : undefined;
  const linkedin = isConfiguredValue(SOCIAL_LINKS.linkedin) ? SOCIAL_LINKS.linkedin : undefined;

  const links = [
    { href: email ? `mailto:${email}` : undefined, label: text.sections.contact.emailMe, external: false },
    { href: github, label: text.sections.contact.github, external: true },
    { href: linkedin, label: text.sections.contact.linkedin, external: true },
  ].filter(link => link.href);

  return (
    <footer className="border-t border-neutral-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-neutral-600 hover:text-dark-900 transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-center text-sm text-neutral-600">&copy; {new Date().getFullYear()} {PERSONAL_INFO.firstName} {PERSONAL_INFO.lastName}</p>
      </div>
    </footer>
  );
}