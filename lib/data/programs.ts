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
}

// ---------------------------------------------------------------------------
// FinLEARN
// ---------------------------------------------------------------------------

export interface FinLEARNProgram {
  name: string
  tagline: string
  description: string
  href: string
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
  tagline: 'Comprehensive BFSI Education Platform',
  description:
    'FinLEARN is Datagami\'s flagship education platform focused on Banking, Financial Services and Insurance (BFSI). Through industry-aligned curricula, hands-on training and strong placement support, FinLEARN transforms graduates into job-ready professionals for the financial sector.',
  href: '/services/education/finlearn',
  tracks: [
    {
      name: 'CP-BFSI',
      level: 'UG',
      description:
        'Certificate Program in Banking, Financial Services and Insurance',
    },
    {
      name: 'IBOP',
      level: 'UG',
      description: 'Integrated Banking Operations Program',
    },
    {
      name: 'MBA in IBOP',
      level: 'PG',
      description: 'MBA in Integrated Banking Operations',
    },
    {
      name: 'MBA in Wealth Management',
      level: 'PG',
      description: 'MBA specializing in Wealth Management',
    },
    {
      name: 'Short-term Certifications',
      level: 'Certificate',
      description: 'Industry-recognized certification programs',
    },
  ],
  stats: {
    placementRate: '95%',
    graduates: '500+',
    partners: '50+',
    avgPackage: '₹3.5L',
  },
  faqs: [
    {
      question: 'Who is eligible for FinLEARN programs?',
      answer:
        'FinLEARN offers programs for undergraduate (UG) and postgraduate (PG) students as well as working professionals. UG programs like CP-BFSI and IBOP are open to students who have completed 12th grade or equivalent, while PG programs require a bachelor\'s degree.',
    },
    {
      question: 'Are FinLEARN certifications recognized by the industry?',
      answer:
        'Yes. FinLEARN certifications are developed in collaboration with leading banks and financial institutions. Graduates receive credentials that are widely recognized across the BFSI sector in India.',
    },
    {
      question: 'What is the placement support like?',
      answer:
        'FinLEARN maintains a 95% placement rate. Our dedicated placement cell works closely with 50+ banking and financial services partners to arrange interviews, internships and final placements for every eligible student.',
    },
    {
      question: 'Can working professionals enroll in short-term certification courses?',
      answer:
        'Absolutely. Our short-term certification programs are designed for working professionals who want to upskill or transition into the BFSI sector. Flexible schedules and weekend batches are available.',
    },
    {
      question: 'What is the average salary package after completing a FinLEARN program?',
      answer:
        'The average starting package for FinLEARN graduates is ₹3.5 lakhs per annum, with top performers securing packages significantly higher depending on the role and institution.',
    },
    {
      question: 'Where are FinLEARN classes conducted?',
      answer:
        'FinLEARN programs are conducted at partner university campuses across India. Select programs also offer hybrid (online + offline) learning options for greater accessibility.',
    },
  ],
}

// ---------------------------------------------------------------------------
// TechLEARN
// ---------------------------------------------------------------------------

export interface TechLEARNProgram {
  name: string
  tagline: string
  href: string
  tracks: ProgramTrack[]
  faqs: FAQ[]
}

export const techlearn: TechLEARNProgram = {
  name: 'TechLEARN',
  tagline: 'Technology Training Programs',
  href: '/services/education/techlearn',
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
  stats: {
    badgePrograms: '15+',
    studentsCertified: '10000+',
    partnerInstitutes: '12+',
  },
  trackCategories: [
    { name: 'Technology', trackCount: 11 },
    { name: 'Industry', trackCount: 6 },
    { name: 'Deep Technical Skills', trackCount: 8 },
    { name: 'Short-term Certificates', trackCount: '60+' },
  ],
}

// ---------------------------------------------------------------------------
// Clinomic
// ---------------------------------------------------------------------------

export interface ClinomicProgram {
  name: string
  tagline: string
  href: string
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
// UPI Study
// ---------------------------------------------------------------------------

export interface UPIStudyProgram {
  name: string
  tagline: string
  href: string
  description: string
}

export const upiStudy: UPIStudyProgram = {
  name: 'UPI Study',
  tagline: 'Digital Payments Education',
  href: '/services/education/upi-study',
  description:
    'UPI Study is Datagami\'s focused education initiative on India\'s Unified Payments Interface and the broader digital payments ecosystem. The program covers UPI architecture, merchant onboarding, regulatory frameworks, fraud prevention and the emerging trends shaping cashless transactions. Designed for banking professionals, fintech aspirants and students, UPI Study bridges the knowledge gap in one of the world\'s fastest-growing digital payment markets.',
}

// ---------------------------------------------------------------------------
// Aggregate export
// ---------------------------------------------------------------------------

export const programs = {
  finlearn,
  techlearn,
  ibmIce,
  clinomic,
  upiStudy,
} as const
