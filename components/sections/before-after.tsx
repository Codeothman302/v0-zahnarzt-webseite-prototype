import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const comparisons = [
  {
    title: "Zahnaufhellung",
    beforeImage: "/images/before-whitening.jpg",
    afterImage: "/images/after-whitening.jpg",
  },
  {
    title: "Zahnkorrektur",
    beforeImage: "/images/before-correction.jpg",
    afterImage: "/images/after-correction.jpg",
  },
  {
    title: "Implantat",
    beforeImage: "/images/before-implant.jpg",
    afterImage: "/images/after-implant.jpg",
  },
];

export function BeforeAfter() {
  return (
    <section className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Vorher & Nachher
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Überzeugen Sie sich selbst von unseren Behandlungsergebnissen.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {comparisons.map((comparison) => (
            <Card key={comparison.title} className="overflow-hidden border-0 shadow-sm">
              <CardContent className="p-0">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <div className="aspect-square bg-muted">
                      <Image
                        src={comparison.beforeImage}
                        alt={`${comparison.title} vorher`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="absolute bottom-2 left-2 rounded bg-foreground/80 px-2 py-1 text-xs font-medium text-background">
                      Vorher
                    </span>
                  </div>
                  <div className="relative">
                    <div className="aspect-square bg-muted">
                      <Image
                        src={comparison.afterImage}
                        alt={`${comparison.title} nachher`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="absolute bottom-2 right-2 rounded bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                      Nachher
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
          ))}
        </div>
      </div>
    </section>
  );
}
