import React, { useEffect, useRef } from 'react';
import * as S from './ScrollActivateIntro.style';
import Font from 'components/atom/Font';
import useSlideUp from 'hooks/animations/useSlideUp';
import useScrollPercentage from 'hooks/useScrollPercentage';
import useFadeIn from 'hooks/animations/useFadeIn';

const ScrollActivateIntro = () => {
  const sectionRef = useRef(null);
  const MoreRef = useRef<HTMLDivElement>(null);
  const { trigger: slideUp } = useSlideUp({ ref: MoreRef, mode: 'percentage' });
  const { trigger: fadeIn } = useFadeIn({ ref: MoreRef, mode: 'percentage' });
  const scrollPercentage = useScrollPercentage(sectionRef);

  useEffect(() => {
    slideUp(scrollPercentage * 3);
    fadeIn(scrollPercentage * 3);
  }, [scrollPercentage]);

  return (
    <S.Section ref={sectionRef}>
      <S.Sticky>
        <Font.XLarge color="secondary">유연한 개발자가 되는것에 관심이 있습니다</Font.XLarge>
      </S.Sticky>
      <S.MoreText ref={MoreRef}>
        <Font.Medium color="secondary">더 알아보기</Font.Medium>
      </S.MoreText>
    </S.Section>
  );
};

export default ScrollActivateIntro;
