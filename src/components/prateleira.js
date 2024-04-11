import React, { useEffect, useState } from "react";
import Shelf from "./shelf";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Prateleira() {
    const [produtos, setProdutos] = useState([]);

    var settings = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrow: false,
                className: "center",
                centerMode: true,
                infinite: true,
                centerPadding: "40px",
              }
            }
        ]
      };

    useEffect(() => {
        axios.get('https://dummyjson.com/products/search?q=shirt').then((res) => {
            //console.log('res >> ',res.data.products);
            setProdutos(res.data.products);
        }).catch((err) => console.warn(err));
    }, []);

    return (
        <div className="prateleira">
            <div className="tpl-center">
                <h2>As Mais Pedidas</h2>

                <ul className="shelfs">
                    <Slider {...settings}>
                        {produtos.map((produtos) => {
                            return (
                                <Shelf produtos={produtos} />
                            )
                        })}
                    </Slider>
                </ul>
            </div>
        </div>
    );
}
