// Chart data for dashboard visualizations
// Using existing color scheme from dashboard.ts

export const fileSharingChartData = [
  { name: "Jan", public: 45, anyoneWithLink: 30, withinOrg: 65 },
  { name: "Feb", public: 52, anyoneWithLink: 35, withinOrg: 58 },
  { name: "Mar", public: 38, anyoneWithLink: 42, withinOrg: 72 },
  { name: "Apr", public: 48, anyoneWithLink: 38, withinOrg: 68 },
  { name: "May", public: 55, anyoneWithLink: 45, withinOrg: 75 },
  { name: "Jun", public: 42, anyoneWithLink: 50, withinOrg: 62 },
  { name: "Jul", public: 58, anyoneWithLink: 48, withinOrg: 80 },
  { name: "Aug", public: 62, anyoneWithLink: 52, withinOrg: 85 },
  { name: "Sep", public: 50, anyoneWithLink: 45, withinOrg: 70 },
  { name: "Oct", public: 55, anyoneWithLink: 40, withinOrg: 78 },
  { name: "Nov", public: 48, anyoneWithLink: 55, withinOrg: 65 },
  { name: "Dec", public: 60, anyoneWithLink: 58, withinOrg: 88 },
];

export const fileSharingColors = {
  public: "#312e81", // indigo-900
  anyoneWithLink: "#6366f1", // indigo-500
  withinOrg: "#a5b4fc", // indigo-300
};

export const emailAreaChartData = [
  { name: "Week 1", sent: 120, received: 180, unsent: 15 },
  { name: "Week 2", sent: 145, received: 195, unsent: 22 },
  { name: "Week 3", sent: 132, received: 210, unsent: 18 },
  { name: "Week 4", sent: 165, received: 240, unsent: 25 },
  { name: "Week 5", sent: 158, received: 225, unsent: 20 },
  { name: "Week 6", sent: 175, received: 260, unsent: 28 },
  { name: "Week 7", sent: 190, received: 285, unsent: 22 },
  { name: "Week 8", sent: 205, received: 310, unsent: 30 },
  { name: "Week 9", sent: 220, received: 335, unsent: 35 },
  { name: "Week 10", sent: 240, received: 360, unsent: 28 },
  { name: "Week 11", sent: 235, received: 345, unsent: 32 },
  { name: "Week 12", sent: 265, received: 385, unsent: 40 },
];

export const emailAreaColors = {
  sent: "#fbbf24", // amber-400
  received: "#818cf8", // indigo-400
  unsent: "#e2e8f0", // slate-200
};

export const emailDonutData = [
  { name: "Sent", value: 583, color: "#fbbf24" }, // amber-400
  { name: "Received", value: 932, color: "#818cf8" }, // indigo-400
  { name: "Unsent", value: 32, color: "#e2e8f0" }, // slate-200
];

export const storageDonutData = [
  { name: "Files", value: 35, color: "#8b5cf6" }, // violet-500
  { name: "Folders", value: 20, color: "#fbbf24" }, // amber-400
  { name: "Videos", value: 15, color: "#84cc16" }, // lime-500
  { name: "Apps", value: 12, color: "#38bdf8" }, // sky-400
  { name: "Audios", value: 8, color: "#f43f5e" }, // rose-500
  { name: "Miscellaneous", value: 5, color: "#6366f1" }, // indigo-500
  { name: "Available Space", value: 5, color: "#e2e8f0" }, // slate-200
];

export const webActivityChartData = [
  { name: "Chrome", hours: 5.2, percentage: 78 },
  { name: "Gmail", hours: 2.4, percentage: 61 },
  { name: "Firefox", hours: 0.67, percentage: 45 },
  { name: "Instagram", hours: 5.1, percentage: 78 },
  { name: "X.com", hours: 1.13, percentage: 59 },
  { name: "Facebook", hours: 3.02, percentage: 61 },
];

// Chart configuration constants
export const chartMargins = {
  top: 10,
  right: 10,
  left: 0,
  bottom: 0,
};

export const chartTooltipStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  padding: "12px 16px",
};

export const chartTextColor = "#64748b"; // slate-500