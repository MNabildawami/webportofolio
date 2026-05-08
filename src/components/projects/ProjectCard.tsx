import { motion } from "framer-motion"

import {
  FiGithub,
  FiExternalLink,
} from "react-icons/fi"

type Project = {

  id: number

  title: string

  category: string

  description: string

  image: string

  tech: string[]

  github: string

  demo: string
}

type ProjectCardProps = {

  project: Project

  index: number
}

const ProjectCard = ({
  project,
  index,
}: ProjectCardProps) => {

  return (

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
        duration: 0.7,
        delay: index * 0.15,
      }}

      viewport={{
        once: true,
      }}

      whileHover={{
        y: -12,
        scale: 1.01,
      }}

      className="
        relative

        grid
        grid-cols-1
        xl:grid-cols-[420px_1fr]

        gap-8

        bg-white/[0.03]

        border
        border-white/10

        backdrop-blur-xl

        rounded-[32px]

        overflow-hidden

        p-6

        hover:border-cyan-400/30

        hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]

        transition-all
        duration-500
      "
    >

      {/* GLOW */}

      <div
        className="
          absolute

          top-0
          right-0

          w-52
          h-52

          bg-cyan-500/10

          blur-[100px]

          rounded-full
        "
      />

      {/* NUMBER */}

      <div
        className="
          absolute

          top-5
          right-8

          text-7xl
          font-black

          text-white/5

          pointer-events-none
        "
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* IMAGE */}

      <div
        className="
          relative

          group

          h-[240px]
          md:h-[300px]
          xl:h-full

          rounded-[24px]

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
            from-black/50
            to-transparent
          "
        />

      </div>

      {/* CONTENT */}

      <div
        className="
          relative
          z-10

          flex
          flex-col
          justify-center
        "
      >

        {/* CATEGORY */}

        <p
          className="
            text-cyan-400

            uppercase

            tracking-[0.25em]

            text-sm

            mb-5
          "
        >
          {project.category}
        </p>

        {/* TITLE */}

        <h2
          className="
            text-2xl
            md:text-4xl
            xl:text-5xl

            font-black

            leading-tight

            mb-6
          "
        >
          {project.title}
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
            text-gray-400

            leading-relaxed

            text-lg

            mb-8
          "
        >
          {project.description}
        </p>

        {/* TECH STACK */}

        <div
          className="
            flex
            flex-wrap

            gap-3

            mb-10
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

                  bg-white/[0.03]

                  border
                  border-white/10

                  text-sm

                  hover:border-cyan-400/40

                  transition
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
            flex-col

            sm:flex-row

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

              px-6
              py-4

              rounded-2xl

              border
              border-white/10

              bg-white/[0.03]

              hover:border-cyan-400/40
              hover:text-cyan-400

              hover:-translate-y-1

              transition-all
            "
          >

            <FiGithub />

            GitHub

          </a>

          {/* LIVE DEMO */}

          <a
            href={project.demo}

            target="_blank"

            className="
              flex
              items-center
              justify-center
              gap-3

              px-6
              py-4

              rounded-2xl

              bg-cyan-400

              text-black

              font-semibold

              hover:scale-105
              hover:-translate-y-1

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

  )
}

export default ProjectCard