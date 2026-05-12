import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGrid, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Pastikan react-icons/fa sudah terinstall

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
  { 
    name: "About", 
    href: "about", 
    desc: "Professional background & focus" 
  },

  { 
    name: "Expertise", 
    href: "skills", 
    desc: "Core analytics & security capabilities" 
  },

  { 
    name: "Projects", 
    href: "projects", 
    desc: "Enterprise case studies & systems" 
  },

  { 
    name: "Certifications", 
    href: "certifications", 
    desc: "Professional credentials & learning" 
  },

  { 
    name: "Blog", 
    href: "blog", 
    desc: "Insights on analytics & security" 
  },

  { 
    name: "Contact", 
    href: "contact", 
    desc: "Open for collaboration & opportunities" 
  },
];

  // Efek Scroll untuk Background Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 300) setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Kunci scroll body saat mobile menu terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Observer untuk mendeteksi section mana yang sedang dilihat
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && window.scrollY > 300) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navLinks.forEach((link) => {
      const section = document.getElementById(link.href);
      if (section) observer.observe(section);
    });

    const ctaSection = document.getElementById("dashboard-cta");
    if (ctaSection) observer.observe(ctaSection);

    return () => observer.disconnect();
  }, []);

  const isDashboardActive = activeSection === "dashboard-cta";

  // Komponen Logo Reusable (agar konsisten di Navbar & Mobile Menu)
  const Logo = () => (
    <a href="/" className="group flex items-center gap-3 md:gap-3.5 outline-none" onClick={() => setIsOpen(false)}>
      <div className="relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#0a0a0a] border border-white/10 group-hover:border-cyan-400/40 transition-colors duration-500 overflow-hidden shadow-lg">
        <motion.div
          initial={{ x: '-150%' }}
          whileHover={{ x: '150%' }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -skew-x-12"
        />
        <motion.span 
          className="font-black text-white text-base md:text-lg relative z-10"
          whileHover={{ rotateY: 180, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          N
        </motion.span>
      </div>
      
      <div className="flex flex-col justify-center">
        <div className="text-[18px] md:text-[20px] tracking-tight leading-none">
          <span className="font-bold text-white group-hover:text-gray-200 transition-colors">Nabeel</span>
          <span className="font-light text-cyan-400">.site</span>
        </div>
        <div className="relative mt-1 h-[14px] overflow-hidden flex items-center w-full">
          <span className="absolute text-[7px] md:text-[8px] font-medium text-gray-500 tracking-[0.2em] uppercase whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-full">
            Quantum Coder
          </span>
          <span className="absolute text-[7px] md:text-[9px] font-medium text-cyan-400 tracking-[0.2em] uppercase whitespace-nowrap translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            Initialize...
          </span>
        </div>
      </div>
    </a>
  );

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${
          scrolled
            ? "bg-[#020202]/80 backdrop-blur-xl border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3 md:py-4"
            : "bg-transparent border-transparent py-5 md:py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 flex items-center justify-between">
          
          <Logo />

          {/* ================= DESKTOP MENU ================= */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href} className="relative px-2 py-1">
                  <a
                    href={`/#${link.href}`}
                    className={`relative z-10 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                      isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute -bottom-2 left-0 w-full h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* ================= DESKTOP DASHBOARD BUTTON ================= */}
          <div className="hidden lg:block relative">
            <a 
              href="/dashboard" 
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-xl border transition-all duration-300 active:scale-95 ${
                isDashboardActive 
                  ? "bg-cyan-400/10 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.3)] scale-105"
                  : "bg-white/[0.02] border-white/10 hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
              }`}
            >
              <FiGrid className={`text-sm transition-transform duration-500 ${isDashboardActive ? "text-cyan-400 rotate-90" : "text-gray-400 group-hover:text-cyan-400 group-hover:rotate-90"}`} />
              <span className="font-bold text-[10px] uppercase tracking-widest text-white">
                Dashboard
              </span>
            </a>
          </div>

          {/* ================= MOBILE HAMBURGER BUTTON ================= */}
          <button 
            onClick={() => setIsOpen(true)} 
            className="lg:hidden w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-all focus:outline-none"
          >
            <FiMenu size={18} />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE FULLSCREEN MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2, duration: 0.3 } }}
            className="fixed inset-0 z-[110] bg-[#020202]/98 backdrop-blur-2xl flex flex-col lg:hidden"
          >
            {/* Header Mobile Menu (Mimic Navbar) */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-white/5">
              <Logo />
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all focus:outline-none"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Menu Links Content */}
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-center">
              <ul className="flex flex-col gap-6">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                      <a
                        href={`/#${link.href}`}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center justify-between w-full"
                      >
                        <div className="flex flex-col">
                          <span className={`text-3xl sm:text-4xl font-black tracking-tight uppercase transition-colors duration-300 ${
                            isActive ? "text-cyan-400" : "text-white group-hover:text-cyan-400"
                          }`}>
                            {link.name}
                          </span>
                          <span className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-widest uppercase mt-1">
                            {link.desc}
                          </span>
                        </div>
                        
                        {/* Animated Arrow on Hover/Active */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isActive ? "bg-cyan-500/20 text-cyan-400" : "bg-white/5 text-transparent group-hover:text-cyan-400 group-hover:bg-cyan-500/10"
                        }`}>
                          <FiArrowRight className={`transition-transform duration-300 ${isActive ? "translate-x-0" : "-translate-x-2 group-hover:translate-x-0"}`} />
                        </div>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Mobile Dashboard CTA */}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: 20 }}
                 transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                 className="mt-12 pt-8 border-t border-white/5"
              >
                <a 
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black tracking-widest uppercase shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all active:scale-95"
                >
                  <FiGrid className="text-xl" />
                  Access Dashboard
                </a>
              </motion.div>
            </div>

            {/* Footer Mobile Menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 border-t border-white/5 flex items-center justify-between bg-[#020202]"
            >
              <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-bold">
                © 2026 Nabeel.Site
              </p>
              <div className="flex gap-4 text-gray-500">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaGithub size={16} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><FaLinkedin size={16} /></a>
                <a href="mailto:email@example.com" className="hover:text-white transition-colors"><FaEnvelope size={16} /></a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;