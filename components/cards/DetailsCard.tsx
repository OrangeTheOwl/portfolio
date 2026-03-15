'use client';

import React, { useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { CloseIcon, ExternalLinkIcon, GitHubIcon } from '@/components/ui/Icons';
import { PROJECT_TYPE_STYLES } from '@/data/constants';
import { getCopy, Locale, translateProjectType } from '@/lib/i18n';
import { calculateDuration, compactList, formatMonthYear, formatProjectDate, isConfiguredValue, isExternalUrl } from '@/lib/utils';
import { Project } from '@/types/project';
import { Experience } from '@/types/experience';
import MasonryGallery from '../ui/MasonryGallery';

interface DetailsCardProps {
    item: Project | Experience | null;
    locale: Locale;
    onClose: () => void;
}

// Type guard to check if item is a Project
function isProject(item: Project | Experience): item is Project {
    return 'projectType' in item;
}

export default function DetailsCard({ item, locale, onClose }: DetailsCardProps) {
    const text = getCopy(locale);
    const titleId = useId();
    const descriptionId = useId();

    // Lock body scroll when modal is open
    useEffect(() => {
        if (item) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [item]);

    // Handle ESC key to close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!item) return null;

    const isProjectItem = isProject(item);
    const typeStyle = isProjectItem ? PROJECT_TYPE_STYLES[item.projectType] : undefined;
    const projectTechStack = isProjectItem ? compactList(item.techStack) : [];
    const hasGithubLink = isProjectItem && isConfiguredValue(item.githubUrl) && isExternalUrl(item.githubUrl);
    const hasLiveDemo = isProjectItem && isConfiguredValue(item.liveDemoUrl) && isExternalUrl(item.liveDemoUrl);

    return (
        <AnimatePresence mode="wait">
            {item && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
                    />

                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            layoutId={`${isProjectItem ? 'project' : 'experience'}-container-${item.id}`}
                            className="
                                w-full h-[95vh]
                                max-w-6xl
                                bg-white rounded-2xl shadow-2xl
                                overflow-hidden
                                pointer-events-auto
                                flex flex-col
                            "
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby={titleId}
                            aria-describedby={descriptionId}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 35,
                                mass: 0.8,
                            }}
                        >
                            <button
                                onClick={onClose}
                                className="
                                    absolute top-6 right-6 z-20
                                    w-12 h-12 rounded-full
                                    bg-white shadow-xl
                                    hover:bg-neutral-50
                                    flex items-center justify-center
                                    text-neutral-600 hover:text-dark-900
                                    transition-all duration-200
                                    group
                                "
                                aria-label={text.cards.details.close}
                            >
                                <CloseIcon className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                            </button>

                            <div className="overflow-y-auto flex-1">
                                <div className="sticky top-0 z-10 bg-white border-b border-neutral-200 px-8 md:px-12 py-6">
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        {isProjectItem ? (
                                            typeStyle && (
                                                <Badge className={`${typeStyle.bg} ${typeStyle.text} ${typeStyle.border} px-4 py-2 text-sm`}>
                                                    {translateProjectType(item.projectType, locale)}
                                                </Badge>
                                            )
                                        ) : (
                                            <>
                                                {item.companyLogo && (
                                                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-neutral-100 flex-shrink-0">
                                                        <Image
                                                            src={item.companyLogo}
                                                            alt={item.company}
                                                            width={40}
                                                            height={40}
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                )}
                                                <span className="text-lg font-semibold text-neutral-700">
                                                    {item.company}
                                                </span>
                                            </>
                                        )}

                                        <Badge className="border-neutral-200 bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">
                                            {isProjectItem 
                                                ? formatProjectDate(item.date, locale)
                                                : `${formatMonthYear(item.startDate, locale)} - ${item.endDate ? formatMonthYear(item.endDate, locale) : text.cards.details.present} · ${calculateDuration(item.startDate, item.endDate, locale)}`
                                            }
                                        </Badge>
                                    </div>

                                    <h1 className="text-3xl md:text-4xl font-bold text-dark-900" id={titleId}>
                                        {isProjectItem ? item.title : item.position}
                                    </h1>
                                </div>

                                <div className="px-8 md:px-12 py-8">
                                    <div className="mb-10">
                                        <h2 className="text-2xl font-bold text-dark-900 mb-4">
                                            {isProjectItem ? text.cards.details.aboutProject : text.cards.details.responsibilities}
                                        </h2>
                                        {isProjectItem ? (
                                            <p className="text-neutral-700 text-base leading-relaxed whitespace-pre-line" id={descriptionId}>
                                                {item.description}
                                            </p>
                                        ) : (
                                            <ul className="space-y-3" id={descriptionId}>
                                                {item.responsibilities.map((resp, index) => (
                                                    <li key={index} className="flex gap-3 text-neutral-700">
                                                        <span className="text-primary-500 mt-1.5 flex-shrink-0">•</span>
                                                        <span className="leading-relaxed">{resp}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    <div className="mb-10">
                                        <h2 className="text-2xl font-bold text-dark-900 mb-4">
                                            {isProjectItem ? text.cards.details.techStack : text.cards.details.skillsAndTech}
                                        </h2>
                                        
                                        {isProjectItem ? (
                                            projectTechStack.length > 0 ? (
                                                <div className="flex flex-wrap gap-3">
                                                    {projectTechStack.map((tech, index) => (
                                                        <motion.span
                                                            key={index}
                                                            className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-lg text-sm font-medium"
                                                            whileHover={{
                                                                scale: 1.05,
                                                                backgroundColor: 'rgb(47 111 208)',
                                                                color: 'white',
                                                            }}
                                                            transition={{ duration: 0.2 }}
                                                        >
                                                            {tech}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-sm font-medium text-neutral-500">{text.cards.details.stackNotPublished}</p>
                                            )
                                        ) : (
                                            <div className="space-y-6">
                                                {item.softwareSkills && item.softwareSkills.length > 0 && (
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-neutral-800 mb-3">{text.cards.details.software}</h3>
                                                        <div className="flex flex-wrap gap-3">
                                                            {item.softwareSkills.map((skill, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium"
                                                                >
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                
                                                {item.hardwareSkills && item.hardwareSkills.length > 0 && (
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-neutral-800 mb-3">{text.cards.details.hardware}</h3>
                                                        <div className="flex flex-wrap gap-3">
                                                            {item.hardwareSkills.map((skill, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium"
                                                                >
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {isProjectItem && (
                                        <div className="flex flex-wrap gap-4 mb-10 pb-10 border-b border-neutral-200">
                                            {hasGithubLink ? (
                                                <Button className="gap-2 bg-dark-900 hover:bg-dark-800" href={item.githubUrl} rel="noopener noreferrer" target="_blank">
                                                    <GitHubIcon className="h-5 w-5" />
                                                    {text.cards.details.viewSource}
                                                </Button>
                                            ) : null}

                                            {hasLiveDemo ? (
                                                <Button className="gap-2" href={item.liveDemoUrl} rel="noopener noreferrer" target="_blank">
                                                    <ExternalLinkIcon className="h-5 w-5" />
                                                    {text.cards.details.viewDemo}
                                                </Button>
                                            ) : null}
                                        </div>
                                    )}

                                    {isProjectItem && item.images && item.images.length > 0 && (
                                        <div>
                                            <h2 className="text-2xl font-bold text-dark-900 mb-6">{text.cards.details.gallery}</h2>
                                            <MasonryGallery 
                                                images={item.images}
                                                altTextPrefix={item.title}
                                                altTexts={item.images.map((_, index) => `${item.title} gallery image ${index + 1}`)}
                                                columns={{ mobile: 1, tablet: 2, desktop: 2 }}
                                                gap={6}
                                            />
                                        </div>
                                    )}

                                    {!isProjectItem && item.images && item.images.length > 0 && (
                                        <div>
                                            <h2 className="text-2xl font-bold text-dark-900 mb-6">{text.cards.details.gallery}</h2>
                                            <MasonryGallery 
                                                images={item.images}
                                                altTextPrefix={`${item.company} - ${item.position}`}
                                                altTexts={item.images.map((_, index) => `${item.company} ${item.position} image ${index + 1}`)}
                                                columns={{ mobile: 1, tablet: 2, desktop: 2 }}
                                                gap={6}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}