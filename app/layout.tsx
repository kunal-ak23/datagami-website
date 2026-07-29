import { plusJakartaSans, playfairDisplay } from '@/lib/fonts'
import type { Metadata } from 'next'
import './globals.css'
import { organizationSchema, localBusinessSchemas } from '@/lib/schemas/organization'
import { websiteSchema } from '@/lib/schemas/website'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: {
    default: 'Datagami - Lead Digital Technology',
    template: '%s | Datagami',
  },
  applicationName: 'Datagami',
  description: 'Industry-aligned education programs, AI-powered learning technology, recruitment and enterprise software for universities and businesses across India.',
  metadataBase: new URL('https://www.datagami.in'),
  authors: [{ name: 'Datagami Technology Services Private Limited', url: 'https://www.datagami.in/about' }],
  creator: 'Datagami Technology Services Private Limited',
  publisher: 'Datagami Technology Services Private Limited',
  category: 'Education Technology',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Datagami',
    title: 'Datagami - Education Technology & Enterprise Solutions',
    description: 'Industry-aligned programs, AI-powered learning technology, recruitment and enterprise software for universities and businesses.',
    url: 'https://www.datagami.in',
    images: [
      {
        url: '/images/hero/hero-students-collaborating.png',
        width: 768,
        height: 576,
        alt: 'Datagami education technology and enterprise solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Datagami - Education Technology & Enterprise Solutions',
    description: 'Industry-aligned programs, AI learning technology, recruitment and enterprise software.',
    images: ['/images/hero/hero-students-collaborating.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'GHPjZPu8GbL3n3y0vTLYkv21hlxU1CRFVs5B9q4u0jk',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${plusJakartaSans.variable} ${playfairDisplay.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            const theme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (theme === 'dark' || (!theme && prefersDark)) {
              document.documentElement.classList.add('dark');
            }
          } catch (e) {}
        `}} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {localBusinessSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="font-sans antialiased noise-overlay">
        {/* Radial gradient glow orbs */}
        <div className="glow-orb glow-orb-1" aria-hidden="true" />
        <div className="glow-orb glow-orb-2" aria-hidden="true" />
        <div className="glow-orb glow-orb-3" aria-hidden="true" />

        <Navbar />
        <main className="relative z-[1]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
