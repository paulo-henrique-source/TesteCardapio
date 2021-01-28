import React from 'react';
import Header from '../header/index';
import Orders from '../pedidos/index';
import '../js/main';

function Pedidos() {
  return (
    <div className="Home">
      <header>
        <Header />
      </header>

      <div className="master_content">
        <Orders />
      </div>

    </div>
  );
}

export default Pedidos;
