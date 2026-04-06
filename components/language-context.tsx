"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Translation = {

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

  services: string;
  team: string;
  prices: string;
  contact: string;
  book: string;

  title1: string;
  title2: string;
  description: string;
  points: string[];

  heroButton: string;
  heroSubtext: string;
  happyPatients: string;
  location: string;
  heroImageAlt: string;

  experienceYears: string;
  experienceLabel: string;
  experienceModalTitle: string;
  experienceModalText1: string;
  experienceModalText2: string;
  experienceModalText3: string;
  close: string;

  // 🔥 HIER NEU (SEHR WICHTIG)
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

  // TEAM
  teamTitle: string;
  teamDesc: string;

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
  // Team Names
  teamName1: string;
  teamName2: string;
  teamName3: string;
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
    services: "Leistungen",
    team: "Team",
    prices: "Preise",
    contact: "Kontakt",
    book: "Termin buchen",
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
    service3Desc:
      "Schonende Zahnkorrektur für ein perfektes Lächeln.",

    service4Title: "Ästhetische Zahnmedizin",
    service4Desc:
      "Verschönerung Ihrer Zähne für ein strahlendes Erscheinungsbild.",

    learnMore: "Mehr erfahren",
    ctaConsultation: "Beratungstermin vereinbaren",
    noRegistration: "Keine Registrierung erforderlich",
    teamTitle: "Team",
    teamDesc: "Lernen Sie unser Team kennen",

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
    doctorsTitle: "Ihre Zahnärzte",
    doctorsDesc: "Erfahrene Spezialisten mit Leidenschaft für moderne Zahnmedizin und Patientenwohl",

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
    teamName1: "Anna Müller",
    teamName2: "Mehmet Yilmaz",
    teamName3: "Laura Schneider",
    pricesTitle: "Preise & Behandlungen",
    pricesSubtitle:

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
  },

  en: {
    services: "Services",
    team: "Team",
    prices: "Prices",
    contact: "Contact",
    book: "Book appointment",
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
    servicesTitle: "Our Services",
    servicesDesc: "Comprehensive dental care with modern technology and personal attention.",

    service1Title: "Dental Implants",
    service1Desc: "Fixed teeth for a confident smile. Long-lasting solutions with modern technology.",

    service2Title: "Teeth Cleaning",
    service2Desc: "Professional cleaning for healthy teeth and fresh breath.",

    service3Title: "Orthodontics",
    service3Desc: "Gentle tooth correction for a perfect smile.",

    service4Title: "Cosmetic Dentistry",
    service4Desc: "Enhancing your smile for a radiant appearance.",

    learnMore: "Learn more",
    ctaConsultation: "Book consultation",
    noRegistration: "No registration required",
    teamTitle: "Team",
    teamDesc: "Meet our team",

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

    teamPhilosophy3:
      "Every patient deserves personal and empathetic care.",

    hobbies: "Hobbies",
    philosophy: "Philosophy",
    doctorsTitle: "Our Dentists",
    doctorsDesc: "Experienced specialists with a passion for modern dentistry and patient well-being",

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
    teamName1: "Anna Müller",
    teamName2: "Mehmet Yilmaz",
    teamName3: "Laura Schneider",
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
  },

  es: {
    services: "Servicios",
    team: "Equipo",
    prices: "Precios",
    contact: "Contacto",
    book: "Reservar cita",
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

    servicesTitle: "Nuestros servicios",
    servicesDesc: "Atención dental integral con tecnología moderna y atención personalizada.",

    service1Title: "Implantes",
    service1Desc: "Dientes fijos para una sonrisa segura.",

    service2Title: "Limpieza dental",
    service2Desc: "Limpieza profesional para dientes sanos.",

    service3Title: "Ortodoncia",
    service3Desc: "Corrección dental suave.",

    service4Title: "Odontología estética",
    service4Desc: "Mejora de la sonrisa.",

    learnMore: "Más información",
    ctaConsultation: "Reservar consulta",
    noRegistration: "No se requiere registro",
    teamTitle: "Equipo",
    teamDesc: "Conoce a nuestro equipo",

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
    doctorsTitle: "Sus dentistas",
    doctorsDesc: "Especialistas con experiencia y pasión por la odontología moderna y el bienestar del paciente",

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
    teamName1: "Anna Müller",
    teamName2: "Mehmet Yilmaz",
    teamName3: "Laura Schneider",
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
  },

  fr: {
    services: "Services",
    team: "Équipe",
    prices: "Prix",
    contact: "Contact",
    book: "Prendre rendez-vous",
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
    servicesTitle: "Nos services",
    servicesDesc: "Soins dentaires complets avec technologie moderne et attention personnalisée.",

    service1Title: "Implants dentaires",
    service1Desc: "Dents fixes pour un sourire sûr.",

    service2Title: "Nettoyage des dents",
    service2Desc: "Nettoyage professionnel pour des dents saines.",

    service3Title: "Orthodontie",
    service3Desc: "Correction douce des dents.",

    service4Title: "Dentisterie esthétique",
    service4Desc: "Amélioration du sourire.",

    learnMore: "En savoir plus",
    ctaConsultation: "Prendre rendez-vous",
    noRegistration: "Aucune inscription requise",
    teamTitle: "Équipe",
    teamDesc: "Rencontrez notre équipe",

    teamRole1: "Responsable du cabinet",
    teamRole2: "Assistant(e) dentaire",
    teamRole3: "Accueil & Service patient",

    teamBio1:
      "Anna Müller est le cœur de l’organisation du cabinet. Avec plus de 10 ans d’expérience, elle assure un déroulement fluide et une تجربة agréable pour chaque patient.",

    teamBio2:
      "Mehmet soutient l’équipe médicale avec précision et calme. Sa nature amicale réduit l’anxiété des patients et crée de la confiance.",

    teamBio3:
      "Laura accompagne les patients du premier contact jusqu’au suivi. Elle accorde une grande importance à un accompagnement personnalisé et à une expérience positive.",

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
    doctorsTitle: "Vos dentistes",
    doctorsDesc: "Des spécialistes expérimentés passionnés par la dentisterie moderne et le bien-être des patients",

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
    teamName1: "Anna Müller",
    teamName2: "Mehmet Yilmaz",
    teamName3: "Laura Schneider",
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
  },

  it: {
    services: "Servizi",
    team: "Team",
    prices: "Prezzi",
    contact: "Contatto",
    book: "Prenota appuntamento",
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
    servicesTitle: "I nostri servizi",
    servicesDesc: "Cura dentale completa con tecnologia moderna.",

    service1Title: "Impianti dentali",
    service1Desc: "Denti fissi per un sorriso sicuro.",

    service2Title: "Pulizia dei denti",
    service2Desc: "Pulizia professionale.",

    service3Title: "Ortodonzia",
    service3Desc: "Correzione dentale delicata.",

    service4Title: "Odontoiatria estetica",
    service4Desc: "Miglioramento del sorriso.",

    learnMore: "Scopri di più",
    ctaConsultation: "Prenota consulenza",
    noRegistration: "Nessuna registrazione richiesta",
    teamTitle: "Team",
    teamDesc: "Scopri il nostro team",

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
    doctorsTitle: "I vostri dentisti",
    doctorsDesc: "Specialisti esperti con passione per l'odontoiatria moderna e il benessere dei pazienti",

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
    teamName1: "Anna Müller",
    teamName2: "Mehmet Yilmaz",
    teamName3: "Laura Schneider",
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
  },

  tr: {
    services: "Hizmetler",
    team: "Ekip",
    prices: "Fiyatlar",
    contact: "İletişim",
    book: "Randevu al",
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
    servicesTitle: "Hizmetlerimiz",
    servicesDesc: "Modern teknoloji ile kapsamlı diş bakımı.",

    service1Title: "İmplantlar",
    service1Desc: "Güvenli bir gülüş için sabit dişler.",

    service2Title: "Diş temizliği",
    service2Desc: "Profesyonel temizlik.",

    service3Title: "Ortodonti",
    service3Desc: "Nazik diş düzeltme.",

    service4Title: "Estetik diş hekimliği",
    service4Desc: "Gülüşünüzü güzelleştirme.",

    learnMore: "Daha fazla bilgi",
    ctaConsultation: "Danışma al",
    noRegistration: "Kayıt gerekmez",
    teamTitle: "Ekibimiz",
    teamDesc: "Ekibimizle tanışın",

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
    doctorsTitle: "Diş Hekimleriniz",
    doctorsDesc: "Modern diş hekimliği ve hasta memnuniyetine tutkuyla bağlı deneyimli uzmanlar",

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
    teamName1: "Anna Müller",
    teamName2: "Mehmet Yilmaz",
    teamName3: "Laura Schneider",
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
  },

  ru: {
    services: "Услуги",
    team: "Команда",
    prices: "Цены",
    contact: "Контакты",
    book: "Записаться",
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
    servicesTitle: "Hizmetlerimiz",
    servicesDesc: "Modern teknoloji ile kapsamlı diş bakımı.",

    service1Title: "İmplantlar",
    service1Desc: "Güvenli bir gülüş için sabit dişler.",

    service2Title: "Diş temizliği",
    service2Desc: "Profesyonel temizlik.",

    service3Title: "Ortodonti",
    service3Desc: "Nazik diş düzeltme.",

    service4Title: "Estetik diş hekimliği",
    service4Desc: "Gülüşünüzü güzelleştirme.",

    learnMore: "Daha fazla bilgi",
    ctaConsultation: "Danışma al",
    noRegistration: "Kayıt gerekmez",
    teamTitle: "Команда",
    teamDesc: "Познакомьтесь с нашей командой",

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
    doctorsTitle: "Ваши стоматологи",
    doctorsDesc: "Опытные специалисты с любовью к современной стоматологии и заботе о пациентах",

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
    teamName1: "Анна Мюллер",
    teamName2: "Мехмет Йылмаз",
    teamName3: "Лаура Шнайдер",
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
  },

  ar: {
    services: "الخدمات",
    team: "الفريق",
    prices: "الأسعار",
    contact: "التواصل",
    book: "احجز موعدًا",
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
    servicesTitle: "خدماتنا",
    servicesDesc: "رعاية أسنان شاملة بأحدث التقنيات.",

    service1Title: "زراعة الأسنان",
    service1Desc: "أسنان ثابتة لابتسامة واثقة.",

    service2Title: "تنظيف الأسنان",
    service2Desc: "تنظيف احترافي.",

    service3Title: "تقويم الأسنان",
    service3Desc: "تصحيح لطيف للأسنان.",

    service4Title: "طب الأسنان التجميلي",
    service4Desc: "تحسين الابتسامة.",

    learnMore: "المزيد",
    ctaConsultation: "احجز استشارة",
    noRegistration: "لا حاجة للتسجيل",
    teamTitle: "الفريق",
    teamDesc: "تعرّف على فريقنا",

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

    teamPhilosophy3:
      "كل مريض يستحق رعاية شخصية وإنسانية.",

    hobbies: "الهوايات",
    philosophy: "الفلسفة",
    doctorsTitle: "أطباء الأسنان",
    doctorsDesc: "متخصصون ذوو خبرة وشغف بطب الأسنان الحديث وراحة المرضى",

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
    teamName1: "آنا مولر",
    teamName2: "محمد يلماز",
    teamName3: "لورا شنايدر",
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
  },

  fa: {
    services: "خدمات",
    team: "تیم",
    prices: "قیمت‌ها",
    contact: "تماس",
    book: "رزرو وقت",
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
    servicesTitle: "خدمات ما",
    servicesDesc: "مراقبت کامل دندان با فناوری مدرن.",

    service1Title: "ایمپلنت",
    service1Desc: "دندان‌های ثابت برای لبخند مطمئن.",

    service2Title: "تمیز کردن دندان",
    service2Desc: "تمیزکاری حرفه‌ای.",

    service3Title: "ارتودنسی",
    service3Desc: "اصلاح ملایم دندان‌ها.",

    service4Title: "دندانپزشکی زیبایی",
    service4Desc: "بهبود لبخند.",

    learnMore: "بیشتر بدانید",
    ctaConsultation: "رزرو مشاوره",
    noRegistration: "بدون نیاز به ثبت‌نام",
    teamTitle: "تیم",
    teamDesc: "با تیم ما آشنا شوید",

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
    doctorsTitle: "دندانپزشکان شما",
    doctorsDesc: "متخصصان با تجربه با اشتیاق به دندانپزشکی مدرن و رفاه بیماران",

    doctor1Name: "دکتر لوکاس وبر",
    doctor1Specialty: "ایمپلنتولوژی & دندانپزشکی زیبایی",
    doctor1Experience: "۱۲ سال تجربه",
    doctor1Desc:
      "متخصص در ایمپلنتولوژی مدرن با استفاده از تکنیک‌های کم‌تهاجمی. سبک آرام او باعث آرامش بیماران می‌شود.",
    doctor1Focus1: "ایمپلنتولوژی",
    doctor1Focus2: "دندانپزشکی زیبایی",
    doctor1Focus3: "روش‌های کم‌تهاجمی",
    doctor1Philosophy:
      "تمرکز بر درمانی آرام، مبتنی بر اعتماد و حداکثر راحتی برای بیمار است.",

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
    teamName1: "آنا مولر",
    teamName2: "محمد ییلماز",
    teamName3: "لورا اشنایدر",
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
  },

  sq: {
    services: "Shërbimet",
    team: "Ekipi",
    prices: "Çmimet",
    contact: "Kontakti",
    book: "Rezervo takim",
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
    servicesTitle: "Shërbimet tona",
    servicesDesc: "Kujdes dentar modern dhe i plotë.",

    service1Title: "Implante",
    service1Desc: "Dhëmbë të qëndrueshëm për buzëqeshje të sigurt.",

    service2Title: "Pastrimi i dhëmbëve",
    service2Desc: "Pastrimi profesional.",

    service3Title: "Ortodonci",
    service3Desc: "Korrigjim i butë i dhëmbëve.",

    service4Title: "Stomatologji estetike",
    service4Desc: "Përmirësimi i buzëqeshjes.",

    learnMore: "Më shumë",
    ctaConsultation: "Rezervo konsultë",
    noRegistration: "Nuk kërkohet regjistrim",
    teamTitle: "Ekipi",
    teamDesc: "Njihuni me ekipin tonë",

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

    teamPhilosophy3:
      "Çdo pacient meriton kujdes personal dhe empatik.",

    hobbies: "Hobi",
    philosophy: "Filozofia",
    doctorsTitle: "Dentistët tuaj",
    doctorsDesc: "Specialistë me përvojë dhe pasion për stomatologjinë moderne dhe mirëqenien e pacientëve",

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
    teamName1: "Anna Müller",
    teamName2: "Mehmet Yilmaz",
    teamName3: "Laura Schneider",
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
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
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