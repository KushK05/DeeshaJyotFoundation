"use client";

import { useCart } from "@/components/providers/cart-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";

export function CartTrigger() {
  const { totalItems, openCart } = useCart();

  return (
    <Button variant="outline" onClick={openCart} aria-label="Open cart" className="relative">
      <Icon name="cart" className="h-4 w-4" />
      Cart
      {totalItems > 0 ? (
        <Badge tone="primary" className="absolute -right-2 -top-2 h-6 min-w-6 justify-center px-1">
          {totalItems}
        </Badge>
      ) : null}
    </Button>
  );
}
