import { events } from "@/data/events";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { Calendar } from "lucide-react";

export const Events = () => (
  <section id="events" className="py-24 md:py-32">
    <div className="container">
      <SectionHeading
        eyebrow="What's On"
        title="Events & Evenings"
        description="A rotating calendar of music, performance and celebration."
      />
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((e, i) => (
          <Reveal key={e.title} delay={i * 80}>
            <article
              data-editable="event"
              className="luxury-card p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial-emerald opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-center gap-3 text-gold mb-4">
                <Calendar className="w-4 h-4" />
                <span className="text-[10px] tracking-[0.3em] uppercase">{e.date}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-3 text-foreground">{e.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{e.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
