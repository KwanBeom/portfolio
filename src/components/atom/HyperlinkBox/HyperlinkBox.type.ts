import { HTMLProps, ReactNode } from 'react';

export type HyperlinkBoxProps = HTMLProps<HTMLAnchorElement> & {
  children: ReactNode;
};
