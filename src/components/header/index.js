import React from 'react';
import './styles.css';
import Swal from 'sweetalert2';

function Header() {
  return (


    <div className="Header">

      <div>
        <a href="/">
          <img className="Restaurante" src='iconDefault.png' alt='logo'></img>
        </a>

      </div>

      <div id="botoes_header">

        <div>
          <button className="login" onClick={(e) => {
            e.preventDefault()
            Swal.fire({
              title: 'Login',
              html:
                `
                <div className="box">
                    <div id="login_info">
                        <div class="login_card">
                            <p>E-mail </p>
                            <input id="user" type="email" class="login_text"></input>
                        </div>
                        <div class="login_card">
                        <p>Senha </p>
                            <input id="password" type="password" class="login_text"></input>
                        </div>
                    </div>
                    <div id="login_fotter">
                        <p>Esquecei a senha</p>
                        <a href='/register'> <p>Criar conta</p> </a>
                    </div>
                </div>
    
            </div>
                `,
              allowOutsideClick: true,
              showCloseButton: true,
              confirmButtonText: `Entrar`


            })
          }}> Login </button>
        </div>

        <div>
          <button id="pedidos" className="login" onClick={(e) => {
            e.preventDefault()
            window.location.href = '/orders'
          }}> Meus Pedidos </button>
        </div>
      </div>

    </div>
  );
}

export default Header;
