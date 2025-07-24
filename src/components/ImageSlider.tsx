"use client";
import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider({images,name}:{images: string[], name: string}) {
  
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      waitForAnimate: false,
      autoplay:true
    };
  return (
    <div className="w-full mt-8">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`${name} image ${idx + 1}`}
              className="h-[500px] w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );

}