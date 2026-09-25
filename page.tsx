import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";
import CinematicVideo from "@/components/CinematicVideo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LenisProvider>
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Cursor-Controlled & Scroll-Scrubbed 3D Video Background Engine */}
      <CinematicVideo />

      {/* Floating Frosted Glass Header */}
      <Navbar />

      {/* Foreground Interactive Content Layers */}
      <main className="relative z-20 flex flex-col min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </main>

      {/* Cybernetic Footer */}
      <Footer />
    </LenisProvider>
  );
}
