"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Translation = {
  // Navigation
  services: string;
  team: string;
  prices: string;
  contact: string;
  book: string;

  // Hero
  title1: string;
  title2: string;
  description: string;
  points: string[];
  heroButton: string;
  heroSubtext: string;
  happyPatients: string;
  location: string;
  heroImageAlt: string;

  // Experience Badge
  experienceYears: string;
  experienceLabel: string;
  experienceModalTitle: string;
  experienceModalText1: string;
  experienceModalText2: string;
  experienceModalText3: string;
  close: string;

  // Services
  servicesTitle: string;
  servicesDesc: string;
  service1Title: string;
  service1Desc: string;
  service2Title: string;
  service2Desc: string;
  service3Title: string;
  service3Desc: string;
  service4Title: string;
  service4Desc: string;
  learnMore: string;
  ctaConsultation: string;
  noRegistration: string;

  // Team
  teamTitle: string;
  teamDesc: string;
  teamName1: string;
  teamName2: string;
  teamName3: string;
  teamRole1: string;
  teamRole2: string;
  teamRole3: string;
  teamBio1: string;
  teamBio2: string;
  teamBio3: string;
  teamHobbies1: string;
  teamHobbies2: string;
  teamHobbies3: string;
  teamPhilosophy1: string;
  teamPhilosophy2: string;
  teamPhilosophy3: string;
  hobbies: string;
  philosophy: string;

  // Doctors
  doctorsTitle: string;
  doctorsDesc: string;
  doctor1Name: string;
  doctor1Specialty: string;
  doctor1Experience: string;
  doctor1Desc: string;
  doctor1Focus1: string;
  doctor1Focus2: string;
  doctor1Focus3: string;
  doctor1Philosophy: string;
  doctor2Name: string;
  doctor2Specialty: string;
  doctor2Experience: string;
  doctor2Desc: string;
  doctor2Focus1: string;
  doctor2Focus2: string;
  doctor2Focus3: string;
  doctor2Philosophy: string;
  focusAreas: string;

  // Features
  featuresTitle: string;
  featuresSubtitle: string;
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  feature3Title: string;
  feature3Desc: string;
  feature4Title: string;
  feature4Desc: string;
  feature5Title: string;
  feature5Desc: string;

  // Pricing
  pricesTitle: string;
  pricesSubtitle: string;
  priceCard1Title: string;
  priceCard1Desc: string;
  priceCard1Price: string;
  priceCard1List1: string;
  priceCard1List2: string;
  priceCard1List3: string;
  priceCard1List4: string;
  priceCard2Title: string;
  priceCard2Desc: string;
  priceCard2Price: string;
  priceCard2List1: string;
  priceCard2List2: string;
  priceCard2List3: string;
  priceCard2List4: string;
  priceCard3Title: string;
  priceCard3Desc: string;
  priceCard3Price: string;
  priceCard3List1: string;
  priceCard3List2: string;
  priceCard3List3: string;
  priceCard3List4: string;
  priceButton: string;
  priceNote: string;

  // Contact
  contactTitle: string;
  contactSubtitle: string;
  contactAddress: string;
  contactPhone: string;
  contactEmail: string;
  contactOpeningHours: string;
  contactMonThu: string;
  contactFri: string;
  contactWeekend: string;
  contactClosed: string;

  // Testimonials
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonial1Quote: string;
  testimonial1Author: string;
  testimonial2Quote: string;
  testimonial2Author: string;
  testimonial3Quote: string;
  testimonial3Author: string;

  // Before & After
  beforeAfterTitle: string;
  beforeAfterSubtitle: string;
  beforeLabel: string;
  afterLabel: string;
  beforeAfter1Title: string;
  beforeAfter2Title: string;
  beforeAfter3Title: string;

  // Stories
  storiesTitle: string;
  storiesSubtitle: string;
  story1Text: string;
  story2Text: string;
  story3Text: string;

  // CTA Banner
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  ctaTrust1: string;
  ctaTrust2: string;
  ctaTrust3: string;

  // Footer
  footerDescription: string;
  footerServices: string;
  footerTeam: string;
  footerPrices: string;
  footerContact: string;
  footerImprint: string;
  footerPrivacy: string;
  footerRights: string;
};

type LanguageContextType = {
  lang: string;
  setLang: (lang: string) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const languages = [
  "de",
  "en",
  "es",
  "fr",
  "it",
  "tr",
  "ru",
  "ar",
  "fa",
  "sq",
];

const translations: Record<string, Translation> = {
  de: {
    // Navigation
    services: "Leistungen",
    team: "Team",
    prices: "Preise",
    contact: "Kontakt",
    book: "Termin buchen",

    // Hero
    title1: "Ihr Lächeln in",
    title2: "besten Händen",
    description:
      "Moderne Zahnmedizin mit persönlicher Betreuung. Schnell, digital und unkompliziert – für ein strahlendes Lächeln, das Sie verdienen.",
    points: [
      "Moderne, schmerzfreie Behandlung",
      "Keine Wartezeit am Telefon",
      "Auch für Angstpatienten geeignet",
    ],
    heroButton: "Termin oder Anliegen starten",
    heroSubtext: "Dauert weniger als 1 Minute",
    happyPatients: "1000+ zufriedene Patienten",
    location: "Horb am Neckar",
    heroImageAlt: "Zahnarzt behandelt Patientin",

    // Experience
    experienceYears: "12+",
    experienceLabel: "Jahre Erfahrung",
    experienceModalTitle: "Über 12 Jahre Erfahrung",
    experienceModalText1:
      "In den letzten 12 Jahren haben wir tausende Patienten erfolgreich behandelt – von Vorsorge bis zu komplexen Eingriffen.",
    experienceModalText2:
      "Moderne Technik, schmerzfreie Behandlung und persönliche Betreuung stehen bei uns im Mittelpunkt.",
    experienceModalText3:
      "Unser Ziel: nachhaltige Ergebnisse und ein Lächeln, mit dem Sie sich wohlfühlen.",
    close: "Schließen",

    // Services
    servicesTitle: "Unsere Leistungen",
    servicesDesc:
      "Umfassende zahnmedizinische Versorgung mit modernster Technologie und persönlicher Betreuung.",
    service1Title: "Implantate",
    service1Desc:
      "Feste Zähne für ein sicheres Lächeln. Dauerhafte Lösungen mit modernster Technik.",
    service2Title: "Zahnreinigung",
    service2Desc:
      "Professionelle Reinigung für gesunde Zähne und frischen Atem.",
    service3Title: "Kieferorthopädie",
    service3Desc: "Schonende Zahnkorrektur für ein perfektes Lächeln.",
    service4Title: "Ästhetische Zahnmedizin",
    service4Desc:
      "Verschönerung Ihrer Zähne für ein strahlendes Erscheinungsbild.",
    learnMore: "Mehr erfahren",
    ctaConsultation: "Beratungstermin vereinbaren",
    noRegistration: "Keine Registrierung erforderlich",

    // Team
    teamTitle: "Team",
    teamDesc: "Lernen Sie unser Team kennen",
    teamName1: "Anna Müller",
    teamName2: "Mehmet Yilmaz",
    teamName3: "Laura Schneider",
    teamRole1: "Praxismanagerin",
    teamRole2: "Zahnmedizinischer Fachangestellter",
    teamRole3: "Patientenbetreuung & Empfang",
    teamBio1:
      "Anna Müller ist das Herzstück der Praxisorganisation. Mit über 10 Jahren Erfahrung sorgt sie für einen reibungslosen Ablauf und ein angenehmes Erlebnis für jeden Patienten.",
    teamBio2:
      "Mehmet unterstützt das Ärzteteam mit Präzision und Ruhe. Seine freundliche Art nimmt Patienten die Nervosität und schafft Vertrauen.",
    teamBio3:
      "Laura begleitet Patienten vom ersten Kontakt bis zur Nachsorge. Sie legt großen Wert auf individuelle Betreuung und ein positives Erlebnis.",
    teamHobbies1: "Yoga, Reisen, Persönlichkeitsentwicklung",
    teamHobbies2: "Fitness, Fußball, Technik",
    teamHobbies3: "Lesen, Organisation, Kommunikation",
    teamPhilosophy1:
      "Ein guter erster Eindruck entscheidet über das gesamte Behandlungserlebnis.",
    teamPhilosophy2:
      "Vertrauen entsteht durch Ruhe, Präzision und ehrliche Kommunikation.",
    teamPhilosophy3:
      "Jeder Patient verdient eine persönliche und einfühlsame Betreuung.",
    hobbies: "Hobbys",
    philosophy: "Philosophie",

    // Doctors
    doctorsTitle: "Ihre Zahnärzte",
    doctorsDesc:
      "Erfahrene Spezialisten mit Leidenschaft für moderne Zahnmedizin und Patientenwohl",
    doctor1Name: "Dr. med. dent. Lukas Weber",
    doctor1Specialty: "Implantologie & Ästhetische Zahnmedizin",
    doctor1Experience: "12 Jahre Erfahrung",
    doctor1Desc:
      "Spezialisiert auf moderne Implantologie mit minimalinvasiven Techniken. Sein ruhiger Behandlungsstil sorgt für entspannte Patienten.",
    doctor1Focus1: "Implantologie",
    doctor1Focus2: "Ästhetische Zahnmedizin",
    doctor1Focus3: "Minimalinvasive Verfahren",
    doctor1Philosophy:
      "Der Fokus liegt auf einer ruhigen, vertrauensvollen Behandlung und maximalem Komfort für den Patienten.",
    doctor2Name: "Dr. med. dent. Sarah Klein",
    doctor2Specialty: "Kieferorthopädie & Prävention",
    doctor2Experience: "9 Jahre Erfahrung",
    doctor2Desc:
      "Expertin für sanfte Zahnkorrekturen bei Kindern und Erwachsenen. Ihr Fokus liegt auf Vertrauen und individueller Betreuung.",
    doctor2Focus1: "Kieferorthopädie",
    doctor2Focus2: "Prävention",
    doctor2Focus3: "Individuelle Betreuung",
    doctor2Philosophy:
      "Eine erfolgreiche Behandlung beginnt mit Vertrauen, Geduld und einer persönlichen Begleitung auf Augenhöhe.",
    focusAreas: "Schwerpunkte",

    // Features
    featuresTitle: "Warum Zahnzentrum Neckarblick?",
    featuresSubtitle:
      "Moderne Technologie für ein besseres Patientenerlebnis.",
    feature1Title: "Digitaler Anfrage-Assistent",
    feature1Desc: "Ihr Anliegen in wenigen Klicks – ohne Anruf.",
    feature2Title: "Schnelle Terminübersicht",
    feature2Desc: "Verfügbare Termine auf einen Blick.",
    feature3Title: "Rezept-Anfragen ohne Wartezeit",
    feature3Desc: "Digital und unkompliziert – rund um die Uhr.",
    feature4Title: "Strukturierte Patientenanfragen",
    feature4Desc: "Klare Kategorien für schnelle Bearbeitung.",
    feature5Title: "Mobile-optimierte Nutzung",
    feature5Desc: "Jederzeit erreichbar – auch unterwegs.",

    // Pricing
    pricesTitle: "Preise & Behandlungen",
    pricesSubtitle:
      "Wir informieren Sie transparent vor jeder Behandlung. Keine versteckten Kosten.",
    priceCard1Title: "Zahnreinigung",
    priceCard1Desc: "Gönnen Sie Ihren Zähnen etwas Frische ✨",
    priceCard1Price: "80–150 €",
    priceCard1List1: "Gründliche Reinigung",
    priceCard1List2: "Frischer Atem",
    priceCard1List3: "Vorbeugung gegen Karies",
    priceCard1List4: "Gesunde Zähne langfristig",
    priceCard2Title: "Implantate",
    priceCard2Desc: "Wieder fest zubeißen können 💪",
    priceCard2Price: "ab 2.000 €",
    priceCard2List1: "Feste Zähne wie echte",
    priceCard2List2: "Langlebige Lösung",
    priceCard2List3: "Mehr Lebensqualität",
    priceCard2List4: "Individuelle Planung",
    priceCard3Title: "Bleaching",
    priceCard3Desc: "Ein Lächeln, das auffällt 😁",
    priceCard3Price: "ab 250 €",
    priceCard3List1: "Strahlend weiße Zähne",
    priceCard3List2: "Schnelle Behandlung",
    priceCard3List3: "Sichtbare Ergebnisse",
    priceCard3List4: "Schonende Methode",
    priceButton: "Termin anfragen",
    priceNote:
      "Alle Preise verstehen sich als Richtwerte. Die genauen Kosten werden individuell besprochen.",

    // Contact
    contactTitle: "Kontakt & Anfahrt",
    contactSubtitle: "Wir freuen uns auf Ihren Besuch.",
    contactAddress: "Adresse",
    contactPhone: "Telefon",
    contactEmail: "E-Mail",
    contactOpeningHours: "Öffnungszeiten",
    contactMonThu: "Montag - Donnerstag",
    contactFri: "Freitag",
    contactWeekend: "Samstag - Sonntag",
    contactClosed: "Geschlossen",

    // Testimonials
    testimonialsTitle: "Das sagen unsere Patienten",
    testimonialsSubtitle: "Über 1000 zufriedene Patienten vertrauen uns bereits.",
    testimonial1Quote: "Super einfache Terminanfrage, ich war überrascht wie schnell alles ging.",
    testimonial1Author: "Markus H.",
    testimonial2Quote: "Sehr freundliches Team und moderne Praxis. Fühlte mich direkt wohl.",
    testimonial2Author: "Julia S.",
    testimonial3Quote: "Endlich eine Praxis, die digital funktioniert. Kein Warten am Telefon mehr.",
    testimonial3Author: "Daniel K.",

    // Before & After
    beforeAfterTitle: "Vorher & Nachher",
    beforeAfterSubtitle: "Überzeugen Sie sich selbst von unseren Behandlungsergebnissen.",
    beforeLabel: "Vorher",
    afterLabel: "Nachher",
    beforeAfter1Title: "Zahnaufhellung",
    beforeAfter2Title: "Zahnkorrektur",
    beforeAfter3Title: "Implantat",

    // Stories
    storiesTitle: "Geschichten, die berühren",
    storiesSubtitle: "Echte Erfahrungen unserer Patienten.",
    story1Text: "Ich hatte lange Angst vor dem Zahnarzt. Durch die einfache Anfrage und das ruhige Team habe ich endlich den Schritt gemacht. Heute gehe ich entspannt zu meinen Terminen.",
    story2Text: "Meine Zähne haben mich jahrelang gestört. Nach der Behandlung lächle ich endlich wieder gerne – das hat mein Selbstbewusstsein komplett verändert.",
    story3Text: "Früher war alles kompliziert mit Terminen. Jetzt dauert es nur noch wenige Klicks – genau so sollte es sein.",

    // CTA Banner
    ctaTitle: "Schnell & unkompliziert",
    ctaSubtitle: "Ihr Anliegen in wenigen Klicks – starten Sie jetzt.",
    ctaButton: "Termin oder Anliegen starten",
    ctaTrust1: "In unter 1 Minute erledigt",
    ctaTrust2: "Ohne Registrierung",
    ctaTrust3: "Sicher & vertraulich",

    // Footer
    footerDescription: "Moderne Zahnmedizin in Horb am Neckar. Ihr Lächeln in besten Händen.",
    footerServices: "Leistungen",
    footerTeam: "Team",
    footerPrices: "Preise",
    footerContact: "Kontakt",
    footerImprint: "Impressum",
    footerPrivacy: "Datenschutz",
    footerRights: "Alle Rechte vorbehalten.",
  },

  en: {
    // Navigation
    services: "Services",
    team: "Team",
    prices: "Prices",
    contact: "Contact",
    book: "Book appointment",

    // Hero
    title1: "Your smile in",
    title2: "the best hands",
    description:
      "Modern dentistry with personal care. Fast, digital, and uncomplicated — for a radiant smile you deserve.",
    points: [
      "Modern, pain-free treatment",
      "No waiting time on the phone",
      "Also suitable for anxious patients",
    ],
    heroButton: "Start appointment or request",
    heroSubtext: "Takes less than 1 minute",
    happyPatients: "1000+ happy patients",
    location: "Horb am Neckar",
    heroImageAlt: "Dentist treating a patient",

    // Experience
    experienceYears: "12+",
    experienceLabel: "Years of experience",
    experienceModalTitle: "Over 12 years of experience",
    experienceModalText1:
      "Over the last 12 years, we have successfully treated thousands of patients — from preventive care to complex procedures.",
    experienceModalText2:
      "Modern technology, pain-free treatment, and personal care are at the heart of what we do.",
    experienceModalText3:
      "Our goal: long-lasting results and a smile that makes you feel confident.",
    close: "Close",

    // Services
    servicesTitle: "Our Services",
    servicesDesc:
      "Comprehensive dental care with modern technology and personal attention.",
    service1Title: "Dental Implants",
    service1Desc:
      "Fixed teeth for a confident smile. Long-lasting solutions with modern technology.",
    service2Title: "Teeth Cleaning",
    service2Desc: "Professional cleaning for healthy teeth and fresh breath.",
    service3Title: "Orthodontics",
    service3Desc: "Gentle tooth correction for a perfect smile.",
    service4Title: "Cosmetic Dentistry",
    service4Desc: "Enhancing your smile for a radiant appearance.",
    learnMore: "Learn more",
    ctaConsultation: "Book consultation",
    noRegistration: "No registration required",

    // Team
    teamTitle: "Team",
    teamDesc: "Meet our team",
    teamName1: "Anna Müller",
    teamName2: "Mehmet Yilmaz",
    teamName3: "Laura Schneider",
    teamRole1: "Practice Manager",
    teamRole2: "Dental Assistant",
    teamRole3: "Patient Care & Reception",
    teamBio1:
      "Anna Müller is the heart of the practice organization. With over 10 years of experience, she ensures smooth operations and a pleasant experience for every patient.",
    teamBio2:
      "Mehmet supports the medical team with precision and calmness. His friendly nature takes away patients' nervousness and builds trust.",
    teamBio3:
      "Laura accompanies patients from the first contact to aftercare. She places great value on individual care and a positive experience.",
    teamHobbies1: "Yoga, Traveling, Personal Development",
    teamHobbies2: "Fitness, Football, Technology",
    teamHobbies3: "Reading, Organization, Communication",
    teamPhilosophy1:
      "A good first impression defines the entire treatment experience.",
    teamPhilosophy2:
      "Trust is built through calmness, precision, and honest communication.",
    teamPhilosophy3: "Every patient deserves personal and empathetic care.",
    hobbies: "Hobbies",
    philosophy: "Philosophy",

    // Doctors
    doctorsTitle: "Our Dentists",
    doctorsDesc:
      "Experienced specialists with a passion for modern dentistry and patient well-being",
    doctor1Name: "Dr. med. dent. Lukas Weber",
    doctor1Specialty: "Implantology & Cosmetic Dentistry",
    doctor1Experience: "12 years of experience",
    doctor1Desc:
      "Specialized in modern implantology using minimally invasive techniques. His calm treatment style helps patients feel at ease.",
    doctor1Focus1: "Implantology",
    doctor1Focus2: "Cosmetic Dentistry",
    doctor1Focus3: "Minimally Invasive Procedures",
    doctor1Philosophy:
      "The focus is on calm, trustworthy treatment and maximum comfort for the patient.",
    doctor2Name: "Dr. med. dent. Sarah Klein",
    doctor2Specialty: "Orthodontics & Prevention",
    doctor2Experience: "9 years of experience",
    doctor2Desc:
      "An expert in gentle tooth correction for children and adults. Her focus is on trust and individualized care.",
    doctor2Focus1: "Orthodontics",
    doctor2Focus2: "Prevention",
    doctor2Focus3: "Individual Care",
    doctor2Philosophy:
      "Successful treatment begins with trust, patience, and personal support at eye level.",
    focusAreas: "Focus Areas",

    // Features
    featuresTitle: "Why Zahnzentrum Neckarblick?",
    featuresSubtitle: "Modern technology for a better patient experience.",
    feature1Title: "Digital Request Assistant",
    feature1Desc: "Submit your request in just a few clicks – no call needed.",
    feature2Title: "Quick Appointment Overview",
    feature2Desc: "Available appointments at a glance.",
    feature3Title: "Prescription Requests Without Waiting",
    feature3Desc: "Digital and simple – available 24/7.",
    feature4Title: "Structured Patient Requests",
    feature4Desc: "Clear categories for faster processing.",
    feature5Title: "Mobile-Optimized Usage",
    feature5Desc: "Accessible anytime – even on the go.",

    // Pricing
    pricesTitle: "Prices & Treatments",
    pricesSubtitle:
      "We inform you transparently before every treatment. No hidden costs.",
    priceCard1Title: "Teeth Cleaning",
    priceCard1Desc: "Give your teeth a fresh feeling ✨",
    priceCard1Price: "€80–150",
    priceCard1List1: "Thorough cleaning",
    priceCard1List2: "Fresh breath",
    priceCard1List3: "Prevention of cavities",
    priceCard1List4: "Long-term dental health",
    priceCard2Title: "Implants",
    priceCard2Desc: "Bite firmly again 💪",
    priceCard2Price: "from €2,000",
    priceCard2List1: "Teeth like real ones",
    priceCard2List2: "Long-lasting solution",
    priceCard2List3: "Better quality of life",
    priceCard2List4: "Individual planning",
    priceCard3Title: "Teeth Whitening",
    priceCard3Desc: "A smile that stands out 😁",
    priceCard3Price: "from €250",
    priceCard3List1: "Bright white teeth",
    priceCard3List2: "Fast treatment",
    priceCard3List3: "Visible results",
    priceCard3List4: "Gentle method",
    priceButton: "Request Appointment",
    priceNote:
      "All prices are indicative. Exact costs will be discussed individually.",

    // Contact
    contactTitle: "Contact & Directions",
    contactSubtitle: "We look forward to your visit.",
    contactAddress: "Address",
    contactPhone: "Phone",
    contactEmail: "Email",
    contactOpeningHours: "Opening Hours",
    contactMonThu: "Monday - Thursday",
    contactFri: "Friday",
    contactWeekend: "Saturday - Sunday",
    contactClosed: "Closed",

    // Testimonials
    testimonialsTitle: "What our patients say",
    testimonialsSubtitle: "Over 1000 satisfied patients already trust us.",
    testimonial1Quote: "Super easy appointment request, I was surprised how quickly everything went.",
    testimonial1Author: "Markus H.",
    testimonial2Quote: "Very friendly team and modern practice. I felt comfortable right away.",
    testimonial2Author: "Julia S.",
    testimonial3Quote: "Finally a practice that works digitally. No more waiting on the phone.",
    testimonial3Author: "Daniel K.",

    // Before & After
    beforeAfterTitle: "Before & After",
    beforeAfterSubtitle: "See our treatment results for yourself.",
    beforeLabel: "Before",
    afterLabel: "After",
    beforeAfter1Title: "Teeth Whitening",
    beforeAfter2Title: "Teeth Correction",
    beforeAfter3Title: "Implant",

    // Stories
    storiesTitle: "Stories that touch",
    storiesSubtitle: "Real experiences from our patients.",
    story1Text: "I was afraid of the dentist for a long time. Through the simple request process and the calm team, I finally took the step. Today I go to my appointments relaxed.",
    story2Text: "My teeth bothered me for years. After the treatment, I finally enjoy smiling again – it completely changed my confidence.",
    story3Text: "Before, everything was complicated with appointments. Now it only takes a few clicks – exactly how it should be.",

    // CTA Banner
    ctaTitle: "Quick & uncomplicated",
    ctaSubtitle: "Your request in just a few clicks – start now.",
    ctaButton: "Start appointment or request",
    ctaTrust1: "Done in under 1 minute",
    ctaTrust2: "No registration required",
    ctaTrust3: "Safe & confidential",

    // Footer
    footerDescription: "Modern dentistry in Horb am Neckar. Your smile in the best hands.",
    footerServices: "Services",
    footerTeam: "Team",
    footerPrices: "Prices",
    footerContact: "Contact",
    footerImprint: "Imprint",
    footerPrivacy: "Privacy Policy",
    footerRights: "All rights reserved.",
  },

  es: {
    // Navigation
    services: "Servicios",
    team: "Equipo",
    prices: "Precios",
    contact: "Contacto",
    book: "Reservar cita",

    // Hero
    title1: "Su sonrisa en",
    title2: "las mejores manos",
    description:
      "Odontología moderna con atención personalizada. Rápida, digital y sencilla, para una sonrisa radiante que usted merece.",
    points: [
      "Tratamiento moderno y sin dolor",
      "Sin espera al teléfono",
      "También apto para pacientes con miedo",
    ],
    heroButton: "Iniciar cita o solicitud",
    heroSubtext: "Tarda menos de 1 minuto",
    happyPatients: "Más de 1000 pacientes satisfechos",
    location: "Horb am Neckar",
    heroImageAlt: "Dentista tratando a una paciente",

    // Experience
    experienceYears: "12+",
    experienceLabel: "Años de experiencia",
    experienceModalTitle: "Más de 12 años de experiencia",
    experienceModalText1:
      "En los últimos 12 años hemos tratado con éxito a miles de pacientes, desde prevención hasta procedimientos complejos.",
    experienceModalText2:
      "La tecnología moderna, el tratamiento sin dolor y la atención personalizada son nuestra prioridad.",
    experienceModalText3:
      "Nuestro objetivo: resultados duraderos y una sonrisa con la que se sienta bien.",
    close: "Cerrar",

    // Services
    servicesTitle: "Nuestros servicios",
    servicesDesc:
      "Atención dental integral con tecnología moderna y atención personalizada.",
    service1Title: "Implantes",
    service1Desc:
      "Dientes fijos para una sonrisa segura. Soluciones duraderas con tecnología moderna.",
    service2Title: "Limpieza dental",
    service2Desc:
      "Limpieza profesional para dientes sanos y aliento fresco.",
    service3Title: "Ortodoncia",
    service3Desc: "Corrección dental suave para una sonrisa perfecta.",
    service4Title: "Odontología estética",
    service4Desc: "Mejora de la sonrisa para una apariencia radiante.",
    learnMore: "Más información",
    ctaConsultation: "Reservar consulta",
    noRegistration: "No se requiere registro",

    // Team
    teamTitle: "Equipo",
    teamDesc: "Conoce a nuestro equipo",
    teamName1: "Anna Müller",
    teamName2: "Mehmet Yilmaz",
    teamName3: "Laura Schneider",
    teamRole1: "Gerente de la clínica",
    teamRole2: "Asistente dental",
    teamRole3: "Atención al paciente & Recepción",
    teamBio1:
      "Anna Müller es el corazón de la organización de la clínica. Con más de 10 años de experiencia, garantiza un funcionamiento fluido y una experiencia agradable para cada paciente.",
    teamBio2:
      "Mehmet apoya al equipo médico con precisión y calma. Su carácter amable reduce el nerviosismo de los pacientes y genera confianza.",
    teamBio3:
      "Laura acompaña a los pacientes desde el primer contacto hasta el seguimiento. Da gran importancia a la atención individual y a una experiencia positiva.",
    teamHobbies1: "Yoga, Viajar, Desarrollo personal",
    teamHobbies2: "Fitness, Fútbol, Tecnología",
    teamHobbies3: "Lectura, Organización, Comunicación",
    teamPhilosophy1:
      "Una buena primera impresión define toda la experiencia del tratamiento.",
    teamPhilosophy2:
      "La confianza se construye con calma, precisión y comunicación honesta.",
    teamPhilosophy3:
      "Cada paciente merece una atención personal y empática.",
    hobbies: "Aficiones",
    philosophy: "Filosofía",

    // Doctors
    doctorsTitle: "Sus dentistas",
    doctorsDesc:
      "Especialistas con experiencia y pasión por la odontología moderna y el bienestar del paciente",
    doctor1Name: "Dr. med. dent. Lukas Weber",
    doctor1Specialty: "Implantología & Odontología estética",
    doctor1Experience: "12 años de experiencia",
    doctor1Desc:
      "Especializado en implantología moderna con técnicas mínimamente invasivas. Su estilo tranquilo garantiza pacientes relajados.",
    doctor1Focus1: "Implantología",
    doctor1Focus2: "Odontología estética",
    doctor1Focus3: "Procedimientos mínimamente invasivos",
    doctor1Philosophy:
      "El enfoque está en un tratamiento tranquilo basado en la confianza y el máximo confort del paciente.",
    doctor2Name: "Dr. med. dent. Sarah Klein",
    doctor2Specialty: "Ortodoncia & Prevención",
    doctor2Experience: "9 años de experiencia",
    doctor2Desc:
      "Experta en corrección dental suave para niños y adultos con enfoque en la confianza y atención personalizada.",
    doctor2Focus1: "Ortodoncia",
    doctor2Focus2: "Prevención",
    doctor2Focus3: "Atención personalizada",
    doctor2Philosophy:
      "Un tratamiento exitoso comienza con confianza, paciencia y acompañamiento personal.",
    focusAreas: "Áreas de enfoque",

    // Features
    featuresTitle: "¿Por qué Zahnzentrum Neckarblick?",
    featuresSubtitle:
      "Tecnología moderna para una mejor experiencia del paciente.",
    feature1Title: "Asistente digital de solicitudes",
    feature1Desc: "Envía tu solicitud en pocos clics – sin llamadas.",
    feature2Title: "Vista rápida de citas",
    feature2Desc: "Citas disponibles de un vistazo.",
    feature3Title: "Solicitudes de recetas sin espera",
    feature3Desc: "Digital y sencillo – disponible 24/7.",
    feature4Title: "Solicitudes de pacientes estructuradas",
    feature4Desc: "Categorías claras para un procesamiento rápido.",
    feature5Title: "Uso optimizado para móviles",
    feature5Desc: "Accesible en cualquier momento – incluso en movimiento.",

    // Pricing
    pricesTitle: "Precios & Tratamientos",
    pricesSubtitle:
      "Le informamos de forma transparente antes de cada tratamiento. Sin costes ocultos.",
    priceCard1Title: "Limpieza dental",
    priceCard1Desc: "Dale a tus dientes una sensación de frescura ✨",
    priceCard1Price: "80–150 €",
    priceCard1List1: "Limpieza profunda",
    priceCard1List2: "Aliento fresco",
    priceCard1List3: "Prevención de caries",
    priceCard1List4: "Salud dental a largo plazo",
    priceCard2Title: "Implantes",
    priceCard2Desc: "Vuelve a morder con fuerza 💪",
    priceCard2Price: "desde 2.000 €",
    priceCard2List1: "Dientes como los naturales",
    priceCard2List2: "Solución duradera",
    priceCard2List3: "Mejor calidad de vida",
    priceCard2List4: "Planificación individual",
    priceCard3Title: "Blanqueamiento",
    priceCard3Desc: "Una sonrisa que destaca 😁",
    priceCard3Price: "desde 250 €",
    priceCard3List1: "Dientes blancos brillantes",
    priceCard3List2: "Tratamiento rápido",
    priceCard3List3: "Resultados visibles",
    priceCard3List4: "Método suave",
    priceButton: "Solicitar cita",
    priceNote:
      "Todos los precios son orientativos. Los costes exactos se determinarán individualmente.",

    // Contact
    contactTitle: "Contacto & Ubicación",
    contactSubtitle: "Esperamos su visita.",
    contactAddress: "Dirección",
    contactPhone: "Teléfono",
    contactEmail: "Correo electrónico",
  contactOpeningHours: "Horario de apertura",
  contactMonThu: "Lunes - Jueves",
  contactFri: "Viernes",
  contactWeekend: "Sábado - Domingo",
  contactClosed: "Cerrado",

    // Testimonials
    testimonialsTitle: "Lo que dicen nuestros pacientes",
    testimonialsSubtitle: "Más de 1000 pacientes satisfechos ya confían en nosotros.",
    testimonial1Quote: "Solicitar cita fue muy fácil, me sorprendió lo rápido que fue todo.",
    testimonial1Author: "Markus H.",
    testimonial2Quote: "Equipo muy amable y clínica moderna. Me sentí cómodo de inmediato.",
    testimonial2Author: "Julia S.",
    testimonial3Quote: "Por fin una clínica que funciona digitalmente. No más esperas al teléfono.",
    testimonial3Author: "Daniel K.",

    // Before & After
    beforeAfterTitle: "Antes y Después",
    beforeAfterSubtitle: "Compruebe usted mismo nuestros resultados de tratamiento.",
    beforeLabel: "Antes",
    afterLabel: "Después",
    beforeAfter1Title: "Blanqueamiento dental",
    beforeAfter2Title: "Corrección dental",
    beforeAfter3Title: "Implante",

    // Stories
    storiesTitle: "Historias que conmueven",
    storiesSubtitle: "Experiencias reales de nuestros pacientes.",
    story1Text: "Tuve miedo al dentista durante mucho tiempo. Gracias al sencillo proceso de solicitud y al equipo tranquilo, finalmente di el paso. Hoy voy a mis citas relajado.",
    story2Text: "Mis dientes me molestaron durante años. Después del tratamiento, finalmente disfruto sonriendo de nuevo – cambió completamente mi confianza.",
    story3Text: "Antes, todo era complicado con las citas. Ahora solo se necesitan unos pocos clics – exactamente como debería ser.",

    // CTA Banner
    ctaTitle: "Rápido y sencillo",
    ctaSubtitle: "Su solicitud en pocos clics – empiece ahora.",
    ctaButton: "Iniciar cita o solicitud",
    ctaTrust1: "Hecho en menos de 1 minuto",
    ctaTrust2: "Sin registro",
    ctaTrust3: "Seguro y confidencial",

    // Footer
    footerDescription: "Odontología moderna en Horb am Neckar. Su sonrisa en las mejores manos.",
    footerServices: "Servicios",
    footerTeam: "Equipo",
    footerPrices: "Precios",
    footerContact: "Contacto",
    footerImprint: "Aviso legal",
    footerPrivacy: "Privacidad",
    footerRights: "Todos los derechos reservados.",
  },
  
  fr: {
    // Navigation
    services: "Services",
    team: "Équipe",
    prices: "Prix",
    contact: "Contact",
    book: "Prendre rendez-vous",

    // Hero
    title1: "Votre sourire entre",
    title2: "de bonnes mains",
    description:
      "Dentisterie moderne avec un accompagnement personnalisé. Rapide, numérique et simple — pour un sourire éclatant que vous méritez.",
    points: [
      "Traitement moderne et sans douleur",
      "Aucune attente au téléphone",
      "Convient aussi aux patients anxieux",
    ],
    heroButton: "Prendre rendez-vous ou faire une demande",
    heroSubtext: "Prend moins d'une minute",
    happyPatients: "1000+ patients satisfaits",
    location: "Horb am Neckar",
    heroImageAlt: "Dentiste traitant une patiente",

    // Experience
    experienceYears: "12+",
    experienceLabel: "Ans d'expérience",
    experienceModalTitle: "Plus de 12 ans d'expérience",
    experienceModalText1:
      "Au cours des 12 dernières années, nous avons traité avec succès des milliers de patients, de la prévention aux interventions complexes.",
    experienceModalText2:
      "La technologie moderne, les soins sans douleur et l'accompagnement personnalisé sont au cœur de notre travail.",
    experienceModalText3:
      "Notre objectif : des résultats durables et un sourire dans lequel vous vous sentez bien.",
    close: "Fermer",

    // Services
    servicesTitle: "Nos services",
    servicesDesc:
      "Soins dentaires complets avec technologie moderne et attention personnalisée.",
    service1Title: "Implants dentaires",
    service1Desc:
      "Dents fixes pour un sourire sûr. Solutions durables avec technologie moderne.",
    service2Title: "Nettoyage des dents",
    service2Desc:
      "Nettoyage professionnel pour des dents saines et une haleine fraîche.",
    service3Title: "Orthodontie",
    service3Desc: "Correction douce des dents pour un sourire parfait.",
    service4Title: "Dentisterie esthétique",
    service4Desc: "Amélioration du sourire pour une apparence éclatante.",
    learnMore: "En savoir plus",
    ctaConsultation: "Prendre rendez-vous",
    noRegistration: "Aucune inscription requise",

    // Team
    teamTitle: "Équipe",
    teamDesc: "Rencontrez notre équipe",
    teamName1: "Anna Müller",
    teamName2: "Mehmet Yilmaz",
    teamName3: "Laura Schneider",
    teamRole1: "Responsable du cabinet",
    teamRole2: "Assistant(e) dentaire",
    teamRole3: "Accueil & Service patient",
    teamBio1:
      "Anna Müller est le cœur de l'organisation du cabinet. Avec plus de 10 ans d'expérience, elle assure un déroulement fluide et une expérience agréable pour chaque patient.",
    teamBio2:
      "Mehmet soutient l'équipe médicale avec précision et calme. Sa nature amicale réduit l'anxiété des patients et crée de la confiance.",
    teamBio3:
      "Laura accompagne les patients du premier contact jusqu'au suivi. Elle accorde une grande importance à un accompagnement personnalisé et à une expérience positive.",
    teamHobbies1: "Yoga, Voyages, Développement personnel",
    teamHobbies2: "Fitness, Football, Technologie",
    teamHobbies3: "Lecture, Organisation, Communication",
    teamPhilosophy1:
      "Une bonne première impression détermine toute l'expérience du traitement.",
    teamPhilosophy2:
      "La confiance naît du calme, de la précision et d'une communication honnête.",
    teamPhilosophy3:
      "Chaque patient mérite un accompagnement personnel et empathique.",
    hobbies: "Loisirs",
    philosophy: "Philosophie",

    // Doctors
    doctorsTitle: "Vos dentistes",
    doctorsDesc:
      "Des spécialistes expérimentés passionnés par la dentisterie moderne et le bien-être des patients",
    doctor1Name: "Dr. med. dent. Lukas Weber",
    doctor1Specialty: "Implantologie & Dentisterie esthétique",
    doctor1Experience: "12 ans d'expérience",
    doctor1Desc:
      "Spécialisé en implantologie moderne avec des techniques mini-invasives. Son approche calme assure des patients détendus.",
    doctor1Focus1: "Implantologie",
    doctor1Focus2: "Dentisterie esthétique",
    doctor1Focus3: "Techniques mini-invasives",
    doctor1Philosophy:
      "L'accent est mis sur un traitement calme basé sur la confiance et un confort maximal pour le patient.",
    doctor2Name: "Dr. med. dent. Sarah Klein",
    doctor2Specialty: "Orthodontie & Prévention",
    doctor2Experience: "9 ans d'expérience",
    doctor2Desc:
      "Experte en correction douce des dents pour enfants et adultes avec un focus sur la confiance et le suivi personnalisé.",
    doctor2Focus1: "Orthodontie",
    doctor2Focus2: "Prévention",
    doctor2Focus3: "Suivi personnalisé",
    doctor2Philosophy:
      "Un traitement réussi commence par la confiance, la patience et un accompagnement personnalisé.",
    focusAreas: "Domaines clés",

    // Features
    featuresTitle: "Pourquoi Zahnzentrum Neckarblick ?",
    featuresSubtitle:
      "Une technologie moderne pour une meilleure expérience patient.",
    feature1Title: "Assistant de demande numérique",
    feature1Desc:
      "Soumettez votre demande en quelques clics – sans appel.",
    feature2Title: "Vue rapide des rendez-vous",
    feature2Desc: "Les créneaux disponibles en un coup d'œil.",
    feature3Title: "Demandes d'ordonnance sans attente",
    feature3Desc: "Numérique et simple – disponible 24h/24.",
    feature4Title: "Demandes patients structurées",
    feature4Desc: "Catégories claires pour un traitement rapide.",
    feature5Title: "Utilisation optimisée mobile",
    feature5Desc: "Accessible à tout moment – même en déplacement.",

    // Pricing
    pricesTitle: "Prix & Traitements",
    pricesSubtitle:
      "Nous vous informons en toute transparence avant chaque traitement. Aucun coût caché.",
    priceCard1Title: "Nettoyage dentaire",
    priceCard1Desc: "Offrez à vos dents une sensation de fraîcheur ✨",
    priceCard1Price: "80–150 €",
    priceCard1List1: "Nettoyage en profondeur",
    priceCard1List2: "Haleine fraîche",
    priceCard1List3: "Prévention des caries",
    priceCard1List4: "Santé dentaire durable",
    priceCard2Title: "Implants",
    priceCard2Desc: "Retrouvez une mastication solide 💪",
    priceCard2Price: "à partir de 2000 €",
    priceCard2List1: "Dents fixes comme naturelles",
    priceCard2List2: "Solution durable",
    priceCard2List3: "Meilleure qualité de vie",
    priceCard2List4: "Planification personnalisée",
    priceCard3Title: "Blanchiment",
    priceCard3Desc: "Un sourire éclatant 😁",
    priceCard3Price: "à partir de 250 €",
    priceCard3List1: "Dents blanches éclatantes",
    priceCard3List2: "Traitement rapide",
    priceCard3List3: "Résultats visibles",
    priceCard3List4: "Méthode douce",
    priceButton: "Prendre rendez-vous",
    priceNote:
      "Tous les prix sont indicatifs. Les coûts exacts sont définis individuellement.",

    // Contact
    contactTitle: "Contact & Accès",
    contactSubtitle: "Nous nous réjouissons de votre visite.",
    contactAddress: "Adresse",
    contactPhone: "Téléphone",
    contactEmail: "E-mail",
  contactOpeningHours: "Horaires d'ouverture",
  contactMonThu: "Lundi - Jeudi",
  contactFri: "Vendredi",
  contactWeekend: "Samedi - Dimanche",
  contactClosed: "Fermé",

    // Testimonials
    testimonialsTitle: "Ce que disent nos patients",
    testimonialsSubtitle: "Plus de 1000 patients satisfaits nous font déjà confiance.",
    testimonial1Quote: "Demande de rendez-vous super facile, j'ai été surpris de la rapidité.",
    testimonial1Author: "Markus H.",
    testimonial2Quote: "Équipe très sympathique et cabinet moderne. Je me suis senti à l'aise immédiatement.",
    testimonial2Author: "Julia S.",
    testimonial3Quote: "Enfin un cabinet qui fonctionne numériquement. Plus d'attente au téléphone.",
    testimonial3Author: "Daniel K.",

    // Before & After
    beforeAfterTitle: "Avant et Après",
    beforeAfterSubtitle: "Découvrez vous-même nos résultats de traitement.",
    beforeLabel: "Avant",
    afterLabel: "Après",
    beforeAfter1Title: "Blanchiment dentaire",
    beforeAfter2Title: "Correction dentaire",
    beforeAfter3Title: "Implant",

    // Stories
    storiesTitle: "Histoires qui touchent",
    storiesSubtitle: "Expériences réelles de nos patients.",
    story1Text: "J'ai eu peur du dentiste pendant longtemps. Grâce au processus de demande simple et à l'équipe calme, j'ai finalement franchi le pas. Aujourd'hui, je vais à mes rendez-vous détendu.",
    story2Text: "Mes dents m'ont gêné pendant des années. Après le traitement, j'aime enfin sourire à nouveau – cela a complètement changé ma confiance.",
    story3Text: "Avant, tout était compliqué avec les rendez-vous. Maintenant, il suffit de quelques clics – exactement comme ça devrait être.",

    // CTA Banner
    ctaTitle: "Rapide et simple",
    ctaSubtitle: "Votre demande en quelques clics – commencez maintenant.",
    ctaButton: "Démarrer un rendez-vous ou une demande",
    ctaTrust1: "Fait en moins d'1 minute",
    ctaTrust2: "Sans inscription",
    ctaTrust3: "Sûr et confidentiel",

    // Footer
    footerDescription: "Dentisterie moderne à Horb am Neckar. Votre sourire entre de bonnes mains.",
    footerServices: "Services",
    footerTeam: "Équipe",
    footerPrices: "Tarifs",
    footerContact: "Contact",
    footerImprint: "Mentions légales",
    footerPrivacy: "Confidentialité",
    footerRights: "Tous droits réservés.",
  },
  
  it: {
    // Navigation
    services: "Servizi",
    team: "Team",
    prices: "Prezzi",
    contact: "Contatto",
    book: "Prenota appuntamento",

    // Hero
    title1: "Il tuo sorriso in",
    title2: "buone mani",
    description:
      "Odontoiatria moderna con assistenza personalizzata. Veloce, digitale e semplice — per un sorriso splendente che meriti.",
    points: [
      "Trattamento moderno e senza dolore",
      "Nessuna attesa al telefono",
      "Adatto anche a pazienti ansiosi",
    ],
    heroButton: "Avvia appuntamento o richiesta",
    heroSubtext: "Richiede meno di 1 minuto",
    happyPatients: "Oltre 1000 pazienti soddisfatti",
    location: "Horb am Neckar",
    heroImageAlt: "Dentista che tratta una paziente",

    // Experience
    experienceYears: "12+",
    experienceLabel: "Anni di esperienza",
    experienceModalTitle: "Oltre 12 anni di esperienza",
    experienceModalText1:
      "Negli ultimi 12 anni abbiamo trattato con successo migliaia di pazienti, dalla prevenzione agli interventi complessi.",
    experienceModalText2:
      "Tecnologia moderna, trattamenti senza dolore e assistenza personale sono al centro del nostro lavoro.",
    experienceModalText3:
      "Il nostro obiettivo: risultati duraturi e un sorriso che ti faccia sentire bene.",
    close: "Chiudi",

    // Services
    servicesTitle: "I nostri servizi",
    servicesDesc:
      "Cura dentale completa con tecnologia moderna e attenzione personale.",
    service1Title: "Impianti dentali",
    service1Desc:
      "Denti fissi per un sorriso sicuro. Soluzioni durature con tecnologia moderna.",
    service2Title: "Pulizia dei denti",
    service2Desc:
      "Pulizia professionale per denti sani e alito fresco.",
    service3Title: "Ortodonzia",
    service3Desc: "Correzione dentale delicata per un sorriso perfetto.",
    service4Title: "Odontoiatria estetica",
    service4Desc: "Miglioramento del sorriso per un aspetto radioso.",
    learnMore: "Scopri di più",
    ctaConsultation: "Prenota consulenza",
    noRegistration: "Nessuna registrazione richiesta",

    // Team
    teamTitle: "Team",
    teamDesc: "Scopri il nostro team",
    teamName1: "Anna Müller",
    teamName2: "Mehmet Yilmaz",
    teamName3: "Laura Schneider",
    teamRole1: "Responsabile dello studio",
    teamRole2: "Assistente dentale",
    teamRole3: "Accoglienza & Assistenza pazienti",
    teamBio1:
      "Anna Müller è il cuore dell'organizzazione dello studio. Con oltre 10 anni di esperienza, garantisce un flusso di lavoro senza intoppi e un'esperienza piacevole per ogni paziente.",
    teamBio2:
      "Mehmet supporta il team medico con precisione e calma. Il suo modo amichevole riduce la tensione dei pazienti e crea fiducia.",
    teamBio3:
      "Laura accompagna i pazienti dal primo contatto fino al follow-up. Dà grande importanza alla cura individuale e a un'esperienza positiva.",
    teamHobbies1: "Yoga, Viaggi, Crescita personale",
    teamHobbies2: "Fitness, Calcio, Tecnologia",
    teamHobbies3: "Lettura, Organizzazione, Comunicazione",
    teamPhilosophy1:
      "Una buona prima impressione determina l'intera esperienza del trattamento.",
    teamPhilosophy2:
      "La fiducia nasce da calma, precisione e comunicazione sincera.",
    teamPhilosophy3:
      "Ogni paziente merita un'assistenza personale ed empatica.",
    hobbies: "Passatempi",
    philosophy: "Filosofia",

    // Doctors
    doctorsTitle: "I vostri dentisti",
    doctorsDesc:
      "Specialisti esperti con passione per l'odontoiatria moderna e il benessere dei pazienti",
    doctor1Name: "Dr. med. dent. Lukas Weber",
    doctor1Specialty: "Implantologia & Odontoiatria estetica",
    doctor1Experience: "12 anni di esperienza",
    doctor1Desc:
      "Specializzato in implantologia moderna con tecniche minimamente invasive. Il suo stile calmo garantisce pazienti rilassati.",
    doctor1Focus1: "Implantologia",
    doctor1Focus2: "Odontoiatria estetica",
    doctor1Focus3: "Procedure minimamente invasive",
    doctor1Philosophy:
      "L'attenzione è su un trattamento calmo e basato sulla fiducia con il massimo comfort per il paziente.",
    doctor2Name: "Dr. med. dent. Sarah Klein",
    doctor2Specialty: "Ortodonzia & Prevenzione",
    doctor2Experience: "9 anni di esperienza",
    doctor2Desc:
      "Esperta in correzione dentale delicata per bambini e adulti con focus su fiducia e cura personalizzata.",
    doctor2Focus1: "Ortodonzia",
    doctor2Focus2: "Prevenzione",
    doctor2Focus3: "Cura personalizzata",
    doctor2Philosophy:
      "Un trattamento di successo inizia con fiducia, pazienza e supporto personale.",
    focusAreas: "Aree di specializzazione",

    // Features
    featuresTitle: "Perché Zahnzentrum Neckarblick?",
    featuresSubtitle:
      "Tecnologia moderna per una migliore esperienza del paziente.",
    feature1Title: "Assistente digitale per richieste",
    feature1Desc: "Invia la tua richiesta in pochi clic – senza chiamare.",
    feature2Title: "Panoramica veloce degli appuntamenti",
    feature2Desc: "Appuntamenti disponibili a colpo d'occhio.",
    feature3Title: "Richieste di prescrizione senza attesa",
    feature3Desc: "Digitale e semplice – disponibile 24/7.",
    feature4Title: "Richieste pazienti strutturate",
    feature4Desc: "Categorie chiare per una gestione rapida.",
    feature5Title: "Utilizzo ottimizzato per mobile",
    feature5Desc: "Accessibile in qualsiasi momento – anche in movimento.",

    // Pricing
    pricesTitle: "Prezzi & Trattamenti",
    pricesSubtitle:
      "Vi informiamo in modo trasparente prima di ogni trattamento. Nessun costo nascosto.",
    priceCard1Title: "Pulizia dentale",
    priceCard1Desc: "Regala ai tuoi denti una sensazione di freschezza ✨",
    priceCard1Price: "80–150 €",
    priceCard1List1: "Pulizia approfondita",
    priceCard1List2: "Alito fresco",
    priceCard1List3: "Prevenzione della carie",
    priceCard1List4: "Salute dentale a lungo termine",
    priceCard2Title: "Impianti",
    priceCard2Desc: "Torna a mordere con forza 💪",
    priceCard2Price: "da 2.000 €",
    priceCard2List1: "Denti come naturali",
    priceCard2List2: "Soluzione duratura",
    priceCard2List3: "Maggiore qualità della vita",
    priceCard2List4: "Pianificazione personalizzata",
    priceCard3Title: "Sbiancamento",
    priceCard3Desc: "Un sorriso che si distingue 😁",
    priceCard3Price: "da 250 €",
    priceCard3List1: "Denti bianchi brillanti",
    priceCard3List2: "Trattamento veloce",
    priceCard3List3: "Risultati visibili",
    priceCard3List4: "Metodo delicato",
    priceButton: "Richiedi appuntamento",
    priceNote:
      "Tutti i prezzi sono indicativi. I costi esatti saranno concordati individualmente.",

    // Contact
    contactTitle: "Contatto & Direzioni",
    contactSubtitle: "Non vediamo l'ora della vostra visita.",
    contactAddress: "Indirizzo",
    contactPhone: "Telefono",
    contactEmail: "E-mail",
  contactOpeningHours: "Orari di apertura",
  contactMonThu: "Lunedì - Giovedì",
  contactFri: "Venerdì",
  contactWeekend: "Sabato - Domenica",
  contactClosed: "Chiuso",

    // Testimonials
    testimonialsTitle: "Cosa dicono i nostri pazienti",
    testimonialsSubtitle: "Oltre 1000 pazienti soddisfatti si fidano già di noi.",
    testimonial1Quote: "Richiesta di appuntamento semplicissima, sono rimasto sorpreso dalla velocità.",
    testimonial1Author: "Markus H.",
    testimonial2Quote: "Team molto gentile e studio moderno. Mi sono sentito subito a mio agio.",
    testimonial2Author: "Julia S.",
    testimonial3Quote: "Finalmente uno studio che funziona digitalmente. Niente più attese al telefono.",
    testimonial3Author: "Daniel K.",

    // Before & After
    beforeAfterTitle: "Prima e Dopo",
    beforeAfterSubtitle: "Scoprite voi stessi i nostri risultati di trattamento.",
    beforeLabel: "Prima",
    afterLabel: "Dopo",
    beforeAfter1Title: "Sbiancamento dentale",
    beforeAfter2Title: "Correzione dentale",
    beforeAfter3Title: "Impianto",

    // Stories
    storiesTitle: "Storie che toccano",
    storiesSubtitle: "Esperienze reali dei nostri pazienti.",
    story1Text: "Ho avuto paura del dentista per molto tempo. Grazie al semplice processo di richiesta e al team calmo, ho finalmente fatto il passo. Oggi vado ai miei appuntamenti rilassato.",
    story2Text: "I miei denti mi hanno dato fastidio per anni. Dopo il trattamento, finalmente mi piace sorridere di nuovo – ha cambiato completamente la mia fiducia.",
    story3Text: "Prima, tutto era complicato con gli appuntamenti. Ora bastano pochi clic – esattamente come dovrebbe essere.",

    // CTA Banner
    ctaTitle: "Veloce e semplice",
    ctaSubtitle: "La tua richiesta in pochi clic – inizia ora.",
    ctaButton: "Avvia appuntamento o richiesta",
    ctaTrust1: "Fatto in meno di 1 minuto",
    ctaTrust2: "Senza registrazione",
    ctaTrust3: "Sicuro e riservato",

    // Footer
    footerDescription: "Odontoiatria moderna a Horb am Neckar. Il tuo sorriso nelle migliori mani.",
    footerServices: "Servizi",
    footerTeam: "Team",
    footerPrices: "Prezzi",
    footerContact: "Contatto",
    footerImprint: "Note legali",
    footerPrivacy: "Privacy",
    footerRights: "Tutti i diritti riservati.",
  },
  
  tr: {
    // Navigation
    services: "Hizmetler",
    team: "Ekip",
    prices: "Fiyatlar",
    contact: "İletişim",
    book: "Randevu al",

    // Hero
    title1: "Gülüşünüz",
    title2: "emin ellerde",
    description:
      "Kişisel ilgiyle modern diş hekimliği. Hızlı, dijital ve zahmetsiz — hak ettiğiniz parlak bir gülüş için.",
    points: [
      "Modern ve ağrısız tedavi",
      "Telefonda bekleme yok",
      "Kaygılı hastalar için de uygun",
    ],
    heroButton: "Randevu veya talep başlat",
    heroSubtext: "1 dakikadan az sürer",
    happyPatients: "1000+ mutlu hasta",
    location: "Horb am Neckar",
    heroImageAlt: "Diş hekimi bir hastayı tedavi ediyor",

    // Experience
    experienceYears: "12+",
    experienceLabel: "Yıllık deneyim",
    experienceModalTitle: "12 yılı aşkın deneyim",
    experienceModalText1:
      "Son 12 yılda, koruyucu bakımdan karmaşık işlemlere kadar binlerce hastayı başarıyla tedavi ettik.",
    experienceModalText2:
      "Modern teknoloji, ağrısız tedavi ve kişisel ilgi çalışmalarımızın merkezindedir.",
    experienceModalText3:
      "Hedefimiz: kalıcı sonuçlar ve size iyi hissettiren bir gülüş.",
    close: "Kapat",

    // Services
    servicesTitle: "Hizmetlerimiz",
    servicesDesc:
      "Modern teknoloji ve kişisel ilgiyle kapsamlı diş bakımı.",
    service1Title: "İmplantlar",
    service1Desc:
      "Güvenli bir gülüş için sabit dişler. Modern teknolojiyle kalıcı çözümler.",
    service2Title: "Diş temizliği",
    service2Desc: "Sağlıklı dişler ve taze nefes için profesyonel temizlik.",
    service3Title: "Ortodonti",
    service3Desc: "Mükemmel bir gülüş için nazik diş düzeltme.",
    service4Title: "Estetik diş hekimliği",
    service4Desc: "Parlak bir görünüm için gülüşünüzü güzelleştirme.",
    learnMore: "Daha fazla bilgi",
    ctaConsultation: "Danışma al",
    noRegistration: "Kayıt gerekmez",

    // Team
    teamTitle: "Ekibimiz",
    teamDesc: "Ekibimizle tanışın",
    teamName1: "Anna Müller",
    teamName2: "Mehmet Yilmaz",
    teamName3: "Laura Schneider",
    teamRole1: "Klinik Yöneticisi",
    teamRole2: "Diş Hekimi Asistanı",
    teamRole3: "Hasta Hizmetleri & Resepsiyon",
    teamBio1:
      "Anna Müller, muayene organizasyonunun kalbidir. 10 yılı aşkın deneyimiyle sorunsuz bir süreç ve her hasta için keyifli bir deneyim sağlar.",
    teamBio2:
      "Mehmet, doktor ekibini hassasiyet ve sakinlikle destekler. Samimi tavrı hastaların gerginliğini azaltır ve güven oluşturur.",
    teamBio3:
      "Laura, hastalara ilk temastan tedavi sonrası sürece kadar eşlik eder. Bireysel ilgi ve olumlu bir deneyime büyük önem verir.",
    teamHobbies1: "Yoga, Seyahat, Kişisel Gelişim",
    teamHobbies2: "Fitness, Futbol, Teknoloji",
    teamHobbies3: "Okuma, Organizasyon, İletişim",
    teamPhilosophy1:
      "İyi bir ilk izlenim, tüm tedavi deneyimini belirler.",
    teamPhilosophy2:
      "Güven, sakinlik, hassasiyet ve dürüst iletişimle oluşur.",
    teamPhilosophy3:
      "Her hasta kişisel ve empatik bir bakımı hak eder.",
    hobbies: "Hobiler",
    philosophy: "Felsefe",

    // Doctors
    doctorsTitle: "Diş Hekimleriniz",
    doctorsDesc:
      "Modern diş hekimliği ve hasta memnuniyetine tutkuyla bağlı deneyimli uzmanlar",
    doctor1Name: "Dr. med. dent. Lukas Weber",
    doctor1Specialty: "İmplantoloji & Estetik Diş Hekimliği",
    doctor1Experience: "12 yıl deneyim",
    doctor1Desc:
      "Minimal invaziv tekniklerle modern implantoloji konusunda uzmanlaşmıştır. Sakin tedavi tarzı hastaların rahatlamasını sağlar.",
    doctor1Focus1: "İmplantoloji",
    doctor1Focus2: "Estetik Diş Hekimliği",
    doctor1Focus3: "Minimal İnvaziv Yöntemler",
    doctor1Philosophy:
      "Odak noktası, güvene dayalı sakin bir tedavi ve maksimum hasta konforudur.",
    doctor2Name: "Dr. med. dent. Sarah Klein",
    doctor2Specialty: "Ortodonti & Önleyici Tedavi",
    doctor2Experience: "9 yıl deneyim",
    doctor2Desc:
      "Çocuklar ve yetişkinler için nazik diş düzeltme konusunda uzmandır. Güven ve bireysel bakım odaklıdır.",
    doctor2Focus1: "Ortodonti",
    doctor2Focus2: "Önleyici Tedavi",
    doctor2Focus3: "Bireysel Bakım",
    doctor2Philosophy:
      "Başarılı bir tedavi, güven, sabır ve kişisel destekle başlar.",
    focusAreas: "Uzmanlık Alanları",

    // Features
    featuresTitle: "Neden Zahnzentrum Neckarblick?",
    featuresSubtitle:
      "Daha iyi bir hasta deneyimi için modern teknoloji.",
    feature1Title: "Dijital Talep Asistanı",
    feature1Desc:
      "Talebinizi birkaç tıklama ile iletin – aramaya gerek yok.",
    feature2Title: "Hızlı Randevu Görünümü",
    feature2Desc: "Mevcut randevulara tek bakışta ulaşın.",
    feature3Title: "Beklemeden Reçete Talepleri",
    feature3Desc: "Dijital ve kolay – 7/24 erişilebilir.",
    feature4Title: "Yapılandırılmış Hasta Talepleri",
    feature4Desc: "Hızlı işlem için net kategoriler.",
    feature5Title: "Mobil Uyumlu Kullanım",
    feature5Desc: "Her zaman erişilebilir – hareket halindeyken bile.",

    // Pricing
    pricesTitle: "Fiyatlar & Tedaviler",
    pricesSubtitle:
      "Her tedavi öncesinde sizi şeffaf bir şekilde bilgilendiriyoruz. Gizli maliyet yok.",
    priceCard1Title: "Diş Temizliği",
    priceCard1Desc: "Dişlerinize ferahlık kazandırın ✨",
    priceCard1Price: "80–150 €",
    priceCard1List1: "Derinlemesine temizlik",
    priceCard1List2: "Ferah nefes",
    priceCard1List3: "Çürük önleme",
    priceCard1List4: "Uzun vadeli diş sağlığı",
    priceCard2Title: "İmplantlar",
    priceCard2Desc: "Yeniden güçlü ısırın 💪",
    priceCard2Price: "2000 €'dan itibaren",
    priceCard2List1: "Gerçek gibi dişler",
    priceCard2List2: "Uzun ömürlü çözüm",
    priceCard2List3: "Daha iyi yaşam kalitesi",
    priceCard2List4: "Kişiye özel planlama",
    priceCard3Title: "Beyazlatma",
    priceCard3Desc: "Dikkat çeken bir gülüş 😁",
    priceCard3Price: "250 €'dan itibaren",
    priceCard3List1: "Parlak beyaz dişler",
    priceCard3List2: "Hızlı işlem",
    priceCard3List3: "Görünür sonuçlar",
    priceCard3List4: "Nazik yöntem",
    priceButton: "Randevu Al",
    priceNote:
      "Tüm fiyatlar yaklaşık değerlerdir. Kesin maliyetler bireysel olarak belirlenir.",

    // Contact
    contactTitle: "İletişim & Konum",
    contactSubtitle: "Ziyaretinizi dört gözle bekliyoruz.",
    contactAddress: "Adres",
    contactPhone: "Telefon",
    contactEmail: "E-posta",
  contactOpeningHours: "Açılış Saatleri",
  contactMonThu: "Pazartesi - Perşembe",
  contactFri: "Cuma",
  contactWeekend: "Cumartesi - Pazar",
  contactClosed: "Kapalı",

    // Testimonials
    testimonialsTitle: "Hastalarımız ne diyor",
    testimonialsSubtitle: "1000'den fazla memnun hasta bize güveniyor.",
    testimonial1Quote: "Randevu talebi çok kolaydı, her şeyin ne kadar hızlı olduğuna şaşırdım.",
    testimonial1Author: "Markus H.",
    testimonial2Quote: "Çok güler yüzlü ekip ve modern klinik. Hemen rahat hissettim.",
    testimonial2Author: "Julia S.",
    testimonial3Quote: "Sonunda dijital çalışan bir klinik. Artık telefonda bekleme yok.",
    testimonial3Author: "Daniel K.",

    // Before & After
    beforeAfterTitle: "Önce ve Sonra",
    beforeAfterSubtitle: "Tedavi sonuçlarımızı kendiniz görün.",
    beforeLabel: "Önce",
    afterLabel: "Sonra",
    beforeAfter1Title: "Diş Beyazlatma",
    beforeAfter2Title: "Diş Düzeltme",
    beforeAfter3Title: "İmplant",

    // Stories
    storiesTitle: "Dokunan hikayeler",
    storiesSubtitle: "Hastalarımızın gerçek deneyimleri.",
    story1Text: "Uzun süre diş hekiminden korktum. Basit başvuru süreci ve sakin ekip sayesinde sonunda adım attım. Bugün randevularıma rahat gidiyorum.",
    story2Text: "Dişlerim yıllarca beni rahatsız etti. Tedaviden sonra sonunda yeniden gülümsemekten keyif alıyorum – özgüvenimi tamamen değiştirdi.",
    story3Text: "Eskiden randevularla her şey karmaşıktı. Şimdi sadece birkaç tıklama yetiyor – tam olması gerektiği gibi.",

    // CTA Banner
    ctaTitle: "Hızlı ve kolay",
    ctaSubtitle: "Talebiniz birkaç tıkla – şimdi başlayın.",
    ctaButton: "Randevu veya talep başlat",
    ctaTrust1: "1 dakikadan kısa sürede tamamlanır",
    ctaTrust2: "Kayıt gerektirmez",
    ctaTrust3: "Güvenli ve gizli",

    // Footer
    footerDescription: "Horb am Neckar'da modern diş hekimliği. Gülüşünüz en iyi ellerde.",
    footerServices: "Hizmetler",
    footerTeam: "Ekip",
    footerPrices: "Fiyatlar",
    footerContact: "İletişim",
    footerImprint: "Künye",
    footerPrivacy: "Gizlilik",
    footerRights: "Tüm hakları saklıdır.",
  },
  
  ru: {
    // Navigation
    services: "Услуги",
    team: "Команда",
    prices: "Цены",
    contact: "Контакты",
    book: "Записаться",

    // Hero
    title1: "Ваша улыбка в",
    title2: "надежных руках",
    description:
      "Современная стоматология с индивидуальным подходом. Быстро, удобно и цифрово — для сияющей улыбки, которую вы заслуживаете.",
    points: [
      "Современное безболезненное лечение",
      "Без ожидания на телефоне",
      "Подходит также для тревожных пациентов",
    ],
    heroButton: "Записаться или отправить запрос",
    heroSubtext: "Займет меньше 1 минуты",
    happyPatients: "1000+ довольных пациентов",
    location: "Horb am Neckar",
    heroImageAlt: "Стоматолог лечит пациентку",

    // Experience
    experienceYears: "12+",
    experienceLabel: "Лет опыта",
    experienceModalTitle: "Более 12 лет опыта",
    experienceModalText1:
      "За последние 12 лет мы успешно вылечили тысячи пациентов — от профилактики до сложных процедур.",
    experienceModalText2:
      "Современные технологии, безболезненное лечение и персональный подход лежат в основе нашей работы.",
    experienceModalText3:
      "Наша цель: долговечный результат и улыбка, с которой вы чувствуете себя уверенно.",
    close: "Закрыть",

    // Services
    servicesTitle: "Наши услуги",
    servicesDesc:
      "Комплексный уход за зубами с современными технологиями и личным вниманием.",
    service1Title: "Имплантаты",
    service1Desc:
      "Фиксированные зубы для уверенной улыбки. Долговечные решения с современными технологиями.",
    service2Title: "Чистка зубов",
    service2Desc:
      "Профессиональная чистка для здоровых зубов и свежего дыхания.",
    service3Title: "Ортодонтия",
    service3Desc: "Бережная коррекция зубов для идеальной улыбки.",
    service4Title: "Эстетическая стоматология",
    service4Desc: "Улучшение улыбки для сияющего внешнего вида.",
    learnMore: "Узнать больше",
    ctaConsultation: "Записаться на консультацию",
    noRegistration: "Регистрация не требуется",

    // Team
    teamTitle: "Команда",
    teamDesc: "Познакомьтесь с нашей командой",
    teamName1: "Анна Мюллер",
    teamName2: "Мехмет Йылмаз",
    teamName3: "Лаура Шнайдер",
    teamRole1: "Менеджер клиники",
    teamRole2: "Стоматологический ассистент",
    teamRole3: "Работа с пациентами & Ресепшн",
    teamBio1:
      "Анна Мюллер — сердце организации клиники. Более 10 лет опыта позволяют ей обеспечивать бесперебойную работу и комфорт для каждого пациента.",
    teamBio2:
      "Мехмет поддерживает медицинскую команду с точностью и спокойствием. Его дружелюбие снижает тревожность пациентов и создает доверие.",
    teamBio3:
      "Лаура сопровождает пациентов от первого контакта до последующего ухода. Она уделяет большое внимание индивидуальному подходу и положительному опыту.",
    teamHobbies1: "Йога, Путешествия, Личностное развитие",
    teamHobbies2: "Фитнес, Футбол, Технологии",
    teamHobbies3: "Чтение, Организация, Коммуникация",
    teamPhilosophy1:
      "Хорошее первое впечатление определяет весь опыт лечения.",
    teamPhilosophy2:
      "Доверие строится на спокойствии, точности и честном общении.",
    teamPhilosophy3:
      "Каждый пациент заслуживает индивидуального и чуткого подхода.",
    hobbies: "Хобби",
    philosophy: "Философия",

    // Doctors
    doctorsTitle: "Ваши стоматологи",
    doctorsDesc:
      "Опытные специалисты с любовью к современной стоматологии и заботе о пациентах",
    doctor1Name: "Д-р Лукас Вебер",
    doctor1Specialty: "Имплантология & Эстетическая стоматология",
    doctor1Experience: "12 лет опыта",
    doctor1Desc:
      "Специалист по современной имплантологии с минимально инвазивными методами. Его спокойный подход помогает пациентам расслабиться.",
    doctor1Focus1: "Имплантология",
    doctor1Focus2: "Эстетическая стоматология",
    doctor1Focus3: "Минимально инвазивные методы",
    doctor1Philosophy:
      "Основное внимание уделяется спокойному лечению на основе доверия и максимальному комфорту пациента.",
    doctor2Name: "Д-р Сара Кляйн",
    doctor2Specialty: "Ортодонтия & Профилактика",
    doctor2Experience: "9 лет опыта",
    doctor2Desc:
      "Эксперт по мягкой коррекции зубов для детей и взрослых с упором на доверие и индивидуальный подход.",
    doctor2Focus1: "Ортодонтия",
    doctor2Focus2: "Профилактика",
    doctor2Focus3: "Индивидуальный подход",
    doctor2Philosophy:
      "Успешное лечение начинается с доверия, терпения и личного сопровождения.",
    focusAreas: "Основные направления",

    // Features
    featuresTitle: "Почему Zahnzentrum Neckarblick?",
    featuresSubtitle:
      "Современные технологии для лучшего опыта пациентов.",
    feature1Title: "Цифровой ассистент запросов",
    feature1Desc: "Отправьте запрос в несколько кликов – без звонка.",
    feature2Title: "Быстрый обзор записей",
    feature2Desc: "Доступные записи с первого взгляда.",
    feature3Title: "Запрос рецептов без ожидания",
    feature3Desc: "Цифрово и просто – доступно 24/7.",
    feature4Title: "Структурированные запросы пациентов",
    feature4Desc: "Четкие категории для быстрой обработки.",
    feature5Title: "Оптимизация для мобильных устройств",
    feature5Desc: "Доступно в любое врем�� – даже в пути.",

    // Pricing
    pricesTitle: "Цены & Лечение",
    pricesSubtitle:
      "Мы заранее информируем вас прозрачно перед каждым лечением. Без скрытых затрат.",
    priceCard1Title: "Чистка зубов",
    priceCard1Desc: "Подарите своим зубам свежесть ✨",
    priceCard1Price: "80–150 €",
    priceCard1List1: "Глубокая чистка",
    priceCard1List2: "Свежое дыхание",
    priceCard1List3: "Профилактика кариеса",
    priceCard1List4: "Долгосрочное здоровье зубов",
    priceCard2Title: "Импланты",
    priceCard2Desc: "Снова уверенно кусать 💪",
    priceCard2Price: "от 2.000 €",
    priceCard2List1: "Зубы как настоящие",
    priceCard2List2: "Долговечное решение",
    priceCard2List3: "Лучшее качество жизни",
    priceCard2List4: "Индивидуальное планирование",
    priceCard3Title: "Отбеливание",
    priceCard3Desc: "Улыбка, которая выделяется 😁",
    priceCard3Price: "от 250 €",
    priceCard3List1: "Ярко-белые зубы",
    priceCard3List2: "Быстрое лечение",
    priceCard3List3: "Видимый результат",
    priceCard3List4: "Щадящий метод",
    priceButton: "Записаться",
    priceNote:
      "Все цены являются ориентировочными. Точная стоимость определяется индивидуально.",

    // Contact
    contactTitle: "Контакты & Как добраться",
    contactSubtitle: "Мы ждем вашего визита.",
    contactAddress: "Адрес",
    contactPhone: "Телефон",
    contactEmail: "Электронная почта",
  contactOpeningHours: "Часы работы",
  contactMonThu: "Понедельник - Четверг",
  contactFri: "Пятница",
  contactWeekend: "Суббота - Воскресенье",
  contactClosed: "Закрыто",

    // Testimonials
    testimonialsTitle: "Что говорят наши пациенты",
    testimonialsSubtitle: "Более 1000 довольных пациентов уже доверяют нам.",
    testimonial1Quote: "Записаться на прием было очень просто, я был удивлен, как быстро все прошло.",
    testimonial1Author: "Маркус Х.",
    testimonial2Quote: "Очень дружелюбный коллектив и современная клиника. Я сразу почувствовал себя комфортно.",
    testimonial2Author: "Юлия С.",
    testimonial3Quote: "Наконец-то клиника, которая работает в цифровом формате. Больше никаких ожиданий по телефону.",
    testimonial3Author: "Даниэль К.",

    // Before & After
    beforeAfterTitle: "До и После",
    beforeAfterSubtitle: "Убедитесь сами в наших результатах лечения.",
    beforeLabel: "До",
    afterLabel: "После",
    beforeAfter1Title: "Отбеливание зубов",
    beforeAfter2Title: "Коррекция зубов",
    beforeAfter3Title: "Имплант",

    // Stories
    storiesTitle: "Истории, которые трогают",
    storiesSubtitle: "Реальный опыт наших пациентов.",
    story1Text: "Я долго боялся стоматолога. Благодаря простому процессу записи и спокойной команде я наконец сделал этот шаг. Сегодня я спокойно хожу на приемы.",
    story2Text: "Мои зубы беспокоили меня годами. После лечения я наконец снова рад улыбаться – это полностью изменило мою уверенность в себе.",
    story3Text: "Раньше все было сложно с записью. Теперь нужно всего несколько кликов – именно так и должно быть.",

    // CTA Banner
    ctaTitle: "Быстро и просто",
    ctaSubtitle: "Ваш запрос в несколько кликов – начните сейчас.",
    ctaButton: "Начать запись или запрос",
    ctaTrust1: "Занимает менее 1 минуты",
    ctaTrust2: "Без регистрации",
    ctaTrust3: "Безопасно и конфиденциально",

    // Footer
    footerDescription: "Современная стоматология в Хорб-ам-Неккар. Ваша улыбка в лучших руках.",
    footerServices: "Услуги",
    footerTeam: "Команда",
    footerPrices: "Цены",
    footerContact: "Контакт",
    footerImprint: "Выходные данные",
    footerPrivacy: "Конфиденциальность",
    footerRights: "Все права защищены.",
  },
  
  ar: {
    // Navigation
    services: "الخدمات",
    team: "الفريق",
    prices: "الأسعار",
    contact: "التواصل",
    book: "احجز موعدًا",

    // Hero
    title1: "ابتسامتك في",
    title2: "أفضل الأيدي",
    description:
      "طب أسنان حديث مع رعاية شخصية. سريع ورقمي وبسيط — من أجل ابتسامة مشرقة تستحقها.",
    points: [
      "علاج حديث وبدون ألم",
      "بدون انتظار على الهاتف",
      "مناسب أيضًا للمرضى القلقين",
    ],
    heroButton: "ابدأ حجز موعد أو طلبًا",
    heroSubtext: "يستغرق أقل من دقيقة",
    happyPatients: "أكثر من 1000 مريض سعيد",
    location: "هورب أم نيكار",
    heroImageAlt: "طبيب أسنان يعالج مريضة",

    // Experience
    experienceYears: "+12",
    experienceLabel: "سنة من الخبرة",
    experienceModalTitle: "أكثر من 12 سنة من الخبرة",
    experienceModalText1:
      "خلال الاثني عشر عامًا الماضية، عالجنا بنجاح آلاف المرضى — من الوقاية إلى الإجراءات المعقدة.",
    experienceModalText2:
      "التقنيات الحديثة والعلاج بدون ألم والرعاية الشخصية هي أساس عملنا.",
    experienceModalText3:
      "هدفنا: نتائج طويلة الأمد وابتسامة تجعلك تشعر بالراحة والثقة.",
    close: "إغلاق",

    // Services
    servicesTitle: "خدماتنا",
    servicesDesc:
      "رعاية أسنان شاملة بأحدث التقنيات واهتمام شخصي.",
    service1Title: "زراعة الأسنان",
    service1Desc:
      "أسنان ثابتة لابتسامة واثقة. حلول دائمة بتقنية حديثة.",
    service2Title: "تنظيف الأسنان",
    service2Desc: "تنظيف احترافي لأسنان صحية ونفس منعش.",
    service3Title: "تقويم الأسنان",
    service3Desc: "تصحيح لطيف للأسنان لابتسامة مثالية.",
    service4Title: "طب الأسنان التجميلي",
    service4Desc: "تحسين الابتسامة لمظهر مشرق.",
    learnMore: "المزيد",
    ctaConsultation: "احجز استشارة",
    noRegistration: "لا حاجة للتسجيل",

    // Team
    teamTitle: "الفريق",
    teamDesc: "تعرّف على فريقنا",
    teamName1: "آنا مولر",
    teamName2: "محمد يلماز",
    teamName3: "لورا شنايدر",
    teamRole1: "مديرة العيادة",
    teamRole2: "مساعد طبيب أسنان",
    teamRole3: "خدمة المرضى & الاستقبال",
    teamBio1:
      "آنا مولر هي القلب النابض لتنظيم العيادة. بخبرة تزيد عن 10 سنوات، تضمن سير العمل بسلاسة وتجربة مريحة لكل مريض.",
    teamBio2:
      "يدعم محمد الفريق الطبي بدقة وهدوء. طبيعته الودية تقلل من توتر المرضى وتبني الثقة.",
    teamBio3:
      "ترافق لورا المرضى من أول تواصل حتى مرحلة المتابعة. تولي أهمية كبيرة للرعاية الفردية وتجربة إيجابية.",
    teamHobbies1: "اليوغا، السفر، تطوير الذات",
    teamHobbies2: "اللياقة البدنية، كرة القدم، التكنولوجيا",
    teamHobbies3: "القراءة، التنظيم، التواصل",
    teamPhilosophy1:
      "الانطباع الأول الجيد يحدد تجربة العلاج بالكامل.",
    teamPhilosophy2:
      "الثقة تُبنى من خلال الهدوء والدقة والتواصل الصادق.",
    teamPhilosophy3: "كل مريض يستحق رعاية شخصية وإنسانية.",
    hobbies: "الهوايات",
    philosophy: "الفلسفة",

    // Doctors
    doctorsTitle: "أطباء الأسنان",
    doctorsDesc:
      "متخصصون ذوو خبرة وشغف بطب الأسنان الحديث وراحة المرضى",
    doctor1Name: "د. لوكاس ويبر",
    doctor1Specialty: "زراعة الأسنان & طب الأسنان التجميلي",
    doctor1Experience: "12 سنة خبرة",
    doctor1Desc:
      "متخصص في زراعة الأسنان الحديثة باستخدام تقنيات قليلة التوغل. أسلوبه الهادئ يضمن راحة المرضى.",
    doctor1Focus1: "زراعة الأسنان",
    doctor1Focus2: "طب الأسنان التجميلي",
    doctor1Focus3: "إجراءات قليلة التوغل",
    doctor1Philosophy:
      "التركيز على علاج هادئ قائم على الثقة وأقصى راحة للمريض.",
    doctor2Name: "د. سارة كلاين",
    doctor2Specialty: "تقويم الأسنان & الوقاية",
    doctor2Experience: "9 سنوات خبرة",
    doctor2Desc:
      "خبيرة في تصحيح الأسنان بلطف للأطفال والبالغين مع التركيز على الثقة والرعاية الفردية.",
    doctor2Focus1: "تقويم الأسنان",
    doctor2Focus2: "الوقاية",
    doctor2Focus3: "رعاية فردية",
    doctor2Philosophy:
      "العلاج الناجح يبدأ بالثقة والصبر والدعم الشخصي.",
    focusAreas: "مجالات التركيز",

    // Features
    featuresTitle: "لماذا Zahnzentrum Neckarblick؟",
    featuresSubtitle: "تقنية حديثة لتجربة أفضل للمرضى.",
    feature1Title: "مساعد الطلبات الرقمي",
    feature1Desc: "أرسل طلبك ببضع نقرات فقط – بدون اتصال.",
    feature2Title: "نظرة سريعة على المواعيد",
    feature2Desc: "المواعيد المتاحة بنظرة واحدة.",
    feature3Title: "طلبات الوص��ات بدون انتظار",
    feature3Desc: "رقمي وبسيط – متاح على مدار الساعة.",
    feature4Title: "طلبات مرضى منظمة",
    feature4Desc: "فئات واضحة لمعالجة أسرع.",
    feature5Title: "استخدام محسّن للجوال",
    feature5Desc: "متاح في أي وقت – حتى أثناء التنقل.",

    // Pricing
    pricesTitle: "الأسعار & العلاجات",
    pricesSubtitle:
      "نقوم بإعلامك بشفافية قبل كل علاج. لا توجد تكاليف مخفية.",
    priceCard1Title: "تنظيف الأسنان",
    priceCard1Desc: "امنح أسنانك إحساسًا بالانتعاش ✨",
    priceCard1Price: "80–150 €",
    priceCard1List1: "تنظيف عميق",
    priceCard1List2: "نفس منعش",
    priceCard1List3: "الوقاية من التسوس",
    priceCard1List4: "صحة طويلة الأمد",
    priceCard2Title: "زراعة الأسنان",
    priceCard2Desc: "استعد لقوة المضغ 💪",
    priceCard2Price: "ابتداءً من 2000 €",
    priceCard2List1: "أسنان ثابتة كالحقيقية",
    priceCard2List2: "حل طويل الأمد",
    priceCard2List3: "جودة حياة أفضل",
    priceCard2List4: "تخطيط فردي",
    priceCard3Title: "تبييض الأسنان",
    priceCard3Desc: "ابتسامة ملفتة 😁",
    priceCard3Price: "ابتداءً من 250 €",
    priceCard3List1: "أسنان بيضاء ناصعة",
    priceCard3List2: "علاج سريع",
    priceCard3List3: "نتائج واضحة",
    priceCard3List4: "طريقة لطيفة",
    priceButton: "احجز موعد",
    priceNote:
      "جميع الأسعار تقديرية. يتم تحديد التكلفة النهائية بشكل فردي.",

    // Contact
    contactTitle: "التواصل & الموقع",
    contactSubtitle: "نتطلع إلى زيارتك.",
    contactAddress: "العنوان",
    contactPhone: "الهاتف",
    contactEmail: "البريد الإلكتروني",
  contactOpeningHours: "ساعات العمل",
  contactMonThu: "الإثنين - الخميس",
  contactFri: "الجمعة",
  contactWeekend: "السبت - الأحد",
  contactClosed: "مغلق",

    // Testimonials
    testimonialsTitle: "ماذا يقول مرضانا",
    testimonialsSubtitle: "أكثر من 1000 مريض راضٍ يثقون بنا بالفعل.",
    testimonial1Quote: "طلب الموعد كان سهلاً جداً، فوجئت بمدى سرعة كل شيء.",
    testimonial1Author: "ماركوس هـ.",
    testimonial2Quote: "فريق ودود جداً وعيادة حديثة. شعرت بالراحة على الفور.",
    testimonial2Author: "جوليا س.",
    testimonial3Quote: "أخيراً عيادة تعمل رقمياً. لا مزيد من الانتظار على الهاتف.",
    testimonial3Author: "دانيال ك.",

    // Before & After
    beforeAfterTitle: "قبل وبعد",
    beforeAfterSubtitle: "اطلع بنفسك على نتائج علاجنا.",
    beforeLabel: "قبل",
    afterLabel: "بعد",
    beforeAfter1Title: "تبييض الأسنان",
    beforeAfter2Title: "تقويم الأسنان",
    beforeAfter3Title: "زرع الأسنان",

    // Stories
    storiesTitle: "قصص مؤثرة",
    storiesSubtitle: "تجارب حقيقية من مرضانا.",
    story1Text: "كنت خائفاً من طبيب الأسنان لفترة طويلة. بفضل عملية الطلب البسيطة والفريق الهادئ، اتخذت الخطوة أخيراً. اليوم أذهب إلى مواعيدي مرتاحاً.",
    story2Text: "أزعجتني أسناني لسنوات. بعد العلاج، أستمتع أخيراً بالابتسام مرة أخرى – لقد غيّر ثقتي بنفسي تماماً.",
    story3Text: "في السابق، كان كل شيء معقداً مع المواعيد. الآن لا يتطلب الأمر سوى بضع نقرات – بالضبط كما ينبغي.",

    // CTA Banner
    ctaTitle: "سريع وسهل",
    ctaSubtitle: "طلبك في بضع نقرات – ابدأ الآن.",
    ctaButton: "ابدأ موعداً أو طلباً",
    ctaTrust1: "يتم في أقل من دقيقة",
    ctaTrust2: "بدون تسجيل",
    ctaTrust3: "آمن وسري",

    // Footer
    footerDescription: "طب الأسنان الحديث في هورب آم نيكار. ابتسامتك في أفضل الأيدي.",
    footerServices: "الخدمات",
    footerTeam: "الفريق",
    footerPrices: "الأسعار",
    footerContact: "اتصل بنا",
    footerImprint: "البيانات القانونية",
    footerPrivacy: "الخصوصية",
    footerRights: "جميع الحقوق محفوظة.",
  },
  
  fa: {
    // Navigation
    services: "خدمات",
    team: "تیم",
    prices: "قیمت‌ها",
    contact: "تماس",
    book: "رزرو وقت",

    // Hero
    title1: "لبخند شما در",
    title2: "بهترین دست‌ها",
    description:
      "دندانپزشکی مدرن با مراقبت شخصی. سریع، دیجیتال و ساده — برای لبخندی درخشان که شایسته آن هستید.",
    points: [
      "درمان مدرن و بدون درد",
      "بدون انتظار پشت تلفن",
      "مناسب برای بیماران مضطرب نیز",
    ],
    heroButton: "شروع رزرو یا درخواست",
    heroSubtext: "کمتر از 1 دقیقه طول می‌کشد",
    happyPatients: "بیش از 1000 بیمار راضی",
    location: "هورب آم نکار",
    heroImageAlt: "دندانپزشک در حال درمان بیمار",

    // Experience
    experienceYears: "+12",
    experienceLabel: "سال تجربه",
    experienceModalTitle: "بیش از 12 سال تجربه",
    experienceModalText1:
      "در 12 سال گذشته، ما با موفقیت هزاران بیمار را از مراقبت پیشگیرانه تا درمان‌های پیچیده درمان کرده‌ایم.",
    experienceModalText2:
      "فناوری مدرن، درمان بدون درد و مراقبت شخصی در مرکز کار ما قرار دارد.",
    experienceModalText3:
      "هدف ما: نتایج ماندگار و لبخندی که با آن احساس خوبی داشته باشید.",
    close: "بستن",

    // Services
    servicesTitle: "خدمات ما",
    servicesDesc:
      "مراقبت کامل دندان با فناوری مدرن و توجه شخصی.",
    service1Title: "ایمپلنت",
    service1Desc:
      "دندان‌های ثابت برای لبخند مطمئن. راه‌حل‌های ماندگار با فناوری مدرن.",
    service2Title: "تمیز کردن دندان",
    service2Desc: "تمیزکاری حرفه‌ای برای دندان‌های سالم و نفس تازه.",
    service3Title: "ارتودنسی",
    service3Desc: "اصلاح ملایم دندان‌ها برای لبخند کامل.",
    service4Title: "دندانپزشکی زیبایی",
    service4Desc: "بهبود لبخند برای ظاهری درخشان.",
    learnMore: "بیشتر بدانید",
    ctaConsultation: "رزرو مشاوره",
    noRegistration: "بدون نیاز به ثبت‌نام",

    // Team
    teamTitle: "تیم",
    teamDesc: "با تیم ما آشنا شوید",
    teamName1: "آنا مولر",
    teamName2: "محمد ییلماز",
    teamName3: "لورا اشنایدر",
    teamRole1: "مدیر کلینیک",
    teamRole2: "دستیار دندانپزشک",
    teamRole3: "پذیرش و خدمات بیمار",
    teamBio1:
      "آنا مولر قلب تپنده سازمان‌دهی کلینیک است. با بیش از ۱۰ سال تجربه، روندی روان و تجربه‌ای دلپذیر برای هر بیمار فراهم می‌کند.",
    teamBio2:
      "محمد با دقت و آرامش از تیم پزشکی حمایت می‌کند. رفتار دوستانه او استرس بیماران را کاهش داده و اعتماد ایجاد می‌کند.",
    teamBio3:
      "لورا بیماران را از اولین تماس تا مراقبت‌های پس از درمان همراهی می‌کند. او به مراقبت فردی و تجربه‌ای مثبت اهمیت زیادی می‌دهد.",
    teamHobbies1: "یوگا، سفر، توسعه فردی",
    teamHobbies2: "تناسب اندام، فوتبال، فناوری",
    teamHobbies3: "مطالعه، سازماندهی، ارتباطات",
    teamPhilosophy1:
      "یک برداشت اول خوب، کل تجربه درمان را تعیین می‌کند.",
    teamPhilosophy2:
      "اعتماد از طریق آرامش، دقت و ارتباط صادقانه ایجاد می‌شود.",
    teamPhilosophy3:
      "هر بیمار شایسته مراقبت شخصی و همدلانه است.",
    hobbies: "علایق",
    philosophy: "فلسفه",

    // Doctors
    doctorsTitle: "دندانپزشکان شما",
    doctorsDesc:
      "متخصصان با تجربه با اشتیاق به دندانپزشکی مدرن و رفاه بیماران",
    doctor1Name: "دکتر لوکاس وبر",
    doctor1Specialty: "ایمپلنتولوژی & دندانپزشکی زیبایی",
    doctor1Experience: "۱۲ سال تجربه",
    doctor1Desc:
      "متخصص در ایمپلنتولوژی مدرن با استفاده از تکنیک‌های کم‌تهاجمی. سبک آرام او باعث آرامش بیماران می‌شود.",
    doctor1Focus1: "ایمپلنتولوژی",
    doctor1Focus2: "دندانپزشکی زیبایی",
    doctor1Focus3: "روش‌های کم‌تهاجمی",
    doctor1Philosophy:
      "تمرکز بر درمانی آرام، مبتنی بر اعتماد �� حداکثر راحتی برای بیمار است.",
    doctor2Name: "دکتر سارا کلاین",
    doctor2Specialty: "ارتودنسی & پیشگیری",
    doctor2Experience: "۹ سال تجربه",
    doctor2Desc:
      "متخصص در اصلاح ملایم دندان‌ها برای کودکان و بزرگسالان با تمرکز بر اعتماد و مراقبت فردی.",
    doctor2Focus1: "ارتودنسی",
    doctor2Focus2: "پیشگیری",
    doctor2Focus3: "مراقبت فردی",
    doctor2Philosophy:
      "درمان موفق با اعتماد، صبر و همراهی شخصی آغاز می‌شود.",
    focusAreas: "حوزه‌های تخصصی",

    // Features
    featuresTitle: "چرا Zahnzentrum Neckarblick؟",
    featuresSubtitle: "فناوری مدرن برای تجربه بهتر بیماران.",
    feature1Title: "دستیار دیجیتال درخواست‌ها",
    feature1Desc:
      "درخواست خود را تنها با چند کلیک ارسال کنید – بدون تماس.",
    feature2Title: "نمای سریع نوبت‌ها",
    feature2Desc: "مشاهده نوبت‌های موجود در یک نگاه.",
    feature3Title: "درخواست نسخه بدون انتظار",
    feature3Desc: "دیجیتال و ساده – در دسترس ۲۴/۷.",
    feature4Title: "درخواست‌های ساختاریافته بیماران",
    feature4Desc: "دسته‌بندی‌های واضح برای پردازش سریع.",
    feature5Title: "استفاده بهینه برای موبایل",
    feature5Desc: "در هر زمان در دسترس – حتی در حال حرکت.",

    // Pricing
    pricesTitle: "قیمت‌ها و درمان‌ها",
    pricesSubtitle:
      "ما قبل از هر درمان به‌صورت شفاف شما را مطلع می‌کنیم. بدون هزینه پنهان.",
    priceCard1Title: "جرم‌گیری دندان",
    priceCard1Desc: "به دندان‌های خود حس تازگی بدهید ✨",
    priceCard1Price: "80–150 €",
    priceCard1List1: "تمیزکاری کامل",
    priceCard1List2: "نفس تازه",
    priceCard1List3: "پیشگیری از پوسیدگی",
    priceCard1List4: "سلامت بلندمدت دندان",
    priceCard2Title: "ایمپلنت",
    priceCard2Desc: "دوباره محکم گاز بزنید 💪",
    priceCard2Price: "از 2000 €",
    priceCard2List1: "دندان‌های طبیعی‌مانند",
    priceCard2List2: "راه‌حل ماندگار",
    priceCard2List3: "کیفیت زندگی بهتر",
    priceCard2List4: "برنامه‌ریزی شخصی",
    priceCard3Title: "بلیچینگ",
    priceCard3Desc: "لبخندی که می‌درخشد 😁",
    priceCard3Price: "از 250 €",
    priceCard3List1: "دندان‌های سفید درخشان",
    priceCard3List2: "درمان سریع",
    priceCard3List3: "نتایج قابل مشاهده",
    priceCard3List4: "روش ملایم",
    priceButton: "درخواست نوبت",
    priceNote:
      "تمام قیمت‌ها تقریبی هستند. هزینه نهایی به‌صورت فردی تعیین می‌شود.",

    // Contact
    contactTitle: "تماس & مسیریابی",
    contactSubtitle: "منتظر دیدار شما هستیم.",
    contactAddress: "آدرس",
    contactPhone: "تلفن",
    contactEmail: "ایمیل",
  contactOpeningHours: "ساعات کاری",
  contactMonThu: "دوشنبه - پنج‌شنبه",
  contactFri: "جمعه",
  contactWeekend: "شنبه - یکشنبه",
  contactClosed: "تعطیل",

    // Testimonials
    testimonialsTitle: "نظر بیماران ما",
    testimonialsSubtitle: "بیش از ۱۰۰۰ بیمار راضی قبلاً به ما اعتماد کرده‌اند.",
    testimonial1Quote: "درخواست نوبت خیلی آسان بود، از سرعت همه چیز تعجب کردم.",
    testimonial1Author: "مارکوس هـ.",
    testimonial2Quote: "تیم بسیار مهربان و مطب مدرن. فوراً احساس راحتی کردم.",
    testimonial2Author: "یولیا س.",
    testimonial3Quote: "بالاخره یک مطب که دیجیتالی کار می‌کند. دیگر انتظار پشت تلفن نیست.",
    testimonial3Author: "دانیل ک.",

    // Before & After
    beforeAfterTitle: "قبل و بعد",
    beforeAfterSubtitle: "خودتان نتایج درمان ما را ببینید.",
    beforeLabel: "قبل",
    afterLabel: "بعد",
    beforeAfter1Title: "سفید کردن دندان",
    beforeAfter2Title: "اصلاح دندان",
    beforeAfter3Title: "ایمپلنت",

    // Stories
    storiesTitle: "داستان‌های تأثیرگذار",
    storiesSubtitle: "تجربیات واقعی بیماران ما.",
    story1Text: "مدت‌ها از دندانپزشک می‌ترسیدم. با فرآیند ساده درخواست و تیم آرام، بالاخره این قدم را برداشتم. امروز با آرامش به قرارهایم می‌روم.",
    story2Text: "دندان‌هایم سال‌ها اذیتم می‌کردند. بعد از درمان، بالاخره دوباره از لبخند زدن لذت می‌برم – اعتماد به نفسم کاملاً تغییر کرد.",
    story3Text: "قبلاً همه چیز با قرارها پیچیده بود. حالا فقط چند کلیک کافی است – دقیقاً همانطور که باید باشد.",

    // CTA Banner
    ctaTitle: "سریع و آسان",
    ctaSubtitle: "درخواست شما با چند کلیک – همین الان شروع کنید.",
    ctaButton: "شروع نوبت یا درخواست",
    ctaTrust1: "در کمتر از ۱ دقیقه انجام می‌شود",
    ctaTrust2: "بدون ثبت‌نام",
    ctaTrust3: "امن و محرمانه",

    // Footer
    footerDescription: "دندانپزشکی مدرن در هورب آم نکار. لبخند شما در بهترین دست‌ها.",
    footerServices: "خدمات",
    footerTeam: "تیم",
    footerPrices: "قیمت‌ها",
    footerContact: "تماس",
    footerImprint: "اطلاعات قانونی",
    footerPrivacy: "حریم خصوصی",
    footerRights: "تمامی حقوق محفوظ است.",
  },
  
  sq: {
    // Navigation
    services: "Shërbimet",
    team: "Ekipi",
    prices: "Çmimet",
    contact: "Kontakti",
    book: "Rezervo takim",

    // Hero
    title1: "Buzëqeshja juaj në",
    title2: "duart më të mira",
    description:
      "Stomatologji moderne me kujdes personal. E shpejtë, dixhitale dhe e thjeshtë — për një buzëqeshje rrezatuese që e meritoni.",
    points: [
      "Trajtim modern dhe pa dhimbje",
      "Pa pritje në telefon",
      "E përshtatshme edhe për pacientë me frikë",
    ],
    heroButton: "Nis takim ose kërkesë",
    heroSubtext: "Zgjat më pak se 1 minutë",
    happyPatients: "1000+ pacientë të kënaqur",
    location: "Horb am Neckar",
    heroImageAlt: "Dentisti duke trajtuar një paciente",

    // Experience
    experienceYears: "12+",
    experienceLabel: "Vite përvojë",
    experienceModalTitle: "Mbi 12 vite përvojë",
    experienceModalText1:
      "Në 12 vitet e fundit kemi trajtuar me sukses mijëra pacientë — nga parandalimi deri te ndërhyrjet komplekse.",
    experienceModalText2:
      "Teknologjia moderne, trajtimi pa dhimbje dhe kujdesi personal janë në qendër të punës sonë.",
    experienceModalText3:
      "Qëllimi ynë: rezultate afatgjata dhe një buzëqeshje që ju bën të ndiheni mirë.",
    close: "Mbyll",

    // Services
    servicesTitle: "Shërbimet tona",
    servicesDesc:
      "Kujdes dentar i plotë me teknologji moderne dhe vëmendje personale.",
    service1Title: "Implante",
    service1Desc:
      "Dhëmbë të qëndrueshëm për buzëqeshje të sigurt. Zgjidhje të qëndrueshme me teknologji moderne.",
    service2Title: "Pastrimi i dhëmbëve",
    service2Desc:
      "Pastrimi profesional për dhëmbë të shëndetshëm dhe frymë të freskët.",
    service3Title: "Ortodonci",
    service3Desc: "Korrigjim i butë i dhëmbëve për një buzëqeshje perfekte.",
    service4Title: "Stomatologji estetike",
    service4Desc: "Përmirësimi i buzëqeshjes për një pamje rrezatuese.",
    learnMore: "Më shumë",
    ctaConsultation: "Rezervo konsultë",
    noRegistration: "Nuk kërkohet regjistrim",

    // Team
    teamTitle: "Ekipi",
    teamDesc: "Njihuni me ekipin tonë",
    teamName1: "Anna Müller",
    teamName2: "Mehmet Yilmaz",
    teamName3: "Laura Schneider",
    teamRole1: "Menaxhere e klinikës",
    teamRole2: "Asistent dentar",
    teamRole3: "Shërbimi i pacientëve & Recepsioni",
    teamBio1:
      "Anna Müller është zemra e organizimit të klinikës. Me mbi 10 vite përvojë, ajo siguron një rrjedhë të qetë dhe një përvojë të këndshme për çdo pacient.",
    teamBio2:
      "Mehmet mbështet ekipin mjekësor me saktësi dhe qetësi. Sjellja e tij miqësore ul nervozizmin e pacientëve dhe krijon besim.",
    teamBio3:
      "Laura i shoqëron pacientët nga kontakti i parë deri në kujdesin pas trajtimit. Ajo i kushton shumë rëndësi kujdesit individual dhe një përvoje pozitive.",
    teamHobbies1: "Yoga, Udhëtime, Zhvillim personal",
    teamHobbies2: "Fitness, Futboll, Teknologji",
    teamHobbies3: "Lexim, Organizim, Komunikim",
    teamPhilosophy1:
      "Një përshtypje e mirë e parë përcakton gjithë përvojën e trajtimit.",
    teamPhilosophy2:
      "Besimi ndërtohet përmes qetësisë, saktësisë dhe komunikimit të sinqertë.",
    teamPhilosophy3: "Çdo pacient meriton kujdes personal dhe empatik.",
    hobbies: "Hobi",
    philosophy: "Filozofia",

    // Doctors
    doctorsTitle: "Dentistët tuaj",
    doctorsDesc:
      "Specialistë me përvojë dhe pasion për stomatologjinë moderne dhe mirëqenien e pacientëve",
    doctor1Name: "Dr. med. dent. Lukas Weber",
    doctor1Specialty: "Implantologji & Stomatologji estetike",
    doctor1Experience: "12 vite përvojë",
    doctor1Desc:
      "I specializuar në implantologji moderne me teknika minimale invazive. Stili i tij i qetë siguron pacientë të relaksuar.",
    doctor1Focus1: "Implantologji",
    doctor1Focus2: "Stomatologji estetike",
    doctor1Focus3: "Procedura minimale invazive",
    doctor1Philosophy:
      "Fokusi është në trajtim të qetë, të bazuar në besim dhe komoditet maksimal për pacientin.",
    doctor2Name: "Dr. med. dent. Sarah Klein",
    doctor2Specialty: "Ortodonci & Parandalim",
    doctor2Experience: "9 vite përvojë",
    doctor2Desc:
      "Eksperte në korrigjimin e butë të dhëmbëve për fëmijë dhe të rritur me fokus në besim dhe kujdes individual.",
    doctor2Focus1: "Ortodonci",
    doctor2Focus2: "Parandalim",
    doctor2Focus3: "Kujdes individual",
    doctor2Philosophy:
      "Një trajtim i suksesshëm fillon me besim, durim dhe mbështetje personale.",
    focusAreas: "Fushat kryesore",

    // Features
    featuresTitle: "Pse Zahnzentrum Neckarblick?",
    featuresSubtitle:
      "Teknologji moderne për një përvojë më të mirë të pacientit.",
    feature1Title: "Asistent dixhital për kërkesa",
    feature1Desc: "Dërgoni kërkesën tuaj me disa klikime – pa telefonatë.",
    feature2Title: "Pamje e shpejtë e termineve",
    feature2Desc: "Terminet e disponueshme me një shikim.",
    feature3Title: "Kërkesa për receta pa pritje",
    feature3Desc: "Digjitale dhe e thjeshtë – në dispozicion 24/7.",
    feature4Title: "Kërkesa të strukturuara të pacientëve",
    feature4Desc: "Kategori të qarta për përpunim të shpejtë.",
    feature5Title: "Përdorim i optimizuar për celular",
    feature5Desc: "I aksesueshëm në çdo kohë – edhe në lëvizje.",

    // Pricing
    pricesTitle: "Çmimet & Trajtimet",
    pricesSubtitle:
      "Ne ju informojmë në mënyrë transparente para çdo trajtimi. Pa kosto të fshehura.",
    priceCard1Title: "Pastrimi i dhëmbëve",
    priceCard1Desc: "Jepuni dhëmbëve tuaj freski ✨",
    priceCard1Price: "80–150 €",
    priceCard1List1: "Pastrimi i thellë",
    priceCard1List2: "Frymëmarrje e freskët",
    priceCard1List3: "Parandalimi i kariesit",
    priceCard1List4: "Shëndet afatgjatë i dhëmbëve",
    priceCard2Title: "Implantet",
    priceCard2Desc: "Kafsho sërish fort 💪",
    priceCard2Price: "nga 2000 €",
    priceCard2List1: "Dhëmbë si natyralë",
    priceCard2List2: "Zgjidhje afatgjatë",
    priceCard2List3: "Cilësi më e mirë jete",
    priceCard2List4: "Planifikim individual",
    priceCard3Title: "Zbardhimi",
    priceCard3Desc: "Një buzëqeshje që bie në sy 😁",
    priceCard3Price: "nga 250 €",
    priceCard3List1: "Dhëmbë të bardhë të ndritshëm",
    priceCard3List2: "Trajtim i shpejtë",
    priceCard3List3: "Rezultate të dukshme",
    priceCard3List4: "Metodë e butë",
    priceButton: "Rezervo takim",
    priceNote:
      "Të gjitha çmimet janë orientuese. Kostot e sakta përcaktohen individualisht.",

    // Contact
    contactTitle: "Kontakti & Orientimi",
    contactSubtitle: "Presim me padurim vizitën tuaj.",
    contactAddress: "Adresa",
    contactPhone: "Telefoni",
    contactEmail: "Email",
  contactOpeningHours: "Oraret e punës",
  contactMonThu: "E Hënë - E Enjte",
  contactFri: "E Premte",
  contactWeekend: "E Shtunë - E Diel",
  contactClosed: "Mbyllur",

    // Testimonials
    testimonialsTitle: "Çfarë thonë pacientët tanë",
    testimonialsSubtitle: "Mbi 1000 pacientë të kënaqur na besojnë tashmë.",
    testimonial1Quote: "Kërkesa për takim ishte shumë e lehtë, u habita sa shpejt shkoi gjithçka.",
    testimonial1Author: "Markus H.",
    testimonial2Quote: "Ekip shumë miqësor dhe klinikë moderne. U ndjeva rehat menjëherë.",
    testimonial2Author: "Julia S.",
    testimonial3Quote: "Më në fund një klinikë që punon në mënyrë digjitale. Nuk ka më pritje në telefon.",
    testimonial3Author: "Daniel K.",

    // Before & After
    beforeAfterTitle: "Para dhe Pas",
    beforeAfterSubtitle: "Shikoni vetë rezultatet tona të trajtimit.",
    beforeLabel: "Para",
    afterLabel: "Pas",
    beforeAfter1Title: "Zbardhimi i dhëmbëve",
    beforeAfter2Title: "Korrigjimi i dhëmbëve",
    beforeAfter3Title: "Implant",

    // Stories
    storiesTitle: "Histori që prekin",
    storiesSubtitle: "Përvoja reale nga pacientët tanë.",
    story1Text: "Kam pasur frikë nga dentisti për një kohë të gjatë. Falë procesit të thjeshtë të kërkesës dhe ekipit të qetë, më në fund e bëra hapin. Sot shkoj në takimet e mia i qetë.",
    story2Text: "Dhëmbët e mi më shqetësonin vite me radhë. Pas trajtimit, më në fund shijoj sërish të buzëqesh – kjo ndryshoi plotësisht besimin tim.",
    story3Text: "Më parë, gjithçka ishte e komplikuar me takimet. Tani duhen vetëm disa klikime – pikërisht siç duhet të jetë.",

    // CTA Banner
    ctaTitle: "Shpejt dhe lehtë",
    ctaSubtitle: "Kërkesa juaj me disa klikime – filloni tani.",
    ctaButton: "Fillo një takim ose kërkesë",
    ctaTrust1: "Bëhet në më pak se 1 minutë",
    ctaTrust2: "Pa regjistrim",
    ctaTrust3: "I sigurt dhe konfidencial",

    // Footer
    footerDescription: "Stomatologji moderne në Horb am Neckar. Buzëqeshja juaj në duart më të mira.",
    footerServices: "Shërbimet",
    footerTeam: "Ekipi",
    footerPrices: "Çmimet",
    footerContact: "Kontakti",
    footerImprint: "Impresi",
    footerPrivacy: "Privatësia",
    footerRights: "Të gjitha të drejtat e rezervuara.",
  },
  };

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState("de");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved && languages.includes(saved)) {
      setLang(saved);
      return;
    }

    const browserLang = navigator.language.toLowerCase();

    if (browserLang.startsWith("de")) setLang("de");
    else if (browserLang.startsWith("en")) setLang("en");
    else if (browserLang.startsWith("es")) setLang("es");
    else if (browserLang.startsWith("fr")) setLang("fr");
    else if (browserLang.startsWith("it")) setLang("it");
    else if (browserLang.startsWith("tr")) setLang("tr");
    else if (browserLang.startsWith("ru")) setLang("ru");
    else if (browserLang.startsWith("ar")) setLang("ar");
    else if (browserLang.startsWith("fa")) setLang("fa");
    else if (browserLang.startsWith("sq")) setLang("sq");
    else setLang("de");
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
