import { AnimationHookProps } from './AnimationHookProps.type';

type ZoomInProps<T> = AnimationHookProps<T> & {
  zoomScale?: number;
};

const useZoomIn = <T extends HTMLElement>({ ref, mode, zoomScale = 1.2 }: ZoomInProps<T>) => {
  const restore = () => {
    if (!ref.current) return;
    ref.current.animate([{ opacity: 1 }], { fill: 'forwards' });
  };

  const animations = {
    trigger: (during: number) => {
      if (!ref.current) return;
      const keyframe: Keyframe[] = [
        {
          scale: zoomScale,
        },
      ];
      const animateOptions: KeyframeAnimationOptions = {
        duration: during,
        fill: 'forwards',
      };

      ref.current.animate(keyframe, animateOptions);
    },

    percentage: (percentage: number) => {
      if (!ref.current || percentage > 100) return;
      const onePercentScale = (zoomScale - 1) / 100;

      ref.current.style.scale = String(1 + onePercentScale * percentage);
    },
  };

  return {
    ref,
    trigger: animations[mode],
    restore,
  };
};

export default useZoomIn;
