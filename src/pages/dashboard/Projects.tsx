import { useState, useEffect } from "react" // <-- Tambahkan useEffect disini

import { motion } from "framer-motion"

import {
  FiHome,
  FiChevronRight,
} from "react-icons/fi"

import { projects } from "../../data/projects"
import { type Project } from "../../types/Project"

import ProjectSidebar from "../../components/projects/ProjectSidebar"

import ProjectCard from "../../components/projects/ProjectCard"

import Footer from "../../components/layout/Footer"

const Projects = () => {

  // --- TAMBAHAN FIX SCROLL ---
  // Kode ini akan memaksa halaman langsung berada di paling atas saat pertama kali dibuka
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // ---------------------------

  const categories = [
    "All",
    "AI Engineer",
    "Cybersecurity",
    "Fullstack",
    "Prod Music"
  ]

  /* ALL TECHNOLOGIES */

  const technologies = [

    "All",

    ...new Set(
      projects.flatMap(
        (project: Project) => project.tech
      )
    ),
  ]

  const [activeCategory, setActiveCategory] =
    useState("All")

  const [activeTech, setActiveTech] =
    useState("All")

  const [searchQuery, setSearchQuery] =
    useState("")

  /* FILTER */

  const filteredProjects = projects.filter(
    (project: Project) => {

      const matchesCategory =

        activeCategory === "All"

          ? true

          : project.category === activeCategory

      const matchesTech =

        activeTech === "All"

          ? true

          : project.tech.includes(activeTech)

      const matchesSearch =

        project.title
          .toLowerCase()

          .includes(
            searchQuery.toLowerCase()
          )

      return (
        matchesCategory &&
        matchesTech &&
        matchesSearch
      )
    }
  )

  return (

    <>

      <motion.section

        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        transition={{
          duration: 0.6,
        }}

        className="
          relative

          min-h-screen

          bg-black
          text-white

          px-6

          pt-12
          pb-24
        "
      >

        {/* TOP GLOW */}

        <div
          className="
            absolute

            top-0
            left-1/2

            -translate-x-1/2

            w-[700px]
            h-[700px]

            bg-cyan-500/10

            blur-[180px]

            rounded-full
          "
        />

        {/* BOTTOM GLOW */}

        <div
          className="
            absolute

            bottom-0
            right-0

            w-[500px]
            h-[500px]

            bg-blue-500/10

            blur-[180px]

            rounded-full
          "
        />

        {/* GRID */}

        <div
          className="
            absolute
            inset-0

            opacity-[0.03]

            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]

            [background-size:80px_80px]
          "
        />

        {/* CONTENT */}

        <div
          className="
            relative
            z-10

            max-w-7xl
            mx-auto

            grid

            grid-cols-1
            xl:grid-cols-[320px_1fr]

            gap-10
            xl:gap-16
          "
        >

          {/* SIDEBAR */}

          <ProjectSidebar
            categories={categories}

            technologies={technologies}

            activeCategory={activeCategory}

            activeTech={activeTech}

            setActiveCategory={setActiveCategory}

            setActiveTech={setActiveTech}

            totalProjects={projects.length}
          />

          {/* MAIN */}

          <div>

            {/* BREADCRUMB */}

            <motion.nav

              initial={{
                opacity: 0,
                y: -10,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
                delay: 0.2,
              }}

              className="
                flex
                items-center

                gap-2

                text-sm
                text-gray-500

                mb-8

                overflow-x-auto
                whitespace-nowrap
              "
            >

              <a
                href="/"

                className="
                  flex
                  items-center

                  gap-1.5

                  hover:text-cyan-400

                  transition-colors
                "
              >

                <FiHome
                  className="
                    text-base

                    mb-[2px]
                  "
                />

                <span>
                  Home
                </span>

              </a>

              <FiChevronRight
                className="
                  text-gray-600
                "
              />

              <span
                className="
                  text-cyan-400
                  font-medium
                "
              >
                Projects
              </span>

            </motion.nav>

            {/* HEADER */}

            <div
              className="
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

              <h1
                className="
                  text-5xl
                  md:text-7xl

                  font-black

                  leading-tight

                  mb-6
                "
              >
                Featured Work
              </h1>

              <p
                className="
                  text-gray-400

                  max-w-3xl

                  text-lg
                  leading-relaxed
                "
              >
                Selected works across AI Engineering,
                Cybersecurity, and Fullstack Development.
              </p>

            </div>

            {/* TOP BAR */}

            <div
              className="
                flex
                flex-col

                md:flex-row
                md:items-center
                md:justify-between

                gap-6

                mb-12
              "
            >

              {/* SEARCH */}

              <div
                className="
                  relative

                  w-full
                  md:max-w-md
                "
              >

                <input

                  type="text"

                  placeholder="Search projects..."

                  value={searchQuery}

                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }

                  className="
                    w-full

                    bg-white/[0.03]

                    border
                    border-white/10

                    backdrop-blur-xl

                    rounded-2xl

                    px-6
                    py-4

                    outline-none

                    text-white

                    placeholder:text-gray-500

                    focus:border-cyan-400/50

                    transition-all
                  "
                />

              </div>

              {/* RESULT */}

              <div
                className="
                  flex
                  items-center

                  gap-3
                "
              >

                <div
                  className="
                    w-3
                    h-3

                    rounded-full

                    bg-cyan-400

                    animate-pulse
                  "
                />

                <p
                  className="
                    text-gray-400
                  "
                >
                  Showing

                  <span
                    className="
                      text-white
                      font-semibold

                      mx-2
                    "
                  >
                    {filteredProjects.length}
                  </span>

                  Projects
                </p>

              </div>

            </div>

            {/* PROJECT LIST */}

            <div
              className="
                flex
                flex-col

                gap-8
              "
            >

              {
                filteredProjects.map(
                  (project: Project, index: number) => (

                    <ProjectCard
                      key={project.id}

                      project={project}

                      index={index}
                    />

                  )
                )
              }

            </div>

          </div>

        </div>

      </motion.section>

      <Footer />

    </>

  )
}

export default Projects