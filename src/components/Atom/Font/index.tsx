import React from 'react';
import * as S from './Font.style';
import { FontProps } from './Font.type';

const TitleFont = ({ children, color = 'secondary' }: FontProps) => (
  <S.TitleFont color={color}>{children}</S.TitleFont>
);

const SubTitleFont = ({ children, color = 'secondary' }: FontProps) => (
  <S.SubTitle color={color}>{children}</S.SubTitle>
);

const BigFont = ({ children, color = 'secondary' }: FontProps) => (
  <S.BigFont color={color}>{children}</S.BigFont>
);

const MediumFont = ({ children, color = 'secondary' }: FontProps) => (
  <S.MediumFont color={color}>{children}</S.MediumFont>
);

const SmallFont = ({ children, color = 'secondary' }: FontProps) => (
  <S.SmallFont color={color}>{children}</S.SmallFont>
);

export default {
  Title: TitleFont,
  SubTitle: SubTitleFont,
  Big: BigFont,
  Medium: MediumFont,
  Small: SmallFont,
};
