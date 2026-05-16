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
          className="hidden h-12 items-center gap-3 rounded-2xl border border-(--line) bg-white px-5 text-sm font-medium text-slate-500 md:inline-flex"
        >
          Month
        </button>
      }
    >
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px] 2xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-4">
          <div className="flex items-center gap-3 rounded-2xl border border-(--line) bg-(--panel-muted) px-4 py-3">
            <MapPinned className="h-5 w-5 text-(--brand)" />
            <p className="text-sm text-slate-500">
              Map placeholder reserved for a future geo-distribution view.
            </p>
          </div>
          <PlaceholderBlock
            className="h-70 xl:h-77.5 2xl:h-82.5"
            label="Map placeholder"
            tone="neutral"
          />
        </div>

        <div className="space-y-3">
          {regions.map((region) => (
            <div
              key={region.label}
              className="rounded-lg border border-(--line) bg-white p-3.5 xl:p-3"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-13 items-center justify-center rounded-xl border border-(--line) bg-slate-50 text-sm font-semibold text-[#6d6d6d]">
                  {region.badge}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <p className="truncate text-md font-medium text-[#6d6d6d]">
                      {region.label}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-1 gap-3">
                    <div className="h-2 rounded-full bg-slate-100 flex-1 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${region.tone}`}
                        style={{ width: `${region.progress}%` }}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="text-sm font-medium text-slate-500">
                      {region.progress}%
                    </span>
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
