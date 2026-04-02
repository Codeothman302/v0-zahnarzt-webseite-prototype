"use client";

import { useState, useEffect } from "react";
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
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedDoctor(null);
    };

    if (selectedDoctor) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [selectedDoctor]);

  return (
    <section id="aerzte" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Ihre Zahnärzte
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Erfahrene Spezialisten mit Leidenschaft für moderne Zahnmedizin und Patientenwohl.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {doctors.map((doctor, index) => (
            <AnimatedSection key={doctor.name} delay={index * 150}>

              <div
                onClick={() => setSelectedDoctor(doctor)}
                className="group relative cursor-pointer transition-all duration-500 hover:-translate-y-2"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                <Card className="relative z-10 overflow-hidden rounded-2xl border-0 bg-card shadow-md transition-all duration-500 group-hover:shadow-2xl">
                  <div className="flex flex-col sm:flex-row">

                    <div className="relative aspect-square w-full overflow-hidden sm:w-48 md:w-56">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
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

                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                        {doctor.description}
                      </p>
                    </CardContent>
                  </div>
                </Card>

              </div>

            </AnimatedSection>
          ))}
        </div>

        {/* MODAL */}
        {selectedDoctor && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setSelectedDoctor(null)}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300" />

            {/* Modal */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl transition"
              >
                ✕
              </button>

              {/* Header */}
              <div className="flex gap-6 items-center mb-6">
                <Image
                  src={selectedDoctor.image}
                  alt={selectedDoctor.name}
                  width={96}
                  height={96}
                  className="rounded-xl object-cover"
                />

                <div>
                  <h2 className="text-2xl font-bold">
                    {selectedDoctor.name}
                  </h2>
                  <p className="text-primary font-medium">
                    {selectedDoctor.specialty}
                  </p>
                  <p className="text-sm text-gray-500">
                    {selectedDoctor.experience}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>{selectedDoctor.description}</p>

                <div>
                  <h3 className="font-semibold mb-1">Schwerpunkte</h3>
                  <ul className="list-disc ml-5">
                    <li>Implantologie</li>
                    <li>Ästhetische Zahnmedizin</li>
                    <li>Minimalinvasive Verfahren</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-1">Philosophie</h3>
                  <p>
                    Der Fokus liegt auf einer ruhigen, vertrauensvollen Behandlung
                    und maximalem Komfort für den Patienten.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}