"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 border-t border-white/10 bg-black/80 backdrop-blur-lg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Status */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="font-oswald text-2xl font-bold uppercase text-white">
            {PERSONAL_INFO.firstName}
            <span className="text-bright-red">.</span>
          </div>

          <span className="hidden sm:inline text-white/20">|</span>

          <div className="flex items-center gap-2 font-mono text-xs text-white/50">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>ALL SYSTEMS OPERATIONAL // 2026 EDITION</span>
          </div>
        </div>

        {/* Center: Specs badge */}
        <div className="font-mono text-[11px] text-white/40 text-center">
          CINEMATIC CURSOR & SCROLL 3D ENGINE • NEXT.JS 14
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          data-magnetic="true"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel hover:bg-white/10 text-white/70 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors border border-white/10"
        >
          <span>ASCEND</span>
          <ArrowUp className="w-3.5 h-3.5 text-bright-red" />
        </button>
      </div>
    </footer>
  );
}
