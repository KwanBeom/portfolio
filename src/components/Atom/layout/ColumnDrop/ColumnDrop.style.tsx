import mediaQuery from 'components/ui/styles/mediaQuery';
import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  gap: 2rem;
  margin-bottom: 5rem;

  ${mediaQuery('smallDevice')`
    flex-direction: column;
  `}
`;

export const Header = styled.header`
  flex-basis: 30vw;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${mediaQuery('smallDevice')`
    flex-basis: 0;
    align-items: center;
  `}
`;
