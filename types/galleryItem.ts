export interface GalleryItem {
    id: string;
    title: string;
    description: string;
    category: GalleryCategory;
    image: string;
    images?: string[];
    tags?: string[]; 
    date?: Date;
    externalLink?: string; // Optional link to project, article, etc.
}

export enum GalleryCategory {
    Creative = 'Creative',
    Article = 'Article',
    Award = 'Award',
    Fitness = 'Fitness',
    Professional = 'Professional',
    Other = 'Other',
}