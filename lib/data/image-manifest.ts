export const images = {
  // Logo images
  logo: '/images/logo/datagami-logo.webp',
  logoAlt: '/images/logo/datagami-logo-alt.png',
  logoAnimated: '/images/logo/datagami-logo-animated.png',
  ibmIceLogo: '/images/logo/ibm-ice-logo.jpg',

  // Hero / banner images
  heroStudentsCollaborating: '/images/hero/hero-students-collaborating.png',
  heroFinlearnClassroom: '/images/hero/hero-finlearn-classroom.png',
  heroIbmIceLab: '/images/hero/hero-ibm-ice-lab.png',
  heroTeamInnovation: '/images/hero/hero-team-innovation.png',
  heroEdtechDashboard: '/images/hero/hero-edtech-dashboard.png',

  // Program-specific images
  finlearnStudents: '/images/programs/finlearn-students.png',
  techlearnStudents: '/images/programs/techlearn-students.png',
  clinomicLab: '/images/programs/clinomic-lab.png',

  // Services page images
  ibmIceCenter: '/images/services/ibm-ice-center.png',
  techlearnTraining: '/images/services/techlearn-training.png',
  itHiringProfessionals: '/images/services/it-hiring-professionals.png',

  // About page images
  teamCollaboration: '/images/about/team-collaboration.png',
  universityCampus: '/images/about/university-campus.png',

  // Product images
  sineapLmsDashboard: '/images/products/sineap-lms-dashboard.png',
  sineapLmsSecurity: '/images/products/sineap-lms-security.png',
  sineapLmsAnalytics: '/images/products/sineap-lms-analytics.png',
  totalErpBg: '/images/products/total-erp-bg.png',
  totalErpDashboard: '/images/products/total-erp-dashboard.png',
  totalErpPreview: '/images/products/total-erp-preview.png',
} as const

export const imageAltText: Record<keyof typeof images, string> = {
  logo: 'Datagami - Lead Digital Technology',
  logoAlt: 'Datagami Logo',
  logoAnimated: 'Datagami Animated Logo',
  ibmIceLogo: 'IBM ICE - Innovation Center for Education Logo',

  heroStudentsCollaborating: 'University students collaborating with technology',
  heroFinlearnClassroom: 'Professional financial education classroom with students learning BFSI concepts in warm, modern setting',
  heroIbmIceLab: 'Students learning IBM technologies in modern computer lab with cloud computing and AI tools',
  heroTeamInnovation: 'Datagami team collaborating on educational innovation',
  heroEdtechDashboard: 'Education technology dashboard and analytics',

  finlearnStudents: 'FinLEARN students in modern financial training environment with industry-standard tools',
  techlearnStudents: 'Students learning advanced technology skills',
  clinomicLab: 'Clinical Research Laboratory - Modern facilities for hands-on training',

  ibmIceCenter: 'IBM ICE Innovation Center',
  techlearnTraining: 'TechLearn advanced technology training',
  itHiringProfessionals: 'IT professionals collaborating on technology solutions',

  teamCollaboration: 'Team collaboration and strategic planning',
  universityCampus: 'University campus and students',

  sineapLmsDashboard: 'Sineap LMS Dashboard Interface',
  sineapLmsSecurity: 'Security and Permissions Dashboard',
  sineapLmsAnalytics: 'AI Learning Analytics Dashboard',
  totalErpBg: 'Total ERP Background',
  totalErpDashboard: 'Total ERP Dashboard Interface',
  totalErpPreview: 'Total ERP Dashboard Preview',
} as const

export type ImageKey = keyof typeof images
