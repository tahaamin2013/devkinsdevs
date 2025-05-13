"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Pause, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CaseStudy } from "./ui/case-study"

const projects = [
  {
    id: 1,
    title: "Yveslupitu - Garment Store",
    description:
      "A comprehensive e-commerce platform tailored for a garment store, featuring seamless user experience, secure payment integration, and responsive design to enhance customer engagement.",
    skills: [
      "UI/UX Design",
      "Web development",
      "Mobile Development",
      "Project management",
      "Responsive Design",
    ],
    Photo: ["/Yveslupitu.png"],
  },
  {
    id: 2,
    title: "ThryveToday - Medical Trainer",
    description:
      "A cutting-edge medical training platform designed to empower users with personalized health insights, interactive training modules, and seamless integration with wearable devices to promote healthier lifestyles.",
    skills: ["UI/UX Design", "Mobile Development", "Backend Development", "API Integration", "User Testing"],
    Photo: ["/ThryveToday.png"],
  },
  {
    id: 3,
    title: "Great Think Construction",
    description:
      "A modern construction management platform that streamlines project planning, resource allocation, and real-time collaboration, ensuring efficiency and transparency in construction workflows.",
    skills: [
      "UI/UX Design",
      "Web Development",
      "Data Visualization",
      "Performance Optimization",
      "Cross-platform Integration",
    ],
    Photo: ["/Greaththing.png"],
  },
  {
    id: 4,
    title: "Beauty Bugs - Beauty Industry",
    description:
      "An innovative platform for the beauty industry, offering tools for enhanced customer engagement, streamlined operations, and optimized performance for beauty professionals and businesses.",
    skills: [
      "UI/UX Design",
      "Web Development",
      "Performance Optimization",
    ],
    Photo: ["/beautybugs.png"],
  },
];
const slides = [
  {
    id: 1,
    title: "Software Engineering",
    description:
      "Building robust, scalable software solutions with cutting-edge technologies to solve complex business challenges.",
    bgColor: "bg-white",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1476&auto=format&fit=crop",
    heroImage2: "/girsl.png",
    Photo: "/Yveslupitu.png",

  },
  {
    id: 2,
    title: "Product Design",
    description:
      "Designing innovative products that exceed your expectations, focused on quality, user experience and customer satisfaction. And therefore speeding up your growth.",
    bgColor: "bg-white",
    heroImage2: "/bo.png",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop",
    Photo: "/Yveslupitu.png",

  },
  {
    id: 3,
    title: "Data Science & AI",
    description:
      "Leveraging advanced analytics and artificial intelligence to extract valuable insights and drive data-informed decisions.",
    bgColor: "bg-white",
    heroImage2: "/girl2.png",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1470&auto=format&fit=crop",
    Photo: "/Yveslupitu.png",

  },
  {
    id: 4,
    title: "Consulting",
    description:
      "Strategic guidance and expert advice to optimize your business processes, technology stack, and digital transformation journey.",
    bgColor: "bg-white",
    heroImage2: "/girl3.png",
    heroImage: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1470&auto=format&fit=crop",
    Photo: "/Yveslupitu.png",

  },
  
]

export default function HomepageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev)
  }

  return (
 <>
    <div className="relative w-full h-[500px] md:h-[600px] overflow-x-hidden">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000",
            slide.bgColor,
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          {/* Hero image */}
          {/* <div className="absolute inset-0 w-full h-full overflow-x-hidden">
            <Image
              src={slide.heroImage || "/placeholder.svg"}
              alt={`${slide.title} background`}
              fill
              priority
              className="object-cover object-center filter blur-[2px]"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div> */}

          <div className="relative w-full h-full px-6 md:px-12 lg:pl-[160px] py-12">
            {/* Updated from indigo to #07b6d5 shade */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#07b6d5]/20 -translate-x-1/2 -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 opacity-30 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-[400px] right-[600px] w-96 h-96 bg-cyan-400/60 opacity-20 rounded-full filter blur-2xl -z-10"></div>
      <div className="absolute bottom-10 right-[100px] w-96 h-96 bg-cyan-400 opacity-20 rounded-full filter blur-2xl -z-10"></div>

              <div className="flex flex-col justify-center z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">{slide.title}</h2>
                <p className="text-black-100 mb-8 max-w-lg">{slide.description}</p>
                <div>
                  <Button className="bg-[#07b6d5] hover:bg-[#07b6d5]/50 text-black font-medium rounded-full px-8">
                    Learn more
                  </Button>
                </div>

                {/* Trust badges */}
                <div className="mt-12 flex flex-wrap items-center gap-6">
                  <Image
                    src="https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1470&auto=format&fit=crop"
                    alt="Partner badge"
                    width={80}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition-opacity h-8 w-auto object-contain"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
                    alt="Forbes"
                    width={100}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition-opacity h-8 w-auto object-contain"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1374&auto=format&fit=crop"
                    alt="Clutch rating"
                    width={80}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition-opacity h-8 w-auto object-contain"
                  />
                  <Image
                    src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=1469&auto=format&fit=crop"
                    alt="ISO certification"
                    width={80}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition-opacity h-8 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Right image */}
      <div className="absolute right-0 bottom-0 top-0 z-30 hidden md:block">
   <div
  key={currentSlide}
  className="relative h-full w-[500px] transition-all duration-700 ease-out opacity-100 translate-x-0 animate-in fade-in slide-in-from-right-8"
>
  <Image
    src={slides[currentSlide]?.heroImage2 || "/placeholder.svg"}
    alt="Professional"
    fill
    priority
    className="object-contain pr-[100px] object-right-bottom mix-blend-screen"
  />
</div>
      </div>

      {/* Navigation bar */}
      <div className="absolute bottom-0 left-0 right-0 z-40 bg-[#07b6d5]/40 backdrop-blur-sm">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 text-black opacity-70 hover:opacity-100"
            onClick={togglePlayPause}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            <span className="sr-only">{isPlaying ? "Pause" : "Play"} slideshow</span>
          </Button>

          <div className="flex-1 grid grid-cols-4">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={cn(
                  "py-4 text-center transition-all border-t-2 text-sm md:text-base",
                  currentSlide === index
                    ? "text-black border-black font-medium"
                    : "text-black-200 border-transparent hover:text-black-200",
                )}
              >
                {slide.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>

       <div className="container mx-auto px-4 py-12 md:py-24">
      <CaseStudy
        projects={projects}
        onDetailsClick={(projectId) => console.log(`Details clicked for project ${projectId}`)}
        onAllCasesClick={() => console.log("All cases clicked")}
      />
    </div>
 </>
  )
}