"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Sparkles, ClipboardCheck, Smile, HeartPulse } from "lucide-react";

interface ServicesProps {
  onOpenModal: () => void;
}

const services = [
  {
    icon: HeartPulse,
    title: "Implantate",
    description:
      "Feste Zähne für ein sicheres Lächeln. Dauerhafte Lösungen mit modernster Technik.",
  },
  {
    icon: Sparkles,
    title: "Professionelle Zahnreinigung",
    description:
      "Für ein frisches Gefühl und gesunde Zähne. Prävention auf höchstem Niveau.",
  },
  {
    icon: ClipboardCheck,
    title: "Kieferorthopädie",
    description:
      "Schonende Zahnkorrektur für ein harmonisches und perfektes Lächeln.",
  },
  {
    icon: Smile,
    title: "Ästhetische Zahnmedizin",
    description:
      "Für ein Lächeln, das Sie gerne zeigen. Bleaching, Veneers und mehr.",
  },
];

export function Services({ onOpenModal }: ServicesProps) {
  return (
    <section id="leistungen" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Unsere Leistungen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Umfassende zahnmedizinische Versorgung mit modernster Technologie und persönlicher Betreuung.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={index * 100}>
                <Card className="group h-full border-0 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <CardContent className="pt-6 flex flex-col h-full">

                    <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                      <Icon className="size-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <h3 className="text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    {/* 🔥 HIER SIND DIE NEUEN BUTTONS */}
                    <div className="mt-5 flex flex-col gap-2">

                      <Button
                        variant="outline"
                        className="rounded-xl"
                        onClick={() => {
                          document.getElementById("preise")?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        Mehr erfahren
                      </Button>

                      <Button
                        onClick={onOpenModal}
                        className="rounded-xl"
                      >
                        Termin buchen
                      </Button>

                    </div>

                  </CardContent>

                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={400}>
          <div className="mt-12 text-center">
            <Button
              onClick={onOpenModal}
              size="lg"
              className="rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
            >
              Beratungstermin vereinbaren
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">
              Keine Registrierung erforderlich
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}