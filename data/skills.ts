import { ProficiencyLevel, Skill, SkillCategory } from "@/types/skill";

export const skills: Skill[] = [
	{
		id: "typescript",
		name: "TypeScript",
		category: SkillCategory.ProgrammingLanguage,
		proficiency: ProficiencyLevel.Advanced,
	},
	{
		id: "javascript",
		name: "JavaScript",
		category: SkillCategory.ProgrammingLanguage,
		proficiency: ProficiencyLevel.Advanced,
	},
	{
		id: "dart",
		name: "Dart",
		category: SkillCategory.ProgrammingLanguage,
		proficiency: ProficiencyLevel.Advanced,
	},
	{
		id: "python",
		name: "Python",
		category: SkillCategory.ProgrammingLanguage,
		proficiency: ProficiencyLevel.Intermediate,
	},
	{
		id: "nextjs",
		name: "Next.js",
		category: SkillCategory.Framework,
		proficiency: ProficiencyLevel.Advanced,
	},
	{
		id: "react",
		name: "React",
		category: SkillCategory.Framework,
		proficiency: ProficiencyLevel.Advanced,
	},
	{
		id: "flutter",
		name: "Flutter",
		category: SkillCategory.Framework,
		proficiency: ProficiencyLevel.Advanced,
	},
	{
		id: "tailwind",
		name: "Tailwind CSS",
		category: SkillCategory.Framework,
		proficiency: ProficiencyLevel.Advanced,
	},
	{
		id: "nodejs",
		name: "Node.js",
		category: SkillCategory.Tool,
		proficiency: ProficiencyLevel.Intermediate,
	},
	{
		id: "firebase",
		name: "Firebase / Firestore",
		category: SkillCategory.Tool,
		proficiency: ProficiencyLevel.Intermediate,
	},
	{
		id: "gcp",
		name: "Google Cloud Platform",
		category: SkillCategory.Tool,
		proficiency: ProficiencyLevel.Intermediate,
	},
	{
		id: "git",
		name: "Git",
		category: SkillCategory.Tool,
		proficiency: ProficiencyLevel.Advanced,
	},
	{
		id: "openai",
		name: "OpenAI API",
		category: SkillCategory.Other,
		proficiency: ProficiencyLevel.Intermediate,
	},
	{
		id: "infrastructure",
		name: "Infrastructure and systems support",
		category: SkillCategory.Other,
		proficiency: ProficiencyLevel.Intermediate,
	},
];
