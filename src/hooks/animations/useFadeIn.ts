import { AnimationHookProps } from './AnimationHookProps.type';

const useFadeIn = <T extends HTMLElement>({ ref, mode }: AnimationHookProps<T>) => {
  const restore = () => {
    if (!ref.current) return;
    ref.current.animate([{ opacity: 0 }], { fill: 'forwards' });
  };

  const animations = {
    trigger: (during: number) => {
      if (!ref.current) return;

      const keyframe: Keyframe[] = [{ opacity: 1, visibility: 'visible' }];
      const animateOptions: KeyframeAnimationOptions = {
        duration: during,
      };

      setTimeout(() => {
        ref.current!.style.opacity = '1';
      }, during);

      ref.current.animate(keyframe, animateOptions);
    },

    percentage: (percentage: number) => {
      if (!ref.current) return;

      ref.current.style.opacity = String(1 - (100 - percentage) * 0.01);
    },
  };

  return {
    ref,
    trigger: animations[mode],
    restore,
  };
};

export default useFadeIn;
