import { useEffect, useRef } from 'react';
import useScroll from './useScroll';
import usePercentage from './usePercentage';

const useScrollPercentage = <T extends HTMLElement>(
  sectionRef: React.MutableRefObject<T | null>,
) => {
  const { y } = useScroll(); // 현재 스크롤 위치
  const sectionHeight = useRef(0);
  const offsetTop = useRef(0); // 요소의 문서 상단으로부터의 절대 위치
  const { clientHeight } = document.documentElement;

  useEffect(() => {
    if (sectionRef.current) {
      sectionHeight.current = sectionRef.current.scrollHeight;
      offsetTop.current = sectionRef.current.getBoundingClientRect().top + window.scrollY;
    }
  }, [sectionRef]);

  // 스크롤이 요소 상단 여백을 지난 경우에만 퍼센티지 계산 시작
  const adjustedScrollY = Math.max(0, y - offsetTop.current);
  const effectiveScrollLength = sectionHeight.current - clientHeight;
  const percentage = usePercentage(adjustedScrollY, effectiveScrollLength);

  return percentage;
};

export default useScrollPercentage;
