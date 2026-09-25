"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Copy, Check, Send, Terminal } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "Programmatic SEO (pSEO)",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-red/30 bg-accent-red/10 text-bright-red font-mono text-xs uppercase tracking-widest mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>INITIALIZE COMMS // DIRECT PROTOCOL</span>
        </div>
        <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
          TRANSMIT <span className="text-bright-red">AN INQUIRY</span>
        </h2>
        <p className="font-space text-sm sm:text-base text-white/60 max-w-2xl">
          Whether you need a high-velocity Programmatic SEO architecture, a Generative AI search audit, or leadership on your core growth platform, initiate transmission below.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT COLUMN: Direct Telemetry Contacts & Social Links */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl glass-panel p-7 border border-white/10 relative overflow-hidden">
            <div className="laser-top-bar" />

            <h3 className="font-syne font-bold text-xl text-white mb-2">
              Direct Frequency
            </h3>
            <p className="font-space text-xs sm:text-sm text-white/60 mb-6 leading-relaxed">
              Available for full-time leadership roles, executive growth advisory, and enterprise search architecture sprints.
            </p>

            <div className="space-y-4 font-mono text-xs">
              {/* Copy Email Box */}
              <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 flex items-center justify-between group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-lg bg-white/5 text-bright-red">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] text-white/40 uppercase">DIRECT EMAIL</div>
                    <div className="text-white text-xs truncate font-medium">{PERSONAL_INFO.email}</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  data-magnetic="true"
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-bright-red text-white text-[11px] transition-colors flex items-center gap-1.5 flex-shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-bright-red">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase">PHONE FREQUENCY</div>
                  <div className="text-white text-xs font-medium">{PERSONAL_INFO.phone}</div>
                </div>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-bright-red">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase">OPERATIONAL BASE</div>
                  <div className="text-white text-xs font-medium">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>

            {/* Magnetic Social Links */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <span className="block font-mono text-[10px] uppercase tracking-wider text-white/40 mb-3">
                VERIFIED CHANNELS
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-magnetic="true"
                  className="p-3 rounded-xl glass-panel hover:bg-white/10 text-white/80 hover:text-bright-red transition-all border border-white/10 hover:border-bright-red/40"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.95 0-1.72.78-1.72 1.73s.77 1.73 1.72 1.73a1.73 1.73 0 0 0 1.73-1.73c0-.95-.78-1.73-1.73-1.73Z" />
                  </svg>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-magnetic="true"
                  className="p-3 rounded-xl glass-panel hover:bg-white/10 text-white/80 hover:text-bright-red transition-all border border-white/10 hover:border-bright-red/40"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  data-magnetic="true"
                  className="p-3 rounded-xl glass-panel hover:bg-white/10 text-white/80 hover:text-bright-red transition-all border border-white/10 hover:border-bright-red/40"
                  aria-label="Direct Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Cybernetic Contact Form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl glass-panel p-7 sm:p-9 border border-white/10 relative">
            <div className="laser-top-bar" />

            <h3 className="font-syne font-bold text-xl sm:text-2xl text-white mb-2">
              Transmission Terminal
            </h3>
            <p className="font-space text-xs sm:text-sm text-white/60 mb-8">
              Fill in your specifications to initiate a response within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-accent-red/20 border border-bright-red/40 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-bright-red/20 border border-bright-red flex items-center justify-center mx-auto text-bright-red">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-syne font-bold text-xl text-white">TRANSMISSION RECEIVED</h4>
                <p className="font-space text-xs text-white/70 max-w-sm mx-auto">
                  Your message packet has been routed to Ramavath Venkatesh. A response will be dispatched to your coordinates shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-2">
                      NAME / CODENAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-white/25 focus:border-bright-red focus:outline-none transition-colors text-sm font-space"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-2">
                      ORGANIZATION / BRAND
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="e.g. HyperScale Inc."
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-white/25 focus:border-bright-red focus:outline-none transition-colors text-sm font-space"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-2">
                      EMAIL COORDINATES
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@hyperscale.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-white/25 focus:border-bright-red focus:outline-none transition-colors text-sm font-space"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-2">
                      DEPLOYMENT ARCHITECTURE
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/80 border border-white/10 text-white focus:border-bright-red focus:outline-none transition-colors text-sm font-space"
                    >
                      <option value="Programmatic SEO (pSEO)">Programmatic SEO (10K+ Pages)</option>
                      <option value="Generative Engine Opt (GEO)">Generative Engine Opt (GEO / AEO)</option>
                      <option value="Technical SEO & CWV">Technical SEO & Core Web Vitals</option>
                      <option value="App Store Optimization (ASO)">App Store Optimization (ASO)</option>
                      <option value="Full-Time Growth Leadership">Full-Time Growth Leadership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-white/60 mb-2">
                    PROJECT MISSION & SCOPE
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your current search bottlenecks, growth targets, or timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-white/25 focus:border-bright-red focus:outline-none transition-colors text-sm font-space resize-none"
                  />
                </div>

                <button
                  type="submit"
                  data-magnetic="true"
                  className="w-full py-3.5 rounded-xl bg-bright-red hover:bg-bright-red/90 text-white font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_25px_rgba(224,0,42,0.4)] hover:shadow-[0_0_35px_rgba(224,0,42,0.7)]"
                >
                  <Send className="w-4 h-4" />
                  <span>DISPATCH TRANSMISSION</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
