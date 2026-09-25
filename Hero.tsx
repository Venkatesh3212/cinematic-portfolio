"use client";

import React from "react";
import { PERSONAL_INFO, TELEMETRY_METRICS } from "@/data/portfolioData";
import { ArrowUpRight, Download, Radio } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Ambient Background Watermark with Candidate's First Name */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 whitespace-nowrap font-oswald font-extrabold uppercase opacity-35"
        style={{
          fontSize: "clamp(120px, 18vw, 280px)",
          lineHeight: 0.85,
          color: "transparent",
          WebkitTextStroke: "1px rgba(196, 0, 36, 0.25)",
          textShadow: "0 0 35px rgba(196, 0, 36, 0.12)",
          letterSpacing: "0.08em",
        }}
        aria-hidden="true"
      >
        {PERSONAL_INFO.firstName}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Eyebrow Badge & Open To Opportunities Live Beacon */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-bright-red/40 bg-accent-red/10 text-bright-red font-mono text-xs uppercase tracking-widest backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-bright-red animate-ping" />
            <span>{PERSONAL_INFO.eyebrowBadge}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel font-mono text-xs text-white/70">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>OPEN TO HIGH-IMPACT LEADERSHIP</span>
          </div>
        </div>

        {/* Large Bold Uppercase Typography using Oswald font */}
        <div className="mb-8 max-w-4xl">
          <h1 className="font-oswald uppercase tracking-tight text-white leading-[0.92] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            <span className="block text-white">BUILDING IDEAS</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ffe6ea] to-[#ff4d6d]">
              INTO EXPERIENCES<span className="text-bright-red drop-shadow-[0_0_20px_#e0002a]">.</span>
            </span>
          </h1>
        </div>

        {/* Narrative Lead Bio */}
        <p className="font-space text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed mb-10">
          I bridge <span className="text-white font-medium">product architecture</span>, programmatic data pipelines, and generative AI search (<span className="text-bright-red">GEO & AEO</span>) to construct compounding multi-million organic acquisition systems.
        </p>

        {/* Magnetic CTAs */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-16">
          <a
            href="#projects"
            data-magnetic="true"
            className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-bright-red hover:bg-bright-red/90 text-white font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(224,0,42,0.4)] hover:shadow-[0_0_35px_rgba(224,0,42,0.7)]"
          >
            <span>EXPLORE WORK</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="#contact"
            data-magnetic="true"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full glass-panel hover:bg-white/10 text-white/80 hover:text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 border border-white/10 hover:border-white/20"
          >
            <Download className="w-4 h-4 text-bright-red" />
            <span>DOWNLOAD RÉSUMÉ</span>
          </a>
        </div>
      </div>

      {/* Metric Telemetry Counters (Bottom Banner) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {TELEMETRY_METRICS.map((metric, idx) => (
            <div key={idx} className="relative group">
              <div className="font-oswald text-3xl sm:text-4xl lg:text-5xl font-bold text-white group-hover:text-bright-red transition-colors tracking-tight">
                {metric.value}
              </div>
              <div className="font-syne font-semibold text-xs sm:text-sm text-white/90 mt-1">
                {metric.label}
              </div>
              <div className="font-space text-[11px] text-white/50 mt-0.5">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
