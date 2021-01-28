import React, { useState, Fragment } from 'react';
import { Button } from 'reactstrap';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function Cadastro() {

    const [data, setData] = useState({
        cep: "",
        street: "",
        city: "",
        neighborhood: ""
    })

    function handle(e) {
        e.preventDefault()
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
    }

    function onBlurCep(e) {
        const { value } = e.target
        const cep = value?.replace(/[^0-9]/g, '')

        if (cep?.length !== 8) {
            return
        }

        fetch(`https://viacep.com.br/ws/${value}/json/`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                document.getElementById('street').value = data.logradouro
                document.getElementById('city').value = data.localidade
                document.getElementById('neighborhood').value = data.bairro
            })
    }

    return (
        <Fragment>

            <div className="body_cadastro">
                <div id="header">
                    <a href="/">
                        <img className="Restaurante" src='iconDefault.png' alt='logo'></img>
                    </a>
                </div>



                <div id="container_cadastro">
                    <div className="elemento">
                        <div id="last_page">
                            <NavLink to="/">
                                <span>
                                    <FontAwesomeIcon icon="arrow-left" size="2x" id="b_lp" />
                                </span>
                            </NavLink>
                        </div>

                        <div className="elemento_title">
                            <h4>Informações Pessoais</h4>
                            <hr />
                        </div>

                        <div className="elemento_container">
                            <div className="cadastro_box">
                                <label htmlFor="inp" className="inp">
                                    <input type="text" id="inp" placeholder="&nbsp;"></input>
                                    <span className="label">Nome Completo</span>
                                    <span className="focus-bg"></span>
                                </label>
                            </div>
                            <div className="cadastro_box">
                                <label className="inp">
                                    <input type="text" id="inp" placeholder="&nbsp;"></input>
                                    <span className="label">Apelido/Nome Fantasia</span>
                                    <span className="focus-bg"></span>
                                </label>
                            </div>
                            <div className="cadastro_box">
                                <label className="inp">
                                    <input type="text" id="inp" placeholder="&nbsp;"></input>
                                    <span className="label">CPF/CNPJ</span>
                                    <span className="focus-bg"></span>
                                </label>
                            </div>

                            <div className="cadastro_box">
                                <label className="inp">
                                    <input type="date" id="inp" placeholder="&nbsp;"></input>
                                    <span className="label">Data de Nascimento</span>
                                    <span className="focus-bg"></span>
                                </label>
                            </div>
                            <div className="cadastro_box">
                                <label className="inp">
                                    <input type="text" id="inp" placeholder="&nbsp;"></input>
                                    <span className="label">Telefone</span>
                                    <span className="focus-bg"></span>
                                </label>
                            </div>
                            <div className="cadastro_box">
                                <label className="inp">
                                    <input type="email" id="inp" placeholder="&nbsp;"></input>
                                    <span className="label">E-mail</span>
                                    <span className="focus-bg"></span>
                                </label>
                            </div>
                        </div>

                        <div className="elemento_title">
                            <h4>Endereço</h4>
                            <hr />
                        </div>
                        <div className="elemento_container">
                            <div className="cadastro_box">
                                <label className="inp">
                                    <input type="text" id="cep" placeholder="&nbsp;" value={data.cep} onBlur={onBlurCep} onChange={(e) => handle(e)}></input>
                                    <span className="label">CEP</span>
                                    <span className="focus-bg"></span>
                                </label>
                            </div>
                            <div className="cadastro_box">
                                <label className="inp">
                                    <input type="text" id="city" placeholder="&nbsp;" value={data.city} onChange={(e) => handle(e)}></input>
                                    <span className="label">Município</span>
                                    <span className="focus-bg"></span>
                                </label>
                            </div>
                            <div className="cadastro_box">
                                <label className="inp">
                                    <input type="text" id="street" placeholder="&nbsp;" value={data.street} onChange={(e) => handle(e)}></input>
                                    <span className="label">Rua</span>
                                    <span className="focus-bg"></span>
                                </label>
                            </div>
                            <div className="cadastro_box">
                                <label className="inp">
                                    <input type="text" id="number" placeholder="&nbsp;"></input>
                                    <span className="label">Número</span>
                                    <span className="focus-bg"></span>
                                </label>
                            </div>
                            <div className="cadastro_box">
                                <label className="inp">
                                    <input type="text" id="comp" placeholder="&nbsp;"></input>
                                    <span className="label">Complemento</span>
                                    <span className="focus-bg"></span>
                                </label>
                            </div>
                            <div className="cadastro_box">
                                <label className="inp">
                                    <input type="text" id="neighborhood" placeholder="&nbsp;" value={data.neighborhood} onChange={(e) => handle(e)}></input>
                                    <span className="label">Bairro</span>
                                    <span className="focus-bg"></span>
                                </label>
                            </div>
                        </div>

                        <div className="elemento_title">
                            <h4>Senha</h4>
                            <hr />
                        </div>

                        <div className="elemento_container">
                            <div className="cadastro_box">
                                <label className="inp">
                                    <input type="password" id="password" placeholder="&nbsp;"></input>
                                    <span className="label">Criar Senha</span>
                                    <span className="focus-bg"></span>
                                </label>
                            </div>
                            <div className="cadastro_box">
                                <label className="inp">
                                    <input type="password" id="confirm_password" placeholder="&nbsp;"></input>
                                    <span className="label">Confirmar Senha</span>
                                    <span className="focus-bg"></span>
                                </label>
                            </div>
                        </div>
                        <Button color="primary" size="md" className="b_submit">Criar Conta</Button>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default Cadastro;