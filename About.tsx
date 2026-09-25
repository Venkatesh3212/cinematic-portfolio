"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Terminal, Cpu, Activity, Database, CheckCircle2, Zap } from "lucide-react";

const PILLARS = [
  {
    title: "Programmatic SEO Platforms",
    badge: "Scale 10,000+ URLs",
    description: "Architecting automated database-driven category and landing page systems that target millions in long-tail search demand without thin-content penalties.",
    metrics: "10,000+ Pages Indexed | 130K Traffic in 90D",
    icon: Database,
  },
  {
    title: "Generative Engine Optimization (GEO/AEO)",
    badge: "AI Search Retrieval",
    description: "Restructuring brand digital footprints, /llms.txt manifests, and Wikidata entity nodes so ChatGPT, Gemini, and Perplexity actively cite and recommend your brand.",
    metrics: "Entity Knowledge Graph | AI Overviews Citations",
    icon: Cpu,
  },
  {
    title: "Technical Platform SEO & Core Web Vitals",
    badge: "Sub-Second LCP",
    description: "Diagnosing server logs, resolving JavaScript rendering discrepancies (SSR vs CSR), and eliminating duplicate facet URL traps on massive e-commerce architectures.",
    metrics: "90+ CWV Score | 40% Speed Optimization",
    icon: Activity,
  },
  {
    title: "Global App Store Optimization (ASO)",
    badge: "iOS & Android",
    description: "Executing scientific store listing experiments across India, the US, and Brazil. Synchronizing Apple Search Ads (ASA) with organic keyword velocity.",
    metrics: "20+ A/B Tests | +34% Conversion Lift",
    icon: Zap,
  },
];

export default function About() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-red/30 bg-accent-red/10 text-bright-red font-mono text-xs uppercase tracking-widest mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>SYSTEM_INSPECTION // CANDIDATE_PROFILE</span>
        </div>
        <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
          CYBER-INSPECTION <span className="text-bright-red">& CORE CAPABILITIES</span>
        </h2>
        <p className="font-space text-sm sm:text-base text-white/60 max-w-2xl">
          An engineer by training (B.Tech IT), a growth architect by trade. Operating at the exact intersection of platform code, crawler mechanics, and generative retrieval algorithms.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Terminal Window with Candidate Data & Visual Inspection */}
        <div className="lg:col-span-5 rounded-2xl glass-panel-glow border border-white/10 overflow-hidden relative">
          <div className="laser-top-bar" />

          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-black/60 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="font-mono text-[11px] text-white/40 tracking-wider">
              bash - venkatesh@growth-station:~
            </span>
            <div className="w-10" />
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-xs text-white/80 space-y-4">
            <div className="flex items-center gap-2 text-bright-red">
              <span>root@venkatesh:~$</span>
              <span className="text-white font-semibold">sysctl --get-profile --comprehensive</span>
            </div>

            <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-2">
              <div className="flex justify-between">
                <span className="text-white/40">NAME:</span>
                <span className="text-white font-semibold">{PERSONAL_INFO.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">CURRENT:</span>
                <span className="text-bright-red font-semibold">Lead SEO & Growth @ GIVA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">EDUCATION:</span>
                <span className="text-white/90">B.Tech Information Technology</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">SPECIALTY:</span>
                <span className="text-white/90">Programmatic SEO, GEO & Core Web Vitals</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">STATUS:</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE FOR STRATEGIC ENGAGEMENTS
                </span>
              </div>
            </div>

            {/* Candidate Photo / Hologram Preview */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 group mt-4 h-64">
              <Image
                src="/images/venkatesh.png"
                alt="Ramavath Venkatesh"
                fill
                className="object-cover object-top filter contrast-[1.08] grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/80">
                <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                  REF: CANDIDATE_01
                </span>
                <span className="text-bright-red">BENGALURU, INDIA</span>
              </div>
            </div>

            <p className="font-space text-xs text-white/70 leading-relaxed pt-2">
              &quot;Search is no longer just keywords and backlinks; it is a complex data engineering problem governed by semantic vector spaces, entity confidence scores, and real-user runtime performance.&quot;
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Strategic Capabilities Matrix */}
        <div className="lg:col-span-7 space-y-4">
          <div className="p-4 rounded-xl glass-panel border border-white/10 mb-4">
            <span className="font-mono text-xs uppercase tracking-wider text-bright-red">
              CORE STRATEGIC STRENGTHS
            </span>
            <p className="font-space text-sm text-white/80 mt-1">
              Select any capability module to inspect deployment mechanics and impact metrics.
            </p>
          </div>

          <div className="space-y-3">
            {PILLARS.map((pillar, idx) => {
              const isSelected = activePillar === idx;
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  onClick={() => setActivePillar(idx)}
                  className={`cursor-pointer rounded-2xl glass-panel p-6 border transition-all duration-300 ${
                    isSelected
                      ? "border-bright-red/50 bg-[#0e0709] shadow-[0_0_25px_rgba(224,0,42,0.2)]"
                      : "border-white/10 hover:border-white/20 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`p-2.5 rounded-xl transition-colors ${
                          isSelected
                            ? "bg-bright-red text-white shadow-[0_0_15px_#e0002a]"
                            : "bg-white/5 text-white/60"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-syne font-bold text-lg text-white">
                            {pillar.title}
                          </h3>
                        </div>
                        <p className="font-space text-sm text-white/70 leading-relaxed mb-3">
                          {pillar.description}
                        </p>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/5 font-mono text-xs text-bright-red">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{pillar.metrics}</span>
                        </div>
                      </div>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-white/60 whitespace-nowrap">
                      {pillar.badge}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
