import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: 'company-1',
    company: 'Valji d.o.o.',
    companyLogo: '/images/logos/valji.png',
    position: 'Student Intern',
    startDate: '2020-05-04',
    endDate: '2025-09-18',
    responsibilities: [
      'IT support and maintenance of company systems',
      'Assisted in the development of internal tools and applications',
      'Provided technical support to employees and resolved IT-related issues',
      'Basic troubleshooting and problem-solving for software and hardware issues',
      'Basic server and network administration tasks',
      'Planning and building server rooms and network cabinets'
    ],
    softwareSkills: ['C#', 'C++', 'Python', 'MS SQL'],
    hardwareSkills: ['PC building & hardware repair', 'Network cabling and infrastructure setup', 'Server rack and cabinet installation', 'Hardware troubleshooting']
  },
  {
    id: 'company-2',
    company: 'Fisofi',
    companyLogo: '/images/logos/fisofi.png',
    position: 'Full Stack Developer',
    startDate: '2025-09-18',
    endDate: '2026-04-18',
    responsibilities: [
      'Leading a team of developers to create a user-friendly application',
      'Development of a cross-platform mobile application using Flutter and Dart',
      'Developing core application features',
      'Integration with Firebase services',
      'Implementation of new features and improvements based on user feedback',
      'Maintenance and optimization of the application for performance and scalability',
      'Deployment of the application to app stores and web platforms',
      'Conducting code reviews and providing feedback to team members',
      'Troubleshooting and debugging issues reported by users and providing timely resolutions',
      'Creating and maintaining technical documentation for the application and its features',
      'Conducting user testing and gathering feedback to improve the user experience',
    ],
    softwareSkills: ['Flutter (iOS, Android, Web)', 'Dart', 'JavaScript', 'Firebase/Firestore', 'Git', 'Google Cloud Platform', 'Stripe'],
    hardwareSkills: []
  }
]