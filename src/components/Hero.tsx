import { BuildTerminal } from "./BuildTerminal";
import { site } from "../data/site";

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-12 lg:py-4">
      <div className="hero-copy relative max-w-2xl">
        <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase text-slate-400">
          <span className="h-px w-10 bg-cyan-200/45" />
          {site.eyebrow}
        </div>

        <h1 className="max-w-3xl text-6xl font-semibold leading-[0.9] text-white sm:text-7xl lg:text-8xl">
          {site.wordmark}
        </h1>

        <p className="mt-4 text-3xl font-semibold leading-tight text-slate-100 sm:text-4xl lg:text-5xl">
          {site.headline}
        </p>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
          {site.subtitle}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          {site.statusPills.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 font-mono text-xs uppercase text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="mt-7 grid max-w-xl grid-cols-3 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] shadow-[0_18px_70px_rgba(0,0,0,0.22)]">
          {site.buildState.map((item) => (
            <div
              key={item.label}
              className="border-r border-white/10 px-4 py-3 last:border-r-0"
            >
              <div className="font-mono text-[0.68rem] uppercase text-slate-500">
                {item.label}
              </div>
              <div className="mt-1 text-sm font-medium text-slate-200">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-7 max-w-lg text-sm leading-7 text-slate-400">
          {site.closingLine}
        </p>
      </div>

      <BuildTerminal />
    </section>
  );
}
