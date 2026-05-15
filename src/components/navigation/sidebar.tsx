import { X } from "lucide-react";
import { primaryNavigation, secondaryNavigation } from "../../data/dashboard";
import { cn } from "../../utils/cn";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm transition lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
        onClick={onClose}
      />
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-[292px] flex-col border-r border-[var(--line)] bg-white px-5 py-6 shadow-xl transition-transform duration-300 lg:sticky lg:top-0 lg:z-10 lg:h-screen lg:translate-x-0 lg:rounded-r-[32px] lg:shadow-none",
          open ? "translate-x-0" : "-translate-x-full",
        )}
        aria-label="Sidebar"
      >
        <div className="flex items-center justify-between px-3">
          <span className="text-[2.5rem] font-semibold tracking-[-0.06em] text-slate-950">
            Snaarp
          </span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] text-slate-500 transition hover:text-slate-900 lg:hidden"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-10 space-y-1.5" aria-label="Primary">
          {primaryNavigation.map(({ label, icon: Icon, active }) => (
            <a
              key={label}
              href="#"
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-[0.96rem] font-medium transition",
                active
                  ? "bg-[var(--brand-soft)] text-[var(--brand)]"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900",
              )}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <nav className="space-y-1.5 border-t border-[var(--line)] pt-6" aria-label="Secondary">
            {secondaryNavigation.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-[0.96rem] font-medium text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span>{label}</span>
              </a>
            ))}
          </nav>

          <div className="mt-5 flex items-center gap-3 rounded-[26px] border border-[var(--line)] bg-[var(--panel-muted)] p-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-amber-400 text-sm font-semibold text-white">
              CS
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900">Chidinma Snaarp</p>
              <p className="truncate text-xs text-slate-500">alm.lawso@example.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
