import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings} className="fullbanner desktop">
        <a href={() => false}>
          <img src="fullbanner.png" alt="" />
        </a>
      
        <a href={() => false}>
          <img src="fullbanner.png" alt="" />
        </a>
      
        <a href={() => false}>
          <img src="fullbanner.png" alt="" />
        </a>
      
        <a href={() => false}>
          <img src="fullbanner.png" alt="" />
        </a>
      
        <a href={() => false}>
          <img src="fullbanner.png" alt="" />
        </a>
      
        <a href={() => false}>
          <img src="fullbanner.png" alt="" />
        </a>
    </Slider>
  );
}