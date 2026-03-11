'use client';

import { motion, Variants } from 'framer-motion';
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
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
    <section id="projects" className="min-h-screen py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Animation */}
        <motion.div 
          className="mb-16 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={headingVariant}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4">
            Projects
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            From hackathons to production apps - here's what I've built
          </p>
        </motion.div>

        {/* Projects Stack - Single Column */}
        <div className="space-y-8">
          {projects.map((project, index) => (
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
                priority={index === 0} // First project loads immediately
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}