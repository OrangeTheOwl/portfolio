import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import ExperienceSection from "@/sections/ExperienceSection";
import GallerySection from "@/sections/GallerySection";
import HeroSection from "@/sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import { resolveLocale } from "@/lib/i18n";

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Home({ searchParams }: PageProps) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const rawLang = resolvedParams?.lang;
  const language = Array.isArray(rawLang) ? rawLang[0] : rawLang;
  const locale = resolveLocale(language);

  return (
    <main>
      <HeroSection locale={locale} />
      <ProjectsSection locale={locale} />
      <ExperienceSection locale={locale} />
      <GallerySection locale={locale} />
      <AboutSection locale={locale} />
      <ContactSection locale={locale} />
    </main>
  );
}
