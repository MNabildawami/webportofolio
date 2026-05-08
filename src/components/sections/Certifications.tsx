import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiExternalLink, FiAward, FiArrowRight, FiCalendar } from "react-icons/fi";
import { certifications } from "../../data/certifications";

const Certifications = () => {
  // Hanya ambil 2 sertifikat teratas untuk tampilan Home
  const featuredCerts = certifications.slice(0, 2);

  return (
    <section id="certifications" className="relative bg-black text-white py-32 px-6 scroll-mt-20 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm font-semibold">
              Achievements
            </p>
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-500">
            Licenses & Certifications
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A collection of professional credentials and technical certifications that validate my expertise.
          </p>
        </motion.div>

        {/* CERTIFICATIONS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredCerts.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/[0.02]"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-cyan-500/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex flex-col sm:flex-row items-start gap-8">
                
                {/* ICON CONTAINER */}
                <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-[22px] bg-white/[0.03] border border-white/10 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 transition-all duration-500">
                  <FiAward className="text-gray-400 group-hover:text-cyan-400 text-3xl transition-colors duration-500" />
                </div>

                <div className="flex-grow w-full">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-100 mb-1 group-hover:text-white transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-cyan-400 font-medium tracking-wide text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-gray-500 text-xs font-semibold">
                      <FiCalendar />
                      {cert.year}
                    </div>
                  </div>

                  {/* SKILLS PILLS */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-400 bg-black/50 border border-white/5 rounded-full group-hover:border-cyan-400/20 group-hover:text-cyan-300 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* ACTION BUTTON (Show Credential) */}
                  <a
                    href="https://example.com/credential/123" // Pastikan ada properti 'link' di data/certifications.ts
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-gray-300 text-sm font-semibold hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all duration-300"
                  >
                    <span>Show Credential</span>
                    <FiExternalLink />
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL BUTTON (Drives to /certifications page) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <Link
            to="/certifications"
            className="group flex items-center gap-3 px-10 py-4 rounded-full bg-transparent border border-cyan-400/50 text-cyan-400 font-bold tracking-wide hover:bg-cyan-400/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300 active:scale-95"
          >
            Explore All Certifications
            <FiArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;