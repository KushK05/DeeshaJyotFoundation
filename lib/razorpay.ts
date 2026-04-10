export interface RazorpayOrderRequest {
  amount: number;
  currency?: "INR";
  receipt: string;
  notes?: Record<string, string>;
}

export interface RazorpayOrderResponse {
  id: string;
  amount: number;
  currency: string;
  status: string;
  receipt: string;
}

interface RazorpayCheckoutOptions {
  amount: number;
  orderId: string;
  name: string;
  description: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  onSuccess: (response: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }) => void;
  onFailure: (message?: string) => void;
}

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => {
      open: () => void;
      on: (event: string, handler: (payload: { error: { description?: string } }) => void) => void;
    };
  }
}

const RAZORPAY_SCRIPT = "https://checkout.razorpay.com/v1/checkout.js";

export async function loadRazorpayScript() {
  if (window.Razorpay) return;

  await new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = RAZORPAY_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Razorpay SDK."));
    document.body.appendChild(script);
  });
}

export async function createRazorpayOrder(
  payload: RazorpayOrderRequest,
): Promise<RazorpayOrderResponse> {
  const response = await fetch("/api/razorpay/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;
    throw new Error(data?.message || "Unable to create payment order.");
  }

  return (await response.json()) as RazorpayOrderResponse;
}

export async function openRazorpayCheckout(options: RazorpayCheckoutOptions) {
  await loadRazorpayScript();

  const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  if (!key) {
    throw new Error("Missing NEXT_PUBLIC_RAZORPAY_KEY_ID.");
  }

  return new Promise<void>((resolve, reject) => {
    const RazorpayCtor = window.Razorpay;
    if (!RazorpayCtor) {
      reject(new Error("Unable to initialize Razorpay."));
      return;
    }

    const instance = new RazorpayCtor({
      key,
      amount: options.amount,
      currency: "INR",
      name: options.name,
      description: options.description,
      order_id: options.orderId,
      prefill: options.prefill,
      handler: (response: {
        razorpay_payment_id: string;
        razorpay_order_id: string;
        razorpay_signature: string;
      }) => {
        options.onSuccess(response);
        resolve();
      },
      modal: {
        ondismiss: () => {
          options.onFailure("Payment cancelled.");
          reject(new Error("Payment cancelled."));
        },
      },
      theme: {
        color: "#9b3100",
      },
    });

    instance.on("payment.failed", (payload) => {
      options.onFailure(payload.error.description || "Payment failed.");
      reject(new Error(payload.error.description || "Payment failed."));
    });

    instance.open();
  });
}
