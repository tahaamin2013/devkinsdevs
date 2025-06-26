import ServiceComponent from "@/components/service-component"

export default function ExamplePage() {
  return (
    <ServiceComponent
      title="Professional Graphic Design"
      description="Creating visually stunning and impactful designs to elevate your brand"
      features={[
        "Logo & Branding",
        "Social Media Graphics",
        "Marketing Materials",
        "Web & App Design",
        "Packaging Design",
      ]}
      serviceDescription="Our graphic design services help your business stand out with creative and professional visuals. From branding to marketing, we craft designs that communicate your message clearly and beautifully."
      contactPageUrl="/contact"
      benefits={[
        {
          title: "Stronger Brand Identity",
          description:
            "Consistent and creative design strengthens your brand identity and makes it easily recognizable across platforms.",
        },
        {
          title: "Improved Customer Engagement",
          description:
            "Eye-catching graphics attract attention and help keep customers engaged with your content.",
        },
        {
          title: "Professional Appearance",
          description:
            "High-quality design builds trust and gives your business a polished, professional look.",
        },
        {
          title: "Better Communication",
          description:
            "Design helps convey your message clearly and quickly, improving communication with your audience.",
        },
        {
          title: "Increased Sales & Conversions",
          description:
            "Compelling visuals can drive action, from clicking a button to making a purchase.",
        },
        {
          title: "Versatile Usage",
          description:
            "Great designs can be used across multiple platforms—from social media to print to packaging.",
        },
        {
          title: "Memorable Impressions",
          description:
            "First impressions matter. Professional graphic design helps ensure your business leaves a lasting mark.",
        },
        {
          title: "Competitive Edge",
          description:
            "Stand out from competitors with unique and creative design solutions tailored to your brand.",
        },
      ]}
    />
  )
}
