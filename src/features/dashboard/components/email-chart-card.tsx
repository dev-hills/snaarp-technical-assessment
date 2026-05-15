import { BarChart3, LineChart, Mail } from "lucide-react";
import { Section } from "../../../components/ui/section";
import { PlaceholderBlock } from "../../../components/ui/placeholder-block";

export function EmailChartCard() {
  return (
    <Section title="Email Chart" icon={Mail}>
      <div className="flex min-h-[340px] flex-col items-center justify-center gap-5 rounded-[24px] border border-[var(--line)] bg-[var(--panel-muted)] p-6 xl:min-h-[360px]">
        <div className="grid h-44 w-44 place-items-center rounded-full border-[18px] border-slate-200 bg-white shadow-inner xl:h-48 xl:w-48">
          <span className="text-center text-base font-semibold text-slate-500">
            Email donut
            <br />
            placeholder
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium text-slate-600">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-md bg-amber-400" />
            Sent
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-md bg-indigo-400" />
            Received
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 rounded-md bg-slate-200" />
            Unsent
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
            Total emails sent
          </p>
          <p className="mt-2 text-[1.8rem] font-semibold tracking-[-0.05em] text-slate-800">
            5,421
          </p>
        </div>
      </div>
    </Section>
  );
}

export function TotalEmailCard() {
  return (
    <Section
      title="Total Email"
      icon={Mail}
      action={
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--line)] bg-white text-slate-400"
          >
            <BarChart3 className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-[var(--brand-soft)] text-[var(--brand)]"
          >
            <LineChart className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="inline-flex h-12 items-center gap-3 rounded-2xl border border-[var(--line)] bg-white px-5 text-sm font-medium text-slate-500"
          >
            Month
          </button>
        </div>
      }
    >
      <div className="space-y-4">
        <PlaceholderBlock className="h-[320px] xl:h-[350px] 2xl:h-[370px]" label="Area chart placeholder" tone="brand" />
        <div className="grid gap-3 sm:grid-cols-4">
          {[
            ["Sent", "583"],
            ["Received", "932"],
            ["Unsent", "32"],
            ["Total", "1,747"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-[var(--line)] bg-[var(--panel-muted)] px-4 py-3"
            >
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-2 text-xl font-semibold text-slate-800">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
