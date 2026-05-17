/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TooltipContentProps } from "recharts/types/component/Tooltip";
import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";

type CustomTooltipProps = {
  formatLabel?: (label: string | number) => string;
  formatValue?: (value: number | string) => string;
};

type ChartTooltipProps<
  TValue extends ValueType,
  TName extends NameType
> = TooltipContentProps<TValue, TName> & CustomTooltipProps;

export function ChartTooltip<TValue extends ValueType, TName extends NameType>({
  active,
  payload,
  label,
  formatLabel,
  formatValue,
}: ChartTooltipProps<TValue, TName>) {
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
          {formatLabel ? formatLabel(label) : label}
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
              {formatValue && entry.value != null
                ? formatValue(entry.value)
                : entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}