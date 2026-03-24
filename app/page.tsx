import type { Metadata } from "next"
import Link from "next/link"
import {
  Layers,
  Target,
  Scale,
  Clock,
  Users,
  BarChart3,
  GraduationCap,
  Code,
  Award,
  Beaker,
  Wallet,
  Monitor,
  Server,
  Briefcase,
  UserCheck,
  MessageSquare,
  Wrench,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

import { HeroSplit } from "@/components/sections/hero-split"
import { SectionHeader } from "@/components/sections/section-header"
import { StatsBar } from "@/components/sections/stats-bar"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CTASection } from "@/components/sections/cta-section"
import { ProgramCard } from "@/components/cards/program-card"
import { ProductCard } from "@/components/cards/product-card"
import { ServiceCard } from "@/components/cards/service-card"

import { programs } from "@/lib/data/programs"
import { products } from "@/lib/data/products"
import { services } from "@/lib/data/services"
import { company } from "@/lib/data/company"
import { websiteSchema } from "@/lib/schemas/website"
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel"

import { FadeIn } from "@/components/motion/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/motion/stagger-children"
import { LogoTicker } from "@/components/carousels/logo-ticker"
import { allPartners } from "@/lib/data/partners"
import { IndustriesGrid } from "@/components/sections/industries-grid"

export const metadata: Metadata = {
  title:
    "Datagami - Lead Digital Technology | EdTech Solutions for Universities & Businesses",
  description:
    "Empowering Institutions, Universities & Businesses Through Technology, Partnerships & Innovation. 50+ Partner Universities, 10K+ Students Impacted, 200+ Programs Delivered.",
  openGraph: {
    images: ["/images/hero/hero-students-collaborating.png"],
  },
}

export default function Home() {
  const { finlearn, techlearn, ibmIce, clinomic, upiStudy } = programs

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* 1. Hero Split */}
      <HeroSplit
        heading="Empowering Institutions, Universities & Businesses Through Technology, Partnerships & Innovation"
        subtitle="Design next-gen programs for future-ready learners."
        ctaText="Explore Solutions"
        ctaHref="/services"
        imageSrc="/images/hero/hero-students-collaborating.png"
        imageAlt="University students collaborating with technology"
        showLogo
        floatingCard={{
          heading: "Partner in Shaping the Future of Education",
          ctaText: "Contact Us",
          ctaHref: "/contact",
        }}
      />

      {/* 2. Solutions Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Our Solutions"
              description="Comprehensive business solutions designed to drive growth and enhance capabilities."
              gradient
            />
          </FadeIn>

          {/* Programs Offered */}
          <div className="mb-16">
            <FadeIn>
              <h3 className="text-2xl font-bold text-dark mb-8">
                Programs Offered
              </h3>
            </FadeIn>
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <StaggerItem>
                <ProgramCard
                  title={finlearn.name}
                  description={finlearn.tagline}
                  href={finlearn.href}
                  icon={<GraduationCap className="size-6" />}
                  backgroundImage="/images/cards/finlearn-card.png"
                />
              </StaggerItem>
              <StaggerItem>
                <ProgramCard
                  title={techlearn.name}
                  description={techlearn.tagline}
                  href={techlearn.href}
                  icon={<Code className="size-6" />}
                  backgroundImage="/images/cards/techlearn-card.png"
                />
              </StaggerItem>
              <StaggerItem>
                <ProgramCard
                  title={ibmIce.name}
                  description={ibmIce.tagline}
                  href={ibmIce.href}
                  icon={<Award className="size-6" />}
                  backgroundImage="/images/cards/ibm-ice-card.png"
                />
              </StaggerItem>
              <StaggerItem>
                <ProgramCard
                  title={clinomic.name}
                  description={clinomic.tagline}
                  href={clinomic.href}
                  icon={<Beaker className="size-6" />}
                  backgroundImage="/images/cards/clinomic-card.png"
                />
              </StaggerItem>
              <StaggerItem>
                <ProgramCard
                  title={upiStudy.name}
                  description={upiStudy.tagline}
                  href={upiStudy.href}
                  icon={<Wallet className="size-6" />}
                  backgroundImage="/images/cards/upi-card.png"
                />
              </StaggerItem>
            </StaggerChildren>
          </div>

          {/* Products */}
          <div className="mb-16">
            <FadeIn>
              <h3 className="text-2xl font-bold text-dark mb-8">Products</h3>
            </FadeIn>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>

          {/* Hiring & Other Services */}
          <div>
            <FadeIn>
              <h3 className="text-2xl font-bold text-dark mb-8">
                Hiring &amp; Other Services
              </h3>
            </FadeIn>
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StaggerItem>
                <ServiceCard
                  title={services[0].name}
                  description={services[0].description}
                  href={services[0].href}
                  icon={<Briefcase className="size-6" />}
                />
              </StaggerItem>
              <StaggerItem>
                <ServiceCard
                  title={services[1].name}
                  description={services[1].description}
                  href={services[1].href}
                  icon={<UserCheck className="size-6" />}
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
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <FadeIn>
        <CTASection
          title="Ready to Transform Your Business or Institution?"
          description="Discover how our solutions can help your organization achieve its goals."
          buttonText="Get Started"
          buttonHref="/contact"
          variant="primary"
        />
      </FadeIn>

      {/* 4. Why Choose Us */}
      <section className="py-16 md:py-20 bg-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Transforming Education and Enterprise With Proven Solutions" gradient />
          </FadeIn>
          <FadeIn delay={0.2}>
            <FeatureGrid
              features={company.whyChooseUs.map((item, index) => ({
                icon: [
                  <Layers key="layers" className="size-6" />,
                  <Target key="target" className="size-6" />,
                  <Scale key="scale" className="size-6" />,
                  <Clock key="clock" className="size-6" />,
                  <Users key="users" className="size-6" />,
                  <BarChart3 key="barchart" className="size-6" />,
                ][index],
                title: item.title,
                description: item.description,
              }))}
            />
          </FadeIn>
        </div>
      </section>

      {/* 4b. Industries We Serve */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Industries We Serve"
              description="Powering digital transformation across sectors"
              gradient
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <IndustriesGrid />
          </FadeIn>
        </div>
      </section>

      {/* 5. Trust Metrics */}
      <section className="py-16 md:py-20 bg-gray-50 bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Trusted by Leading Universities & Institutions" />
          </FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <StatsBar
            stats={[
              {
                value: company.stats.partnerUniversities,
                label: "Partner Universities",
              },
              {
                value: company.stats.studentsImpacted,
                label: "Students Impacted",
              },
              {
                value: company.stats.programsDelivered,
                label: "Programs Delivered",
              },
            ]}
          />
        </FadeIn>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <FadeIn delay={0.3}>
            <LogoTicker
              logos={allPartners.map((p) => ({ name: p.name, src: p.logo }))}
            />
          </FadeIn>
        </div>
      </section>

      {/* 6. Digital Education Solutions */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">
                  Comprehensive Digital Education Solutions
                </h2>
                <ul className="space-y-4 mb-8">
                  {[
                    "Strategic Policy Implementation",
                    "Industry Collaboration Programs",
                    "Digital Career Readiness Technology",
                    "Data Analytics & Reporting",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-brand shrink-0 mt-0.5" />
                      <span className="text-muted-brand">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-dark/90 transition-colors"
                >
                  View All Services
                  <ArrowRight className="size-5" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.3}>
              <div>
                <img
                  src="/images/hero/hero-edtech-dashboard.png"
                  alt="Comprehensive digital education solutions dashboard"
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. Success Stories */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader title="Proven Success Stories" gradient />
          </FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <StatsBar
            stats={[
              { value: "85%", label: "Increase in Graduate Employment" },
              { value: "200+", label: "Industry Partnerships" },
              { value: "50%", label: "Reduction in Policy Implementation Time" },
            ]}
          />
        </FadeIn>
      </section>

      {/* 8. Testimonials */}
      <TestimonialCarousel />

      {/* 9. Final CTA */}
      <FadeIn>
        <CTASection
          title="Let's Build the Future Together"
          buttonText="Start Your Journey"
          buttonHref="/contact"
          variant="dark"
        />
      </FadeIn>
    </>
  )
}
