import React from 'react';
import * as S from './Font.style';
import { FontProps } from './Font.type';

const TitleFont = ({ children, fontWeight = 'normal', color = 'secondary' }: FontProps) => (
  <S.TitleFont fontWeight={fontWeight} color={color}>
    {children}
  </S.TitleFont>
);

const SubTitleFont = ({ children, fontWeight = 'normal', color = 'secondary' }: FontProps) => (
  <S.SubTitle fontWeight={fontWeight} color={color}>
    {children}
  </S.SubTitle>
);

const BigFont = ({ children, fontWeight = 'normal', color = 'secondary' }: FontProps) => (
  <S.BigFont fontWeight={fontWeight} color={color}>
    {children}
  </S.BigFont>
);

const MediumFont = ({ children, fontWeight = 'normal', color = 'secondary' }: FontProps) => (
  <S.MediumFont fontWeight={fontWeight} color={color}>
    {children}
  </S.MediumFont>
);

const SmallFont = ({ children, fontWeight = 'normal', color = 'secondary' }: FontProps) => (
  <S.SmallFont fontWeight={fontWeight} color={color}>
    {children}
  </S.SmallFont>
);

export default {
  Title: TitleFont,
  SubTitle: SubTitleFont,
  Big: BigFont,
  Medium: MediumFont,
  Small: SmallFont,
};
