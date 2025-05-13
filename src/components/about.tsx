import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Team collaborating on architectural designs"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-gray-500 text-sm">About us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900">Building the Future of the Web</h2>
            <p className="text-gray-600 mt-4">
                  Devkins is a passionate team of developers turning ideas into powerful websites and apps. From startups
              to enterprises, we help businesses grow with fast, modern, and scalable web solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Stat 1 */}
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-navy-900">5+ years</h3>
              <div className="w-12 h-1 bg-cyan-500"></div>
              <p className="text-gray-600">of building high-quality websites</p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-navy-900">100+ Projects</h3>
              <div className="w-12 h-1 bg-cyan-500"></div>
              <p className="text-gray-600">delivered to satisfied clients</p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-navy-900">20+ Awards</h3>
              <div className="w-12 h-1 bg-cyan-500"></div>
              <p className="text-gray-600">won, underscoring our dedication to innovative</p>
            </div>

            {/* Stat 4 */}
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-navy-900">99% Success</h3>
              <div className="w-12 h-1 bg-cyan-500"></div>
              <p className="text-gray-600">client satisfaction rate</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
