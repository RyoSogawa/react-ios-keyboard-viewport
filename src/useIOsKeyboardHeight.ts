import { useEffect, useState } from 'react';

import { isIOs } from './utils';

const useIOsKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    if (!isIOs()) return;

    const handleResize = () => {
      if (!visualViewport) return;
      const keyboardVisible = visualViewport.height < window.innerHeight;
      const newKeyboardHeight = keyboardVisible ? window.innerHeight - visualViewport.height : 0;
      setKeyboardHeight(newKeyboardHeight);
    };

    if (visualViewport) {
      visualViewport.addEventListener('resize', handleResize);
    }

    return () => {
      if (visualViewport) {
        visualViewport.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return keyboardHeight;
};

export default useIOsKeyboardHeight;
