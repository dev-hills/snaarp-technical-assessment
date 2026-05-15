import type { LucideIcon } from "lucide-react";
import { Card } from "../../../components/ui/card";
import { IconWrapper } from "../../../components/ui/icon-wrapper";
import type { PlatformCountItem, SummarySplitItem } from "../../../types/dashboard";

type MiniSplitProps = {
  items: SummarySplitItem[];
};

function MiniSplit({ items }: MiniSplitProps) {
  return (
    <div className="grid grid-cols-2 gap-3 border-t border-[var(--line)] pt-4">
      {items.map(({ label, value, icon: Icon }) => (
        <div key={label} className="rounded-[22px] bg-[var(--panel-muted)] p-4">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <Icon className="h-4 w-4" />
            {label}
          </div>
          <p className="mt-4 text-[1.8rem] font-semibold tracking-[-0.04em] text-slate-800">
            {value}
          </p>
        </div>
      ))}
    </div>
  );
}

type DetailRowProps = {
  items: PlatformCountItem[];
};

function DetailRow({ items }: DetailRowProps) {
  return (
    <div className="grid overflow-hidden rounded-[24px] border border-[var(--line)] bg-white sm:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={item.label}
          className={`p-4 ${index !== items.length - 1 ? "border-b border-[var(--line)] sm:border-b-0 sm:border-r" : ""}`}
        >
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <item.icon className="h-4 w-4" />
            {item.label}
          </div>
          <p className="mt-4 text-[1.15rem] font-semibold text-slate-800">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

type DeviceBreakdownCardProps = {
  title: string;
  icon: LucideIcon;
  value: string;
  splitItems?: SummarySplitItem[];
  detailItems: PlatformCountItem[];
};

export function DeviceBreakdownCard({
  title,
  icon,
  value,
  splitItems,
  detailItems,
}: DeviceBreakdownCardProps) {
  return (
    <Card className="space-y-4 p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <IconWrapper icon={icon} className="h-10 w-10 rounded-2xl" />
        <h3 className="text-lg font-medium tracking-[-0.03em] text-slate-800">{title}</h3>
      </div>
      <p className="text-[2rem] font-semibold tracking-[-0.04em] text-slate-800">{value}</p>
      {splitItems ? <MiniSplit items={splitItems} /> : null}
      <DetailRow items={detailItems} />
    </Card>
  );
}
