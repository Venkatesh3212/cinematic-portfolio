"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CinematicVideo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  // Parallax tilt targets and current LERP values
  const tiltTarget = useRef({ dx: 0, dy: 0 });
  const tiltCurrent = useRef({ dx: 0, dy: 0 });

  // Scroll and scrub LERP values
  const scrollTarget = useRef(0);
  const scrollCurrent = useRef(0);

  const [scrollPct, setScrollPct] = useState(0);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    // 1. Mouse movement tracking for 3D parallax tilt & cursor spotlight
    const onMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xp = (e.clientX / innerWidth) * 100;
      const yp = (e.clientY / innerHeight) * 100;

      // Update dynamic spotlight CSS variables for #cine-glow
      document.documentElement.style.setProperty("--xp", `${xp.toFixed(1)}%`);
      document.documentElement.style.setProperty("--yp", `${yp.toFixed(1)}%`);

      // Normalized coordinates (-1 to 1) for 3D tilt
      const dx = (e.clientX / innerWidth - 0.5) * 2;
      const dy = (e.clientY / innerHeight - 0.5) * 2;
      tiltTarget.current = { dx, dy };
    };

    // 2. Scroll progress tracking
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.max(0, Math.min(1, scrollY / docHeight)) : 0;
      scrollTarget.current = progress;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    // 3. RequestAnimationFrame loop for butter-smooth LERP interpolation
    let rafId: number;
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    const loop = (now: number) => {
      frameCount++;
      if (now - lastFpsUpdate >= 500) {
        const calculatedFps = Math.round((frameCount * 1000) / (now - lastFpsUpdate));
        setFps(Math.min(60, calculatedFps));
        setScrollPct(Math.round(scrollCurrent.current * 100));
        frameCount = 0;
        lastFpsUpdate = now;
      }

      // Smooth LERP scroll scrub
      scrollCurrent.current += (scrollTarget.current - scrollCurrent.current) * 0.10;

      // Smooth LERP 3D parallax tilt
      tiltCurrent.current.dx += (tiltTarget.current.dx - tiltCurrent.current.dx) * 0.08;
      tiltCurrent.current.dy += (tiltTarget.current.dy - tiltCurrent.current.dy) * 0.08;

      const { dx, dy } = tiltCurrent.current;
      const p = scrollCurrent.current;

      // Subtle dynamic scale push-in (1.02 -> 1.15) and vertical framing
      const dynamicScale = 1.02 + p * 0.13;
      const panY = p * -30;

      if (containerRef.current) {
        containerRef.current.style.transform = `scale(${dynamicScale.toFixed(4)}) translate3d(${(
          dx * -16
        ).toFixed(2)}px, ${(dy * -16 + panY).toFixed(2)}px, 0) rotateX(${(dy * -2.2).toFixed(
          2
        )}deg) rotateY(${(dx * 2.2).toFixed(2)}deg)`;
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden bg-bg">
      {/* 3D Parallax Image Container */}
      <div
        ref={containerRef}
        className="relative w-full h-full will-change-transform transition-transform duration-75 ease-out"
        style={{ transformOrigin: "center 45%" }}
      >
        {/* Confident Cinematic Editorial Portrait (Chest-up, Sunglasses, Black Suit, Red Rim Light) */}
        <Image
          src="/images/cinematic_closeup.jpg"
          alt="Ramavath Venkatesh — Cinematic Hero"
          fill
          priority
          quality={95}
          className="object-cover object-center filter contrast-[1.12] brightness-[0.95]"
          sizes="100vw"
        />
      </div>

      {/* Layered Cinematic Overlays as per Master Prompt Spec */}
      <div className="cine-vignette" aria-hidden="true" />
      <div ref={glowRef} id="cine-glow" className="cine-glow" aria-hidden="true" />
      <div className="cine-scan" aria-hidden="true" />
      <div className="cine-grain" aria-hidden="true" />

      {/* Cybernetic Engine HUD Telemetry (Faint Bottom Left) */}
      <div className="fixed bottom-4 left-6 z-20 hidden md:flex items-center gap-3 font-mono text-[10px] tracking-wider text-white/30 uppercase pointer-events-none">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-bright-red animate-pulse" />
        <span>CINEMATIC ENGINE v2.4</span>
        <span className="text-white/15">|</span>
        <span>SCRUB: {scrollPct}%</span>
        <span className="text-white/15">|</span>
        <span>FPS: {fps}</span>
        <span className="text-white/15">|</span>
        <span>3D PARALLAX: ACTIVE</span>
      </div>
    </div>
  );
}
