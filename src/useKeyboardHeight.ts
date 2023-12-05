import { useEffect, useState } from 'react';

const useKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
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

export default useKeyboardHeight;
