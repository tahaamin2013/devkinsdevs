import type React from "react"
import { Gauge, Shield, Globe, DollarSign } from "lucide-react"

export default function WhyChooseSection() {
  return (
    <section className="w-full py-20 bg-white dark:bg-black dark:text-white">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1">
              <span className="text-xs font-medium tracking-wider text-cyan-700 uppercase">Why Choose Devkins</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight dark:text-white text-gray-900">
              Development-Driven Excellence
            </h2>

            <p className="dark:text-white text-gray-600 leading-relaxed">
              Revolutionizing software development—connect, innovate, and trust in a global network of expert
              developers.
            </p>
          </div>

          {/* Right column - features grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FeatureCard
                icon={<Globe className="h-6 w-6" />}
                title="Worldwide Talent"
                description="Access skilled developers globally from any location with matching expertise."
              />

              <FeatureCard
                icon={<DollarSign className="h-6 w-6" />}
                title="Cost-Effective"
                description="Maximize your investment with high-quality solutions at competitive rates."
              />

              <FeatureCard
                icon={<Gauge className="h-6 w-6" />}
                title="Rapid Delivery"
                description="Reduce development time by matching the right talent to your specific needs."
              />

              <FeatureCard
                icon={<Shield className="h-6 w-6" />}
                title="Secure Process"
                description="Projects are securely managed with guaranteed satisfaction or refund."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-cyan-200 transition-all duration-300">
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-100 text-cyan-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold dark:text-black text-gray-900 mb-2">{title}</h3>
      <p className="dark:text-black text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
