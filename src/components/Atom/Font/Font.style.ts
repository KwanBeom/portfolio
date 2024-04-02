import theme from 'components/ui/styles/theme';
import styled from 'styled-components';

const Font = styled.p<{ color: keyof (typeof theme)['colors'] }>`
  display: inline-block;
  color: ${({ theme, color }) => theme.colors[color]};
`;

export const ContentFont = styled(Font)`
  font-size: var(--content-font-size);
`;

export const TitleFont = styled(Font)`
  font-size: var(--title-font-size);
`;

export const SubTitle = styled(Font)`
  font-size: var(--sub-title-font-size);
`;
