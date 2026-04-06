"use client";

import { useLanguage } from "@/components/language-context";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t.testimonial1Text,
      name: t.testimonial1Name,
    },
    {
      text: t.testimonial2Text,
      name: t.testimonial2Name,
    },
    {
      text: t.testimonial3Text,
      name: t.testimonial3Name,
    },
  ];

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              {t.testimonialsTitle}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.testimonialsSubtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="group h-full border-0 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <CardContent className="pt-6">
                  <Quote className="size-8 text-primary/20 group-hover:text-primary/40" />

                  {/* ⭐ FIX: Sterne statisch */}
                  <div className="mt-4 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <p className="mt-4 text-foreground">
                    {testimonial.text}
                  </p>

                  <p className="mt-4 text-sm font-medium text-muted-foreground">
                    – {testimonial.name}
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