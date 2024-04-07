import { ReactElement, ReactNode } from 'react';

export type CardProps = {
  image?: ReactElement<HTMLImageElement>;
  title: ReactNode;
  content: ReactNode;
};
