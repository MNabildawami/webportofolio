const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a
          href=""
          className="text-2xl font-bold text-white"
        >
          NabeelSite
        </a>

        <ul className="hidden md:flex gap-8 text-gray-300">

          <li>
            <a
              href="/#about"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="/#skills"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="/#projects"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="/#certifications"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] transition"
            >
              Certifications
            </a>
          </li>

          <li>
            <a
              href="/#contact"
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] transition"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar