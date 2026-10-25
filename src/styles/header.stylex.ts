import * as stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

export const headerStyles = stylex.create({
  root: {
    position: 'relative', width: '100%',
    backgroundColor: colors.headerBg, color: colors.headerText,
    paddingInline: 0,
  },
  nav: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    gap: '2rem', paddingBlock: '1.75rem', borderBottom: '1px solid #2a374b',
    '@media (max-width: 640px)': { gap: '.7rem', paddingBlock: '1.25rem', flexWrap: 'wrap' },
  },
  hero: {
    display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 28%',
    alignItems: 'center', gap: '4rem', paddingBlock: '3rem 3.5rem',
    '@media (max-width: 640px)': { gridTemplateColumns: 'minmax(0,1fr)', gap: '1.5rem', paddingBlock: '2.5rem' },
  },
  title: {
    margin: 0, color: colors.headerText, fontWeight: 700,
    fontSize: 'clamp(2.4rem,4.5vw,4.4rem)', lineHeight: 1.09,
    letterSpacing: '-.015em', textWrap: 'balance',
    fontFamily: 'var(--trend-font-heading)',
  },
  tagline: {
    maxWidth: '28rem', fontSize: '1rem', lineHeight: 1.7,
    marginBlock: '0 2.3rem', color: '#aebdcb',
    '@media (max-width: 640px)': { fontSize: '.9rem' },
  },
});
