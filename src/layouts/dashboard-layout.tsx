import { useEffect, useState, type ReactNode } from "react";
import { Sidebar } from "../components/navigation/sidebar";
import { TopNavbar } from "../components/navigation/top-navbar";
import { useLockBodyScroll } from "../hooks/use-lock-body-scroll";

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useLockBodyScroll(sidebarOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-transparent">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 min-w-0 w-full">
        <TopNavbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="px-2 pb-6 md:px-3 xl:px-2 2xl:px-2">{children}</main>
      </div>
    </div>
  );
}
