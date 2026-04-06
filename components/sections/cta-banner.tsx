"use client";

import { useLanguage } from "@/components/language-context";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Shield, Clock, UserCheck } from "lucide-react";

interface CTABannerProps {
  onOpenModal: () => void;
}

export function CTABanner({ onOpenModal }: CTABannerProps) {
  const { t } = useLanguage();

  const trustPoints = [
    { icon: Clock, text: t.ctaPoint1 },
    { icon: UserCheck, text: t.ctaPoint2 },
    { icon: Shield, text: t.ctaPoint3 },
  ];

  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatedSection>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            {t.ctaTitle}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/90">
            {t.ctaSubtitle}
          </p>

          <Button
            onClick={onOpenModal}
            size="lg"
            variant="secondary"
            className="mt-8 h-14 rounded-xl px-8 text-base transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
          >
            {t.ctaButton}
          </Button>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/80">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.text} className="flex items-center gap-2">
                  <Icon className="size-4" />
                  <span>{point.text}</span>
                </div>
              );
            })}
          </div>

        </AnimatedSection>
      </div>
    </section>
  );
}