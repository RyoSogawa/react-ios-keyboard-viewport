import { useEffect, useState } from 'react';

import { useIsIOs } from './utils';

export type Distance = {
  toTop: number;
  toBottom: number;
};

export const useViewportDistanceFromPageTop = () => {
  const [distance, setDistance] = useState<Distance>({
    toTop: 0,
    toBottom: 0,
  });
  const isIOs = useIsIOs();

  useEffect(() => {
    if (!isIOs) return;

    const calcHeight: EventListener = () => {
      setDistance({
        toTop: window.scrollY,
        toBottom: window.scrollY + (visualViewport?.height || 0),
      });
    };

    if (visualViewport) {
      visualViewport.addEventListener('resize', calcHeight);
    }
    window.addEventListener('scroll', calcHeight);

    return () => {
      if (visualViewport) {
        visualViewport.removeEventListener('resize', calcHeight);
      }
      window.removeEventListener('scroll', calcHeight);
    };
  }, [isIOs]);

  return {
    distance,
  };
};
