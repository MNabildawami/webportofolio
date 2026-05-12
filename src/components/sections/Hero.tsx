import { motion, type Variants } from "framer-motion";
import { 
  FiArrowRight, 
  FiDownload, 
  FiChevronDown, 
  FiMail, 
  FiGithub, 
  FiLinkedin, 
  FiInstagram 
} from "react-icons/fi"; 
import { SiGooglescholar } from "react-icons/si";

const Hero = () => {
  // ================= ANIMASI VARIANTS =================
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // ================= FUNGSI SCROLL UX =================
  const handleScrollDown = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const nextSection = document.getElementById('about'); 
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center bg-[#020202] text-white px-5 sm:px-8 overflow-hidden pt-28 pb-20 lg:pt-24 lg:pb-12"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-cyan-500/10 blur-[120px] md:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:40px_40px] md:[background-size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />

      {/* ================= MAIN CONTENT ================= */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-x-8 lg:gap-y-6 items-center mt-4 lg:mt-0"
      >
        
        {/* === 1. BAGIAN TEKS ATAS === */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:col-start-1 lg:row-start-1">
          <motion.div variants={itemVariants} className="flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="text-cyan-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              Industrial Analytics & Security
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6 leading-[1.1] text-white">
            Hi, I'm <br className="hidden lg:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
              M. Nabil Dawami
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-sm sm:text-base lg:text-lg text-gray-400 font-bold tracking-wide max-w-lg leading-relaxed">
            Industrial Data & Security Analyst
          </motion.p>
          
          <motion.p variants={itemVariants} className="mt-4 text-sm sm:text-base text-gray-500 max-w-xl leading-relaxed font-medium">
            Focused on Energy Analytics, Operational Intelligence, and Enterprise Security.
          </motion.p>
        </div>

        {/* === 2. BAGIAN KARTU FOTO === */}
        <motion.div variants={itemVariants} className="flex justify-center lg:justify-end lg:col-start-2 lg:row-start-1 lg:row-span-2 w-full pt-2 pb-4 lg:py-0">
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative w-full max-w-[250px] sm:max-w-[280px] lg:max-w-[320px] xl:max-w-[340px] aspect-[3/4] rounded-[2rem] bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-2xl group hover:border-cyan-500/40 transition-all duration-500"
          >
            <img
              src="/projects/nabilpic.jpg" 
              alt="M. Nabil Dawami"
              className="absolute inset-0 w-full h-full object-cover object-center grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/90 via-[#020202]/20 to-transparent opacity-90 pointer-events-none" />

            {/* KARTU KONTAK */}
            <a 
              href="mailto:muhammadnabildawami@gmail.com"
              className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group/mail shadow-lg"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                   <span className="text-white font-black text-xs sm:text-sm drop-shadow-md">ND</span>
                   <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 border-2 border-[#1a1a1a] rounded-full" />
                </div>

                <div className="flex flex-col">
                  <span className="text-white text-xs sm:text-sm font-bold group-hover/mail:text-cyan-400 transition-colors">
                    @naabildawami
                  </span>
                  <span className="text-gray-300 text-[9px] sm:text-[10px] mt-0.5 font-medium tracking-wide uppercase">
                    Click For Contact
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-black/30 border border-white/10 text-white group-hover/mail:bg-cyan-400 group-hover/mail:text-black group-hover/mail:border-transparent transition-all">
                <FiMail className="text-base" />
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* === 3. BAGIAN TOMBOL & SOSIAL MEDIA === */}
        <div className="flex flex-col items-center lg:items-start lg:col-start-1 lg:row-start-2 w-full">
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
            <motion.a
              href="/#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3 sm:py-3.5 rounded-xl sm:rounded-full bg-cyan-400 text-black font-bold text-sm hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>

            <motion.a
              href="/cv-nabil.pdf" 
              download
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3 sm:py-3.5 rounded-xl sm:rounded-full bg-white/[0.03] border border-white/10 text-white font-medium text-sm hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 backdrop-blur-md"
            >
              Download CV
              <FiDownload className="group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start items-center gap-3">
            <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mr-1 hidden sm:block">
              Connect
            </span>
            
            {[
              { icon: FiGithub, href: "https://github.com/MNabildawami" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/m-nabil-dawami-b55380215/" },
              { icon: FiInstagram, href: "https://www.instagram.com/naabildawami/" },
              { icon: SiGooglescholar, href: "https://scholar.google.com/citations?user=oCv1v7UAAAAJ&hl=id" }
            ].map((social, index) => (
              <motion.a 
                key={index} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer" 
                whileHover={{ scale: 1.15, y: -4, color: "#22d3ee" }}
                className="w-10 h-10 rounded-xl sm:rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300"
              >
                <social.icon className="text-base sm:text-lg" />
              </motion.a>
            ))}
          </motion.div>
        </div>

      </motion.div>

      {/* ================= SCROLL INDICATOR ================= */}
      <motion.a
        href="#about"
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ y: 3 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex cursor-pointer group"
      >
        <span className="text-gray-500 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-cyan-400 transition-colors">Scroll down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiChevronDown className="text-cyan-400 text-lg sm:text-xl" />
        </motion.div>
      </motion.a>

    </section>
  );
};

export default Hero;