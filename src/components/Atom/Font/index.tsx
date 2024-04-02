import React from 'react';
import * as S from './Font.style';
import { FontProps } from './Font.type';

const ContentFont = ({ children, color = 'secondary' }: FontProps) => (
  <S.ContentFont color={color}>{children}</S.ContentFont>
);

const TitleFont = ({ children, color = 'secondary' }: FontProps) => (
  <S.TitleFont color={color}>{children}</S.TitleFont>
);

const SubTitleFont = ({ children, color = 'secondary' }: FontProps) => (
  <S.SubTitle color={color}>{children}</S.SubTitle>
);

export default { Content: ContentFont, Title: TitleFont, SubTitle: SubTitleFont };
