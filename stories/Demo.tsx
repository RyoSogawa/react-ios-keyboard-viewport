import React from 'react';

import { useVisualViewportDistance } from '../src/useVisualViewportDistance';

const Demo: React.FC = () => {
  const { distance } = useVisualViewportDistance();
  return (
    <main className="wrapper">
      <header
        className="header"
        style={{
          position: 'absolute',
          top: distance.forTop,
        }}
      >
        Header
      </header>
      <div>
        <textarea className="textarea" placeholder="focus here" />
      </div>
      <footer
        className="footer"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 'auto',
          transform: `translateY(calc(-100% + ${distance.forBottom}px))`,
        }}
      >
        Footer
      </footer>
    </main>
  );
};

export default Demo;
