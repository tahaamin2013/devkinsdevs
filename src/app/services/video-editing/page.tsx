import ServiceComponent from "@/components/service-component"

export default function ExamplePage() {
  return (
    <ServiceComponent
      title="Professional Video Editing"
      description="Crafting engaging and polished videos that bring your vision to life"
      features={[
        "YouTube & Social Media Editing",
        "Corporate Videos",
        "Event Highlights",
        "Color Grading & Correction",
        "Motion Graphics & Titles",
      ]}
      serviceDescription="Our video editing services help individuals and businesses transform raw footage into compelling stories. Whether it's for marketing, entertainment, or personal projects, we deliver professional results that stand out."
      contactPageUrl="/contact"
      benefits={[
        {
          title: "Engaging Storytelling",
          description:
            "We turn raw clips into a well-structured story that keeps viewers engaged from start to finish.",
        },
        {
          title: "Professional Quality",
          description:
            "Our editors use industry-standard tools to deliver clean cuts, smooth transitions, and high-quality visuals.",
        },
        {
          title: "Time-Saving",
          description:
            "Let us handle the editing so you can focus on content creation or business priorities.",
        },
        {
          title: "Customized Style",
          description:
            "We match your brand or personal style with custom edits, music, and graphics tailored to your audience.",
        },
        {
          title: "Platform-Optimized Videos",
          description:
            "We create videos optimized for YouTube, Instagram, TikTok, or any other platform you choose.",
        },
        {
          title: "Enhanced Visual Appeal",
          description:
            "With color correction, grading, and effects, we make your videos look cinematic and polished.",
        },
        {
          title: "Audio Refinement",
          description:
            "We clean up background noise, balance audio levels, and add fitting music or sound effects.",
        },
        {
          title: "Consistent Output",
          description:
            "Need regular content? We offer consistent and reliable editing services to keep your schedule on track.",
        },
      ]}
    />
  )
}
