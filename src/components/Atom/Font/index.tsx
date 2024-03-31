import React from 'react';
import * as S from './Font.style';

const ContentFont = ({ children }: { children: string }) => (
  <S.ContentFont>{children}</S.ContentFont>
);

const TitleFont = ({ children }: { children: string }) => <S.TitleFont>{children}</S.TitleFont>;

export default { Content: ContentFont, Title: TitleFont };
