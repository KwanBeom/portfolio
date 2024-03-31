import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

const useScroll = () => {
  const [state, setState] = useState({ x: window.scrollX, y: window.scrollY });

  const onScroll = throttle(() => {
    setState({ x: window.scrollX, y: window.scrollY });
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      onScroll.cancel();
    };
  }, []);

  return state;
};

export default useScroll;
