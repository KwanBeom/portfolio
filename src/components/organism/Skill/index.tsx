import React from 'react';
import Font from 'components/atom/Font';
import { SkillProps } from './Skill.type';
import * as S from './Skill.style';

const Skill = ({ name, logo, description }: SkillProps) => {
  return (
    <>
      <S.SkillName>
        <S.LogoImg src={logo} />
        {name}
      </S.SkillName>
      <Font.Medium>{description}</Font.Medium>
    </>
  );
};

export default Skill;
