"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ClipboardCheck, Smile, HeartPulse } from "lucide-react";

interface ServicesProps {
  onOpenModal: () => void;
}

const services = [
  {
    icon: HeartPulse,
    title: "Implantate",
    description:
      "Hochwertige Zahnimplantate für ein natürliches Lächeln. Dauerhafte Lösungen mit modernster Technik.",
  },
  {
    icon: Sparkles,
    title: "Professionelle Zahnreinigung",
    description:
      "Gründliche Reinigung für gesunde Zähne und frischen Atem. Prävention auf höchstem Niveau.",
  },
  {
    icon: ClipboardCheck,
    title: "Kieferorthopädie",
    description:
      "Schonende Zahnkorrektur für alle Altersgruppen. Diskrete Lösungen für perfekt ausgerichtete Zähne.",
  },
  {
    icon: Smile,
    title: "Ästhetische Zahnmedizin",
    description:
      "Bleaching, Veneers und mehr. Ihr Weg zum strahlenden Lächeln mit individueller Beratung.",
  },
];

export function Services({ onOpenModal }: ServicesProps) {
  return (
    <section id="leistungen" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Unsere Leistungen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Umfassende zahnmedizinische Versorgung mit modernster Technologie und persönlicher Betreuung.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group border-0 bg-background shadow-sm transition-all hover:shadow-md"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button onClick={onOpenModal} size="lg" className="rounded-xl">
            Beratungstermin vereinbaren
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            Keine Registrierung erforderlich
          </p>
        </div>
      </div>
    </section>
  );
}
