import React, { useEffect, useRef } from 'react';
import Font from 'components/atom/Font';
import Typed from 'components/atom/Typed';
import useFadeOut from 'hooks/animations/useFadeOut';
import useZoomIn from 'hooks/animations/useZoomIn';
import useFadeIn from 'hooks/animations/useFadeIn';
import useScrollPercentage from 'hooks/useScrollPercentage';
import * as S from './Greet.style';

const Greet = () => {
  const introRef = useRef(null);
  const guideRef = useRef(null);
  const sectionRef = useRef<HTMLTableSectionElement>(null);
  const scrollPercentage = useScrollPercentage(sectionRef);

  // animations
  const { trigger: introFadeOut } = useFadeOut<HTMLDivElement>({
    ref: introRef,
    mode: 'percentage',
  });
  const { trigger: introZoomIn } = useZoomIn({ ref: introRef, mode: 'percentage', zoomScale: 1.5 });
  const { trigger: guideFadeIn } = useFadeIn({ ref: guideRef, mode: 'trigger' });
  const { trigger: guideFadeOut } = useFadeOut({ ref: guideRef, mode: 'percentage' });

  const handleTypedSuccess = () => {
    setTimeout(() => {
      document.body.style.overflow = 'scroll';
      guideFadeIn(1000);
    }, 1000);
  };

  useEffect(() => {
    guideFadeOut(scrollPercentage * 3);
    introFadeOut(scrollPercentage > 95 ? scrollPercentage : scrollPercentage / 2);
    introZoomIn(scrollPercentage * 2);
  }, [scrollPercentage]);

  return (
    <S.Section ref={sectionRef}>
      <S.Fixed ref={introRef}>
        <Typed
          strings={['안녕하세요 :)', 'FE 개발자 최범관입니다']}
          typeSpeed={60}
          render={text => (
            <Font.XXLarge as="span" color="secondary">
              {text}
            </Font.XXLarge>
          )}
          animate={true}
          onSuccess={handleTypedSuccess}
        />
      </S.Fixed>

      <S.ScrollGuide ref={guideRef} color="secondary">
        아래로 내려주세요
      </S.ScrollGuide>
    </S.Section>
  );
};

export default Greet;
