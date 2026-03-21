"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown } from "lucide-react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const servicesDropdown = [
  {
    category: "Programs",
    items: [
      { label: "FinLEARN", href: "/services/education/finlearn" },
      { label: "TechLEARN", href: "/services/education/techlearn" },
      { label: "IBM ICE", href: "/services/education/ibm-ice" },
      { label: "Clinomic", href: "/services/education/clinomic" },
      { label: "UPI Study", href: "/services/education/upi-study" },
    ],
  },
  {
    category: "Products",
    items: [
      { label: "Sineap LMS", href: "/services/products/sineap-lms" },
      { label: "Total ERP", href: "/services/products/total-erp" },
    ],
  },
  {
    category: "Hiring",
    items: [
      { label: "Talent Acquisition", href: "/services/hiring/talent-acquisition" },
      { label: "Student Placement", href: "/services/hiring/student-placement" },
      { label: "Consulting", href: "/services/hiring/consulting" },
      { label: "Technical Support", href: "/services/hiring/technical-support" },
    ],
  },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/"
      return pathname.startsWith(href)
    },
    [pathname]
  )

  // Hide navbar on admin routes
  if (pathname.startsWith('/admin')) return null

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-surface transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="cursor-pointer shrink-0">
          <img
            src="/images/logo/datagami-logo.webp"
            alt="Datagami - Lead Digital Technology"
            width="60"
            height="40"
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`cursor-pointer inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-brand"
                      : "text-dark hover:text-brand"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    className={`size-4 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                {/* Dropdown */}
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                    <div className="w-[600px] rounded-lg border border-border-custom bg-surface p-6 shadow-lg">
                      <div className="grid grid-cols-3 gap-6">
                        {servicesDropdown.map((group) => (
                          <div key={group.category}>
                            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-brand">
                              {group.category}
                            </h4>
                            <ul className="space-y-1">
                              {group.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className={`cursor-pointer block rounded-md px-2 py-1.5 text-sm transition-colors duration-200 ${
                                      isActive(item.href)
                                        ? "text-brand bg-brand/10"
                                        : "text-body hover:text-brand hover:bg-brand/5"
                                    }`}
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`cursor-pointer px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-brand"
                    : "text-dark hover:text-brand"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex cursor-pointer items-center rounded-lg border-2 border-brand px-4 py-1.5 text-sm font-semibold text-dark transition-colors duration-200 hover:bg-brand hover:text-white"
        >
          Get Started
        </Link>

        {/* Mobile hamburger */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger className="cursor-pointer md:hidden inline-flex items-center justify-center rounded-md p-2 text-dark hover:bg-muted transition-colors duration-200">
            <Menu className="size-6" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] sm:max-w-[300px] p-0">
            <SheetHeader className="border-b border-border-custom px-4 py-3">
              <SheetTitle>
                <img
                  src="/images/logo/datagami-logo.webp"
                  alt="Datagami"
                  width="50"
                  height="33"
                />
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col overflow-y-auto px-4 py-4">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label}>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="cursor-pointer flex w-full items-center justify-between py-3 text-sm font-medium text-dark transition-colors duration-200 hover:text-brand"
                    >
                      {link.label}
                      <ChevronDown
                        className={`size-4 transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="ml-2 space-y-4 border-l-2 border-brand/30 pl-4 pb-2">
                        {servicesDropdown.map((group) => (
                          <div key={group.category}>
                            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-brand">
                              {group.category}
                            </p>
                            <ul className="space-y-0.5">
                              {group.items.map((item) => (
                                <li key={item.href}>
                                  <SheetClose
                                    render={
                                      <Link
                                        href={item.href}
                                        className={`cursor-pointer block py-1.5 text-sm transition-colors duration-200 ${
                                          isActive(item.href)
                                            ? "text-brand"
                                            : "text-body hover:text-brand"
                                        }`}
                                      />
                                    }
                                  >
                                    {item.label}
                                  </SheetClose>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <SheetClose
                    key={link.label}
                    render={
                      <Link
                        href={link.href}
                        className={`cursor-pointer block py-3 text-sm font-medium transition-colors duration-200 ${
                          isActive(link.href)
                            ? "text-brand"
                            : "text-dark hover:text-brand"
                        }`}
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                )
              )}
            </div>

            {/* Mobile CTA */}
            <div className="mt-auto border-t border-border-custom p-4">
              <SheetClose
                render={
                  <Link
                    href="/contact"
                    className="cursor-pointer flex w-full items-center justify-center rounded-lg border-2 border-brand px-4 py-2.5 text-sm font-semibold text-dark transition-colors duration-200 hover:bg-brand hover:text-white"
                  />
                }
              >
                Get Started
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
