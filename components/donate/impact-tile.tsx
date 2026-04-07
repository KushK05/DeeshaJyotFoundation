interface ImpactTileProps {
  amount: number;
  impact: string;
  active?: boolean;
  onClick?: () => void;
}

export function ImpactTile({ amount, impact, active = false, onClick }: ImpactTileProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`focus-ring flex flex-col items-center justify-center rounded-xl border p-5 text-center transition-all duration-200 ${
        active
          ? "border-primary bg-primary text-on-primary"
          : "border-outline-variant/30 bg-surface-container-low hover:bg-surface-container-lowest"
      }`}
    >
      <span className="text-2xl font-bold">₹{amount.toLocaleString("en-IN")}</span>
      <span
        className={`mt-2 text-xs ${active ? "text-on-primary/90" : "text-on-surface-variant"}`}
      >
        {impact}
      </span>
    </button>
  );
}
