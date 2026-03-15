export interface Experience {
    id: string;
    company: string;
    companyLogo?: string;
    images?: string[];
    position: string;
    startDate: string;
    endDate?: string;
    responsibilities: string[];
    softwareSkills?: string[];
    hardwareSkills?: string[];
}