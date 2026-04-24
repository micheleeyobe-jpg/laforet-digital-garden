import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { site } from "@/data/site";
import {
  Utensils, ShoppingBag, Bike, Music2, Mic2, Brain,
  Wine, Beer, GlassWater, Martini, Sparkles,
  PartyPopper, ChefHat, DoorClosed, Clock, Pizza,
  MessageCircle, Phone
} from "lucide-react";

type Group = { title: string; items: { icon: any; label: string }[] };

const groups: Group[] = [
  {
    title: "Service",
    items: [
      { icon: Utensils, label: "Dine-in" },
      { icon: ShoppingBag, label: "Takeaway" },
      { icon: Bike, label: "Delivery" },
    ],
  },
  {
    title: "Highlights",
    items: [
      { icon: Music2, label: "Live Music" },
      { icon: Mic2, label: "Live Performances" },
      { icon: Brain, label: "Quiz Night" },
    ],
  },
  {
    title: "Drinks",
    items: [
      { icon: Wine, label: "Wine" },
      { icon: Beer, label: "Beer" },
      { icon: Martini, label: "Cocktails" },
      { icon: GlassWater, label: "Spirits" },
      { icon: Sparkles, label: "Alcohol" },
    ],
  },
  {
    title: "Experience",
    items: [
      { icon: PartyPopper, label: "Dancing" },
      { icon: ChefHat, label: "Food at Bar" },
      { icon: DoorClosed, label: "Private Dining" },
    ],
  },
  {
    title: "Happy Hour",
    items: [
      { icon: Clock, label: "Happy Hour Drinks" },
      { icon: Pizza, label: "Happy Hour Food" },
    ],
  },
];

export const Offerings = () => (
  <section id="offerings" className="py-24 md:py-32 bg-gradient-dark relative noise-overlay">
    <div className="container">
      <SectionHeading
        eyebrow="What Awaits"
        title="A Curated Way to Spend the Evening"
        description="From intimate dinners to electric nights — every detail considered, every craving anticipated."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 80}>
            <div className="luxury-card p-8 h-full">
              <h3 className="text-xs tracking-[0.35em] uppercase text-gold mb-6">{g.title}</h3>
              <ul className="space-y-4">
                {g.items.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-foreground/85">
                    <Icon className="w-4 h-4 text-gold/80" />
                    <span className="font-light tracking-wide">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <a
            href={site.whatsappReserve}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-gold text-primary-foreground text-xs tracking-[0.3em] uppercase shadow-gold"
          >
            <MessageCircle className="w-4 h-4" /> Reserve a Table
          </a>
          <a
            href={site.whatsappOrder}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 border border-gold/60 text-gold text-xs tracking-[0.3em] uppercase hover:bg-gold/10"
          >
            <ShoppingBag className="w-4 h-4" /> Order via WhatsApp
          </a>
          <a
            href={`tel:${site.phone}`}
            className="inline-flex items-center gap-2 px-7 py-4 border border-foreground/20 text-foreground text-xs tracking-[0.3em] uppercase hover:border-gold/60 hover:text-gold"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
