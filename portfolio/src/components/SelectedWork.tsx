import { projects } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function SelectedWork() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="work"
          title="Selected Work"
          subtitle="Placeholder projects with maximum AI inflation — your roadmap to impressed stakeholders."
        />
        <ul className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <li
              key={project.title}
              className="glass-card flex flex-col rounded-2xl p-6 sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400/90">
                {project.tag}
              </p>
              <h3 className="mt-3 text-xl font-bold text-white">
                {project.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              <span className="mt-6 text-xs text-violet-400/80">
                Case study coming soon — stay tuned for the seamless reveal.
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
