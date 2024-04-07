import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 200vh;
`;

export const Fixed = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
`;

const bounce = keyframes`
  50% {
    margin-top: 2rem;
  }
`;

export const ScrollGuide = styled.p`
  font-size: var(--medium-font-size);
  opacity: 0;
  position: fixed;
  top: 80%;
  color: ${({ theme }) => theme.colors.secondary};

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    margin-top: 1rem;
    left: 50%;
    width: var(--medium-font-size);
    transition: all 0.2s;
    aspect-ratio: 1/1;
    border-color: ${({ theme }) => theme.colors.secondary};
    transform: translateX(-50%);
    rotate: 45deg;
    border-width: 3px;
    border-style: solid;
    border-top: 0;
    border-left: 0;
    animation: ${bounce} 1.5s infinite;
  }
`;
