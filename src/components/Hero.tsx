function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 md:py-24 bg-[radial-gradient(#000_0.4px,transparent_0.4px)] bg-[size:12px_12px]">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

        {/* Image — top on mobile, right on desktop */}
        <div className="w-40 h-40 md:w-64 md:h-64 border-2 border-black shadow-[6px_6px_0px_black] overflow-hidden self-start md:order-2 flex-shrink-0">
          <img
            src="/pic.jpg"
            alt="Prajwal Nawale"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Left content */}
        <div className="flex flex-col gap-4 md:gap-6 border-l-2 border-black pl-4 md:pl-6 md:order-1 md:max-w-lg">

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Hello. <br />
            I'm Prajwal.
          </h1>

          <p className="text-gray-600 text-sm md:text-base max-w-sm">
            I'm an AI Engineer building intelligent systems
            with LangChain, LlamaIndex, and modern web tech.
          </p>

          <div className="flex flex-wrap gap-3 mt-1">
            <a
              href="/prajwal_nawale.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black px-5 py-2.5 text-sm font-medium shadow-[4px_4px_0px_black] hover:shadow-none transition"
            >
              View Resume
            </a>

            <a
              href="https://github.com/prajwal-nawale"
              target="_blank"
              className="px-4 py-2.5 text-sm font-medium underline"
            >
              GitHub →
            </a>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero
