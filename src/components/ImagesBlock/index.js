import React from "react";
import "./index.css";

const ImagesBlock = ({ imageDetails }) => {
  return (
    <div className="imagesBlock ">
      {imageDetails.map((item, idx) => (
        <h3 key={idx}>{item}</h3>
      ))}
    </div>
  );
};

export default ImagesBlock;
