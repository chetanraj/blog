import type { SVGProps } from 'react';

/** Experiment mark, drawn with the same stroke and sizing as the Feather icons. */
export function Flask({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 3h6M10 3v6l-6 10a1.3 1.3 0 0 0 1.1 2h13.8a1.3 1.3 0 0 0 1.1-2L14 9V3M7 15h10" />
  </svg>;
}
