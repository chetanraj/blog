type SectionHeadingProps = {
  id: string;
  title: string;
  subtitle: string;
};

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-10 scroll-mt-28 text-center md:mb-14">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 sm:text-base">
        {subtitle}
      </p>
    </div>
  );
}
