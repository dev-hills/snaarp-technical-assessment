import { Building2, Globe, MonitorCog, Smartphone } from "lucide-react";
import { PageContainer } from "../components/ui/page-container";
import { DashboardLayout } from "../layouts/dashboard-layout";
import {
  activeUserRegions,
  cloudMetrics,
  deviceMetrics,
  deviceStatus,
  emailCounts,
  emailStatus,
  orgCounts,
  platformCounts,
  productivityMetrics,
  storageLegend,
  userStatus,
  webActivityItems,
} from "../data/dashboard";
import { MetricCard } from "../features/dashboard/components/metric-card";
import { StorageCard } from "../features/dashboard/components/storage-card";
import { FileSharingCard } from "../features/dashboard/components/file-sharing-card";
import { ActiveUsersCard } from "../features/dashboard/components/active-users-card";
import { DashboardGroupHeader } from "../features/dashboard/components/dashboard-group-header";
import { DeviceBreakdownCard } from "../features/dashboard/components/device-breakdown-card";
import {
  EmailChartCard,
  TotalEmailCard,
} from "../features/dashboard/components/email-chart-card";
import { OnlineUsersCard } from "../features/dashboard/components/online-users-card";
import { WebActivityCard } from "../features/dashboard/components/web-activity-card";

export function DashboardPage() {
  return (
    <DashboardLayout>
      <PageContainer className="space-y-4 xl:space-y-5">
        <DashboardGroupHeader
          title="Cloud Network"
          icon={Globe}
          actionLabel=""
        />

        <section className="grid gap-4 xl:items-start 2xl:items-stretch 2xl:grid-cols-[minmax(0,0.8fr)_minmax(380px,0.92fr)]">
          <div className="grid gap-2 sm:grid-cols-2">
            {cloudMetrics.map((metric) => (
              <MetricCard key={metric.title} metric={metric} />
            ))}
          </div>

          <StorageCard legend={storageLegend} />
        </section>

        <section className="grid gap-4  xl:items-start 2xl:items-stretch 2xl:grid-cols-[minmax(0,0.8fr)_minmax(380px,0.92fr)]">
          <FileSharingCard />
          <ActiveUsersCard regions={activeUserRegions} />
        </section>

        <DashboardGroupHeader
          title="Device Management Dashboard"
          icon={MonitorCog}
        />

        <section className="grid gap-4 xl:grid-cols-2  2xl:grid-cols-4 xl:items-stretch">
          <DeviceBreakdownCard
            title={deviceMetrics[0].title}
            icon={deviceMetrics[0].icon}
            value={deviceMetrics[0].value}
            trend={deviceMetrics[0].trend}
            caption={deviceMetrics[0].caption}
            delta={deviceMetrics[0].delta}
            splitItems={deviceStatus}
            detailItems={platformCounts}
          />

          <DeviceBreakdownCard
            title={deviceMetrics[1].title}
            icon={deviceMetrics[1].icon}
            value={deviceMetrics[1].value}
            trend={deviceMetrics[1].trend}
            caption={deviceMetrics[1].caption}
            delta={deviceMetrics[1].delta}
            splitItems={userStatus}
            detailItems={orgCounts}
          />

          <DeviceBreakdownCard
            title={deviceMetrics[2].title}
            icon={deviceMetrics[2].icon}
            value={deviceMetrics[2].value}
            trend={deviceMetrics[2].trend}
            caption={deviceMetrics[2].caption}
            delta={deviceMetrics[2].delta}
            splitItems={emailStatus}
            detailItems={emailCounts}
          />

          <div className="grid gap-2">
            <MetricCard metric={deviceMetrics[3]} />
            <MetricCard metric={deviceMetrics[4]} />
          </div>
        </section>

        <DashboardGroupHeader title="Productivity Report" icon={Smartphone} />

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4">
          {productivityMetrics.map((metric) => (
            <MetricCard key={metric.title} metric={metric} />
          ))}
        </section>

        <section className="grid gap-4 xl:grid-cols-[320px_minmax(0,1fr)] 2xl:grid-cols-[340px_minmax(0,1fr)] xl:items-start 2xl:items-stretch">
          <EmailChartCard />
          <TotalEmailCard />
        </section>

        <OnlineUsersCard />

        <section className="grid gap-4 2xl:grid-cols-[minmax(0,1fr)_390px] xl:items-start 2xl:items-stretch">
          <div className="rounded-[28px] border border-(--line) bg-(--panel) p-4 shadow-(--shadow-soft) sm:p-5 xl:p-6">
            <div className="flex flex-col gap-4 border-b border-(--line) pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-(--line) bg-(--panel-muted) text-slate-700 xl:h-11 xl:w-11">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="truncate text-md font-semibold tracking-[-0.03em] text-[#3d3d3d] xl:text-[1.25rem]">
                    App Activity Report
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    View your comprehensive organizational app report
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-2xl border border-(--line) bg-white px-4 py-3 text-sm font-medium text-slate-500"
                >
                  All Organization
                </button>
                <button
                  type="button"
                  className="rounded-2xl border border-(--line) bg-white px-4 py-3 text-sm font-medium text-slate-500"
                >
                  Month
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="grid gap-3 rounded-[20px] border border-(--line) bg-(--panel-muted) p-3.5 md:grid-cols-[1.3fr_0.6fr_1fr_1fr]"
                >
                  {[
                    "Application",
                    "Total Users",
                    "Total Number of Hours",
                    "Date",
                  ].map((label) => (
                    <div key={label} className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                        {label}
                      </p>
                      <div className="h-4 rounded-full bg-slate-200" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <WebActivityCard items={webActivityItems} />
        </section>
      </PageContainer>
    </DashboardLayout>
  );
}
