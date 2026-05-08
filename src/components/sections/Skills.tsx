import { motion } from "framer-motion"
import {
  Code2,
  ShieldCheck,
  BrainCircuit,
  Music4,
} from "lucide-react"

const skills = [
  {
    title: "Fullstack Development",
    icon: Code2,
    description: "Building modern web applications using React, TypeScript, and modern frameworks.",
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    description: "Focused on digital security, cryptography, and secure system development.",
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    description: "Developing intelligent systems using Machine Learning and Deep Learning.",
  },
  {
    title: "Prod Music",
    icon: Music4,
    description: "Creating and producing music for various platforms and audiences.",
  },
]

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-32 px-6 scroll-mt-32">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-cyan-400 text-lg mb-4">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => {
            const Icon = skill.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition"
              >

                <Icon className="text-cyan-400 w-12 h-12 mb-6" />

                <h3 className="text-2xl font-semibold mb-4">
                  {skill.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {skill.description}
                </p>

              </motion.div>
            )
          })}

        </div>

      </div>

    </section>
  )
}

export default Skills