'use client';

import React from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Badge from "@/components/ui/Badge";
import { ExternalLinkIcon, GitHubIcon } from "@/components/ui/Icons";
import { PROJECT_TYPE_STYLES } from "@/data/constants";
import { getCopy, Locale, translateProjectType, template } from "@/lib/i18n";
import { compactList, formatProjectDate, isConfiguredValue, isExternalUrl } from "@/lib/utils";
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  priority?: boolean;
  onCardClick: () => void; 
}

export default function ProjectCard({ project, locale, priority = false, onCardClick }: ProjectCardProps) {
  const text = getCopy(locale);
  const {
    title, 
    description, 
    techStack, 
    projectType, 
    date, 
    githubUrl, 
    liveDemoUrl, 
    images 
  } = project;

  const typeStyle = PROJECT_TYPE_STYLES[projectType];
  const techItems = compactList(techStack);
  const primaryImage = images[0];
  const hasGithubLink = isConfiguredValue(githubUrl) && isExternalUrl(githubUrl);
  const hasLiveDemo = isConfiguredValue(liveDemoUrl) && isExternalUrl(liveDemoUrl);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onCardClick();
    }
  };

  return (
    <motion.div
      layoutId={`project-container-${project.id}`} 
      onClick={onCardClick}
      onKeyDown={handleKeyDown}
      className="
        w-full h-full
        bg-white rounded-xl shadow-lg overflow-hidden
        border border-neutral-200
        cursor-pointer
        group
      "
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-label={template(text.cards.project.openDetailsAria, { title })}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { 
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-72 w-full overflow-hidden bg-neutral-100">
        {primaryImage ? (
          <motion.div
            className="relative h-full w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={primaryImage}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
              className="object-cover"
              priority={priority}
              quality={85}
            />
          </motion.div>
        ) : (
          <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-neutral-100 via-white to-primary-50 p-6">
            <Badge className="w-fit border-neutral-200 bg-white text-neutral-700">{text.cards.project.caseStudy}</Badge>
            <div className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">{text.cards.project.previewUnavailable}</p>
              <h3 className="text-2xl font-bold text-dark-900">{title}</h3>
            </div>
          </div>
        )}

        <div className="
          absolute inset-0 
          bg-gradient-to-t from-dark-900/60 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
        " />

        <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
          <Badge className={`${typeStyle.bg} ${typeStyle.text} ${typeStyle.border} backdrop-blur-sm`}>
            {translateProjectType(projectType, locale)}
          </Badge>

          <Badge className="border-white/50 bg-white/90 text-neutral-700 backdrop-blur-sm">
            {formatProjectDate(date, locale)}
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-primary-500 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techItems.length > 0 ? (
            techItems.map((tech, index) => (
              <motion.span
                key={index}
                className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'rgb(47 111 208)',
                  color: 'white',
                }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.span>
            ))
          ) : (
            <p className="text-xs font-medium text-neutral-500">{text.cards.project.techStackFallback}</p>
          )}
        </div>

        <div className="flex items-center gap-3 pt-2 border-t border-neutral-100">
          {hasGithubLink ? (
            <motion.a
              href={githubUrl}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-600 hover:text-dark-900 text-sm font-medium"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <GitHubIcon className="h-4 w-4" />
              <span className="group-hover:underline">{text.cards.project.code}</span>
            </motion.a>
          ) : null}

          {hasLiveDemo ? (
            <motion.a
              href={liveDemoUrl}
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-primary-500 hover:text-primary-600 text-sm font-semibold"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <ExternalLinkIcon className="h-4 w-4" />
              <span className="group-hover:underline">{text.cards.project.liveDemo}</span>
            </motion.a>
          ) : null}

          {!hasGithubLink && !hasLiveDemo ? (
            <p className="text-sm font-medium text-neutral-500">{text.cards.project.noLinksFallback}</p>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}