import useIOsKeyboardHeight from './useIOsKeyboardHeight';
import useViewportDistanceFromPageTop from './useViewportDistanceFromPageTop';

import type { FixedStyle } from './types';

const useFixedStyleWithIOsKeyboard = (): FixedStyle => {
  const { toTop, toCenter, toBottom } = useViewportDistanceFromPageTop();
  const iOsKeyboardHeight = useIOsKeyboardHeight();
  const isIOsKeyboardVisible = iOsKeyboardHeight > 0;

  if (!isIOsKeyboardVisible) {
    return {
      fixedTop: {},
      fixedCenter: {},
      fixedBottom: {},
    };
  }

  return {
    fixedTop: {
      position: 'absolute',
      top: 0,
      transform: `translateY(${toTop}px)`,
    },
    fixedCenter: {
      position: 'absolute',
      top: 0,
      bottom: 'auto',
      transform: `translateY(calc(-50% + ${toCenter}px))`,
    },
    fixedBottom: {
      position: 'absolute',
      top: 0,
      bottom: 'auto',
      transform: `translateY(calc(-100% + ${toBottom}px))`,
    },
  };
};

export default useFixedStyleWithIOsKeyboard;
