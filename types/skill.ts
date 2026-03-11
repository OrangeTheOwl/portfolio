export interface Skill {
    id: string;
    name: string;
    category: SkillCategory;
    proficiency: ProficiencyLevel;
    icon: string;
}

export enum SkillCategory {
    ProgrammingLanguage = 'Programming Language',
    Framework = 'Framework',
    Tool = 'Tool',
    Other = 'Other',
}

export enum ProficiencyLevel {
    Beginner = 'Beginner',
    Intermediate = 'Intermediate',
    Advanced = 'Advanced',
    Expert = 'Expert',  
}