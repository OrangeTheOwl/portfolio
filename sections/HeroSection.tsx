"use client";
import { motion, Variants } from 'framer-motion';
import Button from "@/components/ui/Button";
import HeroLineBackground from "@/components/ui/HeroLineBackground";
import { PERSONAL_INFO } from "@/data/constants";
import { getCopy, Locale } from "@/lib/i18n";

interface HeroSectionProps {
	locale: Locale;
}

export default function HeroSection({ locale }: HeroSectionProps) {
	const text = getCopy(locale);

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.4,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { 
			opacity: 0, 
			y: 20,
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

	return (
		<section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-white via-white to-neutral-50 py-8 sm:py-10">
			<HeroLineBackground />

			<div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<motion.div 
					className="mx-auto max-w-4xl space-y-8 text-center"
					initial="hidden"
					animate="show"
					variants={containerVariants}
				>
					<motion.span 
						className="mx-auto inline-flex rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700"
						variants={itemVariants}
					>
						{text.personal.availability}
					</motion.span>

					<motion.div 
						className="space-y-6"
						variants={itemVariants}
					>
						<p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
							{text.personal.title}
						</p>
						<h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-dark-900 sm:text-6xl">
							{PERSONAL_INFO.firstName} {PERSONAL_INFO.lastName}
						</h1>
						<p className="mx-auto max-w-3xl text-lg leading-8 text-neutral-600 sm:text-xl">
							{text.personal.tagline}. {text.hero.introSuffix}
						</p>
					</motion.div>

					<motion.div 
						className="flex flex-wrap items-center justify-center gap-3"
						variants={itemVariants}
					>
						<Button href="#projects">{text.hero.seeProjects}</Button>
						<Button href="#experience" variant="ghost">
							{text.hero.viewExperience}
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
