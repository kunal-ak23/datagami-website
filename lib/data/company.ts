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

export interface CoreValue {
  title: string
  description: string
}

export interface LeadershipMember {
  name: string
  title: string
  bio: string
  image?: string
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
  about: string
  mission: string
  vision: string
  coreValues: CoreValue[]
  story: string
  leadership: LeadershipMember[]
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
        '309, Crescent Business Square, Khairani Rd, Saki Naka, Mumbai, Maharashtra 400072',
    },
    {
      city: 'Bengaluru',
      address:
        '191, 2nd Floor, Appanna Building, K V Byregowda Circle, Jakkuru, Bengaluru, Karnataka 560064',
    },
  ],
  stats: {
    partnerUniversities: '50+',
    studentsImpacted: '10K+',
    programsDelivered: '200+',
  },
  about:
    'Datagami is a trusted education and enterprise solutions partner. We empower universities, institutions, businesses, and corporates to bridge the gap between academia and industry. We provide comprehensive education technology and consulting services including LMS and ERP implementation, industry-aligned training programs, recruitment and placement assistance, and strategic consulting for measurable success.\n\nWith expertise across multiple sectors — BFSI, information technology, healthcare, agriculture, management, cybersecurity, cloud computing, manufacturing, and data analytics — we help organizations deliver future-ready, skill-based education that meets global standards and drives workforce transformation.',
  mission:
    'To transform education by creating meaningful connections between learning and real-world application, leveraging cutting-edge technology solutions that bridge the skills gap effectively, and ensuring every student graduates with the skills and confidence to thrive in tomorrow\'s economy.',
  vision:
    'Our vision is to create a world where education empowers every individual to thrive, fostering lifelong learning, innovation, and meaningful contribution to society through accessible, inclusive, and excellent learning opportunities.',
  coreValues: [
    {
      title: 'Excellence',
      description: 'We pursue the highest standards in every project, delivering solutions that exceed expectations and create lasting impact.',
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and accountability, ensuring trust and fairness in every partnership and decision.',
    },
    {
      title: 'Innovation',
      description: 'We embrace creativity and emerging technologies to design forward-thinking solutions that shape the future of learning and transformation.',
    },
    {
      title: 'Partnership',
      description: 'We build meaningful, long-term relationships by collaborating closely with institutions, industry partners, and learners to drive shared success.',
    },
    {
      title: 'Impact',
      description: 'We create purposeful change through solutions that improve performance, expand opportunity, and elevate lives and institutions.',
    },
    {
      title: 'Inclusivity',
      description: 'We champion equal access to quality education, ensuring that every learner — regardless of background — has opportunities to succeed and grow.',
    },
  ],
  story:
    'Founded with a deep understanding of the challenges facing higher education institutions and businesses, Datagami emerged from the recognition that universities and organizations needed specialized expertise to navigate the complex intersection of policy, technology, and industry collaboration.\n\nOur founders, with extensive backgrounds in education technology and policy implementation, witnessed firsthand how institutions and businesses struggled to translate regulatory requirements into practical, student-centered solutions. This inspired the creation of a company dedicated to bridging that gap.\n\nToday, we serve universities, institutions, and businesses across the country, helping them transform challenges into opportunities for enhanced student outcomes and stronger industry connections. Our proven methodologies and technology solutions have enabled institutions to achieve measurable improvements in graduate employment rates and policy compliance.',
  leadership: [
    {
      name: 'Dhaval Shah',
      title: 'Founder & Chief Executive Officer',
      bio: 'Forward-focused leader with 25+ years of experience driving business development strategy across domains and aligning teams to deliver on strategic goals, as alliance and practice head.',
      image: '/images/team/dhaval-shah.png',
    },
    {
      name: 'Dr Sanjay Daga',
      title: 'Partner & Director Business Development',
      bio: 'Strategic partnerships expert with a proven track record in building robust industry relationships and expanding our reach within the education sector.',
      image: '/images/team/sanjay-daga.jpeg',
    },
    {
      name: 'Dr Anoop Swaroep',
      title: 'Partner & Advisor',
      bio: 'Senior advisor with extensive experience in education consulting and strategic guidance, providing invaluable insights for our institutional clients.',
      image: '/images/team/anoop-swaroep.jpeg',
    },
    {
      name: 'Prof. Dr. Joseph David Ponmany',
      title: 'Dean \u2013 Financial Programs & Business Head',
      bio: 'Academic leader with deep expertise in financial education and program development, ensuring our offerings meet the highest standards for universities.',
      image: '/images/instructors/dr-joseph-ponmany.png',
    },
  ],
  whyChooseUs: [
    {
      title: 'End-to-End Solutions',
      description:
        'Access a unified suite of services covering academic programs, digital platforms, training, hiring, and operational support.',
    },
    {
      title: 'Industry-Aligned Expertise',
      description:
        'Programs shaped with leading partners across BFSI, technology, medical, and enterprise sectors.',
    },
    {
      title: 'Scalable Systems',
      description:
        'Flexible ERP, LMS, and support platforms built to grow with your institution.',
    },
    {
      title: 'Reliable Delivery',
      description:
        'Seamless execution backed by proven implementations across universities and enterprise clients.',
    },
    {
      title: 'Workforce Enablement',
      description:
        'Structured upskilling, career readiness, and placement support.',
    },
    {
      title: 'Insight-Driven Decisions',
      description:
        'Real-time analytics and reporting tools to improve outcomes.',
    },
  ],
}
