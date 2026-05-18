import { ChevronDown, Zap } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
import { IconWrapper } from "../../../components/ui/icon-wrapper";
import { cn } from "../../../utils/cn";
import type { LucideIcon } from "lucide-react";
import { DragHandle } from "./sortable/drag-handle";

type DashboardGroupHeaderProps = {
  title: string;
  icon: LucideIcon;
  actionLabel?: string;
  className?: string;
  collapsed?: boolean;
  onToggle?: () => void;
  controlsId?: string;
};

function UpgradeButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-xl bg-(--brand) px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(79,106,246,0.22)] transition hover:brightness-105"
      {...props}
    >
      <Zap className="h-4 w-4" />
      Upgrade Plan
    </button>
  );
}

export function DashboardGroupHeader({
  title,
  icon,
  actionLabel = "Upgrade Plan",
  className,
  collapsed = false,
  onToggle,
  controlsId,
}: DashboardGroupHeaderProps) {
  const collapseLabel = `${collapsed ? "Expand" : "Collapse"} ${title}`;

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl bg-white px-4 py-2 shadow-(--shadow-soft) sm:flex-row sm:items-center sm:justify-between sm:px-5 xl:px-4",
        className
      )}
    >
      <div className="relative flex items-center gap-3 cursor-grab active:cursor-grabbing">
        <DragHandle
          className="absolute inset-0 z-10 opacity-0"
          ariaLabel={`Drag group ${title}`}
        />
        <IconWrapper
          icon={icon}
          className="h-10 w-10 rounded-2xl xl:h-11 xl:w-11 text-black"
        />
        <h2 className="text-xl font-semibold tracking-[-0.04em] text-[#3d3d3d]">
          {title}
        </h2>
      </div>

      <div className="flex items-center gap-3 self-start sm:self-auto">
        {actionLabel ? <UpgradeButton aria-label={actionLabel} /> : null}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl text-[#3d3d3d]"
          aria-label={collapseLabel}
          aria-expanded={!collapsed}
          aria-controls={controlsId}
          onClick={onToggle}
        >
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform",
              collapsed ? "-rotate-90" : "rotate-0",
            )}
          />
        </button>
      </div>
    </div>
  );
}
