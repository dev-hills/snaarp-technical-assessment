import { HardDrive, Zap } from "lucide-react";
import { Card } from "../../../components/ui/card";
import { IconWrapper } from "../../../components/ui/icon-wrapper";
import type { StorageLegendItem } from "../../../types/dashboard";

type StorageCardProps = {
  legend: StorageLegendItem[];
};

export function StorageCard({ legend }: StorageCardProps) {
  return (
    <Card className="p-4 sm:p-5 xl:p-3">
      <div className="flex items-center gap-3">
        <IconWrapper icon={HardDrive} className="h-9! w-9! rounded-2xl" />
        <h3 className="text-lg font-medium tracking-[-0.03em] text-[#3d3d3d]">
          Storage
        </h3>
      </div>

      <div className="mt-2 grid gap-5 xl:grid-cols-[200px_minmax(0,1fr)] 2xl:grid-cols-[220px_minmax(0,1fr)]">
        <div className="flex flex-col items-center gap-4">
          <div className="relative grid h-35 w-35 place-items-center rounded-full border border-dashed border-(--line-strong) bg-[radial-gradient(circle_at_center,white_0%,white_46%,#eef3ff_47%,#eef3ff_60%,white_61%)] xl:h-48 xl:w-48 2xl:h-52 2xl:w-52">
            <span className="text-center text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
              Donut
              <br />
              Placeholder
            </span>
            <div className="absolute inset-4 rounded-full border-14 border-slate-200" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="rounded-[22px] border border-amber-200 bg-amber-50/80 p-4 xl:p-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400 text-white">
                !
              </span>
              <div>
                <p className="font-semibold text-amber-600">Note</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  You&apos;ve almost reached your limit. This placeholder
                  callout mirrors the design and will later connect to real
                  storage data.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {legend.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span
                  className={`h-4 w-4 shrink-0 rounded-md ${item.colorClass}`}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-slate-700">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-2xl border border-(--brand) px-4 py-3 text-sm font-semibold text-(--brand) transition float-right"
            >
              <Zap className="h-4 w-4" />
              Upgrade Plan
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
