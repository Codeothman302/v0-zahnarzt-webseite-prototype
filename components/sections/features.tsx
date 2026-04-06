"use client";

import { useLanguage } from "@/components/language-context";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MessageSquare, Calendar, FileText, ClipboardList, Smartphone } from "lucide-react";

export function Features() {
  const { t } = useLanguage();

  const features = [
    {
      icon: MessageSquare,
      title: t.feature1Title,
      description: t.feature1Desc,
    },
    {
      icon: Calendar,
      title: t.feature2Title,
      description: t.feature2Desc,
    },
    {
      icon: FileText,
      title: t.feature3Title,
      description: t.feature3Desc,
    },
    {
      icon: ClipboardList,
      title: t.feature4Title,
      description: t.feature4Desc,
    },
    {
      icon: Smartphone,
      title: t.feature5Title,
      description: t.feature5Desc,
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Titel */}
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.featuresTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {t.featuresSubtitle}
            </p>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 100}>
              <Card className="h-full border border-border/50 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <feature.icon className="mb-4 size-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}