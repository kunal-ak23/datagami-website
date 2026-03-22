export interface Partner {
  name: string
  logo?: string
  website?: string
}

export const alumniCompanies: Partner[] = [
  { name: 'Citi Bank', logo: '/images/logos/banks/citi-bank.png' },
  { name: 'HDFC Bank', logo: '/images/logos/banks/hdfc-bank.png' },
  { name: 'ICICI Bank', logo: '/images/logos/banks/icici-bank.png' },
  { name: 'Kotak Bank', logo: '/images/logos/banks/kotak-bank.png' },
  { name: 'Motilal Oswal', logo: '/images/logos/banks/motilal-oswal.png' },
  { name: 'Muthoot Finance', logo: '/images/logos/banks/muthoot-finance.png' },
  { name: 'Axis Bank', logo: '/images/logos/banks/axis-bank.png' },
  { name: 'IDFC Bank', logo: '/images/logos/banks/idfc-bank.png' },
]

export const universityPartners: Partner[] = [
  { name: 'Bharati Vidyapeeth', logo: '/images/logos/universities/bharati-vidyapeeth.png', website: 'https://www.bvuniversity.edu.in/' },
  { name: 'Kalinga University', logo: '/images/logos/universities/kalinga.png', website: 'https://kalingauniversity.ac.in/' },
  { name: 'Guru Nanak University', logo: '/images/logos/universities/guru-nanak.png', website: 'https://gnuindia.org/' },
  { name: 'Marwadi University', logo: '/images/logos/universities/marwadi.png', website: 'https://www.marwadiuniversity.ac.in/' },
  { name: 'Medicaps University', logo: '/images/logos/universities/medicaps.png', website: 'https://www.medicaps.ac.in/' },
  { name: 'MGM University', logo: '/images/logos/universities/mgm.png', website: 'https://www.mgmu.ac.in/' },
  { name: 'Sri Sri University', logo: '/images/logos/universities/sri-sri.png', website: 'https://srisriuniversity.edu.in/' },
  { name: 'Sri Sai University', logo: '/images/logos/universities/sri-sai.png', website: 'https://www.srisaiuniversity.org/' },
  { name: 'TransStadia Institute', logo: '/images/logos/universities/transstadia-institute.png', website: 'https://transstadiainstitute.in/' },
  { name: 'TransStadia University', logo: '/images/logos/universities/transstadia-university.png', website: 'https://tsuniv.edu.in/' },
  { name: 'University of Wollongong', logo: '/images/logos/universities/wollongong.png', website: 'https://www.uow.edu.au/india/' },
  { name: 'Auro University', logo: '/images/logos/universities/auro.png', website: 'https://www.aurouniversity.edu.in/' },
]

export const collaborators: Partner[] = [
  { name: 'NSDC', logo: '/images/logos/collaborators/nsdc.png' },
  { name: 'BFSI SSC', logo: '/images/logos/collaborators/bfsi-ssc.png' },
  { name: 'Jetking', logo: '/images/logos/collaborators/jetking.png' },
  { name: 'Clinomic', logo: '/images/logo/datagami-logo.webp' },
  { name: 'IBM', logo: '/images/logos/collaborators/ibm.png' },
]

// Combined list for logo tickers
export const allPartners: Partner[] = [...universityPartners, ...collaborators]
