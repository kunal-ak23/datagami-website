'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Linkedin, Twitter, Youtube } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const programs = [
  { label: 'FinLEARN', href: '/services/education/finlearn' },
  { label: 'TechLEARN', href: '/services/education/techlearn' },
  { label: 'IBM ICE', href: '/services/education/ibm-ice' },
  { label: 'Clinomic', href: '/services/education/clinomic' },
]

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export function Footer() {
  const pathname = usePathname()

  // Hide footer on admin routes
  if (pathname.startsWith('/admin')) return null

  return (
    <footer className="bg-[#1A1A1A] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div>
            <img
              src="/images/logo/datagami-logo.webp"
              alt="Datagami"
              width="50"
              height="35"
            />
            <p className="mt-3 font-semibold text-white">Lead Digital Technology</p>
            <p className="mt-2 text-sm text-gray-300">
              Empowering Institutions, Universities &amp; Businesses Through Technology,
              Partnerships &amp; Innovation
            </p>
            <div className="mt-4 flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-gray-300 hover:text-brand transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-brand transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Programs</h3>
            <ul className="space-y-2">
              {programs.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-brand transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="font-semibold text-lg text-white mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <span className="block text-white font-medium">Email</span>
                <a
                  href="mailto:query@datagami.in"
                  className="hover:text-brand transition-colors"
                >
                  query@datagami.in
                </a>
              </p>
              <p>
                <span className="block text-white font-medium">Phone</span>
                <a href="tel:+919702934397" className="hover:text-brand transition-colors">
                  +91 97029 34397
                </a>
                {' / '}
                <a href="tel:+917738170621" className="hover:text-brand transition-colors">
                  +91 77381 70621
                </a>
              </p>
              <p>
                <span className="block text-white font-medium">Mumbai Office</span>
                309, Crescent Business Square, Khairani Rd, Saki Naka, Mumbai, Maharashtra
                400072
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-300">
          <p>&copy; 2026 Datagami Technology Services Private Limited. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex space-x-4">
            <a href="#" className="hover:text-brand transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-brand transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
