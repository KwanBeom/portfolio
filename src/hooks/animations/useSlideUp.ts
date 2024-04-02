import { useEffect } from 'react';
import { AnimationHookProps } from './AnimationHookProps.type';

type SlideUpProps<T> = AnimationHookProps<T> & {
  moveDistance?: string;
  startPosition?: string;
};

const useSlideUp = <T extends HTMLElement>({
  ref,
  mode,
  moveDistance,
  startPosition,
}: SlideUpProps<T>) => {
  useEffect(() => {
    if (ref.current && startPosition) {
      ref.current.style.transform = `translateY(${startPosition})`;
    }
  }, []);

  const restore = () => {
    if (!ref.current) return;
    ref.current.animate([{ transform: 'translateY(0)', opacity: 1 }], { fill: 'forwards' });
  };

  const animations = {
    trigger: (during: number, cb?: () => void) => {
      if (!ref.current) return;
      const keyframe: Keyframe[] = [
        {
          transform: `translateY(-${moveDistance || '5vh'} )`,
        },
      ];
      const animateOptions: KeyframeAnimationOptions = {
        duration: during,
        fill: 'forwards',
      };

      ref.current.animate(keyframe, animateOptions);
      if (cb) setTimeout(cb, during);
    },

    percentage: (percentage: number) => {
      if (!ref.current || percentage > 100) return;
      // TODO: 퍼센티지에도 startPosition,moveDistance 적용 가능하도록 수정 필요
      ref.current.style.transform = `translateY(-${percentage / 10}vh)`;
    },
  };

  return { ref, trigger: animations[mode], restore };
};

export default useSlideUp;
