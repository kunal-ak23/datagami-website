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
  { name: 'IDFC Bank', logo: '/images/logos/banks/idfc-bank.jpg' },
]

export const universityPartners: Partner[] = [
  { name: 'Sri Sri University', logo: '/images/logos/universities/sri-sri.png', website: 'https://srisriuniversity.edu.in/' },
  { name: 'Sri Sai University', logo: '/images/logos/universities/sri-sai.png', website: 'https://www.srisaiuniversity.org/' },
  { name: 'Auro University', logo: '/images/logos/universities/auro.png', website: 'https://www.aurouniversity.edu.in/' },
  { name: 'Kalinga University', logo: '/images/logos/universities/kalinga.png', website: 'https://kalingauniversity.ac.in/' },
  { name: 'TransStadia University', logo: '/images/logos/universities/transstadia-university.png', website: 'https://tsuniv.edu.in/' },
  { name: 'GH Raisoni University', logo: '/images/logos/universities/gh-raisoni.webp' },
  { name: 'Indira University', logo: '/images/logos/universities/indira.png' },
  { name: 'Marwadi University', logo: '/images/logos/universities/marwadi.png', website: 'https://www.marwadiuniversity.ac.in/' },
  { name: 'MGM University', logo: '/images/logos/universities/mgm.png', website: 'https://www.mgmu.ac.in/' },
  { name: 'Pillai University', logo: '/images/logos/universities/pillai.png' },
  { name: 'Bharatiya Vidyapeeth University', logo: '/images/logos/universities/bharati-vidyapeeth.png', website: 'https://www.bvuniversity.edu.in/' },
  { name: 'Sankalchand Patel University', logo: '/images/logos/universities/sankalchand-patel.png' },
  { name: 'Kaveri University', logo: '/images/logos/universities/kaveri.svg' },
  { name: 'Amity University, Chandigarh', logo: '/images/logos/universities/amity-chandigarh.jpeg' },
  { name: 'University of Wollongong', logo: '/images/logos/universities/wollongong.png', website: 'https://www.uow.edu.au/india/' },
  { name: 'Guru Nanak University', logo: '/images/logos/universities/guru-nanak.png', website: 'https://gnuindia.org/' },
  { name: 'Medicaps University', logo: '/images/logos/universities/medicaps.png', website: 'https://www.medicaps.ac.in/' },
]

// AAFM hiring-partner network — shared across all FinLEARN integrated programs.
export const placementPartners: Partner[] = [
  { name: 'Aditya Birla', logo: '/images/recruiters/aditya-birla.jpeg' },
  { name: 'Motilal Oswal', logo: '/images/recruiters/motilal-oswal.jpeg' },
  { name: 'Angel Broking', logo: '/images/recruiters/angel-broking.jpeg' },
  { name: 'Edelweiss', logo: '/images/recruiters/edelweiss.jpeg' },
  { name: 'Indiabulls', logo: '/images/recruiters/indiabulls.jpeg' },
  { name: 'Karvy', logo: '/images/recruiters/karvy.jpeg' },
  { name: 'Anand Rathi', logo: '/images/recruiters/anand-rathi.jpeg' },
  { name: 'Bonanza', logo: '/images/recruiters/bonanza.jpeg' },
  { name: 'ASK', logo: '/images/recruiters/ask.jpeg' },
  { name: 'Ambit', logo: '/images/recruiters/ambit.jpeg' },
  { name: 'Bharti AXA', logo: '/images/recruiters/bharti-axa.jpeg' },
  { name: 'Principal PNB', logo: '/images/recruiters/principal-pnb.jpeg' },
  { name: 'deVere Group', logo: '/images/recruiters/devere-group.jpeg' },
  { name: 'NJ Group', logo: '/images/recruiters/nj-group.jpeg' },
  { name: 'iFAST', logo: '/images/recruiters/ifast.jpeg' },
  { name: 'IFAN', logo: '/images/recruiters/ifan.jpeg' },
  { name: 'L&T', logo: '/images/recruiters/lt.jpeg' },
  { name: 'Alpha Capital', logo: '/images/recruiters/alpha-capital.jpeg' },
  { name: 'Asit C Mehta', logo: '/images/recruiters/asit-c-mehta.jpeg' },
  { name: 'Latin Manharlal', logo: '/images/recruiters/latin-manharlal.jpeg' },
  { name: 'Brokers Forum', logo: '/images/recruiters/brokers-forum.jpeg' },
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
