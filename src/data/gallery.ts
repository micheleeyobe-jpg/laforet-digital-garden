export type GalleryItem = {
  src: string;
  category: "Garden" | "Bar" | "Nightlife" | "Food";
  alt: string;
};

export const gallery: GalleryItem[] = [
  { src: "/src/assets/gallery-garden.jpg", category: "Garden", alt: "Lush garden lounge with string lights" },
  { src: "user-uploads://cbd8864b-26f1-48b9-9e77-df982ed99263.jpg", category: "Bar", alt: "Backlit premium liquor bar shelf" },
  { src: "/src/assets/gallery-nightlife.jpg", category: "Nightlife", alt: "Vibrant nightlife with stage lighting" },
  { src: "user-uploads://58cb5608-6adf-40a7-b666-93ff0d9d41d0.jpg", category: "Food", alt: "Plated gourmet pizza and cocktails" },
  { src: "user-uploads://0904a076-1f5a-44ef-98bf-7dd14d78b292.jpg", category: "Garden", alt: "Outdoor seating at twilight" },
  { src: "user-uploads://5fe28653-8cdf-446a-a35a-64d81191f08c.jpg", category: "Food", alt: "Signature dish presentation" },
];
