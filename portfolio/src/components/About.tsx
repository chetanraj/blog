import { profile } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="about"
          title="About"
          subtitle="Where engineering management meets frontend craft — a seamless fusion of people, pixels, and purpose."
        />
        <div className="glass-card rounded-2xl p-8 sm:p-10 md:p-12">
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            I&apos;m <strong className="text-white">{profile.name}</strong>, a{' '}
            {profile.role} based in {profile.location}. I&apos;ve had the
            privilege to delve into complex product challenges at companies like{' '}
            <strong className="text-violet-300">{profile.ex}</strong> — building
            not just interfaces, but cultures of clarity, velocity, and
            cutting-edge quality.
          </p>
          <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            My journey spans the full spectrum: React architecture, CSS that
            actually scales, full-stack pragmatism, and the human side of
            engineering leadership. I leverage AI agents as force multipliers —
            because the future isn&apos;t &quot;AI or engineers&quot; — it&apos;s
            both, woven into one seamless narrative of how we ship.
          </p>
          <p className="mt-6 text-sm text-slate-400">
            Interests: {profile.interests.join(' · ')}
          </p>
        </div>
      </div>
    </section>
  );
}
