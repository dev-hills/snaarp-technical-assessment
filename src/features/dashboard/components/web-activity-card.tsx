import { ChevronDown, Globe } from "lucide-react";
import { Section } from "../../../components/ui/section";
import type { WebActivityItem } from "../../../types/dashboard";

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
          className="hidden items-center gap-3 rounded-2xl border border-(--line) bg-white px-5 py-3 text-sm font-medium text-slate-500 md:inline-flex"
        >
          Month
          <ChevronDown className="h-4 w-4" />
        </button>
      }
      infoText="View your comprehensive organizational web report"
    >
     

      <div className="mt-3 space-y-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="space-y-3 border-b border-(--line) pb-4 last:border-b-0 last:pb-0"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="xl:min-w-30 2xl:min-w-0 text-lg font-medium text-slate-700">
                {item.label}
              </div>
              <div className="flex-1">
                <div className="h-2.5 rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-lime-500"
                    style={{ width: `${item.progress}%` }}
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 text-sm sm:min-w-45 sm:justify-end">
                <span className="font-medium text-slate-500">
                  {item.progress}%
                </span>
                <span className="text-slate-600">{item.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
