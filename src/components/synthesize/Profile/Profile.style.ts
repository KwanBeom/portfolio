import mediaQuery from 'components/ui/styles/mediaQuery';
import styled from 'styled-components';

export const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img<{ scale?: number }>`
  width: min(100%, 20rem);
  aspect-ratio: 1/1;
  object-fit: contain;
  scale: ${({ scale }) => scale};
`;

export const Archivings = styled.div`
  display: flex;
  gap: 1rem;

  a {
    width: 100%;
  }

  ${mediaQuery('smallDevice')`
    flex-wrap: wrap;
  `}
`;
