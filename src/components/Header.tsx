import { site } from "../data/site";

export function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
      <a
        href="/"
        className="font-mono text-sm font-semibold uppercase text-slate-100"
        aria-label="Orvynd home"
      >
        {site.name}
      </a>

      <nav className="flex items-center gap-3 text-sm text-slate-300">
        {site.headerLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
