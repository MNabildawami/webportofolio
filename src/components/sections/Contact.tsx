import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-32 px-6 scroll-mt-32">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >

        <p className="text-cyan-400 text-lg mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Let’s Build Something Amazing
        </h2>

        <p className="text-gray-400 text-lg leading-8 mb-12">
          Open for collaboration, AI projects,
          cybersecurity research, and modern web development.
        </p>

        <div className="flex justify-center gap-6">

          <motion.a
            whileHover={{ y: -5 }}
            href="#"
            className="bg-white/5 border border-white/10 p-4 rounded-2xl"
          >
            <FaGithub className="text-cyan-400 text-2xl" />
          </motion.a>

          <motion.a
            whileHover={{ y: -5 }}
            href="#"
            className="bg-white/5 border border-white/10 p-4 rounded-2xl"
          >
            <FaLinkedin className="text-cyan-400 text-2xl" />
          </motion.a>

          <motion.a
            whileHover={{ y: -5 }}
            href="mailto:test@gmail.com"
            className="bg-white/5 border border-white/10 p-4 rounded-2xl"
          >
            <FaEnvelope className="text-cyan-400 text-2xl" />
          </motion.a>

        </div>

      </motion.div>

    </section>
  )
}

export default Contact