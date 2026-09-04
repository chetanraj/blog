import * as stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

export const footerStyles = stylex.create({
  root: {
    width: '100%',
    backgroundColor: colors.headerBg,
  },
  inner: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    '@media (min-width: 640px)': {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  left: {
    paddingTop: '1.5rem',
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
  linkEmoji: {
    marginRight: '0.5rem',
  },
});
