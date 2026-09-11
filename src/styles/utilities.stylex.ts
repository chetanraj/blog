import * as stylex from '@stylexjs/stylex';
import { colors } from './tokens.stylex';

export const utilityStyles = stylex.create({
  textPrimary: {
    color: colors.primary,
  },
  textSecondary: {
    color: colors.secondary,
  },
  searchBack: {
    marginTop: '1.5rem',
  },
});
