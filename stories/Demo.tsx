import React from 'react';

import useFixedStyleWithIosKeyboard from '../src/useFixedStyleWithIosKeyboard';

const Demo: React.FC = () => {
  const { fixedTop, fixedBottom } = useFixedStyleWithIosKeyboard();
  return (
    <main className="wrapper">
      <header className="header" style={fixedTop}>
        Header
      </header>
      <div>
        <textarea className="textarea" placeholder="focus here" />
      </div>
      <footer className="footer" style={fixedBottom}>
        Footer
      </footer>
    </main>
  );
};

export default Demo;
