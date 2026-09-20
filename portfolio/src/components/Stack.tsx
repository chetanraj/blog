import { stackItems } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function Stack() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="stack"
          title="Stack"
          subtitle="A curated arsenal of cutting-edge tools — leveraged daily to elevate outcomes."
        />
        <ul className="flex flex-wrap justify-center gap-3">
          {stackItems.map((item) => (
            <li
              key={item}
              className="glass rounded-2xl px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-violet-500/20"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
