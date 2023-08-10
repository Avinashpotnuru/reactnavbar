import React from "react";
import "./index.css";
import { useParams } from "react-router-dom";
import ContentBlock from "../ContentBlock";
import ImagesBlock1 from "../ImagesBlock1";

const SubContact = () => {
  const { contacttab } = useParams();
  console.log(useParams());
  return (
    <div className="subcontact">
      <ContentBlock tab={contacttab} />
      <ImagesBlock1 tab={contacttab} />
    </div>
  );
};

export default SubContact;
