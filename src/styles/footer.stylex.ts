import * as stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

export const footerStyles = stylex.create({
  root: {
    width: '100%',
    backgroundColor: colors.headerBg,
  },
});
