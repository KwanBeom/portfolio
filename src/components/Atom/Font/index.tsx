import theme from 'components/ui/styles/theme';
import styled from 'styled-components';

const Font = styled.p<{ fontWeight?: string; color: keyof (typeof theme)['colors'] }>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: 1.2;
`;

export const TitleFont = styled(Font).attrs({ as: 'h2' })`
  font-size: var(--title-font-size);
`;

export const SubTitleFont = styled(Font).attrs({ as: 'h3' })`
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

export default {
  Title: TitleFont,
  SubTitle: SubTitleFont,
  Big: BigFont,
  Medium: MediumFont,
  Small: SmallFont,
};
