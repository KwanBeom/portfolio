import styled from 'styled-components';

export const Li = styled.li`
  position: relative;
  padding: 0.4rem 0 0.4rem 2rem;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    font-size: var(--small-font-size);
    color: ${({ theme }) => theme.colors.point};
  }
`;
