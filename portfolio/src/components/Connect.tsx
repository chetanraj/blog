import { connectLinks, profile } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function Connect() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="connect"
          title="Connect"
          subtitle="Ready to elevate your next chapter? Let's leverage momentum — together."
        />
        <div className="glass-card rounded-2xl p-8 text-center sm:p-12">
          <p className="text-slate-300">
            {profile.name} · {profile.role}
          </p>
          <p className="mt-2 text-sm text-slate-400">{profile.location}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {connectLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow rounded-2xl px-6 py-3 text-sm font-semibold text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
