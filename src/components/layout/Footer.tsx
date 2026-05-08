import { motion } from "framer-motion"

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa"

const Footer = () => {
  return (
    <footer
      className="
        relative
        bg-[#050816]
        text-white

        border-t
        border-cyan-500/10

        overflow-hidden
      "
    >

      {/* Glow Background */}
      <div
        className="
          absolute
          top-0
          left-1/2

          -translate-x-1/2

          w-[500px]
          h-[300px]

          bg-cyan-500/5
          blur-[120px]
          rounded-full
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto

          px-6
          py-20

          relative
          z-10
        "
      >

        {/* TOP */}
        <div
          className="
            grid
            md:grid-cols-3
            gap-16
          "
        >

          {/* LEFT */}
          <div>

            <h2
              className="
                text-4xl
                font-bold

                bg-gradient-to-r
                from-cyan-400
                to-blue-500

                bg-clip-text
                text-transparent

                mb-6
              "
            >
              NabeelSite
            </h2>

            <p
              className="
                text-gray-400
                leading-8
                max-w-md
              "
            >
              Portfolio M. Nabil Dawami. AI Engineer,
              Cybersecurity Enthusiast, dan Fullstack Developer
              yang fokus pada teknologi modern dan sistem digital
              cerdas.
            </p>

            <div
              className="
                flex
                items-center
                gap-3

                text-gray-400

                mt-8
              "
            >
              <FaMapMarkerAlt className="text-cyan-400 text-lg" />

              <span>Pekanbaru, Riau, Indonesia</span>
            </div>

          </div>

          {/* CENTER */}
          <div>

            <h3
              className="
                text-2xl
                font-semibold

                mb-6
              "
            >
              Quick Links
            </h3>

            <ul
              className="
                space-y-4
                text-gray-400
              "
            >

              <li>
                <a
                  href="#home"
                  className="
                    hover:text-cyan-400
                    transition
                  "
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="
                    hover:text-cyan-400
                    transition
                  "
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="
                    hover:text-cyan-400
                    transition
                  "
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#certifications"
                  className="
                    hover:text-cyan-400
                    transition
                  "
                >
                  Certifications
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="
                    hover:text-cyan-400
                    transition
                  "
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* RIGHT */}
          <div>

            <h3
              className="
                text-2xl
                font-semibold

                mb-6
              "
            >
              Connect With Me
            </h3>

            <div
              className="
                flex
                items-center
                gap-5
              "
            >

              {/* Github */}
              <motion.a
                whileHover={{ y: -5 }}
                href="https://github.com/"
                target="_blank"
                className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-white/5
                  border
                  border-white/10

                  flex
                  items-center
                  justify-center

                  hover:border-cyan-400/40
                  hover:bg-white/10

                  transition-all
                "
              >
                <FaGithub className="text-cyan-400 text-2xl" />
              </motion.a>

              {/* Instagram */}
              <motion.a
                whileHover={{ y: -5 }}
                href="https://instagram.com/"
                target="_blank"
                className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-white/5
                  border
                  border-white/10

                  flex
                  items-center
                  justify-center

                  hover:border-cyan-400/40
                  hover:bg-white/10

                  transition-all
                "
              >
                <FaInstagram className="text-cyan-400 text-2xl" />
              </motion.a>

              {/* Linkedin */}
              <motion.a
                whileHover={{ y: -5 }}
                href="https://linkedin.com/"
                target="_blank"
                className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-white/5
                  border
                  border-white/10

                  flex
                  items-center
                  justify-center

                  hover:border-cyan-400/40
                  hover:bg-white/10

                  transition-all
                "
              >
                <FaLinkedin className="text-cyan-400 text-2xl" />
              </motion.a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            border-t
            border-white/10

            mt-16
            pt-8

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-4
          "
        >

          <p className="text-gray-500">
            © 2026{" "}
            <span className="text-cyan-400">
              M. Nabil Dawami
            </span>. All rights reserved.
          </p>

          <div
            className="
              flex
              items-center
              gap-8

              text-gray-500
            "
          >

            <span>Built with React & Vite</span>

            <a
              href="#contact"
              className="
                hover:text-cyan-400
                transition
              "
            >
              Get In Touch
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer