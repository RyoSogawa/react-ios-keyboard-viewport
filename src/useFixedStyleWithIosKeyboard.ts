import type React from 'react';

import useKeyboardHeight from './useKeyboardHeight';
import { useVisualViewportDistance } from './useVisualViewportDistance';
import { useIsIos } from './utils';

export type FixedStyle = {
  forTop: React.CSSProperties;
  forBottom: React.CSSProperties;
};

const useFixedStyleWithIosKeyboard = (): FixedStyle => {
  const { distance } = useVisualViewportDistance();
  const isIos = useIsIos();
  const keyboardHeight = useKeyboardHeight();
  const isKeyboardVisible = keyboardHeight > 0;
  const shouldApplyFixedStyle = isIos && isKeyboardVisible;

  if (!shouldApplyFixedStyle) {
    return {
      forTop: {},
      forBottom: {},
    };
  }

  return {
    forTop: {
      position: 'absolute',
      top: distance.forTop,
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
