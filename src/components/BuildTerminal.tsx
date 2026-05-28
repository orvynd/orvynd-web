import { useEffect, useState } from "react";
import { site } from "../data/site";

const LOOP_INTERVAL_MS = 1350;
const VISIBLE_PHASES = 6;

export function BuildTerminal() {
  const [activePhase, setActivePhase] = useState(0);
  const currentPhase = site.terminalPhases[activePhase];
  const displayedPhases = Array.from({ length: VISIBLE_PHASES }, (_, position) => {
    const age = VISIBLE_PHASES - position - 1;
    const index =
      (activePhase - age + site.terminalPhases.length) %
      site.terminalPhases.length;

    return {
      age,
      phase: site.terminalPhases[index],
    };
  });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePhase((current) =>
        current >= site.terminalPhases.length - 1 ? 0 : current + 1,
      );
    }, LOOP_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="terminal-float relative mx-auto w-full max-w-2xl">
      <div className="absolute -inset-5 rounded-xl bg-cyan-300/10 blur-3xl" />

      <div className="terminal-panel relative overflow-hidden rounded-lg border border-white/10 bg-[#071014]/90 shadow-terminal backdrop-blur-xl">
        <div className="scan-line" />

        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.035] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="status-dot bg-cyan-300" />
            <span className="status-dot bg-slate-300 [animation-delay:180ms]" />
            <span className="status-dot bg-emerald-300 [animation-delay:360ms]" />
          </div>

            <p className="font-mono text-xs uppercase text-slate-400">
            {site.terminalTitle}
          </p>
        </div>

        <div className="flex min-h-[24rem] flex-col px-5 py-5 font-mono sm:px-7 sm:py-6">
          <div className="flex-1">
            <div className="mb-5 text-xs uppercase text-slate-500">
              <span>
                phase {currentPhase.label}: {currentPhase.title}
              </span>
            </div>

            <div className="space-y-2.5 text-sm leading-6 sm:text-base">
              {displayedPhases.map(({ age, phase }, index) => {
                const isActive = age === 0;
                const isPrevious = age > 0 && age <= 3;

                return (
                  <div
                    key={`${phase.line}-${index}`}
                    className={`terminal-line ${
                      isActive
                        ? "terminal-line-active"
                        : isPrevious
                          ? "terminal-line-previous"
                          : "terminal-line-old"
                    }`}
                  >
                    <span className="terminal-time">{phase.label}</span>
                    <span className="terminal-command">{phase.line}</span>
                  </div>
                );
              })}

              <div className="terminal-input-line flex items-center gap-2 pt-2 text-cyan-100">
                <span>&gt;</span>
                <span className="cursor-block" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
            <div className="border-r border-white/10 px-4 py-3">
              <div className="text-[0.68rem] uppercase text-slate-500">
                BUILD LOOP
              </div>
              <div className="mt-1 text-sm text-slate-200">Active</div>
            </div>
            <div className="px-4 py-3">
              <div className="text-[0.68rem] uppercase text-slate-500">STATE</div>
              <div className="mt-1 text-sm text-slate-200">In progress</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
