import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

const useScroll = <T extends HTMLElement>(ref?: React.MutableRefObject<T | null>) => {
  if (typeof window === 'undefined') return { x: 0, y: 0 };

  const [state, setState] = useState({ x: window.scrollX, y: window.scrollY });
  const { clientHeight } = document.documentElement;

  const onScroll = throttle(() => {
    if (ref) {
      if (ref.current && ref.current.scrollHeight + clientHeight > window.scrollY) {
        setState({ x: window.scrollX, y: window.scrollY });
      }
    } else {
      setState({ x: window.scrollX, y: window.scrollY });
    }
  }, 10);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      onScroll.cancel();
    };
  }, []);

  return state;
};

export default useScroll;
