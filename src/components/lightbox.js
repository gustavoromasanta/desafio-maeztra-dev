import React, { useEffect } from "react";

export default function Lightbox() {
    useEffect(() => {
        function criaCookie(chave, value) {
            var expira = new Date();
            expira.setTime(expira.getTime() + 72000000);
            document.cookie = chave + '=' + value + ';expires=' + expira.toUTCString();
        }
        
        function lerCookie(chave) {
            var ChaveValor = document.cookie.match('(^|;) ?' + chave + '=([^;]*)(;|$)');
            return ChaveValor ? ChaveValor[2] : null;
        }
        
        function checkCokie() {
            if (lerCookie('acessadoNew')) {
                return false;
            } else {
                document.getElementById("newsModal").classList.add("ativo");
                criaCookie('acessadoNew', 'true');
            }
        }
        checkCokie();

        var close = document.getElementsByClassName('close');
        close[0].addEventListener('click', function() {
            document.getElementById("newsModal").classList.remove("ativo");
        });
    }, []);
    
    return (
        <>
            <div id="newsModal">
                <div class="overlay"></div>

                <div class="content">
                    <button class="close">FECHAR</button>
                    
                    <div class="cadastroNews">
                        <div class="left">
                            <img src="homem.png" alt=""/>
                        </div>

                        <div class="right">
                            <div class="top">
                                <img src="newsletter-mail-icon.png" alt="" />
                                <p>Bem Vindo à Maeztra</p>
                                <h3>Receba em Primeira mãe<strong>desonto e ofertas exclusivas</strong></h3>
                            </div>

                            <form>
                                <input type="text" placeholder="Digite seu e-mail"/>
                                <input type="button" value="Enviar" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
