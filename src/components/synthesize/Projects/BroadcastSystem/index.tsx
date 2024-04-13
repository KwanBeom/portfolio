import React from 'react';
import Project from 'components/organism/Project';

const BroadcastSystem = () => {
  return (
    <Project
      title="방송 관리 시스템"
      dateRange={{ start: '2021/04', end: '2021/06' }}
      techStacks={['HTML', 'CSS', 'JQuery']}
    >
      <Project.Detail
        description={
          <>
            현역 통신병으로 군 복무 중 개발한 서비스로 대대 내부 방송을 자동화하여 음원 또는 멘트를
            출력하는 웹 서비스입니다.
            <br />
            <br />
            재생해야 하는 음원 혹은 방송 멘트를 찾는 비효율적인 작업을 웹 서비스를 통해 자동화하고
            편리한 근무 환경을 조성하기 위해 개발했습니다.
            <br />
            <br />
            서비스 런칭 이후 지휘통제실 상황병 버전으로 개발을 요청받아 솔루션을 제공했습니다.
            소스코드가 군 내부에 존재합니다.
          </>
        }
      />
    </Project>
  );
};

export default BroadcastSystem;
