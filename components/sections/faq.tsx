"use client";

import { useLanguage } from "@/components/language-context";
import { AnimatedSection } from "@/components/ui/animated-section";

function ToothIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-16 h-16"
      aria-hidden="true"
    >
      {/* Outer tooth shape */}
      <path
        d="M32 6C24 6 18 11 18 18c0 4 1.5 7.5 2 11 .5 3.5.5 7 1 10 .5 3.5 2 9 4 9s2.5-4 3-7c.5-3 1-5 4-5s3.5 2 4 5c.5 3 1 7 3 7s3.5-5.5 4-9c.5-3 .5-6.5 1-10 .5-3.5 2-7 2-11 0-7-6-12-14-12z"
        className="fill-primary/15 stroke-primary"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Shine highlight */}
      <path
        d="M25 14c1-3 4-5 7-5"
        className="stroke-primary/60"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FAQ() {
  const { t } = useLanguage();

  return (
    <section className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">

        <AnimatedSection>
          <div
            className="inline-flex items-center justify-center mb-8 animate-float"
            style={{
              animation: "float 3s ease-in-out infinite",
            }}
          >
            <ToothIcon />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={150}>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance leading-snug">
            {t.faqTitle}
          </h2>
        </AnimatedSection>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}
