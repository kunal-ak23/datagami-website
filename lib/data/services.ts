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
  name: 'Talent Acquisition',
  href: '/services/hiring/talent-acquisition',
  description:
    'End-to-end talent acquisition services that help organizations find, assess and onboard the right candidates. We leverage our network of 50+ partner universities and industry connections to source skilled professionals across technology, finance and operations.',
  processSteps: [
    { step: 1, title: 'Requirement Analysis', description: 'We work closely with your team to understand role requirements, culture fit and growth expectations.' },
    { step: 2, title: 'Talent Sourcing', description: 'Candidates are sourced from our trained talent pool, partner campuses and professional networks.' },
    { step: 3, title: 'Screening & Assessment', description: 'Multi-stage screening including skill tests, aptitude evaluation and panel interviews.' },
    { step: 4, title: 'Onboarding Support', description: 'Seamless onboarding assistance to ensure new hires integrate quickly and start contributing from day one.' },
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

export const technicalSupport: Service = {
  name: 'Technical Support',
  href: '/services/hiring/technical-support',
  description:
    'Reliable technical support services for institutions running Datagami products and programs. Our support team ensures minimal downtime and smooth operation of LMS platforms, ERP systems and training infrastructure.',
  processSteps: [
    { step: 1, title: 'Issue Reporting', description: 'Submit a support ticket through our portal, email or dedicated helpline for immediate acknowledgment.' },
    { step: 2, title: 'Diagnosis', description: 'Our technical team investigates the issue and identifies the root cause within defined SLA timelines.' },
    { step: 3, title: 'Resolution', description: 'Fixes are implemented, tested and deployed. You are kept informed at every stage of the process.' },
    { step: 4, title: 'Follow-up', description: 'Post-resolution check-in to confirm the issue is fully resolved and capture lessons learned for prevention.' },
  ],
}

export const services = [
  talentAcquisition,
  studentPlacement,
  strategicConsulting,
  technicalSupport,
] as const
