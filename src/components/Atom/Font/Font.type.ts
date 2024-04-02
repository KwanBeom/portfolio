import theme from 'components/ui/styles/theme';
import { ReactNode } from 'react';

export type FontProps = {
  children: ReactNode;
  color?: keyof typeof theme.colors;
};
