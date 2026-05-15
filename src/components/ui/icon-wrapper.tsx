import type { LucideIcon } from "lucide-react";
import { cn } from "../../utils/cn";

type IconWrapperProps = {
  icon: LucideIcon;
  className?: string;
  iconClassName?: string;
};

export function IconWrapper({
  icon: Icon,
  className,
  iconClassName,
}: IconWrapperProps) {
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F6F6F6] text-slate-700",
        className
      )}
    >
      <Icon
        className={cn("h-5 w-5 text-[#3d3d3d]", iconClassName)}
        aria-hidden="true"
      />
    </span>
  );
}
