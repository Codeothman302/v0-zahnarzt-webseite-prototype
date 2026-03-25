"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingCTAProps {
  onClick: () => void;
}

export function FloatingCTA({ onClick }: FloatingCTAProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={onClick}
        size="lg"
        className="h-14 gap-2 rounded-full px-6 shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-5" />
        <span className="hidden sm:inline">Anliegen starten</span>
      </Button>
    </div>
  );
}
