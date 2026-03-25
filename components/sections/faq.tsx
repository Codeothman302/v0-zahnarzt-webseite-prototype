"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/ui/animated-section";

const faqs = [
  {
    question: "Wie schnell bekomme ich einen Termin?",
    answer:
      "In der Regel innerhalb weniger Tage. Akute Fälle werden schneller behandelt – melden Sie sich einfach über unseren digitalen Assistenten.",
  },
  {
    question: "Muss ich anrufen?",
    answer:
      "Nein, alles funktioniert digital in wenigen Klicks. Sie können Ihr Anliegen rund um die Uhr einreichen – ohne Warteschleife.",
  },
  {
    question: "Was kostet die Behandlung?",
    answer:
      "Wir informieren Sie transparent vor jeder Behandlung. Viele Leistungen werden von der Krankenkasse übernommen.",
  },
  {
    question: "Werden gesetzliche Kassen akzeptiert?",
    answer:
      "Ja, wir arbeiten mit allen gesetzlichen und privaten Krankenversicherungen zusammen.",
  },
  {
    question: "Ich habe Angst vor dem Zahnarzt – was tun?",
    answer:
      "Wir nehmen uns Zeit und arbeiten besonders schonend und einfühlsam. Unser Team ist auf Angstpatienten spezialisiert und sorgt für eine entspannte Atmosphäre.",
  },
];

export function FAQ() {
  return (
    <section className="bg-card py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Häufige Fragen
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
              Alles, was Sie wissen möchten.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <Accordion type="single" collapsible className="mt-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium transition-colors hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
}
