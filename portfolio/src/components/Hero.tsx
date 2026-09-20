import { profile } from '../data/content';

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 5.7) % 100}%`,
  delay: `${(i * 0.7) % 10}s`,
  duration: `${10 + (i % 6)}s`,
}));

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-24 pt-32 sm:px-6 sm:pt-40"
    >
      <div className="orb orb-1" aria-hidden />
      <div className="orb orb-2" aria-hidden />
      <div className="orb orb-3" aria-hidden />
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: '-10%',
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
          aria-hidden
        />
      ))}

      <div className="relative mx-auto max-w-6xl text-center">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-violet-300/90 sm:text-sm">
          Bangalore, India · Ex-{profile.ex}
        </p>
        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="gradient-text block">{profile.name}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl md:text-2xl">
          {profile.role} — crafting{' '}
          <span className="text-cyan-300">seamless</span>,{' '}
          <span className="text-violet-300">cutting-edge</span> digital
          experiences that{' '}
          <span className="text-blue-300">elevate</span> teams, products, and
          the entire frontend journey.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400 sm:text-base">
          Not just code — but vision. Not just shipping — but leverage. Not just
          leadership — but transformative synergy at scale.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#connect"
            className="btn-glow rounded-2xl px-8 py-4 text-sm font-bold text-white sm:text-base"
          >
            Start the journey
          </a>
          <a
            href={profile.site}
            className="glass rounded-2xl border border-violet-500/30 px-8 py-4 text-sm font-semibold text-violet-200 transition hover:border-cyan-400/40 hover:text-cyan-200 sm:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit chetanraj.dev
          </a>
        </div>
      </div>
    </section>
  );
}
