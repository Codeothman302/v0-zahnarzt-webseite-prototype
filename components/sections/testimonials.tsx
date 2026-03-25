"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";

const testimonials = [
  {
    quote:
      "Super einfache Terminanfrage, ich war überrascht wie schnell alles ging.",
    author: "Markus H.",
    rating: 5,
  },
  {
    quote:
      "Sehr freundliches Team und moderne Praxis. Fühlte mich direkt wohl.",
    author: "Julia S.",
    rating: 5,
  },
  {
    quote:
      "Endlich eine Praxis, die digital funktioniert. Kein Warten am Telefon mehr.",
    author: "Daniel K.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Das sagen unsere Patienten
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Über 1000 zufriedene Patienten vertrauen uns bereits.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <Card className="group h-full border-0 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <CardContent className="pt-6">
                  <Quote className="size-8 text-primary/20 transition-colors duration-300 group-hover:text-primary/40" />
                  <div className="mt-4 flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-foreground">{testimonial.quote}</p>
                  <p className="mt-4 text-sm font-medium text-muted-foreground">
                    – {testimonial.author}
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
