"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Wrench } from "lucide-react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-red/30 bg-accent-red/10 text-bright-red font-mono text-xs uppercase tracking-widest mb-4">
          <Wrench className="w-3.5 h-3.5" />
          <span>TECHNICAL ARSENAL & STACK</span>
        </div>
        <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
          CATEGORIZED <span className="text-bright-red">CAPABILITIES</span>
        </h2>
        <p className="font-space text-sm sm:text-base text-white/60 max-w-2xl">
          A full-stack capability spectrum spanning computer engineering, Python scripting, schema microdata, crawl budget forensics, and LLM entity optimization.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mt-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isSelected = activeCategory === idx;
            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(idx)}
                data-magnetic="true"
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  isSelected
                    ? "bg-bright-red text-white shadow-[0_0_20px_rgba(224,0,42,0.4)] font-semibold"
                    : "glass-panel text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                {cat.category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Matrix Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES[activeCategory].skills.map((skill) => (
            <div
              key={skill.name}
              className="relative rounded-xl glass-panel p-5 border border-white/10 hover:border-bright-red/40 transition-all duration-300 group hover:shadow-[0_0_25px_-5px_rgba(224,0,42,0.2)]"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-syne font-bold text-base text-white group-hover:text-bright-red transition-colors">
                  {skill.name}
                </h3>
                <span className="font-mono text-xs text-bright-red font-semibold">
                  {skill.level}%
                </span>
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-white/5 text-white/60 border border-white/5">
                  {skill.tag}
                </span>
                <span className="font-mono text-[10px] text-white/40">CALIBRATED</span>
              </div>

              {/* Progress Level Bar */}
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent-red to-bright-red transition-all duration-700 group-hover:shadow-[0_0_10px_#e0002a]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
