import heroImg from "@/assets/hero-bar.jpg";
import { site } from "@/data/site";
import { Reveal } from "../Reveal";
import { MessageCircle, Phone } from "lucide-react";

export const FinalCTA = () => (
  <section className="relative py-32 md:py-40 overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
    </div>
    <div className="container relative z-10 text-center">
      <Reveal>
        <p className="text-xs tracking-[0.5em] uppercase text-gold mb-6">An Invitation</p>
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1] text-foreground">
          Your Night <span className="italic text-gold">Starts Here</span>
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto font-light">
          Reserve a candlelit table or simply call to begin the conversation.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={site.whatsappReserve}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground text-xs tracking-[0.3em] uppercase shadow-gold"
          >
            <MessageCircle className="w-4 h-4" /> Reserve Now
          </a>
          <a
            href={`tel:${site.phone}`}
            className="inline-flex items-center gap-2 px-8 py-4 border border-gold/60 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold/10"
          >
            <Phone className="w-4 h-4" /> Contact Us
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
