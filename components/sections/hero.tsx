"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

const trustPoints = [
  "Moderne, schmerzfreie Behandlung",
  "Keine Wartezeit am Telefon",
  "Auch für Angstpatienten geeignet",
];

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
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
                className="h-14 w-full rounded-xl px-8 text-base sm:w-auto"
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
          </div>

          {/* Image */}
          <div className="relative flex-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-xl lg:aspect-square">
              <Image
                src="/images/hero-clinic.jpg"
                alt="Moderne Zahnarztpraxis Zahnzentrum Neckarblick"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-card p-4 shadow-lg sm:-bottom-6 sm:-left-6">
              <p className="text-2xl font-bold text-primary">12+</p>
              <p className="text-sm text-muted-foreground">Jahre Erfahrung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
