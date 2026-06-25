export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Datagami Technology Services Private Limited',
  alternateName: 'Datagami',
  url: 'https://datagami.in',
  logo: 'https://datagami.in/images/logo/datagami-logo.webp',
  description: 'Empowering Institutions, Universities & Businesses Through Technology, Partnerships & Innovation',
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
  sameAs: [
    'https://www.linkedin.com/company/datagami',
  ],
}

export const localBusinessSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Datagami - Mumbai Office',
    image: 'https://datagami.in/images/logo/datagami-logo.webp',
    url: 'https://datagami.in',
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
