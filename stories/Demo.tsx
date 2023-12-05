import React from 'react';

import useFixedStyleWithIosKeyboard from '../src/useFixedStyleWithIosKeyboard';

const Demo: React.FC = () => {
  const { forTop, forBottom } = useFixedStyleWithIosKeyboard();
  return (
    <main className="wrapper">
      <header className="header" style={forTop}>
        Header
      </header>
      <div>
        <textarea className="textarea" placeholder="focus here" />
      </div>
      <footer className="footer" style={forBottom}>
        Footer
      </footer>
    </main>
  );
};

export default Demo;
