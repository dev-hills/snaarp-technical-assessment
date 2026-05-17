import { cn } from "../../utils/cn";

type Status = "active" | "idle" | "offline";

type StatusBadgeProps = {
  status: Status;
  showLabel?: boolean;
  className?: string;
};

const statusConfig: Record<
  Status,
  { color: string; label: string; dotColor: string }
> = {
  active: {
    color: "text-emerald-600",
    label: "Active",
    dotColor: "bg-emerald-500",
  },
  idle: {
    color: "text-amber-600",
    label: "Idle",
    dotColor: "bg-amber-500",
  },
  offline: {
    color: "text-slate-500",
    label: "Offline",
    dotColor: "bg-slate-400",
  },
};

export function StatusBadge({
  status,
  showLabel = false,
  className,
}: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium",
        config.color,
        className
      )}
    >
      <span
        className={cn("h-2 w-2 rounded-full", config.dotColor)}
        aria-hidden="true"
      />
      {showLabel && config.label}
    </span>
  );
}