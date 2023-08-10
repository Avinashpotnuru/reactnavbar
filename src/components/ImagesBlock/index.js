import React from "react";
import "./index.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "react-alice-carousel/lib/alice-carousel.css";

// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";

// const handleDragStart = (e) => e.preventDefault();

const ImagesBlock = ({ imageDetails }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log("imageDetails", imageDetails);
  return (
    <div className="imagesBlock ">
      {/* {imageDetails.map((item, idx) => (
        <h3 key={idx}>{item}</h3>
      ))} */}

      {/* {imageDetails.map((item, idx) => (
        <AliceCarousel mouseTracking items={item} />
      ))} */}
      {/* <div className="Carousel">
        <AliceCarousel
          mouseTracking
          items={imageDetails}
          autoHeight={true}
          disableDotsControls={true}
          stagePadding={{ paddingLeft: 15, paddingRight: 15 }}
          style={{ height: "100px", padding: "20px" }}
        />
      </div> */}

      {/* <AliceCarousel mouseTracking items={items} /> */}
      <div className="slider">
        <Slider {...settings}>
          {imageDetails.map((item, idx) => (
            <h3 key={idx}>{item}</h3>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImagesBlock;
