import React from 'react';

import { useFixedStyleWithIOsKeyboard } from '../src';

type DemoProps = {
  fixed: boolean;
};

const Demo: React.FC<DemoProps> = ({ fixed }) => {
  const { fixedTop, fixedCenter, fixedBottom } = useFixedStyleWithIOsKeyboard();
  return (
    <main className="wrapper">
      <header className="header" style={fixed ? fixedTop : undefined}>
        Header
      </header>
      <div>
        <textarea className="textarea" placeholder="focus here" />
      </div>
      <div className="center" style={fixed ? fixedCenter : undefined}>
        Center
      </div>
      <footer className="footer" style={fixed ? fixedBottom : undefined}>
        Footer
      </footer>
    </main>
  );
};

export default Demo;
