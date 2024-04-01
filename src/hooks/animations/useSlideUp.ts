import { useRef } from 'react';

const useSlideUp = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);

  const restore = () => {
    if (!ref.current) return;
    ref.current.animate([{ transform: 'translateY(0)', opacity: 1 }], { fill: 'forwards' });
  };

  const trigger = (during: number, cb?: () => void) => {
    if (!ref.current) return;
    const keyframe: Keyframe[] = [
      {
        opacity: 1,
      },
      {
        transform: 'translateY(-100%)',
        opacity: 0,
      },
    ];
    const animateOptions: KeyframeAnimationOptions = {
      duration: during,
      fill: 'forwards',
    };

    ref.current.animate(keyframe, animateOptions);
    if (cb) setTimeout(cb, during);
  };

  return { ref, trigger, restore };
};

export default useSlideUp;
