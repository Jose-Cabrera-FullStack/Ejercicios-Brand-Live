import React from "react";

import Button from "../../../Utils/Buttons";
import "../../../../assets/styles/components/Body.scss";

const PhotoSide = (props) => {
  return (
    <div
      className={`body_inside_left ${
        props.photo ? props.photo : "body_inside_left-photo-1"
      }`}
    >
      <Button />
    </div>
  );
};

export default PhotoSide;
