import { motion } from "framer-motion";
import { 
  FiArrowRight, 
  FiDownload, 
  FiChevronDown, 
  FiMail, 
  FiGithub, 
  FiLinkedin, 
  FiInstagram 
} from "react-icons/fi"; 
import { SiGooglescholar } from "react-icons/si"; // Import ikon Scholar

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black text-white px-6 overflow-hidden pt-24 pb-12"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* MAIN CONTENT: 2 COLUMNS LAYOUT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* === KOLOM KIRI: TEKS & TOMBOL === */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
              Hello, World
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight mb-6"
          >
            I'm <br className="hidden lg:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">
              M. Nabil Dawami
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-400 font-light tracking-wide mb-10 max-w-xl"
          >
            AI Engineer <span className="text-cyan-400 mx-2">•</span> 
            Cybersecurity <span className="text-cyan-400 mx-2">•</span> 
            Fullstack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
          >
            <a
              href="/#projects"
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-400 text-black font-bold text-base hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="/cv-nabil.pdf" 
              download
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 text-white font-medium text-base hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              Download CV
              <FiDownload className="group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-5"
          >
            <span className="text-gray-500 text-sm tracking-wider uppercase mr-2 hidden sm:block">
              Connect:
            </span>
            <a 
              href="https://github.com/MNabildawami"
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <FiGithub className="text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/m-nabil-dawami-b55380215/"
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <FiLinkedin className="text-xl" />
            </a>
            <a 
              href="https://www.instagram.com/naabildawami/"
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <FiInstagram className="text-xl" />
            </a>
             <a 
              href="https://scholar.google.com/" // MASUKKAN LINK SCHOLAR ANDA
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1"
              title="Google Scholar"
            >
              <SiGooglescholar className="text-xl" />
            </a>
          </motion.div>

        </div>

        {/* === KOLOM KANAN: KARTU FOTO PREMIUM === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
          className="flex justify-center lg:justify-end order-1 lg:order-2 perspective-1000"
        >
          <div className="relative w-full max-w-[340px] xl:max-w-[400px] aspect-[3/4] rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-2xl group hover:border-cyan-500/50 transition-colors duration-500">
            
            <img
              src="/projects/nabilpic.jpg" 
              alt="M. Nabil Dawami"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 pointer-events-none" />

            <a 
              href="mailto:muhammadnabildawami@gmail.com"
              className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-between hover:bg-white/20 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,211,238,0.2)] transition-all duration-300 cursor-pointer group/mail"
            >
              
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full bg-cyan-950 overflow-hidden border border-cyan-400/50 flex items-center justify-center shadow-[inset_0_0_10px_rgba(34,211,238,0.3)]">
                   <span className="text-cyan-400 font-bold text-sm">ND</span>
                   <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#1a2c34] rounded-full animate-pulse" />
                </div>

                <div className="flex flex-col">
                  <span className="text-white text-base font-bold leading-tight group-hover/mail:text-cyan-400 transition-colors">
                    @naabildawami
                  </span>
                  <span className="text-gray-300 text-xs mt-0.5">
                    Available for work
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-black/30 border border-white/10 text-gray-300 group-hover/mail:bg-cyan-400 group-hover/mail:text-black group-hover/mail:border-cyan-400 transition-all">
                <FiMail className="text-lg" />
              </div>

            </a>

          </div>
        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex"
      >
        <span className="text-gray-500 text-[10px] tracking-[0.2em] uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiChevronDown className="text-cyan-400 text-xl" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;