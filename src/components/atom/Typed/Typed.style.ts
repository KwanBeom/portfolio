import styled, { css, keyframes } from 'styled-components';

const blink = keyframes`
50% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`;

export const Wrapper = styled.p`
  display: flex;
`;

export const Cursor = styled.span<{ $isTypedDone: boolean }>`
  background-color: ${({ theme }) => theme.colors.secondary};
  height: var(--title-font-size);
  display: inline-block;
  width: 2px;
  vertical-align: bottom;

  ${({ $isTypedDone }) =>
    $isTypedDone &&
    css`
      animation: ${blink} 1000ms infinite;
    `};
`;
