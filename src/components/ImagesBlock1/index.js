import React from "react";
import "./index.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImagesBlock1 = ({ tab }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="images-block">
      <h1>ImagesBlock1 {tab}</h1>
      <div className="slider">
        <Slider {...settings}>
          {/* {imageDetails.map((item, idx) => (
            <h3 key={idx}>{item}</h3>
          ))} */}
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Slider>
      </div>
    </div>
  );
};

export default ImagesBlock1;
