import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGrid } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Menambahkan "Blog" ke dalam daftar navigasi
  const navLinks = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Certifications", href: "certifications" },
     { name: "Blog", href: "blog" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 300) setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] transition-colors duration-500 border-b ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          
          {/* LOGO: PREMIUM 3D FLIP & SHIMMER */}
          <a href="/" className="group flex items-center gap-3.5 outline-none">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.02] border border-white/10 group-hover:border-cyan-400/40 transition-colors duration-500 overflow-hidden shadow-lg">
              <motion.div
                initial={{ x: '-150%' }}
                whileHover={{ x: '150%' }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -skew-x-12"
              />
              <motion.span 
                className="font-black text-white text-lg relative z-10"
                whileHover={{ rotateY: 180, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                N
              </motion.span>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="text-[20px] tracking-tight leading-none">
                <span className="font-bold text-white group-hover:text-gray-200 transition-colors">Nabeel</span>
                <span className="font-light text-cyan-400">.site</span>
              </div>
              <div className="relative mt-1 h-[14px] overflow-hidden flex items-center">
                <span className="absolute text-[9px] font-medium text-gray-500 tracking-[0.2em] transition-transform duration-300 group-hover:-translate-y-full">
                  Quantum Coder
                </span>
                <span className="absolute text-[9px] font-medium text-cyan-400 tracking-[0.2em] translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  Initialize...
                </span>
              </div>
            </div>
          </a>

          {/* DESKTOP MENU: DENGAN SECTION BLOG */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href} className="relative px-2 py-1">
                  <a
                    href={`/#${link.href}`}
                    className={`relative z-10 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${
                      isActive ? "text-cyan-400" : "text-gray-500 hover:text-white"
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

          {/* DASHBOARD ACTION */}
          <div className="hidden md:block">
            <a 
              href="/dashboard" 
              className="group flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.02] border border-white/10 hover:bg-cyan-400/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 active:scale-95"
            >
              <FiGrid className="text-cyan-400 text-sm group-hover:rotate-90 transition-transform duration-500" />
              <span className="text-white font-bold text-[10px] uppercase tracking-widest transition-colors">
                Dashboard
              </span>
            </a>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-2xl text-cyan-400 focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-[110] w-full sm:w-80 bg-[#050505]/95 backdrop-blur-3xl border-l border-white/5 flex flex-col p-10 shadow-2xl md:hidden"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsOpen(false)} className="text-3xl text-gray-400 hover:text-cyan-400 transition-colors">
                <FiX />
              </button>
            </div>

            <ul className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={`/#${link.href}`}
                    onClick={() => setIsOpen(false)}
                    className={`text-3xl font-bold tracking-tight uppercase transition-colors ${
                      activeSection === link.href ? "text-cyan-400" : "text-gray-500 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              
              <motion.li
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: navLinks.length * 0.1 }}
                 className="mt-4 pt-8 border-t border-white/10"
              >
                <a 
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-cyan-400 text-2xl font-bold tracking-widest uppercase"
                >
                  <FiGrid />
                  Dashboard
                </a>
              </motion.li>
            </ul>

            <div className="mt-auto">
              <p className="text-[10px] text-gray-600 tracking-[0.2em] uppercase">
                Nabeel.site © 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;