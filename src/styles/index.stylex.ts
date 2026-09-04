import * as stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

export const indexStyles = stylex.create({
  sectionHeading: {
    marginBlock: '1.5rem',
    marginTop: '1.5rem',
    marginBottom: '1rem',
    fontSize: '2.25rem',
    fontWeight: 300,
    color: colors.lightgray,
    transitionProperty: 'color',
    transitionDuration: '500ms',
  },
  postLink: {
    fontWeight: 300,
  },
  postTitle: {
    fontSize: '1.5rem',
    color: colors.primary,
    transitionProperty: 'color',
    transitionDuration: '500ms',
  },
  postDescription: {
    marginTop: '0.75rem',
    fontSize: '1rem',
    fontWeight: 400,
    color: colors.secondary,
    transitionProperty: 'color',
    transitionDuration: '500ms',
  },
  postMeta: {
    marginTop: '0.75rem',
    marginBottom: '1.25rem',
    fontSize: '1rem',
    fontWeight: 300,
    color: colors.lightgray,
  },
  newBadgeWrap: {
    display: 'none',
    '@media (min-width: 640px)': {
      display: 'inline-block',
    },
  },
  newBadge: {
    display: 'inline-block',
    borderRadius: '0.25rem',
    paddingInline: '0.5rem',
    fontStyle: 'normal',
  },
  postList: {
    marginTop: '1rem',
  },
  postListItem: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    columnGap: '0.5rem',
    rowGap: '0.25rem',
    marginBottom: '0.5rem',
  },
});
