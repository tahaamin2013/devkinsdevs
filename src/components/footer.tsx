"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Github, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Star } from "lucide-react"

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [count, setCount] = useState(0)

  // Handle mouse movement for the glow effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!footerRef.current) return
    const rect = footerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  // Counting animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 100) return prev + 1
        clearInterval(interval)
        return 100
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const animatedElements = footerRef.current?.querySelectorAll(".animate-on-scroll")
    animatedElements?.forEach((el) => observer.observe(el))

    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative mt-20 overflow-hidden bg-gradient-to-r from-slate-900 via-cyan-700 to-slate-900 text-white animate-gradient-background"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Wave Pattern */}

      {/* Mouse follow glow effect */}
      <div
        className="pointer-events-none absolute opacity-20 bg-cyan-400 blur-[80px] rounded-full w-64 h-64 transition-transform duration-200"
        style={{
          left: `${mousePosition.x - 128}px`,
          top: `${mousePosition.y - 128}px`,
          transform: `translate(${mousePosition.x > 0 ? "0" : "-50%"}, ${mousePosition.y > 0 ? "0" : "-50%"})`,
        }}
      />

      {/* Animated border */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-border-flow"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-border-flow-reverse"></div>
      </div>

      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* Stats Section with Counting Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
          {[
            { icon: <Star className="h-6 w-6 text-yellow-300" />, label: "Projects", value: count },
            {
              icon: <Github className="h-6 w-6 text-gray-300" />,
              label: "Repositories",
              value: Math.floor(count * 2.5),
            },
            { icon: <Mail className="h-6 w-6 text-red-300" />, label: "Clients", value: Math.floor(count * 0.5) },
            { icon: <Star className="h-6 w-6 text-yellow-300" />, label: "Rating", value: "4.9" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center animate-pulse-slow">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-white animate-shimmer bg-clip-text">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section with Animation */}
          <div className="space-y-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <div className="flex items-center space-x-2 group">
          
              <h2 className="text-2xl font-bold relative overflow-hidden">
                Devkins
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </h2>
            </div>

            {/* Typing animation for tagline */}
            <p className="text-gray-300 max-w-xs h-12 overflow-hidden relative">
              <span className="typing-animation">
                Creating extraordinary digital experiences that inspire and connect.
              </span>
            </p>

            {/* Social Media Icons with Animations */}
            <div className="flex space-x-4 pt-2">
              {[
                { icon: <Github className="h-5 w-5" />, delay: "100", color: "hover:bg-gray-700" },
                { icon: <Twitter className="h-5 w-5" />, delay: "200", color: "hover:bg-blue-500" },
                { icon: <Linkedin className="h-5 w-5" />, delay: "300", color: "hover:bg-blue-700" },
                { icon: <Instagram className="h-5 w-5" />, delay: "400", color: "hover:bg-pink-600" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center ${item.color} transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-bounce-in`}
                  style={{ animationDelay: `${item.delay}ms` }}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links with Staggered Animation */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ transitionDelay: "200ms" }}
          >
            <h3 className="text-lg font-semibold mb-4 border-b border-cyan-500 pb-2 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white animate-expand-line"></span>
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map((item, index) => (
                <li
                  key={item}
                  className="group opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100 + 300}ms`, animationFillMode: "forwards" }}
                >
                  <Link
                    href="#"
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="h-3 w-3 animate-pulse-slow" />
                    </span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info with Animated Icons */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ transitionDelay: "400ms" }}
          >
            <h3 className="text-lg font-semibold mb-4 border-b border-cyan-500 pb-2 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white animate-expand-line"></span>
            </h3>
            <ul className="space-y-4">
              {[
                { icon: <Mail className="h-5 w-5" />, text: "hello@devkins.com", animation: "animate-wiggle" },
                { icon: <Phone className="h-5 w-5" />, text: "+1 (555) 123-4567", animation: "animate-shake" },
                {
                  icon: <MapPin className="h-5 w-5" />,
                  text: "123 Tech Lane, Digital City",
                  animation: "animate-bounce-subtle",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3 group">
                  <div className={`mt-1 text-cyan-400 ${item.animation}`}>{item.icon}</div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Animated Button */}
            <button
              className="mt-6 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-medium 
                              hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 
                              hover:shadow-lg hover:shadow-cyan-500/50 animate-pulse-button group"
            >
              <span className="flex items-center">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>



      </div>
    </footer>
  )
}
