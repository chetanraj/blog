import { writingLinks } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function Writing() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="writing"
          title="Writing"
          subtitle="Thought leadership that delves deep — because the journey deserves documentation."
        />
        <ul className="space-y-4">
          {writingLinks.map((post) => (
            <li key={post.href}>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card block rounded-2xl p-6 transition hover:border-cyan-400/35 sm:p-8"
              >
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{post.blurb}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
