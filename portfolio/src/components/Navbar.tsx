import { navLinks } from '../data/content';

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-white sm:text-base"
        >
          Chetan Raj
        </a>
        <ul className="flex max-w-[45vw] items-center gap-3 overflow-x-auto text-xs text-slate-300 sm:max-w-none sm:gap-5 sm:text-sm md:gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-cyan-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#connect"
          className="btn-glow rounded-xl px-4 py-2 text-xs font-semibold text-white sm:text-sm"
        >
          Let&apos;s synergize
        </a>
      </nav>
    </header>
  );
}
