import React, { useContext } from "react";

import { store } from "../../App";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "react-alice-carousel/lib/alice-carousel.css";

// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";

const DropImageBoxContent = ({ data }) => {
  const { subTab } = useContext(store);

  //   console.log("subTab=", subTab, "data= ", data);

  const imageFilterData = data.filter((e, idx) => idx === subTab);

  //   console.log("imageFilterData", imageFilterData);

  //   console.log(...imageFilterData);
  const [finalData] = [...imageFilterData];
  console.log("finalData", finalData);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="dropimageboxdev">
      {/* {finalData.map((val, idx) => (
        <h1>{val}</h1>
      ))} */}
      {/* <div className="drop">
        <AliceCarousel
          mouseTracking
          autoHeight={true}
          disableDotsControls={true}
          stagePadding={{ paddingLeft: 15, paddingRight: 15 }}
          style={{ height: "100px", padding: "20px" }}
          items={finalData}
        />
      </div> */}
      <div className="slider">
        <Slider {...settings}>
          {finalData.map((item, idx) => (
            <h3 key={idx}>{item}</h3>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DropImageBoxContent;
