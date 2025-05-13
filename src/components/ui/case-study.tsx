"use client"

import { useState, useEffect, useCallback } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  skills: string[]
  Photo?: string[] // Make Photo optional
}

interface CaseStudyProps {
  projects: Project[]
  subtitle?: string
  onDetailsClick?: (projectId: number) => void
  onAllCasesClick?: () => void
}

export function CaseStudy({ projects, subtitle = "Portfolio",}: CaseStudyProps) {
  const [activeProject, setActiveProject] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const currentProject = projects[activeProject]

  const nextProject = useCallback(() => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }, [projects.length])

  // Auto-run functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoPlay) {
      interval = setInterval(() => {
        nextProject()
      }, 5000) // Change project every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoPlay, nextProject])

  return (
    <div className="flex">
      {/* Project Numbers Navigation */}
      <div className="hidden md:flex flex-col items-center mr-8 pt-16">
        <div className="absolute left-[10px] mt-[-200px] w-96 h-96 bg-cyan-400/50 opacity-20 rounded-full filter blur-2xl -z-10"></div>
        {[1, 2, 3, 4].map((number, index) => (
          <button
            key={index}
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center mb-4 text-lg font-medium transition-colors",
              activeProject === index ? "bg-gray-900 text-white" : "text-gray-400 hover:text-gray-700",
            )}
            onClick={() => {
              setActiveProject(index)
              setAutoPlay(false) // Pause autoplay when manually navigating
            }}
            disabled={index >= projects.length}
          >
            {number}
          </button>
        ))}

        <button
          className="w-12 h-12 rounded-full flex items-center justify-center mt-4 text-gray-700 hover:bg-gray-200 transition-colors"
          onClick={() => setAutoPlay(!autoPlay)}
          aria-label={autoPlay ? "Pause auto-play" : "Start auto-play"}
        >
          {autoPlay ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-pause"
            >
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-play"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center flex-1">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-gray-500 font-medium">{subtitle}</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {currentProject.title.split(" ").slice(0, -1).join(" ")}
              <br />
              {currentProject.title.split(" ").slice(-1)}
            </h1>
          </div>

          <div className="flex flex-wrap gap-2">
            {currentProject.skills.slice(0, 5).map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-gray-100 hover:bg-gray-100 text-gray-700 rounded-full px-4 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>

          {currentProject.skills.length > 5 && (
            <div className="flex flex-wrap gap-2">
              {currentProject.skills.slice(5).map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-gray-100 hover:bg-gray-100 text-gray-700 rounded-full px-4 py-1"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          )}

          <p className="text-gray-700 leading-relaxed">{currentProject.description}</p>

          {/* Progress indicator */}
          <div className="flex space-x-2 pt-4">
            {projects.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-1 rounded-full transition-all duration-500",
                  activeProject === index ? "bg-gray-900 w-8" : "bg-gray-200 w-4",
                )}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Portfolio photo with hover effect */}
          <div className="overflow-x-hidden rounded-lg shadow-lg h-[400px] w-full">
            <Image
              src={currentProject.Photo?.[0] || "/placeholder.svg?height=800&width=600"}
              alt={`${currentProject.title} portfolio image`}
              className="object-cover w-full h-full transition-all duration-7000 ease-in-out object-top hover:object-bottom"
              width={800}
              height={800}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}