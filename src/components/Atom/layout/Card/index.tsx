import React from 'react';
import * as S from './Card.style';
import { CardProps } from './Card.type';

const Card = ({ image, title, content }: CardProps) => {
  return (
    <S.Card>
      {image || null}
      <h2>{title}</h2>
      <div>{content}</div>
    </S.Card>
  );
};

export default Card;
