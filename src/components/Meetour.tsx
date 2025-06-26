import Image from "next/image"

export default function MeetPrincipals() {
    return (
        <section className="bg-cyan-50 p-6 md:p-10 rounded-xl max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {/* Left Principal */}
                <div className="text-center md:text-left">
                    <div className="mb-4">
                        <Image
                            src="/images/Amin.png"
                            alt="Principal portrait"
                            width={500}
                            height={600}
                            className="w-full h-auto rounded-none"
                        />
                    </div>
                    <h3 className="text-2xl font-bold mt-2">Amin Ahsan</h3>
                    <p className="text-sm uppercase tracking-wider text-gray-600">CEO, and Founder</p>
                </div>

                {/* Middle Content */}
                <div className="text-center flex flex-col items-center justify-start">
                    <div className="bg-white rounded-full py-3 px-6 mb-4 inline-block">
                        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider">MEET THE DEVKINS TEAM</h2>
                    </div>
                    <div className="mb-4 w-full">
                        <Image
                            src="/_7dd795e5-7642-4df0-ae79-7043c45000a5.jpg"
                            alt="Decorative element"
                            width={500}
                            height={200}
                            className="w-full rounded-2xl h-auto"
                        />
                    </div>
                    <p className="text-sm text-center px-2">
                        At Devkins, our leadership team drives innovation and excellence in software development. With a passion for technology and a commitment to client success, we deliver high-quality solutions tailored to your business needs.
                    </p>
                </div>

                {/* Right Principal */}
                <div className="text-center md:text-right">
                    <div className="mb-4">
                        <Image
                            src="/images/Mano.png"
                            alt="Principal portrait"
                            width={500}
                            height={600}
                            className="w-full  rounded-none"
                        />
                    </div>
                    <h3 className="text-2xl font-bold mt-2">Mano</h3>
                    <p className="text-sm uppercase tracking-wider text-gray-600">Director</p>
                </div>
            </div>
        </section>
    )
}
