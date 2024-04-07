import React from 'react';
import AsserTreeProject from './Assertree';
import PortfolioProject from './Portfolio';
import BroadcastSystem from './BroadcastSystem';
import SlideUpSection from 'components/organism/layout/SlideUpSection';

const Projects = () => {
  return (
    <SlideUpSection title="Projects">
      <PortfolioProject />
      <AsserTreeProject />
      <BroadcastSystem />
    </SlideUpSection>
  );
};

export default Projects;
