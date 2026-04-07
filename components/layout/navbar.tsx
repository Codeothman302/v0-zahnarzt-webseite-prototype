"use client";

import { useLanguage } from "@/components/language-context";
import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const LANGUAGE_OPTIONS = [
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "it", flag: "🇮🇹", label: "Italiano" },
  { code: "tr", flag: "🇹🇷", label: "Türkçe" },
  { code: "ru", flag: "🇷🇺", label: "Русский" },
  { code: "ar", flag: "🇸🇦", label: "العربية" },
  { code: "fa", flag: "🇮🇷", label: "فارسی" },
  { code: "sq", flag: "🇦🇱", label: "Shqip" },
] as const;

function LanguageDropdown() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGE_OPTIONS.find((o) => o.code === lang) ?? LANGUAGE_OPTIONS[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-lg border border-border/60 bg-background px-3 py-1.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown
          className={`size-3.5 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-border/60 bg-background shadow-lg"
          style={{
            animation: "langDropdownIn 0.15s ease-out forwards",
          }}
          role="listbox"
        >
          {LANGUAGE_OPTIONS.map((opt) => (
            <button
              key={opt.code}
              role="option"
              aria-selected={lang === opt.code}
              onClick={() => {
                setLang(opt.code as typeof lang);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2.5 px-3 py-2 text-sm transition-colors hover:bg-muted ${
                lang === opt.code
                  ? "bg-primary/10 font-semibold text-primary"
                  : "text-foreground"
              }`}
            >
              <span className="text-base leading-none">{opt.flag}</span>
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

interface NavbarProps {
  onOpenModal: () => void;
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  // ✅ navLinks HIER rein (NICHT oben!)
  const navLinks = [
    { href: "#leistungen", label: t.services },
    { href: "#team", label: t.team },
    { href: "#preise", label: t.prices },
    { href: "#kontakt", label: t.contact },
  ];

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
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

        {/* Logo */}
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

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">

          {/* Language Selector */}
          <LanguageDropdown />

          {/* Button */}
          <Button
            onClick={onOpenModal}
            size="lg"
            className="rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
          >
            {t.book}
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

              <div className="mt-2">
                <LanguageDropdown />
              </div>

              <Button
                onClick={() => {
                  setIsOpen(false);
                  onOpenModal();
                }}
                size="lg"
                className="mt-4 w-full rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t.book}
              </Button>
            </nav>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
}
