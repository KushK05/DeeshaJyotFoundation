import Image from "next/image";
import Link from "next/link";

import { Product } from "@/lib/products";
import { formatCurrencyINR } from "@/lib/utils";
import { useCart } from "@/components/providers/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="group flex flex-col">
      <Link
        href={`/shop/${product.slug}`}
        className="focus-ring block rounded-lg bg-surface-container-low p-1 transition-transform duration-300 group-hover:-translate-y-2"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[18px_8px_16px_10px] bg-surface-container-highest">
          <Image
            src={product.images[0]}
            alt={`${product.name} handcrafted product image`}
            fill
            className="object-cover p-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"
          />
          <Badge className="absolute right-3 top-3" tone="primary">
            {product.category}
          </Badge>
        </div>
      </Link>

      <div className="mt-4 px-2">
        <h3 className="font-headline text-2xl text-on-surface">{product.name}</h3>
        <p className="mt-1 text-sm text-on-surface-variant">{product.description}</p>
        <p className="mt-2 text-xs italic text-tertiary">
          Artisan: {product.artisanStory.name}
        </p>

        <div className="mt-6 flex items-center justify-between gap-3">
          <span className="font-headline text-xl text-primary">
            {formatCurrencyINR(product.price)}
          </span>
          <Button
            size="sm"
            onClick={() => addItem(product)}
            aria-label={`Add ${product.name} to cart`}
          >
            <Icon name="cart" className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  );
}
