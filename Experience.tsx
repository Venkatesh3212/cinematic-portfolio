"use client";

import React, { useState } from "react";
import { TIMELINE_DATA } from "@/data/portfolioData";
import { Briefcase, GraduationCap, Calendar, CheckCircle2, Layers } from "lucide-react";

type FilterType = "all" | "work" | "education";

export default function Experience() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredItems = TIMELINE_DATA.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-red/30 bg-accent-red/10 text-bright-red font-mono text-xs uppercase tracking-widest mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>BILATERAL ARCHITECTURE</span>
        </div>
        <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
          CAREER & <span className="text-bright-red">ACADEMIC JOURNEY</span>
        </h2>
        <p className="font-space text-sm sm:text-base text-white/60 max-w-xl mx-auto">
          A unified chronological record bridging technical IT engineering fundamentals with multi-million organic search acquisition engines.
        </p>

        {/* Interactive Filter Pills */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {(
            [
              { key: "all", label: "All Milestones", icon: Layers },
              { key: "work", label: "Work Experience", icon: Briefcase },
              { key: "education", label: "Education", icon: GraduationCap },
            ] as const
          ).map((tab) => {
            const isActive = filter === tab.key;
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                data-magnetic="true"
                className={`relative px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-bright-red text-white shadow-[0_0_20px_rgba(224,0,42,0.5)] font-semibold"
                    : "glass-panel text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {Icon && <Icon className="w-3.5 h-3.5" />}
                  <span>{tab.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* BILATERAL TIMELINE SPINE CONTAINER */}
      <div className="max-w-5xl mx-auto relative">
        {/* Central glowing neon laser spine down the middle (50% desktop, left 24px on mobile) */}
        <div className="absolute top-0 bottom-0 left-[24px] md:left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-bright-red/80 via-accent-red/40 to-transparent shadow-[0_0_12px_#e0002a]" />

        {/* Milestone Cards */}
        <div className="space-y-12 md:space-y-16">
          {filteredItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                } gap-8 md:gap-0`}
              >
                {/* Center Glowing Waypoint Node with pulsing rings */}
                <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing Status Ring */}
                    {item.current ? (
                      <>
                        <span className="absolute w-8 h-8 rounded-full bg-bright-red/30 animate-ping" />
                        <span className="absolute w-6 h-6 rounded-full border border-bright-red/80 animate-pulse" />
                      </>
                    ) : (
                      <span className="absolute w-5 h-5 rounded-full border border-white/20" />
                    )}

                    {/* Core node */}
                    <div
                      className={`w-3.5 h-3.5 rounded-full z-10 transition-transform duration-300 ${
                        item.current
                          ? "bg-bright-red shadow-[0_0_14px_#e0002a]"
                          : item.type === "education"
                          ? "bg-purple-500 shadow-[0_0_10px_#a855f7]"
                          : "bg-white/80 shadow-[0_0_8px_#ffffff]"
                      }`}
                    />
                  </div>
                </div>

                {/* Milestone Card Content (Bilateral alternating 50% width on desktop) */}
                <div
                  className={`w-full pl-14 md:pl-0 md:w-[calc(50%-40px)] ${
                    isEven ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"
                  }`}
                >
                  <div className="group relative rounded-2xl glass-panel p-6 sm:p-7 border border-white/10 hover:border-bright-red/40 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(224,0,42,0.25)] text-left">
                    {/* Laser top bar */}
                    <div
                      className="laser-top-bar"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${item.color || "#e0002a"}, transparent)`,
                      }}
                    />

                    {/* Metadata Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-white/80">
                          {item.organization}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase ${
                            item.current
                              ? "bg-bright-red/20 text-bright-red border border-bright-red/40"
                              : "bg-white/5 text-white/60 border border-white/5"
                          }`}
                        >
                          {item.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 font-mono text-xs text-white/50">
                        <Calendar className="w-3.5 h-3.5 text-white/40" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-syne font-bold text-xl sm:text-2xl text-white group-hover:text-bright-red transition-colors mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="font-space text-sm text-white/70 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    {item.achievements.length > 0 && (
                      <div className="space-y-2 mb-5">
                        {item.achievements.map((ach, achIdx) => (
                          <div key={achIdx} className="flex items-start gap-2.5 text-xs text-white/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-bright-red flex-shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-white/70 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
