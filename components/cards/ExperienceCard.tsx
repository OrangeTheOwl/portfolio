"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Badge from "@/components/ui/Badge";
import { getCopy, Locale, template } from "@/lib/i18n";
import { calculateDuration, compactList, formatMonthYear } from "@/lib/utils";
import { Experience } from "@/types/experience";

interface ExperienceCardProps {
	experience: Experience;
	locale: Locale;
	onSelect: () => void;
}

export default function ExperienceCard({ experience, locale, onSelect }: ExperienceCardProps) {
	const text = getCopy(locale);
	const skillPreview = compactList([
		...(experience.softwareSkills ?? []).slice(0, 3),
		...(experience.hardwareSkills ?? []).slice(0, 2),
	]);

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			onSelect();
		}
	};

	return (
		<motion.div
			className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg"
			whileHover={{ y: -4 }}
			onClick={onSelect}
			onKeyDown={handleKeyDown}
			role="button"
			tabIndex={0}
			aria-haspopup="dialog"
			aria-label={template(text.cards.experience.openDetailsAria, {
				position: experience.position,
				company: experience.company,
			})}
		>
			<div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
				<div className="flex items-start gap-4">
					{experience.companyLogo ? (
						<div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-neutral-100">
							<Image
								src={experience.companyLogo}
								alt={experience.company}
								width={56}
								height={56}
								className="h-full w-full object-contain"
							/>
						</div>
					) : (
						<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-lg font-bold text-primary-700">
							{experience.company.charAt(0)}
						</div>
					)}

					<div className="space-y-2">
						<p className="text-sm font-semibold uppercase tracking-[0.18em] text-neutral-500">{text.cards.experience.label}</p>
						<h3 className="text-2xl font-bold text-dark-900">{experience.position}</h3>
						<p className="text-lg font-medium text-neutral-700">{experience.company}</p>
						<p className="max-w-2xl text-sm leading-6 text-neutral-600">
							{experience.responsibilities[0]}
						</p>
					</div>
				</div>

				<Badge className="w-fit border-neutral-200 bg-neutral-100 text-neutral-700 md:self-start">
					{`${formatMonthYear(experience.startDate, locale)} - ${experience.endDate ? formatMonthYear(experience.endDate, locale) : text.cards.experience.present} · ${calculateDuration(experience.startDate, experience.endDate, locale)}`}
				</Badge>
			</div>

			<div className="mt-6 flex flex-wrap gap-2">
				{skillPreview.map((skill) => (
					<Badge key={skill} className="border-secondary-200 bg-secondary-50 text-secondary-700">
						{skill}
					</Badge>
				))}
			</div>
		</motion.div>
	);
}
