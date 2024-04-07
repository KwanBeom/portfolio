import React, { ReactNode } from 'react';
import Font from 'components/atom/Font';
import { Li } from 'components/atom/Li';
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

const ProjectDetail = ({
  description,
  aboutWhatIDid,
  details,
  troubleShootings,
}: ProjectDetailProps) => {
  return (
    <S.Contents>
      <ContentTemplate title="Description">
        <Font.Medium>{description}</Font.Medium>
      </ContentTemplate>
      {aboutWhatIDid && <AboutWhatIDid aboutWhatIDid={aboutWhatIDid} />}
      {details && <Details details={details} />}
      {troubleShootings && <TroubleShootings troubleShootings={troubleShootings} />}
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

const AboutWhatIDid = ({ aboutWhatIDid }: Required<Pick<ProjectDetailProps, 'aboutWhatIDid'>>) => {
  return (
    <ContentTemplate title="About what I did">
      <Font.Medium as="ul">
        {aboutWhatIDid.map(item => (
          <Li key={item}>{item}</Li>
        ))}
      </Font.Medium>
    </ContentTemplate>
  );
};

const Details = ({ details }: Required<Pick<ProjectDetailProps, 'details'>>) => {
  return (
    <ContentTemplate title="Details">
      <Font.Medium as="ul">
        {details.map(({ title, content }) => (
          <S.ListItem key={title}>
            <Font.Large as="h5">{title}</Font.Large>
            <div>{content}</div>
          </S.ListItem>
        ))}
      </Font.Medium>
    </ContentTemplate>
  );
};

const TroubleShootings = ({
  troubleShootings,
}: Required<Pick<ProjectDetailProps, 'troubleShootings'>>) => {
  return (
    <ContentTemplate title="Trouble Shootings">
      <Font.Medium as="ul">
        {troubleShootings.map(({ title, content }) => (
          <S.ListItem key={title}>
            <Font.Large as="h5">{title}</Font.Large>
            <div>{content}</div>
          </S.ListItem>
        ))}
      </Font.Medium>
    </ContentTemplate>
  );
};

Project.Detail = ProjectDetail;

export default Project;
