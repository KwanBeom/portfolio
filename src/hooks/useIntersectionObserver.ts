import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = <T extends HTMLElement>(
  callback?: IntersectionObserverCallback,
  options?: IntersectionObserverInit | undefined,
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const target = useRef<T>(null);

  useEffect(() => {
    if (!target.current) return;

    const observer = new IntersectionObserver(
      entrires => {
        entrires.forEach(entry => {
          setIsIntersecting(entry.isIntersecting);
        });
        if (callback) callback(entrires, observer);
      },
      { ...options },
    );
    observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return { isIntersecting, ref: target };
};

export default useIntersectionObserver;
