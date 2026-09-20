import { whatIDo } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function WhatIDo() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="what-i-do"
          title="What I Do"
          subtitle="Three pillars. Infinite leverage. Maximum buzzword density — by design."
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {whatIDo.map((item) => (
            <li
              key={item.title}
              className="glass-card group rounded-2xl p-6 transition hover:border-cyan-400/40"
            >
              <span
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/20 text-2xl text-violet-300 ring-1 ring-violet-400/30"
                aria-hidden
              >
                {item.icon}
              </span>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
