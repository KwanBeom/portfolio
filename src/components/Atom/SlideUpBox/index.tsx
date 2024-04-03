import React, { useEffect, useRef } from 'react';
import useFadeIn from 'hooks/animations/useFadeIn';
import useSlideUp from 'hooks/animations/useSlideUp';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { SlideUpBoxProps } from './SlideUpBox.type';
import * as S from './SlideUpBox.style';

const SlideUpBox = ({ margin, padding, children, during = 1000 }: SlideUpBoxProps) => {
  const isTriggered = useRef(false);
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();
  const { trigger: slideUp } = useSlideUp({
    ref,
    mode: 'trigger',
    startPosition: '10vh',
    moveDistance: '0',
  });
  const { trigger: fadeIn } = useFadeIn({ ref, mode: 'trigger' });

  useEffect(() => {
    if (isIntersecting && !isTriggered.current) {
      slideUp(during);
      fadeIn(during);
      isTriggered.current = true;
    }
  }, [isIntersecting]);

  return (
    <S.Box margin={margin} padding={padding} ref={ref}>
      {children}
    </S.Box>
  );
};

export default SlideUpBox;
