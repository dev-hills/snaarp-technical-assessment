import { ArrowDown, ArrowUp } from "lucide-react";
import type { MetricCardData } from "../../../types/dashboard";
import { Card } from "../../../components/ui/card";
import { IconWrapper } from "../../../components/ui/icon-wrapper";
import { PlaceholderBlock } from "../../../components/ui/placeholder-block";
import { cn } from "../../../utils/cn";

type MetricCardProps = {
  metric: MetricCardData;
};

export function MetricCard({ metric }: MetricCardProps) {
  const positive = metric.trend === "up";

  return (
    <Card className="overflow-hidden p-4 sm:p-5 xl:p-3">
      <div>
        <div className="flex items-center gap-2">
          <IconWrapper
            icon={metric.icon}
            className="w-6! h-6! p-1! rounded-sm!"
          />
          <h3 className="text-md font-medium tracking-[-0.03em] text-[#3d3d3d]">
            {metric.title}
          </h3>
        </div>

        <div className="flex items-center xl:justify-between w-full mt-3">
          <div>
            <div className=" flex items-center gap-2">
              <span className="text-[1.8rem] xl:text-[1.3rem] font-semibold tracking-[-0.04em] text-[#3d3d3d] 2xl:text-[1.95rem]">
                {metric.value}
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
                {metric.delta}
              </span>
            </div>

            <p className="mt-3 text-sm xl:text-[10px] text-[#3d3d3d]">
              {metric.caption}
            </p>
          </div>

          <PlaceholderBlock
            tone={positive ? "success" : "danger"}
            className="w-[45%] h-20"
            label="Placeholder"
          />
        </div>
      </div>
    </Card>
  );
}
