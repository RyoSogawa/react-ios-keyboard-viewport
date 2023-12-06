import { useEffect, useState } from 'react';

import { isIOs } from './utils';

import type { Distance } from './types';

const useViewportDistanceFromPageTop = () => {
  const [distance, setDistance] = useState<Distance>({
    toTop: 0,
    toCenter: 0,
    toBottom: 0,
  });

  useEffect(() => {
    if (!isIOs()) return;

    const calcHeight: EventListener = () => {
      const top = window.scrollY;
      const bottom = window.scrollY + (visualViewport?.height || 0);
      setDistance({
        toTop: top,
        toCenter: top + (bottom - top) / 2,
        toBottom: bottom,
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
  }, []);

  return distance;
};

export default useViewportDistanceFromPageTop;
