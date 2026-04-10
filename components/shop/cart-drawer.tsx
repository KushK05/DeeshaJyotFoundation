"use client";

import { useMemo, useState } from "react";

import { useCart } from "@/components/providers/cart-context";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { NGO_INFO } from "@/lib/constants";
import { createRazorpayOrder, openRazorpayCheckout } from "@/lib/razorpay";
import { formatCurrencyINR } from "@/lib/utils";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    removeItem,
    updateQuantity,
    subtotal,
    clearCart,
  } = useCart();
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmation, setConfirmation] = useState<{
    paymentId: string;
    total: number;
    itemCount: number;
  } | null>(null);
  const amountInPaise = useMemo(() => Math.round(subtotal * 100), [subtotal]);

  const handlePay = async () => {
    setError(null);
    setConfirmation(null);
    setPaying(true);
    try {
      const orderItemCount = items.reduce((acc, item) => acc + item.quantity, 0);
      const orderTotal = subtotal;
      const order = await createRazorpayOrder({
        amount: amountInPaise,
        receipt: `cart_${Date.now()}`,
        notes: { source: "shop-cart" },
      });

      await openRazorpayCheckout({
        amount: amountInPaise,
        orderId: order.id,
        name: `${NGO_INFO.name} Shop`,
        description: "Artisan products purchase",
        onSuccess: (response) => {
          setConfirmation({
            paymentId: response.razorpay_payment_id,
            total: orderTotal,
            itemCount: orderItemCount,
          });
          clearCart();
        },
        onFailure: (message) => {
          setError(message || "Payment failed. Please retry.");
        },
      });
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Unable to start payment right now.",
      );
    } finally {
      setPaying(false);
    }
  };

  return (
    <>
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-on-surface/30 transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
      />
      <aside
        aria-label="Shopping cart"
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-outline-variant/30 bg-background p-6 shadow-warm transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-headline text-3xl text-primary">Your Cart</h2>
          <button
            type="button"
            aria-label="Close cart"
            className="focus-ring rounded-md p-2"
            onClick={closeCart}
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <>
            {confirmation ? (
              <div className="rounded-lg border border-secondary/40 bg-secondary-container p-4 text-on-secondary-container">
                <p className="font-semibold">Payment successful.</p>
                <p className="mt-1 text-sm">
                  Payment ID: {confirmation.paymentId}
                </p>
                <p className="mt-1 text-sm">
                  {confirmation.itemCount} item(s) • {formatCurrencyINR(confirmation.total)}
                </p>
              </div>
            ) : null}
            <p className="mt-4 text-on-surface-variant">Your cart is empty.</p>
          </>
        ) : (
          <>
            <ul className="max-h-[58vh] space-y-4 overflow-auto pr-1">
              {items.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="rounded-lg border border-outline-variant/30 bg-surface-container-low p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-headline text-xl">{product.name}</p>
                      <p className="text-sm text-on-surface-variant">
                        {formatCurrencyINR(product.price)}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="focus-ring rounded-md p-1 text-on-surface-variant hover:text-error"
                      onClick={() => removeItem(product.id)}
                    >
                      <Icon name="close" className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      className="focus-ring rounded-md border border-outline-variant/40 px-2 py-1"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      aria-label={`Decrease ${product.name} quantity`}
                    >
                      -
                    </button>
                    <span className="min-w-8 text-center">{quantity}</span>
                    <button
                      type="button"
                      className="focus-ring rounded-md border border-outline-variant/40 px-2 py-1"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      aria-label={`Increase ${product.name} quantity`}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-4 border-t border-outline-variant/30 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-on-surface-variant">Subtotal</span>
                <span className="font-headline text-2xl text-primary">
                  {formatCurrencyINR(subtotal)}
                </span>
              </div>
              {error ? <p className="text-sm text-error">{error}</p> : null}
              <Button
                size="lg"
                className="w-full"
                onClick={handlePay}
                disabled={paying || amountInPaise < 100}
              >
                {paying ? "Starting payment..." : "Proceed to Pay"}
              </Button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
