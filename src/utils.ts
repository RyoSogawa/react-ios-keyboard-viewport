import { useEffect, useState } from 'react';

export const useIsIos = () => {
  const [isIos, setIsIos] = useState(false);
  useEffect(() => {
    setIsIos(/iPhone|iPod/.test(navigator.userAgent));
  }, []);

  return isIos;
};
