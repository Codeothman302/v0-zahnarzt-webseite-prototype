"use client";

import { useLanguage } from "@/components/language-context";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

interface PricingProps {
  onOpenModal: () => void;
}

export function Pricing({ onOpenModal }: PricingProps) {
  const { t } = useLanguage();

  const plans = [
    {
      name: t.priceCard1Title,
      subtitle: t.priceCard1Desc,
      price: t.priceCard1Price,
      features: [
        t.priceCard1List1,
        t.priceCard1List2,
        t.priceCard1List3,
        t.priceCard1List4,
      ],
      highlighted: true,
    },
    {
      name: t.priceCard2Title,
      subtitle: t.priceCard2Desc,
      price: t.priceCard2Price,
      features: [
        t.priceCard2List1,
        t.priceCard2List2,
        t.priceCard2List3,
        t.priceCard2List4,
      ],
    },
    {
      name: t.priceCard3Title,
      subtitle: t.priceCard3Desc,
      price: t.priceCard3Price,
      features: [
        t.priceCard3List1,
        t.priceCard3List2,
        t.priceCard3List3,
        t.priceCard3List4,
      ],
    },
  ];

  return (
    <section id="preise" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.pricesTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              {t.pricesSubtitle}
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
                <CardHeader>
                  <p className="text-sm text-primary font-medium mb-2">
                    {plan.subtitle}
                  </p>

                  <CardTitle className="text-xl">
                    {plan.name}
                  </CardTitle>

                  <div className="mt-4">
                    <span className="text-3xl font-bold text-foreground">
                      {plan.price}
                    </span>
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
                    {t.priceButton}
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            {t.priceNote}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}