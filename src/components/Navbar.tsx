import { navLinks } from '../data'

function Navbar() {
  return (
    <nav className="border-b-2 border-black">

      <div className="max-w-5xl mx-auto px-10 py-3 flex items-center gap-10">

        {/* Logo */}
        <div className="w-8 h-8 border-2 border-black flex items-center justify-center text-xs font-bold shadow-[2px_2px_0px_black]">
          PN
        </div>

        {/* Nav Links */}
        <ul className="flex items-center gap-6 text-sm font-medium">

          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="border-b-2 border-transparent hover:border-black transition"
              >
                {link.label}
              </a>
            </li>
          ))}

        </ul>

      </div>

    </nav>
  )
}

export default Navbar