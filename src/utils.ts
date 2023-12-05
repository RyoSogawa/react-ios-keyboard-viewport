import { useEffect, useState } from 'react';

export const useIsIOs = () => {
  const [isIos, setIsIos] = useState(false);
  useEffect(() => {
    setIsIos(/iPhone|iPod/.test(navigator.userAgent));
  }, []);

  return isIos;
};
