// ---------------------------------------------------------------------------
// Services (Hiring / Professional) – static content data
// ---------------------------------------------------------------------------

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface Service {
  name: string
  href: string
  description: string
  processSteps: ProcessStep[]
}

export const talentAcquisition: Service = {
  name: 'Recruitment & Staffing',
  href: '/services/hiring/talent-acquisition',
  description:
    'Recruitment & Staffing delivered as a service (RaaS). We connect organisations with high-caliber professionals across technology, life sciences, engineering, finance and more — handling everything from sourcing and screening to onboarding, so you hire faster, smarter and with greater confidence.',
  processSteps: [
    { step: 1, title: 'Requirement Analysis', description: 'We work closely with your team to understand business objectives, role requirements, workforce needs and organisational culture.' },
    { step: 2, title: 'Talent Sourcing', description: 'Targeted sourcing from our network of qualified professionals across niche and high-demand technology and business roles.' },
    { step: 3, title: 'Screening & Assessment', description: 'Rigorous technical screening and structured candidate assessment for both capability and cultural fit.' },
    { step: 4, title: 'Onboarding Support', description: 'End-to-end support through offer and onboarding so new hires integrate quickly and contribute from day one.' },
  ],
}

export const studentPlacement: Service = {
  name: 'Student Placement',
  href: '/services/hiring/student-placement',
  description:
    'Dedicated placement services that connect program graduates with leading employers in BFSI, IT, clinical research and emerging technology sectors. Our placement cell maintains a 95% success rate across programs.',
  processSteps: [
    { step: 1, title: 'Profile Building', description: 'Students receive guidance on resume writing, LinkedIn optimization and portfolio development.' },
    { step: 2, title: 'Skill Assessment', description: 'Competency mapping to match students with roles aligned to their strengths and career goals.' },
    { step: 3, title: 'Employer Matching', description: 'Targeted introductions to hiring partners based on role requirements and student profiles.' },
    { step: 4, title: 'Interview Preparation', description: 'Mock interviews, group discussions and soft-skill workshops to maximize placement success.' },
  ],
}

export const strategicConsulting: Service = {
  name: 'Strategic Consulting',
  href: '/services/hiring/consulting',
  description:
    'Advisory services for educational institutions, government bodies and enterprises looking to design, launch or scale workforce development programs. We bring deep domain expertise in EdTech, BFSI and emerging technologies.',
  processSteps: [
    { step: 1, title: 'Discovery', description: 'Understand organizational goals, challenges and the current state of workforce capabilities.' },
    { step: 2, title: 'Strategy Design', description: 'Develop a tailored roadmap covering curriculum, technology, partnerships and implementation timelines.' },
    { step: 3, title: 'Pilot Execution', description: 'Launch a controlled pilot to validate assumptions, gather data and iterate on the approach.' },
    { step: 4, title: 'Scale & Sustain', description: 'Roll out the validated program at scale with ongoing monitoring, reporting and continuous improvement.' },
  ],
}

export const services = [
  talentAcquisition,
  studentPlacement,
  strategicConsulting,
] as const
