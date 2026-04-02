"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";

const team = [
  {
    name: "Anna Müller",
    role: "Praxismanagerin",
    image: "/images/team-1.jpg",
    bio: "Anna Müller ist das Herzstück der Praxisorganisation. Mit über 10 Jahren Erfahrung sorgt sie für einen reibungslosen Ablauf und ein angenehmes Erlebnis für jeden Patienten.",
    hobbies: "Yoga, Reisen, Persönlichkeitsentwicklung",
    philosophy: "Ein guter erster Eindruck entscheidet über das gesamte Behandlungserlebnis.",
  },
  {
    name: "Mehmet Yilmaz",
    role: "Zahnmedizinischer Assistent",
    image: "/images/team-2.jpg",
    bio: "Mehmet unterstützt das Ärzteteam mit Präzision und Ruhe. Seine freundliche Art nimmt Patienten die Nervosität und schafft Vertrauen.",
    hobbies: "Fitness, Fußball, Technik",
    philosophy: "Jeder Patient verdient eine ruhige und respektvolle Behandlung.",
  },
  {
    name: "Laura Schneider",
    role: "Prophylaxe-Spezialistin",
    image: "/images/team-3.jpg",
    bio: "Laura ist spezialisiert auf Prophylaxe und sorgt für gesunde, strahlende Lächeln. Sie legt großen Wert auf individuelle Betreuung.",
    hobbies: "Ernährung, Sport, Natur",
    philosophy: "Vorbeugen ist der Schlüssel zu langfristiger Zahngesundheit.",
  },
];

export function Team() {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <section id="team" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Unser Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Ein engagiertes Team, das sich um Ihr Wohlbefinden kümmert.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 100}>
              <div
                onClick={() => setSelectedMember(member)}
                className="group flex w-full max-w-xs flex-col items-center text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="relative size-32 overflow-hidden rounded-full bg-muted transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {member.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {member.role}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>

      {/* MODAL */}
      {selectedMember && (
        <div
          onClick={() => setSelectedMember(null)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full relative shadow-2xl
animate-in fade-in zoom-in-95 duration-300 ease-out"
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* HEADER */}
            <div className="flex gap-6 items-center mb-6">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                width={96}
                height={96}
                className="rounded-xl object-cover"
              />

              <div>
                <h2 className="text-2xl font-bold">
                  {selectedMember.name}
                </h2>
                <p className="text-primary font-medium">
                  {selectedMember.role}
                </p>
              </div>
            </div>

            {/* CONTENT */}
            <div className="space-y-4 text-sm text-gray-700">

              <p>{selectedMember.bio}</p>

              <div>
                <h3 className="font-semibold">Hobbys</h3>
                <p>{selectedMember.hobbies}</p>
              </div>

              <div>
                <h3 className="font-semibold">Philosophie</h3>
                <p>{selectedMember.philosophy}</p>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}