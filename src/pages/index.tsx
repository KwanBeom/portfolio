import React, { useEffect } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import GlobalStyle from 'components/ui/styles/global';
import { ThemeProvider } from 'styled-components';
import theme from 'components/ui/styles/theme';
import Profile from 'components/synthesize/Profile';
import Landing from 'components/synthesize/Landing';
import Projects from 'components/synthesize/Projects';
import Experiences from 'components/synthesize/Experiences';

const IndexPage: React.FC<PageProps> = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Landing />
        <Profile />
        <Projects />
        <Experiences />
      </ThemeProvider>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>최범관 포트폴리오</title>;
