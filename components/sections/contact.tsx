"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Neckarstraße 12, 72160 Horb am Neckar",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "+49 7451 123456",
    href: "tel:+497451123456",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@zahnzentrum-neckarblick.de",
    href: "mailto:info@zahnzentrum-neckarblick.de",
  },
];

const openingHours = [
  { day: "Montag - Donnerstag", hours: "08:00 - 18:00" },
  { day: "Freitag", hours: "08:00 - 14:00" },
  { day: "Samstag - Sonntag", hours: "Geschlossen" },
];

export function Contact() {
  return (
    <section id="kontakt" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Kontakt & Anfahrt
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Wir freuen uns auf Ihren Besuch.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Contact Info */}
          <AnimatedSection delay={100}>
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="group flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground transition-colors duration-200 hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}

              <Card className="mt-8 border-0 bg-card shadow-sm transition-all duration-300 hover:shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <Clock className="size-5 text-primary" />
                    <h3 className="font-semibold text-foreground">
                      Öffnungszeiten
                    </h3>
                  </div>
                  <div className="mt-4 space-y-2">
                    {openingHours.map((item) => (
                      <div
                        key={item.day}
                        className="flex justify-between text-sm"
                      >
                        <span className="text-muted-foreground">{item.day}</span>
                        <span className="font-medium text-foreground">
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          {/* Map placeholder */}
          <AnimatedSection delay={200}>
            <div className="relative aspect-video overflow-hidden rounded-xl bg-muted lg:aspect-auto lg:h-full lg:min-h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto size-12 text-muted-foreground/50" />
                  <p className="mt-4 text-sm text-muted-foreground">
                    Neckarstraße 12
                    <br />
                    72160 Horb am Neckar
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
