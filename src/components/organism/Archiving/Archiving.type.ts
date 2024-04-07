import { ReactElement } from 'react';

export type ArchivingItemProps = {
  href: string;
  image: ReactElement<HTMLImageElement>;
  title: string;
  description: string;
};
