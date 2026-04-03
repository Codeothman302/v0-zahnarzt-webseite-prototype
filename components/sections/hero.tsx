"use client";

import { useLanguage } from "@/components/language-context";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Check } from "lucide-react";
import { useState } from "react";

interface HeroProps {
  onOpenModal: () => void;
}

function ExperienceBadge() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg transition-all duration-300 hover:scale-105 sm:-bottom-6 sm:-left-6"
      >
        <p className="text-2xl font-bold text-primary">{t.experienceYears}</p>
        <p className="text-sm text-muted-foreground">{t.experienceLabel}</p>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-4 text-xl font-bold">{t.experienceModalTitle}</h3>

            <p className="mb-4 text-muted-foreground">
              {t.experienceModalText1}
            </p>

            <p className="mb-4 text-muted-foreground">
              {t.experienceModalText2}
            </p>

            <p className="text-muted-foreground">
              {t.experienceModalText3}
            </p>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 w-full rounded-lg bg-primary py-2 text-white"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function Hero({ onOpenModal }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <AnimatedSection className="flex-1 text-center lg:text-left">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t.title1} <span className="text-primary">{t.title2}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
              {t.description}
            </p>

            <ul className="mt-8 flex flex-col gap-3 text-left sm:mx-auto sm:max-w-md lg:mx-0">
              {t.points.map((point: string) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="size-4 text-primary" />
                  </span>
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button
                onClick={onOpenModal}
                size="lg"
                className="h-14 w-full rounded-xl px-8 text-base transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] sm:w-auto"
              >
                {t.heroButton}
              </Button>

              <p className="text-sm text-muted-foreground">
                {t.heroSubtext}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground lg:justify-start">
              <span className="font-medium">{t.happyPatients}</span>
              <span className="text-border">|</span>
              <span>{t.location}</span>
            </div>
          </AnimatedSection>

          <AnimatedSection className="relative flex-1" delay={200}>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-xl transition-shadow duration-300 hover:shadow-2xl lg:aspect-square">
              <Image
                src="/images/dentist-patient.png"
                alt={t.heroImageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>

            <ExperienceBadge />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}