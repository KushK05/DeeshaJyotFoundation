"use client";

import { categories, ProductCategory } from "@/lib/products";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  active: "All" | ProductCategory;
  onChange: (value: "All" | ProductCategory) => void;
}

export function FilterBar({ active, onChange }: FilterBarProps) {
  const options: ("All" | ProductCategory)[] = ["All", ...categories];

  return (
    <div className="flex flex-wrap gap-3 rounded-xl bg-surface-container p-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={cn(
            "focus-ring rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
            active === option
              ? "bg-primary text-on-primary"
              : "text-on-surface-variant hover:bg-surface-container-highest hover:text-primary",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
