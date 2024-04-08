import Font from 'components/atom/Font';
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

export const TechStacks = styled(Font.Small)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  ${mediaQuery('smallDevice')`
    justify-content: center;
  `}
`;

export const TechStack = styled.span`
  font-size: inherit;
  border: 1px solid ${({ theme }) => theme.colors.line};
  padding: 0.8rem 1rem;
  border-radius: var(--radius-medium);
  white-space: pre-wrap;
`;

export const Contents = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;
