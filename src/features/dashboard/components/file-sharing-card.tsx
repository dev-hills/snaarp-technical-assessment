import { BarChart3, FileStack, LineChart } from "lucide-react";
import { Section } from "../../../components/ui/section";
import { PlaceholderBlock } from "../../../components/ui/placeholder-block";

function ToggleButton({
  icon: Icon,
  active = false,
}: {
  icon: typeof BarChart3;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`inline-flex h-12 w-12 items-center justify-center rounded-lg border ${
        active
          ? "border-blue-100 bg-(--brand-soft) text-(--brand)"
          : "border-(--line) bg-white text-slate-400"
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
      infoText="Keep track of files and how they're shared"
      action={
        <div className="hidden items-center gap-3 md:flex">
          <ToggleButton icon={BarChart3} active />
          <ToggleButton icon={LineChart} />
          <button
            type="button"
            className="inline-flex h-12 items-center gap-3 rounded-2xl border border-(--line) bg-white px-5 text-sm font-medium text-slate-500"
          >
            Month
          </button>
        </div>
      }
    >
      <div className="mt-1 space-y-8">
        <PlaceholderBlock
          className="h-70 xl:h-77.5 2xl:h-82.5"
          label="Bar chart placeholder"
          tone="brand"
        />
        <div className="flex flex-wrap items-center justify-center  gap-6 text-sm font-medium text-slate-600">
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
