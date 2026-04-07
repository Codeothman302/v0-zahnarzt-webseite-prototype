"use client";

import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useLanguage } from "@/components/language-context";

export function Stories() {
  const { t } = useLanguage();

  const stories = [
    { text: t.story1Text },
    { text: t.story2Text },
    { text: t.story3Text },
  ];

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.storiesTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              {t.storiesSubtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 space-y-8">
          {stories.map((story, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <div className="group mx-auto flex max-w-3xl items-start gap-4 rounded-xl bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <Quote className="mt-1 size-6 shrink-0 text-primary/30 transition-colors duration-300 group-hover:text-primary/50" />
                <p className="text-lg leading-relaxed text-foreground">
                  {story.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
