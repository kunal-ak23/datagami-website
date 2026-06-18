// ---------------------------------------------------------------------------
// Navigation – centralized nav structure for Navbar and Footer
// ---------------------------------------------------------------------------

export interface NavChild {
  label: string
  href: string
  description?: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

export interface FooterLink {
  label: string
  href: string
}

// ---------------------------------------------------------------------------
// Main navigation
// ---------------------------------------------------------------------------

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Education',
    href: '/services/education',
    children: [
      { label: 'FinLEARN', href: '/services/education/finlearn', description: 'BFSI education platform' },
      { label: 'TechLEARN', href: '/services/education/techlearn', description: 'Technology training programs' },
      { label: 'IBM ICE', href: '/services/education/ibm-ice', description: 'IBM badge programs' },
      { label: 'Clinomic', href: '/services/education/clinomic', description: 'Clinical research education' },
    ],
  },
  {
    label: 'Products',
    href: '/services/products',
    children: [
      { label: 'EduDron LMS', href: '/services/products/edudron-lms', description: 'Learning management system' },
      { label: 'Total ERP', href: '/services/products/total-erp', description: 'Enterprise resource planning' },
    ],
  },
  {
    label: 'Hiring',
    href: '/services/hiring',
    children: [
      { label: 'Recruitment & Staffing', href: '/services/hiring/talent-acquisition' },
      { label: 'Student Placement', href: '/services/hiring/student-placement' },
      { label: 'Strategic Consulting', href: '/services/hiring/consulting' },
      { label: 'Technical Support', href: '/services/hiring/technical-support' },
    ],
  },
  {
    label: 'Enterprise Solutions',
    href: '/services/software/enterprise-solutions',
    children: [
      { label: 'Enterprise Software & Digital Solutions', href: '/services/software/enterprise-solutions', description: 'Custom software, infrastructure & AI' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

// ---------------------------------------------------------------------------
// Footer links
// ---------------------------------------------------------------------------

export const footerQuickLinks: FooterLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
]

export const footerPrograms: FooterLink[] = [
  { label: 'FinLEARN', href: '/services/education/finlearn' },
  { label: 'TechLEARN', href: '/services/education/techlearn' },
  { label: 'IBM ICE', href: '/services/education/ibm-ice' },
  { label: 'Clinomic', href: '/services/education/clinomic' },
  { label: 'EduDron LMS', href: '/services/products/edudron-lms' },
  { label: 'Total ERP', href: '/services/products/total-erp' },
]
