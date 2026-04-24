import { useState } from "react";
import { site } from "@/data/site";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { MapPin, Navigation, ChevronDown } from "lucide-react";

const directions = [
  "Head toward Ggaba Road (80m)",
  "Turn right onto Ggaba Road (450m)",
  "Turn right onto Diplomate Rd (500m)",
  "Turn left onto William W. Kalema Dr (270m)",
  "Turn left onto Tank Hill Rd (170m)",
  "Turn right onto Bukasa Cl (300m)",
  "Turn left onto Kavonao Rd",
];

export const Location = () => {
  const [open, setOpen] = useState(false);
  return (
    <section id="location" className="py-24 md:py-32 bg-gradient-dark">
      <div className="container">
        <SectionHeading
          eyebrow="Find Us"
          title="Our Address in Kampala"
          description="A quiet turn off Ggaba Road leads you into the forest."
        />
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <Reveal>
            <div className="luxury-card overflow-hidden h-full">
              <iframe
                title="La Forêt location"
                src={site.mapEmbed}
                className="w-full h-[420px] border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="luxury-card p-8 md:p-10 h-full flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-5 h-5 text-gold mt-1" />
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">Address</p>
                  <p className="font-serif text-2xl leading-snug">{site.address}</p>
                </div>
              </div>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-gold text-primary-foreground text-xs tracking-[0.3em] uppercase shadow-gold w-full sm:w-auto"
              >
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
              <div className="mt-8 border-t border-border/60 pt-6">
                <button
                  onClick={() => setOpen((v) => !v)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-xs tracking-[0.3em] uppercase text-foreground/80">
                    Step-by-step directions
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gold transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <ol className="mt-5 space-y-3 animate-fade-in">
                    {directions.map((d, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground font-light">
                        <span className="text-gold font-serif">{i + 1}.</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
