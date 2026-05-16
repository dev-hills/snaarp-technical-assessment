import {
  Activity,
  BarChart3,
  BellRing,
  Building2,
  CircleUserRound,
  CreditCard,
  FileBarChart2,
  FolderKanban,
  Globe,
  HardDrive,
  LayoutDashboard,
  LifeBuoy,
  Mail,
  MonitorCog,
  Package2,
  Settings,
  ShieldCheck,
  Smartphone,
  Users,
  UserSquare2,
} from "lucide-react";
import type {
  MetricCardData,
  NavigationItem,
  PlatformCountItem,
  RegionUsageItem,
  StorageLegendItem,
  SummarySplitItem,
  WebActivityItem,
} from "../types/dashboard";

export const primaryNavigation: NavigationItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Organization & Reg.", icon: Building2 },
  { label: "Reporting", icon: FileBarChart2 },
  { label: "Billing", icon: CreditCard },
  { label: "Account", icon: CircleUserRound },
  { label: "Storage", icon: HardDrive },
  { label: "Settings", icon: Settings },
  { label: "Device Management", icon: MonitorCog },
  { label: "Productivity Report", icon: BarChart3 },
];

export const secondaryNavigation: NavigationItem[] = [
  { label: "User Panel", icon: UserSquare2 },
  { label: "Support", icon: LifeBuoy },
];

export const cloudMetrics: MetricCardData[] = [
  {
    title: "Users",
    icon: CircleUserRound,
    value: "3,836",
    delta: "15%",
    trend: "down",
    caption: "Compared to last week",
  },
  {
    title: "Groups",
    icon: Users,
    value: "316",
    delta: "23%",
    trend: "up",
    caption: "Compared to last week",
  },
  {
    title: "Uploads",
    icon: HardDrive,
    value: "316",
    delta: "23%",
    trend: "up",
    caption: "Compared to last week",
  },
  {
    title: "Departments",
    icon: Building2,
    value: "316",
    delta: "23%",
    trend: "down",
    caption: "Compared to last week",
  },
];

export const storageLegend: StorageLegendItem[] = [
  { label: "Files", colorClass: "bg-violet-500" },
  { label: "Folders", colorClass: "bg-amber-400" },
  { label: "Videos", colorClass: "bg-lime-500" },
  { label: "Apps", colorClass: "bg-sky-400" },
  { label: "Audios", colorClass: "bg-rose-500" },
  { label: "Miscellaneous", colorClass: "bg-indigo-500" },
  { label: "Available Space", colorClass: "bg-slate-200" },
];

export const activeUserRegions: RegionUsageItem[] = [
  { label: "United Kingdom", progress: 78, tone: "bg-[#66c124]", badge: "UK" },
  { label: "Nigeria", progress: 61, tone: "bg-[#66c124]", badge: "NG" },
  { label: "UAE", progress: 45, tone: "bg-[#66c124]", badge: "AE" },
  { label: "Canada", progress: 59, tone: "bg-[#66c124]", badge: "CA" },
  {
    label: "United States of America",
    progress: 78,
    tone: "bg-[#66c124]",
    badge: "US",
  },
];

export const deviceMetrics: MetricCardData[] = [
  {
    title: "Number Of Devices",
    icon: Smartphone,
    value: "3,836",
    delta: "15%",
    trend: "up",
    caption: "Compared to last week",
  },
  {
    title: "Users",
    icon: CircleUserRound,
    value: "3,836",
    delta: "15%",
    trend: "down",
    caption: "Compared to last week",
  },
  {
    title: "Emails",
    icon: Mail,
    value: "316",
    delta: "23%",
    trend: "down",
    caption: "Compared to last week",
  },
  {
    title: "Number of Apps",
    icon: Package2,
    value: "316",
    delta: "23%",
    trend: "down",
    caption: "Compared to last week",
  },
  {
    title: "Number of Downloads",
    icon: HardDrive,
    value: "316",
    delta: "23%",
    trend: "up",
    caption: "Compared to last week",
  },
];

export const deviceStatus: SummarySplitItem[] = [
  { label: "Plugged", value: "1,923", icon: BellRing },
  { label: "Unplugged", value: "1,913", icon: ShieldCheck },
];

export const userStatus: SummarySplitItem[] = [
  { label: "Active", value: "592", icon: Activity },
  { label: "Offline", value: "3,836", icon: BellRing },
];

export const emailStatus: SummarySplitItem[] = [
  { label: "Sent", value: "592", icon: Mail },
  { label: "Received", value: "3,836", icon: Globe },
];

export const platformCounts: PlatformCountItem[] = [
  { label: "Windows", value: "1,403 devices", icon: MonitorCog },
  { label: "Mac", value: "632 devices", icon: CircleUserRound },
  { label: "Linux", value: "1,801 devices", icon: ShieldCheck },
];

export const orgCounts: PlatformCountItem[] = [
  { label: "Organizations", value: "1,403 users", icon: Building2 },
  { label: "Departments", value: "632 users", icon: Users },
  { label: "Groups", value: "1,801 users", icon: FolderKanban },
];

export const emailCounts: PlatformCountItem[] = [
  { label: "Read", value: "1,403 emails", icon: Mail },
  { label: "Unread", value: "632 emails", icon: BellRing },
];

export const productivityMetrics: MetricCardData[] = [
  {
    title: "Hours Productivity",
    icon: Activity,
    value: "576 Hrs",
    delta: "15%",
    trend: "down",
    caption: "Compared to last week",
  },
  {
    title: "Days Activity",
    icon: FileBarChart2,
    value: "267 Days",
    delta: "15%",
    trend: "up",
    caption: "Compared to last week",
  },
  {
    title: "Users",
    icon: CircleUserRound,
    value: "3,836",
    delta: "15%",
    trend: "down",
    caption: "Compared to last week",
  },
  {
    title: "Web Activity",
    icon: Globe,
    value: "178 Activities",
    delta: "15%",
    trend: "up",
    caption: "Compared to last week",
  },
];

export const webActivityItems: WebActivityItem[] = [
  { label: "Chrome", progress: 78, duration: "5 hours 12 minutes" },
  { label: "Gmail", progress: 61, duration: "2 hours 24 minutes" },
  { label: "Firefox", progress: 45, duration: "40 minutes" },
  { label: "Instagram", progress: 78, duration: "5 hours 6 minutes" },
  { label: "x.com", progress: 59, duration: "1 hour 8 minutes" },
  { label: "Facebook", progress: 61, duration: "3 hours 1 minute" },
];
