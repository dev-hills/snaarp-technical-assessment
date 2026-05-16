import { Bell, Copy, Menu, Search } from "lucide-react";
import { PageContainer } from "../ui/page-container";

type TopNavbarProps = {
  onMenuClick: () => void;
};

export function TopNavbar({ onMenuClick }: TopNavbarProps) {
  return (
    <header className="sticky top-0 z-20  px-3 pb-3 backdrop-blur md:px-4 lg:px-2">
      <PageContainer>
        <div className="flex flex-col gap-3 rounded-xl border border-(--line) bg-white p-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] lg:flex-row lg:items-center lg:justify-between lg:px-4 lg:py-2.5">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onMenuClick}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-(--line) bg-white text-slate-600 transition hover:text-slate-900 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <label className="group flex min-h-10 flex-1 items-center gap-3 rounded-xl border border-[#d1d1d1] px-4 lg:min-w-105 xl:min-w-130 2xl:min-w-155">
              <Search className="h-5 w-5 text-slate-400 transition" />
              <input
                type="search"
                placeholder="Search for users, groups or settings"
                className="w-full border-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                aria-label="Search for users, groups or settings"
              />
            </label>
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F6F6F6] text-black transition hover:text-slate-900"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
            </button>

            <div className="flex min-h-12 items-center gap-3 rounded-xl bg-[#F6F6F6] px-4">
              <span className="text-sm font-medium text-black">
                Agent Code:
              </span>
              <span className="text-sm font-semibold text-(--brand)">
                0365o2j37742y3b38
              </span>
              <Copy className="h-4 w-4 text-black" aria-hidden="true" />
            </div>
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
