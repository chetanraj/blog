import * as stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

export const headerStyles = stylex.create({
  root: {
    position: 'relative',
    width: '100%',
    height: '16rem',
    backgroundColor: colors.headerBg,
  },
  hero: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '16rem',
    textAlign: 'center',
    color: colors.bg,
  },
  title: {
    maxWidth: '48rem',
    paddingInline: '1rem',
    fontSize: '1.5rem',
    lineHeight: 1.25,
    transitionProperty: 'color',
    transitionDuration: '500ms',
  },
  tagline: {
    marginTop: '1rem',
    marginInline: '1.5rem',
    fontSize: '1.125rem',
    fontWeight: 300,
    transitionProperty: 'color',
    transitionDuration: '500ms',
    '@media (min-width: 768px)': {
      width: '40%',
      marginInline: 0,
    },
    '@media (min-width: 1024px)': {
      width: '60%',
    },
    '@media (min-width: 1280px)': {
      width: '40%',
    },
  },
  taglineLink: {
    textDecoration: 'underline',
  },
  homeLink: {
    color: colors.bg,
  },
  homeAnchor: {
    cursor: 'pointer',
    transitionProperty: 'color',
    transitionDuration: '500ms',
  },
  themeToggle: {
    position: 'absolute',
    top: '1em',
    right: '1em',
    zIndex: 20,
    display: 'flex',
    cursor: 'pointer',
  },
  themeAction: {
    marginInline: '1rem',
  },
  rssLink: {
    marginInline: '1rem',
    display: 'none',
    '@media (min-width: 768px)': {
      display: 'block',
    },
  },
});
