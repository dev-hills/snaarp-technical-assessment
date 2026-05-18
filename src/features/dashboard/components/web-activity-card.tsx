import { ChevronDown, Globe } from "lucide-react";
import { Section } from "../../../components/ui/section";
import { AppIcon } from "../../../components/ui/app-icon";
import type { WebActivityItem } from "../../../types/dashboard";
import { cn } from "../../../utils/cn";

type WebActivityCardProps = {
  items: WebActivityItem[];
};

export function WebActivityCard({ items }: WebActivityCardProps) {
  return (
    <Section
      title="Web Activity"
      icon={Globe}
      action={
        <button
          type="button"
          className="hidden items-center gap-3 rounded-2xl border border-(--line) bg-white px-5 py-3 text-sm font-medium text-slate-500 transition hover:border-(--line-strong) hover:text-slate-700 md:inline-flex"
        >
          Month
          <ChevronDown className="h-4 w-4" />
        </button>
      }
      infoText="View your comprehensive organizational web report"
    >
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <div
            key={item.label}
            className="group flex flex-col gap-3 rounded-xl border border-transparent p-2 transition-colors hover:border-(--line) hover:bg-(--panel-muted) sm:flex-row sm:items-center sm:gap-4 sm:p-3"
          >
            {/* App Icon & Name */}
            <div className="flex items-center gap-3 sm:min-w-30">
              <AppIcon
                app={item.label.toLowerCase() as never}
                size="sm"
                className="shrink-0"
              />
              <span className="font-medium text-slate-700">{item.label}</span>
            </div>

            {/* Progress Bar */}
            <div className="flex flex-1 items-center gap-3">
              <div className="h-2 flex-1 rounded-full bg-slate-100">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-500",
                    item.progress >= 70
                      ? "bg-emerald-500"
                      : item.progress >= 50
                        ? "bg-lime-500"
                        : "bg-amber-500"
                  )}
                  style={{ width: `${item.progress}%` }}
                  aria-hidden="true"
                />
              </div>
              <span className="min-w-10 text-sm font-medium text-slate-500">
                {item.progress}%
              </span>
            </div>

            {/* Duration */}
            <span className="text-sm text-slate-600 sm:min-w-32.5 sm:text-right">
              {item.duration}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
