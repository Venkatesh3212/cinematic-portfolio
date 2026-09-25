"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { CERTIFICATIONS, Certification } from "@/data/portfolioData";
import { ShieldCheck, Copy, Check, Play, Pause, Award, X } from "lucide-react";

export default function Certifications() {
  const [radius, setRadius] = useState(480);
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [autoSpin, setAutoSpin] = useState(true);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [copiedHash, setCopiedHash] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const angleRef = useRef(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const autoSpinRef = useRef(true);
  const dragStartRef = useRef({ x: 0, angle: 0, time: 0 });
  const pointerHistoryRef = useRef<{ x: number; time: number }[]>([]);

  const N = CERTIFICATIONS.length;
  const step = 360 / N;

  // Responsive radius R: 480px (desktop), 380px (tablet), 275px (mobile)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setRadius(275);
      } else if (width < 1024) {
        setRadius(380);
      } else {
        setRadius(480);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sync autoSpin state to ref
  useEffect(() => {
    autoSpinRef.current = autoSpin;
  }, [autoSpin]);

  // Pointer drag physics and inertia RAF loop
  useEffect(() => {
    let rafId: number;

    const tick = () => {
      if (!isDraggingRef.current) {
        // Friction damping decay: 0.945 factor until idle
        if (Math.abs(velocityRef.current) > 0.005) {
          angleRef.current += velocityRef.current;
          velocityRef.current *= 0.945;
          setAngle(angleRef.current);
        } else {
          velocityRef.current = 0;
          // Gentle auto-spin (0.06°/frame) resumes when idle
          if (autoSpinRef.current) {
            angleRef.current += 0.06;
            setAngle(angleRef.current);
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Pointer event handlers with unified Pointer Events & setPointerCapture
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    velocityRef.current = 0;
    dragStartRef.current = {
      x: e.clientX,
      angle: angleRef.current,
      time: performance.now(),
    };
    pointerHistoryRef.current = [{ x: e.clientX, time: performance.now() }];
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - dragStartRef.current.x;
    // Drag sensitivity: scale to degree rotation
    const degDelta = deltaX * 0.28;
    angleRef.current = dragStartRef.current.angle + degDelta;
    setAngle(angleRef.current);

    const now = performance.now();
    pointerHistoryRef.current.push({ x: e.clientX, time: now });
    // Keep only movements in the last 120ms for throw velocity estimation
    if (pointerHistoryRef.current.length > 6) {
      pointerHistoryRef.current.shift();
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    const history = pointerHistoryRef.current;
    if (history.length >= 2) {
      const first = history[0];
      const last = history[history.length - 1];
      const dt = last.time - first.time;
      const dx = last.x - first.x;
      if (dt > 10) {
        // Multi-sample velocity tracking across recent movements
        const pxPerMs = dx / dt;
        velocityRef.current = pxPerMs * 4.5;
        // Clamp maximum throw velocity
        velocityRef.current = Math.max(-4.5, Math.min(4.5, velocityRef.current));
      }
    }
  };

  // Spin any card directly to center front using shortest rotational delta
  const rotateCardToFront = useCallback(
    (index: number) => {
      const cardAngle = index * step;
      // Target cylinder angle so cardAngle + targetAngle = 0 (mod 360)
      const targetBase = -cardAngle;
      const current = angleRef.current;
      // Calculate shortest delta
      let delta = (targetBase - current) % 360;
      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;

      // Smoothly accelerate cylinder towards target
      velocityRef.current = delta * 0.12;
      setAutoSpin(false);
    },
    [step]
  );

  // Compute normalized front index (0..N-1)
  const normalizedAngle = ((-angle % 360) + 360) % 360;
  const frontIndex = Math.round(normalizedAngle / step) % N;

  const handleCardClick = (cert: Certification, index: number) => {
    // Check if this card is currently near center front
    const rawCardAngle = (index * step + angle) % 360;
    const normalizedPhi = ((rawCardAngle + 180) % 360) - 180;

    if (Math.abs(normalizedPhi) < 25) {
      // Open cybernetic verification modal
      setSelectedCert(cert);
    } else {
      // Rotate this card to front
      rotateCardToFront(index);
    }
  };

  const copyHashToClipboard = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <section id="certifications" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-red/30 bg-accent-red/10 text-bright-red font-mono text-xs uppercase tracking-widest mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>CYBERNETIC CREDENTIAL MATRIX</span>
        </div>
        <h2 className="font-oswald text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white mb-4">
          VERIFIED <span className="text-bright-red">CERTIFICATIONS</span>
        </h2>
        <p className="font-space text-sm sm:text-base text-white/60 max-w-2xl mx-auto">
          Drag horizontally to inspect accredited technical credentials. Click any card to align center front, or tap the front credential to run cryptographic hash verification.
        </p>
      </div>

      {/* 3D DRAGGABLE CYLINDER STAGE */}
      <div className="relative w-full h-[520px] sm:h-[560px] flex items-center justify-center select-none">
        {/* Pointer Capture Interaction Surface */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`absolute inset-0 z-20 touch-pan-y ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ perspective: "1200px" }}
        >
          {/* CRITICAL 3D CAMERA PULL-BACK TECHNIQUE:
              Place cylinder at translateZ(-R) rotateY(angle deg).
              Each card is at translate(-50%, -50%) rotateY(i * step) translateZ(R).
              Ensures front card sits at Z = -R + R = 0 (exact scale 1.0)! */}
          <div
            className="absolute top-1/2 left-1/2 w-0 h-0 will-change-transform"
            style={{
              transformStyle: "preserve-3d",
              transform: `translateZ(-${radius}px) rotateY(${angle}deg)`,
            }}
          >
            {CERTIFICATIONS.map((cert, i) => {
              const cardAngle = i * step;
              // Angle relative to camera
              const phi = ((cardAngle + angle) % 360 + 360) % 360;
              const radPhi = (phi * Math.PI) / 180;
              const cosPhi = Math.cos(radPhi);

              // Backface culling: hide cards facing backwards
              const isFacingBack = cosPhi < -0.15;
              const isCenterFront = cosPhi > 0.92;

              return (
                <div
                  key={cert.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(cert, i);
                  }}
                  className={`absolute top-0 left-0 w-[280px] sm:w-[320px] h-[380px] sm:h-[420px] rounded-2xl glass-panel p-6 flex flex-col justify-between transition-opacity duration-300 pointer-events-auto will-change-transform ${
                    isFacingBack ? "opacity-0 pointer-events-none" : "opacity-100"
                  } ${
                    isCenterFront
                      ? "border-bright-red/50 shadow-[0_0_40px_-5px_rgba(224,0,42,0.4)]"
                      : "border-white/10 hover:border-white/20"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: `translate(-50%, -50%) rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                  }}
                >
                  {/* Brand Laser Top Beam */}
                  <div
                    className="laser-top-bar"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${cert.accentColor}, transparent)`,
                      boxShadow: `0 0 14px ${cert.accentColor}`,
                    }}
                  />

                  {/* Card Header: Issuer & Monospace Credential ID */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-white/70">
                        {cert.issuer}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-[10px] text-bright-red">
                        <span className="w-1.5 h-1.5 rounded-full bg-bright-red animate-pulse" />
                        {cert.credentialId}
                      </span>
                    </div>

                    <h3 className="font-syne font-bold text-lg sm:text-xl text-white leading-snug mb-2 group-hover:text-bright-red transition-colors">
                      {cert.title}
                    </h3>

                    <p className="font-space text-xs text-white/60 line-clamp-3 leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>

                  {/* Card Competencies */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cert.competencies.slice(0, 3).map((comp) => (
                        <span
                          key={comp}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-white/80 border border-white/5"
                        >
                          {comp}
                        </span>
                      ))}
                      {cert.competencies.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-white/40">
                          +{cert.competencies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Card Footer: Hash preview & Verification Callout */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="font-mono text-[10px] text-white/40 truncate max-w-[150px]">
                        {cert.hash.slice(0, 16)}...
                      </span>

                      <button
                        type="button"
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-bright-red hover:text-white transition-colors"
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{isCenterFront ? "VERIFY" : "ALIGN"}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CONTROLS: Auto-Spin Toggle & Clickable Pagination Dots */}
      <div className="relative z-20 flex flex-col items-center gap-5 mt-6">
        {/* Clickable Pagination Dots */}
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-white/10">
          {CERTIFICATIONS.map((cert, idx) => (
            <button
              key={cert.id}
              onClick={() => rotateCardToFront(idx)}
              title={cert.title}
              className={`transition-all duration-300 rounded-full ${
                frontIndex === idx
                  ? "w-8 h-2 bg-bright-red shadow-[0_0_10px_#e0002a]"
                  : "w-2 h-2 bg-white/20 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Auto-Spin Toggle Button */}
        <button
          onClick={() => setAutoSpin((prev) => !prev)}
          data-magnetic="true"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 glass-panel font-mono text-xs uppercase tracking-wider text-white/70 hover:text-white hover:border-bright-red/50 transition-colors"
        >
          {autoSpin ? (
            <>
              <Pause className="w-3.5 h-3.5 text-bright-red" />
              <span>AUTO-SPIN [ACTIVE]</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-white/60" />
              <span>AUTO-SPIN [PAUSED]</span>
            </>
          )}
        </button>
      </div>

      {/* CYBERNETIC VERIFICATION MODAL */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl glass-panel-glow p-7 border border-bright-red/40 bg-[#090909]/95 text-left animate-scale-up"
          >
            {/* Laser Top Beam */}
            <div className="laser-top-bar" />

            {/* Modal Header */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-accent-red/20 text-bright-red border border-bright-red/30 mb-2">
                  <ShieldCheck className="w-3 h-3" />
                  <span>ON-CHAIN VERIFIED RECORD</span>
                </div>
                <h3 className="font-syne font-bold text-2xl text-white leading-tight">
                  {selectedCert.title}
                </h3>
                <p className="font-mono text-xs text-white/60 mt-1">
                  Issued by <span className="text-white font-semibold">{selectedCert.issuer}</span> • Verified {selectedCert.issueDate}
                </p>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Security Hash Box */}
            <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 font-mono mb-5">
              <div className="flex items-center justify-between text-[11px] text-white/50 mb-1.5">
                <span>CRYPTOGRAPHIC VERIFICATION HASH</span>
                <button
                  onClick={() => copyHashToClipboard(selectedCert.hash)}
                  className="inline-flex items-center gap-1 text-bright-red hover:underline"
                >
                  {copiedHash ? (
                    <>
                      <Check className="w-3 h-3" /> COPIED
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> COPY
                    </>
                  )}
                </button>
              </div>
              <div className="text-xs text-white break-all select-all font-mono">
                {selectedCert.hash}
              </div>
            </div>

            {/* Competencies Checklist */}
            <div className="mb-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-white/50 mb-2.5">
                AUTHENTICATED COMPETENCIES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedCert.competencies.map((comp) => (
                  <div
                    key={comp}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-xs text-white/90"
                  >
                    <Check className="w-3.5 h-3.5 text-bright-red flex-shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Close CTA */}
            <div className="flex justify-end gap-3 pt-3 border-t border-white/10">
              <button
                onClick={() => setSelectedCert(null)}
                data-magnetic="true"
                className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider transition-colors"
              >
                DISMISS
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
