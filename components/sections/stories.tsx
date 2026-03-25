import { Quote } from "lucide-react";

const stories = [
  {
    text: "Ich hatte lange Angst vor dem Zahnarzt. Durch die einfache Anfrage und das ruhige Team habe ich endlich den Schritt gemacht. Heute gehe ich entspannt zu meinen Terminen.",
  },
  {
    text: "Meine Zähne haben mich jahrelang gestört. Nach der Behandlung lächle ich endlich wieder gerne – das hat mein Selbstbewusstsein komplett verändert.",
  },
  {
    text: "Früher war alles kompliziert mit Terminen. Jetzt dauert es nur noch wenige Klicks – genau so sollte es sein.",
  },
];

export function Stories() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Geschichten, die berühren
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Echte Erfahrungen unserer Patienten.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="mx-auto flex max-w-3xl items-start gap-4 rounded-xl bg-card p-6 shadow-sm"
            >
              <Quote className="mt-1 size-6 shrink-0 text-primary/30" />
              <p className="text-lg leading-relaxed text-foreground">
                {story.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
