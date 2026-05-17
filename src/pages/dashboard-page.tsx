import { Globe, MonitorCog, Smartphone } from "lucide-react";
import { PageContainer } from "../components/ui/page-container";
import { DashboardLayout } from "../layouts/dashboard-layout";
import {
  activeUserRegions,
  appActivities,
  cloudMetrics,
  deviceMetrics,
  deviceStatus,
  emailCounts,
  emailStatus,
  onlineUsers,
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
import { AppActivityCard } from "../features/dashboard/components/app-activity-card";

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

        <OnlineUsersCard users={onlineUsers} />

        <section className="grid gap-4 2xl:grid-cols-[minmax(0,1fr)_390px] xl:items-start 2xl:items-stretch">
          <AppActivityCard activities={appActivities} />

          <WebActivityCard items={webActivityItems} />
        </section>
      </PageContainer>
    </DashboardLayout>
  );
}
