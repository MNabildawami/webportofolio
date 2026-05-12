import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiExternalLink, FiAward, FiArrowRight, FiCalendar } from "react-icons/fi";
import { certifications } from "../../data/certifications";

const Certifications = () => {
  // Hanya ambil 2 sertifikat teratas untuk tampilan Home
  const featuredCerts = certifications.slice(0, 2);

  return (
    <section id="certifications" className="relative bg-[#020202] text-white py-24 md:py-32 px-5 sm:px-8 scroll-mt-20 overflow-hidden">
      
      {/* BACKGROUND GLOW - Konsistensi dengan Section Lain */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/4" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
            <p className="text-cyan-400 uppercase tracking-[0.2em] text-[10px] sm:text-xs font-bold">
              Expertise Validated
            </p>
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-white">
            Licenses & <span className="text-gray-500 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Certifications</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
             Building technical capabilities through globally recognized professional certifications in technology.
          </p>
        </motion.div>

        {/* CERTIFICATIONS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {featuredCerts.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative z-10 h-full bg-[#080808] border border-white/5 rounded-[2rem] p-6 sm:p-8 hover:border-cyan-400/30 hover:bg-white/[0.02] transition-all duration-500 flex flex-col sm:flex-row gap-6 sm:gap-8">
                
                {/* ICON CONTAINER */}
                <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                  <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:scale-105 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/30 transition-all duration-500">
                    <FiAward className="text-gray-400 group-hover:text-cyan-400 text-3xl sm:text-4xl transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col flex-grow w-full text-center sm:text-left">
                  {/* TITLE & ISSUER */}
                  <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-3 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-gray-400 font-medium text-xs sm:text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                    
                    {/* DATE BADGE */}
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-widest shrink-0">
                      <FiCalendar className="text-cyan-400" />
                      {cert.year}
                    </div>
                  </div>

                  {/* SKILLS PILLS */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-8">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-white/[0.02] border border-white/5 rounded-md group-hover:text-cyan-400 group-hover:border-cyan-400/20 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* ACTION BUTTON */}
                  <div className="mt-auto flex justify-center sm:justify-start">
                     <a
                      href={cert.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-bold tracking-wide hover:bg-cyan-400 hover:text-black hover:border-transparent hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 active:scale-95"
                    >
                      Show Credential
                      <FiExternalLink className="text-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Link
            to="/dashboard/certifications"
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-transparent border border-white/10 text-white font-bold text-sm hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 active:scale-95"
          >
            Explore All Certifications
            <FiArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;