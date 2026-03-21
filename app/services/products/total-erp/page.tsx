import type { Metadata } from "next"
import Breadcrumbs from "@/components/layout/breadcrumbs"
import { HeroFull } from "@/components/sections/hero-full"
import { SectionHeader } from "@/components/sections/section-header"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CTASection } from "@/components/sections/cta-section"
import { totalErp } from "@/lib/data/products"
import {
  Wallet,
  Users,
  Package,
  FolderKanban,
  PieChart,
  Plug,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Total ERP - Enterprise Resource Planning",
  description:
    "End-to-end enterprise resource planning solution with financial management, HR, inventory, project management, and analytics.",
}

const features = [
  {
    icon: <Wallet className="size-6" />,
    title: "Financial Management",
    description:
      "Complete accounting, budgeting, and financial reporting with multi-currency and multi-entity support.",
  },
  {
    icon: <Users className="size-6" />,
    title: "HR & Payroll",
    description:
      "Employee lifecycle management from recruitment to retirement, including payroll, leave, and attendance.",
  },
  {
    icon: <Package className="size-6" />,
    title: "Inventory Management",
    description:
      "Track stock levels, manage purchase orders, and automate reorder points across warehouses.",
  },
  {
    icon: <FolderKanban className="size-6" />,
    title: "Project Management",
    description:
      "Plan, execute, and monitor projects with task assignments, timelines, and resource allocation.",
  },
  {
    icon: <PieChart className="size-6" />,
    title: "Reporting & Analytics",
    description:
      "Real-time dashboards and custom reports for data-driven decision making across departments.",
  },
  {
    icon: <Plug className="size-6" />,
    title: "Integration APIs",
    description:
      "Open APIs for seamless integration with third-party tools, payment gateways, and external systems.",
  },
]

const steps = [
  {
    step: 1,
    title: "Setup & Configuration",
    description:
      "We assess your operational workflows and configure Total ERP modules to fit your business processes.",
  },
  {
    step: 2,
    title: "Customization & Integration",
    description:
      "Custom dashboards, role-based access, and integration with existing tools like banking and HR systems.",
  },
  {
    step: 3,
    title: "Launch & Support",
    description:
      "Phased rollout with user training, data migration support, and dedicated post-launch assistance.",
  },
]

export default function TotalErpPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Products", href: "/services#products" },
            { label: "Total ERP" },
          ]}
        />
      </div>

      {/* Hero */}
      <HeroFull
        heading={totalErp.name}
        subtitle={totalErp.tagline}
        backgroundColor="bg-brand"
      />

      {/* Product Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-muted-brand max-w-3xl mx-auto text-center leading-relaxed">
            {totalErp.description}
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Key Features"
            description="A unified platform to manage every aspect of your organization."
          />
          <FeatureGrid features={features} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="How It Works"
            description="From assessment to go-live in three structured phases."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div
                key={s.step}
                className="relative p-6 rounded-xl border border-border-custom hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-brand text-dark font-bold flex items-center justify-center mb-4 text-lg">
                  {s.step}
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-brand">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Request a Demo"
        description="Discover how Total ERP can streamline your operations."
        buttonText="Request a Demo"
        buttonHref="/contact"
        variant="dark"
      />
    </>
  )
}
