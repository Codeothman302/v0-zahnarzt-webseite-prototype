"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Check } from "lucide-react";
import { useState } from "react";

interface HeroProps {
  onOpenModal: () => void;
}

const trustPoints = [
  "Moderne, schmerzfreie Behandlung",
  "Keine Wartezeit am Telefon",
  "Auch für Angstpatienten geeignet",
];

function ExperienceBadge() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg transition-all duration-300 hover:scale-105 sm:-bottom-6 sm:-left-6"
      >
        <p className="text-2xl font-bold text-primary">12+</p>
        <p className="text-sm text-muted-foreground">Jahre Erfahrung</p>
      </button>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white max-w-md w-full p-6 rounded-2xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-4">
              Über 12 Jahre Erfahrung
            </h3>

            <p className="text-muted-foreground mb-4">
              In den letzten 12 Jahren haben wir tausende Patienten erfolgreich behandelt – von Vorsorge bis zu komplexen Eingriffen.
            </p>

            <p className="text-muted-foreground mb-4">
              Unser Fokus liegt auf moderner, schmerzfreier Behandlung und einer entspannten Atmosphäre – auch für Angstpatienten.
            </p>

            <p className="text-muted-foreground">
              Durch neueste Technologien und kontinuierliche Weiterbildung garantieren wir höchste Qualität.
            </p>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 w-full bg-primary text-white py-2 rounded-lg"
            >
              Schließen
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">

          {/* Content */}
          <AnimatedSection className="flex-1 text-center lg:text-left">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Ihr Lächeln in{" "}
              <span className="text-primary">besten Händen</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
              Moderne Zahnmedizin mit persönlicher Betreuung. Schnell, digital und unkompliziert – für ein strahlendes Lächeln, das Sie verdienen.
            </p>

            <ul className="mt-8 flex flex-col gap-3 text-left sm:mx-auto sm:max-w-md lg:mx-0">
              {trustPoints.map((point) => (
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
                Termin oder Anliegen starten
              </Button>

              <p className="text-sm text-muted-foreground">
                Dauert weniger als 1 Minute
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground lg:justify-start">
              <span className="font-medium">1000+ zufriedene Patienten</span>
              <span className="text-border">|</span>
              <span>Horb am Neckar</span>
            </div>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection className="relative flex-1" delay={200}>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Marktplatz+1+72160+Horb+am+Neckar+Deutschland"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] lg:aspect-square cursor-pointer">

                <Image
                  src="/images/dentist-patient.png"
                  alt="Zahnarzt behandelt Patientin"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />

                {/* PREMIUM OVERLAY */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

                {/* TEXT OVERLAY */}
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-80">Standort</p>
                  <p className="text-lg font-semibold">
                    Horb am Neckar
                  </p>
                </div>

              </div>
            </a>

            <ExperienceBadge />
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}