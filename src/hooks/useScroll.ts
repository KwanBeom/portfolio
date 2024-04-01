import { useEffect, useState } from 'react';

const useScroll = () => {
  const [state, setState] = useState({ x: window.scrollX, y: window.scrollY });

  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return state;
};

export default useScroll;
