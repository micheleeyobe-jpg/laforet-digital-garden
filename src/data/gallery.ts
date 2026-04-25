import garden from "@/assets/gallery-garden.jpg";
import nightlife from "@/assets/gallery-nightlife.jpg";
import bar from "@/assets/gallery-bar-new.jpg";
import food1 from "@/assets/gallery-food-1.jpg";
import garden2 from "@/assets/gallery-garden-2.jpg";
import food2 from "@/assets/gallery-food-2.jpg";

export type GalleryItem = {
  src: string;
  category: "Garden" | "Bar" | "Nightlife" | "Food";
  alt: string;
};

export const gallery: GalleryItem[] = [
  { src: garden, category: "Garden", alt: "Lush garden lounge with string lights" },
  { src: bar, category: "Bar", alt: "Backlit premium liquor bar shelf" },
  { src: nightlife, category: "Nightlife", alt: "Vibrant nightlife with stage lighting" },
  { src: food1, category: "Food", alt: "Plated gourmet pizza and cocktails" },
  { src: garden2, category: "Garden", alt: "Outdoor seating at twilight" },
  { src: food2, category: "Food", alt: "Signature dish presentation" },
];
