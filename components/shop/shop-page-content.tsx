"use client";

import { useMemo, useState } from "react";

import { categories, products, ProductCategory } from "@/lib/products";
import { CartDrawer } from "@/components/shop/cart-drawer";
import { CartTrigger } from "@/components/shop/cart-trigger";
import { FilterBar } from "@/components/shop/filter-bar";
import { ProductGrid } from "@/components/shop/product-grid";

export function ShopPageContent() {
  const [activeFilter, setActiveFilter] = useState<"All" | ProductCategory>("All");

  const filteredProducts = useMemo(
    () =>
      activeFilter === "All"
        ? products
        : products.filter((product) => product.category === activeFilter),
    [activeFilter],
  );

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:px-8">
        <header className="mb-12 text-center">
          <h1 className="font-headline text-5xl tracking-tight text-on-surface md:text-7xl">
            Buy with Purpose
          </h1>
          <p className="mx-auto mt-3 max-w-2xl font-headline text-xl italic text-primary md:text-2xl">
            Every purchase empowers artisans and supports child education.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-xl bg-surface-container p-6">
                <h2 className="mb-4 font-headline text-2xl">Categories</h2>
                <div className="space-y-2">
                  <FilterBar active={activeFilter} onChange={setActiveFilter} />
                </div>
              </div>

              <div className="rounded-xl bg-secondary-container p-8 text-on-secondary-container">
                <h3 className="font-headline text-2xl">Artisan Support</h3>
                <p className="mt-2 text-sm">
                  100% of proceeds from the shop directly support artisan wages,
                  child nutrition, and learning resources.
                </p>
              </div>

              <div className="rounded-r-xl border-l-4 border-primary bg-surface-container-low p-6">
                <h4 className="font-headline text-lg italic">Crafted by Priya</h4>
                <p className="mt-2 text-sm italic text-on-surface-variant">
                  "This pattern represents the monsoon rains of my childhood.
                  Every stitch helped me send my daughter to university."
                </p>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-sm text-on-surface-variant">
                Showing {filteredProducts.length} of {products.length} products
              </p>
              <CartTrigger />
            </div>
            <ProductGrid products={filteredProducts} />

            <div className="mt-20 flex justify-center">
              <button
                type="button"
                className="focus-ring rounded-lg border-b-2 border-primary/20 bg-surface-container px-10 py-4 font-semibold text-primary transition-colors hover:bg-surface-container-highest"
              >
                View More Handcrafted Items
              </button>
            </div>

            <div className="sticky bottom-4 mt-8 rounded-xl border border-outline-variant/30 bg-primary p-4 text-center text-on-primary shadow-warm">
              <p className="font-semibold">
                100% of proceeds go to artisans and community programs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CartDrawer />
    </>
  );
}
