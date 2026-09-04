import * as stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

export const postStyles = stylex.create({
  metaRow: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    columnGap: '1rem',
    rowGap: '0.75rem',
    margin: '1rem 1.5rem 1.5rem',
    color: colors.secondary,
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  metaIcon: {
    marginRight: '0.25rem',
  },
  tagList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  tag: {
    borderRadius: '0.25rem',
    backgroundColor: colors.headerBg,
    padding: '0.25rem 0.5rem',
    fontSize: '0.75rem',
    lineHeight: 1,
    color: colors.bg,
  },
  content: {
    color: colors.primary,
  },
});
