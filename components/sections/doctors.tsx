"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";

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

  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  return (
    <section id="aerzte" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ihre Zahnärzte
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Erfahrene Spezialisten mit Leidenschaft für moderne Zahnmedizin und Patientenwohl.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {doctors.map((doctor, index) => (
            <AnimatedSection key={doctor.name} delay={index * 150}>
              <Card
                onClick={() => setSelectedDoctor(doctor)}
                className="group h-full overflow-hidden border-0 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative aspect-square w-full overflow-hidden sm:aspect-[3/4] sm:w-48 md:w-56">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
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
            </AnimatedSection>
          ))}
        </div>
        {selectedDoctor && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative">

              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 text-gray-500"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-2">
                {selectedDoctor.name}
              </h2>

              <p className="text-primary mb-2">
                {selectedDoctor.experience}
              </p>

              <p className="text-sm mb-2">
                {selectedDoctor.specialty}
              </p>

              <p className="text-sm text-gray-600">
                {selectedDoctor.description}
              </p>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
