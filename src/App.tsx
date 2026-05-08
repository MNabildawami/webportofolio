import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Dashboard from "./pages/Dashboard"; // <-- Import halaman Dashboard yang baru kita buat

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