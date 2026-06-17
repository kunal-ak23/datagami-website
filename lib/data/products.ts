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
  tagline: 'AI-powered learning, assessment & placement platform',
  href: '/services/products/edudron-lms',
  description:
    'One AI-powered platform for the entire learner journey — AI-assisted course authoring, proctored exams with instructor or AI evaluation, verified digital credentials, business simulations, psychometric career mapping, deep reports & analytics, and an integrated jobs portal. Seven tailored login types over a single, securely isolated multi-tenant platform.',
  features: [
    'AI-Assisted Course Authoring',
    'Proctored Exams (Instructor or AI Evaluation)',
    'Reports & Analytics',
    'Verified Digital Credentials',
    'Business Simulations & Career Mapping',
    'White-Label Multi-Tenancy',
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
