import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  bg: 'var(--bg-color)',
  headerBg: 'var(--header-bg)',
  headerText: 'var(--header-text)',
  primary: 'var(--primary-color)',
  secondary: 'var(--secondary-color)',
  lightgray: 'var(--lightgray-color)',
  accent: 'var(--color-accent)',
  yellow: 'var(--yellow)',
});

export const fonts = stylex.defineVars({
  sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  heading: 'var(--trend-font-heading, "Syne", system-ui, sans-serif)',
  body: 'var(--trend-font-body, "IBM Plex Mono", ui-monospace, monospace)',
});
