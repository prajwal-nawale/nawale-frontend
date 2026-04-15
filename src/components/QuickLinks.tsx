import { quickLinks } from '../data'

function QuickLinks() {
  return (
    <section className="max-w-5xl mx-auto px-6 border-t-2 border-black">

      <p className="text-xs font-medium py-3 text-gray-500">Quick links</p>

      <div className="grid grid-cols-2 md:grid-cols-4 border-l-2 border-black">
        {quickLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="border-r-2 border-b-2 border-black px-4 py-3 flex justify-between items-center text-sm font-medium bg-gray-400 hover:bg-black hover:text-white transition"
          >
            <span className="truncate mr-1">{link.label}</span>
            <span className="flex-shrink-0">↗</span>
          </a>
        ))}
      </div>

    </section>
  )
}

export default QuickLinks
