"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import DetailsCard from "@/components/cards/DetailsCard";
import ExperienceCard from "@/components/cards/ExperienceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import { getCopy, getTranslatedExperience, Locale } from "@/lib/i18n";
import { Experience } from "@/types/experience";

interface ExperienceSectionProps {
  locale: Locale;
}

export default function ExperienceSection({ locale }: ExperienceSectionProps) {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const text = getCopy(locale);
  const localizedExperiences = experiences.map((experience) => getTranslatedExperience(experience, locale));

  return (
    <>
      <section id="experience" className="bg-neutral-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow={text.sections.experience.eyebrow}
            title={text.sections.experience.title}
            description={text.sections.experience.description}
          />

          <div className="mt-16 space-y-6">
            {localizedExperiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <ExperienceCard
                  experience={experience}
                  locale={locale}
                  onSelect={() => setSelectedExperience(experience)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DetailsCard item={selectedExperience} locale={locale} onClose={() => setSelectedExperience(null)} />
    </>
  );
}