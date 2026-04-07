"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useLanguage } from "@/components/language-context";
import { AnimatedSection } from "@/components/ui/animated-section";

// Minimal, premium tooth silhouette for the peek character
function PeekTooth() {
  return (
    <svg
      viewBox="0 0 48 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-12 h-14"
      aria-hidden="true"
    >
      {/* Tooth body */}
      <path
        d="M24 3C16.5 3 11 8 11 15c0 3.5 1.2 6.5 1.7 9.5.5 3 .4 6 .9 9 .5 3.5 1.8 8 3.6 8 1.6 0 2-3.5 2.4-6 .4-2.5.9-4.5 4.4-4.5s4 2 4.4 4.5c.4 2.5.8 6 2.4 6 1.8 0 3.1-4.5 3.6-8 .5-3 .4-6 .9-9 .5-3 1.7-6 1.7-9.5C37 8 31.5 3 24 3z"
        fill="var(--primary)"
        fillOpacity="0.12"
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Shine */}
      <path
        d="M18.5 10c.8-2.5 3-4 5.5-4"
        stroke="var(--primary)"
        strokeOpacity="0.5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Two tiny eyes */}
      <circle cx="19.5" cy="17" r="1.5" fill="var(--primary)" fillOpacity="0.7" />
      <circle cx="28.5" cy="17" r="1.5" fill="var(--primary)" fillOpacity="0.7" />
      {/* Subtle smile arc */}
      <path
        d="M20 22.5c1 1.5 2.5 2 4 2s3-.5 4-2"
        stroke="var(--primary)"
        strokeOpacity="0.6"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FloatingToothIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-16 h-16"
      aria-hidden="true"
    >
      <path
        d="M32 6C24 6 18 11 18 18c0 4 1.5 7.5 2 11 .5 3.5.5 7 1 10 .5 3.5 2 9 4 9s2.5-4 3-7c.5-3 1-5 4-5s3.5 2 4 5c.5 3 1 7 3 7s3.5-5.5 4-9c.5-3 .5-6.5 1-10 .5-3.5 2-7 2-11 0-7-6-12-14-12z"
        fill="var(--primary)"
        fillOpacity="0.12"
        stroke="var(--primary)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M25 14c1-3 4-5 7-5"
        stroke="var(--primary)"
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PeekCharacter() {
  const controls = useAnimation();
  const hasStarted = useRef(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    async function peekCycle() {
      // Slide up (peek)
      await controls.start({
        y: 0,
        rotate: -3,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      });

      // Tiny settle bounce
      await controls.start({
        y: -4,
        rotate: 2,
        transition: { duration: 0.25, ease: "easeOut" },
      });
      await controls.start({
        y: 0,
        rotate: 0,
        transition: { duration: 0.25, ease: "easeInOut" },
      });

      // Hold visible for 1.6s
      await new Promise((r) => setTimeout(r, 1600));

      // Slide back down
      await controls.start({
        y: "100%",
        rotate: 0,
        transition: { duration: 0.65, ease: [0.55, 0, 0.45, 1] },
      });

      // Wait ~57s then repeat
      timer = setTimeout(peekCycle, 57000);
    }

    // Initial delay of 4s before first peek
    timer = setTimeout(() => {
      hasStarted.current = true;
      peekCycle();
    }, 4000);

    return () => clearTimeout(timer);
  }, [controls]);

  return (
    <div
      className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden"
      style={{ width: 56, height: 60 }}
      aria-hidden="true"
    >
      <motion.div
        initial={{ y: "100%", rotate: 0 }}
        animate={controls}
        className="flex items-end justify-center w-full h-full"
        style={{ willChange: "transform" }}
      >
        <PeekTooth />
      </motion.div>
    </div>
  );
}

export function FAQ() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-card py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">

        <AnimatedSection>
          <div
            className="inline-flex items-center justify-center mb-8"
            style={{ animation: "faqFloat 3s ease-in-out infinite" }}
          >
            <FloatingToothIcon />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance leading-snug">
            {t.faqTitle}
          </h2>
        </AnimatedSection>

      </div>

      {/* Peek character — bottom center */}
      <PeekCharacter />

      <style>{`
        @keyframes faqFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
