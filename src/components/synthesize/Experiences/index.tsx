import React from 'react';
import Experience from 'components/organism/Experience';
import SlideUpSection from 'components/organism/layout/SlideUpSection';

const Experiences = () => {
  return (
    <SlideUpSection title="Experiences">
      <Experience
        name="우아한테크코스 프리코스"
        during={{ start: '2023/10', end: '2023/11' }}
        learning={[
          '객체지향 프로그래밍 및 MVC 패턴에 대해 스스로 학습하고 적용했습니다.',
          'node.js 환경에서 입출력을 구현하며 런타임에 대한 지식을 익혔습니다.',
          ' Jest를 활용한 간단한 테스트 코드를 작성했습니다.',
        ]}
      />

      <Experience
        name="멋쟁이사자처럼"
        detail="프론트엔드 스쿨 5기"
        during={{ start: '2023/02', end: '2023/06' }}
        learning={[
          '웹 표준과 웹 접근성에 대해 학습했습니다.',
          '자바스크립트 ES6 문법에 대해 학습했습니다.',
          'React의 함수형 컴포넌트와 훅, Styled-Components를 학습하고 프로젝트를 진행했습니다.',
        ]}
      />

      <Experience
        name="서정대학교"
        detail="인터넷정보과"
        during={{ start: '2019', end: '2023' }}
        learning={[
          '2년간 웹 프로그래밍, 컴퓨터구조, 자료구조 등의 과목을 평균 평점 3.61으로 이수하였습니다.',
        ]}
      />
    </SlideUpSection>
  );
};

export default Experiences;
