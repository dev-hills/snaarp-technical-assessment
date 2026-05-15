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

        <section className="grid gap-4 xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] xl:items-start 2xl:items-stretch 2xl:grid-cols-[minmax(0,0.8fr)_minmax(380px,0.92fr)]">
          <div className="grid gap-2 sm:grid-cols-2">
            {cloudMetrics.map((metric) => (
              <MetricCard key={metric.title} metric={metric} />
            ))}
          </div>

          <StorageCard legend={storageLegend} />
        </section>

        <section className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] xl:items-start">
          <FileSharingCard />
          <ActiveUsersCard regions={activeUserRegions} />
        </section>

        <DashboardGroupHeader
          title="Device Management Dashboard"
          icon={MonitorCog}
        />

        <section className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] xl:items-start">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
            {deviceMetrics
              .slice(0, 4)
              .map((metric, index) =>
                index === 0 ? (
                  <DeviceBreakdownCard
                    key={metric.title}
                    title={metric.title}
                    icon={metric.icon}
                    value={metric.value}
                    splitItems={deviceStatus}
                    detailItems={platformCounts}
                  />
                ) : index === 1 ? (
                  <DeviceBreakdownCard
                    key={metric.title}
                    title={metric.title}
                    icon={metric.icon}
                    value={metric.value}
                    splitItems={userStatus}
                    detailItems={orgCounts}
                  />
                ) : index === 2 ? (
                  <DeviceBreakdownCard
                    key={metric.title}
                    title={metric.title}
                    icon={metric.icon}
                    value={metric.value}
                    splitItems={emailStatus}
                    detailItems={emailCounts}
                  />
                ) : (
                  <MetricCard key={metric.title} metric={metric} />
                )
              )}
          </div>
          <MetricCard metric={deviceMetrics[4]} />
        </section>

        <DashboardGroupHeader title="Productivity Report" icon={Smartphone} />

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {productivityMetrics.map((metric) => (
            <MetricCard key={metric.title} metric={metric} />
          ))}
        </section>

        <section className="grid gap-4 xl:grid-cols-[320px_minmax(0,1fr)] 2xl:grid-cols-[340px_minmax(0,1fr)] xl:items-start">
          <EmailChartCard />
          <TotalEmailCard />
        </section>

        <OnlineUsersCard />

        <section className="grid gap-4 xl:grid-cols-[minmax(0,1.08fr)_360px] 2xl:grid-cols-[minmax(0,1.06fr)_390px] xl:items-start">
          <div className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-4 shadow-[var(--shadow-soft)] sm:p-5 xl:p-6">
            <div className="flex flex-col gap-4 border-b border-[var(--line)] pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--panel-muted)] text-slate-700 xl:h-11 xl:w-11">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold tracking-[-0.04em] text-slate-800 xl:text-[1.8rem]">
                    App Activity Report
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    View your comprehensive organizational app report
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-sm font-medium text-slate-500"
                >
                  All Organization
                </button>
                <button
                  type="button"
                  className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-sm font-medium text-slate-500"
                >
                  Month
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="grid gap-3 rounded-[20px] border border-[var(--line)] bg-[var(--panel-muted)] p-3.5 md:grid-cols-[1.3fr_0.6fr_1fr_1fr]"
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
