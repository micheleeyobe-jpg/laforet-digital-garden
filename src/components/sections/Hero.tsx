import heroImg from "@/assets/hero-bar.jpg";
import { site } from "@/data/site";
import { MessageCircle, UtensilsCrossed } from "lucide-react";

export const Hero = () => (
  <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="La Forêt luxury bar interior"
        className="w-full h-full object-cover scale-105 animate-fade-in-slow"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/30" />
    </div>

    <div className="container relative z-10 pt-28 pb-20">
      <div className="max-w-3xl">
        <p className="text-xs md:text-sm tracking-[0.5em] uppercase text-gold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
           Kampala · Luxury Bar & bistro
        </p>
        <h1
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] text-foreground opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          La <span className="text-gold italic">Forêt</span>
        </h1>
        <p
          className="mt-6 text-lg md:text-2xl font-light text-foreground/85 max-w-xl opacity-0 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          {site.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.9s" }}>
          <a
            href={site.whatsappReserve}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-4 bg-gradient-gold text-primary-foreground text-xs tracking-[0.3em] uppercase font-medium shadow-gold hover:shadow-elegant transition-all duration-500"
          >
            <MessageCircle className="w-4 h-4" />
            Reserve via WhatsApp
          </a>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-7 py-4 border border-gold/60 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold/10 transition-all duration-500"
          >
            <UtensilsCrossed className="w-4 h-4" />
            View Menu
          </a>
        </div>
        <p className="mt-10 text-xs tracking-[0.4em] uppercase text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "1.1s" }}>
          {site.hours}
        </p>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
      <div className="w-px h-14 bg-gradient-to-b from-transparent via-gold to-transparent" />
    </div>
  </section>
);
