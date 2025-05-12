"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Pause, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Carousel data
const slides = [
  {
    id: 1,
    title: "Software Engineering",
    description:
      "Building robust, scalable software solutions with cutting-edge technologies to solve complex business challenges.",
    bgColor: "bg-black",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1476&auto=format&fit=crop",
    heroImage2: "/girl.png",
  },
  {
    id: 2,
    title: "Product Design",
    description:
      "Designing innovative products that exceed your expectations, focused on quality, user experience and customer satisfaction. And therefore speeding up your growth.",
    bgColor: "bg-black",
    heroImage2: "/boy.png",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Data Science & AI",
    description:
      "Leveraging advanced analytics and artificial intelligence to extract valuable insights and drive data-informed decisions.",
    bgColor: "bg-black",
    heroImage2: "/girl2.png",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Consulting",
    description:
      "Strategic guidance and expert advice to optimize your business processes, technology stack, and digital transformation journey.",
    bgColor: "bg-black",
    heroImage2: "/boy2.png",
    heroImage: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1470&auto=format&fit=crop",
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
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
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
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src={slide.heroImage || "/placeholder.svg"}
              alt={`${slide.title} background`}
              fill
              priority
              className="object-cover object-center filter blur-[2px]"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative w-full h-full px-6 md:px-12 lg:px-20 py-12">
            {/* Updated from indigo to #07b6d5 shade */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#07b6d5]/20 -translate-x-1/2 -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              <div className="flex flex-col justify-center z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{slide.title}</h2>
                <p className="text-gray-100 mb-8 max-w-lg">{slide.description}</p>
                <div>
                  <Button className="bg-[#07b6d5] hover:bg-[#069fc1] text-white font-medium rounded-full px-8">
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
        <div className="relative h-full w-[500px]">
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
            className="h-12 w-12 text-white opacity-70 hover:opacity-100"
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
                    ? "text-white border-white font-medium"
                    : "text-gray-200 border-transparent hover:text-gray-200",
                )}
              >
                {slide.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
