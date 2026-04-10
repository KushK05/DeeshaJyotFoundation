import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CartDrawer } from "@/components/shop/cart-drawer";
import { CartTrigger } from "@/components/shop/cart-trigger";
import { ProductCard } from "@/components/shop/product-card";
import { ProductDetail } from "@/components/shop/product-detail";
import { NGO_INFO } from "@/lib/constants";
import { findProductBySlug, products } from "@/lib/products";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = findProductBySlug(params.slug);
  if (!product) {
    return {
      title: "Product",
      description: "Product not found",
    };
  }

  return {
    title: product.name,
    description: product.description.slice(0, 160),
    openGraph: {
      title: `${product.name} | ${NGO_INFO.name}`,
      description: product.description.slice(0, 160),
      images: [{ url: "/og-image.jpg" }],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = findProductBySlug(params.slug);
  if (!product) notFound();

  const related = products
    .filter((candidate) => candidate.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <div className="mx-auto mt-8 flex w-full max-w-7xl justify-between px-6 md:px-8">
        <Link
          href="/shop"
          className="focus-ring rounded-md text-sm font-semibold text-primary underline decoration-dotted"
        >
          Back to Shop
        </Link>
        <CartTrigger />
      </div>

      <ProductDetail product={product} />

      <section className="mx-auto mb-20 max-w-7xl px-6 md:px-8">
        <h2 className="mb-8 font-headline text-4xl">You may also like</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      <CartDrawer />
    </>
  );
}
