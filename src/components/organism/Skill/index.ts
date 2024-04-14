import Font from 'components/atom/Font';
import styled from 'styled-components';

const Skill = styled(Font.Medium).attrs({ as: 'h3' })`
  display: inline-block;
  border: 1px solid ${({ theme }) => theme.colors.point};
  padding: 1rem 1.5rem;
  border-radius: 30px;
`;

export default Skill;
