import React from 'react';
import Font from 'components/atom/Font';
import ColumnDrop from 'components/atom/layout/ColumnDrop';
import { Li } from 'components/atom/Li';
import { ExperienceProps } from './Experience.type';

const Experience = ({ name, detail, during, learning }: ExperienceProps) => {
  return (
    <ColumnDrop>
      <ColumnDrop.Header>
        <Font.Large>{name}</Font.Large>
        <Font.Small>{detail}</Font.Small>
        <Font.Small color="tertiary">
          {during.start} ~ {during.end}
        </Font.Small>
      </ColumnDrop.Header>
      {learning && (
        <Font.Medium as="ul">
          {learning.map(learn => (
            <Li key={learn}>{learn}</Li>
          ))}
        </Font.Medium>
      )}
    </ColumnDrop>
  );
};

export default Experience;
