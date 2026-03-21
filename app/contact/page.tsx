import type { Metadata } from "next"
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  MessageSquare,
  FileText,
  Rocket,
  ArrowRight,
} from "lucide-react"
import { HeroMinimal } from "@/components/sections/hero-minimal"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { company } from "@/lib/data/company"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Datagami. Mumbai and Bengaluru offices. Email: query@datagami.in, Phone: +91 97029 34397. Mon-Fri, 9 AM - 6 PM IST.',
}

const processSteps = [
  {
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "Share your goals and challenges. We listen, understand, and identify how we can help.",
  },
  {
    icon: FileText,
    title: "Customized Proposal",
    description: "We craft a tailored plan with clear deliverables, timelines, and outcomes aligned to your needs.",
  },
  {
    icon: Rocket,
    title: "Partnership Launch",
    description: "We kick off execution together — from onboarding to delivery — ensuring a seamless experience.",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <HeroMinimal
        heading="Get in Touch"
        subtitle="We'd love to hear from you. Reach out for partnerships, inquiries, or support."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />

        {/* ── Contact Form + Info ── */}
        <section className="py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left — Contact Form */}
            <FadeIn direction="left">
              <div>
                <h2 className="text-2xl font-bold text-dark mb-6">Send Us a Message</h2>
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-border-custom px-4 py-3 text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-border-custom px-4 py-3 text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-lg border border-border-custom px-4 py-3 text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-dark mb-1">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      className="w-full rounded-lg border border-border-custom px-4 py-3 text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand"
                      placeholder="Your organization name"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-lg border border-border-custom px-4 py-3 text-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold bg-brand text-dark hover:bg-brand/90 transition-colors cursor-pointer"
                  >
                    Send Message
                    <ArrowRight className="size-5" />
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Right — Contact Information */}
            <FadeIn direction="right" delay={0.3}>
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-dark mb-6">Contact Information</h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center size-10 rounded-full bg-brand/20 shrink-0">
                      <Mail className="size-5 text-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark">Email</h3>
                      <a href={`mailto:${company.email}`} className="text-body hover:text-brand transition-colors">
                        {company.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center size-10 rounded-full bg-brand/20 shrink-0">
                      <Phone className="size-5 text-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark">Phone</h3>
                      {company.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, "")}`}
                          className="block text-body hover:text-brand transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center size-10 rounded-full bg-brand/20 shrink-0">
                      <Clock className="size-5 text-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark">Business Hours</h3>
                      <p className="text-body">Monday to Friday, 9 AM &ndash; 6 PM IST</p>
                      <p className="text-sm text-muted-brand mt-1">Response within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Office Location Cards */}
                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-bold text-dark">Our Offices</h3>
                  {company.offices.map((office) => (
                    <div
                      key={office.city}
                      className="rounded-xl border border-border-custom bg-surface p-6"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="size-5 text-brand shrink-0" />
                        <h4 className="font-semibold text-dark">{office.city}</h4>
                      </div>
                      <p className="text-sm text-body leading-relaxed pl-8">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Process Steps ── */}
        <section className="py-16 border-t border-border-custom">
          <FadeIn>
            <h2 className="text-3xl font-bold text-dark mb-10 text-center">How We Work Together</h2>
          </FadeIn>
          <StaggerChildren className="grid gap-8 md:grid-cols-3">
            {processSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <StaggerItem key={step.title}>
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex items-center justify-center size-16 rounded-full bg-brand/20">
                      <Icon className="size-7 text-dark" />
                    </div>
                    <div className="inline-flex items-center justify-center size-7 rounded-full bg-brand text-dark text-sm font-bold mb-3">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
                    <p className="text-body leading-relaxed">{step.description}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerChildren>
        </section>
      </div>
    </>
  )
}
