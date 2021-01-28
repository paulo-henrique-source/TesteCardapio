import React from 'react';
import './home.css';
import Header from '../header/index';
import Content from '../content/index';
import Main from '../js/main2';

function Home() {
  return (
    <div className="Home">
      <Main/>
      <header>
        <Header />
      </header>

      <div className="master_content">
        <Content />
      </div>

    </div>
  );
}

export default Home;