import React, { ReactNode } from 'react';
import * as S from './ColumnDrop.style';

const ColumnDrop = ({ children }: { children: ReactNode }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

const Header = ({ children }: { children: ReactNode }) => {
  return <S.Header>{children}</S.Header>;
};

ColumnDrop.Header = Header;

export default ColumnDrop;
