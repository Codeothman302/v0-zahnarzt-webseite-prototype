"use client";

import {
  MessageSquare,
  Calendar,
  FileText,
  FolderCheck,
  Smartphone,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";

const features = [
  {
    icon: MessageSquare,
    title: "Digitaler Anfrage-Assistent",
    description: "Ihr Anliegen in wenigen Klicks – ohne Anruf.",
  },
  {
    icon: Calendar,
    title: "Schnelle Terminübersicht",
    description: "Verfügbare Termine auf einen Blick.",
  },
  {
    icon: FileText,
    title: "Rezept-Anfragen ohne Wartezeit",
    description: "Digital und unkompliziert – rund um die Uhr.",
  },
  {
    icon: FolderCheck,
    title: "Strukturierte Patientenanfragen",
    description: "Klare Kategorien für schnelle Bearbeitung.",
  },
  {
    icon: Smartphone,
    title: "Mobile-optimierte Nutzung",
    description: "Jederzeit erreichbar – auch unterwegs.",
  },
];

export function Features() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Warum Zahnzentrum Neckarblick?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Moderne Technologie für ein besseres Patientenerlebnis.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <Card className="group h-full border border-border/50 bg-card shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-md">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                      <Icon className="size-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
