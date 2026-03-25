"use client";

import { Button } from "@/components/ui/button";
import { Shield, Clock, UserCheck } from "lucide-react";

interface CTABannerProps {
  onOpenModal: () => void;
}

const trustPoints = [
  { icon: Clock, text: "In unter 1 Minute erledigt" },
  { icon: UserCheck, text: "Ohne Registrierung" },
  { icon: Shield, text: "Sicher & vertraulich" },
];

export function CTABanner({ onOpenModal }: CTABannerProps) {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          Schnell & unkompliziert
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
          Ihr Anliegen in wenigen Klicks – starten Sie jetzt.
        </p>

        <Button
          onClick={onOpenModal}
          size="lg"
          variant="secondary"
          className="mt-8 h-14 rounded-xl px-8 text-base"
        >
          Termin oder Anliegen starten
        </Button>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/80">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.text} className="flex items-center gap-2">
                <Icon className="size-4" />
                <span>{point.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
