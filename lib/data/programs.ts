// ---------------------------------------------------------------------------
// Programs – static content data
// ---------------------------------------------------------------------------

export interface ProgramTrack {
  name: string
  level?: string
  description: string
  duration?: string
  modules?: number
  href?: string
  accentColor?: string
  skills?: string[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface ProgramStats {
  [key: string]: string
}

export interface TrackCategory {
  name: string
  trackCount: number | string
  tracks: string[]
  cardImage?: string
}

// ---------------------------------------------------------------------------
// FinLEARN
// ---------------------------------------------------------------------------

export interface FinLEARNProgram {
  name: string
  tagline: string
  description: string
  href: string
  cardImage?: string
  tracks: ProgramTrack[]
  stats: {
    placementRate: string
    graduates: string
    partners: string
    avgPackage: string
  }
  faqs: FAQ[]
}

export const finlearn: FinLEARNProgram = {
  name: 'FinLEARN',
  tagline: 'BFSI & Finance Program Excellence',
  description:
    'FinLEARN by Datagami is a comprehensive Banking, Financial Services & Insurance (BFSI) program designed to help universities close the gap between academic instruction and real-world financial industry expectations. Developed in collaboration with leading financial institutions, the curriculum is continuously updated to reflect evolving market needs, regulatory changes, and emerging sector trends.\n\nThrough hands-on apprenticeships, real-world projects, and expert mentorship from industry veterans, we prepare students for successful careers in the dynamic world of finance and banking. Our graduates don\'t just find jobs — they launch careers with confidence and competence.',
  href: '/services/education/finlearn',
  cardImage: '/images/cards/finlearn-card.png',
  tracks: [
    // Undergraduate Programs
    {
      name: 'CP-BFSI Integrated Undergraduate Program with Apprenticeship',
      level: 'UG',
      duration: '3 Years',
      description:
        'A structured BFSI-focused undergraduate pathway covering capital markets, wealth management, retail banking, banking operations, corporate readiness, and interview preparation. Designed to integrate academic learning with applied finance skills and hands-on assessments across 6 semesters.',
      skills: ['Paid Apprenticeship', 'Industry Mentorship', 'Practical Training', 'Placement Assistance'],
    },
    {
      name: 'IBOP Integrated Undergraduate Program with Apprenticeship',
      level: 'UG',
      duration: '3 Years',
      description:
        'A focused undergraduate program combining core business fundamentals with specialized training in BFSI and Investment Banking Operations (IBOP), preparing students with practical finance skills and strong placement readiness.',
      skills: ['Applied BFSI & IBOP Training', 'Industry-Aligned Curriculum', 'Skill Development', 'Placement Assistance'],
    },
    // Postgraduate Programs
    {
      name: 'MBA in Investment Banking Operations (IBOP)',
      level: 'PG',
      duration: '2 Years',
      description:
        'A specialized postgraduate program designed to build advanced capabilities in Investment Banking Operations. Delivered through a blend of offline foundation modules, online IBOP training levels, NISM certifications, and paid on-the-job training (OJT) that leads to full-time roles in leading financial organizations.',
      skills: ['Advanced IBOP', 'Paid OJT', 'NISM Certifications', 'Market Skills', 'Operational Expertise', 'Placement Assistance'],
    },
    {
      name: 'MBA in Wealth Management',
      level: 'PG',
      duration: '2 Years',
      description:
        'A specialized postgraduate program designed to build advanced expertise in Wealth Management, Capital Markets, Insurance Planning, and Financial Advisory. Delivered through a blended model with WM Level-1 & Level-2 modules, CP-BFSI training, NISM certifications, and paid OJT opportunities that lead to full-time roles in the finance sector.',
      skills: ['Advanced Training', 'Wealth Expertise', 'Paid OJT', 'NISM Certified', 'Career Progression', 'Placement Assistance'],
    },
    // Short-Term Certification Programs
    {
      name: 'Retail Banking Fundamentals',
      level: 'Certificate',
      duration: '3 Months',
      description: 'Overview of Indian banking systems, RBI policy, customer onboarding, lending products, and digital banking.',
      skills: ['Customer Focus', 'Banking Basics', 'Digital Ready'],
    },
    {
      name: 'Banking Operations Essentials',
      level: 'Certificate',
      duration: '3 Months',
      description: 'Core transaction processes, KYC/AML, cash management, trade finance, and operational risk controls.',
      skills: ['Process Skills', 'Risk Control', 'Compliance Basics'],
    },
    {
      name: 'Capital Markets Foundation',
      level: 'Certificate',
      duration: '3 Months',
      description: 'Introduction to capital markets, indices, financial instruments, and fundamental/technical analysis.',
      skills: ['Market Basics', 'Analysis Skills', 'Trading Concepts'],
    },
    {
      name: 'Derivatives & Strategies',
      level: 'Certificate',
      duration: '3 Months',
      description: 'Fundamentals of derivatives, options payoffs, Greeks, and directional & non-directional trading strategies.',
      skills: ['Options Basics', 'Strategy Design', 'Risk Hedging'],
    },
    {
      name: 'Wealth Management Basics',
      level: 'Certificate',
      duration: '3 Months',
      description: 'Client profiling, asset allocation, mutual funds, investment strategies, and retirement & estate planning.',
      skills: ['Client Focus', 'Asset Mix', 'Goal Planning'],
    },
    {
      name: 'Insurance & Risk Basics',
      level: 'Certificate',
      duration: '3 Months',
      description: 'Principles of insurance, IRDA framework, policy types, claims, and distribution channels.',
      skills: ['Risk Cover', 'Policy Types', 'Claims Know-how'],
    },
    {
      name: 'Interview & Finishing School',
      level: 'Certificate',
      duration: '1 Month',
      description: 'Resume and LinkedIn optimisation, interview Q&A, professional etiquette, MS Office, and mock interviews.',
      skills: ['Resume Ready', 'Interview Skills', 'Workplace Etiquette'],
    },
    {
      name: 'Investment Banking Operations - Level I',
      level: 'Certificate',
      duration: '2 Months',
      description: 'Global financial landscape, FX, equity, debt, mutual funds, and cross-border regulations and ethics.',
      skills: ['Global Markets', 'Product Basics', 'Regulatory View'],
    },
    {
      name: 'Investment Banking Operations - Level II',
      level: 'Certificate',
      duration: '2 Months',
      description: 'Securities lifecycle, custody and reconciliation, clearing & settlement, corporate actions, and taxation.',
      skills: ['Trade Lifecycle', 'Settlement Flow', 'Tax Basics'],
    },
    {
      name: 'Investment Banking Operations - Level III',
      level: 'Certificate',
      duration: '2 Months',
      description: 'Enterprise risk management, market & liquidity risk, regulatory frameworks, and global risk case studies.',
      skills: ['Risk Management', 'Regulatory Insight', 'Case Studies'],
    },
    {
      name: 'Chartered Wealth Management Advance - Level I',
      level: 'Certificate',
      duration: '3 Months',
      description: 'Concepts of wealth management, investment vehicles, risk–return, insurance, legalities, and intergenerational planning.',
      skills: ['Wealth Concepts', 'Legal Framework', 'Risk Return'],
    },
    {
      name: 'Chartered Wealth Management Advance - Level II',
      level: 'Certificate',
      duration: '3 Months',
      description: 'Equity analysis, alternatives, real-estate valuation, behavioural finance, portfolio strategies, tax and wealth tech.',
      skills: ['Equity Insight', 'Portfolio Design', 'Tax Strategy'],
    },
    {
      name: 'Family Office Planning - Level I',
      level: 'Certificate',
      duration: '3 Months',
      description: 'Family governance, legal structures, investment policy, asset allocation, accounting, and risk management.',
      skills: ['Family Governance', 'Policy Design', 'Risk Oversight'],
    },
    {
      name: 'Family Office Planning - Level II',
      level: 'Certificate',
      duration: '3 Months',
      description: 'Direct investment strategies, tax planning, philanthropy, succession, and vendor management.',
      skills: ['Direct Deals', 'Tax Planning', 'Succession Plan'],
    },
  ],
  stats: {
    placementRate: '95%',
    graduates: '500+',
    partners: '50+',
    avgPackage: '₹3.5L',
  },
  faqs: [],
}

// ---------------------------------------------------------------------------
// TechLEARN
// ---------------------------------------------------------------------------

export interface TechLEARNProgram {
  name: string
  tagline: string
  href: string
  cardImage?: string
  tracks: ProgramTrack[]
  faqs: FAQ[]
}

export const techlearn: TechLEARNProgram = {
  name: 'TechLEARN',
  tagline: 'Technology Training Programs',
  href: '/services/education/techlearn',
  cardImage: '/images/cards/techlearn-card.png',
  tracks: [
    {
      name: 'Cloud Computing with AI',
      duration: '11 months',
      modules: 14,
      href: '/services/education/techlearn/cloud-computing',
      accentColor: 'cloud',
      skills: ['AWS', 'Azure', 'GCP', 'CCNA', 'MCSA', 'RedHat SA1'],
      description:
        'Master cloud platforms and AI-driven infrastructure management across AWS, Azure and Google Cloud.',
    },
    {
      name: 'Metaverse',
      duration: '11 months',
      modules: 6,
      href: '/services/education/techlearn/metaverse',
      accentColor: 'metaverse',
      skills: ['3D Design', 'XR', 'Animation', 'Motion Graphics', 'VFX', 'UI/UX'],
      description:
        'Create immersive experiences with 3D design, extended reality and motion graphics for the metaverse.',
    },
    {
      name: 'Blockchain',
      duration: '6 months',
      modules: 5,
      href: '/services/education/techlearn/blockchain',
      accentColor: 'blockchain',
      skills: ['Solidity', 'Smart Contracts', 'DApps', 'Web3'],
      description:
        'Build decentralized applications and smart contracts on leading blockchain platforms.',
    },
    {
      name: 'Chip Design',
      duration: '12 months',
      modules: 4,
      href: '/services/education/techlearn/chip-design',
      accentColor: 'chipdesign',
      skills: ['VLSI', 'FPGA', 'C/C++', 'EDA Tools'],
      description:
        'Design and verify semiconductor chips using industry-standard VLSI and FPGA workflows.',
    },
  ],
  faqs: [
    {
      question: 'Do I need prior programming experience to join TechLEARN?',
      answer:
        'Not necessarily. While some tracks (e.g., Blockchain, Chip Design) benefit from programming basics, each program starts with foundational modules that bring all students up to speed.',
    },
    {
      question: 'Are TechLEARN certifications industry-recognized?',
      answer:
        'Yes. TechLEARN programs prepare you for globally recognized vendor certifications such as AWS, Azure, RedHat and Cisco credentials alongside the Datagami program certificate.',
    },
    {
      question: 'What career support does TechLEARN offer?',
      answer:
        'Every TechLEARN student receives resume building workshops, mock interviews, and access to our hiring partner network. Internship opportunities are integrated into longer programs.',
    },
    {
      question: 'Can I take more than one TechLEARN track?',
      answer:
        'Yes, students who complete one track can enroll in additional tracks at a discounted fee. Many students combine Cloud Computing with Blockchain for a well-rounded skill set.',
    },
    {
      question: 'What is the mode of delivery for TechLEARN programs?',
      answer:
        'TechLEARN uses a blended learning model — instructor-led sessions, hands-on labs, and self-paced online modules — ensuring flexibility without compromising quality.',
    },
  ],
}

// ---------------------------------------------------------------------------
// IBM ICE
// ---------------------------------------------------------------------------

export interface IBMICEProgram {
  name: string
  fullName: string
  tagline: string
  href: string
  cardImage?: string
  stats: {
    badgePrograms: string
    studentsCertified: string
    partnerInstitutes: string
  }
  trackCategories: TrackCategory[]
}

export const ibmIce: IBMICEProgram = {
  name: 'IBM ICE',
  fullName: 'IBM Innovation Centre of Excellence',
  tagline: 'Badge Programs',
  href: '/services/education/ibm-ice',
  cardImage: '/images/cards/ibm-ice-card.png',
  stats: {
    badgePrograms: '15+',
    studentsCertified: '10000+',
    partnerInstitutes: '12+',
  },
  trackCategories: [
    {
      name: 'Technology',
      trackCount: 11,
      cardImage: '/images/cards/ibm-tech-card.png',
      tracks: [
        'Artificial Intelligence',
        'Cloud Computing',
        'Cybersecurity',
        'Data Science',
        'Internet of Things (IoT)',
        'Blockchain',
        'Machine Learning',
        'DevOps',
        'Full Stack Development',
        'Mobile App Development',
        'Robotic Process Automation',
      ],
    },
    {
      name: 'Industry',
      trackCount: 6,
      cardImage: '/images/cards/ibm-industry-card.png',
      tracks: [
        'Banking & Financial Services',
        'Healthcare & Life Sciences',
        'Retail & Consumer Products',
        'Supply Chain & Logistics',
        'Telecommunications',
        'Energy & Utilities',
      ],
    },
    {
      name: 'Deep Technical Skills',
      trackCount: 8,
      cardImage: '/images/cards/ibm-deeptech-card.png',
      tracks: [
        'Quantum Computing',
        'Mainframe Development',
        'Enterprise Architecture',
        'API & Microservices',
        'Container Orchestration',
        'Database Administration',
        'Network Engineering',
        'Systems Integration',
      ],
    },
    {
      name: 'Short-term Certificates',
      trackCount: 60,
      cardImage: '/images/cards/ibm-certs-card.png',
      tracks: [
        'Python for Data Science',
        'SQL & Database Fundamentals',
        'Cloud Foundations',
        'AI Chatbot Development',
        'Web Development Essentials',
        'Project Management',
        'Agile Methodology',
        'Business Analytics',
      ],
    },
  ],
}

// ---------------------------------------------------------------------------
// Clinomic
// ---------------------------------------------------------------------------

export interface ClinomicProgram {
  name: string
  tagline: string
  href: string
  cardImage?: string
  duration: string
  coreAreas: string[]
  stats: {
    placements: string
    placementRate: string
  }
  applicationProcess: string[]
  faqs: FAQ[]
}

export const clinomic: ClinomicProgram = {
  name: 'Clinomic',
  tagline: 'Clinical Research Education Centre',
  href: '/services/education/clinomic',
  cardImage: '/images/cards/clinomic-card.png',
  duration: '6 months',
  coreAreas: [
    'Clinical Research Methodology',
    'Good Clinical Practice (GCP)',
    'Data Management',
    'Regulatory Affairs',
  ],
  stats: {
    placements: '500+',
    placementRate: '95%',
  },
  applicationProcess: ['Apply Online', 'Assessment', 'Interview', 'Enrollment'],
  faqs: [
    {
      question: 'Who can apply for the Clinomic program?',
      answer:
        'Graduates in life sciences, pharmacy, biotechnology or related fields are eligible. Fresh graduates and working professionals looking to enter clinical research are both welcome.',
    },
    {
      question: 'What kind of roles can I get after completing the program?',
      answer:
        'Graduates typically secure roles such as Clinical Research Associate (CRA), Clinical Data Manager, Pharmacovigilance Associate and Regulatory Affairs Executive at CROs and pharmaceutical companies.',
    },
    {
      question: 'Does Clinomic provide hands-on training?',
      answer:
        'Yes. The curriculum includes live case studies, mock audits, data management tool training and internship opportunities with clinical research organizations.',
    },
    {
      question: 'Is the 6-month duration full-time or part-time?',
      answer:
        'The standard program is full-time. However, select batches offer weekend or evening schedules for working professionals — please contact the admissions team for current availability.',
    },
    {
      question: 'What is the placement record for Clinomic graduates?',
      answer:
        'Clinomic maintains a 95% placement rate, with over 500 graduates placed at leading CROs, pharma companies and hospitals across India.',
    },
  ],
}

// ---------------------------------------------------------------------------
// Aggregate export
// ---------------------------------------------------------------------------

export const programs = {
  finlearn,
  techlearn,
  ibmIce,
  clinomic,
} as const
