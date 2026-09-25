"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const ringRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  const mousePos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });

  useEffect(() => {
    // Only enable if pointer device supports fine movement
    if (typeof window === "undefined") return;

    let hasMovedOnce = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!hasMovedOnce) {
        hasMovedOnce = true;
        setVisible(true);
        ringPos.current = { x: e.clientX, y: e.clientY };
      }

      mousePos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Check if target or parent is clickable
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = target.closest(
          "a, button, [data-magnetic], input, textarea, select, [role='button']"
        );
        setIsHovering(!!isClickable);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => {
      if (hasMovedOnce) setVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // RAF loop for smooth trailing ring
    let rafId: number;
    const updateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.16;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x.toFixed(
          2
        )}px, ${ringPos.current.y.toFixed(2)}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(updateRing);
    };
    rafId = requestAnimationFrame(updateRing);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[10000] overflow-hidden transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Outer Smooth Trailing Red Aura Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full custom-cursor-ring transition-[width,height,border-color,background-color] duration-150 ease-out will-change-transform ${
          isHovering
            ? "h-14 w-14 border border-bright-red/90 bg-accent-red/20 shadow-[0_0_25px_rgba(224,0,42,0.6)]"
            : isClicking
            ? "h-7 w-7 border-2 border-bright-red bg-accent-red/40 shadow-[0_0_15px_rgba(224,0,42,0.8)]"
            : "h-9 w-9 border border-white/50 bg-white/[0.02] shadow-[0_0_12px_rgba(224,0,42,0.3)]"
        }`}
      />

      {/* Center High-Precision Neon Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 rounded-full transition-[width,height,background-color] duration-75 will-change-transform ${
          isHovering
            ? "h-2 w-2 bg-bright-red shadow-[0_0_10px_#e0002a]"
            : isClicking
            ? "h-2.5 w-2.5 bg-white shadow-[0_0_10px_#ffffff]"
            : "h-1.5 w-1.5 bg-bright-red/80 shadow-[0_0_6px_#e0002a]"
        }`}
      />
    </div>
  );
}
