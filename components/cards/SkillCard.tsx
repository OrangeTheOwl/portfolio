import Badge from "@/components/ui/Badge";
import { getCopy, Locale, translateProficiency, translateSkillCategory } from "@/lib/i18n";
import { ProficiencyLevel, Skill } from "@/types/skill";

interface SkillCardProps {
	skill: Skill;
	locale: Locale;
	showProficiency?: boolean;
}

const proficiencyPercent: Record<ProficiencyLevel, number> = {
	[ProficiencyLevel.Beginner]: 35,
	[ProficiencyLevel.Intermediate]: 55,
	[ProficiencyLevel.Advanced]: 78,
	[ProficiencyLevel.Expert]: 92,
};

export default function SkillCard({ skill, locale, showProficiency = true }: SkillCardProps) {
	const text = getCopy(locale);
	return (
		<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md">
			<div className="flex items-start justify-between gap-4">
				<div className="space-y-2">
					<p className="text-lg font-semibold text-dark-900">{skill.name}</p>
					<p className="text-sm text-neutral-600">{translateSkillCategory(skill.category, locale)}</p>
				</div>

				<Badge className="border-neutral-200 bg-neutral-100 text-neutral-700">
					{translateProficiency(skill.proficiency, locale)}
				</Badge>
			</div>

			{showProficiency ? (
				<div className="mt-4 space-y-2">
					<div className="h-2 overflow-hidden rounded-full bg-neutral-100">
						<div
							className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
							style={{ width: `${proficiencyPercent[skill.proficiency]}%` }}
						/>
					</div>
					<p className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
						{text.sections.skills.strengthArea}
					</p>
				</div>
			) : null}
		</div>
	);
}
