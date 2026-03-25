"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#team", label: "Team" },
  { href: "#preise", label: "Preise" },
  { href: "#kontakt", label: "Kontakt" },
];

interface NavbarProps {
  onOpenModal: () => void;
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // Account for sticky header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
    []
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <span className="text-xl font-semibold text-foreground">
            Zahnzentrum <span className="text-primary">Neckarblick</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button 
            onClick={onOpenModal} 
            size="lg" 
            className="rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
          >
            Termin buchen
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="size-5" />
              <span className="sr-only">Menu öffnen</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <nav className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.href);
                    setIsOpen(false);
                  }}
                  className="text-lg font-medium text-foreground transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  setIsOpen(false);
                  onOpenModal();
                }}
                size="lg"
                className="mt-4 w-full rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Termin buchen
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
