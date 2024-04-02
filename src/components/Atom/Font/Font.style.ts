import theme from 'components/ui/styles/theme';
import styled from 'styled-components';

const Font = styled.p<{ color: keyof (typeof theme)['colors'] }>`
  color: ${({ theme, color }) => theme.colors[color]};
  line-height: 1.2;
`;

export const TitleFont = styled(Font)`
  font-size: var(--title-font-size);
`;

export const SubTitle = styled(Font)`
  font-size: var(--sub-title-font-size);
`;

export const BigFont = styled(Font)`
  font-size: var(--big-font-size);
`;

export const MediumFont = styled(Font)`
  font-size: var(--medium-font-size);
`;

export const SmallFont = styled(Font)`
  font-size: var(--small-font-size);
`;
