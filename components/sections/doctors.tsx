"use client";

import { useLanguage } from "@/components/language-context";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";

export function Doctors() {
  const { t } = useLanguage();

  const doctors = [
    {
      name: t.doctor1Name,
      specialty: t.doctor1Specialty,
      experience: t.doctor1Experience,
      description: t.doctor1Desc,
      image: "/images/doctor-1.jpg",
      focus1: t.doctor1Focus1,
      focus2: t.doctor1Focus2,
      focus3: t.doctor1Focus3,
      philosophy: t.doctor1Philosophy,
    },
    {
      name: t.doctor2Name,
      specialty: t.doctor2Specialty,
      experience: t.doctor2Experience,
      description: t.doctor2Desc,
      image: "/images/doctor-2.jpg",
      focus1: t.doctor2Focus1,
      focus2: t.doctor2Focus2,
      focus3: t.doctor2Focus3,
      philosophy: t.doctor2Philosophy,
    },
  ];

  const [selectedDoctor, setSelectedDoctor] = useState<(typeof doctors)[0] | null>(null);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedDoctor(null);
        setZoomImage(null);
      }
    };

    if (selectedDoctor || zoomImage) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [selectedDoctor, zoomImage]);

  return (
    <section id="aerzte" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              {t.doctorsTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {t.doctorsDesc}
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

                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {doctor.description}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {selectedDoctor && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setSelectedDoctor(null)}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300" />

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            >
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute right-4 top-4 text-xl text-gray-400 transition hover:text-black"
              >
                ✕
              </button>

              <div className="mb-6 flex items-center gap-6">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomImage(selectedDoctor.image);
                  }}
                  className="cursor-zoom-in"
                >
                  <Image
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    width={96}
                    height={96}
                    className="rounded-xl object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">{selectedDoctor.name}</h2>
                  <p className="font-medium text-primary">
                    {selectedDoctor.specialty}
                  </p>
                  <p className="text-sm text-gray-500">
                    {selectedDoctor.experience}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-gray-700">
                <p>{selectedDoctor.description}</p>

                <div>
                  <h3 className="mb-1 font-semibold">{t.focusAreas}</h3>
                  <ul className="ml-5 list-disc">
                    <li>{selectedDoctor.focus1}</li>
                    <li>{selectedDoctor.focus2}</li>
                    <li>{selectedDoctor.focus3}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-1 font-semibold">{t.philosophy}</h3>
                  <p>{selectedDoctor.philosophy}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {zoomImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center"
          onClick={() => setZoomImage(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-300" />

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-4xl px-4 animate-in zoom-in-95 duration-300"
          >
            <Image
              src={zoomImage}
              alt="Zoom"
              width={1200}
              height={800}
              className="h-auto w-full rounded-2xl shadow-2xl"
            />

            <button
              onClick={() => setZoomImage(null)}
              className="absolute right-4 top-4 text-2xl text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}