import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: 'company-1',
    company: 'Tech Solutions Inc.',
    companyLogo: '/images/experience/company1-logo.png',
    position: 'Software Engineer',
    startDate: new Date('2022-01-01'),
    endDate: new Date('2023-12-31'),
    responsibilities: [
      'Developed and maintained web applications using React and Node.js',
      'Collaborated with cross-functional teams to deliver high-quality software solutions'
    ],
    softwareSkills: ['React', 'Node.js', 'TypeScript'],
    hardwareSkills: ['Docker', 'AWS']
  },
  {
    id: 'company-2',
    company: 'Tech Solutions Inc.',
    companyLogo: '/images/experience/company1-logo.png',
    position: 'Software Engineer',
    startDate: new Date('2022-01-01'),
    endDate: new Date('2023-12-31'),
    responsibilities: [
      'Developed and maintained web applications using React and Node.js',
      'Collaborated with cross-functional teams to deliver high-quality software solutions'
    ],
    softwareSkills: ['React', 'Node.js', 'TypeScript'],
    hardwareSkills: ['Docker', 'AWS']
  }
]