"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useLanguage } from "@/components/language-context";

export function BeforeAfter() {
  const { t } = useLanguage();

  const comparisons = [
    {
      title: t.beforeAfter1Title,
      beforeImage: "/images/before-whitening.jpg",
      afterImage: "/images/after-whitening.jpg",
    },
    {
      title: t.beforeAfter2Title,
      beforeImage: "/images/before-correction.jpg",
      afterImage: "/images/after-correction.jpg",
    },
    {
      title: t.beforeAfter3Title,
      beforeImage: "/images/before-implant.jpg",
      afterImage: "/images/after-implant.jpg",
    },
  ];

  return (
    <section className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.beforeAfterTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              {t.beforeAfterSubtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {comparisons.map((comparison, index) => (
            <AnimatedSection key={comparison.title} delay={index * 150}>
              <Card className="group overflow-hidden border-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative overflow-hidden">
                      <div className="relative aspect-square bg-muted">
                        <Image
                          src={comparison.beforeImage}
                          alt={`${comparison.title} ${t.beforeLabel}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <span className="absolute bottom-2 left-2 rounded bg-foreground/80 px-2 py-1 text-xs font-medium text-background">
                        {t.beforeLabel}
                      </span>
                    </div>
                    <div className="relative overflow-hidden">
                      <div className="relative aspect-square bg-muted">
                        <Image
                          src={comparison.afterImage}
                          alt={`${comparison.title} ${t.afterLabel}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <span className="absolute bottom-2 right-2 rounded bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                        {t.afterLabel}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-foreground">
                      {comparison.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
