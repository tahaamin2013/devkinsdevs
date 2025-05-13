"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    industry: "",
    budget: "",
    message: "",
    consent: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          industry: formData.industry,
          budget: formData.budget,
          message: formData.message,
        }),
      })

      if (response.ok) {
        alert("Message sent successfully!")
        setFormData({
          name: "",
          phone: "",
          email: "",
          industry: "",
          budget: "",
          message: "",
          consent: false,
        })
      } else {
        const result = await response.json()
        alert(`Failed to send message: ${result.error}`)
      }
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Failed to send message. Please try again later.")
    }
  }

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-6xl  mx-auto overflow-hidden rounded-xl shadow-lg">
      {/* Left side - Form */}
      <div className="w-full lg:w-3/5 bg-white p-8 relative">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Lets talk!</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <Label htmlFor="name" className="text-sm text-gray-600">
                Name*
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-gray-300"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div>
                <Label htmlFor="phone" className="text-sm text-gray-600">
                  Phone*
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border-gray-300"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm text-gray-600">
                  Email*
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div>
                <Label htmlFor="industry" className="text-sm text-gray-600">
                  Industry*
                </Label>
                <Select onValueChange={(value) => handleSelectChange("industry", value)} value={formData.industry}>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="-" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budget" className="text-sm text-gray-600">
                  Expected Budget*
                </Label>
                <Select onValueChange={(value) => handleSelectChange("budget", value)} value={formData.budget}>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="-" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less-10k">Less than $10k</SelectItem>
                    <SelectItem value="10k-50k">$10k - $50k</SelectItem>
                    <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                    <SelectItem value="more-100k">More than $100k</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-5">
              <Label htmlFor="message" className="text-sm text-gray-600">
                Message*
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[100px] border-gray-300"
              />
            </div>



            <Button
              type="submit"
              className="w-full bg-yellow-200 hover:bg-yellow-300 text-gray-800 font-medium rounded-full py-6"
            >
              Send
            </Button>
          </form>
        </div>

        {/* Curved shape for desktop */}

</div>

      {/* Right side - Contact Info */}
<div>
  <Image
  width={500}
  height={500}
  src="/contact.jpg"
  alt="Curved Shape"
  className="hidden lg:block"
  />
</div>
    </div>
  )
}
