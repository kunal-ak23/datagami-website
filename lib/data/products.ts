// ---------------------------------------------------------------------------
// Products – static content data
// ---------------------------------------------------------------------------

export interface Product {
  name: string
  tagline: string
  href: string
  description: string
  features: string[]
  cardImage?: string
}

export const edudronLms: Product = {
  name: 'EduDron LMS',
  tagline: 'Learning Management System',
  href: '/services/products/edudron-lms',
  description:
    'Comprehensive learning management platform for educational institutions. EduDron LMS empowers universities and training centres with tools to create, deliver and track learning experiences at scale.',
  features: [
    'Course Management',
    'Student Progress Tracking',
    'Assessment Tools',
    'Content Library',
    'Analytics Dashboard',
    'Multi-institution Support',
  ],
  cardImage: '/images/cards/edudron-lms-card.png',
}

export const totalErp: Product = {
  name: 'Total ERP',
  tagline: 'Enterprise Resource Planning',
  href: '/services/products/total-erp',
  description:
    'End-to-end enterprise resource planning solution designed to streamline operations for educational institutions and mid-size enterprises. Total ERP brings finance, HR, inventory and projects into a single unified platform.',
  features: [
    'Financial Management',
    'HR & Payroll',
    'Inventory Management',
    'Project Management',
    'Reporting & Analytics',
    'Integration APIs',
  ],
  cardImage: '/images/cards/total-erp-card.png',
}

export const products = [edudronLms, totalErp] as const
