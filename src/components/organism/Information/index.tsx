import React from 'react';
import Font from 'components/atom/Font';
import { InformationProps } from './Information.type';
import * as S from './Information.style';

const Information = ({ title, value }: InformationProps) => {
  return (
    <S.Information>
      <Font.Large as="span">{title}</Font.Large>
      <Font.Medium as="span">{value}</Font.Medium>
    </S.Information>
  );
};

export default Information;
