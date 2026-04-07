"use client";

import { FormEvent, useMemo, useState } from "react";

import { createRazorpayOrder, openRazorpayCheckout } from "@/lib/razorpay";
import { AmountSelector } from "@/components/donate/amount-selector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DonorFormState {
  name: string;
  email: string;
  phone: string;
  pan: string;
}

const initialForm: DonorFormState = {
  name: "",
  email: "",
  phone: "",
  pan: "",
};

export function DonateForm() {
  const [amount, setAmount] = useState(500);
  const [recurring, setRecurring] = useState(false);
  const [form, setForm] = useState<DonorFormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const amountInPaise = useMemo(() => Math.max(0, amount * 100), [amount]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setMessage(null);

    if (!form.name || !form.email || !form.phone || amount <= 0) {
      setError("Please complete all required fields and choose an amount.");
      return;
    }

    setLoading(true);
    try {
      const order = await createRazorpayOrder({
        amount: amountInPaise,
        receipt: `donation_${Date.now()}`,
        notes: {
          source: recurring ? "donation-monthly" : "donation-onetime",
          donorName: form.name,
          donorEmail: form.email,
          donorPhone: form.phone,
        },
      });

      await openRazorpayCheckout({
        amount: amountInPaise,
        orderId: order.id,
        name: "NGO NAME Donations",
        description: recurring ? "Monthly Donation" : "One-time Donation",
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },
        onSuccess: (response) => {
          setMessage(
            `Thank you. Donation ID ${response.razorpay_payment_id}. Your 80G receipt will be emailed shortly.`,
          );
        },
        onFailure: (failureMessage) => {
          setError(failureMessage || "Payment failed. Please retry.");
        },
      });
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to start payment. Please retry.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <AmountSelector
        amount={amount}
        recurring={recurring}
        onAmountChange={setAmount}
        onRecurringChange={setRecurring}
      />

      <section className="rounded-xl bg-surface-container p-8 md:p-12">
        <h3 className="mb-6 font-headline text-3xl">Donor Details</h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="donor-name" className="mb-2 block text-sm font-semibold">
              Name
            </label>
            <Input
              id="donor-name"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>
          <div>
            <label htmlFor="donor-email" className="mb-2 block text-sm font-semibold">
              Email
            </label>
            <Input
              id="donor-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              required
            />
          </div>
          <div>
            <label htmlFor="donor-phone" className="mb-2 block text-sm font-semibold">
              Phone
            </label>
            <Input
              id="donor-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
              required
            />
          </div>
          <div>
            <label htmlFor="donor-pan" className="mb-2 block text-sm font-semibold">
              PAN (Optional)
            </label>
            <Input
              id="donor-pan"
              value={form.pan}
              onChange={(e) => setForm((prev) => ({ ...prev, pan: e.target.value }))}
            />
          </div>
        </div>

        {error ? <p className="mt-4 text-sm text-error">{error}</p> : null}
        {message ? <p className="mt-4 text-sm text-secondary">{message}</p> : null}

        <Button type="submit" size="lg" className="mt-8 w-full" disabled={loading}>
          {loading ? "Processing..." : "Donate Now"}
        </Button>
      </section>
    </form>
  );
}
