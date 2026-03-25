import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const doctors = [
  {
    name: "Dr. med. dent. Lukas Weber",
    specialty: "Implantologie & Ästhetische Zahnmedizin",
    experience: "12 Jahre Erfahrung",
    description:
      "Spezialisiert auf moderne Implantologie mit minimalinvasiven Techniken. Sein ruhiger Behandlungsstil sorgt für entspannte Patienten.",
    image: "/images/doctor-1.jpg",
  },
  {
    name: "Dr. med. dent. Sarah Klein",
    specialty: "Kieferorthopädie & Prävention",
    experience: "9 Jahre Erfahrung",
    description:
      "Expertin für sanfte Zahnkorrekturen bei Kindern und Erwachsenen. Ihr Fokus liegt auf Vertrauen und individueller Betreuung.",
    image: "/images/doctor-2.jpg",
  },
];

export function Doctors() {
  return (
    <section id="aerzte" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ihre Zahnärzte
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Erfahrene Spezialisten mit Leidenschaft für moderne Zahnmedizin und Patientenwohl.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {doctors.map((doctor) => (
            <Card
              key={doctor.name}
              className="overflow-hidden border-0 bg-card shadow-sm"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative aspect-square w-full sm:aspect-[3/4] sm:w-48 md:w-56">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col justify-center py-6 sm:py-0">
                  <div className="mb-2 text-sm font-medium text-primary">
                    {doctor.experience}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {doctor.specialty}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {doctor.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
