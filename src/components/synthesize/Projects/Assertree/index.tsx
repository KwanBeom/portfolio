import React from 'react';
import Project from 'components/organism/Project';
import { Li } from 'components/atom/Li';
import * as S from './Assertree.style';

const AsserTreeProject = () => {
  return (
    <Project
      title="어쩔트리"
      dateRange={{ start: '2023/12', end: '2024/03' }}
      link="https://whereismytree.me/"
      techStacks={['React', 'TypeScript', 'Styled Components', 'Tanstack Query', 'Axios']}
    >
      <Project.Detail
        description={
          <>
            크리스마스 트리의 위치를 등록해 전국의 유저들에게 공유하고, 리뷰를 남겨 생생한 후기를
            사용자들과 나누는 커뮤니티 기반의 서비스입니다. 백엔드 3인과 기획 및 디자이너 1인
            프론트엔드 2인으로 구성되어 프로젝트를 진행했습니다. 카카오 지도 open api를 활용하여
            개발했습니다. <br />
            <br />
            간단한 구동 영상은{' '}
            <a href="https://github.com/whereismytree/frontend" target="_blank">
              깃허브
            </a>
            에 정리되어 있습니다.
          </>
        }
        aboutWhatIDid={[
          'kakao maps web api와 react hook form을 활용한 트리 등록 페이지를 구현했습니다',
          '애니메이션을 활용한 랜딩 페이지를 개발했습니다.',
          'render props 패턴을 활용한 프로필 설정 페이지를 구현했습니다',
          '저장 및 등록한 트리 페이지를 구현했습니다.',
          '소셜 로그인 페이지를 구현했습니다.',
          '마이 페이지를 구현했습니다.',
          '등록한 리뷰 상세 페이지를 구현했습니다.',
        ]}
        details={[
          {
            title: 'AWS를 활용한 배포',
            content: (
              <>
                AWS S3와 Cloud Front를 활용해 CDN에 배포했고 Route 53으로 보유중인 도메인과
                연결하였습니다. Github Actions를 통한 CD 파이프 라인도 함께 구축하였습니다. 배포 및
                배포 자동화 과정을{' '}
                <a
                  href="https://velog.io/@developerbk/S3-CloudFront%EC%99%80-Github-Actions%EB%A5%BC-%ED%86%B5%ED%95%9C-%EB%B0%B0%ED%8F%AC-%EB%B0%8F-%EC%9E%90%EB%8F%99%ED%99%94-%EA%B3%BC%EC%A0%95%EC%A0%95%EB%A6%AC"
                  target="_blank"
                >
                  블로그
                </a>
                에 정리하여 업로드 했습니다.
              </>
            ),
          },

          {
            title: '트리 상세 정보 입력 페이지',
            content: (
              <ul>
                <Li>
                  구현한 컴포넌트가 외부 라이브러리와 강하게 얽혀있어 리팩토링 해 일반적인
                  인터페이스로 개선하였습니다. 좋은 컴포넌트를 작성하기 위한 고민은{' '}
                  <a
                    href="https://velog.io/@developerbk/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EA%B0%80-%EB%B3%80%EA%B2%BD%EC%97%90-%EC%9C%A0%EC%97%B0%ED%95%98%EA%B2%8C-%EB%8C%80%EC%9D%91%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%B4%EC%84%A0-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%B4%EC%95%BC%ED%95%A0%EA%B9%8C"
                    target="_blank"
                  >
                    블로그
                  </a>
                  에 정리되어 있습니다.
                </Li>
                <Li>
                  날짜 입력 인터페이스를 구현하기 위해 react date range 라이브러리를 활용했습니다.
                </Li>
              </ul>
            ),
          },

          {
            title: '범용적으로 사용되는 기능 개발',
            content: (
              <S.FunctionList>
                <Li>
                  <S.FunctionTitle>usePreviewImage</S.FunctionTitle>
                  미리보기 이미지에 대한 source를 반환하는 함수입니다. html 기본 스펙인 FileReader를
                  활용해 개발하였습니다. 소스코드는{' '}
                  <a
                    href="https://github.com/whereismytree/frontend/blob/main/src/hooks/usePreviewImage.ts"
                    target="_blank"
                  >
                    깃허브
                  </a>
                  에서 확인하실 수 있습니다.
                </Li>
                <Li>
                  <S.FunctionTitle>convertImageFileToUrl</S.FunctionTitle> 이미지 파일을 인자로
                  전달하면 AWS S3에 업로드 하고 URL을 반환하는 함수입니다. browser image compression
                  라이브러리로 사용자의 별도 설정 없이도 이미지를 최적화하여 업로드합니다.
                  소스코드는{' '}
                  <a
                    href="https://github.com/whereismytree/frontend/blob/main/src/utils/imageUtils/convertImageFileToUrl.ts"
                    target="_blank"
                  >
                    깃허브
                  </a>
                  에서 확인하실 수 있습니다.
                </Li>
                <Li>
                  <S.FunctionTitle>Flyout</S.FunctionTitle>
                  컴파운드 컴포넌트 패턴을 활용해 구현한 headless한 컴포넌트입니다. Flyout UI의
                  기능을 재사용하기 위해 개발했습니다. 소스코드는{' '}
                  <a
                    href="https://github.com/whereismytree/frontend/blob/main/src/components/Flyout/index.tsx"
                    target="_blank"
                  >
                    깃허브
                  </a>
                  에서 확인하실 수 있습니다.
                </Li>
              </S.FunctionList>
            ),
          },

          {
            title: 'React Hook Form 도입',
            content:
              '복잡한 폼 데이터를 효율적으로 관리하기 위해 해당 라이브러리를 도입하였습니다.',
          },

          {
            title: '메인 페이지 UX 개선',
            content:
              '트리 상세 정보를 조회하고 메인 페이지로 돌아오는 경우 지도의 중심이 서울특별시청근처로 이동되었습니다. 사용자 경험을 위해 조회한 트리를 중심으로 지도가 보여지도록 개선하였습니다.',
          },

          {
            title: '에러 핸들링을 통한 UX 개선',
            content:
              'react error boundary 라이브러리를 활용해 에러를 정제하여 사용자에게 보여주었습니다. 다음 행동을 할 수 있게해 서비스의 신뢰도를 높이고 사용자 경험을 향상시켰습니다.',
          },
        ]}
        troubleShootings={[
          {
            title: '닉네임 설정 페이지 유효성 검사',
            content: (
              <p>
                초기 닉네임 인풋 하나만 존재하는 간단한 페이지였기에 render props를 염두에 두고
                개발하였습니다.
                <br />
                <br /> 기능을 구현하던 도중 유효성 검사가 동반되어야 했고 해결을 위해 react hook
                form 도입하였습니다. react hook form 을 도입한 이후 render props 패턴이 얽혀 코드
                베이스가 복잡해졌습니다. <br />
                <br />
                해결을 위해 Context API 기반의 FormProvider를 활용해 상태를 공유하여 해결했습니다.
                소스코드는{' '}
                <a
                  href="https://github.com/whereismytree/frontend/blob/main/src/pages/LoginPage/ProfileSetting/index.tsx"
                  target="_blank"
                >
                  깃허브
                </a>
                에서 확인하실 수 있습니다.
              </p>
            ),
          },

          {
            title: '서버의 획일화 된 응답 코드',
            content: (
              <p>
                모든 에러 상태 코드가 500으로 반환되었고, 이 때문에 사용자에게 에러에 대한 자세한
                정보를 제공하기 어려웠습니다.
                <br />
                <br /> 조금 더 자세한 정보를 제공하기 위해 백엔드와의 소통을 통해 token이 만료된
                경우 401 코드로 반환되도록 개선하였습니다.
                <img
                  width="100%"
                  src="https://web-portfolio-assets.s3.ap-northeast-2.amazonaws.com/error-boundary.png"
                />
              </p>
            ),
          },
        ]}
      />
    </Project>
  );
};

export default AsserTreeProject;
