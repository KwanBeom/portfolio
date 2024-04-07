import React from 'react';
import HyperlinkBox from 'components/atom/HyperlinkBox';
import Font from 'components/atom/Font';
import Card from 'components/atom/layout/Card';
import { ArchivingItemProps } from './Archiving.type';

const Archiving = ({ href, image, title, description }: ArchivingItemProps) => {
  return (
    <HyperlinkBox href={href} target="_blank">
      <Card
        image={image}
        title={<Font.Large>{title}</Font.Large>}
        content={<Font.Medium>{description}</Font.Medium>}
      />
    </HyperlinkBox>
  );
};

export default Archiving;
