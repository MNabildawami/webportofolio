import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/dashboard/Projects";
import Dashboard from "./pages/dashboard/Overview"; // <-- Import halaman Dashboard yang baru kita buat

const App = () => {
  return (
    <Routes>
      {/* Halaman Utama (Portofolio & Blog) */}
      <Route path="/" element={<Home />} />

      {/* Halaman Projects Standalone (Jika masih dipakai) */}
      <Route path="/projects" element={<Projects />} />

      {/* Halaman Dashboard Baru (Pusat Komando) */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;