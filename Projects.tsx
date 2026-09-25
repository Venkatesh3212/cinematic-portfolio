"use client";

import React, { useRef, useState } from "react";
import { PROJECTS, CaseStudy } from "@/data/portfolioData";
import { CheckCircle, ArrowUpRight, Cpu } from "lucide-react";

function TiltCard({ project }: { project: CaseStudy }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, x: 50, y: 50, active: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width - 0.5) * 2;
    const normY = (y / rect.height - 0.5) * 2;

    // Subtle 3D perspective tilt: rotateX governed by -normY, rotateY by normX
    const rx = normY * -8;
    const ry = normX * 8;

    setTilt({
      rx,
      ry,
      x,
      y,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, x: 50, y: 50, active: false });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 transition-transform duration-150 ease-out will-change-transform flex flex-col justify-between group overflow-hidden"
      style={{
        transform: tilt.active
          ? `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      }}
    >
      {/* Laser Top Beam */}
      <div className="laser-top-bar" />

      {/* Dynamic Cursor Spotlight inside card */}
      {tilt.active && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 320px at ${tilt.x}px ${tilt.y}px, rgba(224, 0, 42, 0.18), transparent 75%)`,
          }}
        />
      )}

      {/* Card Header */}
      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-white/90">
              {project.company}
            </span>
            <span className="font-mono text-[11px] text-white/40">
              {project.timeframe}
            </span>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic="true"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-white/70 hover:text-bright-red transition-colors"
            >
              <span>INSPECT ARCHITECTURE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Metric Hero Banner */}
        <div className="mb-4 flex items-baseline gap-3">
          <span className="font-oswald text-4xl sm:text-5xl font-extrabold text-bright-red tracking-tight shadow-[0_0_20px_rgba(224,0,42,0.3)]">
            {project.metricHero}
          </span>
          <span className="font-syne font-medium text-xs sm:text-sm text-white/80">
            {project.metricLabel}
          </span>
        </div>

        <h3 className="font-syne font-bold text-xl sm:text-2xl text-white group-hover:text-bright-red transition-colors leading-snug mb-3">
          {project.tagline}
        </h3>

        <p className="font-space text-sm text-white/70 leading-relaxed mb-6">
          {project.overview}
        </p>

        {/* Core Strategy Checklist */}
        <div className="space-y-2.5 mb-6">
          {project.strategy.slice(0, 3).map((item, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs text-white/80">
              <CheckCircle className="w-3.5 h-3.5 text-bright-red flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Results Telemetry & Tech Tags */}
      <div className="relative z-10 pt-4 border-t border-white/10">
        <div className="grid grid-cols-3 gap-2 py-3 mb-4 rounded-xl bg-black/40 border border-white/5 text-center">
          {project.results.map((res, rIdx) => (
            <div key={rIdx} className="px-2">
              <div className="font-oswald text-base sm:text-lg font-bold text-white">
                {res.value}
              </div>
              <div className="font-mono text-[10px] text-white/50 truncate">
                {res.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/5 text-white/70 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-red/30 bg-accent-red/10 text-bright-red font-mono text-xs uppercase tracking-widest mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>PRODUCTION CASE STUDIES</span>
        </div>
        <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
          ENGINEERED <span className="text-bright-red">GROWTH SYSTEMS</span>
        </h2>
        <p className="font-space text-sm sm:text-base text-white/60 max-w-2xl">
          High-stakes execution architectures: from taking MPL Cricket to 130K+ visits in 90 days to deploying 10,000+ programmatic pages at Internshala. Hover to activate 3D perspective tilt.
        </p>
      </div>

      {/* 3D Perspective Tilt Card Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <TiltCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
