import styled from 'styled-components';

export const AnchorBox = styled.a`
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.line};
  text-decoration: none;
  padding: 1rem 2rem;
  box-sizing: border-box;
  border-radius: var(--radius-small);
  transition: all.2s;

  &:hover {
    scale: 1.01;
    box-shadow: 2px 2px 5px ${({ theme }) => theme.colors.line};
  }
`;

export const ExternalLinkSvg = styled.svg`
  display: block;
  float: right;
  width: var(--large-font-size);
  fill: ${({ theme }) => theme.colors.point};

  path {
    stroke: ${({ theme }) => theme.colors.point};
    stroke-width: 0;
  }
`;
