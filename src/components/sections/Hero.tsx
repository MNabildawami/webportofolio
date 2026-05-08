import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden scroll-mt-32">

      {/* Glow Effect */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <p className="text-cyan-400 text-lg mb-4">
          Hello, I'm
        </p>

        <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          M. Nabil Dawami
        </h1>

        <h2 className="text-2xl text-gray-400 mb-6">
          AI Engineer • Cybersecurity • Fullstack Developer
        </h2>

        <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-300 transition shadow-[0_0_25px_rgba(34,211,238,0.5)]"
    >
  View Projects
</motion.button>
      </motion.div>

    </section>
  )
}

export default Hero