import React, { useEffect } from "react";

export default function Shelf({produtos}) {
    useEffect(() => {
    }, []);
    
    return (
        <>
            <li className="shelf" id={produtos.id}>
                <div className="foto foto1">
                    <img src={produtos.images[0]} alt=""/>
                </div>
                <div className="foto foto2">
                    <img src={produtos.images[1]} alt=""/>
                </div>
                <div className="wrapper">
                    <div className="skus">
                        <div className="sku cor verde"></div>
                        <div className="sku cor vermelho"></div>
                        <div className="sku cor amarelo"></div>
                    </div>
                    <div className="preco">
                        {produtos.price.toLocaleString('pt-BR', {
                            style: 'currency', 
                            currency: 'BRL'
                        })}
                    </div>
                    <div className="nome">
                        <h3>{produtos.title}</h3>
                    </div>
                    <div className="descricao">
                        <p>{produtos.description}</p>
                    </div>
                    <a href={() => false} className="adicionar">
                        Adicionar
                    </a>
                </div>
            </li>
        </>
    );
}
