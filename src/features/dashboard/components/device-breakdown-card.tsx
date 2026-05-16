import { ArrowDown, ArrowUp, type LucideIcon } from "lucide-react";
import { Card } from "../../../components/ui/card";
import { IconWrapper } from "../../../components/ui/icon-wrapper";
import type {
  PlatformCountItem,
  SummarySplitItem,
} from "../../../types/dashboard";
import { cn } from "../../../utils/cn";
import { PlaceholderBlock } from "../../../components/ui/placeholder-block";

type MiniSplitProps = {
  items: SummarySplitItem[];
};

function MiniSplit({ items }: MiniSplitProps) {
  return (
    <div className="grid grid-cols-2 gap-3 border-t border-(--line) pt-4">
      {items.map(({ label, value, icon: Icon }) => (
        <div key={label} className="">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <Icon className="h-4 w-4" />
            {label}
          </div>
          <p className="mt-3 text-[1.5rem] font-semibold tracking-[-0.04em] text-[#3d3d3d]">
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
    <div
      className={`grid overflow-hidden rounded-xl bg-white py-2 ${
        items.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"
      }`}
    >
      {items.map((item, index) => (
        <div
          key={item.label}
          className={`px-1 py-2 flex flex-col items-center ${
            index !== items.length - 1
              ? "border-b border-(--line) sm:border-b-0 sm:border-r"
              : ""
          }`}
        >
          <div className="flex items-center gap-2 text-[12px] font-medium text-slate-500">
            <item.icon className="h-3 w-3" />
            {item.label}
          </div>

          <p className="mt-1 text-[0.8rem] font-semibold text-[#3d3d3d]">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

type DeviceBreakdownCardProps = {
  title: string;
  icon: LucideIcon;
  value: string;
  trend: string;
  caption: string;
  delta: string;
  splitItems?: SummarySplitItem[];
  detailItems: PlatformCountItem[];
};

export function DeviceBreakdownCard({
  title,
  icon,
  value,
  trend,
  caption,
  delta,
  splitItems,
  detailItems,
}: DeviceBreakdownCardProps) {
  const positive = trend === "up";
  return (
    <div>
      <Card className="space-y-4 p-5 sm:p-6 mb-2">
        <div className="flex items-center gap-2">
          <IconWrapper icon={icon} className="h-10 w-10 rounded-xl" />
          <h3 className="text-lg font-medium tracking-[-0.03em] text-[#3d3d3d]">
            {title}
          </h3>
        </div>
        <div className="flex items-center xl:justify-between w-full mt-3">
          <div>
            <div className=" flex items-center gap-2">
              <span className="text-[1.8rem] xl:text-[1.3rem] font-semibold tracking-[-0.04em] text-[#3d3d3d] 2xl:text-[1.95rem]">
                {value}
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-1 text-sm font-medium",
                  positive ? "text-lime-500" : "text-rose-500"
                )}
              >
                {positive ? (
                  <ArrowUp className="h-4 w-4" />
                ) : (
                  <ArrowDown className="h-4 w-4" />
                )}
                {delta}
              </span>
            </div>
            <p className="mt-3 text-sm xl:text-[12px] text-[#3d3d3d]">
              {caption}
            </p>
          </div>
          <PlaceholderBlock
            tone={positive ? "success" : "danger"}
            className="w-[45%] h-20"
            label="Placeholder"
          />
        </div>
        {splitItems ? <MiniSplit items={splitItems} /> : null}
      </Card>

      <DetailRow items={detailItems} />
    </div>
  );
}
