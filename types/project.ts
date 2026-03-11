export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    projectType: ProjectType;
    date: string;
    githubUrl: string;
    liveDemoUrl?: string;
    images: string[];
}

export enum ProjectType {
    Personal = 'Personal',
    Professional = 'Professional',
    OpenSource = 'Open Source',
    Client = 'Client',
    Hackathon = 'Hackathon',
}