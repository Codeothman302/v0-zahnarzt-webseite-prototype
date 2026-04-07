"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-context";
import { DentalMascot } from "@/components/dental-mascot";

interface FloatingCTAProps {
  onClick: () => void;
}

export function FloatingCTA({ onClick }: FloatingCTAProps) {
  const { t } = useLanguage();

  return (
    <>
      {/* Global dental mascot — slides up from bottom every 57s, points toward button */}
      <DentalMascot />

      {/* Fixed CTA button — bottom-right, above Voiceflow widget */}
      <div
        className="fixed z-50 flex items-center"
        style={{ bottom: "clamp(20px, 3vw, 28px)", right: "clamp(16px, 3vw, 28px)" }}
      >
        <Button
          onClick={onClick}
          size="lg"
          className="
            flex items-center gap-2.5 rounded-full
            bg-primary text-primary-foreground
            shadow-lg hover:shadow-xl
            px-5 py-3 text-sm font-semibold
            transition-all duration-200
            hover:scale-[1.04] active:scale-[0.97]
            focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
          "
          aria-label={t.heroButton}
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="hidden sm:inline">{t.heroButton}</span>
        </Button>
      </div>
    </>
  );
}
