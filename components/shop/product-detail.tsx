"use client";

import Image from "next/image";
import { useState } from "react";

import { Product } from "@/lib/products";
import { formatCurrencyINR } from "@/lib/utils";
import { useCart } from "@/components/providers/cart-context";
import { Button } from "@/components/ui/button";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const { addItem } = useCart();

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low">
            <Image
              src={activeImage}
              alt={`${product.name} showcase image`}
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {product.images.map((image, index) => (
              <button
                key={image}
                type="button"
                aria-label={`View ${product.name} image ${index + 1}`}
                className={`focus-ring relative aspect-square overflow-hidden rounded-lg border ${
                  activeImage === image
                    ? "border-primary"
                    : "border-outline-variant/30"
                }`}
                onClick={() => setActiveImage(image)}
              >
                <Image
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="font-headline text-5xl text-on-surface">{product.name}</h1>
          <p className="mt-4 text-lg text-on-surface-variant">{product.longDescription}</p>
          <p className="mt-8 font-headline text-4xl text-primary">
            {formatCurrencyINR(product.price)}
          </p>

          <Button size="lg" className="mt-8" onClick={() => addItem(product)}>
            Add to Cart
          </Button>

          <div className="mt-12 rounded-xl border border-outline-variant/30 bg-surface-container p-6">
            <h2 className="font-headline text-3xl text-tertiary">Artisan Story</h2>
            <p className="mt-2 font-semibold text-on-surface">
              {product.artisanStory.name}
            </p>
            <p className="mt-2 text-on-surface-variant">{product.artisanStory.bio}</p>
            <blockquote className="mt-4 border-l-4 border-primary pl-4 font-headline text-lg italic text-on-surface">
              &ldquo;{product.artisanStory.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
