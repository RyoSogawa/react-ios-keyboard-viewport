import { useEffect, useState } from 'react';

export type Distance = {
  forTop: number;
  forBottom: number;
};

export const useVisualViewportDistance = () => {
  const [distance, setDistance] = useState<Distance>({
    forTop: 0,
    forBottom: 0,
  });

  useEffect(() => {
    const calcHeight: EventListener = () => {
      setDistance({
        forTop: window.scrollY,
        forBottom: window.scrollY + (visualViewport?.height || 0),
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

  return {
    distance,
  };
};
