"use client"
import { useRef } from "react"
import Link from "next/link"
import { Check } from "lucide-react"

/**
 * A single benefit item shown in the service benefits section.
 */
interface BenefitItem {
  title: string
  description: string
}

/**
 * A single step in the working process.
 */
interface WorkingProcessStep {
  number: string
  title: string
  description: string
}

/**
 * A single project item related to the service.
 */
interface ProjectItem {
  title: string
  description: string
  imageUrl?: string
}

export interface ServiceComponentProps {
  title: string
  description?: string
  features?: string[]
  /**
   * A list of key benefits provided by the service.
   */
  benefits?: BenefitItem[]
  workingProcess?: WorkingProcessStep[]
  projects?: ProjectItem[]
  serviceDescription?: string
  contactPageUrl?: string
}

const ServiceComponent = ({
  title = "UI/UX Design For Mobile",
  description = "Creating captivating and user-friendly mobile applications that engage your audience and enhance your brand presence.",
  features = ["Design and User Experience", "Development", "Testing", "Deployment", "Maintenance and Updates"],
  benefits = [
    {
      title: "Expanded Market Reach",
      description:
        "Mobile apps enable businesses to reach a broader audience as smartphones and tablets are ubiquitous and accessible to a large portion of the global population.",
    },
    {
      title: "User Experience",
      description:
        "Enhanced Mobile apps are designed to provide a user-friendly and intuitive experience, often leading to higher user engagement and customer satisfaction.",
    },
    {
      title: "Improved Brand Loyalty",
      description:
        "A well-designed and functional mobile app can foster brand loyalty and keep customers coming back for more.",
    },
    {
      title: "Increased Sales and Revenue",
      description:
        "Mobile apps can serve as a powerful sales and revenue channel through in-app purchases, subscriptions, and e-commerce functionalities.",
    },
    {
      title: "Access to Device Features",
      description:
        "Developers can leverage device-specific features like GPS, camera, and sensors to create innovative and personalized experiences.",
    },
    {
      title: "Offline Access",
      description:
        "Many mobile apps offer offline functionality, allowing users to access content and perform tasks even without an internet connection.",
    },
    {
      title: "Push Notifications",
      description: "Apps can send push notifications to users, keeping them informed, engaged, and prompting action.",
    },
    {
      title: "Data Analytics",
      description:
        "Mobile apps provide valuable data on user behavior, enabling businesses to make data-driven decisions and refine their strategies.",
    },
  ],
  workingProcess = [
    {
      number: "01",
      title: "Analysis and Planning",
      description: "The process begins by thoroughly understanding the client's objectives.",
    },
    {
      number: "02",
      title: "Current State Evaluation",
      description: "Assess the client's existing IT infrastructure, systems, and processes.",
    },
    {
      number: "03",
      title: "Implementation and Execution",
      description: "Execute the project plan, which may involve deploying new software, hardware, or IT processes.",
    },
    {
      number: "04",
      title: "Evaluation and Maintenance",
      description: "Assess the results of the implemented solutions against the predefined goals.",
    },
  ],
  serviceDescription = "Our Mobile App Development Services encompasses building of this field encompasses various platforms, including iOS (Apple), Android (Google), and others, and it plays a crucial role in shaping the way people interact with technology in our increasingly mobile-driven world. Mobile developers work on designing, coding, testing, and optimizing mobile apps to provide users with seamless and efficient digital experiences on their handheld devices.",
  contactPageUrl = "/contact",
}: ServiceComponentProps) => {
  return (
    <div>
      <div className="text-white text-center py-[100px] mt-[50px] bg-cyan-600">
        <h1 className="font-bold text-6xl md:text-7xl mb-4">{title}</h1>
        <p className="text-md">{description}</p>
      </div>

      {/* Service Description */}
      <div className="mt-8 px-6 md:px-[70px]">
        <h1 className="font-bold text-4xl mb-2">Service Description</h1>
        <p className="mb-1 text-zinc-400 font-bold">{serviceDescription}</p>
      </div>

      {/* Features */}
      <div className="mt-[40px] flex flex-col md:flex-row px-6 sm:px-[70px]">
        <div className="rounded-2xl object-cover w-[500px] h-[400px] bg-cyan-500"></div>
        <div className="flex flex-col gap-[30px] ml-5 mt-6 md:mt-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-b flex gap-3 font-bold border-zinc-500 text-xl w-full md:w-[600px] pb-4 items-center"
            >
              <div className="text-white rounded-full text-center h-fit w-fit bg-cyan-600 p-1">
                <Check size={16} />
              </div>
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="px-[50px] mt-6">
        <h1 className="font-bold text-4xl">Benefits</h1>
        <ol className="mt-2 flex flex-col gap-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex gap-2 ">
              <div className="bg-cyan-600 p-1 mt-2 rounded-full w-fit h-fit"></div>
              <p>
                <span className="font-bold">{benefit.title}:</span> {benefit.description}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Working Process */}
      <div className="px-7 md:px-[90px] mt-7 bg-cyan-800 pt-[10px] pb-4 text-white text-center">
        <div className="flex flex-col md:flex-row mt-[40px] justify-between">
          <div className="text-left flex mb-5 flex-col justify-center">
            <h1 className="font-bold text-4xl md:text-6xl mb-3 md:mb-5">Working process</h1>
            <p className="text-sd md:text-lg">
              Our IT consulting process is a systematic journey comprising four stages: Assessment and Analysis,
              Planning, Implementation and Execution, and Monitoring and Optimization.
            </p>
          </div>
          <div className="flex gap-[30px] flex-col">
            <div className="flex flex-col md:flex-row gap-1 md:gap-9">
              {workingProcess.slice(0, 2).map((process, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[300px] px-9 h-[290px] justify-center items-center rounded-full border border-white"
                >
                  <div className="bg-cyan-400 opacity-[.24] rounded-full w-[300px] h-[300px] absolute blur-2xl"></div>
                  <h1 className="font-bold text-6xl mb-3">{process.number}</h1>
                  <h1 className="font-bold text-2xl mb-4">{process.title}</h1>
                  <p className="text-sm">{process.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-1 md:gap-9">
              {workingProcess.slice(2, 4).map((process, index) => (
                <div
                  key={index}
                  className="flex flex-col w-[300px] px-9 h-[290px] justify-center items-center rounded-full border border-white"
                >
                  <div className="bg-cyan-400 opacity-[.24] rounded-full w-[300px] h-[300px] absolute blur-2xl"></div>
                  <h1 className="font-bold text-6xl mb-3">{process.number}</h1>
                  <h1 className="font-bold text-2xl mb-4">{process.title}</h1>
                  <p className="text-sm">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="px-4 md:px-[70px] py-16 bg-cyan-50 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg mb-8 text-gray-600">
            Contact our team today to discuss your project requirements and how we can help bring your vision to life.
          </p>
          <Link
            href={contactPageUrl}
            className="inline-block text-white bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 rounded-full px-8 py-4 text-lg font-bold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceComponent
