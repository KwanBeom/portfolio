import { AnimationHookProps } from './AnimationHookProps.type';

const useSlideUp = <T extends HTMLElement>({ ref, mode }: AnimationHookProps<T>) => {
  const restore = () => {
    if (!ref.current) return;
    ref.current.animate([{ transform: 'translateY(0)', opacity: 1 }], { fill: 'forwards' });
  };

  const animations = {
    trigger: (during: number, cb?: () => void) => {
      if (!ref.current) return;
      const keyframe: Keyframe[] = [
        {
          transform: 'translateY(-100%)',
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
      console.log((100 - percentage) * 0.01);
      ref.current.style.transform = `translateY(-${percentage}%)`;
    },
  };

  return { ref, trigger: animations[mode], restore };
};

export default useSlideUp;
