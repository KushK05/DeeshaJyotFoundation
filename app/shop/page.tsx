import type { Metadata } from "next";
import { ShopPageClient } from "@/components/shop/ShopPageClient";
import { NGO_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Shop | ${NGO_NAME}`,
  description:
    "Explore handcrafted products made by our artisan communities. Every purchase directly funds education and livelihoods.",
  openGraph: {
    title: `Shop | ${NGO_NAME}`,
    description:
      "Explore handcrafted products made by our artisan communities. Every purchase directly funds education and livelihoods.",
    images: ["/og-image.jpg"],
  },
};

export default function ShopPage() {
  return <ShopPageClient />;
}
