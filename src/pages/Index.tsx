import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { QuickInfoBar } from "@/components/sections/QuickInfoBar";
import { Experience } from "@/components/sections/Experience";
import { Offerings } from "@/components/sections/Offerings";
import { Menu } from "@/components/sections/Menu";
import { Gallery } from "@/components/sections/Gallery";
import { Events } from "@/components/sections/Events";
import { Location } from "@/components/sections/Location";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <QuickInfoBar />
      <Experience />
      <Offerings />
      <Menu />
      <Gallery />
      <Events />
      <Location />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
