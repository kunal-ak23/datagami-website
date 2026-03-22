// ---------------------------------------------------------------------------
// Company – static content data
// ---------------------------------------------------------------------------

export interface Office {
  city: string
  address: string
}

export interface ValueProposition {
  title: string
  description: string
}

export interface CompanyData {
  companyName: string
  shortName: string
  tagline: string
  email: string
  phones: string[]
  offices: Office[]
  stats: {
    partnerUniversities: string
    studentsImpacted: string
    programsDelivered: string
  }
  mission: string
  vision: string
  whyChooseUs: ValueProposition[]
}

export const company: CompanyData = {
  companyName: 'Datagami Technology Services Private Limited',
  shortName: 'Datagami',
  tagline: 'Lead Digital Technology',
  email: 'query@datagami.in',
  phones: ['+91 97029 34397', '+91 77381 70621'],
  offices: [
    {
      city: 'Mumbai',
      address:
        'Datagami Technology Services Pvt. Ltd., Office No. 301, 3rd Floor, Laxmi Heights, Lal Bahadur Shastri Marg, Bhandup (W), Mumbai – 400078, Maharashtra, India',
    },
    {
      city: 'Bengaluru',
      address:
        'Datagami Technology Services Pvt. Ltd., 2nd Floor, No. 42, 1st Cross, 1st Main, Ganganagar, Bengaluru – 560032, Karnataka, India',
    },
  ],
  stats: {
    partnerUniversities: '50+',
    studentsImpacted: '10K+',
    programsDelivered: '200+',
  },
  mission:
    'To empower educational institutions and enterprises with technology-driven solutions that bridge the gap between academia and industry, creating a future-ready workforce.',
  vision:
    'To be India\'s most trusted partner in education technology and workforce transformation, enabling every learner to achieve career success through industry-aligned training and innovation.',
  whyChooseUs: [
    {
      title: 'End-to-End Solutions',
      description:
        'From curriculum design and LMS deployment to placement support and ERP management — we cover the entire education value chain.',
    },
    {
      title: 'Industry-Aligned Expertise',
      description:
        'Our programs are co-developed with leading employers in BFSI, IT, clinical research and emerging technology sectors.',
    },
    {
      title: 'Scalable Systems',
      description:
        'Purpose-built platforms like EduDron LMS and Total ERP are designed to scale from a single campus to a statewide university system.',
    },
    {
      title: 'Reliable Delivery',
      description:
        'With 200+ programs delivered and 10,000+ students impacted, we have a proven track record of execution and outcomes.',
    },
    {
      title: 'Workforce Enablement',
      description:
        'Our hiring and placement services ensure that trained talent reaches the right employers efficiently and at scale.',
    },
    {
      title: 'Insight-Driven Decisions',
      description:
        'Real-time analytics and reporting give institutions and policy makers the data they need to measure impact and improve continuously.',
    },
  ],
}
