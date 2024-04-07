import React from 'react';
import Project from 'components/organism/Project';
import * as S from './Portfolio.style';

const PortfolioProject = () => {
  return (
    <Project
      title="포트폴리오 사이트"
      dateRange={{ start: '2023/03', end: '2024/04' }}
      link="https://portpolio.me/"
      techStacks={['React', 'Gatsby', 'TypeScript', 'Styled Components']}
    >
      <Project.Detail
        description="개인 포트폴리오 용도로 제작한 웹 사이트입니다. 애니메이션부터 디자인까지 모두 직접 구상하고 구현했습니다. 보셨던 애니메이션들은 모두 직접 구현했습니다."
        details={[
          {
            title: '타이핑 효과를 위한 기능 개발',
            content: (
              <>
                이미 많이 사용되는 라이브러리가 존재하지만 해당 기능을 직접 구현해보고 싶은 생각에
                typed.js의 인터페이스를 참고해 직접 구현했습니다. 소스코드는{' '}
                <a
                  href="https://github.com/KwanBeom/resume/blob/main/src/components/Atom/Typed/index.tsx"
                  target="_blank"
                >
                  여기
                </a>
                에서 확인하실 수 있습니다.
              </>
            ),
          },
          {
            title: '애니메이션을 위한 커스텀 훅 개발',
            content: (
              <>
                스크롤에 따라 부드러운 애니메이션을 적용하기 위해 스크롤 진행률을 백분율로 계산하여
                반환하는 기능을 구현했습니다.{' '}
                <a
                  href="https://github.com/KwanBeom/resume/blob/main/src/hooks/useScroll.ts"
                  target="_blank"
                >
                  useScroll
                </a>
                과{' '}
                <a
                  href="https://github.com/KwanBeom/resume/blob/main/src/hooks/usePercentage.ts"
                  target="_blank"
                >
                  usePercentage
                </a>{' '}
                두 개의 훅을 정의하고 두 기능을 혼합해 기능을 개발했습니다. throttle과 passive
                옵션을 활성화해 성능 최적화도 동반했습니다. 소스코드는{' '}
                <a
                  href="https://github.com/KwanBeom/resume/blob/main/src/hooks/useScrollPercentage.ts"
                  target="_blank"
                >
                  여기
                </a>
                에서 확인하실 수 있습니다.
              </>
            ),
          },
        ]}
        troubleShootings={[
          {
            title: '스크롤시마다 컴포넌트가 리렌더링 되어 성능 저하',
            content: (
              <>
                스크롤 애니메이션이 종료된 경우에도 스크롤시{' '}
                <a
                  href="https://github.com/KwanBeom/resume/blob/main/src/hooks/useScroll.ts"
                  target="_blank"
                >
                  useScroll
                </a>{' '}
                훅에서 상태의 업데이트가 일어나 불필요한 렌더링이 발생하고 성능이 저하되는 문제가
                발생했습니다. <br />
                <br />
                useScroll 훅에 인자로 요소에 대한 참조(ref)를 전달해 요소가 스크롤 영역을 벗어난
                경우 상태 업데이트가 발생하지 않도록 하여 스크립트 로드를 161ms → 17ms로 10배
                개선했습니다.
                <S.Flex>
                  <S.HarfImg
                    src="https://web-portfolio-assets.s3.ap-northeast-2.amazonaws.com/%08scroll-problem-before.png"
                    alt="성능 개선 이전 이미지"
                  />
                  <S.HarfImg
                    src="https://web-portfolio-assets.s3.ap-northeast-2.amazonaws.com/%08scroll-problem-after.png"
                    alt="성능 개선 이후 이미지"
                  />
                </S.Flex>
              </>
            ),
          },
          {
            title: '스크롤 진행률 계산 오류',
            content: (
              <>
                스크롤 진행률을 계산하려는 요소의 위치가 최상단이 아닌 경우 의도한대로 계산되지 않는
                문제가 발생했습니다. <br />
                <br />
                요소를 기준으로 스크롤 진행률을 계산해야 하기 때문에 계산하려는 요소에 대한
                참조(ref)를 인자로 전달받도록 하고, 스크롤이 해당 요소의 offsetTop 값을 초과한 경우
                진행률을 계산하게 개선했습니다.
                <br />
                <br /> 소스코드는{' '}
                <a
                  href="https://github.com/KwanBeom/resume/blob/main/src/hooks/useScrollPercentage.ts"
                  target="_blank"
                >
                  여기
                </a>
                에서 확인하실 수 있습니다.
              </>
            ),
          },
          {
            title: '애니메이션이 부드럽게 진행되지 않는 문제 발생',
            content: (
              <>
                <p>애니메이션이 부드럽게 진행되기 원했지만 뚝 끊겨 보이는 문제가 발생했습니다.</p>
                <S.Video controls>
                  <source
                    src="https://web-portfolio-assets.s3.ap-northeast-2.amazonaws.com/throttle-before.mov"
                    type="video/mp4"
                  />
                  브라우저가 video 태그를 지원하지 않습니다.
                </S.Video>
                쓰로틀을 제거해 부드럽게 애니메이션을 구현했지만, 성능의 저하가 우려되어 쓰로틀의
                주기를 10ms로 단축해 해결했습니다.
                <S.Video controls>
                  <source
                    src="https://web-portfolio-assets.s3.ap-northeast-2.amazonaws.com/throttle-resolve.mov"
                    type="video/mp4"
                  />
                  브라우저가 video 태그를 지원하지 않습니다.
                </S.Video>
              </>
            ),
          },
        ]}
      />
    </Project>
  );
};

export default PortfolioProject;
