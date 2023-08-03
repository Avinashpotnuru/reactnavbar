import React, { useContext } from "react";

import { store } from "../../App";

const DropImageBoxContent = ({ data }) => {
  const { subTab } = useContext(store);

  //   console.log("subTab=", subTab, "data= ", data);

  const imageFilterData = data.filter((e, idx) => idx === subTab);

  //   console.log("imageFilterData", imageFilterData);

  //   console.log(...imageFilterData);
  const [finalData] = [...imageFilterData];
  //   console.log("finalData", finalData);

  return (
    <div className="dropimageboxdev">
      {finalData.map((val, idx) => (
        <h1>{val}</h1>
      ))}
    </div>
  );
};

export default DropImageBoxContent;
