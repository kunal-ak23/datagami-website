// ---------------------------------------------------------------------------
// Case Studies – static content data
// ---------------------------------------------------------------------------

export interface CaseStudyMetric {
  label: string
  value: string
}

export interface CaseStudy {
  title: string
  slug: string
  industry: string
  summary: string
  problem: string
  solution: string
  imageSrc?: string
  results: {
    headline: string
    metrics: CaseStudyMetric[]
  }
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'State University System Digital Transformation',
    slug: 'state-university-digital-transformation',
    industry: 'Higher Education',
    imageSrc: '/images/case-studies/state-university-transformation.png',
    summary:
      'A state university system partnered with Datagami to modernize its curriculum, implement industry-aligned training and dramatically improve graduate employability.',
    problem:
      'The university was facing declining placement rates and a widening gap between academic curricula and employer expectations. Graduates lacked practical skills demanded by the BFSI and IT sectors, resulting in low campus recruitment numbers.',
    solution:
      'Datagami deployed its FinLEARN and TechLEARN programs across multiple campuses, integrated the EduDron LMS for blended learning delivery, and established direct recruitment pipelines with industry partners. Faculty training workshops ensured the institution could sustain the programs independently.',
    results: {
      headline: '85% increase in graduate employment within one year',
      metrics: [
        { label: 'Placement Rate Increase', value: '85%' },
        { label: 'Students Trained', value: '1,200+' },
        { label: 'Hiring Partners Onboarded', value: '30+' },
        { label: 'Time to First Placement', value: '3 months' },
      ],
    },
  },
  {
    title: 'Industry Partnership Network',
    slug: 'industry-partnership-network',
    industry: 'Workforce Development',
    imageSrc: '/images/case-studies/industry-partnership.png',
    summary:
      'Datagami built a nationwide industry partnership network connecting educational institutions with employers across banking, technology and clinical research.',
    problem:
      'Educational institutions struggled to establish and maintain relationships with industry partners individually. Employers, in turn, found it difficult to identify job-ready talent from smaller or regional colleges.',
    solution:
      'Datagami created a centralized partnership platform that aggregated employer requirements, standardized skill assessments and provided institutions with a single point of access to a curated employer network. The IBM ICE badge programs added globally recognized credentials to student profiles.',
    results: {
      headline: '200+ industry partnerships established across sectors',
      metrics: [
        { label: 'Industry Partners', value: '200+' },
        { label: 'Participating Institutions', value: '50+' },
        { label: 'Students Certified (IBM Badges)', value: '10,000+' },
        { label: 'Sectors Covered', value: '5' },
      ],
    },
  },
  {
    title: 'Policy Implementation Acceleration',
    slug: 'policy-implementation-acceleration',
    industry: 'Government & Policy',
    imageSrc: '/images/case-studies/policy-implementation.png',
    summary:
      'A government education body engaged Datagami to accelerate the rollout of a new skills-development policy across state-run institutions.',
    problem:
      'The policy required rapid deployment of new training programs across dozens of institutions, but existing administrative systems were slow, fragmented and lacked the technology infrastructure to track outcomes at scale.',
    solution:
      'Datagami provided strategic consulting to design the implementation roadmap, deployed Total ERP for centralized administration and used EduDron LMS to deliver standardized content. Real-time analytics dashboards gave policy makers visibility into adoption and outcomes.',
    results: {
      headline: '50% reduction in implementation time vs. original timeline',
      metrics: [
        { label: 'Implementation Time Reduction', value: '50%' },
        { label: 'Institutions Onboarded', value: '40+' },
        { label: 'Programs Launched', value: '15' },
        { label: 'Students Enrolled (Year 1)', value: '5,000+' },
      ],
    },
  },
]
