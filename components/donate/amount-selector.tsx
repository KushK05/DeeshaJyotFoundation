"use client";

import { DONATION_PRESETS } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { ImpactTile } from "@/components/donate/impact-tile";

interface AmountSelectorProps {
  amount: number;
  recurring: boolean;
  onAmountChange: (amount: number) => void;
  onRecurringChange: (recurring: boolean) => void;
}

export function AmountSelector({
  amount,
  recurring,
  onAmountChange,
  onRecurringChange,
}: AmountSelectorProps) {
  const customValue = DONATION_PRESETS.some((preset) => preset.amount === amount)
    ? ""
    : amount > 0
      ? amount.toString()
      : "";

  return (
    <div className="rounded-xl bg-surface-container p-8 md:p-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-headline text-3xl text-on-surface">Choose Your Gift</h2>
        <div className="inline-flex rounded-lg bg-surface p-1">
          <button
            type="button"
            className={`focus-ring rounded-md px-4 py-2 text-sm font-semibold ${
              !recurring
                ? "bg-primary text-on-primary"
                : "text-on-surface-variant hover:text-primary"
            }`}
            onClick={() => onRecurringChange(false)}
          >
            One-time
          </button>
          <button
            type="button"
            className={`focus-ring rounded-md px-4 py-2 text-sm font-semibold ${
              recurring
                ? "bg-primary text-on-primary"
                : "text-on-surface-variant hover:text-primary"
            }`}
            onClick={() => onRecurringChange(true)}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {DONATION_PRESETS.map((preset) => (
          <ImpactTile
            key={preset.amount}
            amount={preset.amount}
            impact={preset.impact}
            active={amount === preset.amount}
            onClick={() => onAmountChange(preset.amount)}
          />
        ))}
      </div>

      <label htmlFor="custom-amount" className="mt-8 block text-sm font-semibold text-on-surface-variant">
        Custom amount
      </label>
      <div className="mt-2 flex items-center gap-3">
        <span className="text-2xl text-on-surface-variant">₹</span>
        <Input
          id="custom-amount"
          type="number"
          inputMode="numeric"
          min={1}
          value={customValue}
          onChange={(event) => onAmountChange(Number(event.target.value || 0))}
          placeholder="Enter custom amount"
          className="text-lg"
        />
      </div>
    </div>
  );
}
