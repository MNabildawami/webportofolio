import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FiUser, FiBriefcase, FiFolder, FiAward,
  FiBarChart2, FiArrowLeft, FiMenu, FiX, FiChevronsLeft, FiChevronsRight
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface SidebarProps {
  isMobileOpen: boolean;
  setIsMobileOpen: (val: boolean) => void;
  isDesktopCollapsed: boolean;
  setIsDesktopCollapsed: (val: boolean) => void;
}

const DashboardSidebar = ({ 
  isMobileOpen, 
  setIsMobileOpen, 
  isDesktopCollapsed, 
  setIsDesktopCollapsed 
}: SidebarProps) => {
  const location = useLocation();

  // ================= FITUR MEMORY (LOCAL STORAGE) =================
  // Agar Sidebar tetap mengecil walaupun kita pindah halaman
  useEffect(() => {
    const savedState = localStorage.getItem("sidebarCollapsed");
    if (savedState === "true") {
      setIsDesktopCollapsed(true);
    } else if (savedState === "false") {
      setIsDesktopCollapsed(false);
    }
  }, [setIsDesktopCollapsed]);

  const handleToggleCollapse = () => {
    const newState = !isDesktopCollapsed;
    setIsDesktopCollapsed(newState);
    localStorage.setItem("sidebarCollapsed", String(newState));
  };

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FiBarChart2 />, exact: true },
    { name: "About", path: "/dashboard/about", icon: <FiUser />},
    { name: "Experience", path: "/dashboard/experience", icon: <FiBriefcase /> },
    { name: "Projects", path: "/dashboard/projects", icon: <FiFolder /> }, 
    { name: "Certifications", path: "/dashboard/certifications", icon: <FiAward /> },
  ];

  return (
    <>
      {/* ================= MOBILE TOP-BAR ================= */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-[70px] bg-[#030303]/90 backdrop-blur-md border-b border-white/5 z-40 flex items-center justify-between px-6 shadow-xl">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#020202] border border-white/10 flex items-center justify-center font-black text-white text-sm">N</div>
          <span className="font-bold text-white text-sm tracking-wide">Nabeel<span className="text-cyan-400">.site</span></span>
        </Link>
        <button
          onClick={() => setIsMobileOpen(true)}
          className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-all"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* ================= OVERLAY GELAP ================= */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* ================= SIDEBAR UTAMA ================= */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 h-screen bg-[#030303] border-r border-white/5 
        transition-all duration-300 ease-in-out overflow-visible
        ${isDesktopCollapsed ? "lg:w-[88px]" : "w-[250px]"}
        lg:relative lg:translate-x-0 lg:flex-shrink-0
        ${isMobileOpen ? "translate-x-0 w-[250px] shadow-[20px_0_50px_rgba(0,0,0,0.5)]" : "-translate-x-full"}
      `}>
        
        {/* Tombol Toggle Collapse */}
        <button 
          onClick={handleToggleCollapse}
          className="hidden lg:flex absolute top-10 -right-3 w-6 h-6 bg-[#0a0d14] border border-white/10 rounded-full items-center justify-center text-gray-400 hover:text-cyan-400 hover:scale-110 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all z-50 cursor-pointer"
        >
          {isDesktopCollapsed ? <FiChevronsRight size={14} /> : <FiChevronsLeft size={14} />}
        </button>

        {/* ================= INNER SCROLL CONTAINER ================= */}
        <div className={`
          flex flex-col justify-between h-full py-8 overflow-y-auto
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
          ${isDesktopCollapsed ? "px-3" : "px-6"}
        `}>

          <button 
            onClick={() => setIsMobileOpen(false)} 
            className="lg:hidden absolute top-6 right-6 p-2 text-gray-500 hover:text-red-400 bg-white/5 rounded-lg transition-colors z-50"
          >
            <FiX size={20} />
          </button>

          {/* ================= BAGIAN ATAS: PROFIL & MENU ================= */}
          <div className="mt-8 lg:mt-0 w-full flex flex-col items-center">
            
            {/* BRANDING LOGO & HOVER ANIMATION */}
            <Link 
              to="/" 
              className={`flex items-center gap-3 mb-10 group transition-all w-full outline-none ${isDesktopCollapsed ? 'justify-center' : 'justify-start pl-1'}`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#020202] border border-white/10 flex items-center justify-center text-white text-xl shrink-0 shadow-lg group-hover:border-cyan-500/60 transition-colors duration-500">
                 <span className="font-black">N</span>
              </div>
              
              <div className={`transition-all duration-300 flex flex-col justify-center ${isDesktopCollapsed ? 'w-0 opacity-0 overflow-hidden hidden' : 'w-auto opacity-100 block'}`}>
                <h1 className="font-bold text-white text-[15px] leading-tight whitespace-nowrap">
                  Nabeel<span className="text-cyan-400">.site</span>
                </h1>
                
                <div className="relative h-[14px] overflow-hidden mt-0.5 w-full">
                  <span className="absolute inset-0 text-[8px] text-gray-500 uppercase tracking-widest font-bold flex items-center whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-full">
                    Quantum Coder
                  </span>
                  <span className="absolute inset-0 text-[8px] text-cyan-400 uppercase tracking-widest font-bold flex items-center whitespace-nowrap transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                    Initialize...
                  </span>
                </div>
              </div>
            </Link>

            {/* NAVIGASI MENU UTAMA */}
            <nav className="flex flex-col gap-2 w-full">
              {menuItems.map((item) => {
                const isActive = item.exact ? location.pathname === item.path : location.pathname.startsWith(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsMobileOpen(false)}
                    title={isDesktopCollapsed ? item.name : ""} 
                    className={`flex items-center rounded-2xl transition-all duration-300 font-medium ${
                      isDesktopCollapsed ? 'justify-center p-3 w-12 h-12 mx-auto' : 'px-4 py-3 gap-4 w-full'
                    } ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 text-white shadow-[0_0_15px_rgba(59,130,246,0.1)]" 
                        : "text-gray-400 border border-transparent hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className={`text-xl shrink-0 transition-colors ${isActive ? "text-blue-400" : "opacity-80 group-hover:text-cyan-400"}`}>
                      {item.icon}
                    </span>
                    <span className={`text-sm transition-all duration-300 whitespace-nowrap ${isDesktopCollapsed ? 'w-0 opacity-0 overflow-hidden hidden' : 'w-auto opacity-100 block'}`}>
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* ================= BAGIAN BAWAH: TOMBOL BACK & SOSIAL ================= */}
          {/* Kontainer Utama Bagian Bawah tetap muncul */}
          <div className="mt-10 transition-all duration-300 w-full flex flex-col items-center">
            
            {/* Tombol Back to Landing Page (Menyesuaikan dengan mode Collapse) */}
            <Link 
              to="/" 
              title={isDesktopCollapsed ? "Back to Hub" : ""}
              className={`group flex items-center rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all text-gray-400 hover:text-white ${
                isDesktopCollapsed ? 'justify-center p-3 w-12 h-12 mx-auto' : 'justify-center gap-3 w-full py-3.5 px-4 mb-6'
              }`}
            >
              <FiArrowLeft className="text-xl shrink-0 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className={`text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                isDesktopCollapsed ? 'w-0 opacity-0 overflow-hidden hidden' : 'w-auto opacity-100 block'
              }`}>
                Back to Hub
              </span>
            </Link>

            {/* Link Sosial & Copyright (Hanya disembunyikan saat Collapse agar rapi) */}
            <div className={`w-full transition-all duration-300 ${isDesktopCollapsed ? 'opacity-0 h-0 overflow-hidden hidden' : 'opacity-100 h-auto block'}`}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <SocialIcon href="https://github.com/MNabildawami" icon={<FaGithub />} />
                <SocialIcon href="https://www.linkedin.com/in/m-nabil-dawami-b55380215/" icon={<FaLinkedin />} />
                <SocialIcon href="mailto:muhammadnabildawami@gmail.com" icon={<FaEnvelope />} />
              </div>

              <div className="text-center text-[9px] text-gray-600 tracking-widest uppercase font-bold">
                <p>© 2026 Nabeel.site</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </aside>
    </>
  );
};

const SocialIcon = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-400 hover:border-transparent transition-all text-sm">
    {icon}
  </a>
);

export default DashboardSidebar;