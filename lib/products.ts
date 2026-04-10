export type ProductCategory =
  | "Clothing"
  | "Accessories"
  | "Crafts"
  | "Children's Items";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: ProductCategory;
  artisanStory: {
    name: string;
    bio: string;
    quote: string;
    image: string;
  };
  images: string[];
}

export const categories: ProductCategory[] = [
  "Clothing",
  "Accessories",
  "Crafts",
  "Children's Items",
];

export const products: Product[] = [
  {
    id: "prod_earth_scarf",
    slug: "earth-scarf",
    name: "The Earth Scarf",
    description: "Hand-stitched by women artisans using organic cotton dyes.",
    longDescription:
      "A breathable cotton scarf woven on handlooms using low-impact terracotta dyes. Each piece supports rural women-led workshops and includes a stitched artisan signature tag.",
    price: 4500,
    category: "Accessories",
    artisanStory: {
      name: "Priya Das",
      bio: "Priya leads a weaving circle of 16 women and mentors first-generation artisans.",
      quote:
        "This pattern represents the monsoon rains of my childhood. Every stitch helped me send my daughter to university.",
      image: "/assets/images/team/priya-das.svg",
    },
    images: [
      "/assets/images/products/earth-scarf-1.svg",
      "/assets/images/products/earth-scarf-2.svg",
      "/assets/images/products/earth-scarf-3.svg",
    ],
  },
  {
    id: "prod_nesting_bowl",
    slug: "artisan-nesting-bowl",
    name: "Artisan Nesting Bowl",
    description: "Sustainably sourced reclaimed wood, polished with beeswax.",
    longDescription:
      "A hand-carved reclaimed oak bowl with natural oil finish. Designed for dry snacks, display, or daily rituals.",
    price: 3200,
    category: "Crafts",
    artisanStory: {
      name: "Rafiq Alam",
      bio: "Rafiq trains youth in woodcraft and material reuse.",
      quote:
        "Every reclaimed plank has lived one life already. We give it another with purpose.",
      image: "/assets/images/team/rafiq-alam.svg",
    },
    images: [
      "/assets/images/products/nesting-bowl-1.svg",
      "/assets/images/products/nesting-bowl-2.svg",
      "/assets/images/products/nesting-bowl-3.svg",
    ],
  },
  {
    id: "prod_sage_cardigan",
    slug: "sage-wool-cardigan",
    name: "Sage Wool Cardigan",
    description: "Knit with care by our senior artisan collective.",
    longDescription:
      "A soft wool cardigan for children with hand-finished edges and naturally dyed yarn. Ideal for winter layering.",
    price: 6800,
    category: "Children's Items",
    artisanStory: {
      name: "Farida Khatun",
      bio: "Farida is a senior knitter and quality mentor.",
      quote:
        "When we knit for children, we imagine warmth reaching beyond our village.",
      image: "/assets/images/team/farida-khatun.svg",
    },
    images: [
      "/assets/images/products/sage-cardigan-1.svg",
      "/assets/images/products/sage-cardigan-2.svg",
      "/assets/images/products/sage-cardigan-3.svg",
    ],
  },
  {
    id: "prod_morning_mugs",
    slug: "morning-mugs-set",
    name: "Morning Mugs (Set of 2)",
    description: "Pottery hand-pressed by youth workshop graduates.",
    longDescription:
      "Speckled ceramic mugs shaped by hand with subtle thumb indents for better grip. Fired in small village kilns.",
    price: 2800,
    category: "Crafts",
    artisanStory: {
      name: "Ananya Roy",
      bio: "Ananya supports youth pottery apprenticeships in two districts.",
      quote:
        "Clay teaches patience. With each batch, we build both confidence and income.",
      image: "/assets/images/team/ananya-roy.svg",
    },
    images: [
      "/assets/images/products/morning-mugs-1.svg",
      "/assets/images/products/morning-mugs-2.svg",
      "/assets/images/products/morning-mugs-3.svg",
    ],
  },
  {
    id: "prod_heritage_tote",
    slug: "heritage-tote",
    name: "Heritage Tote",
    description: "Full-grain tote stitched by local leather artisans.",
    longDescription:
      "A durable daily tote crafted with vegetable-tanned leather and reinforced base seams for long life.",
    price: 12000,
    category: "Accessories",
    artisanStory: {
      name: "Ritu Sen",
      bio: "Ritu organizes production for ethical leather micro-units.",
      quote:
        "Strong bags, fair wages, and steady school fees for our children.",
      image: "/assets/images/team/ritu-sen.svg",
    },
    images: [
      "/assets/images/products/heritage-tote-1.svg",
      "/assets/images/products/heritage-tote-2.svg",
      "/assets/images/products/heritage-tote-3.svg",
    ],
  },
  {
    id: "prod_horizon_hanging",
    slug: "horizon-wall-hanging",
    name: "Horizon Wall Hanging",
    description: "A collaborative textile artwork by three generations.",
    longDescription:
      "Layered handwoven wall art blending indigo, sand, and clay tones. Includes wooden hanging rod.",
    price: 8500,
    category: "Clothing",
    artisanStory: {
      name: "Shabnam Collective",
      bio: "A family-run weaving group combining old motifs with new forms.",
      quote:
        "Each color line marks one voice from our collective.",
      image: "/assets/images/team/shabnam-collective.svg",
    },
    images: [
      "/assets/images/products/horizon-hanging-1.svg",
      "/assets/images/products/horizon-hanging-2.svg",
      "/assets/images/products/horizon-hanging-3.svg",
    ],
  },
];

export const findProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

// Backward-compatible exports
export const PRODUCTS = products;
export const PRODUCT_CATEGORIES = ["All", ...categories] as const;
export const getProductBySlug = findProductBySlug;
export const getRelatedProducts = (product: Product, count = 3) =>
  products.filter((candidate) => candidate.id !== product.id).slice(0, count);
