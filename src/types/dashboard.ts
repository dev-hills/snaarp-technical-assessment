import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  icon: LucideIcon;
  active?: boolean;
};

export type MetricCardData = {
  title: string;
  icon: LucideIcon;
  value: string;
  delta: string;
  trend: "up" | "down";
  caption: string;
};

export type StorageLegendItem = {
  label: string;
  colorClass: string;
};

export type RegionUsageItem = {
  label: string;
  progress: number;
  tone: string;
  badge: string;
};

export type SummarySplitItem = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export type PlatformCountItem = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export type WebActivityItem = {
  label: string;
  progress: number;
  duration: string;
};

export type OnlineUser = {
  id: string;
  name: string;
  avatar: string;
  location: string;
  countryCode: string;
  organization: string;
  device: "windows" | "mac" | "linux";
  currentActivity: string;
  activityIcon: string;
  timeUsage: string;
  status: "active" | "idle" | "offline";
};

export type AppActivity = {
  id: string;
  appName: string;
  appIcon: string;
  totalUsers: number;
  totalHours: string;
  date: string;
};