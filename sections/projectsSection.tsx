'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import ProjectCard from "@/components/cards/ProjectCard";
import DetailsCard from "@/components/cards/DetailsCard";
import SectionHeading from '@/components/ui/SectionHeading';
import { UI_CONFIG } from '@/data/constants';
import { projects } from "@/data/projects";
import { getCopy, getTranslatedProject, Locale } from '@/lib/i18n';
import { Project } from '@/types/project';
import { Experience } from '@/types/experience';

interface ProjectsSectionProps {
  locale: Locale;
}

export default function ProjectsSection({ locale }: ProjectsSectionProps) {
  // State to track which card is selected (can be Project or Experience)
  const [selectedCard, setSelectedCard] = useState<Project | Experience | null>(null);
  const text = getCopy(locale);
  const localizedProjects = projects.map((project) => getTranslatedProject(project, locale));

  const item: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
    },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  const headingVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <>
      <section id="projects" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={headingVariant}
          >
            <SectionHeading
              align="center"
              eyebrow={text.sections.projects.eyebrow}
              title={text.sections.projects.title}
              description={text.sections.projects.description}
            />
          </motion.div>

          <div className="space-y-8">
            {localizedProjects.slice(0, UI_CONFIG.maxProjectsOnHomepage).map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="show"
                viewport={{ 
                  once: true,
                  margin: "-100px",
                  amount: 0.3,
                }}
                variants={item}
              >
                <ProjectCard 
                  project={project}
                  locale={locale}
                  priority={index === 0} // First project loads immediately
                  onCardClick={() => setSelectedCard(project)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DetailsCard
        item={selectedCard}
        locale={locale}
        onClose={() => setSelectedCard(null)}
      />
    </>
  );
}