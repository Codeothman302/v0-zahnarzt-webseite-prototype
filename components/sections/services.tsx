"use client";

import { useLanguage } from "@/components/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Sparkles, ClipboardCheck, Smile, HeartPulse } from "lucide-react";

interface ServicesProps {
  onOpenModal: () => void;
}

export function Services({ onOpenModal }: ServicesProps) {
  const { t } = useLanguage();

  const services = [
    {
      icon: HeartPulse,
      title: t.service1Title,
      description: t.service1Desc,
    },
    {
      icon: Sparkles,
      title: t.service2Title,
      description: t.service2Desc,
    },
    {
      icon: ClipboardCheck,
      title: t.service3Title,
      description: t.service3Desc,
    },
    {
      icon: Smile,
      title: t.service4Title,
      description: t.service4Desc,
    },
  ];

  return (
    <section id="leistungen" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.servicesTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {t.servicesDesc}
            </p>
          </div>
        </AnimatedSection>

        {/* CARDS */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <AnimatedSection key={index} delay={index * 100}>
                <Card className="group h-full border-0 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <CardContent className="pt-6 flex flex-col h-full">

                    <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition">
                      <Icon className="size-6 text-primary group-hover:scale-110 transition" />
                    </div>

                    <h3 className="text-lg font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="mt-5">
                      <Button
                        variant="outline"
                        className="w-full rounded-xl"
                        onClick={() => {
                          document.getElementById("preise")?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                      >
                        {t.learnMore}
                      </Button>
                    </div>

                  </CardContent>

                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedSection delay={400}>
          <div className="mt-12 text-center">
            <Button
              onClick={onOpenModal}
              size="lg"
              className="rounded-xl transition hover:scale-[1.02]"
            >
              {t.ctaConsultation}
            </Button>

            <p className="mt-3 text-sm text-muted-foreground">
              {t.noRegistration}
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}