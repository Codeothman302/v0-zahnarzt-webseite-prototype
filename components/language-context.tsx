"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext<any>(null);

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

const translations: any = {
  de: {
    services: "Leistungen",
    team: "Team",
    prices: "Preise",
    contact: "Kontakt",
    book: "Termin buchen",
    title1: "Ihr Lächeln in",
    title2: "besten Händen",
  },
  en: {
    services: "Services",
    team: "Team",
    prices: "Prices",
    contact: "Contact",
    book: "Book appointment",
    title1: "Your smile in",
    title2: "the best hands",
  },
  es: {
    services: "Servicios",
    team: "Equipo",
    prices: "Precios",
    contact: "Contacto",
    book: "Reservar cita",
    title1: "Su sonrisa en",
    title2: "las mejores manos",
  },
  fr: {
    services: "Services",
    team: "Équipe",
    prices: "Prix",
    contact: "Contact",
    book: "Prendre rendez-vous",
    title1: "Votre sourire entre",
    title2: "de bonnes mains",
  },
  it: {
    services: "Servizi",
    team: "Team",
    prices: "Prezzi",
    contact: "Contatto",
    book: "Prenota appuntamento",
    title1: "Il tuo sorriso in",
    title2: "buone mani",
  },
  tr: {
    services: "Hizmetler",
    team: "Ekip",
    prices: "Fiyatlar",
    contact: "İletişim",
    book: "Randevu al",
    title1: "Gülüşünüz",
    title2: "emin ellerde",
  },
  ru: {
    services: "Услуги",
    team: "Команда",
    prices: "Цены",
    contact: "Контакт",
    book: "Записаться",
    title1: "Ваша улыбка в",
    title2: "надежных руках",
  },
  ar: {
    services: "الخدمات",
    team: "الفريق",
    prices: "الأسعار",
    contact: "التواصل",
    book: "احجز موعد",
    title1: "ابتسامتك في",
    title2: "أفضل الأيدي",
  },
  fa: {
    services: "خدمات",
    team: "تیم",
    prices: "قیمت‌ها",
    contact: "تماس",
    book: "رزرو وقت",
    title1: "لبخند شما در",
    title2: "بهترین دست‌ها",
  },
  sq: {
    services: "Shërbimet",
    team: "Ekipi",
    prices: "Çmimet",
    contact: "Kontakt",
    book: "Rezervo takim",
    title1: "Buzëqeshja juaj në",
    title2: "duart më të mira",
  },
};

export function LanguageProvider({ children }: any) {
  const [lang, setLang] = useState("de");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLang(saved);
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

export const useLanguage = () => useContext(LanguageContext);