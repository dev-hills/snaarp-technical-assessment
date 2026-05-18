import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { DashboardGroupHeader } from "./dashboard-group-header";

type DashboardGroupSectionProps = {
  id: string;
  title: string;
  icon: LucideIcon;
  collapsed: boolean;
  onToggle: (groupId: string) => void;
  actionLabel?: string;
  children: ReactNode;
};

export function DashboardGroupSection({
  id,
  title,
  icon,
  collapsed,
  onToggle,
  actionLabel,
  children,
}: DashboardGroupSectionProps) {
  const contentId = `${id}-content`;

  return (
    <section className="space-y-4 xl:space-y-5">
      <DashboardGroupHeader
        title={title}
        icon={icon}
        actionLabel={actionLabel}
        collapsed={collapsed}
        onToggle={() => onToggle(id)}
        controlsId={contentId}
      />

      <div id={contentId} hidden={collapsed}>
        {children}
      </div>
    </section>
  );
}
