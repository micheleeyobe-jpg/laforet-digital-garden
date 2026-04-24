import { Reveal } from "./Reveal";

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) => (
  <Reveal>
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-14`}>
      {eyebrow && (
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 font-medium">{eyebrow}</p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
        {title}
      </h2>
      <div className={`my-6 ${align === "center" ? "" : ""}`}>
        <span className="gold-divider" />
      </div>
      {description && (
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  </Reveal>
);
