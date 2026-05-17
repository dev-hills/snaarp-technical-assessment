import { BarChart3, FileStack, LineChart } from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Section } from "../../../components/ui/section";
import { ChartTooltip } from "../../../components/charts/chart-tooltip";
import {
  fileSharingChartData,
  fileSharingColors,
} from "../../../data/dashboard-charts";

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
        <div className="h-70 w-full xl:h-77.5 2xl:h-82.5">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={fileSharingChartData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorPublic" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={fileSharingColors.public}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor={fileSharingColors.public}
                    stopOpacity={0.05}
                  />
                </linearGradient>
                <linearGradient
                  id="colorAnyoneWithLink"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor={fileSharingColors.anyoneWithLink}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor={fileSharingColors.anyoneWithLink}
                    stopOpacity={0.05}
                  />
                </linearGradient>
                <linearGradient id="colorWithinOrg" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={fileSharingColors.withinOrg}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor={fileSharingColors.withinOrg}
                    stopOpacity={0.05}
                  />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 11 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 11 }}
                dx={-10}
              />
              <Tooltip content={(props) => <ChartTooltip {...props} />} />
              <Area
                type="monotone"
                dataKey="public"
                stroke={fileSharingColors.public}
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorPublic)"
                name="Public"
              />
              <Area
                type="monotone"
                dataKey="anyoneWithLink"
                stroke={fileSharingColors.anyoneWithLink}
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorAnyoneWithLink)"
                name="Anyone with link"
              />
              <Area
                type="monotone"
                dataKey="withinOrg"
                stroke={fileSharingColors.withinOrg}
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorWithinOrg)"
                name="Within Organisation"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
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
