import { useState } from "react"

import { Link } from "react-router-dom"

import { motion } from "framer-motion"

import {
  FiExternalLink,
  FiCode,
  FiGithub,
  FiArrowRight,
} from "react-icons/fi"

import {
  HiOutlineShieldCheck,
} from "react-icons/hi"

import {
  TbBrain,
} from "react-icons/tb"

import { projects } from "../../data/projects"

const Projects = () => {

  const categories = [
    {
      name: "AI Engineer",
      icon: <TbBrain />,
    },

    {
      name: "Cybersecurity",
      icon: <HiOutlineShieldCheck />,
    },

    {
      name: "Fullstack",
      icon: <FiCode />,
    },
  ]

  const [activeCategory, setActiveCategory] =
    useState("AI Engineer")

  const filteredProjects =
    projects.filter(
      (project) =>
        project.category === activeCategory
    )

  return (

    <section
      id="projects"

      className="
        bg-black
        text-white

        px-6
        py-32

        relative
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute

          top-0
          left-1/2

          -translate-x-1/2

          w-[600px]
          h-[600px]

          bg-cyan-500/10

          blur-[180px]

          rounded-full
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto

          relative
          z-10
        "
      >

        {/* HEADER */}

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}

          className="
            text-center
            mb-16
          "
        >

          <p
            className="
              text-cyan-400
              uppercase

              tracking-[0.3em]

              text-sm

              mb-4
            "
          >
            Projects
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl

              font-black

              mb-6
            "
          >
            Featured Work
          </h2>

          <p
            className="
              text-gray-400

              max-w-2xl
              mx-auto

              text-lg
            "
          >
            Selected projects across AI Engineering,
            Cybersecurity, and Fullstack Development.
          </p>

        </motion.div>

        {/* FILTERS */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.2,
          }}

          viewport={{
            once: true,
          }}

          className="
            flex
            flex-wrap

            justify-center

            gap-4

            mb-16
          "
        >

          {
            categories.map((category) => (

              <button
                key={category.name}

                onClick={() =>
                  setActiveCategory(
                    category.name
                  )
                }

                className={`
                  flex
                  items-center
                  gap-3

                  px-6
                  py-4

                  rounded-2xl

                  border

                  transition-all
                  duration-300

                  ${
                    activeCategory === category.name

                      ? `
                        border-cyan-400

                        bg-cyan-400/10

                        text-cyan-400

                        shadow-[0_0_25px_rgba(34,211,238,0.4)]
                      `

                      : `
                        border-white/10

                        bg-white/[0.03]

                        hover:border-cyan-400/40
                        hover:text-cyan-400
                      `
                  }
                `}
              >

                <span className="text-xl">
                  {category.icon}
                </span>

                <span className="font-medium">
                  {category.name}
                </span>

              </button>

            ))
          }

        </motion.div>

        {/* PROJECT GRID */}

        <div
          className="
            grid

            md:grid-cols-2
            xl:grid-cols-3

            gap-8
          "
        >

          {
            filteredProjects
              .slice(0, 3)

              .map((project, index) => (

                <motion.div

                  key={project.id}

                  initial={{
                    opacity: 0,
                    y: 50,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                  }}

                  viewport={{
                    once: true,
                  }}

                  whileHover={{
                    y: -10,
                  }}

                  className="
                    group

                    rounded-[32px]

                    border
                    border-white/10

                    bg-white/[0.03]

                    overflow-hidden

                    hover:border-cyan-400/30

                    transition-all
                    duration-500
                  "
                >

                  {/* IMAGE */}

                  <div
                    className="
                      relative

                      h-60

                      overflow-hidden
                    "
                  >

                    <img
                      src={project.image}
                      alt={project.title}

                      className="
                        w-full
                        h-full

                        object-cover

                        group-hover:scale-110

                        transition-transform
                        duration-700
                      "
                    />

                    {/* OVERLAY */}

                    <div
                      className="
                        absolute
                        inset-0

                        bg-gradient-to-t
                        from-black/60
                        to-transparent
                      "
                    />

                    {/* ICON */}

                    <button
                      className="
                        absolute

                        top-4
                        right-4

                        w-12
                        h-12

                        rounded-xl

                        bg-black/40
                        backdrop-blur-md

                        border
                        border-white/10

                        flex
                        items-center
                        justify-center

                        text-white

                        hover:text-cyan-400

                        transition
                      "
                    >

                      <FiExternalLink />

                    </button>

                  </div>

                  {/* CONTENT */}

                  <div className="p-7">

                    <h3
                      className="
                        text-3xl
                        font-bold

                        mb-4
                      "
                    >
                      {project.title}
                    </h3>

                    <p
                      className="
                        text-gray-400

                        leading-relaxed

                        mb-6
                      "
                    >
                      {project.description}
                    </p>

                    {/* TECH */}

                    <div
                      className="
                        flex
                        flex-wrap

                        gap-3

                        mb-8
                      "
                    >

                      {
                        project.tech.map((tech) => (

                          <span
                            key={tech}

                            className="
                              px-4
                              py-2

                              rounded-full

                              border
                              border-cyan-400/20

                              bg-cyan-400/5

                              text-cyan-400

                              text-sm
                            "
                          >
                            {tech}
                          </span>

                        ))
                      }

                    </div>

                    {/* BUTTONS */}

                    <div
                      className="
                        flex
                        items-center

                        gap-4
                      "
                    >

                      {/* GITHUB */}

                      <a
                        href={project.github}

                        target="_blank"

                        className="
                          flex
                          items-center
                          justify-center
                          gap-3

                          flex-1

                          py-3

                          rounded-2xl

                          border
                          border-white/10

                          bg-white/[0.03]

                          hover:border-cyan-400/40
                          hover:text-cyan-400

                          transition-all
                        "
                      >

                        <FiGithub />

                        GitHub

                      </a>

                      {/* DEMO */}

                      <a
                        href={project.demo}

                        target="_blank"

                        className="
                          flex
                          items-center
                          justify-center
                          gap-3

                          flex-1

                          py-3

                          rounded-2xl

                          bg-cyan-400

                          text-black

                          font-semibold

                          hover:scale-105

                          transition-all

                          shadow-[0_0_25px_rgba(34,211,238,0.4)]
                        "
                      >

                        <FiExternalLink />

                        Live Demo

                      </a>

                    </div>

                  </div>

                </motion.div>

              ))
          }

        </div>

        {/* VIEW ALL */}

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.2,
          }}

          viewport={{
            once: true,
          }}

          className="
            flex
            justify-center

            mt-20
          "
        >

          <Link
            to="/projects"

            className="
              flex
              items-center
              gap-4

              px-10
              py-5

              rounded-2xl

              border
              border-cyan-400

              bg-cyan-400/10

              text-cyan-400

              text-lg
              font-semibold

              hover:scale-105

              transition-all

              shadow-[0_0_35px_rgba(34,211,238,0.3)]
            "
          >

            Show All Projects

            <FiArrowRight />

          </Link>

        </motion.div>

      </div>

    </section>

  )
}

export default Projects