"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", label: "Overview", href: "#" },
  { id: "about", label: "Inspection", href: "#about" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Case Studies", href: "#projects" },
  { id: "certifications", label: "Certifications", href: "#certifications" },
  { id: "skills", label: "Arsenal", href: "#skills" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) =>
        item.id === "hero" ? null : document.getElementById(item.id)
      );

      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          return;
        }
      }
      setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none`}
      >
        <div
          className={`w-full max-w-6xl rounded-full px-5 py-2.5 flex items-center justify-between pointer-events-auto transition-all duration-300 ${
            scrolled
              ? "glass-panel-glow border-bright-red/30 shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              : "glass-panel border-white/10"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#"
            data-magnetic="true"
            className="flex items-center gap-1 font-oswald text-xl uppercase tracking-wider text-white font-bold group"
          >
            <span>{PERSONAL_INFO.firstName}</span>
            <span className="text-bright-red group-hover:scale-125 transition-transform">.</span>
          </a>

          {/* Desktop Navigation with Sliding Pill Indicator */}
          <nav className="hidden md:flex items-center gap-1 relative px-1 py-1 rounded-full bg-white/5 border border-white/5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  data-magnetic="true"
                  onClick={() => setActiveSection(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {/* Sliding Pill Background for Active Item */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-bright-red/90 shadow-[0_0_12px_#e0002a] -z-10 animate-fade-in" />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              data-magnetic="true"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-bright-red hover:shadow-[0_0_15px_#e0002a] text-white font-mono text-xs uppercase tracking-wider transition-all duration-300"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-full text-white/80 hover:text-white glass-panel"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden flex flex-col justify-center px-8"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-6 text-center">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-oswald text-3xl uppercase tracking-wider transition-colors ${
                  activeSection === item.id
                    ? "text-bright-red"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-6 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-block px-8 py-3 rounded-full bg-bright-red text-white font-mono text-xs uppercase tracking-widest shadow-[0_0_20px_#e0002a]"
              >
                INITIATE PROTOCOL
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
