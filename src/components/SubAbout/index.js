import React from "react";
import "./index.css";
import { useParams } from "react-router-dom";
import ContentBlock from "../ContentBlock";
import ImagesBlock1 from "../ImagesBlock1";

const SubAbout = () => {
  const { abouttab } = useParams();
  console.log(useParams());
  return (
    <div className="subabout">
      <ContentBlock tab={abouttab} />
      <ImagesBlock1 tab={abouttab} />
    </div>
  );
};

export default SubAbout;
