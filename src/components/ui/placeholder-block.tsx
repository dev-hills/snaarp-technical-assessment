import { cn } from "../../utils/cn";

type PlaceholderBlockProps = {
  className?: string;
  label?: string;
  tone?: "brand" | "success" | "danger" | "neutral";
};

const toneMap = {
  brand:
    "from-blue-100 via-indigo-50 to-white text-blue-500 border-blue-100/80",
  success:
    "from-lime-100 via-emerald-50 to-white text-emerald-500 border-emerald-100/80",
  danger:
    "from-rose-100 via-orange-50 to-white text-rose-500 border-rose-100/80",
  neutral:
    "from-slate-100 via-slate-50 to-white text-slate-400 border-slate-200/90",
};

export function PlaceholderBlock({
  className,
  label,
  tone = "neutral",
}: PlaceholderBlockProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border bg-linear-to-br",
        toneMap[tone],
        className
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-size-[24px_24px]" />
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_54%)]" /> */}
      {label ? (
        <span className="mt-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium tracking-[0.08em] uppercase backdrop-blur">
          {label}
        </span>
      ) : null}
    </div>
  );
}
