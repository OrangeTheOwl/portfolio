export interface Experience {
    id: string;
    company: string;
    companyLogo?: string;
    images?: string[];
    position: string;
    startDate: Date;
    endDate?: Date;
    responsibilities: string[];
    softwareSkills?: string[];
    hardwareSkills?: string[];
}