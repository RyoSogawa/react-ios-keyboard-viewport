import type React from 'react';

import useKeyboardHeight from './useKeyboardHeight';
import { useViewportDistanceFromPageTop } from './useViewportDistanceFromPageTop';
import { useIsIOs } from './utils';

export type FixedStyle = {
  fixedTop: React.CSSProperties;
  fixedCenter: React.CSSProperties;
  fixedBottom: React.CSSProperties;
};

const useFixedStyleWithIosKeyboard = (): FixedStyle => {
  const { toTop, toCenter, toBottom } = useViewportDistanceFromPageTop();
  const isIOs = useIsIOs();
  const keyboardHeight = useKeyboardHeight();
  const isKeyboardVisible = keyboardHeight > 0;
  const shouldApplyFixedStyle = isIOs && isKeyboardVisible;

  if (!shouldApplyFixedStyle) {
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

export default useFixedStyleWithIosKeyboard;
