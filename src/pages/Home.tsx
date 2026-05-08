import { useEffect } from "react"
import { useLocation } from "react-router-dom" // Pastikan Anda mengimpor ini jika pakai react-router

import Navbar from "../components/layout/Navbar"
import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Skills from "../components/sections/Skills"
import Projects from "../components/sections/Projects"
import Certifications from "../components/sections/Certifications"
import BlogSection from "../components/sections/BlogSection"
import DashboardCTA from "../components/sections/DashboardCTA"
import Contact from "../components/sections/Contact"
import Footer from "../components/layout/Footer"

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Mengecek apakah ada hash (misal: #about) di URL
    if (location.hash) {
      // Mencari elemen berdasarkan ID tanpa tanda '#' (misal: mencari id="about")
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        // Melakukan scroll halus ke elemen tersebut
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Jika tidak ada hash (hanya localhost:5173/), scroll ke paling atas
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]); // useEffect ini akan berjalan setiap kali URL berubah

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <BlogSection />
      <DashboardCTA />
      <Contact />
      <Footer />
    </>
  )
}

export default Home