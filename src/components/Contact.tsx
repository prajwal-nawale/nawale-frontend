function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-10 py-20 border-t-2 border-black">

      <h2 className="text-3xl font-bold mb-8">Contact</h2>

      <div className="border-2 border-black shadow-[6px_6px_0px_black]">

        {/* Top bar */}
        <div className="border-b-2 border-black px-4 py-2 text-sm">
          contact.txt
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-4">

          <p className="text-sm">
            📧 prajwalnawale817@gmail.com
          </p>

          <p className="text-sm">
            📍 Pune, Maharashtra, India
          </p>

          <div className="flex gap-4 mt-4">

            <a
              href="https://github.com/prajwal-nawale"
              target="_blank"
              className="border-2 border-black px-4 py-2 text-sm shadow-[3px_3px_0px_black] hover:shadow-none transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/prajwalnawale"
              target="_blank"
              className="border-2 border-black px-4 py-2 text-sm shadow-[3px_3px_0px_black] hover:shadow-none transition"
            >
              LinkedIn
            </a>

            <a
              href="/prajwal_nawale.pdf"
              target="_blank"
              className="border-2 border-black px-4 py-2 text-sm shadow-[3px_3px_0px_black] hover:shadow-none transition"
            >
              Resume
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact