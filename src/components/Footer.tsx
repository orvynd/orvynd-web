import { site } from "../data/site";

export function Footer() {
  return (
    <footer className="relative z-20 px-5 pb-5 sm:px-8 lg:px-12">
      <nav
        aria-label="Social links"
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-xs text-slate-500 sm:justify-start"
      >
        {site.socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-1.5 py-1 transition hover:bg-white/[0.04] hover:text-cyan-100"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
