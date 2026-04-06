"use client";

import { useLanguage } from "@/components/language-context";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";

export function BeforeAfter() {
  const { t } = useLanguage();

  const cases = [
    {
      title: t.beforeAfter1Title,
      before: "/images/before-1.jpg",
      after: "/images/after-1.jpg",
    },
    {
      title: t.beforeAfter2Title,
      before: "/images/before-2.jpg",
      after: "/images/after-2.jpg",
    },
    {
      title: t.beforeAfter3Title,
      before: "/images/before-3.jpg",
      after: "/images/after-3.jpg",
    },
  ];

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Titel */}
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              {t.beforeAfterTitle}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.beforeAfterSubtitle}
            </p>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {cases.map((item, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">

                  <div className="relative grid grid-cols-2">

                    {/* Vorher */}
                    <div className="relative">
                      <Image
                        src={item.before}
                        alt="before"
                        width={400}
                        height={300}
                        className="object-cover"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {t.beforeLabel}
                      </span>
                    </div>

                    {/* Nachher */}
                    <div className="relative">
                      <Image
                        src={item.after}
                        alt="after"
                        width={400}
                        height={300}
                        className="object-cover"
                      />
                      <span className="absolute bottom-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
                        {t.afterLabel}
                      </span>
                    </div>

                  </div>

                  <div className="p-4 text-center font-medium">
                    {item.title}
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