 import foodItem from "@/assets/food-gallery.jpg";
import nightlife from "@/assets/gallery-nightlife.jpg";
import bar from "@/assets/gallery-bar-new.jpg";
 import cocktailsItem from "@/assets/cocktails-gallery.jpg";
import garden2 from "@/assets/gallery-garden-2.jpg";
import food2 from "@/assets/gallery-food-2.jpg";

export type GalleryItem = {
  src: string;
   category: "outdoor" | "Bar" | "Nightlife" | "cocktails";
  alt: string;
};

export const gallery: GalleryItem[] = [
   { src: foodItem, category: "outdoor", alt: "Signature food dish" },
  { src: bar, category: "Bar", alt: "Backlit premium liquor bar shelf" },
  { src: nightlife, category: "Nightlife", alt: "Vibrant nightlife with stage lighting" },
   { src: cocktailsItem, category: "cocktails", alt: "Signature cocktail presentation" },
   { src: garden2, category: "outdoor", alt: "Outdoor seating at twilight" },
   { src: food2, category: "cocktails", alt: "Signature dish presentation" },
];
