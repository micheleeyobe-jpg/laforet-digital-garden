import { site } from "@/data/site";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => (
  <a
    href={site.whatsappReserve}
    target="_blank"
    rel="noreferrer"
    aria-label="Reserve via WhatsApp"
    className="fixed bottom-6 right-6 z-50 group"
  >
    <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
    <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-gold text-primary-foreground shadow-gold group-hover:scale-110 transition-transform">
      <MessageCircle className="w-6 h-6" />
    </span>
  </a>
);
