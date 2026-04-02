"use client";

import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

interface PricingProps {
  onOpenModal: () => void;
}

const plans = [
  {
    name: "Zahnreinigung",
    subtitle: "Gönnen Sie Ihren Zähnen etwas Frische ✨",
    price: "80–150 €",
    note: "",
    features: [
      "Gründliche Reinigung",
      "Frischer Atem",
      "Vorbeugung gegen Karies",
      "Gesunde Zähne langfristig",
    ],
    highlighted: true,
  },
  {
    name: "Implantate",
    subtitle: "Wieder fest zubeißen können 💪",
    price: "ab 2.000 €",
    note: "",
    features: [
      "Feste Zähne wie echte",
      "Langlebige Lösung",
      "Mehr Lebensqualität",
      "Individuelle Planung",
    ],
    highlighted: true,
  },
  {
    name: "Bleaching",
    subtitle: "Ein Lächeln, das auffällt 😁",
    price: "ab 250 €",
    note: "",
    features: [
      "Strahlend weiße Zähne",
      "Schnelle Behandlung",
      "Sichtbare Ergebnisse",
      "Schonende Methode",
    ],
    highlighted: true,
  },
];

export function Pricing({ onOpenModal }: PricingProps) {
  return (
    <section id="preise" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Preise & Behandlungen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Wir informieren Sie transparent vor jeder Behandlung. Keine versteckten Kosten.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={index * 150}>
              <Card
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden border-2 transition-all duration-300",
                  plan.highlighted
                    ? "border-primary shadow-lg scale-[1.02] hover:shadow-xl"
                    : "border-border/50 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                )}
              >
                <CardHeader className={cn(plan.highlighted && "pt-10")}>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.note && (
                      <span className="ml-2 text-sm text-muted-foreground">
                        {plan.note}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <ul className="flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={onOpenModal}
                    variant={plan.highlighted ? "default" : "outline"}
                    className="mt-8 w-full rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    size="lg"
                  >
                    Termin anfragen
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Alle Preise verstehen sich als Richtwerte. Die genauen Kosten werden individuell besprochen.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
