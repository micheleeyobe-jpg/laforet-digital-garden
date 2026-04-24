import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { site } from "@/data/site";

export const QuickInfoBar = () => {
  const items = [
    { icon: MapPin, label: "Find Us", value: site.address, href: site.mapsUrl },
    { icon: Phone, label: "Call", value: site.phone, href: `tel:${site.phone}` },
    { icon: MessageCircle, label: "WhatsApp", value: site.whatsapp, href: site.whatsappReserve },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  ];
  return (
    <section className="border-y border-border/60 bg-emerald-deep/40">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60">
        {items.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-center gap-4 p-6 bg-background/80 hover:bg-card transition-colors"
          >
            <div className="w-10 h-10 flex items-center justify-center border border-gold/40 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-all">
              <Icon className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{label}</p>
              <p className="text-sm text-foreground truncate">{value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
