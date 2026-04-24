import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#offerings", label: "Offerings" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Events" },
  { href: "#location", label: "Location" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border/60 py-3"
          : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl text-gold">La Forêt</span>
          <span className="hidden sm:inline text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Bar &amp; Bistro</span>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-foreground/80 hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={site.whatsappReserve}
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex items-center px-5 py-2.5 text-xs tracking-[0.25em] uppercase border border-gold/60 text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-300"
        >
          Reserve
        </a>
        <button
          aria-label="Menu"
          className="lg:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border/60 mt-3">
          <div className="container py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/90 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
            <a
              href={site.whatsappReserve}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 text-xs tracking-[0.25em] uppercase border border-gold/60 text-gold"
            >
              Reserve via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
