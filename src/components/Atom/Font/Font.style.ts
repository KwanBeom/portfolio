import styled from 'styled-components';

const Font = styled.p`
  display: inline-block;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ContentFont = styled(Font)`
  font-size: var(--content-font-size);
`;

export const TitleFont = styled(Font)`
  font-size: var(--title-font-size);
`;
