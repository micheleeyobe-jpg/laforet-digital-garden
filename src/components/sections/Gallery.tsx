import { useState } from "react";
import { gallery } from "@/data/gallery";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";

const cats = ["All", "Garden", "Bar", "Nightlife", "Food"] as const;

export const Gallery = () => {
  const [filter, setFilter] = useState<(typeof cats)[number]>("All");
  const items = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);
  return (
    <section id="gallery" className="py-24 md:py-32 bg-gradient-dark">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments at La Forêt"
          description="A glimpse into the garden, the bar, and the nights that stay with you."
        />

        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 text-[11px] tracking-[0.25em] uppercase border transition-all ${
                  filter === c
                    ? "border-gold text-gold"
                    : "border-border text-foreground/60 hover:border-gold/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {items.map((g, i) => (
            <Reveal key={g.src + i} delay={i * 60}>
              <figure
                data-editable="gallery-item"
                className={`group relative overflow-hidden ${
                  i % 5 === 0 ? "md:row-span-2 md:aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent opacity-90" />
                <figcaption className="absolute bottom-4 left-4 text-[10px] tracking-[0.3em] uppercase text-gold">
                  {g.category}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
