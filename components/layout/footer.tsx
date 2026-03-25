import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const footerLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Team", href: "#team" },
  { label: "Preise", href: "#preise" },
  { label: "Kontakt", href: "#kontakt" },
];

const legalLinks = [
  { label: "Impressum", href: "#" },
  { label: "Datenschutz", href: "#" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-semibold text-foreground">
              Zahnzentrum <span className="text-primary">Neckarblick</span>
            </Link>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Moderne Zahnmedizin in Horb am Neckar. Ihr Lächeln in besten Händen.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={link.label}
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 border-t border-border pt-8 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Zahnzentrum Neckarblick. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
