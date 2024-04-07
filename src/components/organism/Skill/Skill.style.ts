import Font from 'components/atom/Font';
import styled from 'styled-components';

export const SkillName = styled(Font.Large).attrs({ as: 'h3' })`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const LogoImg = styled.img`
  display: inline-block;
  max-width: 3rem;
`;
