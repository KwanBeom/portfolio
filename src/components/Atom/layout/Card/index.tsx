import React from 'react';
import * as S from './Card.style';
import { CardProps } from './Card.type';

const Card = ({ image, title, content }: CardProps) => {
  return (
    <S.Card>
      {image || null}
      <S.Title>{title}</S.Title>
      <S.Content>{content}</S.Content>
    </S.Card>
  );
};

export default Card;
