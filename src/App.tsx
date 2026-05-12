import { Routes, Route } from "react-router-dom";

// Import Halaman Utama
import Home from "./pages/Home";

// Import Halaman-Halaman Dashboard
import Dashboard from "./pages/dashboard/Overview";
import Projects from "./pages/dashboard/DashProjects";
import DashExperience from "./pages/dashboard/DashExperience";
import DashCertificates from "./pages/dashboard/DashCertificates";  
import DashAbout from "./pages/dashboard/DashAbout"; 

const App = () => {
  return (
    <Routes>
      {/* ================= HALAMAN PUBLIK ================= */}
      <Route path="/" element={<Home />} />

      {/* ================= HALAMAN DASHBOARD ================= */}
      {/* 1. Overview (Dashboard Utama) */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* 2. Experience */}
      <Route path="/dashboard/experience" element={<DashExperience />} />

      {/* 3. Certifications (Tinggal buka komen kalau file sudah siap) */}
      <Route path="/dashboard/certifications" element={<DashCertificates />} />

      {/* 4. Projects (Sesuai path di Sidebar yang sudah kita ganti jadi /projects) */}
      <Route path="/dashboard/projects" element={<Projects />} />
      
      {/* 5. About (Sesuai path di Sidebar yang sudah kita ganti jadi /about) */}
      <Route path="/dashboard/about" element={<DashAbout />} />
    </Routes>
  );
};

export default App;