import theme from 'components/ui/styles/theme';

export type FontProps = {
  children: string;
  color?: keyof typeof theme.colors;
};
