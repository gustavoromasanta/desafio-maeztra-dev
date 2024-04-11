import React, { useEffect } from "react";

export default function Marcas() {

    useEffect(() => {
        
    }, []);

    return (
        <div className="marcas">
            <div className="tpl-center">
                <h2>Marcas Parceiras</h2>

                <ul className="itens">
                    <li className="item item01">
                        <a href={() => false}>
                            <img src="logo-forever21.png" alt="" />
                        </a>
                    </li>

                    <li className="item item02">
                        <a href={() => false}>
                            <img src="logo-forever21.png" alt="" />
                        </a>
                    </li>

                    <li className="item item03">
                        <a href={() => false}>
                            <img src="logo-forever21.png" alt="" />
                        </a>
                    </li>

                    <li className="item item04">
                        <a href={() => false}>
                            <img src="logo-forever21.png" alt="" />
                        </a>
                    </li>

                    <li className="item item05">
                        <a href={() => false}>
                            <img src="logo-forever21.png" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
