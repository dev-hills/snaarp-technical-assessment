import { ChevronDown, UserRound } from "lucide-react";
import { Section } from "../../../components/ui/section";

const columns = [
  "Name",
  "Location",
  "Organization",
  "Device",
  "Current Activity",
  "Time Usage",
];

export function OnlineUsersCard() {
  return (
    <Section
      title="Online Users"
      icon={UserRound}
      action={
        <button
          type="button"
          className="hidden items-center gap-3 rounded-2xl border border-(--line) bg-white px-5 py-3 text-sm font-medium text-slate-500 md:inline-flex"
        >
          All Organization
          <ChevronDown className="h-4 w-4" />
        </button>
      }
      infoText="View your comprehensive online users"
    >
      <div className="mt-6 overflow-hidden rounded-lg border border-(--line) bg-white">
        <div className="hidden grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr_1fr] gap-4 bg-[#e7e7e7] px-5 py-3.5 text-sm font-semibold text-[#3d3d3d] lg:grid">
          {columns.map((column) => (
            <div key={column}>{column}</div>
          ))}
        </div>

        <div className="space-y-2.5 p-4 sm:p-5">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="grid gap-3 rounded-[20px] border border-(--line) bg-(--panel-muted) p-3.5 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr_1fr] lg:items-center"
            >
              {columns.map((column, columnIndex) => (
                <div key={`${column}-${columnIndex}`} className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 lg:hidden">
                    {column}
                  </p>
                  <div className="h-4 w-full rounded-full bg-slate-200" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
