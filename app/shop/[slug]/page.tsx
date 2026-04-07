import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { ProductDetail } from "@/components/shop/ProductDetail";
import { PRODUCTS, getProductBySlug, getRelatedProducts } from "@/lib/products";
import { NGO_NAME } from "@/lib/constants";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: `Product | ${NGO_NAME}`,
      description: "Product detail page",
    };
  }

  return {
    title: `${product.name} | ${NGO_NAME}`,
    description: product.description.slice(0, 155),
    openGraph: {
      title: `${product.name} | ${NGO_NAME}`,
      description: product.description.slice(0, 155),
      images: [product.images[0]],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product, 3);

  return (
    <>
      <ProductDetail product={product} relatedProducts={relatedProducts} />
      <CartDrawer />
    </>
  );
}
