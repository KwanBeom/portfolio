import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const IndexPage: React.FC<PageProps> = () => {
  const test = 'a';
  return <p>hello wolrd</p>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
