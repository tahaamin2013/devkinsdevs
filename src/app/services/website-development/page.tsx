import ServiceComponent from "@/components/service-component"

export default function ExamplePage() {
  return (
    <ServiceComponent
      title="Custom Website Development"
      description="Building fast, responsive, and scalable websites tailored to your business goals"
      features={[
        "Responsive Web Design",
        "Custom Web Applications",
        "E-commerce Development",
        "CMS Integration",
        "API Integration",
      ]}
      serviceDescription="Our website development services are focused on delivering high-quality, user-friendly websites that help your business grow online. Whether it's a landing page, portfolio, or a complex web app, we build solutions that perform and scale."
      contactPageUrl="/contact"
      benefits={[
        {
          title: "Professional Online Presence",
          description:
            "A custom website gives your business a strong and credible presence on the internet.",
        },
        {
          title: "Improved User Experience",
          description:
            "Well-designed websites are intuitive and easy to navigate, improving customer satisfaction and retention.",
        },
        {
          title: "Scalability and Flexibility",
          description:
            "Our websites are built to grow with your business, offering flexibility to add features as you expand.",
        },
        {
          title: "Mobile-Friendly Design",
          description:
            "We ensure your site looks great and works smoothly on all devices, from desktops to smartphones.",
        },
        {
          title: "Custom Functionality",
          description:
            "Get exactly what your business needs with tailor-made features and integrations that support your workflow.",
        },
        {
          title: "Faster Load Times",
          description:
            "Optimized code and performance techniques result in fast-loading websites, improving user engagement.",
        },
        {
          title: "Secure Architecture",
          description:
            "We implement modern best practices to ensure your website is secure and protected against threats.",
        },
        {
          title: "Ongoing Support",
          description:
            "We provide maintenance and updates to keep your site running smoothly and efficiently.",
        },
      ]}
    />
  )
}
