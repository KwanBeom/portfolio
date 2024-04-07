import styled from 'styled-components';

export const Box = styled.div<{ padding?: string; margin?: string }>`
  opacity: 0;
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;
