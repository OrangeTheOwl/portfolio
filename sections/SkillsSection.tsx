import SkillCard from "@/components/cards/SkillCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { FEATURES } from "@/data/constants";
import { skills } from "@/data/skills";
import { getCopy, Locale, translateSkillCategory } from "@/lib/i18n";
import { Skill, SkillCategory } from "@/types/skill";

const orderedCategories = [
	SkillCategory.ProgrammingLanguage,
	SkillCategory.Framework,
	SkillCategory.Tool,
	SkillCategory.Other,
];

export default function SkillsSection({ locale }: { locale: Locale }) {
	const text = getCopy(locale);
	const groupedSkills = skills.reduce<Record<string, Skill[]>>((accumulator, skill) => {
		if (!accumulator[skill.category]) {
			accumulator[skill.category] = [];
		}

		accumulator[skill.category].push(skill);
		return accumulator;
	}, {});

	return (
		<section id="skills" className="bg-white py-20 sm:py-24">
			<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					align="center"
					eyebrow={text.sections.skills.eyebrow}
					title={text.sections.skills.title}
					description={text.sections.skills.description}
				/>

				<div className="mt-16 grid gap-10">
					{orderedCategories
						.filter((category) => groupedSkills[category]?.length)
						.map((category) => (
							<div key={category} className="space-y-5">
								<div className="flex items-center justify-between gap-4 border-b border-neutral-200 pb-3">
									<h3 className="text-xl font-semibold text-dark-900">{translateSkillCategory(category, locale)}</h3>
									<p className="text-sm font-medium text-neutral-500">{groupedSkills[category].length} {text.sections.skills.itemsLabel}</p>
								</div>

								<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
									{groupedSkills[category].map((skill) => (
										<SkillCard
											key={skill.id}
											locale={locale}
											showProficiency={FEATURES.showSkillProficiency}
											skill={skill}
										/>
									))}
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	);
}
