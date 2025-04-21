import React, { useRef } from 'react';

import { useFixedStyleWithIOsKeyboard } from '../src';

export type WithTargetProps = {
  fixed: boolean;
};

const WithModal: React.FC<WithTargetProps> = ({ fixed }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { fixedTop, fixedCenter, fixedBottom } = useFixedStyleWithIOsKeyboard({
    target: ref.current,
  });

  return (
    <main ref={ref} className="modal">
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
