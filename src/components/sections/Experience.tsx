import expImg from "@/assets/experience.jpg";
import { Reveal } from "../Reveal";

export const Experience = () => (
  <section id="experience" className="py-24 md:py-32 relative">
    <div className="container grid lg:grid-cols-2 gap-14 items-center">
      <Reveal>
        <div className="relative">
          <div className="absolute -inset-4 border border-gold/30 -z-10" />
          <img
            src={expImg}
            alt="Garden cocktails at twilight"
            loading="lazy"
            className="w-full h-[520px] object-cover"
          />
        </div>
      </Reveal>
      <Reveal delay={150}>
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-5">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
            More Than a Bar—<span className="italic text-gold">An Experience</span>
          </h2>
          <span className="gold-divider my-7" />
          <div className="space-y-5 text-foreground/80 font-light text-lg leading-relaxed">
            <p>
              Hidden in a verdant pocket off Ggaba Road, La Forêt is Kampala's most enchanting
              after-dark sanctuary — a forest of velvet, candlelight and considered cuisine.
            </p>
            <p>
              Sip handcrafted cocktails beneath a canopy of warm lanterns. Lose yourself in live
              acoustic sets that drift through the garden. Linger over plates that travel from
              Italy to the Horn of Africa, all served with quiet, attentive grace.
            </p>
            <p className="text-gold font-serif italic text-xl">
              An evening at La Forêt is a slow, deliberate luxury.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
