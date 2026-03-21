import { plusJakartaSans } from '@/lib/fonts'
import type { Metadata } from 'next'
import './globals.css'
import { organizationSchema, localBusinessSchemas } from '@/lib/schemas/organization'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: {
    default: 'Datagami - Lead Digital Technology',
    template: '%s | Datagami',
  },
  description: 'Empowering Institutions, Universities & Businesses Through Technology, Partnerships & Innovation. 50+ Partner Universities, 10K+ Students Impacted.',
  metadataBase: new URL('https://datagami.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Datagami',
  },
  twitter: {
    card: 'summary_large_image',
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
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {localBusinessSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
