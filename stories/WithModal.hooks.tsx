import { useEffect, useState } from 'react';

import useIOsKeyboardHeight from '../src/useIOsKeyboardHeight';

/**
 * Custom hook to get the window height minus the keyboard height on iOS devices.
 */
export const useWindowHeight = () => {
  const keyboardHeight = useIOsKeyboardHeight();
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    console.log(window.innerHeight, keyboardHeight);
    setWindowHeight(window.innerHeight - keyboardHeight);
  }, [keyboardHeight]);

  return windowHeight;
};
