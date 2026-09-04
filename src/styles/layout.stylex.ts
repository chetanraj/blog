import * as stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

export const layoutStyles = stylex.create({
  contentSection: {
    width: '75%',
    marginInline: 'auto',
  },
  main: {
    minHeight: 'calc(100vh - 300px)',
  },
  body: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    backgroundColor: colors.bg,
    transitionProperty: 'color, background-color',
    transitionDuration: '600ms',
  },
});
