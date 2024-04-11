import React, { useEffect } from "react";

export default function Footer() {

    useEffect(() => {
        
    }, []);

    return (
        <footer className="footer">
            <div className="top newsletter">
                <div className="tpl-center">
                    <h2>Receba Nossa Newsletter</h2>

                    <form>
                        <input type="text" placeholder="Digite seu e-mail"/>
                        <input type="button" value="Enviar" />
                    </form>
                </div>
            </div>

            <div className="middle">
                <div className="tpl-center">
                    <div className="coluna coluna-1">
                        <h3>Informações</h3>

                        <ul className="itens">
                            <li className="item">
                                <a href="/quem-somos">
                                    Quem Somos
                                </a>
                            </li>

                            <li className="item">
                                <a href="/prazo-de-envio">
                                    Prazo de Envio
                                </a>
                            </li>

                            <li className="item">
                                <a href="/trocas-e-devolucoes">
                                    Trocas e Devoluções
                                </a>
                            </li>

                            <li className="item">
                                <a href="/promocoes-e-cupons">
                                    Promoções e Cupons
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="coluna coluna-2">
                        <h3>Minha Conta</h3>

                        <ul className="itens">
                            <li className="item">
                                <a href="/minha-conta">
                                    Minha Conta
                                </a>
                            </li>

                            <li className="item">
                                <a href="/meus-pedidos">
                                    Meus Pedidos
                                </a>
                            </li>

                            <li className="item">
                                <a href="/cadastre-se">
                                    Cadastre-se
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="coluna coluna-3">
                        <h3>Onde nos Encontrar</h3>

                        <ul className="itens">
                            <li className="item">
                                <a href="/lojas">
                                    Lojas
                                </a>
                            </li>

                            <li className="item">
                                <a href="/endereco">
                                    Endereço
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="tpl-center">
                    <ul className="itens redes">
                        <li className="item">
                            <a href={() => false}>
                                <img src="icone-facebook.png" alt="" />
                            </a>
                        </li>

                        <li className="item">
                            <a href={() => false}>
                                <img src="icone-linkedin.png" alt="" /> 
                            </a>
                        </li>

                        <li className="item">
                            <a href={() => false}>
                                <img src="icone-instagram.png" alt="" /> 
                            </a>
                        </li>

                        <li className="item">
                            <a href={() => false}>
                                <img src="icone-youtube.png" alt="" />
                            </a>
                        </li>
                    </ul>

                    <ul className="itens bandeiras">
                        <li className="item">
                            <img src="icone-bandeira-visa.png" alt="" />
                        </li>

                        <li className="item">
                            <img src="icone-bandeira-master.png" alt="" />
                        </li>

                        <li className="item">
                            <img src="icone-bandeira-visa.png" alt="" />
                        </li>

                        <li className="item">
                            <img src="icone-bandeira-master.png" alt="" />
                        </li>
                    </ul>

                    <ul className="itens desenvolvimento">
                        <li className="item">
                            <a href={() => false}>
                                <img src="logo-footer-vtex.png" alt="VTEX"/>
                            </a>
                        </li>

                        <li className="item">
                            <a href={() => false}>
                                <img src="logo-footer-maeztra.png" alt="Maeztra"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
