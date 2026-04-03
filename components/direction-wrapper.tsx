"use client";

import { useEffect } from "react";
import { useLanguage } from "@/components/language-context";

export function DirectionWrapper({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();

  useEffect(() => {
    const isRTL = lang === "ar" || lang === "fa";

    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  return <>{children}</>;
}