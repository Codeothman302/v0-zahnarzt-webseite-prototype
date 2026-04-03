"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Translation = {
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