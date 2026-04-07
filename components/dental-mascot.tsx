"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

// Premium tooth mascot SVG — clean, modern, medical aesthetic
// Body: rounded tooth silhouette with subtle fill
// Face: two minimal dot eyes + slight smile arc
// Arm: extends to the right, pointing toward CTA button
function ToothMascotSVG({ armAngle }: { armAngle: number }) {
  return (
    <svg
      viewBox="0 0 80 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
    >
      {/* ── Drop shadow filter ── */}
      <defs>
        <filter id="mascot-shadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#2CB1BC" floodOpacity="0.18" />
        </filter>
        <linearGradient id="tooth-fill" x1="40" y1="0" x2="40" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e0f7fa" />
        </linearGradient>
      </defs>

      {/* ── Tooth body ── */}
      <g filter="url(#mascot-shadow)">
        <path
          d="M40 4
             C28 4 18 12 18 22
             C18 28 20 33 21 38
             C22.5 44 22.5 50 23.5 56
             C24.5 63 26.5 72 29.5 72
             C32 72 32.5 67 33.5 63
             C34.5 59 36 56 40 56
             C44 56 45.5 59 46.5 63
             C47.5 67 48 72 50.5 72
             C53.5 72 55.5 63 56.5 56
             C57.5 50 57.5 44 59 38
             C60 33 62 28 62 22
             C62 12 52 4 40 4Z"
          fill="url(#tooth-fill)"
          stroke="#2CB1BC"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Shine streak */}
        <path
          d="M28 12 C29 9 33 7 37 7"
          stroke="#2CB1BC"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* ── Eyes ── */}
      <circle cx="33" cy="28" r="2.5" fill="#2CB1BC" fillOpacity="0.85" />
      <circle cx="47" cy="28" r="2.5" fill="#2CB1BC" fillOpacity="0.85" />

      {/* ── Smile ── */}
      <path
        d="M34 36 C36 39 44 39 46 36"
        stroke="#2CB1BC"
        strokeOpacity="0.7"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── Pointing arm (right side) — rotates via armAngle prop ── */}
      <g
        transform={`translate(58, 30) rotate(${armAngle})`}
        style={{ transformOrigin: "0 0" }}
      >
        {/* Upper arm */}
        <path
          d="M0 0 L14 6"
          stroke="#2CB1BC"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Forearm */}
        <path
          d="M14 6 L22 2"
          stroke="#2CB1BC"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Pointing finger tip */}
        <circle cx="23" cy="1.5" r="2" fill="#2CB1BC" fillOpacity="0.8" />
      </g>
    </svg>
  );
}

export function DentalMascot() {
  const controls = useAnimation();
  const armControls = useAnimation();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loopRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    async function peekCycle() {
      // 1. Slide up smoothly with a slight fade
      await controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      });

      // 2. Quick settle bounce
      await controls.start({
        y: -6,
        transition: { duration: 0.2, ease: "easeOut" },
      });
      await controls.start({
        y: 0,
        transition: { duration: 0.2, ease: "easeInOut" },
      });

      // 3. Arm pointing gesture — subtle oscillation for 5s
      armControls.start({
        rotate: [0, -10, 0, -8, 0],
        transition: { duration: 2.5, ease: "easeInOut", times: [0, 0.2, 0.5, 0.7, 1] },
      });

      // 4. Hold visible for 5s total (accounting for entrance ~0.9s)
      await new Promise((r) => setTimeout(r, 4100));

      // 5. Slide back down
      await controls.start({
        y: "100%",
        opacity: 0,
        transition: { duration: 0.6, ease: [0.55, 0, 0.45, 1] },
      });

      // 6. Schedule next peek in 57s
      loopRef.current = setTimeout(peekCycle, 57000);
    }

    // Initial delay before first appearance
    timerRef.current = setTimeout(peekCycle, 5000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (loopRef.current) clearTimeout(loopRef.current);
    };
  }, [controls, armControls]);

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={controls}
      aria-hidden="true"
      className="pointer-events-none fixed z-40"
      style={{
        bottom: 0,
        // Position just left of the Voiceflow widget (bottom-right area)
        // On desktop: right ~140px so mascot sits ~110px left of widget
        // On mobile: right 80px, slightly smaller
        right: "calc(clamp(76px, 10vw, 140px))",
        width: "clamp(64px, 8vw, 90px)",
        height: "clamp(88px, 11vw, 124px)",
        willChange: "transform, opacity",
      }}
    >
      <motion.div
        animate={armControls}
        style={{ width: "100%", height: "100%", transformOrigin: "50% 70%" }}
      >
        <ToothMascotSVG armAngle={0} />
      </motion.div>
    </motion.div>
  );
}
