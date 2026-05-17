import { cn } from "../../utils/cn";

type CountryCode =
  | "CA"
  | "NG"
  | "AE"
  | "GB"
  | "DE"
  | "IT"
  | "IN"
  | "US"
  | "FR"
  | "ES"
  | "AU"
  | "JP"
  | "BR"
  | "MX";

type CountryFlagProps = {
  code: CountryCode;
  className?: string;
};

const flagConfig: Record<CountryCode, { emoji: string; name: string }> = {
  CA: { emoji: "🇨🇦", name: "Canada" },
  NG: { emoji: "🇳🇬", name: "Nigeria" },
  AE: { emoji: "🇦🇪", name: "United Arab Emirates" },
  GB: { emoji: "🇬🇧", name: "United Kingdom" },
  DE: { emoji: "🇩🇪", name: "Germany" },
  IT: { emoji: "🇮🇹", name: "Italy" },
  IN: { emoji: "🇮🇳", name: "India" },
  US: { emoji: "🇺🇸", name: "United States" },
  FR: { emoji: "🇫🇷", name: "France" },
  ES: { emoji: "🇪🇸", name: "Spain" },
  AU: { emoji: "🇦🇺", name: "Australia" },
  JP: { emoji: "🇯🇵", name: "Japan" },
  BR: { emoji: "🇧🇷", name: "Brazil" },
  MX: { emoji: "🇲🇽", name: "Mexico" },
};

export function CountryFlag({ code, className }: CountryFlagProps) {
  const config = flagConfig[code];

  if (!config) {
    return (
      <span
        className={cn(
          "inline-flex h-5 w-7 items-center justify-center rounded bg-slate-200 text-xs font-medium text-slate-600",
          className
        )}
      >
        {code}
      </span>
    );
  }

  return (
    <span
      className={cn("inline-block text-lg leading-none", className)}
      title={config.name}
      role="img"
      aria-label={`Flag of ${config.name}`}
    >
      {config.emoji}
    </span>
  );
}