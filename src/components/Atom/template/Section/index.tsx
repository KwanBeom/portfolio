import React from 'react';
import Font from 'components/Atom/Font';
import * as S from './Section.style';
import { SectionTemplateProps } from './Section.type';

const SectionTemplate = ({ title, children }: SectionTemplateProps) => {
  return (
    <S.Section>
      <Font.Title color="point">{title}</Font.Title>
      {children}
    </S.Section>
  );
};
export default SectionTemplate;
