import React from 'react';
import Archiving from 'components/organism/Archiving';
import Skill from 'components/organism/Skill';
import github from 'images/github-logo.png';
import velog from 'images/velog-logo.png';
import * as S from './Profile.style';
import SlideUpSection from 'components/organism/layout/SlideUpSection';
import Font from 'components/atom/Font';

const Profile = () => {
  return (
    <>
      <SlideUpSection>
        <Font.XLarge>
          구현에 즐거움을 느낍니다. 본래 존재하는 라이브러리를 활용하는 것도 좋지만, 직접 내 손으로
          구현해보고 싶은 열망을 가지고 있습니다.
        </Font.XLarge>
      </SlideUpSection>

      <SlideUpSection title="Archiving">
        <S.Archivings>
          <Archiving
            href="https://github.com/KwanBeom"
            image={<S.Img src={github} />}
            title="Github"
            description="소스코드 저장소입니다"
          />

          <Archiving
            href="https://velog.io/@developerbk/posts"
            image={<S.Img src={velog} />}
            title="Blog"
            description="고민한 내용들을 정리해 공유하는 블로그입니다"
          />
        </S.Archivings>
      </SlideUpSection>

      <SlideUpSection title="Skills">
        <S.SkillList>
          {skillList.map(name => (
            <Skill key={name}>{name}</Skill>
          ))}
        </S.SkillList>
      </SlideUpSection>
    </>
  );
};

const skillList = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Tanstack Query',
  'Redux',
  'Styled Components',
  'AWS',
];

export default Profile;
