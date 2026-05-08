import { useState } from "react"

import { projects } from "../data/projects"

const Projects = () => {

  const categories = [
    "All",
    "AI Engineer",
    "Cybersecurity",
    "Fullstack",
  ]

  const [activeCategory, setActiveCategory] =
    useState("All")

  const [visibleProjects, setVisibleProjects] =
    useState(3)

  const filteredProjects =
    activeCategory === "All"

      ? projects

      : projects.filter(
          (project) =>
            project.category === activeCategory
        )

  return (

    <section
      className="
        min-h-screen
        bg-black
        text-white

        px-6
        py-32
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
        "
      >

        {/* HEADER */}

        <div
          className="
            text-center
            mb-20
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

          <h1
            className="
              text-5xl
              md:text-7xl

              font-black

              mb-6
            "
          >
            Featured Work
          </h1>

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

        </div>

        {/* FILTERS */}

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center

            gap-4

            mb-20
          "
        >

          {
            categories.map((category) => (

              <button
                key={category}

                onClick={() => {
                  setActiveCategory(category)
                  setVisibleProjects(3)
                }}

                className={`
                  px-6
                  py-3

                  rounded-full

                  transition-all
                  duration-300

                  ${
                    activeCategory === category

                      ? `
                        bg-cyan-400
                        text-black

                        shadow-[0_0_25px_rgba(34,211,238,0.5)]
                      `

                      : `
                        border
                        border-white/10

                        bg-white/5

                        hover:border-cyan-400/50
                        hover:text-cyan-400
                      `
                  }
                `}
              >
                {category}
              </button>

            ))
          }

        </div>

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
              .slice(0, visibleProjects)

              .map((project) => (

                <div
                  key={project.id}

                  className="
                    group

                    bg-white/[0.03]

                    border
                    border-white/10

                    rounded-[32px]

                    overflow-hidden

                    hover:border-cyan-400/30

                    hover:-translate-y-2

                    transition-all
                    duration-500
                  "
                >

                  {/* IMAGE */}

                  <div
                    className="
                      h-64

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

                  </div>

                  {/* CONTENT */}

                  <div
                    className="
                      p-8
                    "
                  >

                    <h2
                      className="
                        text-2xl
                        font-bold

                        mb-4
                      "
                    >
                      {project.title}
                    </h2>

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
                      "
                    >

                      {project.tech.map((tech) => (

                        <span
                          key={tech}

                          className="
                            px-4
                            py-2

                            rounded-full

                            bg-cyan-400/10

                            text-cyan-400

                            text-sm
                          "
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                  </div>

                </div>

              ))
          }

        </div>

        {/* LOAD MORE */}

        {
          visibleProjects <
          filteredProjects.length && (

            <div
              className="
                flex
                justify-center

                mt-20
              "
            >

              <button

                onClick={() =>
                  setVisibleProjects(
                    visibleProjects + 3
                  )
                }

                className="
                  px-8
                  py-4

                  rounded-full

                  bg-cyan-400
                  text-black

                  font-semibold

                  hover:scale-105

                  transition-all

                  shadow-[0_0_25px_rgba(34,211,238,0.4)]
                "
              >
                Load More Projects
              </button>

            </div>
          )
        }

      </div>

    </section>

  )
}

export default Projects