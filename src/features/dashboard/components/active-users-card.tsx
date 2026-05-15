import { MapPinned, UserRound } from "lucide-react";
import { Section } from "../../../components/ui/section";
import { PlaceholderBlock } from "../../../components/ui/placeholder-block";
import type { RegionUsageItem } from "../../../types/dashboard";

type ActiveUsersCardProps = {
  regions: RegionUsageItem[];
};

export function ActiveUsersCard({ regions }: ActiveUsersCardProps) {
  return (
    <Section
      title="Active Users"
      icon={UserRound}
      action={
        <button
          type="button"
          className="hidden h-12 items-center gap-3 rounded-2xl border border-[var(--line)] bg-white px-5 text-sm font-medium text-slate-500 md:inline-flex"
        >
          Month
        </button>
      }
    >
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px] 2xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-4">
          <div className="flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--panel-muted)] px-4 py-3">
            <MapPinned className="h-5 w-5 text-[var(--brand)]" />
            <p className="text-sm text-slate-500">
              Map placeholder reserved for a future geo-distribution view.
            </p>
          </div>
          <PlaceholderBlock className="h-[280px] xl:h-[310px] 2xl:h-[330px]" label="Map placeholder" tone="neutral" />
        </div>

        <div className="space-y-3">
          {regions.map((region) => (
            <div
              key={region.label}
              className="rounded-[22px] border border-[var(--line)] bg-white p-3.5 xl:p-4"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--line)] bg-slate-50 text-sm font-semibold text-slate-600">
                  {region.badge}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <p className="truncate text-lg font-medium text-slate-700">{region.label}</p>
                    <span className="text-sm font-medium text-slate-500">{region.progress}%</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full ${region.tone}`}
                      style={{ width: `${region.progress}%` }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
