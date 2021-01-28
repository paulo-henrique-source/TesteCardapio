import React from 'react';
import './styles.css';

function Login() {
    return (
        <div className="box">
            <div id="login_box_aux">
                <div id="login_info">
                    <div>
                        Usuário
                    </div>
                    <div>
                        Senha
                    </div>
                </div>
                <div id="login_fotter">
                    <p>Esquecei a senha</p>
                    <p>Criar conta</p>
                </div>
            </div>

        </div>
    );
}

export default Login;