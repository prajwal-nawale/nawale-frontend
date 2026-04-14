function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-10 py-24 bg-[radial-gradient(#000_0.4px,transparent_0.4px)] bg-[size:12px_12px]">

      <div className="flex items-center justify-between">

        {/* Left */}
        <div className="flex flex-col gap-6 max-w-lg border-l-2 border-black pl-6">

          <h1 className="text-7xl font-bold leading-tight tracking-tight">
            Hello. <br />
            I'm Prajwal.
          </h1>

          <p className="text-gray-600 text-base max-w-sm">
            I'm an AI Engineer building intelligent systems
            with LangChain, LlamaIndex, and modern web tech.
          </p>

          <div className="flex gap-4 mt-2">
            <a
              href="/prajwal_nawale.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black px-6 py-3 text-sm font-medium shadow-[4px_4px_0px_black] hover:shadow-none transition"
            >
              View Resume
            </a>

            <a
              href="https://github.com/prajwal-nawale"
              target="_blank"
              className="px-5 py-3 text-sm font-medium underline"
            >
              GitHub →
            </a>
          </div>

        </div>

        {/* Right */}
        <div className="w-64 h-64 border-2 border-black shadow-[6px_6px_0px_black] overflow-hidden">
          <img
            src="/pic.jpeg"
            alt="Prajwal Nawale"
            className="w-full h-full object-cover object-top"
          />
        </div>

      </div>

    </section>
  )
}

export default Hero