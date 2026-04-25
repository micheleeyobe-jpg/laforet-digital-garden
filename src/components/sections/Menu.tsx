import { useState } from "react";
import { menu, formatUGX } from "@/data/menu";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import dish from "@/assets/menu/laforet-logo.jpg";

export const Menu = () => {
  const [active, setActive] = useState(menu[0].id);
  const cat = menu.find((c) => c.id === active)!;

  return (
    <section id="menu" className="py-24 md:py-32 relative">
      <div className="container">
        <SectionHeading
          eyebrow="The Menu"
          title="Crafted Plates, Considered Pours"
          description="From wood-fired pizzas to traditional Habesha classics — each dish, an invitation."
        />

        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {menu.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`px-5 py-2.5 text-[11px] tracking-[0.25em] uppercase transition-all duration-300 border ${
                  active === c.id
                    ? "border-gold text-primary-foreground bg-gradient-gold shadow-gold"
                    : "border-border text-foreground/70 hover:border-gold/50 hover:text-gold"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={cat.id} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {cat.items.map((item, i) => (
            <article
              key={item.name + i}
              className="luxury-card group flex overflow-hidden"
              data-editable="menu-item"
            >
              <div className="relative w-28 sm:w-32 flex-shrink-0 overflow-hidden bg-muted">
                <img
                  src={dish}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex-1 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between gap-3 items-baseline">
                    <h3 className="font-serif text-lg text-foreground leading-tight">{item.name}</h3>
                  </div>
                  {item.description && (
                    <p className="mt-2 text-xs text-muted-foreground font-light leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>
                <p className="mt-3 text-gold text-sm tracking-wider font-medium">
                  {formatUGX(item.price)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
