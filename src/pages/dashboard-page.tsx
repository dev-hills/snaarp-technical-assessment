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
import { SortableDashboardProvider } from "../features/dashboard/components/sortable/sortable-dashboard-context";
import { SortableWidget } from "../features/dashboard/components/sortable/sortable-widget";

const CLOUD_SECTION_ORDER = ["cloud-metrics", "cloud-storage"] as const;
const NETWORK_SECTION_ORDER = ["file-sharing", "active-users"] as const;
const DEVICE_SECTION_ORDER = [
  "device-devices",
  "device-users",
  "device-emails",
  "device-apps-downloads",
] as const;
const PRODUCTIVITY_SECTION_ORDER = [
  "productivity-hours",
  "productivity-days",
  "productivity-users",
  "productivity-web",
] as const;
const EMAIL_SECTION_ORDER = ["email-chart", "email-total"] as const;
const REPORT_SECTION_ORDER = ["app-activity", "web-activity"] as const;

type WidgetDefinition = {
  className?: string;
  render: () => React.ReactNode;
};

export function DashboardPage() {
  const cloudSectionWidgets: Record<(typeof CLOUD_SECTION_ORDER)[number], WidgetDefinition> = {
    "cloud-metrics": {
      className: "2xl:col-span-5",
      render: () => (
        <div className="grid gap-2 sm:grid-cols-2">
          {cloudMetrics.map((metric) => (
            <MetricCard key={metric.title} metric={metric} />
          ))}
        </div>
      ),
    },
    "cloud-storage": {
      className: "2xl:col-span-7",
      render: () => <StorageCard legend={storageLegend} />,
    },
  };

  const networkSectionWidgets: Record<
    (typeof NETWORK_SECTION_ORDER)[number],
    WidgetDefinition
  > = {
    "file-sharing": {
      className: "2xl:col-span-5",
      render: () => <FileSharingCard />,
    },
    "active-users": {
      className: "2xl:col-span-7",
      render: () => <ActiveUsersCard regions={activeUserRegions} />,
    },
  };

  const deviceSectionWidgets: Record<
    (typeof DEVICE_SECTION_ORDER)[number],
    WidgetDefinition
  > = {
    "device-devices": {
      render: () => (
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
      ),
    },
    "device-users": {
      render: () => (
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
      ),
    },
    "device-emails": {
      render: () => (
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
      ),
    },
    "device-apps-downloads": {
      render: () => (
        <div className="grid gap-2">
          <MetricCard metric={deviceMetrics[3]} />
          <MetricCard metric={deviceMetrics[4]} />
        </div>
      ),
    },
  };

  const productivitySectionWidgets: Record<
    (typeof PRODUCTIVITY_SECTION_ORDER)[number],
    WidgetDefinition
  > = {
    "productivity-hours": {
      render: () => <MetricCard metric={productivityMetrics[0]} />,
    },
    "productivity-days": {
      render: () => <MetricCard metric={productivityMetrics[1]} />,
    },
    "productivity-users": {
      render: () => <MetricCard metric={productivityMetrics[2]} />,
    },
    "productivity-web": {
      render: () => <MetricCard metric={productivityMetrics[3]} />,
    },
  };

  const emailSectionWidgets: Record<(typeof EMAIL_SECTION_ORDER)[number], WidgetDefinition> = {
    "email-chart": {
      className: "xl:col-span-4 2xl:col-span-3",
      render: () => <EmailChartCard />,
    },
    "email-total": {
      className: "xl:col-span-8 2xl:col-span-9",
      render: () => <TotalEmailCard />,
    },
  };

  const reportSectionWidgets: Record<(typeof REPORT_SECTION_ORDER)[number], WidgetDefinition> = {
    "app-activity": {
      className: "xl:col-span-8",
      render: () => <AppActivityCard activities={appActivities} />,
    },
    "web-activity": {
      className: "xl:col-span-4",
      render: () => <WebActivityCard items={webActivityItems} />,
    },
  };

  const renderSortableWidget = (
    id: string,
    definition: WidgetDefinition,
    dragOverlay = false,
  ) => (
    <SortableWidget
      key={id}
      id={id}
      className={definition.className}
      dragOverlay={dragOverlay}
    >
      {definition.render()}
    </SortableWidget>
  );

  const renderCloudSection = (id: (typeof CLOUD_SECTION_ORDER)[number], dragOverlay = false) => {
    return renderSortableWidget(id, cloudSectionWidgets[id], dragOverlay);
  };

  const renderNetworkSection = (
    id: (typeof NETWORK_SECTION_ORDER)[number],
    dragOverlay = false,
  ) => {
    return renderSortableWidget(id, networkSectionWidgets[id], dragOverlay);
  };

  const renderDeviceSection = (
    id: (typeof DEVICE_SECTION_ORDER)[number],
    dragOverlay = false,
  ) => {
    return renderSortableWidget(id, deviceSectionWidgets[id], dragOverlay);
  };

  const renderProductivitySection = (
    id: (typeof PRODUCTIVITY_SECTION_ORDER)[number],
    dragOverlay = false,
  ) => {
    return renderSortableWidget(id, productivitySectionWidgets[id], dragOverlay);
  };

  const renderEmailSection = (
    id: (typeof EMAIL_SECTION_ORDER)[number],
    dragOverlay = false,
  ) => {
    return renderSortableWidget(id, emailSectionWidgets[id], dragOverlay);
  };

  const renderReportSection = (
    id: (typeof REPORT_SECTION_ORDER)[number],
    dragOverlay = false,
  ) => {
    return renderSortableWidget(id, reportSectionWidgets[id], dragOverlay);
  };

  return (
    <DashboardLayout>
      <PageContainer className="space-y-4 xl:space-y-5">
        <DashboardGroupHeader
          title="Cloud Network"
          icon={Globe}
          actionLabel=""
        />

        <SortableDashboardProvider
          defaultItems={[...CLOUD_SECTION_ORDER]}
          storageKey="dashboard-widget-order:cloud"
          renderOverlay={(activeId) =>
            renderCloudSection(activeId as (typeof CLOUD_SECTION_ORDER)[number], true)
          }
        >
          {(items) => (
            <section className="grid gap-4 xl:items-start 2xl:grid-cols-12 2xl:items-stretch">
              {items.map((item) => renderCloudSection(item as (typeof CLOUD_SECTION_ORDER)[number]))}
            </section>
          )}
        </SortableDashboardProvider>

        <SortableDashboardProvider
          defaultItems={[...NETWORK_SECTION_ORDER]}
          storageKey="dashboard-widget-order:network"
          renderOverlay={(activeId) =>
            renderNetworkSection(
              activeId as (typeof NETWORK_SECTION_ORDER)[number],
              true,
            )
          }
        >
          {(items) => (
            <section className="grid gap-4 xl:items-start 2xl:grid-cols-12 2xl:items-stretch">
              {items.map((item) =>
                renderNetworkSection(item as (typeof NETWORK_SECTION_ORDER)[number]),
              )}
            </section>
          )}
        </SortableDashboardProvider>

        <DashboardGroupHeader
          title="Device Management Dashboard"
          icon={MonitorCog}
        />

        <SortableDashboardProvider
          defaultItems={[...DEVICE_SECTION_ORDER]}
          storageKey="dashboard-widget-order:device"
          renderOverlay={(activeId) =>
            renderDeviceSection(activeId as (typeof DEVICE_SECTION_ORDER)[number], true)
          }
        >
          {(items) => (
            <section className="grid gap-4 xl:grid-cols-2  2xl:grid-cols-4 xl:items-stretch">
              {items.map((item) =>
                renderDeviceSection(item as (typeof DEVICE_SECTION_ORDER)[number]),
              )}
            </section>
          )}
        </SortableDashboardProvider>

        <DashboardGroupHeader title="Productivity Report" icon={Smartphone} />

        <SortableDashboardProvider
          defaultItems={[...PRODUCTIVITY_SECTION_ORDER]}
          storageKey="dashboard-widget-order:productivity"
          renderOverlay={(activeId) =>
            renderProductivitySection(
              activeId as (typeof PRODUCTIVITY_SECTION_ORDER)[number],
              true,
            )
          }
        >
          {(items) => (
            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4">
              {items.map((item) =>
                renderProductivitySection(
                  item as (typeof PRODUCTIVITY_SECTION_ORDER)[number],
                ),
              )}
            </section>
          )}
        </SortableDashboardProvider>

        <SortableDashboardProvider
          defaultItems={[...EMAIL_SECTION_ORDER]}
          storageKey="dashboard-widget-order:email"
          renderOverlay={(activeId) =>
            renderEmailSection(activeId as (typeof EMAIL_SECTION_ORDER)[number], true)
          }
        >
          {(items) => (
            <section className="grid gap-4 xl:grid-cols-12 xl:items-start 2xl:items-stretch">
              {items.map((item) =>
                renderEmailSection(item as (typeof EMAIL_SECTION_ORDER)[number]),
              )}
            </section>
          )}
        </SortableDashboardProvider>

        <OnlineUsersCard users={onlineUsers} />

        <SortableDashboardProvider
          defaultItems={[...REPORT_SECTION_ORDER]}
          storageKey="dashboard-widget-order:reports"
          renderOverlay={(activeId) =>
            renderReportSection(activeId as (typeof REPORT_SECTION_ORDER)[number], true)
          }
        >
          {(items) => (
            <section className="grid gap-4 xl:grid-cols-12 xl:items-start 2xl:items-stretch">
              {items.map((item) =>
                renderReportSection(item as (typeof REPORT_SECTION_ORDER)[number]),
              )}
            </section>
          )}
        </SortableDashboardProvider>
      </PageContainer>
    </DashboardLayout>
  );
}
