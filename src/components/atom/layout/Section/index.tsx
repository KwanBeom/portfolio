import React from 'react';
import Font from 'components/atom/Font';
import * as S from './Section.style';
import { SectionTemplateProps } from './Section.type';

const SectionTemplate = ({ title, children }: SectionTemplateProps) => {
  return (
    <S.Section>
      {title && (
        <Font.XLarge as="h2" color="point">
          {title}
        </Font.XLarge>
      )}
      <div>{children}</div>
    </S.Section>
  );
};
export default SectionTemplate;
