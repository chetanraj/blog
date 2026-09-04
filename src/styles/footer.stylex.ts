import * as stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

export const footerStyles = stylex.create({
  root: {
    backgroundColor: colors.headerBg,
  },
  inner: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    '@media (min-width: 640px)': {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  left: {
    paddingTop: '1.5rem',
  },
  nameLink: {
    fontSize: '1.5rem',
    color: colors.bg,
    cursor: 'pointer',
    transitionProperty: 'color',
    transitionDuration: '500ms',
  },
  copyrightDesktop: {
    opacity: 0.5,
    color: colors.bg,
    cursor: 'pointer',
    paddingTop: '4rem',
    display: 'none',
    transitionProperty: 'color',
    transitionDuration: '500ms',
    '@media (min-width: 640px)': {
      display: 'block',
    },
  },
  right: {
    display: 'flex',
    paddingTop: '2.5rem',
    '@media (min-width: 640px)': {
      paddingTop: 0,
    },
  },
  social: {
    paddingRight: '5rem',
  },
  sectionHeading: {
    opacity: 0.5,
    color: colors.bg,
    cursor: 'pointer',
    transitionProperty: 'color',
    transitionDuration: '500ms',
  },
  linkGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    paddingTop: '1rem',
    width: '100%',
  },
  socialLink: {
    color: colors.bg,
    cursor: 'pointer',
    transitionProperty: 'color',
    transitionDuration: '500ms',
  },
  socialLinkSpaced: {
    color: colors.bg,
    cursor: 'pointer',
    paddingTop: '0.5rem',
    transitionProperty: 'color',
    transitionDuration: '500ms',
  },
  linkItem: {
    color: colors.bg,
    cursor: 'pointer',
    paddingTop: '0.5rem',
    transitionProperty: 'color',
    transitionDuration: '500ms',
  },
  linkEmoji: {
    marginRight: '0.5rem',
  },
  copyrightMobile: {
    opacity: 0.5,
    color: colors.bg,
    cursor: 'pointer',
    paddingTop: '4rem',
    display: 'block',
    transitionProperty: 'color',
    transitionDuration: '500ms',
    '@media (min-width: 640px)': {
      display: 'none',
    },
  },
});
