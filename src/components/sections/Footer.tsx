import { site } from "@/data/site";
import { Instagram, Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border/60 bg-background pt-16 pb-8">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <p className="font-serif text-3xl text-gold">La Forêt</p>
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mt-2">
            Bar &amp; Bistro · Kampala
          </p>
          <p className="mt-6 text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
            A luxury lounge experience under the canopy. {site.hours}
          </p>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Contact</p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3 items-start text-foreground/80">
              <MapPin className="w-4 h-4 text-gold mt-0.5" />
              <span>{site.address}</span>
            </li>
            <li>
              <a href={`tel:${site.phone}`} className="flex gap-3 items-center text-foreground/80 hover:text-gold">
                <Phone className="w-4 h-4 text-gold" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={site.whatsappReserve} target="_blank" rel="noreferrer" className="flex gap-3 items-center text-foreground/80 hover:text-gold">
                <MessageCircle className="w-4 h-4 text-gold" /> {site.whatsapp}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex gap-3 items-center text-foreground/80 hover:text-gold break-all">
                <Mail className="w-4 h-4 text-gold" /> {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Follow</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 border border-gold/40 text-foreground hover:bg-gold hover:text-primary-foreground transition-all text-sm tracking-wide"
          >
            <Instagram className="w-4 h-4" /> @laforetbarbistro
          </a>
          <p className="mt-6 text-xs text-muted-foreground font-light">
            Tag us. Share your evening. Be part of the forest.
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} La Forêt Bar &amp; Bistro. All rights reserved.</p>
         <p className="tracking-[0.2em] uppercase">Created by : Michele Eyob</p>
      </div>
    </div>
  </footer>
);
