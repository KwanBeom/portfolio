import React from 'react';
import SlideUpBox from 'components/atom/SlideUpBox';
import SectionTemplate from 'components/atom/layout/Section';
import { SlideUpSectionProps } from './SlideUpSection.type';

const SlideUpSection = ({ title, children }: SlideUpSectionProps) => {
  return (
    <SlideUpBox>
      <SectionTemplate title={title}>{children}</SectionTemplate>
    </SlideUpBox>
  );
};

export default SlideUpSection;
