/* eslint-disable @typescript-eslint/no-explicit-any */
import { BarChart3, LineChart, Mail } from "lucide-react";
import {
  Area,
  AreaChart,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Section } from "../../../components/ui/section";
import { ChartTooltip } from "../../../components/charts/chart-tooltip";
import {
  emailAreaChartData,
  emailAreaColors,
  emailDonutData,
} from "../../../data/dashboard-charts";

export function EmailChartCard() {
  const totalEmails = emailDonutData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Section title="Email Chart" icon={Mail}>
      <div className="flex min-h-85 flex-col items-center justify-center gap-5 rounded-3xl border border-(--line) bg-(--panel-muted) p-6 xl:min-h-90">
        <div className="h-44 w-44 xl:h-48 xl:w-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={emailDonutData}
                cx="50%"
                cy="50%"
                innerRadius="65%"
                outerRadius="100%"
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {emailDonutData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                content={(props) => (
                  <ChartTooltip
                    {...props}
                    formatValue={(value: any) =>
                      `${value} (${Math.round((value / totalEmails) * 100)}%)`
                    }
                  />
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-slate-600">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-md bg-amber-400" />
            Sent
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-md bg-indigo-400" />
            Received
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-md bg-slate-200" />
            Unsent
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm font-bold uppercase text-[#3d3d3d]">
            Total emails sent <br />
            {totalEmails.toLocaleString()}
          </p>
        </div>
      </div>
    </Section>
  );
}

export function TotalEmailCard() {
  return (
    <Section
      title="Total Email"
      icon={Mail}
      action={
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-(--line) bg-white text-slate-400"
          >
            <BarChart3 className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-(--brand-soft) text-(--brand)"
          >
            <LineChart className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex h-12 items-center gap-3 rounded-2xl border border-(--line) bg-white px-5 text-sm font-medium text-slate-500"
          >
            Month
          </button>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="h-80 w-full xl:h-87.5 2xl:h-92.5">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={emailAreaChartData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorSent" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={emailAreaColors.sent}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor={emailAreaColors.sent}
                    stopOpacity={0.05}
                  />
                </linearGradient>
                <linearGradient id="colorReceived" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={emailAreaColors.received}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor={emailAreaColors.received}
                    stopOpacity={0.05}
                  />
                </linearGradient>
                <linearGradient id="colorUnsent" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={emailAreaColors.unsent}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor={emailAreaColors.unsent}
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
                dataKey="sent"
                stroke={emailAreaColors.sent}
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorSent)"
                name="Sent"
              />
              <Area
                type="monotone"
                dataKey="received"
                stroke={emailAreaColors.received}
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorReceived)"
                name="Received"
              />
              <Area
                type="monotone"
                dataKey="unsent"
                stroke={emailAreaColors.unsent}
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorUnsent)"
                name="Unsent"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        {/* <div className="grid gap-3 sm:grid-cols-4">
          {[
            ["Sent", "583"],
            ["Received", "932"],
            ["Unsent", "32"],
            ["Total", "1,747"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-(--line) bg-(--panel-muted) px-4 py-3"
            >
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-2 text-xl font-semibold text-slate-800">
                {value}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </Section>
  );
}
