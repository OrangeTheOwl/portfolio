'use client';

import React from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project, ProjectType } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
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

  // Color mapping for project types
  const typeColors = {
    [ProjectType.Personal]: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      border: 'border-blue-300',
    },
    [ProjectType.Professional]: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      border: 'border-green-300',
    },
    [ProjectType.OpenSource]: {
      bg: 'bg-purple-100',
      text: 'text-purple-700',
      border: 'border-purple-300',
    },
    [ProjectType.Client]: {
      bg: 'bg-accent-100',
      text: 'text-accent-700',
      border: 'border-accent-300',
    },
    [ProjectType.Hackathon]: {
      bg: 'bg-primary-100',
      text: 'text-primary-700',
      border: 'border-primary-300',
    },
  };

  const typeStyle = typeColors[projectType];

  return (
    <motion.div
      className="
        w-full h-full
        bg-white rounded-xl shadow-lg overflow-hidden
        border border-neutral-200
        cursor-pointer
        group
      "
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
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
        {/* Wrapper for zoom effect */}
        <motion.div
          className="relative h-full w-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={images[0]}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
            className="object-cover"
            priority={priority}
            quality={85}
          />
        </motion.div>
        
        {/* Gradient Overlay on Hover */}
        <div className="
          absolute inset-0 
          bg-gradient-to-t from-dark-900/60 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
        " />
        
        {/* Badges Container */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
          {/* Project Type Badge */}
          <span className={`
            ${typeStyle.bg} ${typeStyle.text}
            px-3 py-1 rounded-full text-xs font-semibold
            backdrop-blur-sm border ${typeStyle.border}
          `}>
            {projectType}
          </span>

          {/* Date Badge */}
          <span className="
            bg-white/90 backdrop-blur-sm 
            px-3 py-1 rounded-full text-xs text-neutral-700 font-medium
          ">
            {date}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-primary-500 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
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
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-neutral-100">
          {/* GitHub Link */}
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-neutral-600 hover:text-dark-900 text-sm font-medium"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span className="group-hover:underline">Code</span>
          </motion.a>

          {/* Live Demo Link (if exists) */}
          {liveDemoUrl && (
            <motion.a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-primary-500 hover:text-primary-600 text-sm font-semibold"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="group-hover:underline">Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}