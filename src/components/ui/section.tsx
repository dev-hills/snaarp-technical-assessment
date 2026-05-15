import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "./card";
import { IconWrapper } from "./icon-wrapper";
import type { LucideIcon } from "lucide-react";
import { cn } from "../../utils/cn";

type SectionProps = {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
  contentClassName?: string;
  collapsibleIndicator?: boolean;
};

export function Section({
  title,
  icon,
  children,
  action,
  className,
  contentClassName,
  collapsibleIndicator = false,
}: SectionProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="flex items-center gap-3 border-b border-[var(--line)] px-4 py-4 sm:px-5 xl:px-6">
        <IconWrapper icon={icon} className="h-10 w-10 rounded-2xl xl:h-11 xl:w-11" />
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-lg font-semibold tracking-[-0.03em] text-slate-800 xl:text-[1.55rem]">
            {title}
          </h2>
        </div>
        {action}
        {collapsibleIndicator ? (
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-2xl border border-[var(--line)] text-slate-500 transition hover:border-[var(--line-strong)] hover:text-slate-700 lg:inline-flex"
            aria-label={`Collapse ${title}`}
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        ) : null}
      </div>
      <div className={cn("p-4 sm:p-5 xl:p-6", contentClassName)}>{children}</div>
    </Card>
  );
}
