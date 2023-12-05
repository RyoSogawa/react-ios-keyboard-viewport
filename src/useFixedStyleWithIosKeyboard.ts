import type React from 'react';

import useKeyboardHeight from './useKeyboardHeight';
import { useVisualViewportDistance } from './useVisualViewportDistance';
import { useIsIOs } from './utils';

export type FixedStyle = {
  forTop: React.CSSProperties;
  forBottom: React.CSSProperties;
};

const useFixedStyleWithIosKeyboard = (): FixedStyle => {
  const { distance } = useVisualViewportDistance();
  const isIOs = useIsIOs();
  const keyboardHeight = useKeyboardHeight();
  const isKeyboardVisible = keyboardHeight > 0;
  const shouldApplyFixedStyle = isIOs && isKeyboardVisible;

  if (!shouldApplyFixedStyle) {
    return {
      forTop: {},
      forBottom: {},
    };
  }

  return {
    forTop: {
      position: 'absolute',
      top: 0,
      transform: `translateY(${distance.forTop}px)`,
    },
    forBottom: {
      position: 'absolute',
      top: 0,
      bottom: 'auto',
      transform: `translateY(calc(-100% + ${distance.forBottom}px))`,
    },
  };
};

export default useFixedStyleWithIosKeyboard;
