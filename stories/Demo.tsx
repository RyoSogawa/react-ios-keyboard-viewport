import React from 'react';

const Demo: React.FC = () => {
  return (
    <main className="wrapper">
      <header className="header">Header</header>
      <div>
        <textarea className="textarea" placeholder="focus here" />
      </div>
      <footer className="footer" >
        Footer
      </footer>
    </main>
  );
};

export default Demo;
