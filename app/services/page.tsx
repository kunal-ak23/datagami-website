import type { Metadata } from "next"
import {
  GraduationCap,
  Monitor,
  Award,
  FlaskConical,
  Server,
  LayoutDashboard,
  Users,
  Briefcase,
  MessageSquare,
  Wrench,
} from "lucide-react"
import { HeroFull } from "@/components/sections/hero-full"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { SectionHeader } from "@/components/sections/section-header"
import { CTASection } from "@/components/sections/cta-section"
import { ProgramCard } from "@/components/cards/program-card"
import { ProductCard } from "@/components/cards/product-card"
import { ServiceCard } from "@/components/cards/service-card"
import { programs } from "@/lib/data/programs"
import { products } from "@/lib/data/products"
import { services } from "@/lib/data/services"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"

export const metadata: Metadata = {
  title: 'Services - Education Programs, Enterprise Products & Consulting',
  description: "Explore Datagami's comprehensive solutions: FinLEARN BFSI programs, TechLEARN tech training, IBM ICE certifications, EduDron LMS, Total ERP, and professional services.",
  alternates: {
    canonical: 'https://datagami.in/services',
  },
  openGraph: {
    title: 'Services - Education Programs, Enterprise Products & Consulting',
    description: "Explore Datagami's comprehensive solutions: FinLEARN BFSI programs, TechLEARN tech training, IBM ICE certifications, EduDron LMS, Total ERP, and professional services.",
    images: ['/images/hero/hero-students-collaborating.png'],
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <HeroFull
        heading="Our Solutions"
        subtitle="Explore our comprehensive range of education programs, enterprise products, and professional services"
        backgroundImage="/images/hero/hero-services.png"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services" },
          ]}
        />

        {/* ── Education Programs ── */}
        <section className="py-16">
          <FadeIn>
            <SectionHeader
              title="Education Programs"
              description="Industry-aligned education programs designed to create job-ready professionals across finance, technology, healthcare, and digital payments."
              align="left"
            />
          </FadeIn>
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <StaggerItem>
              <ProgramCard
                title={programs.finlearn.name}
                description={programs.finlearn.tagline + " — " + programs.finlearn.description}
                href={programs.finlearn.href}
                icon={<GraduationCap className="size-6" />}
                backgroundImage="/images/cards/finlearn-card.png"
              />
            </StaggerItem>
            <StaggerItem>
              <ProgramCard
                title={programs.techlearn.name}
                description={programs.techlearn.tagline + " — Hands-on training in Cloud Computing, Metaverse, Blockchain, and Chip Design."}
                href={programs.techlearn.href}
                icon={<Monitor className="size-6" />}
                backgroundImage="/images/cards/techlearn-card.png"
              />
            </StaggerItem>
            <StaggerItem>
              <ProgramCard
                title={programs.ibmIce.fullName}
                description={programs.ibmIce.tagline + " — Industry-recognized IBM badge certifications across technology, industry skills, and deep technical domains."}
                href={programs.ibmIce.href}
                icon={<Award className="size-6" />}
                backgroundImage="/images/cards/ibm-ice-card.png"
              />
            </StaggerItem>
            <StaggerItem>
              <ProgramCard
                title={programs.clinomic.name}
                description={programs.clinomic.tagline + " — " + programs.clinomic.duration + " program covering clinical research methodology, GCP, data management, and regulatory affairs."}
                href={programs.clinomic.href}
                duration={programs.clinomic.duration}
                icon={<FlaskConical className="size-6" />}
                backgroundImage="/images/cards/clinomic-card.png"
              />
            </StaggerItem>
          </StaggerChildren>
        </section>

        {/* ── Enterprise Products ── */}
        <section className="py-16 border-t border-border-custom">
          <FadeIn>
            <SectionHeader
              title="Enterprise Products"
              description="Scalable software platforms built for educational institutions and mid-size enterprises."
              align="left"
            />
          </FadeIn>
          <StaggerChildren className="grid gap-8 sm:grid-cols-2">
            {products.map((product) => (
              <StaggerItem key={product.name}>
                <ProductCard
                  title={product.name}
                  description={product.description}
                  features={[...product.features]}
                  href={product.href}
                  backgroundImage={product.cardImage}
                />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </section>

        {/* ── Professional Services ── */}
        <section className="py-16 border-t border-border-custom">
          <FadeIn>
            <SectionHeader
              title="Professional Services"
              description="Talent acquisition, placement support, strategic consulting, and technical assistance to power your workforce goals."
              align="left"
            />
          </FadeIn>
          <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StaggerItem>
              <ServiceCard
                title={services[0].name}
                description={services[0].description}
                href={services[0].href}
                icon={<Users className="size-6" />}
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title={services[1].name}
                description={services[1].description}
                href={services[1].href}
                icon={<Briefcase className="size-6" />}
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title={services[2].name}
                description={services[2].description}
                href={services[2].href}
                icon={<MessageSquare className="size-6" />}
              />
            </StaggerItem>
            <StaggerItem>
              <ServiceCard
                title={services[3].name}
                description={services[3].description}
                href={services[3].href}
                icon={<Wrench className="size-6" />}
              />
            </StaggerItem>
          </StaggerChildren>
        </section>
      </div>

      {/* CTA */}
      <FadeIn>
        <CTASection
          title="Find Your Perfect Solution"
          description="Connect with our team to find the right solution for your organization."
          buttonText="Discuss Your Needs"
          buttonHref="/contact"
          variant="dark"
        />
      </FadeIn>
    </>
  )
}
