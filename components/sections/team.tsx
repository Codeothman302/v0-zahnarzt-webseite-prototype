"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";

const team = [
  {
    name: "Anna Müller",
    role: "Praxismanagerin",
    image: "/images/team-1.jpg",
  },
  {
    name: "Mehmet Yilmaz",
    role: "Zahnmedizinischer Assistent",
    image: "/images/team-2.jpg",
  },
  {
    name: "Laura Schneider",
    role: "Prophylaxe-Spezialistin",
    image: "/images/team-3.jpg",
  },
];

export function Team() {
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
              <div className="group flex w-full max-w-xs flex-col items-center text-center">
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
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
