"use client";

import { AnimatedSection } from "@/components/ui/animated-section";

export function FAQ() {
  return (
    <section className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">

        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Haben Sie ein Anliegen?
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="mt-6 text-lg text-muted-foreground">
            Starten Sie Ihr Anliegen ganz einfach über unseren digitalen Assistenten –
            schnell, unkompliziert und jederzeit verfügbar.
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
}