import React from "react";
import "./index.css";

const Content = ({ details }) => {
  //   console.log(details);
  return (
    <div className="content">
      <h1>{details.title}</h1>
    </div>
  );
};

export default Content;
