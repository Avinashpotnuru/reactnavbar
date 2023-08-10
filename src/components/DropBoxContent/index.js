import React, { useContext } from "react";
import "./index.css";
import { store } from "../../App";

const DropBoxContent = ({ data }) => {
  const { subTab } = useContext(store);
  //   console.log("subTab", subTab);
  // console.log("data", data);

  // console.log(data);

  const filterSubContent = data.filter((e, idx) => idx === subTab);
  // console.log("filterSubContent", filterSubContent);

  return (
    <div className="dropboxdev">
      {filterSubContent.map((val) => (
        <h1>{val.title}</h1>
      ))}
    </div>
  );
};

export default DropBoxContent;
