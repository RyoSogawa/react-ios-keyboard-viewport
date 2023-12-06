import React from 'react';

import { useFixedStyleWithIOsKeyboard } from '../src';

const Demo: React.FC = () => {
  const { fixedTop, fixedCenter, fixedBottom } = useFixedStyleWithIOsKeyboard();
  return (
    <main className="wrapper">
      <header className="header" style={fixedTop}>
        Header
      </header>
      <div>
        <textarea className="textarea" placeholder="focus here" />
      </div>
      <div className="center" style={fixedCenter}>
        Center
      </div>
      <footer className="footer" style={fixedBottom}>
        Footer
      </footer>
    </main>
  );
};

export default Demo;
