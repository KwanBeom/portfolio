import mediaQuery from 'components/ui/styles/mediaQuery';
import styled from 'styled-components';

export const SkillList = styled.ul`
  li:last-child {
    margin-bottom: 0;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 3rem;
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
