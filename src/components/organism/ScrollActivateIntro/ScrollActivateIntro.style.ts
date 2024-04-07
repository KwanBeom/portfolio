import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
  height: 200vh;
  padding-bottom: 20vmax;
`;

export const Sticky = styled.div`
  position: sticky;
  top: 50%;
  text-align: center;
  margin-bottom: 30vh;
`;

export const MoreText = styled.div`
  opacity: 0;
  position: sticky;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: calc(10px + 1vmin) calc(10px + 2vmin);
  border-radius: 20px;
  top: 80%;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.point};
  }
`;
