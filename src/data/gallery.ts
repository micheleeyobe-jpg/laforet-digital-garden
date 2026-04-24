import garden from "@/assets/gallery-garden.jpg";
import bar from "@/assets/gallery-bar.jpg";
import nightlife from "@/assets/gallery-nightlife.jpg";
import food from "@/assets/gallery-food.jpg";

export type GalleryItem = {
  src: string;
  category: "Garden" | "Bar" | "Nightlife" | "Food";
  alt: string;
};

export const gallery: GalleryItem[] = [
  { src: garden, category: "Garden", alt: "Lush garden lounge with string lights" },
  { src: bar, category: "Bar", alt: "Backlit premium liquor bar shelf" },
  { src: nightlife, category: "Nightlife", alt: "Vibrant nightlife with stage lighting" },
  { src: food, category: "Food", alt: "Plated gourmet pizza and cocktails" },
  { src: garden, category: "Garden", alt: "Outdoor seating at twilight" },
  { src: food, category: "Food", alt: "Signature dish presentation" },
];
