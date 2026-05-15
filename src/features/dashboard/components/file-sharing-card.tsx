import { BarChart3, FileStack, LineChart } from "lucide-react";
import { Section } from "../../../components/ui/section";
import { PlaceholderBlock } from "../../../components/ui/placeholder-block";

function ToggleButton({ icon: Icon, active = false }: { icon: typeof BarChart3; active?: boolean }) {
  return (
    <button
      type="button"
      className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${
        active
          ? "border-blue-100 bg-[var(--brand-soft)] text-[var(--brand)]"
          : "border-[var(--line)] bg-white text-slate-400"
      }`}
      aria-pressed={active}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}

export function FileSharingCard() {
  return (
    <Section
      title="File Sharing"
      icon={FileStack}
      action={
        <div className="hidden items-center gap-3 md:flex">
          <ToggleButton icon={BarChart3} active />
          <ToggleButton icon={LineChart} />
          <button
            type="button"
            className="inline-flex h-12 items-center gap-3 rounded-2xl border border-[var(--line)] bg-white px-5 text-sm font-medium text-slate-500"
          >
            Month
          </button>
        </div>
      }
    >
      <p className="text-sm text-slate-500">
        Keep track of files and how they&apos;re shared
      </p>

      <div className="mt-6 space-y-4">
        <PlaceholderBlock className="h-[280px] xl:h-[310px] 2xl:h-[330px]" label="Bar chart placeholder" tone="brand" />
        <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-600">
          <div className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 rounded bg-indigo-700" />
            Public
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 rounded bg-indigo-500" />
            Anyone with link
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 rounded bg-indigo-300" />
            Within Organisation
          </div>
        </div>
      </div>
    </Section>
  );
}
