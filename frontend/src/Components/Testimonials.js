import React from "react";
import Slider from "react-slick";

import "./slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider
      {...settings}
      style={{
        width: "80%",
        padding: "80px",
        marginLeft: "10vw",
        backgroundColour: "#afc1df",
      }}
    >
      <div>
        <img
          src="./av-5.png"
          style={{
            height: "160px",
            width: "160px",
            marginLeft: "24.5vw",
          }}
        />
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <h5>Jhon Doe</h5>
        </div>
      </div>
      <div>
        <img
          src="./av-5.png"
          style={{
            height: "160px",
            width: "160px",
            marginLeft: "24.5vw",
          }}
        />
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <h5>Mitchell Marsh</h5>
        </div>
      </div>
      <div>
        <img
          src="./av-5.png"
          style={{
            height: "160px",
            width: "160px",
            marginLeft: "24.5vw",
          }}
        />
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <h5>Steven Crock</h5>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
