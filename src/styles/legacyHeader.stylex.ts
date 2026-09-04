import * as stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

export const legacyHeaderStyles = stylex.create({
  root: {
    marginBottom: '1.5rem',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#e5e7eb',
    paddingBlock: '1rem',
  },
  nav: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: '1rem',
  },
  title: {
    fontSize: '1.125rem',
    fontWeight: 600,
    color: '#374151',
    ':hover': {
      color: '#374151',
    },
  },
  links: {
    display: 'flex',
    gap: '0.75rem',
    fontSize: '0.875rem',
  },
  link: {
    color: '#374151',
    ':hover': {
      color: colors.primary,
      textDecoration: 'underline',
    },
  },
});
