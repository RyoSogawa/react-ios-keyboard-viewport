import { useEffect, useState } from 'react';

import { isIOs } from './utils';

import type { Distance, Target } from './types';

export type UseViewportDistanceFromPageTopProps = {
  target?: Target;
};

const useViewportDistanceFromPageTop = (
  { target }: UseViewportDistanceFromPageTopProps = {
    target: undefined,
  },
) => {
  const [distance, setDistance] = useState<Distance>({
    toTop: 0,
    toCenter: 0,
    toBottom: 0,
  });

  useEffect(() => {
    if (!isIOs()) return;

    const calcHeight: EventListener = () => {
      const top = (() => {
        if (!target) return window.scrollY;
        if (target instanceof HTMLElement || target instanceof Element) return target.scrollTop;
        if (target instanceof Document) return target.documentElement.scrollTop;
        return window.scrollY;
      })();
      const bottom = top + (visualViewport?.height || 0);
      setDistance({
        toTop: top,
        toCenter: top + (bottom - top) / 2,
        toBottom: bottom,
      });
    };

    if (visualViewport) {
      visualViewport.addEventListener('resize', calcHeight);
    }
    const targetElement = target || window;
    targetElement.addEventListener('scroll', calcHeight);

    return () => {
      if (visualViewport) {
        visualViewport.removeEventListener('resize', calcHeight);
      }
      targetElement.removeEventListener('scroll', calcHeight);
    };
  }, [target]);

  return distance;
};

export default useViewportDistanceFromPageTop;
