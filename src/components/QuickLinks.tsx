import { quickLinks } from '../data'

function QuickLinks() {
  return (
    <section className="max-w-5xl mx-auto px-10 pt-16 border-t-2 border-black relative">

      {/* Label */}
      <h3 className="text-sm font-medium mb-6 relative -top-28 ">Quick links</h3>

      {/* Box row (OVERLAPPING LINE) */}
      <div className="grid grid-cols-4 relative -top-33 bg-white">

        {quickLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="border-2 border-black px-6 py-4 flex justify-between items-center text-sm font-medium bg-gray-400 hover:bg-black hover:text-white transition"
          >
            {link.label}
            <span>↗</span>
          </a>
        ))}

      </div>

    </section>
  )
}

export default QuickLinks