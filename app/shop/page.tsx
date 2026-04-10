import type { Metadata } from "next";

import { ShopPageContent } from "@/components/shop/shop-page-content";
import { NGO_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop handcrafted products made by our artisan community. Every purchase powers social impact.",
  openGraph: {
    title: `Shop | ${NGO_INFO.name}`,
    description:
      "Shop handcrafted products made by our artisan community. Every purchase powers social impact.",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function ShopPage() {
  return <ShopPageContent />;
}
