import React from 'react';
import Information from 'components/organism/Information';
import reactLogo from 'images/react-logo.svg';
import typescriptLogo from 'images/typescript-logo.png';
import javascriptLogo from 'images/javascript-logo.svg';
import htmlLogo from 'images/html-logo.png';
import cssLogo from 'images/css-logo.png';
import reduxLogo from 'images/redux-logo.png';
import awsLogo from 'images/aws-logo.png';
import tanstackQueryLogo from 'images/tanstack-query-logo.svg';
import StyledComponentsLogo from 'images/styled-components-logo.png';
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
      <SlideUpSection title="About Me">
        <Information title="이름" value="최범관" />
        <Information title="연락처" value={<a href="tel:010-3641-0936">010-3641-0936</a>} />
        <Information
          title="이메일"
          value={<a href="mailto:tkdwjfrhs4@gmail.com">tkdwjfrhs4@gmail.com</a>}
        />
      </SlideUpSection>

      <SlideUpSection title="Introduce">
        <Font.Medium>
          유연한 의사소통으로 유연한 코드를 작성하는 역량을 키워나가고 싶은 최범관입니다.
          <br />
          <br />
          원하는 결과를 얻기 전까지 매달리는 끈기와 열정을 가지고 있습니다. 또한, 고민한 내용을 같은
          고민을 하는 누군가에게 도움이 되길 바라며 블로그에 정리해 공유하고 있습니다. 팀 프로젝트의
          리더를 맡아 팀원의 문제를 함께 해결해나가며 팀을 이끈 경험으로 의사소통의 중요성을 알고
          있습니다.
        </Font.Medium>
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
          {skillList.map(({ name, description, logo }) => (
            <S.ListItem key={name}>
              <Skill name={name} description={description} logo={logo} />
            </S.ListItem>
          ))}
        </S.SkillList>
      </SlideUpSection>
    </>
  );
};

const skillList = [
  {
    name: 'React',
    description:
      '리액트의 함수형 컴포넌트에 대해서 알고 사용할 수 있습니다. 커스텀 훅으로 도메인과 뷰를 적절히 분리할 수 있습니다.',
    logo: reactLogo,
  },

  {
    name: 'JavaScript',
    description:
      '자바스크립트 ES6의 문법에 대해 알고 있습니다. async/await 문법을 활용해 비동기 로직을 다룰 수 있습니다.',
    logo: javascriptLogo,
  },

  {
    name: 'TypeScript',
    description:
      '자바스크립트의 느슨한 타입으로 인한 에러를 방지하기 위해 타입스크립트를 사용할 수 있습니다. 제네릭을 활용해 유연한 타입을 작성할 수 있고, 유틸리티 타입을 적절히 사용해 안전한 코드를 작성할 수 있습니다.',
    logo: typescriptLogo,
  },

  {
    name: 'HTML5',
    description:
      '웹 표준 시멘틱 태그에 대해서 알고 사용할 수 있습니다. 접근성을 준수한 마크업을 할 수 있습니다.',
    logo: htmlLogo,
  },

  {
    name: 'CSS3',
    description:
      'keyframe을 사용해 애니메이션을 구현할 수 있고, 미디어 쿼리를 활용한 반응형 어플리케이션을 구현할 수 있습니다.',
    logo: cssLogo,
  },

  {
    name: 'AWS',
    description:
      'Amazone Web Service를 활용해 S3에 정적 리소스를 업로드 하고 CloudFront로 CDN 서비스를 이용할 수 있습니다. Route 53으로 배포된 정적 사이트와 도메인을 연결할 수 있습니다.',
    logo: awsLogo,
  },

  {
    name: 'Tanstack Query',
    description:
      'useQuery를 활용해 서버 데이터를 fetching 할 수 있습니다. 데이터를 무효화 하고 re-fetching 하는 Invalidate Queries에 알고 있고 적절히 활용할 수 있습니다.',
    logo: tanstackQueryLogo,
  },

  {
    name: 'Styled Components',
    description:
      'CSS-in-JS 라이브러리인 Styled Components를 활용해 스타일을 재사용하고 확장할 수 있습니다. 두 개의 프로젝트에 적용해본 경험이 있습니다.',
    logo: StyledComponentsLogo,
  },

  {
    name: 'Redux',
    description:
      '프로젝트에 직접 적용해본 적은 없지만, 덕스 패턴과 리덕스 툴킷에 대해 알고 있습니다.',
    logo: reduxLogo,
  },
];

export default Profile;
