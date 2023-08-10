import React from "react";

import "./index.css";

import { useParams } from "react-router-dom";
import ContentBlock from "../ContentBlock";
import ImagesBlock1 from "../ImagesBlock1";

const SubHome = () => {
  const { hometab } = useParams();
  console.log(useParams());
  return (
    <div className="subhome">
      <ContentBlock tab={hometab} />
      <ImagesBlock1 tab={hometab} />
      {/* Home {hometab} */}
    </div>
  );
};

export default SubHome;
