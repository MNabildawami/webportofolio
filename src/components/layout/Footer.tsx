import { motion, type Variants } from "framer-motion";
import { 
  FaGithub, 
  FaInstagram, 
  FaLinkedin, 
  FaMapMarkerAlt 
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  // Variasi animasi untuk memunculkan elemen secara berurutan
  // Ubah bagian ini (tambahkan : Variants)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  // Ubah bagian ini juga (tambahkan : Variants)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer className="relative bg-[#020202] text-white pt-24 pb-10 border-t border-white/5 overflow-hidden">
      
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none" />

      {/* GRID PATTERN (Sama dengan CTA Dashboard) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* MAIN FOOTER CONTENT */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20"
        >
          
          {/* ================= LEFT: BRANDING & BIO ================= */}
          <motion.div variants={itemVariants} className="md:col-span-5 flex flex-col items-start">
            
            {/* Logo 'N' (Konsisten dengan Navbar) */}
            <a href="/" className="group flex items-center gap-3.5 mb-8 outline-none">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 group-hover:border-cyan-400/40 transition-colors duration-500 overflow-hidden shadow-lg">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -skew-x-12 group-hover:animate-[shimmer_1s_infinite]" />
                <span className="font-black text-white text-xl relative z-10 group-hover:text-cyan-400 transition-colors">N</span>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="text-2xl tracking-tight leading-none mb-1">
                  <span className="font-bold text-white group-hover:text-gray-200 transition-colors">Nabeel</span>
                  <span className="font-light text-cyan-400">.site</span>
                </div>
                <span className="text-[10px] font-medium text-gray-500 tracking-[0.2em] uppercase">
                  Quantum Coder
                </span>
              </div>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              Membangun sistem digital masa depan. Spesialis dalam AI Engineering, Cybersecurity, dan Fullstack Development dengan fokus pada arsitektur yang aman dan efisien.
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.02] border border-white/10 text-gray-400 text-xs shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <FaMapMarkerAlt className="text-cyan-400" />
              <span>Pekanbaru, Indonesia</span>
            </div>
          </motion.div>


          {/* ================= MIDDLE: QUICK LINKS ================= */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-8">
              Navigation
            </h3>
            <ul className="space-y-4">
              {['About', 'Skills', 'Projects', 'Certifications', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase()}`}
                    className="group flex items-center gap-2 text-gray-400 text-sm font-medium hover:text-cyan-400 transition-colors"
                  >
                    <span className="w-0 h-[1px] bg-cyan-400 group-hover:w-4 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>


          {/* ================= RIGHT: SOCIAL MEDIA (GLASSMORPHISM) ================= */}
          <motion.div variants={itemVariants} className="md:col-span-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-8">
              Connect
            </h3>
            
            <div className="flex gap-4">
              <SocialLink href="https://github.com/MNabildawami" icon={<FaGithub />} label="GitHub" />
              <SocialLink href="https://www.instagram.com/naabildawami/" icon={<FaInstagram />} label="Instagram" />
              <SocialLink href="https://www.linkedin.com/in/m-nabil-dawami-b55380215/" icon={<FaLinkedin />} label="LinkedIn" />
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[40px] rounded-full group-hover:bg-cyan-500/20 transition-colors duration-500" />
              <p className="text-xs text-gray-400 mb-4 relative z-10">
                Tertarik untuk berkolaborasi atau memiliki proyek menarik? Mari berdiskusi.
              </p>
              <a 
                href="/#contact"
                className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors relative z-10"
              >
                Send a Message <FiArrowUpRight />
              </a>
            </div>
          </motion.div>

        </motion.div>


        {/* ================= BOTTOM: COPYRIGHT ================= */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium tracking-wide text-gray-500"
        >
          <p>
            © {new Date().getFullYear()} <span className="text-cyan-400 font-bold">M. Nabil Dawami</span>. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <span>Built with React & Vite</span>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <a href="/dashboard" className="hover:text-cyan-400 transition-colors">
              Access Dashboard
            </a>
          </div>
        </motion.div>

      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-12deg); }
          100% { transform: translateX(150%) skewX(-12deg); }
        }
      `}</style>
    </footer>
  );
};

// Komponen Pembantu untuk Social Media Icon
const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <motion.a
    whileHover={{ y: -5, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300"
  >
    <div className="text-xl">
      {icon}
    </div>
  </motion.a>
);

export default Footer;