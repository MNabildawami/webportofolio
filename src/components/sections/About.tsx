import { motion } from "framer-motion"

import {
  useEffect,
  useRef,
  useState,
} from "react"

import {
  FaPlay,
  FaPause,
} from "react-icons/fa"

const About = () => {

  const [isPlaying, setIsPlaying] = useState(false)

  const [progress, setProgress] = useState(0)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  const toggleMusic = () => {

    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  useEffect(() => {

    const audio = audioRef.current

    if (!audio) return

    const updateProgress = () => {

      const current = audio.currentTime
      const duration = audio.duration

      if (duration) {
        setProgress((current / duration) * 100)
      }
    }

    audio.addEventListener(
      "timeupdate",
      updateProgress
    )

    return () => {
      audio.removeEventListener(
        "timeupdate",
        updateProgress
      )
    }

  }, [])

  return (
    <>

      {/* AUDIO */}
      <audio
        ref={audioRef}
        src="/music/videoplayback.m4a"
      />

      <section
        id="about"
        className="
          bg-black
          text-white

          py-32
          px-6

          relative
          overflow-hidden
        "
      >

        {/* Glow Background */}
        <div
          className="
            absolute
            top-1/2
            left-1/2

            -translate-x-1/2
            -translate-y-1/2

            w-[700px]
            h-[700px]

            bg-cyan-500/5

            rounded-full
            blur-[140px]
          "
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}

          className="
            relative
            z-10

            max-w-7xl
            mx-auto
          "
        >

          {/* Main Card */}
          <div
            className="
              grid
              md:grid-cols-2

              gap-16

              bg-white/5
              border
              border-cyan-500/10

              rounded-[40px]

              p-10
              md:p-16

              backdrop-blur-xl

              shadow-[0_0_40px_rgba(34,211,238,0.08)]
            "
          >

            {/* LEFT */}
            <div>

              <p
                className="
                  text-cyan-400
                  text-lg
                  mb-4
                "
              >
                About Me
              </p>

              <h2
                className="
                  text-4xl
                  md:text-6xl

                  font-black
                  tracking-tight

                  leading-tight

                  mb-8
                "
              >
                Building Intelligent &
                Secure Digital Systems
              </h2>

              <p
                className="
                  text-gray-400
                  leading-9
                  text-lg

                  mb-10
                "
              >
                I focus on Artificial Intelligence,
                Cybersecurity, and Fullstack Development.
                Passionate about building intelligent systems,
                secure applications, and modern digital experiences
                using modern technologies.
              </p>

              {/* Stats */}
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-3

                  gap-6

                  mt-12
                "
              >

                {/* Projects */}
                <motion.div

                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}

                  className="
                    bg-white/5
                    border
                    border-cyan-500/10

                    rounded-3xl

                    p-6

                    backdrop-blur-xl

                    hover:border-cyan-400/30

                    hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]

                    transition-all
                    duration-300
                  "
                >

                  <h3
                    className="
                      text-5xl
                      font-black

                      text-cyan-400

                      mb-3
                    "
                  >
                    10+
                  </h3>

                  <p
                    className="
                      text-gray-400
                      text-lg
                    "
                  >
                    Projects
                  </p>

                </motion.div>

                {/* Certifications */}
                <motion.div

                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}

                  className="
                    bg-white/5
                    border
                    border-cyan-500/10

                    rounded-3xl

                    p-6

                    backdrop-blur-xl

                    hover:border-cyan-400/30

                    hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]

                    transition-all
                    duration-300
                  "
                >

                  <h3
                    className="
                      text-5xl
                      font-black

                      text-cyan-400

                      mb-3
                    "
                  >
                    15+
                  </h3>

                  <p
                    className="
                      text-gray-400
                      text-lg
                    "
                  >
                    Certifications
                  </p>

                </motion.div>

                {/* GPA */}
                <motion.div

                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}

                  className="
                    bg-white/5
                    border
                    border-cyan-500/10

                    rounded-3xl

                    p-6

                    backdrop-blur-xl

                    hover:border-cyan-400/30

                    hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]

                    transition-all
                    duration-300
                  "
                >

                  <h3
                    className="
                      text-5xl
                      font-black

                      text-cyan-400

                      mb-3
                    "
                  >
                    3.59
                    <span className="text-white">
                    </span>
                  </h3>

                  <p
                    className="
                      text-gray-400
                      text-lg
                    "
                  >
                    GPA
                  </p>

                </motion.div>

              </div>

            </div>

            {/* RIGHT */}
            <div
              className="
                flex
                items-center
                justify-center
              "
            >

              {/* Music Card */}
              <motion.div
                whileHover={{ y: -10 }}

                className="
                  w-full
                  max-w-[340px]

                  bg-black/40
                  border
                  border-cyan-500/20

                  rounded-[32px]

                  p-8

                  backdrop-blur-xl

                  shadow-[0_0_40px_rgba(34,211,238,0.12)]
                "
              >

                {/* Album Cover */}
                <div
                  className="
                    w-full
                    h-[260px]

                    rounded-[24px]

                    bg-gradient-to-br
                    from-cyan-500/20
                    to-blue-500/20

                    flex
                    items-center
                    justify-center

                    text-7xl

                    mb-8
                  "
                >
                  🎧
                </div>

                {/* Song */}
                <h3
                  className="
                    text-3xl
                    font-bold

                    text-center

                    mb-2
                  "
                >
                  Nabeel Vibes
                </h3>

                <p
                  className="
                    text-gray-400
                    text-center

                    mb-8
                  "
                >
                  AI • Cybersecurity • Coding
                </p>

                {/* Progress */}
                <div className="mb-8">

                  <div
                    className="
                      w-full
                      h-2

                      bg-white/10
                      rounded-full
                      overflow-hidden
                    "
                  >

                    <div
                      className="
                        h-full

                        bg-cyan-400

                        rounded-full

                        transition-all
                        duration-300
                      "

                      style={{
                        width: `${progress}%`,
                      }}
                    />

                  </div>

                </div>

                {/* Controls */}
                <div
                  className="
                    flex
                    items-center
                    justify-center
                  "
                >

                  <button
                    onClick={toggleMusic}

                    className="
                      w-16
                      h-16

                      rounded-full

                      bg-cyan-400
                      text-black

                      flex
                      items-center
                      justify-center

                      hover:scale-110

                      transition-all

                      shadow-[0_0_30px_rgba(34,211,238,0.4)]
                    "
                  >
                    {isPlaying
                      ? <FaPause />
                      : <FaPlay />
                    }
                  </button>

                </div>

              </motion.div>

            </div>

          </div>

        </motion.div>

      </section>

    </>
  )
}

export default About