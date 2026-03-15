import { ProjectType } from "@/types/project";

// ============================================
// PERSONAL INFORMATION
// ============================================
export const PERSONAL_INFO = {
  name: 'Vid Safranko',
  firstName:"Vid",
  lastName:"Šafranko",
  title: 'Full-Stack Developer & Infrastructure Engineer',
  tagline: 'Building scalable applications and reliable systems',
  email: 'your.email@example.com',
  location: 'City, Country',
  availability: 'Open to opportunities', // or 'Currently employed', 'Freelancing', etc.
} as const;

// ============================================
// SOCIAL LINKS
// ============================================
export const SOCIAL_LINKS = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
} as const;

// ============================================
// NAVIGATION
// ============================================
export const NAV_ITEMS = [
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

// ============================================
// SITE METADATA (for SEO)
// ============================================
export const SITE_METADATA = {
  title: 'Your Name - Full-Stack Developer Portfolio',
  description: 'Full-stack developer specializing in React, Flutter, and infrastructure. View my projects, experience, and technical skills.',
  url: 'https://yourportfolio.com',
  image: '/images/og-image.png', // Open Graph image for social sharing
  keywords: [
    'full-stack developer',
    'react developer',
    'flutter developer',
    'infrastructure engineer',
    'web development',
    'mobile development',
  ],
} as const;

// ============================================
// CONTACT FORM CONFIGURATION
// ============================================
export const CONTACT_CONFIG = {
  recipientEmail: 'your.email@example.com', // Where form submissions go
  maxMessageLength: 1000,
  requiredFields: ['name', 'email', 'message'],
  successMessage: 'Thanks for reaching out! I\'ll get back to you soon.',
  errorMessage: 'Something went wrong. Please try emailing me directly at your.email@example.com',
} as const;

// ============================================
// FEATURE FLAGS (toggle features on/off)
// ============================================
export const FEATURES = {
  showGallery: true,           // Set to false to hide gallery section
  showSkillProficiency: true,  // Show skill level bars
  enableContactForm: true,     // Set to false to show email link only
  enableDarkMode: false,       // Not implemented yet
} as const;

// ============================================
// UI CONFIGURATION
// ============================================
export const UI_CONFIG = {
  maxProjectsOnHomepage: 6,    // Show 6 projects, hide rest under "View More"
  maxSkillsOnHomepage: 8,      // Show top 8 skills in hero
  animationDuration: 300,      // Milliseconds for transitions
  scrollOffset: -80,           // Offset for smooth scroll (accounts for navbar height)
} as const;

// ============================================
// EXTERNAL RESOURCES
// ============================================
export const EXTERNAL_LINKS = {
  resume: '/resume.pdf',       // Download link in navbar
  sourceCode: 'https://github.com/yourusername/portfolio', // Link to portfolio source
} as const;

export const PROJECT_TYPE_STYLES: Record<ProjectType, { bg: string; text: string; border: string }> = {
  [ProjectType.Personal]: {
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    border: 'border-blue-300',
  },
  [ProjectType.Professional]: {
    bg: 'bg-green-100',
    text: 'text-green-700',
    border: 'border-green-300',
  },
  [ProjectType.OpenSource]: {
    bg: 'bg-purple-100',
    text: 'text-purple-700',
    border: 'border-purple-300',
  },
  [ProjectType.Client]: {
    bg: 'bg-accent-100',
    text: 'text-accent-700',
    border: 'border-accent-300',
  },
  [ProjectType.Hackathon]: {
    bg: 'bg-primary-100',
    text: 'text-primary-700',
    border: 'border-primary-300',
  },
} as const;

// ============================================
// GALLERY CATEGORIES LABELS (human-readable)
// ============================================
export const GALLERY_CATEGORY_LABELS = {
  creative: 'Creative Work',
  achievement: 'Achievements',
  fitness: 'Personal Growth',
  professional: 'Professional',
} as const;

// ============================================
// SKILL CATEGORY LABELS (human-readable)
// ============================================
export const SKILL_CATEGORY_LABELS = {
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobile',
  infrastructure: 'Infrastructure & DevOps',
  database: 'Databases',
  tools: 'Tools & Platforms',
  other: 'Other',
} as const;

// ============================================
// BREAKPOINTS (for responsive design)
// ============================================
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// ============================================
// ANIMATION VARIANTS (for Framer Motion, if you use it)
// ============================================
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
} as const;