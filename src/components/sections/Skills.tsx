import { motion } from "framer-motion";
import { Code2, ShieldCheck, BrainCircuit, Music4 } from "lucide-react";

const skills = [
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    description:
      "Developing intelligent systems using Machine Learning, with a focus on medical AI and ML operations.",
    tools: ["Python", "TensorFlow", "MLOps"],
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
    description:
      "Specializing in AI Security, digital forensics, cryptography, and secure system architecture.",
    tools: ["Forensics", "ML-DSA", "Sec+"],
  },
  {
    title: "Fullstack Development",
    icon: Code2,
    description:
      "Building scalable web applications, enterprise ERP systems, and modern digital platforms.",
    tools: ["React", "Odoo", "TypeScript"],
  },
  {
    title: "Audio & Music",
    icon: Music4,
    description:
      "Creating instrumental arrangements, sound synthesis, and exploring AI-driven music generation.",
    tools: ["Piano", "Guitar", "Synth"],
  },
];

const Skills = () => {
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <section
      id="skills"
      className="relative bg-black text-white py-32 overflow-hidden scroll-mt-20"
    >
      {/* 
        Injecting Custom CSS untuk animasi Marquee.
        Ini jauh lebih halus untuk fitur "Pause on Hover" daripada menggunakan state React.
      */}
      <style>{`
        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: scroll-marquee 40s linear infinite;
        }
        /* Berhenti ketika kontainer disentuh kursor */
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm font-semibold">
              Skills
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            My Expertise
          </h2>
        </motion.div>
      </div>

      {/* INFINITE SCROLLING SECTION WITH MASK */}
      <div 
        // marquee-container digunakan sebagai triger hover
        // py-12 ditambahkan agar efek bayangan (glow) dan kartu yang naik ke atas tidak terpotong (clipped)
        className="marquee-container relative flex overflow-hidden w-full py-12"
        style={{
          // Mask diperkecil jadi 5% agar pudar di ujung lebih mulus dan tidak memotong teks terlalu cepat
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)"
        }}
      >
        <div className="flex gap-6 w-max px-4 animate-marquee">
          {duplicatedSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="
                  group relative flex-shrink-0 w-[320px] md:w-[400px] flex flex-col justify-between 
                  p-8 rounded-[32px] transition-all duration-500
                  bg-[#080808] border border-white/5 
                  hover:border-cyan-400/40 hover:bg-gradient-to-b hover:from-white/[0.04] hover:to-transparent
                  hover:-translate-y-3 hover:shadow-[0_20px_40px_-10px_rgba(34,211,238,0.15)]
                "
              >
                {/* --- EFEK GLOW MODERN (MUNCUL SAAT HOVER) --- */}
                {/* Garis Aksen di Atas Kartu (Mencegah terpotong dengan radius khusus) */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Cahaya (Glow) Halus di Sudut Kanan Atas */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                {/* ------------------------------------------- */}

                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/10 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 transition-colors duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]">
                      <Icon className="text-gray-400 group-hover:text-cyan-400 w-6 h-6 transition-all duration-500 group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-100 group-hover:text-white transition-colors">
                      {skill.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-8 group-hover:text-gray-300 transition-colors">
                    {skill.description}
                  </p>
                </div>

                {/* TOOLS PILLS */}
                <div className="relative z-10 flex flex-wrap gap-2.5 mt-auto">
                  {skill.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 text-xs font-semibold text-gray-400 bg-black/50 border border-white/5 rounded-full group-hover:border-cyan-400/20 group-hover:text-cyan-300 transition-colors duration-300 backdrop-blur-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;