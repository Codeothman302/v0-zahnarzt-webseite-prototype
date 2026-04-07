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

      {/* ── Pointing arm (right side) — pivot at shoulder on tooth body ── */}
      <g transform={`translate(58, 28) rotate(${armAngle})`}>
        {/* Shoulder cap — rounded blob connecting to tooth body */}
        <ellipse cx="0" cy="0" rx="5" ry="4.5" fill="#e0f7fa" stroke="#2CB1BC" strokeWidth="1.5" />

        {/* Upper arm — tapered filled shape, wider at shoulder narrower at elbow */}
        <path
          d="M-2 -1 C 0 -3, 10 -1, 11 2 C 10 5, 0 4, -2 2 Z"
          fill="#e0f7fa"
          stroke="#2CB1BC"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Elbow joint — small circle for definition */}
        <circle cx="11" cy="2" r="3" fill="#e0f7fa" stroke="#2CB1BC" strokeWidth="1.2" />

        {/* Forearm — tapers from elbow toward wrist, slight upward angle */}
        <path
          d="M9 -1 C 12 -4, 20 -5, 22 -4 C 22 -2, 12 1, 10 3 Z"
          fill="#e0f7fa"
          stroke="#2CB1BC"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Wrist bump */}
        <ellipse cx="22" cy="-3" rx="2.5" ry="3" fill="#e0f7fa" stroke="#2CB1BC" strokeWidth="1.2" />

        {/* Hand palm */}
        <path
          d="M20 -6 C 21 -8, 25 -8, 26 -6 C 27 -4, 26 -1, 24 -1 C 22 -1, 20 -3, 20 -6 Z"
          fill="#d0f0f5"
          stroke="#2CB1BC"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Index finger — extended, pointing right */}
        <path
          d="M25 -7 C 26 -9, 30 -9, 32 -8 C 33 -7, 33 -5, 31 -5 C 29 -5, 25 -5, 24 -6 Z"
          fill="#e0f7fa"
          stroke="#2CB1BC"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        {/* Fingertip highlight */}
        <ellipse cx="32" cy="-6.5" rx="1.2" ry="1.5" fill="#2CB1BC" fillOpacity="0.25" />

        {/* Middle finger — slightly curled behind index */}
        <path
          d="M24 -4 C 25 -6, 28 -6, 29 -5 C 29 -3, 27 -2, 25 -2 Z"
          fill="#d0f0f5"
          stroke="#2CB1BC"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* Ring + pinky — tucked as a small rounded bump */}
        <path
          d="M22 -2 C 23 -4, 26 -4, 26 -2 C 26 0, 23 1, 22 0 Z"
          fill="#d0f0f5"
          stroke="#2CB1BC"
          strokeWidth="1"
          strokeLinejoin="round"
        />

        {/* Thumb — short, angled downward from palm base */}
        <path
          d="M20 -3 C 19 -5, 18 -6, 19 -7 C 20 -8, 22 -7, 21 -5 Z"
          fill="#e0f7fa"
          stroke="#2CB1BC"
          strokeWidth="1"
          strokeLinejoin="round"
        />
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
