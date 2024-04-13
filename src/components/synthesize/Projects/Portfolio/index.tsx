import React from 'react';
import Project from 'components/organism/Project';

const PortfolioProject = () => {
  return (
    <Project
      title="포트폴리오 사이트"
      dateRange={{ start: '2024/03', end: '2024/04' }}
      link="https://github.com/KwanBeom/portfolio"
      techStacks={['React', 'Gatsby', 'TypeScript', 'Styled Components']}
    >
      <Project.Detail description="개인 포트폴리오 용도로 제작한 웹 사이트입니다. 애니메이션부터 디자인까지 모두 직접 구상하고 구현했습니다. 보셨던 애니메이션들은 모두 직접 구현했습니다." />
    </Project>
  );
};

export default PortfolioProject;
