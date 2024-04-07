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
            통신병으로 복무 중 개발한 서비스입니다. 재생해야 하는 음원 혹은 방송 멘트를 시간에 맞춰
            레이어 모달로 띄우는 어플리케이션입니다. 비효율적인 작업을 웹 서비스를 통해 자동화하고
            편리한 근무 환경을 조성하기 위해 개발했습니다.
            <br />
            <br />
            소스코드가 군 내부망에 존재합니다.
          </>
        }
        details={[
          {
            title: '메모장 활용 서비스 개발',
            content:
              'IDE를 활용할 수 없는 환경이었기에 메모장을 사용해 해당 프로젝트를 개발하였습니다.',
          },
        ]}
        troubleShootings={[
          {
            title: '환경의 제약',
            content:
              '군 내부 인트라넷 망 PC였기 때문에 구현하고 싶은 기능에 대한 정보를 바로 찾아볼 수 없었습니다. 개인정비 시간을 활용해 검색하고, 글로 기록해 부족한 부분을 채워나가며 서비스를 개발했습니다.',
          },
        ]}
      />
    </Project>
  );
};

export default BroadcastSystem;
