import { Building2, ChevronDown } from "lucide-react";
import { Section } from "../../../components/ui/section";
import { AppIcon } from "../../../components/ui/app-icon";
import type { AppActivity } from "../../../types/dashboard";
import { cn } from "../../../utils/cn";

type AppActivityCardProps = {
  activities: AppActivity[];
};

const columns = [
  { key: "application", label: "Application" },
  { key: "totalUsers", label: "Total Users" },
  { key: "totalHours", label: "Total Number of Hours" },
  { key: "date", label: "Date" },
] as const;

export function AppActivityCard({ activities }: AppActivityCardProps) {
  return (
    <Section
      title="App Activity Report"
      icon={Building2}
      action={
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="inline-flex items-center gap-3 rounded-2xl border border-(--line) bg-white px-4 py-3 text-sm font-medium text-slate-500 transition hover:border-(--line-strong) hover:text-slate-700"
          >
            All Organization
            <ChevronDown className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-3 rounded-2xl border border-(--line) bg-white px-4 py-3 text-sm font-medium text-slate-500 transition hover:border-(--line-strong) hover:text-slate-700"
          >
            Month
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      }
      infoText="View your comprehensive organizational app report"
    >
      <div className="mt-6 overflow-hidden rounded-xl border border-(--line) bg-white">
        {/* Desktop Header */}
        <div className="hidden grid-cols-[1.5fr_0.8fr_1.2fr_1fr] gap-4 bg-[#e7e7e7] px-5 py-3.5 text-sm font-semibold text-[#3d3d3d] lg:grid">
          {columns.map((column) => (
            <div key={column.key} className="flex items-center gap-1">
              {column.label}
            </div>
          ))}
        </div>

        {/* Table Body */}
        <div className="divide-y divide-(--line)">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={cn(
                "group grid gap-3 p-4 transition-colors hover:bg-(--panel-muted) sm:p-5 lg:grid-cols-[1.5fr_0.8fr_1.2fr_1fr] lg:items-center lg:gap-4 lg:p-0",
                index % 2 === 0 ? "bg-white" : "bg-(--panel-muted)/50"
              )}
            >
              {/* Application Column */}
              <div className="flex items-center gap-3 lg:px-5 lg:py-3.5">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 lg:hidden">
                  Application
                </span>
                <div className="flex flex-1 items-center gap-3 lg:flex-none">
                  <AppIcon app={activity.appIcon as never} size="md" />
                  <span className="font-medium text-slate-700">
                    {activity.appName}
                  </span>
                </div>
              </div>

              {/* Total Users Column */}
              <div className="flex items-center gap-3 lg:px-0 lg:py-3.5">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 lg:hidden">
                  Total Users
                </span>
                <span className="flex-1 text-sm font-medium text-slate-600 lg:flex-none">
                  {activity.totalUsers}
                </span>
              </div>

              {/* Total Hours Column */}
              <div className="flex items-center gap-3 lg:px-0 lg:py-3.5">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 lg:hidden">
                  Total Number of Hours
                </span>
                <span className="flex-1 text-sm text-slate-600 lg:flex-none">
                  {activity.totalHours}
                </span>
              </div>

              {/* Date Column */}
              <div className="flex items-center gap-3 lg:px-5 lg:py-3.5">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 lg:hidden">
                  Date
                </span>
                <span className="flex-1 text-sm text-slate-500 lg:flex-none">
                  {activity.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}