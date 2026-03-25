"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  FileText,
  HelpCircle,
  ClipboardList,
  Bot,
} from "lucide-react";

interface AssistantModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const quickOptions = [
  {
    icon: Calendar,
    label: "Termin",
    description: "Termin vereinbaren",
  },
  {
    icon: FileText,
    label: "Rezept",
    description: "Rezept anfragen",
  },
  {
    icon: HelpCircle,
    label: "Frage",
    description: "Allgemeine Frage",
  },
  {
    icon: ClipboardList,
    label: "Krankmeldung",
    description: "Krankmeldung einreichen",
  },
];

export function AssistantModal({ open, onOpenChange }: AssistantModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center sm:text-center">
          <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-primary/10">
            <Bot className="size-6 text-primary" />
          </div>
          <DialogTitle className="text-xl">
            Digitaler Anfrage-Assistent
          </DialogTitle>
          <DialogDescription>
            Unser digitaler Assistent hilft Ihnen in wenigen Sekunden weiter.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {quickOptions.map((option) => {
            const Icon = option.icon;
            return (
              <Button
                key={option.label}
                variant="outline"
                className="flex h-auto flex-col items-center gap-2 rounded-xl p-4 transition-all hover:border-primary hover:bg-primary/5"
                onClick={() => {
                  // Placeholder - would open specific flow
                  onOpenChange(false);
                }}
              >
                <div className="flex size-10 items-center justify-center rounded-full bg-muted">
                  <Icon className="size-5 text-muted-foreground" />
                </div>
                <span className="text-sm font-medium">{option.label}</span>
              </Button>
            );
          })}
        </div>

        <div className="mt-4 rounded-lg bg-muted/50 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            Wählen Sie eine Option oder beschreiben Sie Ihr Anliegen.
          </p>
        </div>

        <div className="mt-2 flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
          <span>Keine Registrierung</span>
          <span className="text-border">|</span>
          <span>Sicher & vertraulich</span>
          <span className="text-border">|</span>
          <span>Sofort starten</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
