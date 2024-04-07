import { AnimationHookProps } from './AnimationHookProps.type';

const useFadeOut = <T extends HTMLElement>({ ref, mode }: AnimationHookProps<T>) => {
  const restore = () => {
    if (!ref.current) return;
    ref.current.animate([{ opacity: 1 }], { fill: 'forwards' });
  };

  const animations = {
    trigger: (during: number) => {
      if (!ref.current) return;
      const keyframe: Keyframe[] = [
        {
          opacity: 1,
        },
        {
          opacity: 0,
        },
      ];
      const animateOptions: KeyframeAnimationOptions = {
        duration: during,
        fill: 'forwards',
      };

      ref.current.animate(keyframe, animateOptions);
    },

    percentage: (percentage: number) => {
      if (!ref.current) return;

      if (percentage >= 100) {
        ref.current.style.visibility = 'hidden';
      } else {
        ref.current.style.visibility = 'visible';
      }

      ref.current.style.opacity = String((100 - percentage) * 0.01);
    },
  };

  return {
    ref,
    trigger: animations[mode],
    restore,
  };
};

export default useFadeOut;
