/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TooltipProps } from "recharts";

type ChartTooltipProps = TooltipProps<number, string> & {
  labelFormatter?: (label: string) => string;
  valueFormatter?: (value: number) => string;
};

export function ChartTooltip({
  active,
  payload,
  label,
  labelFormatter,
  valueFormatter,
}: ChartTooltipProps) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div
      className="rounded-xl border border-slate-200 bg-white/95 px-4 py-3 text-sm shadow-lg backdrop-blur-sm"
      role="tooltip"
    >
      {label && (
        <p className="mb-2 font-medium text-slate-700">
          {labelFormatter ? labelFormatter(label) : label}
        </p>
      )}
      <div className="space-y-1.5">
        {payload.map((entry: any, index: any) => (
          <div key={index} className="flex items-center gap-2">
            {entry.color && (
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: entry.color }}
                aria-hidden="true"
              />
            )}
            <span className="text-slate-500">{entry.name}:</span>
            <span className="font-semibold text-slate-700">
              {valueFormatter && entry.value != null
                ? valueFormatter(entry.value)
                : entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}