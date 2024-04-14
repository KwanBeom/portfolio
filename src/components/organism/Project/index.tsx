import React, { ReactNode } from 'react';
import Font from 'components/atom/Font';
import { ProjectDetailProps, ProjectProps } from './Project.type';
import ColumnDrop from 'components/atom/layout/ColumnDrop';
import * as S from './Project.style';

const Project = ({ title, link, dateRange, techStacks, children }: ProjectProps) => {
  return (
    <ColumnDrop>
      <ColumnDrop.Header>
        <Font.XLarge as="h3" style={{ fontWeight: 700 }}>
          {title}
        </Font.XLarge>
        <Font.Small color="tertiary">
          {dateRange.start} ~ {dateRange.end}
        </Font.Small>
        <Font.Small as="a" color="initial" href={link} target="_blank">
          {link}
        </Font.Small>
        <S.TechStacks as="div">
          {techStacks.map(techStack => (
            <S.TechStack key={techStack}>{techStack}</S.TechStack>
          ))}
        </S.TechStacks>
      </ColumnDrop.Header>
      {children}
    </ColumnDrop>
  );
};

const ProjectDetail = ({ description }: ProjectDetailProps) => {
  return (
    <S.Contents>
      <ContentTemplate title="Description">
        <Font.Medium>{description}</Font.Medium>
      </ContentTemplate>
    </S.Contents>
  );
};

const ContentTemplate = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <li>
      <Font.XLarge as="h4" style={{ fontWeight: 700, marginBottom: '2rem' }}>
        {title}
      </Font.XLarge>
      {children}
    </li>
  );
};

Project.Detail = ProjectDetail;

export default Project;
