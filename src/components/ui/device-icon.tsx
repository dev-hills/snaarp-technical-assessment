import { Monitor, Apple, Terminal, type LucideIcon } from "lucide-react";
import { cn } from "../../utils/cn";

type DeviceType = "windows" | "mac" | "linux";

type DeviceIconProps = {
  device: DeviceType;
  showLabel?: boolean;
  className?: string;
  iconClassName?: string;
};

const deviceConfig: Record<
  DeviceType,
  { icon: LucideIcon; label: string; color: string }
> = {
  windows: {
    icon: Monitor,
    label: "Windows",
    color: "text-blue-500",
  },
  mac: {
    icon: Apple,
    label: "Mac",
    color: "text-slate-700",
  },
  linux: {
    icon: Terminal,
    label: "Linux",
    color: "text-orange-500",
  },
};

export function DeviceIcon({
  device,
  showLabel = false,
  className,
  iconClassName,
}: DeviceIconProps) {
  const config = deviceConfig[device];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-sm text-slate-600",
        className
      )}
    >
      <Icon
        className={cn("h-4 w-4", config.color, iconClassName)}
        aria-hidden="true"
      />
      {showLabel && <span>{config.label}</span>}
    </span>
  );
}