import type React from 'react';

/**
 * A style object specifically for elements fixed in position when the iOS keyboard is visible.
 */
export type FixedStyle = {
  fixedTop: React.CSSProperties;
  fixedCenter: React.CSSProperties;
  fixedBottom: React.CSSProperties;
};

/**
 * Distance from the top of the viewport to the top, center, and bottom of the page.
 */
export type Distance = {
  toTop: number;
  toCenter: number;
  toBottom: number;
};

export type Target = HTMLElement | Element | Window | Document | null | undefined;
