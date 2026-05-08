import { motion } from "framer-motion"
import { certifications } from "../../data/certifications"

const Certifications = () => {
  return (
    <section id="certifications" className="bg-black text-white py-32 px-6 scroll-mt-32">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-cyan-400 text-lg mb-4">
            Certifications
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Licenses & Certifications
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and technical learning achievements.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md"
            >

              <div className="flex items-start gap-6">

                <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 font-bold">
                  C
                </div>

                <div>

                  <h3 className="text-2xl font-semibold mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-gray-400 mb-2">
                    {cert.issuer}
                  </p>

                  <p className="text-sm text-gray-500 mb-6">
                    Issued {cert.year}
                  </p>

                  <div className="flex flex-wrap gap-3">

                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Certifications