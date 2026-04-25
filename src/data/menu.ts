 import atrostoImg from "@/assets/menu/atrosto.jpg";
 import beefSandImg from "@/assets/menu/beef-sand.jpg";
 import chickenSandImg from "@/assets/menu/chicken-sand.jpg";
 import clubSandImg from "@/assets/menu/club-sand.jpg";
 import vegSandImg from "@/assets/menu/veg-sand.jpg";
 import beefSandVegImg from "@/assets/menu/beef-sand-veg.jpg";
 import steakSandImg from "@/assets/menu/steak-sand.jpg";
 
// Add / edit / remove menu items here. Each category renders editable cards.
export type MenuItem = {
  name: string;
  price: number; // UGX
  description?: string;
  image?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  blurb?: string;
  items: MenuItem[];
};

const d = {
  sand: "Layered with care, served on toasted artisan bread.",
  break: "A warm start to the day, the La Forêt way.",
  burg: "Hand-pressed patties, brioche bun, signature sauce.",
  pasta: "Al dente, slow-cooked sauces, finished tableside.",
  pizza: "Wood-fired stone-baked, golden crust.",
  hab: "Authentic Habesha flavors, traditionally plated.",
  fish: "Fresh-caught, expertly prepared.",
  wrap: "Seasoned, rolled, grilled to perfection.",
  beef: "Prime cuts, charred to your liking.",
  salad: "Crisp greens, vibrant dressings.",
  goat: "Slow-cooked tenderness, bold seasoning.",
};

export const menu: MenuCategory[] = [
  {
    id: "sandwiches",
    title: "Sandwiches",
    items: [
       { name: "Atrosto Sandwich", price: 18000, description: d.sand, image: atrostoImg },
       { name: "Beef Sandwich", price: 20000, description: d.sand, image: beefSandImg },
       { name: "Chicken Sandwich", price: 20000, description: d.sand, image: chickenSandImg },
       { name: "Club Sandwich", price: 25000, description: d.sand, image: clubSandImg },
       { name: "Veg Sandwich", price: 20000, description: d.sand, image: vegSandImg },
       { name: "Beef Sand Veg", price: 25000, description: d.sand, image: beefSandVegImg },
       { name: "Steak Sandwich", price: 20000, description: d.sand, image: steakSandImg },
    ],
  },
  {
    id: "breakfast",
    title: "Breakfast",
    items: [
      { name: "La Forêt Special Breakfast", price: 30000, description: d.break },
      { name: "Omelette", price: 12000, description: d.break },
      { name: "Scrambled Eggs", price: 10000, description: d.break },
      { name: "Chapati with Beans", price: 5000, description: d.break },
      { name: "G-Nut with Bread", price: 10000, description: d.break },
      { name: "Tom and Jerry", price: 6000, description: d.break },
      { name: "Rolex", price: 10000, description: d.break },
      { name: "Q’Chia Fitfit", price: 14000, description: d.break },
      { name: "Toast", price: 10000, description: d.break },
      { name: "Fruit Salad", price: 10000, description: d.break },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    items: [
      { name: "La Forêt Beef Burger", price: 24000, description: d.burg },
      { name: "La Forêt Chicken Burger", price: 26000, description: d.burg },
      { name: "La Forêt Bacon Burger", price: 26000, description: d.burg },
      { name: "La Forêt Vegan Burger", price: 28000, description: d.burg },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    items: [
      { name: "Chicken Alfredo", price: 28000, description: d.pasta },
      { name: "Bolognese", price: 23000, description: d.pasta },
      { name: "Spaghetti Napolitano", price: 20000, description: d.pasta },
      { name: "Carbonara", price: 26000, description: d.pasta },
      { name: "Vegetarian", price: 20000, description: d.pasta },
      { name: "Sizzling Hot Plate", price: 20000, description: d.pasta },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    items: [
      { name: "Margherita", price: 25000, description: d.pizza },
      { name: "Africana Pizza", price: 30000, description: d.pizza },
      { name: "Hawaiian Pizza", price: 20000, description: d.pizza },
      { name: "Pollo Pizza", price: 28000, description: d.pizza },
      { name: "La Forêt Special Pizza", price: 35000, description: d.pizza },
      { name: "Veggi Pizza", price: 30000, description: d.pizza },
      { name: "Family Special Pizza", price: 80000, description: "Made to share — generous portions for the whole table." },
      { name: "Tuna Pizza", price: 30000, description: d.pizza },
      { name: "Zilzil Pizza", price: 30000, description: d.pizza },
      { name: "Extra Cheese", price: 5000, description: "An extra layer of melted indulgence." },
    ],
  },
  {
    id: "habesha",
    title: "Habesha Food",
    items: [
      { name: "Red or White Tibsi", price: 20000, description: d.hab },
      { name: "Zilzil", price: 22000, description: d.hab },
      { name: "Dry Tibsi", price: 20000, description: d.hab },
      { name: "Shekla Tibsi", price: 20000, description: d.hab },
      { name: "Vegetarian Combo", price: 17000, description: d.hab },
      { name: "Meat Combo", price: 45000, description: d.hab },
      { name: "Geba Weta", price: 25000, description: d.hab },
      { name: "Gas Light", price: 20000, description: d.hab },
    ],
  },
  {
    id: "fish",
    title: "Fish",
    items: [
      { name: "Whole Fish", price: 35000, description: d.fish },
      { name: "Coated Fish", price: 25000, description: d.fish },
      { name: "Fish Fingers", price: 25000, description: d.fish },
      { name: "Grilled Fish Fillet", price: 25000, description: d.fish },
    ],
  },
  {
    id: "wraps",
    title: "Wraps & Burrito",
    items: [
      { name: "Chicken Wrap", price: 15000, description: d.wrap },
      { name: "Beef Wrap", price: 15000, description: d.wrap },
      { name: "Special La Forêt Burrito", price: 20000, description: d.wrap },
    ],
  },
  {
    id: "beef",
    title: "Beef",
    items: [
      { name: "Arrosto", price: 28000, description: d.beef },
      { name: "Beef Steak", price: 23000, description: d.beef },
      { name: "Grilled Beef Steak", price: 20000, description: d.beef },
      { name: "Sizzling Hot Plate", price: 20000, description: d.beef },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      { name: "La Forêt Special Salad", price: 20000, description: d.salad },
      { name: "Chicken Salad", price: 17000, description: d.salad },
      { name: "Beef Salad", price: 15000, description: d.salad },
      { name: "Normal Salad", price: 13000, description: d.salad },
    ],
  },
  {
    id: "goat",
    title: "Goat",
    items: [
      { name: "Grilled Goat / Goat Choma", price: 30000, description: d.goat },
      { name: "Fried Goat Meat with Fries & Vegetables", price: 24000, description: d.goat },
    ],
  },
];

export const formatUGX = (n: number) => `UGX ${n.toLocaleString("en-US")}`;
