import React from 'react';
import Font from 'components/Atom/Font';
import Typed from 'components/Atom/Typed';

const IntroduceTyped = () => {
  return (
    <Typed
      strings={['안녕하세요 :)', 'FE 개발자 최범관입니다']}
      typeSpeed={60}
      render={text => <Font.Title>{text}</Font.Title>}
      animate={true}
    />
  );
};

export default IntroduceTyped;
