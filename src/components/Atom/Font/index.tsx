import theme from 'components/ui/styles/theme';
import styled from 'styled-components';

const Font = styled.p<{ color?: keyof (typeof theme)['colors'] }>`
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.secondary)};
  line-height: 1.2;
`;

export const XXLargeFont = styled(Font)`
  font-size: var(--2x-large-font-size);
`;

export const XLargeFont = styled(Font)`
  font-size: var(--x-large-font-size);
`;

export const LargeFont = styled(Font)`
  font-size: var(--large-font-size);
`;

export const MediumFont = styled(Font)`
  font-size: var(--medium-font-size);
`;

export const SmallFont = styled(Font)`
  font-size: var(--small-font-size);
`;

export default {
  XXLarge: XXLargeFont,
  XLarge: XLargeFont,
  Large: LargeFont,
  Medium: MediumFont,
  Small: SmallFont,
};
