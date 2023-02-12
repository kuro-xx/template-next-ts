import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [size, setSize] = useState({ windowWidth: 0, windowHeight: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateSize = (): void => {
        setSize({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
      };

      window.addEventListener('resize', updateSize);
      updateSize();

      return () => window.removeEventListener('resize', updateSize);
    }
  }, []);
  return size;
};
