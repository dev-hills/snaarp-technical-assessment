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
  infoText?: string;
};

export function Section({
  title,
  icon,
  children,
  action,
  className,
  contentClassName,
  collapsibleIndicator = false,
  infoText,
}: SectionProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-5 xl:px-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <IconWrapper icon={icon} className="h-9! w-9! rounded-lg!" />
            <div className="min-w-0 flex-1">
              <h2 className="truncate text-md font-semibold tracking-[-0.03em] text-[#3d3d3d] xl:text-[1.25rem]">
                {title}
              </h2>
            </div>
          </div>
          {infoText && (
            <p className="text-sm text-slate-500 mt-1">{infoText}</p>
          )}
        </div>

        {action}
        {collapsibleIndicator ? (
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-2xl border border-(--line) text-slate-500 transition hover:border-(--line-strong) hover:text-slate-700 lg:inline-flex"
            aria-label={`Collapse ${title}`}
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        ) : null}
      </div>
      <div className={cn("p-4 sm:p-5 xl:p-6", contentClassName)}>
        {children}
      </div>
    </Card>
  );
}
