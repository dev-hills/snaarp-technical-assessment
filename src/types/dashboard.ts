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
