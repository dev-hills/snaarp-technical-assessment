import { ChevronDown, UserRound } from "lucide-react";
import { Section } from "../../../components/ui/section";
import { StatusBadge } from "../../../components/ui/status-badge";
import { DeviceIcon } from "../../../components/ui/device-icon";
import { AppIcon } from "../../../components/ui/app-icon";
import { CountryFlag } from "../../../components/ui/country-flag";
import type { OnlineUser } from "../../../types/dashboard";
import { cn } from "../../../utils/cn";

type OnlineUsersCardProps = {
  users: OnlineUser[];
};

const columns = [
  { key: "name", label: "Name" },
  { key: "location", label: "Location" },
  { key: "organization", label: "Organization" },
  { key: "device", label: "Device" },
  { key: "currentActivity", label: "Current Activity" },
  { key: "timeUsage", label: "Time Usage" },
] as const;

export function OnlineUsersCard({ users }: OnlineUsersCardProps) {
  return (
    <Section
      title="Online Users"
      icon={UserRound}
      action={
        <button
          type="button"
          className="hidden items-center gap-3 rounded-2xl border border-(--line) bg-white px-5 py-3 text-sm font-medium text-slate-500 transition hover:border-(--line-strong) hover:text-slate-700 md:inline-flex"
        >
          All Organization
          <ChevronDown className="h-4 w-4" />
        </button>
      }
      infoText="View your comprehensive online users"
    >
      <div className="mt-6 overflow-hidden rounded-xl border border-(--line) bg-white">
        {/* Desktop Header */}
        <div className="hidden grid-cols-[1.3fr_1fr_1fr_0.8fr_1.2fr_1fr] gap-4 bg-[#e7e7e7] px-5 py-3.5 text-sm font-semibold text-[#3d3d3d] lg:grid">
          {columns.map((column) => (
            <div key={column.key} className="flex items-center gap-1">
              {column.label}
            </div>
          ))}
        </div>

        {/* Table Body */}
        <div className="divide-y divide-(--line)">
          {users.map((user, index) => (
            <div
              key={user.id}
              className={cn(
                "group grid gap-3 p-4 transition-colors hover:bg-(--panel-muted) sm:p-5 lg:grid-cols-[1.3fr_1fr_1fr_0.8fr_1.2fr_1fr] lg:items-center lg:gap-4 lg:p-0",
                index % 2 === 0 ? "bg-white" : "bg-(--panel-muted)/50"
              )}
            >
              {/* Name Column */}
              <div className="flex items-center gap-3 lg:px-5 lg:py-3.5">
                <div className="lg:hidden">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Name
                  </span>
                </div>
                <div className="flex flex-1 items-center gap-3 lg:flex-none">
                  <StatusBadge status={user.status} className="lg:hidden" />
                  <img
                    src={user.avatar}
                    alt={`${user.name}'s avatar`}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
                    loading="lazy"
                  />
                  <span className="font-medium text-slate-700">{user.name}</span>
                </div>
              </div>

              {/* Location Column */}
              <div className="flex items-center gap-3 lg:px-0 lg:py-3.5">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 lg:hidden">
                  Location
                </span>
                <div className="flex flex-1 items-center gap-2 lg:flex-none">
                  <CountryFlag code={user.countryCode as never} />
                  <span className="text-sm text-slate-600">{user.location}</span>
                </div>
              </div>

              {/* Organization Column */}
              <div className="flex items-center gap-3 lg:px-0 lg:py-3.5">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 lg:hidden">
                  Organization
                </span>
                <span className="flex-1 text-sm text-slate-600 lg:flex-none">
                  {user.organization}
                </span>
              </div>

              {/* Device Column */}
              <div className="flex items-center gap-3 lg:px-0 lg:py-3.5">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 lg:hidden">
                  Device
                </span>
                <DeviceIcon
                  device={user.device}
                  showLabel
                  className="flex-1 lg:flex-none"
                />
              </div>

              {/* Current Activity Column */}
              <div className="flex items-center gap-3 lg:px-0 lg:py-3.5">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 lg:hidden">
                  Current Activity
                </span>
                <div className="flex flex-1 items-center gap-2 lg:flex-none">
                  <AppIcon app={user.activityIcon as never} size="sm" />
                  <span className="text-sm text-slate-600">
                    {user.currentActivity}
                  </span>
                </div>
              </div>

              {/* Time Usage Column */}
              <div className="flex items-center justify-between gap-3 lg:px-5 lg:py-3.5">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 lg:hidden">
                  Time Usage
                </span>
                <div className="flex flex-1 items-center justify-between gap-4 lg:flex-none">
                  <span className="text-sm font-medium text-slate-600">
                    {user.timeUsage}
                  </span>
                  <StatusBadge
                    status={user.status}
                    className="hidden lg:inline-flex"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}