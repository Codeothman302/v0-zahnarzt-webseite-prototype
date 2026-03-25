"use client";

import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingProps {
  onOpenModal: () => void;
}

const plans = [
  {
    name: "Basis",
    price: "ab 0€",
    note: "(Kassenleistung)",
    features: [
      "Kontrolluntersuchung",
      "Standard Beratung",
      "Gesetzlich Versicherte geeignet",
      "Halbjährliche Kontrolle",
    ],
    highlighted: false,
  },
  {
    name: "Komfort",
    price: "ab 89€",
    note: "",
    features: [
      "Professionelle Zahnreinigung",
      "Erweiterte Beratung",
      "Schnellere Terminvergabe",
      "Individuelle Pflegetipps",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "individuell",
    note: "",
    features: [
      "Ästhetische Behandlungen",
      "Implantat-Beratung",
      "Individuelle Betreuung",
      "Exklusive Behandlungszeiten",
    ],
    highlighted: false,
  },
];

export function Pricing({ onOpenModal }: PricingProps) {
  return (
    <section id="preise" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Transparente Preise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Wir informieren Sie transparent vor jeder Behandlung. Keine versteckten Kosten.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col overflow-hidden border-2 transition-all",
                plan.highlighted
                  ? "border-primary shadow-lg scale-[1.02]"
                  : "border-border/50"
              )}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 left-0 bg-primary py-1.5 text-center text-sm font-medium text-primary-foreground">
                  Beliebteste Wahl
                </div>
              )}
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
                  className="mt-8 w-full rounded-xl"
                  size="lg"
                >
                  Termin anfragen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Alle Preise verstehen sich als Richtwerte. Die genauen Kosten werden individuell besprochen.
        </p>
      </div>
    </section>
  );
}
