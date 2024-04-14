import { ReactNode } from 'react';

export type ProjectProps = {
  title: string;
  dateRange: { start: string; end: string };
  techStacks: string[];
  link?: string;
  children: ReactNode;
};

export type ProjectDetailProps = {
  description: ReactNode;
};
