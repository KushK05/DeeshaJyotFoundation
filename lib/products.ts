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
  price: number;
  category: ProductCategory;
  artisanStory: string;
  artisanName: string;
  artisanBio: string;
  artisanPhoto: string;
  images: string[];
}

export const PRODUCT_CATEGORIES: Array<ProductCategory | "All"> = [
  "All",
  "Clothing",
  "Accessories",
  "Crafts",
  "Children's Items",
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    slug: "earth-scarf",
    name: "The Earth Scarf",
    description: "Hand-stitched scarf dyed with organic terracotta pigments.",
    price: 4500,
    category: "Clothing",
    artisanStory:
      "This scarf pattern mirrors the monsoon fields of her childhood village and funds her daughter's university fees.",
    artisanName: "Priya Devi",
    artisanBio: "Master weaver and mentor in the women artisan collective.",
    artisanPhoto: "/assets/images/products/artisan-priya.svg",
    images: [
      "/assets/images/products/earth-scarf-1.svg",
      "/assets/images/products/earth-scarf-2.svg",
      "/assets/images/products/earth-scarf-3.svg",
    ],
  },
  {
    id: "prod-2",
    slug: "artisan-nesting-bowl",
    name: "Artisan Nesting Bowl",
    description: "Hand-carved reclaimed wood bowl finished with natural wax.",
    price: 3200,
    category: "Crafts",
    artisanStory:
      "Made from rescued oak, each bowl keeps heritage carving techniques alive for younger apprentices.",
    artisanName: "Noor Ali",
    artisanBio: "Wood artisan preserving three generations of handcraft.",
    artisanPhoto: "/assets/images/products/artisan-noor.svg",
    images: [
      "/assets/images/products/nesting-bowl-1.svg",
      "/assets/images/products/nesting-bowl-2.svg",
      "/assets/images/products/nesting-bowl-3.svg",
    ],
  },
  {
    id: "prod-3",
    slug: "sage-wool-cardigan",
    name: "Sage Wool Cardigan",
    description: "Warm hand-knit cardigan crafted by senior women artisans.",
    price: 6800,
    category: "Clothing",
    artisanStory:
      "Every cardigan supports elder-led knitting circles and winter education drives.",
    artisanName: "Mariam K",
    artisanBio: "Textile trainer supporting intergenerational craft schools.",
    artisanPhoto: "/assets/images/products/artisan-mariam.svg",
    images: [
      "/assets/images/products/cardigan-1.svg",
      "/assets/images/products/cardigan-2.svg",
      "/assets/images/products/cardigan-3.svg",
    ],
  },
  {
    id: "prod-4",
    slug: "morning-mugs-set",
    name: "Morning Mugs (Set of 2)",
    description: "Thumb-pressed ceramic mugs made by youth workshop graduates.",
    price: 2800,
    category: "Crafts",
    artisanStory:
      "Each sale funds pottery training scholarships for first-generation learners.",
    artisanName: "Ritu Sen",
    artisanBio: "Pottery studio lead focused on youth livelihood pathways.",
    artisanPhoto: "/assets/images/products/artisan-ritu.svg",
    images: [
      "/assets/images/products/mugs-1.svg",
      "/assets/images/products/mugs-2.svg",
      "/assets/images/products/mugs-3.svg",
    ],
  },
  {
    id: "prod-5",
    slug: "heritage-tote",
    name: "Heritage Tote",
    description: "Full-grain ethical leather tote with heavy stitch detailing.",
    price: 12000,
    category: "Accessories",
    artisanStory:
      "Designed by a women-led micro-enterprise building independent household income.",
    artisanName: "Lata B.",
    artisanBio: "Leather craft specialist and cooperative organizer.",
    artisanPhoto: "/assets/images/products/artisan-lata.svg",
    images: [
      "/assets/images/products/tote-1.svg",
      "/assets/images/products/tote-2.svg",
      "/assets/images/products/tote-3.svg",
    ],
  },
  {
    id: "prod-6",
    slug: "horizon-wall-hanging",
    name: "Horizon Wall Hanging",
    description: "Collaborative textile art piece woven by three generations.",
    price: 8500,
    category: "Crafts",
    artisanStory:
      "A collaborative piece that preserves ancestral weaving patterns through family-led apprenticeships.",
    artisanName: "Savitri Collective",
    artisanBio: "Intergenerational artisan group from our community weaving center.",
    artisanPhoto: "/assets/images/products/artisan-collective.svg",
    images: [
      "/assets/images/products/hanging-1.svg",
      "/assets/images/products/hanging-2.svg",
      "/assets/images/products/hanging-3.svg",
    ],
  },
  {
    id: "prod-7",
    slug: "festival-kids-kurta",
    name: "Festival Kids Kurta",
    description: "Soft cotton kurta set stitched for children aged 4-8.",
    price: 2400,
    category: "Children's Items",
    artisanStory:
      "Produced in our women-led micro-unit to fund childhood nutrition initiatives.",
    artisanName: "Anju Rao",
    artisanBio: "Pattern designer specializing in children's clothing.",
    artisanPhoto: "/assets/images/products/artisan-anju.svg",
    images: [
      "/assets/images/products/kurta-1.svg",
      "/assets/images/products/kurta-2.svg",
      "/assets/images/products/kurta-3.svg",
    ],
  },
  {
    id: "prod-8",
    slug: "sunrise-bracelet",
    name: "Sunrise Bracelet",
    description: "Hand-knotted accessory with brass accents and natural fibers.",
    price: 1400,
    category: "Accessories",
    artisanStory:
      "Crafted during after-school sessions by youth artisans building savings for higher education.",
    artisanName: "Kiran P.",
    artisanBio: "Youth artisan and mentor in accessory design.",
    artisanPhoto: "/assets/images/products/artisan-kiran.svg",
    images: [
      "/assets/images/products/bracelet-1.svg",
      "/assets/images/products/bracelet-2.svg",
      "/assets/images/products/bracelet-3.svg",
    ],
  },
];

export const formatInr = (amount: number): string =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);

export const getProductBySlug = (slug: string): Product | undefined =>
  PRODUCTS.find((product) => product.slug === slug);

export const getRelatedProducts = (product: Product, count = 3): Product[] =>
  PRODUCTS.filter(
    (item) => item.id !== product.id && item.category === product.category,
  ).slice(0, count);
