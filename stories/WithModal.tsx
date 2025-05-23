import React, { useRef } from 'react';

import { useWindowHeight } from './WithModal.hooks';
import { useFixedStyleWithIOsKeyboard } from '../src';

export type WithTargetProps = {
  fixed: boolean;
};

const WithModal: React.FC<WithTargetProps> = ({ fixed }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { fixedTop, fixedCenter, fixedBottom } = useFixedStyleWithIOsKeyboard({
    target: ref.current,
  });
  const windowHeight = useWindowHeight();

  return (
    <main ref={ref} className="modal" style={{ height: windowHeight }}>
      <div className="wrapper wrapper--relative">
        <input className="textbox" placeholder="focus here and scroll down..." />
        <div className="gradient" />
        <header className="header" style={fixed ? fixedTop : undefined}>
          Header
        </header>
        <div className="center" style={fixed ? fixedCenter : undefined}>
          Center
        </div>
        <footer className="footer" style={fixed ? fixedBottom : undefined}>
          Footer
        </footer>
      </div>
    </main>
  );
};

export default WithModal;
