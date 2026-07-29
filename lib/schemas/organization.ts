export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.datagami.in/#organization',
  name: 'Datagami Technology Services Private Limited',
  alternateName: 'Datagami',
  url: 'https://www.datagami.in',
  logo: 'https://www.datagami.in/images/logo/datagami-logo.webp',
  description: 'Empowering Institutions, Universities & Businesses Through Technology, Partnerships & Innovation',
  slogan: 'Lead Digital Technology',
  email: 'query@datagami.in',
  telephone: ['+919702934397', '+917738170621'],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '309, Crescent Business Square, Khairani Rd, Saki Naka',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400072',
      addressCountry: 'IN',
    },
  ],
  // Datagami serves institutions and businesses across India.
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+919702934397',
    email: 'query@datagami.in',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  // Real domains of expertise (from the company profile) — helps Google understand the entity.
  knowsAbout: [
    'Education Technology',
    'Learning Management Systems',
    'ERP Implementation',
    'Artificial Intelligence & Data Science',
    'Financial Technology',
    'Cloud Computing',
    'Cybersecurity',
    'Recruitment & Staffing',
    'Enterprise Software Development',
  ],
  // Add more verified profiles here (Twitter/X, Instagram, YouTube, Facebook)
  // to strengthen Google's Knowledge Panel.
  sameAs: [
    'https://www.linkedin.com/company/datagami',
  ],
}

export const localBusinessSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Datagami - Mumbai Office',
    image: 'https://www.datagami.in/images/logo/datagami-logo.webp',
    url: 'https://www.datagami.in',
    telephone: '+919702934397',
    email: 'query@datagami.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '309, Crescent Business Square, Khairani Rd, Saki Naka',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400072',
      addressCountry: 'IN',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  },
]
