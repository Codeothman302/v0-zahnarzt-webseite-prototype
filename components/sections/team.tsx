"use client";

import { useLanguage } from "@/components/language-context";
import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";

export function Team() {
  const { t } = useLanguage();

  const team = [
    {
      name: "Anna Müller",
      role: t.teamRole1,
      image: "/images/team-1.jpg",
      bio: t.teamBio1,
      hobbies: t.teamHobbies1,
      philosophy: t.teamPhilosophy1,
    },
    {
      name: "Mehmet Yilmaz",
      role: t.teamRole2,
      image: "/images/team-2.jpg",
      bio: t.teamBio2,
      hobbies: t.teamHobbies2,
      philosophy: t.teamPhilosophy2,
    },
    {
      name: "Laura Schneider",
      role: t.teamRole3,
      image: "/images/team-3.jpg",
      bio: t.teamBio3,
      hobbies: t.teamHobbies3,
      philosophy: t.teamPhilosophy3,
    },
  ];

  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedMember(null);
    };

    if (selectedMember) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [selectedMember]);

  return (
    <section id="team" className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.teamTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              {t.teamDesc}
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <AnimatedSection key={index} delay={index * 100}>
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
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setSelectedMember(null)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300" />

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300"
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl transition"
            >
              ✕
            </button>

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

            <div className="space-y-4 text-sm text-gray-700">
              <p>{selectedMember.bio}</p>

              <div>
                <h3 className="font-semibold">{t.hobbies}</h3>
                <p>{selectedMember.hobbies}</p>
              </div>

              <div>
                <h3 className="font-semibold">{t.philosophy}</h3>
                <p>{selectedMember.philosophy}</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}